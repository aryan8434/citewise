import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-06");
  return [
    { url: siteUrl, lastModified, priority: 1 },
    { url: `${siteUrl}/audit`, lastModified, priority: 0.8 },
    { url: `${siteUrl}/blueprint`, lastModified, priority: 0.6 },
    { url: `${siteUrl}/system-design`, lastModified, priority: 0.6 },
  ];
}
