export type RoleType = "ADMIN" | "HR" | "EMPLOYEE";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "INTERN"
  | "TEMPORARY";

export type EmployeeStatus = "ACTIVE" | "INACTIVE";

export interface EmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: RoleType;
  department: string;
  designation: string;
  joiningDate: string;
  employmentType: EmploymentType;
  salary: number;
}

export interface EmployeeResponse {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: RoleType;
  department: string;
  designation: string;
  joiningDate: string;
  employmentType: EmploymentType;
  salary: number;
  status: EmployeeStatus;
}

export interface EmployeePage {
  content: EmployeeResponse[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

export interface EmployeeFilterParams {
  department?: string;
  minSalary?: number;
  maxSalary?: number;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}