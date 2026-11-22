import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  User,
  Mail,
  GraduationCap,
  Save,
  CheckCircle,
  LogOut,
  Compass,
  HeartPulse,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { ClassLevel, PreparationGoal, TargetExam, PreferredLanguage } from '../../types';
import { AchievementBadges } from '../common/AchievementBadges';

interface StudentProfileViewProps {
  setActiveTab: (tab: string) => void;
}

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({ setActiveTab }) => {
  const { user, progress, testAttempts, updateProfile, logout } = useAuth();

  const [name, setName] = useState(user?.fullName || '');
  const [preparationGoal, setPreparationGoal] = useState<PreparationGoal>(
    user?.preparationGoal || 'JEE Foundation'
  );
  const [classLevel, setClassLevel] = useState<ClassLevel>(user?.classLevel || 'Class 10');
  const [targetExam, setTargetExam] = useState<TargetExam>(user?.targetExam || 'Both');
  const [language, setLanguage] = useState<PreferredLanguage>(user?.preferredLanguage || 'English');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const classOptions: ClassLevel[] = [
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

  const handleGoalChange = (newGoal: PreparationGoal) => {
    setPreparationGoal(newGoal);
    if (newGoal === 'NEET Foundation') {
      setTargetExam('NEET');
    } else if (targetExam === 'NEET') {
      setTargetExam('Both');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      fullName: name.trim(),
      preparationGoal,
      classLevel,
      targetExam,
      preferredLanguage: language,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  const handleLogout = () => {
    logout();
    setActiveTab('register');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-900 text-white font-bold text-xl flex items-center justify-center shadow-sm">
            {user?.fullName?.charAt(0) || 'L'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900">{user?.fullName || 'Student'}</h1>
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  user?.preparationGoal === 'NEET Foundation'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-blue-100 text-blue-900'
                }`}
              >
                {user?.preparationGoal || 'JEE Foundation'} · {user?.classLevel || 'Class 10'}
              </span>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <Mail className="w-3.5 h-3.5" />
              <span>{user?.email}</span>
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Updated successfully to <strong>{preparationGoal}</strong> ({classLevel})!
            </span>
          </div>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white font-semibold text-[11px] cursor-pointer hover:bg-emerald-800"
          >
            Go to Dashboard
          </button>
        </div>
      )}

      {/* Profile Edit Form */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
          Manage Preparation Goal &amp; Class
        </h2>

        <form onSubmit={handleSave} className="space-y-5 text-xs">
          {/* 1. Preparation Goal */}
          <div>
            <label className="block font-semibold text-slate-800 mb-2">
              Preparation Goal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleGoalChange('JEE Foundation')}
                className={`text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  preparationGoal === 'JEE Foundation'
                    ? 'border-blue-900 bg-blue-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center">
                      <Compass className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-900 text-xs">JEE Foundation</span>
                  </div>
                  {preparationGoal === 'JEE Foundation' && (
                    <CheckCircle2 className="w-4 h-4 text-blue-900" />
                  )}
                </div>
                <p className="text-[11px] text-slate-600 mt-2 font-medium">
                  Physics, Chemistry &amp; Mathematics
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  5 Physics + 5 Chemistry + 5 Maths = 15 chapters
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleGoalChange('NEET Foundation')}
                className={`text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  preparationGoal === 'NEET Foundation'
                    ? 'border-emerald-700 bg-emerald-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-700/10 text-emerald-800 flex items-center justify-center">
                      <HeartPulse className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-900 text-xs">NEET Foundation</span>
                  </div>
                  {preparationGoal === 'NEET Foundation' && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  )}
                </div>
                <p className="text-[11px] text-slate-600 mt-2 font-medium">
                  Physics, Chemistry &amp; Biology
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  5 Physics + 5 Chemistry + 5 Biology = 15 chapters
                </p>
              </button>
            </div>
          </div>

          {/* 2. Class Level */}
          <div>
            <label className="block font-semibold text-slate-800 mb-2">
              Select Current Class
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
              {classOptions.map((lvl) => {
                const isSelected = classLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setClassLevel(lvl)}
                    className={`py-2 px-1 text-center rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-900 bg-blue-900 text-white shadow-xs font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {lvl.replace('Class ', 'Cl ')}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-slate-500 mt-1.5">
              Switching your class immediately loads the authentic NCERT &amp; Foundation syllabus for that grade.
            </p>
          </div>

          {/* 3. Personal Information */}
          <div className="pt-3 border-t border-slate-100 space-y-3.5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email Address (Read-only) */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                disabled
                value={user?.email || ''}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-xs cursor-not-allowed"
              />
            </div>

            {/* Preferred Language */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>Preferred Study Language</span>
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as PreferredLanguage)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="English">English</option>
                <option value="Telugu">తెలుగు (Telugu)</option>
                <option value="Hindi">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>

      {/* Learning Summary Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Learning Summary</h3>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 text-[11px]">Completed Chapters</span>
            <div className="font-bold text-slate-900 text-base mt-1 tabular-nums">
              {progress.completedChapterIds?.length || 0}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 text-[11px]">Questions Solved</span>
            <div className="font-bold text-blue-700 text-base mt-1 tabular-nums">
              {progress.practiceQuestionsCorrect || 0}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 text-[11px]">Mock Tests</span>
            <div className="font-bold text-slate-900 text-base mt-1 tabular-nums">
              {testAttempts.length}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Badges */}
      <AchievementBadges />
    </div>
  );
};
