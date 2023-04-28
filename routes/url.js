import { Router } from 'express';
import {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectUrl,
} from '../controllers/url.js';

const router = Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleRedirectUrl);
router.get('/analytics/:shortId', handleGetAnalytics);
export default router;
