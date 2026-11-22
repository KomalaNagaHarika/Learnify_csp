import {
  Chapter,
  Question,
  MockTest,
  StudyMaterial,
  FormulaCard,
  ScholarshipItem,
  DailyChallengeQuestion,
} from '../types';
import { ALL_CURRICULUM_CHAPTERS } from './curriculumData';

export const BRIDGE_CHAPTERS: Chapter[] = [
  // BRIDGE FOUNDATION (Class 9 & 10)
  {
    id: 'bridge-math-01',
    subject: 'Bridge Foundation',
    order: 1,
    title: 'Algebraic Identities & Polynomials',
    stage: 'foundation',
    classLevel: 'Class 9-10',
    totalConcepts: 6,
    durationHours: 3.5,
    description: 'Transition smoothly from school arithmetic to algebraic factorization, identities, and quadratic forms required for JEE calculus.',
    summaryNotes: `### Core Fundamentals:
1. **Key Identities:**
   - $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a+b)$
   - $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$
   - If $a+b+c = 0$, then $a^3 + b^3 + c^3 = 3abc$. This is one of the most frequently tested shortcuts in JEE!
2. **Quadratic Splitting:**
   - For $ax^2 + bx + c = 0$, roots are $\\alpha, \\beta = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$.
   - Sum of roots: $\\alpha + \\beta = -b/a$, Product: $\\alpha\\beta = c/a$.`,
    formulas: [
      { name: 'Symmetric Identity', formula: 'a^3 + b^3 = (a+b)(a^2 - ab + b^2)', explanation: 'Used extensively in simplifying trigonometric and algebraic rational expressions.' },
      { name: 'Vieta Relations (Quadratic)', formula: '\\alpha + \\beta = -b/a, \\quad \\alpha\\beta = c/a', explanation: 'Establishes root-coefficient relationships without explicitly solving roots.' }
    ],
    solvedExamples: [
      {
        question: 'If x + 1/x = 3, find the exact value of x^3 + 1/x^3.',
        solution: 'Cubing both sides: (x + 1/x)^3 = 3^3 = 27. Expanding: x^3 + 1/x^3 + 3(x)(1/x)(x + 1/x) = 27. Substituting x + 1/x = 3: x^3 + 1/x^3 + 3(1)(3) = 27 ==> x^3 + 1/x^3 = 27 - 9 = 18.',
        keyInsight: 'Avoid solving for the quadratic roots of x. Always express higher powers in terms of elementary symmetric polynomials.'
      }
    ],
    quizQuestionIds: ['q-bridge-01', 'q-bridge-02']
  },
  {
    id: 'bridge-phys-01',
    subject: 'Bridge Foundation',
    order: 2,
    title: 'Intuitive Motion, Vectors & Free Body Diagrams',
    stage: 'foundation',
    classLevel: 'Class 9-10',
    totalConcepts: 8,
    durationHours: 4.0,
    description: 'Master vectors, coordinate resolution, and drawing flawless Free Body Diagrams (FBD) before entering JEE Mechanics.',
    summaryNotes: `### Core Fundamentals:
1. **Vector Components:**
   - Any 2D vector $\\vec{A}$ can be split into: $A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$.
2. **Free Body Diagram Golden Rules:**
   - Isolate the body as a single point mass.
   - Draw ONLY forces exerted ON the body by the surroundings (Gravity $mg$ downwards, Normal $N$ perpendicular to contact surface, Tension $T$ pulling along string, Friction $f$ opposing relative sliding).
   - Never draw internal forces!`,
    formulas: [
      { name: 'Resolution of Vectors', formula: '\\vec{A} = (A\\cos\\theta)\\hat{i} + (A\\sin\\theta)\\hat{j}', explanation: 'Resolves any inclined vector along mutually perpendicular Cartesian axes.' },
      { name: 'Kinematic Equations', formula: 'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as', explanation: 'Valid ONLY when acceleration "a" is strictly constant.' }
    ],
    solvedExamples: [
      {
        question: 'A mass m rests on a frictionless plane inclined at angle theta to the horizontal. Find its acceleration down the incline.',
        solution: 'Forces on mass: Gravity mg acting vertically down, Normal force N perpendicular to incline. Resolving mg along and perpendicular to incline: Component perpendicular = mg cos(theta), balanced by N. Component along incline = mg sin(theta). Using F_net = ma: mg sin(theta) = ma ==> a = g sin(theta).',
        keyInsight: 'Choose axes parallel and perpendicular to the incline to simplify 2D motion to 1D analysis.'
      }
    ],
    quizQuestionIds: ['q-bridge-03']
  }
];

