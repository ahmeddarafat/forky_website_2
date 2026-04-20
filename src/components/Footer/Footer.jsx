import './Footer.css';
import { site, footerSocials, footerCols } from '../../data/index.js';

const logoImg = '/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <a href="#" className="footer-logo">
              <img src={logoImg} alt={site.name} className="footer-logo-img" />
            </a>
            <p className="footer-tagline">{site.tagline}</p>
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
          {footerCols.map(({ title, links }) => (
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
          <p className="footer-copy">© {site.year} {site.name}. All rights reserved.</p>
          <div className="footer-status">
            <span className="status-dot" />
            All systems operational
          </div>
        </div>

      </div>
    </footer>
  );
}
