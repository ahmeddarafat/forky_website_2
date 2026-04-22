'use client';

import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">

      {/* ── Background layers ── */}
      <div className="cta-bg-radial"   aria-hidden="true" />
      <div className="cta-bg-grid"     aria-hidden="true" />
      <div className="cta-bg-vignette" aria-hidden="true" />
      <div className="cta-beam"        aria-hidden="true" />

      <div className="container">
        <div className="cta-inner">

          {/* ══════════════ LEFT SIDE ══════════════ */}
          <div className="cta-left fade-left">

            <span className="tag">Ready to Scale?</span>

            <h2 className="cta-headline">
              Let&rsquo;s Build<br />
              <span className="cta-hl">Your Growth</span><br />
              Engine.
            </h2>

            <p className="cta-sub">
              Most companies hire vendors. Our clients build compounding systems — where every layer of software, data, and marketing reinforces the next.
            </p>

            {/* Info cards */}
            <div className="cta-info-cards stagger">

              <div className="cta-info-card">
                <span className="cta-info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.35"/>
                    <path d="M1.5 6.5L8 10.5L14.5 6.5" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                </span>
                <div>
                  <p className="cta-info-label">Email Us</p>
                  <p className="cta-info-value">forkysolutions@gmail.com</p>
                </div>
              </div>

              <div className="cta-info-card">
                <span className="cta-info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.35"/>
                    <path d="M8 4.5v3.75l2.25 2.25" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <p className="cta-info-label">Response Time</p>
                  <p className="cta-info-value">Within 24 hours</p>
                </div>
              </div>

              <div className="cta-info-card">
                <span className="cta-info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.35"/>
                    <path d="M2.5 13.5c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <p className="cta-info-label">Free Strategy Call</p>
                  <p className="cta-info-value">No commitment · 30 minutes</p>
                </div>
              </div>

            </div>
          </div>

          {/* ══════════════ RIGHT SIDE — FORM ══════════════ */}
          <div className="cta-form-wrap fade-right">

            {/* Ambient glow behind card */}
            <div className="cta-form-glow" aria-hidden="true" />

            <div className="cta-card">

              <div className="cta-card-header">
                <p className="cta-card-pretitle">Get in touch</p>
                <h3 className="cta-card-title">Start Your Project</h3>
              </div>

              <form className="cta-form" onSubmit={(e) => e.preventDefault()}>

                <div className="cta-field">
                  <input
                    type="text"
                    id="cta-name"
                    className="cta-input"
                    placeholder=" "
                    autoComplete="name"
                    required
                  />
                  <label htmlFor="cta-name" className="cta-label">Full Name</label>
                  <span className="cta-field-line" aria-hidden="true" />
                </div>

                <div className="cta-field">
                  <input
                    type="email"
                    id="cta-email"
                    className="cta-input"
                    placeholder=" "
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="cta-email" className="cta-label">Email Address</label>
                  <span className="cta-field-line" aria-hidden="true" />
                </div>

                <div className="cta-field">
                  <input
                    type="text"
                    id="cta-company"
                    className="cta-input"
                    placeholder=" "
                    autoComplete="organization"
                  />
                  <label htmlFor="cta-company" className="cta-label">Company <span className="cta-optional">(optional)</span></label>
                  <span className="cta-field-line" aria-hidden="true" />
                </div>

                <div className="cta-field cta-field--textarea">
                  <textarea
                    id="cta-msg"
                    className="cta-input cta-textarea"
                    placeholder=" "
                    rows="4"
                    required
                  />
                  <label htmlFor="cta-msg" className="cta-label">Tell us about your project</label>
                  <span className="cta-field-line" aria-hidden="true" />
                </div>

                <button type="submit" className="cta-submit">
                  <span>Start Scaling Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className="cta-form-note">
                  <span className="cta-trust-dot" aria-hidden="true" />
                  No commitment &middot; Free 30-min strategy call &middot; Results in 30 days
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

