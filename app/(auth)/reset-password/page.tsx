
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, Lock, KeyRound } from "lucide-react";

export default function ResetPasswordPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    console.log("Reset Password:", formData);

    // Backend API baad mein connect karenge
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">

        {/* Back */}
        <Link
          href="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Icon */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
            <KeyRound className="h-6 w-6 text-white" />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Reset Password
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Change your password to keep your WorkForce account secure.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Current Password */}
            <div>
              <label
                htmlFor="currentPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  required
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(!showCurrentPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                New Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
            >
              Update Password
            </button>
          </form>

          {/* Security Note */}
          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            Use a strong password that you don&apos;t use anywhere else.
          </p>
        </div>
      </div>
    </main>
  );
}
