import './CTA.css';
import { cta } from '../../data/index.js';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      {/* Layered background */}
      <div className="cta-bg-radial"  aria-hidden="true" />
      <div className="cta-bg-grid"    aria-hidden="true" />

      <div className="container">
        <div className="cta-inner fade-up">

          {/* Tag */}
          <span className="tag">{cta.tag}</span>

          {/* Headline */}
          <h2
            className="cta-headline"
            dangerouslySetInnerHTML={{ __html: cta.title }}
          />

          {/* Subtext */}
          <p className="cta-sub">{cta.sub}</p>

          {/* Actions */}
          <div className="cta-actions">
            {/* Primary button with pulse ring */}
            <div className="cta-btn-wrap">
              <div className="cta-btn-pulse" aria-hidden="true" />
              <a href={cta.primary.href} className="cta-btn">
                {cta.primary.label}
              </a>
            </div>

            {/* Secondary minimal link */}
            <a href={cta.secondary.href} className="cta-secondary-link">
              {cta.secondary.label}
            </a>
          </div>

          {/* Trust line */}
          <p className="cta-trust-line">
            <span className="cta-trust-dot" aria-hidden="true" />
            No commitment · Free 30-min strategy call · Results in 30 days
          </p>

        </div>
      </div>
    </section>
  );
}

