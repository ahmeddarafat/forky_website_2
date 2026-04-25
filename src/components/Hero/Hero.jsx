'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './Hero.css';
import { hero } from '../../data/index.js';

const heroImg = '/hero.png';

/* ── useCountUp — runs once when element enters viewport ──────── */
function useCountUp(target, duration = 1600) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse numeric part + suffix (e.g. "200+" → 200, "+")
    const match = String(target).match(/^(\d*\.?\d+)(.*)/);
    if (!match) { setDisplay(String(target)); return; }

    const end    = parseFloat(match[1]);
    const suffix = match[2] ?? '';
    const isFloat = match[1].includes('.');
    const decimals = isFloat ? (match[1].split('.')[1]?.length ?? 1) : 0;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        obs.disconnect();

        const startTime = performance.now();
        const tick = (now) => {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const eased    = 1 - Math.pow(1 - progress, 3);
          const current  = eased * end;
          setDisplay((isFloat ? current.toFixed(decimals) : Math.floor(current)) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, display };
}

/* ── Stat counter item ─────────────────────────────────────────── */
function StatItem({ value, label }) {
  const { ref, display } = useCountUp(value, 1500);
  return (
    <div className="hero-stat-item" ref={ref}>
      <div className="hero-stat-val">{display}</div>
      <div className="hero-stat-lbl">{label}</div>
    </div>
  );
}

function KnightVisual() {
  return (
    <div className="knight-wrapper">
      <div className="knight-glow knight-glow-1" />
      <div className="knight-glow knight-glow-2" />

      <div className="knight-3d">
        <img
          src={heroImg}
          alt="Forky chess knight"
          className="knight-img"
          fetchpriority="high"
          draggable={false}
        />
      </div>

      <div className="knight-particle kp-1" />
      <div className="knight-particle kp-2" />
      <div className="knight-particle kp-3" />
      <div className="knight-particle kp-4" />
      <div className="knight-particle kp-5" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">

          {/* Left: content */}
          <div>
            <div className="hero-badge">
              <span className="badge-dot" />
              {hero.badge}
            </div>

            <h1
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: hero.titleLines.join('<br />') }}
            />

            <p className="hero-sub">{hero.sub}</p>

            <div className="hero-actions">
              <a href={hero.ctaPrimary.href}   className="btn-primary">{hero.ctaPrimary.label}</a>
              <a href={hero.ctaSecondary.href} className="btn-secondary">{hero.ctaSecondary.label}</a>
            </div>

            <div className="hero-stats">
              {hero.stats.map(({ value, label }) => (
                <StatItem key={label} value={value} label={label} />
              ))}
            </div>
          </div>

          {/* Right: animated chess knight */}
          <div className="hero-visual">
            <KnightVisual />
          </div>

        </div>
      </div>
    </section>
  );
}

