import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  GraduationCap,
  Menu,
  X,
  User,
  LogOut
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main navigation sections
  const navSections = [
    { id: 'home', label: 'Home', authRequired: false },
    { id: 'dashboard', label: 'Dashboard', authRequired: true },
    { id: 'courses', label: 'Courses', authRequired: false },
    { id: 'materials', label: 'Study Materials', authRequired: false },
    { id: 'practice', label: 'Practice Questions', authRequired: false },
    { id: 'mocktests', label: 'Mock Tests', authRequired: false },
    { id: 'profile', label: 'Profile', authRequired: true },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setActiveTab('register');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <button
          onClick={() => setActiveTab(user ? 'dashboard' : 'home')}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold shadow-sm">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-extrabold text-base sm:text-lg tracking-tight text-blue-900">
              Learn<span className="text-blue-600">ify</span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium leading-none">
              JEE &amp; NEET Foundation
            </div>
          </div>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-600">
          {navSections.map((sec) => {
            if (sec.authRequired && !user) return null;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-blue-900 font-bold border-b-2 border-blue-900'
                    : 'hover:text-blue-700'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('profile')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
              >
                <User className="w-3.5 h-3.5 text-blue-700" />
                <span className="truncate max-w-[200px]">
                  {user.fullName.split(' ')[0]} ({user.classLevel} · {user.preparationGoal === 'NEET Foundation' ? 'NEET' : 'JEE'})
                </span>
              </button>

              <button
                onClick={handleLogout}
                title="Logout"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('login')}
                className="px-3 py-1.5 text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className="px-3.5 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors cursor-pointer shadow-sm"
              >
                Register
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
          {navSections.map((sec) => {
            if (sec.authRequired && !user) return null;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 pt-2 border-t border-slate-100 mt-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
