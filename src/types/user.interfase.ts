export interface IUser {
  id: number;
  username: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  jwt: string;
  email: string;
}