import { ALL_CLASS_CHAPTERS, CLASS_9_CHAPTERS, CLASS_10_CHAPTERS } from './classSyllabusData';

export const INITIAL_CHAPTERS: Chapter[] = ALL_CLASS_CHAPTERS;

const CLASS_9_QUESTIONS: Question[] = CLASS_9_CHAPTERS.flatMap((c) => c.practiceQuestions || []);
const CLASS_10_QUESTIONS: Question[] = CLASS_10_CHAPTERS.flatMap((c) => c.practiceQuestions || []);

export const QUESTION_BANK: Question[] = [
  ...CLASS_9_QUESTIONS,
  ...CLASS_10_QUESTIONS,
  {
    id: 'q-bridge-01',
    subject: 'Bridge Foundation',
    chapterId: 'bridge-math-01',
    chapterTitle: 'Algebraic Identities & Polynomials',
    questionType: 'mcq_single',
    difficulty: 'beginner',
    questionText: 'If a + b + c = 0, what is the value of (a^3 + b^3 + c^3) / (3abc)?',
    options: ['A) 0', 'B) 1', 'C) 3', 'D) 1/3'],
    correctAnswer: 'B',
    explanation: 'From the algebraic identity a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca). When a+b+c = 0, the right hand side becomes 0. Hence a^3 + b^3 + c^3 = 3abc. Therefore the ratio is 3abc / 3abc = 1.',
    sourceType: 'Bridge Concept',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-bridge-02',
    subject: 'Bridge Foundation',
    chapterId: 'bridge-math-01',
    chapterTitle: 'Algebraic Identities & Polynomials',
    questionType: 'numerical',
    difficulty: 'beginner',
    questionText: 'If x + 1/x = 4, calculate the exact value of x^2 + 1/x^2.',
    correctAnswer: '14',
    explanation: 'Squaring both sides: (x + 1/x)^2 = 4^2 = 16. Expanding: x^2 + 2(x)(1/x) + 1/x^2 = 16 ==> x^2 + 2 + 1/x^2 = 16 ==> x^2 + 1/x^2 = 14.',
    sourceType: 'Bridge Concept',
    marksPositive: 4,
    marksNegative: 0
  },
  {
    id: 'q-bridge-03',
    subject: 'Bridge Foundation',
    chapterId: 'bridge-phys-01',
    chapterTitle: 'Intuitive Motion, Vectors & Free Body Diagrams',
    questionType: 'mcq_single',
    difficulty: 'beginner',
    questionText: 'A force vector of magnitude 10 N makes an angle of 60° with the horizontal x-axis. What are its horizontal and vertical components (Fx, Fy)?',
    options: [
      'A) Fx = 5 N, Fy = 8.66 N',
      'B) Fx = 8.66 N, Fy = 5 N',
      'C) Fx = 10 N, Fy = 10 N',
      'D) Fx = 5 N, Fy = 5 N'
    ],
    correctAnswer: 'A',
    explanation: 'Fx = F cos(60°) = 10 * 0.5 = 5 N. Fy = F sin(60°) = 10 * (sqrt(3)/2) = 10 * 0.866 = 8.66 N.',
    sourceType: 'Bridge Concept',
    marksPositive: 4,
    marksNegative: 1
  },

  // PHYSICS QUESTIONS
  {
    id: 'q-phys-01',
    subject: 'Physics',
    chapterId: 'phys-kinematics',
    chapterTitle: 'Kinematics & Projectile Motion',
    questionType: 'mcq_single',
    difficulty: 'intermediate',
    questionText: 'A projectile is launched from ground level with speed u at angle theta. What is the radius of curvature of its trajectory at the highest point? (g = acceleration due to gravity)',
    options: [
      'A) u^2 / g',
      'B) (u^2 cos^2 theta) / g',
      'C) (u^2 sin^2 theta) / g',
      'D) (u^2 cos theta) / g'
    ],
    correctAnswer: 'B',
    explanation: 'At the highest point of projectile motion: Speed is horizontal, v = u cos(theta). The normal acceleration perpendicular to velocity is purely gravitational acceleration, a_n = g. Radius of curvature R = v^2 / a_n = (u cos theta)^2 / g = (u^2 cos^2 theta) / g.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-phys-02',
    subject: 'Physics',
    chapterId: 'phys-kinematics',
    chapterTitle: 'Kinematics & Projectile Motion',
    questionType: 'numerical',
    difficulty: 'advanced',
    questionText: 'A body starts from rest with acceleration a = 2t m/s^2. Find its velocity (in m/s) after 3 seconds.',
    correctAnswer: '9',
    explanation: 'Acceleration a = dv/dt = 2t. Integrating from t = 0 to t = 3: v - 0 = integral of 2t dt = [t^2] from 0 to 3 = 3^2 - 0 = 9 m/s.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 0
  },
  {
    id: 'q-phys-03',
    subject: 'Physics',
    chapterId: 'phys-nlm',
    chapterTitle: 'Laws of Motion & Friction',
    questionType: 'mcq_single',
    difficulty: 'intermediate',
    questionText: 'A lift of mass 1000 kg is moving upwards with an acceleration of 2 m/s^2. Tension in the supporting cable is (take g = 9.8 m/s^2):',
    options: ['A) 9800 N', 'B) 11800 N', 'C) 7800 N', 'D) 12000 N'],
    correctAnswer: 'B',
    explanation: 'From Newton second law: T - mg = ma ==> T = m(g + a) = 1000 * (9.8 + 2) = 1000 * 11.8 = 11,800 N.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-phys-04',
    subject: 'Physics',
    chapterId: 'phys-nlm',
    chapterTitle: 'Laws of Motion & Friction',
    questionType: 'mcq_multiple',
    difficulty: 'advanced',
    questionText: 'Which of the following statements about friction between two rough solid surfaces are TRUE? (Select all that apply)',
    options: [
      'A) Kinetic friction is generally less than limiting static friction.',
      'B) Friction always acts opposite to the direction of motion relative to the contact surface.',
      'C) Friction can act as an accelerating force (e.g. for a person walking or car moving).',
      'D) Static friction does mechanical work on an object in all inertial frames.'
    ],
    correctAnswer: 'A,B,C',
    explanation: 'A is true because interlocking of asperities takes time to form in static contact. B is true because friction opposes relative motion. C is true because friction pushes the foot/tyre forward, accelerating the system. D is false; static friction can do zero or positive work depending on the reference frame.',
    sourceType: 'JEE Advanced PYQ',
    marksPositive: 4,
    marksNegative: 2
  },
  {
    id: 'q-phys-05',
    subject: 'Physics',
    chapterId: 'phys-rotational',
    chapterTitle: 'Rotational Motion & Rigid Body Dynamics',
    questionType: 'mcq_single',
    difficulty: 'advanced',
    questionText: 'A thin uniform circular ring of mass M and radius R rolls without slipping on a horizontal plane with velocity v. What fraction of its total kinetic energy is rotational?',
    options: ['A) 1/2', 'B) 1/3', 'C) 2/3', 'D) 1/4'],
    correctAnswer: 'A',
    explanation: 'For a ring, moment of inertia I = M R^2. Translational KE = 1/2 M v^2. Rotational KE = 1/2 I omega^2 = 1/2 (M R^2)(v/R)^2 = 1/2 M v^2. Total KE = 1/2 M v^2 + 1/2 M v^2 = M v^2. The fraction that is rotational is (1/2 M v^2) / (M v^2) = 1/2 (50%).',
    sourceType: 'JEE Advanced PYQ',
    marksPositive: 4,
    marksNegative: 1
  },

  // CHEMISTRY QUESTIONS
  {
    id: 'q-chem-01',
    subject: 'Chemistry',
    chapterId: 'chem-mole-concept',
    chapterTitle: 'Mole Concept & Stoichiometry',
    questionType: 'mcq_single',
    difficulty: 'beginner',
    questionText: 'What is the total number of moles of electrons in 18 mL of liquid water at 4°C? (Density of water = 1.0 g/mL)',
    options: ['A) 1 mole', 'B) 10 moles', 'C) 18 moles', 'D) 0.1 mole'],
    correctAnswer: 'B',
    explanation: 'Mass of 18 mL water = 18 g. Moles of H2O = 18 / 18 = 1 mol. One molecule of H2O contains 2(from H) + 8(from O) = 10 electrons. Therefore, 1 mole of H2O molecules contains 10 moles of electrons (10 * N_A electrons).',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-chem-02',
    subject: 'Chemistry',
    chapterId: 'chem-mole-concept',
    chapterTitle: 'Mole Concept & Stoichiometry',
    questionType: 'numerical',
    difficulty: 'intermediate',
    questionText: 'In the combustion reaction C3H8 + 5 O2 -> 3 CO2 + 4 H2O, how many moles of CO2 are produced from 2 moles of C3H8 with excess oxygen?',
    correctAnswer: '6',
    explanation: 'From the stoichiometric equation, 1 mole of propane (C3H8) produces 3 moles of carbon dioxide (CO2). Therefore, 2 moles of C3H8 will produce 2 * 3 = 6 moles of CO2.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 0
  },
  {
    id: 'q-chem-03',
    subject: 'Chemistry',
    chapterId: 'chem-goc',
    chapterTitle: 'General Organic Chemistry (GOC) & Resonance',
    questionType: 'mcq_single',
    difficulty: 'intermediate',
    questionText: 'Which among the following carbocations is the MOST stable?',
    options: [
      'A) (CH3)3C+ (tert-butyl carbocation)',
      'B) (C6H5)3C+ (triphenylmethyl carbocation)',
      'C) CH2=CH-CH2+ (allyl carbocation)',
      'D) CH3-CH2+ (ethyl carbocation)'
    ],
    correctAnswer: 'B',
    explanation: 'The triphenylmethyl carbocation (trityl carbocation, (C6H5)3C+) is exceptionally stabilized by extensive resonance delocalization of positive charge across 3 aromatic benzene rings (9 canonical resonance structures).',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-chem-04',
    subject: 'Chemistry',
    chapterId: 'chem-periodic-table',
    chapterTitle: 'Periodic Table & Chemical Bonding',
    questionType: 'mcq_single',
    difficulty: 'advanced',
    questionText: 'According to Molecular Orbital Theory, which of the following species has the HIGHEST bond order?',
    options: ['A) O2', 'B) O2+', 'C) O2-', 'D) O2(2-)'],
    correctAnswer: 'B',
    explanation: 'Bond orders from MOT: O2 (16 e-) = 2.0; O2+ (15 e-) = 2.5; O2- (17 e-) = 1.5; O2(2-) (18 e-) = 1.0. Therefore O2+ has the highest bond order (2.5) and the shortest O-O bond length.',
    sourceType: 'JEE Advanced PYQ',
    marksPositive: 4,
    marksNegative: 1
  },

  // MATHEMATICS QUESTIONS
  {
    id: 'q-math-01',
    subject: 'Mathematics',
    chapterId: 'math-quadratics',
    chapterTitle: 'Quadratic Equations & Complex Numbers',
    questionType: 'mcq_single',
    difficulty: 'intermediate',
    questionText: 'If alpha and beta are roots of x^2 - 6x + 2 = 0, what is the value of (alpha^2 + beta^2)?',
    options: ['A) 32', 'B) 36', 'C) 34', 'D) 40'],
    correctAnswer: 'A',
    explanation: 'From Vieta formulas: alpha + beta = 6, and alpha * beta = 2. Now, alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta = 6^2 - 2(2) = 36 - 4 = 32.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-math-02',
    subject: 'Mathematics',
    chapterId: 'math-quadratics',
    chapterTitle: 'Quadratic Equations & Complex Numbers',
    questionType: 'numerical',
    difficulty: 'advanced',
    questionText: 'If 1, omega, omega^2 are the cube roots of unity, evaluate the value of (1 + omega)(1 + omega^2)(1 + omega^4)(1 + omega^8).',
    correctAnswer: '1',
    explanation: 'Note that omega^4 = omega^3 * omega = omega, and omega^8 = omega^6 * omega^2 = omega^2. Thus the expression is: (1 + omega)(1 + omega^2) * (1 + omega)(1 + omega^2) = [(1 + omega)(1 + omega^2)]^2. Since 1 + omega + omega^2 = 0: 1 + omega = -omega^2, and 1 + omega^2 = -omega. Product = (-omega^2)(-omega) = omega^3 = 1. Therefore [1]^2 = 1.',
    sourceType: 'JEE Advanced PYQ',
    marksPositive: 4,
    marksNegative: 0
  },
  {
    id: 'q-math-03',
    subject: 'Mathematics',
    chapterId: 'math-calculus-diff',
    chapterTitle: 'Differential Calculus & Application of Derivatives',
    questionType: 'mcq_single',
    difficulty: 'intermediate',
    questionText: 'What is the slope of the tangent to the curve y = x^3 - 3x + 2 at the point x = 2?',
    options: ['A) 9', 'B) 6', 'C) 12', 'D) 3'],
    correctAnswer: 'A',
    explanation: 'The slope of tangent m = dy/dx. Here dy/dx = d/dx(x^3 - 3x + 2) = 3x^2 - 3. At x = 2: m = 3(2^2) - 3 = 3(4) - 3 = 12 - 3 = 9.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-math-04',
    subject: 'Mathematics',
    chapterId: 'math-integration',
    chapterTitle: 'Definite Integration & Differential Equations',
    questionType: 'mcq_single',
    difficulty: 'advanced',
    questionText: 'Evaluate integral from 0 to pi of [x sin x / (1 + cos^2 x)] dx.',
    options: ['A) pi^2 / 4', 'B) pi / 4', 'C) pi^2 / 2', 'D) pi / 2'],
    correctAnswer: 'A',
    explanation: 'Let I = integral from 0 to pi of [x sin x / (1 + cos^2 x)] dx. Apply King property: I = integral from 0 to pi of [(pi - x) sin(pi - x) / (1 + cos^2(pi - x))] dx = integral from 0 to pi of [(pi - x) sin x / (1 + cos^2 x)] dx. Adding 2I = pi * integral from 0 to pi of [sin x / (1 + cos^2 x)] dx. Let u = cos x, du = -sin x dx. As x: 0 -> pi, u: 1 -> -1. 2I = pi * integral from -1 to 1 of [1 / (1 + u^2)] du = pi * [arctan(u)] from -1 to 1 = pi * [pi/4 - (-pi/4)] = pi * (pi/2) = pi^2 / 2. Therefore, I = pi^2 / 4.',
    sourceType: 'JEE Advanced PYQ',
    marksPositive: 4,
    marksNegative: 1
  },
  {
    id: 'q-math-05',
    subject: 'Mathematics',
    chapterId: 'math-integration',
    chapterTitle: 'Definite Integration & Differential Equations',
    questionType: 'numerical',
    difficulty: 'intermediate',
    questionText: 'Find the integrating factor (I.F.) for the differential equation dy/dx + (2/x)y = x^3. What is the power of x in the integrating factor?',
    correctAnswer: '2',
    explanation: 'Standard linear equation dy/dx + P(x)y = Q(x), with P(x) = 2/x. Integrating Factor I.F. = exp(integral 2/x dx) = exp(2 ln x) = exp(ln(x^2)) = x^2. The power of x is 2.',
    sourceType: 'JEE Main PYQ',
    marksPositive: 4,
    marksNegative: 0
  }
];

