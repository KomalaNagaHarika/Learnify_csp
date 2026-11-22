import { Chapter } from '../../types';

export const CLASS_11_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c11-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Kinematics',
    order: 1,
    title: 'Physical World, Units, Measurements and Kinematics',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Motion and Math Basics',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'SI units, dimensional analysis & principle of homogeneity, error propagation (vernier calipers, screw gauge), vectors (dot and cross products), 1D kinematics with calculus ($v = dx/dt, a = dv/dt$), 2D projectile motion, trajectory parabola, and relative velocity in 2D.',
    introduction: 'In competitive JEE and NEET, dimensional analysis is a master shortcut that eliminates incorrect options instantly. Combining vector algebra with differential calculus allows modeling complex projectile trajectories and multi-body interactions.',
    topics: [
      'Fundamental SI Units, Dimensional Formulas, and Principle of Homogeneity of Dimensions',
      'Applications of Dimensional Analysis: Checking equation correctness and deducing physical formulas',
      'Error Analysis: Absolute, relative, and percentage errors; Propagation of errors ($Z = A^p B^q / C^r$)',
      'Vector Algebra: Addition (Triangle & Parallelogram laws), Resolution into rectangular components, Dot Product ($\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$), and Cross Product ($\\vec{A} \\times \\vec{B} = AB\\sin\\theta \\,\\hat{n}$)',
      'Motion in 1D: Calculus formulations ($v = \\frac{dx}{dt}, a = \\frac{dv}{dt} = v\\frac{dv}{dx}$)',
      'Projectile Motion: Time of Flight ($T = \\frac{2u\\sin\\theta}{g}$), Maximum Height ($H = \\frac{u^2\\sin^2\\theta}{2g}$), Horizontal Range ($R = \\frac{u^2\\sin 2\\theta}{g}$)',
      'Equation of Projectile Trajectory: $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta} = x\\tan\\theta (1 - \\frac{x}{R})$',
      'Relative Velocity in 2D: River-Boat shortest path vs shortest time problems, Rain-Umbrella problems'
    ],
    summaryNotes: `### Core Mathematical Formulations:
1. **Error Propagation:**
   - If $Z = \\frac{A^p B^q}{C^r}$, maximum fractional error is:
     $$\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}$$
2. **Projectile Motion Formulas:**
   - **Time of Flight ($T$):** $T = \\frac{2u\\sin\\theta}{g}$
   - **Maximum Height ($H$):** $H = \\frac{u^2\\sin^2\\theta}{2g}$
   - **Horizontal Range ($R$):** $R = \\frac{u^2\\sin 2\\theta}{g}$ (Maximum range at $\\theta = 45^\\circ$: $R_{max} = \\frac{u^2}{g}$)
   - **Trajectory in terms of Range:** $y = x\\tan\\theta \\left(1 - \\frac{x}{R}\\right)$ (Extremely fast JEE solving tool!)
3. **River-Boat Shortcuts:**
   - Shortest time across river of width $d$: Steer perpendicular to flow ($t_{min} = d / v_{br}$).
   - Shortest path (Zero drift): Steer upstream at angle $\\sin\\alpha = v_r / v_{br}$.`,
    definitions: [
      'Principle of Homogeneity: The dimensions of each term on both sides of any valid physical equation must be identical.',
      'Scalar (Dot) Product: The algebraic product of the magnitudes of two vectors and the cosine of the angle between them.'
    ],
    formulas: [
      { name: 'Projectile Trajectory Range Form', formula: 'y = x\\tan\\theta \\left(1 - \\frac{x}{R}\\right)', explanation: 'Compact projectile equation relating coordinates to total horizontal range R.', units: 'm' },
      { name: 'Max Relative Error', formula: '\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}', explanation: 'Worst-case fractional uncertainty calculation.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'The percentage errors in measurement of mass, length, and time are 1%, 2%, and 3% respectively. Find the maximum percentage error in force.',
        solution: 'Force F = m * a = m * (L / T²) = m L T⁻².\nMax % error = %m + %L + 2*(%T) = 1% + 2% + 2*(3%) = 1 + 2 + 6 = 9%.',
        keyInsight: 'Powers always multiply fractional errors, and all terms sum in worst-case error analysis.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c11-p1-01',
        subject: 'Physics',
        chapterId: 'c11-phys-01',
        chapterTitle: 'Physical World, Units, Measurements and Kinematics',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'A projectile is launched with velocity u at angle θ to horizontal. At what angle is the horizontal range equal to the maximum height?',
        options: ['A) θ = 45°', 'B) tan θ = 4', 'C) tan θ = 2', 'D) tan θ = 1/4'],
        correctAnswer: 'B',
        explanation: 'Set R = H: (u² sin 2θ)/g = (u² sin²θ)/(2g) => 2 sin θ cos θ = (sin²θ)/2 => 4 cos θ = sin θ => tan θ = 4 (θ = arctan 4 ≈ 76°).',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Dynamics',
    order: 2,
    title: 'Laws of Motion & Friction',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Physical World, Units and Kinematics',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Newton’s laws in vector form, Free Body Diagrams (FBD), equilibrium of concurrent forces, connected bodies & Atwood machine, pseudo forces in non-inertial frames, static friction ($f_s \\le \\mu_s N$), kinetic friction ($f_k = \\mu_k N$), angle of repose, and circular dynamics (banking of roads: $v = \\sqrt{rg\\tan\\theta}$).',
    introduction: 'Solving complex multi-body systems in physics boils down to a single discipline: drawing accurate Free Body Diagrams (FBD). Isolating bodies and balancing components along orthogonal axes resolves connected pulleys, wedges, and banked racetrack curves.',
    topics: [
      'Inertial vs Non-Inertial Reference Frames and Pseudo Force ($-m\\vec{a}_{frame}$)',
      'Constructing Free Body Diagrams (FBD): Normal force, Gravitational pull, String tension',
      'Equilibrium of Concurrent Forces: Lami\'s Theorem ($\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$)',
      'Connected Bodies on Frictionless and Rough Inclined Planes',
      'Friction Laws: Static friction ($f_s \\le \\mu_s N$), Kinetic friction ($f_k = \\mu_k N$), Angle of Friction, Angle of Repose ($\\tan\\phi = \\mu$)',
      'Uniform and Non-Uniform Circular Motion: Centripetal Acceleration ($a_c = v^2/r = \\omega^2 r$)',
      'Dynamics of Circular Motion: Motion in a Vertical Circle (Critical speed at top $v_{top} = \\sqrt{gr}$, bottom $v_{bottom} = \\sqrt{5gr}$)',
      'Banking of Roads without and with Friction: Safe speed $v = \\sqrt{rg \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}}$'
    ],
    summaryNotes: `### Core Dynamic Equations:
1. **Atwood Machine (Two masses $m_1 > m_2$ over massless pulley):**
   $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2}, \\quad T = \\frac{2m_1m_2 g}{m_1 + m_2}$$
2. **Angle of Repose ($\\alpha$):**
   - The minimum angle of an inclined plane at which a body placed on it just begins to slide down:
     $$\\tan\\alpha = \\mu_s$$
3. **Motion in Vertical Circle (String length $R$):**
   - Minimum speed at topmost point for taut string: $v_{top} = \\sqrt{gR}$
   - Minimum speed at bottom to complete loop: $v_{bottom} = \\sqrt{5gR}$
   - Tension difference between bottom and top: $T_{bottom} - T_{top} = 6mg$!
4. **Ideal Banked Curve (Zero friction requirement):**
   $$v_{opt} = \\sqrt{rg\\tan\\theta}$$`,
    definitions: [
      'Pseudo Force: A fictitious inertial force (-m a) applied on an object when observed from an accelerated, non-inertial frame of reference to validate Newton\'s laws.',
      'Angle of Repose: The maximum angle of an inclined plane with the horizontal such that a body placed on it remains at rest without sliding.'
    ],
    formulas: [
      { name: 'Banked Road Optimum Speed', formula: 'v = \\sqrt{rg\\tan\\theta}', explanation: 'Speed at which lateral friction is zero on a banked road.', units: 'm/s' },
      { name: 'Vertical Loop Critical Speed', formula: 'v_{bottom} = \\sqrt{5gR}', explanation: 'Minimum bottom velocity to execute complete vertical loop.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'Two masses m₁ = 3 kg and m₂ = 2 kg are connected by a light string over a frictionless pulley. Find their common acceleration and string tension. (g = 10 m/s²)',
        solution: 'Acceleration a = [(m₁ - m₂)g] / (m₁ + m₂) = [(3 - 2) * 10] / (3 + 2) = 10 / 5 = 2 m/s².\nTension T = (2 * m₁ * m₂ * g) / (m₁ + m₂) = (2 * 3 * 2 * 10) / 5 = 120 / 5 = 24 N.',
        keyInsight: 'Use standard Atwood formulas: a = (Δm/Σm)g and T = 2m₁m₂g/(m₁+m₂).',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c11-p2-01',
        subject: 'Physics',
        chapterId: 'c11-phys-02',
        chapterTitle: 'Laws of Motion & Friction',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'A body of mass m is whirled in a vertical circle of radius R. The difference between the tension in the string at the lowest point and the highest point is:',
        options: ['A) 2 mg', 'B) 4 mg', 'C) 6 mg', 'D) mg'],
        correctAnswer: 'C',
        explanation: 'At the bottom, T_b = mg + m(v_b²)/R. At the top, T_t = m(v_t²)/R - mg. By conservation of energy v_b² = v_t² + 4gR. Substituting gives T_b - T_t = 6mg identically.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Work & Energy',
    order: 3,
    title: 'Work, Energy and Power',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Laws of Motion & Friction',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Work done by constant and variable forces ($W = \\int \\vec{F} \\cdot d\\vec{r}$), Work-Energy Theorem ($W_{net} = \\Delta K$), conservative vs non-conservative forces, potential energy of a spring ($U = \\frac{1}{2}kx^2$), potential energy gradient ($F = -dU/dx$), elastic and inelastic collisions in 1D and 2D, and coefficient of restitution ($e$).',
    introduction: 'When forces vary continuously with displacement—such as stretching a non-linear spring or gravitational pull across space—calculus integration replaces elementary multiplication. The Work-Energy Theorem provides an alternate scalar pathway to solve dynamics without computing intermediate accelerations.',
    topics: [
      'Work Done by Variable Force: $W = \\int_{x_i}^{x_f} F(x) \\,dx$ (Area under F-x curve)',
      'The Work-Energy Theorem: $W_{net} = \\Delta K = K_f - K_i$ (Universal for both constant & variable forces)',
      'Conservative Forces (Path independent, $\\oint \\vec{F}\\cdot d\\vec{r} = 0$) vs Non-Conservative Forces (Friction)',
      'Potential Energy and Force Relation: $F = -\\frac{dU}{dx}$ (Negative gradient of potential energy)',
      'Equilibrium Analysis from $U(x)$ Curve: Stable ($d^2U/dx^2 > 0$), Unstable ($d^2U/dx^2 < 0$), Neutral ($d^2U/dx^2 = 0$)',
      'Potential Energy of a Compressed/Stretched Spring: $U = \\frac{1}{2}kx^2$',
      'Collisions in 1D: Elastic ($e = 1$), Inelastic ($0 < e < 1$), Perfectly Inelastic ($e = 0$, stick together)',
      'Coefficient of Restitution: $e = \\frac{\\text{Velocity of Separation}}{\\text{Velocity of Approach}} = \\frac{v_2 - v_1}{u_1 - u_2}$'
    ],
    summaryNotes: `### Core Energy Relations:
1. **Work-Energy Theorem:**
   $$W_{all\\,forces} = \\Delta K$$
   - Work done by all forces (conservative, non-conservative, external, pseudo) equals the change in kinetic energy of the system.
2. **Spring Mechanics:**
   - Restoring force: $F = -kx$ (Hooke\'s Law).
   - Elastic potential energy: $U = \\frac{1}{2}kx^2$.
3. **1D Elastic Collision ($e = 1$):**
   - Final velocities after collision of $m_1$ and $m_2$:
     $$v_1 = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)u_1 + \\left(\\frac{2m_2}{m_1 + m_2}\\right)u_2$$
     $$v_2 = \\left(\\frac{2m_1}{m_1 + m_2}\\right)u_1 + \\left(\\frac{m_2 - m_1}{m_1 + m_2}\\right)u_2$$
   - Special Case: If **$m_1 = m_2$**, colliding bodies **exchange velocities completely**!`,
    definitions: [
      'Work-Energy Theorem: The net work done by all acting forces on a particle equals the change in its kinetic energy.',
      'Coefficient of Restitution (e): The scalar ratio of relative speed of separation after collision to relative speed of approach before collision.'
    ],
    formulas: [
      { name: 'Work-Energy Theorem', formula: 'W_{net} = \\Delta K = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2', explanation: 'Total work equals change in kinetic energy.', units: 'Joules (J)' },
      { name: 'Coefficient of Restitution', formula: 'e = \\frac{v_2 - v_1}{u_1 - u_2}', explanation: 'Index of elasticity of collision.', units: 'Dimensionless (0 to 1)' }
    ],
    solvedExamples: [
      {
        question: 'A ball of mass m moving with velocity u collides elastically head-on with an identical stationary ball of mass m. What are the final velocities of the balls?',
        solution: 'For elastic collision (e = 1) between identical masses (m₁ = m₂ = m) where u₂ = 0:\nApplying velocity exchange rule: v₁ = u₂ = 0, and v₂ = u₁ = u.\nThe first ball comes to a complete halt, and the second ball moves off with initial velocity u.',
        keyInsight: 'Identical masses exchange velocities completely in head-on elastic collisions.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c11-p3-01',
        subject: 'Physics',
        chapterId: 'c11-phys-03',
        chapterTitle: 'Work, Energy and Power',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'The potential energy of a particle in a force field is given by U(x) = A/x² - B/x, where A and B are positive constants. The equilibrium position x_eq of the particle is:',
        options: ['A) 2A / B', 'B) A / B', 'C) B / 2A', 'D) A / 2B'],
        correctAnswer: 'A',
        explanation: 'At equilibrium, F = -dU/dx = 0. dU/dx = -2A/x³ + B/x² = 0 => B/x² = 2A/x³ => x = 2A / B.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Rotational Dynamics',
    order: 4,
    title: 'System of Particles and Rotational Motion',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Work, Energy and Power',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Centre of mass of discrete and continuous systems, motion of centre of mass, linear momentum conservation, torque ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$), angular momentum ($\\vec{L} = \\vec{r} \\times \\vec{p}$), conservation of angular momentum, moment of inertia ($I = \\sum m_i r_i^2 = \\int r^2 dm$), radius of gyration ($k$), Parallel and Perpendicular axes theorems, rotational kinetic energy, and pure rolling motion on flat and inclined surfaces.',
    introduction: 'Linear motion has single-mass points; real rigid bodies rotate, spin, and tumble. Rotational dynamics maps linear quantities to rotational counterparts: mass becomes Moment of Inertia, force becomes Torque, and velocity becomes Angular Velocity.',
    topics: [
      'Centre of Mass (COM): Position vector $\\vec{R}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{\\int \\vec{r}\\,dm}{M}$',
      'Velocity and Acceleration of COM: Internal forces cannot change the motion of COM',
      'Torque (Moment of Force): $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I\\vec{\\alpha}$',
      'Angular Momentum: $\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}$; Principle of Conservation of Angular Momentum ($\\vec{\\tau}_{ext} = 0 \\implies I_1\\omega_1 = I_2\\omega_2$)',
      'Moment of Inertia (Rotational Inertia): Ring ($MR^2$), Disc ($\\frac{1}{2}MR^2$), Solid Cylinder ($\\frac{1}{2}MR^2$), Solid Sphere ($\\frac{2}{5}MR^2$), Hollow Sphere ($\\frac{2}{3}MR^2$)',
      'Radius of Gyration: $I = M k^2$',
      'Theorems of Moment of Inertia: Parallel Axis Theorem ($I = I_{cm} + M d^2$) and Perpendicular Axis Theorem ($I_z = I_x + I_y$ for planar laminas)',
      'Kinematics and Dynamics of Pure Rolling: $v_{cm} = \\omega R$, Kinetic Energy $K_{total} = \\frac{1}{2}M v_{cm}^2 (1 + \\frac{k^2}{R^2})$',
      'Rolling Down an Inclined Plane: Acceleration $a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$'
    ],
    summaryNotes: `### Linear vs Rotational Analogies:
| Linear Quantity | Rotational Analog | Relation |
| :--- | :--- | :--- |
| Displacement $x$ | Angular displacement $\\theta$ | $s = r\\theta$ |
| Velocity $v$ | Angular velocity $\\omega$ | $v = r\\omega$ |
| Acceleration $a$ | Angular acceleration $\\alpha$ | $a_t = r\\alpha$ |
| Mass $M$ | Moment of Inertia $I$ | $I = M k^2$ |
| Force $F$ | Torque $\\tau$ | $\\tau = I\\alpha$ |
| Momentum $p = mv$ | Angular Momentum $L$ | $L = I\\omega$ |
| Work $W = F s$ | Work $W = \\tau \\theta$ | $W = \\int \\tau d\\theta$ |
| Kinetic Energy $\\frac{1}{2}mv^2$ | Rotational KE $\\frac{1}{2}I\\omega^2$ | $K_{rot} = \\frac{1}{2}I\\omega^2$ |
### Rolling Down an Incline:
$$a = \\frac{g\\sin\\theta}{1 + \\frac{k^2}{R^2}}$$
- Smaller $k^2/R^2 \\implies$ Faster acceleration!
- Race down incline order: **Solid Sphere ($2/5=0.4$) > Solid Cylinder ($1/2=0.5$) > Hollow Sphere ($2/3=0.67$) > Ring ($1.0$)**.`,
    definitions: [
      'Moment of Inertia: The rotational inertia of a rigid body resisting angular acceleration, defined as the integral of mass elements multiplied by the square of their distance from the axis of rotation.',
      'Pure Rolling: Motion without slipping in which the point of contact of the rolling body with the surface has zero instantaneous velocity: v_cm = ωR.'
    ],
    formulas: [
      { name: 'Conservation of Angular Momentum', formula: 'I_1 \\omega_1 = I_2 \\omega_2', explanation: 'Holds when external torque is zero.', units: 'kg·m²/s' },
      { name: 'Pure Rolling Incline Acceleration', formula: 'a = \\frac{g\\sin\\theta}{1 + k^2/R^2}', explanation: 'Linear acceleration of body rolling without slipping down slope.', units: 'm/s²' }
    ],
    solvedExamples: [
      {
        question: 'A solid sphere and a solid cylinder of equal mass and radius roll down an inclined plane from rest without slipping. Which reaches the bottom first?',
        solution: 'Acceleration down incline is a = (g sin θ) / (1 + k²/R²).\nFor solid sphere, k²/R² = 2/5 = 0.4 => a_sphere = (g sin θ) / 1.4 = 0.714 g sin θ.\nFor solid cylinder, k²/R² = 1/2 = 0.5 => a_cylinder = (g sin θ) / 1.5 = 0.667 g sin θ.\nSince a_sphere > a_cylinder, the solid sphere accelerates faster and reaches the bottom first.',
        keyInsight: 'The object with the smaller k²/R² ratio accelerates faster.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c11-p4-01',
        subject: 'Physics',
        chapterId: 'c11-phys-04',
        chapterTitle: 'System of Particles and Rotational Motion',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'A ballet dancer spins on her toes with arms outstretched at 2 rad/s. When she folds her arms, her moment of inertia decreases to 1/3 of its initial value. Her new angular velocity is:',
        options: ['A) 2/3 rad/s', 'B) 6 rad/s', 'C) 18 rad/s', 'D) 4 rad/s'],
        correctAnswer: 'B',
        explanation: 'By conservation of angular momentum (no external torque): I₁ ω₁ = I₂ ω₂ => I₁ * 2 = (I₁ / 3) * ω₂ => ω₂ = 6 rad/s.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Thermodynamics & Kinetic Theory',
    order: 5,
    title: 'Thermodynamics and Kinetic Theory of Gases',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Physical World and Measurement',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Thermal equilibrium & Zeroth Law (temperature concept), First Law of Thermodynamics ($\\Delta Q = \\Delta U + \\Delta W$), work done in thermodynamic processes: isothermal ($W = nRT \\ln(V_2/V_1)$), adiabatic ($PV^\\gamma = \\text{const}, W = \\frac{nR(T_1-T_2)}{\\gamma - 1}$), isobaric, isochoric; Second Law of Thermodynamics (Kelvin-Planck & Clausius statements), Carnot heat engine & efficiency ($\\eta = 1 - T_L/T_H$), Kinetic Theory of Gases (pressure equation $P = \\frac{1}{3}\\rho v_{rms}^2$, degrees of freedom, law of equipartition of energy, molar specific heats $C_p - C_v = R$).',
    introduction: 'Thermodynamics arose during the Industrial Revolution to understand steam engines. The First Law states energy conservation for heat and work, while the Second Law dictates the irreversible arrow of time and maximum thermal efficiency.',
    topics: [
      'Thermal Equilibrium, Zeroth Law, and State Variables ($P, V, T, n$)',
      'First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W$ (Sign conventions)',
      'Internal Energy as a State Function: $\\Delta U = n C_v \\Delta T$',
      'Thermodynamic Processes: Isothermal ($\\Delta T = 0, W = nRT\\ln(V_2/V_1)$), Adiabatic ($\\Delta Q = 0, PV^\\gamma = \\text{const}$), Isobaric ($W = P\\Delta V$), Isochoric ($\\Delta V = 0, W = 0$)',
      'Carnot Engine: Reversible thermodynamic cycle and Maximum Efficiency ($\\eta = 1 - \\frac{T_2}{T_1}$)',
      'Second Law of Thermodynamics: Clausius statement (heat cannot spontaneously flow from cold to hot) and Kelvin-Planck statement',
      'Kinetic Theory of Gases Postulates and Gas Pressure: $P = \\frac{1}{3} n m v_{rms}^2 = \\frac{1}{3} \\rho v_{rms}^2$',
      'Root-Mean-Square Velocity: $v_{rms} = \\sqrt{\\frac{3RT}{M}}$, Average Speed, Most Probable Speed',
      'Degrees of Freedom ($f$) and Law of Equipartition of Energy: Energy per degree of freedom is $\\frac{1}{2}k_B T$',
      'Molar Specific Heats: Mayer\'s Relation ($C_p - C_v = R$), $\\gamma = C_p/C_v = 1 + 2/f$'
    ],
    summaryNotes: `### Core Thermodynamic Formulas:
1. **First Law:**
   $$\\Delta Q = \\Delta U + \\Delta W$$
   - Work done by gas: $W = \\int P dV$ (Area under P-V indicator diagram).
2. **Work in Processes:**
   - **Isothermal ($T = \\text{const}$):** $W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 nRT\\log_{10}\\left(\\frac{V_2}{V_1}\\right)$
   - **Adiabatic ($Q = 0$):** $W = \\frac{nR(T_1 - T_2)}{\\gamma - 1} = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}$
3. **Molar Heat Capacities:**
   - Monatomic Gas ($f=3$, e.g., He, Ar): $C_v = \\frac{3}{2}R, C_p = \\frac{5}{2}R, \\gamma = \\frac{5}{3} \\approx 1.67$.
   - Diatomic Gas ($f=5$, e.g., $N_2, O_2$): $C_v = \\frac{5}{2}R, C_p = \\frac{7}{2}R, \\gamma = \\frac{7}{5} = 1.40$.
4. **Carnot Engine Efficiency:**
   $$\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$$
   - (Temperatures $T_C$ and $T_H$ MUST be in **Kelvin**!).`,
    definitions: [
      'Adiabatic Process: A thermodynamic process in which no transfer of heat occurs between the working system and its surroundings (ΔQ = 0).',
      'Law of Equipartition of Energy: In thermal equilibrium at temperature T, the total energy of a molecule is equally partitioned among its degrees of freedom, each possessing an average energy of 1/2 kB T.'
    ],
    formulas: [
      { name: 'Carnot Engine Efficiency', formula: '\\eta = 1 - \\frac{T_{cold}}{T_{hot}}', explanation: 'Theoretical maximum thermodynamic efficiency limit.', units: 'Dimensionless (0 to 1)' },
      { name: 'RMS Gas Velocity', formula: 'v_{rms} = \\sqrt{\\frac{3RT}{M}}', explanation: 'Root mean square speed of ideal gas molecules.', units: 'm/s' }
    ],
    solvedExamples: [
      {
        question: 'A Carnot engine operates between temperatures 300 K (sink) and 600 K (source). Calculate its thermal efficiency.',
        solution: 'T_cold = 300 K, T_hot = 600 K.\nEfficiency η = 1 - (T_cold / T_hot) = 1 - (300 / 600) = 1 - 0.5 = 0.5 (or 50%).',
        keyInsight: 'Always ensure temperatures are in Kelvin before calculating Carnot efficiency.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c11-p5-01',
        subject: 'Physics',
        chapterId: 'c11-phys-05',
        chapterTitle: 'Thermodynamics and Kinetic Theory of Gases',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'For a rigid diatomic gas molecule, the ratio of molar heat capacities γ = Cp / Cv is:',
        options: ['A) 5/3', 'B) 7/5', 'C) 4/3', 'D) 9/7'],
        correctAnswer: 'B',
        explanation: 'A rigid diatomic gas has f = 5 degrees of freedom (3 translational + 2 rotational). Cv = (5/2)R, Cp = Cv + R = (7/2)R. Thus γ = Cp/Cv = 7/5 = 1.40.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // CHEMISTRY (5 CHAPTERS)
  // ==========================================
  {
    id: 'c11-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Stoichiometry & Mole Concept',
    order: 1,
    title: 'Some Basic Concepts of Chemistry',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Chemical Reactions',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Importance of chemistry, laws of chemical combination, Dalton’s atomic theory, atomic and molecular mass, mole concept & molar mass, percentage composition, empirical and molecular formulas, stoichiometric calculations, limiting reagent, and concentration terms (mass %, volume %, mole fraction, molarity, molality).',
    introduction: 'Stoichiometry is the quantitative grammar of chemistry. Balancing reactions, calculating limiting reagents, and computing solution molarity are essential tools used in every branch of chemistry.',
    topics: [
      'The Mole Concept: $N_A = 6.022 \\times 10^{23}$, Molar volume of ideal gas at STP ($22.4\\text{ L}$ or $22.7\\text{ L}$)',
      'Empirical Formula (Simplest whole number ratio) vs Molecular Formula ($MF = EF \\times n$)',
      'Stoichiometry and Gravimetric Calculations in Chemical Reactions',
      'The Limiting Reagent Concept: Identifying which reactant is completely consumed first',
      'Concentration Units: Molarity ($M = \\frac{\\text{Moles of Solute}}{\\text{Volume of Solution in Litres}}$)',
      'Molality ($m = \\frac{\\text{Moles of Solute}}{\\text{Mass of Solvent in kg}}$, Temperature-independent!)',
      'Mole Fraction ($X_A = \\frac{n_A}{n_A + n_B}$) and Parts Per Million (ppm)'
    ],
    summaryNotes: `### Core Stoichiometric Formulas:
1. **Mole Relations:**
   $$n = \\frac{\\text{Mass } (m)}{\\text{Molar Mass } (M)} = \\frac{\\text{No. of Particles } (N)}{N_A} = \\frac{\\text{Gas Volume at STP (L)}}{22.4\\text{ L}}$$
2. **Empirical & Molecular Formula:**
   $$n = \\frac{\\text{Molar Mass}}{\\text{Empirical Formula Mass}}, \\quad \\text{Molecular Formula} = (\\text{Empirical Formula})_n$$
3. **Molarity vs Molality:**
   - **Molarity ($M$):** Moles of solute / Volume of solution (L). **Changes with temperature** because liquid volume expands with heat.
   - **Molality ($m$):** Moles of solute / Mass of solvent (kg). **Temperature-independent** because mass does not change with temperature!
4. **Limiting Reagent Algorithm:**
   - For reaction $aA + bB \\rightarrow cC$:
   - Compute ratios $\\frac{n_A}{a}$ and $\\frac{n_B}{b}$. The reactant with the **smaller ratio** is the limiting reagent and determines product yield!`,
    definitions: [
      'Limiting Reagent: The reactant that is completely consumed first in a chemical reaction, limiting the amount of product formed.',
      'Molality: The number of moles of solute dissolved per 1 kilogram of solvent.'
    ],
    formulas: [
      { name: 'Molarity Equation', formula: 'M = \\frac{n_{solute}}{V_{solution\\,(L)}}', explanation: 'Concentration in moles of solute per liter of total solution.', units: 'mol/L' },
      { name: 'Molality Equation', formula: 'm = \\frac{n_{solute}}{m_{solvent\\,(kg)}}', explanation: 'Temperature-independent concentration in moles per kg solvent.', units: 'mol/kg' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the molarity of a solution prepared by dissolving 4 g of NaOH in enough water to form 250 mL of solution. (Molar mass of NaOH = 40 g/mol)',
        solution: 'Moles of NaOH = 4 g / 40 g/mol = 0.1 mol.\nVolume of solution in liters = 250 mL / 1000 = 0.25 L.\nMolarity M = 0.1 mol / 0.25 L = 0.4 mol/L (0.4 M).',
        keyInsight: 'Convert volume to liters before dividing into moles.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c11-c1-01',
        subject: 'Chemistry',
        chapterId: 'c11-chem-01',
        chapterTitle: 'Some Basic Concepts of Chemistry',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which of the following concentration terms is independent of temperature?',
        options: ['A) Molarity', 'B) Molality', 'C) Formality', 'D) Normality'],
        correctAnswer: 'B',
        explanation: 'Molality involves mass of solvent (mol/kg), and mass is unaffected by temperature fluctuations. Molarity, normality, and formality depend on liquid volume, which expands with temperature.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Quantum Chemistry & Atomic Physics',
    order: 2,
    title: 'Structure of Atom',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Periodic Classification',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Bohr’s atomic model, hydrogen emission spectrum & Rydberg equation, dual nature of matter (de Broglie: $\\lambda = h/mv$), Heisenberg’s Uncertainty Principle ($\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$), Quantum Mechanical model of atom, wave function $\\psi$ and probability density $|\\psi|^2$, four Quantum Numbers ($n, l, m_l, m_s$), shapes of $s, p, d, f$ atomic orbitals, Aufbau Principle, Pauli Exclusion Principle, and Hund’s Rule of Maximum Multiplicity.',
    introduction: 'Classical physics failed to explain why electrons do not spiral into the nucleus. The quantum revolution established wave-particle duality: electrons behave as standing matter waves occupying orbital probability clouds.',
    topics: [
      'Bohr’s Postulates: Quantization of Angular Momentum ($mvr = \\frac{nh}{2\\pi}$)',
      'Hydrogen Emission Spectrum: Rydberg Equation ($\\bar{\\nu} = R_H [\\frac{1}{n_1^2} - \\frac{1}{n_2^2}]$); Lyman (UV), Balmer (Visible), Paschen, Brackett, Pfund (IR) series',
      'Dual Nature of Matter: De Broglie Wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mE}}$',
      'Heisenberg\'s Uncertainty Principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$',
      'The Four Quantum Numbers: Principal ($n$), Azimuthal ($l = 0 \\dots n-1$), Magnetic ($m_l = -l \\dots +l$), Spin ($m_s = \\pm 1/2$)',
      'Shapes of Orbitals: Spherical $s$, Dumbbell $p_x, p_y, p_z$, Double-dumbbell $d_{xy}, d_{yz}, d_{zx}, d_{x^2-y^2}, d_{z^2}$',
      'Electronic Configuration Rules: Aufbau Principle ($n+l$ energy rule), Pauli Exclusion Principle (no two electrons share all 4 quantum numbers), Hund\'s Rule (half-filled & fully-filled stability)'
    ],
    summaryNotes: `### Core Quantum Equations:
1. **Rydberg Formula:**
   $$\\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\quad (R_H = 109,677\\text{ cm}^{-1})$$
   - Lyman ($n_1=1$, Ultraviolet)
   - Balmer ($n_1=2$, Visible region!)
   - Paschen ($n_1=3$, Infrared)
2. **De Broglie Wavelength:**
   $$\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m q V}}$$
3. **Orbital Quantum Numbers:**
   - $l=0$ ($s$), $l=1$ ($p$), $l=2$ ($d$), $l=3$ ($f$).
   - Total orbitals in shell $n$: **$n^2$**.
   - Maximum electrons in shell $n$: **$2n^2$**.
4. **Aufbau Rule ($n + l$):**
   - Lower $(n+l)$ fills first. If equal, lower $n$ fills first (e.g., $4s$ [$4+0=4$] fills before $3d$ [$3+2=5$]).
   - Anomalous configurations for subshell stability: Chromium ($[Ar] 3d^5 4s^1$) and Copper ($[Ar] 3d^{10} 4s^1$).`,
    definitions: [
      'Heisenberg Uncertainty Principle: It is fundamentally impossible to simultaneously measure the exact position and exact momentum of an electron with absolute precision.',
      'Hund\'s Rule of Maximum Multiplicity: Pairing of electrons in orbitals belonging to the same subshell does not take place until each available orbital is singly occupied with parallel spins.'
    ],
    formulas: [
      { name: 'De Broglie Wavelength', formula: '\\lambda = \\frac{h}{mv}', explanation: 'Wavelength of matter wave of particle with momentum p.', units: 'meters (m)' },
      { name: 'Heisenberg Uncertainty', formula: '\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}', explanation: 'Fundamental precision limit on conjugate observables.', units: 'J·s' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the de Broglie wavelength of an electron moving with a velocity of 6.0 × 10⁶ m/s. (m_e = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s)',
        solution: 'λ = h / (m * v) = (6.63 * 10⁻³⁴) / (9.1 * 10⁻³¹ * 6.0 * 10⁶) = (6.63 * 10⁻³⁴) / (54.6 * 10⁻²⁵) = 1.214 * 10⁻¹⁰ meters = 0.1214 nm = 1.214 Å.',
        keyInsight: 'Electrons at high speeds exhibit wavelengths comparable to atomic X-rays.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c11-c2-01',
        subject: 'Chemistry',
        chapterId: 'c11-chem-02',
        chapterTitle: 'Structure of Atom',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the maximum number of electrons that can be accommodated in an atom with principal quantum number n = 3 and spin quantum number m_s = +1/2?',
        options: ['A) 18', 'B) 9', 'C) 8', 'D) 6'],
        correctAnswer: 'B',
        explanation: 'For n = 3, total orbitals = n² = 3² = 9 orbitals. Each orbital can hold at most one electron with spin ms = +1/2. Therefore, exactly 9 electrons.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Inorganic Chemistry & Periodicity',
    order: 3,
    title: 'Classification of Elements & Periodicity',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Structure of Atom',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Modern periodic law and table layout ($s, p, d, f$ blocks), shielding/screening effect, Effective Nuclear Charge ($Z_{eff}$ via Slater’s rules), periodic trends in physical properties: covalent & ionic radii, lanthanoid contraction, Ionization Enthalpy ($\Delta_i H$, exceptions in Be/B and N/O), Electron Gain Enthalpy ($\Delta_{eg} H$, Chlorine > Fluorine anomaly), Electronegativity (Pauling scale), and periodic chemical trends (diagonal relationships, acidic/basic oxide nature).',
    introduction: 'The periodic table is chemistry\'s predictive map. Periodic anomalies—such as why nitrogen has higher ionization enthalpy than oxygen or why chlorine has higher electron affinity than fluorine—are favorite testing grounds for JEE and NEET.',
    topics: [
      'Electronic Configuration and Classification into $s, p, d, f$ Blocks',
      'Effective Nuclear Charge ($Z_{eff} = Z - \\sigma$): Shielding effect of inner electrons ($s > p > d > f$)',
      'Atomic and Ionic Radii: Isoelectronic series (Smaller size for higher positive nuclear charge)',
      'Ionization Enthalpy ($\\Delta_i H$): Successive $IE_1 < IE_2 < IE_3$; Exceptions: $Be > B$ (Stable full $2s^2$) and $N > O$ (Stable half-filled $2p^3$)',
      'Electron Gain Enthalpy ($\\Delta_{eg} H$): Why Chlorine is more negative than Fluorine (Electron-electron interelectronic repulsion in compact $2p$ subshell)',
      'Electronegativity: Pauling scale ($F = 4.0, O = 3.5, N = 3.0, Cl = 3.0$)',
      'Periodic Trends in Chemical Reactivity: Acidic nature of oxides ($SO_3$ acidic, $Al_2O_3$ amphoteric, $Na_2O$ basic), Diagonal relationships ($Li-Mg, Be-Al$)'
    ],
    summaryNotes: `### Crucial Periodic Exceptions & Anomalies:
1. **Ionization Enthalpy Exceptions:**
   - **$Be > B$:** Beryllium has completely filled stable $2s^2$ subshell, requiring extra energy to remove an electron compared to Boron\'s single $2p^1$.
   - **$N > O$:** Nitrogen has extra-stable exactly half-filled $2p^3$ configuration ($2p_x^1 2p_y^1 2p_z^1$), making its $IE_1$ ($1402\\text{ kJ/mol}$) higher than Oxygen\'s $2p^4$ ($1314\\text{ kJ/mol}$).
2. **Electron Affinity Anomaly ($Cl > F$):**
   - Adding an electron to the tiny, compact $2p$ subshell of Fluorine encounters intense **interelectronic repulsion**.
   - Chlorine has a larger $3p$ orbital with room for the added electron, releasing greater energy:
     $$|\\Delta_{eg} H_{Cl}| > |\\Delta_{eg} H_F|$$
3. **Isoelectronic Species Radius Rule:**
   - Greater negative charge $\\implies$ Larger ionic radius ($N^{3-} > O^{2-} > F^- > Na^+ > Mg^{2+} > Al^{3+}$).`,
    definitions: [
      'Ionization Enthalpy: The minimum energy required to remove the most loosely bound electron from an isolated gaseous atom in its ground state.',
      'Electron Gain Enthalpy: The enthalpy change occurring when an electron is added to an isolated neutral gaseous atom to form a univalent negative ion.'
    ],
    formulas: [
      { name: 'Effective Nuclear Charge', formula: 'Z_{eff} = Z - \\sigma', explanation: 'Actual nuclear pull felt by valence electrons after screening.', units: 'Charge units' }
    ],
    solvedExamples: [
      {
        question: 'Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ in order of increasing ionic radius.',
        solution: 'All species have 10 electrons. As the nuclear charge (atomic number Z) increases from N (7) to Al (13), the positive nucleus pulls the electron cloud closer.\nIncreasing radius order: Al³⁺ < Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.',
        keyInsight: 'In an isoelectronic series, radius decreases as positive nuclear charge increases.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c11-c3-01',
        subject: 'Chemistry',
        chapterId: 'c11-chem-03',
        chapterTitle: 'Classification of Elements & Periodicity',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which element has the most negative (highest magnitude) electron gain enthalpy in the entire periodic table?',
        options: ['A) Fluorine', 'B) Chlorine', 'C) Bromine', 'D) Oxygen'],
        correctAnswer: 'B',
        explanation: 'Chlorine has the highest negative electron gain enthalpy (-349 kJ/mol). Fluorine has lower electron affinity due to strong interelectronic repulsions in its compact 2p orbital.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Chemical Bonding & Molecular Architecture',
    order: 4,
    title: 'Chemical Bonding and Molecular Structure',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Classification of Elements & Periodicity',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Ionic bond & Born-Haber cycle (lattice enthalpy), Fajan’s rules for covalent character in ionic bonds, Dipole Moment ($\\mu = q \\times d$), Valence Shell Electron Pair Repulsion (VSEPR) theory, Valence Bond Theory ($\\sigma$ and $\\pi$ bonds), Hybridization ($sp, sp^2, sp^3, sp^3d, sp^3d^2, sp^3d^3$), Molecular Orbital Theory (MOT) for homonuclear diatomic molecules ($H_2$ to $Ne_2$), Bond Order, Paramagnetism of $O_2$, and Hydrogen Bonding (intermolecular vs intramolecular).',
    introduction: 'Why is water bent ($104.5^\\circ$) while carbon dioxide is strictly linear ($180^\\circ$)? VSEPR theory and hybridization predict molecular geometries, while Molecular Orbital Theory explains why oxygen is paramagnetic and why helium molecules cannot exist.',
    topics: [
      'Ionic Bonding: Lattice Enthalpy and Born-Haber Cycle',
      'Fajan’s Rules: Small cation, large anion, high charge $\\implies$ High covalent character',
      'Dipole Moment ($\\mu = q \\times d$ in Debye): Polar vs Non-polar molecules ($BF_3$ vs $NH_3$)',
      'VSEPR Theory: Repulsion order: Lone Pair-Lone Pair > Lone Pair-Bond Pair > Bond Pair-Bond Pair',
      'Valence Bond Theory: Directional overlap of atomic orbitals, Stronger $\\sigma$ (axial) vs Weaker $\\pi$ (sideways) bond',
      'Hybridization Theory: Mixing of orbitals to form degenerate hybrid orbitals ($sp, sp^2, sp^3, sp^3d, sp^3d^2$)',
      'Molecular Orbital Theory (MOT): Linear Combination of Atomic Orbitals (LCAO), Bonding ($\\sigma, \\pi$) vs Antibonding ($\\sigma^*, \\pi^*$) orbitals',
      'Bond Order: $\\text{BO} = \\frac{1}{2}(N_b - N_a)$; Magnetic behavior (Unpaired electrons $\\implies$ Paramagnetic, e.g., $O_2$)',
      'Hydrogen Bonding: Intermolecular (Water, HF) vs Intramolecular (o-Nitrophenol / chelation)'
    ],
    summaryNotes: `### Core Molecular Geometry & MOT:
1. **Hybridization Shortcuts:**
   - Steric Number $SN = (\\text{Bond Pairs}) + (\\text{Lone Pairs})$:
     * $SN = 2 \\implies sp$ (Linear, $180^\\circ$, e.g., $BeCl_2, CO_2$)
     * $SN = 3 \\implies sp^2$ (Trigonal planar, $120^\\circ$, e.g., $BF_3$)
     * $SN = 4 \\implies sp^3$ (Tetrahedral $CH_4$ $109.5^\\circ$, Pyramidal $NH_3$ $107^\\circ$, Bent $H_2O$ $104.5^\\circ$)
     * $SN = 5 \\implies sp^3d$ (Trigonal bipyramidal $PCl_5$, See-saw $SF_4$, T-shaped $ClF_3$, Linear $XeF_2$)
     * $SN = 6 \\implies sp^3d^2$ (Octahedral $SF_6$, Square planar $XeF_4$)
2. **Molecular Orbital Energy Level Diagrams:**
   - **For $\\le 14$ electrons ($B_2, C_2, N_2$):** $\\pi 2p_x = \\pi 2p_y < \\sigma 2p_z < \\pi^* 2p_x = \\pi^* 2p_y < \\sigma^* 2p_z$
   - **For $> 14$ electrons ($O_2, F_2$):** $\\sigma 2p_z < \\pi 2p_x = \\pi 2p_y < \\pi^* 2p_x = \\pi^* 2p_y < \\sigma^* 2p_z$
   - Oxygen ($O_2$, 16 electrons): Has two unpaired electrons in degenerate $\\pi^* 2p_x$ and $\\pi^* 2p_y$ orbitals $\\implies$ **Paramagnetic with Bond Order = 2**!`,
    definitions: [
      'Hybridization: The concept of mixing atomic orbitals of slightly different energies to produce an entirely new set of equivalent degenerate hybrid orbitals.',
      'Bond Order: Half the difference between the number of electrons in bonding molecular orbitals and antibonding molecular orbitals.'
    ],
    formulas: [
      { name: 'Bond Order Formula', formula: '\\text{Bond Order} = \\frac{N_b - N_a}{2}', explanation: 'Calculates covalent bond multiplicity and stability.', units: 'Order' },
      { name: 'Dipole Moment', formula: '\\mu = q \\times d', explanation: 'Measure of electrical polarity in a chemical bond.', units: 'Debye (D)' }
    ],
    solvedExamples: [
      {
        question: 'Why is the dipole moment of NH₃ (1.47 D) significantly greater than that of NF₃ (0.24 D) even though fluorine is more electronegative than hydrogen?',
        solution: 'In NH₃, nitrogen is more electronegative than hydrogen, so the three N-H bond dipole vectors point towards nitrogen in the same direction as the lone pair dipole moment, reinforcing each other. In NF₃, fluorine is more electronegative than nitrogen, so the three N-F bond dipoles point away from nitrogen, opposing and largely canceling the lone pair dipole moment.',
        keyInsight: 'In NF₃, bond dipoles oppose the lone pair dipole; in NH₃, they reinforce it.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c11-c4-01',
        subject: 'Chemistry',
        chapterId: 'c11-chem-04',
        chapterTitle: 'Chemical Bonding and Molecular Structure',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'According to Molecular Orbital Theory, which of the following species does NOT exist due to a Bond Order of zero?',
        options: ['A) H₂⁺', 'B) He₂', 'C) Li₂', 'D) B₂'],
        correctAnswer: 'B',
        explanation: 'He₂ has 4 electrons: σ1s² σ*1s². Bond Order = (Nb - Na)/2 = (2 - 2)/2 = 0. A bond order of zero means no net bonding stability, so He₂ cannot exist.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'General Organic Chemistry (GOC) & Hydrocarbons',
    order: 5,
    title: 'Organic Chemistry: Basic Principles & Hydrocarbons',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Carbon and Its Compounds',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'IUPAC systematic nomenclature of organic compounds with polyfunctional groups, structural and stereoisomerism basics, electron displacement effects: Inductive effect ($+I, -I$), Electromeric effect, Resonance/Mesomeric effect ($+M, -M$), Hyperconjugation (Baker-Nathan no-bond resonance), stability of reaction intermediates (carbocations, carbanions, free radicals), electrophiles vs nucleophiles, mechanisms of organic reactions, preparation and properties of Alkanes (Wurtz reaction, Kolbe electrolysis), Alkenes (Markovnikov’s rule vs Anti-Markovnikov peroxide effect), and Alkynes.',
    introduction: 'General Organic Chemistry (GOC) is the grammar of organic synthesis. Understanding electronic displacement effects—how inductive and resonance delocalize charge—allows students to predict acid-base strengths and reaction pathways with deductive precision.',
    topics: [
      'IUPAC Systematic Nomenclature: Prefix + Root Word + Primary Suffix + Secondary Suffix',
      'Electronic Effects: Inductive Effect (Permanent polarization through $\\sigma$-bonds, $+I$ vs $-I$ order)',
      'Resonance Effect ($R / M$ Effect): Delocalization of $\\pi$-electrons; Rules for drawing valid resonating structures',
      'Hyperconjugation (No-Bond Resonance): $\\sigma-\\pi$ conjugation via $\\alpha$-C-H bonds; Explains Alkyl radical/carbocation stability and Alkene heat of hydrogenation',
      'Carbocations ($3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$), Carbanions ($1^\\circ > 2^\\circ > 3^\\circ$), Carbon Free Radicals',
      'Electrophiles (Lewis acids) vs Nucleophiles (Lewis bases)',
      'Alkanes: Wurtz Reaction ($2R-X + 2Na \\xrightarrow{\\text{Dry ether}} R-R$), Decarboxylation ($RCOONa + \\text{Soda lime} \\rightarrow RH$)',
      'Alkenes: Electrophilic Addition, Markovnikov\'s Rule (Negative part of addendum adds to carbon with fewer hydrogens)',
      'Kharasch Peroxide Effect (Anti-Markovnikov addition of $HBr$ strictly in presence of organic peroxides)',
      'Aromaticity & Hückel\'s Rule: Flat cyclic conjugated rings with $(4n + 2)\\pi$ electrons (e.g., Benzene $n=1$)'
    ],
    summaryNotes: `### Core GOC Rules:
1. **Stability of Carbocations:**
   $$3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$$
   - Governed by $+I$ inductive effect and hyperconjugation (more $\\alpha$-hydrogens = greater stability).
2. **Acidic Strength of Carboxylic Acids:**
   - Electron-withdrawing groups ($-I, -M$, e.g., $-NO_2, -CF_3, -F, -Cl$) stabilize the carboxylate anion, **increasing acidity**.
   - Electron-donating groups ($+I$, e.g., $-CH_3, -C_2H_5$) destabilize the anion, **decreasing acidity**.
3. **Markovnikov vs Anti-Markovnikov Rule:**
   - **Markovnikov Addition:** In addition of $HX$ to asymmetric alkene, $H^+$ adds to the double-bonded carbon with more hydrogen atoms to yield the more stable carbocation intermediate.
   - **Anti-Markovnikov (Peroxide Effect):** Free-radical mechanism occurring **strictly with $HBr$** in presence of peroxides (does NOT occur with $HCl$ or $HI$ due to unfavorable thermodynamics!).`,
    definitions: [
      'Hyperconjugation: Delocalization of σ-electrons of C-H bonds of an alkyl group directly attached to an atom with an unshared p-orbital or π-bond.',
      'Markovnikov\'s Rule: When an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part of the reagent attaches itself to the carbon atom carrying the smaller number of hydrogen atoms.'
    ],
    formulas: [
      { name: 'Hückel\'s Rule of Aromaticity', formula: '(4n + 2)\\pi \\text{ electrons}', explanation: 'Criterion for aromatic planar cyclic conjugated systems.', units: 'Electron count' }
    ],
    solvedExamples: [
      {
        question: 'Predict the major product formed when Propene (CH₃-CH=CH₂) reacts with HBr in the presence of benzoyl peroxide.',
        solution: 'In the presence of organic peroxides, addition of HBr follows the Anti-Markovnikov free radical mechanism (Kharasch effect). The bromine radical attacks the terminal carbon with more hydrogens, creating the more stable 2° alkyl radical. Major product is 1-Bromopropane (CH₃-CH₂-CH₂-Br).',
        keyInsight: 'HBr with peroxide gives Anti-Markovnikov 1-bromo product.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c11-c5-01',
        subject: 'Chemistry',
        chapterId: 'c11-chem-05',
        chapterTitle: 'Organic Chemistry: Basic Principles & Hydrocarbons',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which of the following carbocations is the most stable due to maximum hyperconjugative structures?',
        options: ['A) (CH₃)₃C⁺ (tert-butyl carbocation)', 'B) (CH₃)₂CH⁺ (isopropyl carbocation)', 'C) CH₃CH₂⁺ (ethyl carbocation)', 'D) CH₃⁺ (methyl carbocation)'],
        correctAnswer: 'A',
        explanation: '(CH₃)₃C⁺ has 9 α-hydrogens, yielding 9 hyperconjugative structures plus +I inductive stabilization from three methyl groups, making it the most stable carbocation.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // MATHEMATICS (5 CHAPTERS - FOR JEE FOUNDATION)
  // ==========================================
  {
    id: 'c11-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Set Theory & Functions',
    order: 1,
    title: 'Sets, Relations and Functions',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Real Numbers',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Sets and representations (roster and set-builder forms), subsets, power set ($2^n$), universal set, Venn diagrams, set operations (union, intersection, difference, complement, De Morgan’s laws), Cartesian product of sets ($A \\times B$), relations (domain, co-domain, range), functions as special relations, real-valued functions, domain & range determination, and types of functions (polynomial, rational, modulus, signum, greatest integer $[x]$, exponential, logarithmic).',
    introduction: 'Sets are the foundational vocabulary of modern mathematics. Relations and functions map abstract inputs to outputs, defining domains, ranges, and piecewise behaviors that underwrite all calculus.',
    topics: [
      'Sets and Set-Builder Notation; Empty set, Finite vs Infinite sets, Equal sets',
      'Subsets of Real Numbers, Intervals on $\\mathbb{R}$ ($[a, b], (a, b)$), Power Set ($n(P(A)) = 2^n$)',
      'Venn Diagrams and De Morgan’s Laws: $(A \\cup B)\' = A\' \\cap B\'$ and $(A \\cap B)\' = A\' \\cup B\'$',
      'Cardinality Principle: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$',
      'Cartesian Product of Sets: $A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$',
      'Relations: Domain, Co-domain, and Range',
      'Functions as Single-Valued Mappings: Vertical Line Test for Functions',
      'Standard Real Functions: Modulus Function ($|x|$), Signum Function ($sgn(x)$), Greatest Integer Function ($[x]$), Fractional Part Function ($\\{x\\}$)',
      'Techniques for Finding Domain and Range of Radical and Rational Functions'
    ],
    summaryNotes: `### Core Set & Function Theorems:
1. **De Morgan's Laws:**
   $$(A \\cup B)\' = A\' \\cap B\', \\quad (A \\cap B)\' = A\' \\cup B\'$$
2. **Cardinality Formula:**
   $$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$$
3. **Special Functions:**
   - **Greatest Integer Function ($[x]$):** Largest integer $\\le x$. $[2.7] = 2, [-1.4] = -2$.
   - **Fractional Part Function ($\\{x\\}$):** $\\{x\\} = x - [x]$. Periodic with period 1; range is $[0, 1)$.
   - **Modulus Function ($|x|$):** $|x| = x$ if $x \\ge 0$, and $-x$ if $x < 0$.`,
    definitions: [
      'Function: A relation f from set A to set B in which every element of A has one and only one image in set B.',
      'Power Set: The set of all subsets of a given set A, denoted by P(A).'
    ],
    formulas: [
      { name: 'Cardinality Union Formula', formula: 'n(A \\cup B) = n(A) + n(B) - n(A \\cap B)', explanation: 'Inclusion-exclusion formula for two finite sets.', units: 'Count' },
      { name: 'Fractional Part Relation', formula: 'x = [x] + \\{x\\}', explanation: 'Decomposition of real number into integer and fractional part.', units: 'Real number' }
    ],
    solvedExamples: [
      {
        question: 'Find the domain of the real-valued function f(x) = √(9 - x²).',
        solution: 'For the square root to be defined over real numbers, the expression under the radical must be non-negative:\n9 - x² ≥ 0 => x² ≤ 9 => -3 ≤ x ≤ 3.\nTherefore, Domain = [-3, 3].',
        keyInsight: 'Set the expression inside the square root ≥ 0 to find domain.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c11-m1-01',
        subject: 'Mathematics',
        chapterId: 'c11-math-01',
        chapterTitle: 'Sets, Relations and Functions',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'If a set A has 5 elements, how many non-empty proper subsets does A possess?',
        options: ['A) 32', 'B) 31', 'C) 30', 'D) 25'],
        correctAnswer: 'C',
        explanation: 'Total subsets = 2⁵ = 32. Proper subsets exclude the set itself (32 - 1 = 31). Non-empty proper subsets also exclude the empty set (31 - 1 = 30).',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Trigonometry',
    order: 2,
    title: 'Trigonometric Functions & Equations',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Trigonometry',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Angles in radians ($180^\\circ = \\pi\\text{ rad}$), unit circle definition of trigonometric functions, signs of trigonometric ratios in four quadrants (ASTC rule), domain, range, and graphs of trigonometric functions, compound angle identities: $\\sin(A \\pm B), \\cos(A \\pm B), \\tan(A \\pm B)$, transformation of products into sums/differences, multiple and submultiple angles ($\\sin 2A, \\cos 2A, \\tan 2A, \\sin 3A, \\cos 3A$), and general solutions of trigonometric equations.',
    introduction: 'Extending trigonometry from acute triangle angles to the full continuous real line unlocks periodic wave analysis. Mastering compound, multiple, and transformation identities is vital for calculus integration in JEE Advanced.',
    topics: [
      'Radian Measure: Conversion ($1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57^\\circ 16\'$) and Arc Length Formula ($s = r\\theta$)',
      'Trigonometric Functions on Unit Circle: Sign rules (All Silver Tea Cups - ASTC rule)',
      'Graphs, Domains, and Ranges of $\\sin x, \\cos x, \\tan x, \\cot x, \\sec x, \\text{cosec } x$',
      'Addition and Subtraction Formulas: $\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$',
      'Double Angle and Half Angle Formulas: $\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$',
      'Triple Angle Formulas: $\\sin 3A = 3\\sin A - 4\\sin^3 A, \\cos 3A = 4\\cos^3 A - 3\\cos A$',
      'Transformation Formulas: $2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)$ and C-D formulas',
      'Maximum and Minimum Values of $a\\cos\\theta + b\\sin\\theta$: Range is $[-\\sqrt{a^2+b^2}, +\\sqrt{a^2+b^2}]$',
      'General Solutions of Trigonometric Equations: $\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha$'
    ],
    summaryNotes: `### Essential Compound & Multiple Angle Identities:
1. **Cosine & Sine of Sum/Difference:**
   $$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$
   $$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$
   $$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$$
2. **Double Angle Formulas in terms of $\\tan$:**
   $$\\sin 2A = \\frac{2\\tan A}{1 + \\tan^2 A}, \\quad \\cos 2A = \\frac{1 - \\tan^2 A}{1 + \\tan^2 A}$$
3. **C-D Sum to Product Formulas:**
   $$\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$$
   $$\\cos C + \\cos D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$$
4. **Extreme Values:**
   $$-\\sqrt{a^2 + b^2} \\le a\\cos\\theta + b\\sin\\theta \\le \\sqrt{a^2 + b^2}$$`,
    definitions: [
      'Radian: The angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle.',
      'General Solution: An expression involving an integer n that provides all possible angles satisfying a trigonometric equation.'
    ],
    formulas: [
      { name: 'Linear Combination Range', formula: '-\\sqrt{a^2+b^2} \\le a\\cos\\theta + b\\sin\\theta \\le \\sqrt{a^2+b^2}', explanation: 'Extreme value range for harmonic linear combinations.', units: 'Bounds' },
      { name: 'Sine General Solution', formula: '\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha', explanation: 'General solution formula where n is an integer.', units: 'Radians' }
    ],
    solvedExamples: [
      {
        question: 'Find the maximum and minimum values of the expression 3 sin θ + 4 cos θ + 7.',
        solution: 'For the term 3 sin θ + 4 cos θ, a = 4, b = 3.\nMax/min range of 3 sin θ + 4 cos θ is ±√(3² + 4²) = ±√25 = ±5.\nMaximum value = +5 + 7 = 12.\nMinimum value = -5 + 7 = 2.',
        keyInsight: 'Apply the ±√(a²+b²) envelope shortcut for linear trig combinations.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c11-m2-01',
        subject: 'Mathematics',
        chapterId: 'c11-math-02',
        chapterTitle: 'Trigonometric Functions & Equations',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the value of sin 15°?',
        options: ['A) (√3 - 1) / (2√2)', 'B) (√3 + 1) / (2√2)', 'C) (√6 - √2) / 2', 'D) 1 / (2√2)'],
        correctAnswer: 'A',
        explanation: 'sin 15° = sin(45° - 30°) = sin 45° cos 30° - cos 45° sin 30° = (1/√2)(√3/2) - (1/√2)(1/2) = (√3 - 1) / (2√2).',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Complex Analysis & Algebra',
    order: 3,
    title: 'Complex Numbers and Quadratic Equations',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Quadratic Equations',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'The imaginary unit $i = \\sqrt{-1}$, powers of $i$, definition of complex numbers $z = a + ib$, algebra of complex numbers, modulus ($|z| = \\sqrt{a^2+b^2}$) and conjugate ($\\bar{z} = a - ib$), properties of modulus and conjugate, representation in Argand plane, polar form ($z = r(\\cos\\theta + i\\sin\\theta)$), Euler’s formula ($z = re^{i\\theta}$), solving quadratic equations with negative discriminant ($D < 0$), cube roots of unity ($1, \\omega, \\omega^2$), and triangle inequality for complex numbers.',
    introduction: 'When quadratic equations produce negative discriminants like $x^2 + 1 = 0$, the real number line provides no solutions. Introducing $i = \\sqrt{-1}$ extends numbers into a two-dimensional complex Argand plane where every polynomial of degree $n$ has exactly $n$ roots.',
    topics: [
      'Need for Complex Numbers: Solving $x^2 + 1 = 0$, Powers of $i$ (Cycle of 4: $i^1=i, i^2=-1, i^3=-i, i^4=1$)',
      'Algebraic Form: $z = a + ib$ where $a = \\text{Re}(z)$ and $b = \\text{Im}(z)$',
      'Conjugate of a Complex Number: $\\bar{z} = a - ib$; Properties ($z\\bar{z} = |z|^2, \\overline{z_1 \\pm z_2} = \\bar{z}_1 \\pm \\bar{z}_2$)',
      'Modulus and Argument in Argand Plane: $|z| = \\sqrt{a^2 + b^2}$, Principal Argument $\\theta \\in (-\\pi, \\pi]$',
      'Polar Form: $z = r(\\cos\\theta + i\\sin\\theta)$ and Euler\'s Form: $z = r e^{i\\theta}$',
      'Cube Roots of Unity: $1, \\omega, \\omega^2$ where $\\omega = \\frac{-1 + i\\sqrt{3}}{2}$; Fundamental relations: $1 + \\omega + \\omega^2 = 0$ and $\\omega^3 = 1$',
      'Triangle Inequalities: $||z_1| - |z_2|| \\le |z_1 \\pm z_2| \\le |z_1| + |z_2|$'
    ],
    summaryNotes: `### Core Complex Number Theorems:
1. **Modulus & Conjugate Identity:**
   $$z \\cdot \\bar{z} = |z|^2 \\implies z^{-1} = \\frac{\\bar{z}}{|z|^2}$$
2. **Cube Roots of Unity ($\\\omega$):**
   - Roots of $z^3 = 1$:
     $$1, \\quad \\omega = e^{i 2\\pi/3} = \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = e^{i 4\\pi/3} = \\frac{-1 - i\\sqrt{3}}{2}$$
   - **Properties:**
     $$1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad \\omega^{3k} = 1$$
3. **Triangle Inequality in Argand Plane:**
   $$|z_1 + z_2| \\le |z_1| + |z_2|$$
   - Equality holds if and only if $z_1, z_2$, and the origin are **collinear** with $z_1, z_2$ lying on the same side of the origin.`,
    definitions: [
      'Complex Number: An ordered algebraic combination of the form a + ib, where a and b are real numbers and i = √(-1).',
      'Principal Argument: The unique angle θ in the interval (-π, π] made by the radius vector representing complex number z with the positive real axis.'
    ],
    formulas: [
      { name: 'Modulus-Conjugate Relation', formula: 'z \\cdot \\bar{z} = |z|^2', explanation: 'Product of complex number and its conjugate equals square of modulus.', units: 'Real number' },
      { name: 'Cube Roots of Unity Sum', formula: '1 + \\omega + \\omega^2 = 0', explanation: 'Fundamental cyclic identity for cube roots of unity.', units: 'Identity' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate the value of (1 + ω - ω²)⁷ where ω is a complex cube root of unity.',
        solution: 'We know 1 + ω + ω² = 0 => 1 + ω = -ω².\nSubstitute into expression: (-ω² - ω²)⁷ = (-2ω²)⁷ = (-2)⁷ * (ω²)⁷ = -128 * ω¹⁴.\nSince ω³ = 1: ω¹⁴ = (ω³)⁴ * ω² = 1 * ω² = ω².\nResult = -128ω².',
        keyInsight: 'Replace (1 + ω) with -ω² using 1 + ω + ω² = 0.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c11-m3-01',
        subject: 'Mathematics',
        chapterId: 'c11-math-03',
        chapterTitle: 'Complex Numbers and Quadratic Equations',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the modulus of the complex number z = (1 + i) / (1 - i)?',
        options: ['A) 1', 'B) 2', 'C) √2', 'D) 0'],
        correctAnswer: 'A',
        explanation: '|z| = |1 + i| / |1 - i| = √(1² + 1²) / √(1² + (-1)²) = √2 / √2 = 1. (Alternatively, (1+i)/(1-i) = i, and |i| = 1).',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Combinatorics & Algebra',
    order: 4,
    title: 'Permutations, Combinations & Binomial Theorem',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Sets, Relations and Functions',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Fundamental principles of counting (multiplication and addition rules), factorial notation ($n!$), permutations ($^n P_r = \\frac{n!}{(n-r)!}$), circular permutations ($(n-1)!$), combinations ($^n C_r = \\frac{n!}{r!(n-r)!}$), combinatorial identities ($^n C_r = \\,^n C_{n-r}, \\,^n C_r + \\,^n C_{r-1} = \\,^{n+1} C_r$), Binomial Theorem for positive integer index, general term ($T_{r+1} = \\,^n C_r a^{n-r} b^r$), middle term(s), and properties of binomial coefficients.',
    introduction: 'Combinatorics is the mathematics of clever counting. The Binomial Theorem provides algebraic expansions for high powers, bridging probability with combinatorics.',
    topics: [
      'Fundamental Principle of Counting: Multiplication Rule (Independent stages) vs Addition Rule (Disjoint choices)',
      'Permutations ($^n P_r$): Arrangement of $n$ distinct objects taken $r$ at a time',
      'Permutations with Repetitions: $\\frac{n!}{p_1! p_2! \\dots p_k!}$ (e.g., Anagrams like MISSISSIPPI)',
      'Combinations ($^n C_r$): Selection of $r$ objects without regard to order',
      'Pascal\'s Identity: $^n C_r + \\,^n C_{r-1} = \\,^{n+1} C_r$',
      'Binomial Theorem Expansion: $(a + b)^n = \\sum_{r=0}^n \\,^n C_r a^{n-r} b^r$',
      'General Term in Binomial Expansion: $T_{r+1} = \\,^n C_r a^{n-r} b^r$',
      'Finding the Middle Term and Term Independent of $x$',
      'Sum of Binomial Coefficients: $C_0 + C_1 + C_2 + \\dots + C_n = 2^n$'
    ],
    summaryNotes: `### Core Combinatorial Relations:
1. **Permutations vs Combinations:**
   $$^n P_r = \\frac{n!}{(n - r)!}, \\quad ^n C_r = \\frac{n!}{r!(n - r)!} \\implies ^n P_r = r! \\times \\,^n C_r$$
2. **Pascal\'s Addition Identity:**
   $$^n C_r + \\,^n C_{r-1} = \\,^{n+1} C_r$$
3. **Binomial General Term:**
   - In $(a + b)^n$, the $(r+1)$th term is:
     $$T_{r+1} = \\,^n C_r a^{n-r} b^r$$
4. **Middle Term:**
   - If $n$ is **even**, there is $1$ middle term: $T_{\\frac{n}{2} + 1}$.
   - If $n$ is **odd**, there are $2$ middle terms: $T_{\\frac{n+1}{2}}$ and $T_{\\frac{n+3}{2}}$.
5. **Coefficient Sums:**
   $$\\sum_{r=0}^n \\,^n C_r = 2^n, \\quad C_0 + C_2 + C_4 + \\dots = C_1 + C_3 + C_5 + \\dots = 2^{n-1}$$`,
    definitions: [
      'Combination: A selection of items from a larger pool where the order of selection does not matter.',
      'Pascal\'s Identity: The algebraic property stating that selecting r items from n+1 objects equals selecting r from n plus selecting r-1 from n.'
    ],
    formulas: [
      { name: 'Binomial General Term', formula: 'T_{r+1} = \\,^n C_r a^{n-r} b^r', explanation: 'Formulation for arbitrary (r+1)th term in binomial expansion.', units: 'Algebraic' },
      { name: 'Pascal\'s Identity', formula: '^n C_r + \\,^n C_{r-1} = \\,^{n+1} C_r', explanation: 'Fundamental recursion relation for binomial coefficients.', units: 'Identity' }
    ],
    solvedExamples: [
      {
        question: 'Find the term independent of x in the expansion of (x² + 1/x)⁹.',
        solution: 'General term T_{r+1} = ⁹C_r (x²)^{9-r} (x⁻¹)^r = ⁹C_r x^{18 - 2r - r} = ⁹C_r x^{18 - 3r}.\nFor term independent of x, set exponent of x to zero:\n18 - 3r = 0 => 3r = 18 => r = 6.\nTerm is T₇ = ⁹C₆ = ⁹C₃ = (9 * 8 * 7) / (3 * 2 * 1) = 84.',
        keyInsight: 'Set the net variable exponent equal to 0 for independent terms.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c11-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c11-m4-01',
        subject: 'Mathematics',
        chapterId: 'c11-math-04',
        chapterTitle: 'Permutations, Combinations & Binomial Theorem',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the sum of all binomial coefficients in the expansion of (1 + x)¹⁰?',
        options: ['A) 100', 'B) 512', 'C) 1024', 'D) 2048'],
        correctAnswer: 'C',
        explanation: 'Sum of coefficients = 2ⁿ = 2¹⁰ = 1024.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Coordinate Geometry & Conic Sections',
    order: 5,
    title: 'Straight Lines & Conic Sections',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Coordinate Geometry',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Slope of a line ($m = \\tan\\theta = \\frac{y_2-y_1}{x_2-x_1}$), angle between two lines, parallel ($m_1 = m_2$) and perpendicular ($m_1 m_2 = -1$) conditions, forms of straight line (slope-intercept $y = mx+c$, point-slope, two-point, intercept form $\\frac{x}{a}+\\frac{y}{b}=1$, normal form), distance of a point from a line ($d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$), distance between parallel lines, Conic Sections as intersections of a cone: Circle ($(x-h)^2 + (y-k)^2 = r^2$), Parabola ($y^2 = 4ax$), Ellipse ($\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, e < 1$), and Hyperbola ($\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, e > 1$).',
    introduction: 'Conic sections—circles, parabolas, ellipses, and hyperbolas—are generated by slicing a double circular cone with a plane. Johannes Kepler discovered that planets orbit the sun in ellipses, while radar dishes and headlights utilize parabolic reflectors.',
    topics: [
      'Slope / Gradient of a Straight Line and Angle between Two Lines: $\\tan\\theta = |\\frac{m_2 - m_1}{1 + m_1 m_2}|$',
      'Standard Forms of Lines: Slope-Intercept, Point-Slope, Intercept, and Normal Form ($x\\cos\\omega + y\\sin\\omega = p$)',
      'Perpendicular Distance from Point $(x_1, y_1)$ to Line $Ax + By + C = 0$: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$',
      'Distance between Parallel Lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$',
      'Circles: Standard Form $(x - h)^2 + (y - k)^2 = r^2$ and General Form $x^2 + y^2 + 2gx + 2fy + c = 0$',
      'Parabola: Focus, Directrix, Eccentricity ($e = 1$), Standard Equation $y^2 = 4ax$, Latus Rectum ($4a$)',
      'Ellipse: Eccentricity ($e = \\sqrt{1 - b^2/a^2} < 1$), Foci $(\\pm ae, 0)$, Directrices ($x = \\pm a/e$), Latus Rectum ($\\frac{2b^2}{a}$)',
      'Hyperbola: Eccentricity ($e = \\sqrt{1 + b^2/a^2} > 1$), Foci $(\\pm ae, 0)$, Asymptotes'
    ],
    summaryNotes: `### Core Conic Sections Summary Table:
| Conic | Standard Equation | Eccentricity ($e$) | Foci | Latus Rectum |
| :--- | :--- | :--- | :--- | :--- |
| **Circle** | $x^2 + y^2 = r^2$ | $e = 0$ | Center $(0, 0)$ | $2r$ |
| **Parabola** | $y^2 = 4ax$ | $e = 1$ | $(a, 0)$ | $4a$ |
| **Ellipse** | $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$) | $e = \\sqrt{1 - \\frac{b^2}{a^2}} < 1$ | $(\\pm ae, 0)$ | $\\frac{2b^2}{a}$ |
| **Hyperbola** | $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ | $e = \\sqrt{1 + \\frac{b^2}{a^2}} > 1$ | $(\\pm ae, 0)$ | $\\frac{2b^2}{a}$ |
### Perpendicular Distance Formula:
$$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$$`,
    definitions: [
      'Eccentricity (e): The constant ratio of the distance of a point on a conic from its focus to its perpendicular distance from the directrix.',
      'Latus Rectum: The chord of a conic section drawn through a focus perpendicular to the principal major axis.'
    ],
    formulas: [
      { name: 'Perpendicular Distance to Line', formula: 'd = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}', explanation: 'Perpendicular distance from point P(x1, y1) to line Ax + By + C = 0.', units: 'Distance' },
      { name: 'Ellipse Eccentricity', formula: 'e = \\sqrt{1 - \\frac{b^2}{a^2}}', explanation: 'Eccentricity formula for horizontal ellipse.', units: 'Ratio (< 1)' }
    ],
    solvedExamples: [
      {
        question: 'Find the distance between the parallel lines 3x + 4y - 9 = 0 and 6x + 8y + 12 = 0.',
        solution: 'First make coefficients of x and y identical. Divide second equation by 2: 3x + 4y + 6 = 0.\nNow C₁ = -9, C₂ = 6, A = 3, B = 4.\nDistance d = |C₁ - C₂| / √(A² + B²) = |-9 - 6| / √(3² + 4²) = |-15| / 5 = 3 units.',
        keyInsight: 'Normalize coefficients of x and y to identical values before subtracting constants.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c11-m5-01',
        subject: 'Mathematics',
        chapterId: 'c11-math-05',
        chapterTitle: 'Straight Lines & Conic Sections',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the length of the latus rectum of the ellipse x²/25 + y²/16 = 1?',
        options: ['A) 32/5', 'B) 16/5', 'C) 8/5', 'D) 64/5'],
        correctAnswer: 'A',
        explanation: 'Here a² = 25 (a = 5) and b² = 16. Length of latus rectum = 2b²/a = 2(16)/5 = 32/5 units.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // BIOLOGY (5 CHAPTERS - FOR NEET FOUNDATION)
  // ==========================================
  {
    id: 'c11-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Systematics & Microbiology',
    order: 1,
    title: 'The Living World & Biological Classification',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Heredity and Evolution',
    totalConcepts: 8,
    durationHours: 6.0,
    description: 'Characteristics of living organisms (metabolism, cellular organization, consciousness as defining property), taxonomic categories, binomial nomenclature, Whittaker’s Five Kingdom Classification, Kingdom Monera (Archaebacteria: halophiles, methanogens; Eubacteria: Gram +/-), Kingdom Protista (Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds, Protozoans), Kingdom Fungi (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes), and Viruses, Viroids, Prions, and Lichens.',
    introduction: 'What defines life? While growth and reproduction have exceptions, cellular metabolism and consciousness define living organisms unconditionally. Whittaker\'s Five Kingdom classification groups biodiversity based on evolutionary phylogenetics and cellular grade.',
    topics: [
      'Defining Features of Life: Cellular Organization, Metabolism, and Consciousness (Growth and reproduction are NOT defining properties)',
      'Taxonomic Hierarchy: Kingdom → Phylum/Division → Class → Order → Family → Genus → Species',
      'Binomial Nomenclature (Linnaeus): Generic name capitalized, specific epithet lowercase, italicized/underlined',
      'Kingdom Monera: Archaebacteria (Extreme environments: Methanogens in ruminant gut, Halophiles, Thermoacidophiles) and Eubacteria',
      'Kingdom Protista: Chrysophytes (Diatoms with silica frustules, diatomaceous earth), Dinoflagellates (Red tides - *Gonyaulax*), Euglenoids (*Euglena* with pellicle), Slime Moulds, Protozoa',
      'Kingdom Fungi: Mycelium, Hyphae, Chitinous wall, Classes: Phycomycetes (*Mucor, Rhizopus*), Ascomycetes (Sac fungi: *Penicillium, Yeast, Aspergillus*), Basidiomycetes (Club fungi: Mushrooms, Rusts, Smuts), Deuteromycetes (Fungi imperfecti: *Alternaria*)',
      'Acellular Infectious Agents: Viruses (Genetic material DNA or RNA + Protein capsid), Viroids (T.O. Diener 1971: Free low molecular weight RNA lacking protein coat), Prions (Misfolded infectious proteins - Mad Cow Disease), Lichens'
    ],
    summaryNotes: `### Core NEET Systematics Principles:
1. **Defining vs Non-Defining Properties of Life:**
   - **Non-defining:** Growth (mountains can grow by external accretion) and Reproduction (sterile worker bees, mules, and infertile human couples cannot reproduce).
   - **Defining:** **Cellular organization, Metabolism, and Consciousness** (all living systems respond to environmental stimuli).
2. **Diatoms (Chief Producers of Oceans):**
   - Microscopic photosynthetic chrysophytes with overlapping glass-like silica shells (frustules) that do not decay, accumulating over geological epochs as **Diatomaceous Earth** used in filtration and polishing.
3. **Acellular Agents:**
   - **Viruses:** Obligate intracellular parasites; genetic material is either DNA or RNA, **never both**!
   - **Viroids (T.O. Diener, 1971):** Smaller than viruses, cause Potato Spindle Tuber disease; consist solely of naked single-stranded RNA **without a protein coat**.
   - **Prions:** Abnormally folded infectious proteins causing Bovine Spongiform Encephalopathy (Mad Cow Disease) and CJD in humans.`,
    definitions: [
      'Viroid: An infectious sub-viral plant pathogen consisting solely of a short strand of circular, single-stranded RNA without a protective protein coat.',
      'Methanogens: Obligate anaerobic archaebacteria found in marshy areas and the rumens of cattle that produce methane gas.'
    ],
    formulas: [
      { name: 'Linnaean Taxonomic Hierarchy', formula: 'K \\rightarrow P \\rightarrow C \\rightarrow O \\rightarrow F \\rightarrow G \\rightarrow S', explanation: 'Sequence from broadest Kingdom to fundamental biological Species unit.', units: 'Taxonomy' }
    ],
    solvedExamples: [
      {
        question: 'Differentiate between viruses and viroids in terms of structural composition.',
        solution: '1. Viruses consist of a nucleic acid genetic core (either DNA or RNA) enclosed inside a protective protein coat called a capsid.\n2. Viroids consist solely of free, low molecular weight single-stranded RNA and completely lack any protein coat or capsid.',
        keyInsight: 'Viroids lack the protein capsid present in viruses.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c11-b1-01',
        subject: 'Biology',
        chapterId: 'c11-bio-01',
        chapterTitle: 'The Living World & Biological Classification',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which class of fungi is commonly known as "Fungi Imperfecti" because only their asexual or vegetative phases are known?',
        options: ['A) Phycomycetes', 'B) Ascomycetes', 'C) Basidiomycetes', 'D) Deuteromycetes'],
        correctAnswer: 'D',
        explanation: 'Deuteromycetes are called imperfect fungi because they lack a known sexual reproduction stage; when sexual stages are discovered, species are moved into Ascomycetes or Basidiomycetes.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Botany & Zoology',
    order: 2,
    title: 'Plant Kingdom & Animal Kingdom',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'The Living World & Biological Classification',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Plant Kingdom: Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae, pigments, food reserves, flagellation), Bryophytes (Liverworts and Mosses), Pteridophytes (Lycopsida, Sphenopsida, Pteropsida), Gymnosperms (Pinus, Cycas, mycorrhiza, coralloid roots), Angiosperms; Animal Kingdom: Levels of organization, symmetry (radial vs bilateral), coelom (acoelomate, pseudocoelomate, coelomate), non-chordate phyla (Porifera to Hemichordata), and Chordates (Urochordata, Cephalochordata, Vertebrata: Cyclostomes, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia).',
    introduction: 'From single-cell green Chlamydomonas to towering Californian redwoods, and from sea sponges to blue whales, animal and plant diversity spans immense evolutionary milestones. Classification by germ layers, coelom, and embryology underpins NEET zoology.',
    topics: [
      'Algae Classification: Chlorophyceae (Chlorophyll a,b; Starch), Phaeophyceae (Fucoxanthin; Laminarin/Mannitol; Algin), Rhodophyceae (r-Phycoerythrin; Floridean starch; Agar from *Gelidium*)',
      'Bryophytes: Gametophyte dominant haploid stage, Sporophyte dependent (*Sphagnum* peat moss with high water retention)',
      'Pteridophytes: Sporophyte dominant vascular plants (*Ferns, Selaginella* showing heterospory & seed habit precursor)',
      'Gymnosperms: Naked seeds, Mycorrhizal roots in *Pinus*, Nitrogen-fixing Coralloid roots in *Cycas*, *Sequoia* giant redwood',
      'Animal Kingdom Body Plans: Diploblastic vs Triploblastic, Asymmetry, Radial (Coelenterata, Adult Echinoderms) vs Bilateral Symmetry',
      'Body Cavity (Coelom): Acoelomate (Platyhelminthes), Pseudocoelomate (Aschelminthes / Roundworms), Coelomate (Annelids to Chordates)',
      'Invertebrate Phyla: Porifera (Canal system, choanocytes), Coelenterata (Cnidoblasts, metagenesis in *Obelia*), Ctenophora (Bioluminescence, comb plates), Platyhelminthes (Flame cells), Annelida (Metamerism, nephridia), Arthropoda (Chitinous exoskeleton, open circulation), Mollusca (Radula, mantle cavity), Echinodermata (Water vascular system)',
      'Chordata Diagnostic Features: Notochord, Dorsal hollow nerve cord, Paired pharyngeal gill slits, Post-anal tail'
    ],
    summaryNotes: `### Core Algae Comparison:
| Class | Common Name | Major Pigments | Stored Food | Cell Wall | Flagella |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Chlorophyceae** | Green Algae | Chlorophyll $a, b$ | Starch | Cellulose | $2-8$, equal, apical |
| **Phaeophyceae** | Brown Algae | Chlorophyll $a, c$, Fucoxanthin | Laminarin, Mannitol | Cellulose + Algin | 2, unequal, lateral |
| **Rhodophyceae** | Red Algae | Chlorophyll $a, d$, r-Phycoerythrin | Floridean Starch | Cellulose, Pectin, Polysulphate esters | **Absent** |
### Animalia High-Yield Diagnostics:
- **Choanocytes (Collar cells):** Line the spongocoel and canals in **Porifera (Sponges)**.
- **Cnidocytes / Nematocysts:** Stinging capsules in **Coelenterata**.
- **Flame Cells (Protonephridia):** Osmoregulation and excretion in **Platyhelminthes (Flatworms)**.
- **Pseudocoelom:** False body cavity derived from blastocoel found uniquely in **Aschelminthes (Roundworms)**.
- **Water Vascular System:** Unique locomotion and respiration system in **Echinodermata (Starfish)**.`,
    definitions: [
      'Metagenesis: The alternation of generations between sexual medusa and asexual polyp forms in cnidarians like Obelia.',
      'Pseudocoelomate: An animal whose body cavity is not lined by mesoderm; instead, the mesoderm is present as scattered pouches between ectoderm and endoderm.'
    ],
    formulas: [
      { name: 'Chordate Triad', formula: '\\text{Notochord} + \\text{Dorsal Hollow Nerve Cord} + \\text{Pharyngeal Slits}', explanation: 'Mandatory diagnostic anatomical features of phylum Chordata.', units: 'Morphology' }
    ],
    solvedExamples: [
      {
        question: 'Identify the phylum in which adults exhibit radial symmetry, but their free-swimming larvae show bilateral symmetry.',
        solution: 'Phylum Echinodermata (such as starfish and sea urchins). Adult echinoderms exhibit pentamerous radial symmetry suited for sedentary bottom feeding, whereas their ciliated free-swimming larvae exhibit bilateral symmetry, revealing evolutionary chordate affinity.',
        keyInsight: 'Adult echinoderms are radially symmetrical; their larvae are bilaterally symmetrical.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c11-b2-01',
        subject: 'Biology',
        chapterId: 'c11-bio-02',
        chapterTitle: 'Plant Kingdom & Animal Kingdom',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which phylum is characterized by the presence of a pseudocoelom?',
        options: ['A) Platyhelminthes', 'B) Aschelminthes', 'C) Annelida', 'D) Arthropoda'],
        correctAnswer: 'B',
        explanation: 'Aschelminthes (roundworms such as Ascaris) are uniquely pseudocoelomates; platyhelminthes are acoelomates, and annelids are true coelomates.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Cytology, Biochemistry & Cell Cycle',
    order: 3,
    title: 'Cell: The Unit of Life, Biomolecules & Cell Cycle',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 9 The Fundamental Unit of Life: Cell',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Prokaryotic vs eukaryotic cell architecture, Singer-Nicolson Fluid Mosaic Model of plasma membrane, endomembrane system (ER, Golgi, Lysosomes, Vacuoles), semiautonomous organelles (Mitochondria & Chloroplasts with 70S ribosomes), cytoskeleton, cilia & flagella ($9+2$ axoneme), Biomolecules: Carbohydrates, Lipids, Proteins (primary, secondary, tertiary, quaternary structure), Nucleic Acids (DNA double helix, Watson & Crick), Enzymes (activation energy, Michaelis-Menten, competitive inhibition), and Cell Cycle & Cell Division: Interphase ($G_1, S, G_2$), Mitosis, and Meiosis (Prophase I substages: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis, crossing over).',
    introduction: 'All life is chemistry organized inside cells. From the lipid bilayer described by Singer and Nicolson to the enzyme active sites lowering transition-state activation energy, molecular cytology explains cellular replication and genetic inheritance.',
    topics: [
      'Cell Membrane: Singer and Nicolson’s Fluid Mosaic Model (1972) - Phospholipid bilayer with integral and peripheral proteins',
      'Endomembrane System: Endoplasmic Reticulum (RER & SER), Golgi Apparatus (Cis and Trans faces, Glycosylation), Lysosomes, Vacuoles',
      'Mitochondria and Chloroplasts: Endosymbiotic origin, Double membrane, Semiautonomous genome, 70S ribosomes',
      'Nucleus: Nuclear envelope, Chromatin, Euchromatin (active, light) vs Heterochromatin (inactive, dark), Centromere positions',
      'Biomolecules: Amino acids (Zwitterion), Proteins ($1^\\circ, 2^\\circ$ $\\alpha$-helix/$\\beta$-sheet, $3^\\circ$ tertiary folding for active site, $4^\\circ$ e.g., Hemoglobin)',
      'Enzyme Kinetics: Lowering activation energy, Lock-and-Key hypothesis, Competitive Inhibition (e.g., Malonate inhibiting Succinate dehydrogenase)',
      'The Cell Cycle: Interphase ($G_1$ preparation, $S$ phase - DNA replication & centriole duplication, $G_2$ phase), $G_0$ Quiescent phase',
      'Meiosis Prophase I Stages: Leptotene (Chromatin condenses), Zygotene (Synapsis / Synaptonemal complex), Pachytene (Crossing over via Recombinase enzyme), Diplotene (Chiasmata visible), Diakinesis (Terminalization)'
    ],
    summaryNotes: `### Core High-Yield Cytology & Biochemistry:
1. **Fluid Mosaic Model (1972):**
   - Quasi-fluid nature of lipids enables lateral movement of proteins within the overall bilayer.
2. **Prophase I Substages of Meiosis (Crucial NEET Area):**
   - **Leptotene:** Chromosomes become gradually visible under light microscope.
   - **Zygotene:** Homologous chromosomes pair together (**Synapsis**), forming a **Synaptonemal complex** (bivalent or tetrad).
   - **Pachytene:** Exchange of genetic material between non-sister chromatids of homologous chromosomes (**Crossing Over** mediated by **Recombinase** enzyme).
   - **Diplotene:** Dissolution of synaptonemal complex; homologous chromosomes separate except at X-shaped crossover sites called **Chiasmata**.
   - **Diakinesis:** Complete **terminalization** of chiasmata and breakdown of nuclear envelope.
3. **Competitive Enzyme Inhibition:**
   - Inhibitor closely resembles substrate in molecular structure and competes for the active site (e.g., **Malonate** inhibits **Succinate Dehydrogenase** because it mimics succinate). $K_m$ increases, $V_{max}$ remains unchanged!`,
    definitions: [
      'Synapsis: The pairing of two homologous chromosomes that occurs during the zygotene stage of meiosis I.',
      'Competitive Inhibition: A form of enzyme inhibition where an inhibitor compound resembling the substrate binds reversibly to the active site, preventing substrate binding.'
    ],
    formulas: [
      { name: 'DNA Base Pairing Rule', formula: 'A = T \\quad (2 \\text{ H-bonds}); \\quad G \\equiv C \\quad (3 \\text{ H-bonds})', explanation: 'Chargaff\'s equivalence rules for double-stranded DNA.', units: 'Molecular genetics' }
    ],
    solvedExamples: [
      {
        question: 'During which specific substage of Prophase I of Meiosis does crossing over (genetic recombination) occur?',
        solution: 'Crossing over takes place specifically during the Pachytene substage of Prophase I. The recombinase enzyme facilitates reciprocal exchange of non-sister chromatid segments between paired homologous chromosomes.',
        keyInsight: 'Pachytene is the site of crossing over mediated by recombinase.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c11-b3-01',
        subject: 'Biology',
        chapterId: 'c11-bio-03',
        chapterTitle: 'Cell: The Unit of Life, Biomolecules & Cell Cycle',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In a cell cycle, replication of chromosomal DNA takes place during which specific phase?',
        options: ['A) G₁ phase', 'B) S phase', 'C) G₂ phase', 'D) M phase'],
        correctAnswer: 'B',
        explanation: 'During the S (Synthesis) phase of interphase, nuclear DNA is completely replicated, doubling the quantity of DNA per cell from 2C to 4C, while chromosome number remains 2n.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Plant Physiology',
    order: 4,
    title: 'Plant Physiology',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Cell: The Unit of Life, Biomolecules & Cell Cycle',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Photosynthesis in higher plants (chloroplast pigments, absorption & action spectrum, Light Reaction: Photosystem I & II, Z-scheme, photolysis of water, cyclic & non-cyclic photophosphorylation, Chemiosmotic hypothesis by Peter Mitchell), Dark Reaction (Calvin C3 cycle & RuBisCO, C4 Hatch-Slack pathway & Kranz anatomy, photorespiration, factors affecting photosynthesis: Blackman’s Law of Limiting Factors), Respiration in Plants (Glycolysis / EMP pathway, fermentation, Krebs / TCA cycle, Electron Transport System & Oxidative Phosphorylation, Respiratory Quotient RQ), and Plant Growth Regulators (Auxin, Gibberellin, Cytokinin, Ethylene, Abscisic Acid, Photoperiodism).',
    introduction: 'Plants produce the oxygen we breathe and the glucose that fuels the planet. Photosynthetic light reactions convert photon energy into ATP and NADPH, while the C4 Hatch-Slack pathway prevents wasteful photorespiration in tropical crops like maize and sugarcane.',
    topics: [
      'Photosynthetic Pigments: Chlorophyll a (Reaction center), Chlorophyll b, Xanthophylls, Carotenoids (Accessory pigments preventing photo-oxidation)',
      'Light Reaction (Hill Reaction): Photosystem II (P680) and Photosystem I (P700); Non-Cyclic Photophosphorylation (Z-Scheme) producing ATP & NADPH',
      'Photolysis of Water: $2H_2O \\xrightarrow{Mn^{2+}, Cl^-} 4H^+ + 4e^- + O_2\\uparrow$',
      'Chemiosmotic Hypothesis (Peter Mitchell): Proton gradient across thylakoid membrane drives ATP Synthase ($F_0-F_1$ complex)',
      'The Calvin Cycle (C3 Pathway): Carbon fixation catalyzed by RuBisCO (Carboxylation → Reduction → Regeneration of RuBP)',
      'The C4 Pathway (Hatch-Slack Pathway): Kranz Anatomy (Mesophyll and Bundle Sheath cells), PEP Carboxylase, Absence of Photorespiration in Maize & Sugarcane',
      'Cellular Respiration in Plants: Glycolysis in Cytoplasm (EMP pathway: 1 Glucose → 2 Pyruvate, net 2 ATP + 2 NADH)',
      'Krebs Cycle (TCA Cycle in Mitochondrial Matrix): Acetyl-CoA condensation, $3 NADH + 1 FADH_2 + 1 GTP$ per turn',
      'Electron Transport System (ETS) & Chemiosmotic ATP synthesis in Inner Mitochondrial Membrane',
      'Respiratory Quotient: $RQ = \\text{Volume of } CO_2 \\text{ evolved} / \\text{Volume of } O_2 \\text{ consumed}$ (Carbohydrates $RQ = 1.0$, Fats $RQ = 0.7$, Proteins $RQ = 0.9$)',
      'Phytohormones: Ethylene (Gaseous fruit ripening), Photoperiodism (Short-day vs Long-day plants, Florigen)'
    ],
    summaryNotes: `### Core Photosynthetic & Respiration Mechanisms:
1. **RuBisCO (Most Abundant Enzyme on Earth):**
   - Possesses both carboxylase and oxygenase activity.
   - When oxygen concentration is high in C3 plants, RuBisCO binds $O_2$ instead of $CO_2$, initiating **Photorespiration**—a wasteful process that consumes ATP without synthesizing sugar!
2. **C4 Kranz Anatomy (Maize, Sugarcane):**
   - Mesophyll cells fix $CO_2$ via **PEP Carboxylase** into 4-carbon Oxaloacetic Acid (OAA).
   - Transported into bundle sheath cells where $CO_2$ is released around RuBisCO, ensuring high local $CO_2$ concentration.
   - **Zero photorespiration!** Gives C4 plants superior photosynthetic efficiency in high temperatures.
3. **ATP Yield in Aerobic Respiration:**
   - 1 molecule of Glucose produces **$36 - 38$ ATP** molecules through complete aerobic oxidation.`,
    definitions: [
      'Kranz Anatomy: A specialized leaf anatomy in C4 plants featuring large bundle sheath cells with agranal chloroplasts arranged like a wreath around vascular bundles.',
      'Photorespiration: A light-dependent respiratory process in C3 plants where RuBisCO binds oxygen instead of carbon dioxide, wasting photosynthetic energy.'
    ],
    formulas: [
      { name: 'Respiratory Quotient', formula: 'RQ = \\frac{\\text{Volume of } CO_2 \\text{ evolved}}{\\text{Volume of } O_2 \\text{ consumed}}', explanation: 'Substrate-specific respiration ratio (Carbohydrates = 1.0, Fats = 0.7).', units: 'Ratio' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the Respiratory Quotient (RQ) for the complete oxidation of Tripalmitin (C₅₁H₉₈O₆) given the equation: 2 C₅₁H₉₈O₆ + 145 O₂ → 102 CO₂ + 98 H₂O + Energy.',
        solution: 'RQ = (Volume of CO₂ evolved) / (Volume of O₂ consumed) = 102 / 145 ≈ 0.7.',
        keyInsight: 'Fatty acid substrates have an RQ value around 0.7 because they require more oxygen relative to carbon.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c11-b4-01',
        subject: 'Biology',
        chapterId: 'c11-bio-04',
        chapterTitle: 'Plant Physiology',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In C4 plants, the primary carbon dioxide acceptor in mesophyll cells is:',
        options: ['A) RuBP', 'B) Phosphoenolpyruvate (PEP)', 'C) Oxaloacetate (OAA)', 'D) Phosphoglycerate (PGA)'],
        correctAnswer: 'B',
        explanation: 'In C4 plants, PEP (Phosphoenolpyruvate) is the primary CO₂ acceptor in mesophyll cells, catalyzed by the enzyme PEP carboxylase to form 4-carbon oxaloacetic acid.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c11-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Human Physiology',
    order: 5,
    title: 'Human Physiology',
    stage: 'intermediate',
    classLevel: 'Class 11',
    priority: 'High priority',
    prerequisite: 'Class 10 Life Processes',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Human organ systems: Digestion and Absorption (dental formula, salivary, gastric, pancreatic, and intestinal enzymes, absorption of carbohydrates, proteins, and fats into lacteals), Breathing and Exchange of Gases (respiratory volumes: TV, IRV, ERV, RV, VC, TLC, transport of gases, oxygen-hemoglobin dissociation curve, Bohr effect), Body Fluids and Circulation (cardiac cycle, ECG waveforms: P, QRS, T, double circulation, regulation of cardiac activity, hypertension, CAD, angina), Excretory Products and Their Elimination (counter-current mechanism in loop of Henle and vasa recta, regulation by ADH, renin-angiotensin-aldosterone system RAAS, ANF), Locomotion and Movement (sliding filament theory of muscle contraction, actin, myosin, troponin, human skeletal system), and Neural Control & Chemical Coordination (synaptic transmission, human brain, endocrine feedback mechanisms).',
    introduction: 'Human physiology is the crown jewel of the NEET medical entrance exam. From the millimeter-precise counter-current multiplier in renal nephrons to the sliding of actin-myosin filaments in cardiac muscle, human physiology demands rigorous understanding of homeostatic regulation.',
    topics: [
      'Digestion: Digestion of starch (amylase), proteins (pepsin, trypsin, chymotrypsin, carboxypeptidase), fats (bile emulsification, micelle formation, chylomicrons entering lacteals)',
      'Pulmonary Volumes and Capacities: Tidal Volume ($500\\text{ mL}$), Residual Volume, Vital Capacity ($VC = TV + IRV + ERV$)',
      'Transport of Gases: Oxygen transport ($97\\%$ bound to hemoglobin as oxyhemoglobin), Oxygen-Hemoglobin Dissociation Curve (Sigmoid curve, Bohr effect: shifted right by high $pCO_2$, low pH, high temp)',
      '$CO_2$ Transport: $70\\%$ as Bicarbonate ions ($HCO_3^-$ with Carbonic Anhydrase enzyme), $23\\%$ as Carbaminohemoglobin, $7\\%$ dissolved in plasma',
      'Cardiac Cycle ($0.8\\text{ seconds}$): Atrial systole ($0.1\\text{ s}$), Ventricular systole ($0.3\\text{ s}$), Joint diastole ($0.4\\text{ s}$); Electrocardiogram (ECG: P wave = Atrial depolarization, QRS complex = Ventricular depolarization, T wave = Ventricular repolarization)',
      'Kidney Counter-Current Mechanism: Loop of Henle and Vasa Recta maintaining hyperosmolar medullary interstitium ($300 \\rightarrow 1200\\text{ mOsmol/L}$)',
      'Endocrine Regulation of Osmolarity: Hypothalamus releasing ADH (Vasopressin), Renin-Angiotensin-Aldosterone System (RAAS), and Atrial Natriuretic Factor (ANF vasodilator)',
      'Sliding Filament Theory of Muscle Contraction: $Ca^{2+}$ binding to Troponin-C unmasking Myosin binding sites on Actin filaments, Cross-bridge cycle driven by ATP hydrolysis'
    ],
    summaryNotes: `### High-Yield Medical Diagnostics:
1. **Oxygen-Hemoglobin Dissociation Sigmoid Curve:**
   - **Shift to Right (Enhanced O₂ unloading at tissues - Bohr Effect):** High $pCO_2$, high $H^+$ (acidic pH), high temperature, high 2,3-BPG.
   - **Shift to Left (Enhanced O₂ loading at alveoli):** Low $pCO_2$, high pH (alkaline), low temperature.
2. **ECG Standard Waves:**
   - **P Wave:** Depolarization of atria (leads to atrial contraction).
   - **QRS Complex:** Depolarization of ventricles (marks start of ventricular systole).
   - **T Wave:** Repolarization of ventricles (recovery to diastole).
3. **Renal Counter-Current Multiplier:**
   - Descending limb of Loop of Henle: Permeable to water, impermeable to electrolytes (filtrate becomes concentrated).
   - Ascending limb of Loop of Henle: Impermeable to water, actively transports electrolytes ($NaCl$) out into interstitial fluid.`,
    definitions: [
      'Bohr Effect: The physiological decrease in hemoglobin\'s affinity for oxygen caused by an increase in carbon dioxide concentration and hydrogen ions (lower pH).',
      'Vital Capacity (VC): The maximum volume of air a person can breathe in after a forced expiration (VC = ERV + TV + IRV).'
    ],
    formulas: [
      { name: 'Cardiac Output Equation', formula: '\\text{Cardiac Output} = \\text{Stroke Volume } (70\\text{ mL}) \\times \\text{Heart Rate } (72\\text{ bpm}) \\approx 5040\\text{ mL/min}', explanation: 'Volume of blood pumped by each ventricle per minute.', units: 'mL/min' },
      { name: 'Vital Capacity Relation', formula: 'VC = TV + IRV + ERV', explanation: 'Standard clinical spirometry lung capacity equation.', units: 'mL' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the total cardiac output of a healthy human being having a resting heart rate of 75 beats per minute and a stroke volume of 70 mL.',
        solution: 'Cardiac Output = Stroke Volume * Heart Rate = 70 mL * 75 beats/min = 5250 mL/min = 5.25 Litres/min.',
        keyInsight: 'Multiply stroke volume by beats per minute to find cardiac output.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c11-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c11-b5-01',
        subject: 'Biology',
        chapterId: 'c11-bio-05',
        chapterTitle: 'Human Physiology',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'On an Electrocardiogram (ECG), which electrical wave represents the depolarization of the ventricles?',
        options: ['A) P wave', 'B) QRS complex', 'C) T wave', 'D) P-R interval'],
        correctAnswer: 'B',
        explanation: 'The QRS complex corresponds to the electrical depolarization of the ventricles, triggering ventricular systole.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
