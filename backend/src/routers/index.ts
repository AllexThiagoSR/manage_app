import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/login', (req, res) => (new UserController()).login(req, res));
router.post('/signup', (req, res) => (new UserController()).signUp(req, res));

export default router;
