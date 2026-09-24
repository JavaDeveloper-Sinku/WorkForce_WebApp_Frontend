
import api from "@/lib/axios";

import {
  ApiResponse,
  AuthResponse,
  LoginRequest,
  UserMeResponse,
  RefreshTokenRequest,
} from "@/types/auth";

/* =========================
   Login
========================= */

export const login = async (
  request: LoginRequest
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/api/auth/login",
    request
  );

  return response.data;
};

/* =========================
   Refresh Token
========================= */

export const refreshToken = async (
  request: RefreshTokenRequest
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/api/auth/refresh",
    request
  );

  return response.data;
};

/* =========================
   Logout
========================= */

export const logout = async (): Promise<ApiResponse<string>> => {
  const response = await api.post<ApiResponse<string>>(
    "/api/auth/logout"
  );

  return response.data;
};

/* =========================
   Get Current User
========================= */

export const getCurrentUser = async (): Promise<
  ApiResponse<UserMeResponse>
> => {
  const response = await api.get<ApiResponse<UserMeResponse>>(
    "/api/auth/me"
  );

  return response.data;
};
