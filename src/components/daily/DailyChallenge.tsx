import React, { useState } from 'react';
import { DAILY_CHALLENGES } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import { Flame, CheckCircle, XCircle, Sparkles, Award, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyChallengeProps {
  setActiveTab: (tab: string) => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({ setActiveTab }) => {
  const { progress } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [completedToday, setCompletedToday] = useState(false);

  const handleSelect = (qId: string, optLetter: string) => {
    if (submitted[qId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optLetter }));
  };

  const handleCheck = (qId: string) => {
    setSubmitted((prev) => ({ ...prev, [qId]: true }));
    const allSubmitted = DAILY_CHALLENGES.every((q) => submitted[q.id] || q.id === qId);
    if (allSubmitted) {
      setCompletedToday(true);
      try {
        confetti({ particleCount: 70, spread: 60 });
      } catch (e) {}
    }
  };

  const toggleHint = (qId: string) => {
    setShowHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white shadow-xl space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-amber-200">
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-300" />
            <span>Daily Streak: {progress.streakDays} Days</span>
          </span>
          <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Daily JEE 4-Question Sprint
        </h1>
        <p className="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed">
          One Physics question, one Chemistry question, one Mathematics question, and one Bonus Advanced question. 15 minutes of deliberate practice every single morning transforms your preparation.
        </p>
      </div>

      {/* Completion Banner */}
      {completedToday && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Awesome! You completed today's 4-question challenge. Your streak has extended to {progress.streakDays + 1} days!</span>
          </div>
          <button onClick={() => setActiveTab('dashboard')} className="font-bold underline text-emerald-700">
            View Dashboard
          </button>
        </div>
      )}

      {/* Questions Stack */}
      <div className="space-y-6">
        {DAILY_CHALLENGES.map((q, idx) => {
          const isDone = submitted[q.id];
          const chosen = selectedAnswers[q.id];
          const isCorrect = chosen === q.correctAnswer;
          const hintOpen = showHints[q.id];

          return (
            <div
              key={q.id}
              className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all ${
                isDone
                  ? isCorrect
                    ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/15'
                    : 'border-red-300 dark:border-red-800 bg-red-50/15'
                  : 'border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Question {idx + 1} · {q.subject}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold uppercase">
                  {q.difficulty}
                </span>
              </div>

              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white my-3">
                {q.questionText}
              </p>

              {/* Options */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt, oIdx) => {
                  const letter = ['A', 'B', 'C', 'D'][oIdx];
                  const isSelected = chosen === letter;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(q.id, letter)}
                      className={`w-full text-left p-3 rounded-2xl text-xs sm:text-sm border transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-semibold'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                      } ${
                        isDone && letter === q.correctAnswer
                          ? '!border-emerald-500 !bg-emerald-50 dark:!bg-emerald-950/40 !text-emerald-700 dark:!text-emerald-300'
                          : ''
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                      }`}>
                        {letter}
                      </div>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <button
                  onClick={() => toggleHint(q.id)}
                  className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{hintOpen ? 'Hide Hint' : 'Need a Hint?'}</span>
                </button>

                {!isDone ? (
                  <button
                    onClick={() => handleCheck(q.id)}
                    disabled={!chosen}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold cursor-pointer transition-colors shadow-sm"
                  >
                    Check Answer
                  </button>
                ) : (
                  <span className="font-bold flex items-center gap-1 text-xs">
                    {isCorrect ? (
                      <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Correct</span>
                    ) : (
                      <span className="text-red-600 flex items-center gap-1"><XCircle className="w-4 h-4" /> Incorrect</span>
                    )}
                  </span>
                )}
              </div>

              {/* Hint Box */}
              {hintOpen && (
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 mt-3">
                  <strong>Hint:</strong> {q.hint}
                </div>
              )}

              {/* Solution Box */}
              {isDone && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1 mt-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Solution & Concept:</span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
