import { Router } from 'express';
import URL from '../models/url.js';

const router = Router();

router.get('/', async (req, res) => {
  const allurls = await URL.find({});
    return res.render('home',
    {urls: allurls});
});

export default router;
