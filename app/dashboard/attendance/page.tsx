
"use client";

import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  getEmployeeAttendanceHistory,
} from "@/services/dashboard/dashboardService/attendanceService";

import { getCurrentUser } from "@/services/auth/authService";

import { AttendanceResponse } from "@/types/attendance";

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceResponse[]>([]);
  const [loading, setLoading] = useState(true);

  // ============================
  // Fetch Logged-in Employee Attendance
  // ============================

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setLoading(true);

        // Get currently logged-in user
        const userResponse = await getCurrentUser();

        if (!userResponse.success) {
          console.error("Failed to fetch current user");
          setAttendance([]);
          return;
        }

        const user = userResponse.data;

        // Attendance page is for employees
        if (user.role !== "EMPLOYEE") {
          console.log(
            "Current user is not an employee:",
            user.role
          );

          setAttendance([]);
          return;
        }

        // Get employeeId from logged-in employee
        const employeeId = user.employeeId;

        // Employee should have an employee profile
        if (employeeId === null) {
          console.warn(
            "No employee profile linked with this user"
          );

          setAttendance([]);
          return;
        }

        // Get attendance history
        const attendanceResponse =
          await getEmployeeAttendanceHistory(employeeId);

        if (attendanceResponse.success) {
          setAttendance(attendanceResponse.data);
        } else {
          console.error(
            "Failed to fetch attendance history"
          );

          setAttendance([]);
        }
      } catch (error) {
        console.error(
          "Failed to fetch attendance:",
          error
        );

        setAttendance([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // ============================
  // Today's Attendance
  // ============================

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const todayAttendance = attendance.find(
    (item) => item.date === today
  );

  // ============================
  // Date Formatting
  // ============================

  const formatDate = (date: string) => {
    return new Date(
      date + "T00:00:00"
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // ============================
  // Time Formatting
  // ============================

  const formatTime = (time: string | null) => {
    if (!time) return "-";

    const [hour, minute] = time.split(":");

    const date = new Date();

    date.setHours(
      Number(hour),
      Number(minute)
    );

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ============================
  // Working Minutes
  // ============================

  const getWorkingMinutes = (
    checkIn: string | null,
    checkOut: string | null
  ) => {
    if (!checkIn || !checkOut) return 0;

    const [inHour, inMinute] = checkIn
      .split(":")
      .map(Number);

    const [outHour, outMinute] = checkOut
      .split(":")
      .map(Number);

    const start =
      inHour * 60 + inMinute;

    const end =
      outHour * 60 + outMinute;

    return Math.max(0, end - start);
  };

  // ============================
  // Working Hours
  // ============================

  const formatWorkingHours = (
    checkIn: string | null,
    checkOut: string | null
  ) => {
    const minutes = getWorkingMinutes(
      checkIn,
      checkOut
    );

    if (minutes === 0) return "0h";

    const hours = Math.floor(minutes / 60);

    const remainingMinutes =
      minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };

  // ============================
  // Monthly Statistics
  // ============================

  const currentDate = new Date();

  const currentMonth =
    currentDate.getMonth();

  const currentYear =
    currentDate.getFullYear();

  const monthlyAttendance =
    attendance.filter((item) => {
      const date = new Date(
        item.date + "T00:00:00"
      );

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    });

  // PRESENT + LATE = Present
  const presentCount =
    monthlyAttendance.filter(
      (item) =>
        item.status === "PRESENT" ||
        item.status === "LATE"
    ).length;

  const absentCount =
    monthlyAttendance.filter(
      (item) =>
        item.status === "ABSENT"
    ).length;

  const totalWorkingMinutes =
    monthlyAttendance.reduce(
      (total, item) =>
        total +
        getWorkingMinutes(
          item.checkIn,
          item.checkOut
        ),
      0
    );

  const totalWorkingHours =
    Math.floor(
      totalWorkingMinutes / 60
    );

  const remainingMinutes =
    totalWorkingMinutes % 60;

  const monthlyWorkingHours =
    totalWorkingMinutes === 0
      ? "0h"
      : `${totalWorkingHours}h ${remainingMinutes}m`;

  const status =
    todayAttendance?.status;

  // ============================
  // UI
  // ============================

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
                {formatDate(today)}
              </h2>

            </div>

          </div>

          {loading ? (

            <span className="text-sm text-gray-500">
              Loading...
            </span>

          ) : status === "PRESENT" ||
            status === "LATE" ? (

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700">

              <CheckCircle2 className="h-4 w-4" />

              {status === "LATE"
                ? "Late"
                : "Present"}

            </span>

          ) : status === "ABSENT" ? (

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700">

              <XCircle className="h-4 w-4" />

              Absent

            </span>

          ) : (

            <span className="text-sm text-gray-500">
              Not marked
            </span>

          )}

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
            {presentCount}
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
            {absentCount}
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
            {monthlyWorkingHours}
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

              {loading ? (

                <tr>

                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Loading attendance...
                  </td>

                </tr>

              ) : attendance.length > 0 ? (

                attendance.map((item) => (

                  <tr key={item.id}>

                    <td className="px-6 py-4 text-gray-900">
                      {formatDate(item.date)}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {formatTime(item.checkIn)}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {formatTime(item.checkOut)}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {formatWorkingHours(
                        item.checkIn,
                        item.checkOut
                      )}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "ABSENT"
                            ? "bg-red-100 text-red-700"
                            : item.status === "ON_LEAVE"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.status === "LATE"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.status.replace(
                          "_",
                          " "
                        )}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No attendance records found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
