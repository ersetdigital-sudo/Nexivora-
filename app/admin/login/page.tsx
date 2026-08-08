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
    <div className="min-h-screen bg-ink flex items-center justify-center px-5 relative overflow-hidden">
      {/* Slanted background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #d4af6a 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #d4af6a 0%, transparent 70%)" }}
        />
        {/* Slanted line accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-[20%] left-[-10%] w-[120%] h-px opacity-[0.06]"
            style={{ background: "linear-gradient(90deg, transparent, #d4af6a, transparent)", transform: "rotate(-12deg)" }}
          />
          <div
            className="absolute top-[80%] left-[-10%] w-[120%] h-px opacity-[0.06]"
            style={{ background: "linear-gradient(90deg, transparent, #d4af6a, transparent)", transform: "rotate(-12deg)" }}
          />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-5">
            <LogoMark className="w-8 h-8" />
          </div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Admin <span className="gold-text">Toplixa</span>
          </h1>
          <p className="mt-2 text-sm text-white/40">Masuk untuk mengelola panel admin</p>
        </div>

        {/* Login Card */}
        <div className="relative">
          {/* Card glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/10 via-transparent to-transparent opacity-50" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/[0.06] bg-panel/80 backdrop-blur-xl p-8 space-y-5"
          >
            {error && (
              <div className="flex items-center gap-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-[.15em] text-white/40"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@toplixa.com"
                required
                className="w-full bg-raise/50 border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-gold/40 focus:bg-raise transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-xs font-medium uppercase tracking-[.15em] text-white/40"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-raise/50 border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-gold/40 focus:bg-raise transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-bright to-gold opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-bright via-gold to-gold-bright opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Button text */}
              <span className="relative text-ink">
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Memproses…
                  </span>
                ) : (
                  "Masuk"
                )}
              </span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-white/20 mt-8">
          Toplixa Admin Panel &copy; 2026
        </p>
      </div>
    </div>
  );
}
