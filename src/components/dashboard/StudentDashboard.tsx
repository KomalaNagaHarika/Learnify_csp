import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getChaptersForGoalAndClass, getSubjectsForGoal } from '../../data/classSyllabusData';
import { SubjectName } from '../../types';
import { AchievementBadges } from '../common/AchievementBadges';
import {
  Atom,
  FlaskConical,
  Calculator,
  Dna,
  ArrowRight,
  Compass,
  HeartPulse,
  Settings,
  CheckCircle2
} from 'lucide-react';

interface StudentDashboardProps {
  setActiveTab: (tab: string, subjectFilter?: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ setActiveTab }) => {
  const { user, progress } = useAuth();
  const currentGoal = user?.preparationGoal || 'JEE Foundation';
  const currentClass = user?.classLevel || 'Class 10';

  // Core subjects: exactly 3 subjects based on goal (JEE: Phys, Chem, Math | NEET: Phys, Chem, Bio)
  const coreSubjects = getSubjectsForGoal(currentGoal);

  // All 15 chapters for the student's selected goal and class
  const classChapters = getChaptersForGoalAndClass(currentGoal, currentClass);
  const totalClassChapters = classChapters.length; // 15
  const completedClassChapters = classChapters.filter((c) =>
    progress.completedChapterIds.includes(c.id)
  ).length;

  const overallProgressPct = Math.round(
    (completedClassChapters / (totalClassChapters || 1)) * 100
  );

  const getSubjectIcon = (subject: SubjectName) => {
    switch (subject) {
      case 'Physics':
        return <Atom className="w-6 h-6 text-blue-700" />;
      case 'Chemistry':
        return <FlaskConical className="w-6 h-6 text-indigo-700" />;
      case 'Mathematics':
        return <Calculator className="w-6 h-6 text-sky-700" />;
      case 'Biology':
        return <Dna className="w-6 h-6 text-emerald-700" />;
      default:
        return <Atom className="w-6 h-6 text-slate-700" />;
    }
  };

  const getSubjectBg = (subject: SubjectName) => {
    switch (subject) {
      case 'Physics':
        return 'bg-blue-50 border-blue-200 text-blue-900';
      case 'Chemistry':
        return 'bg-indigo-50 border-indigo-200 text-indigo-900';
      case 'Mathematics':
        return 'bg-sky-50 border-sky-200 text-sky-900';
      case 'Biology':
        return 'bg-emerald-50 border-emerald-200 text-emerald-900';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-900';
    }
  };

  const getSubjectDescription = (subject: SubjectName) => {
    switch (subject) {
      case 'Physics':
        return 'Concepts, physical laws, formulas, solved examples & practice tests';
      case 'Chemistry':
        return 'Atoms, reactions, chemical properties, definitions & practice tests';
      case 'Mathematics':
        return 'Foundational algebra, geometry, formulas & step-by-step problem sets';
      case 'Biology':
        return 'Living systems, cell biology, human anatomy, text diagrams & test series';
      default:
        return 'Curriculum lessons, learning materials & chapter tests';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* 1. Welcome Card & Goal/Class Badges */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs">
                {currentGoal === 'NEET Foundation' ? (
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Compass className="w-3.5 h-3.5 text-blue-300" />
                )}
                <span>{currentGoal}</span>
              </span>

              <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-xs shadow-2xs">
                {currentClass}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Welcome to Learnify, {user?.fullName || 'Student'}!
            </h1>

            <p className="text-xs sm:text-sm text-slate-600">
              {currentGoal === 'NEET Foundation'
                ? 'Your Medical Foundation preparation path: Physics, Chemistry and Biology.'
                : 'Your Engineering Foundation preparation path: Physics, Chemistry and Mathematics.'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('profile')}
            className="self-start px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
          >
            <Settings className="w-3.5 h-3.5 text-slate-500" />
            <span>Change Goal / Class</span>
          </button>
        </div>

        {/* 2. Simple Learning Progress Bar */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700">
              Overall {currentClass} Learning Progress
            </span>
            <span className="font-bold text-blue-900">
              {completedClassChapters} of {totalClassChapters} Chapters Completed ({overallProgressPct}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                currentGoal === 'NEET Foundation' ? 'bg-emerald-600' : 'bg-blue-900'
              }`}
              style={{ width: `${overallProgressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Subject Cards (Exactly 3 for the student's preparation goal) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base font-bold text-slate-900">
            Your Subjects ({currentClass})
          </h2>
          <span className="text-xs text-slate-500">
            Click a subject to view its 5 class-specific chapters
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coreSubjects.map((subject) => {
            // Count completed chapters for this specific subject
            const subjectChapters = classChapters.filter((c) => c.subject === subject);
            const subjectCompleted = subjectChapters.filter((c) =>
              progress.completedChapterIds.includes(c.id)
            ).length;
            const subjectPct = Math.round(
              (subjectCompleted / (subjectChapters.length || 1)) * 100
            );

            return (
              <div
                key={subject}
                onClick={() => setActiveTab('courses', subject)}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getSubjectBg(
                        subject
                      )}`}
                    >
                      {getSubjectIcon(subject)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      5 Chapters
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {subject}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {getSubjectDescription(subject)}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1">
                      {subjectCompleted === 5 ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : null}
                      <span>{subjectCompleted} / 5 completed</span>
                    </span>
                    <span className="font-semibold text-slate-700">{subjectPct}%</span>
                  </div>

                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        subject === 'Biology'
                          ? 'bg-emerald-600'
                          : subject === 'Chemistry'
                          ? 'bg-indigo-600'
                          : 'bg-blue-900'
                      }`}
                      style={{ width: `${subjectPct}%` }}
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-700">
                    <span>View Chapters</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Compact Achievement Badges */}
      <AchievementBadges />
    </div>
  );
};
