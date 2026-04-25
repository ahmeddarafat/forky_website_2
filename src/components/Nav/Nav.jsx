'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Nav.css';
import { site } from '../../data/index.js';

const logoImg = '/logo_with_word.png';

/* ── Nav item definitions ──────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'About Us',   href: '/about'            },
  { label: 'Services',   sectionId: 'capabilities' },
  { label: 'Work',        href: '/work'              },
  { label: 'Contact Us', href: '/contact'           },
];

/* ── Smooth scroll utility ─────────────────────────────────── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nav() {
  const pathname = usePathname();
  const isHome   = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  /* ── Navbar scroll style ─────────────────────────────────── */
  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        rafId = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── Active section tracking (home only) ─────────────────── */
  useEffect(() => {
    if (!isHome) return;
    const ids      = NAV_ITEMS.filter(i => i.sectionId).map(i => i.sectionId);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-10% 0px -55% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [isHome]);

  /* ── After cross-page navigation: scroll to hash ─────────── */
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const t  = setTimeout(() => scrollTo(id), 200);
    return () => clearTimeout(t);
  }, [isHome, pathname]);

  /* ── Close mobile menu on route change ───────────────────── */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* ── Build href for each nav item ────────────────────────── */
  const getHref = useCallback((item) => {
    if (item.href)      return item.href;                        // /work
    if (isHome)         return `#${item.sectionId}`;             // same-page hash
    return `/#${item.sectionId}`;                                // cross-page hash
  }, [isHome]);

  /* ── Click handler ───────────────────────────────────────── */
  const handleClick = useCallback((e, item) => {
    setMenuOpen(false);
    if (!item.sectionId) return;                 // /work → let Link navigate
    if (isHome) {
      e.preventDefault();
      scrollTo(item.sectionId);
    }
    // else: href="/#section" — browser handles hash scroll after navigation
  }, [isHome]);

  const isActive = (item) => {
    if (item.href) return pathname === item.href;
    return isHome && activeId === item.sectionId;
  };

  const ctaHref    = isHome ? '#cta' : '/#cta';
  const handleCta  = (e) => { setMenuOpen(false); if (isHome) { e.preventDefault(); scrollTo('cta'); } };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">

        {/* ── Logo ── */}
        <Link href="/" className="nav-logo" aria-label={`${site.name} — go to homepage`}>
          <img src={logoImg} alt={site.name} className="nav-logo-img" />
        </Link>

        {/* ── Desktop links ── */}
        <ul className="nav-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={getHref(item)}
                className={`nav-link${isActive(item) ? ' active' : ''}`}
                onClick={(e) => handleClick(e, item)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <Link href={ctaHref} className="nav-cta" onClick={handleCta}>
          Get Started
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={getHref(item)}
            className={`mobile-link${isActive(item) ? ' active' : ''}`}
            onClick={(e) => handleClick(e, item)}
          >
            {item.label}
            {item.href && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </Link>
        ))}
        <Link href={ctaHref} className="nav-cta mobile-cta" onClick={handleCta}>
          Get Started →
        </Link>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="mobile-overlay" aria-hidden="true" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
