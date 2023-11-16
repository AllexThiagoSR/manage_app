import { PrismaClient } from '@prisma/client';
import ICreateService from '../interfaces/ICreateService';

export default class ServiceModel {
  private model = (new PrismaClient()).service;

  public async create({ clientFirstName, clientLastName, statusId }: ICreateService) {
    const service = await this.model.create({
      data: {
        clientFirstName,
        clientLastName,
        statusId,
      }
    });
    return service;
  }

  public async createWithItems(data: ICreateService) {
    const service = await this.model.create({
      data: {
        clientFirstName: data.clientFirstName,
        clientLastName: data.clientLastName,
        statusId: data.statusId,
        items: {
          create: data.items,
        }
      },
    });
    return service;
  }
}
