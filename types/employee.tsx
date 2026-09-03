export interface EmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  salary: number;
}


export interface EmployeeResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  department: string;
  salary: number;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}