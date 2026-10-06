import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand">
          Citewise
        </Link>
        <nav aria-label="Main">
          <Link href="/#how">How it works</Link>
          <a href="/blueprint">Build plan</a>
          <a href="/system-design">System design</a>
          <Link href="/audit" className="nav-cta">
            Run free audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
