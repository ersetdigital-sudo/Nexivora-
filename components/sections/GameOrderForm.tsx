"use client";

import { useMemo, useState } from "react";
import { formatOrderId, rupiah } from "@/lib/format";
import { CheckoutOverlay, type CheckoutOrder } from "@/components/checkout/CheckoutOverlay";
import type { DbGameWithNominals } from "@/lib/db";

interface GameOrderFormProps {
  game: DbGameWithNominals;
  qrisUrl: string;
}

export function GameOrderForm({ game, qrisUrl }: GameOrderFormProps) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [pickedLabel, setPickedLabel] = useState<string | null>(null);
  const [order, setOrder] = useState<CheckoutOrder | null>(null);

  const nominals = useMemo(() => game.nominals ?? [], [game.nominals]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nominal = nominals.find((n) => n.nominal_label === pickedLabel) ?? nominals[0];
    if (!nominal) return;
    const uniqueCode = Math.floor(Math.random() * 400 + 100);
    setOrder({
      game: game.name,
      userId: userId.trim() || "—",
      serverId: serverId.trim() || "—",
      nominalLabel: nominal.nominal_label,
      price: nominal.price,
      total: nominal.price + uniqueCode,
      orderId: formatOrderId(),
      qrisUrl,
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
            value={game.slug}
            disabled
            className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none opacity-70 cursor-not-allowed"
          >
            <option>{game.name}</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="userId" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
              {game.user_id_label}
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
              {game.server_id_label} {game.server_id_required ? "" : "(opsional)"}
            </label>
            <input
              id="serverId"
              type="text"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              placeholder={game.server_id_required ? "Wajib diisi" : "opsional"}
              required={game.server_id_required}
              className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition"
            />
          </div>
        </div>

        <div>
          <span className="block text-xs uppercase tracking-[.15em] text-white/40 mb-3">Nominal</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Pilih nominal">
            {nominals.map((nom) => {
              const active = pickedLabel === nom.nominal_label;
              return (
                <button
                  key={nom.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setPickedLabel(nom.nominal_label)}
                  className={`hairline rounded-xl px-3 py-3 text-sm transition min-h-[44px] ${
                    active
                      ? "border-gold/80 bg-gold/10 text-white"
                      : "text-white/75 hover:border-gold/60"
                  }`}
                >
                  {nom.nominal_label}
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
