import AuditForm from "@/components/AuditForm";
import { repoUrl, roadmap, siteUrl } from "@/lib/site";

const statusChip = {
  "in-progress": <span className="chip accent">In progress</span>,
  next: <span className="chip warn">Next</span>,
  planned: <span className="chip">Planned</span>,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Citewise",
      url: siteUrl,
      sameAs: [repoUrl],
    },
    {
      "@type": "WebSite",
      name: "Citewise",
      url: siteUrl,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container hero">
        <div>
          <p className="eyebrow">AI visibility + AI support</p>
          <h1>Find out if AI recommends you.</h1>
          <p className="lede">
            Citewise asks ChatGPT, Perplexity, Gemini and Claude the questions your buyers ask, shows where you&apos;re
            missing, drafts the pages that fix it, and answers the visitors those engines send.
          </p>
          <AuditForm id="hero-audit" />
          <p className="form-note">Free, no signup. The audit engine is being built now; see the status below.</p>
        </div>

        <div className="answer" aria-label="Illustrative AI answer showing what Citewise measures">
          <div>
            <div className="who">A buyer asks an AI engine</div>
            <p className="q">“best AI trip planner for India”</p>
          </div>
          <p>
            Good options are Rival A<sup>[1]</sup> for day-by-day itineraries and Rival B<sup>[2]</sup> for budget
            trips. <mark>Travo AI</mark>
            <sup>[3]</sup> plans the trip in chat and books flights and hotels in the same place.
          </p>
          <ol className="sources">
            <li>
              <span className="ix">[1]</span>
              <span className="src">rival-a.example/india-itinerary-guide</span>
              <span className="chip">Rival page</span>
            </li>
            <li>
              <span className="ix">[2]</span>
              <span className="src">travel-forum.example/thread/8812</span>
              <span className="chip warn">Unclaimed source</span>
            </li>
            <li>
              <span className="ix">[3]</span>
              <span className="src">travo.example/ai-trip-planner</span>
              <span className="chip good">Your page</span>
            </li>
          </ol>
          <p className="note">
            Illustrative answer. For every tracked question Citewise records whether you&apos;re named, your rank, the
            tone, and which cited sources you own.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2>
            <span className="ref">[1]</span>Two engines, one loop
          </h2>
          <p className="muted">
            Getting cited brings visitors. Answering them well turns them into customers, and their questions become
            the next prompts to track.
          </p>
          <div className="engines">
            <div className="engine">
              <p className="eyebrow">Engine 01 · Get cited</p>
              <h3>Show up in AI answers</h3>
              <ul>
                <li>Weekly tracking of the questions your buyers ask each AI engine</li>
                <li>Every answer sorted into named and cited, named only, cited only, or missing</li>
                <li>A content agent that drafts the page for each gap</li>
              </ul>
            </div>
            <div className="engine">
              <p className="eyebrow">Engine 02 · Answer visitors</p>
              <h3>Convert the traffic AI sends</h3>
              <ul>
                <li>A chat agent trained on your docs, added with one script tag</li>
                <li>Leads, tickets and bookings in one inbox</li>
                <li>Unanswered questions become new prompts to track</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <h2>
            <span className="ref">[2]</span>How it works
          </h2>
          <ol className="steps">
            <li>
              <h3>Audit</h3>
              <p>Check whether AI crawlers can read your site and how often engines mention you today.</p>
            </li>
            <li>
              <h3>Track</h3>
              <p>Re-ask your buyer prompts every week and score mentions, rank, citations and tone.</p>
            </li>
            <li>
              <h3>Fix</h3>
              <p>Turn each gap into a draft page built from the sources the engines already cite.</p>
            </li>
            <li>
              <h3>Convert</h3>
              <p>Answer AI-referred visitors 24/7 and hand the hard questions to your team.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>
            <span className="ref">[3]</span>Build status
          </h2>
          <p className="muted">This is the first deploy. The plan runs for eight weeks.</p>
          <ol className="roadmap">
            {roadmap.map((m) => (
              <li key={m.week}>
                <span className="wk">Week {m.week}</span>
                <span>{m.build}</span>
                {statusChip[m.status]}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>
            <span className="ref">[4]</span>Design documents
          </h2>
          <div className="docs">
            <a className="doc" href="/blueprint">
              <h3>Build blueprint</h3>
              <p>Architecture, data model, pipelines, screens, pricing in rupees and the 8-week plan for Citewise.</p>
              <span className="go">Read the blueprint →</span>
            </a>
            <a className="doc" href="/system-design">
              <h3>Botric system design</h3>
              <p>How botric.ai is built, reverse-engineered from its 73 public pages, product manual and network calls.</p>
              <span className="go">Read the teardown →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
