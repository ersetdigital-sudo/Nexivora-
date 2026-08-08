"use client";

import { useState } from "react";
import { updateSocialMedia } from "../actions";
import { showToast, ToastContainer } from "@/components/ui/Toast";

interface SocialManagerProps {
  currentInstagram: string;
  currentWhatsapp: string;
  currentEmail: string;
}

export function SocialManager({ currentInstagram, currentWhatsapp, currentEmail }: SocialManagerProps) {
  const [instagram, setInstagram] = useState(currentInstagram);
  const [whatsapp, setWhatsapp] = useState(currentWhatsapp);
  const [email, setEmail] = useState(currentEmail);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateSocialMedia({ instagram, whatsapp, email });
      showToast("success", "Sosial media berhasil diupdate.");
    } catch (e: unknown) {
      showToast("error", "Gagal menyimpan: " + String(e));
    }
    setSaving(false);
  };

  return (
    <>
      <div className="space-y-5">
        <div>
          <label className="block text-[11px] uppercase tracking-[.15em] text-white/35 mb-2">
            Instagram URL
          </label>
          <input
            type="url"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="https://instagram.com/nexivora"
            className="w-full bg-panel border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C5CFF] transition"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[.15em] text-white/35 mb-2">
            WhatsApp Number
          </label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="6281234567890"
            className="w-full bg-panel border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C5CFF] transition"
          />
          <p className="mt-1.5 text-[11px] text-white/20">Format: kode negara + nomor (tanpa + atau spasi)</p>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[.15em] text-white/35 mb-2">
            Email Dukungan
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="support@nexivora.store"
            className="w-full bg-panel border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C5CFF] transition"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50"
          style={{ backgroundColor: "#7C5CFF", color: "#0a0a0b" }}
        >
          {saving ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Menyimpan…
            </>
          ) : (
            "Simpan"
          )}
        </button>
      </div>

      <ToastContainer />
    </>
  );
}
