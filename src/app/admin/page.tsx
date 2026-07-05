"use client";

/**
 * ============================================================================
 * Admin Dashboard Page (Client Component)
 * ============================================================================
 *
 * Route: /admin
 *
 * Protected admin dashboard with overview stats, recent bookings, and
 * a weekly revenue chart. Uses mock data from MOCK_DASHBOARD_DATA in
 * data.ts. Authentication is a client-side sessionStorage check — NOT
 * secure for production.
 *
 * Features:
 *   - Stats cards: total bookings, revenue, active members, utilization
 *   - Recent bookings table with status badges
 *   - Weekly revenue bar chart (CSS-based, no chart library)
 *   - Logout button (clears sessionStorage)
 *
 * DESIGN RULES: Flat design, Inter font, no emojis. Orange accents on
 * stats and highlights only.
 * ============================================================================
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout } from "@/lib/auth";
import { MOCK_DASHBOARD_DATA, SITE } from "@/lib/data";

// --- Stat Card Component ---------------------------------------------------

function StatCard({ label, value, sublabel }: { label: string; value: string; sublabel?: string }) {
  return (
    <div className="card">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray-mid">
        {label}
      </p>
      <p className="mt-2 text-3xl font-extrabold text-brand-black">
        {value}
      </p>
      {sublabel && (
        <p className="mt-1 text-xs text-brand-gray-mid">{sublabel}</p>
      )}
    </div>
  );
}

// --- Status Badge Component ------------------------------------------------

function StatusBadge({ status }: { status: "confirmed" | "pending" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        status === "confirmed"
          ? "bg-green-100 text-green-700"
          : "bg-orange-100 text-orange-700"
      }`}
    >
      {status === "confirmed" ? "Confirmed" : "Pending"}
    </span>
  );
}

// --- Revenue Bar Chart Component -------------------------------------------

function RevenueChart() {
  const { revenueByDay } = MOCK_DASHBOARD_DATA;
  const maxRevenue = Math.max(...revenueByDay.map((d) => d.revenue));

  return (
    <div className="card">
      <h3 className="mb-6 text-lg font-bold text-brand-black">
        Revenue This Week
      </h3>
      <div className="flex items-end justify-between gap-3" style={{ height: "200px" }}>
        {revenueByDay.map((d) => {
          const heightPercent = (d.revenue / maxRevenue) * 100;
          return (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              {/* Bar */}
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t-lg bg-brand-orange transition-all duration-500 hover:bg-brand-orange-dark"
                  style={{ height: `${heightPercent}%` }}
                  title={`$${d.revenue}`}
                />
              </div>
              {/* Day label */}
              <span className="text-xs font-medium text-brand-gray-mid">
                {d.day}
              </span>
              {/* Revenue label */}
              <span className="text-xs font-semibold text-brand-black">
                ${d.revenue}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Dashboard Component ----------------------------------------------

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  // Check authentication on mount — redirect to /login if not authenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isAuthenticated()) {
        router.replace("/login");
        return;
      }
      setAuthenticated(true);
    }
    setChecking(false);
  }, [router]);

  // --- Logout handler ---

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Show nothing while checking auth / redirecting
  if (checking || !authenticated) {
    return (
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-md text-center">
          <div className="flex justify-center">
            <svg className="h-8 w-8 animate-spin text-brand-orange" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <p className="mt-4 text-brand-gray-mid">Loading…</p>
        </div>
      </section>
    );
  }

  const { stats, recentBookings } = MOCK_DASHBOARD_DATA;

  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="mx-auto max-w-7xl">
        {/* ---- Header ---- */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-brand-black">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-brand-gray-mid">
              {SITE.name} — Administrative Overview
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-brand-black hover:text-brand-orange"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="btn-outline text-sm"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* ---- Stats Grid ---- */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Bookings"
            value={stats.totalBookings.toString()}
            sublabel="All time"
          />
          <StatCard
            label="Total Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            sublabel="All time"
          />
          <StatCard
            label="Active Members"
            value={stats.activeMembers.toString()}
            sublabel="Unique customers"
          />
          <StatCard
            label="Court Utilization"
            value={`${stats.courtUtilization}%`}
            sublabel="Average this week"
          />
        </div>

        {/* ---- Two-column: Chart + Recent Bookings ---- */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Revenue Chart */}
          <RevenueChart />

          {/* Recent Bookings Table */}
          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-brand-black">
                Recent Bookings
              </h3>
              <span className="text-xs text-brand-gray-mid">
                Showing {recentBookings.length} of {stats.totalBookings}
              </span>
            </div>

            {/* Table (responsive — scrolls on mobile) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-gray-border text-xs text-brand-gray-mid">
                    <th className="pb-2 pr-4 font-semibold uppercase tracking-wide">
                      Customer
                    </th>
                    <th className="pb-2 pr-4 font-semibold uppercase tracking-wide">
                      Court
                    </th>
                    <th className="pb-2 pr-4 font-semibold uppercase tracking-wide">
                      Date
                    </th>
                    <th className="pb-2 pr-4 font-semibold uppercase tracking-wide">
                      Price
                    </th>
                    <th className="pb-2 font-semibold uppercase tracking-wide">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-brand-gray-border last:border-0"
                    >
                      <td className="py-3 pr-4">
                        <div className="font-medium text-brand-black">
                          {booking.customer}
                        </div>
                        <div className="text-xs text-brand-gray-mid">
                          {booking.email}
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-brand-gray-mid">
                        {booking.court}
                      </td>
                      <td className="py-3 pr-4 text-brand-gray-mid">
                        {booking.date}
                        <div className="text-xs">{booking.time}</div>
                      </td>
                      <td className="py-3 pr-4 font-semibold text-brand-black">
                        ${booking.price}
                      </td>
                      <td className="py-3">
                        <StatusBadge status={booking.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View all link (placeholder) */}
            <div className="mt-4 text-center">
              <button className="text-sm font-medium text-brand-orange hover:underline">
                View all bookings &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* ---- Quick Actions ---- */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-bold text-brand-black">
            Quick Actions
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/booking" className="card text-center transition-colors hover:border-brand-orange">
              <p className="font-medium text-brand-black">View Booking Page</p>
              <p className="mt-1 text-xs text-brand-gray-mid">See what customers see</p>
            </Link>
            <Link href="/waiver" className="card text-center transition-colors hover:border-brand-orange">
              <p className="font-medium text-brand-black">View Waiver</p>
              <p className="mt-1 text-xs text-brand-gray-mid">Review liability terms</p>
            </Link>
            <Link href="/#pricing" className="card text-center transition-colors hover:border-brand-orange">
              <p className="font-medium text-brand-black">Edit Pricing</p>
              <p className="mt-1 text-xs text-brand-gray-mid">Update court rates</p>
            </Link>
            <Link href="/privacy" className="card text-center transition-colors hover:border-brand-orange">
              <p className="font-medium text-brand-black">View Privacy Policy</p>
              <p className="mt-1 text-xs text-brand-gray-mid">Review data policy</p>
            </Link>
          </div>
        </div>

        {/* ---- Development Notice ---- */}
        <div className="mt-8 rounded-2xl border border-brand-orange bg-brand-orange-light p-4">
          <p className="text-sm text-brand-black">
            <strong className="font-semibold">Development Mode:</strong> This
            dashboard uses mock data and client-side authentication. When the
            database is connected, replace sessionStorage auth with a proper
            auth provider and fetch real data from the bookings table.
          </p>
        </div>
      </div>
    </section>
  );
}