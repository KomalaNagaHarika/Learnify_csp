import {
  MockTestAttemptResult,
  MockTestHistoryResponse,
  MockTestSessionPayload,
  MockTestSummary,
} from '../types/mockTest';

async function parseJson<T>(res: Response): Promise<T> {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || 'Request failed. Please try again.');
  }
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

  const res = await fetch(`/api/mock-tests?${params.toString()}`);
  const data = await parseJson<{ tests: MockTestSummary[] }>(res);
  return data.tests;
}

export async function startMockTestSession(
  testId: string,
  studentId: string,
  studentName: string
): Promise<MockTestSessionPayload> {
  const res = await fetch(`/api/mock-tests/${encodeURIComponent(testId)}/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId, studentName }),
  });
  const data = await parseJson<{ session: MockTestSessionPayload }>(res);
  return data.session;
}

export async function resumeMockTestSession(
  sessionId: string,
  studentId: string
): Promise<
  | { status: 'active'; session: MockTestSessionPayload }
  | { status: 'submitted'; attempt: MockTestAttemptResult }
> {
  const res = await fetch(
    `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}?studentId=${encodeURIComponent(studentId)}`
  );
  return parseJson(res);
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
  const res = await fetch(
    `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}/progress`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );
  return parseJson(res);
}

export async function submitMockTestSession(
  sessionId: string,
  payload: {
    studentId: string;
    answers: Record<string, string>;
    autoSubmitted?: boolean;
  }
): Promise<MockTestAttemptResult> {
  const res = await fetch(
    `/api/mock-tests/sessions/${encodeURIComponent(sessionId)}/submit`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );
  const data = await parseJson<{ attempt: MockTestAttemptResult }>(res);
  return data.attempt;
}

export async function fetchMockTestHistory(
  studentId: string
): Promise<MockTestHistoryResponse> {
  const res = await fetch(
    `/api/mock-tests/attempts?studentId=${encodeURIComponent(studentId)}`
  );
  return parseJson(res);
}

export async function fetchMockTestAttemptDetail(
  attemptId: string,
  studentId: string
): Promise<MockTestAttemptResult> {
  const res = await fetch(
    `/api/mock-tests/attempts/${encodeURIComponent(attemptId)}?studentId=${encodeURIComponent(studentId)}`
  );
  const data = await parseJson<{ attempt: MockTestAttemptResult }>(res);
  return data.attempt;
}
