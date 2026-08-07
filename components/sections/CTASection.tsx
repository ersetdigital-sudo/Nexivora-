import Link from "next/link";

export function CTASection() {
  return (
    <section className="sect border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 text-center relative">
        <div
          className="glow"
          style={{ width: 400, height: 400, background: "#d4af6a", top: -120, left: "50%", transform: "translateX(-50%)", opacity: 0.2 }}
        />
        <h2 className="relative font-display h-cta font-semibold leading-tight">
          Siap naik <span className="gold-text">rank</span> malam ini?
        </h2>
        <p className="relative mt-5 text-white/55 font-light">Top up sekarang, lanjut main tanpa jeda.</p>
        <Link
          href="/#games"
          className="relative inline-block mt-8 btn-gold font-semibold px-8 py-3.5 rounded-full transition"
        >
          Mulai Top Up
        </Link>
      </div>
    </section>
  );
}
