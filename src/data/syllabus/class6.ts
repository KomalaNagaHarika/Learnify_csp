import { Chapter } from '../../types';

export const CLASS_6_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c6-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Motion & Measurement',
    order: 1,
    title: 'Motion and Measurement of Distances',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Basic observation of movement and counting',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Story of transport, standard units of measurement (SI system), measuring lengths correctly, rectilinear, circular and periodic motion.',
    introduction: 'In ancient times, people measured lengths using the width of a finger, a cubit, or a footstep. Because body sizes vary, scientists adopted standard international units (SI units) to ensure accurate measurements worldwide.',
    topics: [
      'Evolution of Transport: Wheel to Modern Aerospace',
      'Non-standard vs Standard Units of Measurement',
      'SI Unit of Length: Meter, Centimeter, and Millimeter Conversions',
      'Correct Methods of Measuring with a Meter Scale (Avoiding Parallax Error)',
      'Types of Motion: Rectilinear, Circular, Rotational, and Periodic Motion'
    ],
    summaryNotes: `### Core Fundamentals:
1. **SI Unit of Length:** The International System of Units (SI) specifies **Meter (m)** as standard.
   - $1\\text{ m} = 100\\text{ cm} = 1000\\text{ mm}$
   - $1\\text{ km} = 1000\\text{ m}$
2. **Avoiding Parallax Error:** Your eye must be kept directly above the reading point perpendicular to the scale mark.
3. **Types of Motion:**
   - **Rectilinear:** Movement along a straight line (e.g., car moving on straight road, march-past of soldiers).
   - **Circular:** Movement along a circular path where distance from center remains constant (e.g., blades of a rotating fan).
   - **Periodic:** Motion that repeats itself at regular intervals of time (e.g., pendulum of clock, string of a plucked guitar).`,
    definitions: [
      'Standard Unit: A unit of measurement that has a fixed value and does not change from person to person or place to place.',
      'Periodic Motion: Motion that repeats itself after equal intervals of time.'
    ],
    formulas: [
      { name: 'Unit Conversion: Kilometer to Meter', formula: '1\\text{ km} = 1000\\text{ m}', explanation: 'Length conversion factor.', units: 'm' },
      { name: 'Unit Conversion: Meter to Centimeter', formula: '1\\text{ m} = 100\\text{ cm}', explanation: 'Metric subdivision factor.', units: 'cm' }
    ],
    solvedExamples: [
      {
        question: 'The distance between two railway stations is 5400 meters. Express this distance in kilometers.',
        solution: 'Since 1000 m = 1 km, distance in km = 5400 / 1000 = 5.4 km.',
        keyInsight: 'To convert meters to kilometers, divide by 1000.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c6-p1-01',
        subject: 'Physics',
        chapterId: 'c6-phys-01',
        chapterTitle: 'Motion and Measurement of Distances',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Motion of the needle of a sewing machine is an example of:',
        options: ['A) Rectilinear motion', 'B) Periodic motion', 'C) Circular motion', 'D) Random motion'],
        correctAnswer: 'B',
        explanation: 'The needle moves up and down continuously at regular intervals of time, making it periodic motion.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ],
    chapterTest: {
      durationMinutes: 10,
      totalMarks: 10,
      passingScore: 6,
      questions: [
        {
          id: 't-c6-p1-01',
          subject: 'Physics',
          chapterId: 'c6-phys-01',
          chapterTitle: 'Motion and Measurement of Distances',
          questionType: 'mcq_single',
          difficulty: 'beginner',
          questionText: 'What is the standard SI unit of length?',
          options: ['A) Centimeter', 'B) Foot', 'C) Meter', 'D) Kilometer'],
          correctAnswer: 'C',
          explanation: 'The meter (m) is the internationally accepted SI unit of length.',
          sourceType: 'Original Practice',
          marksPositive: 4,
          marksNegative: 1
        }
      ]
    }
  },
  {
    id: 'c6-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Optics & Light',
    order: 2,
    title: 'Light, Shadows and Reflections',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Motion and Measurement',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Luminous & non-luminous objects, transparent, translucent, opaque materials, formation of shadows, pinhole camera, and mirror reflection.',
    introduction: 'We cannot see objects in a dark room. We see objects only when light from a luminous source falls on them and bounces towards our eyes. Light travels strictly in straight lines.',
    topics: [
      'Luminous vs Non-Luminous Objects',
      'Transparent, Translucent, and Opaque Materials',
      'How Shadows are Formed: Conditions and Characteristics',
      'Rectilinear Propagation of Light & The Pinhole Camera',
      'Mirrors and Laws of Reflection (Basic)'
    ],
    summaryNotes: `### Key Learnings:
- **Luminous Objects:** Emit their own light (Sun, stars, electric bulb).
- **Non-Luminous Objects:** Reflect light falling on them (Moon, book, chair).
- **Materials Classification:**
  * Transparent: Allows light to pass through completely (clean glass, air).
  * Translucent: Allows light to pass partially (butter paper, frosted glass).
  * Opaque: Does not allow light to pass at all (wood, cardboard, human body).
- **Shadow:** Formed when an opaque object blocks the path of light. Requires a source, an obstacle, and a screen. Always dark in color regardless of object color!
- **Pinhole Camera:** Forms an **inverted** (upside down) image on the screen, proving that light travels in straight lines.`,
    definitions: [
      'Pinhole Camera: A simple device without a lens that produces an inverted image of a brightly lit object due to rectilinear propagation of light.',
      'Opaque Object: An object that does not allow light to pass through it.'
    ],
    formulas: [
      { name: 'Rectilinear Propagation', formula: '\\text{Light ray follows straight line path}', explanation: 'Fundamental property responsible for sharp shadow boundaries.', units: 'Geometrical optics' }
    ],
    solvedExamples: [
      {
        question: 'Why does the image formed by a pinhole camera appear upside down (inverted)?',
        solution: 'Light travels in straight lines. Rays from the top of an object pass through the tiny hole to reach the bottom of the screen, while rays from the bottom go to the top, forming an inverted image.',
        keyInsight: 'Straight line propagation of crossing light rays produces inversion.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c6-p2-01',
        subject: 'Physics',
        chapterId: 'c6-phys-02',
        chapterTitle: 'Light, Shadows and Reflections',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is an example of a translucent object?',
        options: ['A) Cardboard', 'B) Clean glass', 'C) Oiled paper', 'D) Iron sheet'],
        correctAnswer: 'C',
        explanation: 'Oiled paper allows light to pass through partially, making objects appear blurred; hence it is translucent.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electricity',
    order: 3,
    title: 'Electricity and Circuits',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Basic understanding of electrical appliances',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Electric cell, terminals, filament of a bulb, closed vs open circuits, switch mechanism, conductors and insulators.',
    introduction: 'Electricity powers our homes, schools, and cities. An electric cell produces electric current from chemical energy, flowing only through unbroken closed pathways called electric circuits.',
    topics: [
      'Electric Cell: Positive and Negative Terminals',
      'Anatomy of a Torch Bulb: Filament and Terminals',
      'Simple Electric Circuit: Open Circuit vs Closed Circuit',
      'Electric Switch: Function and Working',
      'Conductors vs Insulators: Copper, Aluminum, Rubber, Plastic'
    ],
    summaryNotes: `### Core Concepts:
- **Electric Cell:** Has two terminals: a positive terminal (+ metal cap) and a negative terminal (- metal disc).
- **Current Direction:** Conventionally flows from the positive terminal to the negative terminal through the external circuit.
- **Filament:** A thin coiled tungsten wire inside a bulb that glows and emits light when current passes through it. If broken, the bulb is fused.
- **Conductors:** Materials that allow electric current to pass through them freely (metals like copper, aluminum, iron, and human body).
- **Insulators:** Materials that resist the flow of electric current (rubber, plastic, dry wood, glass).`,
    definitions: [
      'Electric Circuit: A complete closed path through which electric current can flow.',
      'Conductor: A material that easily allows electricity to flow through it.'
    ],
    formulas: [
      { name: 'Circuit Continuity', formula: '\\text{Flow occurs only when loop is closed}', explanation: 'Open switch breaks circuit continuity.', units: 'State' }
    ],
    solvedExamples: [
      {
        question: 'Why does an electrician wear rubber gloves while repairing an electric switch?',
        solution: 'Rubber is a strong electrical insulator. It prevents electric current from passing through the electrician\'s body, protecting them from dangerous electric shocks.',
        keyInsight: 'Insulators block current and ensure safety.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c6-p3-01',
        subject: 'Physics',
        chapterId: 'c6-phys-03',
        chapterTitle: 'Electricity and Circuits',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Electric current in a simple circuit flows from:',
        options: ['A) Negative to positive terminal', 'B) Positive to negative terminal', 'C) Middle to end', 'D) In any random direction'],
        correctAnswer: 'B',
        explanation: 'By convention, electric current flows from the positive (+) terminal of the cell to the negative (-) terminal.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Magnetism',
    order: 4,
    title: 'Fun with Magnets',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'Medium priority',
    prerequisite: 'Forces in daily life',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Discovery of magnets, magnetic vs non-magnetic materials, poles of a magnet, magnetic compass for navigation, attraction and repulsion rules.',
    introduction: 'According to legend, an ancient Greek shepherd named Magnes discovered magnetite when the iron tip of his stick stuck to a dark rock. Magnets possess invisible magnetic fields that attract ferromagnetic materials.',
    topics: [
      'Discovery and Types of Magnets: Natural (Magnetite) vs Artificial Magnets',
      'Magnetic Materials (Iron, Nickel, Cobalt) vs Non-magnetic Materials',
      'Magnetic Poles: North Pole (N) and South Pole (S)',
      'Finding Directions: Freely Suspended Magnet & The Magnetic Compass',
      'Laws of Magnetic Interaction: Like Poles Repel, Unlike Poles Attract'
    ],
    summaryNotes: `### Core Rules of Magnetism:
1. Every magnet has **two poles**: North (N) and South (S). Magnetic poles always exist in pairs; monopoles do not exist.
2. Magnetic strength is maximum at the **poles** of the magnet.
3. A freely suspended bar magnet always aligns itself along the **North-South direction** of the Earth.
4. **Law of Interaction:**
   - Like poles (N-N or S-S) **repel** each other.
   - Unlike poles (N-S or S-N) **attract** each other.
   - Repulsion is the surest test of magnetism!`,
    definitions: [
      'Magnetic Poles: The regions at the ends of a magnet where magnetic attraction is strongest.',
      'Magnetic Compass: A simple navigation instrument with a magnetized needle pivoted to freely point North-South.'
    ],
    formulas: [
      { name: 'Magnetic Force Rule', formula: 'N \\leftrightarrow N \\text{ (Repulsion)}, \\quad N \\leftrightarrow S \\text{ (Attraction)}', explanation: 'Interaction law between magnetic poles.', units: 'Qualitative' }
    ],
    solvedExamples: [
      {
        question: 'If a bar magnet is cut into two equal halves along its length, how many magnetic poles will be produced?',
        solution: 'Each half will develop its own North and South poles. Thus, two smaller complete magnets are formed, yielding a total of 4 poles (2 North and 2 South). Isolated magnetic monopoles cannot exist.',
        keyInsight: 'Breaking a magnet creates new independent poles at the broken ends.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c6-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c6-p4-01',
        subject: 'Physics',
        chapterId: 'c6-phys-04',
        chapterTitle: 'Fun with Magnets',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is a magnetic material?',
        options: ['A) Plastic', 'B) Wood', 'C) Iron', 'D) Aluminum'],
        correctAnswer: 'C',
        explanation: 'Iron is attracted by magnets, so it is a magnetic material. Wood, plastic, and aluminum are non-magnetic.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Mechanics & Force',
    order: 5,
    title: 'Work, Force and Simple Machines',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'Basic priority',
    prerequisite: 'Motion and Measurement',
    totalConcepts: 4,
    durationHours: 2.5,
    description: 'Introduction to push and pull (force), effects of force on shapes and motion, simple machines (lever, pulley, inclined plane, wheel & axle).',
    introduction: 'Whenever we open a door, kick a football, or lift a school bag, we apply a force. Simple machines make work easier by multiplying force or changing the direction of effort.',
    topics: [
      'Concept of Force: Push and Pull',
      'What Force Can Do: Change Speed, Direction, and Shape of Objects',
      'Types of Forces: Muscular Force, Gravitational Force, Friction',
      'Introduction to Simple Machines: Lever, Pulley, Inclined Plane'
    ],
    summaryNotes: `### Key Ideas:
- **Force:** A push or pull acting on an object.
- **Effects of Force:**
  * Can move a stationary object.
  * Can stop a moving object or change its speed.
  * Can change the direction of motion.
  * Can change the shape or size of an object (e.g., stretching a rubber band, pressing dough).
- **Friction:** Opposes motion between surfaces in contact.
- **Simple Machines:** Devices that help us do work using less effort (e.g., ramps, pulleys, scissors, seesaws).`,
    definitions: [
      'Force: A push or pull upon an object resulting from its interaction with another object.',
      'Simple Machine: A mechanical tool that changes the direction or magnitude of a force.'
    ],
    formulas: [
      { name: 'Mechanical Advantage Concept', formula: '\\text{Effort} \\times \\text{Effort Arm} = \\text{Load} \\times \\text{Load Arm}', explanation: 'Principle of moments for simple levers.', units: 'Equilibrium' }
    ],
    solvedExamples: [
      {
        question: 'Why is it easier to roll a heavy drum up a wooden ramp than to lift it vertically?',
        solution: 'The ramp acts as an inclined plane—a simple machine. It increases the distance over which effort is applied, reducing the force required to lift the load to the same height.',
        keyInsight: 'Simple machines trade distance for required effort force.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c6-p5-01',
        subject: 'Physics',
        chapterId: 'c6-phys-05',
        chapterTitle: 'Work, Force and Simple Machines',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which force always opposes the motion of a ball rolling on the ground?',
        options: ['A) Gravitational force', 'B) Frictional force', 'C) Magnetic force', 'D) Electrostatic force'],
        correctAnswer: 'B',
        explanation: 'Friction between the surface of the ball and the ground opposes its forward motion, eventually bringing it to rest.',
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
    id: 'c6-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Materials & Matter',
    order: 1,
    title: 'Sorting Materials into Groups',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'Basic priority',
    prerequisite: 'Observation of everyday items',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Properties of materials: appearance, hardness, solubility, floating/sinking in water, transparency, and classification of matter.',
    introduction: 'Look around your room: you see books, pens, glass tumblers, wooden chairs, and steel utensils. Grouping materials by shared physical properties helps us understand their structure and practical uses.',
    topics: [
      'Why Classify Objects: Order and Convenience',
      'Appearance: Lustre (Shiny metals) vs Non-lustrous Materials',
      'Hardness and Compressibility: Soft vs Hard Materials',
      'Solubility in Water: Soluble, Insoluble, Miscible, and Immiscible Liquids',
      'Density and Buoyancy: Objects that Float or Sink in Water'
    ],
    summaryNotes: `### Core Classifications:
1. **Lustre:** Freshly cut metals exhibit metallic shine (gold, copper, iron).
2. **Solubility in Water:**
   - Soluble: Sugar, salt (dissolve completely).
   - Insoluble: Sand, chalk powder (settle down or remain suspended).
   - Miscible liquids: Vinegar, lemon juice mix completely with water.
   - Immiscible liquids: Mustard oil, kerosene form a separate layer on water.
3. **Flotation:** Objects less dense than water float (dry leaf, cork, plastic ball); objects denser than water sink (stone, iron coin).`,
    definitions: [
      'Lustre: The gentle shine or glow on the surface of freshly cut metals.',
      'Miscible Liquids: Liquids that dissolve or mix completely with one another without forming separate layers.'
    ],
    formulas: [
      { name: 'Flotation Criterion', formula: '\\text{Density}_{object} < \\text{Density}_{water} \\implies \\text{Floats}', explanation: 'Condition for buoyancy in fluids.', units: 'Density' }
    ],
    solvedExamples: [
      {
        question: 'Why can a tumbler not be made with a piece of cloth?',
        solution: 'Cloth is porous and has large spaces between threads that cannot retain liquids. Tumblers require impermeable materials like glass, plastic, or metal to hold water.',
        keyInsight: 'Material selection depends on the required functional property.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c6-c1-01',
        subject: 'Chemistry',
        chapterId: 'c6-chem-01',
        chapterTitle: 'Sorting Materials into Groups',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following liquids is completely miscible with water?',
        options: ['A) Mustard oil', 'B) Kerosene', 'C) Lemon juice', 'D) Diesel'],
        correctAnswer: 'C',
        explanation: 'Lemon juice dissolves completely and mixes homogeneously with water, making it miscible.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Separation Science',
    order: 2,
    title: 'Separation of Substances',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Sorting Materials into Groups',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Handpicking, threshing, winnowing, sieving, sedimentation, decantation, filtration, evaporation, condensation, and saturated solutions.',
    introduction: 'In nature, most substances are found as mixtures. To obtain pure components or remove harmful impurities, we use separation techniques based on differences in size, weight, and solubility.',
    topics: [
      'Separation of Solids from Solids: Handpicking, Threshing, Winnowing, Sieving',
      'Sedimentation and Decantation',
      'Filtration: Using Strainer and Filter Paper',
      'Evaporation and Condensation: Obtaining Salt from Seawater',
      'Saturated Solution and Effect of Temperature on Solubility'
    ],
    summaryNotes: `### Core Separation Methods:
- **Handpicking:** Removing large stones from rice or pulses when quantities are small.
- **Threshing:** Beating harvested stalks to separate grain seeds.
- **Winnowing:** Separating heavier grain from lighter husk using wind blowing.
- **Sedimentation:** Heavier insoluble particles settle at the bottom of water.
- **Decantation:** Gently pouring out the top liquid without disturbing the sediment.
- **Filtration:** Passing mixture through filter paper pore-structure to separate fine insoluble solids.
- **Evaporation:** Conversion of liquid into vapor to recover dissolved solid solutes (e.g., common salt from sea water).
- **Saturated Solution:** A solution in which no more solute can dissolve at that given temperature.`,
    definitions: [
      'Winnowing: Method used to separate heavier and lighter components of a mixture by wind or by blowing air.',
      'Saturated Solution: A solution in which no more quantity of a substance can be dissolved at that temperature.'
    ],
    formulas: [
      { name: 'Solubility vs Temperature', formula: '\\text{Solubility of most solids increases with } T', explanation: 'Heating allows more solute to dissolve in saturated solution.', units: 'g/100mL' }
    ],
    solvedExamples: [
      {
        question: 'How can you separate a mixture of sand and water in a school laboratory?',
        solution: 'Allow the mixture to stand so sand settles down by sedimentation. Then pour the clear water into another beaker by decantation, or pass it through a cone of filter paper to obtain pure water through filtration.',
        keyInsight: 'Insoluble dense solids are separated using sedimentation followed by filtration.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c6-c2-01',
        subject: 'Chemistry',
        chapterId: 'c6-chem-02',
        chapterTitle: 'Separation of Substances',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Salt is obtained from sea water primarily by the process of:',
        options: ['A) Filtration', 'B) Winnowing', 'C) Evaporation', 'D) Sedimentation'],
        correctAnswer: 'C',
        explanation: 'Sea water is trapped in shallow pits. Sunlight evaporates the water over time, leaving behind solid crude salt.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Changes in Nature',
    order: 3,
    title: 'Changes Around Us',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'Medium priority',
    prerequisite: 'Sorting Materials into Groups',
    totalConcepts: 4,
    durationHours: 2.5,
    description: 'Reversible and irreversible changes, physical changes, thermal expansion of metals, burning of candles, and chemical transformations.',
    introduction: 'Ice melts into water, a seed sprouts into a tall tree, and milk curdles into paneer. Observing changes and determining whether they can be reversed forms the starting point of chemical reactions.',
    topics: [
      'Reversible Changes: Folding paper, melting ice, stretching a spring',
      'Irreversible Changes: Tearing paper, baking a cake, burning wood',
      'Expansion and Contraction of Metals on Heating and Cooling',
      'Fixing Iron Rims on Wooden Wheels (Practical Application of Expansion)',
      'Difference between Melting of Wax and Burning of a Candle'
    ],
    summaryNotes: `### Key Classifications:
1. **Reversible Change:** Can be undone to recover the original substance (e.g., freezing water into ice, inflation of a balloon without bursting).
2. **Irreversible Change:** Cannot be undone to regain the original materials (e.g., curdling of milk, cooking food, bursting of balloon, burning of incense).
3. **Thermal Expansion:** Metals expand on heating and contract on cooling.
   - In wooden cart wheels, an iron rim slightly smaller in diameter is heated until it expands, fitted onto the wheel, and rapidly cooled with cold water to contract into a tight fit!`,
    definitions: [
      'Reversible Change: A change that can be undone by reversing the conditions so original state is recovered.',
      'Thermal Expansion: The increase in size or volume of a material when its temperature rises.'
    ],
    formulas: [
      { name: 'Expansion Rule', formula: '\\text{Heating } \\implies \\text{Expansion}; \\quad \\text{Cooling } \\implies \\text{Contraction}', explanation: 'General thermal response of solid metals.', units: 'Dimensions' }
    ],
    solvedExamples: [
      {
        question: 'Why is burning of paper classified as irreversible, whereas folding of paper is reversible?',
        solution: 'Folding paper changes only its shape and can be unfolded back into its original sheet. Burning paper converts cellulose into new substances (ash, carbon dioxide, water vapor) that cannot be converted back into paper.',
        keyInsight: 'Changes creating entirely new chemical substances cannot be reversed mechanically.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c6-c3-01',
        subject: 'Chemistry',
        chapterId: 'c6-chem-03',
        chapterTitle: 'Changes Around Us',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is a reversible change?',
        options: ['A) Rusting of an iron nail', 'B) Boiling of an egg', 'C) Melting of ice cream', 'D) Ripening of a mango'],
        correctAnswer: 'C',
        explanation: 'Melted ice cream can be refrozen in a refrigerator to solidify again, making it a reversible physical change.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Environmental Chemistry',
    order: 4,
    title: 'Water and its Properties',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Changes Around Us',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Water cycle, evaporation, transpiration, cloud formation, precipitation, floods and droughts, rainwater harvesting.',
    introduction: 'Water is essential for all life on Earth. Despite covering two-thirds of the planet, less than one percent is accessible freshwater. The natural water cycle continually purifies and redistributes water across land and sky.',
    topics: [
      'Uses and Distribution of Freshwater on Earth',
      'The Water Cycle: Evaporation, Transpiration, and Condensation',
      'How Clouds are Formed at High Altitudes',
      'Consequences of Extreme Weather: Floods and Droughts',
      'Conservation of Water & Rooftop Rainwater Harvesting'
    ],
    summaryNotes: `### The Water Cycle:
1. **Evaporation:** Water from oceans, rivers, and soil evaporates into vapor under solar heat.
2. **Transpiration:** Plants lose excess water as water vapor through microscopic stomata on their leaves.
3. **Condensation:** As air rises, it cools. Water vapor condenses onto tiny airborne dust particles to form clouds.
4. **Precipitation:** Tiny droplets coalesce into heavy drops and fall as rain, snow, or hail.
5. **Rainwater Harvesting:** Collecting and storing rainwater directly from rooftops into underground recharge pits to replenish local groundwater tables.`,
    definitions: [
      'Transpiration: The biological process by which water vapor escapes from aerial parts of plants into the atmosphere.',
      'Rainwater Harvesting: The technique of collecting and storing rainwater for productive use rather than letting it run off.'
    ],
    formulas: [
      { name: 'Water Cycle Balance', formula: '\\text{Evaporation} + \\text{Transpiration} \\leftrightarrow \\text{Precipitation}', explanation: 'Global hydrologic equilibrium cycle.', units: 'Mass balance' }
    ],
    solvedExamples: [
      {
        question: 'Why do tiny water droplets appear on the outer surface of a glass tumbler containing iced water?',
        solution: 'Air around the tumbler contains invisible water vapor. When warm air contacts the cold outer surface of the tumbler, it cools down and condenses into visible liquid water droplets.',
        keyInsight: 'Condensation occurs when water vapor touches a cold surface.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c6-c4-01',
        subject: 'Chemistry',
        chapterId: 'c6-chem-04',
        chapterTitle: 'Water and its Properties',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The process of loss of water in the form of vapor from the leaves of plants is known as:',
        options: ['A) Respiration', 'B) Transpiration', 'C) Photosynthesis', 'D) Precipitation'],
        correctAnswer: 'B',
        explanation: 'Transpiration is the evaporation of water from plant leaves into the atmosphere.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Gases & Atmosphere',
    order: 5,
    title: 'Air Around Us',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Water and its Properties',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Atmosphere, composition of air (nitrogen, oxygen, carbon dioxide, argon, water vapor, smoke), oxygen cycle, and aquatic respiration.',
    introduction: 'We cannot see air, but we can feel it when leaves rustle or windmills turn. The blanket of air surrounding Earth—the atmosphere—is a vital gaseous mixture sustaining all living beings.',
    topics: [
      'Is Air Present Everywhere Around Us? Demonstrating Air Occupies Space',
      'The Atmosphere and Atmospheric Pressure (Basic Introduction)',
      'Composition of Air: Nitrogen (~78%), Oxygen (~21%), CO₂, Water Vapor, Dust',
      'Oxygen Supports Combustion and Respiration',
      'How Aquatic Animals and Soil Organisms Breathe Air'
    ],
    summaryNotes: `### Core Composition of Air:
- **Nitrogen ($78\\%$):** Does not support combustion; dilutes oxygen so fires do not burn uncontrollably.
- **Oxygen ($21\\%$):** Essential for respiration of living organisms and combustion (burning).
- **Carbon Dioxide ($0.04\\%$):** Used by green plants in photosynthesis; produced during respiration and combustion.
- **Water Vapor & Dust:** Responsible for clouds, rainfall, and weather phenomena.
- **Dissolved Oxygen:** Fishes breathe oxygen dissolved in water using gills. Earthworms and soil insects breathe air trapped between soil particles.`,
    definitions: [
      'Atmosphere: The thick envelope of air that surrounds the Earth up to hundreds of kilometers above the surface.',
      'Combustion: A chemical process in which a substance reacts rapidly with oxygen and produces heat and light.'
    ],
    formulas: [
      { name: 'Air Ratio Approx', formula: '\\text{Air} \\approx 78\\% \\text{ N}_2 + 21\\% \\text{ O}_2 + 1\\% \\text{ (Ar, CO}_2\\text{, H}_2\\text{O)}', explanation: 'Volumetric composition of clean dry air.', units: '%' }
    ],
    solvedExamples: [
      {
        question: 'Why does an inverted empty glass bottle allow water inside only when it is tilted in a bucket?',
        solution: 'The "empty" bottle is actually filled with air. Air occupies space and cannot escape when held vertically. When tilted, air escapes as bubbles, allowing water to rush into the vacated space.',
        keyInsight: 'Air occupies space and exerts pressure.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c6-c5-01',
        subject: 'Chemistry',
        chapterId: 'c6-chem-05',
        chapterTitle: 'Air Around Us',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which major gas in air does NOT support burning?',
        options: ['A) Oxygen', 'B) Nitrogen', 'C) Pure hydrogen', 'D) Ozone'],
        correctAnswer: 'B',
        explanation: 'Nitrogen gas (about 78% of air) does not support combustion, keeping atmospheric burning under control.',
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
    id: 'c6-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Number Sense',
    order: 1,
    title: 'Knowing Our Numbers & Large Numbers',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Elementary counting',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Comparing numbers, place value systems (Indian and International), estimation, rounding off, Roman numerals, and brackets.',
    introduction: 'Mathematics is the language of patterns. From counting sheep to measuring distances to galaxies, place-value number systems allow us to write and manipulate arbitrarily large quantities.',
    topics: [
      'Comparing Numbers and Forming Smallest and Greatest Numbers',
      'Indian Place Value System (Lakhs, Crores) vs International System (Millions, Billions)',
      'Use of Commas in Large Numbers',
      'Estimation and Rounding off to Nearest 10, 100, 1000',
      'Roman Numerals (I, V, X, L, C, D, M) and Their Rules'
    ],
    summaryNotes: `### Core Systems:
- **Indian System:** Units, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores, Ten Crores.
  * Commas: After 3 digits from right, then after every 2 digits (e.g., $4,25,67,890$).
- **International System:** Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions, Hundred Millions, Billions.
  * Commas: After every 3 digits from right (e.g., $42,567,890$).
- **Equivalence:**
  * $1\\text{ Million} = 10\\text{ Lakhs} = 1,000,000$
  * $1\\text{ Crore} = 10\\text{ Millions} = 10,000,000$
  * $1\\text{ Billion} = 1,000\\text{ Millions} = 100\\text{ Crores}$
- **Roman Numerals:** $I=1, V=5, X=10, L=50, C=100, D=500, M=1000$. Symbol cannot be repeated more than 3 times.`,
    definitions: [
      'Place Value: The value of each digit in a number based on its position.',
      'Rounding Off: Approximating a number to a convenient nearby benchmark value.'
    ],
    formulas: [
      { name: 'Million-Crore Conversion', formula: '1\\text{ Crore} = 10\\text{ Millions}', explanation: 'Conversion between Indian and International systems.', units: 'Dimensionless' }
    ],
    solvedExamples: [
      {
        question: 'Insert commas suitably and write the number according to International System: 78921092.',
        solution: 'Group in blocks of 3 from the right: 78,921,092. In words: Seventy-eight million, nine hundred twenty-one thousand, ninety-two.',
        keyInsight: 'In International system, place commas after every 3 digits from the units place.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c6-m1-01',
        subject: 'Mathematics',
        chapterId: 'c6-math-01',
        chapterTitle: 'Knowing Our Numbers & Large Numbers',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'How many thousands make one crore?',
        options: ['A) 100', 'B) 1,000', 'C) 10,000', 'D) 100,000'],
        correctAnswer: 'C',
        explanation: '1 crore = 10,000,000. 10,000,000 / 1,000 = 10,000 thousands.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Whole Numbers',
    order: 2,
    title: 'Whole Numbers & Number Line',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Knowing Our Numbers',
    totalConcepts: 5,
    durationHours: 3.0,
    description: 'Natural numbers vs whole numbers, predecessor and successor, representation on number line, properties of whole numbers (closure, commutative, associative, distributive), and identity elements.',
    introduction: 'Counting natural numbers begins at 1. When zero is included, we get the set of Whole Numbers (0, 1, 2, 3, ...). Properties of arithmetic operations on whole numbers form the backbone of algebra.',
    topics: [
      'Natural Numbers ($N$) vs Whole Numbers ($W = \\{0, 1, 2, \\dots\\}$)',
      'Predecessor ($n - 1$) and Successor ($n + 1$)',
      'Addition and Subtraction on the Number Line',
      'Properties of Operations: Closure, Commutative, Associative',
      'Distributive Property of Multiplication over Addition: $a \\times (b + c) = a \\times b + a \\times c$',
      'Additive Identity (0) and Multiplicative Identity (1)'
    ],
    summaryNotes: `### Core Algebraic Properties:
1. **Closure:** If $a, b \\in W$, then $a + b \\in W$ and $a \\times b \\in W$. (Subtraction and division are NOT closed).
2. **Commutative Property:**
   - $a + b = b + a$
   - $a \\times b = b \\times a$
3. **Associative Property:**
   - $(a + b) + c = a + (b + c)$
   - $(a \\times b) \\times c = a \\times (b \\times c)$
4. **Distributive Property:**
   - $a \\times (b + c) = (a \\times b) + (a \\times c)$ (Extremely useful for fast calculations!)
5. **Identities:**
   - $a + 0 = a$ ($0$ is additive identity)
   - $a \\times 1 = a$ ($1$ is multiplicative identity)
   - Division by zero is **undefined**.`,
    definitions: [
      'Distributive Property: Multiplying the sum of two addends by a number gives the same result as multiplying each addend individually by the number and adding the products.',
      'Additive Identity: A number that, when added to any number, leaves the number unchanged (zero).'
    ],
    formulas: [
      { name: 'Distributive Law', formula: 'a(b + c) = ab + ac', explanation: 'Allows breaking complex products into easier sums.', units: 'Algebraic' }
    ],
    solvedExamples: [
      {
        question: 'Find the product using distributive property: 738 × 103.',
        solution: '738 * 103 = 738 * (100 + 3) = (738 * 100) + (738 * 3) = 73,800 + 2,214 = 76,014.',
        keyInsight: 'Break 103 as (100 + 3) to multiply quickly without long multi-step multiplication.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c6-m2-01',
        subject: 'Mathematics',
        chapterId: 'c6-math-02',
        chapterTitle: 'Whole Numbers & Number Line',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which property is demonstrated by: 25 × (40 + 2) = (25 × 40) + (25 × 2)?',
        options: ['A) Commutative property', 'B) Associative property', 'C) Distributive property', 'D) Closure property'],
        correctAnswer: 'C',
        explanation: 'Multiplication distributes over the terms inside the parentheses: a(b + c) = ab + ac.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Number Theory',
    order: 3,
    title: 'Playing with Numbers (Factors, Multiples, Primes)',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Whole Numbers',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Factors and multiples, prime and composite numbers, divisibility tests (2, 3, 4, 5, 6, 8, 9, 10, 11), prime factorization, HCF and LCM.',
    introduction: 'Every integer greater than 1 can be uniquely broken down into prime factors—the atoms of mathematics. Master HCF and LCM techniques here to excel in future algebra and Olympiads.',
    topics: [
      'Factors vs Multiples: Definitions and Finite vs Infinite sets',
      'Prime Numbers (Sieve of Eratosthenes) and Composite Numbers',
      'Co-prime Numbers and Twin Primes',
      'Divisibility Rules for 2, 3, 4, 5, 6, 8, 9, 10, and 11',
      'Prime Factorization using Factor Tree and Division Method',
      'Highest Common Factor (HCF) and Lowest Common Multiple (LCM)',
      'Relation: Product of two numbers = HCF × LCM'
    ],
    summaryNotes: `### Core Divisibility Tests:
- **By 3:** Sum of digits is divisible by 3.
- **By 4:** Last two digits form a number divisible by 4.
- **By 6:** Divisible by both 2 and 3.
- **By 9:** Sum of digits is divisible by 9.
- **By 11:** Difference between sum of digits at odd places and sum at even places is either 0 or a multiple of 11.
### Fundamental Relation:
$$\\text{Product of two numbers } (a \\times b) = \\text{HCF}(a, b) \\times \\text{LCM}(a, b)$$`,
    definitions: [
      'Prime Number: A whole number greater than 1 that has exactly two factors: 1 and itself.',
      'Co-prime Numbers: Two numbers that have only 1 as their common factor (e.g., 4 and 9).'
    ],
    formulas: [
      { name: 'HCF-LCM Product Relation', formula: 'a \\times b = \\text{HCF}(a, b) \\times \\text{LCM}(a, b)', explanation: 'Exact relationship for any two positive integers a and b.', units: 'Integer equality' }
    ],
    solvedExamples: [
      {
        question: 'The HCF of two numbers is 12 and their product is 2160. Find their LCM.',
        solution: 'HCF * LCM = Product of numbers => 12 * LCM = 2160 => LCM = 2160 / 12 = 180.',
        keyInsight: 'Divide the product of numbers by HCF to get LCM directly.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c6-m3-01',
        subject: 'Mathematics',
        chapterId: 'c6-math-03',
        chapterTitle: 'Playing with Numbers (Factors, Multiples, Primes)',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following pairs of numbers are co-prime?',
        options: ['A) 15 and 35', 'B) 18 and 35', 'C) 21 and 28', 'D) 14 and 49'],
        correctAnswer: 'B',
        explanation: 'Factors of 18 are 1, 2, 3, 6, 9, 18. Factors of 35 are 1, 5, 7, 35. Their only common factor is 1, so they are co-prime.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Geometry',
    order: 4,
    title: 'Basic Geometrical Ideas',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Observation of shapes',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Points, line segments, rays, lines, intersecting & parallel lines, curves, polygons, angles, triangles, quadrilaterals, circles (radius, diameter, chord, sector, segment).',
    introduction: 'Geometry originates from Greek words "Geo" (Earth) and "Metron" (Measurement). Drawing accurate points, straight lines, polygons, and circles forms the cornerstone of spatial reasoning.',
    topics: [
      'Points, Line Segment (finite), Ray (one endpoint), and Line (infinite both sides)',
      'Intersecting Lines vs Parallel Lines',
      'Curves: Open and Closed Curves, Interior and Exterior',
      'Polygons: Sides, Vertices, and Diagonals',
      'Angles: Vertex, Arms, and Interior/Exterior',
      'Triangles and Quadrilaterals: Basic Classification',
      'Parts of a Circle: Center, Radius, Diameter, Chord, Arc, Sector, and Segment'
    ],
    summaryNotes: `### Core Geometrical Foundations:
1. **Line Segment vs Ray vs Line:**
   - Line Segment: Fixed length, 2 endpoints ($AB$).
   - Ray: One starting point, extends infinitely in one direction ($\\vec{AB}$).
   - Line: No endpoints, extends infinitely in both directions ($\\overleftrightarrow{AB}$).
2. **Circle Geometry:**
   - **Diameter ($d$):** Longest chord passing through center ($d = 2r$).
   - **Chord:** A line segment joining any two points on a circle.
   - **Sector:** Region bounded by two radii and the arc between them (like a slice of pizza).
   - **Segment:** Region enclosed between a chord and its corresponding arc.`,
    definitions: [
      'Collinear Points: Three or more points that lie on the exact same straight line.',
      'Sector of Circle: The region in the interior of a circle enclosed by an arc on one side and a pair of radii on the other two sides.'
    ],
    formulas: [
      { name: 'Circle Diameter', formula: 'd = 2r', explanation: 'Diameter is twice the radius.', units: 'Units of length' }
    ],
    solvedExamples: [
      {
        question: 'If the radius of a circular wheel is 14 cm, what is the length of its diameter?',
        solution: 'Diameter d = 2 * r = 2 * 14 cm = 28 cm.',
        keyInsight: 'Diameter is always double the radius.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c6-m4-01',
        subject: 'Mathematics',
        chapterId: 'c6-math-04',
        chapterTitle: 'Basic Geometrical Ideas',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'The longest chord of a circle is known as its:',
        options: ['A) Radius', 'B) Tangent', 'C) Diameter', 'D) Secant'],
        correctAnswer: 'C',
        explanation: 'The chord passing through the center of a circle has the maximum possible length and is called the diameter.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Fractions & Decimals',
    order: 5,
    title: 'Fractions and Decimals',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Whole Numbers',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Fraction as part of a whole, proper, improper, mixed fractions, equivalent fractions, comparing fractions, addition/subtraction, decimals, place value, and conversions.',
    introduction: 'When quantities cannot be described by integers alone—such as sharing three rotis among four people—fractions and decimals provide the necessary precision.',
    topics: [
      'What is a Fraction? Fraction on a Number Line',
      'Types of Fractions: Proper ($N < D$), Improper ($N \\ge D$), and Mixed ($w \\frac{a}{b}$)',
      'Equivalent Fractions and Simplest (Irreducible) Form',
      'Like and Unlike Fractions: Addition and Subtraction',
      'Decimals as Tenths and Hundredths: Place Value Chart',
      'Comparing Decimals and Adding/Subtracting Decimals in Real Life'
    ],
    summaryNotes: `### Core Fraction Rules:
- **Proper Fraction:** Numerator < Denominator (Value < 1).
- **Improper Fraction:** Numerator $\\ge$ Denominator (Value $\\ge$ 1). Converted to mixed fraction: $Q \\frac{R}{D}$.
- **Equivalent Fraction:** Obtained by multiplying or dividing both numerator and denominator by the same non-zero integer: $\\frac{a \\times k}{b \\times k} = \\frac{a}{b}$.
- **Decimals:** Fractions with denominator 10, 100, 1000 can be represented in decimal notation (e.g., $\\frac{7}{10} = 0.7$, $\\frac{25}{100} = 0.25$).`,
    definitions: [
      'Equivalent Fractions: Fractions that represent the same proportion or value despite having different numerators and denominators.',
      'Decimals: Numbers that express fractional parts using base-ten place values with a decimal point.'
    ],
    formulas: [
      { name: 'Mixed Fraction Conversion', formula: 'w\\frac{a}{b} = \\frac{(w \\times b) + a}{b}', explanation: 'Converts mixed numeral to improper fraction.', units: 'Rational' }
    ],
    solvedExamples: [
      {
        question: 'Solve: 2/5 + 3/7.',
        solution: 'LCM of denominators 5 and 7 is 35.\nConvert to like fractions: 2/5 = (2*7)/35 = 14/35; 3/7 = (3*5)/35 = 15/35.\nAdd: 14/35 + 15/35 = 29/35.',
        keyInsight: 'Find the LCM of denominators before adding unlike fractions.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c6-m5-01',
        subject: 'Mathematics',
        chapterId: 'c6-math-05',
        chapterTitle: 'Fractions and Decimals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which of the following is an improper fraction?',
        options: ['A) 3/7', 'B) 5/8', 'C) 9/4', 'D) 2/9'],
        correctAnswer: 'C',
        explanation: 'In 9/4, the numerator (9) is greater than the denominator (4), making it an improper fraction.',
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
    id: 'c6-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Nutrition & Food Science',
    order: 1,
    title: 'Food: Where Does It Come From?',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'Basic priority',
    prerequisite: 'Everyday meals observation',
    totalConcepts: 5,
    durationHours: 2.5,
    description: 'Food variety, ingredients, plant sources (roots, stems, leaves, seeds), animal sources (milk, meat, eggs, honey), herbivores, carnivores, and omnivores.',
    introduction: 'All living organisms need nourishment to grow, repair worn-out tissues, and obtain energy. Understanding where our food originates and how organisms are categorized by their diet is the starting point of ecology.',
    topics: [
      'Food Variety and Ingredients',
      'Plant Parts Eaten as Food: Roots (Carrot), Stems (Potato), Leaves (Spinach), Flowers, Seeds',
      'Animal Products: Milk, Eggs, Poultry, Fish, Meat, and Honey from Bees',
      'Herbivores: Plant eaters (Cow, deer, elephant)',
      'Carnivores: Meat eaters (Lion, tiger, wolf)',
      'Omnivores: Plant and animal eaters (Humans, crow, bear)'
    ],
    summaryNotes: `### Core Classifications:
1. **Plant Sources of Food:**
   - Roots: Carrot, radish, beetroot, turnip.
   - Stems: Potato, ginger, sugarcane, onion.
   - Leaves: Spinach, cabbage, coriander, fenugreek.
   - Flowers: Cauliflower, pumpkin flowers.
   - Seeds: Wheat, rice, pulses, mustard, groundnut.
   - Sprouts: Germinated seeds of moong or chana rich in vitamins and proteins.
2. **Feeding Categories:**
   - **Herbivores:** Animals that feed strictly on plants and plant products.
   - **Carnivores:** Animals that feed only on other animals.
   - **Omnivores:** Animals that eat both plants and animal flesh.`,
    definitions: [
      'Ingredients: The raw food materials combined together to cook a particular dish.',
      'Nectar: Sweet liquid collected by honeybees from flowers and converted into honey.'
    ],
    formulas: [
      { name: 'Trophic Classification', formula: '\\text{Herbivore } (1^\\circ) \\rightarrow \\text{Carnivore } (2^\\circ)', explanation: 'Dietary role in ecological food chains.', units: 'Category' }
    ],
    solvedExamples: [
      {
        question: 'Identify the edible parts of the mustard plant.',
        solution: 'Mustard seeds yield cooking mustard oil, and the green mustard leaves are cooked as vegetables (sarson ka saag).',
        keyInsight: 'Many plants have more than one edible part.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c6-b1-01',
        subject: 'Biology',
        chapterId: 'c6-bio-01',
        chapterTitle: 'Food: Where Does It Come From?',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which part of a potato plant is consumed as food?',
        options: ['A) Root', 'B) Underground stem', 'C) Fruit', 'D) Flower'],
        correctAnswer: 'B',
        explanation: 'Potato is a modified underground stem (tuber) used by the plant for food storage.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Biochemistry & Dietetics',
    order: 2,
    title: 'Components of Food & Balanced Diet',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Food Sources',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Major nutrients (carbohydrates, proteins, fats, vitamins, minerals), dietary fiber, water, tests for starch, protein and fats, balanced diet, and deficiency diseases.',
    introduction: 'Food contains essential nutrients required for bodily functions. A deficiency or excess of specific vitamins or minerals leads to severe clinical disorders. Understanding nutrition is fundamental for future medical students.',
    topics: [
      'Major Nutrients: Carbohydrates (Energy), Fats (Reserve energy), Proteins (Body-building)',
      'Vitamins and Minerals: Micronutrients for Immunity and Metabolic Regulation',
      'Laboratory Tests: Iodine Test for Starch, Biuret/Copper Sulphate Test for Protein, Paper Blot Test for Fats',
      'Dietary Fiber (Roughage) and Water: Importance in Digestion and Excretion',
      'Balanced Diet: Composition across age groups and physical activities',
      'Deficiency Diseases: Scurvy, Rickets, Beriberi, Night Blindness, Goitre, Anemia'
    ],
    summaryNotes: `### Essential Diagnostic Tests:
- **Starch Test:** Add 2 drops of dilute **Iodine solution** to food. Blue-black color confirms starch.
- **Protein Test:** Add 2 drops of **Copper Sulphate** ($CuSO_4$) solution and 10 drops of **Caustic Soda** ($NaOH$). Violet color confirms proteins.
- **Fat Test:** Rubbing food onto paper leaves a translucent greasy patch.
### Deficiency Diseases Table:
- Vitamin A: **Night Blindness** (Poor vision in dim light).
- Vitamin B1: **Beriberi** (Weak muscles, very little energy).
- Vitamin C: **Scurvy** (Bleeding gums, delayed wound healing).
- Vitamin D: **Rickets** (Bones become soft and bent).
- Calcium: **Bone and tooth decay**.
- Iodine: **Goitre** (Swollen thyroid gland in neck, mental disability in children).
- Iron: **Anemia** (Weakness, low hemoglobin).`,
    definitions: [
      'Balanced Diet: A diet that contains all essential nutrients, roughage, and water in proper proportions required for healthy growth and maintenance.',
      'Deficiency Disease: A disease caused by the lack of an essential nutrient in the diet over a prolonged period.'
    ],
    formulas: [
      { name: 'Energy Comparison', formula: '1\\text{ g Fat } (9\\text{ kcal}) > 1\\text{ g Carbohydrate } (4\\text{ kcal})', explanation: 'Fats provide more than double the energy of carbohydrates per unit mass.', units: 'kcal/g' }
    ],
    solvedExamples: [
      {
        question: 'A child has bowed legs and soft, weak bones. Which vitamin deficiency is the child likely suffering from, and what source should be recommended?',
        solution: 'The symptoms indicate Rickets, caused by deficiency of Vitamin D and Calcium. Recommend exposure to morning sunlight, milk, eggs, and fish.',
        keyInsight: 'Vitamin D is required for absorption of calcium in growing bones.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c6-b2-01',
        subject: 'Biology',
        chapterId: 'c6-bio-02',
        chapterTitle: 'Components of Food & Balanced Diet',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which solution is used in the laboratory to test the presence of starch in food?',
        options: ['A) Dilute Iodine solution', 'B) Copper sulphate solution', 'C) Caustic soda', 'D) Methyl orange'],
        correctAnswer: 'A',
        explanation: 'Dilute iodine solution reacts with starch to produce an intense blue-black coloration.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Botany & Plant Anatomy',
    order: 3,
    title: 'Getting to Know Plants',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Basic plant observation',
    totalConcepts: 6,
    durationHours: 4.0,
    description: 'Herbs, shrubs, trees, creepers, climbers, root systems (taproot vs fibrous root), leaf venation (reticulate vs parallel), photosynthesis, parts of a flower (sepals, petals, stamens, pistil).',
    introduction: 'Plants are the primary producers on Earth. Examining plant architecture—from roots anchoring the stem to petals attracting pollinators—reveals intricate biological adaptations tested heavily in NEET.',
    topics: [
      'Classification by Size: Herbs (Green tender stems), Shrubs (Woody branch near base), Trees (Thick tall trunk)',
      'Creepers and Climbers (Weak stems needing support)',
      'Leaf Structure: Petiole, Lamina, Veins, Midrib, Reticulate vs Parallel Venation',
      'Root Systems: Tap Root (with lateral roots) vs Fibrous Root System',
      'Correlation: Reticulate venation ↔ Taproot; Parallel venation ↔ Fibrous root!',
      'Anatomy of a Flower: Sepals, Petals, Stamens (Anther + Filament), Pistil (Stigma + Style + Ovary)'
    ],
    summaryNotes: `### Core Botanical Rules:
1. **Venation and Root Correlation:**
   - **Reticulate Venation:** Web-like veins (Peepal, Mango, Rose, Gram) $\\implies$ **Taproot System**.
   - **Parallel Venation:** Straight parallel veins (Grass, Wheat, Maize, Banana) $\\implies$ **Fibrous Root System**.
2. **Leaf Functions:** Photosynthesis ($CO_2 + H_2O \\xrightarrow{Sunlight, Chlorophyll} Glucose + O_2$) and Transpiration.
3. **Flower Anatomy:**
   - **Stamen (Male reproductive part):** Composed of filament and anther (holds pollen grains).
   - **Pistil / Carpel (Female reproductive part):** Composed of stigma (sticky top), style (slender tube), and ovary (swollen base containing ovules).
   - Ovary develops into **Fruit**; ovules develop into **Seeds** after fertilization.`,
    definitions: [
      'Venation: The pattern of veins in the blade or lamina of a leaf.',
      'Pistil: The innermost, female reproductive organ of a flower consisting of stigma, style, and ovary.'
    ],
    formulas: [
      { name: 'Botanical Correlation', formula: '\\text{Reticulate Venation} \\iff \\text{Taproot}; \\quad \\text{Parallel Venation} \\iff \\text{Fibrous Root}', explanation: 'Predicts root type from leaf venation without uprooting the plant.', units: 'Morphological rule' }
    ],
    solvedExamples: [
      {
        question: 'If a plant has leaves with parallel venation, what kind of roots is it expected to have? Explain without pulling out the plant.',
        solution: 'Plants with parallel venation (such as grasses, wheat, and maize) consistently possess a fibrous root system consisting of a cluster of thin, similar-sized roots branching directly from the stem base.',
        keyInsight: 'Parallel venation directly correlates with fibrous roots.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c6-b3-01',
        subject: 'Biology',
        chapterId: 'c6-bio-03',
        chapterTitle: 'Getting to Know Plants',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which part of a flower develops into the fruit after fertilization?',
        options: ['A) Petal', 'B) Anther', 'C) Ovary', 'D) Sepal'],
        correctAnswer: 'C',
        explanation: 'After fertilization, the ovary of the flower matures and swells into the fruit, while the ovules become seeds.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Human Anatomy & Locomotion',
    order: 4,
    title: 'Body Movements & Human Skeletal System',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Basic body parts',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Human skeletal system, bones and cartilage, joints (ball and socket, pivot, hinge, fixed), muscular contraction, locomotion in earthworm, snail, cockroach, bird, fish, and snake.',
    introduction: 'How do we bend our fingers, walk, or nod our heads? Movement is achieved by muscles pulling on rigid skeletal frameworks across specialized articulating joints.',
    topics: [
      'Human Skeleton: Framework of 206 Bones, Cartilage, and X-ray Imaging',
      'Types of Synovial Joints: Ball and Socket Joint (Shoulder & Hip)',
      'Pivotal Joint (Neck & Head), Hinge Joint (Elbow & Knee), Fixed Joints (Cranium)',
      'How Muscles Work in Antagonistic Pairs: Biceps and Triceps',
      'Locomotion in Animals: Earthworm (Bristles/Setae), Snail (Muscular foot), Cockroach (Exoskeleton & 3 pairs of legs)',
      'Streamlined Body in Fishes and Birds, Wave-like slithering in Snakes'
    ],
    summaryNotes: `### Core Types of Joints:
- **Ball and Socket Joint:** Allows circular movement in all directions (e.g., shoulder joint, hip joint).
- **Pivotal Joint:** Allows cylindrical bone to rotate in a ring (e.g., neck joint connecting skull to spine for nodding/turning).
- **Hinge Joint:** Allows back-and-forth movement in one plane, like a door hinge (e.g., elbow, knee, fingers).
- **Fixed Joint:** Bones cannot move relative to one another (e.g., sutures of the skull cranium, upper jaw to skull).
### Muscle Coordination:
Muscles can only **pull**; they cannot push. To move a bone, two muscles work in pairs: when one contracts, the other relaxes.`,
    definitions: [
      'Joint: The articulation point where two or more bones meet in the body.',
      'Cartilage: A tough, flexible connective tissue softer than bone, found in earlobes, nose tips, and between vertebrae.'
    ],
    formulas: [
      { name: 'Antagonistic Muscle Rule', formula: '\\text{Flexor contracts} \\iff \\text{Extensor relaxes}', explanation: 'Paired action of muscles across movable joints.', units: 'Biomechanics' }
    ],
    solvedExamples: [
      {
        question: 'Why can we not bend our elbow backwards?',
        solution: 'The elbow is a hinge joint. Hinge joints permit movement in only one plane (forward bending) and are mechanically restricted from moving backwards.',
        keyInsight: 'Hinge joints act like door hinges with 1-directional freedom.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c6-b4-01',
        subject: 'Biology',
        chapterId: 'c6-bio-04',
        chapterTitle: 'Body Movements & Human Skeletal System',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which type of joint connects our shoulder bone to the upper arm?',
        options: ['A) Hinge joint', 'B) Fixed joint', 'C) Ball and socket joint', 'D) Pivotal joint'],
        correctAnswer: 'C',
        explanation: 'The ball and socket joint connects the head of the humerus to the glenoid cavity of the shoulder blade, allowing 360-degree rotation.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c6-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Ecology & Living World',
    order: 5,
    title: 'The Living Organisms and Their Surroundings',
    stage: 'foundation',
    classLevel: 'Class 6',
    priority: 'High priority',
    prerequisite: 'Food and components',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Biotic and abiotic factors, terrestrial habitats (deserts, mountains, grasslands), aquatic habitats (oceans, freshwater), structural adaptations, and characteristics of living organisms.',
    introduction: 'From freezing Arctic peaks to scorching sandy deserts, life thrives in astonishing diversity. Living organisms survive in harsh conditions because evolution equips them with specialized morphological and physiological adaptations.',
    topics: [
      'Habitats and Adaptations: Biotic Factors (Plants, animals, microbes) vs Abiotic Factors (Light, temperature, water, air, soil)',
      'Desert Adaptations: Camels (No sweat, concentrated urine, hump), Cactus (Spines, green stem photosynthesis)',
      'Mountain Adaptations: Conical trees, needle leaves, snow leopard thick fur, mountain goat strong hooves',
      'Aquatic Adaptations: Streamlined fish body, gills for dissolved oxygen, flexible stems in submerged plants',
      'Characteristics of Living Things: Cellular organization, growth, respiration, stimulus-response, excretion, reproduction'
    ],
    summaryNotes: `### Core Habitat Adaptations:
1. **Camel (Desert Terrestrial):**
   - Long legs keep body away from hot sand.
   - Excretes small amount of urine, dung is dry, and does not sweat, conserving body water.
   - Broad padded hooves allow effortless walking on loose sand.
2. **Cactus (Xerophyte):**
   - Leaves modified into spines to minimize water loss by transpiration.
   - Thick fleshy green stem conducts photosynthesis and stores water.
   - Extensive deep root systems penetrate far underground.
3. **Fish (Aquatic):**
   - Streamlined spindle shape minimizes fluid drag.
   - Gills extract dissolved oxygen from water.
   - Slippery scales protect body and assist swimming.`,
    definitions: [
      'Habitat: The natural surroundings or environment where an organism lives, feeds, and reproduces.',
      'Adaptation: The presence of specific features or habits which enable an organism to survive in its particular environment.'
    ],
    formulas: [
      { name: 'Ecosystem Components', formula: '\\text{Ecosystem} = \\text{Biotic Factors} + \\text{Abiotic Factors}', explanation: 'Fundamental ecological interaction unit.', units: 'Ecology' }
    ],
    solvedExamples: [
      {
        question: 'Why are leaves of desert plants (cacti) reduced to spines?',
        solution: 'In hot arid deserts, water is extremely scarce. Leaves have stomata that transpire water. Reducing leaves to thin sharp spines minimizes transpiration and protects the fleshy plant from herbivores.',
        keyInsight: 'Spines represent an evolutionary trade-off to stop water loss.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c6-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c6-b5-01',
        subject: 'Biology',
        chapterId: 'c6-bio-05',
        chapterTitle: 'The Living Organisms and Their Surroundings',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Gills in fish are specialized respiratory organs used to absorb:',
        options: ['A) Atmospheric nitrogen', 'B) Dissolved oxygen from water', 'C) Carbon dioxide from sunlight', 'D) Water vapor'],
        correctAnswer: 'B',
        explanation: 'Fish take in water through the mouth and force it over their gills, where thin blood capillaries absorb dissolved oxygen.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
