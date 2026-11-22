import { ChapterStudyMaterial } from '../../types';

export const CLASS_8_STUDY_MATERIALS: Record<string, ChapterStudyMaterial> = {
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  'c8-phys-01': {
    introduction:
      'Why does a sharp knife cut an apple easily while a blunt knife squashes it? Why do school bags have wide shoulder straps instead of thin strings? In Class 8, we discover the physics of force and pressure, explore contact versus non-contact forces, and calculate how atmospheric pressure pushes down on every square centimeter of our bodies.',
    basicConcepts: [
      'A force is a push or pull on an object resulting from its interaction with another object.',
      'A force can change the state of motion of an object (speed up, slow down, stop), change direction, or change the shape of an object.',
      'Pressure is defined as the force acting perpendicularly per unit area ($P = F / A$). The SI unit of pressure is Pascal (Pa) or $\\text{N/m}^2$.',
      'Liquids and gases exert pressure in all directions, and liquid pressure increases with depth.'
    ],
    detailedExplanations: [
      {
        topic: '1. Contact vs Non-Contact Forces',
        explanation:
          '• Contact Forces: Require direct physical contact between surfaces.\n  - Muscular Force: Produced by our muscles (lifting school bags, kicking a ball).\n  - Frictional Force: Opposes motion between two surfaces in contact.\n• Non-Contact Forces: Act across empty space without physical touch!\n  - Gravitational Force: Pulls all objects toward the center of the Earth.\n  - Electrostatic Force: Attractive or repulsive force exerted by an electrically charged object (like a comb rubbed on dry hair attracting paper bits).\n  - Magnetic Force: Attraction or repulsion exerted by magnets on magnetic metals.'
      },
      {
        topic: '2. Scientific Concept of Pressure ($P = F / A$)',
        explanation:
          'Pressure tells us how concentrated a force is over an area:\n$$P = \\frac{\\text{Force (N)}}{\\text{Area (m}^2\\text{)}}$$\n• Smaller Area -> Much Higher Pressure: The pointed tip of a drawing pin has an area of less than $0.1\\text{ mm}^2$, generating immense pressure that punctures wooden boards easily with minimal finger force.\n• Larger Area -> Lower Pressure: Heavy military battle tanks weigh 50 tons, but wide continuous tracks spread their weight over a large area, preventing them from sinking into soft mud.'
      },
      {
        topic: '3. Atmospheric Pressure & The Rubber Sucker',
        explanation:
          'The envelope of air above us extends over 100 kilometers. The weight of this immense column of air pushes down on us with a force of about 100,000 Pascals (10 tons per square meter)! We are not crushed because our internal blood pressure balances atmospheric pressure precisely.\n\nWhen you press a rubber suction cup firmly against a smooth tile, air trapped underneath is squeezed out, creating a partial vacuum. The high outside atmospheric pressure holds the sucker firmly against the wall.'
      }
    ],
    definitions: [
      'Force: A push or pull acting upon an object resulting from its interaction with another object.',
      'Pressure: The thrust force acting perpendicularly on a unit surface area ($P = F/A$).',
      'Atmospheric Pressure: The pressure exerted by the weight of atmospheric air on the surface of the Earth.'
    ],
    formulas: [
      { name: 'Pressure Formula', formula: 'P = \\frac{F}{A}', explanation: 'Pressure is directly proportional to force and inversely proportional to contact area.', units: 'Pascal (Pa = N/m²)' },
      { name: 'Hydrostatic Liquid Pressure', formula: 'P = h \\rho g', explanation: 'Liquid pressure depends on depth (h), density (rho), and gravity (g).', units: 'N/m²' }
    ],
    solvedExamples: [
      {
        question: 'A force of 150 N is applied perpendicularly over an area of 0.03 m². Calculate the pressure exerted.',
        solution: 'Pressure P = Force / Area\nP = 150 N / 0.03 m² = 15000 / 3 = 5,000 N/m² = 5,000 Pa (or 5 kPa).',
        keyInsight: 'Divide force in Newtons by area in square meters to calculate pressure in Pascals.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'School bags have wide shoulder straps so that the heavy weight of books is distributed over a large area of your shoulders, reducing pressure and pain.',
      'Deep-sea divers wear reinforced atmospheric diving suits because water pressure increases tremendously with ocean depth.'
    ],
    quickRevision: [
      'Force is a push or pull; its SI unit is the Newton (N).',
      'Pressure = Force / Area; its SI unit is the Pascal (Pa).',
      'Smaller area produces higher pressure; larger area lowers pressure.',
      'Liquid pressure increases with depth; atmospheric pressure is caused by air weight.'
    ]
  },

  'c8-phys-02': {
    introduction:
      'Why do you slip when you step on a wet banana peel, and why do car tires have deep tread grooves? Friction is the invisible force that opposes motion. Without friction, you could not walk, hold a pencil, write on paper, or stop a bicycle with brakes! In this chapter, we master static, sliding, and rolling friction.',
    basicConcepts: [
      'Friction is a contact force that opposes the relative motion between two surfaces in contact.',
      'Friction is caused by microscopic irregularities (peaks and valleys) interlocking between two touching surfaces.',
      'Friction produces heat (like rubbing your palms together in winter).',
      'Rolling friction is much smaller than sliding friction, which is why the wheel was one of humanity\'s greatest inventions.'
    ],
    detailedExplanations: [
      {
        topic: '1. Types of Friction: Static, Sliding, and Rolling',
        explanation:
          '1. Static Friction: The friction that comes into play when you attempt to move an object at rest. It is self-adjusting up to a maximum limit called limiting friction.\n2. Sliding Friction: The friction that opposes motion when an object is already sliding over a surface. Sliding friction is slightly smaller than static friction.\n3. Rolling Friction: The resistance when an object rolls over a surface. Rolling friction is vastly smaller than sliding friction! This is why rolling suitcases have wheels and machines use ball bearings.'
      },
      {
        topic: '2. Friction: A Necessary Evil',
        explanation:
          '• Why Friction is Necessary:\n  - Enables us to walk without slipping.\n  - Allows pen tips to grip paper and leave ink marks.\n  - Allows brakes to stop speeding vehicles.\n  - Enables nails and screws to hold furniture together.\n• Why Friction is an Evil (Disadvantage):\n  - Wears out shoe soles, tires, and machine gears.\n  - Wastes fuel energy in machines by converting useful mechanical energy into unwanted heat.'
      },
      {
        topic: '3. Methods of Increasing and Reducing Friction',
        explanation:
          '• Increasing Friction: Deep tread patterns on vehicle tires and sports shoes provide grip on wet roads; gymnasts apply chalk powder to their hands.\n• Reducing Friction: Applying lubricants (oil, grease, graphite) between moving metal parts creates a smooth film that prevents rough irregularities from interlocking; using ball bearings.'
      }
    ],
    definitions: [
      'Frictional Force: The opposing force that resists relative motion between surfaces in contact.',
      'Lubricant: A substance (oil, grease, graphite) applied between moving surfaces to reduce friction and wear.',
      'Drag: Fluid friction exerted by liquids and gases on objects moving through them.'
    ],
    formulas: [
      { name: 'Frictional Hierarchy', formula: '\\text{Static Friction} > \\text{Sliding Friction} \\gg \\text{Rolling Friction}', explanation: 'Rolling friction is the smallest of all contact resistances.', units: 'Order' }
    ],
    solvedExamples: [
      {
        question: 'Why is it much easier to push a heavy box once it is already moving than to get it started from rest?',
        solution: 'To start moving an object from rest, you must overcome static friction, where microscopic surface irregularities have interlocked deeply. Once the box starts moving, the contact points do not get enough time to lock completely, so sliding friction is smaller than static friction.',
        keyInsight: 'Sliding friction is always slightly less than maximum static friction.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Striking a matchstick against the rough side of a matchbox generates enough frictional heat to ignite the red phosphorus chemical.',
      'Sprinkling fine talcum powder on a carrom board reduces friction so striker coins glide smoothly.'
    ],
    quickRevision: [
      'Friction is caused by interlocking microscopic surface irregularities.',
      'Static friction > Sliding friction >> Rolling friction.',
      'Friction is necessary for walking, writing, and braking.',
      'Lubricants and ball bearings reduce friction; tire treads increase friction.'
    ]
  },

  'c8-phys-03': {
    introduction:
      'Close your eyes and listen: birds chirping, car horns honking, school bells ringing, and friends laughing. Sound plays a vital role in our communication! In this chapter, we discover how vibrations produce sound, why sound cannot travel through empty space, how our ears detect sound waves, and how noise pollution harms health.',
    basicConcepts: [
      'Sound is produced by vibrating objects (rapid to-and-fro movements).',
      'Sound requires a material medium (solid, liquid, or gas) to propagate. It cannot travel through a vacuum!',
      'Amplitude determines loudness (loudness is proportional to amplitude squared).',
      'Frequency determines pitch (shrillness), measured in Hertz (Hz).'
    ],
    detailedExplanations: [
      {
        topic: '1. Production & Propagation of Sound in Mediums',
        explanation:
          'When you strike a metal tuning fork or pluck a guitar string, it vibrates back and forth rapidly, creating alternating waves of compressed and rarefied air molecules that reach our ears.\n\nSound travels fastest in solids (like steel rails, ~5,000 m/s), slower in liquids (~1,500 m/s in water), and slowest in gases (~340 m/s in air). In an airtight glass bell jar, when a vacuum pump removes all air, an electric ringing bell becomes completely silent! Sound cannot travel across empty vacuum.'
      },
      {
        topic: '2. Characteristics of Sound: Amplitude, Time Period, Frequency',
        explanation:
          '• Frequency ($\\nu$): Number of vibrations per second. Unit: Hertz (Hz). Higher frequency produces a higher, shriller pitch (e.g., mosquito buzz, woman\'s voice). Lower frequency produces a deep, hoarse bass sound (e.g., lion\'s roar, drum).\n• Amplitude ($A$): Maximum displacement of vibrating body from rest. Greater amplitude produces louder sound ($Loudness \\propto A^2$).\n• Audible Range for Humans: 20 Hz to 20,000 Hz. Frequencies below 20 Hz are Infrasonic (elephants, earthquakes); frequencies above 20,000 Hz are Ultrasonic (bats, dolphins, medical ultrasound).'
      },
      {
        topic: '3. Human Ear Anatomy & Hearing Mechanism',
        explanation:
          'The outer funnel (pinna) collects sound waves and channels them down the ear canal to a tight membrane called the Eardrum (Tympanic membrane). Sound waves vibrate the eardrum, which moves three tiny bones (hammer, anvil, stirrup). These bones amplify vibrations and send electrical signals via the auditory nerve to the brain.'
      }
    ],
    definitions: [
      'Frequency: The number of complete sound vibrations or oscillations per second, measured in Hertz (Hz).',
      'Audible Range: The range of sound frequencies (20 Hz to 20,000 Hz) that can be heard by human ears.',
      'Noise Pollution: Unwanted, excessive, or irritating sounds in the environment harmful to human well-being.'
    ],
    formulas: [
      { name: 'Wave Frequency Relation', formula: '\\nu = \\frac{1}{T}', explanation: 'Frequency is reciprocal of time period T.', units: 'Hertz (Hz)' },
      { name: 'Loudness Relation', formula: '\\text{Loudness} \\propto (\\text{Amplitude})^2', explanation: 'Doubling amplitude increases sound loudness four-fold.', units: 'Decibels (dB)' }
    ],
    solvedExamples: [
      {
        question: 'A vibrating tuning fork makes 400 complete vibrations in 2 seconds. What is its frequency and time period?',
        solution: 'Frequency = Total vibrations / Time = 400 / 2 = 200 Hz.\nTime Period T = 1 / Frequency = 1 / 200 = 0.005 seconds.',
        keyInsight: 'Frequency = vibrations per second; Time Period = 1 / Frequency.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Bats fly and hunt insects in pitch darkness by emitting ultrasonic sound squeaks and listening to returning echoes (echolocation).',
      'Planting trees along roadsides (Green Muffler) reduces highway noise pollution because leaves absorb sound vibrations.'
    ],
    quickRevision: [
      'Sound is produced by vibrations and needs a material medium (solid > liquid > gas).',
      'Sound cannot travel through vacuum.',
      'Frequency controls pitch (shrillness); amplitude controls loudness.',
      'Human hearing range is 20 Hz to 20,000 Hz.'
    ]
  },

  'c8-phys-04': {
    introduction:
      'Pure distilled water does not conduct electricity, but dissolve a pinch of common salt in it and it becomes an electric conductor! When current passes through conducting chemical solutions, it triggers fascinating chemical reactions. In this chapter, we explore electrolysis, LED circuit testing, and the industrial process of electroplating.',
    basicConcepts: [
      'Most liquids that conduct electricity are solutions of acids, bases, and salts in water.',
      'Electrolytes are conducting solutions that dissociate into positive ions (cations) and negative ions (anions).',
      'Chemical Effect of Current: The passage of electric current through an electrolyte causes chemical reactions (color changes, gas bubbles, metal deposits).',
      'Electroplating is the process of depositing a thin layer of a superior metal onto another metal using electricity.'
    ],
    detailedExplanations: [
      {
        topic: '1. Testing Conductivity of Liquids using LEDs',
        explanation:
          'Ordinary light bulbs need substantial current to make their filament glow hot. Weakly conducting liquids (like tap water, vinegar, lemon juice) pass small currents that fail to light normal bulbs. Scientists use an LED (Light Emitting Diode) tester, which glows brightly even with tiny electric currents. Remember: the longer leg of an LED connects to the positive (+) battery terminal.'
      },
      {
        topic: '2. Electrolysis of Water (Hydrogen & Oxygen Generation)',
        explanation:
          'In 1800, British chemist William Nicholson immersed two carbon rods (electrodes) in water with a drop of acid and connected a battery. Bubbles of oxygen gas formed at the positive electrode (anode), and bubbles of hydrogen gas formed at the negative electrode (cathode) in a 1:2 volume ratio:\n$$2\\text{H}_2\\text{O } \\xrightarrow{\\text{Electricity}} 2\\text{H}_2\\uparrow \\text{ (Cathode)} + \\text{O}_2\\uparrow \\text{ (Anode)}$$'
      },
      {
        topic: '3. Electroplating: Mechanism and Applications',
        explanation:
          'Electroplating is the process of coating a cheaper base metal with a thin layer of an expensive, shiny, or rust-resistant metal using electrolysis:\n• Copper plating experiment: Connect an iron key to the negative terminal (cathode) and a pure copper plate to the positive terminal (anode) in a copper sulfate solution. Copper ions ($Cu^{2+}$) migrate to the iron key, depositing a gleaming reddish-brown layer of copper metal on it!\n• Commercial Uses:\n  - Chromium plating: Car bumpers, bicycle handlebars, and bathroom taps are plated with shiny, scratch-resistant chromium.\n  - Gold and Silver plating on imitation jewelry.\n  - Tin plating on iron food cans: Tin is less reactive than iron, preventing food from spoiling.'
      }
    ],
    definitions: [
      'Electrolyte: A chemical liquid or solution that conducts electricity through ions.',
      'Electroplating: The deposition of a desired metallic layer onto another conducting object by electrolytic action.',
      'Electrode: A conducting rod or plate (anode or cathode) immersed in an electrolyte through which current enters or leaves.'
    ],
    formulas: [
      { name: 'Water Electrolysis Ratio', formula: '2\\text{H}_2\\text{O} \\xrightarrow{\\text{Electricity}} 2\\text{H}_2\\text{ (Cathode)} + 1\\text{O}_2\\text{ (Anode)}', explanation: 'Hydrogen gas volume produced is double oxygen gas volume.', units: 'Stoichiometry' }
    ],
    solvedExamples: [
      {
        question: 'Why are chromium coatings electroplated onto steel bicycle rims and car bumpers instead of manufacturing the entire parts from solid chromium?',
        solution: 'Chromium has a brilliant shiny luster, is corrosion-resistant, and resists scratches. However, solid chromium metal is extremely expensive and brittle. Electroplating applies a thin decorative, rust-proof layer of chromium over cheap, strong steel.',
        keyInsight: 'Electroplating combines the strength of cheap base metals with the surface properties of superior metals.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Iron food storage cans are electroplated with tin because tin does not react with acidic food juices.',
      'Zinc electroplating (galvanization) protects automobile chassis and steel girders from rusting.'
    ],
    quickRevision: [
      'Solutions of acids, bases, and salts conduct electricity via ions.',
      'Electrolysis splits water into hydrogen (cathode) and oxygen (anode).',
      'Electroplating deposits desired metal coatings using electrical current.',
      'The object to be electroplated is always connected to the negative terminal (cathode).'
    ]
  },

  'c8-phys-05': {
    introduction:
      'Lightning flashing across a stormy sky and earthquakes rattling buildings—nature possesses awe-inspiring forces! In this chapter, we explore static electricity, charging by friction, lightning conductors, the Richter earthquake scale, and the structure of our eyes.',
    basicConcepts: [
      'Static Electricity: Electrical charges produced by friction that remain stationary and do not flow continuously.',
      'Two types of charges exist: Positive (+) and Negative (-). Like charges repel; unlike charges attract.',
      'Lightning is a gigantic natural electric spark resulting from electrostatic discharge between clouds and the Earth.',
      'Earthquakes are sudden tremors or shaking of the Earth\'s crust caused by tectonic plate slippage deep underground.'
    ],
    detailedExplanations: [
      {
        topic: '1. Charging by Friction & The Gold Leaf Electroscope',
        explanation:
          'When you rub a plastic comb with dry hair, it acquires a static electric charge and attracts small bits of dry paper. An electroscope is a simple device with two thin gold or aluminum foil leaves inside a glass bottle: when a charged object touches the metal cap, identical charges flow down to both leaves, causing them to repel and diverge!'
      },
      {
        topic: '2. Lightning and Benjamin Franklin\'s Lightning Conductor',
        explanation:
          'During vigorous thunderstorms, air currents move up while water drops fall down. Heavy positive charges accumulate near cloud tops, and negative charges gather near cloud bases. When the charge buildup becomes massive, air insulation breaks down, releasing a colossal electric discharge to the ground: Lightning!\n\nA Lightning Conductor is a tall metallic rod with sharp spikes installed on the roofs of tall skyscrapers. A thick copper strip runs down the outside wall deep into the Earth (Earthing). During a lightning strike, it channels millions of volts safely into the ground without damaging the building.'
      },
      {
        topic: '3. Earthquakes and Tectonic Plates',
        explanation:
          'The outermost shell of the Earth (crust) is fragmented into large pieces called Tectonic Plates. These plates continuously brush past or collide with one another. When they catch and slip abruptly along fault boundaries (seismic zones), shock seismic waves radiate outwards, shaking the ground.\n• Magnitude is measured on the logarithmic Richter Scale using seismographs. A magnitude 7 earthquake has 1,000 times more destructive energy than a magnitude 5 tremor!'
      }
    ],
    definitions: [
      'Electroscope: An instrument used to detect and identify electric charge on a body.',
      'Lightning Conductor: A protective metal rod installed on tall buildings to divert lightning discharge safely to the ground.',
      'Seismograph: An instrument that records seismic shock waves produced by earthquakes.'
    ],
    formulas: [
      { name: 'Richter Scale Energy Scaling', formula: '\\text{Energy increases by } \\sim 32\\times \\text{ for each unit increase in magnitude}', explanation: 'Logarithmic earthquake energy relationship.', units: 'Richter Scale' }
    ],
    solvedExamples: [
      {
        question: 'Why should you never carry an umbrella with a metallic handle or stand under tall isolated trees during an open thunderstorm?',
        solution: 'Lightning seeks the shortest, easiest path to the ground and preferentially strikes tall, pointed conducting objects. A metal umbrella handle or a tall isolated tree acts as an elevated lightning conductor, attracting the lightning bolt and causing lethal electric shocks.',
        keyInsight: 'Avoid tall pointed objects and metal poles during thunderstorms.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Taking off a synthetic nylon sweater in a dark room produces small cracking sounds and tiny luminous sparks due to electrostatic discharge.',
      'Modern buildings in earthquake zones (like Japan) are built with flexible base isolators and shock absorbers.'
    ],
    quickRevision: [
      'Like charges repel; unlike charges attract.',
      'Lightning is a massive electrostatic discharge between clouds and ground.',
      'Lightning conductors divert electrical discharge into the earth.',
      'Earthquakes occur along tectonic plate boundaries and are recorded on seismographs.'
    ]
  },

  // ==========================================
  // CHEMISTRY (5 CHAPTERS)
  // ==========================================
  'c8-chem-01': {
    introduction:
      'Polyester shirts that dry in minutes, unbreakable plastic buckets, and nylon parachutes—synthetic polymers revolutionized 20th-century life! In Class 8 Chemistry, we study polymer chemistry, comparing natural fibres with synthetic fibres like nylon, rayon, and polyester, and explore the environmental impact of plastics.',
    basicConcepts: [
      'A polymer is a large molecule made of many repeating smaller chemical units called monomers (from Greek "poly" = many, "mer" = unit).',
      'Synthetic fibres are synthesized from petrochemical raw materials.',
      'Thermoplastics soften and melt on heating (recyclable), while Thermosetting plastics cannot be reshaped once molded.'
    ],
    detailedExplanations: [
      {
        topic: '1. Types of Synthetic Fibres',
        explanation:
          '• Rayon (Artificial Silk): Made by chemical treatment of natural wood pulp. It dyes beautifully and has the luxurious sheen of natural silk at a fraction of the cost.\n• Nylon: The first fully synthetic fibre made from coal, water, and air in 1931. A nylon thread is stronger than a steel wire of the same thickness! Used in mountaineering ropes, parachutes, toothbrushes, and socks.\n• Polyester (Terylene): Does not wrinkle easily, remains crisp, and is easy to wash. PET (Polyethylene terephthalate) is used for water bottles and jars.\n• Acrylic (Artificial Wool): Cheap, lightweight synthetic wool used for warm sweaters and blankets.'
      },
      {
        topic: '2. Thermoplastics vs Thermosetting Plastics',
        explanation:
          '• Thermoplastics: Polymers with linear chains that soften, melt, and bend easily upon heating. They can be recycled repeatedly. Examples: Polythene (bags), PVC (plumbing pipes), Polystyrene.\n• Thermosetting Plastics: Polymers with cross-linked networks that once molded and set, cannot be softened or melted by heating! Examples: Bakelite (electrical switches, saucepan handles—poor conductor of heat and electricity), Melamine (fire-resistant kitchenware, floor tiles).'
      }
    ],
    definitions: [
      'Polymer: A macromolecule formed by linking thousands of small monomer units together.',
      'Thermoplastic: A plastic that softens repeatedly on heating and hardens on cooling.',
      'Thermosetting Plastic: A plastic that sets permanently into shape during molding and cannot be remelted.'
    ],
    formulas: [
      { name: 'Polymerization Reaction', formula: 'n(\\text{Monomer}) \\xrightarrow{\\text{Catalyst, Heat}} [\\text{Polymer}]_n', explanation: 'Synthesis of long macromolecular chains from monomer units.', units: 'Polymer chemistry' }
    ],
    solvedExamples: [
      {
        question: 'Why are electrical plugs, sockets, and switches manufactured exclusively from Bakelite plastic rather than PVC?',
        solution: 'Bakelite is a thermosetting plastic and an exceptional electrical insulator. Unlike thermoplastics, it does not melt, soften, or catch fire even if high current produces heat, ensuring household electrical safety.',
        keyInsight: 'Thermosetting plastics withstand heat without melting or deforming.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Firefighters wear special suits coated with Melamine plastic because melamine resists flames and thermal transfer.',
      'Non-stick frying pans are coated with Teflon (PTFE), a plastic to which oil and water do not stick.'
    ],
    quickRevision: [
      'Nylon is stronger than steel wire; Rayon is artificial silk from wood pulp.',
      'Thermoplastics can be melted and reshaped (polythene, PVC).',
      'Thermosetting plastics do not melt on reheating (Bakelite, Melamine).'
    ]
  },

  'c8-chem-02': {
    introduction:
      'Why is gold used for jewelry, copper for electrical cables, and aluminum for soda cans? In this chapter, we master the physical and chemical properties of metals and non-metals, exploring malleability, ductility, reactions with oxygen and acids, and displacement reactions.',
    basicConcepts: [
      'Elements are broadly classified into Metals and Non-Metals.',
      'Malleability: The property of metals that allows them to be beaten into thin sheets (like aluminum foil).',
      'Ductility: The property of metals that allows them to be drawn into thin wires (like copper wire).',
      'Displacement Reaction: A more reactive metal displaces a less reactive metal from its aqueous salt solution.'
    ],
    detailedExplanations: [
      {
        topic: '1. Physical Properties: Metals vs Non-Metals',
        explanation:
          '• Metals: Lustrous (shiny), hard, malleable, ductile, sonorous (ring when struck), and good conductors of heat and electricity. (Exception: Mercury is liquid at room temperature; Sodium and Potassium are soft metals that can be cut with a kitchen knife!).\n• Non-Metals: Dull appearance, brittle (crumble to powder when hammered), non-ductile, non-sonorous, and poor conductors of heat and electricity. (Exception: Graphite carbon is a good electrical conductor; Diamond is the hardest natural substance).'
      },
      {
        topic: '2. Chemical Reactions: Reaction with Oxygen & Water',
        explanation:
          '• Reaction with Oxygen: Metals burn in oxygen to form basic oxides (e.g., $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$; turns red litmus blue). Non-metals form acidic oxides (e.g., $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$; turns blue litmus red).\n• Reaction with Water: Sodium metal reacts vigorously with water, catching fire instantly! It is stored submerged in kerosene oil. Non-metals like phosphorus catch fire in air and are stored under water.'
      },
      {
        topic: '3. Reactivity Series and Displacement Reactions',
        explanation:
          'A more reactive metal displaces a less reactive metal from its salt solution:\n$$\\text{Zinc (Zn)} + \\text{Copper Sulfate (CuSO}_4\\text{, Blue)} \\longrightarrow \\text{Zinc Sulfate (ZnSO}_4\\text{, Colorless)} + \\text{Copper (Cu, Brown)}$$\nZinc is more reactive than copper, so it displaces copper. If you put a copper coin in zinc sulfate, NO reaction occurs because copper cannot displace the more reactive zinc!'
      }
    ],
    definitions: [
      'Malleability: The ability of a metal to be hammered or rolled into thin sheets without shattering.',
      'Ductility: The ability of a material to be drawn out into thin wires.',
      'Displacement Reaction: A chemical reaction where a more reactive element displaces a less reactive element from its compound.'
    ],
    formulas: [
      { name: 'Displacement Reaction Formula', formula: '\\text{Zn} + \\text{CuSO}_4 \\longrightarrow \\text{ZnSO}_4 + \\text{Cu}', explanation: 'More reactive Zinc displaces less reactive Copper from solution.', units: 'Chemical reaction' }
    ],
    solvedExamples: [
      {
        question: 'Why is sodium metal always stored immersed in kerosene oil?',
        solution: 'Sodium is an extremely reactive alkali metal. It reacts violently and exothermically with oxygen and water vapor in atmospheric air, releasing hydrogen gas that immediately catches fire. Storing it in kerosene cuts off all contact with air and moisture.',
        keyInsight: 'Kerosene prevents atmospheric oxygen and moisture from contacting reactive sodium.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Silver and gold foils (varq) are hammered into microscopic thin layers to decorate Indian sweets (malleability).',
      'Church and temple bells are cast from bronze and copper alloys because metals are sonorous and produce resonant ringing sounds.'
    ],
    quickRevision: [
      'Metals are malleable, ductile, lustrous, sonorous, and conduct electricity.',
      'Metal oxides are basic; non-metal oxides are acidic.',
      'Sodium is stored in kerosene; phosphorus is stored under water.',
      'More reactive metals displace less reactive metals.'
    ]
  },

  'c8-chem-03': {
    introduction:
      'Where does the petrol for cars, diesel for trucks, and LPG for home cooking stoves come from? Millions of years ago, prehistoric forests and marine plankton were buried deep under the Earth. Under immense pressure and heat, their remains transformed into fossil fuels: Coal and Petroleum.',
    basicConcepts: [
      'Fossil Fuels: Exhaustible natural resources formed over millions of years from the buried remains of living organisms (Coal, Petroleum, Natural Gas).',
      'Coal is a hard black combustible rock formed from ancient swamp plants through carbonization.',
      'Petroleum ("Rock Oil") is a dark, viscous liquid crude oil separated by fractional distillation.',
      'Natural Gas consists predominantly of Methane (CH4) and burns cleanly as CNG.'
    ],
    detailedExplanations: [
      {
        topic: '1. Coal and Its Useful Products',
        explanation:
          'About 300 million years ago, dense swamp forests were buried under soil layers. Intense underground pressure and geothermal heat slowly converted this organic matter into coal over millions of years—a process called Carbonization.\n\nWhen coal is heated in the absence of air (destructive distillation), it yields:\n1. Coke: A tough, porous black solid of almost pure carbon used in steel manufacturing.\n2. Coal Tar: A thick black liquid with unpleasant smell, used in synthetic dyes, perfumes, paints, and mothballs (naphthalene).\n3. Coal Gas: Used as an industrial fuel.'
      },
      {
        topic: '2. Petroleum Refining (Fractional Distillation)',
        explanation:
          'Crude petroleum is a complex mixture of hydrocarbons formed from tiny microscopic marine organisms buried in sea mud millions of years ago. In an oil refinery, crude oil is boiled in a tall fractionating column, separating fractions by their different boiling points:\n• Petroleum Gas (LPG): Bottled for home and factory heating.\n• Petrol (Gasoline): Fuel for light motor vehicles and scooters.\n• Kerosene: Fuel for stoves, lamps, and jet aircraft engines.\n• Diesel: Heavy motor vehicle fuel (trucks, buses, tractors, generators).\n• Lubricating Oil & Paraffin Wax: Ointments, candles, Vaseline petroleum jelly.\n• Bitumen: Residual black asphalt used for surfacing highway roads.'
      }
    ],
    definitions: [
      'Carbonization: The slow geological process of conversion of dead vegetation into coal under deep heat and pressure.',
      'Fractional Distillation: Separation of a liquid mixture into fractions differing in boiling points using a fractionating column.',
      'CNG (Compressed Natural Gas): Clean-burning natural gas stored under high pressure, generating minimal air pollution.'
    ],
    formulas: [
      { name: 'Natural Gas Composition', formula: '\\text{CH}_4 \\text{ (Methane } \\ge 85\\%)', explanation: 'Primary hydrocarbon component of clean natural gas.', units: 'Molecular composition' }
    ],
    solvedExamples: [
      {
        question: 'Why are coal, petroleum, and natural gas termed exhaustible natural resources?',
        solution: 'Fossil fuels require millions of years to form under extreme geological heat and pressure. Human consumption is depleting these underground reserves at a rate millions of times faster than natural formation, meaning they cannot be renewed in human lifetimes.',
        keyInsight: 'Formation takes millions of years, making fossil fuels strictly non-renewable.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Public buses and autorickshaws in major Indian cities run on CNG to reduce toxic particulate exhaust emissions.',
      'Bitumen has replaced coal tar for tarring city highway roads.'
    ],
    quickRevision: [
      'Coal formed by carbonization of ancient vegetation.',
      'Coal products: Coke (steelmaking), Coal tar (dyes/chemicals), Coal gas.',
      'Petroleum refining produces LPG, petrol, diesel, kerosene, paraffin wax, and bitumen.',
      'CNG is a cleaner alternative automotive fuel.'
    ]
  },

  'c8-chem-04': {
    introduction:
      'Strike a matchstick, watch a candle flame flicker, or observe an LPG gas burner glow blue on a kitchen stove—combustion is one of humanity\'s most critical chemical discoveries. In this chapter, we explore fuel ignition temperatures, the fire triangle, and the structure of a candle flame.',
    basicConcepts: [
      'Combustion: A chemical process in which a substance reacts rapidly with oxygen, releasing heat and light energy.',
      'Combustible Substances: Materials that burn readily in air (paper, wood, LPG, petrol).',
      'Ignition Temperature: The lowest temperature at which a combustible substance catches fire.',
      'Fire Triangle: Three things required to produce and sustain fire: Fuel + Oxygen + Heat (Ignition Temperature).'
    ],
    detailedExplanations: [
      {
        topic: '1. Ignition Temperature & Inflammable Substances',
        explanation:
          'A pile of wood does not catch fire on its own at room temperature because it has a high ignition temperature. Paper catches fire faster. Substances that have a very low ignition temperature and can easily catch fire with a spark are called inflammable substances (e.g., petrol, alcohol, LPG).\n\nIf you make a paper cup, fill it with water, and hold it over a candle flame, the paper does NOT burn! Heat from the flame transfers immediately to the water by conduction, keeping the paper below its ignition temperature until the water boils!'
      },
      {
        topic: '2. How to Control Fire (Fire Extinguishers)',
        explanation:
          'Fire can be extinguished by removing any one side of the fire triangle:\n• Water: Cools the burning material below its ignition temperature. NEVER use water for oil fires (oil floats and spreads) or electrical fires (water conducts electricity and electrocutes firefighters)!\n• Carbon Dioxide (CO2) Fire Extinguisher: CO2 is heavier than oxygen; it covers the fire like an invisible blanket, cutting off oxygen and cooling the fuel.'
      },
      {
        topic: '3. Anatomy of a Candle Flame (Three Distinct Zones)',
        explanation:
          '1. Innermost Zone (Dark Zone): Around the wick; contains unburnt wax vapor. Coldest zone.\n2. Middle Zone (Luminous Yellow Zone): Partial combustion occurs due to limited oxygen. Carbon particles glow yellow; leaves black soot on cold glass plates. Moderately hot.\n3. Outermost Zone (Non-Luminous Blue Zone): Complete combustion occurs with abundant oxygen. This is the hottest part of the flame! Goldsmiths blow this outer blue zone with a blowpipe to melt gold and silver.',
        diagram: `
                 ( Blue / Non-Luminous Outer Zone - HOTTEST )
                /                                           \\
               |     ( Yellow / Luminous Middle Zone )       |
               |    /                                 \\      |
               |   |   ( Dark Innermost Zone / Wick )  |     |
               |   |                 |                 |     |
        `
      }
    ],
    definitions: [
      'Combustion: An exothermic chemical reaction between a fuel and an oxidant that produces heat and light.',
      'Ignition Temperature: The lowest temperature to which a substance must be heated before it can catch fire.',
      'Calorific Value: The amount of heat energy released on complete combustion of 1 kg of a fuel (measured in kJ/kg).'
    ],
    formulas: [
      { name: 'Calorific Value Formula', formula: '\\text{Calorific Value} = \\frac{\\text{Heat Produced (kJ)}}{\\text{Mass of Fuel Burned (kg)}}', explanation: 'Determines the thermal efficiency of fuels in kJ/kg.', units: 'kJ/kg' }
    ],
    solvedExamples: [
      {
        question: 'In an experiment, 4.5 kg of a test fuel was completely burned. The heat produced was measured to be 180,000 kJ. Calculate the calorific value of the fuel.',
        solution: 'Calorific Value = Total Heat Energy / Mass of Fuel\n= 180,000 kJ / 4.5 kg = 40,000 kJ/kg.',
        keyInsight: 'Divide total kilojoules produced by kilograms burned to obtain calorific value.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'LPG has a high calorific value (~55,000 kJ/kg) and burns cleanly without smoke, making it superior to smoky cow dung cakes (~6,000 kJ/kg).',
      'Baking soda (sodium bicarbonate) thrown on kitchen grease fires releases carbon dioxide gas, smothering flames safely.'
    ],
    quickRevision: [
      'Fire requires fuel, oxygen, and ignition temperature.',
      'CO2 extinguishers smother fires by displacing oxygen.',
      'The outermost non-luminous blue zone is the hottest part of a flame.',
      'Calorific value (kJ/kg) measures fuel energy efficiency.'
    ]
  },

  'c8-chem-05': {
    introduction:
      'Air and water are the two greatest gifts of nature, yet industrial smoke and toxic effluents threaten both. In this chapter, we explore air pollutants, the greenhouse effect, global warming, acid rain, and water purification techniques.',
    basicConcepts: [
      'Pollution is the contamination of natural air, water, or soil by harmful substances called pollutants.',
      'Primary Air Pollutants: Carbon monoxide (CO), sulfur dioxide (SO2), nitrogen oxides (NOx), chlorofluorocarbons (CFCs), and particulate smog.',
      'Greenhouse Effect: Trapping of infrared radiation by gases like CO2, methane, and water vapor, warming the Earth.',
      'Potable Water: Clean water fit for human drinking.'
    ],
    detailedExplanations: [
      {
        topic: '1. Acid Rain and the Yellowing of the Taj Mahal',
        explanation:
          'Sulfur dioxide ($SO_2$) and Nitrogen dioxide ($NO_2$) released by petroleum refineries and coal power plants react with atmospheric water droplets, forming sulfuric acid ($H_2SO_4$) and nitric acid ($HNO_3$). When this acid rain falls, it corrodes marble monuments—a phenomenon called "Marble Cancer":\n$$\\text{CaCO}_3 \\text{ (White Marble)} + \\text{H}_2\\text{SO}_4 \\longrightarrow \\text{CaSO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2$$\nThe Supreme Court of India ordered factories around the Taj Mahal to switch to clean CNG and LPG fuels to prevent further yellowing of its white marble.'
      },
      {
        topic: '2. The Greenhouse Effect & Global Warming',
        explanation:
          'Just as glass panes in a greenhouse trap solar heat to nurture plants in cold climates, atmospheric greenhouse gases ($CO_2$, methane, nitrous oxide) trap heat radiating back from Earth. While a natural greenhouse effect keeps Earth habitable, excessive burning of fossil fuels and deforestation have caused global temperatures to surge (Global Warming), melting polar icecaps and raising sea levels.'
      },
      {
        topic: '3. Water Purification: Making Water Potable',
        explanation:
          '• Boiling: Kills disease-causing bacteria, viruses, and parasites.\n• Chlorination: Adding chlorine tablets or bleaching powder in controlled doses to kill pathogens.\n• RO (Reverse Osmosis) & UV Water Filters: Semi-permeable membranes filter dissolved chemical impurities while ultraviolet lamps destroy microbial DNA.'
      }
    ],
    definitions: [
      'Acid Rain: Rain containing elevated levels of sulfuric and nitric acids formed from industrial gas pollutants.',
      'Greenhouse Gases: Gases ($CO_2$, $CH_4$, water vapor) that trap thermal infrared radiation in the atmosphere.',
      'Eutrophication: Excessive nutrient richness in water bodies causing algal blooms that deplete oxygen and suffocate aquatic life.'
    ],
    formulas: [
      { name: 'Acid Rain Formation', formula: '\\text{SO}_2 + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_2\\text{SO}_3; \\quad 2\\text{NO}_2 + \\text{H}_2\\text{O} \\longrightarrow \\text{HNO}_3 + \\text{HNO}_2', explanation: 'Atmospheric gases dissolving into rain droplets as acids.', units: 'Environmental chemistry' }
    ],
    solvedExamples: [
      {
        question: 'Why does carbon monoxide (CO) gas cause fatal poisoning if inhaled in an enclosed room with a burning coal angithi?',
        solution: 'Carbon monoxide binds to blood hemoglobin with an affinity over 200 times stronger than oxygen, forming carboxyhemoglobin. This blocks red blood cells from carrying oxygen to the brain and vital organs, causing suffocation, unconsciousness, and death.',
        keyInsight: 'Carbon monoxide strongly binds hemoglobin and prevents cellular oxygen delivery.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'CFCs in old refrigerators and aerosol sprays depleted the stratospheric ozone layer; the global Montreal Protocol successfully phased them out.',
      'Algal blooms turn farm ponds emerald green, blocking sunlight and suffocating fish beneath.'
    ],
    quickRevision: [
      'Acid rain forms from SO2 and NO2 emissions, damaging marble and soil.',
      'Excess CO2 drives global warming by trapping infrared radiation.',
      'Boiling and chlorination disinfect drinking water, making it potable.'
    ]
  },

  // ==========================================
  // MATHEMATICS (5 CHAPTERS)
  // ==========================================
  'c8-math-01': {
    introduction:
      'What number should you add to 3 to get 0? The answer is -3. What number should you multiply by 2 to get 1? The answer is 1/2. Rational numbers include all numbers that can be written as fractions of integers, opening up the mathematical continuum.',
    basicConcepts: [
      'A rational number is any number that can be expressed in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\ne 0$.',
      'Rational numbers include natural numbers, whole numbers, integers, and fractions.',
      'Closure, Commutative, and Associative properties apply to addition and multiplication of rational numbers.',
      'Between any two rational numbers, there are INFINITELY many rational numbers!'
    ],
    detailedExplanations: [
      {
        topic: '1. Properties of Rational Numbers',
        explanation:
          '• Additive Identity: 0 is the additive identity: $\\frac{a}{b} + 0 = \\frac{a}{b}$.\n• Multiplicative Identity: 1 is the multiplicative identity: $\\frac{a}{b} \\times 1 = \\frac{a}{b}$.\n• Additive Inverse: The negative of $\\frac{a}{b}$ is $-\\frac{a}{b}$.\n• Multiplicative Inverse (Reciprocal): The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$ (since $\\frac{a}{b} \\times \\frac{b}{a} = 1$). Note: 0 has NO reciprocal!'
      },
      {
        topic: '2. Finding Rational Numbers Between Two Numbers',
        explanation:
          'How do you find 5 rational numbers between $\\frac{1}{4}$ and $\\frac{1}{2}$?\nMethod: Convert them into equivalent fractions with a large common denominator:\n• $\\frac{1}{4} = \\frac{10}{40}$\n• $\\frac{1}{2} = \\frac{20}{40}$\nNow write fractions between them: $\\frac{11}{40}, \\frac{12}{40}, \\frac{13}{40}, \\frac{14}{40}, \\frac{15}{40}$.'
      }
    ],
    definitions: [
      'Rational Number: Any number that can be expressed in the form p/q, where p and q are integers and q ≠ 0.',
      'Reciprocal: The number that when multiplied by the original number yields 1.'
    ],
    formulas: [
      { name: 'Mean of Rational Numbers', formula: '\\text{Rational between } a \\text{ and } b = \\frac{a + b}{2}', explanation: 'Midpoint mean formula to find intermediate rational numbers.', units: 'Real number' }
    ],
    solvedExamples: [
      {
        question: 'Find the multiplicative inverse (reciprocal) of: $-\\frac{13}{19}$',
        solution: 'The multiplicative inverse of a rational number p/q is q/p.\nMultiplicative inverse of -13/19 is -19/13 (because (-13/19) x (-19/13) = 1).',
        keyInsight: 'Invert the numerator and denominator while retaining the negative sign.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Measuring flour in recipes: $2\\frac{1}{2}$ cups = $5/2$ cups (a positive rational number).',
      'Finance reports: A loss of 4.5% is represented as $-9/200$.'
    ],
    quickRevision: [
      'Rational numbers can be written as p/q (q != 0).',
      '0 is the additive identity; 1 is the multiplicative identity.',
      '0 has no reciprocal.',
      'There are infinitely many rational numbers between any two rational numbers.'
    ]
  },

  'c8-math-02': {
    introduction:
      'In Class 7, we solved simple equations with variables on one side. In Class 8, we step up to linear equations where variables appear on both sides of the equals sign and solve exciting real-world word problems involving ages, coins, and digits.',
    basicConcepts: [
      'A linear equation in one variable has the highest power (exponent) of the variable equal to 1.',
      'Transposition Method: Group all variable terms on the LHS and all constant numbers on the RHS.',
      'Cross-Multiplication Method: For equations of the form $\\frac{ax + b}{cx + d} = \\frac{m}{n}$, cross-multiply: $n(ax + b) = m(cx + d)$.'
    ],
    detailedExplanations: [
      {
        topic: '1. Equations with Variables on Both Sides',
        explanation:
          'Example: Solve $5x + 9 = 5 + 3x$\nStep 1: Transpose $3x$ to the left: $5x - 3x + 9 = 5$\nStep 2: Transpose $+9$ to the right: $2x = 5 - 9$\nStep 3: Simplify: $2x = -4 \\implies x = -2$.'
      },
      {
        topic: '2. Two-Digit Number Word Problems',
        explanation:
          'A two-digit number with tens digit $x$ and units digit $y$ is written as $10x + y$. If the digits are reversed, the new number is $10y + x$.'
      }
    ],
    definitions: [
      'Linear Equation: An algebraic equation in which the maximum exponent of the variable is 1.',
      'Cross-Multiplication: Multiplying the numerator of one fraction by the denominator of the other across an equals sign.'
    ],
    formulas: [
      { name: 'Cross Multiplication Form', formula: '\\frac{ax + b}{cx + d} = \\frac{m}{n} \\implies n(ax + b) = m(cx + d)', explanation: 'Solves fractional rational linear equations.', units: 'Algebra' }
    ],
    solvedExamples: [
      {
        question: 'The present age of Sahil\'s mother is three times the present age of Sahil. After 5 years, their ages will add to 66 years. Find their present ages.',
        solution: 'Let Sahil\'s present age be x years. Mother\'s present age = 3x years.\nAfter 5 years: Sahil = (x + 5); Mother = (3x + 5).\nSum of ages: (x + 5) + (3x + 5) = 66\n4x + 10 = 66\n4x = 56 => x = 14 years.\nSahil is 14 years old; his mother is 3 x 14 = 42 years old.',
        keyInsight: 'Express future ages by adding 5 to both expressions before summing.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'Comparing mobile phone plans: Plan A charges ₹199 plus ₹1 per GB; Plan B charges ₹299 plus ₹0.50 per GB; solve $199 + x = 299 + 0.5x$ to find the break-even data volume.'
    ],
    quickRevision: [
      'Linear equations have variable exponent 1.',
      'Transpose variables to LHS and constants to RHS.',
      'Cross-multiplication simplifies fractional linear equations.'
    ]
  },

  'c8-math-03': {
    introduction:
      'From TV screens and smartphone displays to floor tiles and kites—four-sided polygons (quadrilaterals) are everywhere. In this chapter, we discover interior and exterior angle sums, parallelograms, rhombuses, rectangles, and squares.',
    basicConcepts: [
      'A quadrilateral has 4 sides, 4 vertices, and 4 interior angles.',
      'Angle Sum Property of Quadrilateral: The sum of the 4 interior angles is ALWAYS $360^\\circ$.',
      'For ANY convex polygon with $n$ sides, the sum of all exterior angles is ALWAYS $360^\\circ$!',
      'Sum of interior angles of an $n$-sided polygon = $(n - 2) \\times 180^\\circ$.'
    ],
    detailedExplanations: [
      {
        topic: '1. Polygon Formulas',
        explanation:
          '• Sum of interior angles: $(n - 2) \\times 180^\\circ$.\n  - Triangle ($n=3$): $(3-2) \\times 180^\\circ = 180^\\circ$.\n  - Quadrilateral ($n=4$): $(4-2) \\times 180^\\circ = 360^\\circ$.\n  - Pentagon ($n=5$): $(5-2) \\times 180^\\circ = 540^\\circ$.\n  - Hexagon ($n=6$): $(6-2) \\times 180^\\circ = 720^\\circ$.\n• Each interior angle of a regular polygon: $\\frac{(n - 2) \\times 180^\\circ}{n}$.\n• Each exterior angle of a regular polygon: $\\frac{360^\\circ}{n}$.'
      },
      {
        topic: '2. Special Quadrilaterals: Parallelogram, Rhombus, Rectangle, Square',
        explanation:
          '• Parallelogram: Opposite sides are parallel and equal. Opposite angles are equal. Diagonals bisect each other.\n• Rhombus: A parallelogram with ALL 4 sides equal. Diagonals bisect each other perpendicularly at $90^\\circ$!\n• Rectangle: A parallelogram with all 4 angles equal to $90^\\circ$. Diagonals are equal in length!\n• Square: A rectangle with all 4 sides equal. Diagonals are equal and bisect perpendicularly at $90^\\circ$.'
      }
    ],
    definitions: [
      'Regular Polygon: A polygon with all sides equal and all interior angles equal.',
      'Parallelogram: A quadrilateral whose opposite pairs of sides are parallel.'
    ],
    formulas: [
      { name: 'Polygon Interior Angle Sum', formula: '(n - 2) \\times 180^\\circ', explanation: 'Total sum of interior angles in an n-sided polygon.', units: 'Degrees' },
      { name: 'Polygon Exterior Angle Sum', formula: '360^\\circ \\text{ (Constant for all convex polygons)}', explanation: 'Total exterior angles sum is always 360 degrees.', units: 'Degrees' }
    ],
    solvedExamples: [
      {
        question: 'Find the number of sides of a regular polygon whose each exterior angle measures $45^\\circ$.',
        solution: 'Total sum of all exterior angles of any regular polygon = 360°.\nEach exterior angle = 45°.\nNumber of sides n = 360° / 45° = 8 sides (Octagon).',
        keyInsight: 'Number of sides = 360° / (measure of each exterior angle).',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Bees build hexagonal honeycomb cells because regular hexagons tile flat surfaces with zero wasted space and maximum volume.',
      'Kites have perpendicular diagonals, matching the geometric definition of a kite quadrilateral.'
    ],
    quickRevision: [
      'Quadrilateral interior angles add to 360°.',
      'Exterior angles of any convex polygon add to 360°.',
      'Parallelogram diagonals bisect each other; rhombus diagonals bisect at 90°.'
    ]
  },

  'c8-math-04': {
    introduction:
      'What number multiplied by itself gives 64? The answer is 8! Square numbers and square roots appear everywhere from tiling square rooms to calculating hypotenuses in trigonometry. In Class 8, we master prime factorization and long division methods for finding square roots.',
    basicConcepts: [
      'If a natural number $m$ can be expressed as $n^2$, then $m$ is called a Perfect Square (e.g., $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$).',
      'The square of an even number is always even; the square of an odd number is always odd.',
      'Numbers ending in $2, 3, 7,$ or $8$ can NEVER be perfect squares!',
      'The square root ($\\sqrt{x}$) is the inverse operation of squaring.'
    ],
    detailedExplanations: [
      {
        topic: '1. Finding Square Roots by Prime Factorization',
        explanation:
          'Example: Find $\\sqrt{324}$\nStep 1: Prime factorize 324: $324 = 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 3$\nStep 2: Group factors into identical pairs: $(2 \\times 2) \\times (3 \\times 3) \\times (3 \\times 3)$\nStep 3: Pick one factor from each pair: $\\sqrt{324} = 2 \\times 3 \\times 3 = 18$.'
      },
      {
        topic: '2. The Long Division Method (For Large Numbers and Decimals)',
        explanation:
          'When numbers are very large (like 5,329 or 17.64), prime factorization takes too long. We place bars over pairs of digits starting from the ones place, find the largest square that divides the first block, double the divisor, and find the next matching digit.'
      }
    ],
    definitions: [
      'Perfect Square: A number obtained by multiplying an integer by itself.',
      'Square Root: A value that, when multiplied by itself, gives the original number.'
    ],
    formulas: [
      { name: 'Square Root Definition', formula: '\\sqrt{x} = y \\iff y^2 = x', explanation: 'Square root is the inverse operation of squaring.', units: 'Real number' }
    ],
    solvedExamples: [
      {
        question: 'Find the smallest number by which 9408 must be divided so that the quotient is a perfect square.',
        solution: 'Prime factorize 9408:\n9408 = 2 x 2 x 2 x 2 x 2 x 2 x 3 x 7 x 7\nGrouping into pairs: (2 x 2) x (2 x 2) x (2 x 2) x (7 x 7) x 3\nThe prime factor 3 has no pair! Therefore, 9408 must be divided by 3 to leave a perfect square quotient (3136 = 56²).',
        keyInsight: 'Find the unpaired prime factor; dividing by it leaves all factors in pairs.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'A gardener wants to plant 1,225 plants in a square garden such that the number of rows equals the number of columns: $\\sqrt{1225} = 35$ rows of 35 plants.',
      'Calculating TV screen sizes using Pythagoras theorem ($h^2 = a^2 + b^2$) requires square roots.'
    ],
    quickRevision: [
      'Squares never end in 2, 3, 7, or 8.',
      'Prime factorization finds roots by grouping prime factors into pairs.',
      'Long division method handles large numbers and decimals.'
    ]
  },

  'c8-math-05': {
    introduction:
      'Algebra is the universal language of modern science and computer code! In Class 8, we learn to add, subtract, and multiply algebraic expressions, and discover the three legendary algebraic identities: $(a+b)^2$, $(a-b)^2$, and $(a+b)(a-b)$.',
    basicConcepts: [
      'Terms are formed as products of coefficients and variables (e.g., in $7xy$, 7 is the numerical coefficient).',
      'Like terms have identical algebraic factors (e.g., $3x^2y$ and $-5x^2y$ can be added together). Unlike terms cannot be added.',
      'An algebraic identity is an equality that is true for ALL values of its variables.'
    ],
    detailedExplanations: [
      {
        topic: '1. Standard Algebraic Identities',
        explanation:
          '1. Identity I (Square of Sum):\n$$(a + b)^2 = a^2 + 2ab + b^2$$\n2. Identity II (Square of Difference):\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n3. Identity III (Difference of Squares):\n$$(a + b)(a - b) = a^2 - b^2$$\n4. Identity IV:\n$$(x + a)(x + b) = x^2 + (a + b)x + ab$$'
      },
      {
        topic: '2. Rapid Mental Math using Identities',
        explanation:
          '• Evaluate $103^2$: $(100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10,000 + 600 + 9 = 10,609$.\n• Evaluate $98^2$: $(100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10,000 - 400 + 4 = 9,604$.\n• Evaluate $105 \\times 95$: $(100 + 5)(100 - 5) = 100^2 - 5^2 = 10,000 - 25 = 9,975$.'
      }
    ],
    definitions: [
      'Identity: An algebraic equation that remains true for every possible numerical value substituted for its variables.',
      'Monomial: An expression with 1 term; Binomial: 2 terms; Trinomial: 3 terms.'
    ],
    formulas: [
      { name: 'Identity 1', formula: '(a + b)^2 = a^2 + 2ab + b^2', explanation: 'Square of binomial sum.', units: 'Algebraic identity' },
      { name: 'Identity 2', formula: '(a - b)^2 = a^2 - 2ab + b^2', explanation: 'Square of binomial difference.', units: 'Algebraic identity' },
      { name: 'Identity 3', formula: '(a + b)(a - b) = a^2 - b^2', explanation: 'Product of sum and difference gives difference of squares.', units: 'Algebraic identity' }
    ],
    solvedExamples: [
      {
        question: 'Evaluate without direct multiplication: $53 \\times 47$',
        solution: '53 = (50 + 3) and 47 = (50 - 3)\nUsing identity (a + b)(a - b) = a² - b²:\n(50 + 3)(50 - 3) = 50² - 3² = 2500 - 9 = 2,491.',
        keyInsight: 'Express numbers as (x + a)(x - a) to apply the difference of squares identity.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Computer graphics engines use algebraic polynomial identities to calculate 3D character movements and lighting.',
      'Architects use area formulas $(a+b)^2 = a^2 + 2ab + b^2$ when partitioning land plots.'
    ],
    quickRevision: [
      '$(a + b)^2 = a^2 + 2ab + b^2$.',
      '$(a - b)^2 = a^2 - 2ab + b^2$.',
      '$(a + b)(a - b) = a^2 - b^2$.'
    ]
  },

  // ==========================================
  // BIOLOGY (5 CHAPTERS)
  // ==========================================
  'c8-bio-01': {
    introduction:
      'With over 1.4 billion people to feed in India, farmers must produce crops on a massive scale. In Class 8 Biology, we study the agricultural practices that bring grain from farm to plate: soil preparation, sowing high-yield seeds, irrigation methods, crop rotation, and safe silo storage.',
    basicConcepts: [
      'Crop: Plants of the same kind cultivated at one place on a large scale for food.',
      'Kharif Crops: Sown during the monsoon season (June to September). Examples: Paddy (rice), maize, soyabean, groundnut, cotton.',
      'Rabi Crops: Sown in winter (October to March). Examples: Wheat, gram, pea, mustard, linseed.',
      'Agricultural Practices: Preparation of soil -> Sowing -> Adding manure & fertilizers -> Irrigation -> Protecting from weeds -> Harvesting -> Storage.'
    ],
    detailedExplanations: [
      {
        topic: '1. Agricultural Soil Preparation & Sowing',
        explanation:
          '• Ploughing / Tilling: Turning and loosening the soil with iron ploughs. Loosened soil allows crop roots to penetrate deep, breathe easily, and encourages beneficial earthworms and microbes that produce humus.\n• Sowing: Selecting clean, healthy, high-yield seeds. Modern seed drills sow seeds uniformly at proper depths and spacing, covering them with soil to protect them from birds.'
      },
      {
        topic: '2. Manure vs Chemical Fertilizers',
        explanation:
          '• Manure: Natural organic substance prepared by decomposing cattle dung, plant waste, and compost. Adds rich humus, improves soil water-retention capacity, and causes no pollution.\n• Chemical Fertilizers: Commercial factory-made inorganic salts rich in specific plant nutrients like Nitrogen (N), Phosphorus (P), and Potassium (K) - "NPK". Excessive fertilizer use ruins soil pH and causes water pollution.'
      },
      {
        topic: '3. Modern Irrigation Systems: Sprinklers and Drip',
        explanation:
          '• Sprinkler System: Perpendicular pipes with rotating nozzles spray water like artificial rain. Ideal for uneven, sandy land.\n• Drip System: Water trickles drop by drop directly into the root zone through narrow pipes. Conserves up to 70% of water and is ideal for arid regions.'
      }
    ],
    definitions: [
      'Crop Rotation: Growing different crops alternately on the same field to maintain soil fertility naturally.',
      'Weeding: The removal of unwanted wild plants (weeds) that compete with crops for sunlight, water, and nutrients.',
      'Threshing: Separating grain seeds from harvested chaff.'
    ],
    formulas: [
      { name: 'Crop Seasoning', formula: '\\text{Kharif (Monsoon: Paddy, Maize)} \\iff \\text{Rabi (Winter: Wheat, Mustard)}', explanation: 'Indian agricultural seasonal cropping calendar.', units: 'Agriculture' }
    ],
    solvedExamples: [
      {
        question: 'Why is crop rotation with leguminous plants (like peas and beans) beneficial for farmers?',
        solution: 'Leguminous plants harbor Rhizobium bacteria in their root nodules. These bacteria fix atmospheric nitrogen into soluble soil nitrates. Rotating wheat with leguminous crops naturally enriches the soil with nitrogen, reducing the need for expensive chemical fertilizers.',
        keyInsight: 'Legumes fix nitrogen naturally via symbiotic Rhizobium bacteria.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Farmers store food grains in large metallic silos or gunny bags in FCI warehouses treated with neem leaves to repel insect pests.',
      'Drip irrigation in Rajasthan allows farmers to grow citrus and pomegranate crops in desert conditions.'
    ],
    quickRevision: [
      'Kharif crops grow in monsoon; Rabi crops grow in winter.',
      'Manure is organic and restores soil texture; fertilizers supply NPK.',
      'Drip irrigation delivers water drop-by-drop to roots, preventing waste.'
    ]
  },

  'c8-bio-02': {
    introduction:
      'In a single drop of pond water live millions of microscopic creatures invisible to our naked eyes. Microorganisms are both our greatest allies (making curd, bread, and life-saving antibiotics) and our fiercest enemies (causing diseases like malaria, tuberculosis, and typhoid). In this chapter, we explore bacteria, fungi, protozoa, algae, and viruses.',
    basicConcepts: [
      'Microorganisms (Microbes) are tiny organisms that can only be seen through a microscope.',
      'Four major groups: Bacteria, Fungi, Protozoa, and Algae. Viruses are microscopic agents that reproduce ONLY inside the host cells of an organism.',
      'Lactobacillus bacteria convert milk into curd by fermenting lactose sugar into lactic acid.',
      'Alexander Fleming discovered the world\'s first antibiotic, Penicillin, in 1929 from the mold Penicillium notatum.'
    ],
    detailedExplanations: [
      {
        topic: '1. Beneficial Microorganisms (Our Friends)',
        explanation:
          '• Food & Baking: Yeast ferments sugar to release $CO_2$, making bread and cakes rise; Lactobacillus curds milk.\n• Medicine & Vaccines: Antibiotics (like streptomycin and tetracycline) kill disease-causing bacteria. Vaccines introduce dead or weakened microbes, training our immune system to produce protective antibodies (e.g., Polio, COVID-19, BCG vaccines).\n• Soil Fertility: Rhizobium bacteria fix nitrogen into soil.'
      },
      {
        topic: '2. Harmful Microorganisms (Our Foes)',
        explanation:
          'Microbes that cause diseases in humans, animals, and plants are called Pathogens.\n• Communicable Diseases: Spread from an infected person to a healthy person through air, water, food, or vectors:\n  - Tuberculosis (Bacteria - air droplets)\n  - Cholera (Bacteria - contaminated water/food)\n  - Malaria (Protozoan Plasmodium - transmitted by female Anopheles mosquito vector)\n  - Dengue (Virus - transmitted by female Aedes mosquito vector)'
      },
      {
        topic: '3. Food Preservation Techniques',
        explanation:
          '• Chemical Method: Salt, edible oils, and sodium benzoate preservative.\n• Pasteurization: Discovered by Louis Pasteur. Milk is heated to ~70°C for 15 to 30 seconds and then chilled suddenly to kill harmful bacteria without altering taste.'
      }
    ],
    definitions: [
      'Pathogen: A disease-causing microorganism.',
      'Antibiotic: A medicinal chemical compound produced by microbes that kills or inhibits the growth of harmful bacteria.',
      'Pasteurization: The process of heating milk to 70°C briefly and chilling rapidly to destroy pathogenic bacteria.'
    ],
    formulas: [
      { name: 'Fermentation Reaction', formula: '\\text{Glucose } \\xrightarrow{\\text{Yeast (Anaerobic)}} \\text{Ethyl Alcohol} + \\text{CO}_2 \\uparrow', explanation: 'Biochemical fermentation producing ethanol and carbon dioxide.', units: 'Microbiology' }
    ],
    solvedExamples: [
      {
        question: 'Why do doctors advise taking an antibiotic only when prescribed, and completing the entire course?',
        solution: 'Taking antibiotics unnecessarily kills beneficial intestinal bacteria. Furthermore, stopping an antibiotic course midway allows surviving bacteria to develop antibiotic resistance, rendering the medicine useless during future infections.',
        keyInsight: 'Incomplete antibiotic courses promote bacterial drug resistance.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Packaged milk packets in grocery stores are labeled "Pasteurized" and can be consumed safely without boiling.',
      'Pickles do not spoil for months because high salt and oil concentrations create an environment where bacteria cannot survive.'
    ],
    quickRevision: [
      'Four microbe groups: Bacteria, Fungi, Protozoa, Algae (Viruses require a host).',
      'Lactobacillus makes curd; Yeast ferments bread; Penicillin is an antibiotic.',
      'Female Anopheles mosquito transmits malaria (protozoa).',
      'Pasteurization kills milk microbes by flash heating and rapid chilling.'
    ]
  },

  'c8-bio-03': {
    introduction:
      'From royal Bengal tigers in the Sundarbans to one-horned rhinos in Kaziranga, India boasts extraordinary biodiversity. Yet human deforestation, poaching, and habitat destruction threaten thousands of species with extinction. In this chapter, we explore biosphere reserves, national parks, wildlife sanctuaries, and the Red Data Book.',
    basicConcepts: [
      'Biodiversity refers to the variety of plants, animals, and microorganisms living in a particular geographic region.',
      'Deforestation: Clearing of forests for timber, agriculture, and urbanization, leading to soil erosion, desertification, and global warming.',
      'Endangered Species: Animals or plants whose numbers are diminishing dangerously close to extinction (like the Bengal Tiger and Asiatic Lion).',
      'Red Data Book: An international sourcebook maintained by IUCN that records all endangered animal and plant species.'
    ],
    detailedExplanations: [
      {
        topic: '1. Consequences of Deforestation',
        explanation:
          '• Desertification: Trees anchor soil with their roots. When forests are cut, wind and rain erode the fertile top layer of humus, exposing bare, rocky soil that gradually turns into barren desert.\n• Disrupted Water Cycle: Reduced transpiration by trees lowers rainfall and triggers droughts.\n• Loss of Wildlife Habitat: Animals lose shelter and food, driving them into human settlements.'
      },
      {
        topic: '2. Protected Conservation Areas',
        explanation:
          '• Wildlife Sanctuary: A protected forest area where hunting, poaching, and habitat disturbance of animals are strictly prohibited by law.\n• National Park: A strictly preserved ecosystem reserved for wildlife where they can freely use natural habitats and resources (e.g., Jim Corbett, Kaziranga).\n• Biosphere Reserve: A multipurpose protected area (e.g., Pachmarhi, Nilgiri) dedicated to conserving biodiversity, wildlife, and the cultural traditions of local tribal communities.'
      },
      {
        topic: '3. Endemic and Migratory Species',
        explanation:
          '• Endemic Species: Plants and animals found exclusively in one specific geographic area and nowhere else naturally (e.g., Sal tree and Wild Mango in Pachmarhi; Giant Squirrel).\n• Migratory Birds: Birds that fly thousands of kilometers every winter from freezing Arctic Siberia to warm Indian wetlands (like the Siberian Crane in Keoladeo National Park, Bharatpur) to escape harsh cold and breed safely.'
      }
    ],
    definitions: [
      'Endemic Species: Species of plants or animals found naturally in only one specific geographic region.',
      'Desertification: The gradual degradation of fertile agricultural land into barren desert caused by deforestation and soil erosion.',
      'Extinct Species: A species that has completely disappeared from the face of the Earth (like the Dodo bird and Tasmanian tiger).'
    ],
    formulas: [
      { name: 'Conservation Principle', formula: '\\text{Reforestation} = \\text{Planting at least as many trees as are felled}', explanation: 'Restores ecological balance and preserves biodiversity.', units: 'Ecology' }
    ],
    solvedExamples: [
      {
        question: 'What is the Red Data Book, and why is it important for environmental scientists?',
        solution: 'The Red Data Book is an official international inventory published by the IUCN (International Union for Conservation of Nature) that tracks the global conservation status of threatened, endangered, and vulnerable species, helping governments enact urgent wildlife protection laws.',
        keyInsight: 'The Red Data Book provides critical data for global wildlife conservation.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Project Tiger was launched by the Indian Government in 1973 to save the royal Bengal tiger from extinction through dedicated tiger reserves.',
      'Recycling 1 ton of paper saves approximately 17 mature forest trees and thousands of liters of fresh water.'
    ],
    quickRevision: [
      'Deforestation causes topsoil erosion, desertification, and floods.',
      'Protected areas: Sanctuaries, National Parks, and Biosphere Reserves.',
      'Endemic species exist only in specific geographic zones.',
      'The Red Data Book records endangered species.'
    ]
  },

  'c8-bio-04': {
    introduction:
      'Look at a brick building: thousands of individual bricks are cemented together to build walls, rooms, and roofs. In the living world, the CELL is the basic structural and functional brick of all life! In Class 8, we explore Robert Hooke\'s discovery of the cell, compare plant and animal cells under a microscope, and explore cell organelles.',
    basicConcepts: [
      'The cell is the basic structural and functional unit of all living organisms.',
      'Robert Hooke discovered and named "cells" in 1665 while observing a thin slice of cork bark under a primitive microscope.',
      'Unicellular Organisms consist of a single cell (Amoeba, Paramecium, Bacteria). Multicellular Organisms consist of billions of cooperating cells (humans, trees, elephants).',
      'The three primary parts of every cell are: Cell Membrane, Cytoplasm, and Nucleus.'
    ],
    detailedExplanations: [
      {
        topic: '1. Three Fundamental Components of a Cell',
        explanation:
          '1. Cell Membrane (Plasma Membrane): A porous, flexible living boundary that encloses the cytoplasm, regulating which substances enter and exit the cell.\n2. Cytoplasm: The jelly-like fluid between the cell membrane and nucleus where vital chemical reactions occur and organelles (mitochondria, ribosomes, Golgi bodies) float.\n3. Nucleus: The "control center" (brain) of the cell. Enclosed by a double porous nuclear membrane. Contains a spherical nucleolus and thread-like Chromosomes that carry Genes (hereditary units that pass traits from parents to offspring).'
      },
      {
        topic: '2. Plant Cells vs Animal Cells (Key Differences)',
        explanation:
          'Why can plants survive torrential rains and scorching winds without running away for shelter? Because plant cells have special adaptations:\n• Cell Wall: A thick, rigid outer protective layer made of tough cellulose found ONLY in plant cells outside the plasma membrane.\n• Chloroplasts: Green plastids containing chlorophyll for photosynthesis, present ONLY in plant cells.\n• Vacuoles: Plant cells have one huge central vacuole storing water and minerals, providing turgidity. Animal cells have only small, temporary vacuoles.\n\nSummary Comparison:\n• Plant Cell: Has Cell Wall, Chloroplasts, and a large central vacuole.\n• Animal Cell: Has NO Cell Wall, NO Chloroplasts, and only small vacuoles.',
        diagram: `
         PLANT CELL                                   ANIMAL CELL
       +-----------------------+                    +-----------------+
       | [Cell Wall - Rigid]   |                    | (Cell Membrane) |
       | +-------------------+ |                    |   .--------- .  |
       | | (Cell Membrane)   | |                    |  /  Nucleus   \\ |
       | |   [Nucleus]       | |                    | |  (Control)  | |
       | |  [Huge Vacuole]   | |                    |  \\           /  |
       | |  {Chloroplasts}   | |                    |   '---------'   |
       | +-------------------+ |                    |  (Small Vacuoles)|
       +-----------------------+                    +-----------------+
        `
      },
      {
        topic: '3. Prokaryotic vs Eukaryotic Cells',
        explanation:
          '• Prokaryotic Cells: Primitive cells that lack a true organized nucleus enclosed by a nuclear membrane (nuclear material lies naked in the cytoplasm as a nucleoid). Examples: Bacteria and Blue-Green Algae.\n• Eukaryotic Cells: Advanced cells that possess a well-defined nucleus with a distinct nuclear membrane. Examples: Onion peel cells, human cheek cells, amoeba, fungi, and all plants and animals.'
      }
    ],
    definitions: [
      'Cell: The basic structural, functional, and biological unit of all known organisms.',
      'Prokaryote: A microscopic single-celled organism that has neither a distinct nucleus with a membrane nor specialized organelles.',
      'Chromosomes: Thread-like nuclear structures composed of DNA that carry genetic instructions (genes).'
    ],
    formulas: [
      { name: 'Biological Hierarchy', formula: '\\text{Cells } \\longrightarrow \\text{ Tissues } \\longrightarrow \\text{ Organs } \\longrightarrow \\text{ Organ Systems } \\longrightarrow \\text{ Organism}', explanation: 'Structural organization levels in multicellular living beings.', units: 'Biological hierarchy' }
    ],
    solvedExamples: [
      {
        question: 'Why do plant cells have an extra cell wall layer while human cheek cells have only a flexible cell membrane?',
        solution: 'Plants cannot move or seek shelter from extreme environmental stresses like torrential rain, high-speed winds, and temperature fluctuations. The rigid cellulose cell wall provides structural mechanical support, rigidity, and protection against osmotic bursting.',
        keyInsight: 'The cellulose cell wall provides rigidity and environmental protection to non-motile plants.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'An ostrich egg is a single gigantic cell measuring 17 cm x 13 cm, visible clearly with the naked eye.',
      'Human nerve cells (neurons) are long and branched to transmit electrical impulses across distant body limbs.'
    ],
    quickRevision: [
      'Robert Hooke discovered cells in 1665.',
      'The nucleus is the cell\'s control center and houses genetic chromosomes.',
      'Plant cells have a rigid cell wall, chloroplasts, and a large central vacuole.',
      'Prokaryotes (bacteria) lack nuclear membranes; Eukaryotes have organized nuclei.'
    ]
  },

  'c8-bio-05': {
    introduction:
      'Have you ever noticed your voice deepening, or sudden height spurts and acne on your face? You are experiencing adolescence—the magical transition from childhood to adulthood! In this chapter, we explore human sexual reproduction, endocrine hormone glands, puberty changes, and reproductive health.',
    basicConcepts: [
      'Reproduction is essential for the perpetuation of species.',
      'Sexual Reproduction involves the fusion of a male gamete (Sperm) with a female gamete (Ovum) to form a Zygote.',
      'Adolescence is the phase of life between childhood and adulthood (roughly ages 11 to 19) marked by puberty changes.',
      'Hormones are chemical messengers secreted directly into the bloodstream by ductless Endocrine Glands.'
    ],
    detailedExplanations: [
      {
        topic: '1. Human Reproductive Organs & Fertilization',
        explanation:
          '• Male System: A pair of Testes (produce millions of sperms and the male hormone Testosterone), sperm ducts, and penis.\n• Female System: A pair of Ovaries (produce ova/eggs and hormones Estrogen and Progesterone), Oviducts (Fallopian tubes), and Uterus.\n• Internal Fertilization: Occurs inside the female fallopian tube where a sperm nucleus fuses with the egg nucleus to form a single-celled Zygote.\n• Development: The zygote divides repeatedly to form an Embryo, which implants into the uterine wall and develops into a Fetus with recognizable body parts over 9 months.'
      },
      {
        topic: '2. Changes at Puberty and the Adam\'s Apple',
        explanation:
          'Puberty marks the onset of reproductive maturity:\n• Sudden increase in height as arm and leg bones elongate.\n• Broadening of shoulders in boys; widening of hips and pelvis in girls.\n• Voice Change: In boys, the voice box (larynx) grows larger and protrudes in the throat as the Adam\'s Apple, causing a deeper voice.\n• Secretion of sweat and sebaceous (oil) glands increases, frequently causing acne and pimples.'
      },
      {
        topic: '3. Endocrine Glands and Sex Determination',
        explanation:
          '• Pituitary Gland: The "Master Gland" at the base of the brain that controls all other glands.\n• Thyroid Gland: Secretes Thyroxine (requires iodine; deficiency causes goiter).\n• Pancreas: Secretes Insulin (regulates blood sugar; deficiency causes diabetes).\n• Adrenal Gland: Secretes Adrenaline (the "fight-or-flight" hormone during stress or fear).\n\nSex Determination in Humans:\nHuman cells have 23 pairs of chromosomes. The 23rd pair is the sex chromosome: Females have XX; Males have XY.\n• All female eggs carry an X chromosome.\n• Male sperms carry either an X or a Y chromosome in a 50:50 ratio.\n- If an X sperm fertilizes the egg: XX -> Female baby girl!\n- If a Y sperm fertilizes the egg: XY -> Male baby boy!\nTherefore, the genetic sex of a baby is determined strictly by the father\'s sperm, never the mother.'
      }
    ],
    definitions: [
      'Puberty: The developmental stage during adolescence when human reproductive organs become mature and functional.',
      'Hormone: A biochemical messenger produced by an endocrine gland and transported via blood to target organs.',
      'Zygote: The single diploid cell resulting from the fusion of a male sperm with a female egg.'
    ],
    formulas: [
      { name: 'Sex Determination Probability', formula: '\\text{Sperm (X)} + \\text{Egg (X)} = \\text{Girl (XX)}; \\quad \\text{Sperm (Y)} + \\text{Egg (X)} = \\text{Boy (XY)}', explanation: 'Equal 50% probability of male or female sex determination at fertilization.', units: 'Genetics' }
    ],
    solvedExamples: [
      {
        question: 'Why is it scientifically absurd and unjust to blame a mother for giving birth to a girl child in traditional societies?',
        solution: 'Human females produce eggs that always carry an X chromosome. Males produce two kinds of sperms: 50% carry an X chromosome and 50% carry a Y chromosome. The sex of the unborn child depends entirely on whether an X-bearing or Y-bearing sperm happens to fertilize the ovum. The father\'s sperm determines sex, not the mother.',
        keyInsight: 'Genetic sex determination is determined entirely by the paternal sperm (X or Y).',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Adrenaline rush: When you narrowly avoid an accident or are about to speak on stage, your heart races because the adrenal gland pumps adrenaline into your blood.',
      'Adolescents require balanced diets with plenty of iron-rich leafy vegetables and calcium-rich milk to support rapid bone growth and blood formation.'
    ],
    quickRevision: [
      'Fertilization is internal in humans and takes place in the fallopian tube.',
      'Puberty is driven by testosterone in boys and estrogen in girls.',
      'The pituitary gland is the master endocrine gland.',
      'Sex chromosomes: XX produces a girl, XY produces a boy.'
    ]
  }
};
