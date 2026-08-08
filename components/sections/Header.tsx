"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";

const NAV = [
  { href: "#games", label: "Pilih Game" },
  { href: "#topup", label: "Form Order" },
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
      <div className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Nexivora — kembali ke atas">
          <LogoMark className="w-9 h-9 shrink-0" />
          <span className="font-display text-[1.15rem] font-extrabold tracking-tight">Nexivora</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-[#8A93A8]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {NAV.map((item) => (
            <Link key={item.href} href={navHref(item.href)} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={navHref("#topup")}
            className="btn-gold hidden sm:inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold"
          >
            Top Up Sekarang
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu navigasi"}
            className="lg:hidden rounded-xl p-2.5 border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-[rgba(7,9,15,.95)] backdrop-blur px-5 py-4">
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" onClick={() => setOpen(false)} className="block py-1.5">Home</Link></li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={navHref(item.href)} onClick={() => setOpen(false)} className="block py-1.5">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={navHref("#topup")} onClick={() => setOpen(false)} className="btn-gold mt-2 inline-flex rounded-xl px-4 py-2.5 font-semibold">
                Top Up Sekarang
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
