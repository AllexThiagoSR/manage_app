import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import ServiceMiddlewares from '../middlewares/ServiceMiddlwares';

const router = Router();

const controller = new ServiceController();

router.post(
  '/',
  ServiceMiddlewares.validateServiceFields,
  (req, res) => controller.create(req, res),
);

export default router;
