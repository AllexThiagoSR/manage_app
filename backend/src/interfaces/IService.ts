import IServiceItem from './IServiceItem';

export default interface IService {
  id: number;
  clientFirstName: string;
  clientLastName: string;
  paymentStatus: string;
  items?: IServiceItem[];
}
