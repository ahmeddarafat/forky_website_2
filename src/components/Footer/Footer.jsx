'use client';

import './Footer.css';
import { site, footerSocials } from '../../data/index.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

const logoImg = '/logo.png';

export default function Footer() {
  const { data } = useLanguage();
  const t = data.footer;

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <a href="#" className="footer-logo">
              <img src={logoImg} alt={site.name} className="footer-logo-img" />
            </a>
            <p className="footer-tagline">{t.tagline}</p>
            <div className="footer-social">
              {footerSocials.map(({ iconSvg, title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="social-btn"
                  title={title}
                  aria-label={title}
                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {t.cols.map(({ title, links }) => (
            <div key={title}>
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-links">
                {links.map(({ label, href }) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {site.year} {site.name}. {t.allRights}</p>
          <div className="footer-status">
            <span className="status-dot" />
            {t.allSystems}
          </div>
        </div>

      </div>
    </footer>
  );
}
