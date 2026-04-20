'use client';

import Link from 'next/link';
import Nav          from '../../src/components/Nav/Nav.jsx';
import Footer       from '../../src/components/Footer/Footer.jsx';
import ScrollReveal from '../../src/components/ScrollReveal/ScrollReveal.jsx';
import './about.css';

/* ── Services data ───────────────────────────────────────────── */
const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces that convert visitors into loyal users.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6.5L3.5 12 8 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6.5L20.5 12 16 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web & App Development',
    desc: 'Scalable, performant products built on modern technology stacks.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 3V21M3 8.5L21 15.5M21 8.5L3 15.5" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.35" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Branding & Identity',
    desc: 'Cohesive visual systems that communicate trust at every touchpoint.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17.5L8.5 11.5L12.5 14.5L17 8.5L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="11" r="1.5" fill="currentColor"/>
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.3"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Performance campaigns that build real pipeline, not just impressions.',
  },
];

/* ── Why Us data ─────────────────────────────────────────────── */
const WHY_US = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.75" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M11 7v4.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7.5 6.5L5 4M14.5 6.5L17 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'We ship in weeks, not months. Agile sprints with zero waste.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 12L9 17L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Clean Execution',
    desc: 'No bloated agencies. Senior talent, direct communication, clean output.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="8" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 8V6.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="13.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Product Thinking',
    desc: 'We think like founders. Every decision is tied to business outcomes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L13.5 8.5H19L14.5 12L16.5 18L11 14.5L5.5 18L7.5 12L3 8.5H8.5L11 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Business-Focused Design',
    desc: 'Beautiful work that converts. Aesthetics always serve strategy.',
  },
];

/* ── Approach data ───────────────────────────────────────────── */
const APPROACH = [
  {
    num: '01',
    title: 'Research & Strategy',
    desc: 'We start with understanding — your users, competitors, and goals — before touching any UI.',
  },
  {
    num: '02',
    title: 'Design Systems',
    desc: 'Clean, modular UI built for consistency, scale, and developer handoff.',
  },
  {
    num: '03',
    title: 'Scalable Engineering',
    desc: 'Modern stacks, clean architecture, and infrastructure that grows with you.',
  },
  {
    num: '04',
    title: 'Performance Marketing',
    desc: 'Data-driven campaigns that amplify your product to the right audience.',
  },
];

