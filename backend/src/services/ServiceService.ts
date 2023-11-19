import ServiceModel from '../models/ServiceModel';
import IServiceModel from '../interfaces/IServiceModel';
import CreateService from '../interfaces/CreateService';
import ServiceResponse from '../utils/ServiceResponse';
import Service from '../interfaces/Service';

export default class ServiceService {
  private model: IServiceModel;

  constructor(m: IServiceModel = new ServiceModel()) {
    this.model = m;
  }

  public async create(data: CreateService): Promise<ServiceResponse<Service>> {
    try {
      let service: Service;
      if (data.items && data.items.length > 0) {
        service = await this.model.createWithItems(data);
      } else {
        service = await this.model.create(data);
      }
      return new ServiceResponse<Service>('CREATED', service);
    } catch (error) {
      return new ServiceResponse<Service>('INTERNAL_ERROR', 'Internal server error');
    }
  }

  public async getAll(): Promise<ServiceResponse<Service[]>> {
    try {
      const services = await this.model.getAll();
      return new ServiceResponse<Service[]>('OK', services);
    } catch (error) {
      return new ServiceResponse<Service[]>('INTERNAL_ERROR', 'Internal server error');
    }
  }

  public async getById(id: number): Promise<ServiceResponse<Service>> {
    try {
      const service = await this.model.getById(id);
      if (service === null) {
        return new ServiceResponse<Service>('NOT_FOUND', 'Service not found');
      }
      const totalPrice = service
        .items?.reduce((acc, { price }) => acc + parseFloat(price.toString()), 0);
      return new ServiceResponse<Service>('OK', { ...service, totalPrice });
    } catch (error) {
      return new ServiceResponse<Service>('INTERNAL_ERROR', 'Internal server error');
    }
  }
}
