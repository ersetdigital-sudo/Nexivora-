"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { href: "/admin/games", label: "Kelola Harga", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { href: "/admin/qris", label: "Kelola QRIS", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><path d="M21 14h-4v4"/></svg> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLogin = pathname === "/admin/login";

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-ink flex">
      {/* Desktop sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/[0.04] bg-panel hidden lg:flex flex-col">
        <div className="px-4 py-4 border-b border-white/[0.04]">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="w-6 h-6 shrink-0" />
            <span className="font-display font-semibold text-sm tracking-tight text-white/90">Nexivora</span>
          </Link>
          <p className="text-[10px] text-white/25 mt-1 uppercase tracking-[.15em]">Admin Panel</p>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition ${
                pathname === item.href
                  ? "text-white bg-white/[0.05]"
                  : "text-white/45 hover:text-white/80 hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-white/30">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-3 border-t border-white/[0.04]">
          <form action="/api/auth/signout" method="post">
            <button type="submit" className="text-xs text-white/30 hover:text-white/60 transition">
              Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden border-b border-white/[0.04] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoMark className="w-6 h-6 shrink-0" />
            <span className="font-display font-semibold text-sm tracking-tight text-white/90">Admin</span>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.05] transition"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </header>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <nav className="lg:hidden border-b border-white/[0.04] bg-panel px-2 py-2 space-y-0.5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition ${
                  pathname === item.href
                    ? "text-white bg-white/[0.05]"
                    : "text-white/45 hover:text-white/80 hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-white/30">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-2 border-t border-white/[0.04] mt-1">
              <form action="/api/auth/signout" method="post">
                <button type="submit" className="text-xs text-white/30 hover:text-white/60 transition">
                  Keluar
                </button>
              </form>
            </div>
          </nav>
        )}

        <main className="flex-1 p-4 lg:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
