import TokenUtils from '../utils/TokenUtils';
import ITokenHandler from '../interfaces/ITokenHandler';
import ServiceResponse from '../utils/ServiceResponse';
import { JwtPayload } from 'jsonwebtoken';

export default class AuthService {
  private tokenHandler: ITokenHandler;

  constructor(t: ITokenHandler = new TokenUtils()) {
    this.tokenHandler = t;
  }

  public validateToken(token?: string): JwtPayload {
    try {
      if (!token) throw new ServiceResponse<null>('UNAUTHORIZED', 'Token not found.');
      if (!token.includes('Bearer')) {
        throw new ServiceResponse<null>('UNAUTHORIZED', 'Invalid token.');
      }
      const splittedToken = token.split(' ')[1];
      const user = this.tokenHandler.decode(splittedToken);
      return user;
    } catch (error) {
      const { message } = error as Error;
      if (message.includes('token') || message.includes('expired')) {
        throw new ServiceResponse<null>('UNAUTHORIZED', 'Invalid or expired token.');
      }
      throw new ServiceResponse<null>('INTERNAL_ERROR', 'Internal server error.');
    }
  }
}
