// =============================================================
//  FORKY — All static site data
//  Edit content here. Components read from this file only.
// =============================================================

// ─── Site-level ─────────────────────────────────────────────
export const site = {
  name:    'Forky',
  tagline: 'Software & marketing solutions for ambitious companies building the future.',
  email:   'hello@forky.io',
  phone:   'tel:+10000000000',
  year:    2026,
};

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Problem',  href: '#problem' },
  { label: 'Method',   href: '#method' },
  { label: 'Results',  href: '#results' },
  { label: 'Services', href: '#capabilities' },
];

export const mobileNavLinks = [
  { label: 'The Problem', href: '#problem' },
  { label: 'The Method',  href: '#method' },
  { label: 'Results',     href: '#results' },
  { label: 'Services',    href: '#capabilities' },
];

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  badge:    'Trusted by 200+ businesses worldwide',
  titleLines: [
    'Where Software Meets',
    'Smarter Marketing',
  ],
  sub: 'Forky builds cutting-edge digital products and data-driven marketing engines that compound. We turn ambitious vision into measurable, scalable growth.',
  ctaPrimary:   { label: 'Start Building →',    href: '#cta' },
  ctaSecondary: { label: 'See Real Results',     href: '#results' },
  stats: [
    { value: '200+', label: 'Projects delivered' },
    { value: '98%',  label: 'Client retention' },
    { value: '3.8×', label: 'Average ROI' },
  ],
  floatCards: [
    {
      pos: 1,
      label: 'Monthly Growth',
      value: '+147%',
      valueClass: 'green',
      sub: '↑ vs last month',
      subType: 'trend',
    },
    {
      pos: 2,
      label: 'Active Campaigns',
      value: '24',
      valueClass: 'cyan',
      sub: 'Across 8 channels',
      subType: 'sub',
    },
    {
      pos: 3,
      label: 'Conversion Rate',
      value: '8.4%',
      valueClass: '',
      sub: '↑ +2.1% this week',
      subType: 'trend',
    },
  ],
};

