"use client";

import SidebarItem from "./SidebarItem";
import { sidebarItems } from "@/config/sidebar";
import { UserRole } from "@/types/auth";
import { BriefcaseBusiness } from "lucide-react";

interface SidebarProps {
  role: UserRole;
}

export default function Sidebar({ role }: SidebarProps) {
  const visibleItems = sidebarItems.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <aside className="h-screen w-64 border-r bg-white p-4">
      {/* Logo / Brand */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
          <BriefcaseBusiness className="h-5 w-5 text-white" />
        </div>

        <span className="text-xl font-bold text-gray-900">
          WorkForce
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {visibleItems.map((item) => (
          <SidebarItem
            key={item.href}
            name={item.name}
            href={item.href}
          />
        ))}
      </nav>
    </aside>
  );
}