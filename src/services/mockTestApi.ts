import {
  MockTestAttemptListItem,
  MockTestAttemptResult,
  MockTestHistoryResponse,
  MockTestSessionPayload,
  MockTestSummary,
} from '../types/mockTest';
import {
  buildHistorySummary,
  isLocalAttemptId,
  isLocalSessionId,
  localAutosaveMockTestProgress,
  localFetchMockTestAttemptDetail,
  localFetchMockTestHistory,
  localFetchMockTests,
  localResumeMockTestSession,
  localStartMockTestSession,
  localSubmitMockTestSession,
} from './localMockTestEngine';

const RAW_API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
const API_BASE_URL = RAW_API_BASE.trim().replace(/\/+$/, '');

function buildApiUrl(path: string): string {
  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
}

class BackendUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BackendUnavailableError';
  }
}

// Track backend availability for the current page session so static hosts (e.g. Vercel SPA)
// do not incur repeated 404 network delays on every filter click.
let backendUnavailableUntil = 0;
const BACKEND_RETRY_COOLDOWN_MS = 60_000;

function isBackendMarkedUnavailable(): boolean {
  return Date.now() < backendUnavailableUntil;
}

function markBackendUnavailable(): void {
  backendUnavailableUntil = Date.now() + BACKEND_RETRY_COOLDOWN_MS;
}

function markBackendAvailable(): void {
  backendUnavailableUntil = 0;
}

async function requestApiJson<T>(
  path: string,
  init?: RequestInit,
  options?: { allow404AsUnavailable?: boolean }
): Promise<T> {
  if (isBackendMarkedUnavailable()) {
    throw new BackendUnavailableError('Backend API is currently unavailable.');
  }

  let res: Response;
  try {
    res = await fetch(buildApiUrl(path), init);
  } catch {
    markBackendUnavailable();
    throw new BackendUnavailableError('Unable to reach backend API.');
  }

  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.toLowerCase().includes('application/json');

  // Static hosts (e.g. Vercel SPA without serverless API) return 404/405 HTML or 200 index.html
  if (!isJson) {
    markBackendUnavailable();
    throw new BackendUnavailableError('Backend API returned a non-JSON response.');
  }

  if (res.status === 405 || res.status === 502 || res.status === 503 || res.status === 504) {
    markBackendUnavailable();
    throw new BackendUnavailableError(`Backend API returned status ${res.status}.`);
  }

  const data = await res.json().catch(() => null);
  if (data === null) {
    markBackendUnavailable();
    throw new BackendUnavailableError('Backend API returned invalid JSON.');
  }

  if (!res.ok) {
    if (res.status === 404 && options?.allow404AsUnavailable) {
      markBackendUnavailable();
      throw new BackendUnavailableError('Mock tests API endpoint not found.');
    }
    const errMsg =
      typeof (data as { error?: unknown }).error === 'string'
        ? (data as { error: string }).error
        : 'Request failed. Please try again.';
    throw new Error(errMsg);
  }

  markBackendAvailable();
  return data as T;
}

export async function fetchMockTests(filters: {
  foundation: string;
  classLevel: string;
  subject: string;
  testType: string;
  difficulty: string;
}): Promise<MockTestSummary[]> {
  const params = new URLSearchParams();
  if (filters.foundation) params.set('foundation', filters.foundation);
  if (filters.classLevel) params.set('classLevel', filters.classLevel);
  if (filters.subject) params.set('subject', filters.subject);
  if (filters.testType) params.set('testType', filters.testType);
  if (filters.difficulty) params.set('difficulty', filters.difficulty);

  try {
    const data = await requestApiJson<{ tests?: MockTestSummary[] }>(
      `/api/mock-tests?${params.toString()}`,
      undefined,
      { allow404AsUnavailable: true }
    );
    if (!Array.isArray(data.tests)) {
      throw new BackendUnavailableError('Unexpected mock tests payload.');
    }
    return data.tests;
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localFetchMockTests(filters);
    }
    throw err;
  }
}

