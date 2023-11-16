import ICreateServiceItem from './ICreateServiceItem';

export default interface ICreateService {
  clientFirstName: string;
  clientLastName: string;
  statusId?: number;
  items?: ICreateServiceItem[];
}
