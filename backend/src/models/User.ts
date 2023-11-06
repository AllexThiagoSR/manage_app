import { PrismaClient } from '@prisma/client';
import IUser from '../interfaces/IUser';

export default class UserModel {
  private model = (new PrismaClient()).user;

  public async getById(id: number): Promise<IUser | null> {
    const user = await this.model.findUnique({ where: { id }});
    return user;
  }

  public async getByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findFirst({ where: { email }});
    return user;
  }
}
