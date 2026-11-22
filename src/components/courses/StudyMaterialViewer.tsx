import React, { useMemo, useEffect, useRef } from 'react';
import { Chapter, ChapterStudyMaterial } from '../../types';
import { getChapterStudyMaterial } from '../../data/studyMaterialsProvider';
import { BIOLOGY_BRANCH_MAP } from '../../data/studyMaterialCatalog';
import {
  FormattedText,
  InlineFormattedText,
  MathFormula,
} from '../common/FormattedContent';
import { ChevronRight } from 'lucide-react';

export type StudySectionId =
  | 'explanation'
  | 'definitions'
  | 'formulas'
  | 'examples'
  | 'real-life';

interface StudyMaterialViewerProps {
  chapter: Chapter;
  initialSection?: StudySectionId;
  onProceedToPractice?: () => void;
  /** When true, renders directly on the page scroll container instead of inside an internal scroll box */
  standalonePage?: boolean;
}

interface StructuredExample {
  isNumerical: boolean;
  givenData: string | null;
  formulaUsed: string | null;
  steps: string[];
  finalAnswer: string | null;
}

/**
 * Splits a definition string into its bold term name and clear explanation.
 */
function splitDefinition(raw: string): { term: string; body: string } {
  const colonIdx = raw.indexOf(':');
  if (colonIdx > 0 && colonIdx < 80) {
    return {
      term: raw.slice(0, colonIdx).trim(),
      body: raw.slice(colonIdx + 1).trim(),
    };
  }
  return { term: '', body: raw.trim() };
}

/**
 * Removes redundant leading numbering like "1. " when we render clean textbook subheadings.
 */
function stripLeadingNumber(heading: string): string {
  return heading.replace(/^\d+\.\s+/, '').trim();
}

/**
 * Structures a solved example cleanly into Given Data, Formula Used,
 * Step-by-Step Solution, and Final Answer while preserving every original step.
 */
