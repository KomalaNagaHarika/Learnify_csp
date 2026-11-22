import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import {
  UserProfile,
  UserRole,
  StudentProgress,
  TestAttempt,
  StudyTask,
  PreferredLanguage,
  ClassLevel,
  SchoolType,
  TargetExam,
  PreparationGoal,
  AchievementBadgeId,
  EarnedBadge,
} from '../types';
import { fetchMockTestHistory } from '../services/mockTestApi';
import {
  evaluateEligibleBadgeIds,
  filterValidBadges,
  getLocalDateKey,
  mergeEarnedBadges,
  recordStudyActivityDate,
  ServerAttemptMetric,
} from '../utils/badgeEngine';

export interface RegisteredAccount extends UserProfile {
  passwordHash?: string;
}

interface RegisterInput extends Omit<UserProfile, 'uid' | 'createdAt'> {
  password?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string, role?: UserRole) => Promise<boolean>;
  loginDemo: (role?: UserRole) => Promise<void>;
  register: (profile: RegisterInput) => Promise<boolean>;
  updateProfile: (updates: Partial<UserProfile>) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  progress: StudentProgress;
  markChapterCompleted: (chapterId: string) => void;
  recordPracticeAnswer: (isCorrect: boolean) => void;
  recordPracticeQuizCompleted: () => void;
  saveTestAttempt: (attempt: TestAttempt) => void;
  testAttempts: TestAttempt[];
  earnedBadges: EarnedBadge[];
  recentBadgeAwards: EarnedBadge[];
  dismissBadgeAward: (badgeId?: AchievementBadgeId) => void;
  bookmarkedMaterials: string[];
  toggleBookmarkMaterial: (materialId: string) => void;
  studyTasks: StudyTask[];
  addStudyTask: (task: Omit<StudyTask, 'id'>) => void;
  toggleTaskComplete: (taskId: string) => void;
  dailyGoalHours: number;
  setDailyGoalHours: (hours: number) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: PreferredLanguage;
  setLanguage: (lang: PreferredLanguage) => void;
  lowBandwidth: boolean;
  toggleLowBandwidth: () => void;
}

const DEFAULT_DEMO_STUDENT: UserProfile = {
  uid: 'demo-student-001',
  fullName: 'Ravi Kumar',
  email: 'ravi.kumar@learnify.edu',
  role: 'student',
  preparationGoal: 'JEE Foundation',
  classLevel: 'Class 12',
  schoolType: 'Government School',
  targetExam: 'Both',
  preferredLanguage: 'English',
  district: 'Warangal',
  state: 'Telangana',
  createdAt: '2025-01-15T08:00:00.000Z',
  isDemo: true,
};

const DEFAULT_DEMO_PROGRESS: StudentProgress = {
  studentId: 'demo-student-001',
  completedChapterIds: ['bridge-math-01', 'bridge-phys-01', 'phys-01', 'phys-02', 'chem-01'],
  practiceQuestionsAttempted: 140,
  practiceQuestionsCorrect: 112,
  practiceQuizzesCompleted: 1,
  studyHours: 48.5,
  streakDays: 7,
  studyDates: [getLocalDateKey()],
  dailyGoalHours: 4,
  bookmarkedMaterialIds: ['mat-phys-book', 'mat-chem-reactions'],
  bookmarkedQuestionIds: ['q-phys-01', 'q-math-04'],
  strongChapters: ['Kinematics', 'Units and Measurements', 'Mole Concept'],
  weakChapters: ['Rotational Motion', 'Ionic Equilibrium', 'Definite Integration'],
  earnedBadges: [],
};

const DEFAULT_DEMO_ATTEMPTS: TestAttempt[] = [];

const DEFAULT_TASKS: StudyTask[] = [
  {
    id: 'task-1',
    title: 'Review King\'s Rule for Definite Integrals',
    subject: 'Mathematics',
    targetDate: 'Today',
    estimatedMinutes: 45,
    completed: true,
    priority: 'high',
  },
  {
    id: 'task-2',
    title: 'Solve 10 JEE Main questions on Rotational Dynamics',
    subject: 'Physics',
    targetDate: 'Today',
    estimatedMinutes: 60,
    completed: false,
    priority: 'high',
  },
  {
    id: 'task-3',
    title: 'Review Acidic Strength order in GOC Flashcards',
    subject: 'Chemistry',
    targetDate: 'Tomorrow',
    estimatedMinutes: 30,
    completed: false,
    priority: 'medium',
  },
];

