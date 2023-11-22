import CreateServiceItem from './CreateServiceItem';

type CreateService = {
  clientFirstName: string;
  clientLastName: string;
  items?: CreateServiceItem[];
}

export default CreateService;
