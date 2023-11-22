import { Decimal } from '@prisma/client/runtime/library';
import Service from './Service';

type Payment = {
  id: number,
  serviceId?: number,
  service?: Service,
  paidValue: Decimal,
  paymentTypeId?: number,
  paymentDate: Date,
};
export default Payment;