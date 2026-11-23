import { Chapter, ClassLevel, PreparationGoal, SubjectName } from '../types';
import {
  MockTestDifficulty,
  MockTestSummary,
  MockTestType,
  PublicExamQuestion,
  ServerExamQuestion,
} from '../types/mockTest';
import {
  ALL_CLASS_CHAPTERS,
  getRawChaptersForClass,
  getSubjectsForGoal,
} from './classSyllabusData';
import { getChapterStudyMaterial } from './studyMaterialsProvider';

export interface ServerMockTestDefinition {
  summary: MockTestSummary;
  questions: ServerExamQuestion[];
}

const VALID_CLASSES: readonly ClassLevel[] = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

const FOUNDATIONS: readonly PreparationGoal[] = ['JEE Foundation', 'NEET Foundation'];

const LETTERS: readonly ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

/**
 * Deterministic 32-bit FNV-1a hash for stable option shuffling and question selection.
 */
function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Deterministically shuffles 4 answer texts so the correct answer is evenly
 * distributed across A, B, C, and D instead of always being A.
 */
function buildShuffledOptions(
  seed: string,
  correctText: string,
  distractors: [string, string, string]
): { options: [string, string, string, string]; correctAnswer: 'A' | 'B' | 'C' | 'D' } {
  const pool = [
    { text: correctText.trim(), isCorrect: true },
    { text: distractors[0].trim(), isCorrect: false },
    { text: distractors[1].trim(), isCorrect: false },
    { text: distractors[2].trim(), isCorrect: false },
  ];

  // Deterministic Fisher-Yates shuffle
  let state = hashString(seed) || 1;
  for (let i = pool.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    const tmp = pool[i];
    pool[i] = pool[j];
    pool[j] = tmp;
  }

  let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
  const options = pool.map((item, idx) => {
    const letter = LETTERS[idx];
    if (item.isCorrect) correctAnswer = letter;
    return `${letter}) ${item.text}`;
  }) as [string, string, string, string];

  return { options, correctAnswer };
}

function cleanOptionPrefix(opt: string): string {
  return opt.replace(/^[A-D]\)\s*/i, '').trim();
}

function splitDefinition(raw: string): { term: string; body: string } | null {
  const idx = raw.indexOf(':');
  if (idx > 1 && idx < 80) {
    const term = raw.slice(0, idx).trim();
    const body = raw.slice(idx + 1).trim();
    if (term.length >= 2 && body.length >= 12) {
      return { term, body };
    }
  }
  return null;
}

function formatFormulaOption(formula: string): string {
  const clean = formula.trim().replace(/^\$+|\$+$/g, '').trim();
  const singleText = clean.match(/^\\text\{([^{}]+)\}$/);
  if (singleText && !/[=<>^_\\]/.test(singleText[1])) {
    return singleText[1].trim();
  }
  return `$${clean}$`;
}

function getMarkingScheme(classLevel: ClassLevel): { positive: number; negative: number } {
  if (classLevel === 'Class 6' || classLevel === 'Class 7' || classLevel === 'Class 8') {
    return { positive: 4, negative: 0 };
  }
  return { positive: 4, negative: 1 };
}

function buildStandardInstructions(
  questionCount: number,
  durationMinutes: number,
  totalMarks: number,
  marksPositive: number,
  marksNegative: number,
  examPatternLabel: string
): string[] {
  const negativeText =
    marksNegative > 0
      ? `Each incorrect answer deducts ${marksNegative} mark${marksNegative > 1 ? 's' : ''} (-${marksNegative} negative marking).`
      : 'There is no negative marking for incorrect answers in this foundation test.';

  return [
    `Examination Pattern: ${examPatternLabel}.`,
    `This test contains ${questionCount} multiple-choice questions for a total of ${totalMarks} marks.`,
    `Total time allotted is ${durationMinutes} minutes. The countdown timer starts only after you click "Start Test".`,
    `Marking Scheme: +${marksPositive} marks for every correct answer. ${negativeText} 0 marks for unanswered questions.`,
    'Click an option to select your answer. Use "Save & Next" to save and move forward, "Clear Response" to deselect, or "Mark for Review & Next" to revisit a question later.',
    'Use the Question Navigation Palette on the right to jump directly to any question. Your answers are saved automatically as you navigate.',
    'When the timer reaches 00:00:00, the test is automatically submitted and evaluated.',
  ];
}

