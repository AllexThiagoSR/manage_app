import { PrismaClient } from '@prisma/client';
import IUser from '../interfaces/IUser';
import IUserModel from '../interfaces/IUserModel';
import ICreateUser from '../interfaces/ICreateUser';

export default class UserModel implements IUserModel {
  private model = (new PrismaClient()).user;

  public async getById(id: number): Promise<IUser | null> {
    const user = await this.model.findUnique({ where: { id }});
    return user;
  }

  public async getByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findFirst({ where: { email }});
    return user;
  }

  public async create(data: ICreateUser) {
    const user = await this.model.create({
      data,
    });

    return user;
  }
}
