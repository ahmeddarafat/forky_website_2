'use client';

import { useState, useRef, useEffect } from 'react';
import Nav from '../../src/components/Nav/Nav.jsx';
import './work.css';

/* ── Project data ────────────────────────────────────────────── */
const PROJECTS = {
  software: [
    {
      title:   'NexaApp',
      desc:    'Personal finance tracking with real-time analytics.',
      tag:     'Mobile App',
      accent:  '#2dd4bf',
      pattern: 'phone',
    },
    {
      title:   'CloudDesk',
      desc:    'B2B project management platform for distributed teams.',
      tag:     'SaaS Platform',
      accent:  '#0ea5e9',
      pattern: 'dashboard',
    },
    {
      title:   'ShopFlow',
      desc:    'Premium e-commerce experience for a streetwear brand.',
      tag:     'Website',
      accent:  '#10b981',
      pattern: 'web',
    },
    {
      title:   'Trackr',
      desc:    'Habit and productivity tracker with AI-powered suggestions.',
      tag:     'Mobile App',
      accent:  '#a78bfa',
      pattern: 'phone',
    },
    {
      title:   'DataFlow',
      desc:    'Enterprise data pipeline management and visualization.',
      tag:     'SaaS Platform',
      accent:  '#2dd4bf',
      pattern: 'dashboard',
    },
    {
      title:   'PortalX',
      desc:    'Secure investor portal with document management.',
      tag:     'Website',
      accent:  '#f59e0b',
      pattern: 'web',
    },
  ],
  branding: [
    {
      title:   'Vertex',
      desc:    'Full brand system for a rising fintech startup.',
      tag:     'Brand System',
      accent:  '#2dd4bf',
      pattern: 'geo',
    },
    {
      title:   'Lumis',
      desc:    'Visual identity for a luxury wellness brand.',
      tag:     'Logo & Identity',
      accent:  '#d4b896',
      pattern: 'circle',
    },
    {
      title:   'Orba',
      desc:    'Complete rebrand for a B2B SaaS company.',
      tag:     'Brand System',
      accent:  '#0ea5e9',
      pattern: 'wordmark',
    },
    {
      title:   'Helio',
      desc:    'Minimal wordmark for a solar energy startup.',
      tag:     'Logo Design',
      accent:  '#f59e0b',
      pattern: 'circle',
    },
    {
      title:   'Kova',
      desc:    'Brand and packaging for a premium coffee brand.',
      tag:     'Brand System',
      accent:  '#10b981',
      pattern: 'geo',
    },
    {
      title:   'Mast',
      desc:    'Identity system for a boutique architecture firm.',
      tag:     'Visual Identity',
      accent:  '#a78bfa',
      pattern: 'wordmark',
    },
  ],
};

