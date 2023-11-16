interface IUserResponse {
  id: number;
  fullName: string;
  email: string;
  isAdmin: boolean;
  employeeId?: number | null;
  employee?: unknown | null;
}

export default IUserResponse;