import api from "@/lib/axios";

import {
  ApiResponse,
  AuthResponse,
  LoginRequest,
  UserMeResponse,
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