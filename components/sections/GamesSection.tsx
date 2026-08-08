import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { DbGameWithNominals } from "@/lib/db";

interface GamesSectionProps {
  games: DbGameWithNominals[];
}

export function GamesSection({ games }: GamesSectionProps) {
  return (
    <section id="games" className="relative sect border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#7C5CFF]">01 — Katalog</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold">Pilih game kamu</h2>
          <p className="mt-4 text-[#8A93A8]">Lima game yang kami layani saat ini. Tekan tombol Top Up dan game akan langsung terpilih di form order.</p>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {games.map((game, i) => (
            <Reveal as="article" key={game.slug} delay={i * 60} className="card p-5 flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-[78px] w-[126px] shrink-0 items-center justify-center rounded-2xl border border-white/10 px-3 py-2.5 bg-[#0B0E17]">
                  <Image
                    src={game.icon_url}
                    alt={`Logo ${game.name}`}
                    width={game.icon_width}
                    height={game.icon_height}
                    className="w-auto h-auto"
                    sizes="(max-width: 640px) 86vw, 78%"
                    priority={i < 2}
                  />
                </div>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-[#8A93A8]">
                  {game.hide_server_id ? "UC" : "Diamond"}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{game.name}</h3>
              <p className="mt-1 text-sm text-[#8A93A8]">{game.range_label}</p>
              <Link
                href={`/top-up/${game.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 btn-gold font-semibold text-sm"
              >
                Top Up
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-[#8A93A8]">*Range nominal bersifat placeholder untuk tahap desain. TODO: sinkronkan dengan harga produk asli.</p>
      </div>
    </section>
  );
}
