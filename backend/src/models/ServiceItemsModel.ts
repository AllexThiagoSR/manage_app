import { PrismaClient } from '@prisma/client';
import IServiceItemsModel from '../interfaces/IServiceItemsModel';
import AddItem from '../interfaces/AddItem';

export default class ServiceItemsModel implements IServiceItemsModel {
  private model = new PrismaClient().serviceItem;

  public async addItemInService(items: AddItem[]): Promise<{ count: number }> {
    const itemsAdded = await this.model.createMany({
      data: items,
    });
    return itemsAdded;
  }
}
