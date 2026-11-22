import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BADGE_MAP } from '../../utils/badgeEngine';
import { BadgeIllustration } from './AchievementBadges';

export const BadgeAwardToast: React.FC = () => {
  const { recentBadgeAwards, dismissBadgeAward } = useAuth();

  // Auto-dismiss notifications cleanly after 6.5 seconds
  useEffect(() => {
    if (recentBadgeAwards.length === 0) return;
    const timer = window.setTimeout(() => {
      dismissBadgeAward(recentBadgeAwards[0].id);
    }, 6500);
    return () => window.clearTimeout(timer);
  }, [recentBadgeAwards, dismissBadgeAward]);

  if (recentBadgeAwards.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
    >
      {recentBadgeAwards.map((award) => {
        const badge = BADGE_MAP[award.id];
        if (!badge) return null;

        return (
          <div
            key={award.id}
            role="status"
            className="pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl bg-white border border-blue-200 shadow-lg"
          >
            <BadgeIllustration id={award.id} sizeClassName="w-12 h-12" />
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold text-blue-800">
                Congratulations! Achievement Earned
              </div>
              <div className="text-sm font-bold text-slate-900 truncate">
                {badge.name}
              </div>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">
                {badge.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => dismissBadgeAward(award.id)}
              aria-label={`Dismiss ${badge.name} notification`}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 self-start"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
