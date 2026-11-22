import React from 'react';
import { GraduationCap } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Learn<span className="text-blue-400">ify</span></span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Free digital IIT-JEE &amp; NEET Foundation learning platform for students in Classes 6 to 12 progressing from basic school concepts to competitive excellence.
            </p>
            <p className="text-[11px] text-slate-400 italic">
              "Your Journey to Excellence Begins Here."
            </p>
          </div>

          {/* Quick links to core sections */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => setActiveTab('courses')} className="hover:text-white transition-colors cursor-pointer">
              Courses
            </button>
            <button onClick={() => setActiveTab('materials')} className="hover:text-white transition-colors cursor-pointer">
              Study Materials
            </button>
            <button onClick={() => setActiveTab('practice')} className="hover:text-white transition-colors cursor-pointer">
              Practice Questions
            </button>
            <button onClick={() => setActiveTab('mocktests')} className="hover:text-white transition-colors cursor-pointer">
              Mock Tests
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Learnify — Free IIT-JEE &amp; NEET Foundation Platform.</p>
          <div className="flex items-center gap-4">
            <span>Physics</span>
            <span>•</span>
            <span>Chemistry</span>
            <span>•</span>
            <span>Mathematics</span>
            <span>•</span>
            <span>Biology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
