import { GamePickForm } from "@/components/ui/GamePickForm";
import type { DbGameWithNominals } from "@/lib/db";

interface HeroProps {
  games: DbGameWithNominals[];
}

export function Hero({ games }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-48 md:pb-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" aria-hidden="true" />
      <div className="glow" style={{ width: 520, height: 520, background: "#7C5CFF", top: -180, left: -120 }} />
      <div className="glow" style={{ width: 420, height: 420, background: "#22D3EE", top: -80, right: -140, opacity: 0.32 }} />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0E121C] px-3.5 py-1.5 text-xs text-[#8A93A8]">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#34D399]" />
              Sistem otomatis aktif — layanan 24 jam
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-6xl lg:text-[4.4rem] font-extrabold leading-[1.06]">
              Top up game <span className="gold-text">cepat, aman,</span> dan otomatis.
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-[#8A93A8]">
              Nexivora memproses top up Mobile Legends, Free Fire, PUBG Mobile, Call of Duty Mobile,
              dan Magic Chess: Go Go secara otomatis. Pembayaran lengkap, alur singkat, dan diamond
              masuk tanpa perlu menunggu operator.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#topup" className="btn-gold inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold">
                Top Up Sekarang
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#games" className="inline-flex items-center rounded-xl px-6 py-3.5 font-semibold border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]">
                Lihat Game
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div className="card col-span-2 p-5">
              <p className="text-xs uppercase tracking-widest text-[#8A93A8]">Total transaksi diproses</p>
              <p className="font-mono mt-2 text-4xl font-bold text-[#F4F6FB]">128.400<span className="text-[#7C5CFF]">+</span></p>
              <p className="mt-1 text-xs text-[#8A93A8]">*angka placeholder — ganti data asli sebelum go-live</p>
            </div>
            <div className="card p-5">
              <p className="text-xs uppercase tracking-widest text-[#8A93A8]">Rata-rata proses</p>
              <p className="font-mono mt-2 text-3xl font-bold text-[#F4F6FB]">±12<span className="text-base font-medium text-[#8A93A8]">detik</span></p>
            </div>
            <div className="card p-5">
              <p className="text-xs uppercase tracking-widest text-[#8A93A8]">Status server</p>
              <p className="mt-2 flex items-center gap-2 text-lg font-bold text-[#F4F6FB]">
                <span className="pulse-dot h-2 w-2 rounded-full bg-[#34D399]" /> Aktif 24 Jam
              </p>
              <p className="mt-1 text-xs text-[#8A93A8]">Tanpa jam tutup</p>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <li className="card p-5">
            <h2 className="text-base font-bold">Proses Otomatis</h2>
            <p className="mt-1.5 text-sm text-[#8A93A8]">Pesanan diteruskan ke sistem segera setelah pembayaran terkonfirmasi.</p>
          </li>
          <li className="card p-5">
            <h2 className="text-base font-bold">Pembayaran Lengkap</h2>
            <p className="mt-1.5 text-sm text-[#8A93A8]">QRIS, e-wallet, virtual account, hingga gerai retail.</p>
          </li>
          <li className="card p-5">
            <h2 className="text-base font-bold">Aman &amp; Terpercaya</h2>
            <p className="mt-1.5 text-sm text-[#8A93A8]">Tanpa login akun game. Cukup User ID dan Zone ID bila diperlukan.</p>
          </li>
          <li className="card p-5">
            <h2 className="text-base font-bold">Online 24 Jam</h2>
            <p className="mt-1.5 text-sm text-[#8A93A8]">Top up kapan pun, termasuk akhir pekan dan hari libur.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
