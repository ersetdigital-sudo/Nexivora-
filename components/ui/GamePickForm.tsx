"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { DbGameWithNominals } from "@/lib/db";

interface GamePickFormProps {
  games: DbGameWithNominals[];
}

export function GamePickForm({ games }: GamePickFormProps) {
  const [slug, setSlug] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (slug) router.push(`/top-up/${slug}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
    >
      <select
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full sm:flex-1 bg-raise hairline rounded-xl px-4 py-3.5 text-sm outline-none focus:border-gold/60 transition"
      >
        <option value="">Pilih game…</option>
        {games.map((g) => (
          <option key={g.slug} value={g.slug}>
            {g.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={!slug}
        className="btn-gold font-semibold px-7 py-3.5 rounded-full transition w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
      >
        Top Up Sekarang
      </button>
      {!slug && (
        <p className="sm:absolute sm:-bottom-7 text-xs text-white/40">Pilih game dulu</p>
      )}
    </form>
  );
}
