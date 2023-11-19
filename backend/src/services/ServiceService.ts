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
}
