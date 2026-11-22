import React, { useState } from 'react';
import { FORMULA_CARDS } from '../../data/mockData';
import { FormulaCard, SubjectName } from '../../types';
import { Layers, RotateCcw, CheckCircle, AlertTriangle, HelpCircle, Sparkles, Filter } from 'lucide-react';

interface FormulaRevisionProps {
  setActiveTab: (tab: string) => void;
}

export const FormulaRevision: React.FC<FormulaRevisionProps> = ({ setActiveTab }) => {
  const [cards, setCards] = useState<FormulaCard[]>(FORMULA_CARDS);
  const [activeSubject, setActiveSubject] = useState<SubjectName | 'All'>('All');
  const [activeStatusFilter, setActiveStatusFilter] = useState<'all' | 'easy' | 'revision' | 'hard'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const filteredCards = cards.filter((c) => {
    const matchSub = activeSubject === 'All' || c.subject === activeSubject;
    const matchStatus = activeStatusFilter === 'all' || c.status === activeStatusFilter;
    return matchSub && matchStatus;
  });

  const toggleFlip = (cardId: string) => {
    setFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const updateCardStatus = (cardId: string, status: 'easy' | 'revision' | 'hard') => {
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, status } : c))
    );
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Active Recall & Spaced Repetition</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Formula & Concept Flashcard Revision
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Flip cards to test your recall of governing equations, physical conditions of validity, and SI units. Rate each card to prioritize what requires urgent revision before your mock tests.
        </p>
      </div>

      {/* Control Filter Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs">
        {/* Subject Filter */}
        <div className="flex items-center gap-1 overflow-x-auto">
          {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubject(sub)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                activeSubject === sub
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-500">Filter by mastery:</span>
          {(['all', 'easy', 'revision', 'hard'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setActiveStatusFilter(st)}
              className={`px-2.5 py-1 rounded-lg capitalize font-medium transition-colors cursor-pointer ${
                activeStatusFilter === st
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {st === 'revision' ? 'Needs Revision' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const isFlipped = flippedCards[card.id];

          return (
            <div
              key={card.id}
              className={`min-h-[260px] p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer ${
                isFlipped
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/40 border-blue-400 dark:border-blue-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300'
              }`}
              onClick={() => toggleFlip(card.id)}
            >
              {/* Card Front (Prompt / Name) */}
              {!isFlipped ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{card.subject}</span>
                    <span className="text-[11px] font-mono">{card.chapter}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-500 italic">
                    Tap to flip card and test your equation recall...
                  </p>
                </div>
              ) : (
                /* Card Back (Formula & Physical Meaning) */
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Formula Revealed</span>
                    <span className="text-[11px] font-mono text-slate-500">Units: {card.units}</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-sm text-blue-700 dark:text-blue-300">
                    {card.formula}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {card.explanation}
                  </p>
                </div>
              )}

              {/* Status Rating Controls */}
              <div
                className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Mastery:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateCardStatus(card.id, 'easy')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      card.status === 'easy'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50'
                    }`}
                  >
                    Easy
                  </button>
                  <button
                    onClick={() => updateCardStatus(card.id, 'revision')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      card.status === 'revision'
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-amber-50'
                    }`}
                  >
                    Revise
                  </button>
                  <button
                    onClick={() => updateCardStatus(card.id, 'hard')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      card.status === 'hard'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-50'
                    }`}
                  >
                    Hard
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
