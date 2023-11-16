import IService from './IService';

export default interface IServiceItem {
  serviceId?: number;
  description: string;
  price: number;
  quantity: number;
  service?: IService;
}
