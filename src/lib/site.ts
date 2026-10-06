// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (no protocol) at build and run time.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const repoUrl = "https://github.com/aryan8434/citewise";

export type MilestoneStatus = "in-progress" | "next" | "planned";

export const roadmap: { week: string; build: string; status: MilestoneStatus }[] = [
  { week: "1", build: "Marketing site, llms.txt, structured data, design docs", status: "in-progress" },
  { week: "2", build: "Free audit: readiness checks plus 5 prompts on 2 AI engines", status: "next" },
  { week: "3", build: "Accounts, projects, prompts, competitors, onboarding", status: "planned" },
  { week: "4", build: "Weekly runs, answer extraction, Visibility Score dashboard", status: "planned" },
  { week: "5", build: "All four engines, citations, share of voice, perception", status: "planned" },
  { week: "6", build: "Content agent: gap, brief, draft, re-test", status: "planned" },
  { week: "7", build: "Support agent widget, inbox, escalation", status: "planned" },
  { week: "8", build: "Plans, credits, Razorpay, crawler tracking, alerts", status: "planned" },
];
