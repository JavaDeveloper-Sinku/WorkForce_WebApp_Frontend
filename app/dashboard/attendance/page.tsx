"use client";

import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Attendance
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track your attendance and working hours.
        </p>
      </div>

      {/* Today's Attendance */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <CalendarCheck className="h-6 w-6 text-gray-700" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Today's Attendance
              </p>

              <h2 className="mt-1 text-lg font-semibold text-gray-900">
                September 2, 2026
              </h2>
            </div>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            Present
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Present */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Present
            </p>

            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>

          <p className="mt-3 text-2xl font-bold text-gray-900">
            22
          </p>

          <p className="mt-1 text-xs text-gray-500">
            This month
          </p>
        </div>

        {/* Absent */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Absent
            </p>

            <XCircle className="h-5 w-5 text-red-500" />
          </div>

          <p className="mt-3 text-2xl font-bold text-gray-900">
            1
          </p>

          <p className="mt-1 text-xs text-gray-500">
            This month
          </p>
        </div>

        {/* Working Hours */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Working Hours
            </p>

            <Clock className="h-5 w-5 text-gray-700" />
          </div>

          <p className="mt-3 text-2xl font-bold text-gray-900">
            176h
          </p>

          <p className="mt-1 text-xs text-gray-500">
            This month
          </p>
        </div>
      </div>

      {/* Attendance History */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Attendance History
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your recent attendance records.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Date
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Check In
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Check Out
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Working Hours
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="px-6 py-4 text-gray-900">
                  Sep 2, 2026
                </td>

                <td className="px-6 py-4 text-gray-600">
                  09:12 AM
                </td>

                <td className="px-6 py-4 text-gray-600">
                  06:15 PM
                </td>

                <td className="px-6 py-4 text-gray-600">
                  8h 03m
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 text-gray-900">
                  Sep 1, 2026
                </td>

                <td className="px-6 py-4 text-gray-600">
                  09:05 AM
                </td>

                <td className="px-6 py-4 text-gray-600">
                  06:10 PM
                </td>

                <td className="px-6 py-4 text-gray-600">
                  8h 05m
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 text-gray-900">
                  Aug 31, 2026
                </td>

                <td className="px-6 py-4 text-gray-600">
                  -
                </td>

                <td className="px-6 py-4 text-gray-600">
                  -
                </td>

                <td className="px-6 py-4 text-gray-600">
                  0h
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                    Absent
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}