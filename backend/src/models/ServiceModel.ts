import { PrismaClient } from '@prisma/client';
import CreateService from '../interfaces/CreateService';
import IServiceModel from '../interfaces/IServiceModel';
import Service from '../interfaces/Service';

export default class ServiceModel implements IServiceModel {
  private model = (new PrismaClient()).service;
  private itemsModel = (new PrismaClient()).serviceItem;

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
        serviceDate: true,
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
        serviceDate: true,
      },
    });
    return service;
  }

  public async getAll(): Promise<Service[]> {
    const services = await this.model.findMany({
      select: {
        clientFirstName: true,
        clientLastName: true,
        id: true,
        paymentStatus: true,
        serviceDate: true,
      }
    });
    return services;
  }

  public async getById(id: number): Promise<Service | null> {
    const service = await this.model.findUnique({
      where: { id },
      select: {
        clientFirstName: true,
        clientLastName: true,
        id: true,
        paymentStatus: true,
        serviceDate: true,
        items: { select: { description: true, price: true, quantity: true } },
      },
    });
    return service;
  }
}
