"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  name: string;
  href: string;
}

export default function SidebarItem({
  name,
  href,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block rounded-lg px-4 py-3 ${
        isActive
          ? "bg-black text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {name}
    </Link>
  );
}