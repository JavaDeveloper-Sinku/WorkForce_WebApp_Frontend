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