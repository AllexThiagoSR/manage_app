import ICreateUser from './ICreateUser';
import IUser from './IUser';

interface IUserModel {
  getById(id: number): Promise<IUser | null>;
  getByEmail(email: string): Promise<IUser | null>;
  create(data: ICreateUser): Promise<IUser>;
}

export default IUserModel;
