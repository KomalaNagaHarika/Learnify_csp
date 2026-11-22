import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_CHAPTERS } from '../../data/mockData';
import { getChaptersForGoalAndClass } from '../../data/classSyllabusData';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Brain,
  Layers,
  Calendar,
} from 'lucide-react';

interface LearningRecommendationsProps {
  setActiveTab: (tab: string) => void;
}

export const LearningRecommendations: React.FC<LearningRecommendationsProps> = ({ setActiveTab }) => {
  const { user, progress, testAttempts } = useAuth();

  // Find weak chapters based on attempts or default
  const weakChapterNames = progress.weakChapters.length > 0
    ? progress.weakChapters
    : ['Rotational Motion', 'Definite Integration', 'Ionic Equilibrium'];

  // Match with actual curriculum chapters
  const recommendedChapters = INITIAL_CHAPTERS.filter((chap) =>
    weakChapterNames.some((weak) => chap.title.toLowerCase().includes(weak.toLowerCase()))
  );

  // Suggested study materials tailored to the student's class & goal
  const recommendedMaterials = getChaptersForGoalAndClass(
    user?.preparationGoal || 'JEE Foundation',
    user?.classLevel || 'Class 11'
  ).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Smart Engine Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Diagnostic Recommendation Engine</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Personalized JEE Improvement Roadmap for {user?.fullName || 'Student'}
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
          Based on your latest mock tests and chapter attempts, we identified topics requiring immediate attention and calculated targeted actions to boost your percentile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Weak Topics Requiring Revision */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Priority Topics Requiring Revision</span>
          </div>

          <div className="space-y-3">
            {weakChapterNames.map((topic, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white">{topic}</div>
                  <div className="text-[11px] text-slate-500">Requires review of core formulas & solved examples</div>
                </div>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Review</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Recommended Study Plan Adjustment */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Suggested Study Plan Adjustments</span>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/40 space-y-1">
              <strong className="text-blue-900 dark:text-blue-200 block">Allocate 45 mins extra to Rotational Mechanics:</strong>
              <p>Practice deriving moment of inertia for standard symmetric shapes and solve 5 rolling without slipping problems on inclined planes.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-900/40 space-y-1">
              <strong className="text-purple-900 dark:text-purple-200 block">Daily 15-Minute Formula Flashcards:</strong>
              <p>Review King's property, Leibniz differentiation, and Henderson-Hasselbalch buffer equations before sleep.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Chapter Study Materials */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <Layers className="w-4 h-4 text-blue-700" />
            <span>Recommended Chapter Study Materials</span>
          </div>
          <button
            onClick={() => setActiveTab('materials')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Open Study Materials Library →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommendedMaterials.map((chap) => (
            <div
              key={chap.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase">
                  {chap.classLevel} · {chap.subject} · Chapter {chap.order}
                </span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {chap.title}
                </h4>
              </div>

              <button
                onClick={() => setActiveTab('materials')}
                className="w-full py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Open Study Material
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