/**
 * Generates a rich, deduplicated pool of class-specific & chapter-specific MCQs
 * for a given chapter, drawing distractors strictly from sibling chapters of the
 * same class & subject so questions are realistic, age-appropriate, and never mixed.
 */
function buildChapterQuestionPool(
  chapter: Chapter,
  sameSubjectClassChapters: Chapter[]
): ServerExamQuestion[] {
  const material = getChapterStudyMaterial(chapter);
  const { positive, negative } = getMarkingScheme(chapter.classLevel as ClassLevel);
  const questions: ServerExamQuestion[] = [];
  const usedPrompts = new Set<string>();

  const siblingChapters = sameSubjectClassChapters.filter((c) => c.id !== chapter.id);

  // Gather sibling pools from the SAME class and SAME subject for authentic distractors
  const siblingDefinitions: { term: string; body: string }[] = [];
  const siblingFormulas: { name: string; formula: string; units?: string }[] = [];
  const siblingTopics: string[] = [];

  for (const sib of siblingChapters) {
    const sibMat = getChapterStudyMaterial(sib);
    for (const d of sibMat.definitions) {
      const parsed = splitDefinition(d);
      if (parsed) siblingDefinitions.push(parsed);
    }
    for (const f of sibMat.formulas) {
      siblingFormulas.push(f);
    }
    for (const t of sibMat.basicConcepts) {
      siblingTopics.push(t);
    }
  }

  // Fallback definitions/formulas from the same subject in adjacent classes ONLY if sibling count < 3
  const sameSubjectAnyClass = ALL_CLASS_CHAPTERS.filter(
    (c) => c.subject === chapter.subject && c.id !== chapter.id
  );
  if (siblingDefinitions.length < 6) {
    for (const other of sameSubjectAnyClass.slice(0, 6)) {
      const mat = getChapterStudyMaterial(other);
      for (const d of mat.definitions) {
        const parsed = splitDefinition(d);
        if (parsed) siblingDefinitions.push(parsed);
      }
    }
  }
  if (siblingFormulas.length < 6) {
    for (const other of sameSubjectAnyClass.slice(0, 6)) {
      const mat = getChapterStudyMaterial(other);
      for (const f of mat.formulas) {
        siblingFormulas.push(f);
      }
    }
  }

  const pushQuestion = (
    suffix: string,
    questionText: string,
    correctText: string,
    distractors: string[],
    explanation: string,
    difficulty: MockTestDifficulty
  ) => {
    const normPrompt = questionText.trim().toLowerCase();
    if (usedPrompts.has(normPrompt)) return;
    const uniqueDistractors = Array.from(
      new Set(
        distractors
          .map((d) => d.trim())
          .filter((d) => d && d.toLowerCase() !== correctText.trim().toLowerCase())
      )
    );
    if (uniqueDistractors.length < 3) return;

    usedPrompts.add(normPrompt);
    const id = `mq-${chapter.id}-${suffix}`;
    const { options, correctAnswer } = buildShuffledOptions(id, correctText, [
      uniqueDistractors[0],
      uniqueDistractors[1],
      uniqueDistractors[2],
    ]);

    questions.push({
      id,
      questionNumber: questions.length + 1,
      subject: chapter.subject,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      questionText: questionText.trim(),
      options,
      correctAnswer,
      explanation: explanation.trim(),
      marksPositive: positive,
      marksNegative: negative,
      difficulty,
    });
  };

  // 1. Handcrafted chapter practiceQuestions & chapterTest questions (highest fidelity)
  const nativeQuestions = [
    ...(chapter.practiceQuestions || []),
    ...(chapter.chapterTest?.questions || []),
  ];
  nativeQuestions.forEach((nq, idx) => {
    if (!nq.options || nq.options.length < 4) return;
    const ansIdx = LETTERS.indexOf(nq.correctAnswer.trim().toUpperCase() as 'A' | 'B' | 'C' | 'D');
    if (ansIdx < 0 || ansIdx > 3) return;
    const cleanedOpts = nq.options.slice(0, 4).map(cleanOptionPrefix);
    const correctText = cleanedOpts[ansIdx];
    const distractors = cleanedOpts.filter((_, i) => i !== ansIdx);
    const diff: MockTestDifficulty =
      nq.difficulty === 'beginner'
        ? 'Easy'
        : nq.difficulty === 'advanced'
          ? 'Hard'
          : 'Medium';
    pushQuestion(`native-${idx + 1}`, nq.questionText, correctText, distractors, nq.explanation, diff);
  });

  // 2. Definition Recognition MCQs (from this chapter's real Important Definitions)
  const chapterParsedDefs = material.definitions
    .map(splitDefinition)
    .filter((d): d is { term: string; body: string } => Boolean(d));

  chapterParsedDefs.forEach((def, idx) => {
    const otherSameChapterTerms = chapterParsedDefs
      .filter((d) => d.term !== def.term)
      .map((d) => d.term);
    const otherSiblingTerms = siblingDefinitions
      .filter((d) => d.term !== def.term)
      .map((d) => d.term);
    const distractorTerms = [...otherSameChapterTerms, ...otherSiblingTerms];

    pushQuestion(
      `def-term-${idx + 1}`,
      `In ${chapter.title}, which scientific term is defined as: "${def.body}"?`,
      def.term,
      distractorTerms,
      `${def.term} is formally defined in ${chapter.title} as: ${def.body}`,
      idx % 2 === 0 ? 'Easy' : 'Medium'
    );
  });

  // 3. Formula Identification MCQs (from this chapter's real Important Formulas)
  material.formulas.forEach((f, idx) => {
    const correctFormula = formatFormulaOption(f.formula);
    const sameChapFormulas = material.formulas
      .filter((other) => other.name !== f.name)
      .map((other) => formatFormulaOption(other.formula));
    const sibFormulas = siblingFormulas
      .filter((other) => other.name !== f.name)
      .map((other) => formatFormulaOption(other.formula));

    pushQuestion(
      `formula-expr-${idx + 1}`,
      `Which of the following correctly expresses "${f.name}" studied in ${chapter.title}?`,
      correctFormula,
      [...sameChapFormulas, ...sibFormulas],
      `${f.name} is expressed as ${correctFormula}. ${f.explanation}`,
      idx % 2 === 0 ? 'Medium' : 'Hard'
    );

    // 4. Formula Meaning / Application MCQs
    if (f.explanation && f.explanation.length >= 18) {
      const otherFormulaNames = [
        ...material.formulas.filter((o) => o.name !== f.name).map((o) => o.name),
        ...siblingFormulas.filter((o) => o.name !== f.name).map((o) => o.name),
      ];
      pushQuestion(
        `formula-name-${idx + 1}`,
        `In ${chapter.title}, the relationship ${correctFormula} represents which of the following?`,
        f.name,
        otherFormulaNames,
        `The expression ${correctFormula} corresponds to ${f.name}: ${f.explanation}`,
        'Easy'
      );
    }

    // 5. SI Unit MCQs when units are defined
    if (f.units && f.units.trim().length >= 1 && !/^none|dimensionless$/i.test(f.units.trim())) {
      const otherUnits = [
        ...material.formulas
          .filter((o) => o.units && o.units.trim() !== f.units!.trim())
          .map((o) => o.units!.trim()),
        ...siblingFormulas
          .filter((o) => o.units && o.units.trim() !== f.units!.trim())
          .map((o) => o.units!.trim()),
        'Meters per second (m/s)',
        'Kilogram (kg)',
        'Joule (J)',
        'Newton (N)',
        'Mole (mol)',
      ];
      pushQuestion(
        `formula-unit-${idx + 1}`,
        `Which unit is correctly associated with "${f.name}" in ${chapter.title}?`,
        f.units.trim(),
        otherUnits,
        `In ${chapter.title}, "${f.name}" (${correctFormula}) uses the unit: ${f.units.trim()}.`,
        'Medium'
      );
    }
  });

  // 6. Reverse Definition Concept MCQs (Given Term -> Select Correct Statement)
  chapterParsedDefs.forEach((def, idx) => {
    const otherBodies = [
      ...chapterParsedDefs.filter((d) => d.term !== def.term).map((d) => d.body),
      ...siblingDefinitions.filter((d) => d.term !== def.term).map((d) => d.body),
    ];
    pushQuestion(
      `def-meaning-${idx + 1}`,
      `Which of the following statements accurately describes "${def.term}" in ${chapter.title}?`,
      def.body,
      otherBodies,
      `By definition in ${chapter.title}, ${def.term} refers to: ${def.body}`,
      'Medium'
    );
  });

  // 7. Real-Life Application MCQs
  material.realLifeExamples.forEach((example, idx) => {
    const cleanEx = example.trim().replace(/\.$/, '');
    if (cleanEx.length < 20) return;
    const otherChapterTitles = siblingChapters.map((c) => c.title);
    pushQuestion(
      `reallife-${idx + 1}`,
      `Which ${chapter.classLevel} ${chapter.subject} chapter principle directly explains this real-life phenomenon: "${cleanEx}"?`,
      chapter.title,
      otherChapterTitles,
      `This real-life application directly illustrates core principles taught in ${chapter.classLevel} ${chapter.subject} — ${chapter.title}.`,
      idx === 0 ? 'Easy' : 'Hard'
    );
  });

  // 8. Core Concept Topic Identification MCQs (ensures every chapter always has 15+ distinct MCQs)
  material.basicConcepts.forEach((concept, idx) => {
    if (concept.trim().length < 10) return;
    const otherChapterTitles = siblingChapters.map((c) => c.title);
    pushQuestion(
      `concept-${idx + 1}`,
      `In ${chapter.classLevel} ${chapter.subject}, the topic "${concept.trim()}" is primarily studied under which chapter?`,
      chapter.title,
      otherChapterTitles,
      `"${concept.trim()}" is one of the foundational concepts covered in ${chapter.title} (${chapter.classLevel} ${chapter.subject}).`,
      idx % 2 === 0 ? 'Easy' : 'Hard'
    );
  });

  // 9. Detailed Topic Breakdown MCQs
  material.detailedExplanations.forEach((det, idx) => {
    const cleanTopic = det.topic.replace(/^\d+\.\s+/, '').trim();
    if (!cleanTopic || cleanTopic.toLowerCase().includes(chapter.title.toLowerCase())) return;
    const otherTopics = siblingTopics.filter(
      (t) => t.toLowerCase() !== cleanTopic.toLowerCase()
    );
    pushQuestion(
      `detail-topic-${idx + 1}`,
      `Which of the following key concepts is directly covered in the ${chapter.classLevel} ${chapter.subject} chapter "${chapter.title}"?`,
      cleanTopic,
      otherTopics,
      `${cleanTopic} is an essential conceptual section explained in ${chapter.title}.`,
      'Hard'
    );
  });

  return questions;
}