export interface MockTestWithFormat extends MockTest {
  formatType: 'full_length' | 'subject_wise' | 'chapter_wise';
  subjectName?: string;
}

export const MOCK_TESTS: MockTestWithFormat[] = [
  {
    id: 'test-jee-main-full-01',
    title: 'JEE Main Full-Length Mock Test 1',
    examinationType: 'JEE Main',
    formatType: 'full_length',
    durationMinutes: 180,
    totalMarks: 300,
    questionIds: [
      'q-phys-01', 'q-phys-02', 'q-phys-03', 'q-phys-05',
      'q-chem-01', 'q-chem-02', 'q-chem-03', 'q-chem-04',
      'q-math-01', 'q-math-02', 'q-math-03', 'q-math-04'
    ],
    description: 'Complete 3-hour examination covering Physics, Chemistry, and Mathematics with Single Choice and Numerical response questions (+4, -1 marking).',
    instructions: [
      'Test covers Physics, Chemistry, and Mathematics.',
      'Marking: +4 for correct answer, -1 for incorrect MCQ, 0 for unattempted.',
      'For numerical questions, enter the calculated value.'
    ],
    passingScore: 120
  },
  {
    id: 'test-jee-main-sub-phys',
    title: 'JEE Main Subject Test: Physics',
    examinationType: 'JEE Main',
    formatType: 'subject_wise',
    subjectName: 'Physics',
    durationMinutes: 60,
    totalMarks: 100,
    questionIds: ['q-phys-01', 'q-phys-02', 'q-phys-03', 'q-phys-04', 'q-phys-05'],
    description: 'Focused 1-hour test evaluating mechanics, thermodynamics, and electrodynamics for JEE Main.',
    instructions: [
      'Targeted Physics preparation test.',
      'Marking Scheme: +4 marks for correct, -1 for incorrect.'
    ],
    passingScore: 40
  },
  {
    id: 'test-jee-main-chap-math',
    title: 'JEE Main Chapter Test: Definite Integration',
    examinationType: 'JEE Main',
    formatType: 'chapter_wise',
    subjectName: 'Mathematics',
    durationMinutes: 45,
    totalMarks: 50,
    questionIds: ['q-math-02', 'q-math-04', 'q-math-05'],
    description: 'Chapter-specific test on integral calculus properties and differential equation techniques.',
    instructions: [
      'Practice chapter fundamentals under time constraints.',
      'Marking Scheme: +4 marks for correct, -1 for incorrect.'
    ],
    passingScore: 25
  },
  {
    id: 'test-jee-adv-full-01',
    title: 'JEE Advanced Full-Length Mock Paper 1',
    examinationType: 'JEE Advanced',
    formatType: 'full_length',
    durationMinutes: 180,
    totalMarks: 180,
    questionIds: [
      'q-phys-04', 'q-phys-05', 'q-chem-03', 'q-chem-04',
      'q-math-02', 'q-math-04', 'q-math-05'
    ],
    description: 'High-rigor test with multi-correct options, multi-step conceptual derivations, and numerical integer problems.',
    instructions: [
      'One or more options may be correct in multi-select questions.',
      'Evaluate steps carefully before marking final answers.'
    ],
    passingScore: 75
  },
  {
    id: 'test-jee-adv-sub-chem',
    title: 'JEE Advanced Subject Test: Chemistry',
    examinationType: 'JEE Advanced',
    formatType: 'subject_wise',
    subjectName: 'Chemistry',
    durationMinutes: 60,
    totalMarks: 60,
    questionIds: ['q-chem-01', 'q-chem-02', 'q-chem-03', 'q-chem-04'],
    description: 'Subject-level test testing reaction mechanisms, coordination isomerism, and chemical thermodynamics.',
    instructions: [
      'Advanced conceptual chemical problem solving.',
      'Marking Scheme: +4 for correct, -2 for incorrect in multi-correct.'
    ],
    passingScore: 25
  },
  {
    id: 'test-jee-adv-chap-phys',
    title: 'JEE Advanced Chapter Test: Rotational Dynamics',
    examinationType: 'JEE Advanced',
    formatType: 'chapter_wise',
    subjectName: 'Physics',
    durationMinutes: 45,
    totalMarks: 40,
    questionIds: ['q-phys-03', 'q-phys-04', 'q-phys-05'],
    description: 'Advanced chapter test on torque, angular momentum conservation, and rolling without slipping.',
    instructions: [
      'Solve with rigorous free body diagrams and torque balance.',
      'Marking Scheme: +4 for correct, -1 for incorrect.'
    ],
    passingScore: 18
  },
  {
    id: 'test-c9-foundation-01',
    title: 'Class 9 Foundation Diagnostic Test (Science & Math)',
    examinationType: 'Foundation Test' as any,
    formatType: 'full_length',
    durationMinutes: 60,
    totalMarks: 40,
    questionIds: ['q-c9-p1-01', 'q-c9-p1-02', 'q-c9-p2-01', 'q-c9-c1-01', 'q-c9-c3-01', 'q-c9-m1-01', 'q-c9-m2-01'],
    description: 'Comprehensive Class 9 assessment covering Motion, Laws of Motion, Matter, Atoms & Molecules, Number Systems and Polynomials.',
    instructions: [
      'Designed specifically for Class 9 students preparing their IIT Foundation.',
      'Marking Scheme: +4 marks for correct, -1 for incorrect.'
    ],
    passingScore: 24
  },
  {
    id: 'test-c10-foundation-01',
    title: 'Class 10 Board & IIT Foundation Mock Test',
    examinationType: 'Foundation Test' as any,
    formatType: 'full_length',
    durationMinutes: 90,
    totalMarks: 50,
    questionIds: ['q-c10-p1-01', 'q-c10-p2-01', 'q-c10-p3-01', 'q-c10-c1-01', 'q-c10-c2-01', 'q-c10-m1-01', 'q-c10-m2-01', 'q-c10-m3-01'],
    description: 'Class 10 board and foundation test covering Light, Electricity, Chemical Reactions, Carbon, Quadratic Equations, and Trigonometry.',
    instructions: [
      'Evaluates core Class 10 concepts required for transitioning into Class 11 JEE.',
      'Marking Scheme: +4 marks for correct, -1 for incorrect.'
    ],
    passingScore: 30
  }
];