// ─── Services ────────────────────────────────────────────────
export const services = [
  {
    title: 'Digital Marketing',
    desc:  'We build data-driven marketing systems that attract, convert, and scale customers.',
    delay: '0.04s',
    iconSvg: `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4"  y="23" width="7" height="12" rx="2" fill="#00D4FF" opacity="0.5"/>
        <rect x="14" y="15" width="7" height="20" rx="2" fill="#00D4FF" opacity="0.72"/>
        <rect x="24" y="7"  width="7" height="28" rx="2" fill="#00D4FF"/>
        <path d="M33 5H39V11" stroke="#00FF9D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39 5L30 14" stroke="#00FF9D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
  },
  {
    title: 'Software Development',
    desc:  'We design and develop powerful digital platforms that power modern businesses.',
    delay: '0.17s',
    iconSvg: `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10L4 20L13 30"  stroke="#00D4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 10L36 20L27 30" stroke="#00D4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.5 7L16.5 33"    stroke="#00FF9D" stroke-width="1.6" stroke-linecap="round"/>
      </svg>`,
  },
  {
    title: 'Branding &amp; Identity',
    desc:  'We craft strategic brands that position companies to stand out and lead their markets.',
    delay: '0.30s',
    iconSvg: `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3L37 16L20 37L3 16Z" fill="rgba(0,212,255,0.07)" stroke="#00D4FF" stroke-width="1.6" stroke-linejoin="round"/>
        <line x1="3" y1="16" x2="37" y2="16" stroke="#00D4FF" stroke-width="1" opacity="0.38"/>
        <circle cx="20" cy="3"  r="2.5" fill="#00FF9D"/>
        <circle cx="20" cy="37" r="2"   fill="#00D4FF" opacity="0.55"/>
      </svg>`,
  },
];

// ─── Trust logos ─────────────────────────────────────────────
export const trustLogos = [
  {
    name: 'Vercel',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L23 21H1L12 2Z"/></svg>`,
  },
  {
    name: 'Stripe',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 4c-2.6 0-4.5 1.5-4.5 3.9 0 4 6.5 3 6.5 5.8 0 1.1-.9 1.7-2.3 1.7-1.6 0-3.2-.8-4.2-2l-1.8 2.1C7 17.1 9.1 18 11.7 18c3 0 5.2-1.5 5.2-4.1 0-3.9-6.5-2.9-6.5-5.7 0-.8.8-1.3 2.1-1.3 1.2 0 2.5.5 3.4 1.4L17.5 6.1C16.1 4.7 14.2 4 12 4z"/></svg>`,
  },
  {
    name: 'GitHub',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>`,
  },
  {
    name: 'Figma',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="8" height="8" rx="2" fill="white" opacity="0.65"/><rect x="12" y="2" width="8" height="8" rx="4" fill="white" opacity="0.9"/><rect x="4" y="10" width="8" height="8" rx="2" fill="white" opacity="0.8"/><rect x="4" y="18" width="8" height="4" rx="2" fill="white" opacity="0.5"/><circle cx="16" cy="14" r="4" fill="white"/></svg>`,
  },
  {
    name: 'Notion',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" fill="white" fill-opacity="0.1" stroke="white" stroke-width="1.5"/><path d="M7 7h1.5l5.5 7.5V9L15.5 7H17v10h-1.5L10 9.5V16L8.5 17H7V7z" fill="white"/></svg>`,
  },
  {
    name: 'Linear',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M3 14.5L14.5 3l6 6L9.5 20.5zM3 20.5h6.5V14z" opacity="0.9"/><path d="M20.5 9L15 3.5h5.5V9z"/></svg>`,
  },
  {
    name: 'Shopify',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 6C15.2 4.3 14 3 12 3c-1.8 0-3.2 1.2-3.8 3H6.5L5 21h14L17.5 6h-2zm-3.5-1c.8 0 1.4.5 1.7 1.5H9.8C10.2 5.5 11 5 12 5z" fill="white" opacity="0.9"/><line x1="12" y1="9" x2="12" y2="17" stroke="white" stroke-width="1.5" stroke-linecap="round"/><line x1="9" y1="13" x2="15" y2="13" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    name: 'Slack',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8.5" cy="5.5" r="2" fill="white"/><circle cx="8.5" cy="11.5" r="2" fill="white" opacity="0.7"/><circle cx="14.5" cy="11.5" r="2" fill="white"/><circle cx="14.5" cy="17.5" r="2" fill="white" opacity="0.7"/><circle cx="5.5" cy="8.5" r="2" fill="white" opacity="0.7"/><circle cx="11.5" cy="8.5" r="2" fill="white"/><circle cx="11.5" cy="14.5" r="2" fill="white" opacity="0.75"/><circle cx="17.5" cy="14.5" r="2" fill="white"/></svg>`,
  },
];

// ─── Problems ────────────────────────────────────────────────
export const problems = [
  {
    num:   '01',
    icon:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.4"/><rect x="12.5" y="1.5" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.4"/><rect x="1.5" y="12.5" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.4"/><rect x="12.5" y="12.5" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.4" opacity="0.35"/><line x1="9.5" y1="5.5" x2="12.5" y2="5.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="1.5 1.5" stroke-linecap="round" opacity="0.5"/><line x1="5.5" y1="9.5" x2="5.5" y2="12.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="1.5 1.5" stroke-linecap="round" opacity="0.5"/></svg>`,
    title: 'Fragmented tech stacks slow everything down',
    body:  'Disconnected tools create data silos and costly integrations — teams spend more time managing software than <em>actually growing</em>.',
  },
  {
    num:   '02',
    icon:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 16L8 10L12 13L17 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/><path d="M14 15L17 18M17 15L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="2" y1="19.5" x2="20" y2="19.5" stroke="currentColor" stroke-width="1" opacity="0.3" stroke-linecap="round"/><circle cx="17" cy="7" r="2.5" stroke="currentColor" stroke-width="1.3" opacity="0.5"/></svg>`,
    title: 'Marketing without data is expensive guesswork',
    body:  'Without a proper feedback loop, businesses <em>burn budget</em> on tactics that feel good but never convert into real, measurable growth.',
  },
  {
    num:   '03',
    icon:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="9" stroke="currentColor" stroke-width="1.4"/><circle cx="11" cy="11" r="5" stroke="currentColor" stroke-width="1.2" opacity="0.45"/><circle cx="11" cy="11" r="1.5" fill="currentColor" opacity="0.25"/><line x1="16.2" y1="5.8" x2="18" y2="4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/><path d="M17 4L19 4M19 4L19 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    title: 'Generic agencies can\'t deliver real depth',
    body:  'Most agencies offer surface-level execution. They rarely understand both technical architecture and the <em>growth mechanics</em> needed to compound.',
  },
  {
    num:   '04',
    icon:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2L20.5 19.5H1.5L11 2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><line x1="11" y1="8.5" x2="11" y2="13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="11" cy="16.5" r="1.1" fill="currentColor"/></svg>`,
    title: 'Scaling chaos without an underlying system',
    body:  'Growth without operational systems leads to inconsistent quality, missed deadlines, and <em>unsustainable momentum</em> that collapses under its own weight.',
  },
];

