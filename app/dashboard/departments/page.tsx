
"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Users,
  Building2,
  X,
} from "lucide-react";

interface Department {
  id: string;
  name: string;
  code: string;
  head: string;
  employees: number;
  status: "Active" | "Inactive";
}

const initialDepartments: Department[] = [
  {
    id: "DEPT-001",
    name: "Engineering",
    code: "ENG",
    head: "John Smith",
    employees: 24,
    status: "Active",
  },
  {
    id: "DEPT-002",
    name: "Human Resources",
    code: "HR",
    head: "Sarah Wilson",
    employees: 8,
    status: "Active",
  },
  {
    id: "DEPT-003",
    name: "Finance",
    code: "FIN",
    head: "Michael Brown",
    employees: 12,
    status: "Active",
  },
  {
    id: "DEPT-004",
    name: "Marketing",
    code: "MKT",
    head: "Emily Davis",
    employees: 10,
    status: "Inactive",
  },
];

export default function DepartmentsPage() {
  const [departments, setDepartments] =
    useState<Department[]>(initialDepartments);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    head: "",
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

  const handleSaveDepartment = (e: React.FormEvent) => {
    e.preventDefault();

    const newDepartment: Department = {
      id: `DEPT-${String(departments.length + 1).padStart(3, "0")}`,
      name: formData.name,
      code: formData.code.toUpperCase(),
      head: formData.head,
      employees: 0,
      status: formData.status,
    };

    setDepartments((prev) => [...prev, newDepartment]);

    // Close modal
    setIsModalOpen(false);

    // Reset form
    setFormData({
      name: "",
      code: "",
      head: "",
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
              Departments
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and organize departments in your organization.
            </p>
          </div>

          {/* Add Department */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Plus className="h-4 w-4" />
            Add Department
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
                placeholder="Search departments..."
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
              />
            </div>

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

        {/* Department Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          {/* Table Header */}
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              All Departments
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {departments.length} departments found
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">

              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-500">
                    Department
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Department ID
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Head of Department
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Employees
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

                {departments.map((department) => (
                  <tr
                    key={department.id}
                    className="transition hover:bg-gray-50"
                  >

                    {/* Department */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                          <Building2 className="h-5 w-5 text-gray-700" />
                        </div>

                        <div>
                          <p className="font-medium text-gray-900">
                            {department.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {department.code}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Department ID */}
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {department.id}
                    </td>

                    {/* Head */}
                    <td className="px-6 py-4 text-gray-600">
                      {department.head}
                    </td>

                    {/* Employees */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4 text-gray-400" />
                        {department.employees}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          department.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {department.status}
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

      {/* ================================================= */}
      {/* ADD DEPARTMENT MODAL */}
      {/* ================================================= */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-6 py-5">

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Add New Department
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Create a new department for your organization.
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
            <form onSubmit={handleSaveDepartment}>

              <div className="grid gap-5 p-6 md:grid-cols-2">

                {/* Department Name */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Department Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Engineering"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Department Code */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Department Code
                  </label>

                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="e.g. ENG"
                    maxLength={10}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm uppercase outline-none transition focus:border-gray-900"
                  />
                </div>

                {/* Head */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Head of Department
                  </label>

                  <input
                    type="text"
                    name="head"
                    value={formData.head}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
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

              {/* Footer */}
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
                  Save Department
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}

