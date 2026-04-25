import Link from 'next/link';
import Nav from '../../../src/components/Nav/Nav.jsx';
import './wsg.css';

/* ══════════════════════════════════════════════════════════════
   WSG AUTO PARTS — Static Case Study Data
══════════════════════════════════════════════════════════════ */
const SCREENS = [
  { id: 'home',          src: '/assets/projects/wsg/screen-home.png',           label: 'Home Dashboard' },
  { id: 'categories',    src: '/assets/projects/wsg/screen-categories.png',     label: 'Category Browse' },
  { id: 'products',      src: '/assets/projects/wsg/screen-products.png',       label: 'Product Listing' },
  { id: 'detail',        src: '/assets/projects/wsg/screen-product-detail.png', label: 'Product Detail' },
  { id: 'subcategories', src: '/assets/projects/wsg/screen-subcategories.png',  label: 'Sub-Categories' },
  { id: 'loyalty',       src: '/assets/projects/wsg/screen-loyalty.png',        label: 'Loyalty Program' },
  { id: 'upgrade',       src: '/assets/projects/wsg/screen-upgrade.png',        label: 'Rank Upgrade' },
];

const FEATURES = [
  {
    screenId: 'home',
    title:    'Points-First Homepage',
    body:     'The loyalty balance and its real-money value appear the moment the app opens — reinforcing the rewards program on every session and bringing users back consistently.',
  },
  {
    screenId: 'categories',
    title:    'Visual Category System',
    body:     'Large image-driven category cards replace text-heavy menus with instant visual recognition. Users land in the right product section in a single tap.',
  },
  {
    screenId: 'products',
    title:    'Brand-Filtered Listings',
    body:     'Horizontally scrollable brand chips (Michelin, Pirelli, Goodyear, Dunlop) let enthusiasts zero in instantly. Points earned per product appear in the list row — making every browse feel rewarding before checkout.',
  },
  {
    screenId: 'subcategories',
    title:    'Deep Navigation',
    body:     'Icon-led sub-category rows (Tyres, Wheel Covers, Track Widening, Lug Wrenches, Wheel Nuts, Car Jacks) give users surgical access to the exact part type they need — zero dead-ends.',
  },
  {
    screenId: 'detail',
    title:    'Specification Table',
    body:     'Auto parts demand precision. A clean spec table — Width, Height, Type, Diameter, Load Index, Speed Rating — reduces returns and eliminates buyer uncertainty at the exact moment of decision.',
  },
];

const LOYALTY_FEATURES = [
  'Live Silver to Gold tier progression with progress bar',
  '1 Point = 1 EGP — real, tangible value shown upfront',
  'One-tap Pay with Points shortcut at checkout',
  'Circular milestone ring for rank target visibility',
  'Full activity ledger: points earned and points used',
];

const RESULTS = [
  { value: '7',      label: 'Screens Designed' },
  { value: '2-Tier', label: 'Loyalty Engine' },
  { value: '5',      label: 'Product Categories' },
  { value: '0 to 1', label: 'Built From Scratch' },
];

/* ── helpers ──────────────────────────────────────────────────── */
function sc(id) { return SCREENS.find(s => s.id === id); }

