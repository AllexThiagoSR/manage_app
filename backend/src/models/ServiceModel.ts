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
      },
      select: {
        clientFirstName: true,
        clientLastName: true,
        id: true,
        paymentStatus: true,
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
        items: { create: data.items }
      },
      select: {
        clientFirstName: true,
        clientLastName: true,
        id: true,
        paymentStatus: true,
      }
      // include: { paymentStatus: true },
    });
    return service;
  }
}