// Legacy placeholder PDF entries removed; Study Materials Library now serves
// structured class-wise (Class 6-12) and chapter-wise content via studyMaterialCatalog.ts
export const STUDY_MATERIALS: StudyMaterial[] = [];

export const FORMULA_CARDS: FormulaCard[] = [
  {
    id: 'form-01',
    subject: 'Physics',
    chapter: 'Kinematics',
    title: 'Trajectory Equation in terms of Range',
    formula: 'y = x \\tan\\theta \\left(1 - \\frac{x}{R}\\right)',
    explanation: 'Expresses projectile path using horizontal coordinate x, launch angle theta, and total range R. Very useful when ground coordinates are known.',
    units: 'Meters (m)',
    status: 'revision'
  },
  {
    id: 'form-02',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    title: 'Pure Rolling Incline Acceleration',
    formula: 'a_{cm} = \\frac{g \\sin\\theta}{1 + \\frac{I_{cm}}{M R^2}}',
    explanation: 'Gives center-of-mass linear acceleration down an incline of angle theta without slipping. Notice that smaller I_cm / (M R^2) accelerates faster (Sphere beats Ring).',
    units: 'm/s^2',
    status: 'hard'
  },
  {
    id: 'form-03',
    subject: 'Chemistry',
    chapter: 'Solutions & Mole Concept',
    title: 'Molality and Molarity Conversion',
    formula: 'm = \\frac{1000 M}{1000 d - M \\cdot M_w}',
    explanation: 'Converts Molarity (M) into Molality (m) where d is solution density in g/mL and M_w is solute molecular weight in g/mol.',
    units: 'mol / kg',
    status: 'revision'
  },
  {
    id: 'form-04',
    subject: 'Chemistry',
    chapter: 'Chemical Bonding',
    title: 'Steric Number (VSEPR Hybridization)',
    formula: '\\text{SN} = \\sigma\\text{-bonds} + \\text{lone pairs on central atom}',
    explanation: 'SN = 2 (sp), 3 (sp2), 4 (sp3), 5 (sp3d), 6 (sp3d2). Used to rapidly determine geometry and bond angles.',
    units: 'Dimensionless integer',
    status: 'easy'
  },
  {
    id: 'form-05',
    subject: 'Mathematics',
    chapter: 'Definite Integration',
    title: 'Leibniz Integral Differentiation Rule',
    formula: '\\frac{d}{dx} \\left[\\int_{u(x)}^{v(x)} f(t)\\,dt\\right] = f(v(x))\\cdot v\'(x) - f(u(x))\\cdot u\'(x)',
    explanation: 'Differentiates an integral whose upper and lower limits are variable functions of x.',
    units: 'Rate of change',
    status: 'hard'
  },
  {
    id: 'form-06',
    subject: 'Mathematics',
    chapter: 'Quadratic Equations',
    title: 'Location of Roots (Strictly between k1 and k2)',
    formula: 'D \\ge 0, \\quad a \\cdot f(k_1) > 0, \\quad a \\cdot f(k_2) > 0, \\quad k_1 < -\\frac{b}{2a} < k_2',
    explanation: 'Strict criteria ensuring both roots of quadratic f(x) fall entirely inside interval (k1, k2).',
    units: 'Dimensionless conditions',
    status: 'revision'
  }
];

