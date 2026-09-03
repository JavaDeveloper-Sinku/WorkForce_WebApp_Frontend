"use client";

import Link from "next/link";
import {
  Users,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-black">
      {/* ================= NAVBAR ================= */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
              <Users size={21} />
            </div>

            <span>WorkForce</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a
              href="#home"
              className="transition hover:text-black"
            >
              Home
            </a>

            <a
              href="#features"
              className="transition hover:text-black"
            >
              Features
            </a>

            <a
              href="#about"
              className="transition hover:text-black"
            >
              About
            </a>
          </nav>

          {/* Login */}
          <Link
            href="/login"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            Login
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gray-200/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <ShieldCheck size={16} />
              Simple & Secure Employee Management
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Manage Your Workforce.
              <br />
              <span className="text-gray-500">
                Simplify Your Business.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              A simple and secure employee management platform to manage
              employees, departments, and workforce information in one place.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#features"
                className="rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:border-black"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* ================= HERO PREVIEW ================= */}
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              {/* Browser top bar */}
              <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-gray-300" />
                <span className="h-3 w-3 rounded-full bg-gray-300" />
                <span className="h-3 w-3 rounded-full bg-gray-300" />

                <div className="ml-4 h-8 flex-1 rounded-lg bg-gray-100" />
              </div>

              {/* Dashboard Preview */}
              <div className="grid min-h-[350px] grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-gray-200 bg-gray-50 p-5">
                  <div className="mb-8 h-8 w-28 rounded-lg bg-gray-200" />

                  <div className="space-y-4">
                    <div className="h-9 rounded-lg bg-black" />
                    <div className="h-9 rounded-lg bg-gray-200" />
                    <div className="h-9 rounded-lg bg-gray-200" />
                    <div className="h-9 rounded-lg bg-gray-200" />
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-9 p-6">
                  <div className="h-8 w-40 rounded-lg bg-gray-200" />

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-2xl border border-gray-200 bg-white shadow-sm" />
                    <div className="h-24 rounded-2xl border border-gray-200 bg-white shadow-sm" />
                    <div className="h-24 rounded-2xl border border-gray-200 bg-white shadow-sm" />
                  </div>

                  <div className="mt-6 h-40 rounded-2xl border border-gray-200 bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="border-t border-gray-200 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Features
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Manage your workforce with simple tools designed for modern
              organizations.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Employee */}
            <div className="group rounded-3xl border border-gray-200 bg-[#f8f9fc] p-8 transition duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <Users size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Employee Management
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Manage employee profiles, information, roles, and workforce
                data from one centralized system.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 size={17} />
                Centralized employee data
              </div>
            </div>

            {/* Departments */}
            <div className="group rounded-3xl border border-gray-200 bg-[#f8f9fc] p-8 transition duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <Building2 size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Department Management
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Organize employees into departments and keep your
                organizational structure easy to manage.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 size={17} />
                Easy organization
              </div>
            </div>

            {/* Security */}
            <div className="group rounded-3xl border border-gray-200 bg-[#f8f9fc] p-8 transition duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Role-Based Security
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Control system access with dedicated roles for Admin, HR,
                and Employees.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 size={17} />
                Admin, HR & Employee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-[#f8f9fc] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Built for simplicity
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            One place to manage your workforce.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            WorkForce brings employee and organizational management together
            in a clean, secure, and easy-to-use platform.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-gray-800"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
              <Users size={18} />
            </div>

            WorkForce
          </div>

          <p className="text-sm text-gray-500">
            © 2026 WorkForce. Employee Management System.
          </p>
        </div>
      </footer>
    </main>
  );
}

