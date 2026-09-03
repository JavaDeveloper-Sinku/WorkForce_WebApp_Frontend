"use client";

import { useEffect, useRef, useState } from "react";

import {
  Bell,
  BriefcaseBusiness,
  Menu,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Check,
  CheckCheck,
  Trash2,
  UserPlus,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

// ---- Notification types ----
type NotificationType = "info" | "success" | "warning" | "user";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

// ---- Mock data (baad me API se replace kar dena) ----
const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "user",
    title: "New Employee Added",
    message: "Priya Sharma has been onboarded to the Engineering team.",
    time: "5 min ago",
    read: false,
  },
  {
    id: "2",
    type: "warning",
    title: "Leave Request Pending",
    message: "Rahul Verma has requested 3 days of leave.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "success",
    title: "Payroll Processed",
    message: "October payroll has been successfully processed.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: "4",
    type: "info",
    title: "System Update",
    message: "WorkForce will undergo maintenance tonight at 11 PM.",
    time: "Yesterday",
    read: true,
  },
];

// ---- Icon per notification type ----
function NotificationIcon({ type }: { type: NotificationType }) {
  const baseClass = "h-4 w-4";

  switch (type) {
    case "user":
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
          <UserPlus className={`${baseClass} text-blue-600`} />
        </div>
      );
    case "warning":
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
          <AlertTriangle className={`${baseClass} text-amber-600`} />
        </div>
      );
    case "success":
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
          <CheckCheck className={`${baseClass} text-green-600`} />
        </div>
      );
    default:
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <CalendarClock className={`${baseClass} text-gray-600`} />
        </div>
      );
  }
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications
  );

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }

      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Later:
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");

    window.location.href = "/login";
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const removeNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <header className="sticky top-4 z-40 mb-6">
      <div className="flex h-16 items-center justify-between rounded-full border border-gray-200 bg-white px-4 shadow-sm">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* WorkForce */}
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-5 w-5 text-gray-900" />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                WorkForce
              </p>

              <p className="text-xs text-gray-500">
                Employee Management
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          {/* Notification Wrapper */}
          <div ref={notifRef} className="relative">

            {/* Notification Button */}
            <button
              type="button"
              onClick={() => setIsNotifOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <Bell className="h-5 w-5" />

              {/* Notification Dot / Count */}
              {unreadCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {isNotifOpen && (
              <div className="absolute right-0 top-14 w-80 max-w-[90vw] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg sm:w-96">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Notifications
                    </p>
                    {unreadCount > 0 && (
                      <p className="text-xs text-gray-500">
                        {unreadCount} unread
                      </p>
                    )}
                  </div>

                  {notifications.length > 0 && (
                    <button
                      type="button"
                      onClick={markAllAsRead}
                      className="flex items-center gap-1 text-xs font-medium text-gray-600 transition hover:text-gray-900"
                    >
                      <Check className="h-3.5 w-3.5" />
                      Mark all read
                    </button>
                  )}
                </div>

                {/* List */}
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center">
                      <Bell className="h-8 w-8 text-gray-300" />
                      <p className="text-sm text-gray-500">
                        No notifications
                      </p>
                    </div>
                  ) : (
                    notifications.map((notif) => (
                      <button
                        key={notif.id}
                        type="button"
                        onClick={() => markAsRead(notif.id)}
                        className={`group flex w-full items-start gap-3 border-b border-gray-50 px-4 py-3 text-left transition hover:bg-gray-50 ${
                          !notif.read ? "bg-blue-50/40" : ""
                        }`}
                      >
                        <NotificationIcon type={notif.type} />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-gray-900">
                              {notif.title}
                            </p>

                            {!notif.read && (
                              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                            )}
                          </div>

                          <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
                            {notif.message}
                          </p>

                          <p className="mt-1 text-[11px] text-gray-400">
                            {notif.time}
                          </p>
                        </div>

                        {/* Remove button - shows on hover */}
                        <button
                          type="button"
                          onClick={(e) => removeNotification(notif.id, e)}
                          className="shrink-0 rounded-full p-1 text-gray-300 opacity-0 transition hover:bg-gray-200 hover:text-gray-600 group-hover:opacity-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </button>
                    ))
                  )}
                </div>

                {/* Footer */}
                {notifications.length > 0 && (
                  <div className="border-t border-gray-100 px-4 py-2.5">
                    <button
                      type="button"
                      onClick={clearAll}
                      className="w-full text-center text-xs font-medium text-gray-500 transition hover:text-red-600"
                    >
                      Clear all notifications
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="mx-1 h-7 w-px bg-gray-200" />

          {/* Profile Wrapper */}
          <div ref={profileRef} className="relative">

            {/* Profile Button */}
            <button
              type="button"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition hover:bg-gray-100"
            >
              {/* Avatar */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                JS
              </div>

              {/* User Info */}
              <div className="hidden text-left sm:block">
                <p className="text-sm font-medium text-gray-900">
                  John Smith
                </p>

                <p className="text-xs text-gray-500">
                  Admin
                </p>
              </div>

              {/* Arrow */}
              <ChevronDown
                className={`hidden h-4 w-4 text-gray-500 transition-transform sm:block ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">

                {/* User Header */}
                <div className="border-b border-gray-100 px-3 py-3">
                  <p className="text-sm font-semibold text-gray-900">
                    John Smith
                  </p>

                  <p className="text-xs text-gray-500">
                    john@example.com
                  </p>
                </div>

                {/* My Profile */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileOpen(false);
                    window.location.href = "/dashboard/profile";
                  }}
                  className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  <User className="h-4 w-4" />
                  <span>My Profile</span>
                </button>

                {/* Settings */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileOpen(false);
                    window.location.href = "/dashboard/settings";
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </button>

                {/* Logout */}
                <div className="my-1 border-t border-gray-100" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}