import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "Berapa lama proses top up di Nexivora?",
    a: "Sebagian besar pesanan diproses otomatis dalam beberapa detik setelah pembayaran terkonfirmasi. Pada kondisi tertentu, seperti gangguan pada server penyedia game, proses dapat memerlukan waktu lebih lama dan akan tetap diselesaikan oleh tim kami.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Nexivora mendukung QRIS (semua aplikasi pembayaran yang mendukung QRIS), e-wallet, transfer bank melalui virtual account, dan pembayaran di gerai retail. Semua metode dapat digunakan 24 jam.",
  },
  {
    q: "Bagaimana jika User ID yang saya masukkan salah?",
    a: "Pesanan yang sudah diproses ke ID yang salah tidak dapat ditarik kembali. Karena itu periksa kembali User ID dan Zone ID sebelum membayar. Jika pesanan belum diproses, segera hubungi tim dukungan agar dapat dibatalkan.",
  },
  {
    q: "Apakah transaksi di Nexivora aman?",
    a: "Aman. Nexivora tidak pernah meminta password, kode OTP, atau akses login ke akun game Anda. Top up hanya membutuhkan User ID dan Zone ID bila game tersebut memerlukannya.",
  },
  {
    q: "Apakah layanan tersedia 24 jam?",
    a: "Ya. Sistem Nexivora berjalan otomatis sehingga top up dapat dilakukan kapan saja, termasuk malam hari, akhir pekan, dan hari libur.",
  },
  {
    q: "Bagaimana jika pembayaran saya gagal atau kedaluwarsa?",
    a: "Jika pembayaran gagal atau kode pembayaran kedaluwarsa, pesanan otomatis dibatalkan dan dana tidak terpotong. Anda cukup membuat pesanan baru. Bila dana sudah terpotong namun pesanan belum diproses, hubungi tim dukungan dengan menyertakan bukti pembayaran.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="sect border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#7C5CFF]">04 — FAQ</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">Pertanyaan yang sering diajukan</h2>
          <p className="mt-4 text-[#8A93A8]">Belum menemukan jawabannya? Hubungi tim dukungan kami.</p>
        </Reveal>
        <div className="lg:col-span-8 flex flex-col gap-3">
          {FAQS.map((item) => (
            <Reveal key={item.q}>
              <details className="card px-5 py-4 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <h3 className="text-base font-bold">{item.q}</h3>
                  <svg className="shrink-0 transition-transform group-open:rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#8A93A8]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
