import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Database } from "@/types/supabase";
import { SocialManager } from "./SocialManager";

type SettingsRow = Database["public"]["Tables"]["settings"]["Row"];

export default async function AdminSocialPage() {
  const supabase = await createSupabaseServerClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: setting } = await (supabase.from("settings") as any)
    .select("value")
    .eq("key", "social_media")
    .single() as { data: SettingsRow | null };

  const current = (setting?.value as { instagram?: string; whatsapp?: string; email?: string }) ?? {};

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-xl font-semibold text-white">Kelola Sosial Media</h1>
        <p className="mt-1 text-sm text-white/35">Atur link sosial media yang tampil di footer website</p>
      </div>

      <div className="max-w-lg">
        <SocialManager
          currentInstagram={current.instagram ?? ""}
          currentWhatsapp={current.whatsapp ?? ""}
          currentEmail={current.email ?? ""}
        />
      </div>
    </div>
  );
}
