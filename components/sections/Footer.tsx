import { LogoMark } from "@/components/ui/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/35">
        <div className="flex items-center gap-2">
          <LogoMark className="w-6 h-6 shrink-0" />
          <span>© 2026 Nexivora. Seluruh merek dagang game adalah milik pemiliknya masing-masing.</span>
        </div>
        <nav className="flex gap-6" aria-label="Footer">
          <a href="#games" className="hover:text-white/70 transition">
            Katalog
          </a>
          <a href="#cara" className="hover:text-white/70 transition">
            Cara Order
          </a>
          <a href="#faq" className="hover:text-white/70 transition">
            FAQ
          </a>
        </nav>
      </div>
    </footer>
  );
}
