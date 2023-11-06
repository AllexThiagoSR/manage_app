import * as jwt from 'jsonwebtoken';

interface ITokenHandler {
  encode(payload: object): string;
  decode(token: string): jwt.JwtPayload;
}

export default ITokenHandler;
