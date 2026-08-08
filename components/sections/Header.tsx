"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";

const NAV = [
  { href: "#games", label: "Game" },
  { href: "#topup", label: "Top Up" },
  { href: "#cara", label: "Cara Order" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Nexivora — kembali ke beranda">
          <LogoMark className="w-9 h-9 shrink-0" />
          <span className="font-display font-semibold tracking-tight text-lg">Nexivora</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-5 md:gap-8 text-[13px] md:text-sm text-white/70">
          <Link
            href="/"
            className={`transition ${isHome ? "text-white" : "hover:text-white"}`}
          >
            Home
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={navHref(item.href)} className="hover:text-white transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={navHref("#topup")}
            className="btn-gold text-[12px] sm:text-sm font-semibold px-3.5 sm:px-4 py-2 rounded-full transition whitespace-nowrap"
          >
            Top Up
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="sm:hidden w-10 h-10 -mr-2 rounded-full hairline flex items-center justify-center text-white/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="sm:hidden border-t border-white/5 bg-black/90 backdrop-blur-xl px-5 py-4 flex flex-col gap-1"
          aria-label="Menu mobile"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`py-3 text-sm transition rounded-lg px-2 ${isHome ? "text-white" : "text-white/70 hover:text-white"}`}
          >
            Home
          </Link>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={navHref(item.href)}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-white/70 hover:text-white transition rounded-lg px-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
