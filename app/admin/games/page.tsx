import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Database } from "@/types/supabase";
import { GamePricingCard } from "./GamePricingCard";
import { ToastContainer } from "@/components/ui/Toast";

type GameRow = Database["public"]["Tables"]["games"]["Row"];
type PricingRow = Database["public"]["Tables"]["pricing"]["Row"];

export default async function AdminGamesPage() {
  const supabase = await createSupabaseServerClient();

  const { data: games } = await (supabase.from("games") as any)
    .select("*")
    .order("sort_order") as { data: GameRow[] | null };

  const gameIds = games?.map((g) => g.id) ?? [];
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
      <div className="mb-6">
        <h1 className="font-display text-xl font-semibold text-white">Kelola Harga</h1>
        <p className="mt-1 text-sm text-white/35">Edit nominal dan harga per game</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {games?.map((game) => (
          <GamePricingCard
            key={game.id}
            game={game}
            nominals={pricingByGame.get(game.id) ?? []}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
