'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Nav from '../../src/components/Nav/Nav.jsx';
import { useLanguage } from '../../src/context/LanguageContext.jsx';
import './work.css';

/* ══════════════════════════════════════════════════════════════
   SVG CARD VISUALS
══════════════════════════════════════════════════════════════ */
function CardVisual({ pattern, accent }) {
  const dim = 'rgba(255,255,255,0.03)';

  if (pattern === 'wsg') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="86" y="8" width="68" height="140" rx="14" stroke={accent} strokeWidth="1.2" fill={`${accent}0a`}/>
      <rect x="94" y="18" width="52" height="110" rx="6" fill={`${accent}08`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.35"/>
      <rect x="94" y="18" width="52" height="13" rx="6" fill={`${accent}1a`}/>
      <rect x="97" y="21" width="18" height="3" rx="1.5" fill={accent} opacity="0.7"/>
      <rect x="96" y="35" width="48" height="26" rx="5" fill={`${accent}20`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.5"/>
      <rect x="99" y="39" width="22" height="3" rx="1.5" fill={accent} opacity="0.5"/>
      <rect x="99" y="45" width="28" height="6" rx="3" fill={accent} opacity="0.8"/>
      <circle cx="134" cy="45" r="7" fill={`${accent}18`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.5"/>
      <circle cx="134" cy="45" r="3" fill={accent} opacity="0.6"/>
      <rect x="96" y="68" width="22" height="20" rx="3" fill={`${accent}0e`} stroke={accent} strokeWidth="0.4" strokeOpacity="0.3"/>
      <rect x="121" y="68" width="22" height="20" rx="3" fill={`${accent}0a`} stroke={accent} strokeWidth="0.4" strokeOpacity="0.25"/>
      <rect x="96" y="94" width="48" height="3" rx="1.5" fill={accent} opacity="0.15"/>
      <rect x="96" y="100" width="42" height="3" rx="1.5" fill={accent} opacity="0.1"/>
      <rect x="96" y="118" width="52" height="10" rx="0" fill={`${accent}12`}/>
      <circle cx="107" cy="123" r="3" fill={accent} opacity="0.7"/>
      <circle cx="119" cy="123" r="3" fill={accent} opacity="0.25"/>
      <circle cx="131" cy="123" r="3" fill={accent} opacity="0.25"/>
      <circle cx="42" cy="58" r="2.5" fill={accent} opacity="0.35"/>
      <circle cx="42" cy="70" r="2.5" fill={accent} opacity="0.22"/>
      <circle cx="42" cy="82" r="2.5" fill={accent} opacity="0.14"/>
      <rect x="165" y="52" width="38" height="3" rx="1.5" fill={accent} opacity="0.15"/>
      <rect x="165" y="60" width="30" height="3" rx="1.5" fill={accent} opacity="0.1"/>
      <rect x="165" y="68" width="34" height="3" rx="1.5" fill={accent} opacity="0.12"/>
    </svg>
  );

  if (pattern === 'phone') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="105" y="10" width="70" height="130" rx="12" stroke={accent} strokeWidth="1.2" fill={`${accent}08`}/>
      <rect x="113" y="22" width="54" height="88" rx="6" fill={dim} stroke={accent} strokeWidth="0.6" strokeOpacity="0.4"/>
      <rect x="119" y="30" width="42" height="5" rx="2.5" fill={accent} opacity="0.6"/>
      <rect x="119" y="40" width="30" height="3" rx="1.5" fill={accent} opacity="0.25"/>
      <rect x="119" y="50" width="42" height="20" rx="4" fill={`${accent}18`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="122" y="53" width="15" height="3" rx="1.5" fill={accent} opacity="0.4"/>
      <rect x="122" y="59" width="22" height="3" rx="1.5" fill={accent} opacity="0.2"/>
      <rect x="119" y="76" width="18" height="18" rx="3" fill={`${accent}20`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="141" y="76" width="20" height="18" rx="3" fill={`${accent}12`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="128" y="122" width="24" height="3" rx="1.5" fill={accent} opacity="0.35"/>
      <line x1="60" y1="50" x2="98" y2="50" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="3 3"/>
      <line x1="182" y1="80" x2="220" y2="80" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="3 3"/>
      <circle cx="55" cy="50" r="3" fill={accent} opacity="0.2"/>
      <circle cx="225" cy="80" r="3" fill={accent} opacity="0.2"/>
    </svg>
  );

  if (pattern === 'dashboard') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="18" width="240" height="124" rx="8" stroke={accent} strokeWidth="1" fill={`${accent}06`}/>
      <rect x="20" y="18" width="240" height="22" rx="8" fill={`${accent}10`}/>
      <rect x="20" y="30" width="240" height="10" fill={`${accent}10`}/>
      <circle cx="33" cy="29" r="3.5" fill={accent} opacity="0.4"/>
      <circle cx="44" cy="29" r="3.5" fill={accent} opacity="0.25"/>
      <circle cx="55" cy="29" r="3.5" fill={accent} opacity="0.15"/>
      <rect x="76" y="24" width="128" height="10" rx="5" fill={`${accent}15`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="20" y="40" width="46" height="102" fill={`${accent}08`}/>
      <rect x="28" y="52" width="28" height="5" rx="2.5" fill={accent} opacity="0.4"/>
      <rect x="28" y="63" width="22" height="5" rx="2.5" fill={accent} opacity="0.2"/>
      <rect x="74" y="48" width="80" height="44" rx="6" fill={`${accent}10`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.25"/>
      <rect x="80" y="56" width="30" height="4" rx="2" fill={accent} opacity="0.5"/>
      <rect x="80" y="64" width="55" height="14" rx="3" fill={`${accent}25`}/>
      <rect x="162" y="48" width="80" height="44" rx="6" fill={`${accent}08`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.2"/>
      <rect x="168" y="64" width="55" height="14" rx="3" fill={`${accent}18`}/>
      <rect x="74" y="108" width="168" height="28" rx="5" fill={`${accent}06`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="82"  y="120" width="10" height="10" rx="2" fill={accent} opacity="0.5"/>
      <rect x="96"  y="116" width="10" height="14" rx="2" fill={accent} opacity="0.7"/>
      <rect x="110" y="113" width="10" height="17" rx="2" fill={accent} opacity="0.9"/>
      <rect x="138" y="115" width="10" height="15" rx="2" fill={accent} opacity="0.75"/>
      <rect x="180" y="112" width="10" height="18" rx="2" fill={accent} opacity="0.85"/>
    </svg>
  );

  if (pattern === 'web') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="18" width="240" height="124" rx="8" stroke={accent} strokeWidth="1" fill={`${accent}05`}/>
      <rect x="20" y="18" width="240" height="22" rx="8" fill={`${accent}12`}/>
      <rect x="20" y="30" width="240" height="10" fill={`${accent}12`}/>
      <circle cx="33" cy="29" r="3.5" fill={accent} opacity="0.4"/>
      <circle cx="44" cy="29" r="3.5" fill={accent} opacity="0.25"/>
      <circle cx="55" cy="29" r="3.5" fill={accent} opacity="0.15"/>
      <rect x="20" y="40" width="240" height="50" fill={`${accent}0a`}/>
      <rect x="44" y="54" width="100" height="8" rx="4" fill={accent} opacity="0.55"/>
      <rect x="44" y="67" width="70" height="5" rx="2.5" fill={accent} opacity="0.25"/>
      <rect x="44" y="78" width="50" height="9" rx="4.5" fill={accent} opacity="0.7"/>
      <circle cx="210" cy="65" r="28" fill={`${accent}12`} stroke={accent} strokeWidth="0.8" strokeOpacity="0.3"/>
      <circle cx="210" cy="65" r="16" fill={`${accent}18`}/>
      <rect x="30" y="102" width="66" height="30" rx="5" fill={`${accent}0a`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="107" y="102" width="66" height="30" rx="5" fill={`${accent}08`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.15"/>
      <rect x="184" y="102" width="66" height="30" rx="5" fill={`${accent}0a`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
    </svg>
  );

  if (pattern === 'geo') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="140,30 185,95 140,130 95,95" stroke={accent} strokeWidth="1.4" fill={`${accent}08`} strokeLinejoin="round"/>
      <polygon points="140,50 168,90 140,110 112,90" stroke={accent} strokeWidth="0.7" fill={`${accent}12`} strokeOpacity="0.5" strokeLinejoin="round"/>
      <rect x="30" y="28" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      <rect x="222" y="28" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      <circle cx="44" cy="42" r="7" fill={accent} opacity="0.7"/>
      <circle cx="236" cy="42" r="7" fill={accent} opacity="0.35"/>
      <line x1="20" y1="80" x2="260" y2="80" stroke={accent} strokeWidth="0.5" strokeOpacity="0.1"/>
      <line x1="140" y1="10" x2="140" y2="150" stroke={accent} strokeWidth="0.5" strokeOpacity="0.1"/>
    </svg>
  );

  if (pattern === 'circle') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="80" r="52" stroke={accent} strokeWidth="1.4" fill={`${accent}06`}/>
      <circle cx="140" cy="80" r="36" stroke={accent} strokeWidth="0.7" strokeOpacity="0.4" fill={`${accent}0a`}/>
      <circle cx="140" cy="80" r="18" fill={`${accent}20`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.5"/>
      <circle cx="140" cy="28" r="4.5" fill={accent} opacity="0.8"/>
      <circle cx="192" cy="80" r="4.5" fill={accent} opacity="0.5"/>
      <circle cx="88"  cy="80" r="4.5" fill={accent} opacity="0.6"/>
      <line x1="20"  y1="20"  x2="40"  y2="20"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="20"  x2="240" y2="20"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="20"  y1="140" x2="40"  y2="140" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="140" x2="240" y2="140" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  );

  // wordmark fallback
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="60" width="160" height="40" rx="6" fill={`${accent}08`} stroke={accent} strokeWidth="0.7" strokeOpacity="0.25"/>
      <rect x="72" y="72" width="90" height="16" rx="3" fill={accent} opacity="0.45"/>
      <rect x="168" y="72" width="40" height="16" rx="3" fill={accent} opacity="0.18"/>
      <line x1="60" y1="105" x2="220" y2="105" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2"/>
      <rect x="120" y="26" width="40" height="28" rx="8" fill={`${accent}12`} stroke={accent} strokeWidth="0.8" strokeOpacity="0.4"/>
      <circle cx="140" cy="40" r="7" fill={accent} opacity="0.55"/>
      <circle cx="140" cy="40" r="3" fill={accent} opacity="0.9"/>
      <line x1="20" y1="20" x2="36" y2="20" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
      <line x1="260" y1="140" x2="244" y2="140" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROJECT DATA
══════════════════════════════════════════════════════════════ */
/* ── Static non-translatable project data ────────────────────── */
const PROJECTS_STATIC = {
  software: [
    { accent: '#c85c7a', pattern: 'wsg',       href: '/work/wsg' },
    { accent: '#0ea5e9', pattern: 'dashboard',  href: null },
    { accent: '#10b981', pattern: 'web',        href: null },
    { accent: '#a78bfa', pattern: 'phone',      href: null },
    { accent: '#2dd4bf', pattern: 'dashboard',  href: null },
    { accent: '#f59e0b', pattern: 'web',        href: null },
  ],
  branding: [
    { accent: '#2dd4bf', pattern: 'geo',       href: null },
    { accent: '#d4b896', pattern: 'circle',    href: null },
    { accent: '#0ea5e9', pattern: 'wordmark',  href: null },
    { accent: '#f59e0b', pattern: 'circle',    href: null },
    { accent: '#10b981', pattern: 'geo',       href: null },
    { accent: '#a78bfa', pattern: 'wordmark',  href: null },
  ],
};

/* ── Card component ──────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    el.style.setProperty('--rx', `${cy * -8}deg`);
    el.style.setProperty('--ry', `${cx * 8}deg`);
    el.style.transform = `perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) scale3d(1.018,1.018,1.018)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
  };

  const cardContent = (
    <>
      <div className="wk-card-preview">
        <CardVisual pattern={project.pattern} accent={project.accent} />
        <div className="wk-card-preview-glow" />
      </div>
      <div className="wk-card-body">
        <span className="wk-tag">{project.tag}</span>
        <h3 className="wk-card-title">{project.title}</h3>
        <p className="wk-card-desc">{project.desc}</p>
        <span className="wk-card-arrow" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </>
  );

  const sharedProps = {
    style: { '--accent': project.accent, animationDelay: `${index * 0.07}s` },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (project.href) {
    return (
      <Link href={project.href} ref={cardRef} className="wk-card" {...sharedProps}>
        {cardContent}
      </Link>
    );
  }

  return (
    <article ref={cardRef} className="wk-card" {...sharedProps}>
      {cardContent}
    </article>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function WorkPage() {
  const { data } = useLanguage();
  const tw = data.work;

  const [active, setActive] = useState('software');
  const [animKey, setAnimKey] = useState(0);

  const handleFilter = (id) => {
    if (id === active) return;
    setActive(id);
    setAnimKey(k => k + 1);
  };

  // Merge translated text with static accent/pattern/href
  const mergedProjects = PROJECTS_STATIC[active].map((s, i) => ({
    ...s,
    ...tw.projects[active][i],
  }));

  return (
    <>
      <Nav />
      <main className="wk-page">

        <section className="wk-hero">
          <div className="wk-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="wk-hero-inner">
              <span className="tag">{tw.tag}</span>
              <h1
                className="wk-hero-title"
                dangerouslySetInnerHTML={{ __html: tw.heroTitle }}
              />
              <p className="wk-hero-desc">{tw.heroDesc}</p>
            </div>
          </div>
        </section>

        <section className="wk-grid-section">
          <div className="container">
            <nav className="wk-filters" aria-label="Project categories">
              {tw.filters.map(f => (
                <button
                  key={f.id}
                  type="button"
                  className={`wk-filter-btn${active === f.id ? ' active' : ''}`}
                  onClick={() => handleFilter(f.id)}
                  aria-pressed={active === f.id}
                >
                  {f.label}
                </button>
              ))}
            </nav>
            <div className="wk-grid" key={animKey} role="region" aria-live="polite">
              {mergedProjects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
