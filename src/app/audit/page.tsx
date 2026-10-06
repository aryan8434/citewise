import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { normalizeDomain, readinessChecks } from "@/lib/audit";

export const metadata: Metadata = {
  title: "Free AI audit",
  description: "Check whether AI engines can read, cite and recommend your website.",
};

export default async function AuditPage({ searchParams }: PageProps<"/audit">) {
  const { url } = await searchParams;
  const raw = Array.isArray(url) ? url[0] : url;
  const domain = normalizeDomain(raw);

  return (
    <div className="container audit-page">
      <p className="eyebrow">Free AI audit</p>
      <h1>Can AI engines cite your site?</h1>
      <p className="lede">
        Enter your domain. The audit checks whether AI crawlers can read your pages, then asks two AI engines five
        questions your buyers would ask.
      </p>
      <AuditForm defaultValue={domain ?? raw} />
      {raw && !domain && (
        <p className="error" role="alert">
          That doesn&apos;t look like a domain. Try something like yourcompany.com.
        </p>
      )}

      <div className="panel">
        <div className="panel-head">
          <h2>{domain ? `Audit for ${domain}` : "What the audit checks"}</h2>
          <span className="chip warn">Engine ships in week 2</span>
        </div>
        <p className="muted">
          {domain
            ? `The audit engine isn't live yet. When it is, this page will run these checks on ${domain} in about 30 seconds:`
            : "When the engine is live, every audit runs these checks in about 30 seconds:"}
        </p>
        <ul className="checks">
          {readinessChecks.map((c) => (
            <li key={c.name}>
              <span className="box" aria-hidden="true" />
              <div>
                <b>{c.name}</b>
                <span>{c.detail}</span>
              </div>
            </li>
          ))}
          <li>
            <span className="box" aria-hidden="true" />
            <div>
              <b>AI visibility</b>
              <span>5 buyer questions asked on 2 AI engines, scored for mentions, rank, citations and tone</span>
            </div>
          </li>
        </ul>
        {domain && (
          <p className="form-note">
            Until then, you can read your crawler rules yourself at{" "}
            <a href={`https://${domain}/robots.txt`} rel="nofollow noopener noreferrer" target="_blank">
              {domain}/robots.txt
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