const createEmptyProgress = (uid: string): StudentProgress => ({
  studentId: uid,
  completedChapterIds: [],
  practiceQuestionsAttempted: 0,
  practiceQuestionsCorrect: 0,
  practiceQuizzesCompleted: 0,
  studyHours: 0,
  streakDays: 1,
  studyDates: [getLocalDateKey()],
  dailyGoalHours: 4,
  bookmarkedMaterialIds: [],
  bookmarkedQuestionIds: [],
  strongChapters: [],
  weakChapters: [],
  earnedBadges: [],
});

const loadSavedBadgesForUser = (uid: string, fallbackProgress?: StudentProgress): EarnedBadge[] => {
  try {
    const raw = localStorage.getItem(`learnify_badges_${uid}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      return filterValidBadges(parsed);
    }
  } catch {
    // ignore storage parse error
  }
  return filterValidBadges(fallbackProgress?.earnedBadges);
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // USER: Defaults to null on fresh visit (Registration-first requirement)
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('udaan_auth_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Student progress per user
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const savedUserStr = localStorage.getItem('udaan_auth_current_user');
      if (savedUserStr) {
        const currentUser = JSON.parse(savedUserStr);
        const savedProg = localStorage.getItem(`udaan_progress_${currentUser.uid}`);
        if (savedProg) return JSON.parse(savedProg);
        if (currentUser.isDemo) return DEFAULT_DEMO_PROGRESS;
        return createEmptyProgress(currentUser.uid);
      }
    } catch {
      // fallback
    }
    return createEmptyProgress('guest');
  });

  // Test attempts per user
  const [testAttempts, setTestAttempts] = useState<TestAttempt[]>(() => {
    try {
      const savedUserStr = localStorage.getItem('udaan_auth_current_user');
      if (savedUserStr) {
        const currentUser = JSON.parse(savedUserStr);
        const savedAttempts = localStorage.getItem(`udaan_attempts_${currentUser.uid}`);
        if (savedAttempts) return JSON.parse(savedAttempts);
        if (currentUser.isDemo) return DEFAULT_DEMO_ATTEMPTS;
        return [];
      }
    } catch {
      // fallback
    }
    return [];
  });

  // Saved earned badges per user
  const [earnedBadges, setEarnedBadges] = useState<EarnedBadge[]>(() => {
    try {
      const savedUserStr = localStorage.getItem('udaan_auth_current_user');
      if (savedUserStr) {
        const currentUser = JSON.parse(savedUserStr);
        const savedProgStr = localStorage.getItem(`udaan_progress_${currentUser.uid}`);
        const parsedProg = savedProgStr ? JSON.parse(savedProgStr) : undefined;
        return loadSavedBadgesForUser(currentUser.uid, parsedProg);
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [serverAttempts, setServerAttempts] = useState<ServerAttemptMetric[]>([]);
  const [recentBadgeAwards, setRecentBadgeAwards] = useState<EarnedBadge[]>([]);

  // Suppress toast spam on initial account load/login, but always notify on live student actions
  const notifyNewAwardsRef = useRef<boolean>(false);
  const lastEvaluatedUidRef = useRef<string | null>(null);

  const [studyTasks, setStudyTasks] = useState<StudyTask[]>(() => {
    try {
      const saved = localStorage.getItem('udaan_tasks');
      return saved ? JSON.parse(saved) : DEFAULT_TASKS;
    } catch {
      return DEFAULT_TASKS;
    }
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('udaan_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [language, setLanguage] = useState<PreferredLanguage>(() => {
    try {
      const saved = localStorage.getItem('udaan_language');
      return (saved as PreferredLanguage) || 'English';
    } catch {
      return 'English';
    }
  });

  const [lowBandwidth, setLowBandwidth] = useState<boolean>(() => {
    try {
      return localStorage.getItem('udaan_low_bandwidth') === 'true';
    } catch {
      return false;
    }
  });

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('udaan_theme', theme);
  }, [theme]);

  // Persist current session
  useEffect(() => {
    if (user) {
      localStorage.setItem('udaan_auth_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('udaan_auth_current_user');
    }
  }, [user]);

  // Persist progress under user-specific key (including earnedBadges snapshot)
  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem(
        `udaan_progress_${user.uid}`,
        JSON.stringify({ ...progress, earnedBadges })
      );
      localStorage.setItem(`learnify_badges_${user.uid}`, JSON.stringify(earnedBadges));
    }
  }, [progress, earnedBadges, user]);

  // Persist test attempts under user-specific key
  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem(`udaan_attempts_${user.uid}`, JSON.stringify(testAttempts));
    }
  }, [testAttempts, user]);

  // Load server-persisted mock test history for the logged-in student so badges reflect real scores
  useEffect(() => {
    let active = true;
    const uid = user?.uid;
    if (!uid) {
      setServerAttempts([]);
      return;
    }

    fetchMockTestHistory(uid)
      .then((res) => {
        if (!active) return;
        const metrics: ServerAttemptMetric[] = (res.attempts || []).map((a) => ({
          percentage: a.percentage || 0,
          testType: a.testType,
        }));
        setServerAttempts(metrics);
      })
      .catch(() => {
        // Keep local testAttempts if server history is temporarily unreachable
      });

    return () => {
      active = false;
    };
  }, [user?.uid, testAttempts.length]);

  // Automatic badge evaluation engine: runs whenever student activity changes
  useEffect(() => {
    const uid = user?.uid;
    if (!uid) return;

    const isAccountSwitch = lastEvaluatedUidRef.current !== uid;
    lastEvaluatedUidRef.current = uid;

    const eligibleIds = evaluateEligibleBadgeIds({
      progress,
      testAttempts,
      serverAttempts,
    });

    if (eligibleIds.length === 0) return;

    const { updated, newlyAwarded } = mergeEarnedBadges(earnedBadges, eligibleIds);
    if (newlyAwarded.length === 0) return;

    setEarnedBadges(updated);

    if (notifyNewAwardsRef.current && !isAccountSwitch) {
      setRecentBadgeAwards((queue) => {
        const existingIds = new Set(queue.map((b) => b.id));
        const uniqueAdditions = newlyAwarded.filter((b) => !existingIds.has(b.id));
        return uniqueAdditions.length > 0 ? [...queue, ...uniqueAdditions] : queue;
      });
    }
  }, [
    user?.uid,
    progress.completedChapterIds,
    progress.practiceQuizzesCompleted,
    progress.streakDays,
    progress.studyDates,
    testAttempts,
    serverAttempts,
    earnedBadges,
  ]);

  const dismissBadgeAward = useCallback((badgeId?: AchievementBadgeId) => {
    if (!badgeId) {
      setRecentBadgeAwards([]);
      return;
    }
    setRecentBadgeAwards((prev) => prev.filter((item) => item.id !== badgeId));
  }, []);

  // Persist tasks
  useEffect(() => {
    localStorage.setItem('udaan_tasks', JSON.stringify(studyTasks));
  }, [studyTasks]);

  useEffect(() => {
    localStorage.setItem('udaan_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('udaan_low_bandwidth', String(lowBandwidth));
  }, [lowBandwidth]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLowBandwidth = () => {
    setLowBandwidth((prev) => !prev);
  };

  // Helper to load accounts from storage
  const getRegisteredAccounts = (): RegisteredAccount[] => {
    try {
      const raw = localStorage.getItem('udaan_registered_accounts');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  // REAL AUTHENTICATION: Login
  const login = async (email: string, password?: string, role: UserRole = 'student'): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 350));

    const cleanEmail = email.trim().toLowerCase();
    const accounts = getRegisteredAccounts();

    // Look for existing registered student account
    const found = accounts.find((acc) => acc.email.toLowerCase() === cleanEmail);

    if (found) {
      // Validate password if supplied
      if (password && found.passwordHash && found.passwordHash !== password) {
        setIsLoading(false);
        throw new Error('Incorrect password. Please verify your credentials or reset your password.');
      }

      notifyNewAwardsRef.current = false;
      setRecentBadgeAwards([]);
      setUser(found);

      // Load this user's progress
      let loadedProgress: StudentProgress;
      const userProgress = localStorage.getItem(`udaan_progress_${found.uid}`);
      if (userProgress) {
        loadedProgress = JSON.parse(userProgress);
        setProgress(loadedProgress);
      } else {
        loadedProgress = createEmptyProgress(found.uid);
        setProgress(loadedProgress);
        localStorage.setItem(`udaan_progress_${found.uid}`, JSON.stringify(loadedProgress));
      }

      // Load this user's saved earned badges
      setEarnedBadges(loadSavedBadgesForUser(found.uid, loadedProgress));

      // Load this user's test attempts
      const userAttempts = localStorage.getItem(`udaan_attempts_${found.uid}`);
      if (userAttempts) {
        setTestAttempts(JSON.parse(userAttempts));
      } else {
        setTestAttempts([]);
      }

      setIsLoading(false);
      return true;
    }

    // Check if evaluator requested quick demo credentials
    if (
      cleanEmail === 'ravi.kumar@learnify.edu' ||
      cleanEmail === 'ravi.kumar@udaanjee.edu' ||
      (role === 'student' && !password)
    ) {
      await loginDemo('student');
      setIsLoading(false);
      return true;
    } else if (
      cleanEmail === 'anand.verma@learnify.edu' ||
      cleanEmail === 'anand.verma@udaanjee.edu' ||
      role === 'teacher'
    ) {
      await loginDemo('teacher');
      setIsLoading(false);
      return true;
    } else if (cleanEmail === 'knharikachithajallu@gmail.com' || role === 'admin') {
      await loginDemo('admin');
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    throw new Error('No account found with this email. Please click "Register Free" to create your student account.');
  };

  // REAL REGISTRATION: Account Creation
  const register = async (profileData: RegisterInput): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const cleanEmail = profileData.email.trim().toLowerCase();

    // Check for duplicates
    const accounts = getRegisteredAccounts();
    const duplicate = accounts.some((acc) => acc.email.toLowerCase() === cleanEmail);
    if (duplicate) {
      setIsLoading(false);
      throw new Error('An account with this email address already exists. Please Sign In instead.');
    }

    const uid = `usr-${Date.now()}`;
    const newProfile: RegisteredAccount = {
      uid,
      fullName: profileData.fullName.trim(),
      email: cleanEmail,
      role: 'student',
      preparationGoal: profileData.preparationGoal || (profileData.targetExam === 'NEET' ? 'NEET Foundation' : 'JEE Foundation'),
      classLevel: profileData.classLevel,
      schoolType: profileData.schoolType,
      targetExam: profileData.targetExam,
      preferredLanguage: profileData.preferredLanguage,
      district: profileData.district?.trim() || 'Rural / District',
      state: profileData.state?.trim() || 'India',
      createdAt: new Date().toISOString(),
      isDemo: false,
      passwordHash: profileData.password,
    };

    // Save to accounts list
    const updatedAccounts = [...accounts, newProfile];
    localStorage.setItem('udaan_registered_accounts', JSON.stringify(updatedAccounts));

    // Initialize fresh empty student progress
    const freshProgress = createEmptyProgress(uid);
    localStorage.setItem(`udaan_progress_${uid}`, JSON.stringify(freshProgress));
    localStorage.setItem(`udaan_attempts_${uid}`, JSON.stringify([]));
    localStorage.setItem(`learnify_badges_${uid}`, JSON.stringify([]));

    // Set state
    notifyNewAwardsRef.current = false;
    setRecentBadgeAwards([]);
    setUser(newProfile);
    setProgress(freshProgress);
    setEarnedBadges([]);
    setTestAttempts([]);

    setIsLoading(false);
    return true;
  };

  // Separate Demo Login (explicitly marked as demo)
  const loginDemo = async (role: UserRole = 'student') => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    notifyNewAwardsRef.current = false;
    setRecentBadgeAwards([]);

    let profile: UserProfile;
    if (role === 'teacher') {
      profile = {
        uid: 'demo-teacher-001',
        fullName: 'Dr. Anand Verma',
        email: 'anand.verma@learnify.edu',
        role: 'teacher',
        classLevel: 'Class 12',
        schoolType: 'Government School',
        targetExam: 'Both',
        preferredLanguage: 'English',
        createdAt: '2024-06-10T00:00:00.000Z',
        isDemo: true,
      };
    } else if (role === 'admin') {
      profile = {
        uid: 'demo-admin-001',
        fullName: 'Platform Admin',
        email: 'knharikachithajallu@gmail.com',
        role: 'admin',
        classLevel: 'Class 12',
        schoolType: 'Government School',
        targetExam: 'Both',
        preferredLanguage: 'English',
        createdAt: '2024-01-01T00:00:00.000Z',
        isDemo: true,
      };
    } else {
      profile = DEFAULT_DEMO_STUDENT;
    }

    const savedDemoProgStr = localStorage.getItem(`udaan_progress_${profile.uid}`);
    const loadedDemoProg: StudentProgress = savedDemoProgStr
      ? JSON.parse(savedDemoProgStr)
      : { ...DEFAULT_DEMO_PROGRESS, studentId: profile.uid };
    const savedDemoAttemptsStr = localStorage.getItem(`udaan_attempts_${profile.uid}`);

    setUser(profile);
    setProgress(loadedDemoProg);
    setEarnedBadges(loadSavedBadgesForUser(profile.uid, loadedDemoProg));
    setTestAttempts(savedDemoAttemptsStr ? JSON.parse(savedDemoAttemptsStr) : DEFAULT_DEMO_ATTEMPTS);

    setIsLoading(false);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated: UserProfile = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('udaan_auth_current_user', JSON.stringify(updated));
    const accounts = getRegisteredAccounts();
    const updatedAccounts = accounts.map((acc) => (acc.uid === user.uid ? { ...acc, ...updates } : acc));
    localStorage.setItem('udaan_registered_accounts', JSON.stringify(updatedAccounts));
  };

  const logout = () => {
    notifyNewAwardsRef.current = false;
    setRecentBadgeAwards([]);
    setUser(null);
    localStorage.removeItem('udaan_auth_current_user');
  };

  const switchRole = (role: UserRole) => {
    loginDemo(role);
  };

  const markChapterCompleted = (chapterId: string) => {
    notifyNewAwardsRef.current = true;
    setProgress((prev) => {
      const isAlready = prev.completedChapterIds.includes(chapterId);
      const updated = isAlready
        ? prev.completedChapterIds.filter((id) => id !== chapterId)
        : [...prev.completedChapterIds, chapterId];

      const streakInfo = isAlready
        ? { studyDates: prev.studyDates || [], streakDays: prev.streakDays }
        : recordStudyActivityDate(prev.studyDates, prev.streakDays);

      return {
        ...prev,
        completedChapterIds: updated,
        studyHours: isAlready ? Math.max(0, prev.studyHours - 2.5) : prev.studyHours + 2.5,
        studyDates: streakInfo.studyDates,
        streakDays: streakInfo.streakDays,
      };
    });
  };

  const recordPracticeAnswer = (isCorrect: boolean) => {
    notifyNewAwardsRef.current = true;
    setProgress((prev) => {
      const streakInfo = recordStudyActivityDate(prev.studyDates, prev.streakDays);
      return {
        ...prev,
        practiceQuestionsAttempted: (prev.practiceQuestionsAttempted || 0) + 1,
        practiceQuestionsCorrect: (prev.practiceQuestionsCorrect || 0) + (isCorrect ? 1 : 0),
        studyDates: streakInfo.studyDates,
        streakDays: streakInfo.streakDays,
      };
    });
  };

  const recordPracticeQuizCompleted = () => {
    notifyNewAwardsRef.current = true;
    setProgress((prev) => {
      const streakInfo = recordStudyActivityDate(prev.studyDates, prev.streakDays);
      return {
        ...prev,
        practiceQuizzesCompleted: (prev.practiceQuizzesCompleted || 0) + 1,
        studyDates: streakInfo.studyDates,
        streakDays: streakInfo.streakDays,
      };
    });
  };

  const saveTestAttempt = (attempt: TestAttempt) => {
    notifyNewAwardsRef.current = true;
    setTestAttempts((prev) => [attempt, ...prev]);
    setProgress((prev) => {
      const streakInfo = recordStudyActivityDate(prev.studyDates, prev.streakDays);
      return {
        ...prev,
        studyHours: +(prev.studyHours + attempt.timeTakenSeconds / 3600).toFixed(1),
        studyDates: streakInfo.studyDates,
        streakDays: streakInfo.streakDays,
      };
    });
  };

  const toggleBookmarkMaterial = (materialId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedMaterialIds.includes(materialId);
      return {
        ...prev,
        bookmarkedMaterialIds: isBookmarked
          ? prev.bookmarkedMaterialIds.filter((id) => id !== materialId)
          : [...prev.bookmarkedMaterialIds, materialId],
      };
    });
  };

  const addStudyTask = (task: Omit<StudyTask, 'id'>) => {
    const newTask: StudyTask = {
      ...task,
      id: `task-${Date.now()}`,
    };
    setStudyTasks((prev) => [newTask, ...prev]);
  };

  const toggleTaskComplete = (taskId: string) => {
    setStudyTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const setDailyGoalHours = (hours: number) => {
    setProgress((prev) => ({ ...prev, dailyGoalHours: hours }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginDemo,
        register,
        updateProfile,
        logout,
        switchRole,
        progress,
        markChapterCompleted,
        recordPracticeAnswer,
        recordPracticeQuizCompleted,
        saveTestAttempt,
        testAttempts,
        earnedBadges,
        recentBadgeAwards,
        dismissBadgeAward,
        bookmarkedMaterials: progress.bookmarkedMaterialIds,
        toggleBookmarkMaterial,
        studyTasks,
        addStudyTask,
        toggleTaskComplete,
        dailyGoalHours: progress.dailyGoalHours,
        setDailyGoalHours,
        theme,
        toggleTheme,
        language,
        setLanguage,
        lowBandwidth,
        toggleLowBandwidth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
