"use client";

import { useEffect, useRef } from "react";

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

const teaserCards = [
  {
    title: "The Rumour",
    text: "In-store only. No logo required. Just subtle signals that something is coming.",
  },
  {
    title: "The Signal",
    text: "The URL resolves to a minimal holding page with 19+ confirmation and email capture.",
  },
  {
    title: "Briefing Zero",
    text: "The first send acknowledges the early signups and opens the full program with context.",
  },
];

const teaserPoints = [
  "Mystery does more work than a polished reveal.",
  "The teaser finds guests who notice subtle details and act early.",
  "Staff are briefed to protect the intrigue, not explain it away.",
];

const teaserMockups = [
  {
    title: "Counter Card",
    eyebrow: "Phase 1",
    variant: "Minimal",
    copy: "Flight Club is coming.",
    subcopy: "We can't talk about it.\n(Yet)",
    footer: "flightclub.ca",
  },
  {
    title: "Holding Page",
    eyebrow: "Phase 2",
    variant: "Signal",
    copy: "FLIGHT CLUB",
    subcopy: "A free community for adults who take cannabis seriously. Launching soon.",
    footer: "19+ only. Leave your email to get on the list.",
  },
  {
    title: "Staff Brief",
    eyebrow: "Phase 1 + 3",
    variant: "Script",
    copy: "What to say when guests ask.",
    subcopy:
      "It's something we're launching soon. I don't know all the details yet, but if you scan that QR you can get on the list before it opens.",
    footer: "Do not explain the program. Preserve the mystery.",
  },
  {
    title: "Briefing Zero Email",
    eyebrow: "Phase 3",
    variant: "Launch",
    copy: "You found Flight Club early.",
    subcopy: "Here’s what it actually is.",
    footer: "Teaser list only. Sent before the public launch email.",
  },
];

const launchSections = [
  {
    phase: "Phase 0",
    title: "Foundation",
    window: "Now - Jul 7",
    description:
      "Lock the program, audit the list, and build the CRM base. Nothing guest-facing moves until the foundation is approved.",
    bullets: [
      "Confirm the launch guardrails and compliance language",
      "Audit the existing list and classify consent",
      "Build the AIQ base, tags, and source tracking",
    ],
  },
  {
    phase: "Phase 1",
    title: "Teaser Prep",
    window: "Jul 8 - Jul 13",
    description:
      "Get the teaser platform ready before it goes live. Approvals, holding page, print pieces, and staff brief all happen here.",
    bullets: [
      "Approve teaser copy and in-store card direction",
      "Finalize the holding page and age gate",
      "Print counter cards and brief the team",
    ],
  },
  {
    phase: "Phase 2",
    title: "The Whisper",
    window: "Jul 14 - Jul 21",
    description:
      "The guest-facing teaser period. Cards go out, the page goes live, and a single email reaches the clean list.",
    bullets: [
      "Put counter cards into stores and bags",
      "Send the teaser email to the clean existing list",
      "Keep the staff talk track short and mysterious",
    ],
  },
  {
    phase: "Phase 3",
    title: "Founding Launch",
    window: "Jul 22",
    description:
      "Briefing Zero goes first, then the public launch email. The QR code also goes live in-store at open.",
    bullets: [
      "Send Briefing Zero to the teaser list first",
      "Send the launch email to the full clean audience",
      "Activate the QR code in-store",
    ],
  },
  {
    phase: "Phase 4",
    title: "Shape It",
    window: "Jul 23 - Aug 11",
    description:
      "The first three weeks after launch establish the rhythm. The Briefing, profile builder, and community cues start doing their work.",
    bullets: [
      "Publish the first Flight Briefing",
      "Drive Flight Profile completion",
      "Let participatory content and repeat visits compound",
    ],
  },
  {
    phase: "Phase 5",
    title: "Brand Reveal",
    window: "Mid-Aug",
    description:
      "The full Flight Club visual and verbal system goes public. The teaser audience gets the payoff for being early.",
    bullets: [
      "Reveal the complete brand expression",
      "Open with the line: Okay, now we can talk about Flight Club.",
      "Use the founding audience as social proof for the reveal",
    ],
  },
];

