"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/ui/LogoMark";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "◈" },
  { href: "/admin/games", label: "Kelola Harga", icon: "◈" },
  { href: "/admin/qris", label: "Kelola QRIS", icon: "◈" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  // Login page: no sidebar, full screen
  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-ink flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-white/5 bg-panel hidden lg:flex flex-col">
        <div className="px-5 py-5 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="w-7 h-7 shrink-0" />
            <span className="font-display font-semibold tracking-tight">Toplixa</span>
          </Link>
          <p className="text-[10px] text-white/30 mt-1 uppercase tracking-[.15em]">Admin Panel</p>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-0.5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition ${
                pathname === item.href
                  ? "text-white bg-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-white/30 text-xs">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 py-4 border-t border-white/5">
          <form action="/api/auth/signout" method="post">
            <button type="submit" className="text-xs text-white/40 hover:text-white/70 transition">
              Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden border-b border-white/5 px-5 py-3 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <LogoMark className="w-7 h-7 shrink-0" />
            <span className="font-display font-semibold tracking-tight">Admin</span>
          </Link>
          <nav className="flex gap-4 text-xs text-white/50">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 p-5 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