/* ── Abstract SVG visuals per pattern ────────────────────────── */
function CardVisual({ pattern, accent }) {
  const dim = 'rgba(255,255,255,0.03)';

  if (pattern === 'phone') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone outline */}
      <rect x="105" y="10" width="70" height="130" rx="12" stroke={accent} strokeWidth="1.2" fill={`${accent}08`}/>
      <rect x="113" y="22" width="54" height="88" rx="6" fill={dim} stroke={accent} strokeWidth="0.6" strokeOpacity="0.4"/>
      {/* Screen content bars */}
      <rect x="119" y="30" width="42" height="5" rx="2.5" fill={accent} opacity="0.6"/>
      <rect x="119" y="40" width="30" height="3" rx="1.5" fill={accent} opacity="0.25"/>
      <rect x="119" y="50" width="42" height="20" rx="4" fill={`${accent}18`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="122" y="53" width="15" height="3" rx="1.5" fill={accent} opacity="0.4"/>
      <rect x="122" y="59" width="22" height="3" rx="1.5" fill={accent} opacity="0.2"/>
      <rect x="119" y="76" width="18" height="18" rx="3" fill={`${accent}20`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="141" y="76" width="20" height="18" rx="3" fill={`${accent}12`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      {/* Home indicator */}
      <rect x="128" y="122" width="24" height="3" rx="1.5" fill={accent} opacity="0.35"/>
      {/* Side decorative lines */}
      <line x1="60" y1="50" x2="98" y2="50" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="3 3"/>
      <line x1="182" y1="80" x2="220" y2="80" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="3 3"/>
      <circle cx="55" cy="50" r="3" fill={accent} opacity="0.2"/>
      <circle cx="225" cy="80" r="3" fill={accent} opacity="0.2"/>
    </svg>
  );

  if (pattern === 'dashboard') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Browser frame */}
      <rect x="20" y="18" width="240" height="124" rx="8" stroke={accent} strokeWidth="1" fill={`${accent}06`}/>
      {/* Browser top bar */}
      <rect x="20" y="18" width="240" height="22" rx="8" fill={`${accent}10`}/>
      <rect x="20" y="30" width="240" height="10" fill={`${accent}10`}/>
      <circle cx="33" cy="29" r="3.5" fill={accent} opacity="0.4"/>
      <circle cx="44" cy="29" r="3.5" fill={accent} opacity="0.25"/>
      <circle cx="55" cy="29" r="3.5" fill={accent} opacity="0.15"/>
      {/* URL bar */}
      <rect x="76" y="24" width="128" height="10" rx="5" fill={`${accent}15`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      {/* Sidebar */}
      <rect x="20" y="40" width="46" height="102" fill={`${accent}08`} stroke="none"/>
      <rect x="28" y="52" width="28" height="5" rx="2.5" fill={accent} opacity="0.4"/>
      <rect x="28" y="63" width="22" height="5" rx="2.5" fill={accent} opacity="0.2"/>
      <rect x="28" y="74" width="26" height="5" rx="2.5" fill={accent} opacity="0.2"/>
      <rect x="28" y="85" width="18" height="5" rx="2.5" fill={accent} opacity="0.15"/>
      {/* Main content area — cards */}
      <rect x="74" y="48" width="80" height="44" rx="6" fill={`${accent}10`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.25"/>
      <rect x="80" y="56" width="30" height="4" rx="2" fill={accent} opacity="0.5"/>
      <rect x="80" y="64" width="55" height="14" rx="3" fill={`${accent}25`}/>
      <rect x="80" y="82" width="40" height="3" rx="1.5" fill={accent} opacity="0.2"/>
      <rect x="162" y="48" width="80" height="44" rx="6" fill={`${accent}08`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.2"/>
      <rect x="168" y="56" width="25" height="4" rx="2" fill={accent} opacity="0.35"/>
      <rect x="168" y="64" width="55" height="14" rx="3" fill={`${accent}18`}/>
      {/* Chart bars */}
      <rect x="74" y="108" width="168" height="28" rx="5" fill={`${accent}06`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="82"  y="120" width="10" height="10" rx="2" fill={accent} opacity="0.5"/>
      <rect x="96"  y="116" width="10" height="14" rx="2" fill={accent} opacity="0.7"/>
      <rect x="110" y="113" width="10" height="17" rx="2" fill={accent} opacity="0.9"/>
      <rect x="124" y="118" width="10" height="12" rx="2" fill={accent} opacity="0.6"/>
      <rect x="138" y="115" width="10" height="15" rx="2" fill={accent} opacity="0.75"/>
      <rect x="152" y="120" width="10" height="10" rx="2" fill={accent} opacity="0.45"/>
      <rect x="166" y="117" width="10" height="13" rx="2" fill={accent} opacity="0.6"/>
      <rect x="180" y="112" width="10" height="18" rx="2" fill={accent} opacity="0.85"/>
      <rect x="194" y="119" width="10" height="11" rx="2" fill={accent} opacity="0.5"/>
      <rect x="208" y="116" width="10" height="14" rx="2" fill={accent} opacity="0.65"/>
      <rect x="222" y="114" width="10" height="16" rx="2" fill={accent} opacity="0.8"/>
    </svg>
  );

  if (pattern === 'web') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Browser frame */}
      <rect x="20" y="18" width="240" height="124" rx="8" stroke={accent} strokeWidth="1" fill={`${accent}05`}/>
      <rect x="20" y="18" width="240" height="22" rx="8" fill={`${accent}12`}/>
      <rect x="20" y="30" width="240" height="10" fill={`${accent}12`}/>
      <circle cx="33" cy="29" r="3.5" fill={accent} opacity="0.4"/>
      <circle cx="44" cy="29" r="3.5" fill={accent} opacity="0.25"/>
      <circle cx="55" cy="29" r="3.5" fill={accent} opacity="0.15"/>
      {/* Hero band */}
      <rect x="20" y="40" width="240" height="50" fill={`${accent}0a`}/>
      {/* Hero text lines */}
      <rect x="44" y="54" width="100" height="8" rx="4" fill={accent} opacity="0.55"/>
      <rect x="44" y="67" width="70" height="5" rx="2.5" fill={accent} opacity="0.25"/>
      {/* CTA button */}
      <rect x="44" y="78" width="50" height="9" rx="4.5" fill={accent} opacity="0.7"/>
      {/* Decorative right visual */}
      <circle cx="210" cy="65" r="28" fill={`${accent}12`} stroke={accent} strokeWidth="0.8" strokeOpacity="0.3"/>
      <circle cx="210" cy="65" r="16" fill={`${accent}18`}/>
      {/* Content below fold */}
      <rect x="30" y="102" width="66" height="30" rx="5" fill={`${accent}0a`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="107" y="102" width="66" height="30" rx="5" fill={`${accent}08`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.15"/>
      <rect x="184" y="102" width="66" height="30" rx="5" fill={`${accent}0a`} stroke={accent} strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="38" y="110" width="46" height="3" rx="1.5" fill={accent} opacity="0.3"/>
      <rect x="38" y="117" width="36" height="3" rx="1.5" fill={accent} opacity="0.18"/>
      <rect x="115" y="110" width="46" height="3" rx="1.5" fill={accent} opacity="0.25"/>
      <rect x="115" y="117" width="30" height="3" rx="1.5" fill={accent} opacity="0.15"/>
      <rect x="192" y="110" width="46" height="3" rx="1.5" fill={accent} opacity="0.3"/>
      <rect x="192" y="117" width="38" height="3" rx="1.5" fill={accent} opacity="0.18"/>
    </svg>
  );

  if (pattern === 'geo') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central geometric mark */}
      <polygon points="140,30 185,95 140,130 95,95" stroke={accent} strokeWidth="1.4" fill={`${accent}08`} strokeLinejoin="round"/>
      <polygon points="140,50 168,90 140,110 112,90" stroke={accent} strokeWidth="0.7" fill={`${accent}12`} strokeOpacity="0.5" strokeLinejoin="round"/>
      {/* Corner marks */}
      <rect x="30" y="28" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      <rect x="222" y="28" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      <rect x="30" y="104" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      <rect x="222" y="104" width="28" height="28" rx="6" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25" fill="none"/>
      {/* Color swatches */}
      <circle cx="44" cy="42" r="7" fill={accent} opacity="0.7"/>
      <circle cx="236" cy="42" r="7" fill={accent} opacity="0.35"/>
      <circle cx="44" cy="118" r="7" fill={accent} opacity="0.2"/>
      <circle cx="236" cy="118" r="7" fill={accent} opacity="0.5"/>
      {/* Grid lines */}
      <line x1="20" y1="80" x2="260" y2="80" stroke={accent} strokeWidth="0.5" strokeOpacity="0.1"/>
      <line x1="140" y1="10" x2="140" y2="150" stroke={accent} strokeWidth="0.5" strokeOpacity="0.1"/>
    </svg>
  );

  if (pattern === 'circle') return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Primary ring */}
      <circle cx="140" cy="80" r="52" stroke={accent} strokeWidth="1.4" fill={`${accent}06`}/>
      <circle cx="140" cy="80" r="36" stroke={accent} strokeWidth="0.7" strokeOpacity="0.4" fill={`${accent}0a`}/>
      <circle cx="140" cy="80" r="18" fill={`${accent}20`} stroke={accent} strokeWidth="0.6" strokeOpacity="0.5"/>
      {/* Orbit dots */}
      <circle cx="140" cy="28" r="4.5" fill={accent} opacity="0.8"/>
      <circle cx="192" cy="80" r="4.5" fill={accent} opacity="0.5"/>
      <circle cx="140" cy="132" r="4.5" fill={accent} opacity="0.35"/>
      <circle cx="88"  cy="80" r="4.5" fill={accent} opacity="0.6"/>
      {/* Corner accents */}
      <line x1="20"  y1="20"  x2="40"  y2="20"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="20"  y1="20"  x2="20"  y2="40"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="20"  x2="240" y2="20"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="20"  x2="260" y2="40"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="20"  y1="140" x2="40"  y2="140" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="20"  y1="140" x2="20"  y2="120" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="140" x2="240" y2="140" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="260" y1="140" x2="260" y2="120" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  );

  // wordmark pattern
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wordmark simulation */}
      <rect x="60" y="60" width="160" height="40" rx="6" fill={`${accent}08`} stroke={accent} strokeWidth="0.7" strokeOpacity="0.25"/>
      <rect x="72" y="72" width="90" height="16" rx="3" fill={accent} opacity="0.45"/>
      <rect x="168" y="72" width="40" height="16" rx="3" fill={accent} opacity="0.18"/>
      {/* Tagline */}
      <rect x="88" y="112" width="104" height="6" rx="3" fill={accent} opacity="0.18"/>
      {/* Divider */}
      <line x1="60" y1="105" x2="220" y2="105" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2"/>
      {/* Icon mark above */}
      <rect x="120" y="26" width="40" height="28" rx="8" fill={`${accent}12`} stroke={accent} strokeWidth="0.8" strokeOpacity="0.4"/>
      <circle cx="140" cy="40" r="7" fill={accent} opacity="0.55"/>
      <circle cx="140" cy="40" r="3" fill={accent} opacity="0.9"/>
      {/* Corner registration marks */}
      <line x1="20" y1="20" x2="36" y2="20" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
      <line x1="20" y1="20" x2="20" y2="36" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
      <line x1="260" y1="140" x2="244" y2="140" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
      <line x1="260" y1="140" x2="260" y2="124" stroke={accent} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2"/>
    </svg>
  );
}

