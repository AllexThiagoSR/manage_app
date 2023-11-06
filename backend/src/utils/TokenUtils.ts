import ITokenHandler from '../interfaces/ITokenHandler';
import * as jwt from 'jsonwebtoken';

export default class TokenUtils implements ITokenHandler {
  private jwt = jwt;
  private secret: string = process.env.JWT_SECRET || 'segredo';

  constructor(private options: jwt.SignOptions = { expiresIn: '2 days' }) {}

  public encode(payload: object): string {
    const token = this.jwt.sign(payload, this.secret, this.options);
    return token;
  }

  public decode(token: string): jwt.JwtPayload {
    const payload = this.jwt.verify(token, this.secret) as jwt.JwtPayload;
    return payload;
  }
}