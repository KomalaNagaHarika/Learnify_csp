import { Chapter } from '../../types';

export const CLASS_10_CHAPTERS: Chapter[] = [
  // ==========================================
  // PHYSICS (5 CHAPTERS)
  // ==========================================
  {
    id: 'c10-phys-01',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Geometrical Optics',
    order: 1,
    title: 'Light – Reflection and Refraction',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Motion and Optics Basics',
    totalConcepts: 8,
    durationHours: 6.0,
    description: 'Reflection at spherical mirrors (concave, convex), ray tracing, mirror formula & magnification, refraction, Snell’s Law, refractive index, refraction through spherical lenses, lens formula, and optical power of a lens.',
    introduction: 'Geometrical optics governs the design of spectacles, camera lenses, and telescopes. Curved mirrors and glass lenses bend light predictably using the mirror and lens formulas with Cartesian sign conventions.',
    topics: [
      'Reflection by Spherical Mirrors: Concave and Convex Mirrors',
      'Ray Diagrams and Rules for Image Formation by Spherical Mirrors',
      'Sign Convention for Spherical Mirrors and Mirror Formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$',
      'Magnification: $m = \\frac{h_i}{h_o} = -\\frac{v}{u}$',
      'Refraction of Light and Snell\'s Law: $\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1}$',
      'Absolute and Relative Refractive Index: $n = c/v$',
      'Refraction through Convex and Concave Lenses, Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$',
      'Power of a Lens: $P = 1/f\\text{ (in meters)}$ (Unit: Dioptre, D)'
    ],
    summaryNotes: `### Core Mathematical Relations:
1. **Mirror Formula:**
   $$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}, \\quad m = -\\frac{v}{u}$$
   - Concave mirror: $f < 0$. Convex mirror: $f > 0$.
2. **Snell's Law of Refraction:**
   $$\\frac{\\sin i}{\\sin r} = \\text{constant} = \\frac{n_2}{n_1}$$
   - When light travels from rarer to denser medium, it bends **towards the normal**; when from denser to rarer, it bends **away from the normal**.
3. **Lens Formula:**
   $$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad m = +\\frac{v}{u}$$
   - Convex lens: $f > 0$. Concave lens: $f < 0$.
4. **Power of Lens ($P$):**
   $$P = \\frac{1}{f\\text{ (in meters)}} \\quad (\\text{SI Unit: Dioptre, D})$$`,
    definitions: [
      'Snell\'s Law: The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media.',
      'Dioptre: The optical power of a lens having a focal length of 1 meter.'
    ],
    formulas: [
      { name: 'Mirror Formula', formula: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}', explanation: 'Relates object distance u, image distance v, and focal length f of spherical mirror.', units: 'm' },
      { name: 'Lens Formula', formula: '\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}', explanation: 'Relates object distance u, image distance v, and focal length f of lens.', units: 'm' },
      { name: 'Lens Power', formula: 'P = \\frac{1}{f\\text{ (m)}}', explanation: 'Converging or diverging power of lens in Dioptres.', units: 'Dioptres (D)' }
    ],
    solvedExamples: [
      {
        question: 'A convex lens of focal length 20 cm forms a real image at 30 cm from the lens. Find the object distance and magnification.',
        solution: 'f = +20 cm, v = +30 cm (real image formed on other side).\nUsing lens formula: 1/f = 1/v - 1/u => 1/20 = 1/30 - 1/u => 1/u = 1/30 - 1/20 = (2 - 3)/60 = -1/60.\nObject distance u = -60 cm.\nMagnification m = v / u = (+30) / (-60) = -0.5 (real, inverted, half size).',
        keyInsight: 'Strictly apply Cartesian signs: real image for lens has positive v.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c10-p1-01'],
    practiceQuestions: [
      {
        id: 'q-c10-p1-01',
        subject: 'Physics',
        chapterId: 'c10-phys-01',
        chapterTitle: 'Light – Reflection and Refraction',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'A convex lens has an optical power of +2.5 Dioptres. What is its focal length?',
        options: ['A) +25 cm', 'B) +40 cm', 'C) +50 cm', 'D) -40 cm'],
        correctAnswer: 'B',
        explanation: 'f = 1 / P = 1 / 2.5 m = 0.4 m = +40 cm.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-phys-02',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Optical Phenomena & Vision',
    order: 2,
    title: 'Human Eye and the Colourful World',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Light – Reflection and Refraction',
    totalConcepts: 7,
    durationHours: 4.5,
    description: 'Structure of the human eye, power of accommodation, defects of vision and their correction (myopia by concave lens, hypermetropia by convex lens, presbyopia), refraction through a glass prism, dispersion of white light (VIBGYOR, rainbow), atmospheric refraction (twinkling of stars, advanced sunrise & delayed sunset), and scattering of light (Tyndall effect, blue sky, reddish sun).',
    introduction: 'Why do stars twinkle in the night sky, and why is the sunset a deep fiery red? Atmospheric density gradients bend starlight continuously, while Rayleigh scattering of sunlight by nitrogen and oxygen molecules colors the sky.',
    topics: [
      'Anatomy of Eye & Power of Accommodation of Ciliary Muscles (Near point = 25 cm, Far point = infinity)',
      'Defects of Vision: Myopia (Short-sightedness, corrected by Concave lens)',
      'Hypermetropia (Far-sightedness, corrected by Convex lens) and Presbyopia (Bifocal lenses)',
      'Refraction of Light through a Triangular Glass Prism: Angle of Deviation ($\\angle D$)',
      'Dispersion of White Light and Natural Rainbow Formation (Internal reflection + Refraction)',
      'Atmospheric Refraction: Twinkling of Stars, Apparent Flattening of Solar Disc, 2-Minute Advanced Sunrise & Delayed Sunset',
      'Scattering of Light: Rayleigh Scattering ($I \\propto 1/\\lambda^4$), Blue color of clear sky, and Red color of Sun at Dawn and Dusk'
    ],
    summaryNotes: `### Core Vision Defects & Optical Physics:
1. **Myopia (Near-sightedness):**
   - Can see nearby objects clearly, but distant objects appear blurred.
   - Image forms **in front of the retina**.
   - Corrected using a **concave lens** of suitable diverging power.
2. **Hypermetropia (Far-sightedness):**
   - Can see distant objects clearly, but cannot focus on nearby text.
   - Image forms **behind the retina**.
   - Corrected using a **convex lens** of suitable converging power.
3. **Rayleigh Scattering Law:**
   $$\\text{Intensity of Scattered Light } I \\propto \\frac{1}{\\lambda^4}$$
   - Blue light has a shorter wavelength ($\\approx 400\\text{ nm}$) than red light ($\\approx 700\\text{ nm}$); it is scattered nearly **16 times more** by atmospheric air molecules, filling the daytime sky with bright blue light!
   - At sunrise and sunset, sunlight travels through thick atmospheric paths; blue light scatters away, leaving long-wavelength **red and orange** to reach our eyes.`,
    definitions: [
      'Power of Accommodation: The ability of the eye lens to adjust its focal length using ciliary muscles to focus both near and far objects on the retina.',
      'Rayleigh Scattering: Elastic scattering of light by particles much smaller than the wavelength of light, inversely proportional to the fourth power of wavelength.'
    ],
    formulas: [
      { name: 'Prism Relation', formula: 'A + D = i + e', explanation: 'Relates angle of prism A, deviation D, incidence i, and emergence e.', units: 'Degrees' },
      { name: 'Rayleigh Scattering Law', formula: 'I_{scattered} \\propto \\frac{1}{\\lambda^4}', explanation: 'Shorter wavelengths scatter far more strongly.', units: 'Intensity' }
    ],
    solvedExamples: [
      {
        question: 'A myopic person cannot see objects distinctly beyond 80 cm. What is the power of the lens required to restore normal distant vision?',
        solution: 'For viewing distant objects at infinity (u = -∞), image must be formed at person\'s far point (v = -80 cm = -0.8 m).\nUsing lens formula: 1/f = 1/v - 1/u = 1/(-0.8) - 1/(-∞) = -1/0.8.\nf = -0.8 m.\nPower P = 1 / f = 1 / (-0.8) = -1.25 Dioptres (Concave lens).',
        keyInsight: 'Myopia correction places the image of infinity at the patient\'s far point.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c10-p2-01'],
    practiceQuestions: [
      {
        id: 'q-c10-p2-01',
        subject: 'Physics',
        chapterId: 'c10-phys-02',
        chapterTitle: 'Human Eye and the Colourful World',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which lens is prescribed to correct Myopia (short-sightedness)?',
        options: ['A) Convex lens', 'B) Concave lens', 'C) Cylindrical lens', 'D) Bifocal lens'],
        correctAnswer: 'B',
        explanation: 'A concave lens diverges incoming parallel light rays before they hit the eye lens, shifting the focused image backward onto the retina.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-phys-03',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Current Electricity',
    order: 3,
    title: 'Electricity',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 8 Chemical Effects of Electric Current',
    totalConcepts: 8,
    durationHours: 6.0,
    description: 'Electric current ($I = Q/t$), potential difference ($V = W/Q$), Ohm’s Law, resistance ($R = V/I$), factors affecting resistance (length, area, resistivity $\\rho$), resistors in series ($R_s = R_1 + R_2 + R_3$) and parallel ($1/R_p = 1/R_1 + 1/R_2 + 1/R_3$), Joule’s heating effect ($H = I^2Rt$), and electric power ($P = VI = I^2R = V^2/R$).',
    introduction: 'From charging smartphones to powering bullet trains, electric current is modern civilization\'s primary energy currency. Georg Simon Ohm discovered the direct relationship between voltage and current in metallic conductors.',
    topics: [
      'Electric Current: $I = Q/t$ (1 Ampere = 1 Coulomb/second, Electron drift)',
      'Electric Potential and Potential Difference: $V = W/Q$ (1 Volt = 1 Joule/Coulomb)',
      'Ohm’s Law: $V = IR$ at Constant Temperature (Linear V-I graph)',
      'Resistance and Resistivity: $R = \\rho \\frac{l}{A}$ (Resistivity unit: $\\Omega\\cdot\\text{m}$)',
      'Resistors in Series: Current $I$ is constant, $R_{total} = R_1 + R_2 + R_3$',
      'Resistors in Parallel: Voltage $V$ is constant, $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$',
      'Heating Effect of Electric Current: Joule’s Law ($H = I^2 R t$ in Joules)',
      'Electric Power: $P = VI = I^2R = \\frac{V^2}{R}$ (Watts and Commercial unit: $1\\text{ kWh} = 3.6\\times 10^6\\text{ J}$)'
    ],
    summaryNotes: `### Core Circuit Laws:
1. **Ohm\'s Law:**
   $$V = IR \\implies R = \\frac{V}{I}$$
2. **Resistance & Geometry:**
   $$R = \\rho \\frac{l}{A}$$
   - Doubling the length doubles resistance ($R \\propto l$).
   - Doubling wire cross-sectional area halves resistance ($R \\propto 1/A$).
3. **Resistor Combinations:**
   - **Series:** $R_s = R_1 + R_2 + \\dots$ (Equivalent resistance is greater than the largest individual resistor).
   - **Parallel:** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ (Equivalent resistance is smaller than the smallest individual resistor).
4. **Joule's Heating Law:**
   $$H = I^2 R t = \\frac{V^2}{R} t$$
5. **Electric Power:**
   $$P = VI = I^2 R = \\frac{V^2}{R}$$`,
    definitions: [
      'Ohm\'s Law: The electric current flowing through a metallic conductor is directly proportional to the potential difference across its terminals, provided temperature remains constant.',
      'Resistivity: The intrinsic electrical resistance of a conductor of unit length and unit cross-sectional area.'
    ],
    formulas: [
      { name: 'Ohm\'s Law', formula: 'V = I R', explanation: 'Fundamental relation between voltage, current, and resistance.', units: 'Volts (V)' },
      { name: 'Resistance Geometry Formula', formula: 'R = \\rho \\frac{l}{A}', explanation: 'Calculates resistance from length, area, and material resistivity.', units: 'Ohms (Ω)' },
      { name: 'Parallel Resistors', formula: '\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}', explanation: 'Equivalent resistance of two parallel resistors.', units: 'Ohms (Ω)' }
    ],
    solvedExamples: [
      {
        question: 'An electric lamp of resistance 20 Ω and a conductor of 4 Ω resistance are connected in series to a 6 V battery. Calculate the total circuit resistance and current.',
        solution: 'Total resistance R_s = R_1 + R_2 = 20 + 4 = 24 Ω.\nTotal current I = V / R_s = 6 V / 24 Ω = 0.25 Amperes.',
        keyInsight: 'In series, simply sum resistances to get equivalent circuit resistance.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-p3-01'],
    practiceQuestions: [
      {
        id: 'q-c10-p3-01',
        subject: 'Physics',
        chapterId: 'c10-phys-03',
        chapterTitle: 'Electricity',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?',
        options: ['A) 9 Ω', 'B) 2 Ω', 'C) 18 Ω', 'D) 0.5 Ω'],
        correctAnswer: 'B',
        explanation: '1/R_p = 1/6 + 1/3 = (1 + 2)/6 = 3/6 = 1/2. Therefore R_p = 2 Ω.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-phys-04',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Electromagnetism',
    order: 4,
    title: 'Magnetic Effects of Electric Current',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 10 Electricity',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Magnetic field & magnetic field lines, field due to straight current-carrying conductor, Maxwell\'s Right-Hand Thumb Rule, magnetic field of circular coil and solenoid (electromagnet), force on a current-carrying conductor in a magnetic field ($F = BIl$), Fleming\'s Left-Hand Rule, principle of electric motor, electromagnetic induction (Faraday), Fleming\'s Right-Hand Rule, electric generator principle, and domestic electric circuits (live, neutral, earth wires, short circuit, overloading, earthing safety).',
    introduction: 'In 1820, Hans Christian Oersted discovered that electric current creates a magnetic field. Michael Faraday discovered the reverse in 1831: moving a magnet generates electricity! This reciprocity drives electric motors and national power grids.',
    topics: [
      'Magnetic Field and Field Lines: Continuous closed loops, Density represents field strength, Lines never cross',
      'Magnetic Field due to Straight Conductor and Maxwell’s Right-Hand Thumb Rule',
      'Magnetic Field through a Circular Loop and Solenoid (Acts like an artificial bar magnet)',
      'Force on a Current-Carrying Conductor in Magnetic Field ($F = B I l \\sin\\theta$)',
      'Fleming’s Left-Hand Rule (FBI: Force, Field, Current for Electric Motors)',
      'Electric Motor: Converts Electrical Energy to Mechanical Energy using Commutator Split-Rings',
      'Electromagnetic Induction (Faraday) and Fleming’s Right-Hand Rule for Generators',
      'Domestic Electric Circuits: Live (Red/Brown, 220V), Neutral (Black/Blue, 0V), Earth (Green/Yellow), and Grounding Safety'
    ],
    summaryNotes: `### Core Hand Rules in Electromagnetism:
1. **Maxwell's Right-Hand Thumb Rule:**
   - Thumb points along the direction of current; curled fingers indicate the direction of circular magnetic field lines.
2. **Fleming's Left-Hand Rule (Electric Motors - FBI):**
   - **Thumb:** Motion / Force ($F$).
   - **Forefinger:** Magnetic Field ($B$).
   - **Middle finger:** Current ($I$).
   - Used to predict direction of mechanical thrust on current-carrying conductors in magnetic fields.
3. **Fleming's Right-Hand Rule (Electric Generators):**
   - Predicts direction of **induced current** generated when a conductor moves across a magnetic field.
4. **Domestic Wiring Safety:**
   - **Earth Wire:** Connected to a deep underground copper plate; provides a low-resistance path for stray leakage current, protecting users from electric shocks.`,
    definitions: [
      'Solenoid: A cylindrical coil of many circular turns of insulated copper wire that behaves like a bar magnet when electric current passes through it.',
      'Electromagnetic Induction: The generation of an induced electric current in a closed circuit when the magnetic flux linked with it changes over time.'
    ],
    formulas: [
      { name: 'Magnetic Force Equation', formula: 'F = B I l \\sin\\theta', explanation: 'Thrust force on conductor of length l carrying current I in magnetic field B.', units: 'Newtons (N)' }
    ],
    solvedExamples: [
      {
        question: 'An electron enters a magnetic field at right angles to it. The direction of force acting on the electron will be in what direction?',
        solution: 'Apply Fleming\'s Left-Hand Rule. Remember: Current direction is conventionally taken as opposite to electron motion. Align forefinger with magnetic field and middle finger opposite to electron direction; the extended thumb indicates the resulting mechanical force direction.',
        keyInsight: 'Current direction is always opposite to the direction of moving negative electrons.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c10-p4-01'],
    practiceQuestions: [
      {
        id: 'q-c10-p4-01',
        subject: 'Physics',
        chapterId: 'c10-phys-04',
        chapterTitle: 'Magnetic Effects of Electric Current',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the function of the split-ring commutator in an electric motor?',
        options: ['A) To increase magnetic strength', 'B) To reverse the direction of current in the coil every half rotation', 'C) To generate electricity', 'D) To cool the motor'],
        correctAnswer: 'B',
        explanation: 'The split-ring commutator reverses the direction of current in the armature coil every half turn, ensuring that the motor continues rotating continuously in the same direction.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-phys-05',
    subject: 'Physics',
    preparationGoal: 'Both',
    category: 'Energy Systems & Nuclear Physics',
    order: 5,
    title: 'Sources of Energy & Heat Dissipation',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'Basic priority',
    prerequisite: 'Class 9 Work and Energy',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Characteristics of a good source of energy, conventional sources (fossil fuels, thermal and hydro power plants, biomass & dome-type biogas plant, wind energy), non-conventional sources (solar cells, silicon photovoltaic panels, tidal, wave, and ocean thermal energy - OTEC, geothermal energy), nuclear energy (fission of Uranium-235: $E = \\Delta m c^2$, nuclear fusion in the Sun), and environmental consequences of energy harvesting.',
    introduction: 'Energy can neither be created nor destroyed, but high-grade usable energy degrades continuously into non-usable thermal dissipation. Transitioning from polluting fossil fuels to solar, wind, and nuclear fusion is humanity\'s great technological challenge.',
    topics: [
      'What Makes a Good Fuel? High calorific value, low smoke, safe transport, controllable combustion',
      'Conventional Energy: Thermal Power Plants and Hydroelectric Dams (Potential energy $\\rightarrow$ Electricity)',
      'Biomass Energy: Fixed Dome Biogas (Gobar Gas) Plant producing Methane ($75\\%$) and slurry manure',
      'Wind Energy: Windmills requiring minimum wind speed of $15\\text{ km/h}$ and wind farms',
      'Solar Energy: Solar Cookers, Solar Water Heaters, Photovoltaic Solar Cells (Silicon semiconductor $0.5 - 1.0\\text{ V}$)',
      'Ocean Energy: Tidal Energy, Wave Energy, and Ocean Thermal Energy Conversion (OTEC, $\\Delta T \\ge 20^\\circ\\text{C}$)',
      'Geothermal Energy: Underground magma steam chambers',
      'Nuclear Energy: Nuclear Fission ($^{235}U$) and Nuclear Fusion ($4\\,^1H \\rightarrow \\,^4He$), Einstein’s mass-energy equivalence ($E = mc^2$)'
    ],
    summaryNotes: `### Core Energy System Equations:
1. **Einstein's Mass-Energy Equivalence:**
   $$E = \\Delta m \\cdot c^2$$
   - A microscopic loss of mass ($\\Delta m$) in nuclear fission releases massive energy because $c^2 = (3 \\times 10^8\\text{ m/s})^2 = 9 \\times 10^{16}\\text{ m}^2/\\text{s}^2$. Fission of 1 atom of Uranium produces **10 million times** more energy than burning 1 atom of carbon!
2. **OTEC Criterion:**
   - Ocean Thermal Energy Conversion requires a temperature difference of at least **$20^\\circ\\text{C}$** between surface warm water and deep cold water at $1000\\text{ m}$.
3. **Biogas Composition:**
   - Contains up to **$75\\%$ Methane ($CH_4$)**, burns without soot, leaves no ash, and the remaining spent slurry is rich in nitrogen and phosphorus fertilizer.`,
    definitions: [
      'Nuclear Fission: A nuclear reaction in which the heavy nucleus of an atom (such as Uranium-235) splits into lighter nuclei accompanied by a massive release of energy.',
      'Photovoltaic Effect: The generation of electrical voltage in a semiconductor material when exposed to sunlight.'
    ],
    formulas: [
      { name: 'Mass-Energy Equivalence', formula: 'E = \\Delta m \\cdot c^2', explanation: 'Relates mass defect to released nuclear energy.', units: 'Joules (J)' }
    ],
    solvedExamples: [
      {
        question: 'Calculate the energy released in Joules if 1 milligram (10⁻⁶ kg) of mass is completely converted into energy in a nuclear reaction.',
        solution: 'm = 10⁻⁶ kg, c = 3 * 10⁸ m/s.\nE = m * c² = (10⁻⁶ kg) * (3 * 10⁸ m/s)² = 10⁻⁶ * 9 * 10¹⁶ = 9 * 10¹⁰ Joules (90 Gigajoules!).',
        keyInsight: 'Even a microscopic milligram mass converts to immense energy due to the c² factor.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-p5-01'],
    practiceQuestions: [
      {
        id: 'q-c10-p5-01',
        subject: 'Physics',
        chapterId: 'c10-phys-05',
        chapterTitle: 'Sources of Energy & Heat Dissipation',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the minimum wind speed required for a commercial wind generator to produce electricity efficiently?',
        options: ['A) 5 km/h', 'B) 15 km/h', 'C) 30 km/h', 'D) 50 km/h'],
        correctAnswer: 'B',
        explanation: 'Wind generators require a minimum steady wind speed of about 15 km/h to maintain turbine rotation speed and output power.',
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
    id: 'c10-chem-01',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Chemical Reactions & Stoichiometry',
    order: 1,
    title: 'Chemical Reactions and Equations',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Atoms and Molecules',
    totalConcepts: 7,
    durationHours: 5.0,
    description: 'Chemical equation writing and balancing (law of conservation of mass), types of chemical reactions: combination, decomposition (thermal, electrolytic, photolytic), displacement, double displacement (precipitation), redox reactions (oxidation, reduction, oxidizing agent, reducing agent), exothermic and endothermic reactions, corrosion, and rancidity.',
    introduction: 'When shiny silver jewellery turns black or a cut apple browns, chemical bonds are rearranging. Mastering chemical equation balancing and identifying redox electron transfers is the foundation of chemistry.',
    topics: [
      'Chemical Equations: Word equations, Skeleton equations, Balancing equations',
      'Types of Reactions: Combination Reactions ($CaO + H_2O \\rightarrow Ca(OH)_2 + \\text{Heat}$)',
      'Decomposition Reactions: Thermal ($FeSO_4, CaCO_3, Pb(NO_3)_2$), Electrolytic (Water), Photolytic ($2AgCl \\xrightarrow{Sunlight} 2Ag + Cl_2$)',
      'Displacement Reactions: Reactivity series ($Zn + CuSO_4 \\rightarrow ZnSO_4 + Cu$)',
      'Double Displacement Reactions & Precipitation ($Na_2SO_4 + BaCl_2 \\rightarrow BaSO_4\\downarrow + 2NaCl$)',
      'Redox Reactions: Oxidation (Gain of Oxygen / Loss of Electrons) and Reduction (Loss of Oxygen / Gain of Electrons)',
      'Everyday Effects of Oxidation: Corrosion of metals and Rancidity of fats/oils (Antioxidants, Nitrogen flushing)'
    ],
    summaryNotes: `### Core Chemical Demonstrations:
1. **Slaking of Lime:**
   $$CaO \\text{ (Quicklime)} + H_2O \\longrightarrow Ca(OH)_2 \\text{ (Slaked lime)} + \\Delta Q \\quad \\text{(Highly Exothermic)}$$
2. **Thermal Decomposition of Lead Nitrate:**
   $$2Pb(NO_3)_2(s) \\xrightarrow{\\Delta} 2PbO(s) \\text{ (Yellow)} + 4NO_2(g) \\text{ (Brown fumes)} + O_2(g)$$
3. **Photolytic Decomposition (Black & White Photography):**
   $$2AgCl(s) \\text{ (White)} \\xrightarrow{Sunlight} 2Ag(s) \\text{ (Grey)} + Cl_2(g)$$
4. **Redox Example:**
   $$CuO + H_2 \\xrightarrow{\\Delta} Cu + H_2O$$
   - $CuO$ loses Oxygen $\\implies$ **Reduced** ($CuO$ is Oxidizing Agent).
   - $H_2$ gains Oxygen $\\implies$ **Oxidized** ($H_2$ is Reducing Agent).`,
    definitions: [
      'Precipitation Reaction: Any chemical reaction that produces an insoluble solid compound (precipitate) that separates from the liquid solution.',
      'Redox Reaction: A chemical reaction in which oxidation and reduction take place simultaneously.'
    ],
    formulas: [
      { name: 'Redox Equation', formula: '\\text{Oxidized: Loss of } e^-; \\quad \\text{Reduced: Gain of } e^-', explanation: 'Electronic concept of oxidation and reduction (OIL RIG).', units: 'Electron transfer' }
    ],
    solvedExamples: [
      {
        question: 'Identify the substances that are oxidized and reduced in the following reaction: 4Na(s) + O₂(g) → 2Na₂O(s).',
        solution: 'Sodium (Na) gains oxygen to form Na₂O, so Na is oxidized. Oxygen (O₂) is reduced as it gains electrons from sodium to form oxide ions (O²⁻). Sodium acts as the reducing agent, and oxygen acts as the oxidizing agent.',
        keyInsight: 'Gain of oxygen or loss of electrons is oxidation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-c1-01'],
    practiceQuestions: [
      {
        id: 'q-c10-c1-01',
        subject: 'Chemistry',
        chapterId: 'c10-chem-01',
        chapterTitle: 'Chemical Reactions and Equations',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'When white silver chloride (AgCl) is exposed to sunlight for a long time, it turns grey due to:',
        options: ['A) Formation of silver by decomposition of silver chloride', 'B) Sublimation of silver chloride', 'C) Oxidation of silver chloride', 'D) Evolution of chlorine gas only'],
        correctAnswer: 'A',
        explanation: 'Sunlight triggers photolytic decomposition: 2AgCl(s) → 2Ag(s) [grey silver metal] + Cl₂(g).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-chem-02',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Acids, Bases & Salts',
    order: 2,
    title: 'Acids, Bases and Salts',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Chemical Reactions and Equations',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Chemical properties of acids and bases, reaction with metals, metal carbonates and hydrogencarbonates, neutralization, pH scale ($\\text{pH} = -\\log[H^+]$), importance of pH in everyday life, chemicals from common salt: Sodium Hydroxide (Chlor-alkali process), Bleaching Powder ($CaOCl_2$), Baking Soda ($NaHCO_3$), Washing Soda ($Na_2CO_3\\cdot 10H_2O$), Plaster of Paris ($CaSO_4\\cdot \\frac{1}{2}H_2O$), and water of crystallization.',
    introduction: 'Our stomach secretes hydrochloric acid to digest food, but excess acid causes painful heartburn. The logarithmic pH scale quantifies acidity and basicity with mathematical precision.',
    topics: [
      'Chemical Reactions of Acids and Bases with Metals ($H_2$ gas evolution with pop sound)',
      'Reaction of Acids with Metal Carbonates and Hydrogencarbonates ($CO_2$ turns limewater milky)',
      'Neutralization: Acid + Base → Salt + Water',
      'The pH Scale: Scale from 0 (Strong Acid) to 7 (Neutral) to 14 (Strong Base)',
      'Importance of pH: Digestive system, Tooth decay (pH < 5.5), Self-defense by animals and plants (Stinging nettle / Formic acid)',
      'Industrial Chemicals: Chlor-Alkali Process ($2NaCl + 2H_2O \\rightarrow 2NaOH + Cl_2 + H_2$)',
      'Bleaching Powder ($CaOCl_2$), Baking Soda ($NaHCO_3$), Washing Soda ($Na_2CO_3\\cdot 10H_2O$)',
      'Plaster of Paris ($CaSO_4\\cdot \\frac{1}{2}H_2O$) and Water of Crystallization'
    ],
    summaryNotes: `### Core Salt Manufacturing Reactions:
1. **Chlor-Alkali Process:**
   $$2NaCl(aq) + 2H_2O(l) \\xrightarrow{\\text{Electricity}} 2NaOH(aq) + Cl_2(g) \\text{ [Anode]} + H_2(g) \\text{ [Cathode]}$$
2. **Bleaching Powder:**
   $$Ca(OH)_2 + Cl_2 \\longrightarrow CaOCl_2 + H_2O$$
3. **Baking Soda (Sodium Hydrogencarbonate):**
   $$NaCl + H_2O + CO_2 + NH_3 \\longrightarrow NH_4Cl + NaHCO_3$$
   - Heating baking soda decomposes it, releasing $CO_2$ that makes cakes soft and spongy:
     $$2NaHCO_3 \\xrightarrow{\\Delta} Na_2CO_3 + H_2O + CO_2\\uparrow$$
4. **Plaster of Paris (POP):**
   $$CaSO_4\\cdot 2H_2O \\text{ (Gypsum)} \\xrightarrow{373\\text{ K}} CaSO_4\\cdot \\frac{1}{2}H_2O \\text{ (POP)} + 1\\frac{1}{2}H_2O$$`,
    definitions: [
      'pH: The negative decimal logarithm of the hydrogen ion concentration in moles per liter: pH = -log₁₀[H⁺].',
      'Water of Crystallization: The fixed number of water molecules chemically bonded in one formula unit of a salt in its crystalline state.'
    ],
    formulas: [
      { name: 'pH Definition', formula: '\\text{pH} = -\\log_{10}[H^+]', explanation: 'Hydrogen ion concentration logarithmic index.', units: 'Scale 0 to 14' }
    ],
    solvedExamples: [
      {
        question: 'Why does tooth enamel begin to corrode when the pH of the mouth falls below 5.5?',
        solution: 'Tooth enamel is made of calcium hydroxyapatite (a crystalline form of calcium phosphate), the hardest substance in the human body. Bacteria in the mouth ferment leftover food sugars into organic acids. When pH drops below 5.5, the acidic environment dissolves and corrodes the mineral enamel, causing dental cavities.',
        keyInsight: 'Acidic mouth pH below 5.5 corrodes calcium phosphate enamel.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-c2-01'],
    practiceQuestions: [
      {
        id: 'q-c10-c2-01',
        subject: 'Chemistry',
        chapterId: 'c10-chem-02',
        chapterTitle: 'Acids, Bases and Salts',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the chemical formula of Plaster of Paris?',
        options: ['A) CaSO₄ · 2H₂O', 'B) CaSO₄ · ½H₂O', 'C) CaSO₄ · H₂O', 'D) 2CaSO₄ · H₂O'],
        correctAnswer: 'B',
        explanation: 'Plaster of Paris is calcium sulphate hemihydrate, with chemical formula CaSO₄ · ½H₂O.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-chem-03',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Metallurgy & Inorganic Chemistry',
    order: 3,
    title: 'Metals and Non-Metals',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Structure of the Atom',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Physical & chemical properties of metals and non-metals, reactivity series, formation and properties of ionic compounds (electron transfer in NaCl, MgCl₂), occurrence of metals, minerals vs ores, basic metallurgical processes: concentration of ores, roasting vs calcination, reduction of oxides (smelting with carbon, thermite reaction), electrolytic refining of copper, corrosion and prevention (galvanizing, alloying: steel, stainless steel, brass, bronze, solder, amalgam).',
    introduction: 'Metals rarely exist in nature as pure elements; most are locked in geological minerals as oxides, sulphides, or carbonates. Metallurgy is the industrial science of extracting pure metals from ores and creating high-performance alloys.',
    topics: [
      'Chemical Properties of Metals: Reaction with Air (Amphoteric oxides: $Al_2O_3, ZnO$), Water, and Dilute Acids',
      'The Reactivity Series of Metals and Hydrogen displacement',
      'Formation of Ionic Compounds: Electron transfer diagrams and Properties (High melting points, brittleness, electrical conduction in liquid state)',
      'Occurrence of Metals: Minerals, Ores, and Gangue',
      'Extraction of Moderately Reactive Metals: Calcination (Carbonate ores in absence of air) vs Roasting (Sulphide ores in excess air)',
      'Thermite Process: Reduction of metal oxides with aluminium powder ($Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3 + \\text{Heat}$ for railway tracks)',
      'Electrolytic Refining of Copper: Pure copper cathode, Impure copper anode, Anode mud',
      'Alloying: Brass ($Cu+Zn$), Bronze ($Cu+Sn$), Solder ($Pb+Sn$, low melting point), Stainless Steel ($Fe+C+Ni+Cr$)'
    ],
    summaryNotes: `### Core Metallurgical Reactions:
1. **Roasting (Sulphide Ores $\\rightarrow$ Excess Air):**
   $$2ZnS + 3O_2 \\xrightarrow{\\Delta} 2ZnO + 2SO_2\\uparrow$$
2. **Calcination (Carbonate Ores $\\rightarrow$ Limited / No Air):**
   $$ZnCO_3 \\xrightarrow{\\Delta} ZnO + CO_2\\uparrow$$
3. **Reduction with Carbon:**
   $$ZnO + C \\longrightarrow Zn + CO\\uparrow$$
4. **Thermite Reaction (Highly Exothermic, Produces Molten Iron):**
   $$Fe_2O_3(s) + 2Al(s) \\longrightarrow 2Fe(l) + Al_2O_3(s) + \\text{Tremendous Heat}$$
   - Used for welding broken railway tracks in remote locations!
5. **Alloys:**
   - **Stainless Steel:** Iron + Carbon + Nickel + Chromium (Resists rusting completely).
   - **Amalgam:** Any alloy containing **Mercury** ($Hg$).`,
    definitions: [
      'Amphoteric Oxide: A metal oxide that reacts with both acids and bases to produce salt and water (e.g., Al₂O₃, ZnO).',
      'Alloy: A homogeneous solid mixture of two or more metals, or a metal and a non-metal.'
    ],
    formulas: [
      { name: 'Thermite Reaction', formula: 'Fe_2O_3 + 2Al \\rightarrow 2Fe(l) + Al_2O_3 + \\Delta Q', explanation: 'Exothermic reduction producing molten metallic iron.', units: 'Thermochemistry' }
    ],
    solvedExamples: [
      {
        question: 'Differentiate between roasting and calcination in metallurgy with balanced chemical equations.',
        solution: '1. Roasting: Heating sulphide ores strongly below their melting point in the presence of excess air. Example: 2ZnS + 3O₂ → 2ZnO + 2SO₂.\n2. Calcination: Heating carbonate or hydrated ores strongly in the absence or limited supply of air. Example: ZnCO₃ → ZnO + CO₂.',
        keyInsight: 'Roasting uses excess air for sulphides; calcination uses limited air for carbonates.',
        difficulty: 'intermediate'
      }
    ],
    quizQuestionIds: ['q-c10-c3-01'],
    practiceQuestions: [
      {
        id: 'q-c10-c3-01',
        subject: 'Chemistry',
        chapterId: 'c10-chem-03',
        chapterTitle: 'Metals and Non-Metals',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Aluminium oxide (Al₂O₃) reacts with both hydrochloric acid and sodium hydroxide. Such an oxide is called:',
        options: ['A) Acidic oxide', 'B) Basic oxide', 'C) Amphoteric oxide', 'D) Neutral oxide'],
        correctAnswer: 'C',
        explanation: 'Oxides like Al₂O₃ and ZnO that exhibit both acidic and basic behaviors by neutralizing acids and bases are classified as amphoteric oxides.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-chem-04',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Organic Chemistry',
    order: 4,
    title: 'Carbon and Its Compounds',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Structure of the Atom',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'Covalent bonding in carbon, tetravalency and catenation, saturated vs unsaturated hydrocarbons (alkanes, alkenes, alkynes), structural isomerism, functional groups (halogens, alcohols, aldehydes, ketones, carboxylic acids), homologous series, IUPAC nomenclature, combustion, oxidation, addition & substitution reactions, properties of Ethanol and Ethanoic acid (esterification & saponification), and cleansing action of soaps (micelle formation).',
    introduction: 'Carbon forms more chemical compounds than all other elements combined. Because of its tetravalency and catenation (ability to form strong carbon-carbon chains and rings), carbon is the architectural backbone of life and synthetic polymers.',
    topics: [
      'Covalent Bonding in Carbon: Tetravalency ($2, 4$) and Catenation',
      'Saturated Hydrocarbons (Alkanes: $C_n H_{2n+2}$) vs Unsaturated Hydrocarbons (Alkenes: $C_n H_{2n}$, Alkynes: $C_n H_{2n-2}$)',
      'Chains, Branches, Rings, and Structural Isomers of Butane ($C_4H_{10}$)',
      'Functional Groups: Halo (-Cl, -Br), Alcohol (-OH), Aldehyde (-CHO), Ketone (>C=O), Carboxylic Acid (-COOH)',
      'Homologous Series: Successive members differ by $-\\text{CH}_2-$ and $14\\text{ u}$ in molar mass',
      'Chemical Properties: Combustion, Oxidation ($KMnO_4$), Addition reaction (Hydrogenation of vegetable oils), Substitution reaction (Methane chlorination)',
      'Ethanol ($C_2H_5OH$) and Ethanoic Acid ($CH_3COOH$): Esterification and Saponification',
      'Soaps and Synthetic Detergents: Hydrophilic ionic head vs Hydrophobic hydrocarbon tail and Micelle formation'
    ],
    summaryNotes: `### Core Organic Chemistry Reactions:
1. **General Formulas:**
   - Alkanes: $C_n H_{2n+2}$
   - Alkenes: $C_n H_{2n}$
   - Alkynes: $C_n H_{2n-2}$
2. **Esterification (Sweet Fruity Smell):**
   $$CH_3COOH \\text{ (Ethanoic acid)} + C_2H_5OH \\text{ (Ethanol)} \\xrightarrow{\\text{Conc. } H_2SO_4} CH_3COOC_2H_5 \\text{ (Ethyl ethanoate)} + H_2O$$
3. **Saponification (Soap Preparation):**
   $$CH_3COOC_2H_5 + NaOH \\longrightarrow CH_3COONa \\text{ (Sodium acetate soap)} + C_2H_5OH$$
4. **Cleansing Action of Soap:**
   - Soap molecules form spherical clusters called **micelles** in water.
   - The hydrophobic hydrocarbon tails dissolve in the greasy dirt droplet at the center, while the hydrophilic ionic heads point outward into water. Agitation lifts the micelle into water as an emulsion.`,
    definitions: [
      'Catenation: The unique ability of carbon atoms to form stable covalent bonds with other carbon atoms, resulting in large chains, branched networks, and rings.',
      'Homologous Series: A family of organic compounds with the same functional group and similar chemical properties where successive members differ by a -CH₂- unit.'
    ],
    formulas: [
      { name: 'Esterification Equilibrium', formula: 'RCOOH + R\'OH \\xrightarrow{H^+} RCOOR\' + H_2O', explanation: 'Formation of sweet-smelling esters.', units: 'Organic reaction' }
    ],
    solvedExamples: [
      {
        question: 'Write the molecular formula and draw the two structural isomers of Butane (C₄H₁₀).',
        solution: 'Butane has molecular formula C₄H₁₀. It forms two structural isomers:\n1. n-Butane (Straight chain): CH₃-CH₂-CH₂-CH₃\n2. Isobutane (2-Methylpropane, branched chain): CH₃-CH(CH₃)-CH₃.',
        keyInsight: 'Isomers have identical molecular formula but different structural arrangements.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-c4-01'],
    practiceQuestions: [
      {
        id: 'q-c10-c4-01',
        subject: 'Chemistry',
        chapterId: 'c10-chem-04',
        chapterTitle: 'Carbon and Its Compounds',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which functional group is present in the compound Propanal (CH₃CH₂CHO)?',
        options: ['A) Alcohol', 'B) Aldehyde', 'C) Ketone', 'D) Carboxylic acid'],
        correctAnswer: 'B',
        explanation: 'The suffix "-al" and the terminal -CHO group identify the compound as an aldehyde.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-chem-05',
    subject: 'Chemistry',
    preparationGoal: 'Both',
    category: 'Periodic Classification',
    order: 5,
    title: 'Periodic Classification of Elements',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Structure of the Atom',
    totalConcepts: 6,
    durationHours: 5.0,
    description: 'Early classification attempts: Dobereiner\'s Triads, Newlands\' Law of Octaves, Mendeleev’s Periodic Table (achievements, gaps for predicted elements: Eka-boron, Eka-aluminium, Eka-silicon, and anomalies), Modern Periodic Law (Henry Moseley, 1913), structure of Modern Periodic Table (18 groups, 7 periods), and periodic trends in properties (valency, atomic radius, metallic/non-metallic character, electronegativity across periods and down groups).',
    introduction: 'In 1869, Dmitri Mendeleev organized elements by atomic mass and predicted the properties of unknown elements like Germanium decades before their discovery! Modern periodic law bases classification on atomic number, revealing the electronic periodicity of nature.',
    topics: [
      'Early Attempts: Dobereiner\'s Triads (Arithmetic mean atomic mass) and Newlands\' Law of Octaves',
      'Mendeleev\'s Periodic Table: Periodic Law based on Atomic Mass',
      'Achievements of Mendeleev: Left gaps for undiscovered elements (Eka-Aluminium $\\rightarrow$ Gallium, Eka-Silicon $\\rightarrow$ Germanium)',
      'Anomalies of Mendeleev: Position of Hydrogen, Anomalous atomic mass pairs ($Co-Ni$), Isotopes placement',
      'The Modern Periodic Table (Henry Moseley, 1913): Properties are a periodic function of **Atomic Number ($Z$)**',
      'Structure of Modern Periodic Table: 18 Vertical Columns (Groups) and 7 Horizontal Rows (Periods)',
      'Periodic Trends Across a Period (Left to Right): Valency increases then decreases, Atomic radius decreases, Metallic character decreases, Electronegativity increases',
      'Periodic Trends Down a Group (Top to Bottom): Valency remains constant, Atomic radius increases, Metallic character increases, Electropositivity increases'
    ],
    summaryNotes: `### Core Periodic Trends Summary:
| Property | Across a Period (Left $\\rightarrow$ Right) | Down a Group (Top $\\rightarrow$ Bottom) |
| :--- | :--- | :--- |
| **Valency** | Increases $1 \\rightarrow 4$, then drops to $0$ | **Remains constant** (same valence electrons) |
| **Atomic Radius** | **Decreases** (Higher effective nuclear charge pulls electrons closer) | **Increases** (New electronic shells added) |
| **Metallic Character** | **Decreases** (Tendency to lose electrons drops) | **Increases** (Electrons farther from nucleus, easily lost) |
| **Non-Metallic Character** | **Increases** (Electronegativity increases) | **Decreases** |
| **Electronegativity** | **Increases** (Fluorine is most electronegative element) | **Decreases** |`,
    definitions: [
      'Modern Periodic Law: The physical and chemical properties of elements are periodic functions of their atomic numbers.',
      'Electronegativity: The relative tendency of an atom in a molecule to attract a shared pair of electrons towards itself.'
    ],
    formulas: [
      { name: 'Moseley\'s Law', formula: '\\sqrt{\\nu} = a(Z - b)', explanation: 'X-ray spectral frequency relates directly to atomic number Z.', units: 'Atomic physics' }
    ],
    solvedExamples: [
      {
        question: 'Why does the atomic radius decrease as we move from left to right across a period in the Modern Periodic Table?',
        solution: 'Across a period, electrons enter the same principal energy shell, but the positive nuclear charge (number of protons) increases by one unit for each successive element. The stronger positive pull of the nucleus draws the electron cloud closer, shrinking the atomic radius.',
        keyInsight: 'Increasing nuclear charge pulls the same valence shell inward.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-c5-01'],
    practiceQuestions: [
      {
        id: 'q-c10-c5-01',
        subject: 'Chemistry',
        chapterId: 'c10-chem-05',
        chapterTitle: 'Periodic Classification of Elements',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'On moving down a group in the Modern Periodic Table, the metallic character of elements:',
        options: ['A) Decreases', 'B) Increases', 'C) Remains unchanged', 'D) First decreases then increases'],
        correctAnswer: 'B',
        explanation: 'Down a group, additional electron shells increase atomic size, making valence electrons more easily lost. Hence, metallic character increases.',
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
    id: 'c10-math-01',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Number Theory',
    order: 1,
    title: 'Real Numbers',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Number Systems',
    totalConcepts: 6,
    durationHours: 4.5,
    description: 'Euclid’s Division Lemma & Algorithm ($a = bq + r, 0 \\le r < b$), Fundamental Theorem of Arithmetic (unique prime factorization), HCF and LCM applications, proving irrationality of $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$ by contradiction, and decimal representation of rational numbers (terminating if $q = 2^n 5^m$).',
    introduction: 'The Fundamental Theorem of Arithmetic states that every composite integer greater than 1 can be uniquely factored into prime numbers. Euclid\'s division algorithm allows computing the greatest common divisor of huge numbers with algorithmic elegance.',
    topics: [
      'Euclid’s Division Lemma: Given positive integers $a, b$, there exist unique $q, r$ such that $a = bq + r$ ($0 \\le r < b$)',
      'Euclid’s Division Algorithm for Finding HCF of Two Large Numbers',
      'The Fundamental Theorem of Arithmetic: Unique Prime Factorization of Composite Numbers',
      'HCF and LCM by Prime Factorization Method ($a \\times b = \\text{HCF} \\times \\text{LCM}$)',
      'Proving Irrationality of $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$ and $a + b\\sqrt{p}$ by Contradiction Method',
      'Terminating vs Non-Terminating Repeating Decimals: Denominator factor form $2^n 5^m$'
    ],
    summaryNotes: `### Core Number Theorems:
1. **Fundamental Theorem of Arithmetic:**
   - Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.
2. **Irrationality Proof Strategy ($\\\sqrt{2}$):**
   - Assume $\\sqrt{2} = p/q$ where $p, q$ are co-prime integers ($q \\ne 0$).
   - $2q^2 = p^2 \\implies 2$ divides $p^2 \\implies 2$ divides $p$.
   - Let $p = 2k \\implies 2q^2 = 4k^2 \\implies q^2 = 2k^2 \\implies 2$ divides $q$.
   - Both $p$ and $q$ have common factor 2, which contradicts the co-prime assumption. Thus $\\sqrt{2}$ is irrational!
3. **Terminating Decimals Criterion:**
   - A rational number $p/q$ in simplest form has a terminating decimal expansion if and only if the prime factorization of $q$ is of the form **$2^n 5^m$** (where $n, m$ are non-negative integers).`,
    definitions: [
      'Fundamental Theorem of Arithmetic: Every integer greater than 1 is either a prime itself or can be represented as the unique product of prime numbers.',
      'Euclid\'s Division Lemma: For any two positive integers a and b, there exist unique integers q and r such that a = bq + r with 0 ≤ r < b.'
    ],
    formulas: [
      { name: 'Euclid\'s Division Lemma', formula: 'a = bq + r \\quad (0 \\le r < b)', explanation: 'Division algorithm formulation.', units: 'Integer' },
      { name: 'Terminating Decimal Condition', formula: 'q = 2^n \\cdot 5^m', explanation: 'Condition for rational fraction p/q to have terminating decimal.', units: 'Condition' }
    ],
    solvedExamples: [
      {
        question: 'Without actual division, determine whether 13 / 3125 has a terminating or non-terminating repeating decimal expansion.',
        solution: 'Factorize denominator: 3125 = 5⁵ = 2⁰ * 5⁵.\nSince the prime factorization of the denominator is strictly of the form 2ⁿ 5ᵐ (with n = 0, m = 5), the fraction has a terminating decimal expansion.',
        keyInsight: 'Check if the denominator contains only prime factors 2 and 5.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-m1-01'],
    practiceQuestions: [
      {
        id: 'q-c10-m1-01',
        subject: 'Mathematics',
        chapterId: 'c10-math-01',
        chapterTitle: 'Real Numbers',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'If the HCF of two numbers 306 and 657 is 9, what is their LCM?',
        options: ['A) 22,338', 'B) 11,169', 'C) 2,238', 'D) 44,676'],
        correctAnswer: 'A',
        explanation: 'LCM = (Product of numbers) / HCF = (306 * 657) / 9 = 34 * 657 = 22,338.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-math-02',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 2,
    title: 'Polynomials & Quadratic Equations',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Polynomials',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Zeroes of quadratic polynomials, geometric meaning (parabola x-intercepts), relation between zeroes and coefficients ($\\alpha+\\beta = -b/a, \\alpha\\beta = c/a$), standard quadratic equation $ax^2 + bx + c = 0$, solving by factorization and Sridharacharya Quadratic Formula ($x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$), discriminant ($D = b^2 - 4ac$), and nature of roots.',
    introduction: 'Quadratic equations govern trajectories in physics and parabolic arches in civil engineering. The discriminant $D = b^2 - 4ac$ serves as an analytical litmus test determining whether roots are distinct, equal, or imaginary.',
    topics: [
      'Geometric Meaning of Zeroes: Graph of $y = ax^2 + bx + c$ is a Parabola intersecting x-axis',
      'Relationship between Zeroes and Coefficients of Quadratic: $\\alpha + \\beta = -b/a, \\alpha\\beta = c/a$',
      'Forming Quadratic Polynomial with Given Roots: $k[x^2 - (\\alpha + \\beta)x + \\alpha\\beta]$',
      'Standard Form of Quadratic Equation: $ax^2 + bx + c = 0$ ($a \\ne 0$)',
      'Solving Quadratic Equations by Factorization (Splitting the middle term)',
      'Quadratic Formula (Sridharacharya): $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
      'Nature of Roots via Discriminant $D = b^2 - 4ac$: $D > 0$ (Two distinct real roots), $D = 0$ (Two equal real roots), $D < 0$ (No real roots)',
      'Word Problems on Speeds, Geometry, Pipes and Cisterns'
    ],
    summaryNotes: `### Core Quadratic Formulas:
1. **Sum & Product of Roots:**
   $$\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}$$
2. **Sridharacharya Quadratic Formula:**
   $$x = \\frac{-b \\pm \\sqrt{D}}{2a} \\quad \\text{where } D = b^2 - 4ac$$
3. **Nature of Roots:**
   - **$D > 0$:** Roots are real and distinct (unequal).
   - **$D = 0$:** Roots are real and equal ($x = -b/2a$).
   - **$D < 0$:** Roots are non-real complex conjugates.
   - If $a, b, c \\in \\mathbb{Q}$ and $D$ is a perfect square, roots are **rational**.`,
    definitions: [
      'Discriminant: The algebraic expression D = b² - 4ac in a quadratic equation that determines the character and nature of its roots.',
      'Parabola: The U-shaped plane curve representing the graph of a quadratic polynomial.'
    ],
    formulas: [
      { name: 'Quadratic Formula', formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', explanation: 'Universal solution for quadratic ax² + bx + c = 0.', units: 'Roots' },
      { name: 'Discriminant', formula: 'D = b^2 - 4ac', explanation: 'Criterion for distinct, equal, or complex roots.', units: 'Real number' }
    ],
    solvedExamples: [
      {
        question: 'Find the values of k for which the quadratic equation 2x² + kx + 3 = 0 has two equal real roots.',
        solution: 'For two equal real roots, Discriminant D = 0.\nD = b² - 4ac = k² - 4(2)(3) = k² - 24 = 0 => k² = 24 => k = ±√24 = ±2√6.',
        keyInsight: 'Set D = 0 strictly when equal or coincident roots are specified.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-m2-01'],
    practiceQuestions: [
      {
        id: 'q-c10-m2-01',
        subject: 'Mathematics',
        chapterId: 'c10-math-02',
        chapterTitle: 'Polynomials & Quadratic Equations',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the sum and product of the roots of the quadratic equation 3x² - 5x + 2 = 0?',
        options: ['A) Sum = 5/3, Product = 2/3', 'B) Sum = -5/3, Product = 2/3', 'C) Sum = 5/3, Product = -2/3', 'D) Sum = 2/3, Product = 5/3'],
        correctAnswer: 'A',
        explanation: 'Sum = -b/a = -(-5)/3 = 5/3. Product = c/a = 2/3.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-math-03',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Algebra',
    order: 3,
    title: 'Pair of Linear Equations in Two Variables',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Linear Equations in Two Variables',
    totalConcepts: 6,
    durationHours: 5.0,
    description: 'System of two linear equations ($a_1x + b_1y + c_1 = 0, a_2x + b_2y + c_2 = 0$), geometric interpretations (intersecting, parallel, coincident lines), consistency conditions via coefficient ratios ($a_1/a_2, b_1/b_2, c_1/c_2$), algebraic methods: substitution, elimination, cross-multiplication, and equations reducible to linear form (upstream and downstream boat problems).',
    introduction: 'When two linear conditions constrain two variables simultaneously, we obtain a system of linear equations. Determining whether a unique solution exists, infinitely many exist, or none exist is a core mathematical skill.',
    topics: [
      'General Pair of Linear Equations in Two Variables',
      'Graphical Method of Solution: Intersecting lines, Coincident lines, Parallel lines',
      'Conditions for Consistency: Ratios of Coefficients',
      'Unique Solution (Consistent): $\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$',
      'Infinitely Many Solutions (Dependent / Consistent): $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$',
      'No Solution (Inconsistent): $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$',
      'Algebraic Methods: Method of Substitution and Method of Elimination',
      'Applications: Upstream ($v - u$) and Downstream ($v + u$) Boat Velocity Problems'
    ],
    summaryNotes: `### Consistency Criteria Matrix:
| Lines | Ratios | Graphical Representation | Algebraic Interpretation |
| :--- | :--- | :--- | :--- |
| **Intersecting** | $\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$ | Intersect at one point | **Unique Solution** (Consistent) |
| **Coincident** | $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ | Overlapping identical lines | **Infinitely Many Solutions** (Consistent) |
| **Parallel** | $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$ | Parallel lines never meet | **No Solution** (Inconsistent) |`,
    definitions: [
      'Inconsistent System: A system of linear equations that has no solution because its graphs are parallel lines.',
      'Upstream Velocity: The net speed of a boat moving against water current: v_net = v_boat - v_stream.'
    ],
    formulas: [
      { name: 'Linear Consistency Ratios', formula: '\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2} \\implies \\text{Unique Solution}', explanation: 'Ratio test for non-parallel intersecting lines.', units: 'Condition' }
    ],
    solvedExamples: [
      {
        question: 'Solve the system of equations by elimination: 2x + 3y = 11 and 2x - 4y = -24.',
        solution: 'Subtract second equation from first:\n(2x + 3y) - (2x - 4y) = 11 - (-24)\n7y = 35 => y = 5.\nSubstitute y = 5 into first equation: 2x + 3(5) = 11 => 2x + 15 = 11 => 2x = -4 => x = -2.\nSolution is x = -2, y = 5.',
        keyInsight: 'Subtract equations directly when x-coefficients are already identical.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-m3-01'],
    practiceQuestions: [
      {
        id: 'q-c10-m3-01',
        subject: 'Mathematics',
        chapterId: 'c10-math-03',
        chapterTitle: 'Pair of Linear Equations in Two Variables',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'For what value of k will the equations x + 2y = 5 and 3x + ky = 15 have infinitely many solutions?',
        options: ['A) 2', 'B) 3', 'C) 6', 'D) 5'],
        correctAnswer: 'C',
        explanation: 'For infinitely many solutions: a1/a2 = b1/b2 = c1/c2 => 1/3 = 2/k = 5/15. From 1/3 = 2/k, k = 6.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-math-04',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Trigonometry & Heights and Distances',
    order: 4,
    title: 'Introduction to Trigonometry & Applications',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Triangles & Congruence',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Trigonometric ratios in right-angled triangles ($\\sin, \\cos, \\tan, \\cot, \\sec, \\text{cosec}$), values of ratios for standard angles (0°, 30°, 45°, 60°, 90°), fundamental trigonometric identities ($\\sin^2\\theta + \\cos^2\\theta = 1, 1 + \\tan^2\\theta = \\sec^2\\theta, 1 + \\cot^2\\theta = \\text{cosec}^2\\theta$), and applications of trigonometry (heights and distances, line of sight, angle of elevation, angle of depression).',
    introduction: 'Trigonometry translates angular measures into spatial coordinates. From calculating heights of towering mountain peaks to vector decompositions in physics, trigonometric identities are essential for IIT-JEE Mathematics.',
    topics: [
      'Trigonometric Ratios: Sine, Cosine, Tangent, Cotangent, Secant, Cosecant',
      'Quotient and Reciprocal Relations: $\\tan\\theta = \\sin\\theta / \\cos\\theta, \\cot\\theta = 1/\\tan\\theta$',
      'Standard Values Table for 0°, 30°, 45°, 60°, and 90°',
      'Fundamental Identity 1: $\\sin^2\\theta + \\cos^2\\theta = 1$',
      'Fundamental Identity 2: $1 + \\tan^2\\theta = \\sec^2\\theta \\implies \\sec^2\\theta - \\tan^2\\theta = 1$',
      'Fundamental Identity 3: $1 + \\cot^2\\theta = \\text{cosec}^2\\theta \\implies \\text{cosec}^2\\theta - \\cot^2\\theta = 1$',
      'Heights and Distances: Line of Sight, Angle of Elevation (looking upward), Angle of Depression (looking downward)'
    ],
    summaryNotes: `### Core Trigonometric Values Table:
| Ratio | 0° | 30° | 45° | 60° | 90° |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **$\\sin\\theta$** | $0$ | $1/2$ | $1/\\sqrt{2}$ | $\\sqrt{3}/2$ | $1$ |
| **$\\cos\\theta$** | $1$ | $\\sqrt{3}/2$ | $1/\\sqrt{2}$ | $1/2$ | $0$ |
| **$\\tan\\theta$** | $0$ | $1/\\sqrt{3}$ | $1$ | $\\sqrt{3}$ | Undefined |
### Angle of Elevation vs Depression:
- **Elevation:** Angle between horizontal and line of sight when viewing an object above eye level.
- **Depression:** Angle between horizontal and line of sight when viewing an object below eye level.
- Geometry principle: Angle of depression of ground object from tower equals angle of elevation from ground object to tower top (alternate interior angles)!`,
    definitions: [
      'Angle of Elevation: The angle formed by the line of sight with the horizontal when the point being viewed is above the horizontal line.',
      'Angle of Depression: The angle formed by the line of sight with the horizontal when the point being viewed is below the horizontal line.'
    ],
    formulas: [
      { name: 'Pythagorean Trigonometric Identity', formula: '\\sin^2\\theta + \\cos^2\\theta = 1', explanation: 'Fundamental relation holding for all acute angles theta.', units: 'Identity' },
      { name: 'Height Calculation', formula: 'h = d \\tan\\theta', explanation: 'Vertical height calculated from distance and elevation angle.', units: 'm' }
    ],
    solvedExamples: [
      {
        question: 'A vertical pole stands on level ground. From a point 15 m away from the foot of the pole, the angle of elevation of the top of the pole is 60°. Find the height of the pole.',
        solution: 'Let h be height and d = 15 m.\ntan 60° = Height / Base = h / 15.\n√3 = h / 15 => h = 15√3 meters ≈ 25.98 meters.',
        keyInsight: 'Use tan θ = Opposite / Adjacent for height and distance problems.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-m4-01'],
    practiceQuestions: [
      {
        id: 'q-c10-m4-01',
        subject: 'Mathematics',
        chapterId: 'c10-math-04',
        chapterTitle: 'Introduction to Trigonometry & Applications',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Evaluate the expression: (sin² 30° + cos² 30°):',
        options: ['A) 0', 'B) 1/2', 'C) 1', 'D) 2'],
        correctAnswer: 'C',
        explanation: 'According to the fundamental identity sin²θ + cos²θ = 1 for any angle θ. (Or (1/2)² + (√3/2)² = 1/4 + 3/4 = 1).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-math-05',
    subject: 'Mathematics',
    preparationGoal: 'JEE Foundation',
    category: 'Progressions & Coordinate Geometry',
    order: 5,
    title: 'Arithmetic Progressions & Coordinate Geometry',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Coordinate Geometry',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Arithmetic Progression (AP): first term $a$, common difference $d$, general $n$th term ($a_n = a + (n-1)d$), sum of first $n$ terms ($S_n = \\frac{n}{2}[2a + (n-1)d]$); Coordinate Geometry: distance formula between two points, section formula (internal division), midpoint formula, and area of a triangle in Cartesian plane.',
    introduction: 'Arithmetic progressions model evenly spaced sequences, while coordinate geometry provides algebraic formulas for distance, section ratios, and polygon areas. Both topics are heavily weighted in JEE Main.',
    topics: [
      'Definition of Arithmetic Progression ($a, a+d, a+2d, \\dots$)',
      'nth Term of an AP: $a_n = a + (n - 1)d$',
      'Sum of First n Terms of an AP: $S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[a + l]$',
      'Distance Formula between Two Points $P(x_1, y_1)$ and $Q(x_2, y_2)$: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$',
      'Section Formula for Internal Division in Ratio $m_1 : m_2$: $(\\frac{m_1x_2 + m_2x_1}{m_1 + m_2}, \\frac{m_1y_2 + m_2y_1}{m_1 + m_2})$',
      'Midpoint Formula: $(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2})$',
      'Area of Triangle with Vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ and Collinearity Condition'
    ],
    summaryNotes: `### Core Analytical Formulas:
1. **AP Formulas:**
   $$a_n = a + (n - 1)d$$
   $$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$$
2. **Distance Formula:**
   $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
3. **Section Formula (Internal Ratio $m_1 : m_2$):**
   $$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$$
4. **Collinearity Test:**
   - Three points $A, B, C$ are collinear if and only if the area of $\\triangle ABC = 0$.`,
    definitions: [
      'Arithmetic Progression: A sequence of numbers such that the difference between any two consecutive terms is a constant.',
      'Collinear Points: Three or more points that lie on the exact same straight line in the plane.'
    ],
    formulas: [
      { name: 'AP nth Term Formula', formula: 'a_n = a + (n - 1)d', explanation: 'General term of arithmetic progression.', units: 'Real number' },
      { name: 'Cartesian Distance Formula', formula: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', explanation: 'Straight-line Euclidean distance between two points.', units: 'Distance' }
    ],
    solvedExamples: [
      {
        question: 'Find the distance between the points P(2, 3) and Q(4, 1).',
        solution: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(4 - 2)² + (1 - 3)²] = √[(2)² + (-2)²] = √[4 + 4] = √8 = 2√2 units.',
        keyInsight: 'Apply the Euclidean distance formula directly.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-m5-01'],
    practiceQuestions: [
      {
        id: 'q-c10-m5-01',
        subject: 'Mathematics',
        chapterId: 'c10-math-05',
        chapterTitle: 'Arithmetic Progressions & Coordinate Geometry',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Find the 10th term of the AP: 2, 7, 12, ...',
        options: ['A) 45', 'B) 47', 'C) 49', 'D) 52'],
        correctAnswer: 'B',
        explanation: 'a = 2, d = 7 - 2 = 5. a₁₀ = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = 47.',
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
    id: 'c10-bio-01',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Human & Plant Physiology',
    order: 1,
    title: 'Life Processes',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Class 9 Tissues',
    totalConcepts: 8,
    durationHours: 6.5,
    description: 'What are life processes, autotrophic nutrition (photosynthesis, stomata, light and dark reactions), heterotrophic nutrition (human alimentary canal, enzymes: pepsin, trypsin, lipase, amylase), respiration (aerobic in mitochondria vs anaerobic in yeast and muscles, ATP, human respiratory system: alveoli), transportation in humans (heart anatomy, double circulation, blood pressure: 120/80 mmHg, lymph), transportation in plants (xylem, transpiration pull, phloem translocation), and excretion (structure of nephron, urine formation: filtration, reabsorption, secretion, hemodialysis).',
    introduction: 'The maintenance processes of living organisms must go on even when they are sleeping. Life Processes explores the four master physiological systems sustaining life: Nutrition, Respiration, Circulation, and Excretion.',
    topics: [
      'Photosynthesis Mechanism: Absorption of light by chlorophyll, conversion to chemical energy, reduction of $CO_2$',
      'Stomata and Guard Cell Osmotic Turgor Pressure',
      'Human Digestive System: Salivary Amylase, Stomach $HCl$ & Pepsin, Pancreatic Trypsin & Lipase, Intestinal Villi',
      'Respiration: Glycolysis in cytoplasm, Aerobic oxidation in mitochondria, Anaerobic fermentation, Alveolar gas exchange',
      'Human Circulatory System: 4-Chambered Heart, Double Circulation, Pulmonary vs Systemic circuits, Arteries vs Veins vs Capillaries, Lymphatic fluid',
      'Blood Pressure: Systolic ($120\\text{ mmHg}$) and Diastolic ($80\\text{ mmHg}$) measured with Sphygmomanometer',
      'Plant Transport: Xylem Vessels & Tracheids (Transpiration pull) and Phloem Sieve Tubes (ATP-driven Translocation)',
      'Human Excretory System: Nephron anatomy (Bowman’s capsule, Glomerulus, Tubular reabsorption of glucose/amino acids/salts, Collecting duct)'
    ],
    summaryNotes: `### Four Core Physiological Pillars:
1. **Double Circulation in Humans:**
   - Blood travels through the heart **twice** during each complete body circuit:
     - **Pulmonary Circulation:** Deoxygenated blood from Right Ventricle $\\rightarrow$ Lungs $\\rightarrow$ Oxygenated blood to Left Atrium.
     - **Systemic Circulation:** Oxygenated blood from Left Ventricle $\\rightarrow$ Body tissues $\\rightarrow$ Deoxygenated blood to Right Atrium.
   - Prevents mixing of oxygenated and deoxygenated blood, ensuring high energy efficiency for warm-blooded homeotherms.
2. **Nephron Physiology (Urine Formation):**
   - **Glomerular Ultrafiltration:** High blood pressure forces water, glucose, urea, and salts from glomerulus into Bowman\'s capsule.
   - **Selective Tubular Reabsorption:** Essential glucose, amino acids, and major water are actively reabsorbed along the convoluted tubules.
   - **Tubular Secretion:** Additional wastes secreted into collecting duct to form hypertonic urine.`,
    definitions: [
      'Double Circulation: A circulatory system in which blood passes through the heart twice in one complete cycle of the body (pulmonary and systemic circuits).',
      'Nephron: The basic structural and functional microscopic filtration unit of the mammalian kidney.'
    ],
    formulas: [
      { name: 'Normal Blood Pressure', formula: '120 / 80\\text{ mmHg}', explanation: 'Normal resting systolic over diastolic arterial blood pressure.', units: 'mmHg' }
    ],
    solvedExamples: [
      {
        question: 'Why is double circulation necessary in human beings and birds?',
        solution: 'Humans and birds are warm-blooded (endothermic) organisms that constantly require large amounts of cellular ATP energy to maintain a constant internal body temperature regardless of ambient surroundings. Complete separation of oxygenated and deoxygenated blood through 4-chambered double circulation ensures highly efficient oxygen delivery to body tissues.',
        keyInsight: 'Double circulation provides high oxygen delivery needed for warm-blooded thermoregulation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-b1-01'],
    practiceQuestions: [
      {
        id: 'q-c10-b1-01',
        subject: 'Biology',
        chapterId: 'c10-bio-01',
        chapterTitle: 'Life Processes',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which enzyme present in pancreatic juice is responsible for the digestion of proteins in the small intestine?',
        options: ['A) Salivary amylase', 'B) Pepsin', 'C) Trypsin', 'D) Lipase'],
        correctAnswer: 'C',
        explanation: 'Trypsin is a proteolytic enzyme secreted by the pancreas into the small intestine that digests proteins in an alkaline medium.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-bio-02',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Neurobiology & Endocrinology',
    order: 2,
    title: 'Control and Coordination',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Life Processes',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Nervous system vs endocrine system, neuron structure and electrical synapse, reflex arc (receptor, sensory neuron, relay neuron in spinal cord, motor neuron, effector muscle), anatomy of the human brain (forebrain/cerebrum, midbrain, hindbrain: cerebellum, pons, medulla oblongata), coordination in plants: tropic movements (phototropism, geotropism, hydrotropism, chemotropism) vs nastic movements (touch-me-not plant), plant hormones (Auxins, Gibberellins, Cytokinins, Abscisic Acid), and human endocrine glands & hormones (Pituitary, Thyroid/Thyroxine, Pancreas/Insulin, Adrenal/Adrenaline, Testis/Testosterone, Ovary/Estrogen).',
    introduction: 'When you touch a hot stove, your hand pulls back before your conscious brain even registers pain! Reflex arcs, neurotransmitters across synapses, and endocrine hormones coordinate rapid behavioral reactions and long-term homeostasis.',
    topics: [
      'The Neuron: Cyton, Dendrites (receive signals), Axon (conducts electrical impulse), Synapse (chemical neurotransmitters)',
      'Reflex Action and Reflex Arc (Spinal cord mediation without brain delay)',
      'The Human Brain: Protected by Cranium, Meninges, and Cerebrospinal Fluid (CSF)',
      'Forebrain: Cerebrum (Thinking, memory, sensory interpretation, voluntary motor actions)',
      'Hindbrain: Cerebellum (Balance and body posture), Pons, Medulla Oblongata (Involuntary functions: Heartbeat, breathing, vomiting, blood pressure)',
      'Plant Coordination: Tropic movements (Directional growth: Phototropism, Geotropism, Chemotropism, Hydrotropism) vs Nastic movements (Thigmonasty in *Mimosa pudica*)',
      'Phytohormones: Auxins (Apical dominance & phototropic bending), Gibberellins (Stem elongation), Cytokinins (Cell division in fruits/seeds), Abscisic Acid (Growth inhibitor / Stress hormone)',
      'Human Endocrine System: Hypothalamus, Pituitary (Growth hormone), Thyroid (Thyroxine / Iodine), Pancreas (Insulin / Blood glucose), Adrenal (Adrenaline / Fight or flight)'
    ],
    summaryNotes: `### Core Neuro-Endocrine Functions:
1. **Brain Functional Regions:**
   - **Cerebrum (Forebrain):** Seat of intelligence, consciousness, sensory perception, and voluntary movement.
   - **Cerebellum (Hindbrain):** Coordinates voluntary muscular movements and maintains **equilibrium, balance, and posture** (walking in a straight line, riding a bicycle).
   - **Medulla (Hindbrain):** Controls **involuntary biological reflex centers** (blood pressure, salivation, swallowing, vomiting).
2. **Plant Growth Regulators (Phytohormones):**
   - **Auxin:** Synthesized at shoot tips. Bends shoots towards light (cells on shaded side elongate faster!).
   - **Cytokinin:** Promotes rapid cell division; concentrated in dividing seeds and fruits.
   - **Abscisic Acid (ABA):** Growth **inhibitor**; causes wilting and falling of leaves, closes stomata during drought.
3. **Adrenaline (Emergency Hormone):**
   - Secreted by adrenal glands during fear or fight/flight situations. Increases heartbeat, dilates breathing passages, diverts blood to skeletal muscles.`,
    definitions: [
      'Reflex Arc: The shortest neurological pathway taken by nerve impulses in a rapid, involuntary reflex action.',
      'Synapse: The microscopic functional junction between the axon terminal of one neuron and the dendrite of the next across which neurotransmitters diffuse.'
    ],
    formulas: [
      { name: 'Reflex Arc Sequence', formula: '\\text{Receptor} \\xrightarrow{\\text{Sensory}} \\text{Spinal Cord (Relay)} \\xrightarrow{\\text{Motor}} \\text{Effector Muscle}', explanation: 'Involuntary neural arc bypass sequence.', units: 'Pathway' }
    ],
    solvedExamples: [
      {
        question: 'How do shoot tips bend towards directional sunlight (phototropism)?',
        solution: 'When directional sunlight falls on one side of a plant shoot, the plant hormone auxin diffuses to the shaded side of the shoot. Higher auxin concentration stimulates the cells on the shaded side to grow and elongate faster than cells on the illuminated side. This unequal elongation curves the shoot tip towards the light source.',
        keyInsight: 'Auxin accumulates on the shaded side, stimulating elongation.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-b2-01'],
    practiceQuestions: [
      {
        id: 'q-c10-b2-01',
        subject: 'Biology',
        chapterId: 'c10-bio-02',
        chapterTitle: 'Control and Coordination',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'Which part of the human brain is responsible for maintaining posture and equilibrium of the body?',
        options: ['A) Cerebrum', 'B) Cerebellum', 'C) Medulla', 'D) Pons'],
        correctAnswer: 'B',
        explanation: 'The cerebellum (part of the hindbrain) is responsible for precision of voluntary actions and maintaining bodily posture and balance.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-bio-03',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Reproductive Biology & Embryology',
    order: 3,
    title: 'How Do Organisms Reproduce?',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'Control and Coordination',
    totalConcepts: 7,
    durationHours: 6.0,
    description: 'Importance of reproduction, DNA copying & variations, modes of asexual reproduction (binary fission in Amoeba/Leishmania, multiple fission in Plasmodium, fragmentation in Spirogyra, regeneration in Planaria, budding in Hydra/Yeast, spore formation in Rhizopus, vegetative propagation and tissue culture), sexual reproduction in flowering plants (stamen, carpel, pollination, pollen tube germination, double fertilization, seed formation), human reproductive systems (male & female anatomy), menstrual cycle, fertilization and embryo implantation, and reproductive health & contraception.',
    introduction: 'Reproduction transmits genetic blueprints across generations. Meiotic chromosome recombination produces subtle biological variations that power evolutionary adaptation.',
    topics: [
      'The Blueprint of Life: DNA Copying during Cell Division and the Creation of Genetic Variations',
      'Asexual Reproduction: Binary Fission (Amoeba, Leishmania / Kala-azar), Multiple Fission (Plasmodium malaria)',
      'Regeneration (Planaria, Hydra using specialized regenerative cells) vs Fragmentation',
      'Vegetative Propagation and Micropropagation / Plant Tissue Culture',
      'Sexual Reproduction in Flowering Plants: Bisexual vs Unisexual Flowers, Self vs Cross Pollination',
      'Pollen Tube Germination, Double Fertilization (Zygote + Triploid Endosperm), Seed and Fruit Formation',
      'Human Male Reproductive System: Testes (Scrotum temperature regulation, Spermatogenesis, Testosterone), Vas Deferens, Prostate & Seminal Vesicles',
      'Human Female Reproductive System: Ovaries (Oogenesis, Estrogen & Progesterone), Fallopian Tubes (Site of Fertilization), Uterus (Placenta nutrition)',
      'The Menstrual Cycle (28-day cycle, Ovulation at day 14, Menstruation if unfertilized)',
      'Reproductive Health: STDs (Bacterial: Gonorrhoea, Syphilis; Viral: Warts, HIV-AIDS) and Contraception (Barrier condoms, Hormonal pills, Copper-T IUCD, Surgical Vasectomy & Tubectomy)'
    ],
    summaryNotes: `### Core Reproductive Mechanisms:
1. **Double Fertilization in Angiosperms:**
   - Pollen grain releases two male gametes into the embryo sac:
     - First male gamete + Egg cell ($n$) $\\longrightarrow$ **Diploid Zygote ($2n$)** (develops into embryo).
     - Second male gamete + Two Polar Nuclei ($n+n$) $\\longrightarrow$ **Triploid Endosperm ($3n$)** (nutritive tissue).
   - This unique process is called **Double Fertilization**!
2. **Human Male Reproductive System Adaptations:**
   - Testes are housed outside the abdominal cavity in the **scrotum** because sperm formation requires a temperature **$2 - 2.5^\\circ\\text{C}$ lower** than normal internal body temperature ($37^\\circ\\text{C}$).
3. **The Placenta:**
   - A disc-shaped physiological tissue embedded in the uterine wall providing intimate villous contact between maternal and fetal blood.
   - Supplies glucose and oxygen to the growing embryo and removes metabolic wastes ($CO_2$, urea).`,
    definitions: [
      'Double Fertilization: A distinctive fertilization event in flowering plants in which one male gamete fuses with the egg cell while the second male gamete fuses with the secondary nucleus.',
      'Placenta: A specialized temporary embryonic and maternal organ that facilitates nutrient, gas, and waste exchange between mother and fetus.'
    ],
    formulas: [
      { name: 'Angiosperm Double Fertilization', formula: '\\text{Syngamy } (n+n=2n) + \\text{Triple Fusion } (n+2n=3n)', explanation: 'Formation of diploid embryo and triploid endosperm.', units: 'Cytogenetics' }
    ],
    solvedExamples: [
      {
        question: 'Why are the testes in human males situated outside the abdominal cavity inside the scrotal sac?',
        solution: 'Spermatogenesis (the biological process of sperm production and maturation) requires a temperature 2 to 2.5°C lower than the core human body temperature of 37°C. The scrotal sac functions as an external thermoregulatory pouch maintaining this lower temperature.',
        keyInsight: 'Scrotum keeps testes 2-2.5°C cooler than internal body temperature.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-b3-01'],
    practiceQuestions: [
      {
        id: 'q-c10-b3-01',
        subject: 'Biology',
        chapterId: 'c10-bio-03',
        chapterTitle: 'How Do Organisms Reproduce?',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'In flowering plants, double fertilization results in the formation of an embryo and a nutritive tissue called:',
        options: ['A) Cotyledon', 'B) Endosperm', 'C) Ovule', 'D) Seed coat'],
        correctAnswer: 'B',
        explanation: 'Triple fusion of a male gamete with two polar nuclei produces triploid endosperm (3n), which supplies nutrients to the developing embryo.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-bio-04',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Genetics & Evolution',
    order: 4,
    title: 'Heredity and Evolution',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'High priority',
    prerequisite: 'How Do Organisms Reproduce?',
    totalConcepts: 7,
    durationHours: 5.5,
    description: 'Heredity, accumulated variations across generations, Gregor Johann Mendel’s experiments with garden pea (*Pisum sativum*), Monohybrid cross (Phenotypic ratio 3:1, Genotypic ratio 1:2:1), Dihybrid cross (9:3:3:1 ratio), Law of Segregation, Law of Independent Assortment, expression of traits, chromosomal sex determination in humans (XX vs XY), evolution as speciation, homologous vs analogous organs, and tracing evolutionary relationships through fossils.',
    introduction: 'In the 1860s, Austrian monk Gregor Mendel cross-pollinated 28,000 pea plants in his monastery garden, discovering the mathematical laws of genetic inheritance decades before chromosomes or DNA were seen under microscopes.',
    topics: [
      'Heredity and Variation: Sexual reproduction produces diverse phenotypes',
      'Mendel’s Choice of Garden Pea (*Pisum sativum*): Distinct contrasting traits, self-pollinating, short life cycle',
      'Monohybrid Cross (Tall $TT$ vs Dwarf $tt$): $F_1$ generation (All Tall $Tt$), $F_2$ generation (Phenotypic ratio $3:1$; Genotypic ratio $1:2:1$)',
      'Dominant vs Recessive Alleles',
      'Dihybrid Cross (Round Yellow $RRYY$ vs Wrinkled Green $rryy$): $F_2$ Phenotypic ratio $9:3:3:1$',
      'Mendel’s Laws: Law of Segregation (Purity of Gametes) and Law of Independent Assortment',
      'Sex Determination in Humans: 22 Autosome pairs + 1 Sex Chromosome pair ($XX$ Female, $XY$ Male)',
      'Homologous Organs (Same basic structure, different functions, divergent evolution: Forelimbs of frog, lizard, bird, human) vs Analogous Organs (Different structure, same function, convergent evolution: Wings of bat vs insect)',
      'Fossils: Preserved morphological records of prehistoric life (Dating via Carbon-14)'
    ],
    summaryNotes: `### Mendel's Fundamental Ratios:
1. **Monohybrid Cross ($F_2$):**
   - Phenotypic Ratio: **$3 \\text{ Tall} : 1 \\text{ Dwarf}$**
   - Genotypic Ratio: **$1 \\text{ } TT : 2 \\text{ } Tt : 1 \\text{ } tt$**
2. **Dihybrid Cross ($F_2$):**
   - Phenotypic Ratio: **$9 \\text{ Round Yellow} : 3 \\text{ Round Green} : 3 \\text{ Wrinkled Yellow} : 1 \\text{ Wrinkled Green}$**
3. **Homologous vs Analogous Organs:**
   - **Homologous:** Same fundamental embryonic origin and bone anatomy, adapted for different functions (e.g., Forelimbs of whale, bat, cheetah, human) $\\implies$ **Divergent Evolution** from a common ancestor.
   - **Analogous:** Completely different anatomical origin and structure, performing similar functional duties (e.g., Wing of an insect made of chitin vs Wing of a bird made of feathered bones) $\\implies$ **Convergent Evolution**.`,
    definitions: [
      'Allele: One of two or more alternative forms of a gene that arise by mutation and are found at the same locus on homologous chromosomes.',
      'Homologous Organs: Organs that have the same basic structural plan and embryonic origin but perform different functions in different organisms.'
    ],
    formulas: [
      { name: 'Mendelian Dihybrid Ratio', formula: '9 : 3 : 3 : 1', explanation: 'Phenotypic ratio of independent assortment in F2 generation.', units: 'Ratio' }
    ],
    solvedExamples: [
      {
        question: 'A cross between a pure tall pea plant (TT) and a pure dwarf pea plant (tt) produces F1 progeny. What will be the phenotype and genotype of the F1 generation?',
        solution: 'Parental genotypes: TT x tt.\nGametes: T from tall parent, t from dwarf parent.\nF1 Genotype: 100% Tt (Heterozygous).\nF1 Phenotype: 100% Tall (because the dominant T allele completely masks the recessive t allele).',
        keyInsight: 'Heterozygous Tt plants exhibit the dominant tall phenotype.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-b4-01'],
    practiceQuestions: [
      {
        id: 'q-c10-b4-01',
        subject: 'Biology',
        chapterId: 'c10-bio-04',
        chapterTitle: 'Heredity and Evolution',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'What is the genotypic ratio obtained in the F2 generation of a Mendelian monohybrid cross?',
        options: ['A) 3 : 1', 'B) 1 : 2 : 1', 'C) 9 : 3 : 3 : 1', 'D) 1 : 1 : 1 : 1'],
        correctAnswer: 'B',
        explanation: 'In the F2 generation of a monohybrid cross, the genotypes are 1 TT : 2 Tt : 1 tt (ratio 1:2:1), while the visible phenotype ratio is 3 tall : 1 dwarf.',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  },
  {
    id: 'c10-bio-05',
    subject: 'Biology',
    preparationGoal: 'NEET Foundation',
    category: 'Ecology & Environmental Biology',
    order: 5,
    title: 'Our Environment & Ecosystems',
    stage: 'foundation',
    classLevel: 'Class 10',
    priority: 'Basic priority',
    prerequisite: 'Class 9 Natural Resources',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Ecosystem structure (biotic and abiotic components), food chains and food webs, trophic levels, Lindeman\'s 10% law of energy transfer, biological biomagnification (DDT accumulation), the ozone layer and its depletion by CFCs, and waste management (biodegradable vs non-biodegradable waste, composting, landfills, incineration).',
    introduction: 'In nature, no organism lives in isolation. Energy captured by autotrophic plants flows through grazing herbivores and apex carnivores, while persistent toxins magnify along ecological food pyramids.',
    topics: [
      'Ecosystem Components: Biotic (Producers, Consumers, Decomposers) and Abiotic (Light, Temp, Water, Minerals)',
      'Trophic Levels: Producers (Level 1) → Herbivores (Level 2) → Carnivores (Level 3) → Top Predators (Level 4)',
      'Food Chains vs Complex Interconnected Food Webs',
      'Lindeman\'s 10% Law of Energy Transfer: Only 10% of energy is passed to the next trophic level',
      'Biological Biomagnification: Progressive accumulation of non-biodegradable toxins (DDT, Mercury) along the food chain',
      'Depletion of the Ozone Layer: Montreal Protocol (1987) banning Chlorofluorocarbons (CFCs)',
      'Solid Waste Management: Segregation of Biodegradable vs Non-Biodegradable plastics'
    ],
    summaryNotes: `### Core Ecological Laws:
1. **Lindeman's 10% Law (1942):**
   - Only approximately **$10\\%$** of the organic energy captured at any trophic level is transferred into biomass at the next higher trophic level.
   - The remaining $90\\%$ is lost as metabolic heat, respiration, and excretion.
   - Because of this drastic dissipation, food chains rarely exceed **3 to 4 trophic levels**!
     $$\\text{Producers (10,000 J)} \\longrightarrow \\text{Herbivores (1,000 J)} \\longrightarrow \\text{Carnivores (100 J)} \\longrightarrow \\text{Apex Predator (10 J)}$$
2. **Biological Biomagnification:**
   - Non-biodegradable pesticides (like DDT) cannot be metabolized or excreted by organisms.
   - Their concentration multiplies at each successive trophic level, reaching maximum, toxic concentrations in apex consumers (e.g., eagles, humans).`,
    definitions: [
      '10% Law: The ecological principle stating that during the transfer of organic food energy from one trophic level to the next, only about 10% is stored as flesh; the rest is lost during transfer.',
      'Biological Biomagnification: The progressive increase in concentration of non-biodegradable toxic substances in organisms at higher trophic levels in a food chain.'
    ],
    formulas: [
      { name: 'Lindeman\'s 10% Energy Transfer', formula: 'E_{n+1} = 0.10 \\times E_n', explanation: 'Fraction of energy available to the next trophic level.', units: 'Joules' }
    ],
    solvedExamples: [
      {
        question: 'If 20,000 Joules of energy is captured by green plants from sunlight, how much energy will be available to hawks in the food chain: Plant → Grasshopper → Frog → Snake → Hawk?',
        solution: 'Apply 10% law at each trophic level:\n- Plants (Producers): 20,000 J\n- Grasshopper (Primary consumer): 10% of 20,000 = 2,000 J\n- Frog (Secondary consumer): 10% of 2,000 = 200 J\n- Snake (Tertiary consumer): 10% of 200 = 20 J\n- Hawk (Quaternary apex consumer): 10% of 20 = 2 Joules.',
        keyInsight: 'Multiply by 0.10 for each successive step up the food chain.',
        difficulty: 'beginner'
      }
    ],
    quizQuestionIds: ['q-c10-b5-01'],
    practiceQuestions: [
      {
        id: 'q-c10-b5-01',
        subject: 'Biology',
        chapterId: 'c10-bio-05',
        chapterTitle: 'Our Environment & Ecosystems',
        questionType: 'mcq_single',
        difficulty: 'beginner',
        questionText: 'In a food chain consisting of Phytoplankton → Zooplankton → Small Fish → Hawk, which organism will accumulate the highest concentration of non-biodegradable pesticides due to biomagnification?',
        options: ['A) Phytoplankton', 'B) Zooplankton', 'C) Small Fish', 'D) Hawk'],
        correctAnswer: 'D',
        explanation: 'Due to biological biomagnification, non-biodegradable chemicals concentrate progressively up the food chain, reaching maximum concentration in the top consumer (the Hawk).',
        sourceType: 'Original Practice',
        marksPositive: 4,
        marksNegative: 1
      }
    ]
  }
];
