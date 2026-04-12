import './Hero.css';
import { hero } from '../../data/index.js';

function ChessKnight() {
  return (
    <div className="knight-wrapper">
      {/* Ambient glow layers */}
      <div className="knight-glow knight-glow-1" />
      <div className="knight-glow knight-glow-2" />

      <div className="knight-3d">
        <svg
          className="knight-svg"
          viewBox="0 0 240 325"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark metallic base fill */}
            <linearGradient id="kMain" x1="220" y1="0" x2="20" y2="325" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#142c42" />
              <stop offset="40%"  stopColor="#091828" />
              <stop offset="100%" stopColor="#030c1a" />
            </linearGradient>

            {/* Stroke / edge gradient */}
            <linearGradient id="kEdge" x1="0" y1="0" x2="240" y2="325" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="rgba(0,212,255,0.92)" />
              <stop offset="38%"  stopColor="rgba(0,212,255,0.48)" />
              <stop offset="72%"  stopColor="rgba(0,255,157,0.28)" />
              <stop offset="100%" stopColor="rgba(0,212,255,0.08)" />
            </linearGradient>

            {/* White glass shine */}
            <linearGradient id="kShine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.22)" />
              <stop offset="55%"  stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Glow filter for bright edge lines */}
            <filter id="kGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── BASE ── */}
          <rect x="12" y="298" width="216" height="22" rx="11"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1.2" />

          {/* ── PEDESTAL ── */}
          <path d="M 72 298 L 168 298 L 162 262 L 78 262 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ── LOWER BODY ── */}
          <path d="M 65 262 L 175 262 L 168 198 L 72 198 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ── UPPER BODY ── */}
          <path d="M 72 198 L 168 198 L 156 150 L 82 150 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ── NECK — parallelogram leaning left (toward muzzle) ── */}
          <path d="M 82 150 L 156 150 L 130 100 L 56 100 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ── HEAD — horizontal pill extending further left (muzzle side) ── */}
          <rect x="36" y="68" width="124" height="34" rx="15"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1.2" />

          {/* ── EAR / CROWN — on upper-right of head ── */}
          <path d="M 128 68 L 146 34 L 163 68 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ── MUZZLE TIP — small left-pointing triangle ── */}
          <path d="M 36 76 L 16 83 L 36 92 Z"
            fill="url(#kMain)" stroke="url(#kEdge)" strokeWidth="1" />

          {/* ══ GLASS SHINE LAYERS ══ */}
          {/* Neck upper face */}
          <path d="M 82 150 L 156 150 L 143 125 L 68 123 Z"
            fill="url(#kShine)" />
          {/* Head top */}
          <rect x="44" y="68" width="100" height="9" rx="5"
            fill="rgba(255,255,255,0.1)" />
          {/* Ear inner face */}
          <path d="M 136 68 L 146 47 L 156 68 Z"
            fill="rgba(255,255,255,0.09)" />
          {/* Upper body top band */}
          <path d="M 82 150 L 156 150 L 152 163 L 84 163 Z"
            fill="rgba(0,212,255,0.05)" />

          {/* ══ CYAN TINT ══ */}
          {/* Neck–head transition */}
          <path d="M 56 100 L 130 100 L 122 68 L 44 68 Z"
            fill="rgba(0,212,255,0.045)" />
          {/* Base bottom glow */}
          <rect x="14" y="307" width="212" height="10" rx="5"
            fill="rgba(0,255,157,0.07)" />

          {/* ══ BRIGHT EDGE GLINTS ══ */}
          {/* Left neck edge — brightest (faces light) */}
          <line x1="56" y1="100" x2="82" y2="150"
            stroke="rgba(0,212,255,0.65)" strokeWidth="1.5"
            filter="url(#kGlow)" />
          {/* Left head edge */}
          <line x1="36" y1="69" x2="36" y2="101"
            stroke="rgba(0,212,255,0.5)" strokeWidth="1.2"
            filter="url(#kGlow)" />
          {/* Ear left edge — catches light strongly */}
          <line x1="128" y1="68" x2="146" y2="34"
            stroke="rgba(0,212,255,0.8)" strokeWidth="1.6"
            filter="url(#kGlow)" />
          {/* Muzzle top edge */}
          <line x1="16" y1="83" x2="36" y2="76"
            stroke="rgba(0,212,255,0.5)" strokeWidth="1.2" />
          {/* Base top highlight */}
          <line x1="12" y1="298" x2="228" y2="298"
            stroke="rgba(0,255,157,0.32)" strokeWidth="0.8" />

          {/* ══ INTERIOR FACET LINES ══ */}
          <line x1="95" y1="100" x2="87" y2="150"
            stroke="rgba(0,212,255,0.1)" strokeWidth="0.8" />
          <line x1="112" y1="150" x2="107" y2="198"
            stroke="rgba(0,212,255,0.08)" strokeWidth="0.8" />
          <line x1="122" y1="198" x2="120" y2="262"
            stroke="rgba(0,212,255,0.07)" strokeWidth="0.7" />
          <line x1="120" y1="262" x2="120" y2="298"
            stroke="rgba(0,255,157,0.12)" strokeWidth="0.7" />

          {/* ══ EYE DETAIL ══ */}
          <circle cx="78" cy="83" r="4.5"
            fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.38)" strokeWidth="0.8" />
          <circle cx="78" cy="83" r="1.8"
            fill="rgba(0,212,255,0.7)" />
        </svg>

        {/* Shadow/reflection beneath */}
        <div className="knight-reflection" />
      </div>

      {/* Floating micro particles */}
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

          {/* Left: content (unchanged) */}
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
                <div key={label}>
                  <div className="hero-stat-val">{value}</div>
                  <div className="hero-stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated 3D chess knight */}
          <div className="hero-visual">
            <ChessKnight />
          </div>

        </div>
      </div>
    </section>
  );
}
