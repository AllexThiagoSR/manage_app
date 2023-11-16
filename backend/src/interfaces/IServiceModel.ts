import CreateService from './CreateService';
import Service from './Service';

export default interface IServiceModel {
  create(data: CreateService): Promise<Service>;
  createWithItems(data: CreateService): Promise<Service>;
}
