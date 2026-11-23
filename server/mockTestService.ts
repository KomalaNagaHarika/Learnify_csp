import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { SubjectName } from '../src/types';
import {
  ChapterPerformanceItem,
  MockTestAttemptListItem,
  MockTestAttemptResult,
  MockTestHistoryResponse,
  MockTestSessionPayload,
  ReviewQuestionItem,
  SubjectPerformanceItem,
} from '../src/types/mockTest';
import { getServerMockTestById, toPublicQuestion } from './mockTestCatalog';

interface ActiveTestSession {
  sessionId: string;
  studentId: string;
  studentName: string;
  testId: string;
  startedAt: string;
  expiresAt: string;
  durationSeconds: number;
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  markedForReview: Record<string, boolean>;
  visitedIds: string[];
  currentIndex: number;
  submitted: boolean;
  attemptId?: string;
}

interface PersistedStore {
  sessions: Record<string, ActiveTestSession>;
  attempts: Record<string, MockTestAttemptResult>;
}

function resolveStorePaths(): { dataDir: string; storePath: string } {
  const preferredDir = process.env.VERCEL
    ? path.join(os.tmpdir(), 'learnify-data')
    : path.resolve(process.cwd(), '.data');
  try {
    if (!fs.existsSync(preferredDir)) {
      fs.mkdirSync(preferredDir, { recursive: true });
    }
    fs.accessSync(preferredDir, fs.constants.W_OK);
    return {
      dataDir: preferredDir,
      storePath: path.resolve(preferredDir, 'mock-test-store.json'),
    };
  } catch {
    const tmpDir = path.join(os.tmpdir(), 'learnify-data');
    return {
      dataDir: tmpDir,
      storePath: path.resolve(tmpDir, 'mock-test-store.json'),
    };
  }
}

const { dataDir: DATA_DIR, storePath: STORE_PATH } = resolveStorePaths();

const VALID_OPTION_SET = new Set(['A', 'B', 'C', 'D']);

let memoryStore: PersistedStore | null = null;

function loadStore(): PersistedStore {
  if (memoryStore) return memoryStore;
  try {
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, 'utf8');
      const parsed = JSON.parse(raw) as PersistedStore;
      if (parsed && typeof parsed === 'object' && parsed.sessions && parsed.attempts) {
        memoryStore = parsed;
        return memoryStore;
      }
    }
  } catch {
    // Initialize fresh store if corrupt or unreadable
  }
  memoryStore = { sessions: {}, attempts: {} };
  return memoryStore;
}

function persistStore(): void {
  const store = loadStore();
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to persist mock test store:', err);
  }
}

export function validateStudentId(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length > 100 || !/^[a-zA-Z0-9._@-]+$/.test(trimmed)) {
    return null;
  }
  return trimmed;
}

function sanitizeAnswers(
  rawAnswers: unknown,
  validQuestionIds: Set<string>
): Record<string, 'A' | 'B' | 'C' | 'D'> {
  const sanitized: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
  if (!rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers)) {
    return sanitized;
  }
  for (const [qId, val] of Object.entries(rawAnswers as Record<string, unknown>)) {
    if (!validQuestionIds.has(qId)) continue;
    if (typeof val !== 'string') continue;
    const upper = val.trim().toUpperCase();
    if (VALID_OPTION_SET.has(upper)) {
      sanitized[qId] = upper as 'A' | 'B' | 'C' | 'D';
    }
  }
  return sanitized;
}

function sanitizeMarkedMap(
  rawMarked: unknown,
  validQuestionIds: Set<string>
): Record<string, boolean> {
  const sanitized: Record<string, boolean> = {};
  if (!rawMarked || typeof rawMarked !== 'object' || Array.isArray(rawMarked)) {
    return sanitized;
  }
  for (const [qId, val] of Object.entries(rawMarked as Record<string, unknown>)) {
    if (validQuestionIds.has(qId) && val === true) {
      sanitized[qId] = true;
    }
  }
  return sanitized;
}

function sanitizeVisitedIds(rawVisited: unknown, validQuestionIds: Set<string>): string[] {
  if (!Array.isArray(rawVisited)) return [];
  const seen = new Set<string>();
  for (const item of rawVisited) {
    if (typeof item === 'string' && validQuestionIds.has(item)) {
      seen.add(item);
    }
  }
  return Array.from(seen);
}

function computeRemainingSeconds(expiresAt: string): number {
  const diffMs = new Date(expiresAt).getTime() - Date.now();
  return Math.max(0, Math.floor(diffMs / 1000));
}

