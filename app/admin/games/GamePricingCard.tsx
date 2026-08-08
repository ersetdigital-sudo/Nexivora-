"use client";

import { useState } from "react";
import { addPricing, updatePricing, deletePricing } from "../actions";

interface PricingItem {
  id: string;
  nominal_label: string;
  price: number;
}

interface GameCardProps {
  game: {
    id: string;
    name: string;
    range_label: string;
  };
  nominals: PricingItem[];
}

export function GamePricingCard({ game, nominals }: GameCardProps) {
  const [items, setItems] = useState(nominals);
  const [newLabel, setNewLabel] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const flash = (text: string) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 3000);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel || !newPrice) return;
    setLoading(true);
    try {
      await addPricing(game.id, newLabel, parseInt(newPrice, 10));
      setItems([...items, { id: "temp-" + Date.now(), nominal_label: newLabel, price: parseInt(newPrice, 10) }]);
      setNewLabel("");
      setNewPrice("");
      flash("Berhasil ditambahkan");
    } catch (e: unknown) {
      flash("Gagal: " + String(e));
    }
    setLoading(false);
  };

  const handleUpdate = async (id: string) => {
    setLoading(true);
    try {
      await updatePricing(id, editLabel, parseInt(editPrice, 10));
      setItems(items.map((i) => (i.id === id ? { ...i, nominal_label: editLabel, price: parseInt(editPrice, 10) } : i)));
      setEditing(null);
      flash("Berhasil diupdate");
    } catch (e: unknown) {
      flash("Gagal: " + String(e));
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus nominal ini?")) return;
    setLoading(true);
    try {
      await deletePricing(id);
      setItems(items.filter((i) => i.id !== id));
      flash("Berhasil dihapus");
    } catch (e: unknown) {
      flash("Gagal: " + String(e));
    }
    setLoading(false);
  };

  return (
    <div className="hairline rounded-2xl p-5 bg-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold">{game.name}</h3>
          <p className="text-xs text-white/40 mt-0.5">{game.range_label}</p>
        </div>
        {msg && (
          <span className="text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
            {msg}
          </span>
        )}
      </div>

      <div className="mt-4 space-y-1.5">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 text-sm">
            {editing === item.id ? (
              <>
                <input
                  value={editLabel}
                  onChange={(e) => setEditLabel(e.target.value)}
                  className="flex-1 bg-raise hairline rounded-lg px-3 py-2 text-sm outline-none focus:border-gold/60"
                />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  className="w-28 bg-raise hairline rounded-lg px-3 py-2 text-sm outline-none focus:border-gold/60"
                />
                <button
                  onClick={() => handleUpdate(item.id)}
                  disabled={loading}
                  className="text-xs text-emerald-400 hover:text-emerald-300 px-2 py-1"
                >
                  Simpan
                </button>
                <button
                  onClick={() => setEditing(null)}
                  className="text-xs text-white/40 hover:text-white/70 px-2 py-1"
                >
                  Batal
                </button>
              </>
            ) : (
              <>
                <span className="flex-1 text-white/70">{item.nominal_label}</span>
                <span className="text-white/50 font-mono text-xs">Rp {item.price.toLocaleString("id-ID")}</span>
                <button
                  onClick={() => {
                    setEditing(item.id);
                    setEditLabel(item.nominal_label);
                    setEditPrice(String(item.price));
                  }}
                  className="text-xs text-gold-bright hover:text-white px-2 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-xs text-red-400/70 hover:text-red-400 px-2 py-1"
                >
                  Hapus
                </button>
              </>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-xs text-white/30 py-2">Belum ada nominal</p>
        )}
      </div>

      <form onSubmit={handleAdd} className="mt-4 flex gap-2">
        <input
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          placeholder="Label (misal: 60 UC)"
          required
          className="flex-1 bg-raise hairline rounded-lg px-3 py-2 text-sm outline-none focus:border-gold/60"
        />
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Harga"
          required
          min="0"
          className="w-28 bg-raise hairline rounded-lg px-3 py-2 text-sm outline-none focus:border-gold/60"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-gold text-xs font-semibold px-4 py-2 rounded-lg transition disabled:opacity-50"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}
