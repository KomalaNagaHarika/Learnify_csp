import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  MockTestAttemptResult,
  MockTestSessionPayload,
  MockTestSummary,
} from '../../types/mockTest';
import {
  autosaveMockTestProgress,
  startMockTestSession,
  submitMockTestSession,
} from '../../services/mockTestApi';
import { useAuth } from '../../context/AuthContext';
import { InlineFormattedText } from '../common/FormattedContent';
import { MockTestResultView } from './MockTestResultView';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  RotateCcw,
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Grid,
  X,
  User,
  ShieldCheck,
} from 'lucide-react';

interface NtaExamSimulatorProps {
  testSummary: MockTestSummary;
  initialSession?: MockTestSessionPayload | null;
  onExit: () => void;
  onAttemptCompleted?: (attempt: MockTestAttemptResult) => void;
}

const ACTIVE_SESSION_STORAGE_PREFIX = 'learnify_active_mock_session_';

export function getStoredActiveSessionId(studentId: string): string | null {
  try {
    const raw = localStorage.getItem(`${ACTIVE_SESSION_STORAGE_PREFIX}${studentId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { sessionId?: string };
    return parsed?.sessionId || null;
  } catch {
    return null;
  }
}

export function clearStoredActiveSession(studentId: string): void {
  try {
    localStorage.removeItem(`${ACTIVE_SESSION_STORAGE_PREFIX}${studentId}`);
  } catch {
    // ignore storage failures
  }
}

function formatTimer(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export const NtaExamSimulator: React.FC<NtaExamSimulatorProps> = ({
  testSummary,
  initialSession = null,
  onExit,
  onAttemptCompleted,
}) => {
  const { user, saveTestAttempt } = useAuth();
  const studentId = user?.uid || 'guest-student';
  const studentName = user?.fullName || 'Student';

  // Phase 1: Instructions -> Phase 2: Active Session -> Phase 3: Submitted Result
  const [session, setSession] = useState<MockTestSessionPayload | null>(initialSession);
  const [acceptedInstructions, setAcceptedInstructions] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Active exam state
  const [currentIndex, setCurrentIndex] = useState<number>(initialSession?.savedCurrentIndex || 0);
  const [answers, setAnswers] = useState<Record<string, string>>(
    initialSession?.savedAnswers || {}
  );
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>(
    initialSession?.savedMarkedForReview || {}
  );
  const [visitedIds, setVisitedIds] = useState<Set<string>>(() => {
    const set = new Set<string>(initialSession?.savedVisitedIds || []);
    if (initialSession?.questions[0]) set.add(initialSession.questions[0].id);
    return set;
  });
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(
    initialSession ? initialSession.remainingSeconds : testSummary.durationMinutes * 60
  );

  // UI & submission controls
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showMobilePalette, setShowMobilePalette] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<MockTestAttemptResult | null>(null);

  // Refs to prevent stale closures during auto-submit and block duplicate submissions
  const answersRef = useRef(answers);
  const submittingLockRef = useRef(false);
  const saveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Persist local backup on every state update during an active session
  useEffect(() => {
    if (!session || result) return;
    try {
      localStorage.setItem(
        `${ACTIVE_SESSION_STORAGE_PREFIX}${studentId}`,
        JSON.stringify({
          sessionId: session.sessionId,
          testId: session.test.id,
          answers,
          markedForReview,
          visitedIds: Array.from(visitedIds),
          currentIndex,
        })
      );
    } catch {
      // ignore quota errors
    }
  }, [session, result, studentId, answers, markedForReview, visitedIds, currentIndex]);

  // Debounced server-side autosave
  const scheduleServerAutosave = useCallback(
    (
      nextAnswers: Record<string, string>,
      nextMarked: Record<string, boolean>,
      nextVisited: Set<string>,
      nextIdx: number
    ) => {
      if (!session || result || submittingLockRef.current) return;
      if (saveTimeoutRef.current) {
        window.clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = window.setTimeout(() => {
        autosaveMockTestProgress(session.sessionId, {
          studentId,
          answers: nextAnswers,
          markedForReview: nextMarked,
          visitedIds: Array.from(nextVisited),
          currentIndex: nextIdx,
        }).catch(() => {
          // Local storage backup stays intact if temporarily disconnected
        });
      }, 350);
    },
    [session, result, studentId]
  );

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        window.clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Final submission handler (server-side grading + duplicate submission lock)
  const handleFinalSubmit = useCallback(
    async (autoSubmitted = false) => {
      if (!session || submittingLockRef.current || result) return;
      submittingLockRef.current = true;
      setIsSubmitting(true);
      setShowSubmitModal(false);
      setErrorMsg(null);

      try {
        const evaluated = await submitMockTestSession(session.sessionId, {
          studentId,
          answers: answersRef.current,
          autoSubmitted,
        });
        clearStoredActiveSession(studentId);
        setResult(evaluated);

        // Sync with existing AuthContext progress & legacy testAttempts state
        const phys = evaluated.subjectPerformance.find((s) => s.subject === 'Physics');
        const chem = evaluated.subjectPerformance.find((s) => s.subject === 'Chemistry');
        const math = evaluated.subjectPerformance.find((s) => s.subject === 'Mathematics');
        const bio = evaluated.subjectPerformance.find((s) => s.subject === 'Biology');

        saveTestAttempt({
          attemptId: evaluated.attemptId,
          studentId: evaluated.studentId,
          testId: evaluated.testId,
          testTitle: evaluated.testTitle,
          examinationType: evaluated.testType,
          score: evaluated.score,
          totalMarks: evaluated.totalMarks,
          accuracy: evaluated.accuracy,
          timeTakenSeconds: evaluated.timeTakenSeconds,
          correctCount: evaluated.correctCount,
          incorrectCount: evaluated.incorrectCount,
          unattemptedCount: evaluated.unansweredCount,
          subjectScores: {
            Physics: { score: phys?.score || 0, total: phys?.totalMarks || 0 },
            Chemistry: { score: chem?.score || 0, total: chem?.totalMarks || 0 },
            ...(math ? { Mathematics: { score: math.score, total: math.totalMarks } } : {}),
            ...(bio ? { Biology: { score: bio.score, total: bio.totalMarks } } : {}),
          },
          answers: answersRef.current,
          submittedAt: evaluated.submittedAt,
        });

        onAttemptCompleted?.(evaluated);
      } catch (err) {
        submittingLockRef.current = false;
        setErrorMsg(
          err instanceof Error
            ? err.message
            : 'Unable to submit your test right now. Your answers are saved—please try again.'
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [session, result, studentId, saveTestAttempt, onAttemptCompleted]
  );

  // Start test from Instructions Page (countdown timer begins ONLY here)
  const handleStartExam = async () => {
    if (isStarting) return;
    setIsStarting(true);
    setErrorMsg(null);
    try {
      const created = await startMockTestSession(testSummary.id, studentId, studentName);
      setSession(created);
      setCurrentIndex(0);
      setAnswers(created.savedAnswers || {});
      setMarkedForReview(created.savedMarkedForReview || {});
      const initialVisited = new Set<string>(created.savedVisitedIds || []);
      if (created.questions[0]) initialVisited.add(created.questions[0].id);
      setVisitedIds(initialVisited);
      setTimeLeftSeconds(created.remainingSeconds);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Unable to start the test. Please try again.'
      );
    } finally {
      setIsStarting(false);
    }
  };

  // Live countdown timer — runs ONLY while an active unsubmitted session exists
  useEffect(() => {
    if (!session || result) return;

    const tick = () => {
      const remaining = Math.max(
        0,
        Math.floor((new Date(session.expiresAt).getTime() - Date.now()) / 1000)
      );
      setTimeLeftSeconds(remaining);
      if (remaining <= 0 && !submittingLockRef.current) {
        handleFinalSubmit(true);
      }
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [session, result, handleFinalSubmit]);

  // Warn before accidentally closing/reloading browser tab mid-exam
  useEffect(() => {
    if (!session || result) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [session, result]);

  // Status counts for palette legend & confirmation modal
  const statusCounts = useMemo(() => {
    if (!session) {
      return {
        answered: 0,
        notAnswered: 0,
        notVisited: 0,
        markedOnly: 0,
        answeredAndMarked: 0,
        totalAnswered: 0,
        totalUnanswered: 0,
      };
    }
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedOnly = 0;
    let answeredAndMarked = 0;

    for (const q of session.questions) {
      const hasAns = Boolean(answers[q.id]);
      const isMarked = Boolean(markedForReview[q.id]);
      const isVisited = visitedIds.has(q.id);

      if (hasAns && isMarked) {
        answeredAndMarked++;
      } else if (hasAns) {
        answered++;
      } else if (isMarked) {
        markedOnly++;
      } else if (isVisited) {
        notAnswered++;
      } else {
        notVisited++;
      }
    }

    const totalAnswered = answered + answeredAndMarked;
    return {
      answered,
      notAnswered,
      notVisited,
      markedOnly,
      answeredAndMarked,
      totalAnswered,
      totalUnanswered: session.questions.length - totalAnswered,
    };
  }, [session, answers, markedForReview, visitedIds]);

  // Phase 3: Show Results & Analysis after submission
  if (result) {
    return (
      <MockTestResultView
        result={result}
        onBack={onExit}
        onRetake={() => {
          submittingLockRef.current = false;
          setResult(null);
          setSession(null);
          setAcceptedInstructions(false);
          setAnswers({});
          setMarkedForReview({});
          setVisitedIds(new Set());
          setCurrentIndex(0);
        }}
      />
    );
  }

  // ============================================================================
  // PHASE 1: TEST INSTRUCTIONS PAGE (Timer has NOT started yet)
  // ============================================================================
  if (!session) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900 hover:text-blue-700 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mock Test Library</span>
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 text-white p-6 sm:p-8 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-blue-200 font-semibold">
              <span>{testSummary.foundation}</span>
              <span aria-hidden="true">·</span>
              <span>{testSummary.classLevel}</span>
              <span aria-hidden="true">·</span>
              <span>{testSummary.subject}</span>
              <span aria-hidden="true">·</span>
              <span>{testSummary.difficulty}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              {testSummary.title}
            </h1>
            <p className="text-xs text-blue-200">{testSummary.examPatternLabel}</p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Test Overview Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-medium">Questions</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">
                  {testSummary.questionCount}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-medium">Duration</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">
                  {testSummary.durationMinutes} mins
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-medium">Total Marks</div>
                <div className="text-lg font-bold text-blue-900 mt-0.5">
                  {testSummary.totalMarks}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-medium">Marking Scheme</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">
                  +{testSummary.marksPositive} /{' '}
                  {testSummary.marksNegative > 0 ? `-${testSummary.marksNegative}` : '0'}
                </div>
              </div>
            </div>

            {/* Detailed Instructions */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                General Examination Instructions
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {testSummary.instructions.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ol>
            </div>

            {/* Question Navigation Palette Legend */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Question Navigation Palette Legend
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>Not visited yet</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded bg-red-500 text-white font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>Visited but not answered</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded bg-purple-600 text-white font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <span>Marked for review</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <span className="relative w-6 h-6 rounded bg-purple-600 text-white font-bold flex items-center justify-center shrink-0">
                    5
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white absolute -top-1 -right-1" />
                  </span>
                  <span>Answered and marked for review (will be evaluated on submission)</span>
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMsg}
              </div>
            )}

            {/* Declaration & Start Button */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <label className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acceptedInstructions}
                  onChange={(e) => setAcceptedInstructions(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-700"
                />
                <span>
                  I have read and understood all instructions, marking rules, and timing conditions. I am ready to begin the examination.
                </span>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-blue-800" />
                  <span>Timer starts only when you click Start Test</span>
                </div>

                <button
                  type="button"
                  disabled={!acceptedInstructions || isStarting}
                  onClick={handleStartExam}
                  className="px-6 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {isStarting ? 'Starting Examination...' : 'Start Test'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // PHASE 2: COMPUTER-BASED EXAMINATION INTERFACE
  // ============================================================================
  const questions = session.questions;
  const currentQ = questions[currentIndex] || questions[0];
  const selectedOption = answers[currentQ.id] || '';
  const isCurrentMarked = Boolean(markedForReview[currentQ.id]);

  const navigateTo = (nextIdx: number) => {
    const bounded = Math.max(0, Math.min(questions.length - 1, nextIdx));
    const targetQ = questions[bounded];
    const nextVisited = new Set(visitedIds);
    if (targetQ) nextVisited.add(targetQ.id);
    setVisitedIds(nextVisited);
    setCurrentIndex(bounded);
    setShowMobilePalette(false);
    scheduleServerAutosave(answers, markedForReview, nextVisited, bounded);
  };

  const handleSelectOption = (letter: string) => {
    const nextAnswers = { ...answers, [currentQ.id]: letter };
    const nextVisited = new Set(visitedIds);
    nextVisited.add(currentQ.id);
    setAnswers(nextAnswers);
    setVisitedIds(nextVisited);
    scheduleServerAutosave(nextAnswers, markedForReview, nextVisited, currentIndex);
  };

  const handleClearResponse = () => {
    const nextAnswers = { ...answers };
    delete nextAnswers[currentQ.id];
    setAnswers(nextAnswers);
    scheduleServerAutosave(nextAnswers, markedForReview, visitedIds, currentIndex);
  };

  const handleSaveAndNext = () => {
    // Clearing review mark if user explicitly clicks Save & Next? Keep explicit mark only if not cleared, or clear review flag as in standard CBT:
    const nextMarked = { ...markedForReview };
    if (nextMarked[currentQ.id]) {
      delete nextMarked[currentQ.id];
      setMarkedForReview(nextMarked);
    }
    const nextIdx = currentIndex < questions.length - 1 ? currentIndex + 1 : currentIndex;
    const nextVisited = new Set(visitedIds);
    nextVisited.add(currentQ.id);
    if (questions[nextIdx]) nextVisited.add(questions[nextIdx].id);
    setVisitedIds(nextVisited);
    setCurrentIndex(nextIdx);
    scheduleServerAutosave(answers, nextMarked, nextVisited, nextIdx);
  };

  const handleMarkForReviewAndNext = () => {
    const nextMarked = { ...markedForReview, [currentQ.id]: true };
    const nextIdx = currentIndex < questions.length - 1 ? currentIndex + 1 : currentIndex;
    const nextVisited = new Set(visitedIds);
    nextVisited.add(currentQ.id);
    if (questions[nextIdx]) nextVisited.add(questions[nextIdx].id);
    setMarkedForReview(nextMarked);
    setVisitedIds(nextVisited);
    setCurrentIndex(nextIdx);
    scheduleServerAutosave(answers, nextMarked, nextVisited, nextIdx);
  };

  const uniqueSubjects = Array.from(new Set(questions.map((q) => q.subject)));

  const renderPaletteButton = (q: (typeof questions)[number], idx: number) => {
    const hasAns = Boolean(answers[q.id]);
    const isMarked = Boolean(markedForReview[q.id]);
    const isVisited = visitedIds.has(q.id);
    const isCurrent = idx === currentIndex;

    let colorClasses = 'bg-slate-200 text-slate-700 hover:bg-slate-300'; // Grey: Not visited
    if (hasAns && isMarked) {
      colorClasses = 'bg-purple-600 text-white hover:bg-purple-700'; // Purple + green indicator
    } else if (hasAns) {
      colorClasses = 'bg-emerald-600 text-white hover:bg-emerald-700'; // Green: Answered
    } else if (isMarked) {
      colorClasses = 'bg-purple-600 text-white hover:bg-purple-700'; // Purple: Marked for review
    } else if (isVisited) {
      colorClasses = 'bg-red-500 text-white hover:bg-red-600'; // Red: Visited but not answered
    }

    return (
      <button
        key={q.id}
        type="button"
        onClick={() => navigateTo(idx)}
        className={`relative h-9 rounded-lg text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${colorClasses} ${
          isCurrent ? 'ring-2 ring-blue-950 ring-offset-2' : ''
        }`}
        aria-label={`Go to question ${q.questionNumber}`}
      >
        <span>{q.questionNumber}</span>
        {hasAns && isMarked && (
          <span
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white absolute -top-1 -right-1"
            title="Answered and marked for review"
          />
        )}
      </button>
    );
  };

  const paletteContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
            Question Palette
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {statusCounts.totalAnswered} of {questions.length} answered
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowMobilePalette(false)}
          className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
          aria-label="Close palette"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Status Legend Counters */}
      <div className="p-4 border-b border-slate-200 grid grid-cols-2 gap-2 text-[11px] text-slate-700 bg-slate-50">
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
            {statusCounts.answered}
          </span>
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded bg-red-500 text-white font-bold flex items-center justify-center shrink-0">
            {statusCounts.notAnswered}
          </span>
          <span>Not Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0">
            {statusCounts.notVisited}
          </span>
          <span>Not Visited</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded bg-purple-600 text-white font-bold flex items-center justify-center shrink-0">
            {statusCounts.markedOnly}
          </span>
          <span>Marked</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2">
          <span className="relative w-5 h-5 rounded bg-purple-600 text-white font-bold flex items-center justify-center shrink-0">
            {statusCounts.answeredAndMarked}
            <span className="w-2 h-2 rounded-full bg-emerald-400 border border-white absolute -top-0.5 -right-0.5" />
          </span>
          <span>Answered &amp; Marked for Review</span>
        </div>
      </div>

      {/* Numbered Grid */}
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q, idx) => renderPaletteButton(q, idx))}
        </div>
      </div>

      {/* Submit Action */}
      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => {
            setShowMobilePalette(false);
            setShowSubmitModal(true);
          }}
          className="w-full py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:bg-slate-400 text-white text-xs font-bold transition-colors cursor-pointer"
        >
          Submit Test
        </button>
      </div>
    </div>
  );

  const isLowTime = timeLeftSeconds <= 300;
  const isCriticalTime = timeLeftSeconds <= 60;

  return (
    <div className="space-y-4 pb-10">
      {/* Exam Header Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wide">
            {session.test.foundation} · {session.test.classLevel} · {session.test.testType}
          </div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate">
            {session.test.title}
          </h1>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <User className="w-3.5 h-3.5" />
            <span>{studentName}</span>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          {/* Countdown Timer */}
          <div
            className={`px-3.5 py-2 rounded-lg border font-mono text-sm sm:text-base font-bold flex items-center gap-2 tabular-nums ${
              isCriticalTime
                ? 'bg-red-50 border-red-300 text-red-700'
                : isLowTime
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-blue-50 border-blue-200 text-blue-950'
            }`}
          >
            <Clock className="w-4 h-4 shrink-0" />
            <span>{formatTimer(timeLeftSeconds)}</span>
          </div>

          {/* Mobile Palette Toggle */}
          <button
            type="button"
            onClick={() => setShowMobilePalette(true)}
            className="lg:hidden px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Grid className="w-4 h-4" />
            <span>Palette</span>
          </button>

          {/* Top Submit Button */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:bg-slate-400 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Submit Test
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center justify-between gap-2">
          <span>{errorMsg}</span>
          <button
            type="button"
            onClick={() => setErrorMsg(null)}
            className="font-bold text-red-800 cursor-pointer"
          >
            ×
          </button>
        </div>
      )}

      {/* Subject Section Bar for Multi-Subject Full Mock Tests */}
      {uniqueSubjects.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-500 mr-1">Sections:</span>
          {uniqueSubjects.map((subj) => {
            const firstIdx = questions.findIndex((q) => q.subject === subj);
            const isActiveSubj = currentQ.subject === subj;
            return (
              <button
                key={subj}
                type="button"
                onClick={() => navigateTo(firstIdx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  isActiveSubj
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {subj}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Split Examination Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Question Area */}
        <div className="lg:col-span-8 xl:col-span-9 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col">
          {/* Question Metadata Header */}
          <div className="px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 bg-slate-50/70 rounded-t-xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-900 text-sm">
                Question {currentQ.questionNumber} of {questions.length}
              </span>
              <span aria-hidden="true" className="text-slate-300">
                |
              </span>
              <span className="font-semibold text-blue-900">{currentQ.subject}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="text-slate-600">{currentQ.chapterTitle}</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-emerald-700">+{currentQ.marksPositive}</span>
              <span className="text-slate-300">/</span>
              <span className={currentQ.marksNegative > 0 ? 'text-red-600' : 'text-slate-500'}>
                {currentQ.marksNegative > 0 ? `-${currentQ.marksNegative}` : '0'}
              </span>
              {isCurrentMarked && (
                <span className="text-purple-700 font-bold">· Marked for Review</span>
              )}
            </div>
          </div>

          {/* Question Body & Options */}
          <div className="p-5 sm:p-7 space-y-6 flex-1 min-h-[340px]">
            <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
              <InlineFormattedText text={currentQ.questionText} />
            </div>

            <div className="space-y-3" role="radiogroup" aria-label="Answer options">
              {currentQ.options.map((opt) => {
                const letter = opt.charAt(0).toUpperCase();
                const isSelected = selectedOption === letter;
                return (
                  <button
                    key={opt}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectOption(letter)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-blue-800 bg-blue-50/80 text-slate-950 ring-1 ring-blue-800'
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'border-blue-900 bg-blue-900' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      <InlineFormattedText text={opt} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Examination Control Bar */}
          <div className="p-4 sm:px-6 border-t border-slate-200 bg-slate-50 rounded-b-xl flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => navigateTo(currentIndex - 1)}
                className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleClearResponse}
                className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Response</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleMarkForReviewAndNext}
                className="px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Mark for Review &amp; Next</span>
              </button>

              <button
                type="button"
                onClick={handleSaveAndNext}
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>
                  {currentIndex < questions.length - 1 ? 'Save & Next' : 'Save Response'}
                </span>
                {currentIndex < questions.length - 1 && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Question Navigation Palette */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 bg-white rounded-xl border border-slate-200 shadow-2xs sticky top-20 max-h-[calc(100vh-7rem)] overflow-hidden">
          {paletteContent}
        </aside>
      </div>

      {/* Mobile Question Navigation Palette Drawer */}
      {showMobilePalette && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden flex justify-end">
          <div className="w-80 max-w-[90vw] bg-white h-full shadow-2xl">
            {paletteContent}
          </div>
        </div>
      )}

      {/* Submission Confirmation Dialog */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-slate-900">Confirm Test Submission</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Are you sure you want to submit this test? Once submitted, your answers will be evaluated on the server and cannot be changed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="text-emerald-800 font-medium">Answered</div>
                <div className="text-lg font-bold text-emerald-700 mt-0.5">
                  {statusCounts.totalAnswered}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <div className="text-red-800 font-medium">Unanswered</div>
                <div className="text-lg font-bold text-red-700 mt-0.5">
                  {statusCounts.totalUnanswered}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                <div className="text-purple-800 font-medium">Reviewed</div>
                <div className="text-lg font-bold text-purple-700 mt-0.5">
                  {statusCounts.markedOnly + statusCounts.answeredAndMarked}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Continue Test
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleFinalSubmit(false)}
                className="px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:bg-slate-400 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isSubmitting ? 'Evaluating...' : 'Yes, Submit Test'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
