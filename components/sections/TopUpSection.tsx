import { OrderForm } from "@/components/sections/OrderForm";

export function TopUpSection() {
  return (
    <section id="topup" className="relative sect border-t border-white/5">
      <div className="glow" style={{ width: 420, height: 420, background: "#d4af6a", top: "10%", left: -140, opacity: 0.18 }} />
      <div className="relative max-w-5xl mx-auto px-5 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-[11px] tracking-[.25em] uppercase text-white/40">Pesan</p>
          <h2 className="mt-3 font-display h-sec font-semibold">
            Isi data,
            <br />
            <span className="gold-text">langsung masuk.</span>
          </h2>
          <p className="mt-5 text-white/50 text-sm font-light max-w-sm">
            Tidak perlu password atau kode OTP. Cukup User ID (dan Server ID untuk game tertentu).
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <span className="text-gold">✓</span> Proses otomatis 24 jam nonstop
            </li>
            <li className="flex gap-3">
              <span className="text-gold">✓</span> QRIS, e-wallet, VA, dan minimarket
            </li>
            <li className="flex gap-3">
              <span className="text-gold">✓</span> Garansi uang kembali bila gagal
            </li>
          </ul>
        </div>

        <OrderForm />
      </div>
    </section>
  );
}
