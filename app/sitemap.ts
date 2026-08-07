import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { GAMES } from "@/lib/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...GAMES.map((game) => ({
      url: `${site.url}/top-up/${game.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