function Phone({ id, className = '', loading = 'lazy' }) {
  const screen = sc(id);
  if (!screen) return null;
  return (
    <div className={`wsg-phone ${className}`}>
      <div className="wsg-phone-inner">
        <img src={screen.src} alt={screen.label} loading={loading} decoding="async" />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function WSGPage() {
  return (
    <>
      <Nav />
      <main className="wsg-page">
        <div className="container">
          <Link href="/work" className="wsg-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Projects
          </Link>
        </div>

        {/* ── Banner ──────────────────────────────────────── */}
        <div className="wsg-banner">
          <div className="wsg-banner-bg" aria-hidden="true" />
          <div className="container">
            <div className="wsg-banner-inner">
              <div className="wsg-banner-head">
                <div className="wsg-banner-badges">
                  {['Mobile App', 'iOS & Android', 'E-Commerce', 'Loyalty System'].map(t => (
                    <span key={t} className="wsg-badge">{t}</span>
                  ))}
                </div>
                <span className="wsg-banner-year">2025</span>
              </div>
              <h1 className="wsg-banner-title">WSG Auto Parts</h1>
              <p className="wsg-banner-tagline">
                Full-stack mobile commerce platform built end-to-end, from first browse to earned loyalty.
              </p>
              <div className="wsg-banner-meta">
                <div className="wsg-meta-item"><span>Platform</span><strong>iOS &amp; Android</strong></div>
                <div className="wsg-meta-item"><span>Scope</span><strong>Full Product Design &amp; Dev</strong></div>
                <div className="wsg-meta-item"><span>Timeline</span><strong>5 Months</strong></div>
                <div className="wsg-meta-item"><span>Year</span><strong>2025</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3-Phone Hero ────────────────────────────────── */}
        <div className="wsg-phones-hero">
          <div className="container">
            <div className="wsg-phones-row">
              <Phone id="categories" className="wsg-phone--side wsg-phone--left"  loading="lazy" />
              <Phone id="home"       className="wsg-phone--main"                   loading="eager" />
              <Phone id="products"   className="wsg-phone--side wsg-phone--right" loading="lazy" />
            </div>
          </div>
        </div>

        {/* ── Overview ────────────────────────────────────── */}
        <div className="wsg-overview">
          <div className="container">
            <div className="wsg-two-col">
              <div className="wsg-text-block">
                <p className="wsg-section-label">Overview</p>
                <h2 className="wsg-section-title">One App.<br />The Entire Market.</h2>
                <p className="wsg-body-text">
                  WSG is Egypt&apos;s premier auto parts distributor. We designed and built their flagship
                  mobile app entirely from scratch — a full retail experience covering product discovery,
                  brand filtering, detailed spec lookups, cart and checkout, and a gamified loyalty engine
                  that turns every purchase into redeemable points.
                </p>
                <div className="wsg-divider" />
                <p className="wsg-section-label">The Challenge</p>
                <p className="wsg-body-text">
                  The Egyptian auto parts market operated almost entirely offline. Customers navigated dozens
                  of phone calls and physical store visits to find the right part. WSG had vast inventory and
                  strong brand trust — but zero digital presence to scale it.
                </p>
                <div className="wsg-divider" />
                <p className="wsg-section-label">Our Solution</p>
                <p className="wsg-body-text">
                  We built a mobile-first platform around three pillars: a visual catalog with deep brand and
                  spec filtering; a streamlined checkout flow; and a tier-based loyalty program (Silver to Gold)
                  where every purchase earns points convertible to real EGP — turning one-time buyers into loyal regulars.
                </p>
              </div>
              <div className="wsg-visual-block">
                <Phone id="detail" className="wsg-phone--lg" loading="lazy" />
                <span className="wsg-visual-caption">{sc('detail').label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Breakdown header ────────────────────────────── */}
        <div className="wsg-breakdown-header">
          <div className="container">
            <p className="wsg-section-label wsg-center">UI/UX Breakdown</p>
            <h2 className="wsg-section-title wsg-center">Every Screen, Purposeful.</h2>
            <p className="wsg-breakdown-sub">
              From home to checkout, every design decision was made to reduce friction and reward engagement.
            </p>
          </div>
        </div>

        {/* ── Feature Rows ────────────────────────────────── */}
        <div className="wsg-features">
          <div className="container">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.screenId}
                className={`wsg-feature-row${i % 2 !== 0 ? ' wsg-feature-row--reverse' : ''}`}
              >
                <div className="wsg-feature-phone">
                  <Phone id={feature.screenId} className="wsg-phone--md" loading="lazy" />
                </div>
                <div className="wsg-feature-text">
                  <span className="wsg-feature-num">0{i + 1}</span>
                  <h3 className="wsg-feature-title">{feature.title}</h3>
                  <p className="wsg-feature-body">{feature.body}</p>
                  <span className="wsg-feature-tag">{sc(feature.screenId).label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Loyalty ─────────────────────────────────────── */}
        <div className="wsg-loyalty-section">
          <div className="container">
            <div className="wsg-loyalty-inner">
              <div className="wsg-loyalty-text">
                <p className="wsg-section-label">Key System</p>
                <h2 className="wsg-section-title">Built to Retain.<br />Designed to Delight.</h2>
                <p className="wsg-body-text">
                  The loyalty engine is the heartbeat of the app. Two interconnected screens work together
                  to keep users motivated between purchases.
                </p>
                <ul className="wsg-loyalty-list">
                  {LOYALTY_FEATURES.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="wsg-loyalty-phones">
                <div className="wsg-loyalty-phone-wrap">
                  <Phone id="loyalty" className="wsg-phone--loyalty" loading="lazy" />
                  <span className="wsg-visual-caption">{sc('loyalty').label}</span>
                </div>
                <div className="wsg-loyalty-phone-wrap wsg-loyalty-phone-wrap--offset">
                  <Phone id="upgrade" className="wsg-phone--loyalty" loading="lazy" />
                  <span className="wsg-visual-caption">{sc('upgrade').label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────── */}
        <div className="wsg-results">
          <div className="container">
            <div className="wsg-results-inner">
              <div className="wsg-results-text">
                <p className="wsg-section-label">Final Result</p>
                <h2 className="wsg-results-title">A platform that did not exist — now does.</h2>
                <p className="wsg-body-text">
                  WSG went from zero digital presence to a fully shippable mobile platform complete
                  with a loyalty engine that drives retention from day one.
                </p>
              </div>
              <div className="wsg-results-stats">
                {RESULTS.map(r => (
                  <div key={r.label} className="wsg-result-item">
                    <span className="wsg-result-value">{r.value}</span>
                    <span className="wsg-result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
