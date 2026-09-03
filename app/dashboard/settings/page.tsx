"use client";

import {
  User,
  Building2,
  Bell,
  ShieldCheck,
  Palette,
  Save,
  Mail,
  Lock,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your account, organization and application preferences.
        </p>
      </div>

      {/* Account Settings */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <User className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Account Settings
              </h2>

              <p className="text-sm text-gray-500">
                Manage your personal account information.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="John Smith"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t px-6 py-4">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Organization Settings */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Organization
              </h2>

              <p className="text-sm text-gray-500">
                Manage your organization information.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          {/* Organization Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Organization Name
            </label>

            <input
              type="text"
              defaultValue="WorkForce"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Organization Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Organization Email
            </label>

            <input
              type="email"
              defaultValue="admin@workforce.com"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              defaultValue="+91 98765 43210"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Timezone
            </label>

            <select
              defaultValue="india"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-gray-400"
            >
              <option value="india">
                India Standard Time (IST)
              </option>

              <option value="utc">
                UTC
              </option>

              <option value="est">
                Eastern Standard Time
              </option>
            </select>
          </div>
        </div>

        <div className="flex justify-end border-t px-6 py-4">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Save className="h-4 w-4" />
            Save Organization
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Bell className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Notifications
              </h2>

              <p className="text-sm text-gray-500">
                Choose which notifications you want to receive.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y">
          {/* Attendance */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="font-medium text-gray-900">
                Attendance Alerts
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Get notified about attendance and absence updates.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-black"
            />
          </div>

          {/* Payroll */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="font-medium text-gray-900">
                Payroll Notifications
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Receive notifications about payroll processing.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-black"
            />
          </div>

          {/* Employee */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="font-medium text-gray-900">
                Employee Updates
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Get notified when employee information changes.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-black"
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <ShieldCheck className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Security
              </h2>

              <p className="text-sm text-gray-500">
                Manage your password and account security.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <Lock className="h-4 w-4" />
            Change Password
          </button>
        </div>
      </div>

      {/* Appearance */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Palette className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Appearance
              </h2>

              <p className="text-sm text-gray-500">
                Customize the look and feel of your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Theme
          </label>

          <select
            defaultValue="light"
            className="w-full max-w-sm rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-gray-400"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
      </div>
    </div>
  );
}