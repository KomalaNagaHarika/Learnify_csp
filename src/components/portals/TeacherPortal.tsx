import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Users,
  Award,
  AlertTriangle,
  BookOpen,
  Send,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageSquare,
  Shield,
} from 'lucide-react';

interface TeacherPortalProps {
  setActiveTab: (tab: string) => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({ setActiveTab }) => {
  const { user } = useAuth();

  const [announcement, setAnnouncement] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [assignedTest, setAssignedTest] = useState<string | null>(null);

  // Authorized students batch list (Govt School Telangana Cohort)
  const studentBatch = [
    { id: 'st-01', name: 'Ravi Kumar', school: 'ZPHS Narsampet', class: 'Class 12', completion: '82%', avgScore: '215/300', status: 'On Track', weak: 'Rotational Motion' },
    { id: 'st-02', name: 'Pooja Reddy', school: 'Govt Model School Warangal', class: 'Class 12', completion: '74%', avgScore: '198/300', status: 'On Track', weak: 'Definite Integrals' },
    { id: 'st-03', name: 'Karthik Rao', school: 'ZPHS Hanamkonda', class: 'Class 12', completion: '42%', avgScore: '110/300', status: 'Needs Assistance', weak: 'Chemical Bonding' },
    { id: 'st-04', name: 'Manasa K.', school: 'KGBV Mahabubabad', class: 'Class 11', completion: '88%', avgScore: '240/300', status: 'Excelling', weak: 'Kinematics 2D' },
  ];

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcement.trim()) return;
    setBroadcastSent(true);
    setTimeout(() => {
      setBroadcastSent(false);
      setAnnouncement('');
    }, 3000);
  };

  const handleAssignTest = (testTitle: string) => {
    setAssignedTest(testTitle);
    setTimeout(() => setAssignedTest(null), 3500);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
          <Shield className="w-3.5 h-3.5" />
          <span>Teacher / IIT Mentor Dashboard</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Batch Performance & Mentorship Console
        </h1>
        <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
          Welcome Dr. Anand Verma (Faculty Mentor). Monitor your assigned government-school student cohort, identify struggling students, broadcast homework assignments, and schedule mock tests.
        </p>
      </div>

      {assignedTest && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Successfully assigned "{assignedTest}" to your active batch! Notification dispatched to all students.</span>
        </div>
      )}

      {/* Cohort Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Assigned Cohort</span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">4 Students</div>
          <span className="text-[11px] text-blue-600 font-semibold">Rural Telangana Govt Batch</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Batch Avg Accuracy</span>
          <div className="text-2xl font-extrabold text-emerald-600">76.5%</div>
          <span className="text-[11px] text-emerald-600 font-semibold">+8% over last month</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Flagged for Help</span>
          <div className="text-2xl font-extrabold text-amber-500">1 Student</div>
          <span className="text-[11px] text-amber-600 font-semibold">Struggling in Chemistry</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500 font-medium">Avg Study Time</span>
          <div className="text-2xl font-extrabold text-purple-600">4.2 hrs/day</div>
          <span className="text-[11px] text-purple-600 font-semibold">Meeting daily target</span>
        </div>
      </div>

      {/* Student Table */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Assigned Students Progress Tracker</span>
          </h3>
          <span className="text-xs text-slate-400">Authorized Access Only</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3">Student Name</th>
                <th className="p-3">School</th>
                <th className="p-3">Class</th>
                <th className="p-3">Syllabus %</th>
                <th className="p-3">Avg Mock Score</th>
                <th className="p-3">Weakest Topic</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {studentBatch.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{st.name}</td>
                  <td className="p-3 text-slate-500">{st.school}</td>
                  <td className="p-3 font-mono">{st.class}</td>
                  <td className="p-3 font-bold text-blue-600 dark:text-blue-400">{st.completion}</td>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{st.avgScore}</td>
                  <td className="p-3 text-amber-600 font-medium">{st.weak}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      st.status === 'Needs Assistance'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'
                        : st.status === 'Excelling'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300'
                        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                    }`}>
                      {st.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Columns: Assign Test & Send Announcement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assign Test */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Assign Test to Cohort</span>
          </h3>
          <p className="text-xs text-slate-500">
            Schedule a mandatory or practice exam for your assigned students with automatic evaluation:
          </p>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => handleAssignTest('Physics Speed Booster: Mechanics')}
              className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Physics Speed Booster: Mechanics (45m)</div>
                <div className="text-slate-500 text-[11px]">Targets Newton's Laws & Friction</div>
              </div>
              <span className="font-bold text-blue-600 shrink-0">Assign</span>
            </button>

            <button
              onClick={() => handleAssignTest('Foundation Diagnostic Test: Bridge 9 & 10')}
              className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Foundation Diagnostic Test: Bridge 9 & 10 (30m)</div>
                <div className="text-slate-500 text-[11px]">Basic Polynomials & Vectors</div>
              </div>
              <span className="font-bold text-blue-600 shrink-0">Assign</span>
            </button>
          </div>
        </div>

        {/* Broadcast Announcement */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span>Send Mentor Announcement</span>
          </h3>

          {broadcastSent ? (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Announcement sent to all 4 student portals in your cohort!</span>
            </div>
          ) : (
            <form onSubmit={handleBroadcast} className="space-y-3 text-xs">
              <textarea
                required
                rows={3}
                placeholder="e.g. Please solve the 10 questions on Rotational Dynamics in the Practice Engine before tomorrow evening's discussion..."
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Broadcast Message to Cohort</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
