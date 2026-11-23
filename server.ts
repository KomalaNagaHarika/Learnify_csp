import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getServerMockTestById,
  listFilteredMockTests,
} from './server/mockTestCatalog';
import {
  getActiveSession,
  getStudentAttemptDetail,
  getStudentTestHistory,
  saveSessionProgress,
  startTestSession,
  submitTestSession,
} from './server/mockTestService';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// CORS configuration for cross-origin frontend deployments (e.g. Vercel -> external Node backend)
const DEFAULT_ALLOWED_ORIGINS = [
  'https://learnify-csp.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173',
];
const envOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim().replace(/\/+$/, ''))
  .filter(Boolean);
const appUrlOrigin = (process.env.APP_URL || '').trim().replace(/\/+$/, '');
const allowedOrigins = new Set([
  ...DEFAULT_ALLOWED_ORIGINS,
  ...envOrigins,
  ...(appUrlOrigin ? [appUrlOrigin] : []),
]);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (
    origin &&
    (allowedOrigins.has(origin) ||
      /^https:\/\/learnify-csp[a-z0-9-]*\.vercel\.app$/i.test(origin))
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
});

app.use(express.json({ limit: '256kb' }));

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// ============================================================================
// MOCK TESTS SECURE SERVER-SIDE API ROUTES
// ============================================================================

// 1. List filtered Mock Tests (public metadata only — no answers or explanations)
app.get('/api/mock-tests', (req, res) => {
  const tests = listFilteredMockTests({
    foundation: typeof req.query.foundation === 'string' ? req.query.foundation : undefined,
    classLevel: typeof req.query.classLevel === 'string' ? req.query.classLevel : undefined,
    subject: typeof req.query.subject === 'string' ? req.query.subject : undefined,
    testType: typeof req.query.testType === 'string' ? req.query.testType : undefined,
    difficulty: typeof req.query.difficulty === 'string' ? req.query.difficulty : undefined,
  });
  res.json({ tests });
});

// 2. Fetch student's immutable Mock Test History
app.get('/api/mock-tests/attempts', (req, res) => {
  const studentId = typeof req.query.studentId === 'string' ? req.query.studentId : '';
  const result = getStudentTestHistory(studentId);
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json(result);
});

// 3. Fetch single immutable completed attempt with answer review (owner-only)
app.get('/api/mock-tests/attempts/:attemptId', (req, res) => {
  const studentId = typeof req.query.studentId === 'string' ? req.query.studentId : '';
  const result = getStudentAttemptDetail(req.params.attemptId, studentId);
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json({ attempt: result });
});

// 4. Resume active test session (restores answers, palette, and server-authoritative timer)
app.get('/api/mock-tests/sessions/:sessionId', (req, res) => {
  const studentId = typeof req.query.studentId === 'string' ? req.query.studentId : '';
  const result = getActiveSession(req.params.sessionId, studentId);
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json(result);
});

// 5. Autosave in-progress exam answers and palette state
app.put('/api/mock-tests/sessions/:sessionId/progress', (req, res) => {
  const { studentId, answers, markedForReview, visitedIds, currentIndex } = req.body || {};
  const result = saveSessionProgress({
    sessionId: req.params.sessionId,
    studentId,
    answers,
    markedForReview,
    visitedIds,
    currentIndex,
  });
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json(result);
});

// 6. Secure server-side evaluation & idempotent submission (ignores client scores)
app.post('/api/mock-tests/sessions/:sessionId/submit', (req, res) => {
  const { studentId, answers, autoSubmitted } = req.body || {};
  const result = submitTestSession({
    sessionId: req.params.sessionId,
    studentId,
    answers,
    autoSubmitted: Boolean(autoSubmitted),
  });
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.json({ attempt: result });
});

// 7. Get single Mock Test instructions & metadata (no questions/answers before start)
app.get('/api/mock-tests/:testId', (req, res) => {
  const testDef = getServerMockTestById(req.params.testId);
  if (!testDef) {
    res.status(404).json({ error: 'Mock test not found.' });
    return;
  }
  res.json({ test: testDef.summary });
});

// 8. Start a timed Mock Test session (returns sanitized questions without correct answers)
app.post('/api/mock-tests/:testId/start', (req, res) => {
  const { studentId, studentName } = req.body || {};
  const result = startTestSession({
    testId: req.params.testId,
    studentId,
    studentName,
  });
  if ('error' in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }
  res.status(201).json({ session: result });
});

// Return JSON 404 for unknown /api/* endpoints instead of HTML SPA fallback
app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API endpoint not found.' });
});

// Server bootstrap
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Learnify Production Server running on http://localhost:${PORT}`);
  });
}

startServer();
