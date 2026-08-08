import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Database } from "@/types/supabase";
import { GamePricingCard } from "./GamePricingCard";

type GameRow = Database["public"]["Tables"]["games"]["Row"];
type PricingRow = Database["public"]["Tables"]["pricing"]["Row"];

export default async function AdminGamesPage() {
  const supabase = await createSupabaseServerClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: games } = await (supabase.from("games") as any)
    .select("*")
    .eq("is_active", true)
    .order("sort_order") as { data: GameRow[] | null };

  const gameIds = games?.map((g) => g.id) ?? [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: allPricing } = await (supabase.from("pricing") as any)
    .select("*")
    .in("game_id", gameIds)
    .order("sort_order") as { data: PricingRow[] | null };

  const pricingByGame = new Map<string, PricingRow[]>();
  (allPricing ?? []).forEach((p) => {
    const list = pricingByGame.get(p.game_id) ?? [];
    list.push(p);
    pricingByGame.set(p.game_id, list);
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold">Kelola Harga</h1>
      <p className="mt-1 text-sm text-white/40">Edit nominal dan harga per game</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {games?.map((game) => (
          <GamePricingCard
            key={game.id}
            game={game}
            nominals={pricingByGame.get(game.id) ?? []}
          />
        ))}
      </div>
    </div>
  );
}
