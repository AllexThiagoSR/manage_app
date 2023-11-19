import { Decimal } from '@prisma/client/runtime/library';
import Service from './Service';

type ServiceItem = {
  serviceId?: number;
  description: string;
  price: Decimal;
  quantity: number;
  service?: Service;
}

export default ServiceItem;
