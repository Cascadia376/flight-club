"use client";

import { useEffect, useRef } from "react";
import styles from "./gm-readiness.module.css";

const programPillars = [
  ["Education", "Useful, adult content that helps guests make more informed choices."],
  ["Discovery", "Curated guidance that helps guests find products and formats relevant to them."],
  ["Participation", "Polls, Ask Flight, profiles, and other simple ways to take part."],
  ["First notice", "Relevant content, events, and store news where permitted."],
];

const memberValue = [
  ["Flight Updates", "Be the first to know about new drops, sales, giveaways, and events."],
  ["Fresh Fridays", "A recurring editorial rhythm featuring product picks, new discoveries, and tips."],
  ["Curated Education", "Practical information without turning every message into a promotion."],
  ["Personalized Promotions", "Relevant offers and recommendations based on what members are into."],
];

const journey = [
  ["Join", "The store creates the opportunity."],
  ["Connect", "Flight Club keeps the relationship going."],
  ["Participate", "Members get useful reasons to engage."],
  ["Return", "We create another reason to come back."],
];

const signupSteps = [
  "Guest uses the approved signup method",
  "Completes required information",
  "Gives appropriate consent",
  "Receives confirmation",
  "Transaction continues",
];

const gmResponsibilities = [
  "Make sure the team understands Flight Club",
  "Make sure they ask",
  "Coach the behaviour, not the outcome",
  "Surface friction and recurring guest questions",
  "Help us improve the launch",
];

