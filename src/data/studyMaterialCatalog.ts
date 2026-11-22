import { Chapter, ClassLevel, PreparationGoal, SubjectName } from '../types';
import { ALL_CLASS_CHAPTERS, getSubjectsForGoal } from './classSyllabusData';
import { getChapterStudyMaterial } from './studyMaterialsProvider';
import type { StudySectionId } from '../components/courses/StudyMaterialViewer';

export type BiologyBranch = 'Botany' | 'Zoology' | 'Botany & Zoology';

export type LibraryMaterialType =
  | 'all'
  | 'explanation'
  | 'definitions'
  | 'formulas'
  | 'examples'
  | 'real-life';

export const LIBRARY_MATERIAL_TYPE_OPTIONS: {
  id: LibraryMaterialType;
  label: string;
  cardBadge: string;
  targetSection: StudySectionId;
}[] = [
  {
    id: 'all',
    label: 'All Material Types',
    cardBadge: 'Complete Study Material',
    targetSection: 'explanation',
  },
  {
    id: 'explanation',
    label: 'Chapter Explanation',
    cardBadge: 'Chapter Explanation',
    targetSection: 'explanation',
  },
  {
    id: 'definitions',
    label: 'Important Definitions',
    cardBadge: 'Important Definitions',
    targetSection: 'definitions',
  },
  {
    id: 'formulas',
    label: 'Important Formulas',
    cardBadge: 'Formula Sheet',
    targetSection: 'formulas',
  },
  {
    id: 'examples',
    label: 'Solved Examples',
    cardBadge: 'Solved Examples',
    targetSection: 'examples',
  },
  {
    id: 'real-life',
    label: 'Real-Life Examples',
    cardBadge: 'Real-Life Examples',
    targetSection: 'real-life',
  },
];

export const LIBRARY_CLASSES: readonly ClassLevel[] = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
] as const;

/**
 * Classifies every Biology chapter across Classes 6-12 into Botany, Zoology,
 * or Botany & Zoology (for foundational topics spanning both plant and animal life).
 */
export const BIOLOGY_BRANCH_MAP: Record<string, BiologyBranch> = {
  // Class 6
  'c6-bio-01': 'Botany & Zoology',
  'c6-bio-02': 'Zoology',
  'c6-bio-03': 'Botany',
  'c6-bio-04': 'Zoology',
  'c6-bio-05': 'Botany & Zoology',
  // Class 7
  'c7-bio-01': 'Botany',
  'c7-bio-02': 'Zoology',
  'c7-bio-03': 'Zoology',
  'c7-bio-04': 'Botany & Zoology',
  'c7-bio-05': 'Botany',
  // Class 8
  'c8-bio-01': 'Botany',
  'c8-bio-02': 'Botany',
  'c8-bio-03': 'Botany & Zoology',
  'c8-bio-04': 'Botany & Zoology',
  'c8-bio-05': 'Zoology',
  // Class 9
  'c9-bio-01': 'Botany & Zoology',
  'c9-bio-02': 'Botany & Zoology',
  'c9-bio-03': 'Botany & Zoology',
  'c9-bio-04': 'Zoology',
  'c9-bio-05': 'Botany',
  // Class 10
  'c10-bio-01': 'Botany & Zoology',
  'c10-bio-02': 'Zoology',
  'c10-bio-03': 'Botany & Zoology',
  'c10-bio-04': 'Botany & Zoology',
  'c10-bio-05': 'Botany',
  // Class 11
  'c11-bio-01': 'Botany',
  'c11-bio-02': 'Botany & Zoology',
  'c11-bio-03': 'Botany & Zoology',
  'c11-bio-04': 'Botany',
  'c11-bio-05': 'Zoology',
  // Class 12
  'c12-bio-01': 'Zoology',
  'c12-bio-02': 'Botany',
  'c12-bio-03': 'Botany',
  'c12-bio-04': 'Zoology',
  'c12-bio-05': 'Botany',
};

export interface LibraryMaterialEntry {
  id: string;
  chapter: Chapter;
  classLevel: ClassLevel;
  classOrder: number;
  subject: SubjectName;
  biologyBranch?: BiologyBranch;
  chapterNumber: number;
  chapterTitle: string;
  hasFormulas: boolean;
  hasDefinitions: boolean;
  hasExamples: boolean;
  hasRealLife: boolean;
  searchIndex: string;
}

const CLASS_ORDER_MAP: Record<string, number> = {
  'Class 6': 6,
  'Class 7': 7,
  'Class 8': 8,
  'Class 9': 9,
  'Class 10': 10,
  'Class 11': 11,
  'Class 12': 12,
};

let cachedCatalog: LibraryMaterialEntry[] | null = null;

/**
 * Builds and caches the complete class-wise, subject-wise, chapter-wise
 * Study Material catalog directly from the modular Class 6-12 syllabus datasets.
 */
