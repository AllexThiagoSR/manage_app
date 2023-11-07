import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor (s: UserService = new UserService()) {
    this.service = s;
  }

  public async login (req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.service.login(email, password);
    return res.status(status).json(data);
  }
}
