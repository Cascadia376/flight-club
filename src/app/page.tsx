const pillars = [
  {
    title: "Flight Briefing",
    text: "Biweekly editorial rhythm that feels consistent, useful, and adult.",
  },
  {
    title: "Fresh Fridays",
    text: "Send targeted product drops to the right guest segments.",
  },
  {
    title: "Flight Paths",
    text: "Guided learning journeys triggered by signup, clicks, and stated interests.",
  },
  {
    title: "Targeted Offers",
    text: "Price and availability alerts that stay tightly controlled and never define the brand.",
  },
];

const principles = [
  "Flight Club is a guest relationship system, not a loyalty program.",
  "The work should feel like a knowledgeable crew member helping a thoughtful adult guest.",
  "Regularity, trust, and belonging should outperform constant discounting.",
];

const metricCards = [
  { label: "Audience", value: "Community + CRM" },
  { label: "Cadence", value: "Weekly ritual" },
  { label: "Form", value: "Single-page scrollytelling" },
  { label: "Launch", value: "July 22, 2026" },
];

const launchCards = [
  {
    title: "Week 1",
    text: "Lock the guardrails: program definition, compliant language, prohibited wording, and KPI benchmarks.",
  },
  {
    title: "Week 2",
    text: "Audit the list, classify consent, and confirm whether a re-permission send is needed.",
  },
  {
    title: "Week 3",
    text: "Build the AIQ foundation, signup form, preference fields, and branching logic.",
  },
  {
    title: "Week 4",
    text: "Finalize the launch email, briefing issue one, staff one-pager, and in-store QR signage.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <div>
          <img className="brand-logo" src="/flight-logo-black.svg" alt="Flight" />
        </div>
      </header>

      <section className="hero dark-band">
        <div className="hero-copy">
          <span className="eyebrow gold">For Flight Cannabis</span>
          <h1>
            Flight Club &mdash;
            <span> Building the Cannabis Routine</span>
          </h1>
          <p className="lede">
            A guest relationship system built for a regulated cannabis environment: useful,
            recurring, compliant, and deliberately free of loyalty-program tropes.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="/hero-flight-plan.png"
              alt="Flight crew member presenting a flight plan board in a warm retail interior"
            />
          </div>
        </div>
      </section>

      <section className="content-section intro-section hypothesis-section">
        <div className="text-block hypothesis-copy">
          <span className="eyebrow">Strategic Hypothesis</span>
          <h2>Cannabis guests behave differently.</h2>
          <p>
            They visit often, they build routines, and over time the store becomes part of their
            weekly life. Flight Club is designed to meet that behaviour with a brand system that
            earns repetition through relevance and belonging.
          </p>
        </div>

        <div className="hypothesis-visual hypothesis-full">
          <div className="hypothesis-gallery">
            <img
              src="/hypothesis-1.png"
              alt="Guest enjoying a ritual moment with a product on a table"
            />
            <img
              src="/hypothesis-2.png"
              alt="Crew member guiding a guest through a product conversation"
            />
            <img
              src="/hypothesis-4.png"
              alt="Guest making a purchase with crew support at the counter"
            />
          </div>
          <div className="hypothesis-caption">
            <span className="eyebrow gold">Ritual over Reward</span>
            <strong>
              Building habits through personalized recommendations and community milestones.
            </strong>
          </div>
        </div>
      </section>

      <section className="content-section feature-strip">
        <div className="section-title">
          <span className="eyebrow gold">Program Pillars</span>
          <h2>Three routines keep guests engaged.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map((item) => (
            <article
              key={item.title}
              className={`card${item.title === "Targeted Offers" ? " card-dark-feature" : ""}`}
            >
              <span className="card-kicker">{item.title}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section beige-band">
        <div className="section-title narrow">
          <span className="eyebrow gold">Guest Journey</span>
          <h2>Relevant sends should feel like the next obvious step.</h2>
        </div>
        <div className="journey-grid">
          <article className="journey-card journey-light">
            <img
              className="journey-image"
              src="/guest-journey-new-customer.png"
              alt="Wellness seeker speaking with a Flight Club crew member"
            />
            <div className="journey-copy">
              <span className="card-kicker">Persona 01</span>
              <h3>Wellness Seeker</h3>
              <p>
                A thoughtful guest looking for calm, clarity, and guidance that feels credible
                rather than promotional.
              </p>
              <ul>
                <li>Education-led discovery</li>
                <li>Guided product and format selection</li>
                <li>Reassuring follow-up content</li>
              </ul>
            </div>
          </article>
          <article className="journey-card journey-dark">
            <img
              className="journey-image"
              src="/guest-journey-wellness.png"
              alt="New customer speaking with a Flight Club crew member in store"
            />
            <div className="journey-copy">
              <span className="card-kicker">Persona 02</span>
              <h3>New Customer</h3>
              <p>
                A first-time guest who needs confidence, simple next steps, and a clear reason to
                come back.
              </p>
              <ul>
                <li>Entry-point education</li>
                <li>Simple onboarding journey</li>
                <li>Targeted re-engagement</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section quote-section pale">
        <span className="eyebrow gold">Program Positioning</span>
        <blockquote>
          Flight Club is not loyalty, rewards, or member-only discounts. It is a free 19+ member
          communications program built around education, discovery, and first-party data.
        </blockquote>
        <ul className="principles">
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section white-band">
        <div className="section-title narrow">
          <span className="eyebrow gold">Launch Timeline</span>
          <h2>The first month is staged to make the launch auditable.</h2>
        </div>
        <div className="pillar-grid four-up">
          {launchCards.map((item) => (
            <article key={item.title} className="card soft-card">
              <span className="card-kicker">{item.title}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section sand">
        <div className="text-block compact">
          <span className="eyebrow">Growth Loop</span>
          <h2>Flight Club gets smarter with every guest signal.</h2>
          <p>
            Signups, clicks, replies, redemptions, and store visits all shape the next message,
            making each send more relevant than the last.
          </p>
        </div>

        <div className="image-mock dark-image">
          <div className="mock-frame">
            <div className="mock-topline light" />
            <div className="mock-panel dark-panel">
              <div className="mock-panel-shape chart" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section white-band closing-band" id="closing">
        <div className="closing-grid">
          <div className="closing-copy">
            <img className="closing-logo" src="/flight-logo-black.svg" alt="Flight" />
            <h2>Flight Club is ready for take off.</h2>
          </div>
          <div className="closing-image">
            <img
              src="/closing-crew.png"
              alt="Three crew members standing in a bright office"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
