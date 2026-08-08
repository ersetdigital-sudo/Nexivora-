import { LogoMark } from "@/components/ui/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="w-7 h-7 shrink-0" />
              <span className="font-display text-lg font-extrabold">Nexivora</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-[#8A93A8]">Layanan top up game otomatis dengan proses cepat, pembayaran lengkap, dan dukungan 24 jam.</p>
          </div>
          <nav aria-label="Menu footer">
            <h3 className="text-sm font-bold">Menu</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#8A93A8]">
              <li><a href="#top" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#games" className="hover:text-white transition-colors">Pilih Game</a></li>
              <li><a href="#topup" className="hover:text-white transition-colors">Form Order</a></li>
              <li><a href="#cara" className="hover:text-white transition-colors">Cara Order</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-bold">Game</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#8A93A8]">
              <li>Top up Mobile Legends</li>
              <li>Top up Free Fire</li>
              <li>Top up PUBG Mobile</li>
              <li>Top up Call of Duty Mobile</li>
              <li>Top up Magic Chess: Go Go</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Sosial Media</h3>
            <div className="mt-4 flex gap-2.5">
              <a href="#" className="rounded-xl p-2.5 border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]" aria-label="Instagram Nexivora">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="#" className="rounded-xl p-2.5 border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]" aria-label="WhatsApp Nexivora">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.2 8L3 21l1.1-4.7A9 9 0 1 1 21 12z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" /></svg>
              </a>
              <a href="#" className="rounded-xl p-2.5 border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]" aria-label="Email dukungan Nexivora">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M4 7l8 6 8-6" /></svg>
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#8A93A8]">
              Disclaimer: Nexivora adalah penyedia layanan top up independen dan tidak berafiliasi dengan
              Moonton, Garena, Tencent, maupun Activision. Seluruh nama game dan merek adalah milik
              pemegang hak masing-masing.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#8A93A8]">
          <p>© 2026 Nexivora. Seluruh hak dilindungi.</p>
          <p className="font-mono">nexivora.store</p>
        </div>
      </div>
    </footer>
  );
}
