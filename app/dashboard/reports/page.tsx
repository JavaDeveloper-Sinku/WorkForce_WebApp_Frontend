"use client";

import {
  Users,
  CalendarCheck,
  Wallet,
  Building2,
  Download,
  FileText,
  TrendingUp,
} from "lucide-react";

const departmentReports = [
  {
    department: "Engineering",
    employees: 24,
    attendance: "94%",
    payroll: "₹16,80,000",
  },
  {
    department: "Human Resources",
    employees: 8,
    attendance: "96%",
    payroll: "₹4,68,000",
  },
  {
    department: "Finance",
    employees: 12,
    attendance: "91%",
    payroll: "₹6,12,000",
  },
  {
    department: "Marketing",
    employees: 10,
    attendance: "89%",
    payroll: "₹4,45,000",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Reports
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and analyze employee, attendance and payroll reports.
          </p>
        </div>

        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>

      {/* Report Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Employees */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Employees
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                54
              </h3>

              <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                8% this month
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Users className="h-5 w-5 text-gray-700" />
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

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                92.5%
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Current month
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
                Total Payroll
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                ₹32.05L
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                September 2026
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Wallet className="h-5 w-5 text-gray-700" />
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

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                4
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Active departments
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Filters */}
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="mb-4">
          <h2 className="font-semibold text-gray-900">
            Report Filters
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Select a period and report type.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          {/* Report Type */}
          <select
            defaultValue="overview"
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-gray-400"
          >
            <option value="overview">
              Organization Overview
            </option>

            <option value="employee">
              Employee Report
            </option>

            <option value="attendance">
              Attendance Report
            </option>

            <option value="payroll">
              Payroll Report
            </option>

            <option value="department">
              Department Report
            </option>
          </select>

          {/* From */}
          <input
            type="date"
            defaultValue="2026-09-01"
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-gray-400"
          />

          {/* To */}
          <input
            type="date"
            defaultValue="2026-09-30"
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-gray-400"
          />

          <button
            type="button"
            className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Department Report */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-3 border-b p-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Department Report
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Employee, attendance and payroll summary by department.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <FileText className="h-4 w-4" />
            View Details
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Department
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Employees
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Attendance
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Payroll
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {departmentReports.map((report) => (
                <tr
                  key={report.department}
                  className="transition hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {report.department}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {report.employees}
                  </td>

                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-700">
                      {report.attendance}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-700">
                    {report.payroll}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Reports */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Quick Reports
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <button
            type="button"
            className="group rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >
            <FileText className="h-5 w-5 text-gray-700" />

            <h3 className="mt-4 font-semibold text-gray-900">
              Employee Report
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Complete employee information and department details.
            </p>
          </button>

          <button
            type="button"
            className="group rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >
            <CalendarCheck className="h-5 w-5 text-gray-700" />

            <h3 className="mt-4 font-semibold text-gray-900">
              Attendance Report
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View employee attendance and absence records.
            </p>
          </button>

          <button
            type="button"
            className="group rounded-xl border bg-white p-5 text-left shadow-sm transition hover:border-gray-300 hover:shadow"
          >
            <Wallet className="h-5 w-5 text-gray-700" />

            <h3 className="mt-4 font-semibold text-gray-900">
              Payroll Report
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View salary, deductions and payroll history.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}