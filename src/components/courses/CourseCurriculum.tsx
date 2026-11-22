import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getChaptersForGoalAndClass, getSubjectsForGoal } from '../../data/classSyllabusData';
import { getChapterPracticeMCQs, getChapterTestQuestions } from '../../data/chapterQuestionBank';
import { Chapter, ClassLevel, PreparationGoal, SubjectName } from '../../types';
import { ChapterCard } from './ChapterCard';
import { StudyMaterialViewer } from './StudyMaterialViewer';
import {
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
  Dna,
  Search,
  CheckCircle2,
  ChevronRight,
  X,
  Award,
  Timer,
  RotateCcw,
  Compass,
  HeartPulse,
  ArrowLeft,
  HelpCircle
} from 'lucide-react';

interface CourseCurriculumProps {
  setActiveTab: (tab: string) => void;
  defaultSubject?: SubjectName;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  setActiveTab,
  defaultSubject
}) => {
  const {
    user,
    progress,
    markChapterCompleted,
    recordPracticeAnswer,
    recordPracticeQuizCompleted,
    updateProfile
  } = useAuth();

  // Goal Selection (JEE Foundation vs NEET Foundation)
  const [selectedGoal, setSelectedGoal] = useState<PreparationGoal>(
    user?.preparationGoal || 'JEE Foundation'
  );

  // Class Selection (Class 6 - Class 12)
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(
    (user?.classLevel as ClassLevel) || 'Class 10'
  );

  // Dynamic available subjects for the goal
  const availableSubjects = getSubjectsForGoal(selectedGoal);

  // Selected subject: starts with defaultSubject if provided, else first available
  const [selectedSubject, setSelectedSubject] = useState<SubjectName>(() => {
    if (defaultSubject && availableSubjects.includes(defaultSubject)) {
      return defaultSubject;
    }
    return availableSubjects[0];
  });

  // Keep selectedSubject updated when defaultSubject changes
  useEffect(() => {
    if (defaultSubject && availableSubjects.includes(defaultSubject)) {
      setSelectedSubject(defaultSubject);
    }
  }, [defaultSubject, availableSubjects]);

  // Ensure selected subject is always valid for the active goal
  useEffect(() => {
    if (!availableSubjects.includes(selectedSubject)) {
      setSelectedSubject(availableSubjects[0]);
    }
  }, [selectedGoal]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  // Retrieve chapters for selected goal, class, and subject (exactly 5 chapters per subject)
  const classChapters = getChaptersForGoalAndClass(selectedGoal, selectedClass, selectedSubject);

  const displayedChapters = classChapters.filter((c) => {
    return (
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.topics && c.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  });

  const completedCount = classChapters.filter((c) =>
    progress.completedChapterIds.includes(c.id)
  ).length;
  const progressPercent = Math.round((completedCount / (classChapters.length || 1)) * 100);

  const handleSetCurrentClassAndGoal = () => {
    updateProfile({ classLevel: selectedClass, preparationGoal: selectedGoal });
  };

  const isCurrentEnrolled =
    user?.classLevel === selectedClass && user?.preparationGoal === selectedGoal;

  const getSubjectIcon = (sub: SubjectName) => {
    switch (sub) {
      case 'Physics':
        return <Atom className="w-4 h-4" />;
      case 'Chemistry':
        return <FlaskConical className="w-4 h-4" />;
      case 'Mathematics':
        return <Calculator className="w-4 h-4" />;
      case 'Biology':
        return <Dna className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const classOptions: ClassLevel[] = [
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

  return (
    <div className="space-y-6 pb-12 max-w-6xl mx-auto">
      {/* 1. Header with Back Button, Goal, Class, and Subject Navigation */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-3 py-1 rounded-full border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-1.5 cursor-pointer transition-colors mr-1 shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
                <span>Dashboard</span>
              </button>

              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 font-bold text-xs border border-blue-200 flex items-center gap-1.5">
                {selectedGoal === 'NEET Foundation' ? (
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                )}
                <span>{selectedGoal}</span>
              </span>

              {isCurrentEnrolled ? (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200">
                  Enrolled: {selectedClass}
                </span>
              ) : (
                <button
                  onClick={handleSetCurrentClassAndGoal}
                  className="px-2.5 py-0.5 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold text-xs cursor-pointer transition-colors"
                >
                  Set as My Enrolled Goal &amp; Class
                </button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {selectedClass} {selectedSubject} Chapters
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              5 class-specific foundation chapters with complete study materials, 10+ practice MCQs, and a 15-question test.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-semibold text-slate-500 block">
              {selectedSubject} Progress: {completedCount} / {classChapters.length} Chapters
            </span>
            <div className="w-40 bg-slate-100 h-2 rounded-full overflow-hidden mt-1.5 ml-auto">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  selectedSubject === 'Biology'
                    ? 'bg-emerald-600'
                    : selectedSubject === 'Chemistry'
                    ? 'bg-indigo-600'
                    : 'bg-blue-900'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step A: Goal Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2">Preparation Path:</span>
          <button
            onClick={() => setSelectedGoal('JEE Foundation')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedGoal === 'JEE Foundation'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>JEE Foundation (PCM)</span>
          </button>
          <button
            onClick={() => setSelectedGoal('NEET Foundation')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedGoal === 'NEET Foundation'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>NEET Foundation (PCB)</span>
          </button>
        </div>

        {/* Step B: Class Selection (Class 6 to Class 12) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2">Select Class:</span>
          {classOptions.map((cls) => {
            const isSelected = selectedClass === cls;
            return (
              <button
                key={cls}
                onClick={() => {
                  setSelectedClass(cls);
                  setSearchQuery('');
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cls}
              </button>
            );
          })}
        </div>

        {/* Step C: Core Subject Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2">Select Subject:</span>
          {availableSubjects.map((sub) => {
            const isSelected = selectedSubject === sub;
            return (
              <button
                key={sub}
                onClick={() => {
                  setSelectedSubject(sub);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                  isSelected
                    ? sub === 'Biology'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {getSubjectIcon(sub)}
                <span>{sub} (5 Chapters)</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${selectedClass} ${selectedSubject} chapters...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 2. Chapter Cards List (Standard minimal card design across all classes & subjects) */}
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

      {displayedChapters.length === 0 && (
        <div className="p-12 text-center text-xs text-slate-500 bg-white rounded-xl border border-slate-200">
          No chapters found matching "{searchQuery}" in {selectedClass} {selectedSubject} ({selectedGoal}).
        </div>
      )}

      {/* Chapter Detail Modal */}
      {activeChapter && (
        <ChapterDetailModal
          chapter={activeChapter}
          onClose={() => setActiveChapter(null)}
          onMarkDone={() => markChapterCompleted(activeChapter.id)}
          isCompleted={progress.completedChapterIds.includes(activeChapter.id)}
          onRecordPracticeAnswer={recordPracticeAnswer}
          onRecordPracticeQuizCompleted={recordPracticeQuizCompleted}
        />
      )}
    </div>
  );
};

// ============================================================================
// CHAPTER DETAIL MODAL (5 Study Material Sections + 10 Practice MCQs + 15 Test Qs)
// ============================================================================
interface ChapterDetailModalProps {
  chapter: Chapter;
  onClose: () => void;
  onMarkDone: () => void;
  isCompleted: boolean;
  onRecordPracticeAnswer: (isCorrect: boolean) => void;
  onRecordPracticeQuizCompleted: () => void;
}

const ChapterDetailModal: React.FC<ChapterDetailModalProps> = ({
  chapter,
  onClose,
  onMarkDone,
  isCompleted,
  onRecordPracticeAnswer,
  onRecordPracticeQuizCompleted
}) => {
  // Main modes: 'study' (5 sections) | 'practice' (10+ MCQs) | 'test' (15 test questions)
  const [mainTab, setMainTab] = useState<'study' | 'practice' | 'test'>('study');

  // Retrieve at least 10 practice MCQs & at least 15 test questions
  const practiceList = getChapterPracticeMCQs(chapter);
  const testQuestions = getChapterTestQuestions(chapter);

  // Practice state
  const [selectedPracticeAnswers, setSelectedPracticeAnswers] = useState<Record<string, string>>({});
  const [practiceQuizRecorded, setPracticeQuizRecorded] = useState(false);

  // Chapter Test state
  const [testAnswers, setTestAnswers] = useState<Record<string, string>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState<number | null>(null);
  const [testCorrectCount, setTestCorrectCount] = useState<number>(0);

  const handleSelectPracticeOption = (questionId: string, optKey: string, correctAns: string) => {
    const alreadyAnswered = Boolean(selectedPracticeAnswers[questionId]);
    const nextAnswers = { ...selectedPracticeAnswers, [questionId]: optKey };
    setSelectedPracticeAnswers(nextAnswers);

    if (!alreadyAnswered) {
      const isCorrect = optKey.toUpperCase() === correctAns.toUpperCase();
      onRecordPracticeAnswer(isCorrect);

      if (!practiceQuizRecorded && Object.keys(nextAnswers).length >= practiceList.length) {
        setPracticeQuizRecorded(true);
        onRecordPracticeQuizCompleted();
      }
    }
  };

  const handleTestSubmit = () => {
    let score = 0;
    let correct = 0;
    testQuestions.forEach((q) => {
      const studentAns = testAnswers[q.id];
      if (studentAns && studentAns.toUpperCase() === q.correctAnswer.toUpperCase()) {
        score += q.marksPositive || 4;
        correct += 1;
      } else if (studentAns) {
        score -= q.marksNegative || 1;
      }
    });
    setTestScore(score);
    setTestCorrectCount(correct);
    setTestSubmitted(true);
    onRecordPracticeQuizCompleted();
  };

  const handleResetTest = () => {
    setTestAnswers({});
    setTestSubmitted(false);
    setTestScore(null);
    setTestCorrectCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900">
              <span>{chapter.classLevel}</span>
              <span>·</span>
              <span>{chapter.subject}</span>
              <span>·</span>
              <span>Chapter {chapter.order}</span>
              <span>·</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  chapter.priority === 'High priority'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {chapter.priority || 'Foundation'}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              {chapter.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onMarkDone}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Primary Modal Tabs: Study Material | Practice MCQs | Chapter Test */}
        <div className="flex items-center gap-2 px-5 py-2.5 border-b border-slate-200 bg-white text-xs font-bold">
          <button
            onClick={() => setMainTab('study')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              mainTab === 'study'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Material</span>
          </button>

          <button
            onClick={() => setMainTab('practice')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              mainTab === 'practice'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Practice MCQs ({practiceList.length})</span>
          </button>

          <button
            onClick={() => setMainTab('test')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              mainTab === 'test'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>Chapter Test ({testQuestions.length} Qs)</span>
          </button>
        </div>

        {/* TAB 1: 5 STUDY MATERIAL SECTIONS (Shared reusable StudyMaterialViewer) */}
        {mainTab === 'study' && (
          <StudyMaterialViewer
            chapter={chapter}
            onProceedToPractice={() => setMainTab('practice')}
          />
        )}

        {/* TAB 2: AT LEAST 10 PRACTICE MCQS */}
        {mainTab === 'practice' && (
          <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm">
            <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-200 pb-3">
              <div>
                <span className="font-bold text-slate-900 text-sm block">
                  Practice Questions ({practiceList.length} MCQs)
                </span>
                <span className="text-slate-500">
                  Select an option to immediately test your understanding and view detailed teacher explanations.
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {practiceList.map((q, qIdx) => {
                const userChoice = selectedPracticeAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900">
                        Practice MCQ {qIdx + 1} of {practiceList.length}
                      </span>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        +4 / -1 marks
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                      {q.questionText}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options?.map((opt, oIdx) => {
                        const optKey = opt.trim().charAt(0);
                        const isChosen = userChoice === optKey;
                        const isCorrect = q.correctAnswer.toUpperCase() === optKey;

                        let btnStyle =
                          'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';

                        if (userChoice) {
                          if (isCorrect) {
                            btnStyle =
                              'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                          } else if (isChosen && !isCorrect) {
                            btnStyle =
                              'border-red-400 bg-red-50 text-red-800 font-semibold';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() =>
                              handleSelectPracticeOption(q.id, optKey, q.correctAnswer)
                            }
                            className={`p-3 rounded-xl border text-left transition-colors cursor-pointer leading-snug ${btnStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {userChoice && (
                      <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1.5 animate-in fade-in duration-150">
                        <div className="font-bold flex items-center justify-between">
                          <span>
                            {userChoice === q.correctAnswer.toUpperCase() ? (
                              <span className="text-emerald-700">✓ Correct Answer: Option {q.correctAnswer}</span>
                            ) : (
                              <span className="text-red-700">✗ Incorrect. Correct is Option {q.correctAnswer}</span>
                            )}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Answered: {Object.keys(selectedPracticeAnswers).length} / {practiceList.length}
              </span>
              <button
                onClick={() => setMainTab('test')}
                className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Take Chapter Test ({testQuestions.length} Questions)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: AT LEAST 15 CHAPTER TEST QUESTIONS */}
        {mainTab === 'test' && (
          <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm">
            {!testSubmitted ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      {chapter.title} – Official Chapter Test
                    </h3>
                    <p className="text-xs text-blue-200 mt-0.5">
                      {testQuestions.length} Questions · Total Marks: {testQuestions.length * 4} (+4 for correct, -1 for incorrect)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Timer className="w-4 h-4 text-blue-200" />
                      <span>Self-Paced Test</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {testQuestions.map((q, idx) => {
                    const studentChoice = testAnswers[q.id];
                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900">
                            Question {idx + 1} of {testQuestions.length}
                          </span>
                          <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            +4 / -1
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                          {q.questionText}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options?.map((opt, oIdx) => {
                            const optKey = opt.trim().charAt(0);
                            const isSelected = studentChoice === optKey;

                            return (
                              <button
                                key={oIdx}
                                onClick={() =>
                                  setTestAnswers({ ...testAnswers, [q.id]: optKey })
                                }
                                className={`p-3 rounded-xl border text-left transition-colors cursor-pointer leading-snug ${
                                  isSelected
                                    ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold'
                                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-600 font-medium">
                    Answered {Object.keys(testAnswers).length} of {testQuestions.length} questions
                  </span>
                  <button
                    onClick={handleTestSubmit}
                    className="px-6 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Test &amp; Calculate Score
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Result Summary Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Chapter Test Completed!</h3>
                  <div className="text-3xl font-extrabold text-blue-900">
                    {testScore} / {testQuestions.length * 4} Marks
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 pt-1">
                    <span>
                      Correct: <strong className="text-emerald-700">{testCorrectCount}</strong> / {testQuestions.length}
                    </span>
                    <span>
                      Attempted: <strong>{Object.keys(testAnswers).length}</strong> / {testQuestions.length}
                    </span>
                    <span>
                      Accuracy:{' '}
                      <strong>
                        {Object.keys(testAnswers).length > 0
                          ? Math.round(
                              (testCorrectCount / Object.keys(testAnswers).length) * 100
                            )
                          : 0}
                        %
                      </strong>
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-3">
                    <button
                      onClick={handleResetTest}
                      className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Chapter Test</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer shadow-2xs"
                    >
                      Close &amp; Continue Learning
                    </button>
                  </div>
                </div>

                {/* Detailed Review of All 15 Test Questions */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                    Detailed Question Review &amp; Explanations
                  </h4>

                  {testQuestions.map((q, idx) => {
                    const studentChoice = testAnswers[q.id];
                    const isCorrect = studentChoice?.toUpperCase() === q.correctAnswer.toUpperCase();

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border space-y-2.5 ${
                          !studentChoice
                            ? 'border-slate-200 bg-white'
                            : isCorrect
                            ? 'border-emerald-200 bg-emerald-50/20'
                            : 'border-red-200 bg-red-50/20'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900">Question {idx + 1}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              !studentChoice
                                ? 'bg-slate-100 text-slate-600'
                                : isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {!studentChoice
                              ? 'Unattempted (0)'
                              : isCorrect
                              ? '+4 Marks'
                              : '-1 Mark'}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-slate-900">
                          {q.questionText}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options?.map((opt, oIdx) => {
                            const optKey = opt.trim().charAt(0);
                            const isKeyCorrect = optKey === q.correctAnswer.toUpperCase();
                            const isKeyChosen = optKey === studentChoice?.toUpperCase();

                            let style = 'border-slate-200 bg-slate-50 text-slate-700';
                            if (isKeyCorrect) {
                              style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                            } else if (isKeyChosen && !isKeyCorrect) {
                              style = 'border-red-400 bg-red-50 text-red-800 font-semibold';
                            }

                            return (
                              <div
                                key={oIdx}
                                className={`p-2.5 rounded-lg border text-xs ${style}`}
                              >
                                {opt}
                              </div>
                            );
                          })}
                        </div>

                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                          <div className="font-bold">
                            Correct Answer: Option {q.correctAnswer}
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px]">
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
