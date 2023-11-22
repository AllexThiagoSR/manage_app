import { NextFunction, Request, Response } from 'express';
import * as joi from 'joi';

export default class ServiceMiddlewares {
  private static validateItemService = joi.object({
    description: joi.string().required().min(5),
    price: joi.number().required(),
    quantity: joi.number().integer().min(1).required(),
  });

  private static validateService = joi.object({
    clientFirstName: joi.string().required().min(3),
    clientLastName: joi.string().required().min(3),
    items: joi.array().items(ServiceMiddlewares.validateItemService),
  });

  public static validateServiceFields(req: Request, res: Response, next: NextFunction) {
    const { error } = ServiceMiddlewares.validateService.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return next();
  }
}
