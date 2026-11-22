import { Chapter } from '../../types';

export const CLASS_7_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c7-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Kinematics & Time',
    order: 1,
    title: 'Motion and Time',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Motion and Measurement',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Slow or fast motion, speed calculation, units of speed and time, measuring time with sundials & clocks, the simple pendulum, and distance-time graphs.',
    introduction: 'How do we know whether a bus is traveling faster than a bicycle? Speed quantifies how quickly an object covers distance. Galileo\'s discovery of the isochronous simple pendulum transformed modern timekeeping.',
    topics: [
      'Slow and Fast Motion: Speed Comparison',
      'Definition of Speed: Speed = Distance / Time (SI Unit: m/s, Practical Unit: km/h)',
      'Uniform vs Non-Uniform Motion',
      'Measurement of Time: Historic Sundials, Water Clocks, Quartz Clocks',
      'The Simple Pendulum: Oscillations, Amplitude, and Time Period ($T$)',
      'Plotting and Interpreting Distance-Time Graphs (Slope indicates speed)'
    ],
    summaryNotes: `### Core Kinematics Relations:
1. **Speed Formula:**
   $$\\text{Speed} = \\frac{\\text{Total Distance Covered}}{\\text{Total Time Taken}}$$
   - SI Unit: $\\text{m/s}$
   - Conversion: $1\\text{ km/h} = \\frac{5}{18}\\text{ m/s}$
2. **The Simple Pendulum:**
   - One complete to-and-fro motion is called an **oscillation**.
   - Time taken for one complete oscillation is called the **Time Period ($T$)**.
   - Galileo showed that the time period of a simple pendulum depends only on the **length of the string**, not on the mass of the bob or amplitude!
3. **Distance-Time Graphs:**
   - Straight diagonal line represents **uniform speed**.
   - Horizontal line parallel to time axis represents an object at **rest**.
   - Steeper slope represents higher speed.`,
    definitions: [
      'Speed: The distance covered by an object in a unit of time.',
      'Time Period of Pendulum: The time taken by the bob of a simple pendulum to complete one full oscillation.'
    ],
    formulas: [
      { name: 'Speed Equation', formula: 'v = \\frac{s}{t}', explanation: 'Calculates uniform or average speed.', units: 'm/s or km/h' },
      { name: 'Speed Unit Conversion', formula: '1\\text{ km/h} = \\frac{5}{18}\\text{ m/s}', explanation: 'Converts speed from km/h to SI unit m/s.', units: 'Factor' }
    ],
    solvedExamples: [
      {
        question: 'A simple pendulum takes 32 seconds to complete 20 oscillations. What is the time period of the pendulum?',
        solution: 'Number of oscillations = 20.\nTotal time taken = 32 s.\nTime period T = Total time / Number of oscillations = 32 / 20 = 1.6 seconds.',
        keyInsight: 'Divide total elapsed time by the number of oscillations to find the period of one oscillation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c7-p1-01',
        subject: 'Physics',
        chapterId: 'c7-phys-01',
        chapterTitle: 'Motion and Time',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'A car covers a distance of 180 km in 3 hours. Its speed in m/s is:',
        options: ['A) 60 m/s', 'B) 16.67 m/s', 'C) 20 m/s', 'D) 10 m/s'],
        correctAnswer: 'B',
        explanation: 'Speed = 180 km / 3 h = 60 km/h. Convert to m/s: 60 * (5/18) = 300 / 18 ≈ 16.67 m/s.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Thermal Physics',
    order: 2,
    title: 'Heat and Temperature Measurement',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Sorting Materials',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Hot vs cold, temperature, clinical & laboratory thermometers, heat transfer mechanisms: conduction, convection, and radiation, sea breeze and land breeze.',
    introduction: 'Our sense of touch is unreliable for judging temperature. Heat is a form of thermal energy that flows spontaneously from hotter bodies to cooler bodies through conduction, convection, and electromagnetic radiation.',
    topics: [
      'Heat vs Temperature: Measure of Degree of Hotness',
      'Clinical Thermometer (Range: 35°C to 42°C, Kink prevents backflow of mercury)',
      'Laboratory Thermometer (Range: -10°C to 110°C)',
      'Conduction: Transfer through direct molecular collisions in solids (Thermal conductors vs insulators)',
      'Convection: Transfer via mass fluid movement in liquids and gases',
      'Sea Breeze (Daytime) and Land Breeze (Nighttime)',
      'Radiation: Transfer without material medium (Solar radiation, Dark vs light clothes)'
    ],
    summaryNotes: `### Core Thermal Principles:
1. **Clinical Thermometer:** Specifically designed to measure human body temperature. Normal body temperature is **37°C (98.6°F)**. Has a constricting "kink" near the bulb to prevent mercury from dropping when removed from the patient\'s mouth.
2. **Three Modes of Heat Transfer:**
   - **Conduction:** Heat transfer in solids from hotter end to colder end without movement of particles. Metals are good conductors; wood, plastic, and air are insulators.
   - **Convection:** Heat transfer in fluids (liquids/gases) where heated lower density fluid rises and colder denser fluid sinks, forming convection currents.
   - **Radiation:** Heat transfer by infrared waves requiring **no material medium** (how solar energy crosses the vacuum of space).
3. **Coastal Breezes:**
   - **Sea Breeze (Day):** Land heats up faster than water. Warm air rises over land, cool breeze blows from sea to land.
   - **Land Breeze (Night):** Land cools faster than water. Warm air rises over sea, cool breeze blows from land to sea.`,
    definitions: [
      'Temperature: A reliable measure of the degree of hotness or coldness of an object.',
      'Convection: The transfer of heat in liquids and gases by the actual physical movement of the medium\'s particles.'
    ],
    formulas: [
      { name: 'Celsius-Fahrenheit Relation', formula: '\\frac{C}{5} = \\frac{F - 32}{9}', explanation: 'Converts between Celsius and Fahrenheit temperature scales.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'Why do we prefer wearing light-colored clothes in summer and dark clothes in winter?',
        solution: 'Light-colored clothes reflect most of the radiant heat falling on them, keeping us cool in summer. Dark clothes absorb more thermal radiation from the surroundings, helping retain body heat in winter.',
        keyInsight: 'Dark surfaces absorb and emit thermal radiation better than light reflective surfaces.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c7-p2-01',
        subject: 'Physics',
        chapterId: 'c7-phys-02',
        chapterTitle: 'Heat and Temperature Measurement',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the function of the "kink" in a clinical thermometer?',
        options: ['A) To increase accuracy', 'B) To prevent mercury level from falling on its own', 'C) To make the stem sturdy', 'D) To magnify the reading'],
        correctAnswer: 'B',
        explanation: 'The constriction or kink prevents the mercury thread from flowing back into the bulb when the thermometer is removed from the patient\'s mouth, allowing an accurate reading.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electromagnetism',
    order: 3,
    title: 'Electric Current and Its Effects',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Electricity and Circuits',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Circuit symbols, heating effect of electric current, Nichrome wire, electric fuse and MCBs, magnetic effect of electric current (Oersted experiment), electromagnets, and electric bells.',
    introduction: 'Electric current does more than light up bulbs. It produces significant heat in resistors and creates magnetic fields around wires. Hans Christian Oersted\'s discovery in 1820 united electricity and magnetism into a single science.',
    topics: [
      'Standard Circuit Diagram Symbols: Cell, Battery, Switch, Bulb, Resistor',
      'Heating Effect of Electric Current: Joule Heating in Nichrome Heating Elements',
      'Safety Devices: Electric Fuse (Low melting point wire) and Modern MCBs',
      'Oersted\'s Experiment: Deflection of Compass Needle near Current-Carrying Wire',
      'The Electromagnet: Solenoid with Soft Iron Core',
      'Working of an Electric Bell: Gong, Striker, and Interrupter Contact'
    ],
    summaryNotes: `### Two Major Effects of Current:
1. **Heating Effect:**
   - When electric current flows through a high-resistance wire (like Nichrome), the wire gets hot and emits thermal energy. Used in room heaters, electric irons, geysers, and toasters.
   - **Electric Fuse:** A vital safety wire made of a special lead-tin alloy with a **low melting point**. When excessive current passes, it melts and breaks the circuit, preventing electrical fires.
   - **MCB (Miniature Circuit Breaker):** Electromagnetic switches that trip automatically when safe current thresholds are exceeded.
2. **Magnetic Effect (Electromagnetism):**
   - An electric current flowing through a wire produces a magnetic field around it.
   - **Electromagnet:** An insulated wire wound around an iron nail acts as a strong magnet as long as current flows. When current stops, magnetism vanishes immediately (temporary magnet). Used in cranes for scrap iron, MRI machines, and electric bells.`,
    definitions: [
      'Electric Fuse: A safety device in an electric circuit that melts to break the circuit when current exceeds safe limits.',
      'Electromagnet: A temporary magnet created by winding an insulated current-carrying coil around a ferromagnetic soft iron core.'
    ],
    formulas: [
      { name: 'Joule Heating Relation', formula: 'H \\propto I^2 R t', explanation: 'Heat generated in a resistor is proportional to square of current, resistance, and time.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'Why should a copper wire never be used as a replacement fuse wire in a fuse cartridge?',
        solution: 'Copper has a very high electrical conductivity and a very high melting point (1085°C). It will not melt even when dangerously high surge currents flow, failing to protect expensive appliances and risking an electrical fire.',
        keyInsight: 'Fuse wires must have a low melting point so they break safely during current surges.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c7-p3-01',
        subject: 'Physics',
        chapterId: 'c7-phys-03',
        chapterTitle: 'Electric Current and Its Effects',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Who first discovered that a compass needle deflects when placed near a current-carrying wire?',
        options: ['A) Isaac Newton', 'B) Hans Christian Oersted', 'C) Michael Faraday', 'D) Thomas Edison'],
        correctAnswer: 'B',
        explanation: 'Hans Christian Oersted discovered the magnetic effect of electric current in 1820 when he noticed a compass needle twitch near a powered circuit.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Optics',
    order: 4,
    title: 'Light and Reflection',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Light, Shadows and Reflections',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Plane mirrors, virtual & erect images, lateral inversion, spherical mirrors (concave and convex), real vs virtual images, lenses, and dispersion of white light (Newton’s disc).',
    introduction: 'Look into a plane mirror: your left ear appears as your right ear! Curved mirrors and transparent lenses bend light to magnify distant galaxies or focus dental cavities. White sunlight is actually composed of seven distinct spectral colors.',
    topics: [
      'Reflection by Plane Mirrors: Virtual, Erect, Same size, and Lateral Inversion',
      'Spherical Mirrors: Concave Mirror (Converging) vs Convex Mirror (Diverging)',
      'Real Images (Formed on a screen) vs Virtual Images (Cannot be caught on screen)',
      'Applications of Spherical Mirrors: Dentist\'s mirror (Concave), Rear-view vehicle mirror (Convex)',
      'Convex Lens (Converging / Magnifying glass) vs Concave Lens (Diverging)',
      'Sunlight: White or Coloured? Prism Dispersion (VIBGYOR) and Newton\'s Colour Disc'
    ],
    summaryNotes: `### Core Optical Facts:
1. **Plane Mirror Image Properties:**
   - Virtual and erect.
   - Same size as the object.
   - Formed at the same distance behind the mirror as the object is in front of it.
   - **Laterally Inverted:** Left appears right, right appears left (why "AMBULANCE" is written reversed on ambulances!).
2. **Spherical Mirrors:**
   - **Concave Mirror:** Can form both real (inverted) and virtual (magnified, erect) images. Used by dentists, car headlights, and solar furnaces.
   - **Convex Mirror:** Always forms a **virtual, erect, and diminished** (smaller) image covering a wide field of view. Used as rear-view mirrors in cars and bikes.
3. **Dispersion of Light:**
   - White sunlight splits into seven colors: **VIBGYOR** (Violet, Indigo, Blue, Green, Yellow, Orange, Red) when passing through a triangular glass prism.`,
    definitions: [
      'Lateral Inversion: The phenomenon in which the left side of an object appears as the right side in its mirror image.',
      'Real Image: An optical image formed by the actual intersection of reflected or refracted light rays that can be captured onto a screen.'
    ],
    formulas: [
      { name: 'Dispersion Spectrum', formula: '\\text{White Light } \\xrightarrow{Prism} \\text{VIBGYOR}', explanation: 'Separation of polychromatic light into constituent wavelengths.', units: 'Spectrum' }
    ],
    solvedExamples: [
      {
        question: 'Why are convex mirrors preferred as side rear-view mirrors in automobiles?',
        solution: 'Convex mirrors always form an erect and diminished image regardless of object distance, providing drivers with a vastly wider field of view of traffic behind them than a flat plane mirror can.',
        keyInsight: 'Convex mirrors give a wider field of view with upright images.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c7-p4-01',
        subject: 'Physics',
        chapterId: 'c7-phys-04',
        chapterTitle: 'Light and Reflection',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which mirror is used by dentists to view magnified teeth?',
        options: ['A) Convex mirror', 'B) Plane mirror', 'C) Concave mirror', 'D) Cylindrical mirror'],
        correctAnswer: 'C',
        explanation: 'When held close to a tooth, a concave mirror forms a virtual, erect, and highly magnified image, allowing dentists to spot tiny cavities.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Atmospheric Physics & Fluid Mechanics',
    order: 5,
    title: 'Wind, Storms and Cyclones',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'Basic priority',
    prerequisite: 'Class 6 Air Around Us',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Air pressure, Bernoullis principle (high-speed winds are accompanied by reduced pressure), uneven heating of Earth, thunderstorm and cyclone formation, anemometer, and disaster preparedness.',
    introduction: 'Why do tin roofs blow off during intense gales? Air exerts tremendous pressure in all directions. When air moves rapidly, its pressure drops. Understanding atmospheric pressure gradients explains monsoon winds, thunderstorms, and tropical cyclones.',
    topics: [
      'Air Exerts Pressure: Demonstration with Crushed Tin Can',
      'High-Speed Winds are Accompanied by Reduced Air Pressure',
      'Air Expands on Heating and Becomes Lighter (Hot air rises)',
      'Wind Currents are Generated by Uneven Heating of Earth (Equator vs Poles)',
      'Formation of Thunderstorms and Tropical Cyclones (The Eye of the Cyclone)',
      'Wind Speed Measurement: Anemometer and Meteorological Satellites'
    ],
    summaryNotes: `### Core Atmospheric Physics:
1. **Air Pressure Principle:** Air moves from regions of **high air pressure** to regions of **low air pressure**. The greater the pressure difference, the faster the wind blows.
2. **Bernoulli Effect Foundation:** High-speed wind blowing over a rooftop reduces the air pressure above the roof. The higher atmospheric pressure inside the house pushes the roof upward, blowing it away!
3. **Uneven Solar Heating:**
   - Equator receives maximum solar heat; warm air rises, creating low pressure. Cooler air from $30^\\circ$ latitude rushes in, creating global wind belts.
   - Land heats faster than sea in summer, drawing moisture-laden monsoon winds inland.
4. **Cyclone Structure:** A revolving violent storm of low pressure surrounded by powerful rotating wind bands up to $150 - 250\\text{ km/h}$. The calm central region is called the **Eye of the Cyclone**.`,
    definitions: [
      'Anemometer: An instrument used by meteorologists to measure wind speed.',
      'Cyclone: A large-scale violent atmospheric vortex characterized by low pressure at the center surrounded by inward-spiraling high-speed winds.'
    ],
    formulas: [
      { name: 'Wind Movement Direction', formula: '\\text{Wind Flow: High Pressure } (P_{high}) \\longrightarrow \\text{Low Pressure } (P_{low})', explanation: 'Barometric pressure gradient rule.', units: 'Flow' }
    ],
    solvedExamples: [
      {
        question: 'Why does a tin can filled with boiling water crush when cold water is poured over its closed lid?',
        solution: 'Cold water condenses the steam inside into a small amount of liquid water, drastically reducing the internal air pressure. The much higher external atmospheric pressure crushes the can inwards.',
        keyInsight: 'Pressure imbalance between inside and outside crushes closed containers.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c7-p5-01',
        subject: 'Physics',
        chapterId: 'c7-phys-05',
        chapterTitle: 'Wind, Storms and Cyclones',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'When wind blows at high speed over the roof of a hut, the pressure above the roof:',
        options: ['A) Increases', 'B) Decreases', 'C) Remains unchanged', 'D) Becomes zero'],
        correctAnswer: 'B',
        explanation: 'According to fluid pressure principles, high-speed fluid motion is accompanied by a decrease in static pressure above the roof.',
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
    id: 'c7-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Acids, Bases & Salts',
    order: 1,
    title: 'Acids, Bases and Salts',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Sorting Materials',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Sour acids, bitter & soapy bases, natural indicators (litmus, turmeric, China rose), synthetic indicators (phenolphthalein), neutralization reactions, and everyday applications.',
    introduction: 'The word "acid" comes from the Latin "acere" meaning sour. Bases taste bitter and feel soapy between fingers. Understanding how acids and bases neutralize each other explains treating ant bites, soil acidity, and heartburn.',
    topics: [
      'Acids in Nature: Acetic acid (Vinegar), Citric acid (Lemons), Lactic acid (Curd), Formic acid (Ant sting)',
      'Bases: Calcium hydroxide (Limewater), Sodium hydroxide (Soap), Magnesium hydroxide (Milk of Magnesia)',
      'Natural Indicators: Litmus (from Lichens), Turmeric paper, China Rose petal solution',
      'Synthetic Indicator: Phenolphthalein (Pink in base, colorless in acid)',
      'Neutralization Reaction: Acid + Base → Salt + Water + Heat',
      'Neutralization in Everyday Life: Indigestion (Antacids), Ant bite (Calamine), Soil treatment (Slaked lime), Factory wastes'
    ],
    summaryNotes: `### Core Indicator Responses:
- **Litmus Paper:**
  * Acid turns **blue litmus RED**.
  * Base turns **red litmus BLUE**.
- **Turmeric Paper:**
  * Yellow in neutral and acidic solutions; turns **RED** in basic solutions (soap!).
- **China Rose Indicator:**
  * Turns acidic solutions **dark pink (magenta)** and basic solutions **green**.
- **Neutralization Reaction:**
  $$\\text{Acid} + \\text{Base} \\longrightarrow \\text{Salt} + \\text{Water} + \\text{Heat}$$
  Example: $HCl + NaOH \\longrightarrow NaCl + H_2O + \\text{Heat}$
### Practical Neutralization:
- **Ant Sting:** Injects formic acid. Neutralized by rubbing moist baking soda ($NaHCO_3$) or calamine solution (zinc carbonate).`,
    definitions: [
      'Indicator: A chemical substance that shows different colors in acidic, basic, and neutral solutions.',
      'Neutralization: The chemical reaction between an acid and a base that produces a salt and water with the evolution of heat.'
    ],
    formulas: [
      { name: 'Neutralization Equation', formula: '\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water} + \\Delta Q', explanation: 'General exothermic neutralization reaction.', units: 'Reaction' }
    ],
    solvedExamples: [
      {
        question: 'Why does a yellow curry stain on a white shirt turn reddish-brown when washed with soap?',
        solution: 'Turmeric in the curry is a natural acid-base indicator. Soap is basic in nature. Turmeric turns reddish-brown when exposed to a basic medium like soap.',
        keyInsight: 'Turmeric changes color from yellow to reddish-brown in basic solutions.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c7-c1-01',
        subject: 'Chemistry',
        chapterId: 'c7-chem-01',
        chapterTitle: 'Acids, Bases and Salts',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the color of phenolphthalein indicator in a sodium hydroxide (basic) solution?',
        options: ['A) Colorless', 'B) Pink', 'C) Yellow', 'D) Blue'],
        correctAnswer: 'B',
        explanation: 'Phenolphthalein turns bright magenta-pink in basic solutions and remains colorless in acidic or neutral solutions.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Chemical Transformations',
    order: 2,
    title: 'Physical and Chemical Changes',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Changes Around Us',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Physical properties vs chemical properties, reversible physical changes, chemical changes with new substances, burning of magnesium ribbon, reaction between copper sulphate and iron, rusting of iron, galvanization, and crystallization.',
    introduction: 'Every change in matter is classified as physical or chemical. While physical changes alter only state or size, chemical changes break and form bonds to create entirely new substances with distinct identities.',
    topics: [
      'Physical Changes: Changes in shape, size, color, or state without forming new substances',
      'Chemical Changes: Chemical reactions producing one or more new substances',
      'Demonstration 1: Burning of Magnesium ribbon in air ($2Mg + O_2 \\rightarrow 2MgO$)',
      'Demonstration 2: Iron nail in Copper Sulphate solution ($Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$)',
      'Demonstration 3: Vinegar + Baking Soda producing $CO_2$ (turns limewater milky)',
      'Rusting of Iron: Conditions ($4Fe + 3O_2 + 2xH_2O \\rightarrow 2Fe_2O_3\\cdot xH_2O$) & Prevention by Galvanization',
      'Crystallization: Preparation of pure Copper Sulphate crystals'
    ],
    summaryNotes: `### Core Chemical Demonstrations:
1. **Burning Magnesium:**
   - Silvery magnesium ribbon burns with a dazzling white flame to form white magnesium oxide powder:
     $$2Mg + O_2 \\longrightarrow 2MgO$$
   - Mixing ash in water creates basic magnesium hydroxide: $MgO + H_2O \\rightarrow Mg(OH)_2$ (turns red litmus blue).
2. **Displacement Demonstration:**
   - Blue copper sulphate solution turns light green when an iron nail is immersed:
     $$Fe + CuSO_4 \\text{ (Blue)} \\longrightarrow FeSO_4 \\text{ (Green)} + Cu \\text{ (Brown deposit on nail)}$$
3. **Rusting of Iron:**
   - Requires both **Oxygen (air)** and **Moisture (water)**!
   - Prevention: Painting, greasing, or **Galvanization** (depositing a protective layer of zinc metal onto iron).
4. **Crystallization:**
   - A physical method used to obtain large, pure crystals of a dissolved substance from an impure saturated solution.`,
    definitions: [
      'Chemical Change: A change in which one or more new substances with completely different properties are formed.',
      'Galvanization: The process of coating an iron or steel surface with a thin layer of zinc to prevent rusting.'
    ],
    formulas: [
      { name: 'Displacement Reaction', formula: 'Fe + CuSO_4 \\rightarrow FeSO_4 + Cu', explanation: 'Iron displaces less reactive copper from its salt solution.', units: 'Chemical equation' }
    ],
    solvedExamples: [
      {
        question: 'Why does passing gas evolved from vinegar + baking soda through limewater turn it milky?',
        solution: 'The reaction produces carbon dioxide ($CO_2$). When passed through limewater ($Ca(OH)_2$), it reacts to form insoluble white calcium carbonate ($CaCO_3$) precipitate, turning the liquid milky.',
        keyInsight: 'Formation of white CaCO₃ is the definitive test for carbon dioxide gas.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c7-c2-01',
        subject: 'Chemistry',
        chapterId: 'c7-chem-02',
        chapterTitle: 'Physical and Chemical Changes',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which two environmental conditions are both mandatory for iron to rust?',
        options: ['A) Oxygen and Nitrogen', 'B) Oxygen and Moisture', 'C) Water and Carbon dioxide', 'D) Heat and Sunlight'],
        correctAnswer: 'B',
        explanation: 'Rusting is an electrochemical oxidation requiring both oxygen and water (moisture). If either is absent, iron does not rust.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Hydrology & Resources',
    order: 3,
    title: 'Water: A Precious Resource',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'Basic priority',
    prerequisite: 'Class 6 Water and its Properties',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Forms of water (solid, liquid, gas), groundwater as important water source, water table, infiltration, aquifer, causes of depletion of water table, drip irrigation.',
    introduction: 'World Water Day is celebrated on March 22nd to remind humanity that water is dwindling. Drilling borewells deeper and deeper reveals alarming depletion of groundwater reservoirs. Wise water management is critical for survival.',
    topics: [
      'Forms of Water: Ice, Liquid Water, Water Vapor',
      'Groundwater: The Hidden Reservoir of Usable Freshwater',
      'Water Table and Aquifers: Water stored between layers of hard rock',
      'Infiltration: Natural recharging of groundwater through soil',
      'Depletion of Water Table: Population growth, industrialization, deforestation, erratic rainfall',
      'Water Management: Drip Irrigation, Sprinkler Systems, Bawris (Traditional stepwells)'
    ],
    summaryNotes: `### Core Hydrogeology:
- **Water Table:** The upper limit of the underground layer where all pores and spaces between soil and rocks are completely saturated with water.
- **Infiltration:** The natural process of seeping of rainwater through soil layers to replenish groundwater.
- **Aquifer:** A water-bearing stratum of permeable rock, sand, or gravel capable of yielding groundwater to borewells.
- **Drip Irrigation:** Modern micro-irrigation technique that delivers water drop-by-drop directly to plant roots, eliminating evaporation losses and saving up to $70\\%$ water.`,
    definitions: [
      'Water Table: The upper surface of the underground zone of saturation.',
      'Infiltration: The process by which water on the ground surface enters and trickles into the soil.'
    ],
    formulas: [
      { name: 'Groundwater Recharge', formula: '\\Delta W_{aquifer} = \\text{Infiltration} - \\text{Extraction}', explanation: 'Sustainability condition for underground aquifers.', units: 'Volume balance' }
    ],
    solvedExamples: [
      {
        question: 'How does drip irrigation help conserve water in dry agricultural regions?',
        solution: 'Drip irrigation uses narrow pipes with emitters that release water directly onto the root zones drop by drop. This prevents surface runoff, weed growth, and evaporation, maximizing water use efficiency.',
        keyInsight: 'Direct root delivery stops evaporation and runoff losses.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c7-c3-01',
        subject: 'Chemistry',
        chapterId: 'c7-chem-03',
        chapterTitle: 'Water: A Precious Resource',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The process of seeping of rainwater into the ground is called:',
        options: ['A) Precipitation', 'B) Infiltration', 'C) Evaporation', 'D) Transpiration'],
        correctAnswer: 'B',
        explanation: 'Infiltration is the seeping of water through soil and rock layers to recharge underground water tables.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Environmental Engineering',
    order: 4,
    title: 'Wastewater Story & Sanitation',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'Basic priority',
    prerequisite: 'Water: A Precious Resource',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Sewage and contaminants, open drain hazards, Wastewater Treatment Plant (WWTP) stages: bar screens, grit removal, sedimentation, aeration with aerobic bacteria, activated sludge, biogas, and vermi-processing toilets.',
    introduction: 'Every time we wash clothes, flush toilets, or rinse vegetables, clean water turns into murky wastewater. Untreated sewage pollutes rivers and spreads deadly epidemics like cholera. Modern Wastewater Treatment Plants use physical, chemical, and biological filtration.',
    topics: [
      'What is Sewage? Complex mixture containing suspended solids, organic and inorganic impurities',
      'Diseases Caused by Poor Sanitation: Cholera, Typhoid, Polio, Meningitis, Hepatitis',
      'WWTP Physical Stage: Bar Screens (Plastic/rags removal) and Grit/Sand Separation Chamber',
      'Sedimentation: Clarified water and Sludge collection (Scraper)',
      'Biological Stage: Aeration tank where aerobic bacteria consume organic waste',
      'Anaerobic Sludge Digestion: Production of Biogas (Methane) fuel and dry organic manure'
    ],
    summaryNotes: `### Stages of Wastewater Treatment (WWTP):
1. **Screening:** Wastewater passes through bar screens to remove large debris (sticks, plastic cans, napkins).
2. **Grit & Sand Removal:** Speed of water is decreased in a grit chamber, allowing gravel and pebbles to settle.
3. **Primary Clarifier:** Heavier solid feces settle at the bottom as **sludge**, while oils float as scum (removed by skimmer).
4. **Aeration Tank:** Air is pumped in to help aerobic bacteria multiply and digest human waste, food scraps, and soaps.
5. **Secondary Settling:** Bacteria settle down as **activated sludge** ($97\\%$ water). Clean clarified water is discharged or disinfected with Chlorine or Ozone before release.`,
    definitions: [
      'Sewage: Liquid waste containing dissolved and suspended impurities from domestic, industrial, and agricultural sources.',
      'Activated Sludge: The biologically active settled mass of microorganisms in secondary wastewater treatment.'
    ],
    formulas: [
      { name: 'Disinfection Reaction', formula: '\\text{Clarified Water} + Cl_2 \\text{ / } O_3 \\longrightarrow \\text{Disinfected Effluent}', explanation: 'Chemical pathogen destruction before river release.', units: 'Water purity' }
    ],
    solvedExamples: [
      {
        question: 'Why should used cooking oil and fats never be poured down kitchen washbasin drains?',
        solution: 'Cooking oils and fats harden as they cool, coating and clogging sewer pipes. In open drains, they clog soil pores and block filtration of water, creating foul odors and breeding grounds for flies.',
        keyInsight: 'Oils solidify and obstruct sewer pipes and soil pores.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c7-c4-01',
        subject: 'Chemistry',
        chapterId: 'c7-chem-04',
        chapterTitle: 'Wastewater Story & Sanitation',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which chemical is commonly added to clarified water to disinfect it from disease-causing microbes?',
        options: ['A) Sodium bicarbonate', 'B) Chlorine or Ozone', 'C) Calcium carbonate', 'D) Sulphuric acid'],
        correctAnswer: 'B',
        explanation: 'Chlorine and ozone are powerful disinfectants that kill bacteria and pathogens in treated wastewater before discharge.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Chemical Language & Symbols',
    order: 5,
    title: 'Elements, Compounds and Chemical Symbols',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Sorting Materials',
    totalConcepts: 5,
    durationHours: 3.5,
    description: 'Atoms, molecules, chemical symbols of elements (Berzelius system), atomicity, molecular formulas of common compounds, writing simple chemical equations, and word equations.',
    introduction: 'Chemistry has its own universal alphabet. Jöns Jacob Berzelius devised the system of using English and Latin initials for chemical elements. Learning chemical symbols and molecular formulas lays the foundation for future stoichiometry.',
    topics: [
      'Atoms: The Smallest Building Blocks of Elements',
      'Molecules of Elements ($H_2, O_2, N_2, O_3, P_4, S_8$) and Atomicity',
      'Chemical Symbols from English and Latin Names: $Fe$ (Ferrum), $Cu$ (Cuprum), $Na$ (Natrium), $K$ (Kalium)',
      'Compounds and Fixed Proportions: Water ($H_2O$), Carbon dioxide ($CO_2$), Common salt ($NaCl$)',
      'Writing Chemical Formulas of Simple Molecules',
      'Balancing Simple Word Equations into Chemical Equations'
    ],
    summaryNotes: `### Core Chemical Nomenclature:
1. **Latin Roots for Common Symbols:**
   - Sodium $\\rightarrow$ **Na** (Natrium)
   - Potassium $\\rightarrow$ **K** (Kalium)
   - Iron $\\rightarrow$ **Fe** (Ferrum)
   - Copper $\\rightarrow$ **Cu** (Cuprum)
   - Silver $\\rightarrow$ **Ag** (Argentum)
   - Gold $\\rightarrow$ **Au** (Aurum)
   - Lead $\\rightarrow$ **Pb** (Plumbum)
2. **Atomicity:** The number of atoms present in one molecule of an element.
   - Monoatomic: Helium ($He$), Neon ($Ne$), Argon ($Ar$).
   - Diatomic: Hydrogen ($H_2$), Oxygen ($O_2$), Nitrogen ($N_2$).
   - Triatomic: Ozone ($O_3$).
   - Polyatomic: Phosphorus ($P_4$), Sulphur ($S_8$).`,
    definitions: [
      'Atomicity: The total number of atoms constituting a single molecule of an element or compound.',
      'Compound: A pure substance made of two or more elements chemically combined in a fixed ratio by mass.'
    ],
    formulas: [
      { name: 'Molecular Formula Notation', formula: 'A_x B_y', explanation: 'Expresses stoichiometric atom ratios in a pure compound.', units: 'Formula' }
    ],
    solvedExamples: [
      {
        question: 'State the atomicity of an Ozone molecule (O₃) and a Sulphur molecule (S₈).',
        solution: 'Ozone has 3 oxygen atoms per molecule, so its atomicity is 3 (triatomic). Sulphur has 8 sulfur atoms per molecule, so its atomicity is 8 (polyatomic).',
        keyInsight: 'Atomicity is the subscript count in the element\'s molecular formula.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c7-c5-01',
        subject: 'Chemistry',
        chapterId: 'c7-chem-05',
        chapterTitle: 'Elements, Compounds and Chemical Symbols',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the chemical symbol for the element Potassium derived from its Latin name Kalium?',
        options: ['A) P', 'B) Po', 'C) K', 'D) Pt'],
        correctAnswer: 'C',
        explanation: 'Potassium\'s symbol is K, derived from its Latin name Natrium/Kalium.',
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
    id: 'c7-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Number Systems',
    order: 1,
    title: 'Integers & Operations',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Whole Numbers & Number Line',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Negative numbers, integers on number line, addition & subtraction rules, multiplication & division of integers, algebraic properties (closure, commutative, associative, distributive), and sign rules.',
    introduction: 'Temperatures can fall below freezing, and financial balances can enter debit. Integers ($\\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}$) extend the number line indefinitely in both directions.',
    topics: [
      'Representation of Integers on the Number Line',
      'Rules for Addition and Subtraction of Positive and Negative Integers',
      'Multiplication of Integers: Sign Rules ($+ \\times - = -$, $- \\times - = +$)',
      'Division of Integers and Undefined Division by Zero',
      'Properties of Multiplication: Closure, Commutative, Associative, Distributive',
      'Multiplication by Zero and Multiplicative Identity (1)'
    ],
    summaryNotes: `### Golden Sign Rules:
1. **Multiplication / Division:**
   - $(\\text{Positive}) \\times (\\text{Positive}) = \\text{Positive}$
   - $(\\text{Negative}) \\times (\\text{Negative}) = \\text{Positive}$
   - $(\\text{Positive}) \\times (\\text{Negative}) = \\text{Negative}$
   - If negative signs appear an **odd number of times**, product is **negative**.
   - If negative signs appear an **even number of times**, product is **positive**.
2. **Distributive Property:**
   $$a \\times (b + c) = (a \\times b) + (a \\times c)$$
   $$a \\times (b - c) = (a \\times b) - (a \\times c)$$`,
    definitions: [
      'Integers: The collection of positive whole numbers, zero, and negative whole numbers.',
      'Additive Inverse: The negative of an integer a, such that a + (-a) = 0.'
    ],
    formulas: [
      { name: 'Integer Multiplication Sign Rule', formula: '(-a) \\times (-b) = +(a \\times b)', explanation: 'Product of two negative integers is always positive.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate using suitable properties: (-48) × 26 + (-48) × (-36).',
        solution: 'Use distributive property: a*b + a*c = a*(b + c).\nHere a = -48, b = 26, c = -36.\n(-48) * [26 + (-36)] = (-48) * (-10) = +480.',
        keyInsight: 'Factoring out common terms with the distributive law simplifies arithmetic.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c7-m1-01',
        subject: 'Mathematics',
        chapterId: 'c7-math-01',
        chapterTitle: 'Integers & Operations',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Evaluate: (-1) × (-1) × (-1) × (-1) × (-1) (5 times):',
        options: ['A) 1', 'B) -1', 'C) 5', 'D) -5'],
        correctAnswer: 'B',
        explanation: 'Multiplying negative one an odd number of times (5 times) yields -1.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Rational Numbers',
    order: 2,
    title: 'Fractions and Decimals',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Fractions and Decimals',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Multiplication of fractions, fraction as operator "of", division of fractions and reciprocals, multiplication of decimal numbers, division of decimals by 10, 100, 1000 and decimal by decimal.',
    introduction: 'In higher physics and engineering, measurements almost never come in clean integers. Mastering cross-multiplication, reciprocals, and decimal conversions ensures calculation speed in JEE.',
    topics: [
      'Multiplication of a Fraction by a Whole Number and by another Fraction',
      'The "of" Operator as Multiplication (e.g., 1/2 of 10)',
      'Reciprocal of a Fraction ($a/b \\rightarrow b/a$)',
      'Division of Fractions: Invert the Divisor and Multiply',
      'Multiplication of Decimal Numbers: Counting Total Decimal Places',
      'Division of Decimal Numbers by Whole Numbers and other Decimals'
    ],
    summaryNotes: `### Core Computational Rules:
1. **Fraction Multiplication:**
   $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$
2. **Fraction Division:**
   $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$
3. **Decimals Multiplication:**
   - Multiply the numbers ignoring decimal points.
   - Count the sum of decimal digits in both multiplicands.
   - Place decimal point counting from the rightmost digit of the product.
4. **Decimals Division:**
   - Shift the decimal point of the divisor to make it an integer, shifting the dividend\'s decimal point by the same number of places to the right.`,
    definitions: [
      'Reciprocal: Two non-zero numbers whose product is 1 are reciprocals of each other.',
      'Improper Fraction: A fraction whose numerator is greater than or equal to its denominator.'
    ],
    formulas: [
      { name: 'Division Rule for Fractions', formula: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}', explanation: 'Multiplying by reciprocal of divisor.', units: 'Rational' }
    ],
    solvedExamples: [
      {
        question: 'Solve: 3/5 ÷ 1/2.',
        solution: 'Reciprocal of divisor 1/2 is 2/1. Multiply: (3/5) * (2/1) = 6/5 = 1 1/5.',
        keyInsight: 'Invert the divisor and multiply.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c7-m2-01',
        subject: 'Mathematics',
        chapterId: 'c7-math-02',
        chapterTitle: 'Fractions and Decimals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Evaluate: 0.2 × 0.04:',
        options: ['A) 0.8', 'B) 0.08', 'C) 0.008', 'D) 0.0008'],
        correctAnswer: 'C',
        explanation: '2 * 4 = 8. Total decimal places = 1 (in 0.2) + 2 (in 0.04) = 3 decimal places. Result = 0.008.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 3,
    title: 'Simple Linear Equations',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Integers and Operations',
    totalConcepts: 5,
    durationHours: 4.0,
    description: 'Setting up algebraic equations, variable and constant concepts, balance scale method, method of transposition, and solving word problems on age, money, and geometry.',
    introduction: 'Equations are mathematical balance scales. An unknown quantity $x$ on one side balances known quantities on the other. Transposing terms across the equals sign is the primary technique of all mathematical problem solving.',
    topics: [
      'What is an Equation? Equality sign ($=$) separating LHS and RHS',
      'Trial and Error Method vs Systematic Solving',
      'The Balancing Method: Performing Identical Operations on Both Sides',
      'Method of Transposition: Changing Signs When Crossing the Equals Sign',
      'Translating Real-World Word Problems into Linear Equations'
    ],
    summaryNotes: `### Core Rules of Transposition:
1. Adding a term on LHS becomes **subtraction** on RHS:
   $$x + a = b \\implies x = b - a$$
2. Subtracting a term on LHS becomes **addition** on RHS:
   $$x - a = b \\implies x = b + a$$
3. Multiplication on LHS becomes **division** on RHS:
   $$ax = b \\implies x = \\frac{b}{a}$$
4. Division on LHS becomes **multiplication** on RHS:
   $$\\frac{x}{a} = b \\implies x = ab$$`,
    definitions: [
      'Linear Equation: An algebraic equation in which the highest power of the variable is 1.',
      'Root / Solution: The value of the variable that satisfies the equation and makes LHS equal to RHS.'
    ],
    formulas: [
      { name: 'Standard Linear Form', formula: 'ax + b = c \\implies x = \\frac{c - b}{a}', explanation: 'General analytic solution for one-variable linear equation.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Solve for x: 3x - 5 = 16.',
        solution: 'Step 1: Transpose -5 to RHS: 3x = 16 + 5 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.\nCheck: 3(7) - 5 = 21 - 5 = 16 (LHS = RHS).',
        keyInsight: 'Transpose terms sequentially to isolate the unknown variable.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c7-m3-01',
        subject: 'Mathematics',
        chapterId: 'c7-math-03',
        chapterTitle: 'Simple Linear Equations',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'If 4x + 3 = 19, what is the value of x?',
        options: ['A) 3', 'B) 4', 'C) 5', 'D) 6'],
        correctAnswer: 'B',
        explanation: '4x = 19 - 3 = 16. x = 16 / 4 = 4.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Geometry',
    order: 4,
    title: 'Lines and Angles',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Basic Geometrical Ideas',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Complementary angles, supplementary angles, adjacent angles, linear pair of angles, vertically opposite angles, transversal intersecting parallel lines, corresponding, alternate interior, and co-interior angles.',
    introduction: 'From surveying roads to designing bridges, angles govern geometry. When two parallel lines are crossed by a transversal, eight angles are created in strict geometric harmony.',
    topics: [
      'Complementary Angles (Sum = 90°) vs Supplementary Angles (Sum = 180°)',
      'Adjacent Angles: Common Vertex and Common Arm',
      'Linear Pair Axiom: Sum of Angles in a Linear Pair is 180°',
      'Vertically Opposite Angles are Always Equal',
      'Transversal of Parallel Lines: Corresponding Angles, Alternate Interior Angles',
      'Consecutive Interior (Co-interior) Angles: Sum = 180°'
    ],
    summaryNotes: `### Core Angle Theorems:
1. **Complementary:** $\\angle 1 + \\angle 2 = 90^\\circ$.
2. **Supplementary:** $\\angle 1 + \\angle 2 = 180^\\circ$.
3. **Vertically Opposite Angles:** When two lines intersect, opposite angles are equal: $\\angle 1 = \\angle 3$ and $\\angle 2 = \\angle 4$.
4. **Parallel Lines cut by a Transversal ($l \\parallel m$):**
   - **Corresponding Angles are equal:** $\\angle 1 = \\angle 5, \\angle 2 = \\angle 6$, etc.
   - **Alternate Interior Angles are equal:** $\\angle 3 = \\angle 5, \\angle 4 = \\angle 6$ (Z-angles).
   - **Co-interior Angles are supplementary:** $\\angle 3 + \\angle 6 = 180^\\circ, \\angle 4 + \\angle 5 = 180^\\circ$.`,
    definitions: [
      'Linear Pair: A pair of adjacent angles whose non-common arms are opposite rays forming a straight line.',
      'Transversal: A line that intersects two or more lines at distinct points.'
    ],
    formulas: [
      { name: 'Linear Pair Axiom', formula: '\\angle A + \\angle B = 180^\\circ', explanation: 'Angles forming a straight line sum to 180 degrees.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'Find the angle which is equal to its complement.',
        solution: 'Let the angle be x. Its complement is 90° - x.\nx = 90° - x => 2x = 90° => x = 45°.\nCheck: 45° + 45° = 90°.',
        keyInsight: 'Set the angle equal to (90° - x) and solve algebraically.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c7-m4-01',
        subject: 'Mathematics',
        chapterId: 'c7-math-04',
        chapterTitle: 'Lines and Angles',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Two parallel lines are intersected by a transversal. If one interior angle is 70°, what is the measure of its alternate interior angle?',
        options: ['A) 110°', 'B) 70°', 'C) 20°', 'D) 90°'],
        correctAnswer: 'B',
        explanation: 'Alternate interior angles are equal when two parallel lines are cut by a transversal. Hence the alternate angle is 70°.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Triangles',
    order: 5,
    title: 'The Triangle and Its Properties & Congruence',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Lines and Angles',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Medians and altitudes of a triangle, exterior angle theorem, angle sum property of triangle (180°), two special triangles (equilateral, isosceles), triangle inequality (sum of two sides > third side), Pythagoras theorem, and congruence criteria (SSS, SAS, ASA, RHS).',
    introduction: 'The triangle is the most rigid polygon in geometry; it cannot deform without bending its sides. The Pythagorean theorem and triangle congruence criteria are universal tools used across engineering and Olympiads.',
    topics: [
      'Medians (Centroid) vs Altitudes (Orthocentre) of a Triangle',
      'Exterior Angle Property: Exterior Angle = Sum of Two Opposite Interior Angles',
      'Angle Sum Property: The Sum of the Three Interior Angles is Always 180°',
      'Triangle Inequality: Sum of Lengths of Any Two Sides > Third Side',
      'Right-Angled Triangle and Pythagoras Theorem: $a^2 + b^2 = c^2$',
      'Congruence of Triangles: SSS, SAS, ASA, and RHS Criteria'
    ],
    summaryNotes: `### Core Theorems of Triangles:
1. **Angle Sum Property:** In $\\triangle ABC$, $\\angle A + \\angle B + \\angle C = 180^\\circ$.
2. **Exterior Angle Theorem:** An exterior angle of a triangle equals the sum of its two interior opposite angles: $\\angle ACD = \\angle A + \\angle B$.
3. **Pythagoras Theorem:** In a right-angled triangle with hypotenuse $c$:
   $$c^2 = a^2 + b^2 \\implies c = \\sqrt{a^2 + b^2}$$
   Common Pythagorean Triplets: $(3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17)$.
4. **Triangle Inequality:** For any valid triangle with sides $a, b, c$: $a + b > c, b + c > a, c + a > b$.`,
    definitions: [
      'Median: A line segment joining a vertex of a triangle to the midpoint of the opposite side.',
      'Pythagorean Triplet: A set of three positive integers a, b, c such that a² + b² = c².'
    ],
    formulas: [
      { name: 'Pythagoras Theorem', formula: '(\\text{Hypotenuse})^2 = (\\text{Base})^2 + (\\text{Perpendicular})^2', explanation: 'Relates sides of right-angled triangle.', units: 'Length squared' },
      { name: 'Exterior Angle Theorem', formula: '\\angle_{ext} = \\angle_1 + \\angle_2', explanation: 'Exterior angle equals sum of interior opposite angles.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'A 15 m long ladder reaches a window 12 m high from the ground on placing it against a wall. Find the distance of the foot of the ladder from the wall.',
        solution: 'By Pythagoras theorem: (Ladder length)² = (Wall height)² + (Base distance)².\n15² = 12² + b² => 225 = 144 + b² => b² = 225 - 144 = 81 => b = √81 = 9 meters.',
        keyInsight: 'The ladder acts as the hypotenuse of the right triangle.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c7-m5-01',
        subject: 'Mathematics',
        chapterId: 'c7-math-05',
        chapterTitle: 'The Triangle and Its Properties & Congruence',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Can a triangle have side lengths 5 cm, 8 cm, and 14 cm?',
        options: ['A) Yes, it is an obtuse triangle', 'B) Yes, it is a scalene triangle', 'C) No, because 5 + 8 < 14', 'D) Yes, by Pythagoras theorem'],
        correctAnswer: 'C',
        explanation: 'By the triangle inequality theorem, the sum of any two sides must strictly exceed the third side. Here 5 + 8 = 13 < 14, so no triangle can be formed.',
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
    id: 'c7-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Plant Physiology',
    order: 1,
    title: 'Nutrition in Plants',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Food and Components',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Autotrophic vs heterotrophic nutrition, photosynthesis mechanism, chloroplasts and chlorophyll, stomata and guard cells, insectivorous plants (Pitcher plant), parasites (Cuscuta), saprophytes (Fungi), and symbiotic lichens.',
    introduction: 'Plants are the solar-powered food factories of our biosphere. Through photosynthesis, green chloroplasts harness sunlight to convert carbon dioxide and water into energy-rich carbohydrates while releasing life-sustaining oxygen.',
    topics: [
      'Modes of Nutrition: Autotrophic (Self-nourishing) vs Heterotrophic',
      'Photosynthesis: Equation, Chlorophyll, Sunlight, Stomata, Guard Cells',
      'Synthesis of Plant Food other than Carbohydrates (Proteins & Nitrogen fixation)',
      'Parasitic Plants: Cuscuta (Amarbel) with Haustoria',
      'Insectivorous Plants: Pitcher Plant, Venus Flytrap (Nitrogen-poor bog adaptations)',
      'Saprotrophic Nutrition: Fungi secreting digestive juices onto dead organic matter',
      'Symbiosis: Lichen (Alga + Fungus partnership) and Rhizobium in legume root nodules'
    ],
    summaryNotes: `### Core Photosynthetic Reaction:
$$6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 \\text{ (Glucose)} + 6O_2\\uparrow$$
- **Stomata:** Microscopic pores on leaf surfaces regulated by kidney-shaped **guard cells** for $CO_2/O_2$ exchange and transpiration.
### Other Modes of Nutrition:
- **Parasite (Cuscuta):** Lacks chlorophyll; absorbs synthesized nutrients directly from host tree through root-like suckers (haustoria).
- **Insectivorous (Pitcher Plant):** Photosynthetic, but traps and digests insects using enzymes to obtain **nitrogen** scarce in acidic boggy soils.
- **Symbiosis:** Two organisms live together and share shelter and nutrients.
  * **Lichens:** An **alga** (synthesizes food) living with a **fungus** (provides shelter, water, and minerals).
  * **Rhizobium & Legumes:** Bacteria fix atmospheric nitrogen for pulses and receive carbohydrates in return.`,
    definitions: [
      'Autotrophic Nutrition: The mode of nutrition in which organisms manufacture their own food from simple inorganic substances.',
      'Symbiosis: A mutually beneficial biological interaction between two distinct living organisms.'
    ],
    formulas: [
      { name: 'Photosynthesis Equation', formula: '6CO_2 + 6H_2O \\xrightarrow{Sunlight} C_6H_{12}O_6 + 6O_2', explanation: 'Conversion of solar energy to biochemical bond energy.', units: 'Biochemical' }
    ],
    solvedExamples: [
      {
        question: 'Why does a Pitcher plant trap insects even though it has green leaves and conducts photosynthesis?',
        solution: 'Pitcher plants grow in nitrogen-deficient boggy soils. While photosynthesis satisfies their carbohydrate needs, they capture and digest insects to fulfill their mandatory nitrogen requirements for protein synthesis.',
        keyInsight: 'Carnivory in plants is an adaptation to nitrogen-deficient soil.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c7-b1-01',
        subject: 'Biology',
        chapterId: 'c7-bio-01',
        chapterTitle: 'Nutrition in Plants',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'In lichens, which two organisms live together in a symbiotic association?',
        options: ['A) Fungus and Bacteria', 'B) Alga and Fungus', 'C) Alga and Virus', 'D) Plant and Insect'],
        correctAnswer: 'B',
        explanation: 'A lichen is a symbiotic partnership between an autotrophic alga (which produces food) and a heterotrophic fungus (which provides shelter and water).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Human Physiology & Digestion',
    order: 2,
    title: 'Nutrition in Animals',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Nutrition in Plants',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Steps of holozoic nutrition (ingestion, digestion, absorption, assimilation, egestion), human digestive system (mouth, teeth, salivary glands, esophagus, stomach, liver, pancreas, small intestine, large intestine), digestion in grass-eating ruminants (cud chewing), and feeding in Amoeba (pseudopodia).',
    introduction: 'Animals cannot manufacture their own food; they must consume complex organic food and break it down chemically into soluble molecules that cells can absorb. The human alimentary canal is a specialized digestive assembly line.',
    topics: [
      'Five Steps of Nutrition: Ingestion, Digestion, Absorption, Assimilation, Egestion',
      'The Human Mouth: Types of Teeth (Incisors, Canines, Premolars, Molars), Salivary Amylase',
      'Esophagus and Peristalsis: Wave-like muscular contractions',
      'Stomach: Hydrochloric acid ($HCl$), Pepsin (protein digestion), Mucous lining',
      'Liver (Bile juice for fat emulsification) and Pancreas (Pancreatic enzymes)',
      'Small Intestine and Villi: Vast surface area for nutrient absorption into bloodstream',
      'Digestion in Grass-Eating Animals: Ruminant stomach (Rumen, Cud, Cellulose digestion)',
      'Ingestion and Digestion in Amoeba via Pseudopodia and Food Vacuoles'
    ],
    summaryNotes: `### Core Digestive Tract Anatomy:
1. **Teeth Types (Human Dental Formula in adults: 2123/2123):**
   - Incisors (Biting), Canines (Tearing), Premolars & Molars (Grinding & Chewing).
2. **Stomach Secretions:**
   - **$HCl$:** Kills harmful bacteria entering with food and provides acidic pH ($1.5 - 2.5$) required for pepsin activation.
   - **Pepsin:** Digests complex proteins into smaller peptides.
   - **Mucus:** Shields stomach wall from self-digestion by its own acid!
3. **Small Intestine:**
   - Longest part of alimentary canal (~$7.5\\text{ meters}$).
   - **Bile:** Stored in gall bladder; emulsifies large fat droplets.
   - **Villi:** Millions of tiny finger-like projections with microvilli that vastly expand the surface area for rapid absorption.
4. **Ruminants (Cows, Buffaloes):**
   - Swallow grass rapidly into the **rumen** where symbiotic anaerobic bacteria ferment cellulose. Later brought back to mouth as **cud** for thorough chewing.`,
    definitions: [
      'Peristalsis: The involuntary wave-like muscular contractions and relaxations of the digestive tract that push food forward.',
      'Villi: Tiny, finger-like projections lining the inner wall of the small intestine that increase surface area for nutrient absorption.'
    ],
    formulas: [
      { name: 'Enzyme Action Summary', formula: '\\text{Starch } \\xrightarrow{\\text{Amylase}} \\text{Maltose}; \\quad \\text{Proteins } \\xrightarrow{\\text{Pepsin}} \\text{Peptides}', explanation: 'Biochemical enzymatic breakdown of macromolecules.', units: 'Hydrolysis' }
    ],
    solvedExamples: [
      {
        question: 'Why can humans not digest cellulose present in grass, while cows and buffaloes digest it easily?',
        solution: 'Humans lack the cellulase enzyme and symbiotic anaerobic bacteria required to break cellulose bonds. Ruminants have a specialized large stomach chamber (rumen and caecum) housing millions of symbiotic microbes that ferment and digest cellulose.',
        keyInsight: 'Cellulose digestion requires specialized microbial fermentation chambers.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c7-b2-01',
        subject: 'Biology',
        chapterId: 'c7-bio-02',
        chapterTitle: 'Nutrition in Animals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Where does the complete digestion and absorption of nutrients take place in the human body?',
        options: ['A) Stomach', 'B) Small intestine', 'C) Large intestine', 'D) Esophagus'],
        correctAnswer: 'B',
        explanation: 'The small intestine receives digestive juices from the liver and pancreas, completing the digestion of carbohydrates, proteins, and fats, and absorbing them through villi.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Respiratory Biology',
    order: 3,
    title: 'Respiration in Organisms',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Nutrition in Animals',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Cellular respiration, aerobic vs anaerobic respiration, yeast fermentation, muscle cramps and lactic acid, breathing mechanism (inhalation vs exhalation, diaphragm and rib cage), respiratory structures in cockroach (spiracles & tracheae), earthworm (moist skin), fish (gills), and plants (stomata & root hairs).',
    introduction: 'Breathing is the physical exchange of gases, but respiration is the cellular chemical process where glucose is oxidized to release ATP energy. When you sprint, oxygen supply falls short, forcing muscle cells into anaerobic respiration.',
    topics: [
      'Cellular Respiration: Aerobic ($Glucose + O_2 \\rightarrow CO_2 + H_2O + Energy$)',
      'Anaerobic Respiration in Yeast: Alcoholic Fermentation ($Glucose \\rightarrow Alcohol + CO_2 + Energy$)',
      'Anaerobic Respiration in Human Muscles: Lactic Acid Accumulation and Muscle Cramps',
      'Mechanism of Breathing: Diaphragm moves down, Rib cage moves up and out during Inhalation',
      'Exhaled Air contains higher $CO_2$ (Demonstrated by blowing through Limewater)',
      'Breathing in Other Animals: Cockroaches (Spiracles & Tracheal tubes), Earthworms (Cutaneous diffusion), Fish (Gills)',
      'Respiration in Plants: Stomata on leaves and air spaces in soil roots'
    ],
    summaryNotes: `### Core Respiratory Equations:
1. **Aerobic Respiration (In Mitochondria, Complete breakdown):**
   $$C_6H_{12}O_6 + 6O_2 \\longrightarrow 6CO_2 + 6H_2O + 38\\text{ ATP}$$
2. **Anaerobic Respiration in Yeast (Fermentation):**
   $$C_6H_{12}O_6 \\xrightarrow{\\text{No } O_2} 2C_2H_5OH \\text{ (Ethyl Alcohol)} + 2CO_2 + 2\\text{ ATP}$$
3. **Anaerobic Respiration in Overworked Muscle Cells:**
   $$C_6H_{12}O_6 \\xrightarrow{\\text{Lack of } O_2} 2\\text{ Lactic Acid} + \\text{Energy}$$
   - Lactic acid crystal accumulation causes painful muscle cramps! Hot water baths improve circulation to oxidize lactic acid back to $CO_2$.
### Human Inhalation Mechanics:
- **Inhalation:** Diaphragm contracts and moves **downward**; rib cage moves **upward and outward**. Thoracic cavity expands, air pressure drops, air rushes into lungs.
- **Exhalation:** Diaphragm relaxes and arches **upward**; rib cage moves down and in. Lungs contract, forcing air out.`,
    definitions: [
      'Cellular Respiration: The biochemical process of breakdown of food in cell organelles with the release of usable ATP energy.',
      'Diaphragm: A large, dome-shaped sheet of muscle beneath the lungs that contracts and relaxes to drive ventilation.'
    ],
    formulas: [
      { name: 'Aerobic Oxidation of Glucose', formula: 'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{Energy (ATP)}', explanation: 'Complete aerobic cellular respiration.', units: 'Biochemical' }
    ],
    solvedExamples: [
      {
        question: 'Why do athletes often suffer from severe muscle cramps after a vigorous 100m sprint?',
        solution: 'During sudden heavy sprinting, the oxygen demand exceeds what blood can supply. Muscle cells switch temporarily to anaerobic respiration, producing lactic acid. The accumulation of lactic acid leads to painful muscle cramps.',
        keyInsight: 'Oxygen debt causes lactic acid buildup in active skeletal muscles.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c7-b3-01',
        subject: 'Biology',
        chapterId: 'c7-bio-03',
        chapterTitle: 'Respiration in Organisms',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the end product of anaerobic respiration in overworked human skeletal muscles?',
        options: ['A) Carbon dioxide and water', 'B) Alcohol and carbon dioxide', 'C) Lactic acid', 'D) Glucose and oxygen'],
        correctAnswer: 'C',
        explanation: 'When muscles work under oxygen deprivation, glucose is partially broken down into lactic acid, causing cramps.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Circulation & Excretion',
    order: 4,
    title: 'Transportation in Animals and Plants',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Respiration in Organisms',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Human circulatory system: blood composition (RBCs, WBCs, platelets, plasma), blood vessels (arteries, veins, capillaries), heart anatomy & double circulation, pulse rate, excretion in humans (kidneys, nephrons, dialysis), vascular bundles in plants (xylem & phloem), and transpiration pull.',
    introduction: 'Nutrients and oxygen must reach every trillionth cell in our bodies, and toxic metabolic wastes like urea must be filtered out continuously. The heart beats 100,000 times a day to pump blood through miles of blood vessels.',
    topics: [
      'Components of Blood: Plasma (Liquid matrix), RBCs (Hemoglobin for O₂ transport), WBCs (Immunity), Platelets (Clotting)',
      'Blood Vessels: Thick elastic Arteries (Away from heart, high pressure) vs Thin Veins (Valves prevent backflow)',
      'Capillaries: Microscopic single-cell thick vessels for nutrient/gas exchange',
      'The Human Heart: Four chambers (Right/Left Atria and Ventricles), Septum prevents mixing of oxygenated and deoxygenated blood',
      'Heartbeat, Pulse Rate ($72 - 80\\text{ bpm}$), and Stethoscope Working',
      'Human Excretory System: Kidneys, Ureters, Urinary Bladder, Urethra, and Dialysis',
      'Transportation in Plants: Xylem (Water & minerals via Transpiration Pull) and Phloem (Translocation of sugars)'
    ],
    summaryNotes: `### Core Circulatory & Excretory Anatomy:
1. **Blood Components:**
   - **RBCs:** Contain iron-rich red protein **Hemoglobin**, which binds oxygen to form oxyhemoglobin.
   - **WBCs:** Patrol and destroy invading bacterial pathogens.
   - **Platelets:** Form dark fibrin clots at cuts to stop hemorrhage.
2. **Heart Structure (4 Chambers):**
   - Deoxygenated blood from body $\\rightarrow$ Right Atrium $\\rightarrow$ Right Ventricle $\\rightarrow$ Lungs (for oxygenation).
   - Oxygenated blood from lungs $\\rightarrow$ Left Atrium $\\rightarrow$ Left Ventricle $\\rightarrow$ Aorta to entire body.
   - Central muscular wall (**septum**) completely prevents mixing of oxygenated and deoxygenated blood.
3. **Excretion:**
   - Kidneys contain millions of filtering units that remove toxic **Urea** and excess salts as urine ($95\\%$ water, $2.5\\%$ urea, $2.5\\%$ other wastes).
4. **Plant Vascular Bundles:**
   - **Xylem:** Unidirectional transport of water and dissolved minerals from roots to leaves powered by the suction force of **transpiration pull**!
   - **Phloem:** Bidirectional transport (**translocation**) of synthesized carbohydrates from leaves to storage tissues.`,
    definitions: [
      'Hemoglobin: An iron-containing protein pigment in red blood cells that reversibly binds and transports oxygen.',
      'Transpiration Pull: The powerful suction force created by evaporation of water from leaf stomata that draws water up tall trees through xylem.'
    ],
    formulas: [
      { name: 'Normal Resting Pulse Rate', formula: '72 - 80\\text{ beats per minute}', explanation: 'Standard arterial pulse frequency in healthy resting adults.', units: 'bpm' }
    ],
    solvedExamples: [
      {
        question: 'Why do veins have internal valves, while arteries do not need valves?',
        solution: 'Arteries carry high-pressure blood pumped directly from the heart, which keeps blood moving forward at high velocity. Veins carry low-pressure blood returning toward the heart against gravity; internal one-way flap valves prevent blood from pooling or flowing backwards.',
        keyInsight: 'Valves in low-pressure veins prevent backward blood flow.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c7-b4-01',
        subject: 'Biology',
        chapterId: 'c7-bio-04',
        chapterTitle: 'Transportation in Animals and Plants',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which blood cells contain the red pigment hemoglobin responsible for transporting oxygen?',
        options: ['A) White blood cells', 'B) Red blood cells', 'C) Platelets', 'D) Plasma'],
        correctAnswer: 'B',
        explanation: 'Red blood cells (erythrocytes) are packed with hemoglobin molecules that bind and carry oxygen to body tissues.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c7-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Reproductive Biology',
    order: 5,
    title: 'Reproduction in Plants',
    stage: 'foundation',
    classLevel: 'Class 7',
    priority: 'High priority',
    prerequisite: 'Class 6 Getting to Know Plants',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Asexual reproduction (vegetative propagation in rose/potato/bryophyllum, budding in yeast, fragmentation in spirogyra, spore formation in moss/ferns), sexual reproduction, unisexual vs bisexual flowers, pollination (self vs cross), fertilization, zygote formation, and seed dispersal mechanisms.',
    introduction: 'Reproduction ensures the continuation of species across generations. Plants reproduce through versatile asexual vegetative methods (roots, stems, buds) as well as complex sexual pathways involving flower pollination, fertilization, and seed dispersal.',
    topics: [
      'Modes of Reproduction: Asexual (Single parent, no seeds) vs Sexual (Involves male and female gametes)',
      'Vegetative Propagation: Stem cuttings (Rose), Eye buds (Potato), Leaf buds (Bryophyllum), Roots (Sweet potato)',
      'Budding in Yeast: Rapid clonal daughter bud formation',
      'Fragmentation in Spirogyra Algae & Spore Formation in Fungi, Mosses, and Ferns',
      'Unisexual Flowers (Corn, Papaya) vs Bisexual Flowers (Mustard, Rose, Petunia)',
      'Pollination: Self-pollination vs Cross-pollination (Wind, Water, Insect vectors)',
      'Fertilization: Pollen tube germination, Fusion of gametes into Zygote, Fruit and Seed formation',
      'Seed Dispersal by Wind (Dandelion, Maple wings), Water (Coconut), Animals (Xanthium hooks), and Explosive bursts (Balsam)'
    ],
    summaryNotes: `### Core Botanical Reproduction:
1. **Vegetative Propagation:**
   - **Bryophyllum:** Leaf margins develop notched buds that fall onto moist soil to grow into independent plantlets!
   - **Potato:** "Eyes" on tuber are vegetative scars with buds capable of sprouting into new plants.
2. **Flower Structure:**
   - **Stamen (Male):** Anther produces microscopic **pollen grains** containing male gametes.
   - **Pistil (Female):** Ovary contains **ovules** carrying the female gamete (egg cell).
3. **Pollination & Fertilization:**
   - **Pollination:** Transfer of pollen grains from anther to stigma.
   - **Fertilization:** Pollen grain germinates a pollen tube through the style. The male gamete fuses with the female egg inside the ovule to form a **Zygote**.
   - Ovule becomes the **Seed** (containing embryo and cotyledon food reserves). Ovary ripens into the **Fruit**.`,
    definitions: [
      'Vegetative Propagation: A form of asexual reproduction in which new plantlets originate from vegetative parts such as roots, stems, or leaves.',
      'Fertilization: The fusion of male and female gametes to form a diploid zygote.'
    ],
    formulas: [
      { name: 'Fertilization Scheme', formula: '\\text{Male Gamete (Pollen)} + \\text{Female Gamete (Egg)} \\longrightarrow \\text{Zygote} \\rightarrow \\text{Embryo}', explanation: 'Fundamental sexual reproduction pathway in angiosperms.', units: 'Development' }
    ],
    solvedExamples: [
      {
        question: 'How does Bryophyllum reproduce vegetatively, and why is this advantageous?',
        solution: 'Bryophyllum leaves bear adventitious buds in the notches along their margins. When a mature leaf detaches and falls on damp soil, each bud sprouts roots and shoots to produce multiple independent clones rapidly without depending on flower pollination or seeds.',
        keyInsight: 'Leaf-margin buds allow Bryophyllum to propagate without seeds.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c7-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c7-b5-01',
        subject: 'Biology',
        chapterId: 'c7-bio-05',
        chapterTitle: 'Reproduction in Plants',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which plant reproduces vegetatively through buds present in the notches of its leaf margins?',
        options: ['A) Rose', 'B) Bryophyllum', 'C) Sweet potato', 'D) Ginger'],
        correctAnswer: 'B',
        explanation: 'Bryophyllum reproduces through vegetative buds located along the serrated notches of its fleshy leaves.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
