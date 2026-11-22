import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ClassLevel, PreparationGoal, SubjectName } from '../../types';
import { getSubjectsForGoal } from '../../data/classSyllabusData';
import {
  LIBRARY_CLASSES,
  LIBRARY_MATERIAL_TYPE_OPTIONS,
  LibraryMaterialEntry,
  LibraryMaterialType,
  filterStudyMaterialCatalog,
  getMaterialTypeMeta,
} from '../../data/studyMaterialCatalog';
import { StudyMaterialViewer } from '../courses/StudyMaterialViewer';
import {
  Search,
  BookOpen,
  X,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

interface StudyMaterialLibraryProps {
  setActiveTab: (tab: string) => void;
}

function normalizeUserClass(classLevel?: string): ClassLevel | 'All' {
  if (!classLevel) return 'All';
  if (classLevel === 'Dropper') return 'Class 12';
  if ((LIBRARY_CLASSES as readonly string[]).includes(classLevel)) {
    return classLevel as ClassLevel;
  }
  return 'All';
}

export const StudyMaterialLibrary: React.FC<StudyMaterialLibraryProps> = ({
  setActiveTab: _setActiveTab,
}) => {
  const { user, progress, markChapterCompleted } = useAuth();

  const [selectedGoal, setSelectedGoal] = useState<PreparationGoal>(
    user?.preparationGoal || 'JEE Foundation'
  );
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'All'>(() =>
    normalizeUserClass(user?.classLevel)
  );
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'All'>('All');
  const [selectedBioBranch, setSelectedBioBranch] = useState<'All' | 'Botany' | 'Zoology'>('All');
  const [selectedType, setSelectedType] = useState<LibraryMaterialType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEntry, setActiveEntry] = useState<LibraryMaterialEntry | null>(null);

  // Sync defaults if the user's profile goal or class changes
  useEffect(() => {
    if (user?.preparationGoal) {
      setSelectedGoal(user.preparationGoal);
    }
  }, [user?.preparationGoal]);

  useEffect(() => {
    if (user?.classLevel) {
      setSelectedClass(normalizeUserClass(user.classLevel));
    }
  }, [user?.classLevel]);

  const availableSubjects = useMemo(
    () => getSubjectsForGoal(selectedGoal),
    [selectedGoal]
  );

  // Ensure subject filter never holds a subject outside the selected learning path
  useEffect(() => {
    if (selectedSubject !== 'All' && !availableSubjects.includes(selectedSubject)) {
      setSelectedSubject('All');
    }
    if (selectedGoal !== 'NEET Foundation') {
      setSelectedBioBranch('All');
    }
  }, [selectedGoal, availableSubjects, selectedSubject]);

  const materialTypeMeta = useMemo(
    () => getMaterialTypeMeta(selectedType),
    [selectedType]
  );

  const filteredEntries = useMemo(
    () =>
      filterStudyMaterialCatalog({
        goal: selectedGoal,
        classLevel: selectedClass,
        subject: selectedSubject,
        biologyBranch: selectedSubject === 'Biology' ? selectedBioBranch : 'All',
        materialType: selectedType,
        searchQuery,
      }),
    [
      selectedGoal,
      selectedClass,
      selectedSubject,
      selectedBioBranch,
      selectedType,
      searchQuery,
    ]
  );

  // Group cleanly by Subject when a single class is selected, or by Class when All Classes is selected
  const groupedEntries = useMemo(() => {
    const groups: { groupTitle: string; subtitle: string; items: LibraryMaterialEntry[] }[] = [];
    const groupMap = new Map<string, LibraryMaterialEntry[]>();

    for (const entry of filteredEntries) {
      const key =
        selectedClass === 'All'
          ? entry.classLevel
          : entry.subject === 'Biology' && entry.biologyBranch
            ? `${entry.subject}`
            : entry.subject;

      const list = groupMap.get(key) || [];
      list.push(entry);
      groupMap.set(key, list);
    }

    if (selectedClass === 'All') {
      for (const cls of LIBRARY_CLASSES) {
        const items = groupMap.get(cls);
        if (items && items.length > 0) {
          const levelTag =
            cls === 'Class 11' || cls === 'Class 12'
              ? `${selectedGoal === 'JEE Foundation' ? 'IIT-JEE' : 'NEET'} Foundation Level`
              : 'School Foundation Curriculum';
          groups.push({
            groupTitle: cls,
            subtitle: `${levelTag} · ${items.length} ${items.length === 1 ? 'Chapter' : 'Chapters'}`,
            items,
          });
        }
      }
    } else {
      for (const subj of availableSubjects) {
        const items = groupMap.get(subj);
        if (items && items.length > 0) {
          const subtitle =
            subj === 'Biology'
              ? `Botany & Zoology · ${items.length} ${items.length === 1 ? 'Chapter' : 'Chapters'}`
              : `${selectedClass} · ${items.length} ${items.length === 1 ? 'Chapter' : 'Chapters'}`;
          groups.push({
            groupTitle: subj,
            subtitle,
            items,
          });
        }
      }
    }

    return groups;
  }, [filteredEntries, selectedClass, selectedGoal, availableSubjects]);

  const hasActiveFilters =
    selectedClass !== 'All' ||
    selectedSubject !== 'All' ||
    selectedBioBranch !== 'All' ||
    selectedType !== 'all' ||
    searchQuery.trim() !== '';

  const resetFilters = () => {
    setSelectedClass('All');
    setSelectedSubject('All');
    setSelectedBioBranch('All');
    setSelectedType('all');
    setSearchQuery('');
  };

  // Document-Style Reading View when a student opens any chapter's Study Material
  if (activeEntry) {
    const isCompleted = progress.completedChapterIds.includes(activeEntry.id);
    return (
      <div className="pb-12 max-w-5xl mx-auto">
        {/* Clean Document Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs border border-slate-200 border-b-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setActiveEntry(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Study Materials Library</span>
          </button>

          <button
            type="button"
            onClick={() => markChapterCompleted(activeEntry.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-900 hover:bg-blue-800 text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {isCompleted ? 'Chapter Completed' : 'Mark Chapter Completed'}
            </span>
          </button>
        </div>

        {/* Continuous Word / PDF Textbook Document */}
        <div className="border-x border-b border-slate-200">
          <StudyMaterialViewer
            chapter={activeEntry.chapter}
            initialSection={materialTypeMeta.targetSection}
            standalonePage={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12 max-w-6xl mx-auto">
      {/* Header & Filter Controls */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Study Materials Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Class-wise and chapter-wise study material for Classes 6 to 12 across IIT-JEE and NEET Foundation on Learnify.
            </p>
          </div>

          {/* Learning Path Selector (strictly isolates IIT-JEE PCM vs NEET PCB) */}
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start">
            {(
              [
                { id: 'JEE Foundation', label: 'IIT-JEE Foundation' },
                { id: 'NEET Foundation', label: 'NEET Foundation' },
              ] as const
            ).map((path) => {
              const isSelected = selectedGoal === path.id;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setSelectedGoal(path.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {path.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Class Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1">Class:</span>
          {(['All', ...LIBRARY_CLASSES] as const).map((cls) => (
            <button
              key={cls}
              type="button"
              onClick={() => setSelectedClass(cls)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedClass === cls
                  ? 'bg-blue-900 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cls === 'All' ? 'All Classes' : cls}
            </button>
          ))}
        </div>

        {/* Search, Subject & Material Type Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by topic, formula, chapter title, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Subject Filter */}
          <div className="sm:col-span-3">
            <select
              aria-label="Filter by subject"
              value={selectedSubject}
              onChange={(e) => {
                const next = e.target.value as SubjectName | 'All';
                setSelectedSubject(next);
                if (next !== 'Biology') setSelectedBioBranch('All');
              }}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="All">
                All {selectedGoal === 'JEE Foundation' ? 'JEE' : 'NEET'} Subjects
              </option>
              {availableSubjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          {/* Material Type Filter */}
          <div className="sm:col-span-3">
            <select
              aria-label="Filter by material type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as LibraryMaterialType)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {LIBRARY_MATERIAL_TYPE_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Biology Subdivision Filter (Botany / Zoology) when NEET + Biology is selected */}
        {selectedGoal === 'NEET Foundation' && selectedSubject === 'Biology' && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-1">Biology Division:</span>
            {(['All', 'Botany', 'Zoology'] as const).map((branch) => (
              <button
                key={branch}
                type="button"
                onClick={() => setSelectedBioBranch(branch)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedBioBranch === branch
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                }`}
              >
                {branch === 'All' ? 'All Biology (Botany & Zoology)' : branch}
              </button>
            ))}
          </div>
        )}

        {/* Active Result Summary */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-900">{filteredEntries.length}</strong>{' '}
            {filteredEntries.length === 1 ? 'chapter' : 'chapters'} ·{' '}
            <span className="font-semibold text-blue-900">
              {selectedGoal === 'JEE Foundation'
                ? 'IIT-JEE Foundation (Physics, Chemistry, Mathematics)'
                : 'NEET Foundation (Physics, Chemistry, Biology)'}
            </span>
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Grouped Chapter-Wise Study Material Cards */}
      {groupedEntries.length > 0 ? (
        <div className="space-y-8">
          {groupedEntries.map((group) => (
            <section key={group.groupTitle} className="space-y-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  {group.groupTitle}
                </h2>
                <span className="text-xs font-medium text-slate-500">
                  {group.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((entry) => {
                  const isCompleted = progress.completedChapterIds.includes(entry.id);
                  const subjectDisplay =
                    entry.subject === 'Biology' && entry.biologyBranch
                      ? `Biology · ${entry.biologyBranch}`
                      : entry.subject;

                  return (
                    <div
                      key={entry.id}
                      className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2.5">
                        {/* Class & Subject Row */}
                        <div className="flex items-center justify-between gap-2 text-[11px]">
                          <span className="font-bold text-blue-900 uppercase tracking-wide">
                            {entry.classLevel} · {subjectDisplay}
                          </span>
                          {isCompleted && (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Done</span>
                            </span>
                          )}
                        </div>

                        {/* Chapter Number & Title */}
                        <div className="space-y-1">
                          <div className="text-xs font-semibold text-slate-500">
                            Chapter {entry.chapterNumber}
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {entry.chapterTitle}
                          </h3>
                        </div>

                        {/* Material Type */}
                        <div className="pt-0.5">
                          <span className="inline-block text-[11px] font-semibold text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                            {materialTypeMeta.cardBadge}
                          </span>
                        </div>
                      </div>

                      {/* Open Study Material Button */}
                      <div className="pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setActiveEntry(entry)}
                          className="w-full py-2.5 px-4 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Open Study Material</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <p className="text-sm font-semibold text-slate-700">
            No study materials matched your current filters.
          </p>
          <p className="text-xs text-slate-500">
            Try clearing your search query or switching to All Classes or All Subjects.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer"
          >
            Show All Chapters
          </button>
        </div>
      )}
    </div>
  );
};
