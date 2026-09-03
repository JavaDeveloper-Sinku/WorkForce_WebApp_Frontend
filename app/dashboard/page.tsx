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
} from "lucide-react";

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

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Employees */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Employees
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                54
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
                4
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
                92.5%
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
                ₹32.05L
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

      {/* Quick Actions */}
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

      {/* Main Content */}
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
                    {/* Employee */}
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

                    {/* Department */}
                    <td className="px-6 py-4 text-gray-600">
                      {employee.department}
                    </td>

                    {/* Designation */}
                    <td className="px-6 py-4 text-gray-600">
                      {employee.designation}
                    </td>

                    {/* Status */}
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

                    {/* Action */}
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

      {/* Attendance Overview */}
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
              48
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Absent
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              3
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              On Leave
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              2
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Late
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}