import React, { useState } from 'react';
import { SCHOLARSHIPS_DATA } from '../../data/mockData';
import { Award, ExternalLink, ShieldCheck, Search, Filter, Calendar, CheckCircle } from 'lucide-react';

interface ScholarshipHubProps {
  setActiveTab: (tab: string) => void;
}

export const ScholarshipHub: React.FC<ScholarshipHubProps> = ({ setActiveTab }) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Free Coaching', 'Govt Scholarship', 'Girl Students', 'Rural / Super 30'];

  const filtered = SCHOLARSHIPS_DATA.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.provider.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Government & Philanthropic Opportunities</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Scholarships & Free IIT Coaching Initiatives
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Government programs, corporate CSR schemes, and philanthropic foundations that provide free residential IIT-JEE coaching, fee waivers, and college grants for deserving rural and government school students.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200 flex items-center gap-2.5">
        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
        <span>
          <strong>Authenticity Assurance:</strong> All programs listed below are verified official initiatives from Central/State Ministries, Navodaya Vidyalaya Samiti, or registered non-profit trusts. Never pay money to any middleman.
        </span>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80 text-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search schemes, e.g. Dakshana, Pragati..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Total Verified Schemes:</span>
          <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{filtered.length} Active</span>
        </div>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{item.verifiedDate}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>

              <div className="text-xs text-slate-500 font-medium">
                Offered by: <strong className="text-slate-700 dark:text-slate-300">{item.provider}</strong>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Eligibility: </span>
                  <span className="text-slate-600 dark:text-slate-400">{item.eligibility}</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">Grant / Benefit: </span>
                  <span className="text-emerald-700 dark:text-emerald-400">{item.benefits}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>Deadline: <strong className="text-slate-800 dark:text-slate-200">{item.deadline}</strong></span>
              </div>

              <a
                href={item.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <span>Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
