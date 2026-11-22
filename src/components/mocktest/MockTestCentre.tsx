import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ClassLevel, PreparationGoal, SubjectName } from '../../types';
import { getSubjectsForGoal } from '../../data/classSyllabusData';
import {
  MockTestAttemptResult,
  MockTestDifficulty,
  MockTestHistoryResponse,
  MockTestSessionPayload,
  MockTestSummary,
  MockTestType,
} from '../../types/mockTest';
import {
  fetchMockTestAttemptDetail,
  fetchMockTestHistory,
  fetchMockTests,
  resumeMockTestSession,
} from '../../services/mockTestApi';
import {
  NtaExamSimulator,
  clearStoredActiveSession,
  getStoredActiveSessionId,
} from './NtaExamSimulator';
import { MockTestResultView, formatDurationReadable } from './MockTestResultView';
import {
  Clock,
  ArrowRight,
  History,
  BookOpen,
  TrendingUp,
  Award,
  Target,
  Eye,
  RotateCcw,
  PlayCircle,
} from 'lucide-react';

interface MockTestCentreProps {
  setActiveTab: (tab: string) => void;
}

const CLASSES: readonly ClassLevel[] = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

const TEST_TYPES: readonly ('All' | MockTestType)[] = [
  'All',
  'Chapter-wise',
  'Subject-wise',
  'Practice Test',
  'Full Mock Test',
];

const DIFFICULTIES: readonly ('All' | MockTestDifficulty)[] = [
  'All',
  'Easy',
  'Medium',
  'Hard',
];

function normalizeClass(cls?: string): ClassLevel {
  if (cls === 'Dropper') return 'Class 12';
  if (cls && (CLASSES as readonly string[]).includes(cls)) {
    return cls as ClassLevel;
  }
  return 'Class 10';
}

