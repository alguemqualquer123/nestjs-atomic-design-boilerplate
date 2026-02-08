import { UserRole } from '../enums/user-role.enum';

export interface User {
  id: string;
  email: string;
  name: string | null;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
