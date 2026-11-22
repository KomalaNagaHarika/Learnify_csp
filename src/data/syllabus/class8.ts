import { Chapter } from '../../types';

export const CLASS_8_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c8-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Forces & Fluid Statics',
    order: 1,
    title: 'Force and Pressure',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Motion and Time',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Forces are due to interaction, exploring forces (resultant force), contact forces (muscular, friction) vs non-contact forces (magnetic, electrostatic, gravitational), pressure formula ($P = F/A$), pressure exerted by liquids and gases, and atmospheric pressure.',
    introduction: 'Why do sharp knives cut vegetables more effortlessly than blunt ones? Force measures push or pull, but pressure measures how concentrated that force is over an area. The weight of Earth\'s atmosphere exerts tons of invisible pressure upon us.',
    topics: [
      'Force as an Interaction: Push, Pull, Magnitude and Direction',
      'Net Resultant Force: Balanced vs Unbalanced Forces',
      'Contact Forces (Muscular Force, Friction) vs Non-Contact Forces (Magnetic, Electrostatic, Gravity)',
      'Scientific Concept of Pressure: $P = \\text{Force} / \\text{Area}$ (SI Unit: Pascal or $\\text{N/m}^2$)',
      'Liquid Pressure: Increases with Depth and Exerts Equal Pressure in All Directions at Same Depth',
      'Atmospheric Pressure and Torricelli’s Barometer Principle (Demonstrated with Rubber Sucker)'
    ],
    summaryNotes: `### Core Physical Principles:
1. **Pressure Formula:**
   $$P = \\frac{F}{A}$$
   - **Smaller Area $\\implies$ Higher Pressure:** Sharp needles and knife edges have tiny contact areas ($A$), creating huge pressure to puncture materials with small force.
   - **Larger Area $\\implies$ Lower Pressure:** Heavy military tanks have wide caterpillar tracks, and school bags have wide shoulder straps to minimize pressure on the ground and shoulders.
2. **Liquid Pressure:**
   - Liquids exert pressure on the bottom and walls of their container.
   - Pressure in a static liquid at depth $h$ is given by $P = h \\rho g$. Deep-sea submarines require thick titanium hulls to withstand immense pressure at the ocean floor!
3. **Atmospheric Pressure:**
   - At sea level, atmospheric pressure is roughly $101.3\\text{ kPa}$ (equivalent to 10 tons per square meter). Our internal blood pressure balances it precisely.`,
    definitions: [
      'Pressure: The perpendicular thrust force acting on a unit surface area of an object.',
      'Electrostatic Force: The non-contact attractive or repulsive force exerted by a charged body on another charged or uncharged body.'
    ],
    formulas: [
      { name: 'Pressure Formula', formula: 'P = \\frac{F}{A}', explanation: 'Calculates pressure from perpendicular thrust and area.', units: 'Pascal (Pa = N/m²)' },
      { name: 'Liquid Hydrostatic Pressure', formula: 'P = h \\rho g', explanation: 'Pressure exerted by liquid column of height h and density rho.', units: 'N/m²' }
    ],
    solvedExamples: [
      {
        question: 'A force of 200 N acts perpendicularly on an area of 0.05 m². Calculate the pressure exerted.',
        solution: 'P = F / A = 200 N / 0.05 m² = 4000 N/m² = 4000 Pa (or 4 kPa).',
        keyInsight: 'Divide force by contact area in square meters to find pressure in Pascals.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c8-p1-01',
        subject: 'Physics',
        chapterId: 'c8-phys-01',
        chapterTitle: 'Force and Pressure',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Why do school bags have wide straps rather than thin strings?',
        options: ['A) To look fashionable', 'B) To increase pressure on shoulders', 'C) To decrease pressure on shoulders by increasing surface area', 'D) To make the bag heavier'],
        correctAnswer: 'C',
        explanation: 'According to P = F/A, increasing the surface area of the straps decreases the pressure exerted on the student\'s shoulders, making carrying the bag comfortable.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Tribology',
    order: 2,
    title: 'Friction',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Force and Pressure',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Origin of friction (microscopic irregularities interlocking), factors affecting friction, static vs sliding vs rolling friction, friction as a necessary evil, methods of increasing friction (treads on tyres) and decreasing friction (lubricants, ball bearings, streamlining).',
    introduction: 'Without friction, you could not walk on pavement, write with a pencil, or stop a speeding car. Yet friction wastes billions in energy and wears out machinery. Understanding tribology balances traction with efficiency.',
    topics: [
      'Microscopic Cause of Friction: Interlocking of Surface Irregularities and Molecular Adhesion',
      'Factors Affecting Friction: Nature of Surfaces and Normal Force Pressing Surfaces Together',
      'Static Friction (Self-adjusting up to Limiting Friction) vs Sliding Friction',
      'Rolling Friction: Why Wheels are Humanity\'s Greatest Invention ($F_{rolling} \\ll F_{sliding}$)',
      'Friction - A Necessary Evil: Walking, writing, braking vs Heat generation and wear-and-tear',
      'Techniques for Controlling Friction: Treads, spikes, lubricants (oils, graphite), ball bearings, and streamlined shapes in fluids (aerodynamics)'
    ],
    summaryNotes: `### Friction Hierarchy:
$$\\text{Static Friction (Limiting)} > \\text{Sliding Friction} > \\text{Rolling Friction}$$
1. **Static Friction:** Acts when an object is at rest against an applied force. It is **self-adjusting** up to its maximum value (Limiting Friction).
2. **Sliding Friction:** Acts once relative motion begins; slightly smaller than limiting static friction because irregularities have less time to interlock.
3. **Rolling Friction:** When an object rolls over a surface, rolling friction is vastly smaller than sliding friction. This is why heavy luggage is fitted with small wheels and machinery uses **ball bearings**!
4. **Fluid Friction (Drag):** Friction exerted by fluids (air/water). Reduced by giving vehicles **streamlined spindle shapes** inspired by birds and fish.`,
    definitions: [
      'Friction: An opposing contact force that resists the relative sliding or rolling motion between two touching surfaces.',
      'Rolling Friction: The frictional resistance encountered when a cylindrical or spherical body rolls over another surface.'
    ],
    formulas: [
      { name: 'Friction Order', formula: 'f_{rolling} \\ll f_{sliding} < f_{limiting\\,static}', explanation: 'Comparative magnitude of frictional modes.', units: 'Force' }
    ],
    solvedExamples: [
      {
        question: 'Why are the soles of sports shoes grooved and automobile tyres deeply treaded?',
        solution: 'Deep grooves and treads increase the roughness of the contact surfaces, increasing frictional grip on the ground or road. This prevents slipping and skidding when accelerating or applying sudden brakes.',
        keyInsight: 'Treads deliberately increase friction to provide secure traction.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c8-p2-01',
        subject: 'Physics',
        chapterId: 'c8-phys-02',
        chapterTitle: 'Friction',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which type of friction has the smallest magnitude for the same normal force?',
        options: ['A) Limiting static friction', 'B) Sliding friction', 'C) Rolling friction', 'D) All have identical magnitude'],
        correctAnswer: 'C',
        explanation: 'Rolling friction is vastly smaller than sliding and static friction because the area of contact at any instant is microscopic, making rolling effortless.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Acoustics & Waves',
    order: 3,
    title: 'Sound',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Motion and Time',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Sound produced by vibrating objects, human vocal cords (larynx), sound propagation through solids, liquids, and gases, vacuum bell jar experiment, human ear structure (eardrum, ossicles, cochlea), amplitude, frequency, pitch, loudness, audible range, and noise pollution.',
    introduction: 'Touch your throat while humming: you can feel your vocal cords vibrating! Sound is a mechanical longitudinal wave requiring a material medium to propagate. The human ear converts mechanical vibrations into nerve pulses transmitted to the brain.',
    topics: [
      'Sound is Produced by Vibrating Objects: Tuning forks, vibrating strings, membranes, and air columns',
      'Sound Produced by Humans: Larynx (Voice Box), Vocal Cords, and Windpipe',
      'Sound Needs a Medium for Propagation: The Electric Bell in Vacuum Bell Jar Experiment',
      'Anatomy of the Human Ear: Outer Pinna, Auditory Canal, Tympanic Membrane (Eardrum), Middle Ear Bones, Cochlea',
      'Wave Characteristics: Amplitude (Determines Loudness: $L \\propto A^2$) and Frequency (Determines Pitch/Shrillness in Hz)',
      'Audible Range: $20\\text{ Hz} - 20,000\\text{ Hz}$ (Infrasonic $< 20\\text{ Hz}$, Ultrasonic $> 20\\text{ kHz}$)',
      'Noise Pollution: Causes, Health hazards (Hearing loss, hypertension), and Plantation of Trees (Green Muffler)'
    ],
    summaryNotes: `### Core Acoustic Parameters:
1. **Loudness:**
   - Depends directly on **Amplitude ($A$)** of vibration.
   - $\\text{Loudness} \\propto (\\text{Amplitude})^2$. Measured in Decibels (dB). Above $80\\text{ dB}$, noise becomes physically painful.
2. **Pitch / Shrillness:**
   - Depends directly on **Frequency ($\\nu$)** of vibration (measured in Hertz, $\\text{Hz}$).
   - High frequency = High pitch / Shrill sound (e.g., whistle, woman\'s voice, mosquito whine).
   - Low frequency = Low pitch / Deep bass sound (e.g., drum beat, man\'s voice, lion\'s roar).
3. **Propagation Speed:**
   - $\\text{Speed of Sound: Solids } (\\sim 5000\\text{ m/s}) > \\text{Liquids } (\\sim 1500\\text{ m/s}) > \\text{Gases } (\\sim 340\\text{ m/s})$.
   - Sound **cannot travel through vacuum**!`,
    definitions: [
      'Frequency: The number of complete vibrations or oscillations per second (measured in Hertz, Hz).',
      'Loudness: The subjective perception of the intensity of sound, proportional to the square of its vibrational amplitude.'
    ],
    formulas: [
      { name: 'Loudness Amplitude Scaling', formula: '\\text{Loudness} \\propto A^2', explanation: 'Doubling vibrational amplitude quadruples the perceived loudness.', units: 'Decibels (dB)' },
      { name: 'Frequency Equation', formula: '\\nu = \\frac{\\text{Number of Vibrations}}{\\text{Time in Seconds}}', explanation: 'Hertz frequency calculation.', units: 'Hz' }
    ],
    solvedExamples: [
      {
        question: 'A pendulum oscillates 40 times in 4 seconds. Find its frequency and time period.',
        solution: 'Frequency = 40 vibrations / 4 seconds = 10 Hz.\nTime period T = 1 / Frequency = 1 / 10 = 0.1 seconds.',
        keyInsight: 'Frequency is oscillations per second; time period is seconds per oscillation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c8-p3-01',
        subject: 'Physics',
        chapterId: 'c8-phys-03',
        chapterTitle: 'Sound',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the audible frequency range for a normal healthy human ear?',
        options: ['A) 2 Hz to 200 Hz', 'B) 20 Hz to 20,000 Hz', 'C) 200 Hz to 200,000 Hz', 'D) 0 Hz to 100 Hz'],
        correctAnswer: 'B',
        explanation: 'The human ear can detect sound frequencies strictly between 20 Hz (lower threshold) and 20,000 Hz (upper threshold).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electrochemistry',
    order: 4,
    title: 'Chemical Effects of Electric Current',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Electric Current and Its Effects',
    totalConcepts: 5,
    durationHours: 3.5,
    description: 'Electrical conductivity of liquids, tap water vs distilled water, electrolytes, chemical reactions produced by electric current (evolution of gases, electroplating), and industrial applications of electroplating.',
    introduction: 'Pure distilled water is an electrical insulator, but dissolving a pinch of salt makes it conduct electricity briskly! When an electric current passes through a conducting solution, it triggers chemical changes—a process called electrolysis and electroplating.',
    topics: [
      'Do Liquids Conduct Electricity? Testing with LED Circuit (Lemon juice, Vinegar, Salt solution)',
      'Why Distilled Water Does Not Conduct vs Mineral/Tap Water',
      'Electrolysis of Water: Splitting into Hydrogen Gas (Cathode -) and Oxygen Gas (Anode +)',
      'Chemical Effects: Evolution of gas bubbles, deposition of metal, and change in solution color',
      'The Process of Electroplating: Principle, Copper plating experiment',
      'Industrial Uses of Electroplating: Chromium on car bumpers, Gold plating on jewelry, Tin on food cans, Zinc on iron (Galvanizing)'
    ],
    summaryNotes: `### Core Electroplating Mechanics:
1. **Electrolyte:** A liquid solution containing free mobile positive and negative ions that conducts electric current.
2. **Electrolysis of Water (William Nicholson, 1800):**
   - Electric current breaks water into gases:
     - **Oxygen gas ($O_2$)** evolves at the **positive electrode (Anode)**.
     - **Hydrogen gas ($H_2$)** evolves at the **negative electrode (Cathode)** in double volume ratio ($2:1$).
3. **Electroplating:**
   - The process of depositing a thin layer of any desired superior metal onto another cheaper metal by means of electricity.
   - The article to be coated is connected to the **negative terminal (Cathode)**.
   - A pure plate of the coating metal is connected to the **positive terminal (Anode)**.
   - The electrolyte must be a soluble salt of the coating metal (e.g., $CuSO_4$ for copper plating).`,
    definitions: [
      'Electroplating: The deposition of a thin protective or decorative metallic layer on an object by electrical electrolysis.',
      'Electrolyte: A conducting ionic solution that decomposes chemically when electric current passes through it.'
    ],
    formulas: [
      { name: 'Water Electrolysis Stoichiometry', formula: '2H_2O \\xrightarrow{\\text{Electricity}} 2H_2\\uparrow \\text{ (Cathode)} + O_2\\uparrow \\text{ (Anode)}', explanation: 'Stoichiometric 2:1 volume ratio of hydrogen to oxygen.', units: 'Electrochemical' }
    ],
    solvedExamples: [
      {
        question: 'In an experiment to electroplate a steel spoon with copper, to which terminal of the battery should the spoon be connected, and what electrolyte should be used?',
        solution: 'The steel spoon must be connected to the negative terminal (Cathode) so that positively charged copper ions ($Cu^{2+}$) migrate toward it and deposit metallic copper. The electrolyte should be a soluble copper salt solution, such as Copper Sulphate ($CuSO_4$).',
        keyInsight: 'The object to be electroplated is always made the negative cathode.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c8-p4-01',
        subject: 'Physics',
        chapterId: 'c8-phys-04',
        chapterTitle: 'Chemical Effects of Electric Current',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'During the electrolysis of acidified water, oxygen gas collects at the:',
        options: ['A) Cathode (Negative terminal)', 'B) Anode (Positive terminal)', 'C) Bottom of the beaker', 'D) Everywhere uniformly'],
        correctAnswer: 'B',
        explanation: 'Negatively charged oxide ions migrate to the positive electrode (Anode), discharging to form pure oxygen gas bubbles.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Optics & Vision',
    order: 5,
    title: 'Light & The Human Eye',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Light and Reflection',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Laws of reflection, regular vs diffused reflection, reflected light can be reflected again (periscope, kaleidoscope), dispersion, human eye structure (cornea, iris, pupil, crystalline lens, retina, rods & cones, blind spot), persistence of vision, eye care, and the Braille system for the visually challenged.',
    introduction: 'Light allows our visual cortex to see the universe in vivid color. The human eye operates like an advanced autofocus camera with an adjustable pupil aperture and a photo-receptive retina packed with 130 million rod and cone photoreceptors.',
    topics: [
      'Two Universal Laws of Reflection: $\\angle i = \\angle r$ and Coplanarity',
      'Regular (Specular) Reflection vs Diffused (Irregular) Reflection',
      'Multiple Reflection: Number of Images $n = (360^\\circ / \\theta) - 1$; The Kaleidoscope and Periscope',
      'Dispersion of White Light through a Prism',
      'Anatomy of the Human Eye: Cornea, Iris (Eye color), Pupil, Crystalline Lens, Ciliary Muscles, Retina',
      'Photoreceptors: Rods (Sensitive to dim light) and Cones (Sensitive to bright light and color vision)',
      'The Blind Spot and Persistence of Vision ($1/16\\text{th}$ of a second)',
      'Caring for the Eyes and The Braille System (63 dot patterns by Louis Braille)'
    ],
    summaryNotes: `### Two Laws of Reflection:
1. The angle of incidence ($\\angle i$) is strictly equal to the angle of reflection ($\\angle r$).
2. The incident ray, the reflected ray, and the normal at the point of incidence all lie in the **same plane**.
### Human Eye Architecture:
- **Cornea:** Transparent front bulge through which light enters.
- **Iris & Pupil:** The iris (colored circular diaphragm) controls the size of the **pupil**, regulating light intake.
- **Retina:** Light-sensitive inner screen containing:
  * **Cones:** Respond to bright light and discriminate **colors**.
  * **Rods:** Sensitive to faint dim light (active in night vision).
  * **Blind Spot:** Region where optic nerve leaves the eye; devoid of rods and cones, so no vision is possible here.
- **Persistence of Vision:** The visual impression of an image persists on the retina for about **$1/16\\text{th}$ of a second**. Cinematography projects $>24$ frames per second to create the illusion of seamless motion!`,
    definitions: [
      'Blind Spot: The junction of the optic nerve and retina where no photoreceptor cells exist and no vision is possible.',
      'Persistence of Vision: The retention of a visual image on the human retina for approximately 1/16th of a second after the light source is removed.'
    ],
    formulas: [
      { name: 'Multiple Images Formula', formula: 'n = \\frac{360^\\circ}{\\theta} - 1', explanation: 'Number of images formed by two plane mirrors inclined at angle theta.', units: 'Count' }
    ],
    solvedExamples: [
      {
        question: 'Two plane mirrors are placed at an angle of 90° to each other. How many images of a coin placed between them will be seen?',
        solution: 'n = (360° / θ) - 1 = (360° / 90°) - 1 = 4 - 1 = 3 images.',
        keyInsight: 'Apply n = (360/θ) - 1 for perpendicular mirrors.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c8-p5-01',
        subject: 'Physics',
        chapterId: 'c8-phys-05',
        chapterTitle: 'Light & The Human Eye',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which photoreceptor cells on the retina are responsible for color vision in bright light?',
        options: ['A) Rod cells', 'B) Cone cells', 'C) Optic nerve cells', 'D) Cornea cells'],
        correctAnswer: 'B',
        explanation: 'Cones are cone-shaped photoreceptor cells on the retina that are sensitive to bright light and perceive primary colors.',
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
    id: 'c8-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Polymers & Materials',
    order: 1,
    title: 'Synthetic Fibres and Plastics',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'Basic priority',
    prerequisite: 'Class 7 Physical and Chemical Changes',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Polymers and monomers, natural vs synthetic fibres, Rayon (artificial silk), Nylon (first fully synthetic fibre), Polyester (Terylene/PET), Acrylic (artificial wool), thermoplastics vs thermosetting plastics (Bakelite, Melamine), and plastics & environmental hazards (5R principle).',
    introduction: 'A polymer is like a long necklace made of individual bead-like chemical units called monomers. Synthetic fibres are stronger, dry faster, and resist insects better than natural fibres, but non-biodegradable plastics pose a grave environmental challenge.',
    topics: [
      'What is a Polymer? Chain of repeating chemical monomers',
      'Synthetic Fibres: Rayon (from Wood pulp chemical treatment), Nylon (Coal, water, air - strong as steel wire)',
      'Polyester (PET bottles and textiles) and Acrylic (Warm synthetic wool)',
      'Characteristics of Synthetic Fibres: High tensile strength, low water absorption, durability',
      'Plastics: Thermoplastics (PVC, Polythene) vs Thermosetting Plastics (Bakelite, Melamine)',
      'Plastics and Environment: Non-biodegradable waste, Plastic pollution, and The 5R Principle (Refuse, Reduce, Reuse, Repurpose, Recycle)'
    ],
    summaryNotes: `### Core Classifications:
1. **Key Synthetic Fibres:**
   - **Rayon:** Regenerated cellulose fibre prepared from wood pulp; possesses the luxurious sheen of silk ("Artificial Silk").
   - **Nylon:** First fully synthetic polymer fibre (1931). Strong, elastic, and lightweight. A nylon thread is practically stronger than a steel wire of equal thickness! Used in parachutes, climbing ropes, socks.
   - **Polyester & PET:** Wrinkle-resistant. Polyethylene Terephthalate (PET) is used for bottles and jars.
2. **Plastics Classification:**
   - **Thermoplastics:** Linear polymers that easily soften on heating and can be bent and remolded repeatedly (e.g., Polythene, PVC).
   - **Thermosetting Plastics:** Cross-linked polymers that once molded and set, cannot be softened by heating (e.g., **Bakelite** for electric switches, **Melamine** for flame-resistant floor tiles and dinnerware).`,
    definitions: [
      'Polymer: A large molecule composed of many repeating structural subunits (monomers) joined by covalent bonds.',
      'Thermosetting Plastic: A plastic which once set in a particular shape upon heating does not soften on reheating.'
    ],
    formulas: [
      { name: 'Polymerization', formula: 'n(\\text{Monomer}) \\xrightarrow{\\text{Catalyst, } P} -[\\text{Monomer}]_n- \\text{ (Polymer)}', explanation: 'General addition polymerization reaction.', units: 'Macromolecular' }
    ],
    solvedExamples: [
      {
        question: 'Why are electrical switchboards and saucepan handles made of Bakelite?',
        solution: 'Bakelite is a thermosetting plastic. It is a poor conductor of both electricity and heat, and it does not soften or melt even when exposed to high electrical sparks or hot stove temperatures.',
        keyInsight: 'Thermosetting cross-linked plastics resist heat and electrical conduction.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c8-c1-01',
        subject: 'Chemistry',
        chapterId: 'c8-chem-01',
        chapterTitle: 'Synthetic Fibres and Plastics',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which synthetic fibre was the first fully synthetic fibre made without using any natural raw plant or animal material?',
        options: ['A) Rayon', 'B) Nylon', 'C) Polyester', 'D) Acrylic'],
        correctAnswer: 'B',
        explanation: 'Nylon was synthesized in 1931 strictly from coal, water, and air without any natural plant or animal raw materials, making it the first fully synthetic fibre.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Inorganic Chemistry & Metallurgy',
    order: 2,
    title: 'Materials: Metals and Non-Metals',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Physical and Chemical Changes',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Physical properties of metals and non-metals (malleability, ductility, sonorousness, conductivity), exceptions (mercury, graphite, diamond, sodium, potassium), reactions with oxygen (basic vs acidic oxides), reactions with water, acids (hydrogen gas pop sound test), bases, the reactivity series, displacement reactions, and commercial uses.',
    introduction: 'From golden ornaments to iron railway bridges, metals dominate industry. Non-metals like oxygen and carbon sustain biology. Understanding their distinct physical malleability and chemical reactivity is fundamental for IIT-JEE and NEET chemistry.',
    topics: [
      'Physical Properties of Metals: Malleability (beaten into sheets), Ductility (drawn into wires), Lustre, Sonorous sound, High thermal & electrical conductivity',
      'Physical Properties of Non-Metals & Important Exceptions: Mercury (liquid metal), Bromine (liquid non-metal), Graphite (conducting non-metal), Diamond (hardest substance), Sodium & Potassium (soft metals cut with knife)',
      'Reaction with Oxygen: Metals form Basic Oxides ($MgO, Fe_2O_3$); Non-metals form Acidic Oxides ($SO_2, CO_2$)',
      'Reaction with Water: Vigorous reaction of Sodium in water (stored under kerosene)',
      'Reaction with Acids: Metals react with dilute acids to liberate Hydrogen gas ($H_2$ burns with a pop sound)',
      'Displacement Reactions and Reactivity Series: More reactive metals displace less reactive metals from aqueous salt solutions',
      'Industrial and Domestic Uses of Metals and Non-Metals'
    ],
    summaryNotes: `### Key Chemical Comparisons:
1. **Oxide Nature:**
   - Metal Oxide + Water $\\rightarrow$ **Base** (Turns red litmus blue): $2Mg + O_2 \\rightarrow 2MgO; MgO + H_2O \\rightarrow Mg(OH)_2$.
   - Non-metal Oxide + Water $\\rightarrow$ **Acid** (Turns blue litmus red): $S + O_2 \\rightarrow SO_2; SO_2 + H_2O \\rightarrow H_2SO_3 \\text{ (Sulphurous acid)}$.
2. **Reactivity Series Hierarchy:**
   $$K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au$$
   - A metal higher in the reactivity series will displace any metal below it from its salt solution:
     $$Zn + CuSO_4 \\text{ (Blue)} \\longrightarrow ZnSO_4 \\text{ (Colorless)} + Cu \\text{ (Reddish brown)}$$
     $$Cu + FeSO_4 \\longrightarrow \\text{No Reaction! (Copper is less reactive than Iron)}$$
3. **Storage:**
   - Sodium and Potassium react violently with moisture and air, catching fire; stored submerged in **kerosene**.
   - White phosphorus catches fire in air; stored submerged in **water**.`,
    definitions: [
      'Malleability: The physical property of metals that allows them to be hammered or rolled into thin sheets without breaking.',
      'Displacement Reaction: A chemical reaction in which a more reactive element displaces a less reactive element from its aqueous compound.'
    ],
    formulas: [
      { name: 'Displacement Reaction Rule', formula: 'A + BC \\rightarrow AC + B \\quad (\\text{Only if Activity of } A > B)', explanation: 'Single replacement criterion based on electrochemical series.', units: 'Reaction' }
    ],
    solvedExamples: [
      {
        question: 'What happens when a zinc rod is placed in a blue copper sulphate solution? Write the chemical equation.',
        solution: 'Zinc is more reactive than copper. It displaces copper from copper sulphate solution, forming colorless zinc sulphate ($ZnSO_4$) solution and depositing reddish-brown metallic copper on the zinc rod:\nZn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s).',
        keyInsight: 'More active metals displace less active metals from aqueous salts.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c8-c2-01',
        subject: 'Chemistry',
        chapterId: 'c8-chem-02',
        chapterTitle: 'Materials: Metals and Non-Metals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following non-metals is an exceptional conductor of electricity?',
        options: ['A) Sulphur', 'B) Phosphorus', 'C) Graphite', 'D) Nitrogen'],
        correctAnswer: 'C',
        explanation: 'Graphite (an allotrope of carbon) has free delocalized valence electrons in its planar hexagonal sheets, making it a good electrical conductor.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Fossil Fuels & Petrochemicals',
    order: 3,
    title: 'Coal and Petroleum',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'Basic priority',
    prerequisite: 'Class 7 Physical and Chemical Changes',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Inexhaustible vs exhaustible natural resources, fossil fuels, formation of coal (carbonization of ancient buried forests), destructive distillation of coal (coke, coal tar, coal gas), formation and fractional distillation of petroleum (LPG, petrol, kerosene, diesel, lubricating oil, paraffin wax, bitumen), and PCRA conservation tips.',
    introduction: 'Millions of years ago, dense swamp forests and marine plankton were buried under tectonic sediment. Subjected to intense geological heat and pressure without oxygen, their organic remnants turned into fossil fuels: coal, petroleum, and natural gas.',
    topics: [
      'Natural Resources: Inexhaustible (Sunlight, Air) vs Exhaustible (Fossil fuels, Minerals, Forests)',
      'The Story of Coal: Carbonization of prehistoric vegetation under high pressure and temperature',
      'Products of Coal Processing: Coke ($98\\%$ pure carbon), Coal Tar (aromatic chemicals), Coal Gas',
      'Petroleum: "Black Gold", origin from dead sea organisms, and offshore drilling',
      'Fractional Distillation of Petroleum: Separation by boiling point fractions',
      'Petroleum Products: LPG, Petrol, Kerosene, Diesel, Paraffin Wax, and Bitumen (road surfacing)',
      'Compressed Natural Gas (CNG) as Clean Fuel and PCRA Energy Conservation Guidelines'
    ],
    summaryNotes: `### Core Petrochemical Concepts:
1. **Carbonization:** The slow chemical conversion of dead plant matter into coal under high pressure and temperature over millions of years.
2. **Coal By-products:**
   - **Coke:** Tough, porous, almost pure carbon residue. Used as a reducing agent in extraction of iron.
   - **Coal Tar:** Thick black liquid with unpleasant smell; source of dyes, drugs, perfumes, and naphthalene balls.
3. **Petroleum Refining:**
   - Crude oil is separated into fractions using a **Fractionating Column** based on differences in boiling points.
   - Lighter gases condense at the top (LPG); heaviest residue forms asphalt and bitumen at the bottom.
4. **Conservation (PCRA):**
   - Drive at moderate, consistent speeds.
   - Switch off the engine at traffic lights.
   - Ensure correct tire pressure and regular engine tuning.`,
    definitions: [
      'Carbonization: The slow geological process of conversion of dead organic vegetation into coal under extreme heat and pressure.',
      'Petrochemicals: Useful industrial chemicals obtained from petroleum and natural gas used for manufacturing detergents, plastics, and fertilizers.'
    ],
    formulas: [
      { name: 'Fractional Distillation', formula: 'T_{boiling} \\propto \\text{Carbon Chain Length}', explanation: 'Boiling point increases with hydrocarbon molecular weight.', units: 'Thermodynamics' }
    ],
    solvedExamples: [
      {
        question: 'Why are coal, petroleum, and natural gas termed "fossil fuels"?',
        solution: 'They were formed from the dead remains (fossils) of microscopic marine organisms and swamp vegetation that were buried under layers of Earth millions of years ago and subjected to intense anaerobic heat and pressure.',
        keyInsight: 'Fossil fuels originate from prehistoric living organisms.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c8-c3-01',
        subject: 'Chemistry',
        chapterId: 'c8-chem-03',
        chapterTitle: 'Coal and Petroleum',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which petroleum product has largely replaced coal tar for metalling road surfaces?',
        options: ['A) Coke', 'B) Bitumen', 'C) Paraffin wax', 'D) Kerosene'],
        correctAnswer: 'B',
        explanation: 'Bitumen, a heavy viscous petroleum fraction, is now universally used instead of coal tar for surfacing asphalt roads.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Thermochemistry & Combustion',
    order: 4,
    title: 'Combustion and Flame',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Physical and Chemical Changes',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'What is combustion, combustible vs non-combustible materials, essential conditions for combustion (fuel, oxygen, ignition temperature), inflammable substances, fire control techniques (water vs CO₂ extinguishers), types of combustion (rapid, spontaneous, explosion), structure of a candle flame (three zones), and calorific value of fuels.',
    introduction: 'A matchstick does not catch fire on its own at room temperature; it must be rubbed against a striking surface to reach its ignition temperature. Combustion is an exothermic redox reaction between fuel and atmospheric oxygen.',
    topics: [
      'Chemical Process of Combustion: Fuel + $O_2 \\rightarrow CO_2 + H_2O + \\text{Heat} + \\text{Light}$',
      'Three Requirements of Fire (Fire Triangle): Fuel, Supporter of Combustion (Oxygen), and Ignition Temperature',
      'Ignition Temperature and Inflammable Substances (Low ignition point, e.g., Petrol, Alcohol, LPG)',
      'How to Extinguish Fires: Water vs Carbon Dioxide ($CO_2$) Extinguishers for Electrical and Oil Fires',
      'Types of Combustion: Rapid Combustion (Gas stove), Spontaneous Combustion (Phosphorus in air), Explosion (Fireworks)',
      'Structure of a Flame: Non-luminous outer zone (Hottest, blue), Middle luminous zone (Incomplete combustion, yellow), Inner dark zone (Unburnt wax vapors)',
      'Calorific Value of Fuels (kJ/kg) and Environmental Impact (Acid rain, Carbon monoxide poisoning)'
    ],
    summaryNotes: `### Three Zones of a Candle Flame:
1. **Outer Zone (Non-Luminous):**
   - Blue color.
   - Zone of **complete combustion** due to ample oxygen supply.
   - **Hottest part** of the flame (goldsmiths blow this zone with a metallic blowpipe to melt gold and silver!).
2. **Middle Zone (Luminous):**
   - Yellow glowing color.
   - Zone of **partial / incomplete combustion**.
   - Contains glowing incandescent unburnt carbon particles. Moderately hot. Leaves black soot on cold glass plates.
3. **Innermost Zone (Dark Zone):**
   - Surrounds the wick directly.
   - Contains unburnt wax vapors; no combustion occurs here.
   - Least hot zone of the flame.
### Calorific Value:
- The amount of heat energy produced on complete combustion of **1 kg** of fuel (measured in **kJ/kg**).
- Hydrogen has the highest calorific value ($150,000\\text{ kJ/kg}$), while cow dung cake has only $6,000 - 8,000\\text{ kJ/kg}$.`,
    definitions: [
      'Ignition Temperature: The lowest temperature at which a combustible substance catches fire in air.',
      'Calorific Value: The quantity of heat energy released by the complete combustion of 1 kilogram of a fuel.'
    ],
    formulas: [
      { name: 'Calorific Value Formula', formula: '\\text{Calorific Value} = \\frac{\\text{Heat Produced (kJ)}}{\\text{Mass of Fuel (kg)}}', explanation: 'Thermal energy yield per kilogram.', units: 'kJ/kg' }
    ],
    solvedExamples: [
      {
        question: 'Why should water never be used to extinguish an oil fire or an electrical fire?',
        solution: '1. Oil is less dense than water and floats on top, so spraying water causes the burning oil to spread further.\n2. Tap water conducts electricity, putting the person spraying water at grave risk of fatal electric shock from live circuits. Pressurized $CO_2$ is the ideal extinguisher.',
        keyInsight: 'Water spreads oil fires and conducts electricity; use CO₂ instead.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c8-c4-01',
        subject: 'Chemistry',
        chapterId: 'c8-chem-04',
        chapterTitle: 'Combustion and Flame',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which zone of a candle flame is the hottest and used by goldsmiths to melt gold?',
        options: ['A) Innermost dark zone', 'B) Middle luminous yellow zone', 'C) Outermost non-luminous blue zone', 'D) Wick base'],
        correctAnswer: 'C',
        explanation: 'The outermost non-luminous blue zone has complete access to atmospheric oxygen, achieving complete combustion and the highest temperature in the flame.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Environmental Chemistry',
    order: 5,
    title: 'Pollution of Air and Water',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'Basic priority',
    prerequisite: 'Class 7 Wastewater Story',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Air pollutants and sources (carbon monoxide, nitrogen oxides, sulfur dioxide, CFCs, suspended particulate matter), smog, acid rain and corrosion of monuments (Taj Mahal marble cancer), greenhouse effect & global warming, water pollution (sewage, industrial effluents, pesticides, eutrophication), and potable water purification.',
    introduction: 'Industrial growth has contaminated our atmosphere and waterways. Acid rain corrodes monuments, greenhouse gases heat our planet, and industrial discharges choke aquatic life. Learning pollution chemistry empowers future scientists to develop clean ecological technologies.',
    topics: [
      'Major Air Pollutants: Carbon Monoxide ($CO$, deadly affinity for hemoglobin), $SO_2, NO_2$, Smoke, Dust',
      'Smog (Smoke + Fog) and Respiratory Disorders in Winter',
      'Acid Rain: $SO_2$ and $NO_2$ reacting with cloud moisture to form $H_2SO_4$ and $HNO_3$; Marble Cancer of Taj Mahal ($CaCO_3 + H_2SO_4 \\rightarrow CaSO_4$)',
      'Greenhouse Effect and Global Warming: $CO_2$, Methane ($CH_4$), Water vapor trapping infrared radiation',
      'Water Pollution: Industrial chemical effluents (Arsenic, Lead), Agricultural runoff (Pesticides, Fertilizers causing Eutrophication)',
      'Eutrophication: Excessive algae growth, bacterial oxygen depletion, and death of fish',
      'Purification of Drinking Water (Potable Water): Filtration, Boiling, Chlorination'
    ],
    summaryNotes: `### Core Environmental Chemistry:
1. **Acid Rain:**
   - Fossil fuel combustion emits Sulphur dioxide ($SO_2$) and Nitrogen dioxide ($NO_2$).
   - They dissolve in atmospheric rain droplets to form Sulphuric acid ($H_2SO_4$) and Nitric acid ($HNO_3$):
     $$SO_2 + H_2O + \\frac{1}{2}O_2 \\longrightarrow H_2SO_4$$
   - Acid rain corrodes limestone and marble monuments:
     $$CaCO_3 + H_2SO_4 \\longrightarrow CaSO_4 + H_2O + CO_2\\uparrow \\quad \\text{("Marble Cancer")}$$
2. **Eutrophication:**
   - Runoff fertilizers (Nitrates and Phosphates) enter lakes, causing massive **algal blooms**.
   - When algae die, decomposing bacteria consume all dissolved oxygen ($DO$) in water, suffocating fish and aquatic life!`,
    definitions: [
      'Eutrophication: Nutrient enrichment of an aquatic body leading to dense plant growth and oxygen depletion that kills animal life.',
      'Potable Water: Water that is chemically and biologically safe and suitable for human drinking.'
    ],
    formulas: [
      { name: 'Marble Cancer Equation', formula: 'CaCO_3 + H_2SO_4 \\rightarrow CaSO_4 + H_2O + CO_2\\uparrow', explanation: 'Corrosion of calcium carbonate stone by sulphuric acid rain.', units: 'Chemical reaction' }
    ],
    solvedExamples: [
      {
        question: 'Why is carbon monoxide (CO) considered significantly more dangerous to inhale than carbon dioxide (CO₂)?',
        solution: 'Carbon monoxide binds to blood hemoglobin with over 200 times greater affinity than oxygen, forming stable carboxyhemoglobin. This blocks red blood cells from transporting oxygen to vital organs, causing suffocation, unconsciousness, and death within minutes.',
        keyInsight: 'CO irreversibly blocks oxygen transport by binding tightly to hemoglobin.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c8-c5-01',
        subject: 'Chemistry',
        chapterId: 'c8-chem-05',
        chapterTitle: 'Pollution of Air and Water',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The phenomenon of corrosion of the white marble of the Taj Mahal due to acid rain is known as:',
        options: ['A) Marble Cancer', 'B) Stone Rotting', 'C) Limestone Oxidation', 'D) Acid Etching'],
        correctAnswer: 'A',
        explanation: 'The yellowish corrosion and pitting of the Taj Mahal\'s white marble caused by airborne sulphur and nitric acid rain is called marble cancer.',
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
    id: 'c8-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Rational Numbers',
    order: 1,
    title: 'Rational Numbers & Properties',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Integers & Operations',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Definition of rational numbers ($p/q, q \\ne 0$), properties of rational numbers (closure, commutativity, associativity, distributivity), role of zero and one, negative of a number (additive inverse), reciprocal (multiplicative inverse), representing rational numbers on number line, and finding rational numbers between two given rational numbers (density property).',
    introduction: 'Rational numbers encompass all numbers that can be written as a fraction of integers. Between any two distinct rational numbers lie infinitely many other rational numbers—a property known as the density of rational numbers.',
    topics: [
      'Definition of Rational Numbers: Form $p/q$ where $p, q$ are integers and $q \\ne 0$',
      'Closure Property for Addition, Subtraction, and Multiplication (Division is NOT closed due to zero)',
      'Commutative and Associative Properties of Rational Numbers',
      'The Role of Zero (Additive Identity) and One (Multiplicative Identity)',
      'Additive Inverse ($-a/b$) and Multiplicative Inverse / Reciprocal ($b/a$)',
      'Distributive Property of Multiplication over Addition: $a(b + c) = ab + ac$',
      'Representation of Rational Numbers on the Real Number Line',
      'Finding $n$ Rational Numbers Between Any Two Numbers using Mean Method / Common Denominators'
    ],
    summaryNotes: `### Core Algebraic Properties of $\\mathbb{Q}$:
1. **Closure:** If $x, y \\in \\mathbb{Q}$, then $x + y \\in \\mathbb{Q}, x - y \\in \\mathbb{Q}, x \\times y \\in \\mathbb{Q}$.
2. **Density Property:** Between any two rational numbers $a$ and $b$, there exist **infinitely many rational numbers**.
   - Arithmetic Mean $\\frac{a + b}{2}$ always lies strictly between $a$ and $b$:
     $$a < \\frac{a + b}{2} < b \\quad (\\text{if } a < b)$$
3. **Multiplicative Inverse:** The reciprocal of $p/q$ is $q/p$ such that $\\frac{p}{q} \\times \\frac{q}{p} = 1$. Note: **Zero has no reciprocal**!`,
    definitions: [
      'Rational Number: A number which can be written in the form p/q, where p and q are integers and q ≠ 0.',
      'Density Property: The mathematical principle stating that between any two distinct rational numbers, there are infinitely many rational numbers.'
    ],
    formulas: [
      { name: 'Rational Mean Formula', formula: 'm = \\frac{a + b}{2}', explanation: 'Finds a rational number equidistant between a and b.', units: 'Rational' }
    ],
    solvedExamples: [
      {
        question: 'Find 3 rational numbers between 1/4 and 1/2.',
        solution: 'Make denominators identical with a larger common multiple (e.g. 16):\n1/4 = 4/16; 1/2 = 8/16.\nRational numbers between 4/16 and 8/16 are: 5/16, 6/16, and 7/16.',
        keyInsight: 'Scale denominators up by multiplying numerator and denominator by a common integer.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c8-m1-01',
        subject: 'Mathematics',
        chapterId: 'c8-math-01',
        chapterTitle: 'Rational Numbers & Properties',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which rational number does NOT possess a reciprocal?',
        options: ['A) 1', 'B) -1', 'C) 0', 'D) 1/2'],
        correctAnswer: 'C',
        explanation: 'The reciprocal of 0 would be 1/0, which is undefined in mathematics. Hence, zero has no reciprocal.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 2,
    title: 'Linear Equations in One Variable',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Simple Linear Equations',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Solving linear equations with variables on both sides, equations reducible to linear form, cross-multiplication, and multi-concept word problems on numbers, consecutive integers, digits of a two-digit number, age, perimeter, currency notes, and speed-distance-time.',
    introduction: 'Real-world situations often present interconnected constraints: finding two digits of a reversed number or calculating speeds of downstream boats. Linear equations in one variable provide algorithmic clarity.',
    topics: [
      'Solving Equations having the Variable on Both Sides ($ax + b = cx + d$)',
      'Simplifying Complex Equations with Parentheses and Fractions',
      'Equations Reducible to Linear Form: $\\frac{ax + b}{cx + d} = \\frac{m}{n}$ by Cross-Multiplication',
      'Word Problems: Two-Digit Number Problems (Original number $= 10t + u$; Reversed $= 10u + t$)',
      'Age and Ratio Word Problems',
      'Perimeter, Area, and Speed-Distance-Time Linear Word Problems'
    ],
    summaryNotes: `### Core Algebraic Methods:
1. **Linear Equations with Variables on Both Sides:**
   - Group all variable terms on the LHS and all constant numbers on the RHS:
     $$ax + b = cx + d \\implies ax - cx = d - b \\implies x(a - c) = d - b \\implies x = \\frac{d - b}{a - c}$$
2. **Cross-Multiplication Rule:**
   $$\\frac{f(x)}{g(x)} = \\frac{m}{n} \\implies n \\cdot f(x) = m \\cdot g(x)$$
3. **Two-Digit Number Representation:**
   - Let tens digit be $t$ and units digit be $u$.
   - Original Value $= 10t + u$.
   - When digits are reversed, New Value $= 10u + t$.`,
    definitions: [
      'Linear Equation in One Variable: An algebraic equation of degree 1 involving only a single variable.',
      'Cross-Multiplication: Multiplying the numerator of each side of an algebraic equation by the denominator of the other side.'
    ],
    formulas: [
      { name: 'Cross-Multiplication Form', formula: '\\frac{ax + b}{cx + d} = \\frac{p}{q} \\implies q(ax + b) = p(cx + d)', explanation: 'Eliminates fractions from algebraic proportions.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Solve for x: (x + 1) / (2x + 3) = 3/8.',
        solution: 'Apply cross-multiplication:\n8(x + 1) = 3(2x + 3)\n8x + 8 = 6x + 9\n8x - 6x = 9 - 8\n2x = 1 => x = 1/2.',
        keyInsight: 'Cross-multiply numerator and denominator across the equals sign.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c8-m2-01',
        subject: 'Mathematics',
        chapterId: 'c8-math-02',
        chapterTitle: 'Linear Equations in One Variable',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Solve for y: 5y - 7 = 2y + 8:',
        options: ['A) 3', 'B) 5', 'C) 7', 'D) 15'],
        correctAnswer: 'B',
        explanation: '5y - 2y = 8 + 7 => 3y = 15 => y = 15 / 3 = 5.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Geometry & Polygons',
    order: 3,
    title: 'Understanding Quadrilaterals & Polygons',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Lines and Angles',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Polygons, convex and concave polygons, regular vs irregular polygons, angle sum property of an n-sided polygon: $(n-2) \\times 180^\\circ$, sum of exterior angles $= 360^\\circ$, kinds of quadrilaterals: Trapezium, Kite, Parallelogram (opposite sides and angles equal, diagonals bisect each other), Rhombus (perpendicular diagonals), Rectangle, and Square.',
    introduction: 'A triangle is the simplest polygon, but quadrilaterals govern architecture and tessellations. Polygons with $n$ sides obey strict angular laws that allow engineers to calculate internal and external angles effortlessly.',
    topics: [
      'Classification of Polygons: Convex Polygons vs Concave Polygons',
      'Regular Polygons: Equilateral and Equiangular (e.g., Equilateral triangle, Square, Regular hexagon)',
      'Interior Angle Sum Formula for n-sided Polygon: $S_{int} = (n - 2) \\times 180^\\circ$',
      'Exterior Angle Sum Property: Sum of Exterior Angles of Any Convex Polygon is Always $360^\\circ$',
      'Each Exterior Angle of Regular n-gon: $\\theta_{ext} = 360^\\circ / n$',
      'Properties of Parallelogram: Opposite sides equal, opposite angles equal, diagonals bisect each other',
      'Special Parallelograms: Rhombus (Diagonals bisect at 90°), Rectangle (All angles 90°), Square (Equal sides and 90° diagonals)'
    ],
    summaryNotes: `### Core Polygon Formulas:
1. **Sum of Interior Angles of an $n$-gon:**
   $$S_{int} = (n - 2) \\times 180^\\circ$$
   - Triangle ($n=3$): $(3-2) \\times 180^\\circ = 180^\\circ$
   - Quadrilateral ($n=4$): $(4-2) \\times 180^\\circ = 360^\\circ$
   - Pentagon ($n=5$): $(5-2) \\times 180^\\circ = 540^\\circ$
   - Hexagon ($n=6$): $(6-2) \\times 180^\\circ = 720^\\circ$
2. **Exterior Angles:**
   - Sum of all exterior angles of any convex polygon is **always $360^\\circ$**.
   - For a regular $n$-sided polygon:
     $$\\text{Each Exterior Angle} = \\frac{360^\\circ}{n}$$
     $$\\text{Number of Sides } (n) = \\frac{360^\\circ}{\\text{Each Exterior Angle}}$$
3. **Special Quadrilateral Diagonals:**
   - **Parallelogram:** Diagonals bisect each other.
   - **Rectangle:** Diagonals are **equal** and bisect each other.
   - **Rhombus:** Diagonals bisect each other at **right angles ($90^\\circ$)**.
   - **Square:** Diagonals are **equal** and bisect each other at **right angles ($90^\\circ$)**.`,
    definitions: [
      'Convex Polygon: A polygon in which no interior angle is greater than 180° and all diagonals lie entirely within the interior.',
      'Rhombus: A parallelogram whose all four sides are of equal length and whose diagonals intersect perpendicularly.'
    ],
    formulas: [
      { name: 'Polygon Interior Angle Sum', formula: 'S = (n - 2) \\times 180^\\circ', explanation: 'Total sum of interior angles of an n-sided polygon.', units: 'Degrees' },
      { name: 'Regular Polygon Exterior Angle', formula: '\\theta_{ext} = \\frac{360^\\circ}{n}', explanation: 'Measure of each exterior angle of regular n-gon.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'Find the number of sides of a regular polygon whose each exterior angle measures 45°.',
        solution: 'Number of sides n = 360° / (Measure of each exterior angle) = 360° / 45° = 8 sides (Octagon).',
        keyInsight: 'Divide 360° by the exterior angle to find the number of sides of a regular polygon.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c8-m3-01',
        subject: 'Mathematics',
        chapterId: 'c8-math-03',
        chapterTitle: 'Understanding Quadrilaterals & Polygons',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the sum of all interior angles of a convex hexagon (6 sides)?',
        options: ['A) 360°', 'B) 540°', 'C) 720°', 'D) 1080°'],
        correctAnswer: 'C',
        explanation: 'Using the formula (n - 2) * 180° for n = 6: (6 - 2) * 180° = 4 * 180° = 720°.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 4,
    title: 'Algebraic Expressions and Identities',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Linear Equations in One Variable',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Terms, factors, coefficients, monomials, binomials, polynomials, addition and subtraction of algebraic expressions, multiplication of algebraic expressions (monomial by monomial, binomial by binomial), what is an algebraic identity, and three standard identities: $(a+b)^2 = a^2 + 2ab + b^2$, $(a-b)^2 = a^2 - 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$, plus $(x+a)(x+b) = x^2 + (a+b)x + ab$.',
    introduction: 'An algebraic equation is true only for specific values of $x$, but an algebraic identity is an equation that is true for ALL real values of its variables. Master algebraic identities now to unlock quadratic equations, polynomials, and calculus in JEE preparation.',
    topics: [
      'What are Expressions? Terms, Factors, and Numerical/Literal Coefficients',
      'Monomials (1 term), Binomials (2 terms), Trinomials (3 terms), Polynomials',
      'Like Terms vs Unlike Terms: Rules of Addition and Subtraction',
      'Multiplication: Monomial × Polynomial and Binomial × Binomial (FOIL method)',
      'What is an Identity? Equality satisfied for all variable values',
      'Standard Identity I: $(a + b)^2 = a^2 + 2ab + b^2$',
      'Standard Identity II: $(a - b)^2 = a^2 - 2ab + b^2$',
      'Standard Identity III: $(a + b)(a - b) = a^2 - b^2$',
      'Standard Identity IV: $(x + a)(x + b) = x^2 + (a + b)x + ab$'
    ],
    summaryNotes: `### Four Core Standard Identities:
1. **Identity I:**
   $$(a + b)^2 = a^2 + 2ab + b^2$$
2. **Identity II:**
   $$(a - b)^2 = a^2 - 2ab + b^2$$
3. **Identity III (Difference of Squares):**
   $$(a + b)(a - b) = a^2 - b^2$$
4. **Identity IV:**
   $$(x + a)(x + b) = x^2 + (a + b)x + ab$$
### Fast Mental Arithmetic Applications:
- $103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10,000 + 600 + 9 = 10,609$.
- $98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10,000 - 400 + 4 = 9,604$.
- $105 \\times 95 = (100 + 5)(100 - 5) = 100^2 - 5^2 = 10,000 - 25 = 9,975$!`,
    definitions: [
      'Algebraic Identity: An equality that holds true for every possible value of the variables involved.',
      'Binomial: An algebraic expression containing exactly two non-zero terms separated by addition or subtraction.'
    ],
    formulas: [
      { name: 'Difference of Squares', formula: '(a + b)(a - b) = a^2 - b^2', explanation: 'Factors difference of two perfect squares.', units: 'Identity' },
      { name: 'Square of Binomial', formula: '(a \\pm b)^2 = a^2 \\pm 2ab + b^2', explanation: 'Expansion of sum or difference squared.', units: 'Identity' }
    ],
    solvedExamples: [
      {
        question: 'Using standard identities, evaluate: 297 × 303 without direct multiplication.',
        solution: 'Express in terms of 300: 297 = (300 - 3) and 303 = (300 + 3).\nApply Identity III: (a - b)(a + b) = a² - b²\n(300 - 3)(300 + 3) = 300² - 3² = 90,000 - 9 = 89,991.',
        keyInsight: 'Express numbers symmetrically around a round base like 300 to use a² - b².',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c8-m4-01',
        subject: 'Mathematics',
        chapterId: 'c8-math-04',
        chapterTitle: 'Algebraic Expressions and Identities',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Expand (2x + 3y)² using algebraic identities:',
        options: ['A) 4x² + 9y²', 'B) 4x² + 12xy + 9y²', 'C) 2x² + 6xy + 3y²', 'D) 4x² + 6xy + 9y²'],
        correctAnswer: 'B',
        explanation: 'Apply (a + b)² = a² + 2ab + b² with a = 2x and b = 3y: (2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y².',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Mensuration',
    order: 5,
    title: 'Mensuration (Area and Volume)',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Understanding Quadrilaterals',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Area of trapezium: $\\frac{1}{2}(a+b)h$, area of general quadrilateral, area of rhombus: $\\frac{1}{2}d_1 d_2$, surface area (total and lateral) and volume of 3D solids: Cube ($6l^2, l^3$), Cuboid ($2(lb+bh+hl), lbh$), and Right Circular Cylinder ($2\\pi r h, 2\\pi r(r+h), \\pi r^2 h$).',
    introduction: 'From designing packaging cartons to calculating water capacity in agricultural storage tanks, mensuration quantifies two-dimensional surface areas and three-dimensional volumes.',
    topics: [
      'Area of a Trapezium: $\\text{Area} = \\frac{1}{2} \\times (\\text{Sum of parallel sides}) \\times \\text{Perpendicular distance} = \\frac{1}{2}(a + b)h$',
      'Area of General Quadrilaterals by Triangulation with Diagonal and Offsets: $\\frac{1}{2} d (h_1 + h_2)$',
      'Area of Rhombus in Terms of Diagonals: $\\text{Area} = \\frac{1}{2} d_1 d_2$',
      'Surface Area of Solids: Lateral (Curved) Surface Area vs Total Surface Area',
      'Formulas for Cube ($TSA = 6a^2, LSA = 4a^2, V = a^3$)',
      'Formulas for Cuboid ($TSA = 2(lb + bh + hl), LSA = 2(l + b)h, V = lbh$)',
      'Formulas for Cylinder ($CSA = 2\\pi r h, TSA = 2\\pi r(r + h), V = \\pi r^2 h$)'
    ],
    summaryNotes: `### Core Mensuration Formulas Table:
1. **2D Figures:**
   - **Trapezium:** $\\text{Area} = \\frac{1}{2}(a + b)h$
   - **Rhombus:** $\\text{Area} = \\frac{1}{2} d_1 d_2$
2. **3D Solids:**
   - **Cuboid:**
     * $\\text{Total Surface Area} = 2(lb + bh + hl)$
     * $\\text{Lateral Surface Area (Area of 4 walls)} = 2(l + b)h$
     * $\\text{Volume} = l \\times b \\times h$
   - **Cube of side $a$:**
     * $\\text{Total Surface Area} = 6a^2$
     * $\\text{Lateral Surface Area} = 4a^2$
     * $\\text{Volume} = a^3$
   - **Cylinder of radius $r$ and height $h$:**
     * $\\text{Curved Surface Area (CSA)} = 2\\pi r h$
     * $\\text{Total Surface Area (TSA)} = 2\\pi r(r + h)$
     * $\\text{Volume} = \\pi r^2 h$
3. **Volume Conversion:** $1\\text{ m}^3 = 1000\\text{ Litres}; 1\\text{ Litre} = 1000\\text{ cm}^3$.`,
    definitions: [
      'Lateral Surface Area: The surface area of all sides of a 3D solid, excluding its top and bottom base areas.',
      'Volume: The total three-dimensional space occupied by a closed solid shape.'
    ],
    formulas: [
      { name: 'Cylinder Volume Formula', formula: 'V = \\pi r^2 h', explanation: 'Volume of circular cylinder of radius r and height h.', units: 'Cubic units (m³ or cm³)' },
      { name: 'Trapezium Area Formula', formula: 'A = \\frac{1}{2}(a + b)h', explanation: 'Area of trapezium with parallel sides a, b and height h.', units: 'Square units' }
    ],
    solvedExamples: [
      {
        question: 'A cylindrical water tank has radius 7 m and height 10 m. Find its storage capacity in liters. (Use π = 22/7)',
        solution: 'Volume V = π r² h = (22/7) * (7)² * 10 = (22/7) * 49 * 10 = 22 * 7 * 10 = 1540 m³.\nSince 1 m³ = 1000 Litres, storage capacity = 1540 * 1000 = 1,540,000 Litres.',
        keyInsight: 'Convert volume in cubic meters to liters by multiplying by 1000.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c8-m5-01',
        subject: 'Mathematics',
        chapterId: 'c8-math-05',
        chapterTitle: 'Mensuration (Area and Volume)',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The parallel sides of a trapezium are 12 cm and 20 cm, and the perpendicular distance between them is 8 cm. What is its area?',
        options: ['A) 128 cm²', 'B) 256 cm²', 'C) 64 cm²', 'D) 160 cm²'],
        correctAnswer: 'A',
        explanation: 'Area = 1/2 * (Sum of parallel sides) * height = 1/2 * (12 + 20) * 8 = 1/2 * 32 * 8 = 16 * 8 = 128 cm².',
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
    id: 'c8-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Agronomy & Applied Botany',
    order: 1,
    title: 'Crop Production and Management',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Nutrition in Plants',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Kharif vs Rabi crops, agricultural practices: soil preparation (ploughing, leveling), sowing (selection of healthy seeds, seed drill), adding manure and fertilizers (NPK), irrigation methods (traditional vs modern: sprinkler and drip), protecting from weeds (weedicides like 2,4-D), harvesting, threshing, and storage (silos, granaries).',
    introduction: 'Feeding a nation of 1.4 billion requires structured agricultural science. From preparing soil with ploughs to micro-irrigation and pest management, agronomy combines plant biology with food security.',
    topics: [
      'Crop Seasons: Kharif Crops (Monsoon: June to September, e.g., Paddy, Maize, Cotton) vs Rabi Crops (Winter: October to March, e.g., Wheat, Gram, Mustard)',
      'Basic Agricultural Practices: Step-by-Step Overview',
      'Preparation of Soil: Ploughing, Tilling, and Loosening Soil for Aeration and Earthworms',
      'Sowing: Traditional Funnel vs Modern Seed Drill (Ensures uniform depth and spacing)',
      'Manure (Organic decomposition) vs Chemical Fertilizers (Inorganic salts: NPK, Urea)',
      'Irrigation Techniques: Traditional (Moat, Chain pump, Dhekli, Rahat) vs Modern (Sprinkler & Drip systems)',
      'Weeding (Manual vs Chemical 2,4-D) and Harvesting (Sickle, Harvester, Combine, Thresher)',
      'Safe Storage: Drying grain to prevent fungus, Silos, Buffer stocks, and Animal Husbandry'
    ],
    summaryNotes: `### Two Main Crop Seasons:
- **Kharif Crops:** Sown in the rainy season (June to September). Require abundant rainfall and warm temperatures. Examples: **Paddy (Rice), Maize, Soya bean, Groundnut, Cotton**.
- **Rabi Crops:** Sown in winter season (October to March). Harvested in spring. Examples: **Wheat, Gram, Pea, Mustard, Linseed**.
### Manure vs Fertilizers:
- **Manure:** Organic substance formed by decomposition of plant and animal waste. Enriches soil humus and improves water-retaining capacity without causing soil toxicity.
- **Fertilizers:** Commercially synthesized inorganic salts rich in specific plant nutrients like Nitrogen, Phosphorus, and Potassium (**NPK**). Overuse damages soil microbial balance and leads to water eutrophication.`,
    definitions: [
      'Crop: When plants of the same kind are cultivated at one place on a large scale for food and economic use.',
      'Weed: An undesirable, wild plant that grows competing with cultivated crops for nutrients, water, and sunlight.'
    ],
    formulas: [
      { name: 'Crop Classification Scheme', formula: '\\text{Kharif (Monsoon: Paddy)} \\quad \\text{vs} \\quad \\text{Rabi (Winter: Wheat)}', explanation: 'Seasonal classification of Indian agricultural crops.', units: 'Agronomy' }
    ],
    solvedExamples: [
      {
        question: 'Why can paddy (rice) not be grown during the winter (Rabi) season in India?',
        solution: 'Paddy requires standing water, high humidity, and prolonged warm temperatures during its vegetative growth. Winter weather in India lacks sufficient rainfall and warmth, making successful paddy cultivation impossible in non-irrigated winter fields.',
        keyInsight: 'Paddy is water-intensive and suited strictly for rainy Kharif conditions.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c8-b1-01',
        subject: 'Biology',
        chapterId: 'c8-bio-01',
        chapterTitle: 'Crop Production and Management',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is classified as a Rabi crop in India?',
        options: ['A) Paddy', 'B) Maize', 'C) Wheat', 'D) Cotton'],
        correctAnswer: 'C',
        explanation: 'Wheat is sown in October-November (winter) and harvested in March-April, making it a classic Rabi crop.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Microbiology & Pathology',
    order: 2,
    title: 'Microorganisms: Friend and Foe',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Crop Production and Management',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Four major groups of microorganisms (Bacteria, Fungi, Protozoa, Algae), viruses, beneficial microorganisms (curd making with Lactobacillus, bread making with Yeast, alcohol fermentation by Louis Pasteur, antibiotic discovery by Alexander Fleming - Penicillin), vaccines & antibodies (Edward Jenner), pathogens, communicable diseases, insect vectors (Anopheles mosquito - Malaria, Aedes mosquito - Dengue), food poisoning, food preservation methods (pasteurization), and nitrogen cycle.',
    introduction: 'Microscopic life forms inhabit every cubic millimeter of air, water, and soil. While some cause deadly plagues, others synthesize antibiotics, ferment curd, brew bread, and fix nitrogen in soil. Microbiology is a foundational discipline for medicine and NEET.',
    topics: [
      'Four Major Microbe Groups: Bacteria (Rod, Spiral), Fungi (Bread mould, Penicillium), Protozoa (Amoeba, Paramecium), Algae (Chlamydomonas, Spirogyra)',
      'Viruses: Microscopic infectious agents that replicate strictly inside host cells',
      'Commercial & Domestic Uses: Lactobacillus (Curd), Yeast fermentation (Bread, Alcohol, Wine)',
      'Medicinal Uses: Alexander Fleming and the discovery of Penicillin (1929)',
      'Vaccines: Edward Jenner (Smallpox, 1798), Antigens, and Memory Antibodies',
      'Harmful Microbes & Pathogens: Communicable diseases (Air, Water, Food, Direct contact)',
      'Insect Disease Vectors: Female Anopheles mosquito (Plasmodium malaria) and Female Aedes mosquito (Dengue virus)',
      'Food Preservation Techniques: Chemical preservatives (Sodium benzoate), Salting, Sugar, Oil & Vinegar, Pasteurization (Heating to 70°C then rapid chilling)',
      'The Nitrogen Cycle: Atmospheric Nitrogen Fixation by Rhizobium and Lightning, Denitrifying bacteria'
    ],
    summaryNotes: `### Historic Milestones in Microbiology:
- **Louis Pasteur (1857):** Discovered **fermentation** and developed **pasteurization**.
- **Alexander Fleming (1929):** Discovered the first antibiotic, **Penicillin**, from the fungus *Penicillium notatum*.
- **Edward Jenner (1798):** Developed the world\'s first **vaccine** (for smallpox).
- **Robert Koch (1876):** Discovered the bacterium (*Bacillus anthracis*) that causes deadly anthrax disease.
### The Nitrogen Cycle:
- Air contains $78\\%$ Nitrogen, but plants cannot absorb gaseous $N_2$ directly.
- **Nitrogen Fixation:** *Rhizobium* in legume roots and blue-green algae convert gaseous $N_2$ into soluble nitrates ($NO_3^-$).
- Plants absorb nitrates from soil to build proteins.
- **Denitrifying Bacteria:** Decompose animal waste and dead plants back into nitrogen gas, keeping atmospheric $N_2$ content constant!`,
    definitions: [
      'Antibiotic: A medicinal chemical compound produced by microorganisms that kills or halts the growth of disease-causing bacteria.',
      'Pasteurization: The process of heating milk to about 70°C for 15-30 seconds and then suddenly chilling it to prevent microbial growth.'
    ],
    formulas: [
      { name: 'Fermentation Reaction', formula: '\\text{Sugar } \\xrightarrow{\\text{Yeast}} \\text{Alcohol} + CO_2\\uparrow', explanation: 'Anaerobic conversion of sugar to ethanol by yeast enzymes.', units: 'Biochemical' }
    ],
    solvedExamples: [
      {
        question: 'How do vaccines protect our body against future infections by virulent pathogens?',
        solution: 'A vaccine introduces dead or weakened pathogens into the body. The immune system responds by producing specific protective proteins called antibodies. Special memory cells remember the pathogen and produce massive amounts of antibodies instantly if the real pathogen attacks, neutralizing it before disease develops.',
        keyInsight: 'Vaccines train the immune system through memory antibody production.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c8-b2-01',
        subject: 'Biology',
        chapterId: 'c8-bio-02',
        chapterTitle: 'Microorganisms: Friend and Foe',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which insect vector is responsible for transmitting the malaria parasite (Plasmodium)?',
        options: ['A) Female Aedes mosquito', 'B) Female Anopheles mosquito', 'C) Housefly', 'D) Cockroach'],
        correctAnswer: 'B',
        explanation: 'The female Anopheles mosquito acts as the biological vector that carries and transmits the malaria parasite (Plasmodium) between human hosts.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Conservation Ecology',
    order: 3,
    title: 'Conservation of Plants and Animals',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'Basic priority',
    prerequisite: 'Crop Production and Management',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Deforestation causes and consequences (desertification, global warming, drought), conservation of forests and wildlife, protected areas: Biosphere Reserves (Pachmarhi), National Parks (Satpura), Wildlife Sanctuaries, flora and fauna, endemic species, Red Data Book, migration of birds, and reforestation.',
    introduction: 'Earth is experiencing rapid biodiversity loss due to habitat destruction and poaching. Protected reserves, national parks, and international Red Data Books aim to conserve endangered flora and fauna before they slip into extinction.',
    topics: [
      'Deforestation: Agricultural expansion, timber logging, forest fires, and consequences',
      'Desertification: Removal of top fertile soil turning fertile land into desert',
      'Protected Areas: Wildlife Sanctuaries (Protection to animals), National Parks (Preservation of entire landscape & historic objects), Biosphere Reserves (Large multi-purpose conservation zones)',
      'The Pachmarhi Biosphere Reserve: Satpura National Park, Bori & Pachmarhi Sanctuaries',
      'Flora (Plants of an area: Teak, Sal, Mango, Jamun) vs Fauna (Animals: Leopard, Cheetal, Wild dog)',
      'Endemic Species: Species found exclusively in a restricted geographic region (e.g., Flying squirrel, Sal & Wild mango of Pachmarhi)',
      'The Red Data Book (IUCN record of endangered species) and Bird Migration (Arctic Tern, Siberian Crane)',
      'Recycling of Paper (17 trees save 1 ton of paper) and Reforestation'
    ],
    summaryNotes: `### Protected Areas Comparison:
1. **Wildlife Sanctuary:** A protected area where wild animals are protected from hunting and disturbances; limited human activities permitted.
2. **National Park:** A strictly protected reserve for wildlife where no human habitation, timber harvesting, or grazing is allowed.
   - **Satpura National Park:** India\'s first reserve forest; contains the finest Indian Teak wood and prehistoric rock shelters!
   - **Project Tiger (1973):** Launched by the Government of India to protect and revive tiger populations.
3. **Biosphere Reserve:** Large protected land area containing tribal communities living in harmony with nature (e.g., Pachmarhi Biosphere Reserve).
4. **Red Data Book:** The international reference source book published by the IUCN that maintains a record of all endangered animal and plant species.`,
    definitions: [
      'Endemic Species: Those species of plants and animals which are found exclusively in a particular geographical area and nowhere else naturally.',
      'Desertification: The gradual conversion of fertile land into arid desert due to deforestation and soil erosion.'
    ],
    formulas: [
      { name: 'Conservation Hierarchy', formula: '\\text{Biosphere Reserve} \\supset \\text{National Park} \\supset \\text{Wildlife Sanctuary}', explanation: 'Zoning scope of ecological protected areas.', units: 'Ecology' }
    ],
    solvedExamples: [
      {
        question: 'Why does deforestation lead to severe floods on one hand and droughts on the other?',
        solution: '1. Floods: Tree roots anchor topsoil and absorb rainwater. Without trees, rain washes topsoil into rivers, raising riverbeds and causing flash floods.\n2. Droughts: Fewer trees transpire less water into the atmosphere, leading to reduced cloud formation and erratic or diminished rainfall, creating agricultural droughts.',
        keyInsight: 'Trees regulate both the hydrological cycle and soil water percolation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c8-b3-01',
        subject: 'Biology',
        chapterId: 'c8-bio-03',
        chapterTitle: 'Conservation of Plants and Animals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which international book maintains a record of all endangered plant and animal species?',
        options: ['A) Green Data Book', 'B) Red Data Book', 'C) Blue Record Book', 'D) Nature Register'],
        correctAnswer: 'B',
        explanation: 'The Red Data Book, maintained by the IUCN, is the official international catalog documenting threatened and endangered biological species.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Cell Biology & Cytology',
    order: 4,
    title: 'Cell - Structure and Functions',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Class 7 Nutrition in Organisms',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Discovery of the cell by Robert Hooke (1665), cell theory basics, variation in cell number (unicellular vs multicellular), size (ostrich egg vs bacteria) and shape (spindle muscle, branched nerve cell, biconcave RBC), parts of a cell: cell membrane, cytoplasm, nucleus (chromosomes, genes, nucleolus), comparison of plant and animal cells (cell wall, chloroplasts, large central vacuole).',
    introduction: 'Just as bricks are assembled to build a palace, cells are assembled to make every living organism. In 1665, Robert Hooke observed cork bark under a primitive microscope and coined the term "cell". Cytology is the most critical foundation for NEET Biology.',
    topics: [
      'Discovery of the Cell: Robert Hooke (1665) examining slices of cork',
      'Organisms show Variety in Cell Number: Unicellular (Amoeba, Paramecium) vs Multicellular (Trillions of cells)',
      'Variety in Cell Shape: Amoeba (irregular/pseudopodia), RBCs (spherical/biconcave), Muscle cells (spindle), Nerve cells (elongated & branched)',
      'Cell Size: Smallest bacteria ($0.1 - 0.5\\text{ }\\mu\\text{m}$) to Largest cell (Ostrich egg, $170\\text{ mm} \\times 130\\text{ mm}$)',
      'Parts of the Cell: Plasma Membrane (Semi-permeable boundary), Cytoplasm (Jelly-like matrix housing organelles)',
      'The Nucleus: Nuclear membrane, Nucleoplasm, Nucleolus, and Chromatin threads (Chromosomes carrying Genes/DNA)',
      'Prokaryotic Cells (No nuclear membrane: Bacteria) vs Eukaryotic Cells (Well-defined nucleus: Plants, Animals)',
      'Plant Cell vs Animal Cell: Cell Wall (Cellulose rigidity), Plastids (Chloroplasts, Chromoplasts, Leucoplasts), and Large Central Vacuoles'
    ],
    summaryNotes: `### Core Cytological Comparison:
| Feature | Plant Cell | Animal Cell |
| :--- | :--- | :--- |
| **Cell Wall** | Present (Rigid cellulose layer) | **Absent** |
| **Plasma Membrane** | Present (Inside cell wall) | Present (Outer boundary) |
| **Plastids (Chloroplasts)** | Present (Green chlorophyll for photosynthesis) | **Absent** |
| **Vacuoles** | One **large permanent central vacuole** | Small, temporary vacuoles |
| **Centrosomes** | Absent | Present (Assists cell division) |
### The Nucleus:
- Surrounded by a double-layered **nuclear membrane** with nuclear pores.
- Contains the **nucleolus** and entangled thread-like structures called **chromatin**.
- During cell division, chromatin condenses into distinct rod-shaped **chromosomes** that carry **genes** (DNA) responsible for hereditary inheritance from parents to offspring!`,
    definitions: [
      'Cell: The basic structural, functional, and biological unit of all living organisms.',
      'Gene: A unit of inheritance in living organisms that controls the transfer of a hereditary characteristic from parents to offspring.'
    ],
    formulas: [
      { name: 'Microscopic Unit', formula: '1\\text{ }\\mu\\text{m} = 10^{-6}\\text{ m} = 10^{-3}\\text{ mm}', explanation: 'Micron scale for cellular dimensions.', units: 'Length' }
    ],
    solvedExamples: [
      {
        question: 'Why do plant cells have a rigid cell wall outside their plasma membrane, whereas animal cells do not?',
        solution: 'Plants cannot move to shelter from extreme heat, strong winds, rain, or atmospheric variations. The rigid outer cellulose cell wall provides structural support, mechanical strength, and prevents the cell from bursting in hypotonic rainwater environments.',
        keyInsight: 'The cell wall provides mechanical protection against fluctuating outdoor environments.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c8-b4-01',
        subject: 'Biology',
        chapterId: 'c8-bio-04',
        chapterTitle: 'Cell - Structure and Functions',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which organelle is present in plant cells to provide structural rigidity, but is absent in animal cells?',
        options: ['A) Mitochondria', 'B) Cell Wall', 'C) Nucleus', 'D) Ribosome'],
        correctAnswer: 'B',
        explanation: 'Plant cells possess a rigid outer cell wall composed of cellulose that protects the cell and gives it shape. Animal cells possess only a flexible cell membrane.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c8-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Endocrinology & Developmental Biology',
    order: 5,
    title: 'Reproduction and Adolescence in Animals',
    stage: 'foundation',
    classLevel: 'Class 8',
    priority: 'High priority',
    prerequisite: 'Cell - Structure and Functions',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Modes of animal reproduction (asexual vs sexual), male reproductive organs (testes, sperm ducts, penis, sperm structure), female reproductive organs (ovaries, oviducts/fallopian tubes, uterus, egg/ovum), internal vs external fertilization (frogs, fish), viviparous vs oviparous animals, metamorphosis in frogs and silkworms, adolescence and puberty, secondary sexual characteristics, endocrine glands and hormones (testosterone, estrogen, thyroxine, insulin, adrenaline, growth hormone), sex determination in humans (XX vs XY chromosomes).',
    introduction: 'From the fertilization of a single-cell zygote to the turbulent hormonal surge of adolescence, human development is guided by chemical messengers called hormones. Understanding gametogenesis and chromosomal sex determination is a core pillar of the NEET syllabus.',
    topics: [
      'Sexual Reproduction: Male Gamete (Sperm with head, middle piece, flagellum) and Female Gamete (Ovum/Egg)',
      'Male Reproductive System: Testes (Sperm & Testosterone production), Vas Deferens, Urethra, Penis',
      'Female Reproductive System: Pair of Ovaries (Ovulation), Fallopian Tubes (Site of Fertilization), Uterus (Embryo implantation)',
      'Internal Fertilization (Humans, cows, dogs, birds) vs External Fertilization (Aquatic frogs, fish shedding gametes in water)',
      'Viviparous Animals (Give birth to young ones) vs Oviparous Animals (Lay eggs)',
      'Metamorphosis: Egg → Tadpole → Adult Frog (Regulated by Thyroxine hormone requiring Iodine in water)',
      'Adolescence and Puberty: Sudden growth spurt, Adam\'s Apple (enlarged larynx in boys), sweat glands, secondary sexual characters',
      'Endocrine System & Hormones: Pituitary (Master gland / Growth hormone), Thyroid (Thyroxine - Goitre), Pancreas (Insulin - Diabetes), Adrenals (Adrenaline - Stress response)',
      'Sex Determination in Humans: 23 pairs of chromosomes; Father\'s sperm determines sex (X sperm $\\rightarrow$ Girl XX; Y sperm $\\rightarrow$ Boy XY)'
    ],
    summaryNotes: `### Core Developmental Biology:
1. **Fertilization & Implantation:**
   - **Fertilization:** The fusion of a sperm nucleus with an ovum nucleus takes place in the **Fallopian tube (Oviduct)**, producing a single-celled **Zygote**.
   - The zygote divides repeatedly into a hollow ball of cells called an **Embryo**, which embeds into the uterine wall (**Implantation**).
2. **Chromosomal Sex Determination in Humans:**
   - Humans have **46 chromosomes (23 pairs)** in each body cell.
   - 22 pairs are autosomes; the 23rd pair is the **Sex Chromosomes**.
   - Females have **XX**; Males have **XY**.
   - All human egg cells carry strictly an **X** chromosome.
   - Half of sperm cells carry **X**, and half carry **Y**.
   - If an X-carrying sperm fertilizes the egg $\\rightarrow$ **XX (Female child)**.
   - If a Y-carrying sperm fertilizes the egg $\\rightarrow$ **XY (Male child)**.
   - Scientifically, the **father\'s sperm alone determines the sex of the baby**!
3. **Endocrine Hormones:**
   - **Testosterone:** Secreted by testes in boys; triggers facial hair, deepening voice.
   - **Estrogen:** Secreted by ovaries in girls; triggers breast development, menstrual cycle.
   - **Insulin:** Regulates blood sugar levels. Deficiency causes **Diabetes**.
   - **Thyroxine:** Regulates metabolic rate. Requires **iodine**; deficiency causes swollen neck (**Goitre**).`,
    definitions: [
      'Metamorphosis: The drastic transformation of a larva or tadpole into an adult through distinct stages.',
      'Hormone: A chemical substance secreted by ductless endocrine glands directly into the bloodstream to reach target organs.'
    ],
    formulas: [
      { name: 'Sex Determination Scheme', formula: '\\text{Egg } (X) + \\text{Sperm } (X) \\rightarrow XX \\text{ (Girl)}; \\quad \\text{Egg } (X) + \\text{Sperm } (Y) \\rightarrow XY \\text{ (Boy)}', explanation: 'Chromosomal inheritance of biological sex.', units: 'Genetics' }
    ],
    solvedExamples: [
      {
        question: 'Why is it completely scientifically false and unfair to blame a mother for giving birth to a girl child in traditional societies?',
        solution: 'Human females possess only X sex chromosomes (XX), meaning all maternal egg cells carry an X chromosome. The male father produces two types of sperm in equal 50:50 proportions: 50% carry an X chromosome and 50% carry a Y chromosome. The genetic sex of the zygote is determined solely by whether an X-bearing or Y-bearing sperm fertilizes the egg.',
        keyInsight: 'The father\'s sperm determines biological sex.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c8-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c8-b5-01',
        subject: 'Biology',
        chapterId: 'c8-bio-05',
        chapterTitle: 'Reproduction and Adolescence in Animals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Where does the fertilization of an ovum by a sperm take place in the human female reproductive tract?',
        options: ['A) Ovary', 'B) Uterus', 'C) Fallopian tube (Oviduct)', 'D) Cervix'],
        correctAnswer: 'C',
        explanation: 'Fertilization (fusion of sperm and ovum to produce the zygote) takes place within the ampulla of the fallopian tube (oviduct).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