export const MockTestCentre: React.FC<MockTestCentreProps> = () => {
  const { user } = useAuth();
  const studentId = user?.uid || 'guest-student';

  // Top-level view switcher: Library vs History
  const [activeView, setActiveView] = useState<'library' | 'history'>('library');

  // Filters
  const [foundation, setFoundation] = useState<PreparationGoal>(
    user?.preparationGoal || 'JEE Foundation'
  );
  const [classLevel, setClassLevel] = useState<ClassLevel>(() =>
    normalizeClass(user?.classLevel)
  );
  const [subject, setSubject] = useState<SubjectName | 'All'>('All');
  const [testType, setTestType] = useState<'All' | MockTestType>('All');
  const [difficulty, setDifficulty] = useState<'All' | MockTestDifficulty>('All');

  // Data state
  const [tests, setTests] = useState<MockTestSummary[]>([]);
  const [loadingTests, setLoadingTests] = useState(true);
  const [historyData, setHistoryData] = useState<MockTestHistoryResponse | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Active exam / history review state
  const [selectedTest, setSelectedTest] = useState<MockTestSummary | null>(null);
  const [resumedSession, setResumedSession] = useState<MockTestSessionPayload | null>(null);
  const [pendingResumeSession, setPendingResumeSession] = useState<MockTestSessionPayload | null>(
    null
  );
  const [reviewAttempt, setReviewAttempt] = useState<MockTestAttemptResult | null>(null);
  const [loadingReviewId, setLoadingReviewId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Keep default foundation & class synced with profile updates
  useEffect(() => {
    if (user?.preparationGoal) setFoundation(user.preparationGoal);
  }, [user?.preparationGoal]);

  useEffect(() => {
    if (user?.classLevel) setClassLevel(normalizeClass(user.classLevel));
  }, [user?.classLevel]);

  const availableSubjects = useMemo(() => getSubjectsForGoal(foundation), [foundation]);

  // Never allow a subject from the other path (e.g. Biology in JEE or Math in NEET)
  useEffect(() => {
    if (subject !== 'All' && !availableSubjects.includes(subject)) {
      setSubject('All');
    }
  }, [availableSubjects, subject]);

  // Load filtered Mock Tests from server
  useEffect(() => {
    let cancelled = false;
    setLoadingTests(true);
    setErrorMsg(null);

    fetchMockTests({
      foundation,
      classLevel,
      subject,
      testType,
      difficulty,
    })
      .then((list) => {
        if (!cancelled) setTests(list);
      })
      .catch((err) => {
        if (!cancelled) {
          setErrorMsg(err instanceof Error ? err.message : 'Unable to load mock tests.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingTests(false);
      });

    return () => {
      cancelled = true;
    };
  }, [foundation, classLevel, subject, testType, difficulty]);

  // Load real Mock Test History from server
  const loadHistory = useCallback(() => {
    setLoadingHistory(true);
    fetchMockTestHistory(studentId)
      .then((data) => setHistoryData(data))
      .catch(() => {
        setHistoryData({
          attempts: [],
          summary: {
            totalAttempts: 0,
            averagePercentage: 0,
            averageAccuracy: 0,
            bestPercentage: 0,
            improvementDelta: null,
            accuracyImprovementDelta: null,
          },
        });
      })
      .finally(() => setLoadingHistory(false));
  }, [studentId]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  // Check for an interrupted active session (page refresh / temporary disconnect recovery)
  useEffect(() => {
    const storedSessionId = getStoredActiveSessionId(studentId);
    if (!storedSessionId) return;

    resumeMockTestSession(storedSessionId, studentId)
      .then((res) => {
        if (res.status === 'active') {
          setPendingResumeSession(res.session);
        } else if (res.status === 'submitted') {
          clearStoredActiveSession(studentId);
          loadHistory();
        }
      })
      .catch(() => {
        clearStoredActiveSession(studentId);
      });
  }, [studentId, loadHistory]);

  // Open completed attempt from History for read-only answer review
  const handleOpenHistoryReview = async (attemptId: string) => {
    setLoadingReviewId(attemptId);
    setErrorMsg(null);
    try {
      const detail = await fetchMockTestAttemptDetail(attemptId, studentId);
      setReviewAttempt(detail);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Unable to open saved test review.'
      );
    } finally {
      setLoadingReviewId(null);
    }
  };

  // Active Examination Flow (Instructions -> CBT -> Results)
  if (selectedTest) {
    return (
      <NtaExamSimulator
        testSummary={selectedTest}
        initialSession={resumedSession}
        onExit={() => {
          setSelectedTest(null);
          setResumedSession(null);
          loadHistory();
        }}
        onAttemptCompleted={() => {
          setPendingResumeSession(null);
          loadHistory();
        }}
      />
    );
  }

  // Completed Attempt Review from Mock Test History
  if (reviewAttempt) {
    return (
      <MockTestResultView
        result={reviewAttempt}
        onBack={() => setReviewAttempt(null)}
        readOnlyHistory={true}
        defaultShowReview={true}
      />
    );
  }

  const attempts = historyData?.attempts || [];
  const summary = historyData?.summary;

  return (
    <div className="space-y-6 pb-16 max-w-6xl mx-auto">
      {/* Resume Interrupted Test Banner */}
      {pendingResumeSession && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
              <PlayCircle className="w-4 h-4 text-blue-800" />
              <span>Unfinished Mock Test Session Restored</span>
            </div>
            <p className="text-xs text-blue-900">
              {pendingResumeSession.test.title} · {Math.ceil(pendingResumeSession.remainingSeconds / 60)} min remaining with your saved answers preserved.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedTest(pendingResumeSession.test);
              setResumedSession(pendingResumeSession);
              setPendingResumeSession(null);
            }}
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shrink-0 cursor-pointer"
          >
            Resume Test
          </button>
        </div>
      )}

      {/* Header + Library/History Switcher */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Mock Tests
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Class-wise IIT-JEE and NEET Foundation computer-based tests for Classes 6 to 12 with timed evaluation and answer review.
            </p>
          </div>

          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start">
            <button
              type="button"
              onClick={() => setActiveView('library')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeView === 'library'
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mock Test Library</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveView('history');
                loadHistory();
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeView === 'history'
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Mock Test History ({attempts.length})</span>
            </button>
          </div>
        </div>

        {/* Library Filters */}
        {activeView === 'library' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            {/* Row 1: Foundation + Class Selection */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Foundation Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Foundation:</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                  {(
                    [
                      { id: 'JEE Foundation', label: 'JEE Foundation' },
                      { id: 'NEET Foundation', label: 'NEET Foundation' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFoundation(item.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                        foundation === item.id
                          ? 'bg-blue-900 text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class 6 to 12 Selector */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-500 mr-1">Class:</span>
                {CLASSES.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setClassLevel(cls)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      classLevel === cls
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 2: Subject, Test Type, Difficulty Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  Subject
                </label>
                <select
                  aria-label="Filter by subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as SubjectName | 'All')}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  <option value="All">
                    All {foundation === 'JEE Foundation' ? 'JEE' : 'NEET'} Subjects
                  </option>
                  {availableSubjects.map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  Test Type
                </label>
                <select
                  aria-label="Filter by test type"
                  value={testType}
                  onChange={(e) => setTestType(e.target.value as 'All' | MockTestType)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  {TEST_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === 'All' ? 'All Test Types' : type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  Difficulty
                </label>
                <select
                  aria-label="Filter by difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as 'All' | MockTestDifficulty)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  {DIFFICULTIES.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff === 'All' ? 'All Difficulties' : diff}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result summary & quick reset */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <span>
                Showing <strong className="text-slate-900">{tests.length}</strong>{' '}
                {tests.length === 1 ? 'test' : 'tests'} for{' '}
                <strong className="text-blue-900">
                  {classLevel} · {foundation}
                </strong>
              </span>
              {(subject !== 'All' || testType !== 'All' || difficulty !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSubject('All');
                    setTestType('All');
                    setDifficulty('All');
                  }}
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
          {errorMsg}
        </div>
      )}

      {/* ================================================================== */}
      {/* VIEW 1: MOCK TEST LIBRARY                                          */}
      {/* ================================================================== */}
      {activeView === 'library' && (
        <>
          {loadingTests ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
              Loading class-wise mock tests...
            </div>
          ) : tests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Class, Subject & Difficulty Metadata */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-blue-900">
                        {test.classLevel} · {test.subject}
                      </span>
                      <span
                        className={`font-bold ${
                          test.difficulty === 'Easy'
                            ? 'text-emerald-700'
                            : test.difficulty === 'Hard'
                              ? 'text-red-600'
                              : 'text-amber-700'
                        }`}
                      >
                        {test.difficulty}
                      </span>
                    </div>

                    {/* Test Title & Type */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-semibold text-slate-500">
                        {test.testType}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {test.title}
                      </h3>
                    </div>

                    {/* Key Exam Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Questions</div>
                        <div className="font-bold text-slate-900 mt-0.5 tabular-nums">
                          {test.questionCount}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Duration</div>
                        <div className="font-bold text-slate-900 mt-0.5 tabular-nums">
                          {test.durationMinutes} min
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500">Total Marks</div>
                        <div className="font-bold text-blue-900 mt-0.5 tabular-nums">
                          {test.totalMarks}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Start Test Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setResumedSession(null);
                        setSelectedTest(test);
                      }}
                      className="w-full py-2.5 px-4 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Start Test</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <p className="text-sm font-semibold text-slate-700">
                No mock tests matched your selected filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubject('All');
                  setTestType('All');
                  setDifficulty('All');
                }}
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer"
              >
                Show All {classLevel} Tests
              </button>
            </div>
          )}
        </>
      )}

      {/* ================================================================== */}
      {/* VIEW 2: MOCK TEST HISTORY & PERFORMANCE IMPROVEMENT                */}
      {/* ================================================================== */}
      {activeView === 'history' && (
        <div className="space-y-6">
          {loadingHistory ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
              Loading your mock test history...
            </div>
          ) : attempts.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <History className="w-8 h-8 text-slate-300 mx-auto" />
              <h2 className="text-base font-bold text-slate-900">
                No Completed Mock Tests Yet
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Complete any chapter-wise, subject-wise, practice, or full mock test to see your verified scores, accuracy trends, and answer review history here.
              </p>
              <button
                type="button"
                onClick={() => setActiveView('library')}
                className="px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
              >
                Browse Mock Test Library
              </button>
            </div>
          ) : (
            <>
              {/* Improvement Analytics Cards */}
              {summary && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-1">
                    <div className="text-xs text-slate-500 font-medium">Tests Completed</div>
                    <div className="text-2xl font-bold text-slate-900 tabular-nums">
                      {summary.totalAttempts}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-1">
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-blue-800" />
                      <span>Best Score</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900 tabular-nums">
                      {summary.bestPercentage}%
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-1">
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Average Accuracy</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-700 tabular-nums">
                      {summary.averageAccuracy}%
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-1">
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-800" />
                      <span>Performance Trend</span>
                    </div>
                    {summary.improvementDelta !== null ? (
                      <div
                        className={`text-2xl font-bold tabular-nums ${
                          summary.improvementDelta >= 0 ? 'text-emerald-700' : 'text-red-600'
                        }`}
                      >
                        {summary.improvementDelta >= 0 ? '+' : ''}
                        {summary.improvementDelta}%
                      </div>
                    ) : (
                      <div className="text-sm font-semibold text-slate-500 pt-1">
                        Take 1 more test to track trend
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Chronological Score Progression */}
              {attempts.length >= 2 && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Score Progression Across Attempts
                    </h2>
                    <span className="text-xs text-slate-500">Oldest → Latest</span>
                  </div>
                  <div className="space-y-2.5">
                    {[...attempts].reverse().slice(-8).map((att, idx) => (
                      <div key={att.attemptId} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 truncate pr-4">
                            #{idx + 1} · {att.testTitle}
                          </span>
                          <span className="font-bold text-blue-900 shrink-0 tabular-nums">
                            {att.percentage}% ({att.score}/{att.totalMarks})
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-blue-800 transition-all"
                            style={{ width: `${Math.max(4, Math.min(100, att.percentage))}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Attempts List */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Completed Test Attempts
                  </h2>
                  <span className="text-xs text-slate-500">
                    Reopen any test to review answers without changing original scores
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {attempts.map((att) => (
                    <div
                      key={att.attemptId}
                      className="p-5 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="font-bold text-blue-900">
                            {att.classLevel} · {att.subject}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{att.testType}</span>
                          <span aria-hidden="true">·</span>
                          <span>{new Date(att.submittedAt).toLocaleString()}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {att.testTitle}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-5 text-xs">
                        <div>
                          <div className="text-slate-500">Score</div>
                          <div className="font-bold text-blue-900 tabular-nums">
                            {att.score} / {att.totalMarks} ({att.percentage}%)
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-500">Accuracy</div>
                          <div className="font-bold text-emerald-700 tabular-nums">
                            {att.accuracy}%
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-500">Time Taken</div>
                          <div className="font-bold text-slate-800 flex items-center gap-1 tabular-nums">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{formatDurationReadable(att.timeTakenSeconds)}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          disabled={loadingReviewId === att.attemptId}
                          onClick={() => handleOpenHistoryReview(att.attemptId)}
                          className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:bg-slate-400 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>
                            {loadingReviewId === att.attemptId ? 'Opening...' : 'Review Answers'}
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
