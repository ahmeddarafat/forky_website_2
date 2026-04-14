import './Hero.css';
import { hero } from '../../data/index.js';

const heroImg = '/hero.png';

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

          {/* Right: animated chess knight */}
          <div className="hero-visual">
            <KnightVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
