
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Backend API baad mein connect karenge
  };

  return (
    <div className="w-full max-w-md">

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
          <Lock className="h-6 w-6 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to your WorkForce account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-12 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Reset Password */}
        <div className="flex justify-end">
          <Link
            href="/reset-password"
            className="text-sm font-medium text-gray-700 transition hover:text-black hover:underline"
          >
            Reset password?
          </Link>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <p className="mt-8 text-center text-xs text-gray-400">
        Contact your HR or Admin if you don&apos;t have an account.
      </p>
    </div>
  );
}