/**
 * Selects N questions from a pool, preferring questions matching the target difficulty
 * while keeping strict uniqueness and deterministic ordering.
 */
function selectQuestionsByDifficulty(
  pool: ServerExamQuestion[],
  count: number,
  difficulty: MockTestDifficulty,
  offset = 0
): ServerExamQuestion[] {
  const preferred = pool.filter((q) => q.difficulty === difficulty);
  const secondary = pool.filter((q) => q.difficulty !== difficulty);
  const combined = [...preferred, ...secondary];

  if (combined.length === 0) return [];

  const result: ServerExamQuestion[] = [];
  const usedIds = new Set<string>();
  const start = offset % combined.length;

  for (let i = 0; i < combined.length && result.length < count; i++) {
    const item = combined[(start + i) % combined.length];
    if (!usedIds.has(item.id)) {
      usedIds.add(item.id);
      result.push({ ...item, questionNumber: result.length + 1 });
    }
  }

  return result;
}

let cachedTests: ServerMockTestDefinition[] | null = null;
let cachedTestMap: Map<string, ServerMockTestDefinition> | null = null;

/**
 * Builds and caches the complete class-wise (Classes 6-12) and foundation-wise
 * (JEE Foundation & NEET Foundation) Mock Test catalog.
 */
export function getAllServerMockTests(): ServerMockTestDefinition[] {
  if (cachedTests) return cachedTests;

  // Step 1: Precompute chapter question pools strictly within each (classLevel, subject)
  const chapterPoolMap = new Map<string, ServerExamQuestion[]>();
  for (const classLevel of VALID_CLASSES) {
    const classChapters = getRawChaptersForClass(classLevel);
    const bySubject = new Map<SubjectName, Chapter[]>();
    for (const ch of classChapters) {
      const list = bySubject.get(ch.subject) || [];
      list.push(ch);
      bySubject.set(ch.subject, list);
    }
    for (const [, subjectChapters] of bySubject.entries()) {
      for (const ch of subjectChapters) {
        chapterPoolMap.set(ch.id, buildChapterQuestionPool(ch, subjectChapters));
      }
    }
  }

  const tests: ServerMockTestDefinition[] = [];

  for (const foundation of FOUNDATIONS) {
    const foundationSlug = foundation === 'JEE Foundation' ? 'jee' : 'neet';
    const foundationShort = foundation === 'JEE Foundation' ? 'JEE' : 'NEET';
    const subjects = getSubjectsForGoal(foundation);

    for (const classLevel of VALID_CLASSES) {
      const classNum = classLevel.replace('Class ', '');
      const classChapters = getRawChaptersForClass(classLevel);
      const { positive, negative } = getMarkingScheme(classLevel);
      const isSenior = classLevel === 'Class 11' || classLevel === 'Class 12';
      const isMiddle =
        classLevel === 'Class 6' || classLevel === 'Class 7' || classLevel === 'Class 8';

      // A. CHAPTER-WISE TESTS (1 per chapter, 15 per class per foundation)
      for (const subject of subjects) {
        const subjectChapters = classChapters
          .filter((c) => c.subject === subject)
          .sort((a, b) => a.order - b.order);

        for (const ch of subjectChapters) {
          const pool = chapterPoolMap.get(ch.id) || [];
          const difficulty: MockTestDifficulty =
            ch.order <= 2 ? 'Easy' : ch.order <= 4 ? 'Medium' : 'Hard';
          const qCount = Math.min(10, pool.length);
          const selected = selectQuestionsByDifficulty(pool, qCount, difficulty);
          const durationMinutes = isMiddle ? 15 : 20;
          const totalMarks = selected.length * positive;
          const patternLabel = `${classLevel} ${foundationShort} Chapter-wise Assessment`;

          tests.push({
            summary: {
              id: `mt-${foundationSlug}-c${classNum}-ch-${ch.id}`,
              title: `Chapter ${ch.order}: ${ch.title} — Chapter Test`,
              foundation,
              classLevel,
              subject,
              subjectsIncluded: [subject],
              chapterId: ch.id,
              chapterTitle: ch.title,
              testType: 'Chapter-wise',
              difficulty,
              questionCount: selected.length,
              durationMinutes,
              totalMarks,
              marksPositive: positive,
              marksNegative: negative,
              examPatternLabel: patternLabel,
              instructions: buildStandardInstructions(
                selected.length,
                durationMinutes,
                totalMarks,
                positive,
                negative,
                patternLabel
              ),
            },
            questions: selected,
          });
        }

        // B. SUBJECT-WISE TESTS (1 per subject per class, 15 MCQs across all 5 chapters)
        const subjectSelected: ServerExamQuestion[] = [];
        for (const ch of subjectChapters) {
          const pool = chapterPoolMap.get(ch.id) || [];
          const picked = selectQuestionsByDifficulty(pool, 3, 'Medium', 1);
          for (const q of picked) {
            subjectSelected.push({
              ...q,
              questionNumber: subjectSelected.length + 1,
            });
          }
        }
        const subjDuration = isMiddle ? 20 : 25;
        const subjMarks = subjectSelected.length * positive;
        const subjPattern = `${classLevel} ${foundationShort} Complete ${subject} Subject Test`;

        tests.push({
          summary: {
            id: `mt-${foundationSlug}-c${classNum}-subj-${subject.toLowerCase()}`,
            title: `${classLevel} ${subject} Complete Subject Mock Test`,
            foundation,
            classLevel,
            subject,
            subjectsIncluded: [subject],
            testType: 'Subject-wise',
            difficulty: isSenior ? 'Hard' : 'Medium',
            questionCount: subjectSelected.length,
            durationMinutes: subjDuration,
            totalMarks: subjMarks,
            marksPositive: positive,
            marksNegative: negative,
            examPatternLabel: subjPattern,
            instructions: buildStandardInstructions(
              subjectSelected.length,
              subjDuration,
              subjMarks,
              positive,
              negative,
              subjPattern
            ),
          },
          questions: subjectSelected,
        });

        // C. PRACTICE TESTS (Subject-focused Easy, Medium & Hard drills)
        const practiceDifficulty: MockTestDifficulty =
          subject === 'Physics' ? 'Easy' : subject === 'Chemistry' ? 'Medium' : 'Hard';
        const practiceSelected: ServerExamQuestion[] = [];
        for (const ch of subjectChapters) {
          const pool = chapterPoolMap.get(ch.id) || [];
          const picked = selectQuestionsByDifficulty(pool, 2, practiceDifficulty, 2);
          for (const q of picked) {
            practiceSelected.push({
              ...q,
              questionNumber: practiceSelected.length + 1,
            });
          }
        }
        const pracDuration = 15;
        const pracMarks = practiceSelected.length * positive;
        const pracPattern = `${classLevel} ${foundationShort} ${subject} Concept Practice Test`;

        tests.push({
          summary: {
            id: `mt-${foundationSlug}-c${classNum}-prac-${subject.toLowerCase()}`,
            title: `${classLevel} ${subject} Speed & Concept Practice Test`,
            foundation,
            classLevel,
            subject,
            subjectsIncluded: [subject],
            testType: 'Practice Test',
            difficulty: practiceDifficulty,
            questionCount: practiceSelected.length,
            durationMinutes: pracDuration,
            totalMarks: pracMarks,
            marksPositive: positive,
            marksNegative: negative,
            examPatternLabel: pracPattern,
            instructions: buildStandardInstructions(
              practiceSelected.length,
              pracDuration,
              pracMarks,
              positive,
              negative,
              pracPattern
            ),
          },
          questions: practiceSelected,
        });
      }

      // D. FULL MOCK TESTS (2 papers per class per foundation: Paper 1 & Paper 2)
      const fullMockSpecs: { suffix: string; label: string; difficulty: MockTestDifficulty; offset: number }[] = [
        {
          suffix: 'paper-1',
          label: isSenior
            ? `${classLevel} ${foundationShort} Full Syllabus Mock Test — Paper 1`
            : `${classLevel} ${foundationShort} Foundation Full Mock Test — Paper 1`,
          difficulty: isMiddle ? 'Easy' : 'Medium',
          offset: 0,
        },
        {
          suffix: 'paper-2',
          label: isSenior
            ? `${classLevel} ${foundationShort} Full Syllabus Mock Test — Paper 2 (Rank Booster)`
            : `${classLevel} ${foundationShort} Foundation Full Mock Test — Paper 2 (Challenge)`,
          difficulty: 'Hard',
          offset: 3,
        },
      ];

      for (const spec of fullMockSpecs) {
        const fullQuestions: ServerExamQuestion[] = [];
        const isSeniorNeet = foundation === 'NEET Foundation' && isSenior;

        for (const subject of subjects) {
          const subjectChapters = classChapters
            .filter((c) => c.subject === subject)
            .sort((a, b) => a.order - b.order);
          const perChapter = isSeniorNeet && subject === 'Biology' ? 4 : 2;

          for (const ch of subjectChapters) {
            const pool = chapterPoolMap.get(ch.id) || [];
            const picked = selectQuestionsByDifficulty(
              pool,
              perChapter,
              spec.difficulty,
              spec.offset
            );
            for (const q of picked) {
              fullQuestions.push({
                ...q,
                questionNumber: fullQuestions.length + 1,
              });
            }
          }
        }

        const durationMinutes = isSenior ? 60 : 45;
        const totalMarks = fullQuestions.length * positive;
        const patternLabel = isSeniorNeet
          ? `NEET Pattern (${classLevel}: 10 Physics + 10 Chemistry + 20 Biology)`
          : foundation === 'JEE Foundation'
            ? `JEE Pattern (${classLevel}: 10 Physics + 10 Chemistry + 10 Mathematics)`
            : `NEET Foundation Pattern (${classLevel}: 10 Physics + 10 Chemistry + 10 Biology)`;

        tests.push({
          summary: {
            id: `mt-${foundationSlug}-c${classNum}-full-${spec.suffix}`,
            title: spec.label,
            foundation,
            classLevel,
            subject: 'All Subjects',
            subjectsIncluded: subjects,
            testType: 'Full Mock Test',
            difficulty: spec.difficulty,
            questionCount: fullQuestions.length,
            durationMinutes,
            totalMarks,
            marksPositive: positive,
            marksNegative: negative,
            examPatternLabel: patternLabel,
            instructions: buildStandardInstructions(
              fullQuestions.length,
              durationMinutes,
              totalMarks,
              positive,
              negative,
              patternLabel
            ),
          },
          questions: fullQuestions,
        });
      }
    }
  }

  cachedTests = tests;
  cachedTestMap = new Map(tests.map((t) => [t.summary.id, t]));
  return cachedTests;
}

