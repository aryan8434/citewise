import { repoUrl } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p>Citewise is a working name. Early build, October 2026.</p>
        <p>
          <a href="/blueprint">Build plan</a> · <a href="/system-design">System design</a> ·{" "}
          <a href={repoUrl}>Source on GitHub</a>
        </p>
      </div>
    </footer>
  );
}
