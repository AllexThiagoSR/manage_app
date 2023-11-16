import { PrismaClient } from '@prisma/client';
import User from '../interfaces/User';
import IUserModel from '../interfaces/IUserModel';
import CreateUser from '../interfaces/CreateUser';
import UserResponse from '../interfaces/UserResponse';

export default class UserModel implements IUserModel {
  private model = (new PrismaClient()).user;

  public async getById(id: number): Promise<User | null> {
    const user = await this.model.findUnique({ where: { id }});
    return user;
  }

  public async getByEmail(email: string): Promise<User | null> {
    const user = await this.model.findFirst({ where: { email }});
    return user;
  }

  public async create(data: CreateUser): Promise<UserResponse> {
    const user = await this.model.create({
      data,
      select: {
        email: true,
        fullName: true,
        isAdmin: true,
        id: true,
      }
    });

    return user;
  }
}
