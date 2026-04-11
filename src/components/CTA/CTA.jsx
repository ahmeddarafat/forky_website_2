import './CTA.css';
import { cta } from '../../data/index.js';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-glow" />
      <div className="container">
        <div className="cta-inner fade-up">

          <span className="tag">{cta.tag}</span>

          <h2 dangerouslySetInnerHTML={{ __html: cta.title }} />

          <p>{cta.sub}</p>

          <div className="cta-actions">
            <a href={cta.primary.href}   className="btn-primary">{cta.primary.label}</a>
            <a href={cta.secondary.href} className="btn-secondary">{cta.secondary.label}</a>
          </div>

          <div className="cta-trust">
            {cta.trustItems.map(item => (
              <span key={item} className="cta-trust-item">
                <svg className="check-icon" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" stroke="var(--green)" strokeOpacity=".4" />
                  <path d="M5 8l2 2 4-4" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
