import { Chapter, ChapterStudyMaterial } from '../types';
import { CLASS_6_STUDY_MATERIALS } from './materials/class6Materials';
import { CLASS_7_STUDY_MATERIALS } from './materials/class7Materials';
import { CLASS_8_STUDY_MATERIALS } from './materials/class8Materials';
import { CLASS_9_TO_12_REAL_LIFE_EXAMPLES } from './materials/class9to12RealLife';

/**
 * Parses structured markdown summaryNotes (used in Classes 9-12) into clean titled topic sections
 * so all real NCERT / JEE / NEET laws, derivations, and equations are preserved in the Explanation section.
 */
function parseSummaryNotesIntoSections(
  summaryNotes: string,
  chapterTitle: string
): { topic: string; explanation: string; diagram?: string }[] {
  const cleaned = (summaryNotes || '').trim();
  if (!cleaned) return [];

  const lines = cleaned.replace(/\r\n/g, '\n').split('\n');
  const sections: { topic: string; explanation: string }[] = [];

  let currentTopic: string | null = null;
  let currentLines: string[] = [];

  const flush = () => {
    if (currentTopic && currentLines.length > 0) {
      sections.push({
        topic: currentTopic,
        explanation: currentLines.join('\n').trim(),
      });
    } else if (!currentTopic && currentLines.length > 0) {
      sections.push({
        topic: `Core Concepts of ${chapterTitle}`,
        explanation: currentLines.join('\n').trim(),
      });
    }
    currentLines = [];
  };

  const hasNumberedHeadings = lines.some((l) => /^\s*\d+\.\s+\*\*(.+?)\*\*/.test(l));

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();

    // Handle markdown ### headings
    const mdHeading = trimmed.match(/^#{1,3}\s+(.+)$/);
    if (mdHeading) {
      const headingTitle = mdHeading[1].replace(/:$/, '').trim();
      const isGenericWrapper =
        hasNumberedHeadings &&
        sections.length === 0 &&
        !currentTopic &&
        currentLines.length === 0;
      if (isGenericWrapper) {
        continue;
      }
      flush();
      currentTopic = headingTitle;
      continue;
    }

    // Detect top-level numbered section heading like "1. **Distance vs Displacement:**" or "2. **Gauss's Law:**"
    const numberedHeading = rawLine.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*:?\s*(.*)$/);
    if (numberedHeading) {
      flush();
      const titleText = numberedHeading[2].replace(/:$/, '').trim();
      const remainder = numberedHeading[3].trim();
      currentTopic = `${numberedHeading[1]}. ${titleText}`;
      if (remainder) {
        currentLines.push(remainder);
      }
      continue;
    }

    if (trimmed) {
      currentLines.push(rawLine);
    } else if (currentLines.length > 0) {
      currentLines.push('');
    }
  }

  flush();

  if (sections.length === 0) {
    return [
      {
        topic: `Core Concepts of ${chapterTitle}`,
        explanation: cleaned,
      },
    ];
  }

  return sections;
}

/**
 * Returns complete, structured study material for any chapter across Classes 6-12
 * and both IIT-JEE Foundation and NEET Foundation paths.
 * Preserves all existing handcrafted data for Classes 6-8 and parses real NCERT/JEE/NEET
 * notes, formulas, definitions, examples, and real-life applications for Classes 9-12.
 */
export function getChapterStudyMaterial(chapter: Chapter): ChapterStudyMaterial {
  // 1. Direct attachment on chapter object
  if (chapter.studyMaterial) {
    return chapter.studyMaterial;
  }

  // 2. Class 6 handcrafted materials
  if (CLASS_6_STUDY_MATERIALS[chapter.id]) {
    return CLASS_6_STUDY_MATERIALS[chapter.id];
  }

  // 3. Class 7 handcrafted materials
  if (CLASS_7_STUDY_MATERIALS[chapter.id]) {
    return CLASS_7_STUDY_MATERIALS[chapter.id];
  }

  // 4. Class 8 handcrafted materials
  if (CLASS_8_STUDY_MATERIALS[chapter.id]) {
    return CLASS_8_STUDY_MATERIALS[chapter.id];
  }

  // 5. Classes 9-12: Preserve all real educational content from the chapter dataset
  const intro =
    chapter.introduction ||
    chapter.description ||
    `${chapter.title} is an essential chapter in ${chapter.classLevel} ${chapter.subject}, building strong conceptual and problem-solving foundations for IIT-JEE and NEET.`;

  const basicConcepts =
    chapter.topics && chapter.topics.length > 0
      ? chapter.topics
      : [chapter.description];

  const parsedSummarySections = parseSummaryNotesIntoSections(
    chapter.summaryNotes || chapter.description,
    chapter.title
  );

  const detailedExplanations =
    parsedSummarySections.length > 0
      ? parsedSummarySections
      : [
          {
            topic: `Core Principles of ${chapter.title}`,
            explanation: chapter.description,
            diagram: undefined,
          },
        ];

  const definitions =
    chapter.definitions && chapter.definitions.length > 0
      ? chapter.definitions
      : [
          `${chapter.title}: The systematic study of fundamental laws, properties, and quantitative relationships in ${chapter.subject}.`,
        ];

  const formulas =
    chapter.formulas && chapter.formulas.length > 0
      ? chapter.formulas
      : [];

  const solvedExamples =
    chapter.solvedExamples && chapter.solvedExamples.length > 0
      ? chapter.solvedExamples
      : [];

  const realLifeExamples =
    CLASS_9_TO_12_REAL_LIFE_EXAMPLES[chapter.id] || [
      `Everyday scientific instruments and engineering designs apply the principles of ${chapter.title} in ${chapter.subject}.`,
      `Modern healthcare, sustainable energy, and technology systems rely directly on these foundational concepts.`,
      `Natural processes observed in daily life demonstrate the laws and relationships studied in ${chapter.title}.`,
    ];

  const quickRevision: string[] = [];

  return {
    introduction: intro,
    basicConcepts,
    detailedExplanations,
    definitions,
    formulas,
    solvedExamples,
    realLifeExamples,
    quickRevision,
  };
}