/* ── Individual project card ─────────────────────────────────── */
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

  return (
    <article
      ref={cardRef}
      className="wk-card"
      style={{
        '--accent': project.accent,
        animationDelay: `${index * 0.07}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Visual preview */}
      <div className="wk-card-preview">
        <CardVisual pattern={project.pattern} accent={project.accent} />
        <div className="wk-card-preview-glow" />
      </div>

      {/* Content */}
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
    </article>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function WorkPage() {
  const [active, setActive] = useState('software');
  const [animKey, setAnimKey] = useState(0);

  const handleFilter = (id) => {
    if (id === active) return;
    setActive(id);
    setAnimKey(k => k + 1);
  };

  const filters = [
    { id: 'software',  label: 'Software' },
    { id: 'branding',  label: 'Branding & Identity' },
  ];

  return (
    <>
      <Nav />

      <main className="wk-page">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="wk-hero">
          <div className="wk-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="wk-hero-inner">
              <span className="tag">Selected Projects</span>
              <h1 className="wk-hero-title">
                Our <span className="hl">Work.</span>
              </h1>
              <p className="wk-hero-desc">
                Hand-picked projects that demonstrate what happens when strategy,
                craft, and execution are in perfect alignment.
              </p>
            </div>
          </div>
        </section>

        {/* ── Filter + Grid ──────────────────────────────────── */}
        <section className="wk-grid-section">
          <div className="container">

            {/* Filter bar */}
            <nav className="wk-filters" aria-label="Project categories">
              {filters.map(f => (
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

            {/* Grid */}
            <div className="wk-grid" key={animKey} role="region" aria-live="polite">
              {PROJECTS[active].map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