export const SCHOLARSHIPS_DATA: ScholarshipItem[] = [
  {
    id: 'sch-01',
    title: 'Dakshana Foundation IIT-JEE Scholarship Program',
    provider: 'The Dakshana Foundation & Navodaya Vidyalayas',
    category: 'Free Coaching & Boarding for Govt School Students',
    eligibility: 'Class 10 or 12 students studying in Govt / JNV schools with family income < ₹3,00,000/yr.',
    benefits: '100% Free residential IIT-JEE coaching, food, lodging, and books for 1-2 years.',
    deadline: 'December 15, 2025',
    officialUrl: 'https://dakshana.org',
    verifiedDate: 'Verified Nov 2025'
  },
  {
    id: 'sch-02',
    title: 'PM-YASASVI Central Sector Scholarship',
    provider: 'Ministry of Social Justice & Empowerment, Govt of India',
    category: 'OBC, EBC and DNT Students',
    eligibility: 'Class 9-12 students with family income <= ₹2.5 Lakhs/year from recognized schools.',
    benefits: 'Up to ₹1,25,000 per year towards school fees, books, and coaching allowance.',
    deadline: 'January 31, 2026',
    officialUrl: 'https://yet.nta.ac.in',
    verifiedDate: 'Verified Oct 2025'
  },
  {
    id: 'sch-03',
    title: 'AICTE Pragati Scholarship for Girl Students',
    provider: 'All India Council for Technical Education (AICTE)',
    category: 'Women in Engineering & STEM',
    eligibility: 'Female candidates admitted to 1st year of technical degree courses with family income < ₹8 Lakhs.',
    benefits: '₹50,000 per annum for tuition, equipment, and learning resources throughout college.',
    deadline: 'February 28, 2026',
    officialUrl: 'https://www.aicte-india.org',
    verifiedDate: 'Verified Nov 2025'
  },
  {
    id: 'sch-04',
    title: 'Oil India Super 30 / CSR Utkarsha JEE Initiative',
    provider: 'Oil India Limited & Centre for Social Responsibility and Leadership',
    category: 'Free Rural IIT-JEE Coaching',
    eligibility: 'Underprivileged students from Assam, Arunachal Pradesh, Rajasthan, and Odisha.',
    benefits: '11 months free intensive coaching, lodging, food, and mentorship for IIT-JEE.',
    deadline: 'May 10, 2026',
    officialUrl: 'https://www.oil-india.com',
    verifiedDate: 'Verified Oct 2025'
  },
  {
    id: 'sch-05',
    title: 'INSPIRE SHE Scholarship (DST)',
    provider: 'Department of Science and Technology, Govt of India',
    category: 'Higher Science & Research (IISc / IITs)',
    eligibility: 'Top 1% in Class 12 board exams or top rankers in JEE Main/Advanced enrolling in Natural Sciences.',
    benefits: '₹80,000 annually (₹60,000 cash + ₹20,000 mentorship grant for research projects).',
    deadline: 'March 31, 2026',
    officialUrl: 'https://online-inspire.gov.in',
    verifiedDate: 'Verified Nov 2025'
  }
];

