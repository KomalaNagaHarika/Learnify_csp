import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { AchievementBadgeId } from '../../types';
import { BADGE_MAP, formatBadgeEarnedDate, TOTAL_BADGES } from '../../utils/badgeEngine';

export const BadgeIllustration: React.FC<{
  id: AchievementBadgeId;
  sizeClassName?: string;
}> = ({ id, sizeClassName = 'w-14 h-14' }) => {
  const cls = `${sizeClassName} shrink-0`;
  switch (id) {
    case 'first-step':
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cls}
        >
          <rect width="56" height="56" rx="14" fill="#EFF6FF" />
          <circle cx="28" cy="28" r="21" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
          <path d="M21 39V17" stroke="#1E3A8A" strokeWidth="2.6" strokeLinecap="round" />
          <path
            d="M21 18H36.5L33 23.5L36.5 29H21V18Z"
            fill="#2563EB"
            stroke="#1E3A8A"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="27.5" cy="23.5" r="2.2" fill="#FDE047" />
          <path d="M16 39H36" stroke="#1E3A8A" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M35 14L36 16.5L38.5 17.5L36 18.5L35 21L34 18.5L31.5 17.5L34 16.5L35 14Z"
            fill="#F59E0B"
          />
        </svg>
      );

    case 'quiz-star':
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cls}
        >
          <rect width="56" height="56" rx="14" fill="#FEFCE8" />
          <circle cx="28" cy="28" r="21" fill="#FEF08A" stroke="#FACC15" strokeWidth="1.5" />
          <path
            d="M28 13L32.1 21.3L41.3 22.6L34.6 29.1L36.2 38.3L28 33.9L19.8 38.3L21.4 29.1L14.7 22.6L23.9 21.3L28 13Z"
            fill="#F59E0B"
            stroke="#B45309"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M24.2 27.6L26.8 30.2L32.2 24.8"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'top-scorer':
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cls}
        >
          <rect width="56" height="56" rx="14" fill="#FFFBEB" />
          <circle cx="28" cy="28" r="21" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
          <path
            d="M20 19H15.5C15.5 24 17.5 26.8 21 27"
            stroke="#D97706"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M36 19H40.5C40.5 24 38.5 26.8 35 27"
            stroke="#D97706"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M20 16H36V24.5C36 29 32.5 32.5 28 32.5C23.5 32.5 20 29 20 24.5V16Z"
            fill="#F59E0B"
            stroke="#B45309"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M28 32.5V37.5" stroke="#B45309" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="21.5" y="37" width="13" height="3.8" rx="1.6" fill="#1E3A8A" />
          <path d="M23.5 19.5V24" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'consistent':
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cls}
        >
          <rect width="56" height="56" rx="14" fill="#FFF7ED" />
          <circle cx="28" cy="28" r="21" fill="#FFEDD5" stroke="#FDBA74" strokeWidth="1.5" />
          <path
            d="M28.4 13.5C33.8 18.8 37 23.3 37 29.2C37 34.8 32.9 39.2 28 39.2C23.1 39.2 19 34.8 19 29.2C19 25.4 20.8 22.3 23.2 19.8C23.1 22.2 24.1 23.8 25.4 24.4C24.8 20.5 26 16.5 28.4 13.5Z"
            fill="#F97316"
            stroke="#C2410C"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M28 26.5C30.4 29 31.6 31.2 31.6 33.4C31.6 35.8 30 37.5 28 37.5C26 37.5 24.4 35.8 24.4 33.4C24.4 31.2 25.8 29 28 26.5Z"
            fill="#FDE047"
          />
        </svg>
      );

    case 'learnify-star':
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cls}
        >
          <rect width="56" height="56" rx="14" fill="#EFF6FF" />
          <path
            d="M28 8L43 14.5V26.5C43 36.2 36.6 43.2 28 46.5C19.4 43.2 13 36.2 13 26.5V14.5L28 8Z"
            fill="#1E3A8A"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M28 16.5L30.9 22.4L37.4 23.3L32.7 27.9L33.8 34.4L28 31.3L22.2 34.4L23.3 27.9L18.6 23.3L25.1 22.4L28 16.5Z"
            fill="#FACC15"
            stroke="#FEF08A"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

interface AchievementBadgesProps {
  title?: string;
  subtitle?: string;
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
  title = 'Achievements Earned',
  subtitle = 'Badges are awarded automatically as you complete chapters, practice quizzes, and mock tests.',
}) => {
  const { earnedBadges } = useAuth();

  const resolvedEarned = earnedBadges
    .map((item) => {
      const def = BADGE_MAP[item.id];
      if (!def) return null;
      return {
        ...def,
        earnedAt: item.earnedAt,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const count = resolvedEarned.length;
  const countLabel = `${count} of ${TOTAL_BADGES} Achievements Earned`;

  return (
    <section className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 px-1">
        <div>
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <span className="text-xs font-semibold text-blue-900 tabular-nums shrink-0">
          {countLabel}
        </span>
      </div>

      {count === 0 ? (
        <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          No achievements earned yet. Complete your first chapter, finish a practice quiz, or take a mock test to earn your first Learnify badge automatically.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {resolvedEarned.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 hover:border-blue-300 shadow-2xs transition-colors"
            >
              {/* Left: Existing compact 56px colorful badge icon */}
              <div className="shrink-0 flex items-center justify-center">
                <BadgeIllustration id={badge.id} />
              </div>

              {/* Right: Badge name, short description, and earned date */}
              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-slate-900 truncate">
                  {badge.name}
                </h3>
                <p className="text-xs text-slate-600 leading-snug mt-0.5">
                  {badge.description}
                </p>
                <span className="text-[11px] font-medium text-blue-800/80 mt-1">
                  {formatBadgeEarnedDate(badge.earnedAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
