import CreateUser from './CreateUser';
import User from './User';
import UserResponse from './UserResponse';

interface IUserModel {
  getById(id: number): Promise<User | null>;
  getByEmail(email: string): Promise<User | null>;
  create(data: CreateUser): Promise<UserResponse>;
}

export default IUserModel;
