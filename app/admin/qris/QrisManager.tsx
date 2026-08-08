"use client";

import { useState, useRef } from "react";
import { createSupabaseClient } from "@/lib/supabase";
import { updateQrisImage } from "../actions";

interface QrisManagerProps {
  currentUrl: string;
}

export function QrisManager({ currentUrl }: QrisManagerProps) {
  const [preview, setPreview] = useState(currentUrl);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const flash = (text: string) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 3000);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const supabase = createSupabaseClient();
      const ext = file.name.split(".").pop() ?? "png";
      const path = `qris/qris-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("admin")
        .upload(path, file, { contentType: file.type });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("admin").getPublicUrl(path);
      await updateQrisImage(urlData.publicUrl);
      setPreview(urlData.publicUrl);
      flash("QRIS berhasil diupdate");
    } catch (e: unknown) {
      flash("Gagal upload: " + String(e));
    }
    setUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleUpload(file);
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-[.15em] text-white/40 mb-3">QRIS Aktif</p>
      <div className="hairline rounded-2xl p-5 bg-panel">
        {preview ? (
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="QRIS aktif"
              className="max-w-[240px] rounded-xl"
            />
          </div>
        ) : (
          <p className="text-sm text-white/30 text-center py-8">Belum ada gambar QRIS</p>
        )}

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`mt-5 border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
            dragOver ? "border-gold/60 bg-gold/5" : "border-white/10 hover:border-white/20"
          }`}
        >
          <p className="text-sm text-white/50">
            {uploading ? "Mengupload…" : "Klik atau seret gambar ke sini"}
          </p>
          <p className="text-[11px] text-white/30 mt-1">PNG, JPG, atau WebP</p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {msg && (
          <p className="mt-3 text-xs text-emerald-400 text-center">{msg}</p>
        )}
      </div>
    </div>
  );
}
