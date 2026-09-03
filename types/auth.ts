export type UserRole = "EMPLOYEE" | "HR" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}