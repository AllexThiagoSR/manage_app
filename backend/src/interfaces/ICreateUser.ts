interface ICreateUser {
  email: string;
  fullName: string;
  password: string;
  isAdmin: boolean;
  employeeId?: number;
}

export default ICreateUser;