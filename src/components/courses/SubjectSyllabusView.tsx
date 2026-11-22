import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_CHAPTERS, QUESTION_BANK } from '../../data/mockData';
import { Chapter, SubjectName, Question } from '../../types';
import { ChapterCard } from './ChapterCard';
import { StudyMaterialViewer } from './StudyMaterialViewer';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  X,
  Award,
  HelpCircle,
  FileText,
  Sparkles,
  Search,
  Filter,
  Check,
  Zap,
} from 'lucide-react';

interface SubjectSyllabusViewProps {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  setActiveTab: (tab: string) => void;
}

export const SubjectSyllabusView: React.FC<SubjectSyllabusViewProps> = ({
  subject,
  setActiveTab,
}) => {
  const { progress, markChapterCompleted } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  // Filter all chapters for this subject
  const subjectChapters = INITIAL_CHAPTERS.filter((c) => c.subject === subject);

  // Extract unique categories
  const categories = Array.from(
    new Set(subjectChapters.map((c) => c.category).filter(Boolean))
  ) as string[];

  // Filtered by category and search
  const displayedChapters = subjectChapters.filter((c) => {
    const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const completedCount = subjectChapters.filter((c) =>
    progress.completedChapterIds.includes(c.id)
  ).length;

  const percentage = Math.round((completedCount / (subjectChapters.length || 1)) * 100);

  // Subject-specific theme colors
  const themeColors = {
    Physics: {
      badgeBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
      progressBar: 'bg-blue-600',
      borderAccent: 'hover:border-blue-500',
      buttonBg: 'bg-blue-600 hover:bg-blue-700',
    },
    Chemistry: {
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      progressBar: 'bg-emerald-600',
      borderAccent: 'hover:border-emerald-500',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    },
    Mathematics: {
      badgeBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
      progressBar: 'bg-purple-600',
      borderAccent: 'hover:border-purple-500',
      buttonBg: 'bg-purple-600 hover:bg-purple-700',
    },
  }[subject];

  return (
    <div className="space-y-8 pb-16">
      {/* Subject Header with Progress */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${themeColors.badgeBg}`}>
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official JEE Main & Advanced Syllabus</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {subject} Complete Curriculum ({subjectChapters.length} Chapters)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Step-by-step concept notes, core definitions, mathematical formulas, solved examples, and multi-tier practice questions (Beginner, Intermediate, Advanced).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('practice')}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Practice Engine</span>
            </button>
          </div>
        </div>

        {/* Syllabus Progress Bar */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">
              Your {subject} Progress: <strong className="text-blue-600 dark:text-blue-400">{completedCount} of {subjectChapters.length}</strong> chapters completed
            </span>
            <span className="font-mono text-blue-600 dark:text-blue-400">{percentage}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className={`h-full ${themeColors.progressBar} transition-all duration-500`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        {/* Categories (e.g. Physical, Inorganic, Organic for Chemistry) */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Areas ({subjectChapters.length})
          </button>
          {categories.map((cat) => {
            const count = subjectChapters.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder={`Search ${subject} chapters...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Chapter Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            isCompleted={progress.completedChapterIds.includes(chapter.id)}
            onOpen={setActiveChapter}
          />
        ))}
      </div>

      {/* Lesson Drawer Modal */}
      {activeChapter && (
        <SubjectLessonModal
          chapter={activeChapter}
          onClose={() => setActiveChapter(null)}
          onMarkDone={() => markChapterCompleted(activeChapter.id)}
          isCompleted={progress.completedChapterIds.includes(activeChapter.id)}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
};

interface SubjectLessonModalProps {
  chapter: Chapter;
  onClose: () => void;
  onMarkDone: () => void;
  isCompleted: boolean;
  setActiveTab: (tab: string) => void;
}

const SubjectLessonModal: React.FC<SubjectLessonModalProps> = ({
  chapter,
  onClose,
  onMarkDone,
  isCompleted,
  setActiveTab,
}) => {
  const [activeTab, setActiveLessonTab] = useState<'study' | 'practice' | 'quiz'>('study');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = QUESTION_BANK.filter((q) => chapter.quizQuestionIds.includes(q.id));

  const handleOptionSelect = (qId: string, optionLetter: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionLetter }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>{chapter.subject}</span>
              {chapter.category && <span>· {chapter.category}</span>}
              <span>· Chapter {chapter.order}</span>
              <span>· {chapter.classLevel}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {chapter.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs font-semibold overflow-x-auto">
          {[
            { id: 'study', label: 'Study Material' },
            { id: 'practice', label: 'Multi-Tier Practice' },
            { id: 'quiz', label: `Chapter Quiz (${quizQuestions.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLessonTab(tab.id as any)}
              className={`px-3.5 py-2.5 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Unified 5-section Study Material */}
        {activeTab === 'study' && (
          <StudyMaterialViewer
            chapter={chapter}
            onProceedToPractice={() => setActiveLessonTab('practice')}
          />
        )}

        {/* Modal Body Content for Practice & Quiz */}
        {activeTab !== 'study' && (
          <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm">
          {/* TAB 4: Multi-Tier Practice */}
          {activeTab === 'practice' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">3-Tier Mastery Ladder:</div>
                <p className="text-slate-500">Solve in sequence to transition from school textbooks to JEE Advanced multi-concept level.</p>
              </div>

              {chapter.practiceByTier && (
                <div className="space-y-4">
                  {/* Tier 1: Beginner */}
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="font-bold text-emerald-600 text-xs uppercase tracking-wide">
                      Tier 1: Foundation (School to JEE Main Basic)
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {chapter.practiceByTier.beginner.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tier 2: Intermediate */}
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="font-bold text-blue-600 text-xs uppercase tracking-wide">
                      Tier 2: JEE Main Standard
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {chapter.practiceByTier.intermediate.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tier 3: Advanced */}
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="font-bold text-purple-600 text-xs uppercase tracking-wide">
                      Tier 3: JEE Advanced (Multi-Concept & Derivation)
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {chapter.practiceByTier.advanced.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: Quiz */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {quizQuestions.length === 0 ? (
                <div className="p-8 text-center text-slate-500 space-y-3">
                  <p>Comprehensive quiz questions for this chapter are available in the Adaptive Practice engine.</p>
                  <button
                    onClick={() => {
                      onClose();
                      setActiveTab('practice');
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                  >
                    Launch Adaptive Practice
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {quizQuestions.map((q) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {q.questionText}
                      </div>

                      {q.options && (
                        <div className="space-y-2 pt-2">
                          {q.options.map((opt) => {
                            const letter = opt.substring(0, 1);
                            const isSelected = selectedAnswers[q.id] === letter;
                            const isCorrect = q.correctAnswer === letter;
                            let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900';

                            if (quizSubmitted) {
                              if (isCorrect) {
                                btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
                              } else if (isSelected && !isCorrect) {
                                btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-200';
                              }
                            } else if (isSelected) {
                              btnStyle = 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold';
                            }

                            return (
                              <button
                                key={opt}
                                onClick={() => handleOptionSelect(q.id, letter)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                          <div className="font-bold text-blue-700 dark:text-blue-400">Explanation:</div>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {!quizSubmitted && (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                    >
                      Submit Quiz & Check Answers
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onMarkDone();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-600 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Marked Completed' : 'Mark Lesson Done'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
