import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { CourseCurriculum } from './components/courses/CourseCurriculum';
import { StudyMaterialLibrary } from './components/materials/StudyMaterialLibrary';
import { PersonalizedPracticeEngine } from './components/practice/PersonalizedPracticeEngine';
import { MockTestCentre } from './components/mocktest/MockTestCentre';
import { StudentProfileView } from './components/dashboard/StudentProfileView';
import { BadgeAwardToast } from './components/common/BadgeAwardToast';
import { SubjectName } from './types';
import {
  Home,
  LayoutDashboard,
  BookOpen,
  FileText,
  Target,
  Clock,
  User,
  LogOut,
  ChevronRight
} from 'lucide-react';

function MainApp() {
  const { user, logout } = useAuth();

  // Registration-first requirement: if user is not authenticated, default to 'register'
  const [activeTab, setActiveTab] = useState<string>(() => {
    return user ? 'dashboard' : 'register';
  });

  const [selectedSubject, setSelectedSubject] = useState<SubjectName | undefined>(undefined);

  // Keep activeTab in sync if auth state changes
  useEffect(() => {
    if (!user && activeTab !== 'register' && activeTab !== 'login' && activeTab !== 'home') {
      setActiveTab('register');
    }
  }, [user]);

  // Handle tab and subject navigation
  const handleNavigate = (tab: string, subjectFilter?: string) => {
    if (subjectFilter) {
      setSelectedSubject(subjectFilter as SubjectName);
    }
    setActiveTab(tab);
  };

  // Handle logout action
  const handleLogout = () => {
    logout();
    setActiveTab('register');
  };

  // Student portal items + logout
  const sidebarItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'materials', label: 'Study Materials', icon: FileText },
    { id: 'practice', label: 'Practice Questions', icon: Target },
    { id: 'mocktests', label: 'Mock Tests', icon: Clock },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const isPortalView = !!user && activeTab !== 'home' && activeTab !== 'login' && activeTab !== 'register';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Layout Container */}
      <div className="flex-1 flex w-full">
        {/* Simple Student Sidebar for Logged-in Students */}
        {isPortalView && (
          <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-slate-200 p-4 space-y-1 shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
            <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Student Menu
            </div>

            <nav className="space-y-1 flex-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </nav>

            {/* Logout button at bottom of sidebar */}
            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        )}

        {/* Content View Area */}
        <main className={`flex-1 ${isPortalView ? 'p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto' : ''}`}>
          {activeTab === 'register' && <RegisterPage setActiveTab={setActiveTab} />}
          {activeTab === 'login' && <LoginPage setActiveTab={setActiveTab} />}
          {activeTab === 'home' && <LandingPage setActiveTab={setActiveTab} />}
          {activeTab === 'dashboard' && <StudentDashboard setActiveTab={handleNavigate} />}
          {activeTab === 'courses' && (
            <CourseCurriculum
              setActiveTab={handleNavigate}
              defaultSubject={selectedSubject}
            />
          )}
          {activeTab === 'materials' && <StudyMaterialLibrary setActiveTab={setActiveTab} />}
          {activeTab === 'practice' && <PersonalizedPracticeEngine setActiveTab={setActiveTab} />}
          {activeTab === 'mocktests' && <MockTestCentre setActiveTab={setActiveTab} />}
          {activeTab === 'profile' && <StudentProfileView setActiveTab={setActiveTab} />}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Automatic Badge Earned Notification */}
      <BadgeAwardToast />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
