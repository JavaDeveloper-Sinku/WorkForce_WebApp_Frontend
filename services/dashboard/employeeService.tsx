import api from "@/lib/axios";

/* =========================
   Employee Types
========================= */

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

/* =========================
   Pagination Types
========================= */

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

/* =========================
   API Response
========================= */

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

/* =========================
   Query Parameters
========================= */

export interface EmployeeParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}

export interface EmployeeSearchParams extends EmployeeParams {
  keyword: string;
}

export interface EmployeeFilterParams extends EmployeeParams {
  department?: string;
  minSalary?: number;
  maxSalary?: number;
}

/* =========================
   Get All Employees
========================= */

export const getEmployees = async (
  params?: EmployeeParams
): Promise<ApiResponse<PageResponse<EmployeeResponse>>> => {
  const response = await api.get<
    ApiResponse<PageResponse<EmployeeResponse>>
  >("/api/employees", {
    params,
  });

  return response.data;
};

/* =========================
   Search Employees
========================= */

export const searchEmployees = async (
  params: EmployeeSearchParams
): Promise<ApiResponse<PageResponse<EmployeeResponse>>> => {
  const response = await api.get<
    ApiResponse<PageResponse<EmployeeResponse>>
  >("/api/employees/search", {
    params,
  });

  return response.data;
};

/* =========================
   Filter Employees
========================= */

export const filterEmployees = async (
  params: EmployeeFilterParams
): Promise<ApiResponse<PageResponse<EmployeeResponse>>> => {
  const response = await api.get<
    ApiResponse<PageResponse<EmployeeResponse>>
  >("/api/employees/filter", {
    params,
  });

  return response.data;
};

/* =========================
   Get Employee By ID
========================= */

export const getEmployeeById = async (
  id: number
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.get<ApiResponse<EmployeeResponse>>(
    `/api/employees/${id}`
  );

  return response.data;
};

/* =========================
   Create Employee
========================= */

export const createEmployee = async (
  data: EmployeeRequest
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.post<ApiResponse<EmployeeResponse>>(
    "/api/employees",
    data
  );

  return response.data;
};

/* =========================
   Update Employee
========================= */

export const updateEmployee = async (
  id: number,
  data: EmployeeRequest
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.put<ApiResponse<EmployeeResponse>>(
    `/api/employees/${id}`,
    data
  );

  return response.data;
};

/* =========================
   Delete Employee
========================= */

export const deleteEmployee = async (
  id: number
): Promise<ApiResponse<string | null>> => {
  const response = await api.delete<ApiResponse<string | null>>(
    `/api/employees/${id}`
  );

  return response.data;
};