// ─── Method steps ────────────────────────────────────────────
export const methodSteps = [
  {
    num:   1,
    emoji: '🔍',
    title: 'Discover',
    desc:  'Deep audit of your stack, market, and competitive landscape. We map data before touching code.',
  },
  {
    num:   2,
    emoji: '🏗️',
    title: 'Architect',
    desc:  'We design your full system — product, automation, and growth stack — as one cohesive blueprint.',
  },
  {
    num:   3,
    emoji: '⚡',
    title: 'Execute',
    desc:  'Cross-functional teams build, launch, and iterate in fast cycles — without sacrificing quality.',
  },
  {
    num:   4,
    emoji: '📈',
    title: 'Optimize',
    desc:  'Continuous improvement loops driven by real metrics. We don\'t stop at launch — we compound your growth.',
  },
];

// ─── Case studies ────────────────────────────────────────────
export const caseStudies = [
  {
    featured:   true,
    industry:   'E-Commerce · SaaS',
    client:     'ScaleCart — B2B Commerce Platform',
    challenge:  'Legacy monolith was costing 40+ hours/week in maintenance and blocking feature velocity. We rebuilt their core and integrated a performance marketing engine.',
    metrics: [
      { value: '4.2×', label: 'Revenue growth in 9 months' },
      { value: '68%',  label: 'Reduction in infra costs'   },
      { value: '11ms', label: 'Avg API response time'      },
      { value: '92%',  label: 'Customer satisfaction'      },
    ],
  },
  {
    featured:   false,
    industry:   'HealthTech',
    client:     'Medify — Patient Engagement App',
    challenge:  'Low app retention was destroying their SaaS metrics. We redesigned the product loop and launched a multi-channel re-engagement system from scratch.',
    metrics: [
      { value: '+218%', label: '30-day retention lift' },
      { value: '3.1×',  label: 'User LTV increase'     },
      { value: '64K',   label: 'Monthly active users'  },
      { value: '1.4s',  label: 'App load (was 6.2s)'   },
    ],
  },
  {
    featured:   false,
    industry:   'Fintech · Growth',
    client:     'Vaultio — Crypto Savings Platform',
    challenge:  'Poor paid acquisition at 2.3% conversion. We restructured their funnel architecture and ran systematic A/B tests across every touchpoint.',
    metrics: [
      { value: '9.7%',  label: 'New conversion rate'      },
      { value: '−51%',  label: 'Cost per acquisition'     },
      { value: '$2.4M', label: 'Additional ARR pipeline'  },
      { value: '6 wks', label: 'Time to first results'    },
    ],
  },
];

