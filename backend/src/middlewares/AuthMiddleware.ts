import TokenUtils from '../utils/TokenUtils';
import ITokenHandler from '../interfaces/ITokenHandler';
import { NextFunction, Request, Response } from 'express';

export default class AuthMiddleware {
  private tokenHandler: ITokenHandler;

  constructor(t: ITokenHandler = new TokenUtils()) {
    this.tokenHandler = t;
  }

  public validateToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.header('Authorization');
      if (!token) return res.status(401).json({ message: 'Token not found' });
      if (!token.includes('Bearer')) return res.status(401).json({ message: 'Invalid token' });
      token = token.split(' ')[1];
      const user = this.tokenHandler.decode(token);
      res.locals.user = user;
      return next();
    } catch (error) {
      const { message } = error as Error;
      if (message.includes('token')) return res.status(401).json({ message: 'Invalid token' });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public static checkAdmin(req: Request, res: Response, next: NextFunction) {
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
