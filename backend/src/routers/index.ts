import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddlewares from '../middlewares/UserMiddlewares';
import serviceRouter from './service.routes';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();
const auth = new AuthMiddleware();

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

router.use((req, res, next) => auth.validateToken(req, res, next))

router.use('/services', serviceRouter);

export default router;