function toSessionPayload(session: ActiveTestSession): MockTestSessionPayload | null {
  const testDef = getServerMockTestById(session.testId);
  if (!testDef) return null;
  return {
    sessionId: session.sessionId,
    test: testDef.summary,
    startedAt: session.startedAt,
    expiresAt: session.expiresAt,
    remainingSeconds: computeRemainingSeconds(session.expiresAt),
    questions: testDef.questions.map(toPublicQuestion),
    savedAnswers: { ...session.answers },
    savedMarkedForReview: { ...session.markedForReview },
    savedVisitedIds: [...session.visitedIds],
    savedCurrentIndex: session.currentIndex,
  };
}

/**
 * Starts a brand-new server-timed exam session.
 * Returns only public sanitized questions (NO correctAnswer or explanation).
 */
export function startTestSession(params: {
  testId: string;
  studentId: string;
  studentName: string;
}): MockTestSessionPayload | { error: string; status: number } {
  const studentId = validateStudentId(params.studentId);
  if (!studentId) {
    return { error: 'Valid authenticated student ID is required.', status: 401 };
  }

  const testDef = getServerMockTestById(params.testId);
  if (!testDef) {
    return { error: 'Mock test not found.', status: 404 };
  }

  const store = loadStore();
  const now = Date.now();
  const durationSeconds = testDef.summary.durationMinutes * 60;
  const sessionId = `sess-${crypto.randomBytes(12).toString('hex')}`;
  const firstQuestionId = testDef.questions[0]?.id;

  const session: ActiveTestSession = {
    sessionId,
    studentId,
    studentName: (params.studentName || 'Student').trim().slice(0, 100),
    testId: testDef.summary.id,
    startedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + durationSeconds * 1000).toISOString(),
    durationSeconds,
    answers: {},
    markedForReview: {},
    visitedIds: firstQuestionId ? [firstQuestionId] : [],
    currentIndex: 0,
    submitted: false,
  };

  store.sessions[sessionId] = session;
  persistStore();

  const payload = toSessionPayload(session);
  if (!payload) {
    return { error: 'Unable to initialize test session.', status: 500 };
  }
  return payload;
}

/**
 * Resumes an existing active session after a page refresh or disconnect.
 * Verifies ownership and returns server-authoritative remaining time.
 */
export function getActiveSession(
  sessionId: string,
  studentIdRaw: string
):
  | { status: 'active'; session: MockTestSessionPayload }
  | { status: 'submitted'; attempt: MockTestAttemptResult }
  | { error: string; status: number } {
  const studentId = validateStudentId(studentIdRaw);
  if (!studentId) {
    return { error: 'Valid student ID is required.', status: 401 };
  }

  const store = loadStore();
  const session = store.sessions[sessionId];
  if (!session) {
    return { error: 'Exam session not found.', status: 404 };
  }
  if (session.studentId !== studentId) {
    return { error: 'You are not authorized to access this exam session.', status: 403 };
  }

  if (session.submitted && session.attemptId && store.attempts[session.attemptId]) {
    return { status: 'submitted', attempt: store.attempts[session.attemptId] };
  }

  // If timer has already expired on the server, finalize immediately
  if (computeRemainingSeconds(session.expiresAt) <= 0) {
    const finalized = submitTestSession({
      sessionId,
      studentId,
      answers: session.answers,
      autoSubmitted: true,
    });
    if ('error' in finalized) return finalized;
    return { status: 'submitted', attempt: finalized };
  }

  const payload = toSessionPayload(session);
  if (!payload) {
    return { error: 'Test definition unavailable.', status: 404 };
  }
  return { status: 'active', session: payload };
}

/**
 * Autosaves student progress (answers, marked-for-review, visited list, current question)
 * without exposing any answer keys or allowing score mutation.
 */
export function saveSessionProgress(params: {
  sessionId: string;
  studentId: string;
  answers?: unknown;
  markedForReview?: unknown;
  visitedIds?: unknown;
  currentIndex?: unknown;
}): { saved: true; remainingSeconds: number } | { error: string; status: number } {
  const studentId = validateStudentId(params.studentId);
  if (!studentId) {
    return { error: 'Valid student ID is required.', status: 401 };
  }

  const store = loadStore();
  const session = store.sessions[params.sessionId];
  if (!session) {
    return { error: 'Exam session not found.', status: 404 };
  }
  if (session.studentId !== studentId) {
    return { error: 'Unauthorized session access.', status: 403 };
  }
  if (session.submitted) {
    return { error: 'This test has already been submitted.', status: 409 };
  }

  const testDef = getServerMockTestById(session.testId);
  if (!testDef) {
    return { error: 'Test definition not found.', status: 404 };
  }
  const validIds = new Set(testDef.questions.map((q) => q.id));

  if (params.answers !== undefined) {
    session.answers = sanitizeAnswers(params.answers, validIds);
  }
  if (params.markedForReview !== undefined) {
    session.markedForReview = sanitizeMarkedMap(params.markedForReview, validIds);
  }
  if (params.visitedIds !== undefined) {
    session.visitedIds = sanitizeVisitedIds(params.visitedIds, validIds);
  }
  if (typeof params.currentIndex === 'number' && Number.isInteger(params.currentIndex)) {
    session.currentIndex = Math.max(0, Math.min(testDef.questions.length - 1, params.currentIndex));
  }

  persistStore();
  return { saved: true, remainingSeconds: computeRemainingSeconds(session.expiresAt) };
}

