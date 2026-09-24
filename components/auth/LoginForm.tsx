
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Loader2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

import { login } from "@/services/auth/authService";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Call auth service
      const result = await login(formData);

      // Check backend response
      if (!result.success || !result.data) {
        throw new Error(result.message || "Login failed");
      }

      // Make sure tokens exist
      if (
        !result.data.accessToken ||
        !result.data.refreshToken
      ) {
        throw new Error("Invalid response from server");
      }

      // Save tokens
      localStorage.setItem(
        "accessToken",
        result.data.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        result.data.refreshToken
      );

      // Login successful
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: {
            data?: {
              message?: string;
            };
          };
        };

        setError(
          axiosError.response?.data?.message ||
            "Invalid email or password"
        );
      } else if (
        error &&
        typeof error === "object" &&
        "request" in error
      ) {
        setError(
          "Unable to connect to server. Please try again."
        );
      } else if (error instanceof Error) {
        setError(
          error.message ||
            "Something went wrong. Please try again."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Main Card Container */}
      <div className="rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-xl shadow-gray-200/50 backdrop-blur-xl sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            <Lock className="h-7 w-7" />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <ShieldCheck size={14} />
            Secure Portal
          </div>

          <h1 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Sign in to access your WorkForce workspace
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                disabled={loading}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
              >
                Password
              </label>

              <Link
                href="/reset-password"
                className="text-xs font-semibold text-emerald-600 transition hover:text-emerald-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                disabled={loading}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-12 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                disabled={loading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2.5 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-sm font-medium text-rose-700 animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="h-5 w-5 shrink-0 text-rose-500" />

              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gray-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-600/25 active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs font-medium text-gray-400">
            Contact your HR or Admin if you don&apos;t have
            account access.
          </p>
        </div>
      </div>
    </div>
  );
}
