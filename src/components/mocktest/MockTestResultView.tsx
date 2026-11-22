import React, { useState } from 'react';
import { MockTestAttemptResult } from '../../types/mockTest';
import { InlineFormattedText } from '../common/FormattedContent';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Clock,
  Award,
  Target,
  BarChart3,
  BookOpen,
  RotateCcw,
  Eye,
} from 'lucide-react';

interface MockTestResultViewProps {
  result: MockTestAttemptResult;
  onBack: () => void;
  onRetake?: () => void;
  readOnlyHistory?: boolean;
  defaultShowReview?: boolean;
}

export function formatDurationReadable(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hrs > 0) {
    return `${hrs}h ${mins}m ${secs}s`;
  }
  if (mins > 0) {
    return `${mins}m ${secs}s`;
  }
  return `${secs}s`;
}

export const MockTestResultView: React.FC<MockTestResultViewProps> = ({
  result,
  onBack,
  onRetake,
  readOnlyHistory = false,
  defaultShowReview = false,
}) => {
  const [showReview, setShowReview] = useState<boolean>(defaultShowReview);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unanswered'>('all');

  const filteredReviewItems = result.reviewItems.filter((item) => {
    if (reviewFilter === 'correct') return item.isCorrect;
    if (reviewFilter === 'incorrect') return !item.isUnanswered && !item.isCorrect;
    if (reviewFilter === 'unanswered') return item.isUnanswered;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-14">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900 hover:text-blue-700 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{readOnlyHistory ? 'Back to Mock Test History' : 'Back to Mock Tests'}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowReview((prev) => !prev)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              showReview
                ? 'bg-slate-900 text-white'
                : 'bg-blue-900 hover:bg-blue-800 text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{showReview ? 'Hide Answer Review' : 'Review Answers'}</span>
          </button>

          {onRetake && !readOnlyHistory && (
            <button
              type="button"
              onClick={onRetake}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>
          )}
        </div>
      </div>

      {/* Score Banner */}
      <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-blue-200">
          <div className="flex flex-wrap items-center gap-2">
            <span>{result.foundation}</span>
            <span aria-hidden="true">·</span>
            <span>{result.classLevel}</span>
            <span aria-hidden="true">·</span>
            <span>{result.subject}</span>
            <span aria-hidden="true">·</span>
            <span>{result.testType}</span>
          </div>
          <span>
            Submitted {new Date(result.submittedAt).toLocaleString()}
            {result.autoSubmitted ? ' (Auto-submitted on timeout)' : ''}
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{result.testTitle}</h1>
          {readOnlyHistory && (
            <p className="text-xs text-blue-200">
              Completed attempt record — scores are locked and preserved for answer review.
            </p>
          )}
        </div>

        {/* Core Score Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs text-blue-200 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Total Score</span>
            </div>
            <div className="text-2xl font-bold mt-1 tabular-nums">
              {result.score} <span className="text-sm font-medium text-blue-200">/ {result.totalMarks}</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs text-blue-200">Percentage</div>
            <div className="text-2xl font-bold mt-1 tabular-nums">{result.percentage}%</div>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs text-blue-200 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Accuracy</span>
            </div>
            <div className="text-2xl font-bold mt-1 text-emerald-300 tabular-nums">
              {result.accuracy}%
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs text-blue-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Time Taken</span>
            </div>
            <div className="text-2xl font-bold mt-1 tabular-nums">
              {formatDurationReadable(result.timeTakenSeconds)}
            </div>
          </div>
        </div>
      </div>

      {/* Question Breakdown Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Correct Answers</div>
            <div className="text-2xl font-bold text-emerald-700 mt-1 tabular-nums">
              {result.correctCount}
            </div>
          </div>
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Incorrect Answers</div>
            <div className="text-2xl font-bold text-red-600 mt-1 tabular-nums">
              {result.incorrectCount}
            </div>
          </div>
          <XCircle className="w-7 h-7 text-red-500" />
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-slate-500">Unanswered Questions</div>
            <div className="text-2xl font-bold text-slate-700 mt-1 tabular-nums">
              {result.unansweredCount}
            </div>
          </div>
          <MinusCircle className="w-7 h-7 text-slate-400" />
        </div>
      </div>

      {/* Subject-wise Performance */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-800" />
          <span>Subject-wise Performance</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-xs">
                <th className="py-2.5 pr-4 font-semibold">Subject</th>
                <th className="py-2.5 px-3 font-semibold text-center">Score</th>
                <th className="py-2.5 px-3 font-semibold text-center">Correct</th>
                <th className="py-2.5 px-3 font-semibold text-center">Incorrect</th>
                <th className="py-2.5 px-3 font-semibold text-center">Unanswered</th>
                <th className="py-2.5 pl-3 font-semibold text-right">Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.subjectPerformance.map((subj) => (
                <tr key={subj.subject}>
                  <td className="py-3 pr-4 font-bold text-slate-900">{subj.subject}</td>
                  <td className="py-3 px-3 text-center font-semibold text-blue-900 tabular-nums">
                    {subj.score} / {subj.totalMarks}
                  </td>
                  <td className="py-3 px-3 text-center text-emerald-700 font-semibold tabular-nums">
                    {subj.correct}
                  </td>
                  <td className="py-3 px-3 text-center text-red-600 font-semibold tabular-nums">
                    {subj.incorrect}
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500 tabular-nums">
                    {subj.unanswered}
                  </td>
                  <td className="py-3 pl-3 text-right font-bold text-slate-900 tabular-nums">
                    {subj.accuracy}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chapter-wise Performance */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-800" />
          <span>Chapter-wise Performance</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-xs">
                <th className="py-2.5 pr-4 font-semibold">Chapter</th>
                <th className="py-2.5 px-3 font-semibold">Subject</th>
                <th className="py-2.5 px-3 font-semibold text-center">Score</th>
                <th className="py-2.5 px-3 font-semibold text-center">Correct / Total</th>
                <th className="py-2.5 pl-3 font-semibold text-right">Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.chapterPerformance.map((chap) => (
                <tr key={chap.chapterId}>
                  <td className="py-3 pr-4 font-semibold text-slate-900">{chap.chapterTitle}</td>
                  <td className="py-3 px-3 text-slate-600">{chap.subject}</td>
                  <td className="py-3 px-3 text-center font-semibold text-blue-900 tabular-nums">
                    {chap.score} / {chap.totalMarks}
                  </td>
                  <td className="py-3 px-3 text-center text-slate-700 tabular-nums">
                    {chap.correct} / {chap.totalQuestions}
                  </td>
                  <td className="py-3 pl-3 text-right font-bold tabular-nums">
                    <span
                      className={
                        chap.accuracy >= 70
                          ? 'text-emerald-700'
                          : chap.accuracy >= 40
                            ? 'text-amber-700'
                            : 'text-red-600'
                      }
                    >
                      {chap.accuracy}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prominent Review Answers CTA when collapsed */}
      {!showReview && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Detailed Question-by-Question Answer Review
            </h3>
            <p className="text-xs text-slate-500">
              Inspect every question, compare your selected answer with the official answer key, view marks awarded, and read explanations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowReview(true)}
            className="px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Review Answers ({result.reviewItems.length})</span>
          </button>
        </div>
      )}

      {/* Detailed Answer Review List */}
      {showReview && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900">
              Answer Review ({filteredReviewItems.length} of {result.reviewItems.length})
            </h2>
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {(
                [
                  { id: 'all', label: `All (${result.totalQuestions})` },
                  { id: 'correct', label: `Correct (${result.correctCount})` },
                  { id: 'incorrect', label: `Incorrect (${result.incorrectCount})` },
                  { id: 'unanswered', label: `Unanswered (${result.unansweredCount})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setReviewFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    reviewFilter === tab.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredReviewItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2 text-slate-500">
                    <span className="font-bold text-slate-900">Question {item.questionNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-blue-900">{item.subject}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.chapterTitle}</span>
                  </div>

                  <div className="flex items-center gap-3 font-bold">
                    <span
                      className={
                        item.isUnanswered
                          ? 'text-slate-500'
                          : item.isCorrect
                            ? 'text-emerald-700'
                            : 'text-red-600'
                      }
                    >
                      {item.isUnanswered ? 'Unanswered' : item.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                    <span className="text-slate-400">|</span>
                    <span
                      className={
                        item.marksAwarded > 0
                          ? 'text-emerald-700'
                          : item.marksAwarded < 0
                            ? 'text-red-600'
                            : 'text-slate-600'
                      }
                    >
                      Marks: {item.marksAwarded > 0 ? `+${item.marksAwarded}` : item.marksAwarded}
                    </span>
                  </div>
                </div>

                {/* Question Text */}
                <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  <InlineFormattedText text={item.questionText} />
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {item.options.map((opt) => {
                    const letter = opt.charAt(0).toUpperCase();
                    const isCorrectOpt = letter === item.correctAnswer;
                    const isSelectedOpt = letter === item.selectedAnswer;

                    let style = 'border-slate-200 bg-white text-slate-800';
                    if (isCorrectOpt) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                    } else if (isSelectedOpt && !isCorrectOpt) {
                      style = 'border-red-400 bg-red-50 text-red-950';
                    }

                    return (
                      <div
                        key={opt}
                        className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start justify-between gap-3 ${style}`}
                      >
                        <div className="leading-relaxed">
                          <InlineFormattedText text={opt} />
                        </div>
                        <div className="shrink-0 text-[11px] font-bold">
                          {isCorrectOpt && <span className="text-emerald-700">Correct Answer</span>}
                          {isSelectedOpt && !isCorrectOpt && (
                            <span className="text-red-600">Your Answer</span>
                          )}
                          {isSelectedOpt && isCorrectOpt && (
                            <span className="text-emerald-700"> (Your Answer)</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Answer Summary Row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-slate-600 pt-1">
                  <span>
                    Your Selected Answer:{' '}
                    <strong className="text-slate-900">
                      {item.selectedAnswer || 'Not Attempted'}
                    </strong>
                  </span>
                  <span>
                    Official Correct Answer:{' '}
                    <strong className="text-emerald-700">{item.correctAnswer}</strong>
                  </span>
                </div>

                {/* Explanation */}
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                  <div className="font-bold text-blue-950">Explanation:</div>
                  <div className="leading-relaxed">
                    <InlineFormattedText text={item.explanation} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
