import { PrismaClient } from '@prisma/client';
import CreateService from '../interfaces/CreateService';
import IServiceModel from '../interfaces/IServiceModel';
import Service from '../interfaces/Service';

export default class ServiceModel implements IServiceModel {
  private model = (new PrismaClient()).service;

  public async create({
    clientFirstName, clientLastName, statusId,
  }: CreateService): Promise<Service> {
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

  public async createWithItems(data: CreateService): Promise<Service> {
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
