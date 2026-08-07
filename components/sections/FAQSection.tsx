const FAQS = [
  {
    q: "Apakah perlu login akun game?",
    a: "Tidak. Kami hanya butuh User ID dan Server ID. Jangan pernah memberikan password atau OTP ke siapa pun.",
  },
  {
    q: "Berapa lama item masuk?",
    a: "Umumnya di bawah 10 detik setelah pembayaran terkonfirmasi. Saat maintenance server game, proses bisa tertunda hingga beberapa menit.",
  },
  {
    q: "Kalau transaksi gagal bagaimana?",
    a: "Dana dikembalikan 100% ke metode pembayaran asal, atau disimpan sebagai saldo Toplixa sesuai pilihanmu.",
  },
  {
    q: "Bisa request game lain?",
    a: "Bisa. Kirim nama game lewat form pesanan atau kontak CS, dan kami tambahkan bila tersedia distributor resminya.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="sect border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-[11px] tracking-[.25em] uppercase text-white/40">FAQ</p>
        <h2 className="mt-3 font-display h-sec font-semibold">Pertanyaan umum</h2>
        <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-base text-white/85 gap-4">
                {item.q}
                <span className="text-gold group-open:rotate-45 transition shrink-0 text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/50 font-light">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
