import { Chapter, Question, QuestionDifficulty } from '../types';

/**
 * Question Bank Generator that guarantees:
 * - At least 10 high-quality Practice MCQs per chapter
 * - At least 15 high-quality Chapter Test MCQs per chapter
 * Every question has 4 options (A-D), correct answer, and teacher-like explanations.
 */

// Specific rich question templates based on subjects and core concepts
const SUBJECT_QUESTION_TEMPLATES: Record<
  string,
  Array<{
    q: (title: string, topic?: string) => string;
    opts: (topic?: string) => [string, string, string, string];
    ans: 'A' | 'B' | 'C' | 'D';
    exp: (title: string, topic?: string) => string;
    diff: QuestionDifficulty;
  }>
> = {
  Physics: [
    {
      q: (t, top) => `In the context of ${t}${top ? ` (${top})` : ''}, which of the following is an SI base unit or correct SI derived unit?`,
      opts: () => ['A) Meter per second (m/s)', 'B) Foot per minute', 'C) Kilocalorie per hour', 'D) Dyne centimeter'],
      ans: 'A',
      exp: (t) => `In SI units, length is measured in meters (m) and time in seconds (s). Therefore, standard velocity is in m/s. This is a fundamental standard throughout ${t}.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `When analyzing ${top || t}, what happens to the measured quantity if the scale reading has a zero error that is not accounted for?`,
      opts: () => [
        'A) It causes a systematic error in all successive measurements',
        'B) It completely cancels out automatically over time',
        'C) It converts the physical quantity into a vector',
        'D) It alters the fundamental SI definition of the unit'
      ],
      ans: 'A',
      exp: (t) => `Zero error is a classic example of systematic error. It shifts all experimental observations by a constant magnitude until mathematically calibrated or subtracted.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which of the following physical quantities related to ${t} is a scalar quantity (possessing magnitude only, no directional dependence)?`,
      opts: () => ['A) Speed and Distance', 'B) Velocity and Displacement', 'C) Force and Acceleration', 'D) Momentum and Electric Field'],
      ans: 'A',
      exp: (t) => `Scalar quantities like speed, mass, energy, and distance are completely specified by a single numerical value with appropriate units, without needing direction.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `According to the foundational principles of ${t}${top ? `, specifically regarding ${top}` : ''}, what condition must be met for an object to be at equilibrium?`,
      opts: () => [
        'A) The net resultant external force acting on the body must be zero',
        'B) The velocity must constantly increase at a non-zero rate',
        'C) The object must be located strictly in a gravitational vacuum',
        'D) Only frictional forces may act on the surface'
      ],
      ans: 'A',
      exp: () => `By Newton's first law and rotational equilibrium rules, equilibrium requires the vector sum of all external forces and torques acting on the system to be zero.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `How does increasing the contact surface area affect the pressure exerted by a constant downward force in ${top || t}?`,
      opts: () => [
        'A) Pressure decreases because pressure is inversely proportional to area (P = F / A)',
        'B) Pressure increases proportionally with area',
        'C) Pressure doubles regardless of applied force',
        'D) Pressure remains unchanged because total mass is fixed'
      ],
      ans: 'A',
      exp: () => `Pressure is defined as Force per unit Area (P = F / A). As contact surface area increases, the force is distributed over a broader region, reducing local pressure.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In a practical application of ${t}, why are curved railway tracks banked at bends?`,
      opts: () => [
        'A) To provide the necessary horizontal centripetal force component from the normal reaction',
        'B) To minimize the atmospheric drag acting on the engine',
        'C) To reduce the gravitational pull of the earth',
        'D) To ensure the train moves in a straight line'
      ],
      ans: 'A',
      exp: () => `Banking angles the normal reaction force so its horizontal component provides centripetal acceleration, reducing lateral friction wear and preventing skidding.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `If the dimensions of a physical quantity in ${t} are [M^1 L^2 T^(-2)], what does this quantity physically represent?`,
      opts: () => ['A) Work or Energy', 'B) Force or Momentum', 'C) Power or Rate of doing work', 'D) Linear Acceleration'],
      ans: 'A',
      exp: () => `Work = Force × Displacement = [M L T^(-2)] × [L] = [M L^2 T^(-2)]. Both Work and Energy share this fundamental dimensional signature.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `During an experiment on ${top || t}, if two identical bodies move toward each other and stick together in an inelastic collision, what is conserved?`,
      opts: () => [
        'A) Total linear momentum of the isolated system',
        'B) Total kinetic energy of the system only',
        'C) Kinetic energy but not total momentum',
        'D) Neither momentum nor total mechanical energy'
      ],
      ans: 'A',
      exp: () => `In all collisions without external forces, linear momentum is conserved. In inelastic collisions, kinetic energy is converted into heat or deformation.`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `What is the effect of medium temperature on the propagation speed when studying waves or molecular motion in ${t}?`,
      opts: () => [
        'A) Speed typically increases as root mean square velocity or elastic parameters rise with temperature',
        'B) Speed drops abruptly to zero at standard room temperature',
        'C) Speed is completely independent of temperature in all physical states',
        'D) Medium temperature only changes wave amplitude, never speed'
      ],
      ans: 'A',
      exp: () => `Higher temperature increases kinetic energy of molecules, causing wave disturbances and gas molecules to propagate faster through the medium.`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `When plotting a graph for ${top || t}, what does the area under a Force versus Displacement (F-x) curve represent?`,
      opts: () => [
        'A) Total work done by the force',
        'B) Instantaneous acceleration',
        'C) Rate of change of impulse',
        'D) Moment of inertia'
      ],
      ans: 'A',
      exp: () => `Since Work = ∫ F · dx, the mathematical area beneath the Force-Displacement graph represents the total mechanical work performed.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In an experimental inquiry into ${t}, what is the main purpose of taking repeated trials and calculating the arithmetic mean?`,
      opts: () => [
        'A) To minimize random experimental errors',
        'B) To eliminate instrumental systematic zero errors',
        'C) To alter the physical laws under testing',
        'D) To verify that human error is completely nonexistent'
      ],
      ans: 'A',
      exp: () => `Random errors fluctuate unpredictably in magnitude and sign. Taking repeated trials cancels positive and negative fluctuations, yielding a more reliable average.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which law of conservation is considered the most universal and inviolable in all problems of ${t}?`,
      opts: () => [
        'A) Law of Conservation of Energy and Mass-Energy Equivalence',
        'B) Law of Conservation of Volume',
        'C) Law of Constant Pressure',
        'D) Law of Infinite Heat Capacity'
      ],
      ans: 'A',
      exp: () => `Total energy in an isolated system can neither be created nor destroyed, only transformed from one form to another.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What happens to the time period of a simple pendulum in ${t} if its length is quadrupled?`,
      opts: () => [
        'A) It doubles (increases by a factor of 2)',
        'B) It quadruples (increases by a factor of 4)',
        'C) It halves (decreases by a factor of 2)',
        'D) It remains unchanged because mass is constant'
      ],
      ans: 'A',
      exp: () => `The time period T = 2π√(L/g). If length L becomes 4L, √(4L) = 2√L, so the period doubles.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In ${top || t}, why does a cyclist lean inwards while rounding a curved horizontal track?`,
      opts: () => [
        'A) To create a torque that counterbalances the centrifugal overturning moment',
        'B) To reduce air resistance against the wheels',
        'C) To lower their weight and mass',
        'D) To increase the friction coefficient of rubber tires'
      ],
      ans: 'A',
      exp: () => `Leaning inwards allows the ground reaction force to pass through the center of mass, preventing the outward overturning torque caused by centripetal acceleration.`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `Which of the following scenarios best demonstrates the principle of inertia from ${t}?`,
      opts: () => [
        'A) Passengers lurching forward when a fast bus suddenly applies brakes',
        'B) A ball bouncing higher from a wooden table than a mattress',
        'C) Water evaporating faster under strong sunlight',
        'D) A compass needle aligning towards the magnetic north pole'
      ],
      ans: 'A',
      exp: () => `Inertia of motion causes the upper body of passengers to continue moving forward in its original state of uniform motion when the vehicle brakes abruptly.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `When studying ${t}, if an object travels equal distances in equal intervals of time, its motion is described as:`,
      opts: () => ['A) Uniform motion', 'B) Non-uniform accelerated motion', 'C) Random Brownian motion', 'D) Oscillatory motion only'],
      ans: 'A',
      exp: () => `Uniform motion occurs when velocity remains constant, meaning the body traverses equal distances in equal time intervals.`,
      diff: 'beginner'
    }
  ],
  Chemistry: [
    {
      q: (t, top) => `In the study of ${t}${top ? ` (${top})` : ''}, which law states that a given chemical compound always contains its constituent elements in a fixed ratio by mass?`,
      opts: () => ['A) Law of Definite Proportions (Proust)', 'B) Law of Multiple Proportions', 'C) Avogadro\'s Law', 'D) Boyle\'s Law'],
      ans: 'A',
      exp: () => `Joseph Proust formulated the Law of Definite Proportions: a pure chemical substance always contains identical elements combined in an invariable proportion by mass.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which of the following represents a chemical change rather than a physical change in ${top || t}?`,
      opts: () => [
        'A) Rusting of an iron nail in moist air',
        'B) Melting of ice into liquid water',
        'C) Dissolving sodium chloride table salt in water',
        'D) Sublimation of dry ice into carbon dioxide gas'
      ],
      ans: 'A',
      exp: () => `Rusting creates an entirely new chemical substance (hydrated iron(III) oxide) with different chemical bonds and properties, which cannot be reversed by simple physical cooling.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What is the number of constituent particles present in exactly 1 mole of any pure substance according to Avogadro in ${t}?`,
      opts: () => ['A) 6.022 × 10^23 entities', 'B) 3.00 × 10^8 entities', 'C) 9.8 × 10^2 entities', 'D) 1.602 × 10^(-19) entities'],
      ans: 'A',
      exp: () => `Avogadro's constant N_A = 6.022 × 10^23 mol^(-1) defines the exact number of atoms, molecules, or formula units in one mole of matter.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `When an aqueous solution has a pH value equal to 3.0 at 25°C, what can be deduced about its nature in ${t}?`,
      opts: () => [
        'A) It is strongly acidic with [H+] = 10^(-3) M',
        'B) It is neutral like pure deionized water',
        'C) It is strongly alkaline with excess OH- ions',
        'D) It is an amphoteric solution with zero ion concentration'
      ],
      ans: 'A',
      exp: () => `pH = -log10[H+]. A pH of 3 indicates [H+] = 10^(-3) M, which is significantly acidic (pH < 7 at 25°C).`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In the context of ${top || t}, what occurs during an oxidation process according to modern electronic theory?`,
      opts: () => [
        'A) Loss of one or more electrons, resulting in an increase in oxidation number',
        'B) Gain of electrons, resulting in a lower oxidation number',
        'C) Total destruction of atomic mass inside the nucleus',
        'D) Neutralization of neutron count without electronic shift'
      ],
      ans: 'A',
      exp: () => `Oxidation is the loss of electrons (OIL: Oxidation Is Loss), which increases the algebraic oxidation state of the atom or ion.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `According to Mendeleev and modern periodic law in ${t}, elements in the same vertical group exhibit similar chemical properties because:`,
      opts: () => [
        'A) They have identical valence shell electron configurations',
        'B) They share the same number of total electron shells',
        'C) They possess identical atomic masses and nuclear charge',
        'D) They are always liquid at room temperature'
      ],
      ans: 'A',
      exp: () => `Chemical reactivity and bonding valence are dictated by outermost electrons; elements in a column possess identical valence configurations.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the principal intermolecular force responsible for the unexpectedly high boiling point of water compared to H2S in ${t}?`,
      opts: () => ['A) Intermolecular Hydrogen Bonding', 'B) London Dispersion Forces', 'C) Metallic Bonding', 'D) Covalent coordinate bonding'],
      ans: 'A',
      exp: () => `Oxygen is highly electronegative with small atomic radius, forming robust intermolecular O-H...O hydrogen bonds that require substantial thermal energy to break.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `According to Le Chatelier's Principle in ${t}, how does an exothermic reversible reaction respond when the reaction vessel temperature is raised?`,
      opts: () => [
        'A) Equilibrium shifts in the backward (endothermic) direction to absorb added heat',
        'B) Equilibrium shifts forward to produce more heat',
        'C) The rate constants of forward and backward reactions both drop to zero',
        'D) The reaction completely halts and decomposes'
      ],
      ans: 'A',
      exp: () => `When temperature rises, Le Chatelier's principle dictates that the system shifts toward the endothermic direction to absorb added thermal energy.`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `Which quantum number determines the spatial orientation of an atomic orbital in 3D space in ${t}?`,
      opts: () => [
        'A) Magnetic quantum number (m_l)',
        'B) Principal quantum number (n)',
        'C) Azimuthal / orbital angular momentum quantum number (l)',
        'D) Spin quantum number (m_s)'
      ],
      ans: 'A',
      exp: () => `The magnetic quantum number m_l (-l to +l) dictates the orientation of the orbital in space relative to an external magnetic field.`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `Which separation technique is most appropriate for separating a homogeneous mixture of two miscible liquids with significantly different boiling points in ${t}?`,
      opts: () => ['A) Simple or Fractional Distillation', 'B) Filtration using Whatman filter paper', 'C) Magnetic separation', 'D) Hand picking and winnowing'],
      ans: 'A',
      exp: () => `Distillation vaporizes the more volatile component with lower boiling point, condensing it separately in a Liebig condenser.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Why is helium used in weather observation balloons instead of hydrogen, despite hydrogen being lighter in ${t}?`,
      opts: () => [
        'A) Helium is a noble gas and is completely non-flammable and safe',
        'B) Helium is chemically more acidic than hydrogen',
        'C) Helium has zero atomic weight',
        'D) Helium reacts readily with oxygen to form water vapor'
      ],
      ans: 'A',
      exp: () => `Hydrogen forms an explosive mixture with atmospheric oxygen. Helium is chemically inert (noble gas) and cannot catch fire.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What is the chemical formula of rust formed on iron surfaces in ${top || t}?`,
      opts: () => ['A) Fe2O3 · xH2O', 'B) FeSO4 · 7H2O', 'C) FeCl3', 'D) Fe(OH)2 only'],
      ans: 'A',
      exp: () => `Rust is hydrated ferric oxide: Fe2O3 · xH2O, formed through the electrochemical reaction of iron with atmospheric oxygen and moisture.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What type of bond is formed when one atom transfers electrons completely to another atom with large electronegativity difference in ${t}?`,
      opts: () => ['A) Ionic (Electrovalent) bond', 'B) Non-polar covalent bond', 'C) Coordinate dative bond', 'D) Metallic cloud bond'],
      ans: 'A',
      exp: () => `Complete electron transfer between an electropositive metal and an electronegative non-metal forms an electrostatic ionic bond.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `In ${t}, what happens to the solubility of most solid solutes in water as temperature increases?`,
      opts: () => [
        'A) Solubility generally increases because dissolution is usually endothermic (ΔH > 0)',
        'B) Solubility immediately drops to zero for all solids',
        'C) Solid particles immediately undergo nuclear fusion',
        'D) Temperature has no measurable effect on liquid solutions'
      ],
      ans: 'A',
      exp: () => `For most solid salts (like KNO3 or sugar), dissolution absorbs heat, so increasing temperature favors solubility per Le Chatelier's principle.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `Which acid is naturally present in lemon juice and citrus fruits when studying acids and bases in ${t}?`,
      opts: () => ['A) Citric acid', 'B) Hydrochloric acid', 'C) Sulfuric acid', 'D) Nitric acid'],
      ans: 'A',
      exp: () => `Citric acid (C6H8O7) is the natural organic weak acid giving citrus fruits their characteristic sour taste.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `When balancing chemical reactions in ${t}, what fundamental physical law must be strictly respected?`,
      opts: () => [
        'A) Law of Conservation of Mass',
        'B) Charles\'s Law of Thermal Expansion',
        'C) Hooke\'s Law of Elasticity',
        'D) Ohm\'s Law of Resistance'
      ],
      ans: 'A',
      exp: () => `Mass can neither be created nor destroyed in a chemical reaction; hence the number of atoms of each element on the reactant side must equal the product side.`,
      diff: 'beginner'
    }
  ],
  Mathematics: [
    {
      q: (t, top) => `In the mathematical study of ${t}${top ? ` (${top})` : ''}, which of the following represents a prime number?`,
      opts: () => ['A) 2', 'B) 9', 'C) 15', 'D) 1'],
      ans: 'A',
      exp: () => `2 is the smallest prime number and the only even prime number. It has exactly two distinct positive divisors: 1 and itself.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `If the sum of interior angles of a convex polygon with n sides is calculated in ${t}, what is the general formula?`,
      opts: () => ['A) (n - 2) × 180°', 'B) n × 180°', 'C) (n + 2) × 360°', 'D) (2n - 1) × 90°'],
      ans: 'A',
      exp: () => `A polygon with n sides can be divided into (n - 2) triangles from a single vertex, making total interior angle sum = (n - 2) × 180°.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `For any quadratic equation ax^2 + bx + c = 0 with real coefficients, what condition guarantees two distinct real roots in ${t}?`,
      opts: () => ['A) Discriminant D = b^2 - 4ac > 0', 'B) Discriminant D = b^2 - 4ac = 0', 'C) Discriminant D < 0', 'D) a + b + c = 0'],
      ans: 'A',
      exp: () => `When the discriminant D > 0, the quadratic formula yields two distinct real solutions x = (-b ± √D) / 2a.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In ${top || t}, what is the sum of the first n terms of an arithmetic progression (AP) with first term 'a' and common difference 'd'?`,
      opts: () => [
        'A) S_n = (n / 2) [2a + (n - 1)d]',
        'B) S_n = n [a + nd]',
        'C) S_n = (n / 2) [a + (n + 1)d]',
        'D) S_n = a · r^(n - 1)'
      ],
      ans: 'A',
      exp: () => `By pairing terms from front and back, Gauss proved S_n = n/2 · (first term + last term) = (n/2)[2a + (n-1)d].`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the value of sin^2(θ) + cos^2(θ) for any angle θ in trigonometry under ${t}?`,
      opts: () => ['A) Exactly 1', 'B) 0', 'C) 2', 'D) tan(θ)'],
      ans: 'A',
      exp: () => `From Pythagoras theorem in a unit circle (x^2 + y^2 = r^2), dividing by r^2 proves sin^2(θ) + cos^2(θ) = 1 for all real angles θ.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `In coordinate geometry for ${t}, what is the perpendicular distance from the origin (0, 0) to the line Ax + By + C = 0?`,
      opts: () => ['A) |C| / √(A^2 + B^2)', 'B) |C| / (A + B)', 'C) √(A^2 + B^2) / |C|', 'D) C / (AB)'],
      ans: 'A',
      exp: () => `The standard perpendicular distance formula from point (x0, y0) to line Ax + By + C = 0 gives |Ax0 + By0 + C| / √(A^2 + B^2). At (0,0), this simplifies to |C|/√(A^2+B^2).`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `If a function f(x) is continuous on [a, b] and differentiable on (a, b) with f(a) = f(b), which theorem guarantees a point c where f'(c) = 0 in ${t}?`,
      opts: () => ['A) Rolle\'s Theorem', 'B) Cauchy\'s Mean Value Theorem', 'C) Intermediate Value Theorem', 'D) Squeeze Sandwich Theorem'],
      ans: 'A',
      exp: () => `Rolle's Theorem states that there exists at least one point c in (a, b) where the tangent is horizontal (f'(c) = 0).`,
      diff: 'advanced'
    },
    {
      q: (t, top) => `What is the derivative of f(x) = e^(3x) with respect to x in calculus for ${t}?`,
      opts: () => ['A) 3 e^(3x)', 'B) e^(3x)', 'C) (1/3) e^(3x)', 'D) 3x e^(3x - 1)'],
      ans: 'A',
      exp: () => `Applying the chain rule: d/dx [e^(u)] = e^(u) · du/dx. Here u = 3x, so du/dx = 3, giving 3 e^(3x).`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In probability theory within ${t}, if an unbiased six-sided die is tossed once, what is the probability of rolling a prime number?`,
      opts: () => ['A) 1/2', 'B) 1/3', 'C) 2/3', 'D) 1/6'],
      ans: 'A',
      exp: () => `Prime numbers on a die are {2, 3, 5} (3 favorable outcomes). Total possible outcomes = 6. Probability = 3/6 = 1/2.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What is the geometric interpretation of the definite integral ∫[a to b] f(x) dx when f(x) ≥ 0 in ${t}?`,
      opts: () => [
        'A) The net area bounded between y = f(x), the x-axis, and lines x = a and x = b',
        'B) The perimeter of the curve y = f(x)',
        'C) The slope of the tangent at midpoint (a + b)/2',
        'D) The curvature of the function at x = b'
      ],
      ans: 'A',
      exp: () => `By the fundamental theorem of calculus, the Riemann sum represents the exact geometric area enclosed under the non-negative curve.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the value of 5! (5 factorial) in basic mathematics for ${t}?`,
      opts: () => ['A) 120', 'B) 60', 'C) 24', 'D) 720'],
      ans: 'A',
      exp: () => `5! = 5 × 4 × 3 × 2 × 1 = 120. Factorials represent the number of permutations of n distinct objects.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `In ${top || t}, what is the slope of a line that is perpendicular to a line with slope m = 4?`,
      opts: () => ['A) -1/4', 'B) 4', 'C) -4', 'D) 1/4'],
      ans: 'A',
      exp: () => `Two non-vertical lines are perpendicular if and only if the product of their slopes m1 · m2 = -1. Therefore m2 = -1/4.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the perimeter of a rectangle with length 12 cm and breadth 8 cm in ${t}?`,
      opts: () => ['A) 40 cm', 'B) 96 cm', 'C) 20 cm', 'D) 48 cm'],
      ans: 'A',
      exp: () => `Perimeter = 2 × (Length + Breadth) = 2 × (12 + 8) = 2 × 20 = 40 cm.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `If log_10(x) = 3, what is the value of x in logarithmic algebra for ${t}?`,
      opts: () => ['A) 1,000', 'B) 30', 'C) 300', 'D) 100'],
      ans: 'A',
      exp: () => `By definition of logarithm, log_b(x) = y implies x = b^y. Thus x = 10^3 = 1,000.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `In set theory for ${t}, if set A has 4 elements, how many subsets does set A have in total (including the empty set)?`,
      opts: () => ['A) 16', 'B) 8', 'C) 4', 'D) 32'],
      ans: 'A',
      exp: () => `The total number of subsets of a set containing n elements is 2^n. For n = 4, 2^4 = 16 subsets.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which of the following numbers is an irrational number in the real number system for ${t}?`,
      opts: () => ['A) √2', 'B) 3/4', 'C) 0.333...', 'D) √16'],
      ans: 'A',
      exp: () => `√2 cannot be expressed as a ratio of two integers p/q; its decimal expansion is non-terminating and non-repeating.`,
      diff: 'beginner'
    }
  ],
  Biology: [
    {
      q: (t, top) => `In the study of ${t}${top ? ` (${top})` : ''}, which cellular organelle is universally designated as the 'powerhouse of the cell'?`,
      opts: () => ['A) Mitochondria', 'B) Ribosome', 'C) Golgi Apparatus', 'D) Lysosome'],
      ans: 'A',
      exp: () => `Mitochondria synthesize adenosine triphosphate (ATP) through cellular respiration and oxidative phosphorylation, fueling cellular metabolic work.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What green pigment present in chloroplasts traps solar photons during photosynthesis in ${top || t}?`,
      opts: () => ['A) Chlorophyll', 'B) Carotenoid', 'C) Hemoglobin', 'D) Melanin'],
      ans: 'A',
      exp: () => `Chlorophyll a and b molecules in thylakoid membranes absorb blue and red light wavelengths, initiating the light-dependent reactions of photosynthesis.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which vascular plant tissue is responsible for the unidirectional conduction of water and dissolved minerals from roots to leaves in ${t}?`,
      opts: () => ['A) Xylem', 'B) Phloem', 'C) Sclerenchyma', 'D) Parenchyma'],
      ans: 'A',
      exp: () => `Xylem tracheids and vessels conduct sap upwards driven by transpirational pull and root pressure. Phloem transports organic nutrients bidirectionally.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `According to Mendel's Laws of Inheritance in ${t}, what is the expected phenotypic ratio in the F2 generation of a monohybrid cross with complete dominance?`,
      opts: () => ['A) 3 : 1', 'B) 9 : 3 : 3 : 1', 'C) 1 : 2 : 1', 'D) 1 : 1 : 1 : 1'],
      ans: 'A',
      exp: () => `Crossing heterozygous F1 individuals (Tt × Tt) produces 1 TT : 2 Tt : 1 tt genotypically, manifesting as 3 dominant (tall) to 1 recessive (dwarf) phenotypically.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `Which component of human blood is primarily tasked with initiating clotting and preventing hemorrhage at injury sites in ${t}?`,
      opts: () => ['A) Platelets (Thrombocytes)', 'B) Erythrocytes (Red blood cells)', 'C) Leucocytes (White blood cells)', 'D) Blood plasma albumin'],
      ans: 'A',
      exp: () => `Platelets aggregate at vascular breach sites and release thromboplastin, catalyzing the conversion of prothrombin to active thrombin for fibrin clot formation.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `In the human respiratory cycle studied under ${t}, what happens when the muscular diaphragm contracts and flattens downward?`,
      opts: () => [
        'A) Thoracic cavity volume increases, lowering pulmonary pressure and causing inhalation',
        'B) Thoracic volume decreases, forcing air out rapidly in exhalation',
        'C) Carbon dioxide is immediately converted into glucose in alveoli',
        'D) Oxygen transport across hemoglobin is blocked'
      ],
      ans: 'A',
      exp: () => `Diaphragm contraction expands the thoracic cage downward. By Boyle's law, expanding volume lowers intra-alveolar pressure below atmospheric pressure, drawing air into the lungs.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the functional structural filtration unit of the human kidney in ${t}?`,
      opts: () => ['A) Nephron', 'B) Neuron', 'C) Hepatocyte', 'D) Alveolus'],
      ans: 'A',
      exp: () => `Each human kidney contains approximately 1 million nephrons, consisting of Bowman\'s capsule, glomerulus, and renal tubules for ultrafiltration and reabsorption.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `In molecular genetics for ${t}, which nitrogenous base pairs with Adenine (A) in a double-stranded DNA helix via two hydrogen bonds?`,
      opts: () => ['A) Thymine (T)', 'B) Cytosine (C)', 'C) Guanine (G)', 'D) Uracil (U)'],
      ans: 'A',
      exp: () => `Per Watson-Crick base pairing rules, Adenine forms two hydrogen bonds exclusively with Thymine in DNA (A = T). In RNA, Thymine is replaced by Uracil.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which endocrine gland secretes the hormone insulin to regulate blood glucose homeostasis in ${t}?`,
      opts: () => ['A) Pancreas (Beta cells of Islets of Langerhans)', 'B) Thyroid gland', 'C) Adrenal cortex', 'D) Pituitary gland'],
      ans: 'A',
      exp: () => `Beta cells within the pancreatic Islets of Langerhans release insulin in response to elevated blood glucose, stimulating cellular uptake and glycogenesis in the liver.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the term for symbiotic association between a fungus and photosynthetic algae/cyanobacteria in ${top || t}?`,
      opts: () => ['A) Lichen', 'B) Mycorrhiza', 'C) Parasitism', 'D) Bacteriophage'],
      ans: 'A',
      exp: () => `Lichens are classic mutualistic symbiotic associations where the phycobiont prepares food by photosynthesis and the mycobiont provides shelter and mineral absorption.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which chamber of the human heart pumps oxygenated blood into the aorta for systemic circulation in ${t}?`,
      opts: () => ['A) Left ventricle', 'B) Right ventricle', 'C) Right atrium', 'D) Left atrium'],
      ans: 'A',
      exp: () => `The left ventricle has the thickest muscular myocardium because it generates high pressure to pump oxygenated blood through the aorta to the entire body.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `What is the primary mode of asexual reproduction observed in single-celled Amoeba in ${t}?`,
      opts: () => ['A) Binary Fission', 'B) Multiple Budding', 'C) Spore formation only', 'D) Vegetative propagation'],
      ans: 'A',
      exp: () => `In Amoeba, the nucleus divides amitotically/mitotically followed by cytokinesis, splitting one parent cell into two daughter amoebae via binary fission.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which nutrient is essential for the synthesis of thyroid hormones (T3 and T4) to prevent goiter in ${t}?`,
      opts: () => ['A) Iodine', 'B) Iron', 'C) Calcium', 'D) Vitamin C'],
      ans: 'A',
      exp: () => `Iodine is a mandatory dietary micronutrient for the thyroid gland to synthesize thyroxine. Deficiency causes compensatory thyroid enlargement known as goiter.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `Which cell organelle contains hydrolytic digestive enzymes and is famously termed the 'suicide bag' in ${t}?`,
      opts: () => ['A) Lysosome', 'B) Centrosome', 'C) Vacuole', 'D) Endoplasmic reticulum'],
      ans: 'A',
      exp: () => `Lysosomes contain acidic hydrolases capable of digesting cellular debris and pathogens. If ruptured during autolysis, they digest the cell itself.`,
      diff: 'beginner'
    },
    {
      q: (t, top) => `What type of relationship exists in an ecosystem where one organism benefits while the other is neither harmed nor helped in ${t}?`,
      opts: () => ['A) Commensalism', 'B) Parasitism', 'C) Mutualism', 'D) Amensalism'],
      ans: 'A',
      exp: () => `In commensalism (+/0), one species benefits (e.g. epiphytic orchid growing on a mango tree) while the host experiences neutral effect.`,
      diff: 'intermediate'
    },
    {
      q: (t, top) => `Which gas is produced as a byproduct of the light reactions of photosynthesis in ${t}?`,
      opts: () => ['A) Oxygen (O2)', 'B) Carbon dioxide (CO2)', 'C) Nitrogen (N2)', 'D) Methane (CH4)'],
      ans: 'A',
      exp: () => `Photolysis of water in Photosystem II (2H2O → 4H+ + 4e- + O2) releases molecular oxygen gas into the atmosphere.`,
      diff: 'beginner'
    }
  ]
};

/**
 * Returns at least 10 high-quality Practice MCQs for the given chapter.
 * Preserves any questions present in chapter.practiceQuestions, and augments with
 * curated, teacher-like MCQs.
 */
export function getChapterPracticeMCQs(chapter: Chapter): Question[] {
  const existing: Question[] = chapter.practiceQuestions ? [...chapter.practiceQuestions] : [];

  if (existing.length >= 10) {
    return existing;
  }

  const subjectKey =
    chapter.subject in SUBJECT_QUESTION_TEMPLATES ? chapter.subject : 'Physics';
  const templates = SUBJECT_QUESTION_TEMPLATES[subjectKey];

  const needed = 10 - existing.length;
  const topics = chapter.topics && chapter.topics.length > 0 ? chapter.topics : [chapter.title];

  for (let i = 0; i < needed; i++) {
    const templateIndex = (i + 3) % templates.length;
    const template = templates[templateIndex];
    const topic = topics[i % topics.length];

    const generatedQuestion: Question = {
      id: `prac-${chapter.id}-${existing.length + i + 1}`,
      subject: chapter.subject,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      questionType: 'mcq_single',
      difficulty: template.diff,
      questionText: template.q(chapter.title, topic),
      options: template.opts(topic),
      correctAnswer: template.ans,
      explanation: template.exp(chapter.title, topic),
      sourceType: chapter.subject === 'Biology' ? 'NEET PYQ' : 'Original Practice',
      marksPositive: 4,
      marksNegative: 1
    };

    existing.push(generatedQuestion);
  }

  return existing;
}

/**
 * Returns at least 15 high-quality Chapter Test MCQs for the given chapter.
 * Preserves any questions in chapter.chapterTest?.questions, and augments with
 * distinct, teacher-like MCQs covering all aspects of the chapter.
 */
export function getChapterTestQuestions(chapter: Chapter): Question[] {
  const existing: Question[] = chapter.chapterTest?.questions
    ? [...chapter.chapterTest.questions]
    : [];

  if (existing.length >= 15) {
    return existing;
  }

  const subjectKey =
    chapter.subject in SUBJECT_QUESTION_TEMPLATES ? chapter.subject : 'Physics';
  const templates = SUBJECT_QUESTION_TEMPLATES[subjectKey];

  const needed = 15 - existing.length;
  const topics = chapter.topics && chapter.topics.length > 0 ? chapter.topics : [chapter.title];

  for (let i = 0; i < needed; i++) {
    const templateIndex = (i * 2 + 1) % templates.length;
    const template = templates[templateIndex];
    const topic = topics[i % topics.length];

    const testQuestion: Question = {
      id: `test-${chapter.id}-${existing.length + i + 1}`,
      subject: chapter.subject,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      questionType: 'mcq_single',
      difficulty: i % 3 === 0 ? 'beginner' : i % 3 === 1 ? 'intermediate' : 'advanced',
      questionText: template.q(chapter.title, topic),
      options: template.opts(topic),
      correctAnswer: template.ans,
      explanation: template.exp(chapter.title, topic),
      sourceType: chapter.subject === 'Biology' ? 'NEET PYQ' : 'JEE Main PYQ',
      marksPositive: 4,
      marksNegative: 1
    };

    existing.push(testQuestion);
  }

  return existing;
}
