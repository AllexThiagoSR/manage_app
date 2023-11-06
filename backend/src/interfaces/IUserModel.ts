import IUser from './IUser';

interface IUserModel {
  getById(id: number): Promise<IUser | null>;
  getByEmail(email: string): Promise<IUser | null>;
}

export default IUserModel;