export async function startMockTestSession(
  testId: string,
  studentId: string,
  studentName: string
): Promise<MockTestSessionPayload> {
  try {
    const data = await requestApiJson<{ session?: MockTestSessionPayload }>(
      `/api/mock-tests/${encodeURIComponent(testId)}/start`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, studentName }),
      },
      { allow404AsUnavailable: true }
    );
    if (!data.session) {
      throw new BackendUnavailableError('Unexpected start session payload.');
    }
    return data.session;
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localStartMockTestSession(testId, studentId, studentName);
    }
    throw err;
  }
}

export async function resumeMockTestSession(
  sessionId: string,
  studentId: string
): Promise<
  | { status: 'active'; session: MockTestSessionPayload }
  | { status: 'submitted'; attempt: MockTestAttemptResult }
> {
  if (isLocalSessionId(sessionId)) {
    return localResumeMockTestSession(sessionId, studentId);
  }

  try {
    return await requestApiJson(
      `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}?studentId=${encodeURIComponent(studentId)}`
    );
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localResumeMockTestSession(sessionId, studentId);
    }
    throw err;
  }
}

export async function autosaveMockTestProgress(
  sessionId: string,
  payload: {
    studentId: string;
    answers: Record<string, string>;
    markedForReview: Record<string, boolean>;
    visitedIds: string[];
    currentIndex: number;
  }
): Promise<{ saved: true; remainingSeconds: number }> {
  if (isLocalSessionId(sessionId)) {
    return localAutosaveMockTestProgress(sessionId, payload);
  }

  try {
    return await requestApiJson(
      `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}/progress`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localAutosaveMockTestProgress(sessionId, payload);
    }
    throw err;
  }
}

export async function submitMockTestSession(
  sessionId: string,
  payload: {
    studentId: string;
    answers: Record<string, string>;
    autoSubmitted?: boolean;
  }
): Promise<MockTestAttemptResult> {
  if (isLocalSessionId(sessionId)) {
    return localSubmitMockTestSession(sessionId, payload);
  }

  try {
    const data = await requestApiJson<{ attempt?: MockTestAttemptResult }>(
      `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}/submit`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    if (!data.attempt) {
      throw new BackendUnavailableError('Unexpected submit payload.');
    }
    return data.attempt;
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localSubmitMockTestSession(sessionId, payload);
    }
    throw err;
  }
}

export async function fetchMockTestHistory(
  studentId: string
): Promise<MockTestHistoryResponse> {
  const localHistory = localFetchMockTestHistory(studentId);

  try {
    const serverHistory = await requestApiJson<MockTestHistoryResponse>(
      `/api/mock-tests/attempts?studentId=${encodeURIComponent(studentId)}`,
      undefined,
      { allow404AsUnavailable: true }
    );
    if (!Array.isArray(serverHistory.attempts)) {
      return localHistory;
    }

    if (localHistory.attempts.length === 0) {
      return serverHistory;
    }

    // Merge server & local attempts cleanly without duplicates
    const byId = new Map<string, MockTestAttemptListItem>();
    for (const item of serverHistory.attempts) {
      byId.set(item.attemptId, item);
    }
    for (const item of localHistory.attempts) {
      if (!byId.has(item.attemptId)) {
        byId.set(item.attemptId, item);
      }
    }
    return buildHistorySummary(Array.from(byId.values()));
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localHistory;
    }
    throw err;
  }
}

export async function fetchMockTestAttemptDetail(
  attemptId: string,
  studentId: string
): Promise<MockTestAttemptResult> {
  if (isLocalAttemptId(attemptId)) {
    return localFetchMockTestAttemptDetail(attemptId, studentId);
  }

  try {
    const data = await requestApiJson<{ attempt?: MockTestAttemptResult }>(
      `/api/mock-tests/attempts/${encodeURIComponent(attemptId)}?studentId=${encodeURIComponent(studentId)}`
    );
    if (!data.attempt) {
      throw new BackendUnavailableError('Unexpected attempt detail payload.');
    }
    return data.attempt;
  } catch (err) {
    if (err instanceof BackendUnavailableError) {
      return localFetchMockTestAttemptDetail(attemptId, studentId);
    }
    throw err;
  }
}
