import React from 'react';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  FileText,
  Target,
  CheckCircle,
  Compass,
  HeartPulse,
  Atom,
  FlaskConical,
  Calculator,
  Dna
} from 'lucide-react';

interface LandingPageProps {
  setActiveTab: (tab: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-100">
            <GraduationCap className="w-4 h-4 text-blue-700" />
            <span>Learnify · Free IIT-JEE &amp; NEET Foundation Platform (Class 6 to Class 12)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Quality JEE &amp; NEET Foundation,{' '}
            <span className="text-blue-700">Free for Every Student</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Learnify provides 100% free digital coaching dedicated to government school and rural students. Progress from basic school concepts (Class 6–10) to advanced competitive problem solving (Class 11–12).
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-blue-900 max-w-xl mx-auto">
            "Your Journey to Excellence Begins Here."
          </div>

          {/* Two Foundation Paths Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto pt-2 text-left">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-900">JEE Foundation</div>
                <div className="text-[11px] text-slate-600">Physics, Chemistry &amp; Mathematics</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Classes 6 to 12 · 15 Chapters per class</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-900">NEET Foundation</div>
                <div className="text-[11px] text-slate-600">Physics, Chemistry &amp; Biology</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Classes 6 to 12 · 15 Chapters per class</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('register')}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors cursor-pointer"
            >
              Explore Class Syllabus
            </button>
            <button
              onClick={() => setActiveTab('login')}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              Sign In
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>100% Free Forever</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Classes 6 to 12 Covered</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>5 Chapters / Subject Hierarchy</span>
            </span>
          </div>
        </div>
      </section>

      {/* 4 Core Subjects */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Comprehensive STEM Curriculum</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            NCERT and competitive foundation syllabi structured class-wise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Physics */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Atom className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Physics</h3>
            <span className="inline-block text-[10px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              JEE &amp; NEET
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Motion, Forces, Gravitation, Work &amp; Energy, Waves, Kinematics, and Electromagnetism.
            </p>
          </div>

          {/* Chemistry */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Chemistry</h3>
            <span className="inline-block text-[10px] font-semibold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
              JEE &amp; NEET
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Matter, Atoms &amp; Molecules, Periodic Table, Chemical Bonding, Organic Reactions, and Stoichiometry.
            </p>
          </div>

          {/* Mathematics */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Mathematics</h3>
            <span className="inline-block text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
              JEE Foundation Only
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Number Systems, Algebra, Coordinate Geometry, Trigonometry, Calculus, and Coordinate Systems.
            </p>
          </div>

          {/* Biology */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Dna className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Biology</h3>
            <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              NEET Foundation Only
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cell Structure, Genetics, Plant &amp; Human Physiology, Life Processes, and Evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Everything You Need to Prepare</h2>
          <p className="text-xs sm:text-sm text-slate-600">Built cleanly for daily practice, revision, and testing</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <BookOpen className="w-5 h-5 text-blue-700" />
            <h4 className="text-sm font-bold text-slate-900">Class 6–12 Curriculum</h4>
            <p className="text-xs text-slate-600">
              Exactly 5 chapters per subject for every class. Structured hierarchy from intro to test.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <FileText className="w-5 h-5 text-blue-700" />
            <h4 className="text-sm font-bold text-slate-900">Study Materials</h4>
            <p className="text-xs text-slate-600">
              Subject notes, formula sheets, and printable revision worksheets ready to download.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <Target className="w-5 h-5 text-blue-700" />
            <h4 className="text-sm font-bold text-slate-900">Practice Engine</h4>
            <p className="text-xs text-slate-600">
              Practice questions filterable by subject, chapter, and difficulty level with immediate feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl bg-blue-900 text-white text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold tracking-tight">Ready to Begin Your Foundation Journey?</h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-lg mx-auto leading-relaxed">
            Create your free student account in under a minute, select your goal &amp; class, and start learning right away.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('register')}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Create Free Account
            </button>
            <button
              onClick={() => setActiveTab('login')}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-800 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Sign In Existing Student
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
