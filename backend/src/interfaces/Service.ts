import PaymentStatus from './PaymentStatus';
import ServiceItem from './ServiceItem';

type Service = {
  id: number;
  clientFirstName: string;
  clientLastName: string;
  paymentStatus: PaymentStatus;
  items?: ServiceItem[];
};

export default Service;
