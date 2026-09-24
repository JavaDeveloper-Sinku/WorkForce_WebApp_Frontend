"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Star,
  Lock,
  Bell,
  User,
  ChevronDown,
  LayoutDashboard,
  Sparkles,
  Zap,
  Globe,
  Award,
  BarChart3,
  Check,
  Send,
  Menu,
  X,
  Play
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"overview" | "employees" | "departments" | "security">("overview");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Background Gradient Blob Overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-emerald-200/40 blur-[120px]" />
        <div className="absolute right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-[140px]" />
        <div className="absolute left-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-emerald-100/50 blur-[150px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-105">
              <Users size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Work<span className="text-emerald-600">Force</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#home" className="transition hover:text-emerald-600">
              Home
            </a>
            <a href="#features" className="transition hover:text-emerald-600">
              Features
            </a>
            <a href="#results" className="transition hover:text-emerald-600">
              Results
            </a>
            <a href="#pricing" className="transition hover:text-emerald-600">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-emerald-600">
              FAQ
            </a>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 px-4 py-2 transition"
            >
              Log In
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/40"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-6 md:hidden shadow-xl">
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-700">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Features</a>
              <a href="#results" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Results</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">FAQ</a>
              <hr className="my-2 border-slate-100" />
              <Link href="/login" className="text-center font-bold text-slate-700 py-2">Log In</Link>
              <Link href="/login" className="rounded-full bg-emerald-600 py-3 text-center text-white font-bold shadow-md">Get Started Free</Link>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Top Pill Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-sm">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Simple & Secure Employee Management</span>
              <span className="ml-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] text-white font-extrabold uppercase tracking-wide">
                v3.0 Live
              </span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Manage Your Workforce.
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 bg-clip-text text-transparent">
                Simplify Your Business.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              A modern employee management platform engineered to centralize team profiles, streamline department structures, and guarantee enterprise-grade security in one place.
            </p>

            {/* Call To Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-600/30"
              >
                <span>Get Started Free</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#features"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-8 py-4 font-bold text-slate-700 backdrop-blur-sm transition hover:-translate-y-1 hover:border-slate-400 hover:bg-white shadow-sm"
              >
                <Play size={14} className="fill-emerald-600 text-emerald-600" />
                <span>Explore Features</span>
              </a>
            </div>

            {/* Social Proof Avatars */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" />
              </div>
              <div className="flex items-center gap-2 font-medium">
                <div className="flex text-amber-400">
                  <Star size={14} className="fill-amber-400" />
                  <Star size={14} className="fill-amber-400" />
                  <Star size={14} className="fill-amber-400" />
                  <Star size={14} className="fill-amber-400" />
                  <Star size={14} className="fill-amber-400" />
                </div>
                <span className="font-semibold text-slate-700">5.0 Star Rating from 500+ Businesses</span>
              </div>
            </div>
          </div>

          {/* ================= INTERACTIVE HERO DASHBOARD PREVIEW ================= */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Floating Glass Pill Left */}
            <div className="absolute -left-6 top-16 z-20 hidden md:block animate-bounce [animation-duration:5s]">
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/40">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Efficiency Boost</p>
                  <p className="text-lg font-black text-slate-900">+320% ROI</p>
                  <p className="text-[10px] font-semibold text-emerald-600">Last 6 Months</p>
                </div>
              </div>
            </div>

            {/* Floating Glass Pill Right */}
            <div className="absolute -right-6 bottom-16 z-20 hidden md:block animate-bounce [animation-duration:6s]">
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 shadow-lg">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">System Security</p>
                  <p className="text-lg font-black text-slate-900">100% Encrypted</p>
                  <p className="text-[10px] font-semibold text-slate-400">Role-Based Access</p>
                </div>
              </div>
            </div>

            {/* Main Interactive Browser Wrapper */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-300/60 backdrop-blur-xl">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 bg-slate-50/90 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div className="mx-4 flex h-7 flex-1 max-w-md items-center justify-center rounded-lg bg-white border border-slate-200 px-3 text-xs text-slate-400 font-mono">
                  <Lock size={10} className="mr-2 text-emerald-600" /> app.workforce.com/dashboard
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Bell size={15} className="hover:text-slate-600 cursor-pointer" />
                  <User size={15} className="hover:text-slate-600 cursor-pointer" />
                </div>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="grid min-h-[420px] grid-cols-12 bg-slate-50/50">
                {/* Sidebar Navigation */}
                <div className="col-span-3 sm:col-span-3 border-r border-slate-200/80 bg-white p-3 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center gap-2 text-emerald-600 font-black text-sm sm:text-base">
                      <div className="h-7 w-7 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-xs font-bold">W</div>
                      <span className="hidden sm:inline text-slate-900">WorkForce</span>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <button
                        onClick={() => setActiveTab("overview")}
                        className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition ${
                          activeTab === "overview"
                            ? "bg-emerald-50 text-emerald-700 shadow-sm"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <LayoutDashboard size={16} className={activeTab === "overview" ? "text-emerald-600" : "text-slate-400"} />
                        <span className="hidden sm:inline">Overview</span>
                      </button>

                      <button
                        onClick={() => setActiveTab("employees")}
                        className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition ${
                          activeTab === "employees"
                            ? "bg-emerald-50 text-emerald-700 shadow-sm"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Users size={16} className={activeTab === "employees" ? "text-emerald-600" : "text-slate-400"} />
                        <span className="hidden sm:inline">Employees</span>
                      </button>

                      <button
                        onClick={() => setActiveTab("departments")}
                        className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition ${
                          activeTab === "departments"
                            ? "bg-emerald-50 text-emerald-700 shadow-sm"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Building2 size={16} className={activeTab === "departments" ? "text-emerald-600" : "text-slate-400"} />
                        <span className="hidden sm:inline">Departments</span>
                      </button>

                      <button
                        onClick={() => setActiveTab("security")}
                        className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition ${
                          activeTab === "security"
                            ? "bg-emerald-50 text-emerald-700 shadow-sm"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <ShieldCheck size={16} className={activeTab === "security" ? "text-emerald-600" : "text-slate-400"} />
                        <span className="hidden sm:inline">Security</span>
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">HR</div>
                      <div className="text-xs">
                        <p className="font-bold text-slate-800">Sarah Jenkins</p>
                        <p className="text-slate-400 text-[10px]">HR Admin</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Main View Area */}
                <div className="col-span-9 sm:col-span-9 p-4 sm:p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-slate-900">Workforce Analytics</h3>
                          <p className="text-xs text-slate-500">Real-time stats across active teams</p>
                        </div>
                        <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" /> System Live
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <p className="text-xs text-slate-500 font-semibold">Total Staff</p>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-xl font-black text-slate-900">1,482</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12%</span>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <p className="text-xs text-slate-500 font-semibold">Departments</p>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-xl font-black text-slate-900">24 Active</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Optimal</span>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <p className="text-xs text-slate-500 font-semibold">Security Access</p>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-xl font-black text-slate-900">3 Roles</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Verified</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-xs font-bold text-slate-800 mb-3">Recent Onboarding Activity</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                            <div className="flex items-center gap-2">
                              <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">JD</div>
                              <div>
                                <p className="font-bold text-slate-800">John Doe</p>
                                <p className="text-[10px] text-slate-400">Senior Developer</p>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Active</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                            <div className="flex items-center gap-2">
                              <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">AS</div>
                              <div>
                                <p className="font-bold text-slate-800">Alice Smith</p>
                                <p className="text-[10px] text-slate-400">Design Lead</p>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "employees" && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-slate-900">Employee Directory</h3>
                      <p className="text-xs text-slate-500">Centralized profile management</p>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                        <Users size={32} className="mx-auto text-emerald-600 mb-2" />
                        <p className="font-bold text-slate-800 text-sm">Central Employee Records</p>
                        <p className="text-xs text-slate-500 mt-1">Manage profiles, contact info, contracts, and salary details from one spot.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "departments" && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-slate-900">Department Hierarchy</h3>
                      <p className="text-xs text-slate-500">Organized structure view</p>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                        <Building2 size={32} className="mx-auto text-emerald-600 mb-2" />
                        <p className="font-bold text-slate-800 text-sm">Department Structure</p>
                        <p className="text-xs text-slate-500 mt-1">Group employees into Engineering, Product, HR, Marketing, and Operations.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-slate-900">Security & Roles</h3>
                      <p className="text-xs text-slate-500">Permission matrices</p>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                        <ShieldCheck size={32} className="mx-auto text-emerald-600 mb-2" />
                        <p className="font-bold text-slate-800 text-sm">Role-Based Access Control</p>
                        <p className="text-xs text-slate-500 mt-1">Assign custom read/write privileges for Admins, Managers, and Employees.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND LOGO MARQUEE ================= */}
      <section className="border-y border-slate-200/80 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by leading enterprise teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition">
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">Google</span>
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">Microsoft</span>
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">airbnb</span>
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">HubSpot</span>
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">amazon</span>
            <span className="text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2">Notion</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Our Capabilities</p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-5xl">Everything You Need</h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Manage your workforce with simple, intuitive tools designed for modern organizations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Card 1: Employee Management */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
                <Users size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">Employee Management</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Manage employee profiles, information, roles, and workforce data from one centralized system.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-800 border-t border-slate-100 pt-6">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Centralized employee data</span>
              </div>
            </div>

            {/* Card 2: Department Management */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
                <Building2 size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">Department Management</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Organize employees into departments and keep your organizational structure easy to manage.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-800 border-t border-slate-100 pt-6">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Easy organization</span>
              </div>
            </div>

            {/* Card 3: Security */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
                <ShieldCheck size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">Role-Based Security</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Control system access with dedicated roles for Admin, HR, and Employee permissions.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-800 border-t border-slate-100 pt-6">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Admin, HR & Employee roles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DARK METRICS BANNER ================= */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 my-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 py-16 px-8 sm:px-12 text-white shadow-2xl border border-slate-800">
          <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4 border border-emerald-500/30">
                Strategic Impact
              </span>
              <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
                We Drive Growth That Matters
              </h2>
              <p className="mt-4 text-slate-400 text-base">
                Strategic management solutions designed to deliver measurable results and long-term organization success.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href="/login"
                  className="rounded-full bg-emerald-500 px-7 py-3.5 font-bold text-white transition hover:bg-emerald-600 shadow-lg shadow-emerald-500/25"
                >
                  Let's Grow Together
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">240+</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">Projects Completed</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">98%</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">Client Satisfaction</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">10+</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">Years of Experience</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">50+</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">HR System Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS / CASE STUDIES ================= */}
      <section id="results" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Proven Results</p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Real Impact. Real Results.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
              <div className="p-6 bg-slate-900 text-white">
                <span className="rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 uppercase">E-Commerce</span>
                <div className="mt-4">
                  <span className="text-4xl font-black text-emerald-400">+180%</span>
                  <p className="text-sm font-semibold text-slate-300">Efficiency Increased</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">Boosted workforce efficiency and reduced manual administrative work across multi-office teams.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
              <div className="p-6 bg-emerald-900 text-white">
                <span className="rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 uppercase">SaaS Scaleup</span>
                <div className="mt-4">
                  <span className="text-4xl font-black text-emerald-400">+210%</span>
                  <p className="text-sm font-semibold text-slate-300">Conversions</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">Streamlined department onboarding, accelerating new hire productivity from weeks to days.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
              <div className="p-6 bg-slate-900 text-white">
                <span className="rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 uppercase">Logistics</span>
                <div className="mt-4">
                  <span className="text-4xl font-black text-emerald-400">+150%</span>
                  <p className="text-sm font-semibold text-slate-300">Revenue Growth</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">Centralized access permissions ensured data safety while scaling operations rapidly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section id="pricing" className="py-24 bg-slate-100/60 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Flexible Plans</p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-5xl">Simple, Transparent Pricing</h2>

            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="relative h-8 w-14 rounded-full bg-emerald-600 p-1 transition-colors"
              >
                <div
                  className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm font-bold ${billingCycle === "yearly" ? "text-slate-900" : "text-slate-500"}`}>
                Yearly <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-800">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {/* Starter Plan */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="font-bold text-slate-900 text-xl">Starter</p>
                <p className="text-xs text-slate-500 mt-1">Perfect for small businesses</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">{billingCycle === "yearly" ? "$239" : "$299"}</span>
                  <span className="text-slate-500 text-sm font-semibold">/mo</span>
                </div>
                <ul className="mt-8 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Up to 50 Employees</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Standard Departments</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Essential Security</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Email Support</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 w-full block text-center rounded-full border border-slate-300 bg-slate-50 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100">
                Get Started
              </Link>
            </div>

            {/* Growth Plan */}
            <div className="relative rounded-3xl border-2 border-emerald-500 bg-slate-900 p-8 shadow-2xl text-white flex flex-col justify-between transform lg:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Popular
              </div>
              <div>
                <p className="font-bold text-emerald-400 text-xl">Growth</p>
                <p className="text-xs text-slate-300 mt-1">Best for growing businesses</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-white">{billingCycle === "yearly" ? "$479" : "$599"}</span>
                  <span className="text-slate-300 text-sm font-semibold">/mo</span>
                </div>
                <ul className="mt-8 space-y-4 text-sm text-slate-200">
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400" /> Up to 500 Employees</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400" /> Advanced Departments</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400" /> Role-Based Security</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400" /> Real-time Analytics</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-400" /> Priority Support</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 w-full block text-center rounded-full bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600">
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="font-bold text-slate-900 text-xl">Enterprise</p>
                <p className="text-xs text-slate-500 mt-1">For large scale businesses</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">{billingCycle === "yearly" ? "$799" : "$999"}</span>
                  <span className="text-slate-500 text-sm font-semibold">/mo</span>
                </div>
                <ul className="mt-8 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Unlimited Employees</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Custom Integrations</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> Dedicated Account Manager</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-emerald-600" /> 24/7 SLA Support</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 w-full block text-center rounded-full border border-slate-300 bg-slate-50 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Got Questions?</p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does WorkForce simplify employee management?",
                a: "WorkForce brings all employee profiles, department hierarchies, and system security controls into a single dashboard, removing the need for scattered spreadsheets."
              },
              {
                q: "Is my workforce data secure?",
                a: "Yes. WorkForce uses enterprise-grade encryption and granular role-based security permissions to control access between Admins, HR managers, and employees."
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time directly from your admin dashboard without hidden cancellation fees."
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between font-bold text-slate-900 text-left"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-emerald-600 transition-transform ${openFaq === idx ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT / CTA BANNER ================= */}
      <section id="about" className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Built for simplicity</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl text-white">One place to manage your workforce.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            WorkForce brings employee and organizational management together in a clean, secure, and easy-to-use platform.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-600 shadow-xl shadow-emerald-500/20"
          >
            <span>Get Started Free</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-900 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 font-bold text-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <Users size={20} />
                </div>
                <span>WorkForce</span>
              </div>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                A simple and secure employee management platform to manage employees, departments, and workforce information in one place.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider mb-4">Platform</p>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#home" className="hover:text-emerald-400">Overview</a></li>
                  <li><a href="#features" className="hover:text-emerald-400">Features</a></li>
                  <li><a href="#pricing" className="hover:text-emerald-400">Pricing</a></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider mb-4">Company</p>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#about" className="hover:text-emerald-400">About</a></li>
                  <li><a href="#results" className="hover:text-emerald-400">Results</a></li>
                  <li><a href="#faq" className="hover:text-emerald-400">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="font-bold text-white uppercase text-xs tracking-wider mb-4">Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
                <button type="submit" className="rounded-xl bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition">
                  <Send size={16} />
                </button>
              </form>
              {subscribed && <p className="mt-2 text-xs text-emerald-400">Thank you for subscribing!</p>}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
            <p>© 2026 WorkForce. Employee Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}