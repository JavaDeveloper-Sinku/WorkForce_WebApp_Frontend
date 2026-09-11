import api from "@/lib/axios";
import { ApiResponse } from "@/types/auth";
import {
  EmployeeRequest,
  EmployeeResponse,
  EmployeePage,
  EmployeeFilterParams,
} from "@/types/employee";

export const getEmployees = async (
  page = 0,
  size = 5,
  sortBy = "id",
  sortDir: "asc" | "desc" = "asc"
): Promise<ApiResponse<EmployeePage>> => {
  const response = await api.get<ApiResponse<EmployeePage>>(
    "/api/employees",
    {
      params: {
        page,
        size,
        sortBy,
        sortDir,
      },
    }
  );

  return response.data;
};

export const searchEmployees = async (
  keyword: string,
  page = 0,
  size = 5,
  sortBy = "id",
  sortDir: "asc" | "desc" = "asc"
): Promise<ApiResponse<EmployeePage>> => {
  const response = await api.get<ApiResponse<EmployeePage>>(
    "/api/employees/search",
    {
      params: {
        keyword,
        page,
        size,
        sortBy,
        sortDir,
      },
    }
  );

  return response.data;
};

export const filterEmployees = async (
  params: EmployeeFilterParams
): Promise<ApiResponse<EmployeePage>> => {
  const response = await api.get<ApiResponse<EmployeePage>>(
    "/api/employees/filter",
    {
      params,
    }
  );

  return response.data;
};

export const getEmployeeById = async (
  id: number
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.get<ApiResponse<EmployeeResponse>>(
    `/api/employees/${id}`
  );

  return response.data;
};

export const createEmployee = async (
  request: EmployeeRequest
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.post<ApiResponse<EmployeeResponse>>(
    "/api/employees",
    request
  );

  return response.data;
};

export const updateEmployee = async (
  id: number,
  request: EmployeeRequest
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.put<ApiResponse<EmployeeResponse>>(
    `/api/employees/${id}`,
    request
  );

  return response.data;
};

export const deleteEmployee = async (
  id: number
): Promise<ApiResponse<string>> => {
  const response = await api.delete<ApiResponse<string>>(
    `/api/employees/${id}`
  );

  return response.data;
};

export const updateEmployeeStatus = async (
  id: number,
  status: "ACTIVE" | "INACTIVE"
): Promise<ApiResponse<EmployeeResponse>> => {
  const response = await api.patch<ApiResponse<EmployeeResponse>>(
    `/api/employees/${id}/status`,
    null,
    {
      params: { status },
    }
  );

  return response.data;
};