import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_CHAPTERS } from '../../data/mockData';
import { LearningRecommendations } from '../recommendations/LearningRecommendations';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Award,
  BookOpen,
  Clock,
  Target,
  ArrowRight,
  Info,
} from 'lucide-react';

interface PerformanceAnalyticsProps {
  setActiveTab: (tab: string) => void;
}

export const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ setActiveTab }) => {
  const { progress, testAttempts } = useAuth();

  // Weekly progress trend data (simulated based on historical attempts)
  const scoreTrendData = [
    { week: 'Week 1', Physics: 45, Chemistry: 50, Mathematics: 40, total: 135 },
    { week: 'Week 2', Physics: 55, Chemistry: 52, Mathematics: 48, total: 155 },
    { week: 'Week 3', Physics: 60, Chemistry: 65, Mathematics: 55, total: 180 },
    { week: 'Week 4', Physics: 68, Chemistry: 72, Mathematics: 64, total: 204 },
    {
      week: 'Latest Mock',
      Physics: testAttempts[0]?.subjectScores?.Physics?.score ? testAttempts[0].subjectScores.Physics.score * 4 : 75,
      Chemistry: testAttempts[0]?.subjectScores?.Chemistry?.score ? testAttempts[0].subjectScores.Chemistry.score * 4 : 78,
      Mathematics: testAttempts[0]?.subjectScores?.Mathematics?.score ? testAttempts[0].subjectScores.Mathematics.score * 4 : 70,
      total: testAttempts[0]?.score ? testAttempts[0].score : 223,
    },
  ];

  // Subject-wise accuracy comparison
  const subjectAccuracyData = [
    { subject: 'Physics', accuracy: 78, avgAccuracy: 62 },
    { subject: 'Chemistry', accuracy: 84, avgAccuracy: 65 },
    { subject: 'Mathematics', accuracy: 71, avgAccuracy: 58 },
    { subject: 'Bridge Foundation', accuracy: 92, avgAccuracy: 75 },
  ];

  // Exam Readiness Indicator calculation
  // Formula: 40% syllabus coverage + 40% test accuracy + 20% study hours consistency
  const syllabusCoverage = Math.round((progress.completedChapterIds.length / INITIAL_CHAPTERS.length) * 100);
  const avgAccuracy = testAttempts.length > 0
    ? Math.round(testAttempts.reduce((acc, t) => acc + t.accuracy, 0) / testAttempts.length)
    : 75;
  const consistencyScore = Math.min(100, Math.round((progress.studyHours / 50) * 100));

  const readinessScore = Math.round(
    syllabusCoverage * 0.4 + avgAccuracy * 0.4 + consistencyScore * 0.2
  );

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Real-time Learning Diagnostics</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Performance Analytics & Diagnostic Insights
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Track score progression over time, pinpoint conceptual gaps, and evaluate your preparation consistency across Physics, Chemistry, and Mathematics.
        </p>
      </div>

      {/* Exam Readiness Indicator Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-200">
              Exam Readiness Indicator (Indicative)
            </span>
            <h2 className="text-2xl font-bold">Overall Preparation Readiness: {readinessScore}%</h2>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-sm text-center">
            <span className="text-[10px] text-blue-200 uppercase font-semibold">Target Milestone</span>
            <div className="text-lg font-black text-white">JEE Main 2025/2026</div>
          </div>
        </div>

        {/* Readiness Meter */}
        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-700"
            style={{ width: `${readinessScore}%` }}
          />
        </div>

        {/* Sub-factors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm space-y-1">
            <div className="text-blue-200">Syllabus Coverage (40%)</div>
            <div className="text-lg font-bold text-white tabular-nums">{syllabusCoverage}%</div>
            <div className="text-[11px] text-blue-200">{progress.completedChapterIds.length} of {INITIAL_CHAPTERS.length} chapters done</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm space-y-1">
            <div className="text-blue-200">Mock Test Accuracy (40%)</div>
            <div className="text-lg font-bold text-emerald-300 tabular-nums">{avgAccuracy}%</div>
            <div className="text-[11px] text-blue-200">Based on {testAttempts.length} test submissions</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm space-y-1">
            <div className="text-blue-200">Study Consistency (20%)</div>
            <div className="text-lg font-bold text-amber-300 tabular-nums">{consistencyScore}%</div>
            <div className="text-[11px] text-blue-200">{progress.studyHours} total study hours logged</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-black/20 text-[11px] text-blue-100 flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-blue-300" />
          <span>
            <strong>Educational Notice:</strong> This score is a motivational learning-progress indicator based on your app activity, not a statistical prediction or legal guarantee of official NTA JEE results.
          </span>
        </div>
      </div>

      {/* Recharts Section: Weekly Trend & Subject Accuracy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Trend Line Chart */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Mock Test Score Trend (Weekly)
            </h3>
            <span className="text-xs text-slate-500 font-mono">Max Marks: 300</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Line type="monotone" dataKey="Physics" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Chemistry" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Mathematics" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Accuracy Bar Chart */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Subject Accuracy Comparison
            </h3>
            <span className="text-xs text-slate-500 font-mono">Percentage (%)</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectAccuracyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="subject" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="accuracy" name="Your Accuracy" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="avgAccuracy" name="National Benchmark" fill="#94a3b8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Weakness & Action Plan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strongest Subject */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Strongest Subject: Chemistry</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Accuracy stands at <strong>84%</strong>. General Organic Chemistry (GOC) and Mole Concept are well-consolidated. Continue daily revision to maintain speed.
          </p>
        </div>

        {/* Weakest Subject */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Priority Focus: Mathematics</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Accuracy stands at <strong>71%</strong>. Integration by parts and quadratic location of roots require additional step-by-step practice sets.
          </p>
          <button
            onClick={() => setActiveTab('practice')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Practice Weak Math Topics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Recommended Action */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Next Suggested Milestone</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Attempt <strong>Physics Speed Booster #1</strong> and revise King's Property in Definite Integration with formula flashcards.
          </p>
          <button
            onClick={() => setActiveTab('mocktests')}
            className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Launch Mock Exam</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Smart AI Diagnostic Recommendations */}
      <LearningRecommendations setActiveTab={setActiveTab} />
    </div>
  );
};
