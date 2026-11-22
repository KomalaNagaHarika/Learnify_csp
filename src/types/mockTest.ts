import { ClassLevel, PreparationGoal, SubjectName } from './index';

export type MockTestDifficulty = 'Easy' | 'Medium' | 'Hard';

export type MockTestType =
  | 'Chapter-wise'
  | 'Subject-wise'
  | 'Practice Test'
  | 'Full Mock Test';

export interface MockTestSummary {
  id: string;
  title: string;
  foundation: PreparationGoal;
  classLevel: ClassLevel;
  subject: SubjectName | 'All Subjects';
  subjectsIncluded: SubjectName[];
  chapterId?: string;
  chapterTitle?: string;
  testType: MockTestType;
  difficulty: MockTestDifficulty;
  questionCount: number;
  durationMinutes: number;
  totalMarks: number;
  marksPositive: number;
  marksNegative: number;
  examPatternLabel: string;
  instructions: string[];
}

/**
 * Sanitized question sent to the client during an active exam.
 * Intentionally omits correctAnswer and explanation.
 */
export interface PublicExamQuestion {
  id: string;
  questionNumber: number;
  subject: SubjectName;
  chapterId: string;
  chapterTitle: string;
  questionText: string;
  options: [string, string, string, string];
  marksPositive: number;
  marksNegative: number;
  difficulty: MockTestDifficulty;
}

/**
 * Full question stored strictly on the server.
 */
export interface ServerExamQuestion extends PublicExamQuestion {
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface MockTestSessionPayload {
  sessionId: string;
  test: MockTestSummary;
  startedAt: string;
  expiresAt: string;
  remainingSeconds: number;
  questions: PublicExamQuestion[];
  savedAnswers: Record<string, string>;
  savedMarkedForReview: Record<string, boolean>;
  savedVisitedIds: string[];
  savedCurrentIndex: number;
}

export interface SubjectPerformanceItem {
  subject: SubjectName;
  score: number;
  totalMarks: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  totalQuestions: number;
  accuracy: number;
}

export interface ChapterPerformanceItem {
  chapterId: string;
  chapterTitle: string;
  subject: SubjectName;
  score: number;
  totalMarks: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  totalQuestions: number;
  accuracy: number;
}

export interface ReviewQuestionItem {
  id: string;
  questionNumber: number;
  subject: SubjectName;
  chapterId: string;
  chapterTitle: string;
  questionText: string;
  options: [string, string, string, string];
  selectedAnswer: string | null;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  isUnanswered: boolean;
  marksAwarded: number;
  marksPositive: number;
  marksNegative: number;
  explanation: string;
}

export interface MockTestAttemptResult {
  attemptId: string;
  sessionId: string;
  studentId: string;
  studentName: string;
  testId: string;
  testTitle: string;
  foundation: PreparationGoal;
  classLevel: ClassLevel;
  subject: SubjectName | 'All Subjects';
  testType: MockTestType;
  difficulty: MockTestDifficulty;
  score: number;
  totalMarks: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalQuestions: number;
  accuracy: number;
  timeTakenSeconds: number;
  durationSeconds: number;
  submittedAt: string;
  autoSubmitted: boolean;
  subjectPerformance: SubjectPerformanceItem[];
  chapterPerformance: ChapterPerformanceItem[];
  reviewItems: ReviewQuestionItem[];
}

export interface MockTestAttemptListItem {
  attemptId: string;
  testId: string;
  testTitle: string;
  foundation: PreparationGoal;
  classLevel: ClassLevel;
  subject: SubjectName | 'All Subjects';
  testType: MockTestType;
  difficulty: MockTestDifficulty;
  score: number;
  totalMarks: number;
  percentage: number;
  accuracy: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalQuestions: number;
  timeTakenSeconds: number;
  submittedAt: string;
}

export interface MockTestHistoryResponse {
  attempts: MockTestAttemptListItem[];
  summary: {
    totalAttempts: number;
    averagePercentage: number;
    averageAccuracy: number;
    bestPercentage: number;
    improvementDelta: number | null;
    accuracyImprovementDelta: number | null;
  };
}
