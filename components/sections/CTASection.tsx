import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="sect border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="card relative overflow-hidden p-6 sm:p-8 md:p-14 text-center">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
          <div className="glow" style={{ width: 420, height: 420, background: "#7C5CFF", bottom: -220, left: "50%", transform: "translateX(-50%)", opacity: 0.35 }} />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Siap top up sekarang?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[#8A93A8]">Pilih game, masukkan User ID, dan selesaikan pembayaran. Sistem Nexivora akan memproses sisanya secara otomatis.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#topup" className="btn-gold inline-flex items-center rounded-xl px-7 py-3.5 font-semibold">
                Top Up Sekarang
              </Link>
              <Link href="/#games" className="inline-flex items-center rounded-xl px-7 py-3.5 font-semibold border border-white/10 transition hover:border-white/30 hover:bg-white/[.04]">
                Lihat Game
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
