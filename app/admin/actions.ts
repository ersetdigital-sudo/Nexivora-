"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";
import type { Database } from "@/types/supabase";

type TypedSupabase = ReturnType<typeof createSupabaseServerClient> extends Promise<infer T> ? T : never;

async function requireAdmin(): Promise<TypedSupabase> {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: admin } = await (supabase.from("admin_users") as any)
    .select("id")
    .eq("user_id", user.id)
    .single();
  if (!admin) throw new Error("Not an admin");
  return supabase;
}

export async function addPricing(gameId: string, nominalLabel: string, price: number) {
  const supabase = await requireAdmin();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: last } = await (supabase.from("pricing") as any)
    .select("sort_order")
    .eq("game_id", gameId)
    .order("sort_order", { ascending: false })
    .limit(1)
    .single();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase.from("pricing") as any).insert({
    game_id: gameId,
    nominal_label: nominalLabel,
    price,
    sort_order: (last?.sort_order ?? 0) + 1,
  });

  if (error) throw error.message;
  revalidatePath("/admin/games");
  revalidatePath("/admin");
}

export async function updatePricing(id: string, nominalLabel: string, price: number) {
  const supabase = await requireAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase.from("pricing") as any)
    .update({ nominal_label: nominalLabel, price })
    .eq("id", id);
  if (error) throw error.message;
  revalidatePath("/admin/games");
}

export async function deletePricing(id: string) {
  const supabase = await requireAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase.from("pricing") as any).delete().eq("id", id);
  if (error) throw error.message;
  revalidatePath("/admin/games");
  revalidatePath("/admin");
}

export async function updateGameField(gameId: string, field: string, value: unknown) {
  const supabase = await requireAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase.from("games") as any)
    .update({ [field]: value })
    .eq("id", gameId);
  if (error) throw error.message;
  revalidatePath("/admin/games");
  revalidatePath("/admin");
}

export async function updateQrisImage(url: string) {
  const supabase = await requireAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase.from("settings") as any)
    .upsert({ key: "qris_image_url", value: url }, { onConflict: "key" });
  if (error) throw error.message;
  revalidatePath("/admin/qris");
  revalidatePath("/admin");
}
