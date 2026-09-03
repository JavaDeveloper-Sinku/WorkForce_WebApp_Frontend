"use client";

import {
  Users,
  Building2,
  CalendarCheck,
  Wallet,
  TrendingUp,
  TrendingDown,
  UserPlus,
  Clock3,
  ArrowUpRight,
  MoreVertical,
  Clock,
  CheckCircle2,
  XCircle,
  CalendarDays,
  Briefcase,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getEmployeeDashboard,
  DashboardResponse,
  EmployeeDashboardResponse,
} from "@/services/dashboard/dashboardService/dashboardService";

import { getCurrentUser } from "@/services/auth/authService";
import { UserMeResponse } from "@/types/auth";


// =========================================================
// STATIC ADMIN DATA
// =========================================================

const recentEmployees = [
  {
    id: "EMP-001",
    name: "John Smith",
    department: "Engineering",
    designation: "Software Developer",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Sarah Wilson",
    department: "Human Resources",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Michael Brown",
    department: "Finance",
    designation: "Accountant",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Emily Davis",
    department: "Marketing",
    designation: "Marketing Executive",
    status: "Inactive",
  },
];

const activities = [
  {
    title: "New employee added",
    description: "John Smith joined Engineering",
    time: "10 min ago",
  },
  {
    title: "Payroll processed",
    description: "September payroll has been processed",
    time: "1 hour ago",
  },
  {
    title: "Attendance updated",
    description: "Daily attendance was updated",
    time: "3 hours ago",
  },
  {
    title: "Department created",
    description: "Marketing department was created",
    time: "Yesterday",
  },
];


// =========================================================
// EMPLOYEE DASHBOARD COMPONENT
// =========================================================