const learningAreas = [
  "Guest response",
  "Store execution",
  "Signup experience",
  "Team confidence",
  "Operational issues",
  "Messaging and engagement",
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

      const offsets = sections
        .map((section, index) => (section ? { index, top: section.offsetTop } : null))
        .filter((item): item is { index: number; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      if (!offsets.length) {
        return;
      }

      const currentY = window.scrollY;
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

  const setSectionRef = (index: number) => (node: HTMLElement | null) => {
    sectionRefs.current[index] = node;
  };

  return (
    <main className="page">
      <header className="topbar">
        <img className="brand-logo" src="/flight-logo-black.svg" alt="Flight" />
      </header>

      <section className={`hero dark-band ${styles.slide}`} ref={setSectionRef(0)}>
        <div className="hero-copy">
          <span className="eyebrow gold">Flight Club</span>
          <h1>
            Soft launch
            <span>GM briefing</span>
          </h1>
          <p className="lede">
            Why participation matters, what Flight Club is, and how we make the in-store experience
            simple for guests and teams.
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

      <section className={`content-section white-band ${styles.slide}`} ref={setSectionRef(1)}>
        <div className="section-title">
          <span className="eyebrow gold">Why this matters</span>
          <h2>Two numbers from Cascadia.</h2>
        </div>
        <div className={styles.metricGrid}>
          <article className={styles.metricCard}>
            <div className={styles.metricValue}>$5</div>
            <div className={styles.metricLabel}>Higher member basket</div>
            <p className={styles.metricNote}>
              Members are spending roughly five dollars more per basket than non-members.
            </p>
          </article>
          <article className={styles.metricCard}>
            <div className={styles.metricValue}>40%</div>
            <div className={styles.metricLabel}>Participation matters</div>
            <p className={styles.metricNote}>
              Stores with stronger loyalty participation are outperforming stores with lower
              participation. Participation is a signal, not a claim of causation.
            </p>
          </article>
        </div>
      </section>

      <section className={`content-section dark-band ${styles.mantra}`} ref={setSectionRef(2)}>
        <span className="eyebrow gold">The behaviour</span>
        <h2>Ask the question.</h2>
        <div className={styles.mantraSub}>
          <strong>Let them off the hook.</strong>
          <strong>Don&apos;t worry about the outcome.</strong>
        </div>
      </section>

      <section className={`content-section beige-band ${styles.slide}`} ref={setSectionRef(3)}>
        <div className="section-title">
          <span className="eyebrow gold">What is Flight Club?</span>
          <h2>A relationship that continues after the transaction.</h2>
        </div>
        <div className={styles.programGrid}>
          <article className={styles.programDefinition}>
            <span className="eyebrow gold">Program definition</span>
            <strong>A free 19+ community for Flight guests.</strong>
          </article>
          <div className={styles.pillarGrid}>
            {programPillars.map(([title, text]) => (
              <article className={styles.pillar} key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`content-section white-band ${styles.slide}`} ref={setSectionRef(4)}>
        <div className="section-title">
          <span className="eyebrow gold">A different model</span>
          <h2>Flight Club is built differently.</h2>
        </div>
        <div className={styles.compareGrid}>
          <article className={styles.compareCard}>
            <div>
              <span className="eyebrow">Traditional loyalty</span>
              <div className={styles.compareTitle}>Transactional loyalty</div>
            </div>
            <div className={styles.flow}>Shop → earn value → return</div>
          </article>
          <article className={`${styles.compareCard} ${styles.compareCardDark}`}>
            <div>
              <span className="eyebrow gold">Flight Club</span>
              <div className={styles.compareTitle}>Relationship membership</div>
            </div>
            <div className={styles.flow}>Join → participate → stay connected → return</div>
          </article>
        </div>
      </section>

      <section className={`content-section feature-strip ${styles.slide}`} ref={setSectionRef(5)}>
        <div className={styles.memberLayout}>
          <div className={styles.memberPoster}>
            <img src="/flight-club-poster-clean.webp" alt="Flight Club poster" />
          </div>
          <div className={styles.memberContent}>
            <div className="section-title">
              <span className="eyebrow gold">At launch</span>
              <h2>What members get.</h2>
            </div>
            <div className={styles.memberGrid}>
              {memberValue.map(([title, text]) => (
                <article className={styles.memberCard} key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`content-section beige-band ${styles.slide}`} ref={setSectionRef(6)}>
        <div className="section-title">
          <span className="eyebrow gold">Guest experience</span>
          <h2>Join → Connect → Participate → Return</h2>
        </div>
        <div className={styles.journeyLine}>
          {journey.map(([title, text]) => (
            <div className={styles.journeyStep} key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`content-section pale ${styles.question}`} ref={setSectionRef(7)}>
        <span className="eyebrow gold">At the till</span>
        <blockquote>“Are you a Flight Club member?”</blockquote>
        <div className={styles.questionNote}>That&apos;s it.</div>
      </section>

      <section className={`content-section white-band ${styles.slide}`} ref={setSectionRef(8)}>
        <div className="section-title">
          <span className="eyebrow gold">Three possible answers</span>
          <h2>Every interaction stays simple.</h2>
        </div>
        <div className={styles.outcomeLayout}>
          <article className={styles.outcomeCard}>
            <strong>Already a member</strong>
            <div className={styles.outcomeAction}>Identify → continue</div>
          </article>
          <div className={styles.outcomeSplit}>
            <article className={`${styles.outcomeMiniCard} ${styles.outcomeMiniCardDark}`}>
              <strong>Interested</strong>
            </article>
            <article className={styles.outcomeMiniCard}>
              <strong>Help them join</strong>
            </article>
          </div>
          <article className={styles.outcomeCard}>
            <strong>Not interested</strong>
            <div className={styles.outcomeAction}>No problem → continue</div>
          </article>
        </div>
      </section>

      <section className={`content-section beige-band ${styles.slide}`} ref={setSectionRef(9)}>
        <div className="section-title">
          <span className="eyebrow gold">If they want to join</span>
          <h2>Guide the process. Keep it moving.</h2>
        </div>
        <div className={styles.processGrid}>
          {signupSteps.map((step, index) => (
            <article className={styles.processStep} key={step}>
              <div className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</div>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`content-section dark-band ${styles.failure}`} ref={setSectionRef(10)}>
        <span className="eyebrow gold">When something goes wrong</span>
        <h2>Don&apos;t invent a workaround.</h2>
        <div className={styles.failureSteps}>
          <span>Finish the guest interaction.</span>
          <span>Report the issue.</span>
          <span>We&apos;ll fix the system.</span>
        </div>
      </section>

      <section className={`content-section white-band ${styles.slide}`} ref={setSectionRef(11)}>
        <div className="section-title">
          <span className="eyebrow gold">GM ownership</span>
          <h2>Coach the behaviour, not the result.</h2>
        </div>
        <div className={styles.gmGrid}>
          <article className={styles.notJob}>
            <span className="eyebrow">Your job is not</span>
            <strong>“Get more signups.”</strong>
          </article>
          <article className={styles.job}>
            <span className="eyebrow gold">Your job is</span>
            <ul>
              {gmResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={`content-section beige-band ${styles.slide}`} ref={setSectionRef(12)}>
        <div className="section-title">
          <span className="eyebrow gold">September 28 soft launch</span>
          <h2>Soft launch = learning.</h2>
        </div>
        <div className={styles.learningGrid}>
          {learningAreas.map((item) => (
            <div className={styles.learningItem} key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={`content-section white-band ${styles.closeGrid}`} ref={setSectionRef(13)}>
        <div className={styles.closeCopy}>
          <span className="eyebrow gold">The one thing to remember</span>
          <h2>Ask the question.</h2>
          <p>
            Let them off the hook. Don&apos;t worry about the outcome. Then tell us what you learn.
          </p>
        </div>
        <div className={styles.closeImage}>
          <img src="/closing-crew.png" alt="Flight crew members standing together" />
        </div>
      </section>
    </main>
  );
}
