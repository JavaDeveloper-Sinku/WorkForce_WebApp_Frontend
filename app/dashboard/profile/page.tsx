"use client";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  CalendarDays,
  User,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your personal information and account details.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          
          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-900 text-3xl font-bold text-white">
            JS
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              John Smith
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Software Developer
            </p>

            <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <User className="h-5 w-5 text-gray-700" />

          <h2 className="text-lg font-semibold text-gray-900">
            Personal Information
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-500">
              Full Name
            </label>

            <p className="mt-2 text-sm font-medium text-gray-900">
              John Smith
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-500">
              Email Address
            </label>

            <div className="mt-2 flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />

              <p className="text-sm font-medium text-gray-900">
                john@example.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-500">
              Phone Number
            </label>

            <div className="mt-2 flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />

              <p className="text-sm font-medium text-gray-900">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium text-gray-500">
              Location
            </label>

            <div className="mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />

              <p className="text-sm font-medium text-gray-900">
                Jabalpur, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Information */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-gray-700" />

          <h2 className="text-lg font-semibold text-gray-900">
            Work Information
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-500">
              Employee ID
            </label>

            <p className="mt-2 text-sm font-medium text-gray-900">
              EMP-001
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Department
            </label>

            <p className="mt-2 text-sm font-medium text-gray-900">
              Engineering
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Designation
            </label>

            <p className="mt-2 text-sm font-medium text-gray-900">
              Software Developer
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Joining Date
            </label>

            <div className="mt-2 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gray-400" />

              <p className="text-sm font-medium text-gray-900">
                January 15, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}