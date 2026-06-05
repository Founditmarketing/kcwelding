import express from 'express';
import dotenv from 'dotenv';
// Use dynamic import or direct import for send-email handler
import handler from './api/send-email';

// Load environmental variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());

// Mock Vercel response helper for Express compatibility
const mockVercelResponse = (res: express.Response) => {
  const originalStatus = res.status.bind(res);
  const originalJson = res.json.bind(res);
  const originalSetHeader = res.setHeader.bind(res);
  const customRes = res as any;
  customRes.status = (statusCode: number) => {
    originalStatus(statusCode);
    return customRes;
  };
  customRes.json = (data: any) => {
    originalJson(data);
    return customRes;
  };
  customRes.setHeader = (name: string, value: string | string[]) => {
    originalSetHeader(name, value);
    return customRes;
  };
  return customRes;
};

app.post('/api/send-email', async (req, res) => {
  console.log('POST /api/send-email request received');
  const vercelRes = mockVercelResponse(res);
  try {
    await handler(req, vercelRes);
  } catch (err) {
    console.error('Server error executing handler:', err);
    res.status(500).json({ error: 'Internal server error executing handler' });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Local API mock server running at http://localhost:${PORT}`);
});