/**
 * Evaluates and finalizes an exam session strictly on the server.
 * - Idempotent: duplicate submissions return the original immutable attempt without altering scores.
 * - Server-authoritative grading: client can never forge or alter scores, accuracy, or marks.
 */
export function submitTestSession(params: {
  sessionId: string;
  studentId: string;
  answers?: unknown;
  autoSubmitted?: boolean;
}): MockTestAttemptResult | { error: string; status: number } {
  const studentId = validateStudentId(params.studentId);
  if (!studentId) {
    return { error: 'Valid student ID is required.', status: 401 };
  }

  const store = loadStore();
  const session = store.sessions[params.sessionId];
  if (!session) {
    return { error: 'Exam session not found.', status: 404 };
  }
  if (session.studentId !== studentId) {
    return { error: 'Unauthorized session submission.', status: 403 };
  }

  // Idempotent guard: prevent duplicate submissions & score tampering
  if (session.submitted && session.attemptId && store.attempts[session.attemptId]) {
    return store.attempts[session.attemptId];
  }

  const testDef = getServerMockTestById(session.testId);
  if (!testDef) {
    return { error: 'Mock test definition not found.', status: 404 };
  }

  const validIds = new Set(testDef.questions.map((q) => q.id));
  const finalAnswers =
    params.answers !== undefined
      ? sanitizeAnswers(params.answers, validIds)
      : session.answers;

  session.answers = finalAnswers;

  // Server-authoritative elapsed time bounded cleanly between 1 second and full test duration
  const startedMs = new Date(session.startedAt).getTime();
  const elapsedSec = Math.max(1, Math.round((Date.now() - startedMs) / 1000));
  const timeTakenSeconds = Math.min(session.durationSeconds, elapsedSec);

  let score = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const subjectMap = new Map<SubjectName, SubjectPerformanceItem>();
  const chapterMap = new Map<string, ChapterPerformanceItem>();
  const reviewItems: ReviewQuestionItem[] = [];

  for (const q of testDef.questions) {
    const selectedAnswer = finalAnswers[q.id] || null;
    const isUnanswered = !selectedAnswer;
    const isCorrect = !isUnanswered && selectedAnswer === q.correctAnswer;
    const marksAwarded = isUnanswered ? 0 : isCorrect ? q.marksPositive : -q.marksNegative;

    score += marksAwarded;
    if (isUnanswered) {
      unansweredCount++;
    } else if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    // Subject aggregation
    const subjEntry = subjectMap.get(q.subject) || {
      subject: q.subject,
      score: 0,
      totalMarks: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      totalQuestions: 0,
      accuracy: 0,
    };
    subjEntry.score += marksAwarded;
    subjEntry.totalMarks += q.marksPositive;
    subjEntry.totalQuestions += 1;
    if (isUnanswered) subjEntry.unanswered += 1;
    else if (isCorrect) subjEntry.correct += 1;
    else subjEntry.incorrect += 1;
    subjectMap.set(q.subject, subjEntry);

    // Chapter aggregation
    const chapEntry = chapterMap.get(q.chapterId) || {
      chapterId: q.chapterId,
      chapterTitle: q.chapterTitle,
      subject: q.subject,
      score: 0,
      totalMarks: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      totalQuestions: 0,
      accuracy: 0,
    };
    chapEntry.score += marksAwarded;
    chapEntry.totalMarks += q.marksPositive;
    chapEntry.totalQuestions += 1;
    if (isUnanswered) chapEntry.unanswered += 1;
    else if (isCorrect) chapEntry.correct += 1;
    else chapEntry.incorrect += 1;
    chapterMap.set(q.chapterId, chapEntry);

    reviewItems.push({
      id: q.id,
      questionNumber: q.questionNumber,
      subject: q.subject,
      chapterId: q.chapterId,
      chapterTitle: q.chapterTitle,
      questionText: q.questionText,
      options: q.options,
      selectedAnswer,
      correctAnswer: q.correctAnswer,
      isCorrect,
      isUnanswered,
      marksAwarded,
      marksPositive: q.marksPositive,
      marksNegative: q.marksNegative,
      explanation: q.explanation,
    });
  }

  const subjectPerformance = Array.from(subjectMap.values()).map((item) => {
    const attempted = item.correct + item.incorrect;
    return {
      ...item,
      accuracy: attempted > 0 ? Math.round((item.correct / attempted) * 100) : 0,
    };
  });

  const chapterPerformance = Array.from(chapterMap.values()).map((item) => {
    const attempted = item.correct + item.incorrect;
    return {
      ...item,
      accuracy: attempted > 0 ? Math.round((item.correct / attempted) * 100) : 0,
    };
  });

  const attemptedTotal = correctCount + incorrectCount;
  const accuracy = attemptedTotal > 0 ? Math.round((correctCount / attemptedTotal) * 100) : 0;
  const percentage =
    testDef.summary.totalMarks > 0
      ? Math.max(0, Math.round((score / testDef.summary.totalMarks) * 1000) / 10)
      : 0;

  const attemptId = `att-${crypto.randomBytes(10).toString('hex')}`;
  const attempt: MockTestAttemptResult = {
    attemptId,
    sessionId: session.sessionId,
    studentId: session.studentId,
    studentName: session.studentName,
    testId: testDef.summary.id,
    testTitle: testDef.summary.title,
    foundation: testDef.summary.foundation,
    classLevel: testDef.summary.classLevel,
    subject: testDef.summary.subject,
    testType: testDef.summary.testType,
    difficulty: testDef.summary.difficulty,
    score,
    totalMarks: testDef.summary.totalMarks,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    totalQuestions: testDef.questions.length,
    accuracy,
    timeTakenSeconds,
    durationSeconds: session.durationSeconds,
    submittedAt: new Date().toISOString(),
    autoSubmitted: Boolean(params.autoSubmitted),
    subjectPerformance,
    chapterPerformance,
    reviewItems,
  };

  session.submitted = true;
  session.attemptId = attemptId;
  store.attempts[attemptId] = attempt;
  persistStore();

  return attempt;
}

