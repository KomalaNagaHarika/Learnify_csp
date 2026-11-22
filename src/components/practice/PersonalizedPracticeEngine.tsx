import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getChaptersForGoalAndClass, getSubjectsForGoal } from '../../data/classSyllabusData';
import { QUESTION_BANK } from '../../data/mockData';
import { Question, ClassLevel, PreparationGoal, SubjectName } from '../../types';
import { Target, CheckCircle2, XCircle, RotateCcw, Compass, HeartPulse } from 'lucide-react';

interface PracticeQuestionsProps {
  setActiveTab: (tab: string) => void;
}

export const PersonalizedPracticeEngine: React.FC<PracticeQuestionsProps> = ({ setActiveTab }) => {
  const { user, recordPracticeAnswer, recordPracticeQuizCompleted } = useAuth();

  const [selectedGoal, setSelectedGoal] = useState<PreparationGoal>(
    user?.preparationGoal || 'JEE Foundation'
  );

  const [selectedClass, setSelectedClass] = useState<ClassLevel>(
    (user?.classLevel as ClassLevel) || 'Class 10'
  );

  const availableSubjects = getSubjectsForGoal(selectedGoal);

  const [selectedSubject, setSelectedSubject] = useState<SubjectName>(availableSubjects[0]);

  // If goal changes, ensure selectedSubject remains valid
  React.useEffect(() => {
    if (!availableSubjects.includes(selectedSubject)) {
      setSelectedSubject(availableSubjects[0]);
    }
  }, [selectedGoal]);

  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'all' | 'beginner' | 'intermediate' | 'advanced'
  >('all');

  // Question state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [quizAwardRecorded, setQuizAwardRecorded] = useState<boolean>(false);

  // Chapters for this goal, class and subject
  const subjectChapters = getChaptersForGoalAndClass(
    selectedGoal,
    selectedClass,
    selectedSubject
  );

  // Collect practice questions from these chapters + any in QUESTION_BANK
  const aggregatedQuestions = useMemo(() => {
    const list: Question[] = [];
    subjectChapters.forEach((ch) => {
      if (ch.practiceQuestions && ch.practiceQuestions.length > 0) {
        list.push(...ch.practiceQuestions);
      }
    });

    // Also include QUESTION_BANK items for this subject
    QUESTION_BANK.filter((q) => q.subject === selectedSubject).forEach((q) => {
      if (!list.some((existing) => existing.id === q.id)) {
        list.push(q);
      }
    });

    return list;
  }, [subjectChapters, selectedSubject]);

  // Filter questions by chapter and difficulty
  const filteredQuestions = aggregatedQuestions.filter((q) => {
    const matchChap = selectedChapterId === 'all' || q.chapterId === selectedChapterId;
    const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return matchChap && matchDiff;
  });

  // Calculate live score
  const submittedCount = Object.keys(submittedQuestions).length;
  const correctCount = Object.entries(submittedQuestions).filter(([qId]) => {
    const q = aggregatedQuestions.find((item) => item.id === qId);
    return q && userAnswers[qId]?.toLowerCase() === q.correctAnswer?.toLowerCase();
  }).length;

  const accuracyPct = submittedCount > 0 ? Math.round((correctCount / submittedCount) * 100) : 0;

  const handleSelectOption = (questionId: string, optionLetter: string) => {
    if (submittedQuestions[questionId]) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionLetter }));
  };

  const handleSubmitAnswer = (questionId: string) => {
    const selected = userAnswers[questionId];
    if (!selected || submittedQuestions[questionId]) return;

    const question = aggregatedQuestions.find((item) => item.id === questionId);
    const isCorrect = Boolean(
      question && selected.toLowerCase() === question.correctAnswer?.toLowerCase()
    );

    const nextSubmitted = { ...submittedQuestions, [questionId]: true };
    setSubmittedQuestions(nextSubmitted);
    recordPracticeAnswer(isCorrect);

    // Automatically record a completed practice quiz once the student finishes the filtered set (or 5+ questions)
    const filteredSubmittedCount = filteredQuestions.filter((q) => nextSubmitted[q.id]).length;
    const quizThreshold = Math.min(filteredQuestions.length, 5);
    if (!quizAwardRecorded && quizThreshold > 0 && filteredSubmittedCount >= quizThreshold) {
      setQuizAwardRecorded(true);
      recordPracticeQuizCompleted();
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmittedQuestions({});
    setQuizAwardRecorded(false);
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
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      {/* Header & Controls */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 font-bold text-xs border border-blue-200 flex items-center gap-1.5">
                {selectedGoal === 'NEET Foundation' ? (
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                )}
                <span>{selectedGoal}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-bold text-xs">
                {selectedClass}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Practice Questions &amp; MCQs
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              NCERT-aligned conceptual and standard MCQs with instant explanations for {selectedClass}.
            </p>
          </div>

          {/* Live Score Display */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Solved</span>
              <strong className="text-slate-900 text-sm">{submittedCount}</strong>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Correct</span>
              <strong className="text-emerald-700 text-sm">{correctCount}</strong>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Accuracy</span>
              <strong className="text-blue-900 text-sm">{accuracyPct}%</strong>
            </div>
          </div>
        </div>

        {/* Goal Selection Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1">Goal:</span>
          <button
            onClick={() => {
              setSelectedGoal('JEE Foundation');
              setSelectedChapterId('all');
            }}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedGoal === 'JEE Foundation'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>JEE (PCM)</span>
          </button>
          <button
            onClick={() => {
              setSelectedGoal('NEET Foundation');
              setSelectedChapterId('all');
            }}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedGoal === 'NEET Foundation'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>NEET (PCB)</span>
          </button>
        </div>

        {/* Class Selection Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1">Class:</span>
          {classOptions.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                setSelectedClass(cls);
                setSelectedChapterId('all');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedClass === cls
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        {/* Filters: Subject, Chapter, Difficulty */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          {/* Subject Filter */}
          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg">
              {availableSubjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    setSelectedSubject(sub);
                    setSelectedChapterId('all');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    selectedSubject === sub
                      ? sub === 'Biology'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Filter */}
          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Chapter</label>
            <select
              value={selectedChapterId}
              onChange={(e) => setSelectedChapterId(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Chapters ({subjectChapters.length})</option>
              {subjectChapters.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Ch {ch.order}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => {
            const isSubmitted = submittedQuestions[question.id];
            const chosenAnswer = userAnswers[question.id];
            const isCorrect = chosenAnswer?.toLowerCase() === question.correctAnswer?.toLowerCase();

            return (
              <div
                key={question.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-900">Question {index + 1}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600 font-medium">
                      {question.chapterTitle || selectedSubject}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                      {question.difficulty}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      +{question.marksPositive || 4} / -{question.marksNegative || 1}
                    </span>
                  </div>
                </div>

                {/* Question Text */}
                <div className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                  {question.questionText}
                </div>

                {/* MCQ Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {question.options?.map((opt, oIdx) => {
                    const optKey = opt.trim().charAt(0);
                    const isSelected = chosenAnswer === optKey;
                    const isOptionCorrect = question.correctAnswer?.toUpperCase() === optKey;

                    let btnClasses =
                      'p-3 rounded-xl border text-left transition-all cursor-pointer font-medium ';

                    if (isSubmitted) {
                      if (isOptionCorrect) {
                        btnClasses += 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (isSelected && !isOptionCorrect) {
                        btnClasses += 'border-red-400 bg-red-50 text-red-800 font-semibold';
                      } else {
                        btnClasses += 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                      }
                    } else {
                      if (isSelected) {
                        btnClasses +=
                          'border-blue-900 bg-blue-50 text-blue-900 font-bold shadow-xs';
                      } else {
                        btnClasses +=
                          'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(question.id, optKey)}
                        className={btnClasses}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Submit & Result Row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitAnswer(question.id)}
                      disabled={!chosenAnswer}
                      className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 disabled:opacity-40 text-white font-semibold text-xs transition-colors cursor-pointer self-end sm:self-auto"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs">
                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correct! (+{question.marksPositive || 4} marks)</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-red-600 font-bold">
                          <XCircle className="w-4 h-4" />
                          <span>
                            Incorrect. Correct answer is <strong>{question.correctAnswer}</strong> (-{question.marksNegative || 1} mark)
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Explanation Card */}
                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                    <strong className="text-slate-900 block font-bold">Detailed Explanation:</strong>
                    <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-xs text-slate-500 border border-slate-200">
            No questions found for the selected criteria. Try selecting "All Chapters" or "All Levels".
          </div>
        )}
      </div>
    </div>
  );
};
