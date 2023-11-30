import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import ServiceMiddlewares from '../middlewares/ServiceMiddlwares';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import GeneralMiddlewares from '../middlewares/GeneralMiddlewares';

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
  GeneralMiddlewares.validateId,
  (req, res) => controller.getById(req, res),
);

router.post(
  '/:id/add-items',
  GeneralMiddlewares.validateId,
  (req, res) => controller.addItems(req, res),
);

router.patch(
  '/:id/pay',
  GeneralMiddlewares.validateId,
  AuthMiddleware.checkAdmin,
  ServiceMiddlewares.validatePayment,
  (req, res) => controller.pay(req, res)
);

router.delete(
  '/:id',
  GeneralMiddlewares.validateId,
  AuthMiddleware.checkAdmin,
  (req, res) => controller.deleteService(req, res),
);

export default router;
