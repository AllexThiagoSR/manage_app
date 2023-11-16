import ICreateUser from './ICreateUser';
import IUser from './IUser';
import IUserResponse from './IUserResponse';

interface IUserModel {
  getById(id: number): Promise<IUser | null>;
  getByEmail(email: string): Promise<IUser | null>;
  create(data: ICreateUser): Promise<IUserResponse>;
}

export default IUserModel;
