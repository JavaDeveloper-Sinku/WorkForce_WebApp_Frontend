import axios from "axios";

const api = axios.create({
  baseURL: process.env.backend_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   Request Interceptor
   Attach Access Token
========================= */

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken =
        localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers.Authorization =
          `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* =========================
   Response Interceptor
   Handle 401
========================= */

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {

    const originalRequest = error.config;

    /* =========================
       Access Token Expired
    ========================= */

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true;

      if (typeof window === "undefined") {
        return Promise.reject(error);
      }

      const refreshToken =
        localStorage.getItem("refreshToken");

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {

        /* =========================
           Refresh Access Token
        ========================= */

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
          {
            refreshToken,
          }
        );

        const newAccessToken =
          response.data.data.accessToken;

        /* =========================
           Save New Access Token
        ========================= */

        localStorage.setItem(
          "accessToken",
          newAccessToken
        );

        /* =========================
           Update Original Request
        ========================= */

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        /* =========================
           Retry Original Request
        ========================= */

        return api(originalRequest);

      } catch (refreshError) {

        /* =========================
           Refresh Failed
        ========================= */

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;