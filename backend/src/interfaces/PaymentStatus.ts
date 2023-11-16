import Service from './Service';

type PaymentStatus = {
  id: number;
  name: string;
  description: string;
  services?: Service[];
}

export default PaymentStatus;