// ─── Capabilities ────────────────────────────────────────────
export const capabilityTabs = [
  {
    id:       'build',
    label:    'Build',
    subtitle: 'World-class engineering, shipped fast',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4L1 9L5 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 4L17 9L13 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 2L7 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    items: [
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7L2 16L8 25" stroke="#00D4FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 7L30 16L24 25" stroke="#00D4FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 4L13 28" stroke="#00FF9D" stroke-width="1.6" stroke-linecap="round"/></svg>`,
        title:  'Custom Software',
        desc:   'Scalable apps, zero compromise.',
        detail: 'React, Next.js, Node, and beyond — from MVP to enterprise-grade.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="9" width="22" height="16" rx="2.5" stroke="#00D4FF" stroke-width="1.5"/><path d="M5 14h22" stroke="#00D4FF" stroke-width="1.2" stroke-opacity="0.4"/><circle cx="23" cy="11.5" r="1.5" fill="#00FF9D"/><path d="M10 19h6M10 22h4" stroke="#00D4FF" stroke-width="1.3" stroke-linecap="round" stroke-opacity="0.55"/><path d="M12 9V6M20 9V6" stroke="#00D4FF" stroke-width="1.4" stroke-linecap="round" stroke-opacity="0.35"/></svg>`,
        title:  'Product Design',
        desc:   'Interfaces that convert and retain.',
        detail: 'Research-backed design systems built for clarity, speed, and trust.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="16" r="3.5" stroke="#00D4FF" stroke-width="1.5"/><circle cx="26" cy="8" r="3.5" stroke="#00D4FF" stroke-width="1.5"/><circle cx="26" cy="24" r="3.5" stroke="#00D4FF" stroke-width="1.5"/><path d="M9.5 16H14M14 16L22.5 9.5M14 16L22.5 22.5" stroke="#00FF9D" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        title:  'Systems Integration',
        desc:   'One stack, fully connected.',
        detail: 'CRM, analytics, payments, and comms — unified without friction.',
      },
    ],
  },
  {
    id:       'grow',
    label:    'Grow',
    subtitle: 'Precision-engineered growth, at scale',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13L7 8L11 11L16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5H16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    items: [
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="19" width="6" height="9" rx="1.5" fill="#00D4FF" fill-opacity="0.35"/><rect x="13" y="13" width="6" height="15" rx="1.5" fill="#00D4FF" fill-opacity="0.6"/><rect x="22" y="7" width="6" height="21" rx="1.5" fill="#00D4FF"/><path d="M26 5H30V9" stroke="#00FF9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 5L22 13" stroke="#00FF9D" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        title:  'Performance Marketing',
        desc:   'ROI-driven campaigns that compound.',
        detail: 'Paid media, SEO, and multi-channel systems built to scale.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="24" height="17" rx="2.5" stroke="#00D4FF" stroke-width="1.5"/><path d="M4 14L16 20L28 14" stroke="#00D4FF" stroke-width="1.5"/><circle cx="25" cy="9" r="4" fill="#00FF9D" fill-opacity="0.9"/><path d="M23.5 9H26.5M25 7.5V10.5" stroke="#040D1A" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        title:  'Content & Email',
        desc:   'Compound content that converts.',
        detail: 'Data-driven content strategy and lifecycle email programs.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24L10 16L14 20L20 12L25 17L28 10" stroke="#00D4FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="10" r="2.5" fill="#00FF9D"/><line x1="4" y1="27" x2="28" y2="27" stroke="#00D4FF" stroke-width="1" stroke-opacity="0.3"/></svg>`,
        title:  'Data & Analytics',
        desc:   'Real-time decision intelligence.',
        detail: 'Custom dashboards and BI pipelines for confident, fast decisions.',
      },
    ],
  },
  {
    id:       'automate',
    label:    'Automate',
    subtitle: 'Intelligence wired into every workflow',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M9 2V4M9 14V16M2 9H4M14 9H16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M4.1 4.1L5.5 5.5M12.5 12.5L13.9 13.9M4.1 13.9L5.5 12.5M12.5 5.5L13.9 4.1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    items: [
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="6" stroke="#00D4FF" stroke-width="1.5"/><path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="#00D4FF" stroke-width="1.5" stroke-linecap="round"/><path d="M7.8 7.8L10.6 10.6M21.4 21.4L24.2 24.2M7.8 24.2L10.6 21.4M21.4 10.6L24.2 7.8" stroke="#00FF9D" stroke-width="1.4" stroke-linecap="round"/><circle cx="16" cy="16" r="2" fill="#00D4FF"/></svg>`,
        title:  'AI Integration',
        desc:   'Smarter workflows, instantly.',
        detail: 'LLM pipelines, intelligent automation, and AI-native product features.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="9" height="9" rx="2" stroke="#00D4FF" stroke-width="1.5"/><rect x="18" y="5" width="9" height="9" rx="2" stroke="#00D4FF" stroke-width="1.5"/><rect x="5" y="18" width="9" height="9" rx="2" stroke="#00D4FF" stroke-width="1.5"/><rect x="18" y="18" width="9" height="9" rx="2" stroke="#00FF9D" stroke-width="1.5"/><path d="M14 9.5H18M14 22.5H18M9.5 14V18M22.5 14V18" stroke="#00D4FF" stroke-width="1.2" stroke-linecap="round"/></svg>`,
        title:  'Workflow Automation',
        desc:   'Eliminate operational overhead.',
        detail: 'Automated pipelines, smart triggers, and zero-friction processes.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 21.5C4 21.5 3 20 3 18.5C3 17 4 16 6 16C6 13 8.5 10.5 11.5 10.5C13 10.5 14.3 11.1 15.2 12.1C15.8 11.7 16.6 11.4 17.5 11.4C19.7 11.4 21.5 13.2 21.5 15.4V16H23C24.7 16 26 17.3 26 19C26 20.7 24.7 22 23 22" stroke="#00D4FF" stroke-width="1.5" stroke-linecap="round"/><path d="M13 27V20M11 23.5L13 20L15 23.5" stroke="#00FF9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 26V21M18 24L20 21L22 24" stroke="#00D4FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/></svg>`,
        title:  'AI Data Pipelines',
        desc:   'Insight, automated and instant.',
        detail: 'Automated reporting, anomaly detection, and predictive intelligence.',
      },
    ],
  },
  {
    id:       'scale',
    label:    'Scale',
    subtitle: 'Infrastructure built to grow without limits',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7.5" width="14" height="4" rx="1.5" stroke="currentColor" stroke-width="1.3"/><rect x="2" y="13" width="14" height="3.5" rx="1.5" stroke="currentColor" stroke-width="1.3"/><circle cx="14" cy="9.5" r="1" fill="currentColor"/><circle cx="14" cy="14.75" r="1" fill="currentColor" opacity="0.5"/><path d="M9 2.5L12 5.5H6L9 2.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    items: [
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22C4 22 3 20.5 3 19C3 17.5 4 16.5 6 16.5C6 13.2 8.8 10.5 12 10.5C13.6 10.5 15 11.1 16 12.1C16.7 11.7 17.6 11.5 18.5 11.5C21 11.5 23 13.5 23 16V16.7H24.5C26.4 16.7 28 18.3 28 20.2C28 22.1 26.4 23.7 24.5 23.7" stroke="#00D4FF" stroke-width="1.5" stroke-linecap="round"/><path d="M14 28V21M11.5 24.5L14 21L16.5 24.5" stroke="#00FF9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 27V22M18 25L20 22L22 25" stroke="#00D4FF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/></svg>`,
        title:  'Cloud Infrastructure',
        desc:   'Scalable, secure, and lean.',
        detail: 'AWS, GCP, Azure — architected for performance and cost.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L28 9V17C28 22.5 22.7 27.4 16 29C9.3 27.4 4 22.5 4 17V9L16 4Z" stroke="#00D4FF" stroke-width="1.5" stroke-linejoin="round"/><path d="M11 16L14.5 19.5L21 13" stroke="#00FF9D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title:  'Security & Compliance',
        desc:   'Hardened by default.',
        detail: 'GDPR/CCPA, security audits, and hardened deployment at every layer.',
      },
      {
        icon:   `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="24" height="5.5" rx="2" stroke="#00D4FF" stroke-width="1.5"/><rect x="4" y="17" width="24" height="5.5" rx="2" stroke="#00D4FF" stroke-width="1.5" opacity="0.55"/><circle cx="26" cy="12.75" r="1.75" fill="#00FF9D"/><circle cx="26" cy="19.75" r="1.75" fill="#00D4FF" opacity="0.45"/><path d="M8 12.75H20M8 19.75H17" stroke="#00D4FF" stroke-width="1.2" stroke-linecap="round" opacity="0.35"/></svg>`,
        title:  'DevOps & Delivery',
        desc:   'Ship fast, break nothing.',
        detail: 'CI/CD pipelines, zero-downtime deploys, and full observability.',
      },
    ],
  },
];

