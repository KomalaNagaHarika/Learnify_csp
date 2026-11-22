import { ChapterStudyMaterial } from '../../types';

export const CLASS_7_STUDY_MATERIALS: Record<string, ChapterStudyMaterial> = {
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  'c7-phys-01': {
    introduction:
      'Have you ever watched an athlete sprint down a track and wondered how their speed is measured? Or noticed how the pendulum in a grandfather clock swings back and forth with steady rhythm? In Class 7, we explore how speed connects distance and time, how ancient civilizations measured time with sundials, and why Galileo\'s pendulum revolutionized timekeeping.',
    basicConcepts: [
      'Speed is the distance covered by an object in a unit of time. It tells us how fast or slow an object is moving.',
      'Uniform Motion: When an object moves along a straight line with a constant speed.',
      'Non-Uniform Motion: When the speed of an object changes as it moves along its path (like a city bus stopping in traffic).',
      'The simple pendulum exhibits periodic (oscillatory) motion, where the time taken for one complete swing is called its Time Period.'
    ],
    detailedExplanations: [
      {
        topic: '1. Calculating Speed and Unit Conversions',
        explanation:
          'Speed measures the rate of motion:\n$$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$$\n\n• The SI unit of speed is meters per second (m/s).\n• In daily vehicle odometers, speed is given in kilometers per hour (km/h).\n• Fast conversion rule: Multiply by 5/18 to convert km/h to m/s.\n  Example: $36\\text{ km/h} = 36 \\times \\frac{5}{18} = 10\\text{ m/s}$.'
      },
      {
        topic: '2. The Simple Pendulum and Time Period',
        explanation:
          'A simple pendulum consists of a small metallic sphere (called the bob) suspended by a light thread from a rigid stand. When pulled to one side and released, it swings back and forth.\n• One oscillation: Moving from mean position O to extreme A, then to opposite extreme B, and back to O.\n• Time Period ($T$): Time taken to complete one full oscillation.\n• Galileo discovered that the time period of a simple pendulum depends ONLY on the length of the string, not on the mass of the bob!',
        diagram: `
                    | (Rigid Support)
                    |
                    | Thread
                    |
              (A)   (O)   (B)
               \\     |     /
                O    O    O (Metallic Bob)
          Extreme  Mean  Extreme
        `
      },
      {
        topic: '3. Distance-Time Graphs',
        explanation:
          'A distance-time graph plots time along the horizontal X-axis and distance along the vertical Y-axis:\n• A straight diagonal line indicates constant uniform speed.\n• A steeper slope indicates higher speed (covers more distance in less time).\n• A horizontal flat line indicates the object is stationary (at rest).'
      }
    ],
    definitions: [
      'Speed: The distance traveled by an object per unit of time.',
      'Time Period: The time taken by a pendulum bob to complete one full oscillation.',
      'Odometer: A dashboard device in vehicles that measures the total distance traveled in kilometers.',
      'Speedometer: An instrument in vehicles that indicates instantaneous speed in km/h.'
    ],
    formulas: [
      { name: 'Speed Equation', formula: 'v = \\frac{s}{t}', explanation: 'Speed equals distance divided by time.', units: 'm/s or km/h' },
      { name: 'Unit Conversion Factor', formula: '1\\text{ km/h} = \\frac{5}{18}\\text{ m/s}', explanation: 'Converts kilometers per hour into meters per second.', units: 'Factor' }
    ],
    solvedExamples: [
      {
        question: 'A car covers a distance of 180 km in 3 hours. Calculate its speed in km/h and in m/s.',
        solution: 'Step 1: Speed in km/h = Distance / Time = 180 km / 3 h = 60 km/h.\nStep 2: Convert to m/s by multiplying by 5/18:\n60 x (5/18) = 300 / 18 = 16.67 m/s.',
        keyInsight: 'Speed = Distance / Time. Multiply km/h by 5/18 to get SI units (m/s).',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'The speedometer of a school bus displays speed in km/h, while its odometer records total kilometers traveled.',
      'Stopwatches in sports measure sprint times down to tenths or hundredths of a second.'
    ],
    quickRevision: [
      'Speed = Distance / Time. SI unit is m/s; practical unit is km/h.',
      'A straight diagonal line on a distance-time graph represents uniform motion.',
      'A simple pendulum\'s time period depends on the length of the string.'
    ]
  },

  'c7-phys-02': {
    introduction:
      'Have you ever wondered why an electric toaster gets hot, or how pressing a button rings the electric doorbell? When electricity flows through a wire, it does not just light bulbs—it generates heat and creates invisible magnetic fields! In this chapter, we explore the heating and magnetic effects of electric current.',
    basicConcepts: [
      'Electric current carries electrical energy through conducting wires.',
      'Heating Effect of Current: When current passes through a high-resistance wire, electrical energy transforms into heat energy.',
      'Electric Fuse: A safety device with a low melting point wire that melts and breaks the circuit if excessive current flows.',
      'Magnetic Effect of Current: Hans Christian Oersted discovered that an electric current carrying wire acts like an invisible magnet.'
    ],
    detailedExplanations: [
      {
        topic: '1. The Heating Effect & Heating Elements',
        explanation:
          'Appliances like electric irons, room heaters, geysers, and toasters contain a coil of high-resistance wire called a heating element (often made of Nichrome alloy). When switched on, the element glows red-hot, transforming electrical energy into useful heat.'
      },
      {
        topic: '2. Safety Devices: Electric Fuses and MCBs',
        explanation:
          'If too many appliances are connected to a single socket (overloading) or live and neutral wires touch directly (short circuit), current surges dangerously, which can cause house fires!\n• Electric Fuse: Contains a thin wire made of an alloy with a low melting point. If current exceeds safety limits, the fuse wire melts and snaps, breaking the circuit instantly.\n• MCB (Miniature Circuit Breaker): Modern automatic switches that trip and flip downward during dangerous current surges, resetting easily with a flick.'
      },
      {
        topic: '3. Electromagnets and Electric Doorbells',
        explanation:
          'Wind an insulated copper wire tightly around an iron nail and connect the ends to an electric cell. Bring paper clips near the nail—they stick to it! When current flows, the iron core becomes a temporary magnet called an electromagnet. The moment you disconnect the switch, its magnetism vanishes completely.\n\nElectromagnets are used in electric doorbells, telephone earpieces, MRI machines in hospitals, and giant scrapyard cranes.',
        diagram: `
       (+) [ Cell ] (-) 
        |            |
        +----[Switch]----+
        |                |
        +---\\\\\\ [ Iron Nail Core ] ///---+
              (Electromagnet Attracts Iron Clips)
        `
      }
    ],
    definitions: [
      'Heating Effect: The production of heat in a conductor due to resistance to flowing electric current.',
      'Electromagnet: A temporary magnet created by winding an insulated current-carrying coil around a soft iron core.',
      'Short Circuit: A direct low-resistance contact between live and neutral wires causing sudden dangerous current spikes.'
    ],
    formulas: [
      { name: 'Joule Heating Relation', formula: 'H \\propto I^2 R t', explanation: 'Heat produced increases with current squared, resistance, and time.', units: 'Joules' }
    ],
    solvedExamples: [
      {
        question: 'Why is copper wire never used as a fuse wire in household electrical boards?',
        solution: 'Copper has a very low resistance and a very high melting point (~1085°C). If excessive current surges through the circuit, a copper wire will not melt in time, allowing dangerous current to ruin appliances and cause fires.',
        keyInsight: 'Fuse wires must have a low melting point so they break before home wiring overheats.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'An electric room heater has a glowing red-orange coil that warms cold rooms in winter.',
      'Electric doorbells strike a metal gong when an internal electromagnet pulls a spring-loaded hammer.'
    ],
    quickRevision: [
      'Nichrome elements produce heat in irons, toasters, and geysers.',
      'Electric fuses and MCBs protect household circuits from overloading and short circuits.',
      'Current-carrying coils produce magnetic fields; electromagnets are temporary magnets.'
    ]
  },

  'c7-phys-03': {
    introduction:
      'Look into a smooth dressing table mirror: you see an upright reflection. Now look into the curved surface of a shiny stainless steel spoon: on the inner side, your face appears upside down, while on the outer bulging side, it appears small and upright! In this chapter, we master plane and spherical mirrors, lenses, and Newton\'s discovery of the rainbow spectrum.',
    basicConcepts: [
      'Reflection is the bouncing back of light from a polished, reflective surface.',
      'Image in a Plane Mirror: Virtual (cannot be caught on screen), upright (erect), identical in size to the object, and laterally inverted (left appears right).',
      'Spherical Mirrors: Concave mirrors curve inwards (like a cave); convex mirrors bulge outwards.',
      'White light is composed of seven constituent colors: VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red).'
    ],
    detailedExplanations: [
      {
        topic: '1. Lateral Inversion in Plane Mirrors',
        explanation:
          'When you stand before a plane mirror and raise your right hand, your mirror image appears to raise its left hand! This sideways reversal where left appears right and right appears left is called lateral inversion.\n\nThis is why the word "AMBULANCE" is written backwards on the front of emergency hospital vans: when drivers ahead look in their rearview mirrors, lateral inversion flips the letters back to read correctly!'
      },
      {
        topic: '2. Concave vs Convex Mirrors and Lenses',
        explanation:
          '• Concave Mirror (Inward Curve): Can form magnified, real images when the object is near. Used by dentists to see magnified teeth, and in car headlights and solar cookers to focus light into a beam.\n• Convex Mirror (Outward Bulge): Always forms an erect, diminished (smaller) virtual image over a very wide field of view. Used as rearview side mirrors in cars and scooters.\n• Lenses: A convex lens is thicker in the middle (magnifying glass, converges light). A concave lens is thinner in the middle (diverges light).'
      },
      {
        topic: '3. Sunlight: White Light Consisting of Seven Colors',
        explanation:
          'Sir Isaac Newton passed a narrow beam of sunlight through a triangular glass prism. The prism bent different colors by different amounts, spreading white light into a rainbow spectrum: Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR). Newton\'s disc—painted with these seven sectors—appears white when spun rapidly!'
      }
    ],
    definitions: [
      'Lateral Inversion: The reversal of left and right sides in an image formed by a plane mirror.',
      'Real Image: An image that can be projected and captured on a physical screen.',
      'Virtual Image: An image that cannot be formed on a screen; seen only inside the reflecting or refracting medium.',
      'Dispersion of Light: The splitting of white light into its seven constituent colors by a prism.'
    ],
    formulas: [
      { name: 'Rainbow Spectrum Order', formula: '\\text{VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red)}', explanation: 'Sequence of colors in white light spectrum according to wavelength.', units: 'Spectrum' }
    ],
    solvedExamples: [
      {
        question: 'Why are convex mirrors preferred as rearview mirrors in motor vehicles?',
        solution: 'Convex mirrors always form erect and diminished (smaller) images. This enables drivers to view a much wider field of road traffic behind them than a flat plane mirror would allow.',
        keyInsight: 'Convex mirrors provide a wide field of view with always-upright images.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Dentists use small concave mirrors on a handle to inspect hard-to-see cavities with magnification.',
      'Magnifying glasses used by jewelers and detectives are convex lenses that converge light to magnify small details.'
    ],
    quickRevision: [
      'Plane mirror images are virtual, erect, equal size, and laterally inverted.',
      'Concave mirrors focus light; convex mirrors give wide-angle road views.',
      'Convex lenses converge light; concave lenses diverge light.',
      'White light splits into 7 colors (VIBGYOR) via dispersion.'
    ]
  },

  'c7-phys-04': {
    introduction:
      'Touch a metal spoon left in hot tea, or step onto cool marble tiles in summer—how do our bodies sense hot and cold? Reliable temperature measurement requires clinical and laboratory thermometers. In this chapter, we study thermal energy transfer through conduction, convection, and radiation.',
    basicConcepts: [
      'Heat is a form of thermal energy that flows spontaneously from a body at higher temperature to one at lower temperature.',
      'Temperature is a reliable measure of the degree of hotness or coldness of an object, measured in degrees Celsius (°C) using thermometers.',
      'Heat transfers by three methods: Conduction (solids), Convection (liquids & gases), and Radiation (does not require any medium!).'
    ],
    detailedExplanations: [
      {
        topic: '1. Clinical vs Laboratory Thermometers',
        explanation:
          '• Clinical Thermometer: Used specifically to measure human body temperature. Range is 35°C to 42°C (normal human body temperature is ~37°C or 98.6°F). Has a small kink (constriction) in the glass capillary tube near the bulb that prevents the mercury thread from falling back when removed from the patient\'s mouth.\n• Laboratory Thermometer: Used for science experiments. Has a wide range (-10°C to 110°C) and no kink; readings must be recorded while the bulb is still immersed in the liquid.'
      },
      {
        topic: '2. Three Modes of Heat Transfer: Conduction, Convection, Radiation',
        explanation:
          '1. Conduction: Transfer of heat from the hotter end to the colder end through direct contact between neighboring particles in solids without actual movement of the particles (e.g., metal spoon heating up in a bowl of soup).\n2. Convection: Transfer of heat in fluids (liquids and gases) by actual bodily movement of heated particles rising upward while colder, denser fluid sinks down (e.g., boiling water in a kettle).\n3. Radiation: Transfer of heat through electromagnetic waves without requiring any physical medium (e.g., heat from the Sun traveling across 150 million kilometers of empty vacuum to warm the Earth).'
      },
      {
        topic: '3. Sea Breeze and Land Breeze in Coastal Areas',
        explanation:
          '• Sea Breeze (Daytime): Land heats up much faster than ocean water. Warm air over land rises, and cool breeze blows from the sea towards the land.\n• Land Breeze (Nighttime): Land cools down much faster than sea water. The air over the ocean stays warmer and rises, causing cool breeze to blow from land towards the sea.'
      }
    ],
    definitions: [
      'Conduction: Heat transfer in solids from a hotter region to a cooler region without bodily displacement of particles.',
      'Convection: Heat transfer in fluids caused by the circulatory movement of warmer less-dense fluid rising and cooler fluid sinking.',
      'Radiation: The emission and transmission of thermal energy in the form of electromagnetic rays through vacuum or transparent media.'
    ],
    formulas: [
      { name: 'Temperature Scale Conversion', formula: '^\\circ F = \\left(^\\circ C \\times \\frac{9}{5}\\right) + 32', explanation: 'Converts Celsius temperature to Fahrenheit.', units: '°F' }
    ],
    solvedExamples: [
      {
        question: 'Why do we wear dark-colored woolen clothes in winter and light-colored cotton clothes in summer?',
        solution: 'Dark surfaces are excellent absorbers of thermal radiation, capturing sunlight to keep us warm in winter. Light-colored white surfaces reflect most sunlight, keeping us cool in summer. Wool fibers also trap air pockets, providing insulation.',
        keyInsight: 'Dark colors absorb thermal radiation; light colors reflect thermal radiation.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Cooking utensils have copper or aluminum bottoms to conduct heat rapidly, but wooden or plastic handles to insulate hands.',
      'Thermos vacuum flasks have silvered double glass walls with a vacuum in between to eliminate conduction, convection, and radiation losses.'
    ],
    quickRevision: [
      'Normal human body temperature is 37°C (98.6°F).',
      'Conduction happens in solids; convection happens in fluids; radiation travels through vacuum.',
      'Sea breeze blows from sea to land during the day; land breeze blows from land to sea at night.'
    ]
  },

  'c7-phys-05': {
    introduction:
      'Air is invisible, but moving air (wind) can generate electricity, sail ships, or unleash devastating storms, tornadoes, and cyclones. In this chapter, we discover the physics of atmospheric pressure differences, how heating creates wind currents, and how meteorologists track cyclones to save lives.',
    basicConcepts: [
      'Moving air is called wind.',
      'High-speed winds are accompanied by reduced air pressure (Bernoulli\'s principle).',
      'Air expands on heating and becomes lighter (less dense), rising upward, creating a low-pressure area.',
      'Wind always flows from high-pressure regions to low-pressure regions.'
    ],
    detailedExplanations: [
      {
        topic: '1. Fast Winds Reduce Air Pressure (The Can-Crush Experiment)',
        explanation:
          'Blow hard across the top of a strip of paper held between your fingers: the paper lifts upward! Why? High-speed air rushing over the top surface reduces air pressure above it. The normal, higher atmospheric pressure underneath pushes the paper up.\n\nDuring violent storms, high-speed winds blowing across the roofs of tin sheds create very low pressure above the roof, causing the higher pressure inside the house to blow the roof clean off!'
      },
      {
        topic: '2. Generation of Wind Currents on Earth',
        explanation:
          'Wind currents are caused by uneven heating of the Earth:\n• Uneven heating between Equator and Poles: The Equator receives direct solar radiation and becomes warm. Warm air rises, and cooler air from 30° latitude belts rushes toward the equator.\n• Uneven heating of Land and Water: In summer, land near the equator warms faster than ocean water, drawing moist monsoon winds that bring heavy rain across India.'
      },
      {
        topic: '3. Thunderstorms and Tropical Cyclones',
        explanation:
          '• Thunderstorm: Swift upward movement of warm moist air causes water droplets to condense, freeze, and fall. The collision between rising air currents and falling ice creates electric sparks (lightning) and roaring sound (thunder).\n• Cyclone: When warm water vapor condenses into rain clouds, it releases latent heat into the atmosphere, warming the air further. As warm air rises, a very low-pressure center develops with ferocious winds revolving around it at over 200 km/h. The calm center is called the "eye" of the cyclone.'
      }
    ],
    definitions: [
      'Wind: Air in natural horizontal motion caused by atmospheric pressure variations.',
      'Cyclone: A massive, violently revolving tropical storm system around a calm low-pressure center called the eye.',
      'Anemometer: An instrument with rotating cups used by weather stations to measure wind speed.'
    ],
    formulas: [
      { name: 'Wind Flow Direction', formula: '\\text{Flows from [High Pressure Area]} \\longrightarrow \\text{[Low Pressure Area]}', explanation: 'Fundamental atmospheric pressure gradient drive.', units: 'Fluid dynamics' }
    ],
    solvedExamples: [
      {
        question: 'Why are ventilators always built high up near the ceiling of rooms rather than down near the floor?',
        solution: 'Air that we exhale is warm and less dense than cool air. Warm air naturally rises toward the ceiling by convection and escapes through high ventilators, while fresh, cool, oxygen-rich air enters through windows below.',
        keyInsight: 'Warm air expands, becomes less dense, and naturally rises upward.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Cyclone warning radars and INSAT weather satellites give 48-hour alerts, allowing coastal fishermen to return to safety.',
      'Hot air balloons rise into the sky because the air heated by the gas burner inside is lighter than the cool surrounding outdoor air.'
    ],
    quickRevision: [
      'Air expands and rises on heating; cool air sinks.',
      'High wind speed creates low pressure.',
      'Cyclones form around low-pressure centers with revolving storm clouds.',
      'An anemometer measures wind speed.'
    ]
  },

  // ==========================================
  // CHEMISTRY (5 CHAPTERS)
  // ==========================================
  'c7-chem-01': {
    introduction:
      'Why does lemon juice taste sour, while baking soda tastes bitter and feels soapy between your fingers? In Class 7 Chemistry, we classify chemical substances into Acids, Bases, and Neutral Salts, and learn how natural indicators like turmeric and litmus paper detect them.',
    basicConcepts: [
      'Acids taste sour and turn blue litmus paper red.',
      'Bases taste bitter, feel slippery or soapy to the touch, and turn red litmus paper blue.',
      'Substances that are neither acidic nor basic are neutral (like pure distilled water and common salt solution).',
      'Indicators are special substances that change color in acidic and basic solutions.'
    ],
    detailedExplanations: [
      {
        topic: '1. Natural Acids in Foods We Eat',
        explanation:
          '• Citric Acid: Lemons, oranges, and limes.\n• Lactic Acid: Curd and yogurt.\n• Acetic Acid: Vinegar used in pickling.\n• Oxalic Acid: Spinach and tomatoes.\n• Tartaric Acid: Tamarind (imli), grapes, and unripe mangoes.\n• Formic Acid: Injected into skin by ant bites (causes burning and itching).'
      },
      {
        topic: '2. Common Bases and Natural Indicators',
        explanation:
          'Common bases: Calcium hydroxide (lime water), Sodium hydroxide (soaps), Ammonium hydroxide (window cleaners), Magnesium hydroxide (Milk of Magnesia antacid).\n\nNatural Indicators:\n• Litmus: Extracted from lichens. Turns red in acids and blue in bases.\n• Turmeric Paper: Bright yellow in acids/neutral solutions, but turns deep reddish-brown in bases (like soap).\n• China Rose (Gudhal): Turns magenta (dark pink) in acids and green in bases.'
      },
      {
        topic: '3. Neutralization Reaction & Daily Applications',
        explanation:
          'When an acid reacts with a base, they cancel out each other\'s chemical properties, producing Salt, Water, and Heat:\n$$\\text{Acid} + \\text{Base} \\longrightarrow \\text{Salt} + \\text{Water} + \\text{Heat}$$\nExample: $\\text{HCl} + \\text{NaOH} \\longrightarrow \\text{NaCl} + \\text{H}_2\\text{O} + \\text{Heat}$\n\nDaily Neutralization:\n• Indigestion: Excess stomach acid (HCl) causes acidity; doctors prescribe antacid tablets containing magnesium hydroxide base.\n• Ant Sting: Ant injects formic acid; rubbing moist baking soda (sodium hydrogen carbonate) or calamine solution neutralizes the acid.'
      }
    ],
    definitions: [
      'Acid: A chemical substance with a sour taste that turns blue litmus red.',
      'Base: A chemical substance with a bitter taste and soapy feel that turns red litmus blue.',
      'Neutralization: The chemical reaction between an acid and a base resulting in salt and water.'
    ],
    formulas: [
      { name: 'Neutralization Equation', formula: '\\text{Acid} + \\text{Base} \\longrightarrow \\text{Salt} + \\text{Water} + \\text{Heat}', explanation: 'Chemical neutralization producing neutral salt and water.', units: 'Chemical reaction' }
    ],
    solvedExamples: [
      {
        question: 'When a yellow turmeric stain on a white shirt is washed with laundry soap, why does it turn reddish-brown?',
        solution: 'Turmeric is a natural indicator that turns reddish-brown in the presence of basic substances. Laundry soap contains basic sodium salts, which trigger the color change from yellow to red.',
        keyInsight: 'Turmeric is a natural base indicator that turns red in alkaline solutions.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Farmers treat highly acidic soil with slaked lime (calcium hydroxide base) to restore fertile pH for crop roots.',
      'Factory waste contains toxic acids; industries neutralize it with basic chemicals before releasing it into rivers.'
    ],
    quickRevision: [
      'Acids turn blue litmus red; bases turn red litmus blue.',
      'Natural indicators include litmus (lichens), turmeric, and china rose.',
      'Acid + Base -> Salt + Water + Heat (Neutralization).',
      'Ant stings inject formic acid, neutralized with baking soda or calamine.'
    ]
  },

  'c7-chem-02': {
    introduction:
      'Crushing an empty aluminum soda can changes its shape, but it is still aluminum. Burning a piece of paper, however, leaves black ash and smoke—new substances with completely different properties! In this chapter, we master the distinction between physical and chemical changes.',
    basicConcepts: [
      'Physical Change: A change in physical properties (shape, size, state) where NO new chemical substance is formed. Most physical changes are reversible.',
      'Chemical Change: A process in which one or more completely new chemical substances with distinct properties are formed. Also known as a chemical reaction.',
      'Rusting of iron is a slow chemical change that costs billions of dollars worldwide annually.'
    ],
    detailedExplanations: [
      {
        topic: '1. Characteristics of Chemical Changes',
        explanation:
          'In a chemical change, new substances form along with observable indicators:\n• Evolution of heat, light, or sound (like bursting fireworks).\n• Production of gas bubbles (like baking soda reacting with vinegar releasing CO2).\n• Color change (like copper sulfate solution changing from blue to green when iron nails are added).\n• Formation of an insoluble precipitate or change in smell.'
      },
      {
        topic: '2. Classic Chemical Reactions: Magnesium and Iron vs Copper Sulfate',
        explanation:
          '• Burning Magnesium Ribbon: When silver magnesium ribbon burns in air, it produces a dazzling white flame and leaves white powdery Magnesium Oxide ash:\n$$2\\text{Mg} + \\text{O}_2 \\longrightarrow 2\\text{MgO}$$\n• Iron in Copper Sulfate Solution: Place an iron nail in blue copper sulfate solution. After 30 minutes, the liquid turns light green (ferrous sulfate forms) and a reddish-brown coating of copper metal deposits on the nail:\n$$\\text{Fe} + \\text{CuSO}_4 \\text{ (Blue)} \\longrightarrow \\text{FeSO}_4 \\text{ (Green)} + \\text{Cu} \\text{ (Brown)}$$'
      },
      {
        topic: '3. Rusting of Iron and Galvanization Prevention',
        explanation:
          'When iron is exposed to moisture and oxygen in the air, reddish-brown iron oxide (rust) forms, slowly eating away the metal:\n$$\\text{Iron (Fe)} + \\text{Oxygen (O}_2\\text{)} + \\text{Water (H}_2\\text{O)} \\longrightarrow \\text{Rust (Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O})$$\n\nBoth oxygen AND water are mandatory for rusting! Coastal ships rust far faster because salt water accelerates the chemical process.\n\nPrevention:\n• Painting and greasing.\n• Galvanization: Depositing a protective layer of zinc metal over iron (used in water pipes and roofing sheets).'
      }
    ],
    definitions: [
      'Chemical Change: A permanent change in which one or more new substances with new chemical properties are formed.',
      'Rusting: The oxidative chemical breakdown of iron in the presence of air and moisture.',
      'Galvanization: The industrial process of coating iron or steel with a protective thin layer of zinc.'
    ],
    formulas: [
      { name: 'Rusting Equation', formula: '4\\text{Fe} + 3\\text{O}_2 + 2x\\text{H}_2\\text{O} \\longrightarrow 2\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O} \\text{ (Rust)}', explanation: 'Oxidation of iron requiring both oxygen gas and moisture.', units: 'Chemical reaction' }
    ],
    solvedExamples: [
      {
        question: 'When baking soda is mixed with lemon juice, bubbles of gas are produced with a hissing sound. Is this a physical or chemical change?',
        solution: 'This is a chemical change. Lemon juice (citric acid) chemically reacts with baking soda (sodium hydrogen carbonate) to form new substances: sodium citrate salt, water, and bubbles of carbon dioxide gas.',
        keyInsight: 'The production of gas bubbles and formation of new substances confirms a chemical reaction.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Cutting vegetables is a physical change (only shape and size change), but cooking those vegetables in spices is a chemical change.',
      'Iron gates in coastal cities like Mumbai and Chennai rust rapidly due to humid, saline ocean breezes.'
    ],
    quickRevision: [
      'Physical changes alter shape/size with no new substance; chemical changes produce new substances.',
      'Burning magnesium ribbon gives magnesium oxide ash.',
      'Rusting requires both oxygen and water; galvanization with zinc prevents rust.'
    ]
  },

  'c7-chem-03': {
    introduction:
      'We turn on our taps and take running water for granted. Yet nearly one-third of the world\'s population faces severe freshwater shortages! In this chapter, we explore water tables, aquifers, depletion factors, and sustainable water management techniques.',
    basicConcepts: [
      'Groundwater is the water found underground in soil pores and rock fractures, constituting the primary source of water for wells and borewells.',
      'Water Table: The upper level below ground where all soil spaces and rock cracks are completely saturated with water.',
      'Infiltration: The process of rainwater seeping down into the soil to replenish groundwater.'
    ],
    detailedExplanations: [
      {
        topic: '1. What is an Aquifer?',
        explanation:
          'At deep underground levels, groundwater is stored in porous rock layers sandwiched between non-permeable rock strata. This natural underground reservoir is called an aquifer. Farmers pump water from aquifers using tube wells and electric submersible pumps.'
      },
      {
        topic: '2. Factors Depleting the Groundwater Table',
        explanation:
          'Why is the water table dropping dangerously across Indian states?\n• Increasing Population: Huge demand for drinking water, construction, and domestic use.\n• Agricultural Demands: Tube wells pump groundwater non-stop for water-thirsty crops like paddy and sugarcane.\n• Deforestation & Concrete Coverage: Paved roads and concrete footpaths prevent rainwater from seeping into the ground, causing water to run off into dirty storm drains instead of recharging aquifers.'
      },
      {
        topic: '3. Water Conservation: Drip Irrigation',
        explanation:
          'Drip irrigation is an ultra-efficient watering technique where narrow tubing delivers water directly drop-by-drop to the roots of individual plants. This eliminates evaporation and water runoff, using up to 70% less water than traditional flood irrigation!'
      }
    ],
    definitions: [
      'Water Table: The subterranean depth below which all pore spaces in rocks and soil are saturated with water.',
      'Aquifer: An underground geological layer of permeable rock or sand containing water.',
      'Drip Irrigation: A micro-irrigation method delivering water drop by drop directly to plant roots.'
    ],
    formulas: [
      { name: 'Groundwater Recharge Principle', formula: '\\text{Recharge Rate} \\ge \\text{Pumping Extraction Rate} \\implies \\text{Stable Water Table}', explanation: 'Condition required to prevent depletion of underground aquifers.', units: 'Water balance' }
    ],
    solvedExamples: [
      {
        question: 'Why does laying concrete roads and tiled pavements reduce the underground water table in cities?',
        solution: 'Concrete and tiles form an impermeable barrier that blocks rainwater from soaking into the soil (infiltration). Instead of recharging aquifers, rainwater runs off into storm drains and is lost, causing the water table to drop.',
        keyInsight: 'Permeable open soil is necessary for natural groundwater recharge.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Farmers in water-scarce regions of Maharashtra and Rajasthan use solar drip irrigation systems for pomegranate and grape farming.',
      'Rainwater harvesting structures built on apartment rooftops direct clean rain down recharge wells.'
    ],
    quickRevision: [
      'The water table is the upper level of groundwater.',
      'Infiltration recharges underground aquifers.',
      'Drip irrigation minimizes water wastage by targeting plant roots directly.'
    ]
  },

  'c7-chem-04': {
    introduction:
      'Forests are not just collections of trees—they are dynamic living ecosystems that act as the green lungs of our planet! In this chapter, we discover how the forest canopy filters sunlight, how forest floors recycle organic matter, and how trees regulate rainfall and prevent soil erosion.',
    basicConcepts: [
      'Forests serve as green lungs by absorbing carbon dioxide and releasing oxygen through photosynthesis.',
      'Forests act as natural water filters and recharge groundwater by slowing down rushing raindrops.',
      'Decomposers (bacteria, fungi, beetles) break down dead leaves and animal remains on the forest floor, converting them into dark, rich humus.'
    ],
    detailedExplanations: [
      {
        topic: '1. Layered Structure of a Forest',
        explanation:
          '1. Canopy: The topmost continuous ceiling formed by the interlocking crowns of tall trees.\n2. Understorey: Smaller trees, tall shrubs, and climbing vines growing beneath the canopy.\n3. Shrub Layer: Bushy woody vegetation growing closer to the ground.\n4. Forest Floor: Ground covered with dead twigs, leaves, mushrooms, and rich dark humus.'
      },
      {
        topic: '2. Forests Prevent Soil Erosion and Floods',
        explanation:
          'Tree roots bind soil particles firmly together like an underground net. When torrential rains fall, the dense forest canopy cushions the impact of raindrops, and the root systems absorb the water like a giant sponge, releasing it slowly into streams. Without trees, rushing rain washes away fertile topsoil and triggers flash floods.'
      }
    ],
    definitions: [
      'Canopy: The uppermost branchy layer of tall trees in a forest.',
      'Humus: Dark organic matter formed by the microbial decomposition of plant and animal remains.',
      'Food Web: An interconnected network of food chains in an ecosystem.'
    ],
    formulas: [
      { name: 'Forest Carbon Cycle', formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O } \\xrightarrow{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\text{ (Purifies Air)}', explanation: 'Forests act as global carbon sinks and oxygen generators.', units: 'Ecological balance' }
    ],
    solvedExamples: [
      {
        question: 'Why is there no waste in a natural forest?',
        solution: 'Every fallen leaf, fruit, twig, and animal waste is immediately fed upon by scavengers (like vultures and hyenas) and decomposed by soil microorganisms into humus. These nutrients are reabsorbed by plant roots, completing a zero-waste natural cycle.',
        keyInsight: 'Decomposers and scavengers ensure complete natural nutrient recycling.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'The Amazon rainforest produces roughly 20% of the world\'s terrestrial oxygen and absorbs billions of tons of carbon dioxide.',
      'Forest hill stations like Shimla and Ooty have cool climates and clear mountain springs due to dense pine and oak cover.'
    ],
    quickRevision: [
      'Forest layers: Canopy, understorey, shrub layer, and forest floor.',
      'Decomposers turn organic waste into humus.',
      'Tree roots anchor soil and prevent floods.'
    ]
  },

  'c7-chem-05': {
    introduction:
      'Where does the dirty, soapy water go after you take a bath, wash clothes, or flush the toilet? That water is called wastewater or sewage. If released directly into rivers, it pollutes drinking water and kills aquatic life. In this chapter, we discover how sewage treatment plants purify wastewater before returning it safely to nature.',
    basicConcepts: [
      'Sewage is liquid waste originating from homes, industries, hospitals, and offices. It contains dissolved and suspended impurities called contaminants.',
      'Wastewater Treatment Plant (WWTP): A facility that removes physical, chemical, and biological contaminants from sewage.',
      'Treated effluent water can be safely discharged into rivers or reused for irrigating parks and farmland.'
    ],
    detailedExplanations: [
      {
        topic: '1. Step-by-Step Wastewater Treatment Process',
        explanation:
          '1. Bar Screens: Sewage passes through large vertical bars that remove large solid debris like plastic bottles, cans, sticks, and rags.\n2. Grit and Sand Removal Tank: Speed of wastewater is reduced so heavy sand, grit, and pebbles settle to the bottom.\n3. Primary Clarifier: Water sits in a large settling tank sloped toward the center. Heavier feces settle as sludge, while floating oils and grease are skimmed off the top.\n4. Aeration Tank: Air is pumped into clarified water, stimulating aerobic bacteria to consume human waste, food scraps, and soaps.\n5. Disinfection: Before releasing treated water, chemicals like Chlorine or Ozone are added to kill harmful pathogens.'
      },
      {
        topic: '2. Better Housekeeping Practices to Reduce Pollution',
        explanation:
          '• Never pour cooking oils and fats down the drain: they harden and choke pipes.\n• Never flush tea leaves, cotton, wipes, or sanitary items: they clog pipes and block aeration in sewage plants.\n• Do not dispose of paints, medicines, or motor oil in the sink: their toxic chemicals kill the beneficial bacteria that clean wastewater.'
      }
    ],
    definitions: [
      'Sewage: Liquid wastewater containing suspended and dissolved pollutants from domestic and industrial use.',
      'Sludge: Solid organic matter that settles at the bottom of primary sedimentation tanks.',
      'Aeration: The process of bubbling air through wastewater to promote bacterial decomposition.'
    ],
    formulas: [
      { name: 'Water Disinfection', formula: '\\text{Effluent} + \\text{Chlorine / Ozone} \\longrightarrow \\text{Pathogen-Free Water}', explanation: 'Chemical disinfection destroys harmful disease-causing microbes.', units: 'Water treatment' }
    ],
    solvedExamples: [
      {
        question: 'Why is chlorine gas or ozone gas bubbled through treated wastewater before it is discharged into rivers?',
        solution: 'Chlorine and ozone are powerful disinfectants. They destroy invisible, disease-causing pathogens (like cholera and typhoid bacteria) that might still be present in the treated water, making it safe for the river ecosystem.',
        keyInsight: 'Disinfection eliminates pathogenic bacteria before environmental release.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Sludge removed from treatment plants is dried and converted into organic manure or biogas fuel for cooking.',
      'Eucalyptus trees are planted along open sewage drains because they absorb excess wastewater rapidly and release clean water vapor into the air.'
    ],
    quickRevision: [
      'WWTP steps: Bar screens -> grit removal -> settling tank -> aeration -> disinfection.',
      'Sludge is decomposed to produce biogas and manure.',
      'Never pour oil, paints, or solid waste down household drains.'
    ]
  },

  // ==========================================
  // MATHEMATICS (5 CHAPTERS)
  // ==========================================
  'c7-math-01': {
    introduction:
      'What happens when temperature drops below zero degrees in the snow-clad Himalayas, or when a submarine dives 50 meters below sea level? Positive numbers alone are not enough! In Class 7, we master the full spectrum of Integers—positive numbers, zero, and negative numbers.',
    basicConcepts: [
      'Integers ($Z$): $\\dots, -3, -2, -1, 0, +1, +2, +3, \\dots$',
      'Addition Rules: Same signs add and keep sign ($(-4) + (-3) = -7$). Different signs subtract smaller from larger and take the sign of the larger ($(-8) + (+5) = -3$).',
      'Multiplication Sign Rules:\n• Positive x Positive = Positive\n• Negative x Negative = Positive\n• Positive x Negative = Negative'
    ],
    detailedExplanations: [
      {
        topic: '1. Multiplication & Division of Integers',
        explanation:
          'Multiplying negative numbers:\n• $(-a) \\times (-b) = +(a \\times b)$\n• $(-a) \\times b = -(a \\times b)$\n\nEven number of negative signs in product -> Positive result: $(-2) \\times (-3) \\times (-4) \\times (-5) = +120$.\nOdd number of negative signs -> Negative result: $(-2) \\times (-3) \\times (-4) = -24$.\n\nDivision follows the same sign rules:\n• $(-20) \\div (-5) = +4$\n• $(-20) \\div 5 = -4$'
      },
      {
        topic: '2. Properties of Multiplication of Integers',
        explanation:
          '• Closure: $a \\times b$ is always an integer.\n• Commutative: $a \\times b = b \\times a$.\n• Distributive Property: $a \\times (b + c) = (a \\times b) + (a \\times c)$.\nExample: $(-25) \\times 102 = (-25) \\times (100 + 2) = (-2500) + (-50) = -2550$.'
      }
    ],
    definitions: [
      'Integer: A whole number that can be positive, negative, or zero.',
      'Additive Inverse: The negative of a number such that their sum is zero (additive inverse of $+7$ is $-7$).'
    ],
    formulas: [
      { name: 'Negative Sign Product Rule', formula: '(-1)^{\\text{even}} = +1; \\quad (-1)^{\\text{odd}} = -1', explanation: 'Sign depends on the count of negative factors.', units: 'Sign rule' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate: $(-30) \\times [13 + (-3)]$',
        solution: 'Step 1: Simplify brackets: 13 + (-3) = 13 - 3 = 10.\nStep 2: Multiply: (-30) x 10 = -300.',
        keyInsight: 'Always follow BODMAS: solve inside brackets first, then multiply.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Bank balance: depositing ₹500 is $+500$; withdrawing ₹200 is $-200$.',
      'Temperature in Leh in January can reach $-15^\\circ\\text{C}$ (15 degrees below freezing).'
    ],
    quickRevision: [
      'Integers include negative numbers, zero, and positive numbers.',
      'Negative × Negative = Positive; Negative × Positive = Negative.',
      'Distributive property: $a(b + c) = ab + ac$.'
    ]
  },

  'c7-math-02': {
    introduction:
      'In Class 6, we learned how to add and subtract fractions. In Class 7, we take the next step: multiplying and dividing fractions and decimals, understanding reciprocal fractions, and multiplying decimals accurately.',
    basicConcepts: [
      'Multiplying Fractions: Multiply numerators together, and multiply denominators together:\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n• Dividing Fractions: Multiply by the reciprocal of the divisor fraction:\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$'
    ],
    detailedExplanations: [
      {
        topic: '1. Fraction as an Operator "of"',
        explanation:
          'The word "of" means multiplication in mathematics:\n• $\\frac{1}{2} \\text{ of } 24 = \\frac{1}{2} \\times 24 = 12$.\n• $\\frac{2}{3} \\text{ of } \\frac{9}{10} = \\frac{2 \\times 9}{3 \\times 10} = \\frac{18}{30} = \\frac{3}{5}$.'
      },
      {
        topic: '2. Multiplication and Division of Decimals',
        explanation:
          '• Multiplying Decimals: Multiply numbers ignoring decimal points first. Then count the total number of decimal places in both factors, and insert the decimal point that many places from the right.\nExample: $2.5 \\times 0.4$: $25 \\times 4 = 100$. Total decimal places = $1 + 1 = 2$. Result = $1.00 = 1$.\n• Dividing by 10, 100, 1000: Shift decimal point to the LEFT by the number of zeros:\n$31.5 \\div 10 = 3.15$; $31.5 \\div 100 = 0.315$.'
      }
    ],
    definitions: [
      'Reciprocal: The inverted fraction obtained by interchanging the numerator and denominator.',
      'Decimals: Numbers that represent fractions with denominators as powers of 10.'
    ],
    formulas: [
      { name: 'Division of Fractions', formula: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}', explanation: 'Division by a fraction equals multiplication by its reciprocal.', units: 'Arithmetic operation' }
    ],
    solvedExamples: [
      {
        question: 'A car covers a distance of 89.1 km in 2.2 hours. What is the average distance covered by it in 1 hour?',
        solution: 'Average distance in 1 hour = 89.1 / 2.2\nMultiply numerator and denominator by 10: 891 / 22 = 40.5 km.',
        keyInsight: 'Multiply both numerator and denominator by 10 to clear decimal points.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'If petrol costs ₹102.50 per liter, buying 3.5 liters costs $102.50 \\times 3.5 = ₹358.75$.',
      'Cutting a 12-meter ribbon into pieces of $\\frac{3}{4}$ meter each: $12 \\div \\frac{3}{4} = 12 \\times \\frac{4}{3} = 16$ pieces.'
    ],
    quickRevision: [
      'To multiply fractions: (Product of numerators) / (Product of denominators).',
      'To divide fractions: Multiply by the reciprocal of the second fraction.',
      'Multiplying by 10/100 shifts decimal right; dividing shifts decimal left.'
    ]
  },

  'c7-math-03': {
    introduction:
      'Think of a number, double it, add 10, and your result is 26. Can you deduce what number you started with? Yes! An equation is a mathematical balance scale. In this chapter, we master algebraic linear equations.',
    basicConcepts: [
      'An equation is a condition on a variable stating that two algebraic expressions are equal ($LHS = RHS$).',
      'Variable: An unknown quantity represented by letters like $x, y, z$.',
      'Solution of an Equation: The specific value of the variable that makes $LHS = RHS$.'
    ],
    detailedExplanations: [
      {
        topic: '1. The Balance Scale Method and Transposition',
        explanation:
          'An equation is like a balanced weighing scale. Whatever you do to one side, you MUST do to the other side:\n• Adding a number to both sides preserves equality.\n• Subtracting a number from both sides preserves equality.\n• Multiplying or dividing both sides by the same non-zero number preserves equality.\n\nTransposition Shortcut:\n• $+a$ moves to the other side as $-a$.\n• $-a$ moves to the other side as $+a$.\n• $\\times a$ moves to the other side as $\\div a$.\n• $\\div a$ moves to the other side as $\\times a$.'
      },
      {
        topic: '2. Solving Real-Life Word Problems with Equations',
        explanation:
          'Steps:\n1. Read the problem and identify what is unknown. Name it $x$.\n2. Translate the words into mathematical statements.\n3. Solve the equation for $x$.\n4. Check your answer.'
      }
    ],
    definitions: [
      'Linear Equation: An algebraic equation where the highest power of the variable is 1.',
      'Transposition: Moving a term from one side of an equation to the other while changing its sign.'
    ],
    formulas: [
      { name: 'Linear Equation Standard Form', formula: 'ax + b = c \\implies x = \\frac{c - b}{a}', explanation: 'General algebraic solution for a one-variable linear equation.', units: 'Algebra' }
    ],
    solvedExamples: [
      {
        question: 'Solve for $x$: $4(m + 3) = 18$',
        solution: 'Step 1: Divide both sides by 4:\nm + 3 = 18 / 4 = 4.5\nStep 2: Transpose +3 to the right as -3:\nm = 4.5 - 3 = 1.5 (or 3/2).',
        keyInsight: 'Divide out the coefficient first or expand brackets, then isolate the variable.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'A shopkeeper calculates: "If 5 pens plus a ₹10 notebook cost ₹60, then each pen costs $(60 - 10) / 5 = ₹10$."',
      'Riddle: "Father is 3 times as old as his son. If the sum of their ages is 48, son is $x$, father is $3x$, so $4x = 48 \\implies x = 12$ years old."'
    ],
    quickRevision: [
      'An equation states that $LHS = RHS$.',
      'Transposition flips the operation (+ becomes -, × becomes ÷).',
      'Whatever you do to the left side, you must do to the right side.'
    ]
  },

  'c7-math-04': {
    introduction:
      'Look at scissors opening, a clock\'s hands turning, or railway tracks crossing—angles are formed whenever lines intersect. In Class 7, we explore complementary and supplementary angles, adjacent pairs, vertically opposite angles, and the magic of parallel lines cut by a transversal.',
    basicConcepts: [
      'Complementary Angles: Two angles whose sum is $90^\\circ$ (e.g., $30^\\circ$ and $60^\\circ$).',
      'Supplementary Angles: Two angles whose sum is $180^\\circ$ (e.g., $110^\\circ$ and $70^\\circ$).',
      'Linear Pair: A pair of adjacent angles on a straight line whose non-common arms form opposite rays. Their sum is always $180^\\circ$.',
      'Vertically Opposite Angles: When two straight lines cross, the opposite angles formed are always equal.'
    ],
    detailedExplanations: [
      {
        topic: '1. Parallel Lines and Transversal Angles',
        explanation:
          'When a transversal line intersects two parallel lines:\n1. Corresponding Angles are equal (F-shape angles).\n2. Alternate Interior Angles are equal (Z-shape angles).\n3. Interior Angles on the same side of the transversal are supplementary (sum = $180^\\circ$, C-shape angles).'
      }
    ],
    definitions: [
      'Transversal: A line that intersects two or more lines at distinct points.',
      'Supplementary Angles: Any two angles whose measures add up to 180 degrees.'
    ],
    formulas: [
      { name: 'Complementary & Supplementary Rules', formula: '\\angle A + \\angle B = 90^\\circ \\text{ (Comp)}; \\quad \\angle A + \\angle B = 180^\\circ \\text{ (Supp)}', explanation: 'Geometric angle pair relationships.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'An angle is $20^\\circ$ more than its complement. Find the angle.',
        solution: 'Let the angle be x. Its complement is (90 - x).\nAccording to problem: x = (90 - x) + 20\nx + x = 110 => 2x = 110 => x = 55°.\nCheck: Complement of 55° is 35°. 55° - 35° = 20°.',
        keyInsight: 'Set up an equation using the definition that complement = 90 - x.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'Slanted rungs on a step ladder form parallel lines cut by transversals, ensuring safe equal angles.',
      'The blades of an open pair of scissors form equal vertically opposite angles.'
    ],
    quickRevision: [
      'Complementary angles add to 90°; Supplementary angles add to 180°.',
      'Vertically opposite angles are equal.',
      'For parallel lines: Alternate interior angles are equal; co-interior angles sum to 180°.'
    ]
  },

  'c7-math-05': {
    introduction:
      'The triangle is the most rigid, stable polygon in geometry—which is why roof trusses, bridges, and electric transmission towers are built from triangular metal frames! In this chapter, we master the Angle Sum Property, the Exterior Angle Property, and the celebrated Pythagoras Theorem.',
    basicConcepts: [
      'A triangle is a 3-sided closed polygon with 3 vertices, 3 sides, and 3 interior angles.',
      'Angle Sum Property: The sum of the 3 interior angles of any triangle is ALWAYS $180^\\circ$.',
      'Exterior Angle Property: An exterior angle of a triangle equals the sum of its two interior opposite angles.',
      'Triangle Inequality Property: The sum of the lengths of any two sides of a triangle is always greater than the length of the third side ($a + b > c$).'
    ],
    detailedExplanations: [
      {
        topic: '1. The Pythagoras Theorem (For Right-Angled Triangles)',
        explanation:
          'In any right-angled triangle (where one angle is $90^\\circ$):\n• The side opposite the right angle is the longest side, called the Hypotenuse ($h$).\n• The other two sides are called the base ($b$) and perpendicular altitude ($a$).\n\n$$\\text{Hypotenuse}^2 = \\text{Base}^2 + \\text{Perpendicular}^2$$\n$$h^2 = a^2 + b^2$$\n\nClassic Pythagorean Triplets: $(3, 4, 5)$, $(5, 12, 13)$, $(6, 8, 10)$.\nCheck: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$!'
      }
    ],
    definitions: [
      'Hypotenuse: The longest side of a right-angled triangle, located directly opposite the 90° right angle.',
      'Median: A line segment connecting a vertex to the midpoint of the opposite side.'
    ],
    formulas: [
      { name: 'Pythagoras Theorem', formula: 'h^2 = a^2 + b^2', explanation: 'Relates sides of any right-angled triangle.', units: 'Length²' },
      { name: 'Angle Sum Property', formula: '\\angle A + \\angle B + \\angle C = 180^\\circ', explanation: 'Total sum of interior angles in any Euclidean triangle.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'A 15-meter long ladder reaches a window 12 meters above the ground. How far is the foot of the ladder from the base of the wall?',
        solution: 'The wall, ground, and ladder form a right-angled triangle.\nHypotenuse h = 15 m; Perpendicular a = 12 m; Base b = ?\nUsing Pythagoras theorem: h² = a² + b²\n15² = 12² + b²\n225 = 144 + b²\nb² = 225 - 144 = 81\nb = √81 = 9 meters.',
        keyInsight: 'The ladder is the hypotenuse; apply h² = a² + b² and solve for the unknown base.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'Bridges use triangular steel trusses because triangles cannot deform without breaking a side.',
      'Carpenters check right angles using a 3-4-5 measuring tape rule.'
    ],
    quickRevision: [
      'Triangle angles add up to 180°.',
      'Exterior angle = Sum of two interior opposite angles.',
      'In a right triangle: $h^2 = a^2 + b^2$ (Pythagoras Theorem).',
      'Sum of any two sides must be strictly greater than the third side.'
    ]
  },

  // ==========================================
  // BIOLOGY (5 CHAPTERS)
  // ==========================================
  'c7-bio-01': {
    introduction:
      'Unlike humans and animals that must search for food, green plants stand quietly in sunlight and synthesize their own meals! Plants are the primary producers of all life on Earth. In this chapter, we explore autotrophic nutrition, photosynthesis, parasitic plants like Cuscuta, and insect-eating pitcher plants.',
    basicConcepts: [
      'Nutrition is the process of taking in food and utilizing it by the body.',
      'Autotrophic Nutrition: Organisms that synthesize food for themselves from simple inorganic substances (green plants).',
      'Heterotrophic Nutrition: Organisms that depend on other living things for food (animals, fungi, parasitic plants).',
      'Chlorophyll is the green pigment in leaves that traps solar energy for photosynthesis.'
    ],
    detailedExplanations: [
      {
        topic: '1. The Photosynthesis Factory in Leaves',
        explanation:
          'Leaves are the food factories of plants. Photosynthesis requires four key ingredients:\n1. Chlorophyll: Green pigment inside chloroplasts that captures sunlight.\n2. Sunlight: Provides the energy to drive the chemical reaction.\n3. Carbon Dioxide: Absorbed from the air through microscopic pores on leaves called stomata, guarded by bean-shaped guard cells.\n4. Water and Minerals: Absorbed by roots from the soil and transported upward through xylem pipes.\n\n$$6\\text{CO}_2 + 6\\text{H}_2\\text{O } \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 \\text{ (Glucose)} + 6\\text{O}_2 \\text{ (Oxygen)}$$'
      },
      {
        topic: '2. Other Modes of Nutrition: Parasites, Saprotrophs, Insectivorous Plants',
        explanation:
          '• Parasitic Plants (Cuscuta / Amarbel): Yellow tubular vines with no chlorophyll. They coil around host trees and insert special sucking roots (haustoria) to steal nutrients.\n• Insectivorous Plants (Pitcher Plant): Grow in nitrogen-deficient bogs. Their leaves are modified into deep pitchers with slippery walls and digestive juices that trap and digest insects to absorb nitrogen.\n• Saprotrophs (Fungi / Mushrooms): Secrete digestive juices onto dead rotting matter and absorb nutrients in solution.'
      },
      {
        topic: '3. Symbiosis & Lichens',
        explanation:
          'Symbiosis is a mutually beneficial partnership where two different organisms live together and share shelter and nutrients.\n• Lichens: A partnership between an alga (which produces food via photosynthesis) and a fungus (which provides shelter, water, and minerals). Neither can survive alone!'
      }
    ],
    definitions: [
      'Autotroph: An organism that synthesizes its own organic nutrients from inorganic substances.',
      'Stomata: Microscopic pores on leaf surfaces regulated by guard cells for gas exchange and transpiration.',
      'Symbiosis: A mutually beneficial biological interaction between two different species living together.'
    ],
    formulas: [
      { name: 'Photosynthesis Chemical Reaction', formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2', explanation: 'Biological solar energy conversion yielding glucose and oxygen.', units: 'Biochemistry' }
    ],
    solvedExamples: [
      {
        question: 'Why do pitcher plants eat insects even though their leaves are green and capable of photosynthesis?',
        solution: 'Pitcher plants grow in marshy wetlands and bogs where the soil lacks nitrogen nutrients. While they perform photosynthesis to make carbohydrates, they trap and digest insects to fulfill their nitrogen requirements for making proteins.',
        keyInsight: 'Carnivorous plants digest insects specifically for nitrogen supplementation, not for calories.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Rhizobium bacteria live in the root nodules of pulses (beans, peas), fixing atmospheric nitrogen into the soil in return for plant food.',
      'Fuzzy white or green molds growing on old bread are saprotrophic fungi absorbing nutrients from rotting starch.'
    ],
    quickRevision: [
      'Autotrophs make food; heterotrophs depend on others.',
      'Photosynthesis uses carbon dioxide, water, sunlight, and chlorophyll to produce glucose and oxygen.',
      'Cuscuta is a parasite; pitcher plants are insectivorous; lichens are symbiotic.'
    ]
  },

  'c7-bio-02': {
    introduction:
      'Have you ever wondered what happens to an apple after you bite, chew, and swallow it? In this chapter, we trace the 9-meter journey of food through the human digestive canal, explore how cow stomachs digest tough grass, and see how the microscopic single-celled Amoeba feeds.',
    basicConcepts: [
      'Animal nutrition includes nutrient requirements, mode of intake of food, and its utilization in the body.',
      'The human digestive tract (Alimentary Canal) consists of: Buccal cavity -> Oesophagus -> Stomach -> Small intestine -> Large intestine -> Rectum -> Anus.',
      'Associated digestive glands: Salivary glands, Liver (largest gland in body), and Pancreas.'
    ],
    detailedExplanations: [
      {
        topic: '1. Human Digestive System: Mouth to Small Intestine',
        explanation:
          '1. Mouth: Teeth chew food (mechanical digestion) while salivary amylase breaks starch into simple sugars.\n2. Oesophagus: Food pipe pushes food downward by rhythmic wave-like muscular contractions called peristalsis.\n3. Stomach: A J-shaped muscular bag that secretes:\n   • Hydrochloric Acid (HCl): Kills bacteria swallowed with food and creates an acidic medium.\n   • Pepsin Enzyme: Breaks complex proteins into peptides.\n   • Mucus: Protects the stomach wall from being digested by its own acid!\n4. Small Intestine: Highly coiled 7.5-meter tube where chemical digestion finishes:\n   • Liver secretes Bile Juice (stored in gall bladder) to emulsify and digest fats.\n   • Pancreas secretes pancreatic juice digesting carbs, fats, and proteins.\n   • Villi: Millions of tiny finger-like projections on the inner wall that dramatically increase surface area to absorb digested nutrients into blood vessels.'
      },
      {
        topic: '2. Digestion in Grass-Eating Animals (Ruminants)',
        explanation:
          'Cows, buffaloes, and deer eat grass rich in tough cellulose. They swallow grass quickly and store it in a special stomach chamber called the Rumen. Here, bacteria partially digest cellulose into "cud". When resting, the animal brings the cud back into its mouth in small lumps and chews it thoroughly (rumination).'
      },
      {
        topic: '3. Feeding in Amoeba (Phagocytosis)',
        explanation:
          'Amoeba is a microscopic single-celled organism found in pond water. When it senses a food particle, it pushes out finger-like projections called pseudopodia (false feet) around the food, engulfing it inside a food vacuole where digestive enzymes break it down.'
      }
    ],
    definitions: [
      'Alimentary Canal: The continuous muscular tube running from mouth to anus through which food passes and digests.',
      'Peristalsis: Wave-like muscular contractions that push food along the digestive tract.',
      'Villi: Millions of tiny finger-like projections in the small intestine that absorb digested nutrients into blood capillaries.',
      'Rumination: The process of chewing cud brought back from the rumen in grass-eating animals.'
    ],
    formulas: [
      { name: 'Starch Digestion by Saliva', formula: '\\text{Starch } \\xrightarrow{\\text{Salivary Amylase}} \\text{ Maltose (Sugar)}', explanation: 'Enzymatic carbohydrate breakdown starting in the mouth.', units: 'Digestion' }
    ],
    solvedExamples: [
      {
        question: 'Why can humans not digest grass and straw like cows and horses can?',
        solution: 'Grass contains tough cellulose fiber. Cows have specialized rumen chambers harboring unique symbiotic bacteria that produce cellulase enzymes. Humans lack these bacteria and cellulase enzymes, so we cannot digest cellulose.',
        keyInsight: 'Cellulose digestion requires specific symbiotic bacteria found only in ruminants.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'If you chew a piece of plain dry bread or chapati for 2 minutes, it begins tasting sweet because saliva converts starch into sugar.',
      'Excess acid secretion causes heartburn, neutralized with basic antacid gels.'
    ],
    quickRevision: [
      'The alimentary canal runs from buccal cavity to anus.',
      'The stomach secretes HCl and pepsin; liver produces bile; pancreas secretes enzymes.',
      'Villi in the small intestine absorb digested nutrients.',
      'Ruminants chew cud to digest grass cellulose; Amoeba uses pseudopodia.'
    ]
  },

  'c7-bio-03': {
    introduction:
      'Hold your breath for a few seconds—your chest feels tight and your body demands air! Breathing is just the physical intake of air, but respiration is the cellular chemical process where oxygen burns food to release the energy that keeps you alive. In this chapter, we study aerobic vs anaerobic respiration, human lungs, and how fish and insects breathe.',
    basicConcepts: [
      'Respiration is essential for life because it releases energy from food inside living cells.',
      'Aerobic Respiration: Breakdown of glucose in the presence of oxygen, producing lots of energy, carbon dioxide, and water.',
      'Anaerobic Respiration: Breakdown of glucose without oxygen, producing less energy (found in yeast and in overworked human muscles).'
    ],
    detailedExplanations: [
      {
        topic: '1. Aerobic vs Anaerobic Respiration',
        explanation:
          '• Aerobic Respiration (In our cells normally):\n$$\\text{Glucose} + \\text{Oxygen} \\longrightarrow \\text{Carbon Dioxide} + \\text{Water} + \\text{Energy (38 ATP)}$$\n• Anaerobic Respiration in Yeast (Fermentation):\n$$\\text{Glucose } \\xrightarrow{\\text{No Oxygen}} \\text{Alcohol (Ethanol)} + \\text{CO}_2 + \\text{Energy}$$\nUsed in bakeries to make bread fluffy and in breweries.\n• Anaerobic Respiration in Human Muscles during Heavy Exercise:\nWhen sprinting, your muscles need energy faster than blood can deliver oxygen, producing Lactic Acid:\n$$\\text{Glucose } \\xrightarrow{\\text{Lack of Oxygen}} \\text{Lactic Acid} + \\text{Energy}$$\nAccumulation of lactic acid causes painful muscle cramps! A hot bath or massage restores oxygenated blood flow, converting lactic acid back to CO2 and water.'
      },
      {
        topic: '2. Human Respiratory Mechanism (Lungs & Diaphragm)',
        explanation:
          'Air enters through the nostrils, passes through the windpipe (trachea), and enters the lungs inside the rib cage.\n• Inhalation (Breathing In): Ribs move up and out, and the dome-shaped muscular diaphragm moves DOWNWARD. The chest cavity expands, creating low pressure that sucks air into the lungs.\n• Exhalation (Breathing Out): Ribs move down and in, and the diaphragm moves UPWARD to its dome shape. The chest cavity shrinks, squeezing air out of the lungs.'
      },
      {
        topic: '3. Respiration in Other Animals: Earthworm, Fish, Cockroach',
        explanation:
          '• Earthworm: Breathes through its moist, slimy skin.\n• Fish: Breathes through feathery gills rich in blood capillaries that absorb oxygen dissolved in water.\n• Cockroach and Insects: Breathe through tiny openings on the sides of their bodies called spiracles, connected to a network of air tubes called tracheae.'
      }
    ],
    definitions: [
      'Cellular Respiration: The metabolic process in cells where glucose breaks down with oxygen to produce energy.',
      'Diaphragm: A large, dome-shaped sheet of muscle beneath the lungs that drives breathing movements.',
      'Spiracles: Tiny lateral breathing pores on the body of an insect.'
    ],
    formulas: [
      { name: 'Cellular Respiration Equation', formula: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy}', explanation: 'Aerobic oxidation of glucose in mitochondria.', units: 'Biochemistry' }
    ],
    solvedExamples: [
      {
        question: 'Why do athletes get severe muscle cramps after sprinting a 100-meter race, and how does a hot water bath give relief?',
        solution: 'During sprinting, muscles require massive energy instantly. Due to limited oxygen supply, muscle cells respire anaerobically, forming lactic acid. Accumulation of lactic acid causes cramps. A hot bath improves blood circulation, delivering fresh oxygen that breaks down lactic acid into harmless CO2 and water.',
        keyInsight: 'Anaerobic respiration in overworked muscles produces lactic acid, causing cramps.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Bakers add yeast to dough; yeast respires anaerobically, releasing carbon dioxide bubbles that expand and make bread soft and spongy.',
      'Exhaled air contains about 4.4% CO2 compared to 0.04% in inhaled air; blowing into clear lime water turns it milky.'
    ],
    quickRevision: [
      'Aerobic respiration uses oxygen; anaerobic respiration produces alcohol or lactic acid without oxygen.',
      'Inhalation: Diaphragm moves down, ribs move up and out.',
      'Exhalation: Diaphragm moves up, ribs move down and in.',
      'Insects breathe via spiracles; fish breathe through gills; earthworms use skin.'
    ]
  },

  'c7-bio-04': {
    introduction:
      'Put your fingers against your wrist or chest—you can feel your heart beating steadily! Your circulatory system acts as an internal transport network, pumping blood through thousands of kilometers of blood vessels to deliver oxygen and nutrients to every cell. In this chapter, we explore the heart, blood cells, kidneys, and how tall trees draw water to their uppermost leaves.',
    basicConcepts: [
      'Blood is a liquid connective tissue consisting of fluid Plasma and three types of cells: Red Blood Cells (RBCs), White Blood Cells (WBCs), and Platelets.',
      'The human heart has 4 chambers (2 upper atria and 2 lower ventricles) to keep oxygen-rich blood completely separate from carbon dioxide-rich blood.',
      'Excretion is the removal of toxic metabolic waste from the body, performed primarily by the kidneys.',
      'Plants transport water and minerals upward through Xylem tissue and transport food bidirectionally through Phloem tissue.'
    ],
    detailedExplanations: [
      {
        topic: '1. Blood Components: RBCs, WBCs, and Platelets',
        explanation:
          '• Plasma: Fluid liquid part transporting food, hormones, and waste.\n• Red Blood Cells (RBCs): Contain the iron-rich red protein Hemoglobin, which binds tightly to oxygen and delivers it to cells.\n• White Blood Cells (WBCs): The soldiers of our immune system that fight off and destroy disease-causing microbes.\n• Platelets: Tiny cell fragments that clot blood at wounds, forming a scab to prevent fatal bleeding.'
      },
      {
        topic: '2. Blood Vessels: Arteries vs Veins vs Capillaries',
        explanation:
          '• Arteries: Carry oxygen-rich blood away from the heart to all body organs under high pressure. They have thick, elastic muscular walls and NO valves.\n• Veins: Carry carbon dioxide-rich blood back toward the heart under low pressure. They have thin walls and contain one-way valves that prevent blood from flowing backward.\n• Capillaries: Microscopic, extremely thin blood vessels where nutrient and gas exchange occurs with tissue cells.'
      },
      {
        topic: '3. Human Excretory System & Kidney Dialysis',
        explanation:
          'Our cells produce toxic nitrogenous waste (Urea). The excretory system consists of two bean-shaped Kidneys, two ureter tubes, a Urinary Bladder, and a Urethra.\n• Kidneys filter about 180 liters of blood daily through microscopic filters called nephrons, producing about 1 to 1.8 liters of urine consisting of 95% water, 2.5% urea, and 2.5% other wastes.\n• When both kidneys fail, patients undergo dialysis on an artificial kidney machine.'
      },
      {
        topic: '4. Transport in Plants: Xylem and Phloem',
        explanation:
          '• Xylem: Continuous pipeline of dead hollow cells that transports water and dissolved minerals strictly upward from roots to leaves.\n• Transpiration Pull: As leaves lose water vapor through stomata, it creates a powerful suction force (like sipping juice through a straw) that pulls water up tall trees over 100 meters high!\n• Phloem: Living vascular tissue that transports dissolved sugars made in leaves to all growing parts and roots (translocation).'
      }
    ],
    definitions: [
      'Hemoglobin: Iron-containing respiratory pigment in red blood cells that transports oxygen.',
      'Dialysis: The clinical procedure of filtering waste products and excess fluid from blood using an artificial kidney machine.',
      'Transpiration Pull: The suction force generated by leaf transpiration that pulls water up through xylem vessels.'
    ],
    formulas: [
      { name: 'Normal Human Pulse Rate', formula: '72 \\text{ to } 80 \\text{ beats per minute (at rest)}', explanation: 'Rhythmic contraction rate of healthy adult heart.', units: 'BPM' }
    ],
    solvedExamples: [
      {
        question: 'Why do veins have valves inside them, while arteries do not need valves?',
        solution: 'Arteries carry blood pumped straight from the heart under high pressure, ensuring blood only flows forward. Veins carry blood back to the heart under very low pressure, often fighting against gravity from legs; one-way valves prevent blood from pooling or flowing backward.',
        keyInsight: 'Valves in veins ensure unidirectional blood flow back to the heart under low pressure.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Doctors listen to your heart valves clicking open and shut using a stethoscope.',
      'On hot summer days, our body sweats to eliminate salts and cool down our skin through evaporation.'
    ],
    quickRevision: [
      'RBCs carry oxygen via hemoglobin; WBCs fight infections; platelets clot blood.',
      'Arteries carry blood from the heart; veins return blood to the heart using valves.',
      'Kidneys filter blood to produce urine; dialysis treats kidney failure.',
      'Xylem transports water upward via transpiration pull; phloem transports food.'
    ]
  },

  'c7-bio-05': {
    introduction:
      'From a tiny mustard seed emerges a flowering plant, and a planted potato eye sprouts fresh stems! How do plants reproduce to continue their species? In this chapter, we explore asexual reproduction (vegetative propagation, budding, spore formation) and sexual reproduction through flower pollination and seed dispersal.',
    basicConcepts: [
      'Reproduction is the biological process by which organisms produce new individuals of their own kind.',
      'Asexual Reproduction: Production of new plants without the involvement of seeds or flowers (single parent).',
      'Sexual Reproduction: Involves male and female gametes combining in flowers to produce seeds.'
    ],
    detailedExplanations: [
      {
        topic: '1. Modes of Asexual Reproduction in Plants',
        explanation:
          '• Vegetative Propagation: New plants grow from vegetative parts (stems, roots, leaves, buds):\n  - Stems: Rose cuttings, potato eyes (tuber), ginger rhizome.\n  - Leaves: Bryophyllum leaf margins produce tiny plantlets that fall into soil and grow!\n  - Roots: Sweet potato and dahlia.\n• Budding (Yeast): A small bulb-like projection called a bud grows on the parent yeast cell, matures, and pinches off.\n• Fragmentation (Spirogyra Alga): Green ribbon-like algae in ponds break into two or more fragments that grow into new individuals.\n• Spore Formation (Bread Mold & Ferns): Microscopic spores protected by hard coats germinate when favorable moisture appears.'
      },
      {
        topic: '2. Pollination and Fertilization in Flowers',
        explanation:
          '• Pollination: Transfer of pollen grains from anther to stigma of a flower.\n  - Self-Pollination: Pollen transfers within the same flower.\n  - Cross-Pollination: Pollen transfers to a different flower on another plant of the same kind via wind, water, or insects.\n• Fertilization: The male gamete inside the pollen tube travels down through the style into the ovary, fusing with the female ovule egg to form a Zygote.\n• After fertilization: The ovary swells to become the Fruit, and the fertilized ovules become Seeds!'
      },
      {
        topic: '3. Seed Dispersal by Nature',
        explanation:
          'If all seeds fell under the mother plant, seedlings would compete fiercely for light and water and die. Nature disperses seeds:\n• By Wind: Light seeds with wings or hair (Dandelion, Drumstick, Maple).\n• By Water: Fibrous buoyant husks that float (Coconut).\n• By Animals: Sticky seeds with hooks and spines (Xanthium) that cling to animal fur.\n• By Explosive Bursting: Fruits burst open suddenly with a jerk, scattering seeds (Balsam, Castor).'
      }
    ],
    definitions: [
      'Pollination: The transfer of pollen grains from the anther to the stigma of a flower.',
      'Fertilization: The fusion of the male gamete with the female gamete to form a single zygote cell.',
      'Vegetative Propagation: A form of asexual reproduction where new plants sprout from vegetative parts like stems, leaves, or roots.'
    ],
    formulas: [
      { name: 'Floral Transformation', formula: '\\text{Ovary } \\longrightarrow \\text{ Fruit}; \\quad \\text{Ovule } \\longrightarrow \\text{ Seed}', explanation: 'Post-fertilization developmental fate of flower organs.', units: 'Plant development' }
    ],
    solvedExamples: [
      {
        question: 'What is the biological advantage of seed dispersal for plants?',
        solution: 'Seed dispersal prevents intense overcrowding of seedlings beneath the parent tree. It reduces competition for sunlight, water, and soil minerals, and enables plant species to invade and colonize new geographic areas.',
        keyInsight: 'Dispersal avoids resource competition and spreads the species across habitats.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Potatoes left in a dark pantry sprout green buds called "eyes" that can be cut and planted to produce new potato crops.',
      'Walking through brushy fields leaves sticky Xanthium cockleburs stuck to your socks and shoes.'
    ],
    quickRevision: [
      'Asexual reproduction uses vegetative parts, budding, fragmentation, or spores.',
      'Bryophyllum reproduces via leaf margins; potatoes reproduce via eyes.',
      'Pollination brings pollen to stigma; fertilization forms a zygote.',
      'After fertilization, the ovary becomes fruit and ovules become seeds.'
    ]
  }
};
