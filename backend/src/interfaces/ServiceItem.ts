import Service from './Service';

type ServiceItem = {
  serviceId?: number;
  description: string;
  price: number;
  quantity: number;
  service?: Service;
}

export default ServiceItem;