const launchMilestones = [
  "Jul 7: foundation locked",
  "Jul 13: teaser prep complete",
  "Jul 17: go / no-go decision",
  "Jul 22: founding launch",
  "Mid-Aug: brand reveal",
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const sections = sectionRefs.current;

    const scrollToIndex = (index: number) => {
      const target = sections[index];
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) {
        return;
      }

      const currentY = window.scrollY;
      const offsets = sections
        .map((section, index) => (section ? { index, top: section.offsetTop } : null))
        .filter((item): item is { index: number; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      if (!offsets.length) {
        return;
      }

      const activeIndex = offsets.reduce((closest, item) => {
        const distance = Math.abs(item.top - currentY);
        const closestDistance = Math.abs(offsets[closest].top - currentY);
        return distance < closestDistance ? item.index : offsets[closest].index;
      }, offsets[0].index);

      const currentPosition = offsets.findIndex((item) => item.index === activeIndex);
      if (currentPosition === -1) {
        return;
      }

      event.preventDefault();

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        scrollToIndex(offsets[Math.min(currentPosition + 1, offsets.length - 1)].index);
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        scrollToIndex(offsets[Math.max(currentPosition - 1, 0)].index);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <img className="brand-logo" src="/flight-logo-black.svg" alt="Flight" />
        </div>
      </header>

      <section className="hero dark-band" ref={(node) => { sectionRefs.current[0] = node; }}>
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

      <section className="content-section intro-section hypothesis-section" ref={(node) => { sectionRefs.current[1] = node; }}>
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

      <section className="content-section feature-strip" ref={(node) => { sectionRefs.current[2] = node; }}>
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

      <section className="content-section beige-band" ref={(node) => { sectionRefs.current[3] = node; }}>
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

      <section className="content-section quote-section pale" ref={(node) => { sectionRefs.current[4] = node; }}>
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

      <section className="content-section white-band" ref={(node) => { sectionRefs.current[5] = node; }}>
        <div className="section-title narrow">
          <span className="eyebrow gold">Launch Timeline</span>
          <h2>Streamlined Launch Timeline</h2>
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

      <section className="content-section teaser-section" ref={(node) => { sectionRefs.current[6] = node; }}>
        <div className="section-title">
          <span className="eyebrow gold">Teaser Campaign</span>
          <h2>Flight Club Rumours</h2>
        </div>
        <div className="teaser-intro">
          <p>
            The teaser campaign turns scarcity into momentum. Rather than fully explaining the
            program, it uses mystery, a holding page, and a staff brief to build curiosity before
            the brand is complete.
          </p>
          <ul className="principles teaser-points">
            {teaserPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="teaser-reveal-stack">
          {teaserMockups.map((item) => (
            <article key={item.title} className="teaser-reveal">
              <div className="teaser-mockup-top">
                <span className="card-kicker">{item.eyebrow}</span>
                <strong>{item.title}</strong>
              </div>
              <div className="teaser-reveal-body">
                <div className={`teaser-mockup-panel teaser-${item.variant.toLowerCase()}`}>
                  {item.title === "Counter Card" ? (
                    <>
                      <h3>{item.copy}</h3>
                      <div className="counter-card-layout">
                        <div className="counter-card-copy">
                          <p className="counter-card-lines">
                            <span>We can't talk about it.</span>
                            <span>(Yet)</span>
                          </p>
                          <span className="teaser-footer">{item.footer}</span>
                        </div>
                        <div className="qr-block" aria-label="QR code image">
                          <img src="/teaser-qr.png" alt="QR code" />
                        </div>
                      </div>
                    </>
                  ) : item.title === "Holding Page" ? (
                    <>
                      <h3>{item.copy}</h3>
                      <div className="holding-page-layout">
                        <p>{item.subcopy}</p>
                        <div className="holding-form">
                          <label>
                            <span>Email</span>
                            <div className="holding-input" />
                          </label>
                          <label>
                            <span>19+ confirmation</span>
                            <div className="holding-checkbox-row">
                              <div className="holding-checkbox" />
                              <span>Yes, I am 19 or older.</span>
                            </div>
                          </label>
                          <div className="holding-button" />
                        </div>
                        <span className="teaser-footer">{item.footer}</span>
                      </div>
                    </>
                  ) : item.title === "Staff Brief" ? (
                    <>
                      <h3>{item.copy}</h3>
                      <div className="staff-brief-layout">
                        <p>{item.subcopy}</p>
                        <div className="staff-script">
                          <span className="staff-script-label">If a guest asks:</span>
                          <div className="staff-script-quote">“What’s Flight Club?”</div>
                          <div className="staff-script-answer">
                            “I can&apos;t talk about it, but it launches soon. I can add you to
                            the list.”
                          </div>
                        </div>
                        <span className="teaser-footer">{item.footer}</span>
                      </div>
                    </>
                  ) : (
                    <div className="email-mockup-layout">
                      <div className="email-meta">Subject line</div>
                      <h3>{item.copy}</h3>
                      <p className="email-preview">{item.subcopy}</p>
                      <div className="email-body">
                        <p>
                          Thanks for being curious. You found Flight Club before the full launch,
                          and this is the part we owe you: the real thing, not the rumour.
                        </p>
                        <p>
                          Flight Club is a free community for adults who take cannabis seriously.
                          It is built for useful, recurring communication, not loyalty tropes or
                          discount noise.
                        </p>
                        <div className="email-signoff">
                          <div className="email-signoff-line" />
                          <span>Flight Cannabis</span>
                        </div>
                      </div>
                      <span className="teaser-footer">{item.footer}</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section launch-plan-section" ref={(node) => { sectionRefs.current[7] = node; }}>
        <div className="section-title">
          <span className="eyebrow gold">Launch Plan</span>
          <h2>The launch unfolds in six deliberate moves.</h2>
        </div>
        <div className="launch-stack">
          {launchSections.map((item) => (
            <article key={item.phase} className="launch-band">
              <div className="launch-band-top">
                <span className="card-kicker">{item.phase}</span>
                <h3>{item.title}</h3>
                <span className="launch-window">{item.window}</span>
              </div>
              <div className="launch-band-body">
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="launch-summary">
          <div className="launch-summary-title">
            <span className="eyebrow gold">Master Timeline</span>
            <h3>Every milestone in one glance.</h3>
          </div>
          <div className="launch-summary-row">
            {launchMilestones.map((item) => (
              <div key={item} className="launch-summary-chip">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section white-band closing-band" id="closing" ref={(node) => { sectionRefs.current[8] = node; }}>
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
