"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  X,
} from "lucide-react";

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive";
}

const initialEmployees: Employee[] = [
  {
    id: "EMP-001",
    name: "John Smith",
    email: "john@example.com",
    phone: "+91 98765 43210",
    department: "Engineering",
    designation: "Software Developer",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+91 98765 12345",
    department: "Human Resources",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+91 99887 66554",
    department: "Finance",
    designation: "Accountant",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+91 91234 56789",
    department: "Marketing",
    designation: "Marketing Executive",
    status: "Inactive",
  },
];

export default function EmployeesPage() {
  const [employees, setEmployees] =
    useState<Employee[]>(initialEmployees);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Engineering",
    designation: "",
    status: "Active" as "Active" | "Inactive",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEmployee = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee: Employee = {
      id: `EMP-${String(employees.length + 1).padStart(3, "0")}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      designation: formData.designation,
      status: formData.status,
    };

    setEmployees((prev) => [...prev, newEmployee]);

    // Close modal
    setIsModalOpen(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "Engineering",
      designation: "",
      status: "Active",
    });
  };

  return (
    <>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Employees
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and view all employees in your organization.
            </p>
          </div>

          {/* Add Employee */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Plus className="h-4 w-4" />
            Add Employee
          </button>
        </div>

        {/* Search & Filter */}
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">

            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search employees..."
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
              />
            </div>

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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              All Employees
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {employees.length} employees found
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">

              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-500">
                    Employee
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Employee ID
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

                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="transition hover:bg-gray-50"
                  >

                    {/* Employee */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                          {employee.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <div>
                          <p className="font-medium text-gray-900">
                            {employee.name}
                          </p>

                          <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                            <Mail className="h-3 w-3" />
                            {employee.email}
                          </div>
                        </div>

                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {employee.id}
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

      {/* ================= MODAL ================= */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Blur + Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-6 py-5">

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Add New Employee
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter employee details below.
                </p>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handleSaveEmployee}>

              <div className="grid gap-5 p-6 md:grid-cols-2">

                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="employee@example.com"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Department
                  </label>

                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-900"
                  >
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                  </select>
                </div>

                {/* Designation */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Designation
                  </label>

                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Software Developer"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-900"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4">

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Save Employee
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}

