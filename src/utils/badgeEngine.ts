import {
  AchievementBadgeId,
  ClassLevel,
  EarnedBadge,
  PreparationGoal,
  StudentProgress,
  TestAttempt,
} from '../types';
import { getChaptersForGoalAndClass, getSubjectsForGoal } from '../data/classSyllabusData';

export interface BadgeDefinition {
  id: AchievementBadgeId;
  name: string;
  description: string;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: 'first-step',
    name: 'First Step',
    description: 'Completed your first chapter on Learnify.',
  },
  {
    id: 'quiz-star',
    name: 'Quiz Star',
    description: 'Completed a practice quiz to test your understanding.',
  },
  {
    id: 'top-scorer',
    name: 'Top Scorer',
    description: 'Scored 90% or higher in a mock test.',
  },
  {
    id: 'consistent',
    name: 'Consistent',
    description: 'Studied for 7 consecutive days.',
  },
  {
    id: 'learnify-star',
    name: 'Learnify Star',
    description: 'Completed all chapters in one subject.',
  },
];

export const TOTAL_BADGES = BADGE_DEFINITIONS.length;

export const BADGE_MAP: Record<AchievementBadgeId, BadgeDefinition> = BADGE_DEFINITIONS.reduce(
  (acc, badge) => {
    acc[badge.id] = badge;
    return acc;
  },
  {} as Record<AchievementBadgeId, BadgeDefinition>
);

export function filterValidBadges(badges: unknown): EarnedBadge[] {
  if (!Array.isArray(badges)) return [];
  const seen = new Set<AchievementBadgeId>();
  const valid: EarnedBadge[] = [];

  for (const item of badges) {
    if (
      item &&
      typeof item === 'object' &&
      'id' in item &&
      'earnedAt' in item &&
      typeof item.id === 'string' &&
      typeof item.earnedAt === 'string' &&
      item.id in BADGE_MAP &&
      !seen.has(item.id as AchievementBadgeId)
    ) {
      const id = item.id as AchievementBadgeId;
      seen.add(id);
      valid.push({ id, earnedAt: item.earnedAt });
    }
  }

  return valid;
}

const ALL_CLASSES: ClassLevel[] = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

const ALL_GOALS: PreparationGoal[] = ['JEE Foundation', 'NEET Foundation'];

/**
 * Returns local calendar date string YYYY-MM-DD for accurate consecutive-day streak tracking.
 */
export function getLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Computes consecutive study days ending on the latest recorded date.
 */
