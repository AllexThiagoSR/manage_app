import PaymentStatus from './PaymentStatus';
import ServiceItem from './ServiceItem';

type Service = {
  id: number;
  clientFirstName: string;
  clientLastName: string;
  paymentStatus: PaymentStatus;
  serviceDate: Date;
  items?: ServiceItem[];
  totalPrice?: number;
};

export default Service;