export const readinessChecks = [
  {
    name: "AI crawler access",
    detail: "robots.txt doesn't block GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot or Google-Extended",
  },
  {
    name: "Content without JavaScript",
    detail: "The main text is in the HTML before any script runs",
  },
  { name: "llms.txt", detail: "/llms.txt exists and lists the key pages" },
  {
    name: "Structured data",
    detail: "JSON-LD for Organization, plus Product or FAQPage where they fit",
  },
  { name: "Page basics", detail: "Title, meta description, one H1, canonical URL" },
  { name: "Sitemap", detail: "/sitemap.xml with recent lastmod dates" },
];

/** Turns "https://www.Example.com/pricing" into "www.example.com"; returns null if it isn't a domain. */
export function normalizeDomain(input: string | undefined): string | null {
  if (!input) return null;
  const host = input
    .trim()
    .toLowerCase()
    .replace(/^[a-z][a-z0-9+.-]*:\/\//, "")
    .split(/[/?#]/)[0]
    .replace(/:\d+$/, "");
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host) ? host : null;
}