export function calculateConsecutiveDays(studyDates: string[] = []): number {
  if (!studyDates.length) return 0;

  const uniqueSorted = Array.from(new Set(studyDates)).sort();
  let streak = 1;
  let maxStreak = 1;

  for (let i = 1; i < uniqueSorted.length; i++) {
    const prev = new Date(`${uniqueSorted[i - 1]}T00:00:00`);
    const curr = new Date(`${uniqueSorted[i]}T00:00:00`);
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak += 1;
      if (streak > maxStreak) maxStreak = streak;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  return maxStreak;
}

/**
 * Records today's study activity date and computes the updated consecutive streak.
 */
export function recordStudyActivityDate(
  existingDates: string[] = [],
  existingStreak: number = 0
): { studyDates: string[]; streakDays: number } {
  const today = getLocalDateKey();
  const dateSet = new Set(existingDates);
  const alreadyRecordedToday = dateSet.has(today);
  dateSet.add(today);

  const studyDates = Array.from(dateSet).sort();
  if (alreadyRecordedToday) {
    return {
      studyDates,
      streakDays: Math.max(existingStreak, calculateConsecutiveDays(studyDates)),
    };
  }

  // Check if yesterday was recorded to extend existing streak cleanly
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayKey = getLocalDateKey(yesterdayDate);

  const computedFromDates = calculateConsecutiveDays(studyDates);
  const nextStreak = dateSet.has(yesterdayKey)
    ? Math.max(existingStreak + 1, computedFromDates)
    : Math.max(existingStreak, computedFromDates, 1);

  return {
    studyDates,
    streakDays: nextStreak,
  };
}

/**
 * Returns true if the student has completed all chapters in at least one subject
 * (for any class from Class 6 to Class 12 across JEE or NEET Foundation).
 */
export function hasCompletedAllChaptersInAnySubject(completedChapterIds: string[]): boolean {
  if (!completedChapterIds || completedChapterIds.length === 0) return false;
  const completedSet = new Set(completedChapterIds);

  for (const goal of ALL_GOALS) {
    const subjects = getSubjectsForGoal(goal);
    for (const cls of ALL_CLASSES) {
      for (const subject of subjects) {
        const subjectChapters = getChaptersForGoalAndClass(goal, cls, subject);
        if (
          subjectChapters.length > 0 &&
          subjectChapters.every((chapter) => completedSet.has(chapter.id))
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

export interface ServerAttemptMetric {
  percentage: number;
  testType?: string;
}

/**
 * Evaluates all 5 Learnify badge conditions strictly against actual student data.
 */
export function evaluateEligibleBadgeIds(params: {
  progress: StudentProgress;
  testAttempts: TestAttempt[];
  serverAttempts?: ServerAttemptMetric[];
}): AchievementBadgeId[] {
  const { progress, testAttempts, serverAttempts = [] } = params;
  const eligible: AchievementBadgeId[] = [];

  const completedChapterIds = progress.completedChapterIds || [];
  const completedCount = completedChapterIds.length;
  const quizzesCompleted = progress.practiceQuizzesCompleted || 0;
  const consecutiveStreak = Math.max(
    progress.streakDays || 0,
    calculateConsecutiveDays(progress.studyDates || [])
  );

  // Check mock test percentages from both local and server-evaluated attempts
  const localPercentages = testAttempts.map((attempt) =>
    attempt.totalMarks > 0 ? (attempt.score / attempt.totalMarks) * 100 : 0
  );
  const serverPercentages = serverAttempts.map((attempt) => attempt.percentage || 0);
  const bestMockTestPct = Math.max(0, ...localPercentages, ...serverPercentages);

  const hasPracticeTestAttempt =
    testAttempts.some(
      (a) =>
        a.examinationType === 'Practice Test' ||
        a.examinationType === 'Chapter Quiz'
    ) ||
    serverAttempts.some((a) => a.testType === 'Practice Test');

  // 1. First Step – completing the first chapter
  if (completedCount >= 1) {
    eligible.push('first-step');
  }

  // 2. Quiz Star – completing a practice quiz
  if (quizzesCompleted >= 1 || hasPracticeTestAttempt) {
    eligible.push('quiz-star');
  }

  // 3. Top Scorer – scoring 90% or higher in a mock test
  if (bestMockTestPct >= 90) {
    eligible.push('top-scorer');
  }

  // 4. Consistent – studying for 7 consecutive days
  if (consecutiveStreak >= 7) {
    eligible.push('consistent');
  }

  // 5. Learnify Star – completing all chapters in one subject
  if (hasCompletedAllChaptersInAnySubject(completedChapterIds)) {
    eligible.push('learnify-star');
  }

  return eligible;
}

/**
 * Merges newly eligible badge IDs into existing earned badges without duplicates
 * and preserves original earnedAt timestamps.
 */
export function mergeEarnedBadges(
  existing: EarnedBadge[] = [],
  eligibleIds: AchievementBadgeId[],
  nowIso: string = new Date().toISOString()
): { updated: EarnedBadge[]; newlyAwarded: EarnedBadge[] } {
  const seen = new Set<AchievementBadgeId>();
  const dedupedExisting: EarnedBadge[] = [];

  for (const badge of existing) {
    if (!seen.has(badge.id) && BADGE_MAP[badge.id]) {
      seen.add(badge.id);
      dedupedExisting.push(badge);
    }
  }

  const newlyAwarded: EarnedBadge[] = [];
  for (const id of eligibleIds) {
    if (!seen.has(id) && BADGE_MAP[id]) {
      seen.add(id);
      const earned: EarnedBadge = { id, earnedAt: nowIso };
      newlyAwarded.push(earned);
    }
  }

  if (newlyAwarded.length === 0) {
    return { updated: dedupedExisting, newlyAwarded: [] };
  }

  return {
    updated: [...dedupedExisting, ...newlyAwarded],
    newlyAwarded,
  };
}

/**
 * Formats an ISO earnedAt timestamp into a clean human-readable date string.
 */
export function formatBadgeEarnedDate(isoDate: string): string {
  try {
    const parsed = new Date(isoDate);
    if (Number.isNaN(parsed.getTime())) return 'Earned recently';
    return `Earned ${parsed.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`;
  } catch {
    return 'Earned recently';
  }
}
