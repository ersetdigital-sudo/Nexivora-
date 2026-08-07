import Image from "next/image";
import { GAMES } from "@/lib/games";
import { Reveal } from "@/components/ui/Reveal";
import { GamePickButton } from "@/components/ui/GamePickButton";

export function GamesSection() {
  return (
    <section id="games" className="relative sect border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] tracking-[.25em] uppercase text-white/40">Katalog</p>
            <h2 className="mt-3 font-display h-sec font-semibold">Lima game, satu tempat.</h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm font-light">
            Semua produk resmi dan legal. Cukup masukkan User ID, pilih nominal, bayar — selesai.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GAMES.map((game, i) => (
            <Reveal as="article" key={game.slug} delay={i * 60} className="card p-4 sm:p-5 md:p-6 flex flex-col">
              <div className="logo-wrap">
                <Image
                  src={game.logo}
                  alt={`Logo ${game.name}`}
                  width={game.logoWidth}
                  height={game.logoHeight}
                  className="w-auto h-auto"
                  style={game.logoStyle === "fill" ? undefined : { objectFit: "contain" }}
                  sizes="(max-width: 640px) 86vw, 78%"
                  priority={i < 2}
                />
              </div>
              <h3 className="mt-5 font-display text-base md:text-lg font-semibold">{game.name}</h3>
              <p className="text-xs md:text-sm text-white/45 mt-1">{game.range}</p>
              <GamePickButton
                slug={game.slug}
                className="pick mt-5 text-left text-xs md:text-sm font-semibold text-gold-bright hover:text-white transition"
              />
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={5 * 60}
            className="card p-4 sm:p-5 md:p-6 flex flex-col items-start justify-center"
            style={{ background: "linear-gradient(160deg,#101011,#0a0a0b)" }}
          >
            <p className="font-display text-base md:text-lg font-semibold text-white/80">Game lain?</p>
            <p className="text-xs md:text-sm text-white/45 mt-2">
              Kami menambah katalog tiap bulan. Kirim request game favoritmu.
            </p>
            <a href="#faq" className="mt-5 text-xs md:text-sm font-semibold text-gold-bright hover:text-white transition">
              Request game →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
