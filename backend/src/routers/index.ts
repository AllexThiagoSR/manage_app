import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddlewares from '../middlewares/UserMiddlewares';

const router = Router();

router.post(
  '/login',
  UserMiddlewares.validateLogin,
  (req, res) => (new UserController()).login(req, res),
);
router.post(
  '/signup',
  UserMiddlewares.validateSignUp,
  (req, res) => (new UserController()).signUp(req, res),
);

export default router;
