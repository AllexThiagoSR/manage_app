import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import ServiceMiddlewares from '../middlewares/ServiceMiddlwares';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();

const controller = new ServiceController();

router.post(
  '/',
  AuthMiddleware.checkAdmin,
  ServiceMiddlewares.validateServiceFields,
  (req, res) => controller.create(req, res),
);

export default router;
