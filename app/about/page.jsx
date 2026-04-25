'use client';

import Link from 'next/link';
import Nav          from '../../src/components/Nav/Nav.jsx';
import Footer       from '../../src/components/Footer/Footer.jsx';
import ScrollReveal from '../../src/components/ScrollReveal/ScrollReveal.jsx';
import { useLanguage } from '../../src/context/LanguageContext.jsx';
import './about.css';

/* â”€â”€ SVG icons (static, language-agnostic) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SERVICE_ICONS = [
  <svg key="s1" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  <svg key="s2" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 6.5L3.5 12 8 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6.5L20.5 12 16 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="s3" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 3V21M3 8.5L21 15.5M21 8.5L3 15.5" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.35" strokeLinejoin="round"/>
  </svg>,
  <svg key="s4" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 17.5L8.5 11.5L12.5 14.5L17 8.5L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="21" cy="11" r="1.5" fill="currentColor"/>
    <path d="M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.3"/>
  </svg>,
];

const WHY_ICONS = [
  <svg key="w1" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8.75" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M11 7v4.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7.5 6.5L5 4M14.5 6.5L17 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>,
  <svg key="w2" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M4 12L9 17L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="w3" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="8" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8 8V6.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="11" cy="13.5" r="1.5" fill="currentColor"/>
  </svg>,
  <svg key="w4" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 3L13.5 8.5H19L14.5 12L16.5 18L11 14.5L5.5 18L7.5 12L3 8.5H8.5L11 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>,
];

const PILLAR_ICONS = [
  <svg key="p1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="p2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 15.5L10 4.5L16 15.5H4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M7 15.5V12M13 15.5V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>,
  <svg key="p3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M7 10l1.5 1.5L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function AboutPage() {
  const { data } = useLanguage();
  const t = data.about;

  return (
    <>
      <ScrollReveal />
      <Nav />

      <main className="about-page">

        {/* â”€â”€ Ambient background â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="about-bg-radial"  aria-hidden="true" />
        <div className="about-beam-tl"    aria-hidden="true" />
        <div className="about-beam-br"    aria-hidden="true" />

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 1. HERO â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-hero">
          <div className="ab-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="ab-hero-inner">
              <span className="tag fade-up">{t.heroTag}</span>
              <h1
                className="ab-hero-title fade-up"
                dangerouslySetInnerHTML={{ __html: t.heroTitle }}
              />
              <p className="ab-hero-sub fade-up">{t.heroSub}</p>
              <div className="ab-hero-actions fade-up">
                <Link href="/work" className="btn-primary">
                  {t.heroCta1}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {t.heroCta2}
                </Link>
              </div>
            </div>
          </div>
          <div className="ab-hero-divider" aria-hidden="true" />
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 2. VISION & MISSION â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-vm">
          <div className="ab-vm-bg" aria-hidden="true" />
          <div className="container">
            <div className="ab-vm-grid stagger">

              <div className="ab-vm-card ab-vm-card--vision">
                <div className="ab-vm-card-top">
                  <span className="ab-vm-label">{t.visionLabel}</span>
                  <div className="ab-vm-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5"/>
                      <circle cx="11" cy="11" r="1.5" fill="currentColor"/>
                      <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ab-vm-title">{t.visionTitle}</h3>
                <p className="ab-vm-desc">{t.visionDesc}</p>
              </div>

              <div className="ab-vm-card ab-vm-card--mission">
                <div className="ab-vm-card-top">
                  <span className="ab-vm-label">{t.missionLabel}</span>
                  <div className="ab-vm-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 3L13.5 9H19.5L14.5 12.5L16.5 19L11 15.5L5.5 19L7.5 12.5L2.5 9H8.5L11 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ab-vm-title">{t.missionTitle}</h3>
                <p className="ab-vm-desc">{t.missionDesc}</p>
              </div>

            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 3. WHO WE ARE â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-who">
          <div className="container">
            <div className="ab-who-layout">

              <div className="ab-who-left fade-left">
                <span className="tag">{t.identityTag}</span>
                <h2
                  className="ab-who-title"
                  dangerouslySetInnerHTML={{ __html: t.identityTitle }}
                />
                <p className="ab-who-body">{t.identityBody1}</p>
                <p className="ab-who-body">{t.identityBody2}</p>
              </div>

              <div className="ab-who-right stagger fade-right">
                {t.pillars.map(({ title, desc }, i) => (
                  <div key={i} className="ab-pillar-card">
                    <div className="ab-pillar-icon" aria-hidden="true">
                      {PILLAR_ICONS[i]}
                    </div>
                    <div>
                      <p className="ab-pillar-title">{title}</p>
                      <p className="ab-pillar-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 4. THE PROBLEM â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-story">
          <div className="ab-story-bg" aria-hidden="true" />
          <div className="container">
            <div className="ab-story-problem fade-up">
              <span className="tag">{t.problemTag}</span>
              <p className="ab-story-lead">{t.problemLead}</p>
              <ul className="ab-problem-list stagger" role="list">
                {t.problems.map((p, i) => (
                  <li key={i} className="ab-problem-item">
                    <span className="ab-problem-dot" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 5. OUR APPROACH â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-approach">
          <div className="container">
            <div className="ab-approach-header fade-up">
              <span className="tag">{t.approachTag}</span>
              <h2
                className="ab-approach-title"
                dangerouslySetInnerHTML={{ __html: t.approachTitle }}
              />
            </div>

            <div className="ab-approach-grid stagger">
              {t.approach.map(({ num, title, desc }) => (
                <div key={num} className="ab-approach-card">
                  <span className="ab-approach-num">{num}</span>
                  <h3 className="ab-approach-card-title">{title}</h3>
                  <p className="ab-approach-card-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 6. SERVICES â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-services">
          <div className="container">
            <div className="section-header fade-up">
              <span className="tag">{t.servicesTag}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t.servicesTitle }} />
              <p>{t.servicesSub}</p>
            </div>

            <div className="ab-services-grid stagger">
              {t.services.map(({ title, desc }, i) => (
                <div key={i} className="ab-service-card">
                  <div className="ab-service-icon" aria-hidden="true">{SERVICE_ICONS[i]}</div>
                  <h3 className="ab-service-title">{title}</h3>
                  <p className="ab-service-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 7. WHY US â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-why">
          <div className="container">
            <div className="section-header fade-up">
              <span className="tag">{t.whyTag}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t.whyTitle }} />
              <p>{t.whySub}</p>
            </div>

            <div className="ab-why-grid stagger">
              {t.why.map(({ title, desc }, i) => (
                <div key={i} className="ab-why-card">
                  <div className="ab-why-icon" aria-hidden="true">{WHY_ICONS[i]}</div>
                  <h4 className="ab-why-title">{title}</h4>
                  <p className="ab-why-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ 8. CTA â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */}
        <section className="ab-section ab-cta">
          <div className="ab-cta-bg" aria-hidden="true" />
          <div className="ab-cta-grid-overlay" aria-hidden="true" />
          <div className="container">
            <div className="ab-cta-inner fade-up">
              <span className="tag">{t.ctaTag}</span>
              <h2
                className="ab-cta-title"
                dangerouslySetInnerHTML={{ __html: t.ctaTitle }}
              />
              <p className="ab-cta-sub">{t.ctaSub}</p>
              <div className="ab-cta-actions">
                <Link href="/contact" className="btn-primary ab-cta-btn">
                  {t.ctaBtn1}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/work" className="btn-secondary">
                  {t.ctaBtn2}
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
