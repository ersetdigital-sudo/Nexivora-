import { GamePickForm } from "@/components/ui/GamePickForm";
import type { DbGameWithNominals } from "@/lib/db";

interface HeroProps {
  games: DbGameWithNominals[];
}

export function Hero({ games }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-48 md:pb-32">
      <div className="glow" style={{ width: 520, height: 520, background: "#d4af6a", top: -180, left: "50%", transform: "translateX(-50%)" }} />
      <div className="glow" style={{ width: 380, height: 380, background: "#3a2c12", bottom: -160, right: -80 }} />
      <div className="relative max-w-6xl mx-auto px-5 text-center">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[.2em] uppercase text-white/60 hairline rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Server aktif 24 jam
        </span>

        <h1 className="mt-7 font-display h-hero font-semibold">
          Isi data, <br className="hidden sm:block" />
          <span className="gold-text">langsung masuk.</span>
        </h1>

        <p className="mt-5 text-white/60 lead max-w-xl mx-auto font-light">
          Tidak perlu password atau kode OTP. Cukup User ID (dan Server ID untuk game tertentu).
        </p>

        <ul className="mt-8 space-y-3 text-sm text-white/60 max-w-sm mx-auto text-left">
          <li className="flex gap-3">
            <span className="text-gold shrink-0">✓</span> Proses otomatis 24 jam nonstop
          </li>
          <li className="flex gap-3">
            <span className="text-gold shrink-0">✓</span> QRIS, e-wallet, VA, dan minimarket
          </li>
          <li className="flex gap-3">
            <span className="text-gold shrink-0">✓</span> Garansi uang kembali bila gagal
          </li>
        </ul>

        <div className="mt-9 relative">
          <GamePickForm games={games} />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div>
            <div className="font-display stat-n gold-text font-semibold">1.2 Jt+</div>
            <div className="text-xs text-white/45 mt-1">Transaksi sukses</div>
          </div>
          <div>
            <div className="font-display stat-n gold-text font-semibold">&lt; 10 dtk</div>
            <div className="text-xs text-white/45 mt-1">Rata-rata proses</div>
          </div>
          <div>
            <div className="font-display stat-n gold-text font-semibold">4.9/5</div>
            <div className="text-xs text-white/45 mt-1">Rating pengguna</div>
          </div>
        </div>
      </div>
    </section>
  );
}
