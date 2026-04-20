'use client';

import { useRef, useCallback, useState } from 'react';
import './Capabilities.css';
import { capabilityTabs } from '../../data/index.js';

/* ── Individual capability card ─────────────────────────────── */
function CapCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${cy * -10}deg) rotateY(${cx * 10}deg) scale3d(1.02,1.02,1.02)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    cardRef.current?.classList.add('is-hovered');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove('is-hovered');
    el.style.transform = '';
  }, []);

  return (
    <article
      ref={cardRef}
      className="cap-v2-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cap-v2-card-inner">
        <div
          className="cap-v2-icon"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: item.icon }}
        />
        <h4 className="cap-v2-title">{item.title}</h4>
        <p className="cap-v2-desc">{item.desc}</p>
        <p className="cap-v2-detail">{item.detail}</p>
        <span className="cap-v2-arrow" aria-hidden="true">→</span>
      </div>
      <div className="cap-v2-glow" aria-hidden="true" />
    </article>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('build');

  const activeData = capabilityTabs.find(t => t.id === activeTab);

  return (
    <section className="cap-v2" id="capabilities">

      <div className="container">

        {/* ── Header ── */}
        <div className="cap-v2-header fade-up">
          <span className="tag">Capabilities</span>
          <h2>Everything you need. <span className="hl">One team.</span></h2>
          <p>From infrastructure to growth — every layer of your digital operation, covered.</p>
        </div>

        {/* ── Tab bar ── */}
        <nav className="cap-v2-tabs fade-up" aria-label="Capability categories">
          {capabilityTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`cap-v2-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span
                className="cap-v2-tab-icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: tab.icon }}
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* ── Cards grid — key forces remount + re-animation on tab change ── */}
        <div className="cap-v2-grid" key={activeTab} role="tabpanel">
          {activeData.items.map(item => (
            <CapCard key={item.title} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