/* ── Problems ────────────────────────────────────────────────── */
const PROBLEMS = [
  'A digital presence that looks outdated or untrustworthy',
  'Poor user experience that drives visitors away',
  "Disconnected tools, teams, and systems that can't scale",
  'Marketing spend with no measurable ROI',
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="about-page">

        {/* ── Ambient background ───────────────────────────── */}
        <div className="about-bg-radial"  aria-hidden="true" />
        <div className="about-bg-grid"    aria-hidden="true" />
        <div className="about-beam-tl"    aria-hidden="true" />
        <div className="about-beam-br"    aria-hidden="true" />

        {/* ══════════════ 1. HERO ══════════════ */}
        <section className="ab-hero">
          <div className="ab-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="ab-hero-inner">
              <span className="tag fade-up">About Forky</span>
              <h1 className="ab-hero-title fade-up">
                We design and build<br />
                digital products that<br />
                <span className="hl">grow businesses.</span>
              </h1>
              <p className="ab-hero-sub fade-up">
                Forky is a full-service digital product studio combining strategy,
                design, and engineering to help ambitious companies compete and win online.
              </p>
              <div className="ab-hero-actions fade-up">
                <Link href="/work" className="btn-primary">
                  See Our Work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
          <div className="ab-hero-divider" aria-hidden="true" />
        </section>

        {/* ══════════════ 2. WHO WE ARE ══════════════ */}
        <section className="ab-section ab-who">
          <div className="container">
            <div className="ab-who-layout">

              <div className="ab-who-left fade-left">
                <span className="tag">Our Identity</span>
                <h2 className="ab-who-title">
                  A studio built for<br />
                  <span className="hl">the digital era.</span>
                </h2>
                <p className="ab-who-body">
                  We're not a traditional agency. We operate as a digital product studio — a tight-knit team of designers, engineers, and strategists who care deeply about outcomes, not just outputs.
                </p>
                <p className="ab-who-body">
                  We build scalable digital systems — not just websites. Everything we create is designed to grow with your business and compound in value over time.
                </p>
              </div>

              <div className="ab-who-right stagger fade-right">
                <div className="ab-pillar-card">
                  <div className="ab-pillar-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ab-pillar-title">Strategy First</p>
                    <p className="ab-pillar-desc">Every project starts with a clear plan tied to your business goals.</p>
                  </div>
                </div>

                <div className="ab-pillar-card">
                  <div className="ab-pillar-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 15.5L10 4.5L16 15.5H4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                      <path d="M7 15.5V12M13 15.5V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ab-pillar-title">Design Systems</p>
                    <p className="ab-pillar-desc">Cohesive, component-based design that scales across every surface.</p>
                  </div>
                </div>

                <div className="ab-pillar-card">
                  <div className="ab-pillar-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M7 10l1.5 1.5L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ab-pillar-title">Scalable Engineering</p>
                    <p className="ab-pillar-desc">Production-grade code built for performance, maintainability, and growth.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════ 3 + 4. PROBLEM → SOLUTION ══════════════ */}
        <section className="ab-section ab-story">
          <div className="ab-story-bg" aria-hidden="true" />
          <div className="container">

            {/* Problem */}
            <div className="ab-story-problem fade-up">
              <span className="tag">The Problem</span>
              <p className="ab-story-lead">
                Most businesses struggle with the same four issues.
              </p>
              <ul className="ab-problem-list stagger" role="list">
                {PROBLEMS.map((p, i) => (
                  <li key={i} className="ab-problem-item">
                    <span className="ab-problem-dot" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="ab-story-bridge fade-up">
                <span className="ab-bridge-line" aria-hidden="true" />
                <p className="ab-bridge-text">That's why we exist.</p>
                <span className="ab-bridge-line" aria-hidden="true" />
              </div>
            </div>

            {/* Approach */}
            <div className="ab-approach-header fade-up">
              <span className="tag">Our Approach</span>
              <h2 className="ab-approach-title">
                Research-driven. Execution-obsessed.<br />
                <span className="hl">Results-guaranteed.</span>
              </h2>
            </div>

            <div className="ab-approach-grid stagger">
              {APPROACH.map(({ num, title, desc }) => (
                <div key={num} className="ab-approach-card">
                  <span className="ab-approach-num">{num}</span>
                  <h3 className="ab-approach-card-title">{title}</h3>
                  <p className="ab-approach-card-desc">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════ 5. SERVICES ══════════════ */}
        <section className="ab-section ab-services">
          <div className="container">
            <div className="section-header fade-up">
              <span className="tag">What We Do</span>
              <h2>Everything your<br /><span className="hl">digital product needs.</span></h2>
              <p>Four interconnected disciplines. One cohesive team. Delivered together.</p>
            </div>

            <div className="ab-services-grid stagger">
              {SERVICES.map(({ icon, title, desc }) => (
                <div key={title} className="ab-service-card">
                  <div className="ab-service-icon" aria-hidden="true">{icon}</div>
                  <h3 className="ab-service-title">{title}</h3>
                  <p className="ab-service-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ 6. VISION & MISSION ══════════════ */}
        <section className="ab-section ab-vm">
          <div className="ab-vm-bg" aria-hidden="true" />
          <div className="container">
            <div className="ab-vm-grid stagger">

              <div className="ab-vm-card ab-vm-card--vision">
                <div className="ab-vm-card-top">
                  <span className="ab-vm-label">Vision</span>
                  <div className="ab-vm-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5"/>
                      <circle cx="11" cy="11" r="1.5" fill="currentColor"/>
                      <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ab-vm-title">
                  Build world-class digital products from Egypt to global markets.
                </h3>
                <p className="ab-vm-desc">
                  We believe world-class design and engineering has no geography. We're proving it — one product at a time.
                </p>
              </div>

              <div className="ab-vm-card ab-vm-card--mission">
                <div className="ab-vm-card-top">
                  <span className="ab-vm-label">Mission</span>
                  <div className="ab-vm-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 3L13.5 9H19.5L14.5 12.5L16.5 19L11 15.5L5.5 19L7.5 12.5L2.5 9H8.5L11 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ab-vm-title">
                  Help startups and businesses scale through design and technology.
                </h3>
                <p className="ab-vm-desc">
                  Our mission is to give ambitious companies the same caliber of digital experience as the world's top brands.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════ 7. WHY US ══════════════ */}
        <section className="ab-section ab-why">
          <div className="container">
            <div className="section-header fade-up">
              <span className="tag">Why Forky</span>
              <h2>What makes us<br /><span className="hl">different.</span></h2>
              <p>We're not just another agency. We're your product partner — invested in outcomes that actually matter.</p>
            </div>

            <div className="ab-why-grid stagger">
              {WHY_US.map(({ icon, title, desc }) => (
                <div key={title} className="ab-why-card">
                  <div className="ab-why-icon" aria-hidden="true">{icon}</div>
                  <h4 className="ab-why-title">{title}</h4>
                  <p className="ab-why-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ 8. CTA ══════════════ */}
        <section className="ab-section ab-cta">
          <div className="ab-cta-bg" aria-hidden="true" />
          <div className="ab-cta-grid-overlay" aria-hidden="true" />
          <div className="container">
            <div className="ab-cta-inner fade-up">
              <span className="tag">Ready to start?</span>
              <h2 className="ab-cta-title">
                Let's build something<br />
                <span className="hl">great together.</span>
              </h2>
              <p className="ab-cta-sub">
                Tell us about your project. We'll get back within 24 hours with a clear plan.
              </p>
              <div className="ab-cta-actions">
                <Link href="/contact" className="btn-primary ab-cta-btn">
                  Contact Us
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/work" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
