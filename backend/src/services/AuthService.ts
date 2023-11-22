import TokenUtils from '../utils/TokenUtils';
import ITokenHandler from '../interfaces/ITokenHandler';
import ServiceResponse from '../utils/ServiceResponse';
import { JwtPayload } from 'jsonwebtoken';

export default class AuthService {
  private tokenHandler: ITokenHandler;

  constructor(t: ITokenHandler = new TokenUtils()) {
    this.tokenHandler = t;
  }

  public validateToken(token?: string): ServiceResponse<JwtPayload> {
    try {
      if (!token) return new ServiceResponse<JwtPayload>('UNAUTHORIZED', 'Token not found.');
      if (!token.includes('Bearer')) {
        return new ServiceResponse<JwtPayload>('UNAUTHORIZED', 'Invalid token.');
      }
      const splittedToken = token.split(' ')[1];
      const user = this.tokenHandler.decode(splittedToken);
      return new ServiceResponse<JwtPayload>('OK', user);
    } catch (error) {
      const { message } = error as Error;
      if (message.includes('token') || message.includes('expired')) {
        return new ServiceResponse<JwtPayload>('UNAUTHORIZED', 'Invalid or expired token.');
      }
      return new ServiceResponse<JwtPayload>('INTERNAL_ERROR', 'Internal server error.');
    }
  }
}
