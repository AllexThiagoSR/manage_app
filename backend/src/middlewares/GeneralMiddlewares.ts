import { NextFunction, Request, Response } from 'express';
import * as joi from 'joi';

export default class GeneralMiddlewares {
  private static idSchema = joi.object({
    id: joi.number().integer().required(),
  });

  public static validateId(req: Request, res: Response, next: NextFunction) {
    const { error } = GeneralMiddlewares.idSchema.validate({ id: req.params.id });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return next();
  }
}