// ─── CTA section ─────────────────────────────────────────────
export const cta = {
  tag:       'Ready to Scale?',
  title:     'Turn Your Vision Into a <span class="hl">Growth Machine.</span>',
  sub:       'Strategy, software, and marketing — unified under one team. Built to scale, measured in real results.',
  primary:   { label: 'Start My Project →', href: 'mailto:hello@forky.io' },
  secondary: { label: 'Or talk to an expert first', href: 'tel:+10000000000' },
};

// ─── Footer ──────────────────────────────────────────────────
export const footerSocials = [
  { label: '𝕏',  title: 'X / Twitter', href: '#' },
  { label: 'in', title: 'LinkedIn',    href: '#' },
  { label: '⌥',  title: 'GitHub',     href: '#' },
  { label: '▶',  title: 'YouTube',    href: '#' },
];

export const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Software Development',   href: '#' },
      { label: 'Performance Marketing',  href: '#' },
      { label: 'AI & Automation',        href: '#' },
      { label: 'Product Design',         href: '#' },
      { label: 'Data Analytics',         href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Forky',  href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Our Method',   href: '#' },
      { label: 'Careers',      href: '#' },
      { label: 'Blog',         href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@forky.io',   href: 'mailto:hello@forky.io' },
      { label: 'Schedule a Call',  href: '#' },
      { label: 'Support Center',   href: '#' },
      { label: 'Privacy Policy',   href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];
