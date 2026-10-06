# Citewise

Citewise (working name) is an AI-visibility and AI-support platform. It tracks whether ChatGPT, Perplexity, Gemini and Claude recommend and cite a brand, drafts the pages that close the gaps, and answers the visitors those engines send.

This repo is the first deploy: the marketing site, a placeholder for the free audit, and the two design documents the build follows.

| Route | What it is |
| --- | --- |
| `/` | Landing page with the build status |
| `/audit` | Free AI audit (form and the checks it will run; the engine ships in week 2) |
| `/blueprint` | Build blueprint: architecture, data model, pipelines, pricing, 8-week plan |
| `/system-design` | Independent teardown of how botric.ai is built |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt` | Crawler files, with AI bots allowed by name |

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

Next.js 16 (App Router) on Vercel. The design documents are standalone HTML files in `public/`, served at `/blueprint` and `/system-design` through rewrites in `next.config.ts`.

## Roadmap

1. Marketing site, llms.txt, structured data, design docs (this deploy)
2. Free audit: readiness checks plus 5 prompts on 2 AI engines
3. Accounts, projects, prompts, competitors, onboarding
4. Weekly runs, answer extraction, Visibility Score dashboard
5. All four engines, citations, share of voice, perception
6. Content agent
7. Support agent widget, inbox, escalation
8. Plans, credits, Razorpay, crawler tracking, alerts

The Botric system design is an independent analysis of public pages and is not affiliated with Botric.
