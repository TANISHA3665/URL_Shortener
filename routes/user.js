import { Router } from 'express';
import {handleUserSignup} from '../controllers/user.js';
const router = new Router();

router.post('/', handleUserSignup);
export default router;
