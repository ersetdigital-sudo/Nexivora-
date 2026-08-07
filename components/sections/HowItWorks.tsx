import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Masukkan User ID",
    desc: "Pilih game dan tulis ID (plus server bila diminta). Nickname otomatis terverifikasi.",
  },
  {
    num: "02",
    title: "Pilih nominal & bayar",
    desc: "QRIS, GoPay, OVO, DANA, ShopeePay, Virtual Account, atau minimarket.",
  },
  {
    num: "03",
    title: "Item masuk otomatis",
    desc: "Rata-rata di bawah 10 detik. Bukti transaksi dikirim ke email atau WhatsApp.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara" className="sect border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[11px] tracking-[.25em] uppercase text-white/40">Alur</p>
        <h2 className="mt-3 font-display h-sec font-semibold">Tiga langkah, selesai.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80} className="hairline rounded-2xl p-5 sm:p-7 bg-panel">
              <div className="font-display text-5xl font-light text-white/10">{step.num}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50 font-light">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