export const DAILY_CHALLENGES: DailyChallengeQuestion[] = [
  {
    id: 'dc-01',
    subject: 'Physics',
    difficulty: 'Moderate',
    questionText: 'A particle moves along x-axis such that its velocity is v = 4*sqrt(x). What is its acceleration at t = 2s?',
    options: ['A) 8 m/s^2', 'B) 4 m/s^2', 'C) 16 m/s^2', 'D) 2 m/s^2'],
    correctAnswer: 'A',
    hint: 'Use the formula a = v (dv/dx). Compute derivative of 4*sqrt(x) with respect to x.',
    explanation: 'a = v (dv/dx) = [4*sqrt(x)] * [4 * (1 / (2*sqrt(x)))] = 4*sqrt(x) * (2 / sqrt(x)) = 8 m/s^2. Acceleration is constant!'
  },
  {
    id: 'dc-02',
    subject: 'Chemistry',
    difficulty: 'Moderate',
    questionText: 'What is the hybridization of the central Xenon atom in XeF4 molecule?',
    options: ['A) sp3', 'B) sp3d', 'C) sp3d2', 'D) dsp2'],
    correctAnswer: 'C',
    hint: 'Count valence electrons of Xe (8) + 4 bonded F atoms + 2 lone pairs.',
    explanation: 'Xe has 8 valence electrons. 4 form single bonds with F atoms, leaving 4 electrons = 2 lone pairs. Steric Number = 4 bonds + 2 lone pairs = 6 ==> sp3d2 hybridization with Square Planar geometry.'
  },
  {
    id: 'dc-03',
    subject: 'Mathematics',
    difficulty: 'Moderate',
    questionText: 'If log_2(x) + log_4(x) + log_16(x) = 21/4, find the value of x.',
    options: ['A) 8', 'B) 16', 'C) 32', 'D) 4'],
    correctAnswer: 'A',
    hint: 'Convert all logarithms to base 2 using log_{b^k}(x) = (1/k) log_b(x).',
    explanation: 'log_4(x) = (1/2) log_2(x) and log_16(x) = (1/4) log_2(x). Sum = log_2(x) * [1 + 1/2 + 1/4] = log_2(x) * (7/4). Setting (7/4) log_2(x) = 21/4 ==> log_2(x) = 3 ==> x = 2^3 = 8.'
  },
  {
    id: 'dc-04',
    subject: 'Physics',
    difficulty: 'Bonus Advanced',
    questionText: 'A block of mass m is placed on top of a wedge of mass M (angle theta) on a frictionless floor. If the wedge is accelerated horizontally with acceleration "a" such that the block does not slip on the wedge, what is "a"?',
    options: ['A) g tan(theta)', 'B) g cot(theta)', 'C) g sin(theta)', 'D) g cos(theta)'],
    correctAnswer: 'A',
    hint: 'Draw FBD of the block in the accelerating frame of the wedge. Balance forces along the incline.',
    explanation: 'In the frame of the wedge, pseudo force m*a acts backwards. Along the incline: Downward gravity component mg sin(theta) must be balanced by upward pseudo force component ma cos(theta). mg sin(theta) = ma cos(theta) ==> a = g tan(theta).'
  }
];
