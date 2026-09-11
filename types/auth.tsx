
export type UserRole = "ADMIN" | "HR" | "EMPLOYEE";



export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface UserMeResponse {
  username: string;
  email: string;
  role: UserRole;
  employeeId: number | null;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

