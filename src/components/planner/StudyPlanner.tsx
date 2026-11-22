import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { SubjectName, StudyTask } from '../../types';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Plus,
  Target,
  Sparkles,
  Layers,
  Flag,
  Trash2,
} from 'lucide-react';

interface StudyPlannerProps {
  setActiveTab: (tab: string) => void;
}

export const StudyPlanner: React.FC<StudyPlannerProps> = ({ setActiveTab }) => {
  const { studyTasks, addStudyTask, toggleTaskComplete, dailyGoalHours, setDailyGoalHours } = useAuth();

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState<SubjectName>('Physics');
  const [newTaskMinutes, setNewTaskMinutes] = useState(45);
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('high');

  const roadmapMilestones = [
    {
      day: 'Days 1–30',
      title: 'Foundation & Core Mechanics / GOC',
      desc: 'Bridge concepts, Free Body Diagrams, Kinematics, Mole Concept, Basic Algebra, and GOC stability.',
      status: 'active',
    },
    {
      day: 'Days 31–60',
      title: 'Differential Calculus & Chemical Energetics',
      desc: 'Limits, Continuity, Derivatives, Chemical Thermodynamics, Equilibrium, Rotational Dynamics.',
      status: 'upcoming',
    },
    {
      day: 'Days 61–90',
      title: 'Integration, Electrodynamics & Full Mock Sprints',
      desc: 'Definite integrals, Differential Equations, Electrostatics, Full-length 3-hour NTA CBT Mock series.',
      status: 'upcoming',
    },
  ];

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    addStudyTask({
      title: newTaskTitle.trim(),
      subject: newTaskSubject,
      targetDate: 'Today',
      estimatedMinutes: newTaskMinutes,
      completed: false,
      priority: newTaskPriority,
    });

    setNewTaskTitle('');
  };

  const completedTasks = studyTasks.filter((t) => t.completed).length;

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Interactive Time & Goal Manager</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Personalized Study Planner & 90-Day Roadmap
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Consistent daily practice beats last-minute cramming. Set your daily goals, track your tasks, and follow the adaptive 90-day IIT-JEE milestone roadmap.
        </p>
      </div>

      {/* 90-Day Roadmap Tracker */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-200">Structured Roadmap</span>
            <h2 className="text-xl sm:text-2xl font-bold">90-Day Intensive JEE Preparation Blueprint</h2>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
            Phase 1 Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapMilestones.map((m, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all ${
                m.status === 'active'
                  ? 'bg-white/20 border-white/40 shadow-lg'
                  : 'bg-white/10 border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-blue-200 mb-2">
                <span className="font-bold">{m.day}</span>
                <span className="uppercase text-[10px] tracking-wide">{m.status}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{m.title}</h3>
              <p className="text-xs text-blue-100 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Column Section: Task Manager + Daily Target */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Task Checklist & Form */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Today's Study Checklist ({completedTasks}/{studyTasks.length} Done)</span>
            </h3>
          </div>

          {/* Add Task Form */}
          <form onSubmit={handleCreateTask} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300">Add New Study Task:</span>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="e.g. Solve 10 questions on Rotational Dynamics..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
              <select
                value={newTaskSubject}
                onChange={(e) => setNewTaskSubject(e.target.value as SubjectName)}
                className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Bridge Foundation">Foundation</option>
              </select>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
            </div>
          </form>

          {/* Task Items List */}
          <div className="space-y-3">
            {studyTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTaskComplete(task.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  task.completed
                    ? 'border-emerald-200 bg-emerald-50/30 dark:border-emerald-900/50 dark:bg-slate-900 text-slate-400'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      task.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className={`text-xs sm:text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                      {task.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{task.subject}</span>
                      <span>·</span>
                      <span>{task.estimatedMinutes} mins</span>
                    </div>
                  </div>
                </div>

                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                  task.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Daily Timetable Routine */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Recommended Daily Timetable</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ideal 4–5 hour daily schedule for students balancing school with IIT-JEE self-study:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-0.5">
                <span className="font-bold text-blue-600">6:00 AM – 7:30 AM (90m)</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Physics Derivations & Concepts</div>
                <div className="text-[11px] text-slate-500">Fresh morning mind is best for mechanics intuition.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-0.5">
                <span className="font-bold text-purple-600">5:00 PM – 6:30 PM (90m)</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Chemistry & Reaction Mechanisms</div>
                <div className="text-[11px] text-slate-500">Organic GOC flashcards and NCERT review.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-0.5">
                <span className="font-bold text-emerald-600">8:00 PM – 9:30 PM (90m)</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Mathematics Problem Sprint</div>
                <div className="text-[11px] text-slate-500">Solve 15-20 problems on algebra or calculus.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