/**
 * Returns immutable completed mock test history and improvement analytics
 * strictly for the requesting student.
 */
export function getStudentTestHistory(
  studentIdRaw: string
): MockTestHistoryResponse | { error: string; status: number } {
  const studentId = validateStudentId(studentIdRaw);
  if (!studentId) {
    return { error: 'Valid student ID is required.', status: 401 };
  }

  const store = loadStore();
  const studentAttempts = Object.values(store.attempts)
    .filter((a) => a.studentId === studentId)
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

  const listItems: MockTestAttemptListItem[] = studentAttempts.map((a) => ({
    attemptId: a.attemptId,
    testId: a.testId,
    testTitle: a.testTitle,
    foundation: a.foundation,
    classLevel: a.classLevel,
    subject: a.subject,
    testType: a.testType,
    difficulty: a.difficulty,
    score: a.score,
    totalMarks: a.totalMarks,
    percentage: a.percentage,
    accuracy: a.accuracy,
    correctCount: a.correctCount,
    incorrectCount: a.incorrectCount,
    unansweredCount: a.unansweredCount,
    totalQuestions: a.totalQuestions,
    timeTakenSeconds: a.timeTakenSeconds,
    submittedAt: a.submittedAt,
  }));

  const totalAttempts = listItems.length;
  const averagePercentage =
    totalAttempts > 0
      ? Math.round((listItems.reduce((acc, item) => acc + item.percentage, 0) / totalAttempts) * 10) /
        10
      : 0;
  const averageAccuracy =
    totalAttempts > 0
      ? Math.round(listItems.reduce((acc, item) => acc + item.accuracy, 0) / totalAttempts)
      : 0;
  const bestPercentage =
    totalAttempts > 0 ? Math.max(...listItems.map((item) => item.percentage)) : 0;

  // Improvement compares latest attempt against earliest completed attempt
  const improvementDelta =
    totalAttempts >= 2
      ? Math.round((listItems[0].percentage - listItems[totalAttempts - 1].percentage) * 10) / 10
      : null;
  const accuracyImprovementDelta =
    totalAttempts >= 2 ? listItems[0].accuracy - listItems[totalAttempts - 1].accuracy : null;

  return {
    attempts: listItems,
    summary: {
      totalAttempts,
      averagePercentage,
      averageAccuracy,
      bestPercentage,
      improvementDelta,
      accuracyImprovementDelta,
    },
  };
}

/**
 * Fetches a single immutable completed attempt for read-only answer review.
 */
export function getStudentAttemptDetail(
  attemptId: string,
  studentIdRaw: string
): MockTestAttemptResult | { error: string; status: number } {
  const studentId = validateStudentId(studentIdRaw);
  if (!studentId) {
    return { error: 'Valid student ID is required.', status: 401 };
  }

  const store = loadStore();
  const attempt = store.attempts[attemptId];
  if (!attempt) {
    return { error: 'Test attempt not found.', status: 404 };
  }
  if (attempt.studentId !== studentId) {
    return { error: 'You are not authorized to view this test attempt.', status: 403 };
  }

  return attempt;
}
