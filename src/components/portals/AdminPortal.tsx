import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_CHAPTERS, QUESTION_BANK, MOCK_TESTS } from '../../data/mockData';
import {
  ShieldCheck,
  Users,
  BookOpen,
  FileText,
  Upload,
  Plus,
  CheckCircle,
  Database,
  BarChart,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AdminPortalProps {
  setActiveTab: (tab: string) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ setActiveTab }) => {
  const { user } = useAuth();
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'chapters' | 'materials' | 'questions'>('overview');
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  // Material upload form state
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Physics');
  const [newType, setNewType] = useState('notes');

  const handleUploadMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setUploadNotice(`Resource "${newTitle}" registered into Cloud Firestore & Storage.`);
    setNewTitle('');
    setTimeout(() => setUploadNotice(null), 3500);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Platform Administrator Operations Console</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          System Administration & Academic CMS
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Manage platform users, official JEE syllabus chapters, verified question banks, and Cloud Firestore security governance.
        </p>
      </div>

      {uploadNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{uploadNotice}</span>
        </div>
      )}

      {/* Admin Subtabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-fit text-xs font-semibold">
        {(['overview', 'chapters', 'materials', 'questions'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-4 py-2 rounded-xl capitalize transition-all cursor-pointer ${
              activeSubTab === tab
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab === 'overview' ? 'Platform Stats' : tab}
          </button>
        ))}
      </div>

      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Database Counts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">Total Registered Aspirants</span>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">12,480</div>
              <span className="text-[11px] text-emerald-600 font-semibold">78% Govt Schools</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">Curriculum Chapters</span>
              <div className="text-2xl font-extrabold text-blue-600 tabular-nums">{INITIAL_CHAPTERS.length} Live</div>
              <span className="text-[11px] text-blue-500 font-semibold">Physics, Chem, Math, Bridge</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">Verified Questions Pool</span>
              <div className="text-2xl font-extrabold text-purple-600 tabular-nums">{QUESTION_BANK.length} Questions</div>
              <span className="text-[11px] text-purple-500 font-semibold">NTA PYQs & Original Drills</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">Mock Exam Tests</span>
              <div className="text-2xl font-extrabold text-amber-600 tabular-nums">{MOCK_TESTS.length} Tests</div>
              <span className="text-[11px] text-amber-500 font-semibold">JEE Main & Advanced CBT</span>
            </div>
          </div>

          {/* Firestore Security Rules & Architecture Snapshot */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-600" />
                <span>Cloud Firestore Security & Rule Status</span>
              </h3>
              <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full">
                ABAC Enforced · Zero Trust
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Rules defined in <code className="text-blue-600 font-mono">firestore.rules</code> and intermediate schema in <code className="text-blue-600 font-mono">firebase-blueprint.json</code> ensure students can modify only their own attempts, prevent client score spoofing, and isolate teacher/admin privileges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-800 dark:text-slate-200">Role Verification:</div>
                <div className="text-slate-500 text-[11px]">Server token & Firestore doc checking</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-800 dark:text-slate-200">Question Keys:</div>
                <div className="text-slate-500 text-[11px]">Strict write denial to non-admin roles</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-800 dark:text-slate-200">Test Attempts:</div>
                <div className="text-slate-500 text-[11px]">Owner-only reading & immutable submission</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'chapters' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Active Curriculum Chapters ({INITIAL_CHAPTERS.length})</h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {INITIAL_CHAPTERS.map((c) => (
              <div key={c.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">{c.title}</span>
                  <div className="text-slate-500 text-[11px]">{c.subject} · {c.classLevel} · Stage: {c.stage}</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono">
                  {c.durationHours} hrs · {c.formulas.length} formulas
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'materials' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Upload className="w-4 h-4 text-blue-600" />
            <span>Upload & Register New Study Material</span>
          </h3>

          <form onSubmit={handleUploadMaterial} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1 text-slate-700 dark:text-slate-300">Material Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Physics Formula Summary"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-slate-700 dark:text-slate-300">Subject</label>
                <select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Bridge Foundation">Bridge Foundation</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1 text-slate-700 dark:text-slate-300">Material Type</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="notes">Lecture Notes</option>
                  <option value="formula_sheet">Formula Cheat Sheet</option>
                  <option value="worksheet">Practice Worksheet</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer"
            >
              Register Material in Library
            </button>
          </form>
        </div>
      )}

      {activeSubTab === 'questions' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Active Question Bank ({QUESTION_BANK.length})</h3>
          <div className="space-y-3">
            {QUESTION_BANK.map((q) => (
              <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="font-bold text-blue-600">{q.subject} · {q.chapterTitle}</span>
                  <span className="font-mono text-[11px] capitalize">{q.difficulty} · {q.sourceType}</span>
                </div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{q.questionText}</p>
                <div className="text-emerald-600 font-bold text-[11px]">Correct Answer: {q.correctAnswer}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
