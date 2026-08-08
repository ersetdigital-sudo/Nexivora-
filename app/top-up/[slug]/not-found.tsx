import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-32">
        <div className="text-center">
          <p className="font-display text-6xl font-semibold text-white/10">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold">Game tidak ditemukan</h1>
          <p className="mt-3 text-sm text-white/50 font-light max-w-sm mx-auto">
            Game yang kamu cari belum tersedia di Nexivora. Cek katalog kami untuk melihat game yang tersedia.
          </p>
          <Link
            href="/#games"
            className="inline-block mt-8 btn-gold font-semibold px-7 py-3 rounded-full transition"
          >
            Lihat Katalog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
