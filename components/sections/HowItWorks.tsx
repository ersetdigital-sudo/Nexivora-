import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    num: "01",
    icon: "gamepad",
    title: "Pilih Game",
    desc: "Tentukan game yang ingin kamu isi ulang.",
  },
  {
    num: "02",
    icon: "id",
    title: "Masukkan User ID",
    desc: "Sertakan Zone ID bila game memerlukannya.",
  },
  {
    num: "03",
    icon: "coin",
    title: "Pilih Nominal",
    desc: "Pilih jumlah diamond, UC, atau CP.",
  },
  {
    num: "04",
    icon: "pay",
    title: "Bayar",
    desc: "Selesaikan pembayaran dengan metode favoritmu.",
  },
  {
    num: "05",
    icon: "rocket",
    title: "Top Up Diproses",
    desc: "Sistem memproses pesanan secara otomatis.",
  },
];

const ICONS: Record<string, string> = {
  gamepad: '<path d="M7 12h4M9 10v4M15.5 11.5h.01M18 13.5h.01"/><path d="M17.5 6H6.5A4.5 4.5 0 0 0 2 10.5V13a5 5 0 0 0 9 3h2a5 5 0 0 0 9-3v-2.5A4.5 4.5 0 0 0 17.5 6z"/>',
  id: '<rect x="2.5" y="5" width="19" height="14" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16.5c.9-1.6 2-2.3 3.5-2.3s2.6.7 3.5 2.3M15.5 10h3.5M15.5 13.5h3.5"/>',
  coin: '<ellipse cx="12" cy="7" rx="7.5" ry="3.2"/><path d="M4.5 7v10c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V7"/><path d="M4.5 12c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2"/>',
  pay: '<rect x="2.5" y="5.5" width="19" height="13" rx="3"/><path d="M2.5 10h19M6.5 14.5h4"/>',
  rocket: '<path d="M13.5 3.5c3.5 0 7 3.5 7 7-2.5 4.5-6 8-10.5 10.5l-3-3C9.5 13.5 9 7 13.5 3.5z"/><circle cx="14.5" cy="9.5" r="1.6"/><path d="M7 17l-3.5 3.5M4.5 14.5L3 16M9.5 19.5L8 21"/>',
};

export function HowItWorks() {
  return (
    <section id="cara" className="sect border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#7C5CFF]">03 — Panduan</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold">Cara order</h2>
          <p className="mt-4 text-[#8A93A8]">Lima langkah, selesai dalam hitungan menit.</p>
        </Reveal>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#22D3EE]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[step.icon] }} />
                </span>
                <span className="font-mono text-xs text-[#8A93A8]">{step.num}</span>
              </div>
              <h3 className="mt-4 text-base font-bold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-[#8A93A8]">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