export function getServerMockTestById(testId: string): ServerMockTestDefinition | undefined {
  if (!cachedTestMap) {
    getAllServerMockTests();
  }
  return cachedTestMap?.get(testId);
}

/**
 * Strips correctAnswer and explanation before presenting active exam questions.
 */
export function toPublicQuestion(q: ServerExamQuestion): PublicExamQuestion {
  return {
    id: q.id,
    questionNumber: q.questionNumber,
    subject: q.subject,
    chapterId: q.chapterId,
    chapterTitle: q.chapterTitle,
    questionText: q.questionText,
    options: q.options,
    marksPositive: q.marksPositive,
    marksNegative: q.marksNegative,
    difficulty: q.difficulty,
  };
}

export function listFilteredMockTests(filters: {
  foundation?: string;
  classLevel?: string;
  subject?: string;
  testType?: string;
  difficulty?: string;
}): MockTestSummary[] {
  const all = getAllServerMockTests();
  return all
    .map((t) => t.summary)
    .filter((summary) => {
      if (filters.foundation && filters.foundation !== 'All' && summary.foundation !== filters.foundation) {
        return false;
      }
      if (filters.classLevel && filters.classLevel !== 'All' && summary.classLevel !== filters.classLevel) {
        return false;
      }
      if (filters.subject && filters.subject !== 'All') {
        if (summary.subject !== filters.subject && !summary.subjectsIncluded.includes(filters.subject as SubjectName)) {
          return false;
        }
        if (summary.testType !== 'Full Mock Test' && summary.subject !== filters.subject) {
          return false;
        }
      }
      if (filters.testType && filters.testType !== 'All' && summary.testType !== filters.testType) {
        return false;
      }
      if (filters.difficulty && filters.difficulty !== 'All' && summary.difficulty !== filters.difficulty) {
        return false;
      }
      return true;
    });
}
