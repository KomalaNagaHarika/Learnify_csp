import { Chapter } from '../types';

export const ALL_CURRICULUM_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (23 OFFICIAL LEARNING AREAS)
  // ==========================================
  {
    id: 'phys-01',
    subject: 'Physics',
    category: 'General Physics',
    order: 1,
    title: 'Units and Measurements',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'SI units, dimensional analysis, principle of homogeneity, significant figures, Vernier calipers and screw gauge error propagation.',
    introduction: 'Measurement forms the foundation of all experimental sciences. In JEE, dimensional analysis often provides immediate shortcut checks for elimination of incorrect options.',
    summaryNotes: `### Core Concepts & Formulas:
1. **Fundamental SI Quantities:** Length ($m$), Mass ($kg$), Time ($s$), Electric Current ($A$), Thermodynamic Temperature ($K$), Amount of Substance ($mol$), Luminous Intensity ($cd$).
2. **Principle of Homogeneity:** In any valid physical equation, every term must have identical dimensions. If $x = At + Bt^2$, $[At] = [Bt^2] = [x]$.
3. **Error Analysis:**
   - Absolute Error: $\\Delta a_i = |a_{mean} - a_i|$
   - Relative Error: $\\frac{\\Delta a_{mean}}{a_{mean}}$
   - Percentage Error: $\\frac{\\Delta a_{mean}}{a_{mean}} \\times 100\\%$
   - If $Z = \\frac{A^p B^q}{C^r}$, then maximum fractional error is: $\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}$.`,
    definitions: [
      'Dimension: The powers to which the base quantities are raised to represent that quantity.',
      'Least Count: The smallest value that can be measured directly by an instrument.'
    ],
    formulas: [
      { name: 'Maximum Relative Error', formula: '\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}', explanation: 'Used to calculate total fractional uncertainty in products and quotients.', units: 'Dimensionless' },
      { name: 'Vernier Caliper Least Count', formula: 'LC = 1\\text{ MSD} - 1\\text{ VSD}', explanation: 'Difference between one Main Scale Division and one Vernier Scale Division.', units: 'mm or cm' }
    ],
    solvedExamples: [
      {
        question: 'The percentage errors in mass, length, and time are 1%, 2%, and 3% respectively. Find percentage error in force.',
        solution: 'Force F = m * a = m * (L / T^2) = m * L * T^(-2). Max percentage error = %m + %L + 2*(%T) = 1% + 2% + 2*(3%) = 9%.',
        keyInsight: 'Powers always multiply the fractional error and errors always add up in worst-case analysis.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate dimensions of universal gravitational constant G.', 'Find significant figures in 0.002040.'],
      intermediate: ['In an experiment, density of a sphere is measured with 2% mass error and 1.5% radius error. Find density error.'],
      advanced: ['Derive relation for speed of sound in gas using dimensional analysis with pressure P and density rho.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-02',
    subject: 'Physics',
    category: 'Mechanics',
    order: 2,
    title: 'Kinematics',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Rectilinear motion, calculus in 1D, projectile motion in 2D, trajectory equations, relative velocity in river-boat & rain problems.',
    introduction: 'Kinematics describes motion without considering its causes. Projectile trajectory and relative velocity frames are constant fixtures in JEE Main & Advanced.',
    summaryNotes: `### Core Concepts:
- Velocity $v = dx/dt$, Acceleration $a = dv/dt = v(dv/dx)$.
- Constant acceleration: $v = u + at$, $s = ut + 0.5at^2$, $v^2 = u^2 + 2as$.
- Projectile Motion:
  * Time of flight: $T = \\frac{2u\\sin\\theta}{g}$
  * Maximum height: $H = \\frac{u^2\\sin^2\\theta}{2g}$
  * Horizontal Range: $R = \\frac{u^2\\sin 2\\theta}{g}$
  * Equation of Trajectory: $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta} = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)$.`,
    definitions: [
      'Displacement: The shortest vector distance between initial and final positions.',
      'Instantaneous Acceleration: The rate of change of velocity at an infinitesimally small time interval.'
    ],
    formulas: [
      { name: 'Trajectory Equation', formula: 'y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)', explanation: 'Relates position (x, y) with launch angle theta and range R.', units: 'Meters (m)' },
      { name: 'Relative Velocity Vector', formula: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B', explanation: 'Velocity of body A as observed from moving frame B.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'A projectile launched at speed u has range R. If maximum height is H, prove R^2 = 16 H (H_max - H).',
        solution: 'From H = u^2 sin^2(theta)/(2g) and R = 4 H cot(theta), substituting cot(theta) gives exact geometric relation.',
        keyInsight: 'Remember R = 4H cot(theta) as a rapid JEE Main shortcut formula.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Find time of flight for a projectile launched at 30 deg with 20 m/s.'],
      intermediate: ['A swimmer crosses a river of width 500 m flowing at 3 km/h. Find shortest path heading.'],
      advanced: ['A particle moves along x-axis with acceleration a = -k*v^2. Find velocity after distance s if initial speed is u.']
    },
    quizQuestionIds: ['q-phys-01', 'q-phys-02']
  },
  {
    id: 'phys-03',
    subject: 'Physics',
    category: 'Mechanics',
    order: 3,
    title: 'Laws of Motion',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Newtonian mechanics, Free Body Diagrams, constraint relations, pseudo forces in non-inertial reference frames, static and kinetic friction.',
    introduction: 'Forces cause changes in motion. Free Body Diagrams (FBDs) are the single most crucial problem-solving weapon in all of JEE physics.',
    summaryNotes: `### Core Concepts:
- **Newton\'s 1st Law:** If $\\Sigma \\vec{F} = 0$, velocity is constant.
- **Newton\'s 2nd Law:** $\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$ (for constant mass).
- **Newton\'s 3rd Law:** $\\vec{F}_{AB} = -\\vec{F}_{BA}$ acting on two different bodies.
- **Friction:** Static friction is self-adjusting ($0 \\le f_s \\le \\mu_s N$). Kinetic friction $f_k = \\mu_k N$.
- **Pseudo Force:** In frame with acceleration $\\vec{a}_0$, apply $\\vec{F}_{pseudo} = -m\\vec{a}_0$.`,
    formulas: [
      { name: 'Limiting Static Friction', formula: 'f_{lim} = \\mu_s N', explanation: 'Maximum threshold before relative slip begins.', units: 'Newtons (N)' },
      { name: 'Banking of Roads (with friction)', formula: 'v_{max} = \\sqrt{R g \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}}', explanation: 'Maximum safe turning speed on banked curved road.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'A 5 kg block rests on a rough horizontal floor (mu_s = 0.4). What friction acts when a force of 15 N is applied?',
        solution: 'Limiting friction = mu_s * N = 0.4 * 50 = 20 N. Since 15 N < 20 N, block remains static and friction self-adjusts to exactly 15 N.',
        keyInsight: 'Static friction matches applied force until limiting threshold is reached.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Draw FBD of two blocks connected by a light string over a frictionless pulley.'],
      intermediate: ['Calculate acceleration of wedge and block on inclined plane with angle 37 deg.'],
      advanced: ['Find minimum horizontal acceleration of wedge so that block of mass m does not slide down.']
    },
    quizQuestionIds: ['q-phys-03', 'q-phys-04']
  },
  {
    id: 'phys-04',
    subject: 'Physics',
    category: 'Mechanics',
    order: 4,
    title: 'Work, Energy and Power',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Work done by constant & variable forces, work-energy theorem, conservative vs non-conservative forces, potential energy curves, elastic & inelastic collisions.',
    introduction: 'Energy conservation converts complex multi-body accelerations into straightforward scalar energy balances.',
    summaryNotes: `### Core Principles:
- Work $W = \\int \\vec{F} \\cdot d\\vec{r}$.
- Work-Energy Theorem: $W_{net} = \\Delta K = K_f - K_i$.
- Conservative Force: Work is path-independent; $\\vec{F} = -\\nabla U = -\\left(\\frac{\\partial U}{\\partial x}\\hat{i} + \\frac{\\partial U}{\\partial y}\\hat{j} + \\frac{\\partial U}{\\partial z}\\hat{k}\\right)$.
- Collisions: Coefficient of restitution $e = \\frac{v_2 - v_1}{u_1 - u_2}$. $e=1$ (elastic), $e=0$ (perfectly inelastic).`,
    formulas: [
      { name: 'Work-Energy Theorem', formula: 'W_{all forces} = \\Delta K', explanation: 'Relates total work done by all forces (conservative, non-conservative, external) to change in kinetic energy.', units: 'Joules (J)' },
      { name: 'Power in terms of Velocity', formula: 'P = \\vec{F} \\cdot \\vec{v}', explanation: 'Instantaneous rate of work done on moving particle.', units: 'Watts (W)' }
    ],
    solvedExamples: [
      {
        question: 'A spring of constant k is compressed by x. Find velocity of attached mass m when spring reaches equilibrium.',
        solution: 'By conservation of mechanical energy: 1/2 k x^2 = 1/2 m v^2 ==> v = x * sqrt(k/m).',
        keyInsight: 'Energy conservation applies directly because normal force and gravity do no net work along horizontal spring motion.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate work done by force F = (3i + 4j) N over displacement d = (2i - 1j) m.'],
      intermediate: ['A ball of mass m falls from height h onto floor (e = 0.8). Find total distance traveled before coming to rest.'],
      advanced: ['Given potential energy U(x) = a/x^2 - b/x, find equilibrium position and check if it is stable.']
    },
    quizQuestionIds: ['q-phys-03']
  },
  {
    id: 'phys-05',
    subject: 'Physics',
    category: 'Mechanics',
    order: 5,
    title: 'Rotational Motion',
    stage: 'advanced',
    classLevel: 'Class 11',
    totalConcepts: 14,
    durationHours: 8.5,
    description: 'Center of mass, torque, angular momentum conservation, moment of inertia theorems, pure rolling without slipping, and precession.',
    introduction: 'Rotational dynamics combines translational center of mass motion with rigid body spin around the center of mass.',
    summaryNotes: `### Core Formulations:
- Center of Mass: $\\vec{r}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$.
- Parallel Axis Theorem: $I = I_{cm} + M d^2$.
- Perpendicular Axis Theorem (Planar Lamina): $I_z = I_x + I_y$.
- Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\vec{\\alpha}$.
- Pure Rolling: $v_{cm} = \\omega R$, $a_{cm} = \\alpha R$. Friction does no mechanical work because contact point is instantaneously stationary.`,
    formulas: [
      { name: 'Pure Rolling Incline Acceleration', formula: 'a_{cm} = \\frac{g\\sin\\theta}{1 + \\frac{I_{cm}}{MR^2}}', explanation: 'Center of mass acceleration of rolling body down incline of angle theta.', units: 'm/s^2' },
      { name: 'Angular Momentum', formula: '\\vec{L} = \\vec{r}_{cm} \\times M\\vec{v}_{cm} + I_{cm}\\vec{\\omega}', explanation: 'Total angular momentum about arbitrary origin.', units: 'kg m^2 / s' }
    ],
    solvedExamples: [
      {
        question: 'Which reaches the bottom of an incline first: a solid sphere, a disc, or a hoop?',
        solution: 'Acceleration a = (g sin theta) / (1 + beta), where beta = I_cm / (MR^2). For sphere beta = 2/5 (0.4), for disc beta = 1/2 (0.5), for hoop beta = 1.0. Smallest beta has highest acceleration. Order: Solid Sphere > Disc > Hoop.',
        keyInsight: 'Lower moment of inertia fraction means less energy diverted into rotation and more into linear speed.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Find moment of inertia of thin rod of mass M and length L about one end.'],
      intermediate: ['A solid cylinder rolls without slipping down 30 deg incline. Calculate friction coefficient required.'],
      advanced: ['A bullet of mass m strikes a pivoted rod of mass M at its center and gets embedded. Find initial angular velocity.']
    },
    quizQuestionIds: ['q-phys-05']
  },
  {
    id: 'phys-06',
    subject: 'Physics',
    category: 'Mechanics',
    order: 6,
    title: 'Gravitation',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Kepler laws of planetary motion, universal law of gravitation, variation of g with height and depth, gravitational potential & orbital escape velocity.',
    introduction: 'Gravitational forces govern orbits, satellite trajectories, and planetary tides.',
    summaryNotes: `### Core Equations:
- Kepler\'s 3rd Law: $T^2 \\propto r^3$.
- Gravitational Field: $E = -\\frac{GM}{r^2}\\hat{r}$.
- Variation of $g$:
  * Height $h$: $g\' = g\\left(1 - \\frac{2h}{R}\\right)$ (for $h \\ll R$).
  * Depth $d$: $g\' = g\\left(1 - \\frac{d}{R}\\right)$.
- Escape Velocity: $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ on Earth.`,
    formulas: [
      { name: 'Escape Velocity', formula: 'v_e = \\sqrt{\\frac{2GM}{R}}', explanation: 'Minimum speed required to escape planet gravitational potential well.', units: 'm/s' },
      { name: 'Orbital Velocity', formula: 'v_o = \\sqrt{\\frac{GM}{r}}', explanation: 'Speed of satellite in circular orbit of radius r.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'At what height above Earth surface does gravitational acceleration drop to g/4? (Radius = R).',
        solution: 'g\' = g * (R / (R+h))^2. g/4 = g * (R / (R+h))^2 ==> 1/2 = R / (R+h) ==> R + h = 2R ==> h = R.',
        keyInsight: 'When h is comparable to R, use the exact formula g*(R/(R+h))^2 rather than the binomial approximation.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate escape velocity from moon surface given M_moon = 7.35x10^22 kg, R_moon = 1737 km.'],
      intermediate: ['Find binding energy of a satellite of mass m orbiting Earth at altitude h = R.'],
      advanced: ['Determine time period of oscillation for a particle dropped in a hypothetical tunnel drilled through Earth center.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-07',
    subject: 'Physics',
    category: 'Properties of Matter',
    order: 7,
    title: 'Properties of Solids and Liquids',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 6.5,
    description: 'Hooke law, Young modulus, fluid statics, Pascal principle, Bernoulli theorem, viscosity, Poiseuille flow, and surface tension capillarity.',
    introduction: 'Covers deformation of solids under stress and dynamic transport of incompressible fluids.',
    summaryNotes: `### Core Laws:
- Stress $\\sigma = F/A$, Strain $\\epsilon = \\Delta L/L$, Young Modulus $Y = \\sigma / \\epsilon$.
- Hydrostatic Pressure: $P = P_0 + \\rho g h$.
- Equation of Continuity: $A_1 v_1 = A_2 v_2$.
- Bernoulli\'s Principle: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$.
- Surface Tension Excess Pressure:
  * Liquid drop: $\\Delta P = \\frac{2T}{R}$
  * Soap bubble (2 surfaces): $\\Delta P = \\frac{4T}{R}$
- Capillary Rise: $h = \\frac{2T\\cos\\theta}{\\rho g r}$.`,
    formulas: [
      { name: 'Bernoulli Equation', formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}', explanation: 'Energy conservation for steady, streamline, non-viscous fluid flow.', units: 'Pascals (Pa)' },
      { name: 'Terminal Velocity (Stokes Law)', formula: 'v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}', explanation: 'Terminal velocity of sphere of radius r falling through fluid of viscosity eta.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'Water flows through horizontal pipe with cross section narrowing from 10 cm^2 to 5 cm^2. If inlet velocity is 2 m/s, find exit velocity.',
        solution: 'By continuity equation: A1 * v1 = A2 * v2 ==> 10 * 2 = 5 * v2 ==> v2 = 4 m/s.',
        keyInsight: 'Speed increases where pipe constricts, causing pressure to drop by Bernoulli principle.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate excess pressure inside a water droplet of radius 0.1 mm (T = 0.072 N/m).'],
      intermediate: ['Water emerges from a hole at depth h in a large tank. Find horizontal range on floor.'],
      advanced: ['Two soap bubbles of radii r1 and r2 coalesce under isothermal conditions in vacuum. Find resulting radius.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-08',
    subject: 'Physics',
    category: 'Thermal Physics',
    order: 8,
    title: 'Thermodynamics',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Zeroth, first and second laws of thermodynamics, PV diagrams, isothermal & adiabatic processes, heat engines, Carnot efficiency and entropy.',
    introduction: 'Thermodynamics governs heat, work conversion, and the directional flow of thermal energy.',
    summaryNotes: `### Core Laws:
- 1st Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W$.
  * Work done by gas: $\\Delta W = \\int P\\,dV$.
  * Internal Energy: $\\Delta U = n C_v \\Delta T$ (for ideal gas in all processes).
- Special Thermodynamic Processes:
  * Isothermal ($T = \\text{const}$): $\\Delta U = 0$, $W = nRT\\ln(V_f / V_i)$.
  * Adiabatic ($Q = 0$): $P V^\\gamma = \\text{const}$, $W = \\frac{P_i V_i - P_f V_f}{\\gamma - 1}$.
  * Isobaric ($P = \\text{const}$): $W = P(V_f - V_i)$.
  * Isochoric ($V = \\text{const}$): $W = 0$, $Q = \\Delta U$.
- Carnot Engine Efficiency: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_{in}}$.`,
    formulas: [
      { name: 'First Law of Thermodynamics', formula: 'dQ = dU + dW', explanation: 'Conservation of energy for closed thermodynamic systems.', units: 'Joules (J)' },
      { name: 'Carnot Engine Efficiency', formula: '\\eta = 1 - \\frac{T_2}{T_1}', explanation: 'Maximum theoretical thermal efficiency operating between reservoirs T1 (hot) and T2 (cold).', units: 'Dimensionless ratio' }
    ],
    solvedExamples: [
      {
        question: 'An ideal gas expands adiabatically from V to 8V. If gamma = 5/3, by what factor does temperature change?',
        solution: 'For adiabatic expansion: T * V^(gamma - 1) = const. T1 * V^(2/3) = T2 * (8V)^(2/3) ==> T2 = T1 / (8^(2/3)) = T1 / 4. Temperature drops to 1/4th.',
        keyInsight: 'In adiabatic expansion, gas does work at the expense of its own internal energy, cooling down.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate Carnot efficiency between boiling water (100 C) and freezing ice (0 C).'],
      intermediate: ['In cyclic process shown on PV indicator diagram, compute total work done per cycle.'],
      advanced: ['Find molar heat capacity C for process P = alpha * V where alpha is constant for monatomic gas.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-09',
    subject: 'Physics',
    category: 'Thermal Physics',
    order: 9,
    title: 'Kinetic Theory of Gases',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Postulates of kinetic theory, pressure of ideal gas, RMS, average and most probable speeds, degrees of freedom, and equipartition theorem.',
    introduction: 'Microscopic statistical view connecting molecular kinetic energy to macroscopic temperature and pressure.',
    summaryNotes: `### Core Formulations:
- Pressure: $P = \\frac{1}{3}\\rho v_{rms}^2 = \\frac{1}{3}\\frac{M}{V}v_{rms}^2$.
- Molecular Velocities:
  * RMS Speed: $v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m}}$.
  * Average Speed: $v_{avg} = \\sqrt{\\frac{8RT}{\\pi M}}$.
  * Most Probable Speed: $v_{mp} = \\sqrt{\\frac{2RT}{M}}$.
- Law of Equipartition of Energy: Average energy per molecule per degree of freedom = $\\frac{1}{2}k_B T$.
- Specific heats: $C_v = \\frac{f}{2}R$, $C_p = \\left(\\frac{f}{2} + 1\\right)R$, $\\gamma = 1 + \\frac{2}{f}$.
  * Monatomic ($f=3$): $\\gamma = 5/3 \\approx 1.67$.
  * Diatomic ($f=5$): $\\gamma = 7/5 = 1.4$.`,
    formulas: [
      { name: 'Root Mean Square Speed', formula: 'v_{rms} = \\sqrt{\\frac{3RT}{M}}', explanation: 'RMS speed of gas molecules of molar mass M at Kelvin temperature T.', units: 'm/s' },
      { name: 'Mayer Relation', formula: 'C_p - C_v = R', explanation: 'Difference between constant pressure and constant volume molar heat capacities.', units: 'J / (mol K)' }
    ],
    solvedExamples: [
      {
        question: 'At what temperature will the RMS speed of oxygen molecules equal the escape speed from Earth (11.2 km/s)?',
        solution: 'M of O2 = 0.032 kg/mol. 11200 = sqrt(3 * 8.314 * T / 0.032) ==> T = (11200^2 * 0.032) / (3 * 8.314) approx 1.6 x 10^5 K.',
        keyInsight: 'Because thermal speeds at normal atmospheric temperatures (~500 m/s) are far below 11.2 km/s, Earth retains its atmosphere.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Find degrees of freedom and adiabatic index gamma for helium and nitrogen gas.'],
      intermediate: ['Calculate total internal energy of 2 moles of diatomic gas at 300 K.'],
      advanced: ['Derive mean free path lambda in terms of molecular diameter d and number density n.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-10',
    subject: 'Physics',
    category: 'Oscillations and Waves',
    order: 10,
    title: 'Oscillations',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Simple Harmonic Motion (SHM), kinematics and dynamics of SHM, energy exchanges, spring-mass systems, simple and physical pendulums, damped & forced resonance.',
    introduction: 'Harmonic oscillation represents periodic back-and-forth motion governed by linear restoring forces.',
    summaryNotes: `### Core Formulations:
- Differential Equation of SHM: $\\frac{d^2 x}{dt^2} + \\omega^2 x = 0$.
- Displacement: $x(t) = A\\sin(\\omega t + \\phi)$.
- Velocity: $v = \\omega \\sqrt{A^2 - x^2}$, Max velocity $v_{max} = \\omega A$.
- Acceleration: $a = -\\omega^2 x$, Max acceleration $a_{max} = \\omega^2 A$.
- Energy in SHM: Total energy $E = K + U = \\frac{1}{2}m\\omega^2 A^2$ (strictly constant).
- Spring mass: $T = 2\\pi\\sqrt{\\frac{m}{k}}$, Simple pendulum: $T = 2\\pi\\sqrt{\\frac{L}{g}}$.`,
    formulas: [
      { name: 'SHM Time Period (Spring-Mass)', formula: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', explanation: 'Period of oscillation of mass m on spring of stiffness k.', units: 'Seconds (s)' },
      { name: 'Total Energy in SHM', formula: 'E = \\frac{1}{2}m\\omega^2 A^2', explanation: 'Conserved total mechanical energy of harmonic oscillator.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'At what displacement from mean position is kinetic energy equal to potential energy in SHM?',
        solution: 'K = 1/2 m omega^2 (A^2 - x^2), U = 1/2 m omega^2 x^2. Setting K = U ==> A^2 - x^2 = x^2 ==> 2x^2 = A^2 ==> x = A / sqrt(2).',
        keyInsight: 'KE = PE occurs at x = A/sqrt(2) approx 0.707 A, not at A/2.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find period of simple pendulum of length 1 m on Earth (g = 9.8 m/s^2).'],
      intermediate: ['Two springs of constants k1 and k2 are connected in parallel and series to mass m. Compare periods.'],
      advanced: ['A uniform rod of length L is pivoted at distance L/4 from center. Find its period of small angular oscillations.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-11',
    subject: 'Physics',
    category: 'Oscillations and Waves',
    order: 11,
    title: 'Waves',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Transverse and longitudinal waves, speed of sound in gases, principle of superposition, standing waves in strings & organ pipes, beats, and Doppler effect.',
    introduction: 'Wave propagation transfers momentum and energy without physical mass transport.',
    summaryNotes: `### Core Formulations:
- Wave Equation: $y(x, t) = A\\sin(kx - \\omega t + \\phi)$, where $k = \\frac{2\\pi}{\\lambda}$, $\\omega = 2\\pi f$, $v = \\frac{\\omega}{k} = f\\lambda$.
- String Wave Speed: $v = \\sqrt{\\frac{T}{\\mu}}$.
- Sound in Gas (Laplace Formula): $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$.
- Standing Waves:
  * Stretched string (both ends fixed): $f_n = n \\frac{v}{2L}$ ($n=1, 2, 3...$).
  * Open organ pipe: $f_n = n \\frac{v}{2L}$ (all harmonics present).
  * Closed organ pipe: $f_n = (2n - 1)\\frac{v}{4L}$ (only odd harmonics present).
- Beat Frequency: $f_{beat} = |f_1 - f_2|$.
- Doppler Effect: $f\' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$.`,
    formulas: [
      { name: 'Doppler Frequency Shift', formula: 'f\' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)', explanation: 'Observed frequency when source and observer move relative to medium.', units: 'Hertz (Hz)' },
      { name: 'Speed of Transverse String Wave', formula: 'v = \\sqrt{\\frac{T}{\\mu}}', explanation: 'Wave speed under tension T and linear mass density mu.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'A source emitting 500 Hz moves at 34 m/s towards stationary observer in air (sound speed = 340 m/s). What frequency is heard?',
        solution: 'Observer stationary vo = 0, source approaching vs = 34 m/s. f\' = f * (v / (v - vs)) = 500 * (340 / (340 - 34)) = 500 * (340 / 306) = 555.5 Hz.',
        keyInsight: 'Frequency shifts higher when source approaches observer because wavefronts bunch up in forward direction.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate beat frequency produced by tuning forks of 256 Hz and 260 Hz.'],
      intermediate: ['An open organ pipe produces fundamental of 300 Hz. If one end is closed, what is new fundamental?'],
      advanced: ['Derive acoustic intensity in terms of pressure amplitude P_0, medium density rho, and sound speed v.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-12',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 12,
    title: 'Electrostatics',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 14,
    durationHours: 8.0,
    description: 'Coulomb law, electric field & potential, Gauss law and applications, conductors in electrostatic equilibrium, electric dipoles, capacitance & dielectrics.',
    introduction: 'Electrostatics forms the foundation of all electrical forces in nature, governing atomic structure, bonding, and electronic circuitry.',
    summaryNotes: `### Core Formulations:
- Coulomb\'s Law: $\\vec{F} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r^2}\\hat{r}$.
- Electric Field: $\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$.
- Gauss\'s Law: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enclosed}}{\\epsilon_0}$.
- Dipole: Torque $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$, Potential Energy $U = -\\vec{p} \\cdot \\vec{E}$.
- Capacitors: $C = \\frac{Q}{V} = \\frac{\\epsilon_0 A}{d}$. With dielectric slab $K$: $C\' = K C$. Energy stored $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$.`,
    formulas: [
      { name: 'Gauss Law', formula: '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enclosed}}{\\epsilon_0}', explanation: 'Electric flux through any closed Gaussian surface equals enclosed charge divided by permittivity.', units: 'N m^2 / C' },
      { name: 'Parallel Plate Capacitance', formula: 'C = \\frac{\\epsilon_r \\epsilon_0 A}{d}', explanation: 'Capacitance with dielectric constant epsilon_r.', units: 'Farads (F)' }
    ],
    solvedExamples: [
      {
        question: 'Two identical metal spheres carry charges +6 uC and -2 uC. They are brought into contact and separated to original distance. Find ratio of new to initial force.',
        solution: 'Initial product = |(+6)*(-2)| = 12. Upon contact, charges share equally: q = (6 - 2)/2 = +2 uC each. New product = (+2)*(+2) = 4. Ratio of forces = 4 / 12 = 1/3 (nature changes from attractive to repulsive!).',
        keyInsight: 'Identical conducting spheres in contact share charge by average (q1 + q2)/2.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate electric field 30 cm away from a point charge of 5 uC in vacuum.'],
      intermediate: ['A spherical conducting shell has inner radius a and outer radius b with charge Q. Find potential everywhere.'],
      advanced: ['Determine equivalent capacitance between terminals A and B of an infinite ladder capacitor network.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-13',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 13,
    title: 'Current Electricity',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Electric current, drift velocity, Ohm law, temperature dependence of resistance, Kirchhoff laws, Wheatstone bridge, potentiometer, and meter bridge.',
    introduction: 'Analyzes steady direct current flow, internal resistance of cells, and precision DC measurement bridges.',
    summaryNotes: `### Core Formulations:
- Drift velocity: $v_d = \\frac{e E \\tau}{m}$, Current $I = n e A v_d$.
- Resistance: $R = \\rho \\frac{L}{A}$, Temperature dependence: $R(T) = R_0(1 + \\alpha \\Delta T)$.
- Kirchhoff\'s Laws:
  * Junction Rule (KCL): $\\sum I = 0$ (Conservation of Charge).
  * Loop Rule (KVL): $\\sum \\Delta V = 0$ (Conservation of Energy).
- Cells in combinations: Series and parallel EMF & internal resistance.
- Wheatstone Bridge: Balanced when $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$ (no current through galvanometer).`,
    formulas: [
      { name: 'Drift Velocity Current Relation', formula: 'I = n e A v_d', explanation: 'Connects macroscopic current to charge carrier density n and drift speed v_d.', units: 'Amperes (A)' },
      { name: 'Wheatstone Bridge Balance', formula: '\\frac{P}{Q} = \\frac{R}{S}', explanation: 'Condition for zero galvanometer deflection in four-resistor bridge.', units: 'Dimensionless ratio' }
    ],
    solvedExamples: [
      {
        question: 'A wire of resistance R is stretched uniformly to double its original length. What is its new resistance?',
        solution: 'Volume remains constant: V = A * L = A\' * (2L) ==> A\' = A/2. New resistance R\' = rho * (2L) / (A/2) = 4 * (rho L / A) = 4 R.',
        keyInsight: 'When stretched, length increases and cross-section decreases simultaneously, scaling R by factor of n^2.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find equivalent resistance of 3 equal resistors R connected in delta and star.'],
      intermediate: ['In a potentiometer circuit, balance point shifts from 60 cm to 80 cm when cell is shunted with 5 ohm. Find internal resistance.'],
      advanced: ['Solve 12-resistor cube network equivalent resistance between diagonally opposite vertices.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-14',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 14,
    title: 'Magnetic Effects of Current and Magnetism',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Biot-Savart law, Ampere circuital law, magnetic field of straight wire, circular loop, solenoid, toroid, Lorentz force, cyclotron, and magnetic dipoles.',
    introduction: 'Moving charges generate magnetic fields and experience magnetic Lorentz forces perpendicular to their velocity.',
    summaryNotes: `### Core Formulations:
- Biot-Savart Law: $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\hat{r})}{r^2}$.
- Straight wire: $B = \\frac{\\mu_0 I}{2\\pi d}$.
- Center of circular loop: $B = \\frac{\\mu_0 I}{2R}$. On axis: $B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$.
- Ampere\'s Circuital Law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}$.
- Lorentz Force: $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$. In pure magnetic field: Radius $r = \\frac{mv}{qB}$, Period $T = \\frac{2\\pi m}{qB}$.
- Magnetic Dipole: $\\vec{M} = I\\vec{A}$. Torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$.`,
    formulas: [
      { name: 'Lorentz Force', formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})', explanation: 'Total electromagnetic force acting on charge q.', units: 'Newtons (N)' },
      { name: 'Magnetic Field of Solenoid', formula: 'B = \\mu_0 n I', explanation: 'Uniform axial magnetic field inside tightly wound solenoid with n turns/meter.', units: 'Tesla (T)' }
    ],
    solvedExamples: [
      {
        question: 'A proton enters a uniform magnetic field of 0.2 T at speed 2x10^6 m/s perpendicular to field lines. Find orbital radius.',
        solution: 'r = m * v / (q * B) = (1.67x10^-27 * 2x10^6) / (1.6x10^-19 * 0.2) = 0.104 m = 10.4 cm.',
        keyInsight: 'Magnetic force is strictly perpendicular to velocity, so it does zero work and alters only direction, not speed.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate magnetic field at center of 100-turn circular coil of radius 10 cm carrying 2 A.'],
      intermediate: ['Determine magnetic force per unit length between two parallel conductors carrying 5 A in opposite directions.'],
      advanced: ['Derive torque on rectangular current loop in uniform magnetic field inclined at angle theta to normal.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-15',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 15,
    title: 'Electromagnetic Induction',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Magnetic flux, Faraday laws of induction, Lenz law, motional EMF, eddy currents, self and mutual inductance, and LR circuits.',
    introduction: 'Changing magnetic flux generates electric fields, establishing the foundation of electric generators and transformers.',
    summaryNotes: `### Core Formulations:
- Magnetic Flux: $\\Phi = \\vec{B} \\cdot \\vec{A} = B A\\cos\\theta$.
- Faraday\'s Law: $\\mathcal{E} = -\\frac{d\\Phi}{dt}$. Negative sign represents Lenz\'s Law (induced EMF opposes the change in flux causing it).
- Motional EMF: For straight conductor of length $L$ moving at velocity $v$ perpendicular to field $B$: $\\mathcal{E} = B v L$.
- Inductance:
  * Self-inductance: $\\Phi = L I \\implies \\mathcal{E} = -L\\frac{dI}{dt}$.
  * Mutual-inductance: $\\Phi_2 = M I_1 \\implies \\mathcal{E}_2 = -M\\frac{dI_1}{dt}$.
- Energy stored in Inductor: $U = \\frac{1}{2}L I^2$.`,
    formulas: [
      { name: 'Faraday-Lenz Law', formula: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt}', explanation: 'Induced EMF equals negative time derivative of magnetic flux.', units: 'Volts (V)' },
      { name: 'Self-Inductance Energy', formula: 'U = \\frac{1}{2}L I^2', explanation: 'Magnetic energy stored in magnetic field of inductor.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'A 2 m conductor moves at 5 m/s perpendicular to magnetic field of 0.3 T. Find induced EMF across ends.',
        solution: 'EMF = B * v * L = 0.3 * 5 * 2 = 3.0 V.',
        keyInsight: 'Motional EMF acts like an internal battery with polarity determined by Fleming right-hand rule.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['A coil of 200 turns has flux changing from 0.05 Wb to 0.01 Wb in 0.02 s. Find induced EMF.'],
      intermediate: ['In an LR circuit with L = 2 H and R = 10 ohm, find current after t = 0.2 s when connected to 20 V DC.'],
      advanced: ['A metal disc of radius R rotates at angular speed omega in axial magnetic field B. Derive induced EMF between rim and center.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-16',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 16,
    title: 'Alternating Current',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'AC voltage & current, RMS and peak values, phasors, reactance (XL, XC), impedance in series LCR circuits, resonance, quality factor, and transformers.',
    introduction: 'Covers sinusoidal voltage generation, reactive power, power factor, and resonance.',
    summaryNotes: `### Core Formulations:
- Sinusoidal AC: $I(t) = I_0\\sin(\\omega t)$, $I_{rms} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$.
- Reactances: Inductive $X_L = \\omega L$, Capacitive $X_C = \\frac{1}{\\omega C}$.
- Series LCR Impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.
- Phase Angle: $\\tan\\phi = \\frac{X_L - X_C}{R}$, Power Factor: $\\cos\\phi = \\frac{R}{Z}$.
- Resonant Frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ (at resonance $Z = R$, current is maximum).
- Transformer: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$.`,
    formulas: [
      { name: 'Series LCR Impedance', formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}', explanation: 'Total opposition to alternating current flow in series LCR circuit.', units: 'Ohms (\\Omega)' },
      { name: 'Resonant Angular Frequency', formula: '\\omega_0 = \\frac{1}{\\sqrt{LC}}', explanation: 'Condition where inductive and capacitive reactances cancel out.', units: 'rad/s' }
    ],
    solvedExamples: [
      {
        question: 'A series LCR circuit has R = 30 ohm, XL = 80 ohm, XC = 40 ohm connected to 220 V AC. Find impedance and current.',
        solution: 'Z = sqrt(30^2 + (80 - 40)^2) = sqrt(900 + 1600) = sqrt(2500) = 50 ohm. Current I = V / Z = 220 / 50 = 4.4 A.',
        keyInsight: 'Reactances subtract in quadrature with resistance.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate RMS voltage of household 220 V supply and find its peak voltage.'],
      intermediate: ['In series LCR circuit with L = 0.1 H, C = 10 uF, find resonant frequency and Quality factor Q.'],
      advanced: ['Determine power dissipated in AC circuit with voltage V = 100 sin(100t) and I = 2 sin(100t + pi/3).']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-17',
    subject: 'Physics',
    category: 'Electrodynamics',
    order: 17,
    title: 'Electromagnetic Waves',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Displacement current, Maxwell equations, characteristics of EM waves, electromagnetic spectrum (gamma to radio), and Poynting vector.',
    introduction: 'Unifies electricity, magnetism, and optics as self-propagating oscillating transverse fields.',
    summaryNotes: `### Core Formulations:
- Displacement Current: $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$.
- Maxwell\'s 4 Equations:
  1. $\\oint \\vec{E} \\cdot d\\vec{A} = Q/\\epsilon_0$ (Gauss Law for electricity)
  2. $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ (No magnetic monopoles)
  3. $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$ (Faraday Law)
  4. $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$ (Ampere-Maxwell Law)
- Wave Speed in vacuum: $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = \\frac{E_0}{B_0} \\approx 3\\times 10^8\\text{ m/s}$.
- Energy density: $u = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2$.`,
    formulas: [
      { name: 'Electromagnetic Wave Speed', formula: 'c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = \\frac{E_0}{B_0}', explanation: 'Fundamental relation linking vacuum permeability and permittivity to speed of light.', units: 'm/s' },
      { name: 'Displacement Current', formula: 'I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}', explanation: 'Equivalent current produced by time-varying electric flux between capacitor plates.', units: 'Amperes (A)' }
    ],
    solvedExamples: [
      {
        question: 'If peak electric field in an EM wave is 600 V/m, what is the peak magnetic field B_0?',
        solution: 'B0 = E0 / c = 600 / (3x10^8) = 2 x 10^-6 Tesla = 2 uT.',
        keyInsight: 'Magnetic field amplitude in SI units is always tiny compared to electric field because c is huge.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Arrange in increasing wavelength: X-rays, microwaves, infrared, ultraviolet.'],
      intermediate: ['Calculate intensity of an EM wave with electric field amplitude E_0 = 100 V/m.'],
      advanced: ['Find radiation pressure exerted on a completely absorbing surface by sunlight with intensity 1400 W/m^2.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-18',
    subject: 'Physics',
    category: 'Optics',
    order: 18,
    title: 'Ray Optics',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Reflection at spherical mirrors, refraction at plane & spherical surfaces, Total Internal Reflection (TIR), lens-maker formula, prisms, and optical instruments.',
    introduction: 'Treats light as rectilinear rays for image formation in mirrors, lenses, microscopes, and telescopes.',
    summaryNotes: `### Core Formulations:
- Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$, Magnification $m = -\\frac{v}{u}$.
- Snell\'s Law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$.
- Critical Angle for TIR: $\\sin\\theta_c = \\frac{n_2}{n_1}$ ($n_1 > n_2$).
- Lens Maker\'s Formula: $\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.
- Thin Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, Magnification $m = \\frac{v}{u}$.
- Prism Deviation: $A + \\delta = i + e$. At minimum deviation: $n = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)}$.
- Compound Microscope: $M \\approx -\\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$.
- Astronomical Telescope: $M = -\\frac{f_o}{f_e}$, Length $L = f_o + f_e$.`,
    formulas: [
      { name: 'Lens Maker Equation', formula: '\\frac{1}{f} = (n_{rel} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)', explanation: 'Calculates focal length from refractive index and radii of curvature.', units: 'm^{-1} or Diopters' },
      { name: 'Prism Refractive Index', formula: 'n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}', explanation: 'Determines refractive index from prism apex angle A and minimum deviation delta_m.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'An equiconvex lens of glass (n = 1.5) with radius 20 cm is immersed in water (n = 4/3). Find its new focal length.',
        solution: 'In air: 1/f_air = (1.5 - 1) * (2/20) = 1/20 ==> f_air = 20 cm. In water: 1/f_water = (1.5 / (4/3) - 1) * (2/20) = (9/8 - 1) * (1/10) = 1/80 ==> f_water = 80 cm.',
        keyInsight: 'Focal length quadruples when glass lens is submerged in water because relative refractive index drops.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate critical angle for diamond (n = 2.42) in air.'],
      intermediate: ['A ray enters an equilateral prism at angle of incidence 45 deg and suffers minimum deviation. Find refractive index.'],
      advanced: ['Two thin lenses of focal lengths +20 cm and -10 cm are separated by distance 5 cm. Find equivalent focal length.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-19',
    subject: 'Physics',
    category: 'Optics',
    order: 19,
    title: 'Wave Optics',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Huygens wave theory, Young Double Slit Experiment (YDSE), fringe width, optical path differences, single-slit diffraction, Brewster law polarization.',
    introduction: 'Wave optics proves the wave nature of light through interference, diffraction, and transverse polarization.',
    summaryNotes: `### Core Formulations:
- Wavefront: Surface of constant phase. Secondary wavelets advance at wave speed.
- Young\'s Double Slit Experiment (YDSE):
  * Path difference: $\\Delta x = d\\sin\\theta \\approx \\frac{yd}{D}$.
  * Bright fringes (Maxima): $y_n = n \\frac{\\lambda D}{d}$ ($n=0, 1, 2...$).
  * Dark fringes (Minima): $y_n = \\left(n - \\frac{1}{2}\\right)\\frac{\\lambda D}{d}$.
  * Fringe width: $\\beta = \\frac{\\lambda D}{d}$.
- Single Slit Diffraction: Minima occur at $a\\sin\\theta = n\\lambda$. Central maximum width = $\\frac{2\\lambda D}{a}$.
- Polarization: Brewster\'s Law $\\tan i_p = n$. Malus\'s Law $I = I_0 \\cos^2\\theta$.`,
    formulas: [
      { name: 'YDSE Fringe Width', formula: '\\beta = \\frac{\\lambda D}{d}', explanation: 'Separation between adjacent bright or dark fringes on viewing screen.', units: 'Meters (m)' },
      { name: 'Brewster Law', formula: '\\tan i_p = n', explanation: 'Angle of incidence where reflected light is completely linearly polarized.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'In YDSE with slit separation d = 1 mm and screen distance D = 1 m using light of 600 nm, find fringe width.',
        solution: 'beta = (lambda * D) / d = (600 x 10^-9 * 1) / (1 x 10^-3) = 6 x 10^-4 m = 0.6 mm.',
        keyInsight: 'Fringe width is directly proportional to screen distance D and inversely proportional to slit separation d.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate Brewster polarizing angle for water (n = 1.33).'],
      intermediate: ['In YDSE, a mica sheet of thickness t and refractive index 1.6 is placed in one arm. If 5 fringes shift, find t.'],
      advanced: ['Derive intensity distribution for single-slit Fraunhofer diffraction using phasor integration.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-20',
    subject: 'Physics',
    category: 'Modern Physics',
    order: 20,
    title: 'Dual Nature of Matter and Radiation',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Photoelectric effect, Einstein photoelectric equation, work function, stopping potential, de Broglie matter waves, and Davisson-Germer experiment.',
    introduction: 'Demonstrates the particle nature of electromagnetic radiation and the wave nature of moving matter particles.',
    summaryNotes: `### Core Formulations:
- Photon energy: $E = h\\nu = \\frac{hc}{\\lambda}$. Photon momentum: $p = \\frac{h}{\\lambda} = \\frac{E}{c}$.
- Einstein\'s Photoelectric Equation:
  $$K_{max} = h\\nu - \\phi_0 = e V_s$$
  where $\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}$ is work function, and $V_s$ is stopping potential.
- de Broglie Wavelength: $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}$.
  * For electron accelerated through potential $V$: $\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\sqrt{\\frac{150}{V}}\\text{ \\AA}$.`,
    formulas: [
      { name: 'Einstein Photoelectric Equation', formula: 'K_{max} = e V_s = h\\nu - \\phi_0', explanation: 'Relates stopping potential V_s, photon frequency nu, and material work function phi_0.', units: 'Electron-volts (eV) or Joules (J)' },
      { name: 'de Broglie Wavelength of Electron', formula: '\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}', explanation: 'Matter wavelength of an electron accelerated through potential difference V volts.', units: 'Angstroms (\\AA)' }
    ],
    solvedExamples: [
      {
        question: 'Light of wavelength 400 nm falls on metal surface with work function 2.0 eV. Find stopping potential (hc = 1240 eV nm).',
        solution: 'Photon energy E = 1240 / 400 = 3.1 eV. K_max = E - phi_0 = 3.1 - 2.0 = 1.1 eV. Stopping potential V_s = 1.1 V.',
        keyInsight: 'Stopping potential depends strictly on light frequency and work function, not on light intensity.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find de Broglie wavelength of an electron accelerated through 100 V.'],
      intermediate: ['The threshold wavelength of a metal is 500 nm. Calculate maximum velocity of photoelectrons emitted by 300 nm light.'],
      advanced: ['A photon and an electron have identical de Broglie wavelength lambda. Compare their kinetic energies.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-21',
    subject: 'Physics',
    category: 'Modern Physics',
    order: 21,
    title: 'Atoms and Nuclei',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Rutherford alpha scattering, Bohr hydrogen model, Rydberg formula, spectral series, mass defect, binding energy per nucleon, and radioactivity decay law.',
    introduction: 'Explores the quantum structure of hydrogenic atoms and the nuclear forces holding atomic nuclei together.',
    summaryNotes: `### Core Formulations:
- Bohr Postulates:
  * Quantization of angular momentum: $L = mvr = n\\frac{h}{2\\pi}$.
  * Radius: $r_n = 0.529 \\frac{n^2}{Z}\\text{ \\AA}$.
  * Velocity: $v_n = 2.18\\times 10^6 \\frac{Z}{n}\\text{ m/s}$.
  * Energy: $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$.
- Rydberg Formula: $\\frac{1}{\\lambda} = R Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$.
  * Lyman ($n_1=1$, UV), Balmer ($n_1=2$, Visible), Paschen ($n_1=3$, IR).
- Mass Defect $\\Delta m = (Z m_p + (A-Z) m_n) - M_{nucleus}$. Binding Energy $BE = \\Delta m c^2 = \\Delta m \\times 931.5\\text{ MeV}$.
- Radioactive Decay: $N(t) = N_0 e^{-\\lambda t}$, Half-life $T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}$.`,
    formulas: [
      { name: 'Bohr Hydrogen Energy Levels', formula: 'E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}', explanation: 'Quantized energy states for single-electron hydrogenic atoms.', units: 'eV' },
      { name: 'Radioactive Decay Law', formula: 'N(t) = N_0 e^{-\\lambda t}', explanation: 'Exponential disintegration law with decay constant lambda.', units: 'Dimensionless number' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the wavelength of the first line of the Balmer series in hydrogen (R = 1.097 x 10^7 m^-1).',
        solution: 'First line of Balmer: n1 = 2, n2 = 3. 1/lambda = R * (1/4 - 1/9) = R * (5/36). lambda = 36 / (5 * 1.097 x 10^7) = 656.3 nm (H-alpha red line).',
        keyInsight: 'Balmer series is the only hydrogen spectral series occurring in the human visible spectrum.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find half-life of a radioactive sample with decay constant 0.0693 day^-1.'],
      intermediate: ['Calculate binding energy per nucleon of Fe-56 (mass defect = 0.528 u).'],
      advanced: ['In a sample containing two radioactive isotopes A and B with half-lives 1 hr and 2 hr, find time when their activities become equal.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-22',
    subject: 'Physics',
    category: 'Electronic Devices',
    order: 22,
    title: 'Electronic Devices',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Energy bands in solids, intrinsic and extrinsic semiconductors (p-type, n-type), p-n junction diode under forward & reverse bias, Zener diode, LEDs, and logic gates.',
    introduction: 'Covers solid-state electronics, diode rectifiers, and fundamental digital logic gates.',
    summaryNotes: `### Core Formulations:
- Band Theory: Valence band, conduction band, forbidden energy gap $E_g$.
  * Conductors: $E_g \\approx 0$ (bands overlap).
  * Semiconductors: $0 < E_g < 3\\text{ eV}$ ($Si = 1.1\\text{ eV}, Ge = 0.7\\text{ eV}$).
  * Insulators: $E_g > 3\\text{ eV}$.
- Doping:
  * n-type: Doped with pentavalent atoms (P, As) $\\implies n_e \\gg n_h$.
  * p-type: Doped with trivalent atoms (B, Al, Ga) $\\implies n_h \\gg n_e$.
  * Mass action law: $n_e n_h = n_i^2$.
- p-n Junction Diode:
  * Forward bias: Depletion width decreases, barrier height lowers.
  * Reverse bias: Depletion width increases.
- Zener Diode: Heavily doped diode operated in reverse breakdown as a voltage regulator.
- Logic Gates: AND, OR, NOT, NAND, NOR, XOR. De Morgan\'s Laws: $\\overline{A + B} = \\overline{A}\\cdot\\overline{B}$, $\\overline{A\\cdot B} = \\overline{A} + \\overline{B}$.`,
    formulas: [
      { name: 'Mass Action Law in Semiconductors', formula: 'n_e \\cdot n_h = n_i^2', explanation: 'Product of electron and hole concentrations is constant at given temperature.', units: 'm^{-6}' },
      { name: 'De Morgan First Theorem', formula: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}', explanation: 'Fundamental digital logic identity for NOR gate equivalence.', units: 'Boolean' }
    ],
    solvedExamples: [
      {
        question: 'Identify the logic operation performed by two NAND gates connected in series (second gate has inputs tied together).',
        solution: 'First NAND produces Y1 = NOT(A AND B). Second gate with inputs tied acts as NOT gate: Y = NOT(Y1) = NOT(NOT(A AND B)) = A AND B. Result is an AND gate.',
        keyInsight: 'NAND and NOR are universal gates that can synthesize all other logic operations.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Construct the truth table for a 2-input NOR gate.'],
      intermediate: ['In a Zener voltage regulator circuit, input voltage fluctuates between 10 V and 15 V with Vz = 6 V. Find Zener current range.'],
      advanced: ['Explain why conductivity of semiconductors increases with temperature while that of metals decreases.']
    },
    quizQuestionIds: ['q-phys-01']
  },
  {
    id: 'phys-23',
    subject: 'Physics',
    category: 'Experimental Skills',
    order: 23,
    title: 'Experimental Skills',
    stage: 'foundation',
    classLevel: 'Class 11-12',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Vernier calipers, screw gauge, simple pendulum time period, Young modulus Searle method, surface tension capillary tube, meter bridge, resonance tube, and multimeters.',
    introduction: 'Laboratory instrumentation and error estimation tested in section B of JEE Main.',
    summaryNotes: `### Key Experimental Techniques:
1. **Vernier Calipers:** Least count = $1\\text{ MSD} - 1\\text{ VSD}$. Reading = $\\text{MSR} + (\\text{VSR} \\times \\text{LC}) - \\text{Zero Error}$.
2. **Screw Gauge:** Pitch = $\\frac{\\text{Distance moved}}{\\text{Rotations}}$, Least Count = $\\frac{\\text{Pitch}}{\\text{Total circular scale divisions}}$.
3. **Resonance Column Tube (Speed of Sound):**
   * First resonance: $L_1 + e = \\frac{\\lambda}{4}$.
   * Second resonance: $L_2 + e = \\frac{3\\lambda}{4}$.
   * Wavelength: $\\lambda = 2(L_2 - L_1)$ (End correction eliminated!).
   * End correction: $e = \\frac{L_2 - 3L_1}{2} = 0.6 r$.
4. **Meter Bridge:** Unknown resistance $X = R \\left(\\frac{100 - l}{l}\\right)$.`,
    formulas: [
      { name: 'Resonance Tube Speed of Sound', formula: 'v = 2 f (L_2 - L_1)', explanation: 'Calculates speed of sound eliminating end correction by subtracting resonant lengths.', units: 'm/s' },
      { name: 'Screw Gauge Least Count', formula: 'LC = \\frac{\\text{Pitch}}{\\text{Circular Scale Divisions}}', explanation: 'Resolution of micrometer screw gauge.', units: 'mm' }
    ],
    solvedExamples: [
      {
        question: 'In a resonance tube experiment with 512 Hz fork, first resonance occurs at 16 cm and second at 49 cm. Find speed of sound.',
        solution: 'v = 2 * f * (L2 - L1) = 2 * 512 * (0.49 - 0.16) = 2 * 512 * 0.33 = 337.9 m/s.',
        keyInsight: 'Subtracting L1 from L2 automatically cancels out the unknown end correction e.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['A screw gauge has pitch 0.5 mm and 50 circular divisions. Calculate its least count.'],
      intermediate: ['In Searle method for Young modulus, extension measured is 0.25 mm with 5% uncertainty. Find Young modulus error.'],
      advanced: ['Determine end correction and inner tube diameter from L1 = 15.2 cm and L2 = 47.8 cm.']
    },
    quizQuestionIds: ['q-phys-01']
  },

  // ==========================================
  // CHEMISTRY (20 OFFICIAL LEARNING AREAS)
  // ==========================================
  // PHYSICAL CHEMISTRY
  {
    id: 'chem-01',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 1,
    title: 'Some Basic Concepts in Chemistry',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Matter classification, laws of chemical combination, mole concept, molar mass, percentage composition, empirical and molecular formula, stoichiometry and limiting reagent.',
    introduction: 'The fundamental quantitative basis of all chemical reactions and concentration units.',
    summaryNotes: `### Core Quantitative Concepts:
- **Mole ($n$):** $n = \\frac{w}{M} = \\frac{N}{N_A} = \\frac{V_{gas}\\text{ at STP}}{22.4\\text{ L}}$.
- **Limiting Reagent:** The reactant completely consumed in reaction. Divide moles of each reactant by its stoichiometric coefficient; lowest ratio marks the limiting reactant.
- **Concentration Terms:**
  * Molarity ($M$): $\\frac{\\text{moles of solute}}{\\text{Volume of solution in L}}$ (temperature dependent).
  * Molality ($m$): $\\frac{\\text{moles of solute}}{\\text{Mass of solvent in kg}}$ (temperature independent!).
  * Mole Fraction ($X_A$): $\\frac{n_A}{n_A + n_B}$.`,
    definitions: [
      'Mole: Amount of substance containing exactly 6.022 x 10^23 elementary entities.',
      'Limiting Reagent: The reactant that determines the maximum possible theoretical yield.'
    ],
    formulas: [
      { name: 'Molality to Molarity Conversion', formula: 'm = \\frac{1000 M}{1000 d - M \\cdot M_w}', explanation: 'Converts molarity to molality using density d in g/mL.', units: 'mol / kg' },
      { name: 'Mass Percentage', formula: '\\% = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 100', explanation: 'Percentage by weight in solution.', units: '%' }
    ],
    solvedExamples: [
      {
        question: 'Calculate molality of 2.5 M NaCl solution having density 1.1 g/mL (Molar mass NaCl = 58.5 g/mol).',
        solution: 'In 1 L: Moles NaCl = 2.5 mol. Solution mass = 1000 * 1.1 = 1100 g. Solute mass = 2.5 * 58.5 = 146.25 g. Solvent mass = 1100 - 146.25 = 953.75 g = 0.954 kg. Molality m = 2.5 / 0.954 = 2.62 mol/kg.',
        keyInsight: 'Solvent mass = Solution mass - Solute mass. Never confuse solution volume with solvent mass.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate empirical formula of compound with 40% C, 6.7% H, and 53.3% O.'],
      intermediate: ['10 g of H2 reacts with 64 g of O2 to form water. Identify limiting reagent and mass of water formed.'],
      advanced: ['Determine volume of 0.1 M KMnO4 required to oxidize 20 mL of 0.2 M FeSO4 in acidic medium.']
    },
    quizQuestionIds: ['q-chem-01', 'q-chem-02']
  },
  {
    id: 'chem-02',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 2,
    title: 'Atomic Structure',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Bohr model and limitations, dual nature of matter (de Broglie), Heisenberg uncertainty principle, quantum numbers (n, l, m, s), Aufbau, Pauli exclusion, and Hund rule.',
    introduction: 'Modern quantum mechanical picture of electron orbitals and atomic stability.',
    summaryNotes: `### Core Formulations:
- de Broglie: $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.
- Heisenberg Uncertainty Principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$.
- Quantum Numbers:
  * Principal ($n = 1, 2, 3...$): Shell size and energy.
  * Azimuthal ($l = 0, 1... n-1$): Orbital shape ($s=0, p=1, d=2, f=3$). Orbital angular momentum $L = \\sqrt{l(l+1)}\\frac{h}{2\\pi}$.
  * Magnetic ($m_l = -l ... +l$): Spatial orientation ($2l + 1$ values).
  * Spin ($m_s = \\pm 1/2$): Intrinsic spin direction.
- Rules: Aufbau principle (energy order $(n + l)$), Pauli exclusion (no two electrons share all 4 quantum numbers), Hund\'s rule (maximum multiplicity before pairing).`,
    formulas: [
      { name: 'Heisenberg Uncertainty Principle', formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{h}{4\\pi}', explanation: 'Fundamental quantum limit on simultaneous measurement of position and momentum.', units: 'Joule-seconds (J s)' },
      { name: 'Orbital Angular Momentum', formula: 'L = \\sqrt{l(l+1)}\\frac{h}{2\\pi}', explanation: 'Angular momentum determined exclusively by azimuthal quantum number l.', units: 'kg m^2 / s' }
    ],
    solvedExamples: [
      {
        question: 'Which subshell fills first: 4s or 3d?',
        solution: 'By (n + l) rule: For 4s, n + l = 4 + 0 = 4. For 3d, n + l = 3 + 2 = 5. Lower (n + l) fills first, so 4s fills before 3d.',
        keyInsight: 'If two orbitals have equal (n + l), the one with lower n fills first (e.g. 3d fills before 4p).',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Write all 4 quantum numbers for the 19th electron of Potassium (Z = 19).'],
      intermediate: ['Calculate uncertainty in position of a 0.05 kg bullet moving with speed 300 m/s with 0.01% error.'],
      advanced: ['Determine number of radial and angular nodes in a 4d orbital.']
    },
    quizQuestionIds: ['q-chem-01']
  },
  {
    id: 'chem-03',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 3,
    title: 'Chemical Bonding and Molecular Structure',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Kossel-Lewis approach, ionic & covalent bonds, VSEPR theory of shapes, hybridization (sp, sp2, sp3, sp3d, sp3d2), dipole moments, and Molecular Orbital Theory (MOT).',
    introduction: 'Explains chemical structure, 3D molecular geometry, and bond orders.',
    summaryNotes: `### Core Formulations:
- VSEPR Theory: Electron pair repulsions follow $\\text{lp-lp} > \\text{lp-bp} > \\text{bp-bp}$.
- Steric Number: $SN = \\sigma\\text{-bonds} + \\text{lone pairs}$.
  * $SN=2$: $sp$ (Linear, $180^\\circ$)
  * $SN=3$: $sp^2$ (Trigonal Planar, $120^\\circ$)
  * $SN=4$: $sp^3$ (Tetrahedral, $109.5^\\circ$)
  * $SN=5$: $sp^3d$ (Trigonal Bipyramidal)
  * $SN=6$: $sp^3d^2$ (Octahedral, $90^\\circ$)
- Dipole Moment: $\\vec{\\mu} = q \\times d$.
- Molecular Orbital Theory (MOT):
  * For $\\le 14$ electrons ($B_2, C_2, N_2$): $\\pi(2p_x) = \\pi(2p_y) < \\sigma(2p_z)$.
  * For $> 14$ electrons ($O_2, F_2$): $\\sigma(2p_z) < \\pi(2p_x) = \\pi(2p_y)$.
  * $\\text{Bond Order} = \\frac{N_b - N_a}{2}$.`,
    formulas: [
      { name: 'Molecular Orbital Bond Order', formula: '\\text{Bond Order} = \\frac{1}{2}(N_b - N_a)', explanation: 'Bond strength and stability metric in Molecular Orbital Theory.', units: 'Dimensionless' },
      { name: 'Dipole Moment', formula: '\\mu = q \\times d', explanation: 'Vector product of charge and bond length.', units: 'Debye (D)' }
    ],
    solvedExamples: [
      {
        question: 'Explain why O2 is paramagnetic while N2 is diamagnetic using MOT.',
        solution: 'In O2 (16 e-), the last two electrons enter degenerate pi*(2px) and pi*(2py) antibonding orbitals with parallel spins by Hund rule. Unpaired electrons cause paramagnetism. In N2 (14 e-), all electrons are completely paired.',
        keyInsight: 'MOT explains paramagnetism of O2 which Lewis dot structures failed to explain.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Determine geometry and hybridization of SF6, PCl5, and NH3.'],
      intermediate: ['Arrange O2, O2+, O2-, O2(2-) in order of increasing bond length.'],
      advanced: ['Explain why dipole moment of NH3 (1.47 D) is greater than NF3 (0.24 D).']
    },
    quizQuestionIds: ['q-chem-04']
  },
  {
    id: 'chem-04',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 4,
    title: 'Chemical Thermodynamics',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'System and surroundings, state functions, first law, enthalpy (H), Hess law, enthalpy of formation & combustion, entropy (S), second law, Gibbs free energy (G), and spontaneity.',
    introduction: 'Determines whether a chemical reaction is thermodynamically feasible and spontaneous.',
    summaryNotes: `### Core Formulations:
- First Law: $\\Delta U = q + w$. In chemistry, work done by system $w = -P_{ext}\\Delta V$.
- Enthalpy: $H = U + PV \\implies \\Delta H = \\Delta U + \\Delta n_g R T$.
- Hess\'s Law: Total enthalpy change is identical whether reaction occurs in one step or multiple steps.
- Entropy ($S$): $\\Delta S = \\frac{q_{rev}}{T}$. $\\Delta S_{total} = \\Delta S_{sys} + \\Delta S_{surr} > 0$ for spontaneous process.
- Gibbs Free Energy: $\\Delta G = \\Delta H - T\\Delta S$.
  * Spontaneous: $\\Delta G < 0$.
  * Equilibrium: $\\Delta G = 0 \\implies \\Delta G^\\circ = -RT\\ln K_{eq}$.
  * Non-spontaneous: $\\Delta G > 0$.`,
    formulas: [
      { name: 'Gibbs-Helmholtz Equation', formula: '\\Delta G = \\Delta H - T\\Delta S', explanation: 'Determines chemical spontaneity at constant temperature and pressure.', units: 'kJ / mol' },
      { name: 'Standard Gibbs Free Energy & Equilibrium Constant', formula: '\\Delta G^\\circ = -RT\\ln K', explanation: 'Connects standard free energy change to equilibrium constant K.', units: 'J / mol' }
    ],
    solvedExamples: [
      {
        question: 'For reaction A -> B, Delta H = +30 kJ/mol and Delta S = +100 J/(mol K). At what temperature does the reaction become spontaneous?',
        solution: 'Reaction becomes spontaneous when Delta G < 0 ==> Delta H - T * Delta S < 0 ==> T > Delta H / Delta S = 30000 / 100 = 300 K.',
        keyInsight: 'An endothermic reaction with positive entropy becomes spontaneous at temperatures above T = Delta H / Delta S.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate Delta H for combustion of methane using bond enthalpies.'],
      intermediate: ['For reaction N2 + 3H2 -> 2NH3, relate Delta H to Delta U at 298 K.'],
      advanced: ['Derive temperature dependence of equilibrium constant using van \'t Hoff equation.']
    },
    quizQuestionIds: ['q-chem-01']
  },
  {
    id: 'chem-05',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 5,
    title: 'Solutions',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Raoult law for volatile solutes, ideal and non-ideal solutions, azeotropes, colligative properties (RLVP, boiling point elevation, freezing point depression, osmotic pressure), van \'t Hoff factor.',
    introduction: 'Colligative properties depend strictly on the number of solute particles rather than their chemical identity.',
    summaryNotes: `### Core Formulations:
- Raoult\'s Law: $P_A = P_A^\\circ X_A$, $P_{total} = P_A^\\circ X_A + P_B^\\circ X_B$.
- Ideal Solution: $\\Delta V_{mix} = 0$, $\\Delta H_{mix} = 0$.
- Colligative Properties:
  * Relative Lowering of Vapour Pressure: $\\frac{P^\\circ - P}{P^\\circ} = i \\cdot X_{solute}$.
  * Elevation in Boiling Point: $\\Delta T_b = i \\cdot K_b \\cdot m$.
  * Depression in Freezing Point: $\\Delta T_f = i \\cdot K_f \\cdot m$.
  * Osmotic Pressure: $\\pi = i \\cdot C R T$.
- van \'t Hoff factor $i$:
  * Dissociation (degree $\\alpha$): $i = 1 + (n - 1)\\alpha$.
  * Association: $i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$.`,
    formulas: [
      { name: 'Osmotic Pressure', formula: '\\pi = i C R T', explanation: 'Pressure required to stop osmosis through semipermeable membrane.', units: 'atm or Pa' },
      { name: 'van \'t Hoff Factor for Dissociation', formula: 'i = 1 + (n - 1)\\alpha', explanation: 'Corrects colligative properties for electrolytic ionization into n ions.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'Calculate van \'t Hoff factor i for K2SO4 undergoing 80% dissociation in water.',
        solution: 'K2SO4 -> 2 K(+) + SO4(2-), so n = 3 ions. i = 1 + (n - 1)*alpha = 1 + (3 - 1)*0.80 = 1 + 2*(0.80) = 2.6.',
        keyInsight: 'Always count total number of ions n produced per formula unit.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate osmotic pressure of 0.1 M glucose solution at 27 C.'],
      intermediate: ['A 1.0 m aqueous solution of a weak acid HX is 20% ionized. Find freezing point (Kf = 1.86 K kg/mol).'],
      advanced: ['Explain minimum and maximum boiling azeotropes using positive and negative Raoult deviations.']
    },
    quizQuestionIds: ['q-chem-01']
  },
  {
    id: 'chem-06',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 6,
    title: 'Equilibrium',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 14,
    durationHours: 8.0,
    description: 'Dynamic chemical equilibrium, law of mass action, Kp and Kc relations, Le Chatelier principle, ionic equilibrium, Ostwald dilution, pH scale, buffers, hydrolysis, and solubility product (Ksp).',
    introduction: 'Analyzes reversible reactions, acid-base ionization, and salt precipitation thresholds.',
    summaryNotes: `### Core Formulations:
- Chemical Equilibrium: $K_p = K_c(RT)^{\\Delta n_g}$.
- Le Chatelier\'s Principle: Disturbance (concentration, pressure, temperature) shifts equilibrium to counteract change.
- Ionic Equilibrium:
  * Water auto-ionization: $K_w = [H^+][OH^-] = 10^{-14}$ at $25^\\circ\\text{C}$. $pH = -\\log[H^+]$.
  * Henderson-Hasselbalch Buffer Equation:
    - Acidic buffer: $pH = pK_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$.
    - Basic buffer: $pOH = pK_b + \\log\\frac{[\\text{Salt}]}{[\\text{Base}]}$.
  * Salt Hydrolysis:
    - Weak Acid + Strong Base: $pH = 7 + \\frac{1}{2}pK_a + \\frac{1}{2}\\log C$.
    - Strong Acid + Weak Base: $pH = 7 - \\frac{1}{2}pK_b - \\frac{1}{2}\\log C$.
  * Solubility Product: Precipitation occurs if ionic product $Q_{sp} > K_{sp}$.`,
    formulas: [
      { name: 'Henderson-Hasselbalch Equation', formula: 'pH = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}', explanation: 'Calculates pH of buffer solutions resistant to pH change upon addition of acid/base.', units: 'pH units' },
      { name: 'Kp to Kc Relation', formula: 'K_p = K_c (RT)^{\\Delta n_g}', explanation: 'Connects gas-phase pressure and concentration equilibrium constants.', units: 'Pressure units' }
    ],
    solvedExamples: [
      {
        question: 'Calculate pH of buffer containing 0.1 M CH3COOH and 0.1 M CH3COONa (pKa of acetic acid = 4.74).',
        solution: 'pH = pKa + log([Salt]/[Acid]) = 4.74 + log(0.1 / 0.1) = 4.74 + log(1) = 4.74.',
        keyInsight: 'When salt and acid concentrations are equal, buffer pH equals pKa.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Calculate pH of 0.001 M HCl solution.'],
      intermediate: ['Find solubility of BaSO4 in 0.1 M Na2SO4 solution (Ksp of BaSO4 = 1.1 x 10^-10).'],
      advanced: ['Derive pH formula for salt of weak acid and weak base (e.g. ammonium acetate).']
    },
    quizQuestionIds: ['q-chem-01']
  },
  {
    id: 'chem-07',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 7,
    title: 'Redox Reactions and Electrochemistry',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Oxidation numbers, balancing redox equations by ion-electron method, electrochemical cells, standard hydrogen electrode (SHE), Nernst equation, conductance, Kohlrausch law, Faraday laws of electrolysis.',
    introduction: 'Interconverts chemical energy and electrical energy through oxidation-reduction electron transfers.',
    summaryNotes: `### Core Formulations:
- Electrochemical Cell: $E_{cell}^\circ = E_{cathode}^\circ - E_{anode}^\circ$.
- Nernst Equation at $298\\text{ K}$:
  $$E_{cell} = E_{cell}^\circ - \\frac{0.0591}{n}\\log Q$$
- Electrical Work & Free Energy: $\\Delta G^\circ = -n F E_{cell}^\circ$.
- Resistance & Conductance:
  * Conductivity $\\kappa = \\frac{1}{\\rho} = \\frac{G \\cdot l}{A}$.
  * Molar Conductivity: $\\Lambda_m = \\frac{1000 \\kappa}{M}$.
- Kohlrausch\'s Law of Independent Migration: $\\Lambda_m^\circ(A_x B_y) = x \\lambda_A^\circ + y \\lambda_B^\circ$.
- Faraday\'s Laws of Electrolysis: Mass deposited $m = Z I t = \\frac{E I t}{96500}$.`,
    formulas: [
      { name: 'Nernst Equation at 298 K', formula: 'E_{cell} = E_{cell}^\\circ - \\frac{0.0591}{n}\\log_{10} Q', explanation: 'Calculates non-standard EMF from reaction quotient Q and electron count n.', units: 'Volts (V)' },
      { name: 'Gibbs Free Energy and Cell Potential', formula: '\\Delta G^\\circ = -n F E^\\circ_{cell}', explanation: 'Direct thermodynamic connection between cell EMF and standard free energy.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'Calculate standard EMF of Daniell cell: Zn | Zn(2+) (1M) || Cu(2+) (1M) | Cu. (E_Zn2+/Zn = -0.76 V, E_Cu2+/Cu = +0.34 V).',
        solution: 'E_cell = E_cathode - E_anode = E_Cu2+/Cu - E_Zn2+/Zn = 0.34 - (-0.76) = +1.10 V.',
        keyInsight: 'Positive cell EMF guarantees standard reaction spontaneity.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Balance reaction MnO4(-) + Fe(2+) -> Mn(2+) + Fe(3+) in acidic medium.'],
      intermediate: ['Calculate EMF of hydrogen electrode operating in solution of pH = 3 at 298 K.'],
      advanced: ['Determine molar conductivity at infinite dilution for acetic acid using Kohlrausch data for HCl, CH3COONa, and NaCl.']
    },
    quizQuestionIds: ['q-chem-01']
  },
  {
    id: 'chem-08',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    order: 8,
    title: 'Chemical Kinetics',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Rate of reaction, rate law and rate constant, order and molecularity, integrated rate equations for zero and first order, half-life, Arrhenius equation and activation energy.',
    introduction: 'Examines the speed of chemical reactions and the transition state activation energy barriers.',
    summaryNotes: `### Core Formulations:
- Rate Law: $\\text{Rate} = k [A]^x [B]^y$ (Order = $x + y$, determined strictly experimentally).
- Zero Order ($r = k$): $[A] = [A]_0 - kt$, Half-life $t_{1/2} = \\frac{[A]_0}{2k}$.
- First Order ($r = k[A]$):
  $$k = \\frac{2.303}{t}\\log\\frac{[A]_0}{[A]}$$
  Half-life $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$ (independent of initial concentration!).
- Arrhenius Equation: $k = A e^{-E_a / RT} \\implies \\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.`,
    formulas: [
      { name: 'First Order Integrated Rate Law', formula: 'k = \\frac{2.303}{t}\\log_{10}\\frac{[A]_0}{[A]}', explanation: 'Computes first-order decay rate constant from concentration ratio.', units: 's^{-1} or min^{-1}' },
      { name: 'Arrhenius Equation', formula: 'k = A e^{-E_a / RT}', explanation: 'Temperature dependence of reaction rate constant based on activation barrier E_a.', units: 'Same as k' }
    ],
    solvedExamples: [
      {
        question: 'A first order reaction is 50% complete in 20 minutes. How long will it take for 75% completion?',
        solution: 'For 1st order: 50% completion takes 1 half-life = 20 min. 75% completion leaves 25% (half of 50%), requiring exactly 2 half-lives = 2 * 20 = 40 minutes.',
        keyInsight: 'In first order kinetics, each successive half-life consumes half of the remaining reactants.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['State units of rate constant k for zero, first, and second order reactions.'],
      intermediate: ['The rate of a reaction quadruples when temperature rises from 300 K to 320 K. Find activation energy E_a.'],
      advanced: ['Derive integrated rate equation for pseudo first-order acid-catalyzed hydrolysis of ethyl acetate.']
    },
    quizQuestionIds: ['q-chem-01']
  },

  // INORGANIC CHEMISTRY
  {
    id: 'chem-09',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    order: 9,
    title: 'Classification of Elements and Periodicity',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Modern periodic table, electronic configurations, periodic trends in atomic radii, ionic radii, ionization enthalpy, electron gain enthalpy, and electronegativity.',
    introduction: 'Explains periodic anomalies and effective nuclear charge screening across rows and columns.',
    summaryNotes: `### Core Trends & Anomalies:
- Atomic Radii: Decreases left to right across period (increasing $Z_{eff}$); increases down group.
- Ionization Enthalpy (IE):
  * $IE_1(N) > IE_1(O)$: Nitrogen has stable half-filled $2p^3$ subshell.
  * $IE_1(Be) > IE_1(B)$: Beryllium has stable fully-filled $2s^2$ subshell.
- Electron Gain Enthalpy (EGE):
  * Chlorine has more negative EGE than Fluorine (smaller $2p$ shell in F causes intense inter-electronic repulsion).
  * Sulfur has more negative EGE than Oxygen.
- Electronegativity: Pauling scale: $F (4.0) > O (3.5) > N (3.0) \\approx Cl (3.0) > Br (2.8) > I (2.5)$.`,
    formulas: [
      { name: 'Slater Rule for Screening Constant', formula: 'Z_{eff} = Z - \\sigma', explanation: 'Effective nuclear charge experienced by valence electrons after core electron shielding.', units: 'Charge units' },
      { name: 'Pauling Electronegativity Difference', formula: '|X_A - X_B| = 0.208\\sqrt{\\Delta}', explanation: 'Calculates electronegativity difference from bond resonance energy Delta in kcal/mol.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'Why is the first ionization enthalpy of Nitrogen higher than Oxygen, but second ionization enthalpy of Oxygen is higher than Nitrogen?',
        solution: 'For IE1: N (2s2 2p3) is half-filled and stable compared to O (2s2 2p4). For IE2: O(+) becomes 2s2 2p3 (half-filled!), while N(+) becomes 2s2 2p2. Hence IE2 of Oxygen is higher.',
        keyInsight: 'Always write electron configurations of ions to determine second ionization enthalpy.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Arrange in increasing atomic radius: Na, Mg, Al, K.'],
      intermediate: ['Explain why noble gases have high positive electron gain enthalpies.'],
      advanced: ['Discuss diagonal relationship between Lithium and Magnesium with 3 chemical properties.']
    },
    quizQuestionIds: ['q-chem-04']
  },
  {
    id: 'chem-10',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    order: 10,
    title: 'p-Block Elements',
    stage: 'intermediate',
    classLevel: 'Class 11-12',
    totalConcepts: 14,
    durationHours: 8.0,
    description: 'Group 13 to Group 18 chemistry, inert pair effect, allotropy of carbon & phosphorus, anomalous properties of 2nd period elements, oxoacids of P, S, halogens, and xenon fluorides.',
    introduction: 'Covers non-metals, metalloids, and post-transition metals exhibiting variable oxidation states.',
    summaryNotes: `### Core Formulations & Anomalies:
- **Inert Pair Effect:** Reluctance of valence $s$-electrons to participate in bonding due to poor shielding by inner $d$ and $f$ orbitals.
  * Stability of lower oxidation state increases down the group: $Tl(+1) > Tl(+3)$, $Pb(+2) > Pb(+4)$, $Bi(+3) > Bi(+5)$.
- Group 13: Borax bead test, 3-center-2-electron (banana) bonds in diborane ($B_2H_6$).
- Group 15: Nitrogen does not form pentahalides ($NCl_5$) due to absence of $d$-orbitals.
- Group 16: Anomalous behaviour of oxygen, sulfuric acid contact process.
- Group 17: Interhalogen compounds ($XX\'_n$), bleaching action of chlorine.
- Group 18: Xenon fluorides ($XeF_2$ linear, $XeF_4$ square planar, $XeF_6$ distorted octahedral).`,
    formulas: [
      { name: 'Xenon Fluoride Hydrolysis', formula: '6XeF_4 + 12H_2O \\rightarrow 2XeO_3 + 4Xe + 3O_2 + 24HF', explanation: 'Disproportionation of xenon tetrafluoride with water.', units: 'Stoichiometry' },
      { name: 'Diborane Banana Bond', formula: 'B_2H_6 \\text{ has two 3-center 2-electron (3c-2e) B-H-B bridge bonds}', explanation: 'Bridge bonding overcoming electron deficiency in boron hydrides.', units: 'Molecular structure' }
    ],
    solvedExamples: [
      {
        question: 'Why is PbO2 a powerful oxidizing agent while SnO2 is not?',
        solution: 'Due to strong inert pair effect in Group 14, Pb(+2) is much more stable than Pb(+4). Hence Pb(+4) in PbO2 readily reduces to Pb(+2), acting as strong oxidizing agent. Sn(+4) is stable.',
        keyInsight: 'Heavier p-block elements prefer lower oxidation state (Group number - 2).',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Draw structures of PCl5, XeF2, and XeF4.'],
      intermediate: ['Explain why white phosphorus is much more reactive than red phosphorus.'],
      advanced: ['Discuss acidity trend of halogen oxoacids: HClO4 > HClO3 > HClO2 > HClO.']
    },
    quizQuestionIds: ['q-chem-04']
  },
  {
    id: 'chem-11',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    order: 11,
    title: 'd- and f-Block Elements',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Transition elements, variable oxidation states, catalytic properties, magnetic moments (spin-only), interstitial compounds, potassium dichromate & permanganate, and lanthanoid contraction.',
    introduction: 'Covers partially filled d-orbitals yielding colored paramagnetic complexes and catalytic behavior.',
    summaryNotes: `### Core Formulations:
- Electronic Configuration: $(n-1)d^{1-10} ns^{1-2}$.
- Lanthanoid Contraction: Steady decrease in atomic and ionic radii from $La^{3+}$ to $Lu^{3+}$ due to poor shielding of $4f$ electrons. Causes $Zr$ and $Hf$ to have virtually identical radii (0.160 nm and 0.159 nm).
- Magnetic Moment (Spin-only formula): $\\mu = \\sqrt{n(n+2)}\\text{ BM}$ ($n =$ number of unpaired electrons).
- Potassium Dichromate ($K_2Cr_2O_7$): Strong oxidizing agent in acidic medium:
  $$Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O \\quad (E^\circ = 1.33\\text{ V})$$
- Potassium Permanganate ($KMnO_4$): In acidic medium $Mn^{7+} \\rightarrow Mn^{2+}$ ($n$-factor = 5).`,
    formulas: [
      { name: 'Spin-only Magnetic Moment', formula: '\\mu = \\sqrt{n(n+2)}\\text{ BM}', explanation: 'Calculates paramagnetic moment from n unpaired electrons in Bohr Magnetons.', units: 'BM' },
      { name: 'Chromate-Dichromate Equilibrium', formula: '2CrO_4^{2-} (\\text{yellow}) + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} (\\text{orange}) + H_2O', explanation: 'pH dependent interconversion between chromate and dichromate.', units: 'Chemical equilibrium' }
    ],
    solvedExamples: [
      {
        question: 'Calculate spin-only magnetic moment of Fe(2+) ion (Z = 26).',
        solution: 'Fe configuration: [Ar] 3d6 4s2. Fe(2+) is [Ar] 3d6. In 3d6, there are 4 unpaired electrons (n = 4). mu = sqrt(4 * (4 + 2)) = sqrt(24) = 4.90 BM.',
        keyInsight: 'Remove electrons first from outermost 4s shell before 3d when ionizing transition metals.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Why are transition metal salts colored in aqueous solution?'],
      intermediate: ['Explain why highest oxidation state of manganese is +7 while for iron it is +6.'],
      advanced: ['Discuss consequences of lanthanoid contraction on chemical separation of Zr and Hf.']
    },
    quizQuestionIds: ['q-chem-04']
  },
  {
    id: 'chem-12',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    order: 12,
    title: 'Coordination Compounds',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Werner coordination theory, IUPAC nomenclature, isomerism (structural and stereoisomerism), Valence Bond Theory, Crystal Field Theory (CFT, Octahedral & Tetrahedral splitting), and spectrochemical series.',
    introduction: 'Complex ions formed by central metal cations bonded to coordinate donor ligands.',
    summaryNotes: `### Core Formulations:
- Werner\'s Theory: Primary valence (ionizable, oxidation state) and Secondary valence (non-ionizable, coordination number).
- Crystal Field Splitting:
  * Octahedral: $d$-orbitals split into lower $t_{2g}$ ($d_{xy}, d_{yz}, d_{zx}$) and higher $e_g$ ($d_{x^2-y^2}, d_{z^2}$). $\\Delta_o$ splitting energy.
  * Tetrahedral: $\\Delta_t = \\frac{4}{9}\\Delta_o$ (never pairs up, always high-spin!).
- Spectrochemical Series:
  $$I^- < Br^- < Cl^- < F^- < OH^- < H_2O < NH_3 < en < CN^- < CO$$
  Strong field ligands ($CN^-, CO$) cause large $\\Delta_o > P$ (pairing occurs, low spin).
- Isomerism: Linkage (ambidentate ligands $NO_2^-/ONO^-$), Ionization, Coordination, Geometrical ($cis/trans$), Optical (enantiomers).`,
    formulas: [
      { name: 'Crystal Field Stabilization Energy (Octahedral)', formula: 'CFSE = (-0.4 n_{t2g} + 0.6 n_{eg})\\Delta_o + m P', explanation: 'Stabilization energy gained by electron distribution in split crystal field.', units: 'kJ / mol or Dq' },
      { name: 'Tetrahedral to Octahedral Splitting', formula: '\\Delta_t = \\frac{4}{9}\\Delta_o', explanation: 'Tetrahedral crystal field splitting magnitude is roughly half of octahedral.', units: 'Energy units' }
    ],
    solvedExamples: [
      {
        question: 'Predict magnetic behavior and hybridization of [Fe(CN)6](4-) and [Fe(H2O)6](2+).',
        solution: 'Fe(2+) is 3d6. In [Fe(CN)6](4-), CN(-) is strong field ligand, Delta_o > Pairing energy, so all 6 electrons pair into t2g subshell (t2g^6 eg^0). Zero unpaired electrons ==> Diamagnetic, d2sp3. In [Fe(H2O)6](2+), H2O is weak field ligand, electrons remain unpaired (t2g^4 eg^2) ==> 4 unpaired electrons ==> Paramagnetic, sp3d2.',
        keyInsight: 'Strong field ligands force pairing, producing inner-orbital low-spin diamagnetic complexes.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Write IUPAC name of [Co(NH3)5Cl]Cl2 and find coordination number.'],
      intermediate: ['Draw cis and trans geometrical isomers of [Pt(NH3)2Cl2].'],
      advanced: ['Calculate CFSE in Dq for a d5 high-spin and low-spin octahedral complex.']
    },
    quizQuestionIds: ['q-chem-04']
  },
  {
    id: 'chem-13',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    order: 13,
    title: 'Principles Related to Practical Chemistry',
    stage: 'foundation',
    classLevel: 'Class 11-12',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Qualitative salt analysis of acidic radicals (carbonates, halides, sulfates, nitrates) and basic radicals (Groups 0 to VI cations), borax bead test, flame test, and titration indicators.',
    introduction: 'Laboratory qualitative inorganic analysis frequently tested in JEE Main & Advanced.',
    summaryNotes: `### Systematic Cation Separation Scheme:
- Group 0: $NH_4^+$ (Nessler\'s reagent gives brown ppt).
- Group I: $Pb^{2+}, Ag^+, Hg_2^{2+}$ (Ppt with dilute $HCl$ as chlorides).
- Group II: $Cu^{2+}, Pb^{2+}, Bi^{3+}, Cd^{2+}$ (Ppt with $H_2S$ in dilute acidic medium).
- Group III: $Fe^{3+}, Al^{3+}, Cr^{3+}$ (Ppt with $NH_4OH$ in presence of $NH_4Cl$).
- Group IV: $Zn^{2+}, Mn^{2+}, Ni^{2+}, Co^{2+}$ (Ppt with $H_2S$ in ammoniacal medium).
- Group V: $Ba^{2+}, Sr^{2+}, Ca^{2+}$ (Ppt with $(NH_4)_2CO_3$).
- Group VI: $Mg^{2+}$.
- Flame Test: Sodium (golden yellow), Potassium (lilac), Calcium (brick red), Strontium (crimson), Barium (apple green).`,
    formulas: [
      { name: 'Brown Ring Test Complex', formula: '[Fe(H_2O)_5(NO)]SO_4', explanation: 'Nitrosyl iron complex formed at junction of concentrated sulfuric acid and nitrate solution.', units: 'Formula' },
      { name: 'Nessler Reagent Formula', formula: 'K_2[HgI_4] \\text{ in alkaline } KOH', explanation: 'Test reagent for ammonium cation detection.', units: 'Reagent' }
    ],
    solvedExamples: [
      {
        question: 'Why is NH4Cl added before NH4OH in precipitation of Group III cations?',
        solution: 'By common ion effect, NH4(+) ions from NH4Cl suppress ionization of weak base NH4OH, reducing [OH(-)] concentration just enough to precipitate less soluble hydroxides of Fe(3+), Al(3+), Cr(3+) without precipitating more soluble Group IV/V hydroxides.',
        keyInsight: 'Common ion effect selectively controls hydroxide concentration.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Describe chemical equation for the brown ring test for nitrate radical.'],
      intermediate: ['Explain why H2S is passed in acidic medium for Group II but basic medium for Group IV.'],
      advanced: ['Distinguish between sulfite and sulfate radicals using barium chloride test.']
    },
    quizQuestionIds: ['q-chem-04']
  },

  // ORGANIC CHEMISTRY
  {
    id: 'chem-14',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 14,
    title: 'Purification and Characterisation of Organic Compounds',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Sublimation, crystallization, distillation (fractional, vacuum, steam), chromatography (paper, TLC, column), Lassaigne sodium fusion test for N, S, halogens, Dumas & Kjeldahl methods.',
    introduction: 'Techniques for isolation, purity verification, and quantitative elemental estimation.',
    summaryNotes: `### Core Analytical Methods:
- **Distillation Techniques:**
  * Simple Distillation: Liquids boiling without decomposition with large boiling point difference ($> 25^\circ\\text{C}$).
  * Fractional Distillation: Close boiling points ($< 25^\circ\\text{C}$).
  * Vacuum Distillation: Liquids decomposing near normal boiling points (e.g. glycerol).
  * Steam Distillation: Steam-volatile, water-immiscible organic compounds (e.g. aniline, o-nitrophenol).
- **Lassaigne\'s Test:** Organic compound fused with sodium metal converts covalent elements into ionic salts:
  * Nitrogen: $Na + C + N \\rightarrow NaCN$. Test with $FeSO_4/FeCl_3$ gives Prussian blue $Fe_4[Fe(CN)_6]_3$.
  * Sulfur: $2Na + S \\rightarrow Na_2S$. Sodium nitroprusside gives violet coloration $Na_4[Fe(CN)_5NOS]$.
  * Halogens: Silver nitrate gives white ($AgCl$), pale yellow ($AgBr$), yellow ($AgI$) precipitates.
- **Kjeldahl Method:** $\%N = \\frac{1.4 \\times M \\times V}{w}$ (not applicable for azo, nitro, pyridine compounds).`,
    formulas: [
      { name: 'Kjeldahl Nitrogen Percentage', formula: '\\%N = \\frac{1.4 \\times N_{acid} \\times V_{acid}}{w_{sample}}', explanation: 'Quantitative estimation of nitrogen in organic compounds.', units: '%' },
      { name: 'Dumas Method Nitrogen Volume', formula: '\\%N = \\frac{28}{22400} \\times \\frac{V_0}{w} \\times 100', explanation: 'Estimation of nitrogen gas liberated at STP.', units: '%' }
    ],
    solvedExamples: [
      {
        question: 'Why can nitrobenzene NOT be estimated for nitrogen by Kjeldahl method?',
        solution: 'In Kjeldahl digestion, nitrogen in nitro (-NO2), azo (-N=N-), and heterocyclic rings (pyridine) does not convert quantitatively to ammonium sulfate under boiling sulfuric acid.',
        keyInsight: 'Dumas method is universal; Kjeldahl works only for amines, amides, and proteins.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Describe Prussian blue test for nitrogen detection.'],
      intermediate: ['In Dumas method, 0.2 g organic substance yielded 22.4 mL nitrogen at STP. Calculate percentage of nitrogen.'],
      advanced: ['Explain principle of steam distillation and derive ratio of masses of water and organic liquid codistilling.']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-15',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 15,
    title: 'Some Basic Principles of Organic Chemistry',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 8.0,
    description: 'IUPAC nomenclature, electronic displacements (Inductive, Electromeric, Resonance, Hyperconjugation), homolytic & heterolytic fission, reactive intermediates, and aromaticity (Huckel rule).',
    introduction: 'The crown jewel of organic chemistry (GOC) explaining why reactions occur and predicting intermediate stabilities.',
    summaryNotes: `### Core Organic Principles:
1. **Electronic Effects:**
   - **Inductive Effect ($\\pm I$):** Permanent sigma-electron displacement. $-I$: $-NO_2 > -CN > -COOH > -F > -Cl > -Br > -I > -OH > -C_6H_5$. $+I$: $-C(CH_3)_3 > -CH(CH_3)_2 > -CH_2CH_3 > -CH_3$.
   - **Mesomeric / Resonance Effect ($\\pm M$):** Pi-electron delocalization. $+M$: $-O^- > -NR_2 > -NH_2 > -OH > -OR$. $-M$: $-NO_2 > -CN > -CHO > -COOH$.
   - **Hyperconjugation:** No-bond resonance with $\\alpha$-hydrogens.
2. **Intermediate Stability:**
   - Carbocation: $3^\circ > 2^\circ > 1^\circ > CH_3^+$ (stabilized by $+M$, hyperconjugation, $+I$).
   - Free Radical: $3^\circ > 2^\circ > 1^\circ$ (stabilized by hyperconjugation).
   - Carbanion: $CH_3^- > 1^\circ > 2^\circ > 3^\circ$ (stabilized by $-I$, $-M$).
3. **Aromaticity (Hückel\'s Rule):** Planar, completely conjugated ring with $(4n + 2)\\pi$ electrons.`,
    formulas: [
      { name: 'Huckel Rule for Aromaticity', formula: '(4n + 2)\\pi\\text{ electrons in cyclic planar conjugated ring}', explanation: 'Criteria for extraordinary aromatic thermodynamic stability.', units: 'Integer n = 0, 1, 2...' },
      { name: 'Carbocation Hyperconjugation', formula: '\\text{Stability} \\propto \\text{Number of } \\alpha\\text{-C-H bonds}', explanation: 'No-bond resonance delocalizes vacant p-orbital charge onto adjacent C-H sigma bonds.', units: 'Count' }
    ],
    solvedExamples: [
      {
        question: 'Which is more acidic: Formic acid (HCOOH) or Acetic acid (CH3COOH)?',
        solution: 'In CH3COOH, the methyl group exerts a +I electron-donating effect, concentrating negative charge on the carboxylate anion and destabilizing it. In HCOOH, H has negligible inductive effect. Thus HCOOH is a stronger acid (pKa 3.75 vs 4.76).',
        keyInsight: 'Electron donating groups decrease carboxylic acid strength by destabilizing the conjugate base.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Write IUPAC name of (CH3)2CH-CH(Cl)-CH2-CHO.'],
      intermediate: ['Arrange in increasing stability: allyl carbocation, propyl carbocation, benzyl carbocation.'],
      advanced: ['Explain why cyclopentadienyl anion is aromatic while cyclopentadiene is non-aromatic.']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-16',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 16,
    title: 'Hydrocarbons',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Alkanes (Wurtz, free radical halogenation), Alkenes (Markownikoff addition, ozonolysis, peroxide Kharasch effect), Alkynes (acidity, hydration), and Aromatic hydrocarbons (electrophilic substitution).',
    introduction: 'Aliphatic and aromatic hydrocarbon synthesis and characteristic reaction mechanisms.',
    summaryNotes: `### Core Reactions:
- **Alkanes:** Free radical chlorination ($3^\circ > 2^\circ > 1^\circ$), Wurtz coupling: $2R-X + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$.
- **Alkenes:**
  * Markownikoff\'s Rule: Electrophilic addition of $H-X$ adds $H^+$ to carbon with more hydrogens to form more stable carbocation.
  * Anti-Markownikoff (Peroxide Effect): Exclusive to $HBr$ with organic peroxides via free radical mechanism.
  * Ozonolysis: Cleaves double bond into aldehydes/ketones with $Zn/H_2O$ reductive workup.
- **Alkynes:** Terminal alkynes are acidic ($RC\\equiv CH + NaNH_2 \\rightarrow RC\\equiv C^- Na^+ + NH_3$). Hydration with $HgSO_4/H_2SO_4$ gives ketones.
- **Benzene:** Electrophilic Aromatic Substitution ($S_E Ar$): Nitration ($HNO_3/H_2SO_4$), Halogenation ($Cl_2/FeCl_3$), Friedel-Crafts alkylation & acylation.`,
    formulas: [
      { name: 'Ozonolysis Cleavage', formula: 'R_1R_2C=CR_3R_4 + O_3 \\xrightarrow{Zn/H_2O} R_1R_2C=O + O=CR_3R_4', explanation: 'Locates double and triple bonds by analyzing cleavage carbonyl products.', units: 'Reaction' },
      { name: 'Friedel-Crafts Alkylation', formula: 'C_6H_6 + R-Cl \\xrightarrow{AlCl_3} C_6H_5-R + HCl', explanation: 'Electrophilic aromatic substitution generating alkylbenzenes via carbocation electrophiles.', units: 'Reaction' }
    ],
    solvedExamples: [
      {
        question: 'An alkene on ozonolysis gives acetone and acetaldehyde. Identify the alkene.',
        solution: 'Products are (CH3)2C=O and CH3-CHO. Joining carbonyl carbons with double bond: (CH3)2C=CH-CH3 (2-methylbut-2-ene).',
        keyInsight: 'Ozonolysis problem: replace =O on both product fragments with a double bond between the two carbonyl carbons.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Give product of propene + HBr in presence of benzoyl peroxide.'],
      intermediate: ['Explain why benzene undergoes electrophilic substitution rather than addition reactions.'],
      advanced: ['Predict product when toluene undergoes chlorination in presence of FeCl3 vs sunlight/heat.']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-17',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 17,
    title: 'Organic Compounds Containing Halogens',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Haloalkanes and haloarenes, SN1 and SN2 nucleophilic substitution mechanisms, stereochemical inversion vs racemization, elimination (E1/E2), and aryl halide inertness.',
    introduction: 'Nucleophilic substitution mechanisms (SN1 vs SN2) are central testing pillars in JEE Organic Chemistry.',
    summaryNotes: `### SN1 vs SN2 Comparison:
- **SN1 Mechanism:**
  * Two-step: Slow formation of carbocation intermediate $\\rightarrow$ nucleophilic attack.
  * Kinetics: First order ($r = k[R-X]$).
  * Reactivity: $3^\circ > 2^\circ > 1^\circ > CH_3X$ (carbocation stability).
  * Solvent: Polar protic ($H_2O, EtOH$) stabilizes carbocation.
  * Stereochemistry: Racemization (inversion + retention).
- **SN2 Mechanism:**
  * One-step concerted backside attack via transition state.
  * Kinetics: Second order ($r = k[R-X][Nu^-]$).
  * Reactivity: $CH_3X > 1^\circ > 2^\circ > 3^\circ$ (steric hindrance).
  * Solvent: Polar aprotic (Acetone, DMSO, DMF).
  * Stereochemistry: 100% Walden Inversion.
- **Haloarenes:** Unreactive towards nucleophiles due to partial double bond character from resonance, $sp^2$ hybridized carbon, and phenyl cation instability.`,
    formulas: [
      { name: 'Walden Inversion in SN2', formula: 'Nu^- + R_1R_2R_3C-X \\rightarrow Nu-CR_1R_2R_3 + X^-', explanation: 'Concerted backside nucleophilic attack inverting chiral center like umbrella in wind.', units: 'Mechanism' },
      { name: 'Saytzeff Rule for Elimination', formula: '\\text{More substituted alkene is the major thermodynamic product}', explanation: 'Dehydrohalogenation favors more stable alkene with greater number of alpha-hydrogens.', units: 'Rule' }
    ],
    solvedExamples: [
      {
        question: 'Which reacts faster in SN2 substitution: 1-bromobutane or 2-bromobutane?',
        solution: '1-bromobutane is a 1-degree primary halide with minimal steric hindrance to backside attack. 2-bromobutane is secondary with greater steric crowding. Hence 1-bromobutane reacts significantly faster in SN2.',
        keyInsight: 'Steric crowding around the alpha-carbon is the primary governing factor in SN2 reaction rates.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Compare boiling points of CH3Cl, CH2Cl2, CHCl3, CCl4.'],
      intermediate: ['Explain why chlorobenzene does not undergo substitution with aqueous NaOH at room temperature.'],
      advanced: ['Optically active 2-bromooctane reacts with NaOH in acetone to yield 2-octanol. What is optical purity of product?']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-18',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 18,
    title: 'Organic Compounds Containing Oxygen',
    stage: 'advanced',
    classLevel: 'Class 12',
    totalConcepts: 14,
    durationHours: 8.5,
    description: 'Alcohols, phenols, ethers, aldehydes, ketones, and carboxylic acids. Lucas reagent, Reimer-Tiemann, Kolbe reaction, Aldol condensation, Cannizzaro reaction, Tollens & Fehling tests.',
    introduction: 'The highest-weightage section in JEE organic chemistry, covering carbonyl nucleophilic additions and alpha-hydrogen condensations.',
    summaryNotes: `### Core Named Reactions:
- **Alcohols & Phenols:**
  * Lucas Test ($HCl + \\text{anh. } ZnCl_2$): $3^\circ$ (immediate turbidity), $2^\circ$ (5 min), $1^\circ$ (no turbidity at room temp).
  * Reimer-Tiemann Reaction: Phenol $+ CHCl_3 + KOH \\rightarrow$ Salicylaldehyde.
  * Kolbe\'s Reaction: Phenol $+ CO_2 + NaOH \\xrightarrow{H^+} Salicylic acid$.
- **Aldehydes & Ketones:**
  * Nucleophilic Addition: Aldehydes are more reactive than ketones due to steric and $+I$ effects.
  * Aldol Condensation: Carbonyls with $\\alpha$-H in dilute $NaOH$ form $\\beta$-hydroxy aldehydes, dehydrating on heating to $\\alpha,\\beta$-unsaturated carbonyls.
  * Cannizzaro Reaction: Aldehydes without $\\alpha$-H (Formaldehyde, Benzaldehyde) in conc. $KOH$ undergo self-redox disproportionation into alcohol + carboxylate salt.
  * Tollens / Fehling Test: Aldehydes give silver mirror / red $Cu_2O$ ppt; ketones do not react.
- **Carboxylic Acids:** Hell-Volhard-Zelinsky (HVZ) $\\alpha$-halogenation with $Br_2/P$.`,
    formulas: [
      { name: 'Aldol Condensation Scheme', formula: '2CH_3CHO \\xrightarrow{OH^-} CH_3-CH(OH)-CH_2-CHO \\xrightarrow{\\Delta} CH_3-CH=CH-CHO', explanation: 'Condensation of carbonyls possessing enolizable alpha-hydrogens.', units: 'Reaction' },
      { name: 'Cannizzaro Disproportionation', formula: '2HCHO + KOH \\rightarrow CH_3OH + HCOOK', explanation: 'Redox disproportionation of non-enolizable aldehydes.', units: 'Reaction' }
    ],
    solvedExamples: [
      {
        question: 'An organic compound A (C3H6O) gives positive 2,4-DNP test and positive iodoform test, but negative Tollens test. Identify A.',
        solution: 'Positive 2,4-DNP indicates carbonyl (aldehyde or ketone). Negative Tollens indicates ketone (not aldehyde). Positive iodoform test indicates presence of CH3-C=O methyl ketone group. With 3 carbons, compound A is Propan-2-one (acetone, CH3COCH3).',
        keyInsight: 'Positive iodoform test specifically identifies CH3-C=O or CH3-CH(OH)- groups.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Distinguish between ethanol and methanol using iodoform test.'],
      intermediate: ['Give reaction mechanism for acid-catalyzed esterification of benzoic acid with methanol.'],
      advanced: ['Predict products of cross-aldol condensation between benzaldehyde and acetophenone.']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-19',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 19,
    title: 'Organic Compounds Containing Nitrogen',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Amines, basicity order in gas and aqueous phases, Gabriel phthalimide synthesis, Hoffmann bromamide degradation, carbylamine test, and benzene diazonium chloride coupling reactions.',
    introduction: 'Focuses on nitrogen bases, synthetic amination methods, and diazonium salts as synthetic intermediates.',
    summaryNotes: `### Core Formulations:
- **Basicity of Amines:**
  * Gas Phase: $3^\circ > 2^\circ > 1^\circ > NH_3$ (due to $+I$ of alkyl groups).
  * Aqueous Medium: Combination of $+I$, hydration energy, and steric hindrance:
    - Methyl substituted: $2^\circ > 1^\circ > 3^\circ > NH_3$ ($(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N$).
    - Ethyl substituted: $2^\circ > 3^\circ > 1^\circ > NH_3$.
  * Aniline is much weaker base than ammonia due to resonance delocalization of lone pair into benzene ring.
- **Preparations:**
  * Gabriel Phthalimide: Exclusively produces pure $1^\circ$ aliphatic amines (cannot prepare aromatic amines).
  * Hoffmann Bromamide Degradation: $R-CONH_2 + Br_2 + 4KOH \\rightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O$ (degrades amide with 1 less carbon!).
- **Tests:** Carbylamine Test (detects $1^\circ$ amines using $CHCl_3 + KOH$, produces foul-smelling isocyanide).
- **Diazonium Salts:** $Ar-N_2^+ Cl^-$ undergoes Sandmeyer ($CuCl/HCl$), Gattermann, and azo dye coupling with phenols & anilines.`,
    formulas: [
      { name: 'Hoffmann Bromamide Degradation', formula: 'R-CONH_2 + Br_2 + 4KOH \\rightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O', explanation: 'Desynthesizes primary amide to primary amine with loss of carbonyl carbon.', units: 'Reaction' },
      { name: 'Carbylamine Test for Primary Amines', formula: 'R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC \\text{ (foul isocyanide)} + 3KCl + 3H_2O', explanation: 'Diagnostic test exclusively positive for primary aliphatic and aromatic amines.', units: 'Test' }
    ],
    solvedExamples: [
      {
        question: 'How will you convert benzamide into aniline?',
        solution: 'Benzamide (C6H5-CONH2) treated with Br2 and aqueous KOH undergoes Hoffmann bromamide degradation, yielding aniline (C6H5-NH2) in one step.',
        keyInsight: 'Hoffmann bromamide reaction cleanly drops one carbon from an amide to produce a primary amine.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Arrange in increasing basic strength in aqueous solution: NH3, CH3NH2, (CH3)2NH, C6H5NH2.'],
      intermediate: ['Explain why Gabriel phthalimide synthesis cannot be used to prepare aniline.'],
      advanced: ['Complete sequence: Benzene -> A (nitration) -> B (Sn/HCl) -> C (NaNO2/HCl 0-5 C) -> D (phenol coupling).']
    },
    quizQuestionIds: ['q-chem-03']
  },
  {
    id: 'chem-20',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    order: 20,
    title: 'Biomolecules',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Carbohydrates (monosaccharides, D/L configuration, mutarotation, glycosidic linkage), amino acids, peptide bonds, protein secondary & tertiary structures, denaturation, and nucleic acids (DNA/RNA).',
    introduction: 'Bridges organic chemistry and biology, detailing structural polymers of life.',
    summaryNotes: `### Core Bio-organic Concepts:
- **Carbohydrates:**
  * Reducing sugars: Contain free aldehyde/ketone or hemiacetal group (glucose, fructose, maltose, lactose).
  * Non-reducing sugar: Sucrose (glucose-C1 and fructose-C2 glycosidic linkage locks both anomeric carbons).
  * Invert sugar: Sucrose (dextrorotatory $+66.5^\circ$) hydrolyzes to glucose ($+52.7^\circ$) and fructose ($-92.4^\circ$), producing net levorotatory mixture.
- **Amino Acids & Proteins:**
  * Zwitterion: $H_3N^+-CHR-COO^-$ at isoelectric point (pI).
  * All natural amino acids are L-configured and optically active (except Glycine, which is achiral).
  * Protein structure: Primary (peptide sequence), Secondary ($\\alpha$-helix and $\\beta$-pleated sheet held by H-bonds), Tertiary (folding held by disulfide, ionic, hydrophobic bonds), Quaternary.
  * Denaturation: Heat or acid disrupts secondary/tertiary structures without breaking primary peptide bonds.
- **Nucleic Acids:** Nucleoside = Base + Sugar. Nucleotide = Nucleoside + Phosphate. DNA has A, T, G, C (double helix H-bonded A=T, G≡C). RNA has A, U, G, C.`,
    formulas: [
      { name: 'Peptide Bond Formation', formula: '-COOH + H_2N- \\rightarrow -CO-NH- + H_2O', explanation: 'Condensation between alpha-amino and alpha-carboxyl groups forming protein backbone.', units: 'Bond' },
      { name: 'Inversion of Cane Sugar', formula: 'C_{12}H_{22}O_{11} (\\text{dextro}) + H_2O \\rightarrow D\\text{-glucose (dextro)} + D\\text{-fructose (strong levo)}', explanation: 'Hydrolysis reversing the optical rotation sign of sucrose.', units: 'Reaction' }
    ],
    solvedExamples: [
      {
        question: 'Which alpha-amino acid is optically inactive and why?',
        solution: 'Glycine (H2N-CH2-COOH). The alpha-carbon has two identical hydrogen atoms attached, meaning it lacks an asymmetric chiral center.',
        keyInsight: 'Glycine is the only achiral natural amino acid.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Differentiate between nucleoside and nucleotide.'],
      intermediate: ['Explain mutarotation of glucose with alpha and beta anomeric ring structures.'],
      advanced: ['Explain why denaturation of protein causes loss of biological activity while leaving primary structure intact.']
    },
    quizQuestionIds: ['q-chem-03']
  },

  // ==========================================
  // MATHEMATICS (23 OFFICIAL LEARNING AREAS)
  // ==========================================
  {
    id: 'math-01',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 1,
    title: 'Sets, Relations and Functions',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Sets and subsets, power sets, Cartesian product, equivalence relations, domain and range of functions, injective, surjective, bijective functions, composite functions, and inverse functions.',
    introduction: 'The mathematical language of modern mathematics and calculus.',
    summaryNotes: `### Core Formulations:
- Number of subsets of set with $n$ elements = $2^n$.
- Relations:
  * Reflexive: $(a, a) \\in R$ for all $a \\in A$.
  * Symmetric: $(a, b) \\in R \\implies (b, a) \\in R$.
  * Transitive: $(a, b) \\in R$ and $(b, c) \\in R \\implies (a, c) \\in R$.
  * Equivalence Relation: Reflexive, symmetric, and transitive simultaneously.
- Function Types:
  * Injective (One-to-One): $f(x_1) = f(x_2) \\implies x_1 = x_2$ (horizontal line test cuts at most once).
  * Surjective (Onto): $\\text{Range} = \\text{Codomain}$.
  * Bijective: Both injective and surjective (invertible function!).`,
    formulas: [
      { name: 'Number of Relations', formula: 'N = 2^{m \\times n}', explanation: 'Total relations between sets A of size m and B of size n.', units: 'Count' },
      { name: 'Invertible Function Criteria', formula: 'f^{-1} \\text{ exists} \\iff f \\text{ is strictly bijective}', explanation: 'Function must be both one-to-one and onto to possess an inverse.', units: 'Condition' }
    ],
    solvedExamples: [
      {
        question: 'Find the domain of function f(x) = sqrt(x - 2) / (x - 5).',
        solution: 'For square root: x - 2 >= 0 ==> x >= 2. For non-zero denominator: x - 5 != 0 ==> x != 5. Domain = [2, 5) U (5, infinity).',
        keyInsight: 'Intersect all sub-expression domain conditions: non-negative terms inside square roots and non-zero denominators.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Determine whether relation R on integers defined by aRb iff (a - b) is divisible by 5 is equivalence relation.'],
      intermediate: ['If f(x) = (4x + 3)/(6x - 4), prove that f(f(x)) = x for all x != 2/3 and find f^(-1).'],
      advanced: ['Find number of surjective functions from set of 5 elements to set of 3 elements.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-02',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 2,
    title: 'Complex Numbers',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Algebraic properties of complex numbers, modulus and argument, polar & Euler forms, triangle inequalities, cube roots of unity, and geometry of circles and lines on Argand plane.',
    introduction: 'Extends real numbers to 2D Argand plane, unlocking geometric transformations.',
    summaryNotes: `### Core Formulations:
- $z = x + iy = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$, Modulus $|z| = \\sqrt{x^2 + y^2}$, Conjugate $\\bar{z} = x - iy$.
- Properties: $|z_1 z_2| = |z_1||z_2|$, $\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2)$, $|z|^2 = z \\bar{z}$.
- Triangle Inequality: $||z_1| - |z_2|| \\le |z_1 + z_2| \\le |z_1| + |z_2|$.
- Cube Roots of Unity ($1, \\omega, \\omega^2$):
  $$1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1$$
- Argand Geometry:
  * Circle: $|z - z_0| = R$.
  * Perpendicular Bisector: $|z - z_1| = |z - z_2|$.`,
    formulas: [
      { name: 'Euler Formula', formula: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta', explanation: 'Relates complex exponential to trigonometric coordinates on unit circle.', units: 'Identity' },
      { name: 'De Moivre Theorem', formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)', explanation: 'Used to calculate powers and roots of complex numbers.', units: 'Theorem' }
    ],
    solvedExamples: [
      {
        question: 'Find the minimum value of |z - 2| + |z - 8| for any complex number z.',
        solution: 'By triangle inequality, |z - 2| + |8 - z| >= |(z - 2) + (8 - z)| = |6| = 6. Minimum value is 6 (achieved when z lies on line segment between 2 and 8).',
        keyInsight: 'Geometric interpretation: |z - a| + |z - b| >= distance between a and b on Argand plane.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Express (2 + 3i)/(1 - 2i) in standard x + iy form.'],
      intermediate: ['If |z| = 2, find maximum and minimum value of |z + 3 - 4i|.'],
      advanced: ['Prove that if (z - 1)/(z + 1) is purely imaginary, the locus of z is a circle.']
    },
    quizQuestionIds: ['q-math-02']
  },
  {
    id: 'math-03',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 3,
    title: 'Quadratic Equations',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Roots of quadratic equations, Vieta relations, nature of roots (discriminant D), sign of quadratic expression, common roots, and location of roots conditions.',
    introduction: 'Fundamental algebraic foundation testing root positions relative to intervals.',
    summaryNotes: `### Core Formulations:
- For $ax^2 + bx + c = 0$: Roots $\\alpha, \\beta = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.
- Vieta: $\\alpha + \\beta = -b/a$, $\\alpha\\beta = c/a$.
- Discriminant $D = b^2 - 4ac$:
  * $D > 0$: Real & distinct roots.
  * $D = 0$: Real & equal roots.
  * $D < 0$: Complex conjugate roots.
- Location of Roots ($f(x) = ax^2 + bx + c, a > 0$):
  * Both roots $> k$: $D \\ge 0$, $-\\frac{b}{2a} > k$, and $f(k) > 0$.
  * $k$ lies between roots: $a \\cdot f(k) < 0$.
  * Both roots in $(k_1, k_2)$: $D \\ge 0$, $k_1 < -\\frac{b}{2a} < k_2$, $f(k_1) > 0$, $f(k_2) > 0$.`,
    formulas: [
      { name: 'Condition for k Between Roots', formula: 'a \\cdot f(k) < 0', explanation: 'Necessary and sufficient condition for a real number k to fall strictly between roots.', units: 'Inequality' },
      { name: 'Common Root Condition', formula: '(c_1 a_2 - c_2 a_1)^2 = (b_1 c_2 - b_2 c_1)(a_1 b_2 - a_2 b_1)', explanation: 'Condition for two quadratic equations to share a common root.', units: 'Condition' }
    ],
    solvedExamples: [
      {
        question: 'Find the set of values of m for which x^2 - (m - 3)x + m = 0 has real roots.',
        solution: 'For real roots, D >= 0 ==> (m - 3)^2 - 4(1)(m) >= 0 ==> m^2 - 6m + 9 - 4m >= 0 ==> m^2 - 10m + 9 >= 0 ==> (m - 1)(m - 9) >= 0 ==> m in (-infinity, 1] U [9, infinity).',
        keyInsight: 'Solve the discriminant inequality using the wavy curve method.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['If roots of x^2 - 5x + k = 0 differ by 1, find k.'],
      intermediate: ['Find range of a for which both roots of x^2 - 2ax + a^2 - 1 = 0 are greater than 2.'],
      advanced: ['If equation x^2 + ax + 12 = 0 and x^2 + bx + 15 = 0 share a common root, find a and b.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-04',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 4,
    title: 'Matrices',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Types of matrices, matrix addition & multiplication, transpose, symmetric & skew-symmetric matrices, orthogonal matrices, and Cayley-Hamilton theorem.',
    introduction: 'Matrix algebra provides compact representations for linear transformations.',
    summaryNotes: `### Core Formulations:
- Matrix multiplication is non-commutative: $AB \\ne BA$ in general.
- Transpose: $(AB)^T = B^T A^T$, $(A + B)^T = A^T + B^T$.
- Symmetric: $A^T = A$, Skew-Symmetric: $A^T = -A$ (diagonal elements of skew-symmetric matrix are always zero!).
- Any square matrix can be uniquely decomposed: $A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$.
- Orthogonal matrix: $A A^T = A^T A = I$.`,
    formulas: [
      { name: 'Matrix Transpose Product', formula: '(AB)^T = B^T A^T', explanation: 'Order of matrix multiplication reverses upon transposition.', units: 'Property' },
      { name: 'Symmetric Decomposition', formula: 'A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)', explanation: 'Decomposes any square matrix into sum of symmetric and skew-symmetric parts.', units: 'Identity' }
    ],
    solvedExamples: [
      {
        question: 'If A is a 2x2 matrix such that A^2 = A, what can be said about (I + A)^3 - 7A?',
        solution: 'Expanding (I + A)^3: I^3 + 3I^2 A + 3I A^2 + A^3 = I + 3A + 3A + A = I + 7A (since A^2 = A ==> A^3 = A). Therefore (I + A)^3 - 7A = (I + 7A) - 7A = I.',
        keyInsight: 'Use idempotency A^2 = A to replace all higher powers of A with A.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Verify whether product of two symmetric matrices is symmetric.'],
      intermediate: ['Given matrix A = [[cos theta, -sin theta], [sin theta, cos theta]], compute A^n using induction.'],
      advanced: ['Apply Cayley-Hamilton theorem to find A^(-1) for 3x3 matrix.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-05',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 5,
    title: 'Determinants',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 5.5,
    description: 'Properties of determinants, minors and cofactors, adjoint and inverse of square matrix, Cramer rule for system of linear equations, and consistency test.',
    introduction: 'Evaluates volumes, invertibility, and linear system solutions.',
    summaryNotes: `### Core Formulations:
- Properties: $|A^T| = |A|$, $|AB| = |A||B|$, $|kA| = k^n |A|$ for $n \\times n$ matrix.
- Adjoint: $A \\cdot \\text{adj}(A) = |A| I$.
  * $|\\text{adj}(A)| = |A|^{n-1}$.
  * $|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}$.
- Inverse: $A^{-1} = \\frac{\\text{adj}(A)}{|A|}$ exists if and only if $|A| \\ne 0$.
- System of Equations ($AX = B$):
  * Unique solution: $|A| \\ne 0$ (Consistent).
  * Infinitely many: $|A| = 0$ and $(\\text{adj} A)B = O$.
  * No solution: $|A| = 0$ and $(\\text{adj} A)B \\ne O$ (Inconsistent).`,
    formulas: [
      { name: 'Adjoint Determinant Property', formula: '|\\text{adj}(A)| = |A|^{n-1}', explanation: 'Determinant of adjoint matrix of order n.', units: 'Scalar' },
      { name: 'Scalar Multiple Determinant', formula: '|k A| = k^n |A|', explanation: 'Factoring scalar k from an n x n matrix determinant.', units: 'Scalar' }
    ],
    solvedExamples: [
      {
        question: 'If A is 3x3 matrix with |A| = 4, find value of |adj(A)|.',
        solution: '|adj(A)| = |A|^(n - 1). Here n = 3, so |adj(A)| = |A|^(3 - 1) = |A|^2 = 4^2 = 16.',
        keyInsight: 'Adjoint determinant scales as power (n - 1) of original determinant.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Evaluate 3x3 determinant with two identical rows.'],
      intermediate: ['Solve system of 3 linear equations using Cramer rule and verify consistency.'],
      advanced: ['Find condition on lambda for which system x + y + z = 1, x + 2y + 4z = lambda, x + 4y + 10z = lambda^2 has solutions.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-06',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 6,
    title: 'Permutations and Combinations',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Fundamental principles of counting, factorials, permutations P(n, r), combinations C(n, r), circular permutations, division into groups, and de-arrangement theorem.',
    introduction: 'Combinatorial reasoning powers counting problems and discrete probability in JEE.',
    summaryNotes: `### Core Formulations:
- Permutations: $^n P_r = \\frac{n!}{(n-r)!}$ (arrangements where order matters).
- Combinations: $^n C_r = \\frac{n!}{r!(n-r)!}$ (selections where order does not matter).
- Circular Permutations: $(n - 1)!$ for distinct items (or $\\frac{(n-1)!}{2}$ for necklaces/garlands).
- Identical Items: $\\frac{n!}{p! q! r!}$.
- Non-negative integer solutions to $x_1 + x_2 + ... + x_r = n$: $^{n+r-1} C_{r-1}$ (Stars and Bars).
- Derangements: $D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + ... + \\frac{(-1)^n}{n!}\\right)$.`,
    formulas: [
      { name: 'Stars and Bars (Beggar Method)', formula: 'N = {}^{n+r-1}C_{r-1}', explanation: 'Number of non-negative integer solutions to distribution of n identical items to r bins.', units: 'Count' },
      { name: 'Derangement Formula', formula: 'D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}', explanation: 'Number of permutations of n elements such that no element appears in its original position.', units: 'Count' }
    ],
    solvedExamples: [
      {
        question: 'Find the number of ways to distribute 10 identical coins among 3 children so that each child gets at least 1 coin.',
        solution: 'Let x1, x2, x3 be coins. x1 + x2 + x3 = 10 with xi >= 1. Let yi = xi - 1 >= 0. y1 + y2 + y3 = 7. Using ^(n+r-1) C_(r-1): ^(7+3-1) C_(3-1) = ^9 C_2 = (9 * 8) / 2 = 36 ways.',
        keyInsight: 'For positive integer solutions (at least 1), formula simplifies to ^(n-1) C_(r-1).',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['How many 4-letter words can be formed from letters of word LOGARITHM without repetition?'],
      intermediate: ['In how many ways can 6 persons sit around a circular table if 2 particular persons refuse to sit together?'],
      advanced: ['Find number of derangements of 5 letters into 5 addressed envelopes.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-07',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 7,
    title: 'Binomial Theorem',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Binomial expansion for positive integral index, general term, middle term, properties of binomial coefficients, and binomial theorem for any rational index.',
    introduction: 'Powers of algebraic sums and polynomial coefficient identities.',
    summaryNotes: `### Core Formulations:
- Binomial Expansion:
  $$(x + y)^n = \\sum_{r=0}^n {}^n C_r x^{n-r} y^r$$
- General Term: $T_{r+1} = {}^n C_r x^{n-r} y^r$.
- Middle Term:
  * If $n$ is even: Single middle term $T_{n/2 + 1}$.
  * If $n$ is odd: Two middle terms $T_{(n+1)/2}$ and $T_{(n+3)/2}$.
- Properties of Coefficients ($C_r = {}^n C_r$):
  * $C_0 + C_1 + C_2 + ... + C_n = 2^n$.
  * $C_0 - C_1 + C_2 - ... + (-1)^n C_n = 0$.
  * $C_0 + C_2 + C_4 + ... = C_1 + C_3 + C_5 + ... = 2^{n-1}$.`,
    formulas: [
      { name: 'General Binomial Term', formula: 'T_{r+1} = {}^n C_r x^{n-r} y^r', explanation: '(r+1)th term in expansion of (x + y)^n.', units: 'Algebraic term' },
      { name: 'Sum of Binomial Coefficients', formula: '\\sum_{r=0}^n {}^n C_r = 2^n', explanation: 'Total sum of all binomial coefficients for index n.', units: 'Number' }
    ],
    solvedExamples: [
      {
        question: 'Find the term independent of x in the expansion of (x^2 - 1/x)^9.',
        solution: 'T_(r+1) = ^9 C_r (x^2)^(9-r) (-1/x)^r = ^9 C_r (-1)^r x^(18 - 2r - r) = ^9 C_r (-1)^r x^(18 - 3r). For term independent of x: 18 - 3r = 0 ==> r = 6. Term = ^9 C_6 (-1)^6 = ^9 C_3 = (9 * 8 * 7) / (3 * 2 * 1) = 84.',
        keyInsight: 'Set the total net exponent of x to zero to isolate the constant term.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find the middle term in the expansion of (x + 2/x)^8.'],
      intermediate: ['Prove that C1 + 2*C2 + 3*C3 + ... + n*Cn = n * 2^(n-1).'],
      advanced: ['Find remainder when 7^103 is divided by 25 using binomial expansion.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-08',
    subject: 'Mathematics',
    category: 'Algebra',
    order: 8,
    title: 'Sequences and Series',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Arithmetic Progression (AP), Geometric Progression (GP), infinite GP sum, Harmonic Progression (HP), Arithmetico-Geometric Progression (AGP), and AM-GM-HM inequality.',
    introduction: 'Mathematical patterns, partial sums, and the AM >= GM inequality.',
    summaryNotes: `### Core Formulations:
- **Arithmetic Progression (AP):** $T_n = a + (n-1)d$, $S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)$.
- **Geometric Progression (GP):** $T_n = a r^{n-1}$, $S_n = \\frac{a(1 - r^n)}{1 - r}$.
  * Infinite GP ($|r| < 1$): $S_\\infty = \\frac{a}{1 - r}$.
- **Harmonic Progression (HP):** Reciprocals form an AP.
- **Means:** $AM = \\frac{a+b}{2}$, $GM = \\sqrt{ab}$, $HM = \\frac{2ab}{a+b}$.
  * Invariant Relation: $GM^2 = AM \\cdot HM$.
  * **AM-GM-HM Inequality:** $AM \\ge GM \\ge HM$ for any positive real numbers! Equality holds if and only if all numbers are equal.`,
    formulas: [
      { name: 'AM-GM Inequality', formula: '\\frac{a_1 + a_2 + ... + a_n}{n} \\ge (a_1 a_2 ... a_n)^{1/n}', explanation: 'Crucial inequality used to solve maximum and minimum values in JEE.', units: 'Inequality' },
      { name: 'Infinite GP Sum', formula: 'S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)', explanation: 'Sum of convergent infinite geometric sequence.', units: 'Number' }
    ],
    solvedExamples: [
      {
        question: 'Find minimum value of 4^x + 4^(1-x) for all real x.',
        solution: 'By AM-GM inequality on positive terms 4^x and 4^(1-x): (4^x + 4^(1-x)) / 2 >= sqrt(4^x * 4^(1-x)) = sqrt(4^1) = 2. Therefore 4^x + 4^(1-x) >= 4. Minimum value is 4 (occurs at x = 1/2).',
        keyInsight: 'AM-GM is the fastest method to find extrema of sums whose product is constant.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find the sum of first 20 terms of AP 3, 7, 11, 15...'],
      intermediate: ['Sum the AGP series: S = 1 + 2/3 + 3/3^2 + 4/3^3 + ... to infinity.'],
      advanced: ['If positive reals a, b, c have sum 1, prove (1/a - 1)(1/b - 1)(1/c - 1) >= 8 using AM-GM.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-09',
    subject: 'Mathematics',
    category: 'Trigonometry',
    order: 9,
    title: 'Trigonometry',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Trigonometric identities, compound angles, transformation formulas, multiple and submultiple angles, trigonometric equations general solutions, and inverse trigonometric functions.',
    introduction: 'Circular functions, identity transformations, and inverse trigonometric domains.',
    summaryNotes: `### Core Formulations:
- Addition: $\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$, $\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$.
- Double angles: $\\sin 2A = 2\\sin A\\cos A$, $\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$.
- General solutions:
  * $\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha$.
  * $\\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha$.
  * $\\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha$.
- Inverse Trigonometry:
  * $\\sin^{-1} x$: Domain $[-1, 1]$, Principal Range $[-\\pi/2, \\pi/2]$.
  * $\\cos^{-1} x$: Domain $[-1, 1]$, Principal Range $[0, \\pi]$.
  * $\\tan^{-1} x + \\cot^{-1} x = \\pi/2$.`,
    formulas: [
      { name: 'Inverse Tangent Addition', formula: '\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x + y}{1 - xy}\\right) \\quad (xy < 1)', explanation: 'Combines two inverse tangents into one.', units: 'Radians' },
      { name: 'Trigonometric General Solution', formula: '\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha', explanation: 'General solution of sine trigonometric equation for integer n.', units: 'Angle' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate tan^-1(1/2) + tan^-1(1/3).',
        solution: 'Since xy = (1/2)*(1/3) = 1/6 < 1: tan^-1((1/2 + 1/3) / (1 - 1/6)) = tan^-1((5/6) / (5/6)) = tan^-1(1) = pi/4.',
        keyInsight: 'Always verify condition xy < 1 before applying inverse tangent addition.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Prove identity: (sin 3A - sin A) / (cos A - cos 3A) = cot 2A.'],
      intermediate: ['Solve general solution for 2 cos^2 x + 3 sin x = 0.'],
      advanced: ['Evaluate sum: S = sum_{r=1}^n tan^-1(1 / (1 + r + r^2)) using telescoping series.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-10',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 10,
    title: 'Limits and Continuity',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Evaluation of limits, indeterminate forms (0/0, inf/inf, 1^inf), L\'Hopital rule, standard expansion limits, continuity at a point & interval, and Intermediate Value Theorem (IVT).',
    introduction: 'The gateway to calculus exploring behaviors as variables approach specific points.',
    summaryNotes: `### Core Formulations:
- Indeterminate forms: $\\frac{0}{0}, \\frac{\\infty}{\\infty}, 0 \\times \\infty, \\infty - \\infty, 1^\\infty, 0^0, \\infty^0$.
- Standard Limits:
  * $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, $\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$.
  * $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$, $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$.
  * $1^\\infty$ form: $\\lim_{x \\to a} f(x)^{g(x)} = e^{\\lim_{x \\to a} g(x)(f(x) - 1)}$.
- Continuity: $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$ (LHL = RHL = Value).`,
    formulas: [
      { name: 'Exponential Indeterminate Limit (1^inf)', formula: '\\lim f(x)^{g(x)} = e^{\\lim g(x)(f(x) - 1)}', explanation: 'Standard evaluation shortcut for 1 to the power infinity indeterminate forms.', units: 'Limit value' },
      { name: 'Standard Sine Limit', formula: '\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1', explanation: 'Angle x must be measured in radians.', units: 'Ratio' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate lim (x -> 0) (1 + 2x)^(1/x).',
        solution: 'Form is 1^infinity. Result = exp(lim x->0 (1/x) * ((1 + 2x) - 1)) = exp(lim x->0 (1/x) * (2x)) = e^2.',
        keyInsight: 'Convert 1^inf limits into e^[lim g(x)(f(x)-1)] immediately.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Evaluate lim (x -> 0) (sin 5x) / (3x).'],
      intermediate: ['Determine values of a and b so that f(x) is continuous everywhere.'],
      advanced: ['Evaluate lim (x -> 0) (x cos x - sin x) / x^3 using Taylor expansion.']
    },
    quizQuestionIds: ['q-math-03']
  },
  {
    id: 'math-11',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 11,
    title: 'Differentiation',
    stage: 'foundation',
    classLevel: 'Class 12',
    totalConcepts: 8,
    durationHours: 5.0,
    description: 'Derivative as rate of change, differentiability implies continuity, product rule, quotient rule, chain rule, implicit differentiation, parametric differentiation, and logarithmic differentiation.',
    introduction: 'Calculates instantaneous rates of variation and tangent slopes.',
    summaryNotes: `### Core Formulations:
- Differentiability Condition: Left hand derivative (LHD) = Right hand derivative (RHD).
  $$f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$
- Chain Rule: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$.
- Parametric: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$, $\\frac{d^2 y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{dt}{dx}$.
- Logarithmic Differentiation: For $y = [f(x)]^{g(x)}$, take $\\ln y = g(x)\\ln f(x)$ and differentiate.`,
    formulas: [
      { name: 'Parametric Second Derivative', formula: '\\frac{d^2 y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{1}{\\frac{dx}{dt}}', explanation: 'Crucial equation preventing common mistake of dividing d2y/dt2 by d2x/dt2.', units: 'Derivative' },
      { name: 'Product Rule', formula: '(u v)\' = u\' v + u v\'', explanation: 'Derivative of product of two functions.', units: 'Rule' }
    ],
    solvedExamples: [
      {
        question: 'If x = a cos(theta), y = a sin(theta), find d^2y/dx^2.',
        solution: 'dy/dx = (a cos theta) / (-a sin theta) = -cot(theta). d^2y/dx^2 = d/d(theta)[-cot theta] * (d theta/dx) = csc^2(theta) * (1 / (-a sin theta)) = -1 / (a sin^3 theta).',
        keyInsight: 'Remember to multiply by d(theta)/dx when taking the second derivative of parametric functions.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Differentiate y = x^(sin x) with respect to x.'],
      intermediate: ['If x^y + y^x = c, find dy/dx using implicit differentiation.'],
      advanced: ['Check differentiability of f(x) = |x - 1| + |x - 2| at x = 1 and x = 2.']
    },
    quizQuestionIds: ['q-math-03']
  },
  {
    id: 'math-12',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 12,
    title: 'Applications of Derivatives',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.0,
    description: 'Rate of change, tangents and normals, Rolle theorem, Lagrange Mean Value Theorem (LMVT), monotonicity (strictly increasing/decreasing), and maxima-minima optimization.',
    introduction: 'Applies derivatives to geometric tangents, physical rates, and finding peak optimal values.',
    summaryNotes: `### Core Formulations:
- Tangent & Normal: Slope of tangent $m_T = f\'(x_0)$, Slope of normal $m_N = -\\frac{1}{f\'(x_0)}$.
  * Equation: $y - y_0 = m(x - x_0)$.
- Monotonicity:
  * Strictly increasing on $[a, b]$: $f\'(x) > 0$.
  * Strictly decreasing on $[a, b]$: $f\'(x) < 0$.
- Mean Value Theorems:
  * Rolle\'s Theorem: If $f(a)=f(b)$ on continuous/differentiable $[a, b]$, there exists $c \\in (a, b)$ where $f\'(c) = 0$.
  * LMVT: $\\frac{f(b) - f(a)}{b - a} = f\'(c)$ for some $c \\in (a, b)$.
- Maxima & Minima: Critical points $f\'(c) = 0$.
  * If $f\'\'(c) < 0$: Local Maximum.
  * If $f\'\'(c) > 0$: Local Minimum.`,
    formulas: [
      { name: 'Lagrange Mean Value Theorem', formula: '\\frac{f(b) - f(a)}{b - a} = f\'(c) \\quad (c \\in (a, b))', explanation: 'Secant slope equals instantaneous tangent slope at intermediate point.', units: 'Theorem' },
      { name: 'Second Derivative Test', formula: 'f\'(c) = 0 \\text{ and } f\'\'(c) < 0 \\implies x=c \\text{ is local maximum}', explanation: 'Curvature test identifying concave downward peak.', units: 'Test' }
    ],
    solvedExamples: [
      {
        question: 'Find the maximum value of f(x) = x^3 - 3x + 2 on the interval [0, 2].',
        solution: 'f\'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 ==> x = 1 (in [0, 2]). Evaluate at boundary and critical points: f(0) = 2, f(1) = 1 - 3 + 2 = 0, f(2) = 8 - 6 + 2 = 4. Maximum value is 4 at x = 2.',
        keyInsight: 'Always evaluate function at the interval endpoints as well as internal critical points.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find equation of tangent to curve y = x^2 - 2x + 7 at (2, 7).'],
      intermediate: ['Prove that f(x) = x - sin x is strictly increasing for all real x.'],
      advanced: ['Find dimensions of cylinder of maximum volume that can be inscribed in sphere of radius R.']
    },
    quizQuestionIds: ['q-math-03']
  },
  {
    id: 'math-13',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 13,
    title: 'Indefinite Integration',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 7.5,
    description: 'Antiderivatives, substitution method, integration by parts (ILATE), partial fractions, trigonometric integrals, and standard algebraic reduction forms.',
    introduction: 'The reverse process of differentiation and foundational technique for calculating areas and differential equations.',
    summaryNotes: `### Core Formulations:
- Integration by Parts (ILATE priority: Inverse, Log, Algebraic, Trig, Exponential):
  $$\\int u v\\,dx = u\\int v\\,dx - \\int \\left(u\' \\int v\\,dx\\right)dx$$
- Classic Exponential Identity:
  $$\\int e^x [f(x) + f\'(x)]\\,dx = e^x f(x) + C$$
- Standard Forms:
  * $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$.
  * $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\frac{x}{a} + C$.
  * $\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right| + C$.`,
    formulas: [
      { name: 'Exponential Integration by Parts Identity', formula: '\\int e^x [f(x) + f\'(x)]\\,dx = e^x f(x) + C', explanation: 'High-frequency JEE shortcut for evaluating exponential quotients.', units: 'Indefinite Integral' },
      { name: 'Integration by Parts (ILATE)', formula: '\\int u \\cdot v\\,dx = u\\int v\\,dx - \\int (u\' \\int v\\,dx)dx', explanation: 'Integrates product of two differentiable functions.', units: 'Rule' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate integral of e^x [ (1 + x) / (1 + x)^2 ] dx = integral of e^x [ 1/(1+x) - 1/(1+x)^2 ] dx.',
        solution: 'Let f(x) = 1/(1+x). Then f\'(x) = -1/(1+x)^2. Matches form int e^x [f(x) + f\'(x)] dx = e^x f(x) + C = e^x / (1 + x) + C.',
        keyInsight: 'Recognizing e^x [f(x) + f\'(x)] saves minutes of tedious algebra.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Evaluate int (2x + 5)/(x^2 + 5x + 6) dx.'],
      intermediate: ['Evaluate int x * tan^-1(x) dx using integration by parts.'],
      advanced: ['Evaluate int dx / (x^4 + 1) by dividing numerator and denominator by x^2.']
    },
    quizQuestionIds: ['q-math-04']
  },
  {
    id: 'math-14',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 14,
    title: 'Definite Integration',
    stage: 'advanced',
    classLevel: 'Class 12',
    totalConcepts: 12,
    durationHours: 8.0,
    description: 'Fundamental Theorem of Calculus, King property, periodic function integrals, Leibniz differentiation under integral sign, area under curves, and limit of a sum.',
    introduction: 'The most rewarding calculus topic in JEE Advanced, packed with symmetric shortcut properties.',
    summaryNotes: `### Core Formulations:
1. **The King Property:** $\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx$.
2. **Odd and Even Functions:** $\\int_{-a}^a f(x)\\,dx = 2\\int_0^a f(x)\\,dx$ (if even), or $0$ (if odd).
3. **Leibniz Differentiation Rule:**
   $$\\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)} f(t)\\,dt\\right] = f(v(x))\\cdot v\'(x) - f(u(x))\\cdot u\'(x)$$
4. **Standard Result:** $\\int_0^{\\pi/2} \\ln(\\sin x)\\,dx = -\\frac{\\pi}{2}\\ln 2$.
5. **Area under Curves:** $A = \\int_a^b [y_{upper} - y_{lower}]\\,dx$.`,
    formulas: [
      { name: 'The King Property', formula: '\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx', explanation: 'Flips the integral across midpoint, simplifying symmetrical quotients.', units: 'Definite Integral' },
      { name: 'Leibniz Differentiation Rule', formula: '\\frac{d}{dx}\\int_{u(x)}^{v(x)} f(t)dt = f(v)v\' - f(u)u\'', explanation: 'Differentiates definite integrals with variable limits of integration.', units: 'Derivative' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate I = int_0^(pi/2) [sqrt(sin x) / (sqrt(sin x) + sqrt(cos x))] dx.',
        solution: 'Apply King property with a+b-x = pi/2 - x: I = int_0^(pi/2) [sqrt(cos x) / (sqrt(cos x) + sqrt(sin x))] dx. Adding original I + King I: 2I = int_0^(pi/2) 1 dx = pi/2 ==> I = pi/4.',
        keyInsight: 'King property adds numerator and denominator to yield a constant integrand 1.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Evaluate int_0^pi x sin x dx.'],
      intermediate: ['Find the area bounded by parabolas y^2 = 4ax and x^2 = 4ay.'],
      advanced: ['If f(x) = int_0^(x^2) sqrt(1 + t^3) dt, find f\'(1) using Leibniz rule.']
    },
    quizQuestionIds: ['q-math-04']
  },
  {
    id: 'math-15',
    subject: 'Mathematics',
    category: 'Calculus',
    order: 15,
    title: 'Differential Equations',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Order and degree, variable separable method, homogeneous differential equations, linear differential equations of first order (Integrating Factor), and orthogonal trajectories.',
    introduction: 'Mathematical models connecting dynamic physical rates to spatial coordinates.',
    summaryNotes: `### Core Formulations:
- Order: Highest derivative present. Degree: Power of highest derivative (when equation is polynomial in derivatives).
- Variable Separable: $f(x)\\,dx = g(y)\\,dy \\implies \\int f(x)\\,dx = \\int g(y)\\,dy + C$.
- Homogeneous Equation: $\\frac{dy}{dx} = f(y/x)$. Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$.
- Linear Differential Equation:
  $$\\frac{dy}{dx} + P(x)y = Q(x)$$
  * Integrating Factor: $I.F. = e^{\\int P(x)\\,dx}$.
  * Solution: $y \\cdot (I.F.) = \\int Q(x) \\cdot (I.F.)\\,dx + C$.`,
    formulas: [
      { name: 'Linear Integrating Factor', formula: 'I.F. = e^{\\int P(x)\\,dx}', explanation: 'Multiplying factor that makes left-hand side an exact derivative d/dx[y * I.F.].', units: 'Factor' },
      { name: 'Linear Differential Equation Solution', formula: 'y \\cdot (I.F.) = \\int Q(x) \\cdot (I.F.)\\,dx + C', explanation: 'General closed-form solution of first order linear ODE.', units: 'Solution' }
    ],
    solvedExamples: [
      {
        question: 'Solve dy/dx + (1/x)y = x^2 (x > 0).',
        solution: 'P(x) = 1/x, Q(x) = x^2. I.F. = exp(int 1/x dx) = exp(ln x) = x. Solution: y * x = int x^2 * x dx = int x^3 dx = x^4 / 4 + C ==> y = x^3 / 4 + C/x.',
        keyInsight: 'exp(ln x) = x simplifies the integrating factor instantly.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find order and degree of (d2y/dx2)^3 + (dy/dx)^4 + y = 0.'],
      intermediate: ['Solve (x + y) dy/dx = 1 using linear form dx/dy - x = y.'],
      advanced: ['Solve homogeneous equation (x^2 + y^2)dx - 2xy dy = 0.']
    },
    quizQuestionIds: ['q-math-05']
  },
  {
    id: 'math-16',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    order: 16,
    title: 'Coordinate Geometry',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 8,
    durationHours: 4.5,
    description: 'Cartesian coordinate system, distance formula, section formula, area of triangle, locus problems, and translation & rotation of axes.',
    introduction: 'The bridge connecting algebra and 2D geometry.',
    summaryNotes: `### Core Formulations:
- Distance: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
- Section Formula: $\\left(\\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}\\right)$.
- Triangle Area: $\\text{Area} = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$.
- Centroid: $\\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$.
- Translation of Axes: If origin shifts to $(h, k)$, $x = X + h$, $y = Y + k$.`,
    formulas: [
      { name: 'Section Formula', formula: 'P = \\left(\\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}\\right)', explanation: 'Coordinates dividing line segment in ratio m : n internally.', units: 'Point (x, y)' },
      { name: 'Triangle Coordinate Area', formula: '\\text{Area} = \\frac{1}{2}|\\det[x_i, y_i, 1]|', explanation: 'Determinant formulation for 2D triangle area.', units: 'Square units' }
    ],
    solvedExamples: [
      {
        question: 'Find locus of a point whose distance from (2, 0) is equal to its distance from y-axis.',
        solution: 'Let P(h, k). Distance from (2, 0) = sqrt((h - 2)^2 + k^2). Distance from y-axis = |h|. Equating: (h - 2)^2 + k^2 = h^2 ==> h^2 - 4h + 4 + k^2 = h^2 ==> k^2 = 4h - 4. Replacing (h, k) with (x, y): y^2 = 4(x - 1) (a parabola!).',
        keyInsight: 'Standard definition of parabola: locus of point equidistant from focus and directrix.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find ratio in which line 2x + 3y - 5 = 0 divides segment joining (1, 2) and (3, 4).'],
      intermediate: ['Find centroid, circumcenter, and orthocenter coordinates for triangle with vertices (0,0), (6,0), (0,8).'],
      advanced: ['Determine locus of point P such that sum of squares of distances from vertices of square is constant.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-17',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    order: 17,
    title: 'Straight Lines',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Slope of line, various forms (slope-intercept, intercept, normal form), angle between lines, perpendicular distance, family of lines, and pair of straight lines.',
    introduction: 'First degree polynomial equations in x and y representing straight lines.',
    summaryNotes: `### Core Formulations:
- Slope $m = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1}$.
- Forms:
  * Slope-intercept: $y = mx + c$.
  * Intercept form: $\\frac{x}{a} + \\frac{y}{b} = 1$.
  * Normal form: $x\\cos\\alpha + y\\sin\\alpha = p$.
- Angle between lines: $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$.
  * Parallel: $m_1 = m_2$.
  * Perpendicular: $m_1 m_2 = -1$.
- Perpendicular distance from $(x_1, y_1)$ to $ax + by + c = 0$: $d = \\frac{|a x_1 + b y_1 + c|}{\\sqrt{a^2 + b^2}}$.
- Distance between parallel lines: $d = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}$.`,
    formulas: [
      { name: 'Perpendicular Distance from Point to Line', formula: 'd = \\frac{|a x_1 + b y_1 + c|}{\\sqrt{a^2 + b^2}}', explanation: 'Shortest Euclidean distance from point (x1, y1) to line ax + by + c = 0.', units: 'Length' },
      { name: 'Distance Between Parallel Lines', formula: 'd = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}', explanation: 'Constant perpendicular gap separating two parallel lines.', units: 'Length' }
    ],
    solvedExamples: [
      {
        question: 'Find distance between parallel lines 3x + 4y - 9 = 0 and 6x + 8y + 15 = 0.',
        solution: 'Rewrite second line: divide by 2 ==> 3x + 4y + 7.5 = 0. Distance d = |c1 - c2| / sqrt(a^2 + b^2) = |-9 - 7.5| / sqrt(3^2 + 4^2) = 16.5 / 5 = 3.3 units.',
        keyInsight: 'Make coefficients of x and y identical before subtracting constant terms c1 and c2.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find angle between lines y = sqrt(3)x + 1 and sqrt(3)y = x + 2.'],
      intermediate: ['Find image of point (1, 2) with respect to line mirror x - y + 1 = 0.'],
      advanced: ['Find condition that general equation ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0 represents pair of straight lines.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-18',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    order: 18,
    title: 'Circles',
    stage: 'intermediate',
    classLevel: 'Class 11',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Standard and general equation of circle, diametric form, position of point, line and circle intersection, tangent equations (point, slope form), and chord of contact.',
    introduction: 'Locus of points equidistant from a fixed center point.',
    summaryNotes: `### Core Formulations:
- General Equation: $x^2 + y^2 + 2gx + 2fy + c = 0$.
  * Center: $(-g, -f)$, Radius: $r = \\sqrt{g^2 + f^2 - c}$.
- Diametric form: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$.
- Tangency Condition: Line $y = mx + c$ touches circle $x^2 + y^2 = a^2$ if $c^2 = a^2(1 + m^2)$.
- Tangent at $(x_1, y_1)$: $x x_1 + y y_1 = a^2$ ($T = 0$).
- Chord of contact from $(x_1, y_1)$: $T = 0$.
- Director Circle: Circle locus of perpendicular tangents $x^2 + y^2 = 2a^2$.`,
    formulas: [
      { name: 'Circle Tangency Condition', formula: 'c^2 = a^2 (1 + m^2)', explanation: 'Condition for line y = mx + c to be tangent to circle x^2 + y^2 = a^2.', units: 'Condition' },
      { name: 'Director Circle Equation', formula: 'x^2 + y^2 = 2 a^2', explanation: 'Locus of intersection points of mutually perpendicular tangents to circle.', units: 'Curve equation' }
    ],
    solvedExamples: [
      {
        question: 'Find the radius and center of circle 2x^2 + 2y^2 - 8x + 12y - 24 = 0.',
        solution: 'Divide by 2: x^2 + y^2 - 4x + 6y - 12 = 0. Here 2g = -4 ==> g = -2, 2f = 6 ==> f = 3, c = -12. Center = (-g, -f) = (2, -3). Radius r = sqrt(g^2 + f^2 - c) = sqrt(4 + 9 - (-12)) = sqrt(25) = 5.',
        keyInsight: 'Ensure coefficient of x^2 and y^2 is 1 before reading values of g and f.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find equation of circle with center (3, -2) and passing through origin.'],
      intermediate: ['Find length of tangent drawn from (5, 4) to circle x^2 + y^2 - 4x - 6y - 12 = 0.'],
      advanced: ['Determine equation of common tangents to circles x^2 + y^2 = 4 and x^2 + y^2 - 6x - 8y + 24 = 0.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-19',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    order: 19,
    title: 'Conic Sections',
    stage: 'advanced',
    classLevel: 'Class 11',
    totalConcepts: 14,
    durationHours: 8.5,
    description: 'Parabola, Ellipse, and Hyperbola standard equations, eccentricity (e), focus-directrix property, parametric coordinates, tangents and normals, and director circles.',
    introduction: 'Sections formed by cutting a double circular cone with plane surfaces.',
    summaryNotes: `### Unified Conic Summary:
- **Parabola ($e = 1$):** $y^2 = 4ax$.
  * Focus: $(a, 0)$, Directrix: $x = -a$, Latus Rectum = $4a$.
  * Tangent in slope form: $y = mx + a/m$.
- **Ellipse ($e < 1$):** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$).
  * $b^2 = a^2(1 - e^2)$, Eccentricity: $e = \\sqrt{1 - b^2/a^2}$.
  * Foci: $(\\pm ae, 0)$, Directrices: $x = \\pm a/e$.
  * Tangent: $y = mx \\pm \\sqrt{a^2 m^2 + b^2}$.
- **Hyperbola ($e > 1$):** $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$.
  * $b^2 = a^2(e^2 - 1)$, Eccentricity: $e = \\sqrt{1 + b^2/a^2}$.
  * Asymptotes: $y = \\pm \\frac{b}{a}x$.`,
    formulas: [
      { name: 'Ellipse Eccentricity Relation', formula: 'b^2 = a^2 (1 - e^2)', explanation: 'Relates semi-major axis a, semi-minor axis b, and eccentricity e.', units: 'Geometric relation' },
      { name: 'Parabola Tangency in Slope Form', formula: 'y = mx + \\frac{a}{m}', explanation: 'Slope form tangent to parabola y^2 = 4ax.', units: 'Line' }
    ],
    solvedExamples: [
      {
        question: 'Find eccentricity and foci of ellipse x^2 / 25 + y^2 / 16 = 1.',
        solution: 'a^2 = 25 ==> a = 5, b^2 = 16 ==> b = 4. e = sqrt(1 - b^2/a^2) = sqrt(1 - 16/25) = sqrt(9/25) = 3/5 = 0.6. Foci = (+-ae, 0) = (+-5*(3/5), 0) = (+-3, 0).',
        keyInsight: 'In an ellipse, distance from center to foci is ae = 3.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find focus and latus rectum of parabola y^2 = 12x.'],
      intermediate: ['Find equation of tangent to ellipse x^2/9 + y^2/4 = 1 which is parallel to line 2x + y = 3.'],
      advanced: ['Prove that locus of point of intersection of perpendicular tangents to hyperbola x^2/a^2 - y^2/b^2 = 1 is director circle x^2 + y^2 = a^2 - b^2.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-20',
    subject: 'Mathematics',
    category: 'Vectors & 3D',
    order: 20,
    title: 'Three-Dimensional Geometry',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Direction cosines (l, m, n) and direction ratios, equation of straight line in 3D space, angle between lines, shortest distance between skew lines, and coplanarity.',
    introduction: 'Spatial line and plane geometry using vector and Cartesian projections.',
    summaryNotes: `### Core Formulations:
- Direction Cosines: $l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma \\implies l^2 + m^2 + n^2 = 1$.
- 3D Line Equation:
  * Vector: $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$.
  * Cartesian: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$.
- Angle between lines: $\\cos\\theta = \\frac{\\vec{b}_1 \\cdot \\vec{b}_2}{|\\vec{b}_1||\\vec{b}_2|}$.
- Shortest Distance between Skew Lines:
  $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$
- Coplanarity: Lines are coplanar if $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$.`,
    formulas: [
      { name: 'Shortest Distance Between Skew Lines', formula: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}', explanation: 'Computes minimum distance between two non-intersecting, non-parallel 3D lines.', units: 'Length' },
      { name: 'Direction Cosines Invariant', formula: 'l^2 + m^2 + n^2 = 1', explanation: 'Sum of squares of direction cosines equals unity.', units: 'Invariant' }
    ],
    solvedExamples: [
      {
        question: 'Find the angle between lines with direction ratios (1, 1, 2) and (sqrt(3)-1, -sqrt(3)-1, 4).',
        solution: 'b1 . b2 = 1*(sqrt(3)-1) + 1*(-sqrt(3)-1) + 2*(4) = sqrt(3)-1 - sqrt(3)-1 + 8 = 6. |b1| = sqrt(1+1+4) = sqrt(6). |b2| = sqrt((sqrt(3)-1)^2 + (-sqrt(3)-1)^2 + 16) = sqrt(8 + 16) = sqrt(24) = 2*sqrt(6). cos theta = 6 / (sqrt(6) * 2*sqrt(6)) = 6 / 12 = 1/2 ==> theta = 60 deg (pi/3).',
        keyInsight: 'Dot product of direction vectors divided by product of magnitudes gives angle directly.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find direction cosines of a line making angles 90, 60, 30 with x, y, z axes.'],
      intermediate: ['Calculate shortest distance between lines r = (i + j) + lambda(2i - j + k) and r = (2i + j - k) + mu(3i - 5j + 2k).'],
      advanced: ['Find foot of perpendicular drawn from point (1, 2, 3) to line (x-6)/3 = (y-7)/2 = (z-7)/-2.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-21',
    subject: 'Mathematics',
    category: 'Vectors & 3D',
    order: 21,
    title: 'Vectors',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.0,
    description: 'Vector addition, scalar dot product, vector cross product, scalar triple product (box product [a b c]), vector triple product, and geometric applications to area and volume.',
    introduction: 'Vector operations underpin mechanics, spatial geometry, and electromagnetic theory.',
    summaryNotes: `### Core Formulations:
- Dot Product: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$. Projection of $\\vec{a}$ on $\\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.
- Cross Product: $\\vec{a} \\times \\vec{b} = (|\\vec{a}||\\vec{b}|\\sin\\theta)\\hat{n}$. Area of triangle = $\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$.
- Scalar Triple Product: $[\\vec{a}\\,\\vec{b}\\,\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\det[a_i, b_i, c_i]$.
  * Represents volume of parallelepiped.
  * Vectors are coplanar if $[\\vec{a}\\,\\vec{b}\\,\\vec{c}] = 0$.
- Vector Triple Product (BAC-CAB rule):
  $$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$$`,
    formulas: [
      { name: 'BAC-CAB Rule (Vector Triple Product)', formula: '\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}', explanation: 'Expands vector triple product into linear combination of vectors b and c.', units: 'Vector' },
      { name: 'Scalar Triple Product Volume', formula: 'V = |[\\vec{a}\\,\\vec{b}\\,\\vec{c}]| = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|', explanation: 'Volume of parallelepiped coterminous with vectors a, b, c.', units: 'Cubic units' }
    ],
    solvedExamples: [
      {
        question: 'Prove that vectors a = 2i - j + k, b = i + 2j - 3k, c = 3i - 4j + 5k are coplanar.',
        solution: 'Evaluate box product: det[[2, -1, 1], [1, 2, -3], [3, -4, 5]] = 2(10 - 12) + 1(5 + 9) + 1(-4 - 6) = 2(-2) + 14 - 10 = -4 + 14 - 10 = 0. Since box product is zero, vectors are coplanar.',
        keyInsight: 'Box product equals zero if and only if three vectors lie in the same plane.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find area of parallelogram with adjacent vectors a = 3i + j - 2k and b = i - 3j + 4k.'],
      intermediate: ['Simplify [a - b, b - c, c - a] using scalar triple product properties.'],
      advanced: ['If a, b, c are unit vectors with a + b + c = 0, calculate value of a.b + b.c + c.a.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-22',
    subject: 'Mathematics',
    category: 'Statistics & Probability',
    order: 22,
    title: 'Statistics',
    stage: 'foundation',
    classLevel: 'Class 11',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Measures of central tendency (mean, median), measures of dispersion (range, mean deviation, variance, standard deviation), and coefficient of variation.',
    introduction: 'A guaranteed 4-mark scoring chapter in JEE Main involving variance calculations.',
    summaryNotes: `### Core Formulations:
- Mean $\\bar{x} = \\frac{\\sum x_i}{n}$.
- Variance $\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2$.
- Standard Deviation $\\sigma = \\sqrt{\\text{Variance}}$.
- Shift of origin: Adding constant $c$ to each observation changes mean by $c$, but variance $\\sigma^2$ is unchanged!
- Scaling: Multiplying each observation by $k$ scales mean by $k$ and variance by $k^2$ (SD scales by $|k|$).`,
    formulas: [
      { name: 'Variance Formula', formula: '\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2', explanation: 'Fast computational formula for variance.', units: 'Square units' },
      { name: 'Coefficient of Variation', formula: 'CV = \\frac{\\sigma}{\\bar{x}} \\times 100', explanation: 'Measures relative dispersion independent of measurement units.', units: '%' }
    ],
    solvedExamples: [
      {
        question: 'The mean of 5 observations is 4 and variance is 5.2. If 3 of the observations are 1, 2, 6, find the other two.',
        solution: 'Let remaining numbers be a and b. Sum: 1 + 2 + 6 + a + b = 5 * 4 = 20 ==> a + b = 11. Sum of squares: sum x_i^2 / 5 - 4^2 = 5.2 ==> sum x_i^2 = 5 * 21.2 = 106. 1 + 4 + 36 + a^2 + b^2 = 106 ==> a^2 + b^2 = 65. Solving a+b=11 and a^2+b^2=65 gives (a,b) = (4, 7).',
        keyInsight: 'Set up simultaneous equations using sum of values and sum of squares.',
        difficulty: 'beginner'
      }
    ],
    practiceByTier: {
      beginner: ['Find mean and variance of first 10 natural numbers.'],
      intermediate: ['The mean and SD of 100 observations were 50 and 5. Later one observation 40 was found to be misread as 50. Find correct mean and SD.'],
      advanced: ['Prove that variance of first n natural numbers is (n^2 - 1) / 12.']
    },
    quizQuestionIds: ['q-math-01']
  },
  {
    id: 'math-23',
    subject: 'Mathematics',
    category: 'Statistics & Probability',
    order: 23,
    title: 'Probability',
    stage: 'intermediate',
    classLevel: 'Class 12',
    totalConcepts: 10,
    durationHours: 6.5,
    description: 'Axiomatic probability, addition and multiplication theorems, conditional probability P(A|B), independent events, total probability theorem, Bayes theorem, and Bernoulli trials binomial distribution.',
    introduction: 'Quantifies uncertainty in complex random experiments using conditioning and Bayes updates.',
    summaryNotes: `### Core Formulations:
- Addition Rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
- Conditional Probability: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ ($P(B) > 0$).
- Independent Events: $P(A \\cap B) = P(A) \\cdot P(B)$.
- **Bayes\' Theorem:**
  $$P(E_i | A) = \\frac{P(E_i)P(A | E_i)}{\\sum_{j=1}^k P(E_j)P(A | E_j)}$$
- Binomial Distribution: $P(X = r) = {}^n C_r p^r q^{n-r}$ ($q = 1 - p$).
  * Mean $= n p$, Variance $= n p q$.`,
    formulas: [
      { name: 'Bayes Theorem', formula: 'P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum P(E_j) P(A | E_j)}', explanation: 'Calculates posterior probability of cause E_i given evidence event A.', units: 'Probability' },
      { name: 'Binomial Probability Distribution', formula: 'P(X = r) = {}^n C_r p^r (1-p)^{n-r}', explanation: 'Probability of exactly r successes in n independent Bernoulli trials.', units: 'Probability' }
    ],
    solvedExamples: [
      {
        question: 'Bag A contains 3 red and 4 black balls. Bag B contains 5 red and 6 black balls. One ball is drawn from one of the bags and is red. Find probability it was drawn from Bag A.',
        solution: 'P(A) = P(B) = 1/2. P(Red|A) = 3/7, P(Red|B) = 5/11. Total P(Red) = 1/2*(3/7) + 1/2*(5/11) = 1/2*(33 + 35)/77 = 68/154 = 34/77. By Bayes: P(A|Red) = (1/2 * 3/7) / (34/77) = (3/14) * (77/34) = (3 * 11) / (2 * 34) = 33/68.',
        keyInsight: 'Bayes theorem updates prior probability using the likelihood of observing evidence.',
        difficulty: 'intermediate'
      }
    ],
    practiceByTier: {
      beginner: ['Two dice are rolled. Find probability that sum of numbers is 8.'],
      intermediate: ['A speaks truth in 75% cases, B in 80% cases. In what percentage of cases are they likely to contradict each other?'],
      advanced: ['An experiment succeeds twice as often as it fails. Find probability of at least 4 successes in 6 trials.']
    },
    quizQuestionIds: ['q-math-01']
  }
];
