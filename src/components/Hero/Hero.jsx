import './Hero.css';
import { hero } from '../../data/index.js';

function FloatCard({ pos, label, value, valueClass, sub, subType }) {
  return (
    <div className={`float-card float-card-${pos}`}>
      <div className="fc-label">{label}</div>
      <div className={`fc-val${valueClass ? ` ${valueClass}` : ''}`}>{value}</div>
      {subType === 'trend'
        ? <div className="fc-trend">{sub}</div>
        : <div className="fc-sub">{sub}</div>
      }
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
                <div key={label}>
                  <div className="hero-stat-val">{value}</div>
                  <div className="hero-stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="hero-visual">
            <div className="hero-orb" />
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />

            <div className="ring-1-wrap">
              <div className="ring-dot" style={{ background: 'var(--cyan)', boxShadow: '0 0 12px var(--cyan)' }} />
            </div>
            <div className="ring-2-wrap">
              <div className="ring-dot" style={{ background: 'var(--green)', boxShadow: '0 0 12px var(--green)', top: 'auto', bottom: '-4px' }} />
            </div>

            {hero.floatCards.map(card => (
              <FloatCard key={card.pos} {...card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
