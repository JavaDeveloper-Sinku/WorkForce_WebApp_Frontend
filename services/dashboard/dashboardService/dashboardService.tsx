import api from "@/lib/axios";

export interface DashboardResponse {
  totalEmployees: number;
  totalDepartments: number;
  attendancePercentage: number;
  monthlyPayroll: number;
  present: number;
  absent: number;
  onLeave: number;
  late: number;
}

export interface EmployeeDashboardResponse {
  employeeId: number;
  employeeName: string;
  email: string;
  department: string;
  role: string;

  todayStatus: string | null;
  checkIn: string | null;
  checkOut: string | null;
  workingHours: string;

  presentDays: number;
  absentDays: number;
  leaveDays: number;
  lateDays: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// Admin / HR Dashboard
export const getDashboardStats = async (): Promise<
  ApiResponse<DashboardResponse>
> => {
  const response = await api.get<ApiResponse<DashboardResponse>>(
    "/api/dashboard/stats"
  );

  return response.data;
};

// Employee Dashboard
export const getEmployeeDashboard = async (
  employeeId: number
): Promise<ApiResponse<EmployeeDashboardResponse>> => {
  const response = await api.get<ApiResponse<EmployeeDashboardResponse>>(
    `/api/dashboard/employee/${employeeId}`
  );

  return response.data;
};