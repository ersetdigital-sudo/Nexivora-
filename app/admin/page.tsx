import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Database } from "@/types/supabase";
import Link from "next/link";

type SettingsRow = Database["public"]["Tables"]["settings"]["Row"];

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  const { count: gameCount } = await supabase
    .from("games")
    .select("*", { count: "exact", head: true });

  const { count: pricingCount } = await supabase
    .from("pricing")
    .select("*", { count: "exact", head: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: qrisSetting } = await (supabase.from("settings") as any)
    .select("value")
    .eq("key", "qris_image_url")
    .single() as { data: SettingsRow | null };

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold">Dashboard</h1>
      <p className="mt-1 text-sm text-white/40">Ringkasan data Toplixa</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="hairline rounded-2xl p-5 bg-panel">
          <p className="text-xs uppercase tracking-[.15em] text-white/40">Game Aktif</p>
          <p className="mt-2 font-display text-3xl font-semibold gold-text">{gameCount ?? 0}</p>
        </div>
        <div className="hairline rounded-2xl p-5 bg-panel">
          <p className="text-xs uppercase tracking-[.15em] text-white/40">Total Nominal</p>
          <p className="mt-2 font-display text-3xl font-semibold gold-text">{pricingCount ?? 0}</p>
        </div>
        <div className="hairline rounded-2xl p-5 bg-panel">
          <p className="text-xs uppercase tracking-[.15em] text-white/40">QRIS</p>
          <p className="mt-2 font-display text-3xl font-semibold gold-text">
            {qrisSetting?.value ? "✓" : "—"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          href="/admin/games"
          className="btn-gold font-semibold px-6 py-3 rounded-xl transition text-sm"
        >
          Kelola Harga
        </Link>
        <Link
          href="/admin/qris"
          className="hairline font-semibold px-6 py-3 rounded-xl transition text-sm text-white/80 hover:text-white"
        >
          Kelola QRIS
        </Link>
      </div>
    </div>
  );
}
