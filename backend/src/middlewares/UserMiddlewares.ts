import { NextFunction, Request, Response } from 'express';
import * as joi from 'joi';

export default class UserMiddlewares {
  private static loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
  });

  private static signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    fullName: joi.string().required().min(5),
  });

  public static validateLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { error } = UserMiddlewares.loginSchema.validate(req.body);
      if (error) return res.status(400).json({ message: 'Invalid password or email' });
      return next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public static validateSignUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { error } = UserMiddlewares.signUpSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.message });
      return next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
