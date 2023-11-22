import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';
import ServiceResponse from '../utils/ServiceResponse';

export default class AuthMiddleware {
  private tokenService: AuthService;

  constructor(t: AuthService = new AuthService()) {
    this.tokenService = t;
  }

  public validateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('Authorization');
      res.locals.user = this.tokenService.validateToken(token)
      return next();
    } catch (error) {
      const { status, data } = error as ServiceResponse<null>
      return res.status(status).json(data);
    }
  }

  public static checkAdmin(_req: Request, res: Response, next: NextFunction) {
    try {
      if (!res.locals.user.isAdmin) {
        return res.status(403).json({ message: 'Only admins can access this route' });
      }
      return next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
