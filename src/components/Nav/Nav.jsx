import { useState, useEffect } from 'react';
import './Nav.css';
import { navLinks, mobileNavLinks, site } from '../../data/index.js';

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">F</div>
          <span className="nav-logo-text">{site.name}</span>
        </a>

        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href="#cta" className="nav-cta">Get Started →</a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {mobileNavLinks.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#cta" className="nav-cta" onClick={closeMenu}>Get Started →</a>
      </div>
    </>
  );
}
