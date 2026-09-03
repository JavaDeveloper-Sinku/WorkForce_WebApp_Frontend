"use client";

import {
  Search,
  MoreVertical,
  DollarSign,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const payrollRecords = [
  {
    id: "PAY-001",
    employeeId: "EMP-001",
    name: "John Smith",
    department: "Engineering",
    basicSalary: 65000,
    allowances: 8000,
    deductions: 3000,
    netSalary: 70000,
    status: "Paid",
  },
  {
    id: "PAY-002",
    employeeId: "EMP-002",
    name: "Sarah Wilson",
    department: "Human Resources",
    basicSalary: 55000,
    allowances: 6000,
    deductions: 2500,
    netSalary: 58500,
    status: "Paid",
  },
  {
    id: "PAY-003",
    employeeId: "EMP-003",
    name: "Michael Brown",
    department: "Finance",
    basicSalary: 48000,
    allowances: 5000,
    deductions: 2000,
    netSalary: 51000,
    status: "Pending",
  },
  {
    id: "PAY-004",
    employeeId: "EMP-004",
    name: "Emily Davis",
    department: "Marketing",
    basicSalary: 42000,
    allowances: 4000,
    deductions: 1500,
    netSalary: 44500,
    status: "Paid",
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function PayrollPage() {
  const totalPayroll = payrollRecords.reduce(
    (total, payroll) => total + payroll.netSalary,
    0
  );

  const paidRecords = payrollRecords.filter(
    (payroll) => payroll.status === "Paid"
  ).length;

  const pendingRecords = payrollRecords.filter(
    (payroll) => payroll.status === "Pending"
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Payroll
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage employee salaries, payments and payroll records.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Payroll */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Payroll
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {formatCurrency(totalPayroll)}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Current payroll cycle
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <DollarSign className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Paid */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Paid
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {paidRecords}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Payroll records completed
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <CheckCircle2 className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {pendingRecords}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Payments awaiting processing
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Clock3 className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search employee or employee ID..."
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Month */}
          <select
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
            defaultValue="september"
          >
            <option value="september">September 2026</option>
            <option value="august">August 2026</option>
            <option value="july">July 2026</option>
          </select>

          {/* Department */}
          <select
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
            defaultValue="all"
          >
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="hr">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
          </select>

          {/* Status */}
          <select
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
            defaultValue="all"
          >
            <option value="all">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Payroll Records
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {payrollRecords.length} payroll records found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Employee
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Department
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Basic Salary
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Allowances
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Deductions
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Net Salary
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
              {payrollRecords.map((payroll) => (
                <tr
                  key={payroll.id}
                  className="transition hover:bg-gray-50"
                >
                  {/* Employee */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                        {payroll.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="font-medium text-gray-900">
                          {payroll.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {payroll.employeeId}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="px-6 py-4 text-gray-600">
                    {payroll.department}
                  </td>

                  {/* Basic */}
                  <td className="px-6 py-4 text-gray-600">
                    {formatCurrency(payroll.basicSalary)}
                  </td>

                  {/* Allowances */}
                  <td className="px-6 py-4 text-gray-600">
                    {formatCurrency(payroll.allowances)}
                  </td>

                  {/* Deductions */}
                  <td className="px-6 py-4 text-gray-600">
                    {formatCurrency(payroll.deductions)}
                  </td>

                  {/* Net Salary */}
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {formatCurrency(payroll.netSalary)}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        payroll.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payroll.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}