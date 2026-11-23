import { SubjectName } from '../types';
import {
  ChapterPerformanceItem,
  MockTestAttemptListItem,
  MockTestAttemptResult,
  MockTestHistoryResponse,
  MockTestSessionPayload,
  MockTestSummary,
  ReviewQuestionItem,
  SubjectPerformanceItem,
} from '../types/mockTest';
import {
  getServerMockTestById,
  listFilteredMockTests,
  toPublicQuestion,
} from '../data/mockTestCatalog';

interface LocalActiveSession {
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

interface LocalMockStore {
  sessions: Record<string, LocalActiveSession>;
  attempts: Record<string, MockTestAttemptResult>;
}

const STORAGE_KEY = 'learnify_local_mock_test_store_v1';
const VALID_OPTIONS = new Set(['A', 'B', 'C', 'D']);

function generateLocalId(prefix: string): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID().replace(/-/g, '').slice(0, 20)}`;
  }
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function loadLocalStore(): LocalMockStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as LocalMockStore;
      if (parsed && typeof parsed === 'object' && parsed.sessions && parsed.attempts) {
        return parsed;
      }
    }
  } catch {
    // Ignore storage parse failure and initialize empty store
  }
  return { sessions: {}, attempts: {} };
}

function saveLocalStore(store: LocalMockStore): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

function sanitizeAnswers(
  rawAnswers: unknown,
  validIds: Set<string>
): Record<string, 'A' | 'B' | 'C' | 'D'> {
  const sanitized: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
  if (!rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers)) {
    return sanitized;
  }
  for (const [qId, val] of Object.entries(rawAnswers as Record<string, unknown>)) {
    if (!validIds.has(qId) || typeof val !== 'string') continue;
    const upper = val.trim().toUpperCase();
    if (VALID_OPTIONS.has(upper)) {
      sanitized[qId] = upper as 'A' | 'B' | 'C' | 'D';
    }
  }
  return sanitized;
}

function sanitizeMarkedMap(
  rawMarked: unknown,
  validIds: Set<string>
): Record<string, boolean> {
  const sanitized: Record<string, boolean> = {};
  if (!rawMarked || typeof rawMarked !== 'object' || Array.isArray(rawMarked)) {
    return sanitized;
  }
  for (const [qId, val] of Object.entries(rawMarked as Record<string, unknown>)) {
    if (validIds.has(qId) && val === true) {
      sanitized[qId] = true;
    }
  }
  return sanitized;
}

function sanitizeVisitedIds(rawVisited: unknown, validIds: Set<string>): string[] {
  if (!Array.isArray(rawVisited)) return [];
  const seen = new Set<string>();
  for (const item of rawVisited) {
    if (typeof item === 'string' && validIds.has(item)) {
      seen.add(item);
    }
  }
  return Array.from(seen);
}

function computeRemainingSeconds(expiresAt: string): number {
  const diffMs = new Date(expiresAt).getTime() - Date.now();
  return Math.max(0, Math.floor(diffMs / 1000));
}

function toSessionPayload(session: LocalActiveSession): MockTestSessionPayload {
  const testDef = getServerMockTestById(session.testId);
  if (!testDef) {
    throw new Error('Mock test definition not found.');
  }
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

export function isLocalSessionId(sessionId: string): boolean {
  return sessionId.startsWith('local-sess-');
}

export function isLocalAttemptId(attemptId: string): boolean {
  return attemptId.startsWith('local-att-');
}

export function localFetchMockTests(filters: {
  foundation: string;
  classLevel: string;
  subject: string;
  testType: string;
  difficulty: string;
}): MockTestSummary[] {
  return listFilteredMockTests(filters);
}

export function localStartMockTestSession(
  testId: string,
  studentId: string,
  studentName: string
): MockTestSessionPayload {
  const testDef = getServerMockTestById(testId);
  if (!testDef) {
    throw new Error('Mock test not found.');
  }

  const store = loadLocalStore();
  const now = Date.now();
  const durationSeconds = testDef.summary.durationMinutes * 60;
  const sessionId = generateLocalId('local-sess');
  const firstQuestionId = testDef.questions[0]?.id;

  const session: LocalActiveSession = {
    sessionId,
    studentId,
    studentName: (studentName || 'Student').trim().slice(0, 100),
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
  saveLocalStore(store);
  return toSessionPayload(session);
}

export function localResumeMockTestSession(
  sessionId: string,
  studentId: string
):
  | { status: 'active'; session: MockTestSessionPayload }
  | { status: 'submitted'; attempt: MockTestAttemptResult } {
  const store = loadLocalStore();
  const session = store.sessions[sessionId];
  if (!session) {
    throw new Error('Exam session not found.');
  }
  if (session.studentId !== studentId) {
    throw new Error('You are not authorized to access this exam session.');
  }

  if (session.submitted && session.attemptId && store.attempts[session.attemptId]) {
    return { status: 'submitted', attempt: store.attempts[session.attemptId] };
  }

  if (computeRemainingSeconds(session.expiresAt) <= 0) {
    const attempt = localSubmitMockTestSession(sessionId, {
      studentId,
      answers: session.answers,
      autoSubmitted: true,
    });
    return { status: 'submitted', attempt };
  }

  return { status: 'active', session: toSessionPayload(session) };
}

export function localAutosaveMockTestProgress(
  sessionId: string,
  payload: {
    studentId: string;
    answers: Record<string, string>;
    markedForReview: Record<string, boolean>;
    visitedIds: string[];
    currentIndex: number;
  }
): { saved: true; remainingSeconds: number } {
  const store = loadLocalStore();
  const session = store.sessions[sessionId];
  if (!session) {
    throw new Error('Exam session not found.');
  }
  if (session.studentId !== payload.studentId) {
    throw new Error('Unauthorized session access.');
  }
  if (session.submitted) {
    throw new Error('This test has already been submitted.');
  }

  const testDef = getServerMockTestById(session.testId);
  if (!testDef) {
    throw new Error('Mock test definition not found.');
  }

  const validIds = new Set(testDef.questions.map((q) => q.id));
  session.answers = sanitizeAnswers(payload.answers, validIds);
  session.markedForReview = sanitizeMarkedMap(payload.markedForReview, validIds);
  session.visitedIds = sanitizeVisitedIds(payload.visitedIds, validIds);
  if (typeof payload.currentIndex === 'number' && Number.isInteger(payload.currentIndex)) {
    session.currentIndex = Math.max(0, Math.min(testDef.questions.length - 1, payload.currentIndex));
  }

  saveLocalStore(store);
  return { saved: true, remainingSeconds: computeRemainingSeconds(session.expiresAt) };
}

export function localSubmitMockTestSession(
  sessionId: string,
  payload: {
    studentId: string;
    answers: Record<string, string>;
    autoSubmitted?: boolean;
  }
): MockTestAttemptResult {
  const store = loadLocalStore();
  const session = store.sessions[sessionId];
  if (!session) {
    throw new Error('Exam session not found.');
  }
  if (session.studentId !== payload.studentId) {
    throw new Error('Unauthorized session submission.');
  }

  // Idempotent guard: never recalculate or duplicate an already submitted attempt
  if (session.submitted && session.attemptId && store.attempts[session.attemptId]) {
    return store.attempts[session.attemptId];
  }

  const testDef = getServerMockTestById(session.testId);
  if (!testDef) {
    throw new Error('Mock test definition not found.');
  }

  const validIds = new Set(testDef.questions.map((q) => q.id));
  const finalAnswers = sanitizeAnswers(payload.answers ?? session.answers, validIds);
  session.answers = finalAnswers;

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

  const attemptId = generateLocalId('local-att');
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
    autoSubmitted: Boolean(payload.autoSubmitted),
    subjectPerformance,
    chapterPerformance,
    reviewItems,
  };

  session.submitted = true;
  session.attemptId = attemptId;
  store.attempts[attemptId] = attempt;
  saveLocalStore(store);

  return attempt;
}

export function buildHistorySummary(listItems: MockTestAttemptListItem[]): MockTestHistoryResponse {
  const sorted = [...listItems].sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );

  const totalAttempts = sorted.length;
  const averagePercentage =
    totalAttempts > 0
      ? Math.round((sorted.reduce((acc, item) => acc + item.percentage, 0) / totalAttempts) * 10) / 10
      : 0;
  const averageAccuracy =
    totalAttempts > 0
      ? Math.round(sorted.reduce((acc, item) => acc + item.accuracy, 0) / totalAttempts)
      : 0;
  const bestPercentage =
    totalAttempts > 0 ? Math.max(...sorted.map((item) => item.percentage)) : 0;

  const improvementDelta =
    totalAttempts >= 2
      ? Math.round((sorted[0].percentage - sorted[totalAttempts - 1].percentage) * 10) / 10
      : null;
  const accuracyImprovementDelta =
    totalAttempts >= 2 ? sorted[0].accuracy - sorted[totalAttempts - 1].accuracy : null;

  return {
    attempts: sorted,
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

export function localFetchMockTestHistory(studentId: string): MockTestHistoryResponse {
  const store = loadLocalStore();
  const listItems: MockTestAttemptListItem[] = Object.values(store.attempts)
    .filter((a) => a.studentId === studentId)
    .map((a) => ({
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

  return buildHistorySummary(listItems);
}

export function localFetchMockTestAttemptDetail(
  attemptId: string,
  studentId: string
): MockTestAttemptResult {
  const store = loadLocalStore();
  const attempt = store.attempts[attemptId];
  if (!attempt) {
    throw new Error('Test attempt not found.');
  }
  if (attempt.studentId !== studentId) {
    throw new Error('You are not authorized to view this test attempt.');
  }
  return attempt;
}
