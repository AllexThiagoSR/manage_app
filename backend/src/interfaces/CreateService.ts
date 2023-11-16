import CreateServiceItem from './CreateServiceItem';

type CreateService = {
  clientFirstName: string;
  clientLastName: string;
  statusId?: number;
  items?: CreateServiceItem[];
}

export default CreateService;
