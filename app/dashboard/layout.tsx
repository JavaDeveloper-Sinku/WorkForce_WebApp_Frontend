"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar - fixed */}
      <div className="fixed top-0 left-0 h-screen w-64 z-40">
        <Sidebar role="ADMIN" />
      </div>

      {/* Main Content - offset by sidebar width */}
      <main className="flex-1 ml-64 p-5 md:p-8">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

      </main>
    </div>
  );
}