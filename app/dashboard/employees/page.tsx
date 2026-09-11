
"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  X,
} from "lucide-react";

import {
  getEmployees,
  searchEmployees,
  filterEmployees,
  createEmployee,
  updateEmployeeStatus,
} from "@/services/dashboard/dashboardService/employeeService";

import {
  EmployeeResponse,
  EmployeeRequest,
} from "@/types/employee";

export default function EmployeesPage() {
  // =========================================================
  // Employee States
  // =========================================================

  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================================
  // Search / Filter States
  // =========================================================

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  // =========================================================
  // Pagination States
  // =========================================================

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const pageSize = 5;

  // =========================================================
  // Action Menu States
  // =========================================================

  const [openActionId, setOpenActionId] = useState<number | null>(
    null
  );

  const [updatingStatusId, setUpdatingStatusId] =
    useState<number | null>(null);

  // =========================================================
  // Modal States
  // =========================================================

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState("");

  // =========================================================
  // Employee Form
  // =========================================================

  const [formData, setFormData] =
    useState<EmployeeRequest>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "EMPLOYEE",
      department: "",
      designation: "",
      joiningDate: "",
      employmentType: "FULL_TIME",
      salary: 0,
    });

  // =========================================================
  // Fetch Employees
  // =========================================================

  const fetchEmployees = async (
    page = 0,
    keyword = search,
    selectedDepartment = department
  ) => {
    try {
      setLoading(true);
      setError("");

      let response;

      // -------------------------------------------------------
      // Search
      // -------------------------------------------------------

      if (keyword.trim()) {
        response = await searchEmployees(
          keyword.trim(),
          page,
          pageSize,
          "id",
          "asc"
        );
      }

      // -------------------------------------------------------
      // Department Filter
      // -------------------------------------------------------

      else if (selectedDepartment !== "all") {
        response = await filterEmployees({
          department: selectedDepartment,
          page,
          size: pageSize,
          sortBy: "id",
          sortDir: "asc",
        });
      }

      // -------------------------------------------------------
      // Get All Employees
      // -------------------------------------------------------

      else {
        response = await getEmployees(
          page,
          pageSize,
          "id",
          "asc"
        );
      }

      // -------------------------------------------------------
      // API Response Validation
      // -------------------------------------------------------

      if (!response.success) {
        throw new Error(
          response.message ||
            "Failed to fetch employees"
        );
      }

      // -------------------------------------------------------
      // Set Data
      // -------------------------------------------------------

      setEmployees(response.data.content);

      setTotalPages(response.data.totalPages);

      setTotalElements(response.data.totalElements);

      setCurrentPage(response.data.number);
    } catch (error: any) {
      console.error(
        "Failed to fetch employees:",
        error
      );

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to load employees"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // Initial Load
  // =========================================================

  useEffect(() => {
    fetchEmployees(0, "", "all");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =========================================================
  // Employee Initials
  // =========================================================

  const getInitials = (
    employee: EmployeeResponse
  ) => {
    return `${employee.firstName?.[0] || ""}${
      employee.lastName?.[0] || ""
    }`.toUpperCase();
  };

  // =========================================================
  // Search Handler
  // =========================================================

  const handleSearch = (
    value: string
  ) => {
    setSearch(value);

    setCurrentPage(0);

    fetchEmployees(
      0,
      value,
      department
    );
  };

  // =========================================================
  // Department Handler
  // =========================================================

  const handleDepartmentChange = (
    value: string
  ) => {
    setDepartment(value);

    setCurrentPage(0);

    fetchEmployees(
      0,
      search,
      value
    );
  };

  // =========================================================
  // Pagination
  // =========================================================

  const handlePrevious = () => {
    if (
      currentPage <= 0 ||
      loading
    ) {
      return;
    }

    fetchEmployees(
      currentPage - 1,
      search,
      department
    );
  };

  const handleNext = () => {
    if (
      currentPage >= totalPages - 1 ||
      loading
    ) {
      return;
    }

    fetchEmployees(
      currentPage + 1,
      search,
      department
    );
  };

  // =========================================================
  // Employee Status Change
  // =========================================================

  const handleStatusChange = async (
    employee: EmployeeResponse
  ) => {
    const newStatus =
      employee.status === "ACTIVE"
        ? "INACTIVE"
        : "ACTIVE";

    try {
      setUpdatingStatusId(employee.id);

      setError("");

      const response =
        await updateEmployeeStatus(
          employee.id,
          newStatus
        );

      if (!response.success) {
        throw new Error(
          response.message ||
            "Failed to update employee status"
        );
      }

      // Close action menu
      setOpenActionId(null);

      // Refresh employee list
      await fetchEmployees(
        currentPage,
        search,
        department
      );
    } catch (error: any) {
      console.error(
        "Failed to update employee status:",
        error
      );

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to update employee status"
      );
    } finally {
      setUpdatingStatusId(null);
    }
  };

  // =========================================================
  // Form Input Handler
  // =========================================================

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        name === "salary"
          ? Number(value)
          : value,
    }));
  };

  // =========================================================
  // Reset Form
  // =========================================================

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "EMPLOYEE",
      department: "",
      designation: "",
      joiningDate: "",
      employmentType: "FULL_TIME",
      salary: 0,
    });

    setFormError("");
  };

  // =========================================================
  // Open Modal
  // =========================================================

  const handleOpenModal = () => {
    resetForm();

    setIsModalOpen(true);
  };

  // =========================================================
  // Close Modal
  // =========================================================

  const handleCloseModal = () => {
    if (creating) {
      return;
    }

    setIsModalOpen(false);

    resetForm();
  };

  // =========================================================
  // Create Employee
  // =========================================================

  const handleCreateEmployee = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setCreating(true);

      setFormError("");

      const response =
        await createEmployee(
          formData
        );

      if (!response.success) {
        throw new Error(
          response.message ||
            "Failed to create employee"
        );
      }

      // -------------------------------------------------------
      // Close Modal
      // -------------------------------------------------------

      setIsModalOpen(false);

      // -------------------------------------------------------
      // Reset Form
      // -------------------------------------------------------

      resetForm();

      // -------------------------------------------------------
      // Refresh Employee List
      // -------------------------------------------------------

      await fetchEmployees(
        currentPage,
        search,
        department
      );
    } catch (error: any) {
      console.error(
        "Failed to create employee:",
        error
      );

      setFormError(
        error.response?.data?.message ||
          error.message ||
          "Failed to create employee"
      );
    } finally {
      setCreating(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <>
      <div className="space-y-6">

        {/* ===================================================
            HEADER
        =================================================== */}

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
            onClick={handleOpenModal}
            className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Plus className="h-4 w-4" />

            Add Employee
          </button>
        </div>

        {/* ===================================================
            SEARCH & FILTER
        =================================================== */}

        <div className="rounded-xl border bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-3 md:flex-row">

            {/* Search */}

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) =>
                  handleSearch(
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
              />

            </div>

            {/* Department */}

            <select
              value={department}
              onChange={(e) =>
                handleDepartmentChange(
                  e.target.value
                )
              }
              className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
            >
              <option value="all">
                All Departments
              </option>

              <option value="Engineering">
                Engineering
              </option>

              <option value="Human Resources">
                Human Resources
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Marketing">
                Marketing
              </option>
            </select>

          </div>

        </div>

        {/* ===================================================
            EMPLOYEE TABLE
        =================================================== */}

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          {/* Table Header */}

          <div className="border-b p-6">

            <h2 className="text-lg font-semibold text-gray-900">
              All Employees
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {loading
                ? "Loading employees..."
                : `${totalElements} employees found`}
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="m-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Table */}

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px] text-left text-sm">

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
                    Phone
                  </th>

                  <th className="px-6 py-4 font-medium text-gray-500">
                    Salary
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

                {/* Loading */}

                {loading ? (

                  <tr>

                    <td
                      colSpan={7}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      Loading employees...
                    </td>

                  </tr>

                ) : employees.length === 0 ? (

                  /* Empty */

                  <tr>

                    <td
                      colSpan={7}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No employees found.
                    </td>

                  </tr>

                ) : (

                  /* Employee Rows */

                  employees.map(
                    (employee) => (

                      <tr
                        key={employee.id}
                        className="transition hover:bg-gray-50"
                      >

                        {/* Employee */}

                        <td className="px-6 py-4">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                              {getInitials(
                                employee
                              )}
                            </div>

                            <div>

                              <p className="font-medium text-gray-900">
                                {
                                  employee.firstName
                                }{" "}
                                {
                                  employee.lastName
                                }
                              </p>

                              <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">

                                <Mail className="h-3 w-3" />

                                {
                                  employee.email
                                }

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* Employee ID */}

                        <td className="px-6 py-4 font-medium text-gray-700">
                          {
                            employee.employeeCode
                          }
                        </td>

                        {/* Department */}

                        <td className="px-6 py-4 text-gray-600">
                          {
                            employee.department
                          }
                        </td>

                        {/* Phone */}

                        <td className="px-6 py-4">

                          <div className="flex items-center gap-1 text-gray-600">

                            <Phone className="h-3.5 w-3.5" />

                            {
                              employee.phone ||
                              "N/A"
                            }

                          </div>

                        </td>

                        {/* Salary */}

                        <td className="px-6 py-4 font-medium text-gray-700">
                          ₹
                          {Number(
                            employee.salary
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </td>

                        {/* Status */}

                        <td className="px-6 py-4">

                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                              employee.status ===
                              "ACTIVE"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {employee.status}
                          </span>

                        </td>

                        {/* Action */}

                        <td className="px-6 py-4">

                          <div className="relative">

                            <button
                              type="button"
                              onClick={() =>
                                setOpenActionId(
                                  openActionId ===
                                    employee.id
                                    ? null
                                    : employee.id
                                )
                              }
                              className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                            >
                              <MoreVertical className="h-5 w-5" />
                            </button>

                            {/* Action Dropdown */}

                            {openActionId ===
                              employee.id && (

                              <div className="absolute right-0 top-10 z-20 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleStatusChange(
                                      employee
                                    )
                                  }
                                  disabled={
                                    updatingStatusId ===
                                    employee.id
                                  }
                                  className="w-full px-4 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  {updatingStatusId ===
                                  employee.id
                                    ? "Updating..."
                                    : employee.status ===
                                      "ACTIVE"
                                    ? "Deactivate"
                                    : "Activate"}
                                </button>

                              </div>
                            )}

                          </div>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>

          {/* =================================================
              PAGINATION
          ================================================= */}

          {!loading &&
            totalElements > 0 && (

              <div className="flex items-center justify-between border-t px-6 py-4">

                <p className="text-sm text-gray-500">
                  Page{" "}
                  {currentPage + 1}{" "}
                  of{" "}
                  {totalPages}
                </p>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    disabled={
                      currentPage === 0 ||
                      loading
                    }
                    onClick={
                      handlePrevious
                    }
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    disabled={
                      currentPage >=
                        totalPages - 1 ||
                      loading
                    }
                    onClick={handleNext}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>

                </div>

              </div>

            )}

        </div>

      </div>

      {/* =====================================================
          ADD EMPLOYEE MODAL
      ===================================================== */}

      {isModalOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Overlay */}

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal */}

          <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="flex items-center justify-between border-b px-6 py-5">

              <div>

                <h2 className="text-xl font-semibold text-gray-900">
                  Add New Employee
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter employee details below.
                </p>

              </div>

              <button
                type="button"
                onClick={
                  handleCloseModal
                }
                disabled={creating}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={
                handleCreateEmployee
              }
              className="p-6"
            >

              {/* Form Error */}

              {formError && (

                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {formError}
                </div>

              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* First Name */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={
                      formData.firstName
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    placeholder="John"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Last Name */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={
                      formData.lastName
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    placeholder="Smith"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Phone */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={
                      formData.phone
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Role */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Role
                  </label>

                  <select
                    name="role"
                    value={
                      formData.role
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
                  >
                    <option value="EMPLOYEE">
                      Employee
                    </option>

                    <option value="HR">
                      HR
                    </option>

                    <option value="ADMIN">
                      Admin
                    </option>
                  </select>

                </div>

                {/* Department */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Department
                  </label>

                  <select
                    name="department"
                    value={
                      formData.department
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
                  >
                    <option value="">
                      Select Department
                    </option>

                    <option value="Engineering">
                      Engineering
                    </option>

                    <option value="Human Resources">
                      Human Resources
                    </option>

                    <option value="Finance">
                      Finance
                    </option>

                    <option value="Marketing">
                      Marketing
                    </option>
                  </select>

                </div>

                {/* Designation */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Designation
                  </label>

                  <input
                    type="text"
                    name="designation"
                    value={
                      formData.designation
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    placeholder="Software Developer"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Joining Date */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Joining Date
                  </label>

                  <input
                    type="date"
                    name="joiningDate"
                    value={
                      formData.joiningDate
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

                {/* Employment Type */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Employment Type
                  </label>

                  <select
                    name="employmentType"
                    value={
                      formData.employmentType
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 outline-none"
                  >
                    <option value="FULL_TIME">
                      Full Time
                    </option>

                    <option value="PART_TIME">
                      Part Time
                    </option>

                    <option value="CONTRACT">
                      Contract
                    </option>

                    <option value="INTERN">
                      Intern
                    </option>

                    <option value="TEMPORARY">
                      Temporary
                    </option>
                  </select>

                </div>

                {/* Salary */}

                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Salary
                  </label>

                  <input
                    type="number"
                    name="salary"
                    value={
                      formData.salary || ""
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    min="1"
                    placeholder="60000"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
                  />

                </div>

              </div>

              {/* =================================================
                  FORM FOOTER
              ================================================= */}

              <div className="mt-6 flex justify-end gap-3 border-t pt-5">

                <button
                  type="button"
                  onClick={
                    handleCloseModal
                  }
                  disabled={creating}
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={creating}
                  className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {creating
                    ? "Creating..."
                    : "Create Employee"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}
