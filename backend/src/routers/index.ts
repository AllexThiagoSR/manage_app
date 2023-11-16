import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddlewares from '../middlewares/UserMiddlewares';
// import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();
// const auth = new AuthMiddleware();

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
