import React from 'react';
import { Chapter } from '../../types';
import { BookOpen, ChevronRight } from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
  isCompleted?: boolean;
  onOpen: (chapter: Chapter) => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  isCompleted = false,
  onOpen,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between gap-5 h-full ${
        isCompleted
          ? 'border-emerald-300 shadow-2xs hover:border-blue-400 hover:shadow-md'
          : 'border-slate-200 hover:border-blue-400 hover:shadow-md'
      }`}
    >
      <div className="space-y-2">
        <span className="inline-block text-xs font-bold tracking-wide uppercase text-blue-700">
          Chapter {chapter.order}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {chapter.title}
        </h3>
      </div>

      <button
        type="button"
        onClick={() => onOpen(chapter)}
        className="w-full px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
      >
        <BookOpen className="w-4 h-4 shrink-0" />
        <span>Open Chapter Study &amp; Tests</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
      </button>
    </div>
  );
};
