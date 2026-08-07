export function Hero() {
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
          Top up game
          <br className="hidden sm:block" /> <span className="gold-text">instan &amp; terpercaya</span>
        </h1>
        <p className="mt-5 text-white/60 lead max-w-xl mx-auto font-light">
          Diamond, UC, dan CP masuk dalam hitungan detik. Harga bersaing, pembayaran lengkap, tanpa perlu login akun.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#games" className="btn-gold font-semibold px-7 py-3.5 rounded-full transition w-full sm:w-auto">
            Pilih Game
          </a>
          <a
            href="#cara"
            className="hairline px-7 py-3.5 rounded-full text-white/80 hover:text-white hover:border-white/25 transition w-full sm:w-auto"
          >
            Cara Order
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
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
