"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";
import { LogoMark } from "@/components/ui/LogoMark";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createSupabaseClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <LogoMark className="w-12 h-12 mx-auto" />
          <h1 className="mt-4 font-display text-xl font-semibold">Admin Toplixa</h1>
          <p className="mt-1 text-sm text-white/40">Masuk untuk mengelola panel admin</p>
        </div>

        <form onSubmit={handleSubmit} className="hairline rounded-2xl p-6 bg-panel space-y-4">
          {error && (
            <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-[.15em] text-white/40 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-raise hairline rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Masuk…" : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
