import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/login', (req, res) => (new UserController()).login(req, res));

export default router;
