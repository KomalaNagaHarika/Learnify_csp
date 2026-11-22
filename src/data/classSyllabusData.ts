import { Chapter, ClassLevel, PreparationGoal, SubjectName } from '../types';
import { CLASS_6_CHAPTERS } from './syllabus/class6';
import { CLASS_7_CHAPTERS } from './syllabus/class7';
import { CLASS_8_CHAPTERS } from './syllabus/class8';
import { CLASS_9_CHAPTERS } from './syllabus/class9';
import { CLASS_10_CHAPTERS } from './syllabus/class10';
import { CLASS_11_CHAPTERS } from './syllabus/class11';
import { CLASS_12_CHAPTERS } from './syllabus/class12';

// Re-export individual class datasets
export {
  CLASS_6_CHAPTERS,
  CLASS_7_CHAPTERS,
  CLASS_8_CHAPTERS,
  CLASS_9_CHAPTERS,
  CLASS_10_CHAPTERS,
  CLASS_11_CHAPTERS,
  CLASS_12_CHAPTERS
};

export const ALL_CLASS_CHAPTERS: Chapter[] = [
  ...CLASS_6_CHAPTERS,
  ...CLASS_7_CHAPTERS,
  ...CLASS_8_CHAPTERS,
  ...CLASS_9_CHAPTERS,
  ...CLASS_10_CHAPTERS,
  ...CLASS_11_CHAPTERS,
  ...CLASS_12_CHAPTERS
];

/**
 * Returns subjects tailored to the student's preparation goal.
 * - JEE Foundation: Physics, Chemistry, Mathematics
 * - NEET Foundation: Physics, Chemistry, Biology
 */
export function getSubjectsForGoal(goal: PreparationGoal = 'JEE Foundation'): SubjectName[] {
  if (goal === 'NEET Foundation') {
    return ['Physics', 'Chemistry', 'Biology'];
  }
  return ['Physics', 'Chemistry', 'Mathematics'];
}

/**
 * Maps a class name string (or variations like 'Dropper') to the standard array of chapters.
 */
export function getRawChaptersForClass(classLevel: ClassLevel | string): Chapter[] {
  switch (classLevel) {
    case 'Class 6':
      return CLASS_6_CHAPTERS;
    case 'Class 7':
      return CLASS_7_CHAPTERS;
    case 'Class 8':
      return CLASS_8_CHAPTERS;
    case 'Class 9':
      return CLASS_9_CHAPTERS;
    case 'Class 10':
      return CLASS_10_CHAPTERS;
    case 'Class 11':
      return CLASS_11_CHAPTERS;
    case 'Class 12':
    case 'Dropper':
      return CLASS_12_CHAPTERS;
    default:
      return CLASS_10_CHAPTERS;
  }
}

/**
 * Retrieves exactly the chapters matching the student's preparation goal (JEE or NEET)
 * and current class level (Class 6 - Class 12).
 * Every student receives exactly 5 chapters per subject (15 chapters in total).
 */
export function getChaptersForGoalAndClass(
  goal: PreparationGoal = 'JEE Foundation',
  classLevel: ClassLevel | string = 'Class 10',
  subject?: SubjectName | string
): Chapter[] {
  const allInClass = getRawChaptersForClass(classLevel);

  // Filter by goal (chapters with 'Both', or specific to 'JEE Foundation' / 'NEET Foundation')
  let filtered = allInClass.filter((c) => {
    if (!c.preparationGoal || c.preparationGoal === 'Both') {
      // Common subject chapters: Physics & Chemistry are common,
      // but ensure Mathematics is only for JEE and Biology is only for NEET.
      if (c.subject === 'Mathematics') {
        return goal === 'JEE Foundation';
      }
      if (c.subject === 'Biology') {
        return goal === 'NEET Foundation';
      }
      return true;
    }
    return c.preparationGoal === goal;
  });

  if (subject && subject !== 'All') {
    filtered = filtered.filter((c) => c.subject === subject);
  }

  return filtered;
}

/**
 * Legacy compatibility helper. Defaults to JEE Foundation.
 */
export function getChaptersForClass(
  classLevel: ClassLevel | string = 'Class 10',
  subject?: SubjectName | string
): Chapter[] {
  return getChaptersForGoalAndClass('JEE Foundation', classLevel, subject);
}

/**
 * Helper to find a specific chapter by ID from across all syllabuses.
 */
export function getChapterById(chapterId: string): Chapter | undefined {
  return ALL_CLASS_CHAPTERS.find((c) => c.id === chapterId);
}
