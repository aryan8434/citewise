import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// A GEO product should be easy for AI crawlers to read, so name them explicitly.
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiBots.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
