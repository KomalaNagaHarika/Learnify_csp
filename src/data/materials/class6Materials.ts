import { ChapterStudyMaterial } from '../../types';

export const CLASS_6_STUDY_MATERIALS: Record<string, ChapterStudyMaterial> = {
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  'c6-phys-01': {
    introduction:
      'Have you ever wondered how far your school is from your home, or how tall you are compared to last year? In this chapter, we learn the story of how human beings invented transport—from walking on foot to riding bullock carts and flying in airplanes. We also discover why using our fingers or footsteps to measure things creates confusion, and why the world agreed on standard units like meters and centimeters.',
    basicConcepts: [
      'Measurement means comparing an unknown quantity with a known fixed quantity called a unit.',
      'In early times, people used body parts (like the width of a finger, a hand-span, or a footstep) to measure length. Because everyone has different body sizes, these measurements caused confusion and disputes.',
      'To solve this problem, scientists around the world adopted the International System of Units (SI Units). The SI unit of length is the meter (m).',
      'An object is said to be in motion when its position changes with time with respect to a stationary observer.'
    ],
    detailedExplanations: [
      {
        topic: '1. Standard Units of Length and Metric Conversions',
        explanation:
          'When we measure a pencil, we use centimeters (cm). When we measure the thickness of a coin, we use millimeters (mm). For the length of a room or playground, we use meters (m). For the distance between two towns, we use kilometers (km).\n\nHere is how they relate to each other:\n• 1 kilometer (km) = 1,000 meters (m)\n• 1 meter (m) = 100 centimeters (cm)\n• 1 centimeter (cm) = 10 millimeters (mm)'
      },
      {
        topic: '2. How to Measure Length Correctly without Parallax Error',
        explanation:
          'To measure a line accurately using a ruler:\n1. Place the scale along the object.\n2. Do not use a broken zero mark; start from any clear integer mark (like 1.0 cm) and subtract that from the final reading.\n3. Keep your eye directly in line with the point being measured. If you look at the scale from an angle, you get an inaccurate reading called a parallax error.',
        diagram: `
     Incorrect Eye Position      CORRECT EYE POSITION (90°)     Incorrect Eye Position
             \\                               |                               /
              \\                              V                              /
        -------[-----------------------------|-----------------------------]-------
        Scale: 0 cm                         5 cm                         10 cm
        `
      },
      {
        topic: '3. Different Types of Motion Around Us',
        explanation:
          'Look around your home and playground. Different objects move in different ways:\n\n• Rectilinear Motion: Movement in a straight line. Examples: a car driving along a straight highway, athletes running a 100-meter straight dash, or a stone falling from your hand.\n• Circular Motion: An object moving along a circular path such that its distance from the fixed center remains the same. Examples: the tip of a watch hand, blades of an electric fan, or a stone tied to a thread whirled around.\n• Periodic Motion: Motion that repeats itself at regular intervals of time. Examples: a playground swing, the pendulum of a clock, a plucked guitar string, or the beating of a drum surface.'
      }
    ],
    definitions: [
      'Unit: A fixed known quantity used as a standard of measurement.',
      'SI System: The International System of Units accepted worldwide for scientific measurements.',
      'Motion: Change in the position of an object over time with respect to its surroundings.',
      'Periodic Motion: Any motion that repeats itself after regular intervals of time.'
    ],
    formulas: [
      { name: 'Kilometer to Meter Conversion', formula: '1\\text{ km} = 1000\\text{ m}', explanation: 'Multiply kilometers by 1,000 to get meters.', units: 'm' },
      { name: 'Meter to Centimeter Conversion', formula: '1\\text{ m} = 100\\text{ cm}', explanation: 'Multiply meters by 100 to get centimeters.', units: 'cm' },
      { name: 'Centimeter to Millimeter Conversion', formula: '1\\text{ cm} = 10\\text{ mm}', explanation: 'Multiply centimeters by 10 to get millimeters.', units: 'mm' }
    ],
    solvedExamples: [
      {
        question: 'The distance between Radha\'s home and her school is 3,250 meters. Express this distance in kilometers and meters.',
        solution: 'Step 1: We know that 1,000 meters = 1 kilometer.\nStep 2: Divide 3,250 by 1,000.\n3,250 ÷ 1,000 = 3 with a remainder of 250.\nTherefore, the distance is 3 kilometers and 250 meters (or 3.25 km).',
        keyInsight: 'To convert meters into kilometers, divide by 1,000. The quotient is kilometers and the remainder is meters.',
        difficulty: 'beginner'
      },
      {
        question: 'While measuring the length of a knitting needle, the reading of the scale at one end is 3.0 cm and at the other end is 33.1 cm. What is the actual length of the needle?',
        solution: 'Actual length = Final reading - Initial reading\nActual length = 33.1 cm - 3.0 cm = 30.1 cm.',
        keyInsight: 'When the zero mark of a scale is broken or obscured, take readings from another clear mark and subtract that mark.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'When you ride a bicycle, the pedals move in a circular motion, the wheels rotate in rotational motion, and the whole bicycle moves along the road in rectilinear motion.',
      'A tailor uses a flexible measuring tape to measure your chest, because a rigid wooden scale cannot bend around curved body parts.',
      'The swing in a park moves forward and backward; every round trip takes roughly the same time, which is periodic motion.'
    ],
    quickRevision: [
      'The International System of Units (SI) unit of length is the meter (m).',
      '1 km = 1,000 m; 1 m = 100 cm; 1 cm = 10 mm.',
      'Parallax error is prevented by keeping your eye perpendicular to the measurement mark.',
      'Rectilinear motion is straight-line motion; circular motion follows a curved circular track; periodic motion repeats at regular intervals.'
    ]
  },

  'c6-phys-02': {
    introduction:
      'What happens when you walk into a pitch-dark room at night? You cannot see your bed, table, or toys until you switch on the light. Light is a form of energy that makes things visible to us. In this chapter, we discover how light travels in straight lines, why shadows are formed, and how mirrors bounce light to show our reflections.',
    basicConcepts: [
      'We see an object only when light coming from it (or reflected by it) enters our eyes.',
      'Objects that give out their own light are called luminous objects (like the Sun, a burning candle, or an LED bulb). Objects that do not produce their own light are non-luminous objects (like books, moon, trees, and tables).',
      'Materials can be classified into three types based on how much light passes through them: Transparent, Translucent, and Opaque.',
      'A shadow is formed when an opaque object blocks the path of light.'
    ],
    detailedExplanations: [
      {
        topic: '1. Transparent, Translucent, and Opaque Objects',
        explanation:
          '• Transparent Materials: Allow light to pass through completely. We can see through them clearly. Examples: clean glass window, clear water, air.\n• Translucent Materials: Allow light to pass through partially. Objects seen through them appear hazy or blurred. Examples: butter paper, frosted bathroom glass, thin muslin cloth.\n• Opaque Materials: Do not allow any light to pass through. We cannot see through them at all. Examples: wooden door, cardboard box, brick wall, metal spoon.'
      },
      {
        topic: '2. How Shadows are Formed and Their Characteristics',
        explanation:
          'To form a shadow, you need three things:\n1. A source of light.\n2. An opaque object to block the light.\n3. A screen (such as a wall, ground, or piece of paper) where the shadow falls.\n\nKey features of shadows:\n• Shadows are always dark/black, regardless of what color the object is! A red toy car and a yellow toy car both cast black shadows.\n• A shadow only shows the outline (shape) of an object, never its inner details or color.\n• Shadows change size depending on how close the object is to the light source.',
        diagram: `
       Light Bulb (Source) ---->  [ Opaque Book ]  ---->  | Wall (Screen)
                                      |                   |
                                   (Blocks light)         |==== (Dark Shadow)
        `
      },
      {
        topic: '3. Light Travels in Straight Lines (Rectilinear Propagation) & The Pinhole Camera',
        explanation:
          'Light always travels in straight lines. This property is called rectilinear propagation of light. If you look at a burning candle through a straight plastic pipe, you can see the flame. But if you bend the pipe, the flame disappears immediately!\n\nA pinhole camera is a simple box with a tiny pinhole on one side and a tracing-paper screen on the opposite side. Light rays from the top and bottom of an outdoor tree cross each other through the tiny pinhole, creating an inverted (upside down) image on the screen.'
      }
    ],
    definitions: [
      'Luminous Object: An object that emits light of its own (e.g., Sun, torch bulb, stars).',
      'Opaque Material: A substance that does not allow light to pass through it.',
      'Rectilinear Propagation: The property of light traveling in straight lines.',
      'Reflection: The bouncing back of light from a polished, shiny surface like a mirror.'
    ],
    formulas: [
      { name: 'Rectilinear Propagation of Light', formula: '\\text{Light ray travels in straight lines}', explanation: 'Light does not bend around sharp opaque corners on its own.', units: 'Optical principle' }
    ],
    solvedExamples: [
      {
        question: 'Why can we not see our reflection in a wooden table as clearly as in a glass mirror?',
        solution: 'A glass mirror has an extremely smooth, silvered surface that reflects light regularly in one direction. A wooden table has microscopic rough bumps that scatter light in all random directions (diffused reflection), so a clear image cannot be formed.',
        keyInsight: 'Smooth, polished surfaces give clear regular reflection; rough surfaces scatter light.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'When you walk outdoors on a sunny morning, your shadow is long and stretches in front of you. At noon, when the sun is overhead, your shadow is very short.',
      'Under a leafy tree on a sunny afternoon, you see round patches of light on the ground. These are actually pinhole images of the sun created by the tiny gaps between overlapping leaves!',
      'Rearview mirrors in cars and scooters use reflection to show drivers the traffic behind them.'
    ],
    quickRevision: [
      'Luminous objects emit light; non-luminous objects reflect light.',
      'Materials are transparent (clear), translucent (partial light), or opaque (no light).',
      'Light travels in straight lines; when blocked by an opaque body, a dark shadow forms on a screen.',
      'Pinhole cameras produce real, inverted images because light travels straight.'
    ]
  },

  'c6-phys-03': {
    introduction:
      'Imagine life without electricity! There would be no fans in summer, no lights at night, and no refrigerators to keep food fresh. In this chapter, we explore how an electric cell (battery) produces current, how wires carry that current to light up a bulb, and how an electric switch lets you turn lights on and off safely.',
    basicConcepts: [
      'An electric cell (battery) produces electricity using chemicals stored inside it. When the chemicals get used up, the cell stops producing current.',
      'An electric cell has two terminals: a positive terminal (+ marked with a small metal cap) and a negative terminal (- marked with a flat metal disc).',
      'A complete, unbroken closed loop through which electric current travels from one terminal to the other is called an electric circuit.',
      'Materials that allow electric current to flow through them easily are called conductors (like copper and iron). Materials that block electric current are called insulators (like rubber and plastic).'
    ],
    detailedExplanations: [
      {
        topic: '1. Anatomy of an Electric Torch Bulb',
        explanation:
          'Inside a glass torch bulb, you will see a very thin, coiled metal wire called the filament (made of tungsten metal). The filament is held up by two thicker wires. One thick wire is connected to the metal casing at the base, and the other connects to the metal tip at the bottom center. When electricity flows through this thin filament, it becomes white-hot and emits bright light. If the filament breaks, the bulb is said to be "fused" and will not glow because the path of electricity is broken.'
      },
      {
        topic: '2. Open Circuit vs Closed Circuit',
        explanation:
          'Electricity needs a continuous circular road to travel. Conventionally, current flows from the positive (+) terminal of the cell, through the wire, through the bulb filament, and back into the negative (-) terminal.\n\n• Closed Circuit: The path is complete and unbroken. Electric current flows, and the bulb glows brightly.\n• Open Circuit: If there is any break, loose connection, or open switch in the wire, current cannot jump across the gap. The bulb does not glow.',
        diagram: `
       (+) [ Cell ] (-) 
        |            |
      Wire          Wire
        |            |
        +----[Switch: Closed]----+
        |                        |
        +------( Bulb: ON )------+
        `
      },
      {
        topic: '3. Electric Switches, Conductors, and Insulators',
        explanation:
          'An electric switch is a simple mechanism used to either complete (close) or break (open) an electric circuit. When you flip the switch "ON", two metal contacts touch, completing the circuit. When you turn it "OFF", the contacts separate, creating an air gap that stops the current.\n\nWhy are electrical wires coated with plastic or rubber? Metals like copper and aluminum are good conductors that carry electricity, whereas plastic and rubber are insulators that protect us from dangerous electric shocks!'
      }
    ],
    definitions: [
      'Electric Circuit: An unbroken closed path that allows electric current to travel from the positive terminal to the negative terminal of a power source.',
      'Filament: A very thin coiled wire inside a bulb that glows hot when electric current passes through it.',
      'Conductor: A material that easily allows electric current to pass through it.',
      'Insulator: A material that does not allow electric current to pass through it.'
    ],
    formulas: [
      { name: 'Direction of Electric Current', formula: '\\text{Flows from } (+) \\text{ terminal to } (-) \\text{ terminal}', explanation: 'Standard conventional direction of electric current in an external circuit.', units: 'Direction' }
    ],
    solvedExamples: [
      {
        question: 'Why does an electrician use screwdrivers with plastic or wooden handles while fixing electric boards?',
        solution: 'Electric current can easily pass through metals like iron and copper, but plastic and wood are electrical insulators. The plastic handle blocks electric current from reaching the electrician\'s hand, preventing dangerous electric shocks.',
        keyInsight: 'Insulators do not conduct electricity and act as protective shields.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'The battery inside a TV remote control has "+" and "-" markings; if you insert the batteries backwards, the circuit will not function.',
      'Electric plugs have metal pins to conduct current into appliances, but the outer case you touch is made of plastic for safety.',
      'Birds can safely sit on high-voltage power lines because they are only touching one wire and their body does not complete a closed path to the ground.'
    ],
    quickRevision: [
      'An electric cell has two terminals: positive (+) and negative (-).',
      'Current travels from (+) to (-) in an unbroken closed circuit.',
      'A broken bulb filament creates an open circuit, so the bulb will not glow.',
      'Metals are conductors; rubber, wood, and plastics are insulators.'
    ]
  },

  'c6-phys-04': {
    introduction:
      'Have you ever played with refrigerator magnets or seen a magnetic pencil box that snaps shut on its own? Magnets are fascinating objects that can pull iron items towards them without even touching them! In this chapter, we learn how natural magnets were discovered, the properties of magnetic poles, and how sailors used a magnetic compass to navigate vast oceans.',
    basicConcepts: [
      'A magnet is an object that attracts magnetic materials like iron, cobalt, and nickel.',
      'Materials attracted by a magnet are called magnetic materials (e.g., iron nails, steel paperclips, sewing needles). Materials not attracted by a magnet are called non-magnetic materials (e.g., wood, plastic, paper, copper, aluminum).',
      'Every magnet has two magnetic poles: a North Pole (N) and a South Pole (S). Magnetic attraction is strongest near the poles.',
      'When freely suspended, a magnet always comes to rest pointing in the geographic North-South direction.'
    ],
    detailedExplanations: [
      {
        topic: '1. Discovery and Shapes of Artificial Magnets',
        explanation:
          'Legend says that an ancient Greek shepherd named Magnes was herding his sheep on Mount Ida when the iron nails in his sandals and the iron tip of his wooden staff stuck firmly to a black rock! That naturally magnetic rock was named Magnetite. Today, we make artificial magnets in various practical shapes: bar magnets, horseshoe magnets, cylindrical magnets, and ring magnets.'
      },
      {
        topic: '2. The Two Poles of a Magnet and the Magnetic Compass',
        explanation:
          'Dip a bar magnet into a pile of iron filings. You will notice that the iron filings cluster heavily around the two ends of the magnet, while very few stick to the middle. This proves that magnetic force is concentrated at the two poles: North (N) and South (S).\n\nBecause Earth itself behaves like a gigantic magnet, a freely suspended bar magnet always rotates until one end points towards the Earth\'s North Pole (North-seeking pole) and the other points South (South-seeking pole). A magnetic compass has a magnetized needle resting on a sharp pivot that rotates freely, helping travelers, hikers, and ship captains find directions anywhere on Earth.',
        diagram: `
        [ North Pole (N) ] ===================== [ South Pole (S) ]
               ^                                        ^
        (Maximum attraction)                     (Maximum attraction)
        `
      },
      {
        topic: '3. Fundamental Law of Magnetic Attraction and Repulsion',
        explanation:
          'What happens when you bring two magnets close to each other?\n• Unlike poles attract: When you bring the North pole of one magnet near the South pole of another magnet, they pull towards each other firmly.\n• Like poles repel: When you bring two North poles (N-N) or two South poles (S-S) together, they push each other away with a strong resisting force!\n\nRemember: Repulsion is the only sure test of a magnet, because a magnet can attract an ordinary unmagnetized iron piece, but it can only repel another magnet.'
      }
    ],
    definitions: [
      'Magnet: An object capable of producing a magnetic field and attracting iron, steel, nickel, and cobalt.',
      'Magnetic Poles: The two ends of a magnet where the magnetic attractive power is strongest.',
      'Magnetic Compass: A navigation instrument containing a freely rotating magnetized needle that points North-South.',
      'Repulsion: The pushing away force experienced between two identical (like) magnetic poles.'
    ],
    formulas: [
      { name: 'Magnetic Interaction Rule', formula: '\\text{Like poles repel (N-N, S-S); Unlike poles attract (N-S)}', explanation: 'Fundamental law governing interaction between magnetic poles.', units: 'Physical law' }
    ],
    solvedExamples: [
      {
        question: 'You are given two identical-looking metal bars: one is an iron bar and the other is a bar magnet. How will you identify which one is the magnet without using any other item?',
        solution: 'Pick up Bar A and touch its end to the middle of Bar B. If it attracts strongly, Bar A is the magnet (because a magnet has strong poles at its ends). If there is virtually no attraction, Bar A is the ordinary iron bar (because the center of a bar magnet has zero magnetic attraction).',
        keyInsight: 'The poles at the ends of a magnet have strong attraction, while the middle has minimal magnetic force.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'The door of a refrigerator has a flexible rubber strip containing a long magnet inside, ensuring the door seals tightly shut.',
      'Magnetic cranes at junkyards use powerful electromagnets to lift tons of scrap iron and steel cars effortlessly.',
      'ATM and credit cards have a dark brown magnetic stripe on the back that stores your bank account information in microscopic magnetic patterns.'
    ],
    quickRevision: [
      'Magnets attract iron, nickel, and cobalt.',
      'Every magnet has two poles: North and South; magnetic strength is highest at the poles.',
      'Like poles repel; unlike poles attract.',
      'A freely suspended magnet aligns North-South and is used in a compass for navigation.'
    ]
  },

  'c6-phys-05': {
    introduction:
      'Can you see air? No, but you can feel it cooling your face when a breeze blows or see it rustling tree leaves and flying a kite high in the sky! Air is an invisible blanket surrounding our entire planet called the atmosphere. In this chapter, we discover what air is made of and why all living beings depend on it every second.',
    basicConcepts: [
      'Air is not a single pure substance; it is a mixture of gases, water vapor, and dust particles.',
      'Air occupies space, possesses mass, and is present everywhere around us—even inside empty bottles, soil, and water!',
      'The thick blanket of air that surrounds the Earth is called the atmosphere. As we go higher up mountains, the air becomes thinner.',
      'The major components of air are Nitrogen (about 78%), Oxygen (about 21%), and tiny amounts of Carbon dioxide, noble gases, water vapor, and dust.'
    ],
    detailedExplanations: [
      {
        topic: '1. What is Air Made Of? (Composition of Air)',
        explanation:
          'If you divide air into 100 parts:\n• Nitrogen (~78%): The largest component. It does not support burning.\n• Oxygen (~21%): Vital for respiration in animals and plants, and essential for combustion (burning).\n• Carbon Dioxide (~0.04%): Plants take in carbon dioxide during daylight to prepare food by photosynthesis.\n• Water Vapor: Responsible for humidity, cloud formation, and rainfall in the water cycle.\n• Dust and Smoke: Tiny particles produced by vehicles, factories, and dry wind.'
      },
      {
        topic: '2. Oxygen Supports Burning (Combustion)',
        explanation:
          'Try this classic demonstration: Light two small candles. Leave one open to the air, and cover the second candle with an inverted glass tumbler. Within a few seconds, the covered candle flickers and goes out! Why? The burning candle quickly consumes the limited oxygen trapped inside the glass. Once oxygen is exhausted, burning stops completely. This proves that oxygen is required for combustion.',
        diagram: `
         Open Candle (Air available)           Covered Candle (Inverted glass)
                 (Flame ON)                         (Oxygen used up -> Flame OFF)
                    ( )                                      |  ===  |
                    |||                                      |  (x)  |
                   [===]                                     | [===] |
        `
      },
      {
        topic: '3. How Aquatic Animals and Plants Breathe in Water and Soil',
        explanation:
          'When you gently heat water in a pan, you see tiny bubbles forming on the inside surface before boiling begins. These bubbles are dissolved air escaping! Fish use their gills to extract this dissolved oxygen from water.\n\nEarthworms live underground and breathe through their moist skin using air trapped between soil particles. When heavy monsoon rains flood their underground tunnels, the air pockets fill with water, forcing earthworms to come up to the surface to breathe.'
      }
    ],
    definitions: [
      'Atmosphere: The envelope of air surrounding the Earth up to hundreds of kilometers above the surface.',
      'Respiration: The biological process in living cells where oxygen breaks down glucose to release energy.',
      'Combustion: A chemical process where a substance reacts with oxygen to produce heat and light.'
    ],
    formulas: [
      { name: 'Air Composition Breakdown', formula: '78\\% \\text{ Nitrogen} + 21\\% \\text{ Oxygen} + 1\\% \\text{ Other gases}', explanation: 'Approximate proportions of major gases in clean, dry air.', units: 'Percentage' }
    ],
    solvedExamples: [
      {
        question: 'Why do mountaineers carry heavy oxygen cylinders while climbing Mount Everest?',
        solution: 'As altitude increases, atmospheric air becomes thinner and atmospheric pressure drops. High up on mountains like Everest, the amount of oxygen per breath is too low to sustain human life, so climbers must breathe supplemental oxygen from cylinders.',
        keyInsight: 'The density of air and availability of oxygen decrease as you climb higher above sea level.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'When you pedal a bicycle, air resistance pushes against you; but when you have a tailwind, moving air (wind) pushes you forward effortlessly.',
      'Windmills use moving wind energy to grind grain, pump water from wells, and generate green electricity.',
      'Doctors recommend breathing through your nose rather than your mouth because fine nasal hairs and mucus trap dust and germs from the inhaled air.'
    ],
    quickRevision: [
      'Air is a mixture composed of ~78% Nitrogen, ~21% Oxygen, and small amounts of CO2, water vapor, and dust.',
      'Air occupies space and exerts pressure in all directions.',
      'Oxygen supports burning and respiration; nitrogen does not support combustion.',
      'Aquatic creatures use oxygen dissolved in water; soil organisms use air trapped between soil grains.'
    ]
  },

  // ==========================================
  // CHEMISTRY (5 CHAPTERS)
  // ==========================================
  'c6-chem-01': {
    introduction:
      'Look at the clothes you are wearing right now—your shirt, socks, trousers, or school uniform. Where did the cloth come from? Humans began by wearing animal skins and tree bark, but over centuries discovered how to twist thin hair-like strands into yarns and weave them into colorful fabrics. In this chapter, we explore the wonderful journey from fibre to fabric.',
    basicConcepts: [
      'Fabrics are made from yarns, and yarns are made from even thinner strands called fibres.',
      'Fibres are divided into two main categories: Natural fibres (obtained from plants and animals) and Synthetic fibres (made from chemicals in factories).',
      'Plant fibres include cotton (from cotton bolls) and jute (from the stem of the jute plant).',
      'Animal fibres include wool (from sheep, goat, or camel fleece) and silk (from the cocoon of the silkworm).'
    ],
    detailedExplanations: [
      {
        topic: '1. Natural vs Synthetic Fibres',
        explanation:
          '• Natural Fibres: Obtained from plants and animals. They absorb sweat well and are comfortable in hot weather. Examples: Cotton (cotton plant), Jute (jute stem), Wool (sheep fleece), Silk (silkworm cocoon).\n• Synthetic Fibres: Man-made fibres synthesized from petroleum chemicals. They are very strong, dry quickly, and do not wrinkle easily, but they do not absorb sweat well. Examples: Nylon, Polyester, Acrylic.'
      },
      {
        topic: '2. Cotton: From Farm to Fabric (Ginning, Spinning, Weaving)',
        explanation:
          'Cotton plants grow best in black soil in warm climates. When the cotton fruit (boll) matures, it bursts open, revealing white fluffy cotton seeds.\n\n1. Ginning: Separating raw cotton fibres from the seeds using metal combs.\n2. Spinning: Drawing out cotton fibres and twisting them together into strong continuous threads called yarn. The traditional tool was a hand-spindle (Takli) or spinning wheel (Charkha), promoted famously by Mahatma Gandhi.\n3. Weaving and Knitting: Weaving uses two sets of yarn arranged together on machines called looms. Knitting uses a single continuous yarn looped together (like knitting a woolen sweater with two needles).'
      },
      {
        topic: '3. Jute: The Golden Fibre',
        explanation:
          'Jute fibre is obtained from the stem of the jute plant, grown mainly in West Bengal, Bihar, and Assam during the rainy season. When harvested, the stems are submerged in stagnant water for several days (a process called retting). The plant tissues rot, and the strong golden fibres are stripped off by hand, washed, dried, and woven into gunny bags, ropes, and coarse carpets.'
      }
    ],
    definitions: [
      'Fibre: Very thin, hair-like strand that forms the basic building block of all yarns and fabrics.',
      'Ginning: The process of separating raw cotton fibres from their seeds.',
      'Spinning: The process of twisting loose fibres together to make a continuous thread called yarn.',
      'Weaving: The process of arranging two sets of yarns together to make a fabric on a loom.'
    ],
    formulas: [
      { name: 'Fabric Production Chain', formula: '\\text{Fibre } \\xrightarrow{\\text{Spinning}} \\text{ Yarn } \\xrightarrow{\\text{Weaving/Knitting}} \\text{ Fabric}', explanation: 'Sequential manufacturing stages of all cloth materials.', units: 'Process flow' }
    ],
    solvedExamples: [
      {
        question: 'Why are cotton clothes preferred during hot, humid Indian summers?',
        solution: 'Cotton is a natural plant fibre with hollow cellulose structures that absorb perspiration (sweat) easily. As this absorbed sweat evaporates into the air, it takes latent heat from the body, producing a comfortable cooling effect.',
        keyInsight: 'High moisture absorption and breathability make cotton ideal for summer clothing.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Heavy potato and onion sacks in grain markets are made of jute because jute is biodegradable, durable, and has high tensile strength.',
      'Silk sarees feel smooth and have a natural sheen because the silkworm secretes protein filaments that are exceptionally fine and lustrous.',
      'Umbrellas and raincoats are made from synthetic nylon or polyester coated with resin because synthetic fibres do not absorb water.'
    ],
    quickRevision: [
      'Fabrics are woven or knitted from yarns, which are spun from fibres.',
      'Natural fibres come from plants (cotton, jute) and animals (wool, silk).',
      'Ginning separates cotton seeds; spinning twists fibres into yarn; weaving/knitting turns yarn into fabric.'
    ]
  },

  'c6-chem-02': {
    introduction:
      'Walk into a supermarket or medical store: you will see biscuits on one shelf, soaps in another aisle, and medicines neatly arranged alphabetically. Why? Sorting things into groups makes them easy to locate, study, and handle. In this chapter, we learn how scientists group everyday materials based on properties like hardness, luster, solubility, density, and transparency.',
    basicConcepts: [
      'Objects around us are made of a huge variety of materials like wood, glass, metal, plastic, clay, and leather.',
      'Grouping objects together based on shared similarities and differences is called classification.',
      'Materials can be classified by physical properties: appearance (shiny luster vs dull), hardness (soft vs hard), solubility in water (soluble vs insoluble), floating behavior (lighter or denser than water), and transparency.'
    ],
    detailedExplanations: [
      {
        topic: '1. Luster (Shine) and Hardness',
        explanation:
          '• Luster: Metals like gold, silver, iron, copper, and aluminum have a characteristic shiny surface called metallic luster. When freshly cut, their shiny nature is clearly visible. Non-metals like chalk, wood, and plastic are dull.\n• Hardness: If you try to scratch a material with an iron nail, soft materials (like candle wax, chalk, and soap) scratch easily or can be compressed. Hard materials (like iron, diamond, and stone) cannot be scratched or compressed easily.'
      },
      {
        topic: '2. Soluble vs Insoluble in Water',
        explanation:
          'Water is called a universal solvent because it dissolves thousands of substances:\n• Soluble Substances: Completely disappear and dissolve in water to form a uniform liquid. Examples: common salt, sugar, vinegar, lemon juice.\n• Insoluble Substances: Do not dissolve in water even after vigorous stirring. Examples: sand, chalk powder, sawdust, mustard oil (oil forms a separate floating layer on top of water).'
      },
      {
        topic: '3. Density: Floating vs Sinking',
        explanation:
          'Drop a dry fallen leaf and a metal coin into a glass bowl filled with water. The dry leaf and a piece of dry wood float on the surface because they are less dense than water. The iron coin, a glass marble, and a stone sink straight to the bottom because they are denser than water.'
      }
    ],
    definitions: [
      'Classification: The systematic arrangement of objects into groups based on common properties.',
      'Luster: The natural shine seen on the freshly cut surface of metals.',
      'Solubility: The ability of a substance to dissolve completely in a liquid solvent like water.'
    ],
    formulas: [
      { name: 'Floating Condition', formula: '\\text{Density of object} < \\text{Density of liquid} \\implies \\text{Floats}', explanation: 'Objects lighter than equal volume of water float on its surface.', units: 'Physical principle' }
    ],
    solvedExamples: [
      {
        question: 'Why is a cooking pan made of metal (like aluminum or steel), but its handle is made of wood or Bakelite plastic?',
        solution: 'Metals are excellent conductors of heat, allowing food to cook quickly. Wood and Bakelite are thermal insulators (poor conductors of heat), keeping the handle cool so you can lift the hot pan safely without burning your fingers.',
        keyInsight: 'Materials are chosen based on the exact properties required for the task.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Shopkeepers store candies, chocolates, and cookies in transparent glass or clear plastic jars so customers can see them easily without opening every jar.',
      'Ships made of thousands of tons of steel float on ocean water because their hollow shape traps a vast amount of air, making the overall average density less than water.',
      'Oil spills from tankers float on the ocean surface because cooking and crude oils are less dense than water.'
    ],
    quickRevision: [
      'Classification groups objects by properties like luster, hardness, solubility, density, and transparency.',
      'Metals have shiny luster; soft objects scratch easily while hard objects do not.',
      'Salt and sugar are soluble in water; sand and oil are insoluble.',
      'Materials lighter than water float; denser materials sink.'
    ]
  },

  'c6-chem-03': {
    introduction:
      'Have you ever seen your grandmother picking small stones out of uncooked rice before cooking, or watched your mother filter tea leaves through a metal strainer? In daily life, we constantly separate unwanted or harmful substances from useful mixtures. In this chapter, we master classical scientific separation techniques.',
    basicConcepts: [
      'Most substances in nature exist as mixtures of two or more components.',
      'We separate substances to remove harmful components, remove useless impurities, or obtain two separate useful products (like churning milk to get butter and buttermilk).',
      'Common separation methods include handpicking, winnowing, threshing, sieving, sedimentation, decantation, filtration, and evaporation.'
    ],
    detailedExplanations: [
      {
        topic: '1. Dry Separation: Threshing, Winnowing, and Sieving',
        explanation:
          '• Threshing: Used by farmers to separate grain seeds from harvested dry stalks. Stalks are beaten on a hard stone slab, or threshing machines (combines) are used.\n• Winnowing: Separating heavier grain seeds from lighter husk particles using blowing wind. The farmer pours the mixture from a height; the wind blows the light husk farther away, while heavy grains fall straight down into a clean heap.\n• Sieving: Separating particles of different sizes using a mesh sieve. Larger impurities stay on top of the mesh while fine flour particles pass through.'
      },
      {
        topic: '2. Insoluble Solids in Liquids: Sedimentation, Decantation, Filtration',
        explanation:
          'When you have a mixture of muddy water:\n1. Sedimentation: Let the muddy water sit undisturbed in a glass. The heavier mud particles settle down to the bottom as sediment.\n2. Decantation: Gently tilt the glass and pour out the clear top water into another container without disturbing the sediment at the bottom.\n3. Filtration: Pass the decanted water through a filter paper (which has microscopic pores). Even the finest mud particles are trapped on the paper (residue), leaving clean, clear water (filtrate).'
      },
      {
        topic: '3. Soluble Solids in Liquids: Evaporation and Condensation',
        explanation:
          'How is common salt obtained from seawater? Seawater is collected in shallow open pits called salt pans. The heat of the blazing sun slowly evaporates the water into vapor, leaving solid salt crystals behind.\n\nEvaporation is the process of converting a liquid into its gas vapor. Condensation is the reverse process: when steam hits a cold metal plate, it cools down and turns back into liquid water droplets.'
      }
    ],
    definitions: [
      'Winnowing: Method of separating lighter husk components from heavier grains by blowing wind.',
      'Sedimentation: The settling down of heavier insoluble solid particles at the bottom of a liquid.',
      'Decantation: Carefully pouring out the clear upper liquid after sedimentation without disturbing the sediment.',
      'Filtration: The process of passing a liquid mixture through a filter medium with tiny pores to trap insoluble solid impurities.'
    ],
    formulas: [
      { name: 'Phase Change Reversibility', formula: '\\text{Liquid } \\underset{\\text{Condensation}}{\\overset{\\text{Evaporation}}{\\rightleftharpoons}} \\text{ Vapor}', explanation: 'Evaporation turns liquid into gas; condensation turns gas back into liquid.', units: 'Equilibrium' }
    ],
    solvedExamples: [
      {
        question: 'How will you separate a mixture of sand and salt in water?',
        solution: 'Step 1: Add water to the sand-salt mixture and stir well. Salt dissolves completely, while sand remains insoluble at the bottom.\nStep 2: Filter the mixture through filter paper. Insoluble sand remains on the filter paper as residue.\nStep 3: Heat the clear salt solution in a beaker. Water evaporates away as steam, leaving dry salt crystals in the dish.',
        keyInsight: 'Combine dissolution, filtration, and evaporation to separate soluble and insoluble components.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'Tea leaves are separated from brewed tea liquid using a fine mesh strainer (filtration).',
      'Water purification plants in cities use huge sedimentation tanks and sand filters to clean river water before pumping it to our home taps.',
      'Large salt pans along coastal Gujarat and Tamil Nadu produce edible salt by solar evaporation of seawater.'
    ],
    quickRevision: [
      'Handpicking and winnowing separate dry mixtures based on size and weight.',
      'Sedimentation settles heavy insoluble solids; decantation pours off clear liquid.',
      'Filtration traps fine solid particles using a porous filter medium.',
      'Evaporation recovers dissolved solids from solutions.'
    ]
  },

  'c6-chem-04': {
    introduction:
      'Look around: ice melts into water, a seed sprouts into a tall tree, milk turns into curd, and an iron gate develops reddish rust. Change is the rule of nature! In this chapter, we investigate whether changes around us can be reversed (undone) or are permanent and irreversible.',
    basicConcepts: [
      'A change is an alteration in the shape, size, color, temperature, or chemical composition of a substance.',
      'Reversible Changes: Changes that can be undone to return the substance to its original state. Examples: melting ice, blowing up a balloon, folding a piece of paper.',
      'Irreversible Changes: Changes that cannot be undone to get back the original materials. Examples: burning paper to ash, baking a cake, boiling an egg, souring of milk into curd.'
    ],
    detailedExplanations: [
      {
        topic: '1. Reversible Changes (Physical Adjustments)',
        explanation:
          'When you blow air into a rubber balloon, its shape and size expand dramatically. If you let the air escape, the balloon shrinks back to its original size. Similarly, when you stretch a rubber band or melt chocolate gently in a warm bowl, the material can easily return to its initial condition by cooling or releasing. No new chemical substance is formed in a reversible change.'
      },
      {
        topic: '2. Irreversible Changes (Permanent Transformations)',
        explanation:
          'Now imagine you burst the inflated balloon with a needle or light the piece of paper with a matchstick. The paper turns into grey ash and smoke; you can never stick the smoke and ash back together into clean white paper! When milk curdles into yogurt (dahi), new bacterial enzymes permanently change the milk proteins. Once curd is made, you cannot convert it back into fresh milk.'
      },
      {
        topic: '3. Expansion and Contraction upon Heating',
        explanation:
          'Metals expand (get slightly larger) when heated and contract (shrink) when cooled. Blacksmiths use this property brilliantly: to fix an iron rim firmly around a wooden cart wheel, they make the iron ring slightly smaller than the wheel. When heated over a coal fire, the iron ring expands and slips smoothly onto the wooden wheel. Cold water is then poured over it; the metal contracts rapidly and locks onto the wooden wheel with tremendous grip!'
      }
    ],
    definitions: [
      'Reversible Change: A change in which the original substance can be recovered by reversing conditions.',
      'Irreversible Change: A permanent change in which the original substance cannot be recovered.',
      'Expansion: The increase in dimensions of a substance caused by heating.'
    ],
    formulas: [
      { name: 'Thermal Expansion Principle', formula: '\\text{Heating } \\implies \\text{ Expansion; Cooling } \\implies \\text{ Contraction}', explanation: 'Metals expand upon heating and shrink upon cooling.', units: 'Thermal behavior' }
    ],
    solvedExamples: [
      {
        question: 'Is the tearing of paper into tiny pieces a reversible or irreversible change?',
        solution: 'Tearing paper is an irreversible physical change. Although the chemical composition of the paper remains unchanged (it is still paper), you cannot rejoin the torn pieces into the original seamless sheet of paper.',
        keyInsight: 'Even without a chemical reaction, irreversible changes cannot restore original structure.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'When railway tracks are laid, small gaps are intentionally left between steel rails so the tracks have room to expand during hot summer days without buckling.',
      'Baking dough in an oven produces bread—an irreversible change that produces new flavors and textures.',
      'Water turning into ice in the freezer is reversible; taking it out returns it to liquid water.'
    ],
    quickRevision: [
      'Reversible changes can be undone (e.g., melting, folding paper, stretching rubber).',
      'Irreversible changes cannot be undone (e.g., burning, cooking, curdling milk).',
      'Metals expand when heated and contract when cooled.'
    ]
  },

  'c6-chem-05': {
    introduction:
      'Water is the elixir of life! Over 70% of Earth is covered by ocean waters, yet millions of people face drinking water shortages. Why? Ocean water is salty and unfit for drinking or agriculture. In this chapter, we discover how nature purifies water through the glorious water cycle and why every single drop must be conserved.',
    basicConcepts: [
      'All living organisms—plants, animals, and humans—need water to survive, digest food, regulate body temperature, and grow.',
      'The continuous circulation of water from the Earth\'s surface to the atmosphere and back to Earth is called the Water Cycle.',
      'Groundwater is the precious water stored under the soil between layers of rocks, recharged naturally by rainwater soaking into the ground.'
    ],
    detailedExplanations: [
      {
        topic: '1. The Stages of the Natural Water Cycle',
        explanation:
          '1. Evaporation & Transpiration: Sun heats rivers, lakes, and oceans, turning water into invisible vapor. Trees also release massive amounts of water vapor from leaf stomata (transpiration).\n2. Condensation & Cloud Formation: As water vapor rises high into the colder upper atmosphere, it cools and condenses into billions of microscopic liquid droplets, forming clouds.\n3. Precipitation (Rain, Snow, Hail): When cloud droplets combine and become too heavy to stay afloat, gravity pulls them down as rain.\n4. Collection: Rainwater drains into streams, rivers, and oceans, or seeps into soil to replenish groundwater.',
        diagram: `
                    [ Clouds Formed by Condensation ]
                                  |
                           Rain / Precipitation
                                  V
        Sun Heat ---> Evaporation from Lakes & Oceans ---> Vapor Rises
        `
      },
      {
        topic: '2. Droughts and Floods',
        explanation:
          '• Droughts: When an area receives little or no rainfall for two or more consecutive years, rivers dry up, soil loses moisture and cracks, crops fail, and groundwater levels plummet. This leads to famine and severe water scarcity.\n• Floods: Excessive, torrential rains cause rivers and lakes to overflow their banks, submerging villages, damaging crops, drowning cattle, and spreading waterborne diseases.'
      },
      {
        topic: '3. Rainwater Harvesting: Saving Every Drop',
        explanation:
          'Rainwater harvesting is the technique of capturing and storing rainwater for future use instead of letting it run off into dirty drains.\n• Rooftop Rainwater Harvesting: Rain falling on house roofs is channeled through pipes and mesh filters into underground storage tanks or deep recharge pits, directly refilling the groundwater table.'
      }
    ],
    definitions: [
      'Water Cycle: The continuous circular movement of water from the Earth to the atmosphere and back again.',
      'Transpiration: The release of excess water vapor into the air through microscopic stomata pores on plant leaves.',
      'Rainwater Harvesting: The process of collecting and storing rainwater runoff for productive domestic and agricultural use.'
    ],
    formulas: [
      { name: 'Water Cycle Balance', formula: '\\text{Precipitation (Rain)} = \\text{Evaporation} + \\text{Runoff} + \\text{Infiltration}', explanation: 'Total quantity of water on Earth remains constant through phase shifts.', units: 'Hydrological cycle' }
    ],
    solvedExamples: [
      {
        question: 'Why do wet clothes dry faster on a windy, sunny day than on a cloudy, humid day?',
        solution: 'Two factors speed up evaporation: higher temperature from sunlight provides thermal energy to water molecules, and fast moving wind blows away accumulated water vapor near the cloth, allowing fresh liquid molecules to escape rapidly.',
        keyInsight: 'Higher temperature, larger surface area, and windy conditions accelerate evaporation.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Traditional stepwells (Baolis) built in Rajasthan and Gujarat centuries ago were magnificent architectural systems designed to harvest and store rainwater.',
      'Taking a bucket bath instead of a long shower saves up to 50 liters of fresh water daily.',
      'Morning dew on grass blades forms when nighttime cooling condenses atmospheric water vapor onto cold leaves.'
    ],
    quickRevision: [
      'The water cycle operates via evaporation, transpiration, condensation, and precipitation.',
      'Oceans hold salty water; only ~2.5% of Earth\'s water is fresh water.',
      'Groundwater is replenished when rainwater seeps through permeable soil.',
      'Rooftop rainwater harvesting recharges underground aquifers and prevents city water scarcity.'
    ]
  },

  // ==========================================
  // MATHEMATICS (5 CHAPTERS)
  // ==========================================
  'c6-math-01': {
    introduction:
      'Numbers are everywhere—on bus tickets, currency notes, phone numbers, and scoreboards! In Class 6 Mathematics, we step beyond small counting numbers into the world of large numbers (lakhs and crores), learn how place-value systems work, and discover how Roman numerals were used in ancient Europe.',
    basicConcepts: [
      'Comparing numbers: Look at the number of digits first. The number with more digits is always greater. If digits are equal, compare from the leftmost place value.',
      'Indian System of Numeration: Uses Periods of Ones, Thousands, Lakhs, and Crores. Commas are placed after 3 digits from the right, and then after every 2 digits (e.g., 5,43,21,000).',
      'International System of Numeration: Uses Periods of Ones, Thousands, and Millions. Commas are placed after every 3 digits from the right (e.g., 54,321,000).'
    ],
    detailedExplanations: [
      {
        topic: '1. Indian vs International Place Value Comparison',
        explanation:
          '• 1 Lakh in Indian System = 100 Thousand in International System (1,00,000 = 100,000)\n• 10 Lakhs in Indian System = 1 Million in International System (10,00,000 = 1,000,000)\n• 1 Crore in Indian System = 10 Million in International System (1,00,00,000 = 10,000,000)\n• 10 Crores in Indian System = 100 Million in International System (10,00,00,000 = 100,000,000)'
      },
      {
        topic: '2. Estimation and Rounding Off',
        explanation:
          'When planning a school picnic, you don\'t count the exact rupees to the paisa; you estimate!\n• Rounding off to nearest 10: Look at the ones digit. If 0–4, round down. If 5–9, round up. (e.g., 73 rounds to 70; 78 rounds to 80).\n• Rounding off to nearest 100: Look at the tens digit. (e.g., 429 rounds to 400; 489 rounds to 500).'
      },
      {
        topic: '3. Roman Numerals and Their Rules',
        explanation:
          'Basic symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.\nRules:\n1. If a symbol is repeated, its value is added (XX = 20). No symbol is repeated more than 3 times!\n2. Symbols V, L, and D are never repeated and never subtracted.\n3. Smaller symbol on right means ADD (VI = 5 + 1 = 6; XII = 10 + 2 = 12).\n4. Smaller symbol on left means SUBTRACT (IV = 5 - 1 = 4; IX = 10 - 1 = 9; XC = 100 - 10 = 90).'
      }
    ],
    definitions: [
      'Place Value: The value of a digit determined by its position in a number.',
      'Estimation: Finding an approximate value close enough to the exact calculation for practical use.'
    ],
    formulas: [
      { name: 'Million to Lakh Conversion', formula: '1\\text{ Million} = 10\\text{ Lakhs} = 10^6', explanation: 'Relates International and Indian numeration systems.', units: 'Number' },
      { name: 'Crore to Million Conversion', formula: '1\\text{ Crore} = 10\\text{ Millions} = 10^7', explanation: 'Conversion factor between Crore and Million.', units: 'Number' }
    ],
    solvedExamples: [
      {
        question: 'Insert commas correctly and write in Indian words: 87595762',
        solution: 'Commas in Indian System: 8,75,95,762.\nIn words: Eight crore seventy-five lakh ninety-five thousand seven hundred sixty-two.',
        keyInsight: 'First comma after 3 digits from right, then after every 2 digits.',
        difficulty: 'beginner'
      },
      {
        question: 'Write 69 in Roman numerals.',
        solution: '69 = 60 + 9 = (50 + 10) + 9 = LX + IX = LXIX.',
        keyInsight: 'Break into tens and ones before writing Roman symbols.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'India\'s population is counted in Crores in national news, while global business reports use Billions.',
      'Clock dials and chapter numbers in classical books often use Roman numerals (I, II, III, IV, V, VI, etc.).'
    ],
    quickRevision: [
      '1 Million = 10 Lakhs; 1 Crore = 10 Millions.',
      'Indian commas: 3, 2, 2 digits. International commas: 3, 3, 3 digits.',
      'Symbols V, L, D are never subtracted or repeated.'
    ]
  },

  'c6-math-02': {
    introduction:
      'Natural numbers start from 1, 2, 3, 4, and go on forever. But what happens if you have 5 apples and eat all 5? You have nothing left. To represent "nothing", Indian mathematicians gave the world ZERO (0). When you include 0 with the natural numbers, you get the set of Whole Numbers!',
    basicConcepts: [
      'Natural Numbers ($N$): $1, 2, 3, 4, 5, \\dots$',
      'Whole Numbers ($W$): $0, 1, 2, 3, 4, 5, \\dots$ (Every natural number is a whole number, but 0 is not a natural number).',
      'Predecessor: The number that comes just before (subtract 1). 0 has no predecessor in whole numbers!',
      'Successor: The number that comes just after (add 1).'
    ],
    detailedExplanations: [
      {
        topic: '1. The Number Line and Operations',
        explanation:
          'A number line starts at 0 and extends infinitely to the right.\n• Addition on number line: To calculate 3 + 4, start at 3 and take 4 steps to the right -> reach 7.\n• Subtraction on number line: To calculate 7 - 3, start at 7 and take 3 steps to the left -> reach 4.\n• Multiplication on number line: To calculate 3 x 2, start at 0 and make 3 jumps of 2 units each -> reach 6.'
      },
      {
        topic: '2. Properties of Whole Numbers (Closure, Commutative, Associative)',
        explanation:
          '• Closure Property: Sum and product of two whole numbers is always a whole number ($a + b \\in W$, $a \\times b \\in W$). Division by zero is NOT defined!\n• Commutative Property: Order does not matter for addition and multiplication ($a + b = b + a$; $a \\times b = b \\times a$). Note: Does not hold for subtraction or division!\n• Associative Property: Grouping does not matter ($a + (b + c) = (a + b) + c$; $a \\times (b \\times c) = (a \\times b) \\times c$).'
      },
      {
        topic: '3. Distributive Property of Multiplication over Addition',
        explanation:
          '$$a \\times (b + c) = (a \\times b) + (a \\times c)$$\nThis property makes mental math super fast!\nFor example: $12 \\times 105 = 12 \\times (100 + 5) = (12 \\times 100) + (12 \\times 5) = 1200 + 60 = 1260$.'
      }
    ],
    definitions: [
      'Whole Number: Any non-negative integer from zero upwards ($0, 1, 2, 3, \\dots$).',
      'Additive Identity: 0 is the additive identity because $a + 0 = a$.',
      'Multiplicative Identity: 1 is the multiplicative identity because $a \\times 1 = a$.'
    ],
    formulas: [
      { name: 'Distributive Law', formula: 'a(b + c) = ab + ac', explanation: 'Multiplication distributes over addition.', units: 'Algebraic identity' }
    ],
    solvedExamples: [
      {
        question: 'Find the value of $738 \\times 103$ using suitable distributive properties.',
        solution: '$738 \\times 103 = 738 \\times (100 + 3)$\n$= (738 \\times 100) + (738 \\times 3)$\n$= 73,800 + 2,214 = 76,014$.',
        keyInsight: 'Split 103 into 100 + 3 to make multiplication simple and avoid lengthy column calculations.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Checking odometer distance on a car: initial zero reading confirms no prior journey has occurred.',
      'Shopkeepers calculate total cost of 8 books at ₹98 each by calculating $8 \\times (100 - 2) = 800 - 16 = ₹784$.'
    ],
    quickRevision: [
      'Whole numbers include 0 and all natural numbers ($0, 1, 2, \\dots$).',
      'Division by zero is undefined.',
      '0 is the additive identity; 1 is the multiplicative identity.',
      'Distributive property: $a(b + c) = ab + ac$.'
    ]
  },

  'c6-math-03': {
    introduction:
      'Did you know that numbers have hidden personalities? Some numbers can be split neatly into equal teams, while others stand stubbornly alone. In this chapter, we explore factors, multiples, prime numbers, divisibility shortcuts, and discover how to find HCF and LCM.',
    basicConcepts: [
      'A factor of a number divides that number exactly without leaving any remainder (e.g., factors of 6 are 1, 2, 3, and 6).',
      'A multiple of a number is obtained by multiplying it by whole numbers (e.g., multiples of 4 are 4, 8, 12, 16, 20...).',
      'Prime Numbers: Numbers having exactly two distinct factors: 1 and itself (2, 3, 5, 7, 11, 13...). 2 is the ONLY even prime number!',
      'Composite Numbers: Numbers having more than two factors (4, 6, 8, 9, 10...). 1 is neither prime nor composite.'
    ],
    detailedExplanations: [
      {
        topic: '1. Divisibility Shortcuts (Without Long Division!)',
        explanation:
          '• Divisible by 2: Last digit is even ($0, 2, 4, 6, 8$).\n• Divisible by 3: Sum of all digits is a multiple of 3 (e.g., for 729: $7+2+9=18$, divisible by 3!).\n• Divisible by 5: Last digit is 0 or 5.\n• Divisible by 6: Number is divisible by both 2 and 3.\n• Divisible by 9: Sum of all digits is a multiple of 9.\n• Divisible by 10: Last digit is 0.'
      },
      {
        topic: '2. Highest Common Factor (HCF)',
        explanation:
          'The HCF (or Greatest Common Divisor, GCD) of two or more numbers is the largest factor that divides all of them without remainder.\nExample: Factors of 12 are {1, 2, 3, 4, 6, 12}. Factors of 18 are {1, 2, 3, 6, 9, 18}. Common factors are {1, 2, 3, 6}. Highest is 6, so $\\text{HCF}(12, 18) = 6$.'
      },
      {
        topic: '3. Lowest Common Multiple (LCM)',
        explanation:
          'The LCM of two or more numbers is the smallest non-zero number that is a multiple of all of them.\nExample: Multiples of 4: {4, 8, 12, 16, 20, 24...}. Multiples of 6: {6, 12, 18, 24...}. The smallest common multiple is 12, so $\\text{LCM}(4, 6) = 12$.\n\nGolden Rule: For any two numbers $a$ and $b$:\n$$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$$'
      }
    ],
    definitions: [
      'Prime Number: A whole number greater than 1 with exactly two factors: 1 and the number itself.',
      'Co-prime Numbers: Two numbers that have only 1 as their common factor (e.g., 4 and 9).',
      'HCF: The largest common factor of two or more given numbers.',
      'LCM: The smallest common multiple of two or more given numbers.'
    ],
    formulas: [
      { name: 'Product Relation of HCF and LCM', formula: '\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b', explanation: 'Product of two numbers equals product of their HCF and LCM.', units: 'Relation' }
    ],
    solvedExamples: [
      {
        question: 'Three bells toll together at intervals of 9, 12, and 15 minutes. If they toll together now, after how many minutes will they next toll together?',
        solution: 'To find when recurring events coincide, calculate the LCM of their intervals.\nPrime factorize:\n9 = 3²\n12 = 2² x 3\n15 = 3 x 5\nLCM = 2² x 3² x 5 = 4 x 9 x 5 = 180 minutes (or 3 hours).',
        keyInsight: 'Questions asking when recurring cycles next match require calculating LCM.',
        difficulty: 'intermediate'
      }
    ],
    realLifeExamples: [
      'Traffic lights at three crossroads change after 48s, 72s, and 108s; city engineers use LCM to synchronize traffic lights.',
      'Distributing 24 pencils and 36 erasers equally into prize packets without leftovers requires calculating HCF (12 packets).'
    ],
    quickRevision: [
      '2 is the smallest and only even prime number.',
      '1 is neither prime nor composite.',
      'HCF is the largest common factor; LCM is the smallest common multiple.',
      'HCF × LCM = Product of the two numbers.'
    ]
  },

  'c6-math-04': {
    introduction:
      'Geometry comes from two Greek words: "Geo" (Earth) and "Metron" (Measurement). From the pyramids of Egypt to modern skyscrapers, geometric ideas like points, lines, angles, and polygons form the foundation of architecture, design, and art.',
    basicConcepts: [
      'Point: A tiny dot that marks an exact position. It has no length, breadth, or thickness.',
      'Line Segment: The shortest straight distance between two points (has two fixed endpoints).',
      'Line: A straight path that extends infinitely in both directions (has no endpoints).',
      'Ray: A straight path that starts at an initial point and extends infinitely in one direction (like a ray of light from a torch).'
    ],
    detailedExplanations: [
      {
        topic: '1. Intersecting vs Parallel Lines',
        explanation:
          '• Intersecting Lines: Two lines that cross each other at exactly one point (e.g., letter "X", crossing roads).\n• Parallel Lines: Lines that lie in the same plane and never meet, no matter how far they are extended. The perpendicular distance between them remains constant everywhere (e.g., railway tracks, opposite edges of a ruler).'
      },
      {
        topic: '2. Polygons, Vertices, Edges, and Diagonals',
        explanation:
          'A simple closed curve made entirely of straight line segments is called a polygon.\n• Triangle: 3 sides (smallest polygon).\n• Quadrilateral: 4 sides.\n• Pentagon: 5 sides.\n• Hexagon: 6 sides.\n\nA line segment joining any two non-adjacent vertices of a polygon is called a diagonal.'
      },
      {
        topic: '3. Anatomy of a Circle',
        explanation:
          'A circle is a closed curved shape where every point on the boundary is at an equal distance from a fixed center point.\n• Radius ($r$): Line from the center to any point on the boundary.\n• Diameter ($d$): Line passing through the center joining two points on the boundary ($d = 2r$).\n• Chord: Any line segment connecting two points on the circle.\n• Circumference: The total boundary perimeter of the circle.',
        diagram: `
                     (Circumference)
                       . - ~ ~ - .
                   . '      |      ' .
                 /          | (Radius) \
                |     Center(O)-------* |
                 \\          |          /
                   . _      |      _ .
                       ' - _ _ _ - '
                        (Diameter)
        `
      }
    ],
    definitions: [
      'Collinear Points: Three or more points that lie on the same single straight line.',
      'Diameter: The longest chord of a circle that passes through its center ($d = 2r$).',
      'Sector: The region enclosed by two radii and an arc of a circle (like a slice of pizza).'
    ],
    formulas: [
      { name: 'Circle Diameter Relation', formula: 'd = 2r', explanation: 'Diameter is always double the radius of the circle.', units: 'Length' }
    ],
    solvedExamples: [
      {
        question: 'If the radius of a bicycle wheel is 28 cm, what is the diameter of the wheel?',
        solution: 'Diameter d = 2 x Radius = 2 x 28 cm = 56 cm.',
        keyInsight: 'Diameter = 2 × radius.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'A coin, dinner plate, and car steering wheel are all circular shapes designed for symmetry and smooth rotation.',
      'Opposite edges of a blackboard or television screen are parallel lines.'
    ],
    quickRevision: [
      'A line segment has 2 endpoints; a ray has 1 endpoint; a line has no endpoints.',
      'Parallel lines never meet; intersecting lines cross at one point.',
      'Diameter is the longest chord of a circle and equals $2 \\times \\text{radius}$.'
    ]
  },

  'c6-math-05': {
    introduction:
      'What happens when you share 1 chocolate bar equally between 2 best friends? Each gets half ($1/2$). What if you share a pizza cut into 8 equal slices and eat 3 slices? You ate $3/8$ of the pizza! Fractions represent parts of a whole, and decimals are simply another way to write fractions with base 10.',
    basicConcepts: [
      'A fraction is written as $\\frac{a}{b}$, where $a$ is the numerator (parts taken) and $b$ is the denominator (total equal parts into which the whole is divided, $b \\ne 0$).',
      'Proper Fraction: Numerator < Denominator (value is less than 1, e.g., $3/4, 2/5$).',
      'Improper Fraction: Numerator $\\ge$ Denominator (value $\\ge 1$, e.g., $7/4, 9/2$).',
      'Mixed Fraction: A combination of a whole number and a proper fraction (e.g., $1\\frac{3}{4}$).'
    ],
    detailedExplanations: [
      {
        topic: '1. Equivalent Fractions & Simplest Form',
        explanation:
          'If you multiply or divide both the numerator and denominator by the same non-zero number, the value does not change!\n$$\\frac{1}{2} = \\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4} = \\frac{4}{8}$$\nTo reduce a fraction to simplest form, divide numerator and denominator by their HCF.'
      },
      {
        topic: '2. Like vs Unlike Fractions & Addition',
        explanation:
          '• Like Fractions have identical denominators (e.g., $2/7$ and $3/7$). To add them: simply add numerators: $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$.\n• Unlike Fractions have different denominators (e.g., $1/2 + 1/3$). To add them, first find the LCM of denominators ($LCM(2, 3) = 6$), convert them into equivalent like fractions, and then add:\n$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$'
      },
      {
        topic: '3. Connecting Fractions to Decimals',
        explanation:
          'A decimal number has a whole number part, a decimal point, and a decimal part.\n• $\\frac{1}{10} = 0.1$ (One tenth)\n• $\\frac{1}{100} = 0.01$ (One hundredth)\n• $\\frac{7}{10} = 0.7$; $\\frac{25}{100} = 0.25$; $\\frac{1}{4} = \\frac{25}{100} = 0.25$'
      }
    ],
    definitions: [
      'Fraction: A number representing a part of a whole.',
      'Decimal Point: The dot used to separate the whole number part from the fractional part in a decimal.',
      'Reciprocal: Inverting a fraction so numerator becomes denominator and vice versa.'
    ],
    formulas: [
      { name: 'Mixed to Improper Fraction', formula: 'a\\frac{b}{c} = \\frac{(a \\times c) + b}{c}', explanation: 'Converts mixed fraction into an improper fraction.', units: 'Fraction' }
    ],
    solvedExamples: [
      {
        question: 'Solve: $\\frac{3}{5} + \\frac{2}{7}$',
        solution: 'Step 1: Denominators are 5 and 7. Since they are prime, LCM(5, 7) = 35.\nStep 2: Convert to like fractions:\n(3 x 7) / (5 x 7) = 21/35\n(2 x 5) / (7 x 5) = 10/35\nStep 3: Add numerators:\n(21 + 10) / 35 = 31/35.',
        keyInsight: 'Convert unlike fractions to like fractions using LCM before adding.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Indian currency uses decimals: 50 paise = ₹0.50, and ₹15 and 75 paise = ₹15.75.',
      'Liquid medicine doses for children are prescribed in decimals (e.g., 2.5 mL or 5.0 mL syrup).'
    ],
    quickRevision: [
      'Proper fraction < 1; Improper fraction >= 1.',
      'To add unlike fractions, find the LCM of denominators first.',
      '1 rupee = 100 paise, so 1 paisa = ₹0.01.'
    ]
  },

  // ==========================================
  // BIOLOGY (5 CHAPTERS)
  // ==========================================
  'c6-bio-01': {
    introduction:
      'Why do our parents insist that we drink milk, eat green vegetables, and finish our dal? Food is the fuel that powers our bodies! In this chapter, we explore the essential nutrients in food, discover what happens when we lack them, and learn how to plan a healthy balanced diet.',
    basicConcepts: [
      'The essential chemical substances in food needed by our body for energy, growth, repair, and defense are called nutrients.',
      'The five major nutrients are Carbohydrates, Fats, Proteins, Vitamins, and Minerals.',
      'In addition to these five, our body requires Dietary Fibre (Roughage) and Water to function smoothly.',
      'A diet that contains all required nutrients in the correct proportions, along with roughage and water, is called a balanced diet.'
    ],
    detailedExplanations: [
      {
        topic: '1. The Five Main Nutrient Groups',
        explanation:
          '• Carbohydrates (Energy-Givers): Provide immediate energy for daily activities. Found in rice, wheat, potatoes, sugar, and bananas.\n• Fats (Stored Energy): Provide more than double the energy of carbohydrates per gram, and insulate our body against cold. Found in butter, ghee, cooking oil, nuts, and cheese.\n• Proteins (Body-Builders): Essential for growth, muscle building, and repairing damaged tissues. Found in pulses (dal), eggs, milk, fish, paneer, and soybeans.\n• Vitamins (Protectors): Protect our body from infections and diseases. Vitamin A (good vision), Vitamin C (healthy gums and immunity), Vitamin D (strong bones and teeth).\n• Minerals: Required in small amounts for healthy blood and bones. Iron (makes hemoglobin for blood), Calcium (builds strong bones and teeth), Iodine (prevents goiter).'
      },
      {
        topic: '2. Dietary Fibre (Roughage) and Water',
        explanation:
          'Roughage does not provide any nutrients to our body, but it adds bulk to the food and helps our intestines push undigested waste out smoothly, preventing constipation. Found in whole grains, fresh fruits with skin, and raw salads.\n\nWater makes up about 70% of our body weight. It absorbs nutrients from digested food and eliminates body waste through sweat and urine.'
      },
      {
        topic: '3. Deficiency Diseases (When Nutrients are Missing)',
        explanation:
          'Diseases caused by the prolonged lack of specific nutrients in our diet:\n• Protein deficiency in children: Stunted growth, swollen belly, thinning hair (Kwashiorkor).\n• Vitamin A: Night blindness (poor vision in dim light).\n• Vitamin B1: Beriberi (weak muscles and very little energy).\n• Vitamin C: Scurvy (bleeding gums and wounds take a long time to heal).\n• Vitamin D: Rickets (bones become soft, weak, and bent).\n• Calcium: Weak bones and severe tooth decay.\n• Iodine: Goiter (gland in neck appears swollen; mental disability in children).\n• Iron: Anemia (pale skin, extreme fatigue, weakness).'
      }
    ],
    definitions: [
      'Nutrients: Components of food needed by an organism to grow, survive, and reproduce.',
      'Balanced Diet: A diet providing all essential nutrients in proper amounts along with water and roughage.',
      'Deficiency Disease: A disease caused by the long-term lack of a particular nutrient in the daily diet.'
    ],
    formulas: [
      { name: 'Balanced Diet Equation', formula: '\\text{Diet} = \\text{Carbs} + \\text{Fats} + \\text{Proteins} + \\text{Vitamins} + \\text{Minerals} + \\text{Roughage} + \\text{Water}', explanation: 'Components required for optimal bodily development.', units: 'Nutritional balance' }
    ],
    solvedExamples: [
      {
        question: 'A child has difficulty seeing things in dim light in the evening. Which nutrient is missing from their diet, and which foods should they eat to cure it?',
        solution: 'The child is suffering from Night Blindness caused by a deficiency of Vitamin A. To cure it, the child should eat foods rich in Vitamin A, such as carrots, papaya, mangoes, spinach, milk, butter, and fish oil.',
        keyInsight: 'Vitamin A is vital for healthy retina rod cells that detect dim light.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Sailors on long sea voyages in ancient times developed bleeding gums (scurvy); British naval doctors cured them by providing lemons and oranges rich in Vitamin C.',
      'Common table salt in India is enriched with tiny traces of Iodine (Iodized Salt) to protect children from goiter.'
    ],
    quickRevision: [
      'Carbohydrates and fats provide energy; proteins build and repair body tissues.',
      'Vitamins and minerals protect against diseases.',
      'Roughage aids healthy bowel movements; water regulates body temperature and waste removal.',
      'Deficiency diseases occur when specific nutrients are lacking over long periods.'
    ]
  },

  'c6-bio-02': {
    introduction:
      'Next time you visit a garden or farm, look closely at the plants: some are tiny grass blades, some are bushy rose shrubs, and some are gigantic banyan trees reaching the clouds. How do plants stand upright? How do roots drink water from deep underground? In this chapter, we explore the wonderful anatomy of plants.',
    basicConcepts: [
      'Plants are classified by size and stem structure into Herbs, Shrubs, and Trees.',
      'Two special types of plants with weak stems are Creepers (spread along ground) and Climbers (climb up supports with tendrils).',
      'The two main systems in a flowering plant are the Root System (underground) and the Shoot System (above ground: stem, leaves, flowers, fruit).'
    ],
    detailedExplanations: [
      {
        topic: '1. Classification: Herbs, Shrubs, and Trees',
        explanation:
          '• Herbs: Small plants with green, tender, soft stems, usually short with few branches. Examples: Tomato, mint, coriander, wheat.\n• Shrubs: Medium-sized plants with hard, thin woody stems branching out from near the base of the ground. Examples: Rose, hibiscus, lemon, tulsi.\n• Trees: Tall, massive plants with a thick, hard brown woody trunk. Branches arise from upper parts of the trunk high above the ground. Examples: Mango, neem, banyan, peepal.\n• Climbers: Weak-stemmed plants that climb up trees or walls using spring-like tendrils (e.g., money plant, pea plant, grapevine).\n• Creepers: Weak-stemmed plants that spread horizontally along the soil (e.g., pumpkin, watermelon).'
      },
      {
        topic: '2. Root Systems: Taproots vs Fibrous Roots',
        explanation:
          '• Taproot: A single main primary root grows deep vertically into the soil, with smaller lateral roots growing sideways. Examples: Carrot, radish, mustard, bean, mango.\n• Fibrous Root: There is no main root; a cluster of thin, hair-like roots of equal size grow out together from the base of the stem. Examples: Grass, wheat, maize, rice.\n\nFascinating nature connection: Plants with reticulate leaf venation (net-like) always have taproots! Plants with parallel leaf venation (straight lines, like grass) always have fibrous roots!'
      },
      {
        topic: '3. Anatomy of a Flower',
        explanation:
          'The flower is the reproductive organ of a flowering plant:\n1. Sepals: Green, leaf-like outer whorl that protects the delicate flower bud.\n2. Petals: Brightly colored, scented petals that attract bees and butterflies for pollination.\n3. Stamen (Male Part): Consists of a slender stalk (filament) and an anther on top that produces yellow pollen grains.\n4. Pistil / Carpel (Female Part): In the center of the flower. Consists of a sticky top (stigma), a slender tube (style), and a swollen base (ovary) containing tiny egg-like ovules.',
        diagram: `
                     [ Stigma ] (Sticky top)
                         |
                      [ Style ]                 (Anther with Pollen)
                         |                             |
                     [ Ovary ] (Contains Ovules)    [Filament]
                     ========================       ==========
                         (Pistil / Female)        (Stamen / Male)
        `
      }
    ],
    definitions: [
      'Petiole: The slender stalk that attaches a leaf blade to the plant stem.',
      'Lamina: The broad, green, flat surface of a leaf.',
      'Photosynthesis: The process by which green leaves synthesize glucose from carbon dioxide and water using sunlight trapped by green chlorophyll.'
    ],
    formulas: [
      { name: 'Photosynthesis Word Equation', formula: '\\text{CO}_2 + \\text{Water } \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{Glucose (Food)} + \\text{Oxygen}', explanation: 'Chemical equation summarizing food synthesis in green leaves.', units: 'Biochemical process' }
    ],
    solvedExamples: [
      {
        question: 'If you want to know what kind of roots a wild grass plant has, can you find out without pulling it out of the ground?',
        solution: 'Yes! Look at the veins on the grass leaf. Grass leaves show parallel venation (veins run parallel to each other). Plants with parallel leaf venation always possess fibrous roots, so grass has a fibrous root system.',
        keyInsight: 'Leaf venation directly correlates with root type (Reticulate = Taproot; Parallel = Fibrous).',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Money plants grown in glass bottles use small aerial clasping roots to climb up moss sticks.',
      'Sweet potatoes and carrots we eat are actually swollen taproots adapted for storing extra food produced by the plant.'
    ],
    quickRevision: [
      'Herbs have soft green stems; shrubs branch near the ground; trees have thick trunks.',
      'Taproots pair with reticulate venation; fibrous roots pair with parallel venation.',
      'Leaves make food via photosynthesis and lose water vapor through transpiration.',
      'Flower male parts are stamens; female parts are the pistil (stigma, style, ovary).'
    ]
  },

  'c6-bio-03': {
    introduction:
      'Blink your eyes, wiggle your fingers, or kick a football across the field—how does your body move so smoothly? Inside our bodies is a strong, lightweight bony framework called the skeleton. In this chapter, we discover how bones, flexible cartilage, and pulling muscles coordinate to create movement, and how birds, fish, and snakes travel.',
    basicConcepts: [
      'The human skeletal framework contains 206 bones in an adult, providing shape, protection to delicate organs (like the brain and heart), and supporting movement.',
      'Bones cannot bend on their own; movement happens at joints—points where two or more bones meet.',
      'Muscles can only pull; they cannot push! Therefore, muscles always work in coordinating pairs (like biceps and triceps).'
    ],
    detailedExplanations: [
      {
        topic: '1. Major Movable Joints in the Human Body',
        explanation:
          '• Ball and Socket Joint: The rounded ball of one bone fits into the hollow socket of another bone, allowing movement in all 360° directions! Found in shoulders and hips.\n• Hinge Joint: Works like a door hinge, allowing movement back and forth in only one plane. Found in elbows and knees.\n• Pivotal Joint: A cylindrical bone turns within a ring formed by another bone, allowing us to bend our head forward/backward and turn side to side. Found between our neck and skull.\n• Fixed Joint: Bones are fused together tightly and cannot move at all. Found in our upper skull and upper jaw.'
      },
      {
        topic: '2. How Muscles Move Bones in Pairs',
        explanation:
          'When you want to bend your arm at the elbow, your bicep muscle contracts (becomes shorter, thicker, and harder), pulling the forearm bone upward. Meanwhile, your tricep muscle relaxes and stretches. To straighten your arm back down, the tricep contracts and pulls the bone down, while the bicep relaxes. Because muscles can only contract and pull, two muscles must work as a team to move a single bone back and forth.'
      },
      {
        topic: '3. Animal Locomotion: Earthworm, Snail, Fish, Bird, and Snake',
        explanation:
          '• Earthworm: Has no bones! It moves by alternately contracting circular and longitudinal muscles, anchoring itself with tiny bristles (setae).\n• Snail: Glides smoothly on a muscular foot that secretes slimy mucus.\n• Fish: Has a streamlined boat-like body. Muscles curve the body into a wave on one side while the tail fin flips to the opposite side, producing a forward thrust.\n• Birds: Have hollow, light bones, powerful breast flight muscles, and forelimbs modified into feathered wings.\n• Snakes: Have a long flexible backbone and thousands of ribs; they slither forward by making S-shaped lateral loops that push against ground irregularities.'
      }
    ],
    definitions: [
      'Joint: The junction where two or more bones connect.',
      'Cartilage: A smooth, tough, flexible connective tissue that covers bone ends at joints (also found in ears and nose tip).',
      'Streamlined Shape: A body shape that is narrow at both ends and broad in the middle, minimizing resistance in fluids.'
    ],
    formulas: [
      { name: 'Muscle Action Rule', formula: '\\text{Muscles only contract and pull (They cannot push)}', explanation: 'Movement of bones requires antagonistic muscle pairs.', units: 'Biomechanics' }
    ],
    solvedExamples: [
      {
        question: 'Why can you rotate your upper arm in a full circular motion at the shoulder, but you can only bend your elbow in one direction?',
        solution: 'The shoulder contains a Ball and Socket joint, which allows rotation in all directions. The elbow contains a Hinge joint, which is mechanically restricted to back-and-forth movement in one plane like a hinged door.',
        keyInsight: 'Joint anatomy determines the permissible range and direction of movement.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Airplanes and submarines are designed with streamlined noses and tapered tails inspired directly by the shapes of birds and fish.',
      'Bend your earlobe with your fingers: it feels soft and flexible because it contains cartilage instead of hard bone.'
    ],
    quickRevision: [
      'The adult human skeleton has 206 bones.',
      'Joints: Ball & socket (all directions), hinge (one plane), pivotal (rotates), fixed (no motion).',
      'Muscles work in pairs because they can only pull, never push.',
      'Fish and birds have streamlined bodies to minimize resistance.'
    ]
  },

  'c6-bio-04': {
    introduction:
      'From camel herds enduring desert sands to polar bears swimming in freezing Arctic waters, living organisms thrive in every corner of our planet. How do creatures survive in extreme conditions? Through adaptation! In this chapter, we discover the characteristics of living organisms and explore diverse habitats.',
    basicConcepts: [
      'Habitat: The natural home or environment of a plant or animal where it finds food, water, air, shelter, and suitable breeding conditions.',
      'Adaptation: The presence of specific physical features or behavioral habits that enable a plant or animal to live successfully in its habitat.',
      'Biotic Components: All living organisms in an ecosystem (plants, animals, microorganisms).',
      'Abiotic Components: All non-living factors in an ecosystem (soil, water, air, sunlight, temperature).'
    ],
    detailedExplanations: [
      {
        topic: '1. Terrestrial Habitats: Deserts and Mountains',
        explanation:
          '• Desert Adaptation (Camel): Known as the "Ship of the Desert". Has long legs to keep body away from scorching sand heat, excretes very little urine, produces dry dung, does not sweat, and wide padded hooves prevent sinking into soft sand.\n• Desert Plants (Cactus): Leaves are modified into sharp spines to prevent water loss through transpiration. The green fleshy stem performs photosynthesis and stores water, coated with a thick waxy layer.\n• Mountain Animals (Snow Leopard, Yak, Mountain Goat): Have thick fur, heavy coats of wool, and layer of fat beneath skin to keep warm. Mountain trees (pines) are cone-shaped with sloping branches so heavy snow slides off easily.'
      },
      {
        topic: '2. Aquatic Habitats: Oceans and Ponds',
        explanation:
          '• Fish: Have streamlined bodies to slip through water with low friction, slippery scales to protect skin, flat fins and tails for changing direction and balance, and gills to extract dissolved oxygen.\n• Aquatic Plants: Have hollow, air-filled light stems that float upward toward the water surface. Submerged leaves are often thin and ribbon-like so fast-flowing currents can pass through without tearing them.'
      },
      {
        topic: '3. What Distinguishes Living Things from Non-Living Objects?',
        explanation:
          'All living organisms share common characteristics:\n1. Need food and nutrition for energy.\n2. Exhibit growth over time.\n3. Respire (take in oxygen to release energy from food).\n4. Respond to stimuli (touching a hot object or the touch-me-not plant Mimosa makes it react immediately).\n5. Excrete waste substances from body cells.\n6. Reproduce their own kind.\n7. Have a finite lifespan and eventually die.'
      }
    ],
    definitions: [
      'Habitat: The surrounding physical environment where an organism naturally lives and prospers.',
      'Adaptation: Special structural or behavioral traits acquired over generations that help an organism survive in its habitat.',
      'Stimulus: A change in an organism\'s surroundings that causes it to react or respond.'
    ],
    formulas: [
      { name: 'Ecosystem Components', formula: '\\text{Ecosystem} = \\text{Biotic (Living)} + \\text{Abiotic (Non-living)}', explanation: 'Living organisms interact continuously with physical environment.', units: 'Ecological balance' }
    ],
    solvedExamples: [
      {
        question: 'Why are the leaves of a cactus plant reduced to sharp spines?',
        solution: 'In dry deserts, water is extremely scarce. Leaves have stomata pores that release water vapor into the air through transpiration. By reducing leaves into sharp spines, the cactus minimizes water loss to almost zero, conserving precious moisture.',
        keyInsight: 'Leaf modification into spines is an adaptation to minimize transpiration in arid climates.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Frogs have webbed back feet that act like flippers for swimming in pond water, and strong muscular legs for leaping on dry land.',
      'When you step from a bright sunny outdoor street into a dark cinema hall, your eye pupils dilate (expand) to let in more light—a response to stimulus!'
    ],
    quickRevision: [
      'A habitat provides food, shelter, water, and breeding ground.',
      'Biotic factors are living; abiotic factors are non-living (sunlight, temperature, soil).',
      'Camels and cacti are adapted to conserve water in deserts.',
      'Living things feed, grow, respire, respond to stimuli, excrete, reproduce, and move.'
    ]
  },

  'c6-bio-05': {
    introduction:
      'Every day, our homes produce garbage—vegetable peels, leftover food, plastic wrappers, broken toys, and empty milk packets. If this waste piles up on roadsides, it breeds flies, mosquitoes, and foul smells. In this chapter, we learn how nature recycles organic waste using redworms (vermicomposting) and why reducing plastic waste is critical for Earth.',
    basicConcepts: [
      'Waste can be categorized into Biodegradable Waste (decomposes naturally by soil microbes) and Non-Biodegradable Waste (does not rot and stays in the environment for centuries).',
      'Municipalities provide two color-coded bins: Green Bins for biodegradable kitchen waste, and Blue Bins for recyclable non-biodegradable waste (plastics, metals, glass).',
      'Vermicomposting uses a special species of redworms to transform organic kitchen waste into rich, dark, fertile compost in a few weeks.',
      'The 3 R\'s for saving the environment: Reduce, Reuse, and Recycle.'
    ],
    detailedExplanations: [
      {
        topic: '1. Biodegradable vs Non-Biodegradable Waste',
        explanation:
          '• Biodegradable: Can be broken down naturally by bacteria and fungi into harmless soil nutrients. Examples: fruit and vegetable peels, eggshells, dry leaves, tea leaves, animal dung, paper.\n• Non-Biodegradable: Cannot be broken down by biological processes. They accumulate in soil and drains, causing toxic pollution and choking city sewers. Examples: plastic bags, aluminum foil, glass bottles, styrofoam cups, nylon.'
      },
      {
        topic: '2. The Magic of Vermicomposting (Redworms at Work)',
        explanation:
          'Redworms (a type of earthworm) are champion composters! They do not have teeth; instead, they have a muscular organ called a gizzard that grinds food along with tiny sand grains. A redworm can eat organic waste equal to its own body weight every single day! In 3 to 4 weeks, redworms convert kitchen scraps and garden leaves into sweet-smelling, dark, nutrient-packed vermicompost—the best natural organic fertilizer for crops and home gardens.'
      },
      {
        topic: '3. Plastics: Boon or Curse? Practicing the 3 R\'s',
        explanation:
          'Plastics are lightweight, cheap, and water-resistant, but discarding single-use plastic bags causes catastrophic harm:\n• Stray cows eat plastic bags thrown in open dumps, which choke their digestive tracts and cause death.\n• Burning plastics releases carcinogenic, toxic fumes into the atmosphere.\n\nHow to solve it:\n• REDUCE: Say NO to single-use plastic bags. Carry your own reusable cloth or jute tote bag for groceries.\n• REUSE: Wash and reuse plastic bottles and containers to store kitchen spices and pulses.\n• RECYCLE: Give old newspapers, glass bottles, and scrap metal to the kabadiwala for recycling into new paper and metal products.'
      }
    ],
    definitions: [
      'Biodegradable: Capable of being decomposed by natural biological agents like bacteria and worms.',
      'Vermicomposting: The process of composting organic waste into high-grade manure using redworms.',
      'Recycling: Processing used materials to create new products, reducing raw resource consumption.'
    ],
    formulas: [
      { name: 'Waste Management Hierarchy', formula: '\\text{Reduce } > \\text{ Reuse } > \\text{ Recycle } > \\text{ Safe Disposal}', explanation: 'Hierarchy for minimizing environmental pollution and landfill pressure.', units: 'Ecological principle' }
    ],
    solvedExamples: [
      {
        question: 'Why should you never add pickle, oil, vinegar, or milk products into a vermicomposting pit?',
        solution: 'Oils, pickles, vinegar, salt, and milk products encourage the growth of harmful disease-causing bacteria and foul-smelling molds that kill or repel the beneficial redworms in the compost pit.',
        keyInsight: 'Only plant waste, vegetable scraps, and raw organic material are suitable for redworms.',
        difficulty: 'beginner'
      }
    ],
    realLifeExamples: [
      'Many Indian cities have banned thin single-use plastic bags, encouraging shoppers to use washable cotton and jute bags.',
      'Making homemade compost from vegetable peels for balcony flowerpots eliminates the need for expensive chemical fertilizers.'
    ],
    quickRevision: [
      'Green bins collect biodegradable wet waste; Blue bins collect dry recyclable waste.',
      'Redworms with gizzards produce nutrient-rich vermicompost from organic waste.',
      'Plastics do not rot and choke city drainage systems.',
      'Follow the 3 R\'s: Reduce, Reuse, and Recycle.'
    ]
  }
};
