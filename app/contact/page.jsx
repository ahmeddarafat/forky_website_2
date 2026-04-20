'use client';

import { useState } from 'react';
import Nav from '../../src/components/Nav/Nav.jsx';
import Footer from '../../src/components/Footer/Footer.jsx';
import './contact.css';

const PROJECT_TYPES = [
  'UI/UX Design',
  'Web Development',
  'Mobile App',
  'Branding',
  'Digital Marketing',
  'Full Project',
];

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 5.5v4.75l2.75 2.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Fast Response',
    desc:  'We reply within 24 hours — no exceptions.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="5.5" width="15" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2.5 9h15" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.4"/>
        <path d="M6 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M13.5 13h0.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Professional Execution',
    desc:  'Senior-level talent on every engagement.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 5.5h13M3.5 10h9M3.5 14.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Clear Communication',
    desc:  'Weekly updates. No surprises. Full transparency.',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name:    '',
    email:   '',
    company: '',
    type:    '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Nav />

      <main className="contact-page">

        {/* ── Ambient background ───────────────────────────── */}
        <div className="contact-bg-radial"  aria-hidden="true" />
        <div className="contact-bg-grid"    aria-hidden="true" />
        <div className="contact-beam-left"  aria-hidden="true" />
        <div className="contact-beam-right" aria-hidden="true" />

        {/* ══════════════ HERO ══════════════ */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-inner">
              <span className="tag">Contact Us</span>
              <h1 className="contact-hero-title">
                Let's build your next<br />
                <span className="hl">digital product.</span>
              </h1>
              <p className="contact-hero-sub">
                Tell us about your project and we'll get back within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════ MAIN CONTENT ══════════════ */}
        <section className="contact-body">
          <div className="container">
            <div className="contact-layout">

              {/* ── LEFT: Info sidebar ── */}
              <aside className="contact-sidebar">

                {/* Trust items */}
                <div className="contact-trust-list">
                  {TRUST_ITEMS.map(({ icon, title, desc }) => (
                    <div key={title} className="contact-trust-item">
                      <div className="contact-trust-icon" aria-hidden="true">
                        {icon}
                      </div>
                      <div className="contact-trust-text">
                        <p className="contact-trust-title">{title}</p>
                        <p className="contact-trust-desc">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="contact-sidebar-divider" aria-hidden="true" />

                {/* Contact info */}
                <div className="contact-info-list">

                  <a href="mailto:hello@forky.io" className="contact-info-item">
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.35"/>
                        <path d="M1.5 6.5L8 10.5L14.5 6.5" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    </span>
                    <div>
                      <p className="contact-info-label">Email</p>
                      <p className="contact-info-value">hello@forky.io</p>
                    </div>
                  </a>

                  <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 1.16.3 2.25.82 3.2L1.5 14.5l3.42-.81A6.48 6.48 0 0 0 8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                        <path d="M5.8 5.5c.1.3.35 1.02.56 1.35.14.22.14.46-.03.66l-.42.5c.44.82 1.08 1.46 1.9 1.9l.5-.42c.2-.17.44-.17.66-.03.33.21 1.05.46 1.35.56.3.1.46.42.37.72-.1.3-.54 1.26-1.6 1.26-1.06 0-2.6-1.1-3.72-2.22C4.27 8.6 3.5 7.3 3.5 6.23c0-.7.5-1.38.93-1.45.43-.07.27.62.37.72Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <div>
                      <p className="contact-info-label">WhatsApp</p>
                      <p className="contact-info-value">+1 (000) 000-0000</p>
                    </div>
                  </a>

                  <div className="contact-info-item">
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
                        <path d="M8 1.5A5.5 5.5 0 0 1 13.5 7c0 3.5-5.5 7.5-5.5 7.5S2.5 10.5 2.5 7A5.5 5.5 0 0 1 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    </span>
                    <div>
                      <p className="contact-info-label">Location</p>
                      <p className="contact-info-value">Remote-first · Global</p>
                    </div>
                  </div>

                </div>

              </aside>

              {/* ── RIGHT: Form card ── */}
              <div className="contact-form-wrap">

                <div className="contact-form-glow" aria-hidden="true" />

                <div className="contact-card">

                  {/* Top edge glow */}
                  <div className="contact-card-edge" aria-hidden="true" />

                  {!submitted ? (
                    <>
                      <div className="contact-card-header">
                        <p className="contact-card-pretitle">Start a project</p>
                        <h2 className="contact-card-title">Tell us about your vision</h2>
                      </div>

                      <form className="contact-form" onSubmit={handleSubmit} noValidate>

                        {/* Row: Name + Email */}
                        <div className="contact-form-row">
                          <div className="contact-field">
                            <input
                              type="text"
                              id="cf-name"
                              name="name"
                              className="contact-input"
                              placeholder=" "
                              autoComplete="name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                            />
                            <label htmlFor="cf-name" className="contact-label">Full Name</label>
                            <span className="contact-field-line" aria-hidden="true" />
                          </div>

                          <div className="contact-field">
                            <input
                              type="email"
                              id="cf-email"
                              name="email"
                              className="contact-input"
                              placeholder=" "
                              autoComplete="email"
                              required
                              value={formState.email}
                              onChange={handleChange}
                            />
                            <label htmlFor="cf-email" className="contact-label">Email Address</label>
                            <span className="contact-field-line" aria-hidden="true" />
                          </div>
                        </div>

                        {/* Row: Company + Type */}
                        <div className="contact-form-row">
                          <div className="contact-field">
                            <input
                              type="text"
                              id="cf-company"
                              name="company"
                              className="contact-input"
                              placeholder=" "
                              autoComplete="organization"
                              value={formState.company}
                              onChange={handleChange}
                            />
                            <label htmlFor="cf-company" className="contact-label">
                              Company <span className="contact-optional">(optional)</span>
                            </label>
                            <span className="contact-field-line" aria-hidden="true" />
                          </div>

                          <div className="contact-field contact-field--select">
                            <select
                              id="cf-type"
                              name="type"
                              className={`contact-input contact-select${formState.type ? ' has-value' : ''}`}
                              required
                              value={formState.type}
                              onChange={handleChange}
                            >
                              <option value="" disabled hidden></option>
                              {PROJECT_TYPES.map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <label htmlFor="cf-type" className="contact-label">Project Type</label>
                            <span className="contact-select-arrow" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="contact-field-line" aria-hidden="true" />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="contact-field contact-field--textarea">
                          <textarea
                            id="cf-message"
                            name="message"
                            className="contact-input contact-textarea"
                            placeholder=" "
                            rows="5"
                            required
                            value={formState.message}
                            onChange={handleChange}
                          />
                          <label htmlFor="cf-message" className="contact-label">
                            Tell us about your project
                          </label>
                          <span className="contact-field-line" aria-hidden="true" />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className={`contact-submit${loading ? ' loading' : ''}`}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="contact-submit-spinner" aria-hidden="true" />
                              <span>Sending…</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </>
                          )}
                        </button>

                        <p className="contact-form-note">
                          <span className="contact-trust-dot" aria-hidden="true" />
                          No commitment · Free 30-min strategy call · Reply within 24h
                        </p>

                      </form>
                    </>
                  ) : (
                    /* ── Success state ── */
                    <div className="contact-success">
                      <div className="contact-success-icon" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8.5 14.5l3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="contact-success-title">Message sent!</h3>
                      <p className="contact-success-desc">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <button
                        type="button"
                        className="contact-success-reset"
                        onClick={() => { setSubmitted(false); setFormState({ name:'', email:'', company:'', type:'', message:'' }); }}
                      >
                        Send another message
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="contact-final-cta">
          <div className="container">
            <div className="contact-final-inner">
              <p className="contact-final-label">Prefer to talk directly?</p>
              <h2 className="contact-final-title">
                Start a <span className="hl">Conversation.</span>
              </h2>
              <p className="contact-final-sub">
                We work with startups and businesses to build scalable digital experiences.
                Let's find out what's right for you.
              </p>
              <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer" className="btn-primary contact-final-btn">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 1.16.3 2.25.82 3.2L1.5 14.5l3.42-.81A6.48 6.48 0 0 0 8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  <path d="M5.8 5.5c.1.3.35 1.02.56 1.35.14.22.14.46-.03.66l-.42.5c.44.82 1.08 1.46 1.9 1.9l.5-.42c.2-.17.44-.17.66-.03.33.21 1.05.46 1.35.56.3.1.46.42.37.72-.1.3-.54 1.26-1.6 1.26-1.06 0-2.6-1.1-3.72-2.22C4.27 8.6 3.5 7.3 3.5 6.23c0-.7.5-1.38.93-1.45.43-.07.27.62.37.72Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="contact-final-glow" aria-hidden="true" />
        </section>

      </main>

      <Footer />
    </>
  );
}
