import { Chapter } from '../../types';

export const CLASS_12_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c12-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electromagnetism & Electrostatics',
    order: 1,
    title: 'Electrostatics & Electric Potential',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Work, Energy and Power',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Coulomb’s Law in vector form, superposition principle, electric field intensity & field lines, electric dipole (axial and equatorial fields, torque in uniform field), Gauss’s Law and flux ($\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = q_{in}/\\epsilon_0$), electric potential ($V = -\\int \\vec{E}\\cdot d\\vec{r}$), equipotential surfaces, capacitors (parallel plate, spherical, cylindrical), dielectrics and polarization, capacitance ($C = \\frac{K \\epsilon_0 A}{d}$), series and parallel combinations, and energy stored ($U = \\frac{1}{2}CV^2$).',
    introduction: 'Electrostatics governs forces between stationary electrical charges. Gauss’s law transforms difficult surface integrals into algebraic evaluations, and capacitors store electrical field energy to power defibrillators and high-speed laser pulses.',
    topics: [
      'Coulomb’s Law in Vector Form and Principle of Superposition: $\\vec{F}_{12} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}_{12}$',
      'Electric Field: Field due to point charge, continuous charge distribution (linear $\\lambda$, surface $\\sigma$, volume $\\rho$)',
      'Electric Dipole: Axial field ($E_{axial} = \\frac{2kp}{r^3}$), Equatorial field ($E_{eq} = \\frac{kp}{r^3}$), and Torque in uniform field ($\\vec{\\tau} = \\vec{p} \\times \\vec{E}$)',
      'Gauss’s Law: Electric flux and applications (Infinitely long wire $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$, Infinite sheet $E = \\frac{\\sigma}{2\\epsilon_0}$, Thin spherical shell)',
      'Electric Potential: Relation between Electric Field and Potential ($E = -\\frac{dV}{dr}$)',
      'Equipotential Surfaces: Properties (Electric field lines are always perpendicular to equipotential surfaces)',
      'Capacitors and Capacitance: Parallel plate capacitor ($C_0 = \\frac{\\epsilon_0 A}{d}$); Effect of dielectric slab ($C = \\frac{K\\epsilon_0 A}{d}$)',
      'Energy Stored in Capacitor: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}$; Energy density in electric field ($u = \\frac{1}{2}\\epsilon_0 E^2$)'
    ],
    summaryNotes: `### Core Electrostatic Formulas:
1. **Gauss's Law:**
   $$\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\epsilon_0}$$
2. **Electric Dipole Fields ($r \\gg 2a$):**
   - Axial line: $E_{axis} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}$
   - Equatorial line: $E_{equatorial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$
   - Potential Energy of dipole: $U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta$
3. **Capacitance & Dielectric:**
   $$C = \\frac{K \\epsilon_0 A}{d}$$
   - Energy stored: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}$
   - Energy density: $u_E = \\frac{1}{2}\\epsilon_0 E^2$ (Energy per unit volume).
   - If battery remains **connected** while inserting dielectric: $V = \\text{const}, C \\uparrow, Q \\uparrow, U \\uparrow$.
   - If battery is **disconnected** before inserting dielectric: $Q = \\text{const}, C \\uparrow, V \\downarrow, U \\downarrow$.`,
    definitions: [
      'Gauss\'s Law: The total electric flux through any closed Gaussian surface in free space is equal to 1/ε₀ times the net electric charge enclosed by the surface.',
      'Equipotential Surface: A surface in an electric field over which the electric potential is constant at every point, meaning no work is done moving a test charge on it.'
    ],
    formulas: [
      { name: 'Gauss\'s Law for Electrostatics', formula: '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{in}}{\\epsilon_0}', explanation: 'Fundamental Maxwell equation relating electric flux to enclosed charge.', units: 'N·m²/C' },
      { name: 'Parallel Plate Capacitance', formula: 'C = \\frac{K \\epsilon_0 A}{d}', explanation: 'Capacitance of plates of area A separated by distance d with dielectric K.', units: 'Farads (F)' }
    ],
    solvedExamples: [
      {
        question: 'A parallel plate capacitor with air between plates has a capacitance of 8 pF. What will be the capacitance if the distance between plates is halved and the space is filled with dielectric constant K = 6?',
        solution: 'Initial capacitance C₀ = (ε₀ A) / d = 8 pF.\nNew capacitance C = (K * ε₀ A) / (d / 2) = 2 * K * [(ε₀ A) / d] = 2 * 6 * 8 pF = 96 pF.',
        keyInsight: 'Halving distance doubles capacitance; multiplying by dielectric K multiplies capacitance by K.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c12-p1-01',
        subject: 'Physics',
        chapterId: 'c12-phys-01',
        chapterTitle: 'Electrostatics & Electric Potential',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'An electric dipole of moment p is placed in a uniform electric field E at angle θ = 0° (stable equilibrium). What is the work done in rotating the dipole to θ = 180°?',
        options: ['A) 0', 'B) pE', 'C) 2pE', 'D) -2pE'],
        correctAnswer: 'C',
        explanation: 'Work done W = U_final - U_initial = -pE cos(180°) - (-pE cos(0°)) = -pE(-1) - (-pE)(1) = pE + pE = 2pE.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Current Electricity & Circuit Analysis',
    order: 2,
    title: 'Current Electricity',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 10 Electricity',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Drift velocity & relaxation time ($I = n e A v_d$), microscopic Ohm’s Law ($\\vec{J} = \\sigma \\vec{E}$), temperature dependence of resistance ($\\alpha$), internal resistance ($r$), electromotive force (EMF $\\mathcal{E}$), Kirchhoff’s Laws (Junction rule KCL and Loop rule KVL), Wheatstone Bridge balanced condition ($P/Q = R/S$), Meter Bridge, and Potentiometer (comparing EMFs, internal resistance determination).',
    introduction: 'Behind the macroscopic glow of an electric filament lies the microscopic drift of billions of electrons colliding with metal lattice ions. Kirchhoff’s Laws allow engineers to analyze complex multi-loop circuits and calculate electrical power dissipation.',
    topics: [
      'Microscopic Current Conduction: Electron drift, Drift Velocity ($v_d = \\frac{e E \\tau}{m}$), Current relation ($I = n e A v_d$)',
      'Vector Ohm\'s Law: Current density $\\vec{J} = \\sigma \\vec{E} = \\frac{\\vec{E}}{\\rho}$',
      'Temperature Dependence of Resistance: $R_T = R_0 (1 + \\alpha \\Delta T)$ (Positive $\\alpha$ for metals, Negative $\\alpha$ for semiconductors)',
      'EMF and Terminal Voltage of a Cell: $V = \\mathcal{E} - I r$ (during discharge) and $V = \\mathcal{E} + I r$ (during charging)',
      'Grouping of Cells in Series, Parallel, and Mixed Combinations for Maximum Current',
      'Kirchhoff’s Current Law (KCL - Conservation of Charge) and Kirchhoff’s Voltage Law (KVL - Conservation of Energy)',
      'Wheatstone Bridge: Derivation of balanced bridge condition $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$',
      'Potentiometer Principle: Potential gradient $k = V/L$; Comparing EMFs ($\\frac{\\mathcal{E}_1}{\\mathcal{E}_2} = \\frac{l_1}{l_2}$) and Internal Resistance ($r = R[\\frac{l_1}{l_2} - 1]$)'
    ],
    summaryNotes: `### Core Circuit Theorems:
1. **Drift Velocity & Mobility:**
   $$v_d = \\frac{e E \\tau}{m}, \\quad I = n e A v_d$$
   $$\\mu = \\frac{v_d}{E} = \\frac{e \\tau}{m} \\quad (\\text{Mobility})$$
2. **Kirchhoff's Circuit Laws:**
   - **KCL (Junction Rule):** $\\sum I_{in} = \\sum I_{out}$ (Based on **Conservation of Charge**).
   - **KVL (Loop Rule):** $\\sum \\Delta V = 0$ in any closed loop (Based on **Conservation of Energy**).
3. **Potentiometer Measurements:**
   - Null deflection method (Draws **zero current** at balance point, acting like an ideal infinite resistance voltmeter!).
   - Comparison of EMFs: $\\frac{\\mathcal{E}_1}{\\mathcal{E}_2} = \\frac{l_1}{l_2}$
   - Internal Resistance of Cell:
     $$r = R \\left(\\frac{l_1 - l_2}{l_2}\\right)$$`,
    definitions: [
      'Drift Velocity: The average velocity acquired by free conduction electrons in a metallic conductor opposite to the direction of an applied electric field.',
      'Potentiometer: A precision electrical instrument based on the null-deflection principle used to measure potential differences and internal resistance without drawing current.'
    ],
    formulas: [
      { name: 'Current Drift Relation', formula: 'I = n e A v_d', explanation: 'Relates macroscopic current to electron carrier density n and drift velocity vd.', units: 'Amperes (A)' },
      { name: 'Potentiometer Internal Resistance', formula: 'r = R \\left(\\frac{l_1}{l_2} - 1\\right)', explanation: 'Internal resistance measured via open-circuit and closed-circuit balancing lengths.', units: 'Ohms (Ω)' }
    ],
    solvedExamples: [
      {
        question: 'In a potentiometer experiment, a cell of EMF 1.25 V gives a balance point at 35.0 cm length of the wire. If another cell gives a balance point at 63.0 cm, what is the EMF of the second cell?',
        solution: 'From potentiometer principle: E₁ / E₂ = l₁ / l₂\n1.25 / E₂ = 35.0 / 63.0 => E₂ = (1.25 * 63.0) / 35.0 = 1.25 * 1.8 = 2.25 Volts.',
        keyInsight: 'EMF is directly proportional to balancing wire length in a potentiometer.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c12-p2-01',
        subject: 'Physics',
        chapterId: 'c12-phys-02',
        chapterTitle: 'Current Electricity',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Kirchhoff’s First Rule (Junction rule ΣI = 0) and Second Rule (Loop rule ΣΔV = 0) are based on the conservation of which respective physical quantities?',
        options: ['A) Energy and Momentum', 'B) Charge and Energy', 'C) Momentum and Charge', 'D) Charge and Mass'],
        correctAnswer: 'B',
        explanation: 'KCL (Junction rule) represents conservation of electric charge, and KVL (Loop rule) represents conservation of energy.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electromagnetism & Magnetostatics',
    order: 3,
    title: 'Magnetic Effects of Current & Magnetism',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Current Electricity',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Biot-Savart Law ($d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2}$), field due to circular loop (on axis and center), Ampere’s Circuital Law ($\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}$), straight wire, solenoid, toroid, Lorentz force ($\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$), motion of charged particle in magnetic field (helical path), cyclotron, force between two parallel currents (1 Ampere definition), torque on current loop ($\\vec{\\tau} = \\vec{M} \\times \\vec{B}$), Moving Coil Galvanometer (shunts, conversion to ammeter and voltmeter), Earth’s magnetic elements, and magnetic materials (Diamagnetic, Paramagnetic, Ferromagnetic & Curie Law).',
    introduction: 'Moving electric charges create magnetic fields, and magnetic fields exert forces on moving charges. The Biot-Savart law and Ampere’s law allow calculating magnetic fields around solenoids, MRI magnets, and toroidal fusion reactors.',
    topics: [
      'Biot-Savart Law: Vector formulation ($d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2}$); Magnetic field on the axis of circular coil ($B = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$)',
      'Ampere’s Circuital Law and Applications: Long straight wire ($B = \\frac{\\mu_0 I}{2\\pi r}$), Solenoid ($B = \\mu_0 n I$), Toroid',
      'Lorentz Force: $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$; Helical motion of charged particles in uniform magnetic field ($r = \\frac{mv}{qB}, T = \\frac{2\\pi m}{qB}$)',
      'Velocity Selector: $\\vec{E} \\perp \\vec{B} \\perp \\vec{v} \\implies v = E/B$',
      'Force between Two Parallel Current-Carrying Wires: $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ and the Official SI Definition of 1 Ampere',
      'Torque on a Current Loop: $\\vec{\\tau} = \\vec{M} \\times \\vec{B} = N I A B \\sin\\theta$ (Magnetic Dipole Moment $\\vec{M} = N I \\vec{A}$)',
      'Moving Coil Galvanometer: Working principle, Current sensitivity, Voltage sensitivity, Conversion to Ammeter ($S = \\frac{I_g R_g}{I - I_g}$) and Voltmeter ($R = \\frac{V}{I_g} - R_g$)',
      'Magnetic Properties of Matter: Diamagnetism ($\\chi < 0$, repelled by magnet), Paramagnetism ($\\chi > 0$, Curie\'s Law $\\chi \\propto 1/T$), Ferromagnetism (Hysteresis loop)'
    ],
    summaryNotes: `### Core Magnetostatic Formulations:
1. **Lorentz Force & Helical Motion:**
   $$\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$$
   - If $\\vec{v} \\perp \\vec{B}$: Particle moves in a circle of radius:
     $$r = \\frac{mv}{qB} = \\frac{p}{qB} = \\frac{\\sqrt{2mqV}}{qB}$$
   - Cyclotron frequency: $\\nu = \\frac{qB}{2\\pi m}$ (**independent of speed and radius**!).
2. **Force between Parallel Wires:**
   $$\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$
   - Parallel currents in same direction **attract**; opposite currents **repel**.
3. **Galvanometer Conversions:**
   - **To Ammeter:** Connect a small resistance (**Shunt $S$**) in **parallel**:
     $$S = \\frac{I_g R_g}{I - I_g}$$
   - **To Voltmeter:** Connect a high resistance ($R$) in **series**:
     $$R = \\frac{V}{I_g} - R_g$$`,
    definitions: [
      'Ampere (SI Unit): That constant current which, if maintained in two straight parallel conductors of infinite length of negligible cross-section placed 1 meter apart in vacuum, produces between them a force equal to 2 × 10⁻⁷ N per meter of length.',
      'Curie\'s Law: For paramagnetic materials, magnetic susceptibility is inversely proportional to absolute thermodynamic temperature: χ = C / T.'
    ],
    formulas: [
      { name: 'Cyclotron Radius Formula', formula: 'r = \\frac{mv}{qB}', explanation: 'Gyroradius of charged particle orbiting in uniform magnetic field.', units: 'meters (m)' },
      { name: 'Parallel Wire Force', formula: '\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}', explanation: 'Mutual magnetic force per unit length between parallel wires.', units: 'N/m' }
    ],
    solvedExamples: [
      {
        question: 'A galvanometer with coil resistance 50 Ω gives full-scale deflection for a current of 10 mA. What shunt resistance is needed to convert it into an ammeter of range 0 to 5 A?',
        solution: 'R_g = 50 Ω, I_g = 0.01 A, I = 5 A.\nShunt S = (I_g * R_g) / (I - I_g) = (0.01 * 50) / (5 - 0.01) = 0.5 / 4.99 ≈ 0.1002 Ω in parallel.',
        keyInsight: 'Connect a tiny shunt resistance in parallel to bypass excess current around the galvanometer coil.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c12-p3-01',
        subject: 'Physics',
        chapterId: 'c12-phys-03',
        chapterTitle: 'Magnetic Effects of Current & Magnetism',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'A proton and an alpha particle enter perpendicularly into a uniform magnetic field with equal kinetic energies. The ratio of their orbital radii (r_proton / r_alpha) is:',
        options: ['A) 1 : 1', 'B) 1 : 2', 'C) 2 : 1', 'D) 1 : 4'],
        correctAnswer: 'A',
        explanation: 'r = √(2mK) / (qB). r ∝ √(m) / q. For proton: √(1)/1 = 1. For alpha particle: m = 4, q = 2 => √(4)/2 = 2/2 = 1. The ratio is 1 : 1.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electromagnetic Induction & AC Circuits',
    order: 4,
    title: 'Electromagnetic Induction & Alternating Currents',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Magnetic Effects of Current & Magnetism',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Magnetic flux ($\\Phi_B = \\vec{B} \\cdot \\vec{A}$), Faraday’s Laws of Induction, Lenz’s Law and conservation of energy, motional EMF ($\\mathcal{E} = Blv$), eddy currents, self-inductance ($L$) and mutual inductance ($M$), alternating current representation by phasors, AC through pure R, L, C, series LCR circuit (impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$), electrical resonance ($\\omega_0 = \\frac{1}{\\sqrt{LC}}$), Q-factor, power in AC circuits ($P = V_{rms} I_{rms} \\cos\\phi$), and transformer efficiency ($V_s/V_p = N_s/N_p$).',
    introduction: 'In 1831, Michael Faraday rotated a copper disc between the poles of a horseshoe magnet, generating the world\'s first continuous electric current. Alternating current circuits governed by impedance phasors and resonance drive telecommunication antennas and electrical grids.',
    topics: [
      'Magnetic Flux: $\\Phi_B = \\vec{B} \\cdot \\vec{A} = B A \\cos\\theta$ (Unit: Weber, Wb)',
      'Faraday’s Law of Electromagnetic Induction: $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$',
      'Lenz’s Law: The direction of induced EMF always opposes the change in magnetic flux that creates it (Consequence of Conservation of Energy)',
      'Motional EMF: Induced EMF in a conductor moving through magnetic field: $\\mathcal{E} = B l v$',
      'Self-Inductance ($L = \\frac{N\\Phi}{I} = \\mu_0 n^2 A l$) and Energy Stored in Inductor ($U = \\frac{1}{2} L I^2$)',
      'Mutual Inductance ($M = \\frac{\\mu_0 N_1 N_2 A}{l}$)',
      'Alternating Current and Voltage: Peak value vs RMS value ($I_{rms} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$)',
      'Series LCR Circuit: Inductive Reactance ($X_L = \\omega L$), Capacitive Reactance ($X_C = \\frac{1}{\\omega C}$), Total Impedance ($Z = \\sqrt{R^2 + (X_L - X_C)^2}$)',
      'Resonance in LCR Circuits: Resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, Sharpness of Resonance (Quality Factor $Q = \\frac{\\omega_0 L}{R}$)',
      'Power Factor: $\\cos\\phi = R/Z$; Wattless Current (when $\\phi = 90^\\circ$ in pure inductor or capacitor)',
      'Transformers: Step-Up vs Step-Down, Transformation Ratio $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$'
    ],
    summaryNotes: `### Core AC & EMI Formulas:
1. **Lenz's Law & Faraday:**
   $$\\mathcal{E} = -N \\frac{d\\Phi}{dt}$$
2. **Series LCR Circuit Phasor Analysis:**
   - Impedance:
     $$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}$$
   - Phase Angle:
     $$\\tan\\phi = \\frac{X_L - X_C}{R}$$
   - Power Factor: $\\cos\\phi = \\frac{R}{Z}$.
3. **Resonance Condition ($X_L = X_C$):**
   $$\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}} \\implies f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$
   - At resonance: Impedance is **minimum** ($Z = R$), current is **maximum**, power factor $\\cos\\phi = 1$.
4. **Ideal Transformer:**
   $$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$$`,
    definitions: [
      'Lenz\'s Law: The polarity of induced electromotive force is such that it produces a current whose magnetic field opposes the change in magnetic flux that produced it.',
      'Resonance in LCR Circuit: The condition under which the inductive reactance equals capacitive reactance, causing impedance to drop to its minimum resistive value and current to peak.'
    ],
    formulas: [
      { name: 'Series LCR Impedance', formula: 'Z = \\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}', explanation: 'Total AC impedance in series resistor-inductor-capacitor circuit.', units: 'Ohms (Ω)' },
      { name: 'Resonant Angular Frequency', formula: '\\omega_0 = \\frac{1}{\\sqrt{LC}}', explanation: 'Condition for electrical resonance in LCR circuit.', units: 'rad/s' }
    ],
    solvedExamples: [
      {
        question: 'A series LCR circuit has R = 10 Ω, L = 100 mH, and C = 25 μF. Find its resonant frequency f₀.',
        solution: 'L = 0.1 H, C = 25 * 10⁻⁶ F.\nω₀ = 1 / √(LC) = 1 / √[0.1 * 25 * 10⁻⁶] = 1 / √[2.5 * 10⁻⁶] = 1 / [1.581 * 10⁻³] ≈ 632.5 rad/s.\nFrequency f₀ = ω₀ / (2π) = 632.5 / (2 * 3.1416) ≈ 100.7 Hz.',
        keyInsight: 'Resonant frequency is independent of the circuit resistance R.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c12-p4-01',
        subject: 'Physics',
        chapterId: 'c12-phys-04',
        chapterTitle: 'Electromagnetic Induction & Alternating Currents',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In a purely inductive AC circuit where voltage V = V₀ sin(ωt), the current I lags behind the voltage by a phase angle of:',
        options: ['A) 0°', 'B) 45°', 'C) 90° (π/2)', 'D) 180° (π)'],
        correctAnswer: 'C',
        explanation: 'In a pure inductor, current lags voltage by 90° (π/2 radians), meaning voltage reaches its peak a quarter cycle ahead of current.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Wave Optics & Modern Physics',
    order: 5,
    title: 'Optics & Modern Physics',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 10 Light and Reflection',
    totalConcepts: 8,
    durationHours: 8.0,
    description: 'Lens Maker’s Formula ($\\frac{1}{f} = (n-1)[\\frac{1}{R_1} - \\frac{1}{R_2}]$), optical instruments (compound microscope, astronomical telescope), wave optics (Huygens’ wave theory, wavefronts), Young’s Double Slit Experiment (YDSE fringe width $\\beta = \\frac{\\lambda D}{d}$), single-slit diffraction, Photoelectric effect (Einstein’s equation $h\\nu = \\Phi_0 + K_{max}$, stopping potential $V_0$), de Broglie matter waves, Bohr model of hydrogen atom energy levels ($E_n = -\\frac{13.6}{n^2}\\text{ eV}$), and Nuclear Physics (mass defect, binding energy curve, radioactive decay law $N = N_0 e^{-\\lambda t}$, half-life $t_{1/2} = 0.693/\\lambda$).',
    introduction: 'Modern physics overturned classical mechanics at the dawn of the 20th century. Light behaves as both continuous electromagnetic waves in Young\'s interference slits and localized quantum photons in Einstein\'s photoelectric effect.',
    topics: [
      'Refraction at Spherical Surfaces and Lens Maker\'s Formula: $\\frac{1}{f} = (\\frac{n_2}{n_1} - 1) [\\frac{1}{R_1} - \\frac{1}{R_2}]$',
      'Optical Instruments: Magnification of Compound Microscope and Astronomical Telescope ($m = -\\frac{f_o}{f_e}$)',
      'Wave Optics: Huygens’ Principle, Plane and Spherical Wavefronts, Laws of Reflection and Refraction derived from wave theory',
      'Young’s Double Slit Experiment (YDSE): Path difference ($\\Delta x = \\frac{y d}{D}$), Constructive interference (bright fringes) vs Destructive (dark fringes), Fringe Width ($\\beta = \\frac{\\lambda D}{d}$)',
      'Diffraction of Light at Single Slit: Central maximum width ($2\\lambda D / a$)',
      'Photoelectric Effect: Experimental observations (Hertz, Hallwachs, Lenard), Work Function ($\\Phi_0 = h\\nu_0$), Stopping Potential ($e V_0 = K_{max}$)',
      'Einstein’s Photoelectric Equation: $h\\nu = \\Phi_0 + K_{max} = h\\nu_0 + e V_0$',
      'Atomic Physics: Bohr’s Quantization, Hydrogen energy levels ($E_n = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$), Spectral transitions',
      'Nuclear Physics: Mass Defect ($\\Delta m = [Z m_p + (A-Z)m_n] - M_{nucleus}$), Binding Energy per Nucleon, Nuclear Fission & Fusion'
    ],
    summaryNotes: `### Core Wave Optics & Quantum Formulations:
1. **Lens Maker\'s Formula:**
   $$\\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$
2. **Young's Double Slit Experiment (YDSE):**
   - Path difference: $\\Delta x = d \\sin\\theta \\approx \\frac{y d}{D}$
   - Bright fringe position: $y_n = n \\frac{\\lambda D}{d}$ ($n = 0, 1, 2, \\dots$)
   - Dark fringe position: $y_n\' = (2n - 1) \\frac{\\lambda D}{2d}$ ($n = 1, 2, \\dots$)
   - **Fringe Width:**
     $$\\beta = \\frac{\\lambda D}{d}$$
   - When apparatus is submerged in liquid of refractive index $\\mu$: $\\beta\' = \\frac{\\beta}{\\mu}$ (Fringes become narrower!).
3. **Einstein\'s Photoelectric Equation:**
   $$K_{max} = e V_0 = h\\nu - \\Phi_0 = h(\\nu - \\nu_0) = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right)$$
   - Stopping potential $V_0$ depends strictly on **frequency**, NOT on the intensity of light!
4. **Bohr Hydrogen Energy:**
   $$E_n = -\\frac{13.6}{n^2}\\text{ eV}$$`,
    definitions: [
      'Wavefront: The continuous geometric locus of all points in a medium oscillating in the exact same phase of vibration.',
      'Work Function: The minimum photon energy required to liberate an electron from the surface of a metal.'
    ],
    formulas: [
      { name: 'YDSE Fringe Width', formula: '\\beta = \\frac{\\lambda D}{d}', explanation: 'Linear spacing between consecutive bright or dark interference fringes.', units: 'meters (m)' },
      { name: 'Einstein Photoelectric Equation', formula: 'e V_0 = h\\nu - \\Phi_0', explanation: 'Relates stopping potential to incident photon frequency and work function.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'In a Young’s double slit experiment, the slit separation is 0.2 mm and the screen is 1.0 m away. If yellow light of wavelength 600 nm is used, find the fringe width.',
        solution: 'd = 0.2 mm = 0.2 * 10⁻³ m = 2 * 10⁻⁴ m.\nD = 1.0 m.\nλ = 600 nm = 600 * 10⁻⁹ m = 6 * 10⁻⁷ m.\nFringe width β = (λ * D) / d = (6 * 10⁻⁷ * 1.0) / (2 * 10⁻⁴) = 3 * 10⁻³ m = 3.0 mm.',
        keyInsight: 'Convert all dimensions into meters before applying β = λD/d.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c12-p5-01',
        subject: 'Physics',
        chapterId: 'c12-phys-05',
        chapterTitle: 'Optics & Modern Physics',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'When monochromatic light of frequency ν is incident on a metal, the stopping potential is V₀. If light of frequency 2ν is incident on the same metal, the new stopping potential will be:',
        options: ['A) Equal to 2 V₀', 'B) Greater than 2 V₀', 'C) Less than 2 V₀', 'D) Equal to V₀ / 2'],
        correctAnswer: 'B',
        explanation: 'From eV₀ = hν - Φ₀, eV_new = h(2ν) - Φ₀ = 2(hν - Φ₀) + Φ₀ = 2eV₀ + Φ₀. Thus V_new = 2V₀ + (Φ₀/e) > 2V₀.',
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
    id: 'c12-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Physical Chemistry & Solutions',
    order: 1,
    title: 'Solutions & Colligative Properties',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Some Basic Concepts of Chemistry',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Types of solutions, Henry’s Law ($p = K_H x$), Raoult’s Law for volatile solutes, ideal and non-ideal solutions (positive and negative deviations), azeotropes (minimum and maximum boiling), colligative properties: relative lowering of vapour pressure ($\\frac{P_1^\\circ - P_1}{P_1^\\circ} = x_2$), elevation in boiling point ($\\Delta T_b = K_b m$), depression in freezing point ($\\Delta T_f = K_f m$), osmotic pressure ($\\pi = C R T$), reverse osmosis, abnormal molar masses, and the Van’t Hoff factor ($i$).',
    introduction: 'Adding ethylene glycol antifreeze to car radiators prevents coolant from boiling in summer and freezing in winter. Colligative properties depend solely on the numerical count of dissolved solute particles, regardless of their chemical identity.',
    topics: [
      'Solubility of Gases in Liquids: Henry’s Law ($p = K_H x$), Soft drinks, and Deep-sea diving bends',
      'Vapour Pressure of Liquid Solutions and Raoult’s Law ($P_A = P_A^\\circ x_A$)',
      'Ideal Solutions ($\\Delta H_{mix} = 0, \\Delta V_{mix} = 0$, e.g., Benzene + Toluene, n-Hexane + n-Heptane)',
      'Non-Ideal Solutions: Positive Deviation ($A-B < A-A, B-B$, e.g., Ethanol + Acetone) vs Negative Deviation ($A-B > A-A, B-B$, e.g., Chloroform + Acetone H-bonding)',
      'Azeotropes: Constant-boiling binary mixtures distilling without change in composition',
      'Colligative Property 1: Relative Lowering of Vapour Pressure (RLVP: $\\frac{P^\\circ - P}{P^\\circ} = \\frac{n_2}{n_1 + n_2}$)',
      'Colligative Property 2: Elevation in Boiling Point ($\\Delta T_b = K_b \\cdot m$ where $K_b$ is Ebullioscopic constant)',
      'Colligative Property 3: Depression in Freezing Point ($\\Delta T_f = K_f \\cdot m$ where $K_f$ is Cryoscopic constant)',
      'Colligative Property 4: Osmotic Pressure ($\\pi = i C R T$), Reverse Osmosis (RO desalination)',
      'Abnormal Molar Masses and Van\'t Hoff Factor ($i$): Association ($i < 1, \\alpha = \\frac{1-i}{1 - 1/n}$) vs Dissociation ($i > 1, \\alpha = \\frac{i-1}{n-1}$)'
    ],
    summaryNotes: `### Core Colligative Property Formulas:
1. **Relative Lowering of Vapour Pressure:**
   $$\\frac{P_1^\\circ - P_1}{P_1^\\circ} = i \\cdot x_2 \\approx i \\frac{n_2}{n_1} = i \\frac{w_2 M_1}{M_2 w_1}$$
2. **Boiling Point Elevation & Freezing Point Depression:**
   $$\\Delta T_b = i \\cdot K_b \\cdot m, \\quad \\Delta T_f = i \\cdot K_f \\cdot m$$
3. **Osmotic Pressure:**
   $$\\pi = i C R T = i \\frac{n}{V} R T$$
   - Ideal for determining molecular weights of biomolecules (proteins, polymers) because measurements can be made at room temperature without denaturation!
4. **Van't Hoff Factor ($i$):**
   $$i = \\frac{\\text{Actual number of particles in solution}}{\\text{Theoretical number of particles dissolved}} = \\frac{\\text{Normal Molar Mass}}{\\text{Observed Molar Mass}}$$
   - For $NaCl \\rightarrow Na^+ + Cl^-$ ($n=2, \\alpha=1 \\implies i = 2$).
   - For Benzoic acid dimerization in benzene ($n=2$ associating, $i \\approx 0.5$).`,
    definitions: [
      'Colligative Properties: Properties of solutions that depend solely on the ratio of the number of solute particles to the number of solvent molecules, and not on the nature of the chemical species present.',
      'Van\'t Hoff Factor (i): A factor that accounts for the effect of dissociation or association of a solute on colligative properties.'
    ],
    formulas: [
      { name: 'Osmotic Pressure Formula', formula: '\\pi = i C R T', explanation: 'Osmotic pressure with Van\'t Hoff ionization correction.', units: 'Atmospheres or Pascals' },
      { name: 'Degree of Dissociation', formula: '\\alpha = \\frac{i - 1}{n - 1}', explanation: 'Calculates fraction of electrolyte ionized in solution.', units: 'Fraction (0 to 1)' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the boiling point elevation for a 0.1 m aqueous solution of barium chloride (BaCl₂), assuming complete dissociation. (K_b for water = 0.52 K·kg/mol)',
        solution: 'BaCl₂ dissociates as: BaCl₂ → Ba²⁺ + 2Cl⁻ (n = 3 ions).\nFor complete dissociation (α = 1), Van\'t Hoff factor i = 3.\nΔT_b = i * K_b * m = 3 * 0.52 * 0.1 = 0.156 K.\nBoiling point of solution = 100°C + 0.156°C = 100.156°C.',
        keyInsight: 'Multiply by i = 3 because BaCl₂ dissociates into three individual ions.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c12-c1-01',
        subject: 'Chemistry',
        chapterId: 'c12-chem-01',
        chapterTitle: 'Solutions & Colligative Properties',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'A mixture of chloroform and acetone shows negative deviation from Raoult’s law because:',
        options: ['A) Chloroform evaporates faster', 'B) Intermolecular hydrogen bonding forms between chloroform and acetone molecules', 'C) Solute-solute interactions are stronger than solute-solvent', 'D) Total volume increases upon mixing'],
        correctAnswer: 'B',
        explanation: 'Chloroform (CHCl₃) forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone (CH₃COCH₃), making A-B attractive interactions stronger than A-A and B-B, causing a negative deviation from Raoult\'s law.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Physical Chemistry & Kinetics',
    order: 2,
    title: 'Electrochemistry & Chemical Kinetics',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Solutions & Colligative Properties',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Galvanic cells, standard electrode potential, Nernst equation ($E = E^\\circ - \\frac{0.0591}{n}\\log Q$), Gibbs free energy ($\\Delta G^\\circ = -nFE^\\circ$), Kohlrausch’s Law of Independent Migration of Ions, electrolytic conductance, Chemical Kinetics: rate of reaction, rate law and rate constant, order and molecularity, integrated rate equations for zero and first order ($k = \\frac{2.303}{t}\\log\\frac{[A_0]}{[A]}$), half-life ($t_{1/2} = 0.693/k$), collision theory, and Arrhenius equation ($k = A e^{-E_a/RT}$).',
    introduction: 'Electrochemistry connects chemical redox reactions with electrical power in lithium-ion batteries. Chemical kinetics explains why diamond does not turn into graphite at room temperature despite being thermodynamically favored: chemical activation energy barriers govern reaction rates.',
    topics: [
      'Galvanic Cells: Daniell Cell ($Zn | Zn^{2+} || Cu^{2+} | Cu$), Salt bridge function (maintains electrical neutrality)',
      'Nernst Equation for Electrode and Cell Potentials at 298 K: $E_{cell} = E_{cell}^\\circ - \\frac{0.0591}{n} \\log_{10} Q$',
      'Relation with Equilibrium Constant: $\\Delta G^\\circ = -n F E_{cell}^\\circ = -2.303 RT \\log_{10} K_c$',
      'Kohlrausch’s Law of Independent Migration of Ions: $\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$',
      'Chemical Kinetics: Average vs Instantaneous Rate, Rate Law, Order (can be 0, fraction, negative) vs Molecularity (integer strictly $\\le 3$)',
      'First-Order Reactions: Integrated rate equation $k = \\frac{2.303}{t}\\log\\frac{[A_0]}{[A]}$ and Constant Half-Life ($t_{1/2} = \\frac{0.693}{k}$)',
      'Zero-Order Reactions: $[A] = [A_0] - kt$ and $t_{1/2} = \\frac{[A_0]}{2k}$',
      'Temperature Dependence and Arrhenius Equation: $\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left[\\frac{1}{T_1} - \\frac{1}{T_2}\\right]$'
    ],
    summaryNotes: `### Core Electrochemical & Kinetic Formulations:
1. **Nernst Equation (at 298 K):**
   $$E_{cell} = E_{cell}^\\circ - \\frac{0.0591}{n} \\log_{10} \\left(\\frac{[\\text{Products}]}{[\\text{Reactants}]}\\right)$$
2. **Kohlrausch's Law:**
   - Limiting molar conductivity of an electrolyte is the sum of individual contributions of its ions.
   - Degree of dissociation: $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}$.
3. **First-Order Kinetics:**
   $$k = \\frac{2.303}{t}\\log_{10}\\left(\\frac{[A_0]}{[A]}\\right), \\quad t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$$
   - Half-life of a first-order reaction is **independent of initial reactant concentration**!
   - Radioactive decay follows first-order kinetics strictly.
4. **Arrhenius Equation:**
   $$\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$`,
    definitions: [
      'Nernst Equation: An equation relating the reduction potential of an electrochemical reaction to the standard electrode potential, temperature, and activities of chemical species.',
      'Activation Energy (Ea): The minimum threshold energy required by reacting molecules to form an activated complex and undergo a chemical transformation.'
    ],
    formulas: [
      { name: 'Nernst Equation (298 K)', formula: 'E_{cell} = E^\\circ - \\frac{0.0591}{n} \\log_{10} Q', explanation: 'Electrode potential under non-standard concentration conditions.', units: 'Volts (V)' },
      { name: 'First-Order Half-Life', formula: 't_{1/2} = \\frac{0.693}{k}', explanation: 'Half-life of first-order chemical or radioactive decay.', units: 'Time (s or min)' }
    ],
    solvedExamples: [
      {
        question: 'A first-order reaction has a rate constant k = 1.15 × 10⁻³ s⁻¹. How long will 5 g of this reactant take to reduce to 3 g?',
        solution: '[A₀] = 5 g, [A] = 3 g, k = 1.15 * 10⁻³ s⁻¹.\nt = (2.303 / k) * log₁₀([A₀] / [A]) = (2.303 / 1.15 * 10⁻³) * log₁₀(5 / 3)\n= (2002.6) * log₁₀(1.667) = 2002.6 * 0.2219 = 444.4 seconds.',
        keyInsight: 'Apply the integrated first-order formula directly with initial and remaining masses.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c12-c2-01',
        subject: 'Chemistry',
        chapterId: 'c12-chem-02',
        chapterTitle: 'Electrochemistry & Chemical Kinetics',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'For a first-order reaction, the time required for 99.9% completion of the reaction is approximately how many times its half-life (t_1/2)?',
        options: ['A) 3 times', 'B) 10 times', 'C) 20 times', 'D) 100 times'],
        correctAnswer: 'B',
        explanation: 't_99.9% = (2.303/k) * log(100 / 0.1) = (2.303/k) * log(10³) = 3 * (2.303/k). Since t_1/2 = 0.693/k = (2.303/k)*log 2 = 0.301*(2.303/k), t_99.9% / t_1/2 = 3 / 0.301 ≈ 10 times.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Coordination Chemistry & Transition Metals',
    order: 3,
    title: 'Coordination Compounds & d-Block Elements',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Chemical Bonding and Molecular Structure',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Transition elements (3d series characteristics: variable oxidation states, catalytic properties, colored ions due to d-d transitions, magnetic properties $\\mu = \\sqrt{n(n+2)}$ BM, interstitial compounds, alloy formation), Lanthanoid Contraction and consequences, Werner’s Coordination Theory (primary and secondary valencies), IUPAC nomenclature of coordination complexes, isomerism (structural: ionization, hydrate, linkage, coordination; stereoisomerism: geometrical cis/trans, optical enantiomers), Valence Bond Theory (inner vs outer orbital complexes), and Crystal Field Theory (CFT: $\\Delta_o$ splitting of d-orbitals into $t_{2g}$ and $e_g$, spectrochemical series, strong field vs weak field ligands, high spin vs low spin).',
    introduction: 'Blood is red because of iron coordination in hemoglobin; leaves are green because of magnesium coordination in chlorophyll. Crystal Field Theory explains the vivid colors and magnetic properties of transition metal complexes.',
    topics: [
      'Transition Elements ($d$-block): General configuration $(n-1)d^{1-10} ns^{1-2}$; Variable oxidation states ($Mn$ exhibits $+2$ to $+7$)',
      'Catalytic Activity and Colored Ions due to $d-d$ Electronic Transitions',
      'Spin-Only Magnetic Moment Formula: $\\mu = \\sqrt{n(n + 2)}$ Bohr Magnetons (BM)',
      'Lanthanoid Contraction: Poor shielding by $4f$ electrons causing identical atomic radii in $Zr-Hf$ and $Nb-Ta$',
      'Werner’s Theory: Primary Valency (Ionizable, satisfies charge) vs Secondary Valency (Non-ionizable, fixed coordination number)',
      'IUPAC Systematic Nomenclature of Mononuclear Coordination Complexes',
      'Isomerism: Linkage (Ambidentate ligands: $NO_2^- / ONO^-, SCN^- / NCS^-$), Ionization, Coordination, Geometrical ($cis/trans$), Optical Isomerism',
      'Valence Bond Theory (VBT): Inner orbital complexes ($d^2sp^3$, low spin) vs Outer orbital complexes ($sp^3d^2$, high spin)',
      'Crystal Field Theory (CFT): Octahedral splitting into lower $t_{2g}$ and higher $e_g$ orbitals; The Spectrochemical Series'
    ],
    summaryNotes: `### Core Coordination Chemistry Rules:
1. **Lanthanoid Contraction:**
   - The steady, gradual decrease in atomic and ionic radii of lanthanoids with increasing atomic number due to the **imperfect shielding of $4f$ electrons**.
   - Result: Second and third transition series elements have virtually identical atomic radii (e.g., $Zr = 160\\text{ pm}$ and $Hf = 159\\text{ pm}$).
2. **Spin-Only Magnetic Moment:**
   $$\\mu = \\sqrt{n(n + 2)} \\text{ BM} \\quad (n = \\text{number of unpaired electrons})$$
   - $n=1 \\implies 1.73\\text{ BM}$
   - $n=2 \\implies 2.83\\text{ BM}$
   - $n=3 \\implies 3.87\\text{ BM}$
   - $n=4 \\implies 4.90\\text{ BM}$
   - $n=5 \\implies 5.92\\text{ BM}$
3. **Crystal Field Splitting in Octahedral Complexes ($\\Delta_o$):**
   - Five degenerate $d$-orbitals split into:
     - Triply degenerate lower energy **$t_{2g}$** ($d_{xy}, d_{yz}, d_{zx}$, lowered by $-0.4\\Delta_o$).
     - Doubly degenerate higher energy **$e_g$** ($d_{x^2-y^2}, d_{z^2}$, raised by $+0.6\\Delta_o$).
   - **Spectrochemical Series:** $I^- < Br^- < Cl^- < F^- < OH^- < H_2O < NH_3 < en < CN^- < CO$ (Strong field ligands cause pairing: $\\Delta_o > P$).`,
    definitions: [
      'Ambidentate Ligand: A monodentate ligand that can coordinate to a central metal ion through either of two different donor atoms (e.g., NO₂⁻ binds via N or O).',
      'Crystal Field Splitting (Δo): The energy separation between the t₂g and eg orbital sets induced by the electrostatic crystal field of surrounding ligands.'
    ],
    formulas: [
      { name: 'Spin-Only Magnetic Moment', formula: '\\mu = \\sqrt{n(n + 2)} \\text{ BM}', explanation: 'Calculates paramagnetic moment from unpaired electron count n.', units: 'Bohr Magnetons (BM)' },
      { name: 'Crystal Field Octahedral Splitting', formula: 'CFSE = [-0.4(n_{t_{2g}}) + 0.6(n_{e_g})]\\Delta_o', explanation: 'Crystal field stabilization energy calculation.', units: 'Δo' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the spin-only magnetic moment of an aqueous Fe²⁺ ion. (Atomic number of Fe = 26)',
        solution: 'Fe: [Ar] 3d⁶ 4s².\nFe²⁺: [Ar] 3d⁶ 4s⁰.\nIn an octahedral aqua complex with weak-field ligand H₂O, electrons fill as t₂g⁴ eg².\nNumber of unpaired electrons n = 4.\nμ = √[n(n + 2)] = √[4(4 + 2)] = √[24] ≈ 4.90 Bohr Magnetons (BM).',
        keyInsight: 'Fe²⁺ has 4 unpaired electrons in a high-spin d⁶ configuration.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c12-c3-01',
        subject: 'Chemistry',
        chapterId: 'c12-chem-03',
        chapterTitle: 'Coordination Compounds & d-Block Elements',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which of the following coordination complexes is expected to exhibit linkage isomerism?',
        options: ['A) [Co(NH₃)₅Cl]SO₄', 'B) [Co(NH₃)₅(NO₂)]Cl₂', 'C) [Co(en)₃]Cl₃', 'D) [Pt(NH₃)₂Cl₂]'],
        correctAnswer: 'B',
        explanation: 'The nitrite ion (NO₂⁻) is an ambidentate ligand that can coordinate through nitrogen (-NO₂, nitro) or through oxygen (-ONO, nitrito), yielding linkage isomerism.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Organic Reaction Mechanisms',
    order: 4,
    title: 'Haloalkanes, Alcohols, Phenols & Ethers',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Organic Chemistry Basics',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Nucleophilic substitution mechanisms: $S_N1$ (two-step, carbocation intermediate, racemization) vs $S_N2$ (one-step, bimolecular, backside attack, Walden inversion), elimination vs substitution (Saytzeff rule), Haloarenes (unreactivity towards nucleophiles, electrophilic aromatic substitution), Grignard reagents ($R-MgX$), Alcohols (hydration of alkenes, hydroboration-oxidation, Lucas test $3^\\circ > 2^\\circ > 1^\\circ$, acidity order), Phenols (preparation from Cumene, electrophilic substitution, Kolbe’s reaction, Reimer-Tiemann reaction forming salicylaldehyde), and Ethers (Williamson’s ether synthesis, cleavage by concentrated $HI$).',
    introduction: 'Nucleophilic substitutions are the workhorses of organic synthesis. Understanding stereochemical inversions in $S_N2$ mechanisms versus carbocation rearrangements in $S_N1$ unlocks multistep organic transformations in competitive exams.',
    topics: [
      'Classification and Nomenclature of Haloalkanes and Haloarenes',
      '$S_N2$ Mechanism: Bimolecular, single concerted step, backside nucleophilic attack, 100% Walden Inversion of configuration ($1^\\circ > 2^\\circ > 3^\\circ$)',
      '$S_N1$ Mechanism: Unimolecular, rate-determining carbocation formation, partial racemization ($3^\\circ > 2^\\circ > 1^\\circ$)',
      'Elimination Reactions: Saytzeff (Zaitsev) Rule (Most highly substituted alkene is major product)',
      'Haloarenes: Low reactivity towards nucleophilic substitution due to resonance stabilization and $sp^2$ hybridized C-X bond',
      'Alcohols: Hydroboration-Oxidation (Anti-Markovnikov hydration), Lucas Test ($3^\\circ$ instant turbidity, $2^\\circ$ 5 mins, $1^\\circ$ no room temp turbidity)',
      'Phenols: Greater acidity than alcohols (Resonance stabilization of Phenoxide ion); Reimer-Tiemann Reaction ($Phenol + CHCl_3 + KOH \\rightarrow \\text{Salicylaldehyde}$); Kolbe\'s Reaction ($Phenol + CO_2 + NaOH \\rightarrow \\text{Salicylic acid}$)',
      'Ethers: Williamson’s Synthesis ($R-X + R\'O^-Na^+ \\rightarrow R-O-R\' + NaX$, $R-X$ must be $1^\\circ$!), Cleavage with concentrated $HI$'
    ],
    summaryNotes: `### Core Organic Reaction Mechanisms:
1. **$S_N1$ vs $S_N2$ Comparison Table:**
| Parameter | $S_N1$ | $S_N2$ |
| :--- | :--- | :--- |
| **Kinetics** | First order: $\\text{Rate} = k[R-X]$ | Second order: $\\text{Rate} = k[R-X][Nu^-]$ |
| **Steps** | 2 steps (Carbocation intermediate) | 1 concerted step (Pentacoordinate transition state) |
| **Substrate Reactivity** | $3^\\circ > 2^\\circ > 1^\\circ > CH_3$ | $CH_3 > 1^\\circ > 2^\\circ > 3^\\circ$ (Steric hindrance) |
| **Stereochemistry** | **Racemization** (Inversion + Retention) | **Complete Walden Inversion** |
| **Favoured Solvent** | Polar protic ($H_2O, ROH$) | Polar aprotic ($DMSO, DMF, \\text{Acetone}$) |
2. **Named Reactions of Phenol:**
   - **Reimer-Tiemann Reaction:**
     $$\\text{Phenol} + CHCl_3 + 3NaOH \\xrightarrow{340\\text{ K}} \\text{Salicylaldehyde (2-Hydroxybenzaldehyde)} + 3NaCl + 2H_2O$$
   - **Kolbe's Reaction:**
     $$\\text{Sodium Phenoxide} + CO_2 \\xrightarrow[4-7\\text{ atm}]{400\\text{ K}} \\xrightarrow{H^+} \\text{Salicylic Acid (Precursor to Aspirin!)}$$
3. **Williamson Ether Cleavage:**
   - Unsymmetrical ether with tertiary alkyl group: Cleavage with $HI$ gives **$3^\\circ$ alkyl iodide** via $S_N1$!`,
    definitions: [
      'Walden Inversion: The inversion of configuration of a chiral center in a molecule during an SN2 bimolecular nucleophilic substitution reaction.',
      'Saytzeff Rule: In dehydrohalogenation elimination reactions, the major product is the more highly substituted, more stable alkene.'
    ],
    formulas: [
      { name: 'Lucas Test Turbidity Order', formula: '3^\\circ \\text{ Alcohol (Immediate)} > 2^\\circ \\text{ (5 mins)} > 1^\\circ \\text{ (Requires heating)}', explanation: 'Diagnostic test distinguishing alcohol degrees using anhydrous ZnCl2 and HCl.', units: 'Diagnostic' }
    ],
    solvedExamples: [
      {
        question: 'Predict the products obtained when tert-butyl methyl ether [(CH₃)₃C-O-CH₃] is cleaved with excess concentrated HI.',
        solution: 'In (CH₃)₃C-O-CH₃, one of the alkyl groups is tertiary. Protonation gives the oxonium ion. The reaction proceeds via an SN1 mechanism because the tertiary carbocation (CH₃)₃C⁺ formed is extremely stable. The iodide ion (I⁻) attacks the tertiary carbocation, forming (CH₃)₃C-I (tert-butyl iodide) and CH₃OH (methanol).',
        keyInsight: 'Ethers with a tertiary alkyl group cleave via SN1 to form the tertiary alkyl iodide.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c12-c4-01',
        subject: 'Chemistry',
        chapterId: 'c12-chem-04',
        chapterTitle: 'Haloalkanes, Alcohols, Phenols & Ethers',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which of the following alkyl halides undergoes nucleophilic substitution via the SN1 mechanism at the fastest rate?',
        options: ['A) CH₃CH₂Cl', 'B) (CH₃)₂CHCl', 'C) (CH₃)₃CCl', 'D) CH₃Cl'],
        correctAnswer: 'C',
        explanation: '(CH₃)₃CCl ionizes to form the tertiary tert-butyl carbocation [(CH₃)₃C⁺], which is stabilized by 9 hyperconjugative structures and +I effects, accelerating the SN1 rate.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Carbonyl Compounds & Biomolecules',
    order: 5,
    title: 'Aldehydes, Ketones, Carboxylic Acids & Biomolecules',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Haloalkanes, Alcohols, Phenols & Ethers',
    totalConcepts: 8,
    durationHours: 8.0,
    description: 'Structure of carbonyl group, nucleophilic addition reactions ($HCN, NaHSO_3, RMgX, NH_2-G$), Aldol condensation & cross-aldol condensation, Cannizzaro reaction (absence of $\\alpha$-hydrogen), oxidation tests (Tollens\' silver mirror, Fehling’s test, haloform iodoform reaction), Hell-Volhard-Zelinsky (HVZ) reaction of carboxylic acids, Amines (Gabriel phthalimide synthesis, Hoffmann bromamide degradation), and Biomolecules (Carbohydrates: glucose structure, D/L configuration, mutarotation; Proteins: peptide bond, denaturation; Nucleic Acids: DNA vs RNA).',
    introduction: 'Carbonyl compounds dominate biochemistry, natural fragrance synthesis, and medicinal pharmacology. Understanding nucleophilic addition and alpha-hydrogen acidity unlocks aldol condensation and metabolic biochemistry in NEET and JEE.',
    topics: [
      'Carbonyl Group: Polar nature of $>C=O$, Nucleophilic addition mechanism',
      'Distinction between Aldehydes and Ketones: Tollens’ Reagent (Silver mirror test) and Fehling’s Solution (Red $Cu_2O$ precipitate)',
      'Haloform / Iodoform Reaction: Identifying $CH_3-C=O$ or $CH_3-CH(OH)-$ groups (Yellow $CHI_3$ precipitate)',
      'Acidity of $\\alpha$-Hydrogens in Carbonyls and Aldol Condensation (Enolate ion intermediate, $\\alpha,\\beta$-unsaturated carbonyls)',
      'Cannizzaro Reaction: Self oxidation-reduction of aldehydes lacking $\\alpha$-hydrogen (Formaldehyde, Benzaldehyde) in concentrated $KOH$',
      'Carboxylic Acids: Acidic strength comparison, Hell-Volhard-Zelinsky (HVZ) $\\alpha$-halogenation reaction',
      'Amines: Basic strength order in aqueous medium ($2^\\circ > 1^\\circ > 3^\\circ$ for methyl; $2^\\circ > 3^\\circ > 1^\\circ$ for ethyl), Hoffmann Bromamide Reaction ($RCONH_2 + Br_2 + 4KOH \\rightarrow RNH_2 + K_2CO_3$)',
      'Biomolecules: Monosaccharides (D-Glucose, cyclic Haworth hemiacetal structures), Amino acids, Peptide bond, Secondary ($\alpha$-helix, $\beta$-sheet) and Tertiary protein folding, DNA double helix'
    ],
    summaryNotes: `### Named Carbonyl & Amine Reactions:
1. **Aldol Condensation:**
   - Requires presence of at least one **$\\alpha$-hydrogen**.
   - Dilute alkali ($NaOH$) creates an enolate ion that attacks another carbonyl molecule:
     $$2CH_3CHO \\xrightarrow{\\text{Dil. } NaOH} CH_3-CH(OH)-CH_2-CHO \\xrightarrow{\\Delta, -H_2O} CH_3-CH=CH-CHO \\text{ (Crotonaldehyde)}$$
2. **Cannizzaro Reaction:**
   - Undergone by aldehydes **lacking $\\alpha$-hydrogen** in presence of concentrated ($50\\%$) $KOH$:
     $$2HCHO \\xrightarrow{\\text{Conc. } KOH} CH_3OH \\text{ (Reduced alcohol)} + HCOOK \\text{ (Oxidized potassium formate)}$$
3. **Iodoform Test:**
   - Compounds containing $CH_3-C=O$ or $CH_3-CH(OH)-$ react with $I_2 + NaOH$ to form a distinct **yellow crystalline precipitate of Iodoform ($CHI_3$)**.
4. **Hoffmann Bromamide Degradation:**
   - Primary amides react with $Br_2$ in aqueous $KOH$ to yield primary amines with **one carbon atom less** than the parent amide!
     $$R-CONH_2 + Br_2 + 4KOH \\longrightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O$$`,
    definitions: [
      'Aldol Condensation: An organic reaction in which an enolate ion reacts with a carbonyl compound to form a β-hydroxyaldehyde or β-hydroxyketone, followed by dehydration to give a conjugated enone.',
      'Cannizzaro Reaction: The redox disproportionation of non-enolizable aldehydes into a primary alcohol and a carboxylic acid salt in strongly alkaline medium.'
    ],
    formulas: [
      { name: 'Hoffmann Degradation', formula: 'RCONH_2 + Br_2 + 4KOH \\longrightarrow RNH_2 + K_2CO_3 + 2KBr + 2H_2O', explanation: 'Step-down degradation synthesizing 1° amine with one fewer carbon.', units: 'Organic reaction' }
    ],
    solvedExamples: [
      {
        question: 'Differentiate between Propanal (CH₃CH₂CHO) and Propanone (CH₃COCH₃) using a single chemical test.',
        solution: 'Apply Tollens’ test (ammoniacal silver nitrate solution). Propanal is an aldehyde and readily reduces Tollens’ reagent to produce a shining metallic silver mirror on the test tube inner wall. Propanone is a ketone and gives no reaction with Tollens’ reagent. Alternatively, Propanone gives a yellow iodoform precipitate with I₂/NaOH, while Propanal does not.',
        keyInsight: 'Aldehydes reduce Tollens\' reagent to silver mirror; ketones do not.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c12-c5-01',
        subject: 'Chemistry',
        chapterId: 'c12-chem-05',
        chapterTitle: 'Aldehydes, Ketones, Carboxylic Acids & Biomolecules',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which of the following compounds will undergo the Cannizzaro reaction when heated with concentrated sodium hydroxide solution?',
        options: ['A) Acetaldehyde (CH₃CHO)', 'B) Benzaldehyde (C₆H₅CHO)', 'C) Acetone (CH₃COCH₃)', 'D) Propanal (CH₃CH₂CHO)'],
        correctAnswer: 'B',
        explanation: 'Benzaldehyde has no α-hydrogen atoms on the carbonyl carbon, so it cannot form an enolate ion; instead, it undergoes disproportionation via the Cannizzaro reaction to yield benzyl alcohol and sodium benzoate.',
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
    id: 'c12-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Linear Algebra & Discrete Mathematics',
    order: 1,
    title: 'Relations, Functions, Matrices and Determinants',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Sets, Relations and Functions',
    totalConcepts: 8,
    durationHours: 7.0,
    description: 'Types of relations (reflexive, symmetric, transitive, equivalence relations), types of functions (injective, surjective, bijective, inverse of a function, composition of functions $g \\circ f$), matrix operations (addition, scalar multiplication, matrix multiplication non-commutative), transpose of matrix (symmetric and skew-symmetric matrices), elementary row operations, determinants of order $2 \\times 2$ and $3 \\times 3$, properties of determinants, adjoint of a matrix ($A \\cdot \\text{adj}(A) = |A| I$), inverse of a square matrix ($A^{-1} = \\frac{\\text{adj}(A)}{|A|}$), and solving system of linear equations using matrix method and Cramer’s Rule.',
    introduction: 'Matrices and determinants represent linear transformations in multidimensional vector space. From solving structural loads in civil engineering to 3D computer graphics transformations, linear algebra is a central pillar of JEE Advanced Mathematics.',
    topics: [
      'Types of Relations: Reflexive ($a R a$), Symmetric ($a R b \\implies b R a$), Transitive ($a R b, b R c \\implies a R c$), Equivalence Relations',
      'One-One (Injective), Onto (Surjective), and Bijective Functions; Invertible Functions ($f^{-1}$)',
      'Composition of Functions: $(g \\circ f)(x) = g(f(x))$',
      'Matrix Algebra: Multiplication condition (columns of A = rows of B), Transpose properties ($(AB)^T = B^T A^T$)',
      'Symmetric ($A^T = A$) vs Skew-Symmetric ($A^T = -A$, diagonal elements are zero) Matrices',
      'Determinants: Minors, Cofactors, Expansion along any row or column',
      'Adjoint and Matrix Inversion: $A^{-1} = \\frac{\\text{adj}(A)}{|A|}$ exists if and only if $|A| \\ne 0$ (Non-singular matrix)',
      'System of Linear Equations ($AX = B$): Unique solution $X = A^{-1}B$ (if $|A| \\ne 0$); Cramer’s Rule ($x = \\Delta_x / \\Delta, y = \\Delta_y / \\Delta, z = \\Delta_z / \\Delta$)'
    ],
    summaryNotes: `### Core Matrix & Determinant Theorems:
1. **Invertibility Criterion:**
   - Square matrix $A$ is invertible if and only if it is **non-singular** ($|A| \\ne 0$).
   - Matrix Inverse:
     $$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$
2. **Determinant Properties of Adjoint:**
   $$A \\cdot \\text{adj}(A) = \\text{adj}(A) \\cdot A = |A| I$$
   $$|\\text{adj}(A)| = |A|^{n-1} \\quad (\\text{where } n \\text{ is matrix order})$$
   $$|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}$$
3. **Reversal Law:**
   $$(AB)^T = B^T A^T, \\quad (AB)^{-1} = B^{-1} A^{-1}, \\quad \\text{adj}(AB) = \\text{adj}(B) \\cdot \\text{adj}(A)$$`,
    definitions: [
      'Bijective Function: A function that is simultaneously injective (one-to-one) and surjective (onto), ensuring the existence of an inverse function.',
      'Adjoint of a Matrix: The transpose of the cofactor matrix of a given square matrix.'
    ],
    formulas: [
      { name: 'Adjoint Determinant Power', formula: '|\\text{adj}(A)| = |A|^{n-1}', explanation: 'Determinant of adjoint for n x n square matrix.', units: 'Real number' },
      { name: 'Matrix Inverse Equation', formula: 'A^{-1} = \\frac{\\text{adj}(A)}{|A|} \\quad (|A| \\ne 0)', explanation: 'Analytic inverse of non-singular square matrix.', units: 'Matrix' }
    ],
    solvedExamples: [
      {
        question: 'If A is a 3 × 3 square matrix with determinant |A| = 4, find the value of |adj(A)|.',
        solution: 'Using the identity |adj(A)| = |A|^(n - 1) for a matrix of order n = 3:\n|adj(A)| = |A|^(3 - 1) = |A|² = 4² = 16.',
        keyInsight: 'The determinant of the adjoint of an n x n matrix is |A|^(n-1).',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c12-m1-01',
        subject: 'Mathematics',
        chapterId: 'c12-math-01',
        chapterTitle: 'Relations, Functions, Matrices and Determinants',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'If A and B are invertible square matrices of order 3, which of the following statements is always true?',
        options: ['A) (AB)⁻¹ = A⁻¹ B⁻¹', 'B) |A + B| = |A| + |B|', 'C) (AB)⁻¹ = B⁻¹ A⁻¹', 'D) AB = BA'],
        correctAnswer: 'C',
        explanation: 'Matrix inversion follows the reversal law: (AB)⁻¹ = B⁻¹ A⁻¹.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Differential Calculus',
    order: 2,
    title: 'Continuity, Differentiability & Applications of Derivatives',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Trigonometric Functions',
    totalConcepts: 8,
    durationHours: 8.0,
    description: 'Continuity of functions at a point and in an interval, algebra of continuous functions, differentiability and relation with continuity (differentiability implies continuity), derivatives of composite functions (Chain Rule), inverse trigonometric functions, implicit differentiation, logarithmic differentiation, parametric differentiation, higher order derivatives ($d^2y/dx^2$), Rolle’s Theorem and Lagrange’s Mean Value Theorem (LMVT), and Applications of Derivatives: Rate of change of quantities, Tangents and Normals, strictly increasing and decreasing functions ($f\'(x) \\ge 0$), and Maxima and Minima (First and Second Derivative Tests, absolute extrema on closed intervals).',
    introduction: 'Calculus is the mathematical study of continuous change. Differentiability requires smooth, non-kinked graphs without jumps. Derivatives quantify instantaneous rates of change, slopes of tangents, and identify optimal peaks and valleys.',
    topics: [
      'Continuity: $\\lim_{x \\rightarrow c^-} f(x) = \\lim_{x \\rightarrow c^+} f(x) = f(c)$',
      'Differentiability: Left-hand derivative = Right-hand derivative ($LHD = RHD$); Sharp corners are non-differentiable',
      'The Chain Rule of Differentiation: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$',
      'Derivatives of Inverse Trigonometric Functions ($\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1-x^2}}$)',
      'Logarithmic Differentiation for variable-to-variable powers ($y = [f(x)]^{g(x)}$)',
      'Lagrange’s Mean Value Theorem (LMVT): $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for $c \\in (a, b)$',
      'Monotonicity: $f\'(x) > 0 \\implies$ Strictly Increasing; $f\'(x) < 0 \\implies$ Strictly Decreasing',
      'Optimization (Maxima & Minima): Critical points ($f\'(x) = 0$), Second Derivative Test ($f\'\'(c) < 0 \\implies$ Local Maximum; $f\'\'(c) > 0 \\implies$ Local Minimum)'
    ],
    summaryNotes: `### Core Differential Calculus Theorems:
1. **Differentiability $\\implies$ Continuity:**
   - If a function is differentiable at $x = c$, it is guaranteed to be continuous at $c$. The converse is **NOT true** (e.g., $f(x) = |x|$ is continuous at $x=0$, but has a sharp corner and is non-differentiable at $x=0$).
2. **Lagrange's Mean Value Theorem (LMVT):**
   - If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \\in (a, b)$ such that:
     $$f\'(c) = \\frac{f(b) - f(a)}{b - a}$$
3. **Second Derivative Optimization Test:**
   - Let $f\'(c) = 0$:
     * $f\'\'(c) < 0 \\implies$ **Local Maximum** at $x = c$.
     * $f\'\'(c) > 0 \\implies$ **Local Minimum** at $x = c$.
     * $f\'\'(c) = 0 \\implies$ Test is inconclusive (use first derivative sign change test).`,
    definitions: [
      'Differentiability: The property of a function having a well-defined non-vertical tangent line at a point, meaning its instantaneous rate of change exists.',
      'Lagrange\'s Mean Value Theorem: A theorem stating that for any smooth curve connecting two points, there exists at least one point where the tangent is parallel to the secant line.'
    ],
    formulas: [
      { name: 'Lagrange Mean Value Theorem', formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a}', explanation: 'Guarantees tangent slope equals average secant slope.', units: 'Slope' },
      { name: 'Second Derivative Maxima Test', formula: 'f\'(c) = 0 \\text{ and } f\'\'(c) < 0 \\implies \\text{Local Maximum}', explanation: 'Concavity condition for local maximum peak.', units: 'Extrema' }
    ],
    solvedExamples: [
      {
        question: 'Find the maximum value of the function f(x) = x + 1/x for x > 0.',
        solution: 'Differentiate: f\'(x) = 1 - 1/x².\nSet f\'(x) = 0 => 1 - 1/x² = 0 => x² = 1 => x = 1 (since x > 0).\nf\'\'(x) = 2/x³. At x = 1, f\'\'(1) = 2 > 0, so x = 1 is a local minimum, not a maximum! The function has a minimum value f(1) = 1 + 1/1 = 2, and as x → ∞, f(x) → ∞ (no finite maximum).',
        keyInsight: 'Always evaluate the sign of f\'\'(x) to verify maximum vs minimum correctly.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c12-m2-01',
        subject: 'Mathematics',
        chapterId: 'c12-math-02',
        chapterTitle: 'Continuity, Differentiability & Applications of Derivatives',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'For which value of x does the function f(x) = 2x³ - 9x² + 12x + 5 achieve its local maximum?',
        options: ['A) x = 1', 'B) x = 2', 'C) x = 3', 'D) x = 0'],
        correctAnswer: 'A',
        explanation: 'f\'(x) = 6x² - 18x + 12 = 6(x² - 3x + 2) = 6(x - 1)(x - 2) = 0 => x = 1, 2. f\'\'(x) = 12x - 18. At x = 1: f\'\'(1) = 12 - 18 = -6 < 0 (Local Maximum). At x = 2: f\'\'(2) = 24 - 18 = +6 > 0 (Local Minimum). Local maximum is at x = 1.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Integral Calculus',
    order: 3,
    title: 'Integrals (Definite & Indefinite)',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Continuity, Differentiability & Applications of Derivatives',
    totalConcepts: 8,
    durationHours: 8.5,
    description: 'Integration as inverse process of differentiation, standard integral formulas, integration by substitution, integration using trigonometric identities, integration by partial fractions, Integration by Parts (ILATE rule: $\\int u v dx = u \\int v dx - \\int [u\' \\int v dx] dx$), special integrals ($\\int \\frac{dx}{x^2 \\pm a^2}, \\int \\sqrt{a^2 - x^2}dx$), Definite Integrals as limit of a sum, Fundamental Theorem of Calculus, and master properties of Definite Integrals (King’s Rule: $\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$, odd/even functions, periodic integrals).',
    introduction: 'If differential calculus breaks curves into infinitesimal slopes, integral calculus reconstructs the whole by summing infinite slivers. Definite integral symmetry properties like King\'s Rule reduce multi-page integrals to instantaneous mental arithmetic.',
    topics: [
      'Indefinite Integration: Arbitrary constant of integration $C$, Geometric meaning of family of curves',
      'Integration by Substitution: Setting $t = g(x)$ such that $dt = g\'(x)dx$',
      'Integration by Parts: The ILATE rule (Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential)',
      'The Famous Integral Pattern: $\\int e^x [f(x) + f\'(x)] \\,dx = e^x f(x) + C$',
      'Integration by Partial Fractions: Decomposing rational functions $P(x)/Q(x)$',
      'Special Standard Integrals: $\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a}$, $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\frac{x}{a}$',
      'The Fundamental Theorem of Calculus: $\\int_a^b f(x)dx = F(b) - F(a)$ where $F\'(x) = f(x)$',
      'King’s Rule of Definite Integrals: $\\int_a^b f(x)dx = \\int_a^b f(a + b - x)dx$',
      'Symmetry Properties: Even function ($f(-x) = f(x) \\implies 2\\int_0^a f(x)dx$), Odd function ($f(-x) = -f(x) \\implies \\int_{-a}^a f(x)dx = 0$)'
    ],
    summaryNotes: `### Core Definite Integral Master Properties:
1. **King's Property (Crucial JEE Property):**
   $$\\int_a^b f(x) \\,dx = \\int_a^b f(a + b - x) \\,dx$$
   $$\\int_0^a f(x) \\,dx = \\int_0^a f(a - x) \\,dx$$
2. **Exponential Integral Shortcut:**
   $$\\int e^x \\left[ f(x) + f\'(x) \\right] \\,dx = e^x f(x) + C$$
3. **Odd / Even Property:**
   $$\\int_{-a}^a f(x) \\,dx = \\begin{cases} 2\\int_0^a f(x)\\,dx, & \\text{if } f(-x) = f(x) \\text{ (Even)} \\\\ 0, & \\text{if } f(-x) = -f(x) \\text{ (Odd)} \\end{cases}$$
4. **Half-Interval Property:**
   $$\\int_0^{2a} f(x) \\,dx = \\begin{cases} 2\\int_0^a f(x)\\,dx, & \\text{if } f(2a - x) = f(x) \\\\ 0, & \\text{if } f(2a - x) = -f(x) \\end{cases}$$`,
    definitions: [
      'Fundamental Theorem of Calculus: The theorem establishing that differentiation and integration are inverse operations, linking function rates with accumulated area.',
      'King\'s Rule: A definite integral property stating that replacing the variable x with (a + b - x) leaves the value of the integral unchanged.'
    ],
    formulas: [
      { name: 'King\'s Property of Definite Integrals', formula: '\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx', explanation: 'Symmetric variable reversal identity.', units: 'Real number' },
      { name: 'Exponential Derivative Pattern', formula: '\\int e^x [f(x) + f\'(x)]\\,dx = e^x f(x) + C', explanation: 'Instant integration of exponential product pairs.', units: 'Integral' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate the definite integral: I = ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx.',
        solution: 'Apply King\'s rule: replace x with (0 + π/2 - x) = (π/2 - x).\nI = ∫₀^(π/2) [√sin(π/2 - x) / (√sin(π/2 - x) + √cos(π/2 - x))] dx\nI = ∫₀^(π/2) [√cos x / (√cos x + √sin x)] dx.\nAdd the two integrals:\n2I = ∫₀^(π/2) [(√sin x + √cos x) / (√sin x + √cos x)] dx = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2.\nTherefore, I = π/4.',
        keyInsight: 'Adding King\'s transformed integral to the original simplifies the integrand to 1.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c12-m3-01',
        subject: 'Mathematics',
        chapterId: 'c12-math-03',
        chapterTitle: 'Integrals (Definite & Indefinite)',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Evaluate the integral: ∫ e^x [tan x + sec² x] dx:',
        options: ['A) e^x sec x + C', 'B) e^x tan x + C', 'C) e^x sec² x + C', 'D) e^x (tan x + sec x) + C'],
        correctAnswer: 'B',
        explanation: 'This matches the standard form ∫ e^x [f(x) + f\'(x)] dx with f(x) = tan x, whose derivative is f\'(x) = sec² x. The integral is e^x f(x) + C = e^x tan x + C.',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Applications of Calculus & Differential Equations',
    order: 4,
    title: 'Applications of Integrals & Differential Equations',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Integrals (Definite & Indefinite)',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Area of bounded regions under simple curves (lines, circles, parabolas, ellipses in standard form), area between two curves, Differential Equations: definition, order and degree of a differential equation, formation of differential equations, general and particular solutions, solution of differential equations by variable separable method, homogeneous differential equations ($y = vx$), and first-order Linear Differential Equations with Integrating Factor ($dy/dx + Py = Q, \\text{IF} = e^{\\int P dx}$).',
    introduction: 'From calculating aerodynamic surface areas to modeling Newton’s law of cooling and radioactive decay, differential equations relate physical variables to their rates of change. Solving first-order linear differential equations using integrating factors is a staple JEE question.',
    topics: [
      'Area of Plane Regions: $A = \\int_a^b y \\,dx$ and $A = \\int_c^d x \\,dy$',
      'Area Enclosed by Standard Shapes: Parabola and a Straight Line, Circle ($x^2+y^2=a^2 \\implies \\pi a^2$), Ellipse ($\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1 \\implies \\pi a b$)',
      'Area Bounded between Two Curves: $A = \\int_a^b [f(x) - g(x)] \\,dx$',
      'Differential Equations: Order (Highest derivative) vs Degree (Power of highest derivative after clearing radicals)',
      'General Solution (Contains arbitrary constants equal to order) vs Particular Solution',
      'Variable Separable Form: $f(x)dx = g(y)dy$',
      'Homogeneous Differential Equations: $\\frac{dy}{dx} = F(y/x)$, solved by substituting $y = vx$',
      'Linear Differential Equations: $\\frac{dy}{dx} + P(x) y = Q(x)$',
      'Integrating Factor Method: $\\text{IF} = e^{\\int P(x)dx}$; General Solution: $y \\cdot \\text{IF} = \\int [Q(x) \\cdot \\text{IF}] dx + C$'
    ],
    summaryNotes: `### Core Analytical Methods:
1. **Area Shortcuts:**
   - **Area of Ellipse:** $\\text{Area} = \\pi a b$.
   - **Area between Parabola $y^2 = 4ax$ and line $y = mx$:**
     $$\\text{Area} = \\frac{8 a^2}{3 m^3}$$
   - **Area between two Parabolas $y^2 = 4ax$ and $x^2 = 4by$:**
     $$\\text{Area} = \\frac{16 ab}{3}$$
2. **First-Order Linear Differential Equations (LDE):**
   $$\\frac{dy}{dx} + P(x) y = Q(x)$$
   - Step 1: Calculate Integrating Factor:
     $$\\text{IF} = e^{\\int P(x) dx}$$
   - Step 2: Write complete general solution directly:
     $$y \\cdot \\text{IF} = \\int [Q(x) \\cdot \\text{IF}] \\,dx + C$$`,
    definitions: [
      'Integrating Factor: A function by which an ordinary differential equation is multiplied to make it integrable in a single step.',
      'Order of Differential Equation: The order of the highest derivative present in the differential equation.'
    ],
    formulas: [
      { name: 'Linear Differential Equation Solution', formula: 'y \\cdot \\text{IF} = \\int [Q(x) \\cdot \\text{IF}]\\,dx + C \\quad (\\text{IF} = e^{\\int P dx})', explanation: 'Complete solution for first-order linear differential equations.', units: 'Algebraic' },
      { name: 'Parabola Intersection Area', formula: '\\text{Area} = \\frac{16 ab}{3}', explanation: 'Area enclosed between y² = 4ax and x² = 4by.', units: 'Square units' }
    ],
    solvedExamples: [
      {
        question: 'Find the general solution of the differential equation: dy/dx + y/x = x².',
        solution: 'This is in linear form dy/dx + Py = Q with P = 1/x and Q = x².\nIntegrating Factor IF = e^(∫ 1/x dx) = e^(ln x) = x.\nGeneral solution: y * IF = ∫ (Q * IF) dx + C\ny * x = ∫ (x² * x) dx + C = ∫ x³ dx + C = x⁴/4 + C.\nSolution: y = x³/4 + C/x.',
        keyInsight: 'The integrating factor for P = 1/x simplifies directly to x.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c12-m4-01',
        subject: 'Mathematics',
        chapterId: 'c12-math-04',
        chapterTitle: 'Applications of Integrals & Differential Equations',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the order and degree of the differential equation: [1 + (dy/dx)²]^(3/2) = d²y/dx²?',
        options: ['A) Order = 1, Degree = 2', 'B) Order = 2, Degree = 2', 'C) Order = 2, Degree = 3', 'D) Order = 2, Degree = 1'],
        correctAnswer: 'B',
        explanation: 'Square both sides to eliminate the fractional exponent: [1 + (dy/dx)²]³ = (d²y/dx²)². The highest order derivative is d²y/dx² (Order = 2), and its power after clearing radicals is 2 (Degree = 2).',
        sourceType: 'JEE Main PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Spatial Geometry & Probability',
    order: 5,
    title: 'Vectors, 3D Geometry & Probability',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 11 Straight Lines & Conic Sections',
    totalConcepts: 8,
    durationHours: 8.0,
    description: 'Vectors: Dot and Cross products, Scalar Triple Product ($[\\vec{a}\\,\\vec{b}\\,\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$), Vector Triple Product; Three-Dimensional Geometry: Direction cosines and direction ratios ($l^2 + m^2 + n^2 = 1$), vector and Cartesian equations of a line in 3D ($\\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}$), shortest distance between skew lines, equations of planes, angle between line and plane, and Probability: Conditional probability ($P(A|B) = \\frac{P(A \\cap B)}{P(B)}$), multiplication rule, independent events, Total Probability Theorem, and Bayes’ Theorem.',
    introduction: 'Three-dimensional geometry navigates spatial lines, planes, and skew vectors in engineering and aerospace. Bayes’ Theorem in probability underpins modern machine learning, Bayesian medical diagnostics, and probabilistic decision-making.',
    topics: [
      'Vectors in 3D: Dot Product, Cross Product, Scalar Triple Product (Volume of Parallelepiped $V = |[\\vec{a}\\,\\vec{b}\\,\\vec{c}]|$)',
      'Coplanar Vectors Condition: $[\\vec{a}\\,\\vec{b}\\,\\vec{c}] = 0$',
      'Direction Cosines ($l, m, n$) and Direction Ratios ($a, b, c$): $l^2 + m^2 + n^2 = 1$',
      'Equation of Straight Line in 3D: Vector $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$ and Cartesian $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$',
      'Shortest Distance between Skew Lines: $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$',
      'Equation of Plane in 3D: Normal form $\\vec{r} \\cdot \\hat{n} = d$, General form $Ax + By + Cz + D = 0$',
      'Probability: Conditional Probability ($P(A|B) = \\frac{P(A \\cap B)}{P(B)}$)',
      'Independent Events: $P(A \\cap B) = P(A) \\cdot P(B)$',
      'Law of Total Probability and Bayes’ Theorem: Calculating posterior probabilities from prior conditions'
    ],
    summaryNotes: `### Core Spatial Geometry & Bayes' Formulas:
1. **Shortest Distance between Skew Lines:**
   $$d = \\frac{\\left| (\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) \\right|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$
   - If $d = 0$, the two lines **intersect in 3D space** (are coplanar).
2. **Scalar Triple Product Coplanarity Test:**
   $$[\\vec{a} \\, \\vec{b} \\, \\vec{c}] = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix} = 0 \\iff \\text{Coplanar}$$
3. **Bayes' Theorem Formulation:**
   $$P(E_i | A) = \\frac{P(E_i) \\cdot P(A | E_i)}{\\sum_{j=1}^k P(E_j) \\cdot P(A | E_j)}$$
   - Computes reverse conditional probability after observing evidence $A$.`,
    definitions: [
      'Skew Lines: Lines in three-dimensional space that are neither parallel nor intersecting and lie in different planes.',
      'Bayes\' Theorem: A mathematical formula used to determine the conditional probability of an event based on prior knowledge of conditions related to the event.'
    ],
    formulas: [
      { name: 'Bayes\' Theorem', formula: 'P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum P(E_j) P(A | E_j)}', explanation: 'Posterior probability formula given observed condition A.', units: 'Probability (0 to 1)' },
      { name: 'Skew Line Shortest Distance', formula: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}', explanation: 'Minimum distance between non-parallel non-intersecting lines in 3D.', units: 'Distance' }
    ],
    solvedExamples: [
      {
        question: 'Bag A contains 4 red and 6 black balls. Bag B contains 7 red and 3 black balls. A bag is chosen at random and a ball is drawn and found to be red. What is the probability that it was drawn from Bag B?',
        solution: 'P(B₁) = 1/2, P(B₂) = 1/2.\nP(Red | B₁) = 4/10 = 0.4. P(Red | B₂) = 7/10 = 0.7.\nBy Bayes\' Theorem:\nP(B₂ | Red) = [P(B₂) * P(Red | B₂)] / [P(B₁) * P(Red | B₁) + P(B₂) * P(Red | B₂)]\n= [0.5 * 0.7] / [0.5 * 0.4 + 0.5 * 0.7] = 0.35 / (0.20 + 0.35) = 0.35 / 0.55 = 7/11.',
        keyInsight: 'Apply Bayes\' formula with prior bag probabilities and conditional red draws.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c12-m5-01',
        subject: 'Mathematics',
        chapterId: 'c12-math-05',
        chapterTitle: 'Vectors, 3D Geometry & Probability',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'If a line makes angles 90°, 135°, and 45° with the x, y, and z axes respectively, its direction cosines (l, m, n) are:',
        options: ['A) 0, -1/√2, 1/√2', 'B) 1, -1/√2, 1/√2', 'C) 0, 1/2, 1/2', 'D) 0, -1/2, 1/2'],
        correctAnswer: 'A',
        explanation: 'l = cos 90° = 0. m = cos 135° = -1/√2. n = cos 45° = 1/√2. Check l² + m² + n² = 0 + 1/2 + 1/2 = 1.',
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
    id: 'c12-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Reproductive Biology & Embryology',
    order: 1,
    title: 'Reproduction in Organisms & Human Reproduction',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 10 How Do Organisms Reproduce?',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Asexual & sexual reproduction, pre-fertilization events (gametogenesis, gamete transfer), male reproductive anatomy (Sertoli cells, Leydig cells, spermatogenesis: Spermatogonia → Primary spermatocyte → Secondary spermatocytes → Spermatids → Spermatozoa, spermiogenesis), female reproductive anatomy (Oogenesis: Primary oocyte arrested in Prophase I, Graafian follicle, ovulation of secondary oocyte in Metaphase II), the menstrual cycle (hormonal control: GnRH, FSH, LH surge, Estrogen, Progesterone), fertilization (acrosomal reaction, cortical reaction preventing polyspermy), cleavage, blastocyst implantation, pregnancy and placenta hormones (hCG, hPL, relaxin), parturition (fetal ejection reflex, oxytocin), and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT, ICSI).',
    introduction: 'Human reproduction is a high-yield domain in NEET biology. From the pituitary LH surge triggering ovulation to the acrosomal penetration of the zona pellucida, understanding gametogenesis and hormonal feedback is vital for future doctors.',
    topics: [
      'Gametogenesis in Males: Seminiferous tubules, Sertoli cells (nutrition), Leydig cells (Testosterone)',
      'Spermatogenesis: Mitotic proliferation → Meiotic divisions → Spermiogenesis (maturation into flagellated spermatozoa)',
      'Gametogenesis in Females: Oogenesis starts before birth! Primary oocytes arrested at diplotene stage of Prophase I',
      'Folliculogenesis: Primary → Secondary → Tertiary (Antrum fluid cavity) → Mature Graafian Follicle',
      'The Menstrual Cycle: Menstrual Phase (Day 1-5), Follicular/Proliferative Phase (Day 6-13), Ovulatory Phase (Day 14: LH Surge triggers ovulation), Luteal/Secretory Phase (Corpus luteum secretes Progesterone)',
      'Fertilization: Acrosomal enzymes (Hyaluronidase) penetrate Corona Radiata and Zona Pellucida; Depolarization blocks Polyspermy',
      'Blastocyst and Implantation: Trophoblast (attaches to uterine endometrium) and Inner Cell Mass (embryo)',
      'Hormones of Pregnancy: Human Chorionic Gonadotropin (hCG - detected in pregnancy test strips), hPL, and Relaxin',
      'Parturition (Oxytocin positive feedback loop) and Lactation (Prolactin & Oxytocin milk let-down reflex)',
      'Reproductive Health & Infertility: IVF (Test Tube Baby), ZIFT (Zygote Intra-Fallopian Transfer $\\le 8$ blastomeres), IUT ($>8$ blastomeres), GIFT, ICSI'
    ],
    summaryNotes: `### Core Endocrine & Gametogenic Sequences:
1. **The LH Surge (Day 14):**
   - Rapid secretion of Luteinizing Hormone (LH) induces rupture of the Graafian follicle, releasing the **Secondary Oocyte** arrested at Metaphase II into the peritoneal cavity (**Ovulation**).
   - Ruptured follicle transforms into the yellow **Corpus Luteum**, which secretes large amounts of **Progesterone** to maintain the vascular endometrium for pregnancy.
2. **Spermatogenesis vs Oogenesis:**
   - **Spermatogenesis:** Begins at puberty, continuous throughout life; 1 primary spermatocyte yields **4 functional spermatozoa**.
   - **Oogenesis:** Initiated during fetal development, halts at menopause (~50 years); 1 primary oocyte yields **only 1 functional ovum + polar bodies**!
3. **Assisted Reproductive Technologies (ART):**
   - **ZIFT:** Embryo with up to 8 blastomeres transferred into **Fallopian Tube**.
   - **IUT:** Embryo with more than 8 blastomeres transferred into **Uterus**.
   - **ICSI (Intra-Cytoplasmic Sperm Injection):** Single sperm injected directly into ovum.`,
    definitions: [
      'LH Surge: The sudden spike in luteinizing hormone concentration mid-menstrual cycle that triggers ovulation of the mature Graafian follicle.',
      'Spermiogenesis: The transformation of non-motile spherical spermatids into mature, elongated, flagellated spermatozoa.'
    ],
    formulas: [
      { name: 'Oogenesis Yield', formula: '1\\text{ Primary Oocyte } (2n) \\xrightarrow{\\text{Meiosis}} 1\\text{ Ovum } (n) + 2-3\\text{ Polar Bodies}', explanation: 'Unequal cytokinesis conserving cytoplasmic reserves for zygote.', units: 'Cytogenetics' }
    ],
    solvedExamples: [
      {
        question: 'Which hormone level is monitored in urine by commercial diagnostic kits to confirm human pregnancy?',
        solution: 'Human Chorionic Gonadotropin (hCG). It is secreted by the trophoblast layer of the implanted blastocyst and early placenta to maintain the corpus luteum and progesterone secretion. Its presence in maternal urine is the definitive clinical indicator of pregnancy.',
        keyInsight: 'hCG is produced exclusively by placental trophoblast cells.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c12-b1-01',
        subject: 'Biology',
        chapterId: 'c12-bio-01',
        chapterTitle: 'Reproduction in Organisms & Human Reproduction',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In the human menstrual cycle, the rapid secretion of which hormone induces ovulation of the Graafian follicle on approximately day 14?',
        options: ['A) Progesterone', 'B) Estrogen', 'C) Luteinizing Hormone (LH)', 'D) Oxytocin'],
        correctAnswer: 'C',
        explanation: 'A dramatic mid-cycle surge of Luteinizing Hormone (LH) induces the rupture of the mature Graafian follicle and the release of the secondary oocyte (ovulation).',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Classical & Clinical Genetics',
    order: 2,
    title: 'Principles of Inheritance and Variation',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 10 Heredity and Evolution',
    totalConcepts: 8,
    durationHours: 8.0,
    description: 'Mendel’s principles, Incomplete Dominance (*Mirabilis jalapa* 1:2:1), Co-dominance (ABO blood grouping in humans: $I^A, I^B, i$), multiple alleles, Pleiotropy, Polygenic inheritance (human skin color), Chromosomal Theory of Inheritance (Sutton & Boveri), T.H. Morgan’s linkage and recombination experiments on *Drosophila melanogaster*, Sex determination (XX-XY, XX-XO, ZZ-ZW in birds), Mutation, Pedigree Analysis symbols, Mendelian genetic disorders (Hemophilia, Sickle-cell anemia - Glu to Val substitution, Phenylketonuria, Thalassemia), and Chromosomal disorders (Down syndrome trisomy 21, Turner syndrome 45,XO, Klinefelter syndrome 47,XXY).',
    introduction: 'Genetics bridges Mendelian mathematical ratios with chromosomal mechanics. T.H. Morgan used fruit flies to demonstrate gene linkage, while clinical pedigree analysis reveals sex-linked and autosomal genetic diseases in human families.',
    topics: [
      'Deviations from Mendelism: Incomplete Dominance (*Snapdragon / Antirrhinum*: Red x White → 100% Pink F1; F2 ratio $1:2:1$ for both phenotype and genotype)',
      'Co-dominance: ABO Blood Grouping ($I^A, I^B$ are co-dominant, $i$ is recessive)',
      'Pleiotropy (Single gene controlling multiple phenotypic effects, e.g., Phenylketonuria) and Polygenic Inheritance (Gaussian bell curve)',
      'Chromosomal Theory of Inheritance (Walter Sutton and Theodor Boveri, 1902)',
      'Thomas Hunt Morgan\'s Linkage Experiments on *Drosophila*: Linkage maps (Alfred Sturtevant: 1 map unit = 1% recombination frequency)',
      'Sex Determination Mechanisms: XX-XY (Humans, Drosophila), XX-XO (Grasshopper), ZZ-ZW (Female heterogamety in Birds), Haplodiploidy in Honeybees',
      'Pedigree Analysis: Charting inheritance of autosomal dominant (Myotonic dystrophy), autosomal recessive (Sickle-cell), X-linked recessive (Hemophilia, Color blindness)',
      'Molecular Pathology of Sickle-Cell Anemia: Single base substitution ($GAG \\rightarrow GUG$) at 6th codon of $\\beta$-globin chain replacing Glutamic Acid with Valine',
      'Aneuploidy & Polyploidy: Down Syndrome (Trisomy 21), Turner Syndrome ($45, XO$), Klinefelter Syndrome ($47, XXY$)'
    ],
    summaryNotes: `### High-Yield Genetic Disorders Table:
1. **Sickle-Cell Anemia (Autosomal Recessive):**
   - Point mutation at 6th codon of $\\beta$-globin gene: $GAG \\longrightarrow GUG$.
   - Replaces hydrophilic **Glutamic Acid (Glu)** with hydrophobic **Valine (Val)**.
   - Under low oxygen tension, mutant $Hb^S$ polymerizes into long fibers, distorting biconcave RBCs into rigid sickle shapes that occlude capillaries.
2. **Hemophilia (X-Linked Recessive "Royal Disease"):**
   - Defect in blood clotting cascade protein (Factor VIII or IX).
   - Transmitted from carrier mother ($X^H X^h$) to $50\\%$ of sons.
3. **Chromosomal Aneuploidies:**
   - **Down Syndrome:** Trisomy of chromosome 21 ($47$ chromosomes). Short stature, furrowed tongue, mental retardation, palm crease.
   - **Klinefelter Syndrome ($47, XXY$):** Male with overall masculine development, but expresses feminine characters (Gynaecomastia - breast development) and sterility.
   - **Turner Syndrome ($45, XO$):** Sterile females with webbed neck, rudimentary ovaries, and lack of secondary sexual characters.`,
    definitions: [
      'Linkage: The physical association of two or more genes on the same chromosome that tend to be inherited together.',
      'Aneuploidy: The presence of an abnormal number of chromosomes in a cell, caused by non-disjunction during meiotic division.'
    ],
    formulas: [
      { name: 'Genetic Map Distance', formula: '1\\text{ Centimorgan (cM)} = 1\\% \\text{ Recombination Frequency}', explanation: 'Measure of genetic distance between linked loci.', units: 'cM' }
    ],
    solvedExamples: [
      {
        question: 'A hemophilic man marries a normal woman whose father was hemophilic. What percentage of their sons will be hemophilic?',
        solution: 'Hemophilic man genotype: X^h Y.\nWoman has normal phenotype, but her father was hemophilic (X^h Y), so she must have inherited his X^h chromosome: her genotype is X^H X^h (carrier).\nCross: X^h Y x X^H X^h.\nSons inherit Y from father and either X^H or X^h from mother:\nPossible sons: X^H Y (Normal, 50%) and X^h Y (Hemophilic, 50%).\nTherefore, 50% of the male children will suffer from hemophilia.',
        keyInsight: 'Mothers transmit X chromosomes to their sons.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c12-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c12-b2-01',
        subject: 'Biology',
        chapterId: 'c12-bio-02',
        chapterTitle: 'Principles of Inheritance and Variation',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In sickle-cell anemia, which amino acid replaces glutamic acid at the sixth position of the beta-globin chain?',
        options: ['A) Alanine', 'B) Valine', 'C) Glycine', 'D) Leucine'],
        correctAnswer: 'B',
        explanation: 'A point mutation changes the GAG codon to GUG, causing hydrophobic valine to substitute for hydrophilic glutamic acid at position 6.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Molecular Biology & Gene Regulation',
    order: 3,
    title: 'Molecular Basis of Inheritance',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Principles of Inheritance and Variation',
    totalConcepts: 8,
    durationHours: 8.5,
    description: 'The search for genetic material (Griffith’s transformation, Avery-MacLeod-McCarty, Hershey-Chase bacteriophage experiment), structure of DNA double helix (Watson & Crick, Chargaff rules), packaging of DNA helix (histone octamer, nucleosome, 30 nm chromatin fiber), DNA replication mechanism (Meselson & Stahl semiconservative proof, DNA Polymerase III, leading & lagging strand Okazaki fragments), Transcription (promoter, structural gene, terminator, RNA polymerases, post-transcriptional processing: capping, tailing, splicing), Genetic Code (64 codons, degenerate, unambiguous, universal, start codon AUG), Translation (tRNA adapter clover-leaf, ribosome catalytic center), Regulation of Gene Expression (Jacob and Monod’s Lac Operon model: promoter, operator, repressor, inducer lactose), and DNA Fingerprinting (VNTRs, Southern blotting).',
    introduction: 'The central dogma of molecular biology—DNA makes RNA, and RNA makes protein—governs all terrestrial life. Deciphering the triplet genetic code, transcription splicing, and operon genetic switches represents 20th-century biology\'s crowning achievement.',
    topics: [
      'Proof of DNA as Genetic Material: Frederick Griffith (1928, Streptococcus transformation), Hershey & Chase (1952, ³²P DNA vs ³⁵S Protein in T2 phage)',
      'DNA Double Helix Structure: Antiparallel strands ($5\' \\rightarrow 3\'$ and $3\' \\rightarrow 5\'$), Complementary base pairs with Hydrogen bonds ($A=T, G\\equiv C$), Pitch $= 3.4\\text{ nm}$ ($10\\text{ bp}$ per turn)',
      'Nucleosome Architecture: Core of 8 basic histone proteins (H2A, H2B, H3, H4 pairs) wrapped by 200 bp of DNA; H1 linker histone',
      'Meselson and Stahl Experiment (1958): Heavy isotope $^{15}N$ density gradient centrifugation proving semiconservative replication',
      'DNA Replication Machinery: Helicase, Topoisomerase, DNA-dependent DNA Polymerase ($5\' \\rightarrow 3\'$ synthesis), Continuous leading strand vs Discontinuous lagging strand Okazaki fragments joined by DNA Ligase',
      'Transcription in Eukaryotes: RNA Polymerase I (rRNA), II (hnRNA/mRNA), III (tRNA, 5S rRNA); Splicing of non-coding introns, 5\'-Capping (methylguanosine triphosphate), 3\'-Polyadenylation tailing',
      'Characteristics of the Genetic Code: Triplet, Universal, Non-overlapping, Degenerate (61 codons code for 20 amino acids; 3 stop codons: UAA, UAG, UGA), Dual function of AUG (Codes for Methionine and acts as Initiator)',
      'The Lac Operon (Jacob & Monod): Negative regulation by $i$-gene repressor protein; Lactose acts as Inducer binding repressor to transcribe structural genes $z$ ($\\beta$-galactosidase), $y$ (permease), and $a$ (transacetylase)',
      'DNA Fingerprinting (Sir Alec Jeffreys): Variable Number Tandem Repeats (VNTRs / Minisatellites), Gel Electrophoresis, Autoradiography'
    ],
    summaryNotes: `### Core Molecular Genetics Pillars:
1. **The Lac Operon Model (Jacob & Monod):**
   - **In absence of Inducer (Lactose):** Repressor protein synthesized by the $i$-gene binds firmly to the **Operator ($o$)** region, blocking RNA polymerase from transcribing the structural genes ($z, y, a$). Operon is switched **OFF**.
   - **In presence of Inducer (Lactose / Allolactose):** Lactose binds to the repressor protein, altering its conformation so it cannot bind the operator. RNA polymerase binds the promoter and transcribes:
     * **$z$ gene:** $\\beta$-Galactosidase (hydrolyzes lactose into glucose + galactose).
     * **$y$ gene:** Permease (increases membrane permeability to lactose).
     * **$a$ gene:** Transacetylase.
2. **Genetic Code Properties:**
   - **Degeneracy:** Most amino acids are coded by more than one codon (e.g., Leucine has 6 codons).
   - **Unambiguous:** A specific codon always codes for one and only one amino acid.
   - **Stop Codons:** $UAA$ (Ochre), $UAG$ (Amber), $UGA$ (Opal) signal translation termination.`,
    definitions: [
      'Central Dogma: The overarching framework of molecular biology describing the flow of genetic information from DNA to RNA (transcription) and from RNA to functional protein (translation).',
      'Lac Operon: A coordinated genetic unit in E. coli consisting of promoter, operator, and structural genes that regulates the transport and metabolism of lactose.'
    ],
    formulas: [
      { name: 'Chargaff\'s Parity Rule', formula: '\\%A = \\%T \\quad \\text{and} \\quad \\%G = \\%C \\implies \\frac{A+G}{T+C} = 1.0', explanation: 'Equivalence of purines and pyrimidines in double-stranded DNA.', units: 'Ratio' }
    ],
    solvedExamples: [
      {
        question: 'If a double-stranded DNA sample contains 20% Cytosine, calculate the percentage of Adenine present in the DNA.',
        solution: 'By Chargaff\'s rule: %Cytosine = %Guanine = 20%.\nTotal C + G = 20% + 20% = 40%.\nThe remaining fraction is Adenine and Thymine: %A + %T = 100% - 40% = 60%.\nSince %A = %T: %Adenine = 60% / 2 = 30%.',
        keyInsight: 'Chargaff\'s base pairing requires %A = %T and %G = %C.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c12-b3-01',
        subject: 'Biology',
        chapterId: 'c12-bio-03',
        chapterTitle: 'Molecular Basis of Inheritance',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'Which enzyme is responsible for synthesizing the precursor of messenger RNA (hnRNA) in eukaryotic nuclei?',
        options: ['A) RNA Polymerase I', 'B) RNA Polymerase II', 'C) RNA Polymerase III', 'D) DNA Polymerase I'],
        correctAnswer: 'B',
        explanation: 'RNA Polymerase II transcribes the precursor of mRNA (heterogeneous nuclear RNA, hnRNA) in eukaryotes.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Biotechnology & Genetic Engineering',
    order: 4,
    title: 'Biotechnology: Principles and Applications',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Molecular Basis of Inheritance',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Principles of biotechnology (genetic engineering, bioprocess engineering), tools of recombinant DNA technology (Restriction Enzymes / molecular scissors: EcoRI palindromic recognition $5\'-GAATTC-3\'$, DNA Ligase, cloning vectors: plasmid pBR322 selectable markers $amp^R, tet^R$, insertional inactivation), competent host cells ($CaCl_2$, heat shock, gene gun, microinjection), Polymerase Chain Reaction (PCR: Denaturation 94°C, Annealing 54°C, Extension 72°C with *Taq* polymerase from *Thermus aquaticus*), Agarose Gel Electrophoresis (Ethidium bromide, UV visualization), Bioreactors (stirred-tank), downstream processing, agricultural applications (Bt Cotton, *Bacillus thuringiensis* Cry toxins, RNA interference RNAi in tobacco against *Meloidogyne incognita*), medical applications (recombinant human insulin / Humulin with A & B chains, gene therapy for ADA deficiency), and transgenic animals.',
    introduction: 'Biotechnology manipulates the molecular code of life for human welfare. From using restriction enzymes as molecular scissors to synthesise Humulin insulin, to PCR amplifying microscopic forensic DNA, biotechnology is the cutting edge of medicine and agriculture.',
    topics: [
      'Restriction Endonucleases: Discovery by Arber, Nathans, Smith; Palindromic recognition sequences, Sticky overhang ends ($EcoRI: 5\'-G\\downarrow AATTC-3\'$)',
      'Agarose Gel Electrophoresis: Separates DNA fragments based on molecular size/charge; Staining with Ethidium Bromide ($EtBr$) shows bright orange bands under UV light; Elution',
      'Cloning Vector Features: Origin of Replication ($Ori$), Selectable Markers ($amp^R, tet^R$), Unique Cloning Sites',
      'Insertional Inactivation: Recombinant insertion into $\\beta$-galactosidase gene produces white colonies; non-recombinants produce blue colonies with X-gal!',
      'Methods of Gene Insertion: Divalent cation ($Ca^{2+}$) + Heat Shock ($42^\\circ\\text{C}$), Microinjection (animal cells), Biolistics / Gene Gun (gold/tungsten microparticles in plant cells)',
      'Polymerase Chain Reaction (Kary Mullis, 1983): Denaturation ($94^\\circ\\text{C}$), Annealing of primers ($54^\\circ\\text{C}$), Primer Extension ($72^\\circ\\text{C}$ via thermostable *Taq* Polymerase from *Thermus aquaticus*) - 1 billion copies in 30 cycles!',
      'Bioreactors (Continuous stirred-tank) and Downstream Processing (Separation, purification, quality clinical trials)',
      'Bt Cotton: Soil bacterium *Bacillus thuringiensis* produces inactive protoxin Cry crystals; solubilized by alkaline gut pH of bollworm, creating epithelial pores and insect lysis',
      'RNA Interference (RNAi): Cellular defense silencing specific mRNA in tobacco roots using double-stranded RNA against nematode *Meloidogyne incognita*',
      'Recombinant Human Insulin (Eli Lilly, 1983): Synthesizing separate A and B polypeptide chains in *E. coli* and joining via disulfide bonds (Humulin)',
      'Gene Therapy: First clinical trial (1990) for 4-year-old girl with Adenosine Deaminase (ADA) deficiency using retroviral vector'
    ],
    summaryNotes: `### Core Biotechnology Innovations:
1. **PCR Three-Step Thermocycling (Kary Mullis):**
   - **Step 1: Denaturation ($94^\\circ\\text{C}$):** High temperature uncoils double-stranded target DNA into two separate single strands by breaking hydrogen bonds.
   - **Step 2: Annealing ($54^\\circ\\text{C}$):** Two sets of synthetic oligonucleotide primers bind to complementary regions at the $3\'$ ends of DNA templates.
   - **Step 3: Extension ($72^\\circ\\text{C}$):** Thermostable **Taq Polymerase** synthesizes new complementary strands using dNTPs and $Mg^{2+}$.
2. **Bt Toxin Action Mechanism:**
   - *Bacillus thuringiensis* produces inactive crystalline **protoxin** proteins (*Cry* genes: *cryIAc, cryIIAb* control cotton bollworms; *cryIAb* controls corn borer).
   - Once ingested by insect larva, the **alkaline pH** of the insect midgut dissolves the protein crystals into active toxic form.
   - Activated toxin binds to midgut epithelial cell surfaces, creating pores that cause cell swelling, lysis, and death of the pest without harming mammals!
3. **Genetically Engineered Insulin (Humulin):**
   - Human pro-insulin contains an extra **C-peptide** chain ($33$ amino acids) that must be cleaved for activation.
   - American company Eli Lilly prepared two separate DNA sequences for the **A chain** ($21$ amino acids) and **B chain** ($30$ amino acids), cloned them into *E. coli* plasmids, and connected the extracted chains via **disulfide bridges** to produce authentic active human insulin!`,
    definitions: [
      'Restriction Endonuclease: A bacterial enzyme that recognizes a specific palindromic nucleotide sequence in double-stranded DNA and cleaves both strands at designated points.',
      'RNA Interference (RNAi): A biological mechanism of gene silencing in which double-stranded RNA molecules trigger the enzymatic destruction of specific complementary mRNA transcripts.'
    ],
    formulas: [
      { name: 'PCR Amplification Yield', formula: 'N = N_0 \\times 2^n', explanation: 'Exponential DNA amplification after n thermocycles.', units: 'DNA molecules' }
    ],
    solvedExamples: [
      {
        question: 'Why does the Bt toxin protein not kill the bacterium Bacillus thuringiensis itself?',
        solution: 'In the bacterium Bacillus thuringiensis, the Bt toxin protein is synthesized and stored in an inactive crystalline form called a protoxin. It converts into its toxic pore-forming state only in the presence of the alkaline pH found inside the midgut of susceptible insects. The bacterium does not have an alkaline gut pH, so the toxin remains completely harmless to it.',
        keyInsight: 'Bt toxin requires insect gut alkaline pH to become active.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c12-b4-01',
        subject: 'Biology',
        chapterId: 'c12-bio-04',
        chapterTitle: 'Biotechnology: Principles and Applications',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'What is the optimum operating temperature for the extension step of PCR catalyzed by Taq polymerase?',
        options: ['A) 94°C', 'B) 54°C', 'C) 72°C', 'D) 37°C'],
        correctAnswer: 'C',
        explanation: 'The extension step of PCR is carried out at approximately 72°C, which is the optimum catalytic temperature for thermostable Taq polymerase isolated from Thermus aquaticus.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c12-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Ecology & Biodiversity Conservation',
    order: 5,
    title: 'Ecology and Environment',
    stage: 'advanced',
    classLevel: 'Class 12',
    priority: 'High priority',
    prerequisite: 'Class 10 Our Environment',
    totalConcepts: 8,
    durationHours: 7.5,
    description: 'Organisms and environment: Major abiotic factors, adaptations (Allen’s rule), population attributes (birth rate, death rate, sex ratio, age pyramids), population growth models (Exponential $dN/dt = rN$ vs Logistic Verhulst-Pearl $dN/dt = rN[\\frac{K-N}{K}]$), population interactions (Mutualism, Commensalism, Parasitism, Predation, Amensalism, Gause’s Competitive Exclusion Principle), Ecosystem: primary and secondary productivity, decomposition, ecological pyramids (number, biomass, energy), primary and secondary ecological succession, Biodiversity: latitudinal gradients, Alexander von Humboldt’s Species-Area relationship ($\\log S = \\log C + Z \\log A$), Paul Ehrlich’s Rivet Popper hypothesis, The Evil Quartet causes of biodiversity loss, and In-situ vs Ex-situ conservation strategies.',
    introduction: 'Ecology studies the intricate web connecting organisms with abiotic environments. From Alexander von Humboldt’s species-area relationship in Amazonian rainforests to logistic population carrying capacity, ecological science is essential for planetary preservation.',
    topics: [
      'Organism Adaptations: Allen\'s Rule (Mammals from colder climates have shorter ears and limbs to minimize heat loss)',
      'Population Growth Models: Exponential / Geometric ($dN/dt = rN, N_t = N_0 e^{rt}$) vs Logistic Sigmoid Curve ($dN/dt = rN[\\frac{K-N}{K}]$ where $K$ is Carrying Capacity)',
      'Interspecific Population Interactions: Mutualism ($+/+$), Commensalism ($+/0$, e.g., Orchid on mango branch), Parasitism ($+/-$), Predation ($+/-$), Amensalism ($-/0$, e.g., *Penicillium* killing bacteria)',
      'Gause’s Competitive Exclusion Principle: Two competing species with identical ecological niches cannot coexist indefinitely',
      'Ecosystem Productivity: Gross Primary Productivity (GPP) vs Net Primary Productivity ($NPP = GPP - R$)',
      'Ecological Pyramids: Pyramid of Energy is **ALWAYS upright** (Lindeman\'s 10% law); Inverted Pyramid of Biomass in oceans (Phytoplankton < Zooplankton < Fish)',
      'Ecological Succession: Pioneer species (Lichens on bare rock) $\\rightarrow$ Climax Community (Forest)',
      'Biodiversity Patterns: Latitudinal Gradient (Species diversity peaks at equator and declines towards poles)',
      'Species-Area Relationship: $\\log S = \\log C + Z \\log A$ (Alexander von Humboldt, $Z$-slope typically $0.1 - 0.2$)',
      'The "Evil Quartet" Causes of Extinction: Habitat loss & fragmentation, Over-exploitation, Alien species invasions (Nile Perch, *Lantana*, Water Hyacinth), Co-extinctions',
      'Conservation Strategies: In-situ (Biosphere reserves, National parks, Sacred groves) vs Ex-situ (Zoological parks, Botanical gardens, Cryopreservation of gametes)'
    ],
    summaryNotes: `### Core Ecological Laws & Models:
1. **Logistic Growth (Verhulst-Pearl):**
   $$\\frac{dN}{dt} = rN \\left( \\frac{K - N}{K} \\right)$$
   - Produces a realistic **S-shaped sigmoid curve** because environmental resources are finite.
   - $K$ = Carrying Capacity (maximum population size sustainable by the environment).
2. **Species-Area Relationship (Humboldt):**
   $$\\log S = \\log C + Z \\log A$$
   - $S$ = Species richness, $A$ = Area, $Z$ = Slope of the line (regression coefficient).
   - For very large areas like entire continents, $Z$ is steeper, ranging between **$0.6$ and $1.2$**.
3. **Paul Ehrlich\'s Rivet Popper Hypothesis:**
   - Compares the ecosystem to an airplane and species to rivets holding it together.
   - Popping a few rivets from seats (loss of non-vital species) may not endanger flight immediately, but removing rivets from the **wings (keystone species)** threatens catastrophic collapse of the entire aircraft!
4. **Pyramid of Biomass in Sea:**
   - **Inverted!** The biomass of standing crop of phytoplankton is small at any given time, but supports a vastly larger biomass of longer-lived fishes.`,
    definitions: [
      'Carrying Capacity (K): The maximum population size of a biological species that a particular environment can sustain indefinitely given the available food, water, and space.',
      'Gause\'s Competitive Exclusion Principle: Two closely related species competing for the same limiting resources cannot coexist indefinitely; the competitively inferior species will eventually be eliminated.'
    ],
    formulas: [
      { name: 'Logistic Population Growth', formula: '\\frac{dN}{dt} = rN \\left(\\frac{K - N}{K}\\right)', explanation: 'Verhulst-Pearl logistic equation factoring carrying capacity K.', units: 'Individuals/time' },
      { name: 'Species-Area Equation', formula: '\\log S = \\log C + Z \\log A', explanation: 'Alexander von Humboldt\'s rectangular hyperbola logarithmic relation.', units: 'Log units' }
    ],
    solvedExamples: [
      {
        question: 'Explain why the ecological pyramid of energy is always upright and can never be inverted in any ecosystem.',
        solution: 'According to Lindeman’s 10% law of thermodynamics, energy is continuously dissipated as metabolic heat at every trophic transition. When energy flows from primary producers to herbivores and carnivores, only about 10% is incorporated into new biomass at each step. Because energy content strictly decreases up the food chain, the pyramid of energy is always upright.',
        keyInsight: 'Thermodynamic dissipation ensures the pyramid of energy is always upright.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c12-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c12-b5-01',
        subject: 'Biology',
        chapterId: 'c12-bio-05',
        chapterTitle: 'Ecology and Environment',
        questionType: 'mcq_single',
        difficulty: 'intermediate',
        questionText: 'In the Verhulst-Pearl logistic growth equation dN/dt = rN[(K - N)/K], what does the term (K - N)/K represent?',
        options: ['A) Carrying capacity', 'B) Environmental resistance', 'C) Biotic potential', 'D) Intrinsic rate of natural increase'],
        correctAnswer: 'B',
        explanation: 'The term (K - N)/K represents environmental resistance—the fraction of carrying capacity remaining unused, which slows down growth as population N approaches K.',
        sourceType: 'NEET PYQ',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
