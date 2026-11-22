import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Compass,
  HeartPulse,
  CheckCircle2
} from 'lucide-react';
import { ClassLevel, PreparationGoal, TargetExam } from '../../types';

interface RegisterPageProps {
  setActiveTab: (tab: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ setActiveTab }) => {
  const { register, loginDemo, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    preparationGoal: 'JEE Foundation' as PreparationGoal,
    classLevel: 'Class 10' as ClassLevel,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const classOptions: ClassLevel[] = [
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    const targetExam: TargetExam =
      formData.preparationGoal === 'NEET Foundation' ? 'NEET' : 'Both';

    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: 'student',
        classLevel: formData.classLevel,
        schoolType: 'Government School',
        targetExam,
        preparationGoal: formData.preparationGoal,
        preferredLanguage: 'English',
        district: 'General',
        state: 'India',
      });
      setActiveTab('dashboard');
    } catch (err: any) {
      setError(err?.message || 'Registration failed. Please try again.');
    }
  };

  const handleDemoSignIn = async (goal: PreparationGoal = 'JEE Foundation') => {
    await loginDemo('student');
    // If the demo was chosen, it'll log in as the default demo student
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-10 bg-slate-50">
      <div className="w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-900 text-white shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-extrabold tracking-wide uppercase text-blue-700">
              Learnify
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Your Journey to Excellence Begins Here.
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Learnify provides 100% free IIT-JEE &amp; NEET foundation coaching for students in Classes 6 to 12.
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          {/* 1. PREPARATION GOAL SELECTION CARDS */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              What are you preparing for? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* JEE Foundation Card */}
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, preparationGoal: 'JEE Foundation' })
                }
                className={`relative text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  formData.preparationGoal === 'JEE Foundation'
                    ? 'border-blue-900 bg-blue-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  {formData.preparationGoal === 'JEE Foundation' && (
                    <CheckCircle2 className="w-4 h-4 text-blue-900" />
                  )}
                </div>
                <div className="mt-2.5">
                  <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-blue-900 bg-blue-100 px-1.5 py-0.5 rounded">
                    Engineering
                  </span>
                  <div className="text-sm font-bold text-slate-900 mt-1">
                    JEE Foundation
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                    Physics, Chemistry &amp; Mathematics
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Strong analytical, mathematical, and JEE-level problem solving.
                  </p>
                </div>
              </button>

              {/* NEET Foundation Card */}
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, preparationGoal: 'NEET Foundation' })
                }
                className={`relative text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  formData.preparationGoal === 'NEET Foundation'
                    ? 'border-emerald-700 bg-emerald-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700/10 text-emerald-800 flex items-center justify-center">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  {formData.preparationGoal === 'NEET Foundation' && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  )}
                </div>
                <div className="mt-2.5">
                  <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    Medical
                  </span>
                  <div className="text-sm font-bold text-slate-900 mt-1">
                    NEET Foundation
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                    Physics, Chemistry &amp; Biology
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Detailed biological sciences, diagrams, and medical foundation.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* 2. CLASS SELECTION (Class 6 - Class 12) */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-2">
              Select Your Current Class <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
              {classOptions.map((lvl) => {
                const isSelected = formData.classLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setFormData({ ...formData, classLevel: lvl })}
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
              Selected: <strong className="text-blue-900">{formData.classLevel}</strong> with{' '}
              <strong className="text-blue-900">{formData.preparationGoal}</strong> curriculum (15 dedicated chapters).
            </p>
          </div>

          {/* 3. STUDENT CREDENTIALS */}
          <div className="pt-2 border-t border-slate-100 space-y-3.5">
            {/* Full Name */}
            <div>
              <label className="block font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xs"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xs"
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Min 6 chars"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:opacity-50 text-white font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm mt-4"
          >
            {isLoading ? <span>Creating Account...</span> : <span>Create Account &amp; Go to Dashboard</span>}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span>
            Already registered?{' '}
            <button
              onClick={() => setActiveTab('login')}
              className="font-semibold text-blue-900 hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </span>
          <button
            type="button"
            onClick={() => handleDemoSignIn('JEE Foundation')}
            className="text-[11px] text-slate-500 hover:text-blue-900 underline cursor-pointer"
          >
            Explore Demo
          </button>
        </div>
      </div>
    </div>
  );
};
