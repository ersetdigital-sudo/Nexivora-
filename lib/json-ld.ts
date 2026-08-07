import { site } from "./site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      logo: `${site.url}/icon.svg`,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "id-ID",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah perlu login akun game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Kami hanya butuh User ID dan Server ID. Jangan pernah memberikan password atau OTP ke siapa pun.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama item masuk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya di bawah 10 detik setelah pembayaran terkonfirmasi. Saat maintenance server game, proses bisa tertunda hingga beberapa menit.",
      },
    },
    {
      "@type": "Question",
      name: "Kalau transaksi gagal bagaimana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dana dikembalikan 100% ke metode pembayaran asal, atau disimpan sebagai saldo Toplixa sesuai pilihanmu.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa request game lain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa. Kirim nama game lewat form pesanan atau kontak CS, dan kami tambahkan bila tersedia distributor resminya.",
      },
    },
  ],
};
