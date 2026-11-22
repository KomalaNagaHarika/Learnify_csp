import { Chapter } from '../../types';

export const CLASS_9_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c9-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Motion',
    order: 1,
    title: 'Motion',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Class 8 Force and Pressure',
    totalConcepts: 7,
    durationHours: 4.5,
    description: 'Distance, displacement, uniform and non-uniform motion, speed, velocity, acceleration, distance-time & velocity-time graphs, equations of motion by graphical method, and uniform circular motion.',
    introduction: 'Motion is one of the most fundamental concepts in science. Everything in the universe, from planets orbiting the sun to electrons around a nucleus, is in constant motion. Learning to quantify position, speed, and acceleration provides the cornerstone for all future physics.',
    topics: [
      'Describing Motion: Reference Point, Distance vs Displacement',
      'Uniform and Non-Uniform Motion',
      'Measuring Rate of Motion: Speed and Velocity',
      'Rate of Change of Velocity: Acceleration ($a = (v-u)/t$)',
      'Graphical Representation of Motion (s-t and v-t graphs)',
      'Equations of Motion by Graphical Method: $v = u + at, s = ut + \\frac{1}{2}at^2, v^2 = u^2 + 2as$',
      'Uniform Circular Motion: Direction changes continuously, $v = 2\\pi r / T$'
    ],
    summaryNotes: `### Key Concepts:
1. **Distance vs Displacement:**
   - Distance is scalar path length ($\\ge 0$).
   - Displacement is the shortest straight-line vector distance from initial to final position (can be negative, zero, or positive).
2. **Three Equations of Motion (for uniform acceleration):**
   - First: $v = u + at$ (Velocity-time relation)
   - Second: $s = ut + \\frac{1}{2}at^2$ (Position-time relation)
   - Third: $v^2 - u^2 = 2as$ (Position-velocity relation)
3. **v-t Graphs:**
   - Slope of $v-t$ graph gives **Acceleration** ($a = \\Delta v / \\Delta t$).
   - Area under $v-t$ graph gives **Displacement** ($s$).`,
    definitions: [
      'Displacement: The shortest directed vector distance measured from the initial to the final position of an object.',
      'Uniform Acceleration: When an object travels in a straight line and its velocity changes by equal amounts in equal intervals of time.'
    ],
    formulas: [
      { name: 'First Equation of Motion', formula: 'v = u + at', explanation: 'Velocity-time relationship under constant acceleration.', units: 'm/s' },
      { name: 'Second Equation of Motion', formula: 's = ut + \\frac{1}{2}at^2', explanation: 'Position-time relationship.', units: 'm' },
      { name: 'Third Equation of Motion', formula: 'v^2 = u^2 + 2as', explanation: 'Velocity-displacement relationship independent of time.', units: 'm²/s²' }
    ],
    solvedExamples: [
      {
        question: 'A train starts from rest and accelerates uniformly at 0.5 m/s² for 20 seconds. Find its final velocity and the distance traveled.',
        solution: 'Initial velocity u = 0, a = 0.5 m/s², t = 20 s.\nFinal velocity v = u + at = 0 + (0.5 * 20) = 10 m/s.\nDistance s = ut + 0.5 * a * t² = 0 + 0.5 * 0.5 * (20)² = 0.25 * 400 = 100 meters.',
        keyInsight: 'Starting from rest means u = 0.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c9-p1-01',
        subject: 'Physics',
        chapterId: 'c9-phys-01',
        chapterTitle: 'Motion',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The slope of a velocity-time (v-t) graph represents:',
        options: ['A) Distance', 'B) Displacement', 'C) Acceleration', 'D) Speed'],
        correctAnswer: 'C',
        explanation: 'Slope = dv/dt = rate of change of velocity, which is acceleration.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Dynamics',
    order: 2,
    title: 'Force and Laws of Motion',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Class 9 Motion',
    totalConcepts: 6,
    durationHours: 5.0,
    description: 'Balanced & unbalanced forces, Newton’s First Law (Inertia), Newton’s Second Law ($F = ma$, Momentum $p = mv$), Newton’s Third Law (Action-Reaction), and Conservation of Linear Momentum.',
    introduction: 'Why do we fall forward when a speeding bus brakes suddenly? Newton formulated the three universal laws of motion, linking applied force to acceleration and momentum change.',
    topics: [
      'Balanced and Unbalanced Forces',
      'First Law of Motion: Law of Inertia (Mass as quantitative measure of inertia)',
      'Linear Momentum ($p = mv$, Vector quantity in kg·m/s)',
      'Second Law of Motion: $F = dp/dt = ma$ (Derivation and 1 Newton definition)',
      'Third Law of Motion: Action and Reaction act on two distinct interacting bodies',
      'Conservation of Linear Momentum and Recoil Velocity of a Gun'
    ],
    summaryNotes: `### Newton's Three Laws:
1. **First Law:** An object remains in a state of rest or uniform straight-line motion unless acted on by an external unbalanced force.
2. **Second Law:** Rate of change of momentum is proportional to applied force:
   $$F = \\frac{m(v - u)}{t} = ma$$
   - Unit: $1\\text{ Newton} = 1\\text{ kg}\\cdot\\text{m/s}^2$.
3. **Third Law:** For every action, there is an equal and opposite reaction ($F_{AB} = -F_{BA}$).
4. **Conservation of Momentum:**
   $$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$$`,
    definitions: [
      'Inertia: The natural tendency of an object to resist a change in its state of rest or of uniform motion.',
      'Linear Momentum: The product of mass and velocity of a moving object.'
    ],
    formulas: [
      { name: 'Newton\'s Second Law', formula: 'F = ma', explanation: 'Net unbalanced force produces acceleration proportional to mass.', units: 'Newtons (N)' },
      { name: 'Linear Momentum', formula: 'p = mv', explanation: 'Quantity of motion in a mass.', units: 'kg·m/s' }
    ],
    solvedExamples: [
      {
        question: 'A bullet of mass 20 g is fired horizontally with velocity 150 m/s from a pistol of mass 2 kg. Calculate the recoil velocity of the pistol.',
        solution: 'm_bullet = 0.02 kg, v_bullet = 150 m/s, M_pistol = 2 kg.\nInitial momentum before firing = 0.\nBy conservation of momentum: M * V_recoil + m * v = 0\n2 * V_recoil + (0.02 * 150) = 0 => 2 * V_recoil = -3 => V_recoil = -1.5 m/s.',
        keyInsight: 'Recoil is in the opposite direction (indicated by negative sign).',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c9-p2-01',
        subject: 'Physics',
        chapterId: 'c9-phys-02',
        chapterTitle: 'Force and Laws of Motion',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'When a car takes a sudden sharp curve, passengers tilt outwards due to:',
        options: ['A) Inertia of direction', 'B) Centripetal force', 'C) Action-reaction pair', 'D) Gravitational force'],
        correctAnswer: 'A',
        explanation: 'Due to inertia of direction, the human body tends to maintain its original straight-line path while the car turns.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Gravity',
    order: 3,
    title: 'Gravitation',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Medium priority',
    prerequisite: 'Force and Laws of Motion',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Universal law of gravitation, inverse square law, free fall, acceleration due to gravity ($g = GM/R^2$), mass vs weight, thrust and pressure, buoyancy, Archimedes\' principle, and relative density.',
    introduction: 'Newton realized that the same force that pulls an apple to Earth keeps the moon orbiting in space. Gravitation is the universal attractive force binding planets, stars, and galaxies.',
    topics: [
      'Universal Law of Gravitation: $F = G \\frac{M m}{d^2}$ and Universal Constant $G = 6.673 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$',
      'Free Fall and Acceleration due to Gravity on Earth ($g \\approx 9.8\\text{ m/s}^2$)',
      'Variation of $g$ with Height, Depth, and Shape of Earth (Poles vs Equator)',
      'Mass (Intrinsic scalar in kg) vs Weight ($W = mg$, Vector force in N; Moon weight is $1/6\\text{th}$ Earth weight)',
      'Thrust and Pressure in Fluids',
      'Buoyancy, Archimedes\' Principle, and Relative Density'
    ],
    summaryNotes: `### Core Gravitational Physics:
1. **Newton's Gravitational Law:**
   $$F = G \\frac{M m}{r^2}$$
2. **Acceleration due to Gravity ($g$):**
   $$g = \\frac{GM}{R^2} \\approx 9.8\\text{ m/s}^2 \\text{ (on Earth surface)}$$
   - On the Moon: $g_{moon} \\approx \\frac{1}{6} g_{earth} \\approx 1.63\\text{ m/s}^2$.
3. **Archimedes\' Principle:**
   - When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of the fluid displaced by it.`,
    definitions: [
      'Universal Law of Gravitation: Every object in the universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.',
      'Archimedes\' Principle: The upward buoyant force exerted on a submerged body equals the weight of the fluid it displaces.'
    ],
    formulas: [
      { name: 'Gravitational Force', formula: 'F = G\\frac{M m}{r^2}', explanation: 'Attraction between two point masses separated by distance r.', units: 'Newtons (N)' },
      { name: 'Acceleration due to Gravity', formula: 'g = \\frac{GM}{R^2}', explanation: 'Planetary surface gravitational acceleration.', units: 'm/s²' }
    ],
    solvedExamples: [
      {
        question: 'An object has a mass of 12 kg on Earth. What is its mass and weight on the Moon? (Take g_earth = 9.8 m/s²)',
        solution: 'Mass is constant everywhere: Mass on Moon = 12 kg.\nWeight on Earth = m * g = 12 * 9.8 = 117.6 N.\nWeight on Moon = (1/6) * 117.6 = 19.6 N.',
        keyInsight: 'Mass never changes with location, but weight depends on local gravity g.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c9-p3-01',
        subject: 'Physics',
        chapterId: 'c9-phys-03',
        chapterTitle: 'Gravitation',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'If the distance between two masses is doubled, the gravitational force between them becomes:',
        options: ['A) Half', 'B) One-fourth', 'C) Double', 'D) Four times'],
        correctAnswer: 'B',
        explanation: 'According to the inverse square law, F is proportional to 1/r². If r is multiplied by 2, force becomes 1/(2)² = 1/4th of initial value.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Energy & Work',
    order: 4,
    title: 'Work and Energy',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Force and Laws of Motion',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Scientific work ($W = F \\cdot s$), positive/negative/zero work, kinetic energy ($E_k = \\frac{1}{2}mv^2$), potential energy ($E_p = mgh$), work-energy theorem, law of conservation of mechanical energy, power ($P = W/t$), and commercial unit of energy ($1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}$).',
    introduction: 'In everyday life, sitting and studying is called hard work. In physics, no mechanical work is done unless an applied force causes displacement. Energy cannot be created or destroyed, only transformed.',
    topics: [
      'Scientific Concept of Work: $W = F s \\cos\\theta$ (Joule = N·m)',
      'Positive Work ($\\theta = 0^\\circ$), Negative Work ($\\theta = 180^\\circ$, e.g., Friction), Zero Work ($\\theta = 90^\\circ$, e.g., Gravity on walking porter)',
      'Kinetic Energy: $E_k = \\frac{1}{2}mv^2$ (Derivation from equations of motion)',
      'Gravitational Potential Energy: $E_p = mgh$',
      'Law of Conservation of Energy: Total Mechanical Energy $E_k + E_p = \\text{Constant}$ during Free Fall',
      'Rate of Doing Work: Power ($P = W/t$ in Watts) and Commercial Electrical Unit ($1\\text{ kWh} = 3.6\\times 10^6\\text{ J}$)'
    ],
    summaryNotes: `### Core Energy Relations:
1. **Work:** $W = F s$. Unit: 1 Joule = 1 N · 1 m.
   - If displacement is perpendicular to force ($\\cos 90^\\circ = 0$), work done is **zero**.
2. **Kinetic Energy:** $E_k = \\frac{1}{2}mv^2$.
3. **Gravitational Potential Energy:** $E_p = mgh$.
4. **Conservation of Energy:** In a conservative field, total mechanical energy $E = E_k + E_p$ remains constant. As an apple falls, potential energy decreases while kinetic energy increases by the exact same amount.
5. **Power:** $P = W/t$. 1 Watt = 1 Joule/second. $1\\text{ kW} = 1000\\text{ W}$.
   $$1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ Joules}$$`,
    definitions: [
      'Work: The product of the component of force along the direction of displacement and the magnitude of this displacement.',
      '1 Watt: The power of an agent which does work at the rate of 1 Joule per second.'
    ],
    formulas: [
      { name: 'Kinetic Energy Formula', formula: 'E_k = \\frac{1}{2}mv^2', explanation: 'Kinetic energy of mass m moving at velocity v.', units: 'Joules (J)' },
      { name: 'Potential Energy Formula', formula: 'E_p = mgh', explanation: 'Gravitational potential energy raised to height h.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'An electric heater of 1500 W is used for 4 hours daily. How many units (kWh) of electricity are consumed in 30 days?',
        solution: 'Power P = 1500 W = 1.5 kW.\nTime per day = 4 hours. Total time in 30 days = 4 * 30 = 120 hours.\nEnergy = P * t = 1.5 kW * 120 h = 180 kWh = 180 units.',
        keyInsight: '1 commercial unit of electrical energy is 1 kWh.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c9-p4-01',
        subject: 'Physics',
        chapterId: 'c9-phys-04',
        chapterTitle: 'Work and Energy',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'A porter lifts a suitcase of 15 kg from the platform onto his head 1.5 m above the ground. Work done by the porter against gravity is: (g = 10 m/s²)',
        options: ['A) 22.5 J', 'B) 150 J', 'C) 225 J', 'D) 0 J'],
        correctAnswer: 'C',
        explanation: 'Work done W = m * g * h = 15 kg * 10 m/s² * 1.5 m = 225 Joules.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Acoustics & Wave Motion',
    order: 5,
    title: 'Sound',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Basic priority',
    prerequisite: 'Class 8 Sound',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Production and propagation of sound, sound as longitudinal wave, compressions and rarefactions, wave characteristics: wavelength ($\\lambda$), frequency ($\\nu$), amplitude ($A$), time period ($T$), wave speed ($v = \\nu \\lambda$), reflection of sound, echo conditions, reverberation, applications of ultrasound (SONAR, echocardiography), and structure of the human ear.',
    introduction: 'Sound propagates as mechanical density waves in elastic media. Dolphins navigate turbid waters using ultrasonic echoes, while submarines map seafloor trenches with SONAR.',
    topics: [
      'Production and Propagation of Sound in Mediums: Compressions ($C$) and Rarefactions ($R$)',
      'Longitudinal Waves (Particle oscillation parallel to wave propagation) vs Transverse Waves',
      'Wave Parameters: Wavelength ($\\lambda$), Frequency ($\\nu$), Time Period ($T = 1/\\nu$), Speed Relation ($v = \\nu \\lambda$)',
      'Speed of Sound in Different Media: Solids > Liquids > Gases ($v_{air} \\approx 344\\text{ m/s}$ at 22°C)',
      'Reflection of Sound: Laws of reflection, Echo conditions (Minimum distance 17.2 m in air)',
      'Reverberation in Auditoriums and Acoustic Soundproofing',
      'Ultrasound Applications: SONAR ($2d = v \\cdot t$), Flaw detection in metals, Echocardiography, Lithotripsy'
    ],
    summaryNotes: `### Core Wave Mechanics:
1. **Wave Speed Equation:**
   $$v = \\nu \\lambda = \\frac{\\lambda}{T}$$
2. **Echo Criteria:**
   - Persistence of hearing for human ear is **$0.1\\text{ s}$**.
   - Sound must travel to the reflector and back in at least $0.1\\text{ s}$:
     $$\\text{Total round-trip distance} = 2d = v \\cdot t = 344\\text{ m/s} \\times 0.1\\text{ s} = 34.4\\text{ m}$$
     $$\\implies \\text{Minimum obstacle distance } d = \\frac{34.4}{2} = 17.2\\text{ meters!}$$
3. **SONAR (Sound Navigation and Ranging):**
   - Transmits ultrasonic pulses into the sea. Receiver detects the reflected echo after time $t$:
     $$d = \\frac{v \\cdot t}{2}$$`,
    definitions: [
      'Longitudinal Wave: A mechanical wave in which particles of the medium oscillate parallel to the direction of energy propagation.',
      'Reverberation: The persistence of sound in an enclosed hall as a result of repeated multiple reflections from walls, ceiling, and floor.'
    ],
    formulas: [
      { name: 'Wave Equation', formula: 'v = \\nu \\lambda', explanation: 'Relates speed, frequency, and wavelength of any wave.', units: 'm/s' },
      { name: 'SONAR Distance Formula', formula: 'd = \\frac{v \\cdot t}{2}', explanation: 'Calculates underwater depth from two-way ultrasound pulse delay.', units: 'meters (m)' }
    ],
    solvedExamples: [
      {
        question: 'A ship sends out an ultrasound pulse that returns from the ocean floor after 3.0 seconds. If the speed of sound in seawater is 1530 m/s, find the depth of the ocean.',
        solution: 'Total two-way time t = 3.0 s, speed v = 1530 m/s.\nDepth d = (v * t) / 2 = (1530 * 3.0) / 2 = 4590 / 2 = 2295 meters.',
        keyInsight: 'Divide by 2 because the echo travels down to the seabed and back up.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c9-p5-01',
        subject: 'Physics',
        chapterId: 'c9-phys-05',
        chapterTitle: 'Sound',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the minimum distance from an obstacle required to hear a distinct echo in air at 22°C (speed of sound = 344 m/s)?',
        options: ['A) 34.4 m', 'B) 17.2 m', 'C) 8.6 m', 'D) 10 m'],
        correctAnswer: 'B',
        explanation: 'Due to the 0.1 s persistence of human hearing, minimum distance = (344 * 0.1) / 2 = 17.2 meters.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // CHEMISTRY (5 CHAPTERS)
  // ==========================================
  {
    id: 'c9-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'States of Matter',
    order: 1,
    title: 'Matter in Our Surroundings',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Basic priority',
    prerequisite: 'Class 8 Synthetic Fibres and Plastics',
    totalConcepts: 5,
    durationHours: 3.5,
    description: 'Physical nature of matter, particulate theory, states of matter (solid, liquid, gas), kinetic theory of particles, effect of temperature and pressure, latent heat of fusion and vaporization, sublimation, evaporation, and cooling factors.',
    introduction: 'Everything in the universe that occupies space and has mass is matter. From ice cubes melting to water boiling, temperature changes the kinetic energy of particles, altering macroscopic states of matter.',
    topics: [
      'Particulate Nature of Matter: Space, Continuous Motion, and Mutual Attraction',
      'Characteristics of the Three States of Matter: Solid, Liquid, Gas',
      'Change of State: Melting point, Boiling point, and Kelvin scale ($K = ^\\circ C + 273$)',
      'Latent Heat of Fusion (Solid $\\rightarrow$ Liquid) and Latent Heat of Vaporization (Liquid $\\rightarrow$ Gas)',
      'Sublimation (Solid directly to Gas, e.g., Camphor, Ammonium chloride, Dry Ice)',
      'Evaporation as Surface Phenomenon and Factors Affecting Evaporation Rate (Surface area, Temperature, Humidity, Wind speed)'
    ],
    summaryNotes: `### Core Thermodynamic Highlights:
1. **Latent Heat:** The hidden heat energy absorbed or released during a phase change without any change in temperature.
   - Ice at $0^\\circ\\text{C}$ absorbs $3.34 \\times 10^5\\text{ J/kg}$ of latent heat of fusion to become water at $0^\\circ\\text{C}$. Hence ice is more effective for cooling than water at $0^\\circ\\text{C}$!
   - Steam at $100^\\circ\\text{C}$ has latent heat of vaporization ($22.6 \\times 10^5\\text{ J/kg}$); severe steam burns occur because steam releases extra latent energy upon condensing on skin.
2. **Sublimation:** Direct transition from solid to gaseous state without passing through the liquid phase (e.g., Iodine, Naphthalene, Ammonium chloride, Solid $CO_2$ "Dry Ice").`,
    definitions: [
      'Latent Heat of Vaporization: The amount of heat energy required to change 1 kg of a liquid into gas at atmospheric pressure at its boiling point.',
      'Sublimation: The phase change of a substance directly from solid to gas without entering the liquid state.'
    ],
    formulas: [
      { name: 'Kelvin Conversion', formula: 'K = ^\\circ C + 273.15', explanation: 'Absolute thermodynamic temperature conversion.', units: 'Kelvin (K)' }
    ],
    solvedExamples: [
      {
        question: 'Why does a desert cooler cool better on a hot dry day?',
        solution: 'On a hot dry day, temperature is high and humidity is very low. Low humidity and high temperature greatly accelerate the evaporation rate of water from the cooler pads. Evaporation absorbs latent heat from air, cooling the room effectively.',
        keyInsight: 'Lower humidity accelerates surface evaporation and cooling.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c9-c1-01',
        subject: 'Chemistry',
        chapterId: 'c9-chem-01',
        chapterTitle: 'Matter in Our Surroundings',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Convert 373 K to the Celsius temperature scale:',
        options: ['A) 100°C', 'B) 646°C', 'C) 0°C', 'D) 273°C'],
        correctAnswer: 'A',
        explanation: 'Temperature in °C = Kelvin - 273 = 373 - 273 = 100°C (the normal boiling point of water).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Mixtures & Solutions',
    order: 2,
    title: 'Is Matter Around Us Pure',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Medium priority',
    prerequisite: 'Matter in Our Surroundings',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Pure substances vs mixtures, homogeneous vs heterogeneous mixtures, true solutions, suspensions, colloids, Tyndall effect, concentration of solution (mass % and volume %), separation techniques (centrifugation, fractional distillation, chromatography), and physical vs chemical changes.',
    introduction: 'In scientific terms, milk is not a pure substance—it is a colloidal mixture of water, proteins, and fat droplets. Learning to separate components based on boiling points, density, and solubility is the practical core of chemical analysis.',
    topics: [
      'Classification of Matter: Pure Substances (Elements & Compounds) vs Mixtures',
      'True Solutions: Homogeneous, particle size $< 1\\text{ nm}$, transparent, stable',
      'Suspensions: Heterogeneous, particle size $> 100\\text{ nm}$, unstable, settles down',
      'Colloids: Heterogeneous, particle size $1 - 100\\text{ nm}$, Tyndall effect (scattering of light)',
      'Concentration of Solution: Mass Percentage ($m/m$) and Volume Percentage ($v/v$)',
      'Separation Techniques: Centrifugation (blood banks), Fractional Distillation, Paper Chromatography'
    ],
    summaryNotes: `### Comparison of Mixtures:
| Property | True Solution | Colloid | Suspension |
| :--- | :--- | :--- | :--- |
| **Particle Size** | $< 1\\text{ nm}$ | $1 - 100\\text{ nm}$ | $> 100\\text{ nm}$ |
| **Appearance** | Clear, transparent | Translucent | Opaque |
| **Stability** | Very stable | Stable | Unstable (settles) |
| **Tyndall Effect** | **Does not show** | **Shows clearly** | May show before settling |
| **Examples** | Salt in water | Milk, Fog, Ink | Chalk in water, Sand |
### Concentration Formula:
$$\\text{Mass } \\% = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solution}} \\times 100 = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solute} + \\text{Mass of Solvent}} \\times 100$$`,
    definitions: [
      'Tyndall Effect: The scattering of a beam of light by colloidal particles suspended in a liquid or gas, making its path visible.',
      'Colloid: A heterogeneous system where one substance is dispersed (dispersed phase) as fine particles in another (dispersion medium).'
    ],
    formulas: [
      { name: 'Mass Percentage Formula', formula: '\\text{Mass } \\% = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solution}} \\times 100', explanation: 'Solute mass fraction per 100 parts total solution.', units: '%' }
    ],
    solvedExamples: [
      {
        question: 'A solution contains 50 g of common salt in 450 g of water. Calculate the concentration in terms of mass by mass percentage.',
        solution: 'Mass of solute (salt) = 50 g.\nMass of solvent (water) = 450 g.\nTotal mass of solution = 50 + 450 = 500 g.\nMass % = (50 / 500) * 100 = 10%.',
        keyInsight: 'Always add solute and solvent together to compute the total denominator mass.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c9-c2-01',
        subject: 'Chemistry',
        chapterId: 'c9-chem-02',
        chapterTitle: 'Is Matter Around Us Pure',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following will scatter a laser beam and exhibit the Tyndall effect?',
        options: ['A) Clear salt solution', 'B) Milk', 'C) Sugar syrup', 'D) Copper sulphate solution in water'],
        correctAnswer: 'B',
        explanation: 'Milk is a colloidal solution containing dispersed fat and protein particles that scatter light rays, producing the Tyndall effect.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Stoichiometry & Atomic Theory',
    order: 3,
    title: 'Atoms and Molecules',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Is Matter Around Us Pure',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Laws of chemical combination (conservation of mass, definite proportions), Dalton\'s atomic theory, atomic mass unit ($u$), molecules of elements and compounds, ions and polyatomic radicals, writing chemical formulas by criss-cross valency method, molecular mass, and the mole concept ($N_A = 6.022 \\times 10^{23}$).',
    introduction: 'In 1808, John Dalton published his atomic theory, proposing that all matter consists of indivisible atoms. Amedeo Avogadro introduced the mole—a chemist\'s counting unit bridging subatomic particles with macroscopic laboratory grams.',
    topics: [
      'Law of Conservation of Mass (Lavoisier) and Law of Definite Proportions (Proust)',
      'Dalton\'s Atomic Theory: Postulates, Successes, and Limitations',
      'What is an Atom? Size, IUPAC Symbols, and Atomic Mass (Carbon-12 scale)',
      'Molecules of Elements vs Molecules of Compounds',
      'Ions (Cations and Anions) and Polyatomic Radicals ($SO_4^{2-}, CO_3^{2-}, NH_4^+, NO_3^-$)',
      'Writing Chemical Formulas using the Criss-Cross Valency Method',
      'Molecular Mass, Formula Unit Mass, and The Mole Concept ($n = m/M = N/N_A$)'
    ],
    summaryNotes: `### Core Stoichiometric Pillars:
1. **Law of Definite Proportions:** In a chemical substance, elements are always present in definite proportions by mass (e.g., Water $H_2O$ is always $1:8$ by mass).
2. **Atomic Mass Unit ($u$):** Exactly $1/12\\text{th}$ the mass of an unbound neutral Carbon-12 atom at ground state.
3. **The Mole ($1\\text{ mol}$):**
   $$1\\text{ mole} = 6.022 \\times 10^{23} \\text{ particles (Avogadro\'s Constant } N_A)$$
   - $\\text{Number of Moles } (n) = \\frac{\\text{Given Mass } (m)}{\\text{Molar Mass } (M)} = \\frac{\\text{Number of Particles } (N)}{N_A}$
   - Molar mass of $CO_2 = 12 + 2(16) = 44\\text{ g/mol}$.`,
    definitions: [
      'Mole: The quantity of a substance containing exactly 6.022 × 10²³ elementary entities (atoms, molecules, or ions).',
      'Polyatomic Ion: A cluster of covalently bonded atoms carrying an overall net positive or negative charge.'
    ],
    formulas: [
      { name: 'Mole Calculation Formula', formula: 'n = \\frac{m}{M} = \\frac{N}{N_A}', explanation: 'Calculates moles from mass or particle count.', units: 'moles (mol)' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the number of moles present in 52 g of Helium (He). (Atomic mass of He = 4 u)',
        solution: 'Given mass m = 52 g.\nMolar mass of He M = 4 g/mol.\nNumber of moles n = m / M = 52 / 4 = 13 moles.',
        keyInsight: 'Divide mass in grams by molar mass to get moles directly.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c9-c3-01',
        subject: 'Chemistry',
        chapterId: 'c9-chem-03',
        chapterTitle: 'Atoms and Molecules',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the chemical formula for Aluminium Oxide formed from Al³⁺ and O²⁻ ions?',
        options: ['A) AlO', 'B) Al₂O₃', 'C) Al₃O₂', 'D) AlO₂'],
        correctAnswer: 'B',
        explanation: 'Using the criss-cross valency method: Al has valency 3 and O has valency 2. Criss-crossing gives Al₂O₃.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Atomic Structure',
    order: 4,
    title: 'Structure of the Atom',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Atoms and Molecules',
    totalConcepts: 6,
    durationHours: 5.0,
    description: 'Subatomic particles (electrons, protons, neutrons), Thomson plum pudding model, Rutherford α-particle scattering experiment and nuclear model, Bohr model of atom (discrete orbits), electronic distribution (Bohr-Bury $2n^2$ rule), valency and valence electrons, atomic number ($Z$), mass number ($A$), isotopes and isobars.',
    introduction: 'Is the atom truly indivisible as Dalton believed? Discharge tube experiments by J.J. Thomson and gold foil experiments by Ernest Rutherford revealed that atoms contain positively charged atomic nuclei surrounded by revolving negative electrons.',
    topics: [
      'Discovery of Subatomic Particles: Electron (Cathode rays - Thomson), Proton (Canal rays - Goldstein), Neutron (Chadwick, 1932)',
      'Thomson\'s Plum Pudding Model and its Limitations',
      'Rutherford\'s Alpha Particle Scattering Experiment: Nuclear Model of Atom',
      'Bohr\'s Model of Atom: Discrete non-radiating energy shells ($K, L, M, N$ shells)',
      'Distribution of Electrons: Bohr-Bury Scheme ($2n^2$ rule, octet rule for outermost shell)',
      'Valence Electrons and Calculating Chemical Valency',
      'Atomic Number ($Z$), Mass Number ($A = Z + N$), Isotopes ($^{35}_{17}Cl, ^{37}_{17}Cl$), and Isobars ($^{40}_{18}Ar, ^{40}_{20}Ca$)'
    ],
    summaryNotes: `### Core Nuclear Breakthroughs:
1. **Rutherford's α-Scattering Observations:**
   - Most α-particles passed undeflected $\\implies$ Most atomic volume is empty space.
   - Few deflected by large angles $\\implies$ Positive charge is concentrated in a tiny central **nucleus**.
   - 1 in 12,000 rebounded at $180^\\circ \\implies$ Nearly the entire mass of the atom resides in the nucleus.
2. **Bohr-Bury Electronic Scheme ($2n^2$):**
   - $K$-shell ($n=1$): Max 2 electrons.
   - $L$-shell ($n=2$): Max 8 electrons.
   - $M$-shell ($n=3$): Max 18 electrons.
   - Outermost valence shell cannot hold more than **8 electrons**.
3. **Isotopes vs Isobars:**
   - **Isotopes:** Same $Z$, Different $A$ (e.g., Protium $^1_1H$, Deuterium $^2_1H$, Tritium $^3_1H$).
   - **Isobars:** Same $A$, Different $Z$ (e.g., $^{40}_{18}Ar$ and $^{40}_{20}Ca$).`,
    definitions: [
      'Atomic Number (Z): The total number of protons present in the nucleus of an atom.',
      'Mass Number (A): The total number of protons and neutrons (nucleons) present in the nucleus of an atom.'
    ],
    formulas: [
      { name: 'Nucleon Relation', formula: 'A = Z + N', explanation: 'Mass number equals atomic number plus neutrons.', units: 'Count' },
      { name: 'Bohr-Bury Shell Capacity', formula: '2n^2', explanation: 'Maximum electron capacity of principal energy level n.', units: 'Electrons' }
    ],
    solvedExamples: [
      {
        question: 'An atom has 8 electrons and 8 neutrons. What is its atomic number, mass number, and electronic configuration?',
        solution: 'In a neutral atom, protons = electrons = 8. Hence Atomic Number Z = 8 (Oxygen).\nMass Number A = Protons + Neutrons = 8 + 8 = 16.\nElectronic configuration: K = 2, L = 6 (Valency = 8 - 6 = 2).',
        keyInsight: 'Atomic number is proton count; mass number is total nucleons.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c9-c4-01',
        subject: 'Chemistry',
        chapterId: 'c9-chem-04',
        chapterTitle: 'Structure of the Atom',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Who discovered the subatomic particle with no electric charge called the neutron in 1932?',
        options: ['A) J.J. Thomson', 'B) Ernest Rutherford', 'C) James Chadwick', 'D) Niels Bohr'],
        correctAnswer: 'C',
        explanation: 'James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Chemical Bonding Foundation',
    order: 5,
    title: 'Chemical Bonding Basics',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Structure of the Atom',
    totalConcepts: 5,
    durationHours: 3.5,
    description: 'Why atoms combine, stable electronic octet rule, electrovalent (ionic) bonding via electron transfer (NaCl, MgCl₂), covalent bonding via electron sharing (H₂, O₂, N₂, CH₄, H₂O), Lewis electron dot structures, and comparison of properties of ionic and covalent compounds.',
    introduction: 'Except for noble gases, solitary atoms have incomplete valence shells. Atoms achieve thermodynamic stability by transferring or sharing valence electrons to attain a noble gas octet configuration.',
    topics: [
      'The Drive for Stability: Noble Gas Octet Rule (Duplet for Helium)',
      'Ionic (Electrovalent) Bonding: Complete transfer of electrons from metal to non-metal ($NaCl, MgCl_2$)',
      'Covalent Bonding: Mutual sharing of electron pairs between non-metals',
      'Single ($H-H$), Double ($O=O$), and Triple ($N\\equiv N$) Covalent Bonds',
      'Lewis Electron Dot Structures of Simple Molecules ($CH_4, H_2O, NH_3$)',
      'Comparison: Ionic Compounds (High melting points, conduct electricity in molten/aqueous state) vs Covalent Compounds (Low melting points, non-conductors)'
    ],
    summaryNotes: `### Core Bonding Principles:
1. **Octet Rule (Kossel & Lewis, 1916):** Atoms tend to gain, lose, or share electrons until they have 8 electrons in their outermost valence shell.
2. **Ionic Bonding:**
   - Formed by electrostatic attraction between oppositely charged ions:
     $$Na ([2, 8, 1]) \\longrightarrow Na^+ ([2, 8]) + e^-$$
     $$Cl ([2, 8, 7]) + e^- \\longrightarrow Cl^- ([2, 8, 8])$$
     $$Na^+ + Cl^- \\longrightarrow NaCl \\text{ (Ionic crystal)}$$
3. **Covalent Bonding:**
   - In $CH_4$, one Carbon atom ($2, 4$) shares four single pairs of electrons with four Hydrogen atoms to complete its octet.`,
    definitions: [
      'Ionic Bond: A chemical bond formed by the electrostatic attraction between oppositely charged ions produced by electron transfer.',
      'Covalent Bond: A chemical bond formed by the mutual sharing of one or more pairs of electrons between two atoms.'
    ],
    formulas: [
      { name: 'Electrostatic Ionic Force', formula: 'F_{electrostatic} = \\frac{1}{4\\pi \\epsilon_0} \\frac{q_1 q_2}{r^2}', explanation: 'Coulombic force binding crystal lattice of ionic compounds.', units: 'Newtons (N)' }
    ],
    solvedExamples: [
      {
        question: 'Why do solid ionic crystals like table salt (NaCl) not conduct electricity, whereas molten or aqueous NaCl conducts briskly?',
        solution: 'In solid NaCl, ions ($Na^+$ and $Cl^-$) are locked tightly in a rigid three-dimensional crystal lattice and cannot move. When dissolved in water or melted, the lattice breaks, releasing mobile free ions that conduct electric current.',
        keyInsight: 'Electrical conduction in electrolytes requires mobile charge carriers (free ions).',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c9-c5-01',
        subject: 'Chemistry',
        chapterId: 'c9-chem-05',
        chapterTitle: 'Chemical Bonding Basics',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'How many covalent electron pairs are shared between two Nitrogen atoms in an N₂ molecule?',
        options: ['A) 1 pair', 'B) 2 pairs', 'C) 3 pairs', 'D) 4 pairs'],
        correctAnswer: 'C',
        explanation: 'Each nitrogen atom has 5 valence electrons and requires 3 electrons for an octet. They share 3 pairs of electrons to form a strong triple covalent bond (N≡N).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // MATHEMATICS (5 CHAPTERS - FOR JEE FOUNDATION)
  // ==========================================
  {
    id: 'c9-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Real Numbers',
    order: 1,
    title: 'Number Systems',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Class 8 Rational Numbers',
    totalConcepts: 7,
    durationHours: 4.5,
    description: 'Review of rational numbers, irrational numbers ($\\sqrt{2}, \\sqrt{3}, \\pi$), decimal expansions (terminating vs non-terminating recurring), representing real numbers on number line, operations on real numbers, rationalizing the denominator using algebraic conjugates, and laws of exponents for real numbers.',
    introduction: 'Real numbers form the complete continuum of mathematics. Beyond rational fractions lies the vast world of irrational numbers with non-terminating non-repeating decimal expansions. Master surds and exponent rules for JEE Main algebra.',
    topics: [
      'Review of Rational Numbers ($p/q, q \\ne 0$) and Decimal Expansions',
      'Irrational Numbers: Non-terminating and non-recurring decimals ($\\sqrt{2}, \\sqrt{3}, \\pi$)',
      'Locating Irrational Numbers on Number Line using Pythagoras Theorem',
      'Operations on Real Numbers: Addition, Subtraction, Multiplication, Division of Surds',
      'Rationalizing the Denominator using Conjugate Pairs: $\\frac{1}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}}$',
      'Laws of Exponents for Real Bases with Fractional Powers ($a^{p/q}$)'
    ],
    summaryNotes: `### Core Rules of Surds & Exponents:
1. **Rationalizing Conjugates:**
   $$\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b})} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}$$
2. **Laws of Exponents:**
   - $a^m \\cdot a^n = a^{m+n}$
   - $(a^m)^n = a^{mn}$
   - $\\frac{a^m}{a^n} = a^{m-n}$
   - $a^{-n} = \\frac{1}{a^n}$
   - $a^{p/q} = \\sqrt[q]{a^p} = (\\sqrt[q]{a})^p$`,
    definitions: [
      'Irrational Number: A real number that cannot be written in the form p/q and whose decimal expansion is non-terminating and non-recurring.',
      'Rationalizing Factor: A surd which when multiplied with another surd yields a rational number.'
    ],
    formulas: [
      { name: 'Conjugate Identity', formula: '(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b', explanation: 'Eliminates radicals from denominators.', units: 'Real number' }
    ],
    solvedExamples: [
      {
        question: 'Rationalize the denominator of: 1 / (7 + 3√2).',
        solution: 'Multiply numerator and denominator by conjugate (7 - 3√2):\n[1 * (7 - 3√2)] / [(7 + 3√2)(7 - 3√2)] = (7 - 3√2) / [7² - (3√2)²]\n= (7 - 3√2) / [49 - 18] = (7 - 3√2) / 31.',
        keyInsight: 'Use (a+b)(a-b) = a² - b² to eliminate square roots from denominators.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c9-m1-01',
        subject: 'Mathematics',
        chapterId: 'c9-math-01',
        chapterTitle: 'Number Systems',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following real numbers is an irrational number?',
        options: ['A) √9', 'B) 0.333...', 'C) √7', 'D) 22/7'],
        correctAnswer: 'C',
        explanation: '√9 = 3 (integer). 0.333... = 1/3 (rational). 22/7 is a rational approximation of pi. √7 has a non-terminating non-repeating decimal expansion, making it strictly irrational.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 2,
    title: 'Polynomials',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Class 8 Algebraic Expressions',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Polynomials in one variable, degree of polynomial, zeroes of a polynomial, Remainder Theorem, Factor Theorem, factorization of quadratic polynomials by splitting the middle term, and standard algebraic identities (squares, cubes, and conditional identity $a^3+b^3+c^3-3abc$).',
    introduction: 'Polynomials represent algebraic expressions with whole-number exponents. The Remainder and Factor Theorems provide shortcut methods for factoring cubic equations without long division.',
    topics: [
      'Polynomials in One Variable: Terms, Coefficients, and Degree',
      'Linear, Quadratic, and Cubic Polynomials; Monomial, Binomial, Trinomial',
      'Zeroes of a Polynomial: Real values $k$ such that $p(k) = 0$',
      'Remainder Theorem: When polynomial $p(x)$ is divided by $(x - a)$, the remainder is $p(a)$',
      'Factor Theorem: $(x - a)$ is a factor of $p(x)$ if and only if $p(a) = 0$',
      'Factorization of Quadratic Trinomials by Splitting the Middle Term',
      'Cubic Identities: $(x+y)^3, (x-y)^3, x^3 + y^3 + z^3 - 3xyz$',
      'Conditional Identity: If $x + y + z = 0$, then $x^3 + y^3 + z^3 = 3xyz$ (Essential JEE shortcut!)'
    ],
    summaryNotes: `### Core Algebraic Identities:
1. $(x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$
2. $(x + y)^3 = x^3 + y^3 + 3xy(x + y)$
3. $(x - y)^3 = x^3 - y^3 - 3xy(x - y)$
4. $x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$
   - **Crucial JEE Corollary:** If $x + y + z = 0$, then:
     $$x^3 + y^3 + z^3 = 3xyz$$`,
    definitions: [
      'Degree of Polynomial: The highest power of the variable present in the polynomial.',
      'Factor Theorem: If p(x) is a polynomial and a is any real number, then (x - a) is a factor of p(x) if p(a) = 0.'
    ],
    formulas: [
      { name: 'Conditional Cubic Identity', formula: 'x^3 + y^3 + z^3 = 3xyz \\quad (\\text{if } x+y+z=0)', explanation: 'Instant evaluation of sum of cubes when sum of bases is zero.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Without calculating cubes directly, evaluate: (-12)³ + 7³ + 5³.',
        solution: 'Let x = -12, y = 7, z = 5.\nSum x + y + z = -12 + 7 + 5 = 0.\nUsing identity: If x+y+z = 0, then x³ + y³ + z³ = 3xyz.\n(-12)³ + 7³ + 5³ = 3 * (-12) * 7 * 5 = -1260.',
        keyInsight: 'Check if x + y + z = 0 before computing cubic powers.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c9-m2-01',
        subject: 'Mathematics',
        chapterId: 'c9-math-02',
        chapterTitle: 'Polynomials',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Find the remainder when p(x) = x³ - 2x² + 3x + 10 is divided by (x - 2):',
        options: ['A) 0', 'B) 10', 'C) 16', 'D) 24'],
        correctAnswer: 'C',
        explanation: 'By the Remainder Theorem, remainder = p(2) = (2)³ - 2(2)² + 3(2) + 10 = 8 - 8 + 6 + 10 = 16.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Coordinate Geometry',
    order: 3,
    title: 'Coordinate Geometry',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Medium priority',
    prerequisite: 'Class 8 Number Line',
    totalConcepts: 4,
    durationHours: 3.0,
    description: 'Cartesian coordinate system, origin ($0,0$), coordinate axes (x-axis, y-axis), four quadrants, coordinates of a point (abscissa $x$ and ordinate $y$), and plotting points in the 2D Cartesian plane.',
    introduction: 'René Descartes bridged algebra and geometry by fixing point positions on a grid using ordered pairs $(x, y)$. Coordinate geometry transforms geometric curves into algebraic equations.',
    topics: [
      'The Cartesian Plane and Coordinate Axes (Horizontal x-axis, Vertical y-axis)',
      'The Four Quadrants: Signs in Quadrants I (+,+), II (-,+), III (-,-), and IV (+,-)',
      'Coordinates of a Point: Abscissa ($x$) and Ordinate ($y$)',
      'Points on the Axes: Any point on x-axis has $y = 0$; on y-axis has $x = 0$',
      'Plotting Points in the Cartesian Plane'
    ],
    summaryNotes: `### Core Cartesian Rules:
- **Origin:** The intersection of axes $(0, 0)$.
- **Abscissa:** The perpendicular distance of a point from the y-axis ($x$-coordinate).
- **Ordinate:** The perpendicular distance of a point from the x-axis ($y$-coordinate).
- **Quadrant Sign Conventions:**
  * Quadrant I: $x > 0, y > 0$
  * Quadrant II: $x < 0, y > 0$
  * Quadrant III: $x < 0, y < 0$
  * Quadrant IV: $x > 0, y < 0$`,
    definitions: [
      'Abscissa: The x-coordinate of a point in a Cartesian coordinate system.',
      'Ordinate: The y-coordinate of a point in a Cartesian coordinate system.'
    ],
    formulas: [
      { name: 'Point Coordinates', formula: 'P(x, y)', explanation: 'Ordered pair indicating position in 2D Cartesian plane.', units: 'Coordinates' }
    ],
    solvedExamples: [
      {
        question: 'In which quadrant or on which axis does the point (-4, 3) lie?',
        solution: 'The x-coordinate is negative (-4) and the y-coordinate is positive (+3). According to Cartesian sign rules, points with signs (-, +) lie in Quadrant II.',
        keyInsight: 'Check the signs: (-, +) is Quadrant II.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c9-m3-01',
        subject: 'Mathematics',
        chapterId: 'c9-math-03',
        chapterTitle: 'Coordinate Geometry',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'A point whose abscissa is 0 and ordinate is -5 lies on:',
        options: ['A) x-axis', 'B) y-axis', 'C) Third quadrant', 'D) Fourth quadrant'],
        correctAnswer: 'B',
        explanation: 'When the abscissa (x-coordinate) is zero, the point lies on the y-axis.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 4,
    title: 'Linear Equations in Two Variables',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Polynomials',
    totalConcepts: 5,
    durationHours: 3.5,
    description: 'Standard form $ax + by + c = 0$, infinitely many solutions of a linear equation, geometric representation as a straight line, equations of lines parallel to x-axis ($y = k$) and y-axis ($x = k$).',
    introduction: 'A linear equation in two variables connects two changing variables, such as cost and quantity. Geometrically, its graph is always an unbroken straight line extending infinitely in both directions.',
    topics: [
      'Standard Form of Linear Equation: $ax + by + c = 0$ ($a, b \\ne 0$)',
      'Solutions of a Linear Equation: Infinitely many ordered pairs $(x_i, y_i)$',
      'Graph of a Linear Equation in Two Variables (Straight Line)',
      'Equations of Lines Parallel to Coordinate Axes: $x = a$ (parallel to y-axis), $y = b$ (parallel to x-axis)'
    ],
    summaryNotes: `### Core Theorems:
1. A linear equation $ax + by + c = 0$ has **infinitely many solutions**.
2. Every point on the line is a solution, and every solution corresponds to a point lying on the line.
3. The equation of the x-axis is $y = 0$; the equation of the y-axis is $x = 0$.`,
    definitions: [
      'Linear Equation in Two Variables: An equation that can be put in the form ax + by + c = 0, where a, b and c are real numbers, and a and b are not both zero.'
    ],
    formulas: [
      { name: 'Linear Form', formula: 'ax + by + c = 0', explanation: 'General equation of straight line in two variables.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Find the value of k if x = 2, y = 1 is a solution of 2x + 3y = k.',
        solution: 'Substitute x = 2 and y = 1 into the equation:\n2(2) + 3(1) = k => 4 + 3 = k => k = 7.',
        keyInsight: 'If a point is a solution, its coordinates satisfy the equation identically.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c9-m4-01',
        subject: 'Mathematics',
        chapterId: 'c9-math-04',
        chapterTitle: 'Linear Equations in Two Variables',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'How many solutions does the linear equation 2x + 5y = 10 have?',
        options: ['A) Only one', 'B) Exactly two', 'C) Infinitely many', 'D) No solution'],
        correctAnswer: 'C',
        explanation: 'A single linear equation in two variables corresponds to a line containing infinitely many points, hence infinitely many solutions.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Geometry',
    order: 5,
    title: 'Triangles & Congruence',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Coordinate Geometry',
    totalConcepts: 6,
    durationHours: 5.0,
    description: 'Congruence of triangles, criteria for congruence: SAS, ASA, AAS, SSS, RHS, properties of isosceles triangles (angles opposite equal sides are equal), and inequalities in a triangle.',
    introduction: 'Congruent figures have identical shape and identical size. Proving congruence allows mathematicians to establish geometric properties of circles, quadrilaterals, and trigonometry.',
    topics: [
      'Concept of Congruence: Superposition and CPCTC (Corresponding Parts of Congruent Triangles)',
      'Criteria for Congruence: SAS (Side-Angle-Side) Axiom',
      'ASA (Angle-Side-Angle) and AAS (Angle-Angle-Side) Theorems',
      'SSS (Side-Side-Side) and RHS (Right-Hypotenuse-Side) Theorems',
      'Properties of Isosceles Triangles: Angles opposite equal sides are equal',
      'Inequalities in a Triangle: Sum of two sides > third side'
    ],
    summaryNotes: `### Congruence Criteria Summary:
- **SAS:** Two sides and the included angle must match.
- **ASA:** Two angles and the included side must match.
- **AAS:** Two angles and any non-included side must match.
- **SSS:** All three corresponding sides are equal.
- **RHS:** Hypotenuse and one leg of a right-angled triangle match.
- **Note:** **AAA is NOT a congruence criterion** (it only proves similarity).`,
    definitions: [
      'CPCTC: Corresponding Parts of Congruent Triangles are Congruent.',
      'Congruence: Two geometric figures are congruent if they have the same shape and the same size.'
    ],
    formulas: [
      { name: 'Triangle Inequality', formula: 'a + b > c', explanation: 'Sum of lengths of any two sides must exceed the third side.', units: 'Length' }
    ],
    solvedExamples: [
      {
        question: 'Can a triangle have sides of length 4 cm, 7 cm, and 12 cm?',
        solution: 'Check triangle inequality: 4 + 7 = 11 cm. Since 11 < 12, the sum of two sides is not strictly greater than the third side. Therefore, no triangle can be formed.',
        keyInsight: 'The sum of the two shorter sides must strictly exceed the longest side.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c9-m5-01',
        subject: 'Mathematics',
        chapterId: 'c9-math-05',
        chapterTitle: 'Triangles & Congruence',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is NOT a valid criterion for congruence of triangles?',
        options: ['A) SAS', 'B) ASA', 'C) SSS', 'D) AAA'],
        correctAnswer: 'D',
        explanation: 'AAA ensures that two triangles have the same shape (similarity), but their sizes can be completely different, so they are not necessarily congruent.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },

  // ==========================================
  // BIOLOGY (5 CHAPTERS - FOR NEET FOUNDATION)
  // ==========================================
  {
    id: 'c9-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Cell Biology',
    order: 1,
    title: 'The Fundamental Unit of Life: Cell',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Class 8 Cell - Structure and Functions',
    totalConcepts: 7,
    durationHours: 4.5,
    description: 'Cell discovery (Hooke, Leeuwenhoek, Purkinje, Schleiden & Schwann, Virchow), plasma membrane & osmosis (hypotonic, isotonic, hypertonic), cell wall & plasmolysis, nucleus, prokaryotes vs eukaryotes, cell organelles: endoplasmic reticulum (RER & SER), Golgi apparatus, lysosomes ("suicide bags"), mitochondria ("powerhouses of the cell" / ATP), plastids, vacuoles, and cell division (mitosis vs meiosis).',
    introduction: 'The cell is the basic structural and functional unit of all life. From the ATP-generating powerhouse of mitochondria to the digestive enzymes of lysosomes, cellular compartmentalization drives all biological metabolism.',
    topics: [
      'Discovery of Cell & Cell Theory: Schleiden, Schwann, and Virchow ("Omnis cellula-e-cellula")',
      'Plasma Membrane: Fluid mosaic model, Diffusion, and Osmosis (Hypotonic, Isotonic, Hypertonic solutions)',
      'Cell Wall and Plasmolysis in Plant Cells',
      'The Nucleus: Nuclear envelope, Chromatin, DNA (Genes), Prokaryotic Nucleoid vs Eukaryotic Nucleus',
      'Endomembrane System: Rough Endoplasmic Reticulum (Ribosomes / Protein synthesis) and Smooth ER (Lipid synthesis / Detoxification)',
      'Golgi Apparatus (Packaging & Secretion) and Lysosomes ("Suicide Bags")',
      'Mitochondria (Double membrane, Cristae, Own DNA & Ribosomes, ATP generation)',
      'Plastids (Chloroplasts, Chromoplasts, Leucoplasts) and Cell Division (Mitosis for growth vs Meiosis for gametes)'
    ],
    summaryNotes: `### Core Organelle Functions:
1. **Mitochondria:**
   - Termed the **"Powerhouse of the cell"**.
   - Generates cellular energy in the form of **ATP (Adenosine Triphosphate)**.
   - Has its **own circular DNA and 70S ribosomes**, allowing it to synthesize its own proteins!
2. **Lysosomes:**
   - Membrane-bound sacs filled with powerful hydrolytic digestive enzymes synthesized by RER.
   - Termed **"Suicide Bags"** because if cellular metabolism is damaged, lysosomes may burst and digest their own host cell.
3. **Plasmolysis:**
   - When a living plant cell is placed in a **hypertonic solution**, water leaves the cell by osmosis, causing shrinkage of the protoplast away from the rigid cell wall.`,
    definitions: [
      'Osmosis: The spontaneous net movement of water molecules through a selectively permeable membrane from a region of higher water concentration to a region of lower water concentration.',
      'Plasmolysis: Shrinkage or contraction of the protoplasm of a plant cell away from the cell wall as a result of water loss via exosmosis.'
    ],
    formulas: [
      { name: 'Cell Division Comparison', formula: '\\text{Mitosis } (2n \\rightarrow 2n) \\quad \\text{vs} \\quad \\text{Meiosis } (2n \\rightarrow n)', explanation: 'Equational versus reductional cell division.', units: 'Cytogenetics' }
    ],
    solvedExamples: [
      {
        question: 'Why are lysosomes known as the "suicide bags" of a cell?',
        solution: 'Lysosomes contain powerful digestive hydrolytic enzymes capable of breaking down all organic material. When a cell becomes diseased, worn out, or damaged beyond repair, lysosomes burst and release these enzymes, which digest and destroy their own cell.',
        keyInsight: 'Self-digestion by autolytic enzymes gives lysosomes their nickname.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c9-b1-01',
        subject: 'Biology',
        chapterId: 'c9-bio-01',
        chapterTitle: 'The Fundamental Unit of Life: Cell',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which cell organelle possesses its own DNA and ribosomes, enabling it to synthesize some of its own proteins?',
        options: ['A) Golgi apparatus', 'B) Lysosome', 'C) Mitochondria', 'D) Endoplasmic reticulum'],
        correctAnswer: 'C',
        explanation: 'Mitochondria (and chloroplasts in plants) are semi-autonomous organelles containing their own circular DNA and ribosomes.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Histology',
    order: 2,
    title: 'Tissues',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'The Fundamental Unit of Life: Cell',
    totalConcepts: 7,
    durationHours: 4.5,
    description: 'Plant tissues: Meristematic (apical, intercalary, lateral) vs Permanent tissues (Simple: parenchyma, collenchyma, sclerenchyma; Complex: xylem and phloem), Animal tissues: Epithelial (squamous, cuboidal, columnar, ciliated), Connective (areolar, adipose, bone, cartilage, tendon, ligament, blood), Muscular (striated, smooth, cardiac), and Nervous tissue (neuron anatomy).',
    introduction: 'In multicellular organisms, division of labour organizes cells into cooperative tissues. Histology examines how specialized cell clusters perform coordinated physiological duties in plants and animals.',
    topics: [
      'What is a Tissue? Group of cells with similar structure performing a specific function',
      'Meristematic Plant Tissues: Apical (Root/shoot tip growth), Intercalary (Nodes), Lateral (Cambium / Girth increase)',
      'Simple Permanent Plant Tissues: Parenchyma (Storage/Chlorenchyma/Aerenchyma), Collenchyma (Flexibility), Sclerenchyma (Lignified dead cells / Hardness)',
      'Complex Permanent Tissues: Xylem (Tracheids, Vessels, Xylem parenchyma, Xylem fibres) and Phloem (Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres)',
      'Animal Epithelial Tissue: Protection, Absorption, and Secretion',
      'Connective Tissues: Tendons (Muscle to Bone), Ligaments (Bone to Bone), Adipose (Fat storage), Blood (Fluid matrix)',
      'Muscular Tissue: Striated (Voluntary skeletal), Unstriated/Smooth (Involuntary organs), Cardiac (Involuntary branched heart muscle)',
      'Nervous Tissue: Neuron structure (Cyton, Dendrites, Axon, Synapse)'
    ],
    summaryNotes: `### Key Histological Distinctions:
1. **Plant Supporting Tissues:**
   - **Collenchyma:** Living elongated cells with pectin thickening at corners; provides **mechanical flexibility** without breaking (allows branches to sway in wind).
   - **Sclerenchyma:** Dead cells with uniform **lignin** deposition; gives hardness and rigidity (e.g., coconut husk, walnut shells).
2. **Animal Connective Tissue:**
   - **Tendon:** Inelastic, fibrous tissue that joins **muscle to bone**.
   - **Ligament:** Highly elastic tissue that connects **bone to bone**.
3. **Muscle Types:**
   - **Striated:** Voluntary, multinucleated, cylindrical, attached to skeleton.
   - **Smooth:** Involuntary, uninucleate, spindle-shaped, in stomach and blood vessels.
   - **Cardiac:** Involuntary, rhythmic non-fatiguing, uninucleate, branched with intercalated discs, found exclusively in the heart wall.`,
    definitions: [
      'Tissue: A cluster of structurally similar cells working together to perform a specialized biological function.',
      'Neuron: A specialized impulse-conducting nerve cell consisting of a cell body (cyton), dendrites, and an elongated axon.'
    ],
    formulas: [
      { name: 'Tissue Classification', formula: '\\text{Cells} \\longrightarrow \\text{Tissues} \\longrightarrow \\text{Organs} \\longrightarrow \\text{Organ Systems}', explanation: 'Levels of structural organization in multicellular organisms.', units: 'Hierarchy' }
    ],
    solvedExamples: [
      {
        question: 'Differentiate between tendons and ligaments based on structure and function.',
        solution: '1. Tendons: Tough, fibrous, and largely inelastic cords that connect skeletal muscles to bones.\n2. Ligaments: Highly elastic and flexible connective tissues with high tensile strength that connect one bone to another bone across articulating joints.',
        keyInsight: 'Tendons connect muscle-to-bone; ligaments connect bone-to-bone.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c9-b2-01',
        subject: 'Biology',
        chapterId: 'c9-bio-02',
        chapterTitle: 'Tissues',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which connective tissue connects a bone to another bone across a joint?',
        options: ['A) Tendon', 'B) Ligament', 'C) Cartilage', 'D) Areolar tissue'],
        correctAnswer: 'B',
        explanation: 'Ligaments are strong, elastic connective tissues that connect bones to other bones across joints.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Taxonomy & Biodiversity',
    order: 3,
    title: 'Diversity in Living Organisms',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'Tissues',
    totalConcepts: 7,
    durationHours: 5.0,
    description: 'Basis of biological classification, taxonomic hierarchy, R.H. Whittaker’s Five Kingdom Classification (Monera, Protista, Fungi, Plantae, Animalia), Plant Kingdom (Thallophyta, Bryophyta, Pteridophyta, Gymnosperms, Angiosperms), Animal Kingdom (Non-chordates: Porifera to Echinodermata; Chordates: Pisces, Amphibia, Reptilia, Aves, Mammalia), and binomial nomenclature (Carolus Linnaeus).',
    introduction: 'Over 1.8 million species inhabit Earth. To study this immense biodiversity systematically, Carl Linnaeus established binomial nomenclature, and R.H. Whittaker classified all life into Five Great Kingdoms based on cellular structure, body organization, and nutrition.',
    topics: [
      'Classification and Evolution: Charles Darwin and Phylogenetic Trees',
      'Taxonomic Hierarchy: Kingdom → Phylum/Division → Class → Order → Family → Genus → Species',
      'Whittaker\'s Five Kingdoms: Monera (Prokaryotic bacteria), Protista (Unicellular eukaryotes), Fungi (Chitin cell wall, saprophytic)',
      'Plantae Divisions: Thallophyta (Algae), Bryophyta (Amphibians of plant kingdom), Pteridophyta (Vascular cryptogams), Gymnosperms (Naked seeds), Angiosperms (Flowering plants, Monocots & Dicots)',
      'Animalia Invertebrate Phyla: Porifera, Coelenterata, Platyhelminthes, Nematoda, Annelida, Arthropoda (Largest phylum), Mollusca, Echinodermata',
      'Phylum Chordata & Vertebrate Classes: Pisces, Amphibia, Reptilia, Aves (Warm-blooded, hollow pneumatic bones), Mammalia (Mammary glands, hair)',
      'Binomial Nomenclature Rules (Carolus Linnaeus): Genus capitalized, species lowercase, italicized'
    ],
    summaryNotes: `### Whittaker's 5 Kingdoms:
1. **Monera:** Prokaryotic, unicellular, lack membrane-bound nucleus (Bacteria, Cyanobacteria).
2. **Protista:** Eukaryotic, unicellular, autotrophic or heterotrophic (Amoeba, Paramecium, Euglena).
3. **Fungi:** Heterotrophic eukaryotes, cell wall made of **chitin** (Yeast, Mushrooms, Penicillium).
4. **Plantae:** Multicellular autotrophic eukaryotes with cellulose cell walls.
5. **Animalia:** Multicellular heterotrophic eukaryotes without cell walls.
### Plant Kingdom Milestones:
- **Bryophyta:** "Amphibians of plant kingdom" (require water for fertilization, e.g., Moss, Marchantia).
- **Gymnosperms:** Bear **naked seeds** without fruit enclosure (Pinus, Cycas).
- **Angiosperms:** Flowering plants with seeds enclosed inside fruits.`,
    definitions: [
      'Binomial Nomenclature: The formal system of naming species by giving each a name composed of two parts: Genus and species.',
      'Gymnosperms: Seed-bearing vascular plants whose seeds are naked and not enclosed within an ovary or fruit.'
    ],
    formulas: [
      { name: 'Linnaean Hierarchy', formula: 'K \\rightarrow P \\rightarrow C \\rightarrow O \\rightarrow F \\rightarrow G \\rightarrow S', explanation: 'Taxonomic rank order from Kingdom down to Species.', units: 'Taxonomy' }
    ],
    solvedExamples: [
      {
        question: 'Why are Bryophytes referred to as the "amphibians of the plant kingdom"?',
        solution: 'Bryophytes grow primarily on damp land soil, but they are dependent on an external film of water for the movement of their flagellated male gametes (antherozoids) to reach the female archegonia for fertilization. Because they live on land but require water to reproduce, they are called plant amphibians.',
        keyInsight: 'Water is mandatory for fertilization in bryophytes.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c9-b3-01',
        subject: 'Biology',
        chapterId: 'c9-bio-03',
        chapterTitle: 'Diversity in Living Organisms',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which phylum constitutes the largest group of animals in the animal kingdom, characterized by jointed appendages and a chitinous exoskeleton?',
        options: ['A) Annelida', 'B) Mollusca', 'C) Arthropoda', 'D) Echinodermata'],
        correctAnswer: 'C',
        explanation: 'Arthropoda (insects, crabs, spiders) is the largest animal phylum on Earth, featuring segmented bodies, jointed appendages, and chitinous exoskeletons.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Immunology & Epidemiology',
    order: 4,
    title: 'Why Do We Fall Ill?',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'High priority',
    prerequisite: 'The Fundamental Unit of Life: Cell',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Health vs disease-free state, acute diseases vs chronic diseases, infectious (communicable) vs non-infectious diseases, infectious agents (viruses, bacteria, fungi, protozoa, helminth worms), means of spread (air, water, vectors, sexual contact), organ-specific and tissue-specific manifestations, principles of treatment (reducing symptoms, killing the microbe), and principles of prevention (general hygiene, specific immunization / vaccines).',
    introduction: 'Being disease-free is not identical to being healthy. Health is a state of complete physical, mental, and social well-being. Understanding pathogen transmission vectors, antibiotic mechanisms, and immunization strategies forms the backbone of clinical medicine.',
    topics: [
      'Definition of Health (WHO) vs Disease-Free State',
      'Acute Diseases (Rapid onset, short duration, e.g., Common cold, Cholera) vs Chronic Diseases (Prolonged duration, e.g., Tuberculosis, Diabetes, Cancer)',
      'Infectious (Communicable) Diseases vs Non-Infectious (Non-communicable) Diseases',
      'Categories of Infectious Pathogens: Viruses (Influenza, Dengue, AIDS), Bacteria (Typhoid, Cholera, TB), Protozoa (Malaria, Kala-azar), Fungi (Skin ringworm)',
      'Means of Transmission: Airborne droplets, Waterborne pathogens, Vectors (Mosquitoes), Direct Contact',
      'Target Organs and Tissue-Specific Symptoms (Lungs in TB, Liver in Jaundice, Brain in Encephalitis)',
      'Principles of Treatment: Relieving symptoms (Painkillers) vs Eliminating the causal microbe (Antibiotics)',
      'Why Antibiotics Work on Bacteria but NOT on Viruses (Targeting bacterial biochemical cell-wall pathways)',
      'Principles of Prevention: General Sanitation & Clean Drinking Water; Specific Immunization via Vaccines'
    ],
    summaryNotes: `### Core Epidemiological Principles:
1. **Why Antibiotics Do Not Kill Viruses:**
   - Antibiotics target specific bacterial metabolic pathways, such as inhibiting bacterial cell wall synthesis (e.g., penicillin blocks peptidoglycan cross-linking).
   - Viruses lack their own cellular machinery or cell walls; they hijack the host\'s cellular mechanisms. Therefore, antibiotics are completely ineffective against viral colds or influenza!
2. **Acute vs Chronic Diseases:**
   - **Acute:** Severe onset, short course, leaves no lasting damage (e.g., viral cough).
   - **Chronic:** Prolonged over months or years, causes persistent fatigue, weight loss, and organ impairment (e.g., pulmonary tuberculosis, hypertension).`,
    definitions: [
      'Health: A state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.',
      'Antigen: Any foreign substance or toxin that enters the body and induces an immune response.'
    ],
    formulas: [
      { name: 'Disease Transmission Vectors', formula: '\\text{Pathogen} \\xrightarrow{\\text{Vector (Mosquito)}} \\text{Host} \\rightarrow \\text{Disease}', explanation: 'Vector-borne pathogen epidemiology.', units: 'Transmission' }
    ],
    solvedExamples: [
      {
        question: 'Why does taking penicillin have no effect on curing the common cold or viral flu?',
        solution: 'Penicillin is an antibiotic that specifically blocks the synthesis of peptidoglycan bacterial cell walls, causing bacteria to burst. Common cold and flu are caused by viruses. Viruses lack cell walls and utilize human host cells to replicate, making penicillin completely useless against them.',
        keyInsight: 'Antibiotics target bacterial metabolic pathways absent in viruses.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c9-b4-01',
        subject: 'Biology',
        chapterId: 'c9-bio-04',
        chapterTitle: 'Why Do We Fall Ill?',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which organ is specifically targeted by the hepatitis virus causing jaundice?',
        options: ['A) Lungs', 'B) Kidneys', 'C) Liver', 'D) Heart'],
        correctAnswer: 'C',
        explanation: 'Hepatitis viruses specifically infect liver cells (hepatocytes), impairing bile excretion and causing jaundice.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c9-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Biogeochemistry & Ecology',
    order: 5,
    title: 'Natural Resources & Biogeochemical Cycles',
    stage: 'foundation',
    classLevel: 'Class 9',
    priority: 'Basic priority',
    prerequisite: 'Diversity in Living Organisms',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'The breath of life: air and winds, rain and weather, air pollution and respiratory damage, water: a wonder liquid, mineral riches in the soil (soil formation, humus, soil erosion), biogeochemical cycles (water cycle, nitrogen cycle, carbon cycle, oxygen cycle), greenhouse effect, and the ozone layer (CFCs and ozone hole depletion).',
    introduction: 'The biosphere is a self-sustaining planetary spaceship where chemical elements are constantly recycled between living organisms (biotic) and the physical earth (abiotic). Solar radiation drives winds, ocean currents, and global biogeochemical cycles.',
    topics: [
      'The Biosphere: Atmosphere, Hydrosphere, and Lithosphere',
      'Air as a Blanket: Regulating Earth\'s temperature and creating atmospheric winds',
      'Soil Formation: Weathering of rocks by temperature fluctuations, water, wind, and lichens',
      'Soil Erosion and Conservation: Humus and vegetative cover',
      'Biogeochemical Cycling: Circulation of nutrients between biotic and abiotic systems',
      'The Nitrogen Cycle: Fixation ($N_2 \\rightarrow NH_3 \\rightarrow NO_2^- \\rightarrow NO_3^-$), Assimilation, Ammonification, Nitrification, and Denitrification',
      'The Carbon Cycle: Photosynthesis vs Respiration, Fossil fuels, and Carbonate rocks',
      'The Oxygen Cycle and Photosynthetic replenishment',
      'The Greenhouse Effect and Global Warming ($CO_2, CH_4$)',
      'Ozone Layer ($O_3$ in stratosphere) and Depletion by Chlorofluorocarbons (CFCs)'
    ],
    summaryNotes: `### Core Biogeochemical Cycles:
1. **The Nitrogen Cycle:**
   - **Fixation:** Free $N_2$ fixed by *Rhizobium* or lightning into nitrates ($NO_3^-$).
   - **Nitrification:** Ammonia converted to nitrites (*Nitrosomonas*) and nitrates (*Nitrobacter*).
   - **Denitrification:** *Pseudomonas* bacteria reduce nitrates back into gaseous $N_2$, completing the cycle.
2. **The Carbon Cycle:**
   - Atmospheric $CO_2$ is fixed by green plants through photosynthesis into organic glucose.
   - Returned to air through respiration, microbial decomposition, and fossil fuel combustion.
3. **The Ozone Layer ($O_3$):**
   - Located in the **stratosphere** ($15 - 30\\text{ km}$ above Earth).
   - Absorbs harmful solar ultraviolet (UV-B) radiation, preventing skin cancer and cataracts.
   - Depleted by **CFCs** releasing free chlorine radicals ($Cl^\\bullet + O_3 \\rightarrow ClO^\\bullet + O_2$).`,
    definitions: [
      'Biogeochemical Cycle: The cyclic pathway by which an essential chemical element moves through both biotic (biosphere) and abiotic (lithosphere, atmosphere, and hydrosphere) compartments of Earth.',
      'Ozone Depletion: The thinning of the protective stratospheric ozone layer caused by anthropogenic halogenated chemicals like chlorofluorocarbons.'
    ],
    formulas: [
      { name: 'Ozone Photochemical Balance', formula: 'O_2 \\xrightarrow{UV} O + O; \\quad O + O_2 \\longrightarrow O_3', explanation: 'Formation and photolysis of stratospheric ozone.', units: 'Photochemistry' }
    ],
    solvedExamples: [
      {
        question: 'How do lichens play a vital role in the initial formation of soil from barren rocks?',
        solution: 'Lichens growing on bare rock surfaces secrete organic acids that chemically corrode and crumble the rock surface into fine mineral powder. When lichens die, their organic matter forms the initial thin layer of fertile humus allowing small mosses to grow and continue soil pedogenesis.',
        keyInsight: 'Lichens are pioneer species in biological weathering of rock into soil.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c9-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c9-b5-01',
        subject: 'Biology',
        chapterId: 'c9-bio-05',
        chapterTitle: 'Natural Resources & Biogeochemical Cycles',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which class of synthetic chemicals is primarily responsible for the depletion of the stratospheric ozone layer?',
        options: ['A) Carbon monoxide (CO)', 'B) Chlorofluorocarbons (CFCs)', 'C) Methane (CH₄)', 'D) Sulphur dioxide (SO₂)'],
        correctAnswer: 'B',
        explanation: 'Chlorofluorocarbons (CFCs) used in refrigerants release active chlorine free radicals in the stratosphere, catalytically destroying ozone molecules.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
