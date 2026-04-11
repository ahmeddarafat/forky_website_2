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
    'Where Software',
    'Meets <span class="hl">Smarter</span>',
    'Marketing',
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
  { icon: '✦', color: '#818CF8',       bg: 'rgba(99,102,241,.14)',  name: 'Nexus AI'   },
  { icon: '◈', color: '#FB923C',       bg: 'rgba(251,146,60,.14)',  name: 'Orbitly'    },
  { icon: '⬡', color: '#22C55E',       bg: 'rgba(34,197,94,.14)',   name: 'Greenfield' },
  { icon: '◇', color: 'var(--cyan)',   bg: 'rgba(0,212,255,.14)',   name: 'Stratos'    },
  { icon: '✧', color: '#EC4899',       bg: 'rgba(236,72,153,.14)',  name: 'PinkLane'   },
  { icon: '⬢', color: '#EAB308',       bg: 'rgba(234,179,8,.14)',   name: 'Goldmark'   },
  { icon: '❋', color: '#A855F7',       bg: 'rgba(168,85,247,.14)',  name: 'Vivlabs'    },
  { icon: '◆', color: '#EF4444',       bg: 'rgba(239,68,68,.14)',   name: 'RedShift'   },
];

// ─── Problems ────────────────────────────────────────────────
export const problems = [
  {
    num:   '01',
    title: 'Fragmented tech stacks slow everything down',
    body:  'Dozens of disconnected tools create data silos and costly integrations — teams spend more time managing software than <em>actually growing</em>.',
  },
  {
    num:   '02',
    title: 'Marketing without data is expensive guesswork',
    body:  'Without a proper feedback loop between campaigns and product performance, businesses <em>burn budget</em> on tactics that feel good but don\'t convert.',
  },
  {
    num:   '03',
    title: 'Generic agencies can\'t deliver real depth',
    body:  'Most agencies offer surface-level execution. They rarely understand both the technical architecture and <em>growth mechanics</em> needed for compounding results.',
  },
  {
    num:   '04',
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
export const capabilities = [
  { icon: '⚙️', title: 'Custom Software Development', desc: 'Scalable web & mobile apps on modern architecture — MVP to enterprise.'                         },
  { icon: '📊', title: 'Performance Marketing',        desc: 'ROI-driven paid media, SEO & growth campaigns across every high-value channel.'                 },
  { icon: '🤖', title: 'AI & Automation Systems',      desc: 'Intelligent workflow automation and AI integration to reduce overhead and unlock scale.'         },
  { icon: '🎨', title: 'Product Design & UX',          desc: 'Research-backed design systems and interfaces that convert and retain users.'                    },
  { icon: '🔗', title: 'Systems Integration',          desc: 'Connect your full tech stack — CRM, analytics, payments, communications, and more.'             },
  { icon: '📈', title: 'Data Analytics & BI',          desc: 'Custom dashboards and data pipelines for real-time, confident decision-making.'                 },
  { icon: '📧', title: 'Content & Email Marketing',    desc: 'Data-driven content strategy and lifecycle email programs that compound returns.'               },
  { icon: '☁️', title: 'Cloud Infrastructure',         desc: 'Scalable, secure and cost-optimized architecture on AWS, GCP, or Azure.'                       },
  { icon: '🛡️', title: 'Security & Compliance',        desc: 'End-to-end security audits, GDPR/CCPA compliance, and hardened deployment practices.'          },
];

// ─── CTA section ─────────────────────────────────────────────
export const cta = {
  tag:       "Let's Build Together",
  title:     'Ready to grow <span class="hl">without limits?</span>',
  sub:       'Join 200+ businesses that chose Forky to build smarter, scale faster, and market with precision. Your next chapter starts with one conversation.',
  primary:   { label: 'Schedule a Free Strategy Call →', href: 'mailto:hello@forky.io' },
  secondary: { label: 'Talk to an Expert',               href: 'tel:+10000000000' },
  trustItems: [
    'No commitment required',
    'Results within 30 days',
    'Dedicated expert team',
    'Full transparency',
  ],
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
