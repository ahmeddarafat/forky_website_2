import './Trust.css';
import { trustLogos } from '../../data/index.js';

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <p className="trust-label">Trusted by innovative teams worldwide</p>
        <div className="trust-wrap">
          {/* Duplicate for seamless loop */}
          {[...trustLogos, ...trustLogos].map(({ icon, color, bg, name }, i) => (
            <div
              key={`${name}-${i}`}
              className="trust-logo"
              style={{ background: bg }}
              title={name}
            >
              <span className="trust-logo-icon" style={{ color }}>{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