function EmployeeDashboard({
  employee,
}: {
  employee: EmployeeDashboardResponse;
}) {
  const getStatusClass = (status: string | null) => {
    switch (status) {
      case "PRESENT":
        return "bg-green-100 text-green-700";

      case "LATE":
        return "bg-yellow-100 text-yellow-700";

      case "ABSENT":
        return "bg-red-100 text-red-700";

      case "ON_LEAVE":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusText = (status: string | null) => {
    if (!status) {
      return "Not Marked";
    }

    switch (status) {
      case "PRESENT":
        return "Present";

      case "LATE":
        return "Late";

      case "ABSENT":
        return "Absent";

      case "ON_LEAVE":
        return "On Leave";

      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {employee.employeeName}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Here&apos;s your attendance and work overview.
          </p>
        </div>

        <div className="text-sm text-gray-500">
          September 2026
        </div>
      </div>


      {/* =========================================
          PROFILE INFO
      ========================================= */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-lg font-semibold text-white">
              {employee.employeeName
                .split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {employee.employeeName}
              </h2>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">

                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {employee.department || "No Department"}
                </span>

                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {employee.email}
                </span>

              </div>
            </div>

          </div>

          <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {employee.role}
          </span>

        </div>

      </div>


      {/* =========================================
          TODAY STATUS
      ========================================= */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Today's Status */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Today&apos;s Status
              </p>

              <div className="mt-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                    employee.todayStatus
                  )}`}
                >
                  {getStatusText(employee.todayStatus)}
                </span>
              </div>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <CalendarCheck className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Check In */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Check In
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {employee.checkIn || "--"}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Clock className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Check Out */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Check Out
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {employee.checkOut || "--"}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Clock3 className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Working Hours */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Working Hours
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {employee.workingHours}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Clock3 className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          MONTHLY ATTENDANCE
      ========================================= */}

      <div>

        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Monthly Attendance
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Present */}

          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Present Days
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {employee.presentDays}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <CheckCircle2 className="h-5 w-5 text-gray-700" />
              </div>

            </div>

          </div>


          {/* Absent */}

          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Absent Days
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {employee.absentDays}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <XCircle className="h-5 w-5 text-gray-700" />
              </div>

            </div>

          </div>


          {/* Leave */}

          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Leave Days
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {employee.leaveDays}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <CalendarDays className="h-5 w-5 text-gray-700" />
              </div>

            </div>

          </div>


          {/* Late */}

          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Late Days
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {employee.lateDays}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <Clock className="h-5 w-5 text-gray-700" />
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          TODAY ATTENDANCE
      ========================================= */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Today&apos;s Attendance
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your attendance details for today.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Status
            </p>

            <div className="mt-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                  employee.todayStatus
                )}`}
              >
                {getStatusText(employee.todayStatus)}
              </span>
            </div>
          </div>


          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Check In
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {employee.checkIn || "--"}
            </p>
          </div>


          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Check Out
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {employee.checkOut || "--"}
            </p>
          </div>

        </div>

      </div>


      {/* =========================================
          EMPLOYEE INFORMATION
      ========================================= */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-900">
          My Information
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">

          <div>
            <p className="text-sm text-gray-500">
              Employee ID
            </p>

            <p className="mt-1 font-medium text-gray-900">
              EMP-{String(employee.employeeId).padStart(3, "0")}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <p className="mt-1 font-medium text-gray-900">
              {employee.employeeName}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="mt-1 font-medium text-gray-900">
              {employee.email}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Department
            </p>

            <p className="mt-1 font-medium text-gray-900">
              {employee.department || "Not Assigned"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}


// =========================================================
// ADMIN / HR DASHBOARD
// =========================================================

function AdminDashboard({
  stats,
  loading,
}: {
  stats: DashboardResponse | null;
  loading: boolean;
}) {

  const formatPayroll = (amount: number) => {

    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`;
    }

    return `₹${amount.toLocaleString("en-IN")}`;
  };


  return (
    <div className="space-y-6">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here&apos;s what&apos;s happening in your organization.
          </p>

        </div>

        <div className="text-sm text-gray-500">
          September 2026
        </div>

      </div>


      {/* =========================================
          STATS
      ========================================= */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Employees */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Total Employees
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {loading
                  ? "..."
                  : stats?.totalEmployees ?? 0}
              </h2>

              <p className="mt-2 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                8% from last month
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Users className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Departments */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Departments
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {loading
                  ? "..."
                  : stats?.totalDepartments ?? 0}
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                Active departments
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Attendance */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Attendance
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {loading
                  ? "..."
                  : `${stats?.attendancePercentage ?? 0}%`}
              </h2>

              <p className="mt-2 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                2.4% improvement
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <CalendarCheck className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>


        {/* Payroll */}

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Monthly Payroll
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {loading
                  ? "..."
                  : formatPayroll(
                      stats?.monthlyPayroll ?? 0
                    )}
              </h2>

              <p className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <TrendingDown className="h-3 w-3" />
                3.2% from last month
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Wallet className="h-5 w-5 text-gray-700" />
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          QUICK ACTIONS
      ========================================= */}

      <div>

        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <button
            type="button"
            className="flex items-center gap-4 rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <UserPlus className="h-5 w-5 text-gray-700" />
            </div>

            <div>

              <p className="font-medium text-gray-900">
                Add Employee
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Create employee profile
              </p>

            </div>

          </button>


          <button
            type="button"
            className="flex items-center gap-4 rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-700" />
            </div>

            <div>

              <p className="font-medium text-gray-900">
                Add Department
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Create new department
              </p>

            </div>

          </button>


          <button
            type="button"
            className="flex items-center gap-4 rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <CalendarCheck className="h-5 w-5 text-gray-700" />
            </div>

            <div>

              <p className="font-medium text-gray-900">
                Attendance
              </p>

              <p className="mt-1 text-xs text-gray-500">
                View today&apos;s attendance
              </p>

            </div>

          </button>


          <button
            type="button"
            className="flex items-center gap-4 rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Wallet className="h-5 w-5 text-gray-700" />
            </div>

            <div>

              <p className="font-medium text-gray-900">
                Payroll
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Manage payroll
              </p>

            </div>

          </button>

        </div>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Recent Employees */}

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm lg:col-span-2">

          <div className="flex items-center justify-between border-b p-6">

            <div>

              <h2 className="text-lg font-semibold text-gray-900">
                Recent Employees
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Recently added employees in your organization.
              </p>

            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-black"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </button>

          </div>


          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-left text-sm">

              <thead className="border-b bg-gray-50">

                <tr>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Employee
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Department
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Designation
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody className="divide-y">

                {recentEmployees.map((employee) => (

                  <tr
                    key={employee.id}
                    className="transition hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">

                          {employee.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}

                        </div>

                        <div>

                          <p className="font-medium text-gray-900">
                            {employee.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {employee.id}
                          </p>

                        </div>

                      </div>

                    </td>


                    <td className="px-6 py-4 text-gray-600">
                      {employee.department}
                    </td>


                    <td className="px-6 py-4 text-gray-600">
                      {employee.designation}
                    </td>


                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {employee.status}
                      </span>

                    </td>


                    <td className="px-6 py-4">

                      <button
                        type="button"
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* Recent Activity */}

        <div className="rounded-xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest organization activities.
            </p>

          </div>


          <div className="divide-y">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex gap-3 p-5"
              >

                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Clock3 className="h-4 w-4 text-gray-600" />
                </div>

                <div className="min-w-0">

                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    {activity.time}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =========================================
          ATTENDANCE OVERVIEW
      ========================================= */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

          <div>

            <h2 className="text-lg font-semibold text-gray-900">
              Today&apos;s Attendance
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Employee attendance overview for today.
            </p>

          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
          >
            View Attendance
            <ArrowUpRight className="h-4 w-4" />
          </button>

        </div>


        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-lg bg-gray-50 p-4">

            <p className="text-sm text-gray-500">
              Present
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {loading
                ? "..."
                : stats?.present ?? 0}
            </p>

          </div>


          <div className="rounded-lg bg-gray-50 p-4">

            <p className="text-sm text-gray-500">
              Absent
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {loading
                ? "..."
                : stats?.absent ?? 0}
            </p>

          </div>


          <div className="rounded-lg bg-gray-50 p-4">

            <p className="text-sm text-gray-500">
              On Leave
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {loading
                ? "..."
                : stats?.onLeave ?? 0}
            </p>

          </div>


          <div className="rounded-lg bg-gray-50 p-4">

            <p className="text-sm text-gray-500">
              Late
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {loading
                ? "..."
                : stats?.late ?? 0}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


// =========================================================
// MAIN DASHBOARD PAGE
// =========================================================

export default function DashboardPage() {

  const [stats, setStats] =
    useState<DashboardResponse | null>(null);

  const [employeeDashboard, setEmployeeDashboard] =
    useState<EmployeeDashboardResponse | null>(null);

  const [user, setUser] =
    useState<UserMeResponse | null>(null);

  const [loading, setLoading] =
    useState(true);


  // =========================================================
  // FETCH DASHBOARD
  // =========================================================

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        setLoading(true);


        // -----------------------------------------
        // GET CURRENT USER
        // -----------------------------------------

        const userResponse =
          await getCurrentUser();

        if (!userResponse.success) {

          console.error(
            "Failed to fetch current user"
          );

          return;
        }


        const currentUser =
          userResponse.data;

        setUser(currentUser);


        // -----------------------------------------
        // ADMIN / HR
        // -----------------------------------------

        if (
          currentUser.role === "ADMIN" ||
          currentUser.role === "HR"
        ) {

          const response =
            await getDashboardStats();

          if (response.success) {
            setStats(response.data);
          }

          return;
        }


        // -----------------------------------------
        // EMPLOYEE
        // -----------------------------------------

        if (
          currentUser.role === "EMPLOYEE" &&
          currentUser.employeeId !== null
        ) {

          const response =
            await getEmployeeDashboard(
              currentUser.employeeId
            );

          if (response.success) {
            setEmployeeDashboard(
              response.data
            );
          }

          return;
        }


        console.warn(
          "Unsupported role or employee profile not linked"
        );

      } catch (error) {

        console.error(
          "Failed to fetch dashboard:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchDashboard();

  }, []);


  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {

    return (
      <div className="flex min-h-[400px] items-center justify-center">

        <div className="text-sm text-gray-500">
          Loading dashboard...
        </div>

      </div>
    );

  }


  // =========================================================
  // EMPLOYEE DASHBOARD
  // =========================================================

  if (user?.role === "EMPLOYEE") {

    if (!employeeDashboard) {

      return (
        <div className="flex min-h-[400px] items-center justify-center">

          <div className="text-sm text-gray-500">
            Employee profile not found.
          </div>

        </div>
      );

    }

    return (
      <EmployeeDashboard
        employee={employeeDashboard}
      />
    );

  }


  // =========================================================
  // ADMIN / HR DASHBOARD
  // =========================================================

  return (
    <AdminDashboard
      stats={stats}
      loading={loading}
    />
  );
}