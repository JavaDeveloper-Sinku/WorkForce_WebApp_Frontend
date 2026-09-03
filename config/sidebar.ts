import { UserRole } from "@/types/auth";

export interface SidebarItem {
  name: string;
  href: string;
  roles: UserRole[];
}

export const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    roles: ["EMPLOYEE", "HR", "ADMIN"],
  },

  {
    name: "My Profile",
    href: "/dashboard/profile",
    roles: ["EMPLOYEE", "HR", "ADMIN"],
  },

  {
    name: "Attendance",
    href: "/dashboard/attendance",
    roles: ["EMPLOYEE", "HR", "ADMIN"],
  },

  {
    name: "Employees",
    href: "/dashboard/employees",
    roles: ["HR", "ADMIN"],
  },

  {
    name: "Departments",
    href: "/dashboard/departments",
    roles: ["HR", "ADMIN"],
  },

  {
    name: "Payroll",
    href: "/dashboard/payroll",
    roles: ["HR", "ADMIN"],
  },

  {
    name: "Reports",
    href: "/dashboard/reports",
    roles: ["HR", "ADMIN"],
  },

  {
    name: "Settings",
    href: "/dashboard/settings",
    roles: ["ADMIN"],
  },
];