export type UserRole = 'student' | 'teacher' | 'admin';

export type PreparationGoal = 'JEE Foundation' | 'NEET Foundation';

export type ClassLevel =
  | 'Class 6'
  | 'Class 7'
  | 'Class 8'
  | 'Class 9'
  | 'Class 10'
  | 'Class 11'
  | 'Class 12'
  | 'Dropper';

export type SchoolType = 'Government School' | 'Private School' | 'Other';

export type TargetExam = 'JEE Main' | 'JEE Advanced' | 'NEET' | 'Both';

export type PreferredLanguage = 'English' | 'Telugu' | 'Hindi';

export interface UserProfile {
  uid: string;
  fullName: string;
  email: string;
  role: UserRole;
  preparationGoal?: PreparationGoal;
  classLevel: ClassLevel;
  schoolType: SchoolType;
  targetExam: TargetExam;
  preferredLanguage: PreferredLanguage;
  district?: string;
  state?: string;
  createdAt: string;
  isDemo?: boolean;
}

export type SubjectName = 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology' | 'Bridge Foundation';

export type ChapterStage = 'foundation' | 'intermediate' | 'advanced';

export type LearningPriority = 'High priority' | 'Medium priority' | 'Basic priority';

export interface ChapterStudyMaterial {
  introduction: string;
  basicConcepts: string[];
  detailedExplanations: {
    topic: string;
    explanation: string;
    diagram?: string;
  }[];
  definitions: string[];
  formulas: { name: string; formula: string; explanation: string; units?: string }[];
  solvedExamples: { question: string; solution: string; keyInsight: string; difficulty?: 'beginner' | 'intermediate' | 'advanced' }[];
  realLifeExamples: string[];
  quickRevision: string[];
}

export interface Chapter {
  id: string;
  preparationGoal?: PreparationGoal | 'Both';
  subject: SubjectName;
  category?: string; // e.g. "Physical Chemistry", "Mechanics", "Calculus"
  order: number;
  title: string;
  stage: ChapterStage;
  classLevel: string;
  priority?: LearningPriority;
  prerequisite?: string;
  topics?: string[];
  totalConcepts: number;
  durationHours: number;
  description: string;
  introduction?: string;
  summaryNotes: string;
  definitions?: string[];
  formulas: { name: string; formula: string; explanation: string; units?: string }[];
  solvedExamples: { question: string; solution: string; keyInsight: string; difficulty?: 'beginner' | 'intermediate' | 'advanced' }[];
  practiceByTier?: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
  quizQuestionIds: string[];
  practiceQuestions?: Question[];
  chapterTest?: {
    durationMinutes: number;
    totalMarks: number;
    passingScore?: number;
    questions: Question[];
  };
  studyMaterial?: ChapterStudyMaterial;
}

export type QuestionType = 'mcq_single' | 'mcq_multiple' | 'numerical';

export type QuestionDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: string;
  subject: SubjectName;
  chapterId: string;
  chapterTitle: string;
  questionType: QuestionType;
  difficulty: QuestionDifficulty;
  questionText: string;
  options?: string[]; // for mcq
  correctAnswer: string; // "A", "B", "A,C", or numerical value like "4.5"
  explanation: string;
  sourceType: 'JEE Main PYQ' | 'JEE Advanced PYQ' | 'Original Practice' | 'Bridge Concept' | 'NEET PYQ';
  marksPositive: number;
  marksNegative: number;
}

export type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_marked_for_review';

export interface MockTest {
  id: string;
  title: string;
  examinationType: 'JEE Main' | 'JEE Advanced' | 'Subject Test' | 'Chapter Quiz' | 'PYQ';
  durationMinutes: number;
  totalMarks: number;
  questionIds: string[];
  description: string;
  instructions: string[];
  passingScore?: number;
}

export interface TestAttempt {
  attemptId: string;
  studentId: string;
  testId: string;
  testTitle: string;
  examinationType: string;
  score: number;
  totalMarks: number;
  accuracy: number;
  timeTakenSeconds: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  subjectScores: {
    Physics: { score: number; total: number };
    Chemistry: { score: number; total: number };
    Mathematics?: { score: number; total: number };
    Biology?: { score: number; total: number };
  };
  answers: Record<string, string>;
  submittedAt: string;
}

export type AchievementBadgeId =
  | 'first-step'
  | 'quiz-star'
  | 'top-scorer'
  | 'consistent'
  | 'learnify-star';

export interface EarnedBadge {
  id: AchievementBadgeId;
  earnedAt: string;
}

export interface StudentProgress {
  studentId: string;
  completedChapterIds: string[];
  practiceQuestionsAttempted: number;
  practiceQuestionsCorrect: number;
  practiceQuizzesCompleted?: number;
  studyHours: number;
  streakDays: number;
  studyDates?: string[];
  dailyGoalHours: number;
  bookmarkedMaterialIds: string[];
  bookmarkedQuestionIds: string[];
  strongChapters: string[];
  weakChapters: string[];
  earnedBadges?: EarnedBadge[];
}

export interface StudyTask {
  id: string;
  title: string;
  subject: SubjectName;
  targetDate: string;
  estimatedMinutes: number;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface StudyMaterial {
  id: string;
  title: string;
  subject: SubjectName;
  chapterTitle: string;
  classLevel: string;
  materialType: 'notes' | 'formula_sheet' | 'pyq_booklet' | 'worksheet';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  fileSize: string;
  downloadCount: number;
  description: string;
  contentSnippet: string;
  downloadFileName: string;
}

export interface FormulaCard {
  id: string;
  subject: SubjectName;
  chapter: string;
  title: string;
  formula: string;
  explanation: string;
  units: string;
  status: 'easy' | 'revision' | 'hard';
}

export interface ScholarshipItem {
  id: string;
  title: string;
  provider: string;
  category: string;
  eligibility: string;
  benefits: string;
  deadline: string;
  officialUrl: string;
  verifiedDate: string;
}

export interface DailyChallengeQuestion {
  id: string;
  subject: SubjectName;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Bonus Advanced';
  questionText: string;
  options: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

export interface RecommendationItem {
  id: string;
  topic: string;
  subject: SubjectName;
  reason: string;
  suggestedAction: string;
  targetTab: string;
}
