import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  BookOpen,
  Award,
  ChevronRight,
  Brain,
} from 'lucide-react';

interface BridgeCourseModuleProps {
  setActiveTab: (tab: string) => void;
}

export const BridgeCourseModule: React.FC<BridgeCourseModuleProps> = ({ setActiveTab }) => {
  const { progress, markChapterCompleted } = useAuth();

  // Interactive Sandbox 1: Projectile Angle vs Range Visualizer
  const [velocity, setVelocity] = useState(25); // m/s
  const [angle, setAngle] = useState(45); // degrees
  const g = 9.8;
  const rad = (angle * Math.PI) / 180;
  const timeOfFlight = ((2 * velocity * Math.sin(rad)) / g).toFixed(2);
  const maxHeight = ((Math.pow(velocity * Math.sin(rad), 2)) / (2 * g)).toFixed(2);
  const maxRange = ((Math.pow(velocity, 2) * Math.sin(2 * rad)) / g).toFixed(2);

  // Interactive Sandbox 2: Quadratic Roots & Discriminant Explorer
  const [quadB, setQuadB] = useState(-6);
  const [quadC, setQuadC] = useState(8);
  const disc = Math.pow(quadB, 2) - 4 * 1 * quadC;
  const root1 = disc >= 0 ? (((-quadB + Math.sqrt(disc)) / 2).toFixed(2)) : 'Complex';
  const root2 = disc >= 0 ? (((-quadB - Math.sqrt(disc)) / 2).toFixed(2)) : 'Complex';

  const bridgeSteps = [
    {
      num: '01',
      title: 'Elementary Pre-Algebra & Polynomial Identities',
      desc: 'Master symmetric polynomials (a+b+c=0 ==> a^3+b^3+c^3=3abc), synthetic division, and surds before dealing with complex roots.',
      chapterId: 'bridge-math-01',
    },
    {
      num: '02',
      title: 'Vector Resolution & Free Body Diagrams',
      desc: 'Learn how to split force vectors along inclined axes, identify action-reaction pairs, and draw error-free Newton force balances.',
      chapterId: 'bridge-phys-01',
    },
    {
      num: '03',
      title: 'High School Chemistry & Molecular Valency',
      desc: 'Understand electronic configurations, orbital filling orders, balancing redox equations, and stoichiometry fundamentals.',
      chapterId: 'chem-mole-concept',
    },
    {
      num: '04',
      title: 'Intuitive Calculus: Limits as Approximations',
      desc: 'Demystify derivatives as instantaneous velocity and definite integration as accumulating tiny strips under a curve.',
      chapterId: 'math-calculus-diff',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-indigo-800 p-8 text-white shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
          <Compass className="w-4 h-4 text-amber-200" />
          <span>Special Public Welfare Feature</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight">
          The Bridge Foundation Course
        </h1>

        <p className="text-sm sm:text-base text-amber-100 max-w-3xl leading-relaxed">
          Many talented students in government schools have immense potential, but lacked structured coaching in high-school algebra or vector physics. This Bridge Course eliminates the fear of advanced problems by building core intuitions step-by-step.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab('courses')}
            className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-md hover:bg-amber-50 transition-colors cursor-pointer"
          >
            Start Stage 1 Lessons
          </button>
        </div>
      </div>

      {/* Pathway Steps */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Step-by-Step Transition</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            From Zero to JEE Ready: The 4 Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bridgeSteps.map((step) => {
            const isDone = progress.completedChapterIds.includes(step.chapterId);
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-amber-500 font-mono">{step.num}</span>
                    {isDone && (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-4 h-4" /> Done
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                <button
                  onClick={() => setActiveTab('courses')}
                  className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Lesson</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Conceptual Sandboxes (Two-Zone Layout per EdTech Guidelines) */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Interactive Concept Explorers</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Hands-on Physical & Mathematical Intuition
          </h2>
          <p className="text-xs text-slate-500">
            Manipulate parameters live to understand why formulas work before calculating them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sandbox 1: Projectile Trajectory Calculator */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Physics: Projectile Motion Sandbox
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">g = 9.8 m/s²</span>
            </div>

            {/* Sliders */}
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">Launch Velocity (u):</span>
                  <span className="text-blue-600 dark:text-blue-400 tabular-nums">{velocity} m/s</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">Launch Angle (θ):</span>
                  <span className="text-blue-600 dark:text-blue-400 tabular-nums">{angle}°</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="85"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Time of Flight (T)</div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white tabular-nums mt-0.5">{timeOfFlight} s</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Max Height (H)</div>
                <div className="text-base font-extrabold text-blue-600 dark:text-blue-400 tabular-nums mt-0.5">{maxHeight} m</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Max Range (R)</div>
                <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums mt-0.5">{maxRange} m</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 text-xs leading-relaxed">
              <strong>Core JEE Takeaway:</strong> Notice that Maximum Horizontal Range always peaks at exactly <strong>θ = 45°</strong> because $\sin(2\theta) = \sin(90^\circ) = 1$. Complementary launch angles ($30^\circ$ and $60^\circ$) give identical ranges!
            </div>
          </div>

          {/* Sandbox 2: Quadratic Roots & Graph Explorer */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-purple-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Math: Quadratic Discriminant (b² - 4ac)
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400">y = x² + bx + c</span>
            </div>

            {/* Sliders */}
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">Coefficient b:</span>
                  <span className="text-purple-600 dark:text-purple-400 tabular-nums">{quadB}</span>
                </div>
                <input
                  type="range"
                  min="-12"
                  max="12"
                  value={quadB}
                  onChange={(e) => setQuadB(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">Constant c:</span>
                  <span className="text-purple-600 dark:text-purple-400 tabular-nums">{quadC}</span>
                </div>
                <input
                  type="range"
                  min="-15"
                  max="20"
                  value={quadC}
                  onChange={(e) => setQuadC(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Discriminant (D)</div>
                <div className={`text-base font-extrabold tabular-nums mt-0.5 ${disc > 0 ? 'text-emerald-600' : disc === 0 ? 'text-amber-500' : 'text-red-500'}`}>
                  {disc}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Root α</div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white tabular-nums mt-0.5">{root1}</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Root β</div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white tabular-nums mt-0.5">{root2}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 text-xs leading-relaxed">
              <strong>Core JEE Takeaway:</strong> When $D &gt; 0$, parabola cuts x-axis at 2 distinct real points. When $D = 0$, parabola touches x-axis at 1 point. When $D &lt; 0$, parabola floats strictly above the x-axis ($f(x) &gt; 0$ for all real $x$).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