function structureSolvedExample(
  ex: ChapterStudyMaterial['solvedExamples'][number],
  chapterFormulas: ChapterStudyMaterial['formulas']
): StructuredExample {
  const rawLines = (ex.solution || '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const hasNumbersOrEquations =
    /[=\d]/.test(ex.question) ||
    rawLines.some((l) => /=/.test(l) || /^Step\s*\d/i.test(l));

  let givenData: string | null = null;
  let formulaUsed: string | null = null;
  let finalAnswer: string | null = null;
  const remainingSteps: string[] = [];

  let startIdx = 0;
  if (rawLines.length > 1) {
    const first = rawLines[0];
    if (
      /^(given|initial|let\b|here\b|data\b)/i.test(first) ||
      (/^[a-zA-Z0-9₀₁₂₃\s]+\s*=\s*[-+\d.]/.test(first) && first.includes(','))
    ) {
      givenData = first.replace(/^(Given\s*data?|Given|Data)\s*:\s*/i, '').trim();
      startIdx = 1;
    }
  }

  if (!givenData && hasNumbersOrEquations) {
    const qtyMatches = ex.question.match(
      /(?:[A-Za-z][A-Za-z0-9_]*\s*=\s*[-+]?\d+(?:[.,]\d+)?(?:\s*[a-zA-Z/%°²³⁻]+)?|\b\d+(?:[.,]\d+)?\s*(?:km\/h|m\/s²|m\/s|cm|mm|km|meters?|m|kg|g|seconds?|s|hours?|hrs?|min|minutes?|N|Pa|J|W|V|A|Ω|pF|μF|Hz|K|°C|%|mol|M|L|mL)\b)/g
    );
    if (qtyMatches && qtyMatches.length > 0) {
      const unique = Array.from(new Set(qtyMatches.map((m) => m.trim())));
      givenData = unique.join(', ');
    }
  }

  for (let i = startIdx; i < rawLines.length; i++) {
    const line = rawLines[i];
    const cleanStep = line.replace(/^Step\s*\d+\s*:\s*/i, '').trim();

    if (
      !formulaUsed &&
      /^(using|formula|we know that|by\s+[a-z']+\s+law)/i.test(cleanStep)
    ) {
      formulaUsed = cleanStep
        .replace(/^(Using\s+(?:the\s+)?|Formula\s*:\s*|We know that\s+)/i, '')
        .trim();
    }

    remainingSteps.push(cleanStep);
  }

  if (!formulaUsed && hasNumbersOrEquations && chapterFormulas.length > 0) {
    const matched = chapterFormulas.find((f) => {
      const nameWords = f.name.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
      const combined = `${ex.question} ${ex.solution}`.toLowerCase();
      return nameWords.some((w) => combined.includes(w));
    });
    const chosen = matched || chapterFormulas[0];
    const cleanF = chosen.formula.trim().replace(/^\$+|\$+$/g, '').trim();
    formulaUsed = `${chosen.name}: $${cleanF}$`;
  }

  if (remainingSteps.length > 1) {
    const lastLine = remainingSteps[remainingSteps.length - 1];
    if (
      /^(therefore|thus|hence|answer|final answer|so,|total|result|net|object|magnification|distance|velocity|new|max)/i.test(
        lastLine
      ) ||
      lastLine.includes('=')
    ) {
      finalAnswer = lastLine
        .replace(/^(Therefore,?\s*|Thus,?\s*|Hence,?\s*|Final\s*Answer\s*:\s*|Answer\s*:\s*)/i, '')
        .trim();
    }
  } else if (remainingSteps.length === 1) {
    const single = remainingSteps[0];
    const eqParts = single.split('=');
    if (hasNumbersOrEquations && eqParts.length >= 2) {
      finalAnswer = eqParts[eqParts.length - 1].trim().replace(/\.$/, '');
    } else {
      const firstSentence = single.split(/\.\s+/)[0];
      if (firstSentence && firstSentence.length <= 160) {
        finalAnswer = firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
      }
    }
  }

  return {
    isNumerical: hasNumbersOrEquations,
    givenData,
    formulaUsed,
    steps: remainingSteps.length > 0 ? remainingSteps : rawLines,
    finalAnswer,
  };
}

/**
 * Reusable textbook / Word-document Study Material reader.
 * Renders the complete chapter content as one continuous, cleanly typeset
 * educational document with zero tabs, cards, or accordions.
 */
export const StudyMaterialViewer: React.FC<StudyMaterialViewerProps> = ({
  chapter,
  initialSection = 'explanation',
  onProceedToPractice,
  standalonePage = false,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const studyMaterial = useMemo(() => getChapterStudyMaterial(chapter), [chapter]);

  const biologyBranch =
    chapter.subject === 'Biology' ? BIOLOGY_BRANCH_MAP[chapter.id] : undefined;

  const subjectLabel = biologyBranch
    ? `${chapter.subject} (${biologyBranch})`
    : chapter.subject;

  // Scroll cleanly to top on chapter change, or to the targeted section when opened via Material Type filter
  useEffect(() => {
    const targetId =
      initialSection && initialSection !== 'explanation'
        ? `study-doc-${chapter.id}-${initialSection}`
        : null;

    if (targetId) {
      const timer = window.setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => window.clearTimeout(timer);
    }

    if (standalonePage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [chapter.id, initialSection, standalonePage]);

  const hasBasicConcepts =
    studyMaterial.basicConcepts && studyMaterial.basicConcepts.length > 0;
  const hasDetailedTopics =
    studyMaterial.detailedExplanations && studyMaterial.detailedExplanations.length > 0;
  const hasDefinitions =
    studyMaterial.definitions && studyMaterial.definitions.length > 0;
  const hasFormulas =
    studyMaterial.formulas && studyMaterial.formulas.length > 0;
  const hasSolvedExamples =
    studyMaterial.solvedExamples && studyMaterial.solvedExamples.length > 0;
  const hasRealLife =
    studyMaterial.realLifeExamples && studyMaterial.realLifeExamples.length > 0;

  const documentPaper = (
    <article
      className="bg-white max-w-[820px] w-full mx-auto border border-slate-200/90 shadow-sm px-6 py-8 sm:px-14 sm:py-12 text-slate-800"
      aria-label={`Chapter ${chapter.order}: ${chapter.title}`}
    >
      {/* Document Header: Class, Subject, Chapter Number, Chapter Title */}
      <header className="pb-6 mb-8 border-b-2 border-blue-900/15 space-y-2.5">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-900">
          <span>{chapter.classLevel}</span>
          <span aria-hidden="true" className="text-slate-300">
            ·
          </span>
          <span>{subjectLabel}</span>
          <span aria-hidden="true" className="text-slate-300">
            ·
          </span>
          <span>Chapter {chapter.order}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
          Chapter {chapter.order}: {chapter.title}
        </h1>
      </header>

      {/* Continuous Textbook Content */}
      <div className="space-y-8 text-[15px] sm:text-base leading-[1.75] text-slate-800">
        {/* Opening Overview Paragraphs */}
        {studyMaterial.introduction && (
          <section className="space-y-3">
            <FormattedText text={studyMaterial.introduction} />
          </section>
        )}

        {/* Fundamental Concepts Covered */}
        {hasBasicConcepts && (
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
              Key Concepts Covered
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              {studyMaterial.basicConcepts.map((concept, idx) => (
                <li key={idx} className="pl-1 leading-[1.75]">
                  <InlineFormattedText text={concept} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Dynamic Topic-by-Topic Textbook Sections */}
        {hasDetailedTopics && (
          <div className="space-y-8">
            {studyMaterial.detailedExplanations.map((item, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
                  <InlineFormattedText text={stripLeadingNumber(item.topic)} />
                </h2>

                <FormattedText text={item.explanation} />

                {item.diagram && (
                  <figure className="my-5 p-4 sm:p-5 bg-slate-50 border border-slate-200 overflow-x-auto">
                    <pre className="font-mono text-xs sm:text-[13px] text-slate-800 leading-snug whitespace-pre">
                      {item.diagram}
                    </pre>
                    <figcaption className="mt-2.5 pt-2 border-t border-slate-200 text-xs text-slate-500 italic">
                      Figure {idx + 1}: Conceptual diagram for{' '}
                      <InlineFormattedText text={stripLeadingNumber(item.topic)} />
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Important Definitions */}
        {hasDefinitions && (
          <section
            id={`study-doc-${chapter.id}-definitions`}
            className="space-y-4 scroll-mt-20"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
              Important Definitions
            </h2>

            <dl className="space-y-3.5">
              {studyMaterial.definitions.map((def, idx) => {
                const { term, body } = splitDefinition(def);
                return (
                  <div key={idx} className="leading-[1.75]">
                    {term ? (
                      <p className="text-slate-800">
                        <dt className="inline font-bold text-slate-950">
                          <InlineFormattedText text={term} />:
                        </dt>{' '}
                        <dd className="inline">
                          <InlineFormattedText text={body} />
                        </dd>
                      </p>
                    ) : (
                      <p className="text-slate-800">
                        <InlineFormattedText text={body} />
                      </p>
                    )}
                  </div>
                );
              })}
            </dl>
          </section>
        )}

        {/* Important Formulas */}
        {hasFormulas && (
          <section
            id={`study-doc-${chapter.id}-formulas`}
            className="space-y-5 scroll-mt-20"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
              Important Formulas
            </h2>

            <div className="space-y-6">
              {studyMaterial.formulas.map((item, idx) => (
                <div
                  key={idx}
                  className={idx > 0 ? 'pt-5 border-t border-slate-100 space-y-2' : 'space-y-2'}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-950">
                      {idx + 1}. <InlineFormattedText text={item.name} />
                    </h3>
                    {item.units && (
                      <span className="text-xs sm:text-sm text-slate-600">
                        <span className="font-semibold text-slate-700">Unit:</span>{' '}
                        <InlineFormattedText text={item.units} />
                      </span>
                    )}
                  </div>

                  <div className="my-2 py-2.5 px-4 bg-slate-50/80 border-y border-slate-200/80 text-center overflow-x-auto">
                    <MathFormula
                      formula={item.formula}
                      displayMode={true}
                      className="text-base sm:text-lg text-slate-950"
                    />
                  </div>

                  {item.explanation && (
                    <div className="text-sm sm:text-[15px] text-slate-700 leading-[1.7]">
                      <FormattedText
                        text={item.explanation}
                        className="text-sm sm:text-[15px] text-slate-700"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solved Examples */}
        {hasSolvedExamples && (
          <section
            id={`study-doc-${chapter.id}-examples`}
            className="space-y-6 scroll-mt-20"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
              Solved Examples
            </h2>

            <div className="space-y-7">
              {studyMaterial.solvedExamples.map((ex, idx) => {
                const structured = structureSolvedExample(ex, studyMaterial.formulas);
                return (
                  <div
                    key={idx}
                    className={idx > 0 ? 'pt-6 border-t border-slate-200/80 space-y-3' : 'space-y-3'}
                  >
                    {/* Problem Statement */}
                    <div className="text-slate-950 font-semibold leading-[1.7]">
                      <span className="font-bold text-blue-950">Example {idx + 1}. </span>
                      <InlineFormattedText text={ex.question} />
                    </div>

                    {/* Given Data */}
                    {structured.givenData && (
                      <p className="text-slate-800 leading-[1.7]">
                        <strong className="font-bold text-slate-900">Given: </strong>
                        <InlineFormattedText text={structured.givenData} />
                      </p>
                    )}

                    {/* Formula / Principle Applied */}
                    {structured.formulaUsed && (
                      <p className="text-slate-800 leading-[1.7]">
                        <strong className="font-bold text-slate-900">
                          {structured.isNumerical ? 'Formula: ' : 'Principle: '}
                        </strong>
                        <InlineFormattedText text={structured.formulaUsed} />
                      </p>
                    )}

                    {/* Step-by-Step Solution */}
                    <div className="space-y-1.5">
                      <div className="font-bold text-slate-900">Solution:</div>
                      <ol className="list-decimal pl-6 space-y-1.5 text-slate-800">
                        {structured.steps.map((step, sIdx) => (
                          <li key={sIdx} className="pl-1 leading-[1.75]">
                            <InlineFormattedText text={step} />
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Final Answer */}
                    {structured.finalAnswer && (
                      <p className="text-slate-950 leading-[1.7] pt-0.5">
                        <strong className="font-bold text-blue-950">Final Answer: </strong>
                        <InlineFormattedText text={structured.finalAnswer} />
                      </p>
                    )}

                    {/* Key Note */}
                    {ex.keyInsight && (
                      <p className="text-sm text-slate-600 italic leading-[1.7]">
                        <strong className="not-italic font-semibold text-slate-700">Note: </strong>
                        <InlineFormattedText text={ex.keyInsight} />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Real-Life Applications */}
        {hasRealLife && (
          <section
            id={`study-doc-${chapter.id}-real-life`}
            className="space-y-4 scroll-mt-20"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-950 pb-1.5 border-b border-slate-200">
              Real-Life Applications
            </h2>

            <ol className="list-decimal pl-6 space-y-2.5 text-slate-800">
              {studyMaterial.realLifeExamples.map((item, idx) => (
                <li key={idx} className="pl-1 leading-[1.75]">
                  <InlineFormattedText text={item} />
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {/* Document Footer */}
      <footer className="mt-12 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span>
          Learnify · {chapter.classLevel} · {subjectLabel} · Chapter {chapter.order}
        </span>

        {onProceedToPractice && (
          <button
            type="button"
            onClick={onProceedToPractice}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 cursor-pointer"
          >
            <span>Proceed to Practice Questions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </article>
  );

  if (standalonePage) {
    return <div className="py-6 px-3 sm:px-6 bg-slate-100/80">{documentPaper}</div>;
  }

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 overflow-y-auto bg-slate-100/80 py-5 px-3 sm:py-8 sm:px-6"
    >
      {documentPaper}
    </div>
  );
};
