"use client";

import { useMemo, useState } from "react";
import { GAMES, type Game } from "@/lib/games";
import { formatOrderId, rupiah } from "@/lib/format";
import { CheckoutOverlay, type CheckoutOrder } from "@/components/checkout/CheckoutOverlay";

interface GameOrderFormProps {
  initialSlug: string;
}

export function GameOrderForm({ initialSlug }: GameOrderFormProps) {
  const [gameSlug] = useState(initialSlug);
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [pickedLabel, setPickedLabel] = useState<string | null>(null);
  const [order, setOrder] = useState<CheckoutOrder | null>(null);

  const game: Game = useMemo(() => GAMES.find((g) => g.slug === gameSlug) ?? GAMES[0], [gameSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nominal = game.nominals.find((n) => n.label === pickedLabel) ?? game.nominals[0];
    const uniqueCode = Math.floor(Math.random() * 400 + 100);
    setOrder({
      game: game.name,
      userId: userId.trim() || "—",
      serverId: serverId.trim() || "—",
      nominalLabel: nominal.label,
      price: nominal.price,
      total: nominal.price + uniqueCode,
      orderId: formatOrderId(),
    });
  };

  return (
    <>
      <form id="orderForm" onSubmit={handleSubmit} className="hairline rounded-3xl p-5 sm:p-6 md:p-8 bg-[#0c0c0d]/80 backdrop-blur-xl space-y-5">
        <div>
          <label htmlFor="gameSelect" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
            Pilih game
          </label>
          <select
            id="gameSelect"
            value={gameSlug}
            disabled
            className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none opacity-70 cursor-not-allowed"
          >
            <option>{game.name}</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="userId" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
              User ID
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="123456789"
              className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition"
            />
          </div>
          <div>
            <label htmlFor="serverId" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
              Server ID
            </label>
            <input
              id="serverId"
              type="text"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              placeholder="opsional"
              className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition"
            />
          </div>
        </div>

        <div>
          <span className="block text-xs uppercase tracking-[.15em] text-white/40 mb-3">Nominal</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Pilih nominal">
            {game.nominals.map((nom) => {
              const active = pickedLabel === nom.label;
              return (
                <button
                  key={nom.label}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setPickedLabel(nom.label)}
                  className={`hairline rounded-xl px-3 py-3 text-sm transition min-h-[44px] ${
                    active
                      ? "border-gold/80 bg-gold/10 text-white"
                      : "text-white/75 hover:border-gold/60"
                  }`}
                >
                  {nom.label}
                  <span className="block text-[11px] text-white/40">{rupiah(nom.price)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button type="submit" className="btn-gold w-full font-semibold py-3.5 rounded-xl transition">
          Lanjut ke Pembayaran
        </button>
        <p className="text-xs text-white/35 text-center">Harga final ditampilkan sebelum pembayaran.</p>
      </form>

      {order && <CheckoutOverlay order={order} onClose={() => setOrder(null)} />}
    </>
  );
}
