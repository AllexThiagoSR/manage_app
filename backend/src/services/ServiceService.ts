import ServiceModel from '../models/ServiceModel';
import IServiceModel from '../interfaces/IServiceModel';
import CreateService from '../interfaces/CreateService';
import ServiceResponse from '../utils/ServiceResponse';
import Service from '../interfaces/Service';
import PaymentHistoryModel from '../models/PaymentHistoryModel';
import ServiceItem from '../interfaces/ServiceItem';
import Payment from '../interfaces/Payment';

type PayData = {
  service: Service, value: number, paymentTypeId: number, totalPaid: number, totalPrice: number,
};

export default class ServiceService {
  private model: IServiceModel;
  private paymentModel: PaymentHistoryModel;

  constructor(
    m: IServiceModel = new ServiceModel(),
    p: PaymentHistoryModel = new PaymentHistoryModel()
  ) {
    this.model = m;
    this.paymentModel = p;
  }

  private static calculateTotalPrice(items?: ServiceItem[]) {
    const totalPrice = items?.reduce((acc, { price }) => acc + parseFloat(price.toString()), 0);
    return totalPrice || 0;
  }

  private static calculatePaidValue(payments?: Payment[]) {
    console.log(payments)
    const totalPaid = payments
      ?.reduce((acc, { paidValue }) => acc + parseFloat(paidValue.toString()), 0);
    return totalPaid || 0;
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
      const totalPrice = ServiceService.calculateTotalPrice(service.items);
      const totalPaid = ServiceService.calculatePaidValue(service.paymentsHistory);
      return new ServiceResponse<Service>('OK', { ...service, totalPrice, totalPaid });
    } catch (error) {
      return new ServiceResponse<Service>('INTERNAL_ERROR', 'Internal server error');
    }
  }

  private async payAndChangeStatus(
    { service, value, paymentTypeId, totalPaid, totalPrice }: PayData
  ): Promise<Service> {
    await this.paymentModel.create(service.id, paymentTypeId, value);

    if (totalPrice === totalPaid + value) {
      const updatedService = await this.model.updatePaymentStatus(service.id, 3);
      return { ...updatedService, totalPrice, totalPaid: totalPaid + value };
    }

    if (service.paymentStatus?.id === 1) {
      const updatedService = await this.model.updatePaymentStatus(service.id, 2);
      return { ...updatedService, totalPrice, totalPaid: totalPaid + value };
    }

    const updatedService = await this.model.getById(service.id) as Service;
    return  { ...updatedService, totalPrice, totalPaid: totalPaid + value };
  }

  public async pay(
    id: number, value: number, paymentTypeId: number
  ): Promise<ServiceResponse<Service>> {
    try {
      const service = await this.model.getById(id);

      if (!service) return new ServiceResponse<Service>('NOT_FOUND', 'Service not found.');

      const totalPrice = ServiceService.calculateTotalPrice(service.items)
      const totalPaid = ServiceService.calculatePaidValue(service.paymentsHistory);

      if (totalPaid === totalPrice)
        return new ServiceResponse<Service>('CONFLICT', 'Service has already been paid.');

      if (totalPaid + value > totalPrice)
        return new ServiceResponse<Service>('CONFLICT', 'Value invalid.');

      const updatedService = await this
        .payAndChangeStatus({ service, value, paymentTypeId ,totalPaid ,totalPrice })
      return new ServiceResponse('OK', updatedService);
    } catch (error) {
      return new ServiceResponse<Service>('INTERNAL_ERROR', 'Internal server error.');
    }
  }
}
