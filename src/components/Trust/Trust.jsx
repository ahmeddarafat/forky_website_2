import './Trust.css';
import { trustLogos } from '../../data/index.js';

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <p className="trust-label">Trusted by innovative teams worldwide</p>
        <div className="trust-wrap">
          <div className="trust-track">
            {[...trustLogos, ...trustLogos].map(({ iconSvg, name }, i) => (
              <div key={`${name}-${i}`} className="trust-logo" title={name}>
                <span
                  className="trust-logo-icon"
                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                />
                <span className="trust-logo-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