export function getStudyMaterialCatalog(): LibraryMaterialEntry[] {
  if (cachedCatalog) return cachedCatalog;

  cachedCatalog = ALL_CLASS_CHAPTERS.map((chapter) => {
    const material = getChapterStudyMaterial(chapter);
    const biologyBranch =
      chapter.subject === 'Biology'
        ? BIOLOGY_BRANCH_MAP[chapter.id] || 'Botany & Zoology'
        : undefined;

    const searchParts = [
      chapter.classLevel,
      chapter.subject,
      biologyBranch || '',
      `chapter ${chapter.order}`,
      chapter.title,
      chapter.category || '',
      material.introduction,
      ...(chapter.topics || []),
      ...material.basicConcepts,
      ...material.detailedExplanations.map((d) => `${d.topic} ${d.explanation}`),
      ...material.definitions,
      ...material.formulas.map((f) => `${f.name} ${f.formula} ${f.explanation}`),
      ...material.solvedExamples.map((e) => e.question),
      ...material.realLifeExamples,
    ];

    return {
      id: chapter.id,
      chapter,
      classLevel: chapter.classLevel as ClassLevel,
      classOrder: CLASS_ORDER_MAP[chapter.classLevel] || 99,
      subject: chapter.subject,
      biologyBranch,
      chapterNumber: chapter.order,
      chapterTitle: chapter.title,
      hasFormulas: material.formulas.length > 0,
      hasDefinitions: material.definitions.length > 0,
      hasExamples: material.solvedExamples.length > 0,
      hasRealLife: material.realLifeExamples.length > 0,
      searchIndex: searchParts.join(' ').toLowerCase(),
    };
  }).sort((a, b) => {
    if (a.classOrder !== b.classOrder) return a.classOrder - b.classOrder;
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.chapterNumber - b.chapterNumber;
  });

  return cachedCatalog;
}

export interface LibraryFilterParams {
  goal: PreparationGoal;
  classLevel: ClassLevel | 'All';
  subject: SubjectName | 'All';
  biologyBranch?: 'All' | 'Botany' | 'Zoology';
  materialType: LibraryMaterialType;
  searchQuery: string;
}

/**
 * Filters the Study Material catalog strictly by learning path (IIT-JEE or NEET),
 * class (All or Class 6-12), subject, optional Biology branch (Botany/Zoology),
 * material type, and search query.
 */
export function filterStudyMaterialCatalog(
  params: LibraryFilterParams
): LibraryMaterialEntry[] {
  const {
    goal,
    classLevel,
    subject,
    biologyBranch = 'All',
    materialType,
    searchQuery,
  } = params;

  const allowedSubjects = getSubjectsForGoal(goal);
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const queryTerms = trimmedQuery ? trimmedQuery.split(/\s+/).filter(Boolean) : [];

  return getStudyMaterialCatalog().filter((entry) => {
    // 1. Strict learning-path isolation (never mix Mathematics and Biology)
    if (!allowedSubjects.includes(entry.subject)) {
      return false;
    }

    // 2. Class filter
    if (classLevel !== 'All' && entry.classLevel !== classLevel) {
      return false;
    }

    // 3. Subject filter
    if (subject !== 'All' && entry.subject !== subject) {
      return false;
    }

    // 4. Optional Biology branch filter (Botany / Zoology)
    if (
      entry.subject === 'Biology' &&
      biologyBranch !== 'All' &&
      entry.biologyBranch
    ) {
      if (
        biologyBranch === 'Botany' &&
        !entry.biologyBranch.includes('Botany')
      ) {
        return false;
      }
      if (
        biologyBranch === 'Zoology' &&
        !entry.biologyBranch.includes('Zoology')
      ) {
        return false;
      }
    }

    // 5. Material type availability filter
    if (materialType === 'formulas' && !entry.hasFormulas) return false;
    if (materialType === 'definitions' && !entry.hasDefinitions) return false;
    if (materialType === 'examples' && !entry.hasExamples) return false;
    if (materialType === 'real-life' && !entry.hasRealLife) return false;

    // 6. Multi-word search across chapter title, topics, formulas, definitions, and branch
    if (queryTerms.length > 0) {
      const materialLabel =
        LIBRARY_MATERIAL_TYPE_OPTIONS.find((opt) => opt.id === materialType)
          ?.label.toLowerCase() || '';
      const haystack = `${entry.searchIndex} ${materialLabel}`;
      return queryTerms.every((term) => haystack.includes(term));
    }

    return true;
  });
}

export function getMaterialTypeMeta(type: LibraryMaterialType) {
  return (
    LIBRARY_MATERIAL_TYPE_OPTIONS.find((opt) => opt.id === type) ||
    LIBRARY_MATERIAL_TYPE_OPTIONS[0]
  );
}
