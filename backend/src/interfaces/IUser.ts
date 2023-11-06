interface IUser {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
  employeeId?: number | null;
  employee?: unknown | null;
}

export default IUser;