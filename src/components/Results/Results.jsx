'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import './Results.css';

const caseStudies = [
  { client: 'AlJassour Construction', industry: 'Construction', problem: 'Low conversion rate', strategy: 'Full-funnel rebuild + automation', result: '+230% Revenue Growth', tags: ['Funnel', 'Automation'] },
  { client: 'MyVego', industry: 'E-Commerce', problem: 'High customer acquisition cost', strategy: 'Funnel optimization + targeting refinement', result: '-40% CAC', tags: ['Ads', 'CRO'] },
  { client: 'HikeUp', industry: 'SaaS', problem: 'Low retention', strategy: 'Lifecycle automation system', result: '+60% Retention', tags: ['Automation', 'Email'] },
];

const cardBgs = [
  'radial-gradient(ellipse 120% 100% at 0% 0%, rgba(20,80,70,0.6), transparent 60%), linear-gradient(160deg,#0a1a1d 0%,#06101a 100%)',
  'radial-gradient(ellipse 120% 100% at 100% 0%, rgba(40,20,80,0.5), transparent 60%), linear-gradient(160deg,#0d0a1e 0%,#06101a 100%)',
  'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(15,60,60,0.6), transparent 60%), linear-gradient(160deg,#07191c 0%,#06101a 100%)',
];

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CardShape = ({ index }) => {
  if (index === 0) return (
    <svg className="cs-card-shape" viewBox="0 0 200 200" fill="none">
      <circle cx="160" cy="40" r="80" stroke="#2dd4bf" strokeWidth="0.8" />
      <circle cx="160" cy="40" r="50" stroke="#2dd4bf" strokeWidth="0.5" />
      <circle cx="160" cy="40" r="20" fill="rgba(45,212,191,0.08)" />
    </svg>
  );
  if (index === 1) return (
    <svg className="cs-card-shape" viewBox="0 0 200 200" fill="none">
      <rect x="80" y="20" width="100" height="100" rx="20" stroke="#a78bfa" strokeWidth="0.8" transform="rotate(15 80 20)" />
      <rect x="100" y="40" width="60" height="60" rx="12" stroke="#a78bfa" strokeWidth="0.5" transform="rotate(15 80 20)" />
    </svg>
  );
  return (
    <svg className="cs-card-shape" viewBox="0 0 200 200" fill="none">
      <polygon points="160,10 200,80 120,80" stroke="#2dd4bf" strokeWidth="0.8" fill="rgba(45,212,191,0.04)" />
      <polygon points="150,30 185,85 115,85" stroke="#2dd4bf" strokeWidth="0.4" />
    </svg>
  );
};

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('cs-in-view'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function Results() {
  const ref = useReveal();

  return (
    <section ref={ref} className="cs-section" id="results">
      {/* Background glow */}
      <div className="cs-bg-glow" />

      <div className="cs-container">
        {/* Header */}
        <div className="cs-header">
          <div>
            <p className="cs-label" data-reveal="up" style={{ animationDelay: '0ms' }}>Our Work</p>
            <h2 className="cs-title" data-reveal="up" style={{ animationDelay: '80ms' }}>
              Proven Impact.<br />
              <span className="cs-gradient-text">Growth in Action.</span>
            </h2>
            <p className="cs-subtitle" data-reveal="up" style={{ animationDelay: '130ms' }}>
              Real clients, real constraints, compounding results.
            </p>
          </div>
          <Link href="/work" className="cs-btn" data-reveal="fade" style={{ animationDelay: '160ms' }}>
            View All Work <ArrowRightIcon />
          </Link>
        </div>

        {/* Cards */}
        <div className="cs-cards-grid">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="cs-card fade-up"
              style={{ background: cardBgs[i], transitionDelay: `${i * 100}ms` }}
            >
              {/* Preview area */}
              <div className="cs-card-preview">
                <CardShape index={i} />
                <div className="cs-card-tags">
                  {study.tags.map((tag) => (
                    <span key={tag} className="cs-tag">{tag}</span>
                  ))}
                </div>
                <div className="cs-card-overlay">
                  <div className="cs-overlay-inner">
                    <p className="cs-overlay-label">Result</p>
                    <p className="cs-overlay-result">{study.result}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="cs-card-body">
                <h3 className="cs-client">{study.client}</h3>
                <p className="cs-industry">{study.industry}</p>
                <div className="cs-details">
                  <div>
                    <p className="cs-detail-label">Problem</p>
                    <p className="cs-detail-text">{study.problem}</p>
                  </div>
                  <div>
                    <p className="cs-detail-label">Strategy</p>
                    <p className="cs-detail-text">{study.strategy}</p>
                  </div>
                </div>
                <div className="cs-card-footer">
                  <p className="cs-result">{study.result}</p>
                  <span className="cs-arrow"><ArrowRightIcon size={15} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
