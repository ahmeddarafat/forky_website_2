import './CTA.css';
import { cta } from '../../data/index.js';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg-glow" />
      <div className="container">
        <div className="cta-card fade-up">

          <div className="cta-left">
            <span className="tag">{cta.tag}</span>
            <h2 dangerouslySetInnerHTML={{ __html: cta.title }} />
            <p>{cta.sub}</p>
            <div className="cta-trust">
              {cta.trustItems.map(item => (
                <span key={item} className="cta-trust-item">
                  <span className="cta-check">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cta-right">
            <div className="cta-contact-card">
              <p className="cta-contact-label">Book a strategy call</p>
              <p className="cta-contact-sub">Free 30-min consultation. No commitment required.</p>
              <a href={cta.primary.href} className="btn-primary cta-main-btn">{cta.primary.label}</a>
              <a href={cta.secondary.href} className="cta-phone-link">{cta.secondary.label} →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
