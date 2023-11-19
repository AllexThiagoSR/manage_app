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

router.get(
  '/',
  (req, res) => controller.getAll(req, res),
);

router.get(
  '/:id',
  (req, res) => controller.getById(req, res),
)

export default router;
