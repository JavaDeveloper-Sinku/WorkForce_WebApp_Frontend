import api from "@/lib/axios";

import {
  ApiResponse,
  AttendanceRequest,
  AttendanceResponse,
} from "@/types/attendance";

// Create attendance
export const createAttendance = async (
  request: AttendanceRequest
): Promise<ApiResponse<AttendanceResponse>> => {
  const response = await api.post<ApiResponse<AttendanceResponse>>(
    "/api/attendance",
    request
  );

  return response.data;
};

// Get attendance by date
export const getAttendanceByDate = async (
  date: string
): Promise<ApiResponse<AttendanceResponse[]>> => {
  const response = await api.get<ApiResponse<AttendanceResponse[]>>(
    "/api/attendance",
    {
      params: { date },
    }
  );

  return response.data;
};

// Get employee attendance for specific date
export const getEmployeeAttendance = async (
  employeeId: number,
  date: string
): Promise<ApiResponse<AttendanceResponse>> => {
  const response = await api.get<ApiResponse<AttendanceResponse>>(
    `/api/attendance/employee/${employeeId}`,
    {
      params: { date },
    }
  );

  return response.data;
};

// Get employee attendance history
export const getEmployeeAttendanceHistory = async (
  employeeId: number
): Promise<ApiResponse<AttendanceResponse[]>> => {
  const response = await api.get<ApiResponse<AttendanceResponse[]>>(
    `/api/attendance/employee/${employeeId}/history`
  );

  return response.data;
};

// Update attendance
export const updateAttendance = async (
  id: number,
  request: AttendanceRequest
): Promise<ApiResponse<AttendanceResponse>> => {
  const response = await api.put<ApiResponse<AttendanceResponse>>(
    `/api/attendance/${id}`,
    request
  );

  return response.data;
};