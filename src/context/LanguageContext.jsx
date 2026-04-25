'use client';

import { createContext, useContext } from 'react';

const en = {
  footer: {
    tagline: 'Software & marketing solutions for ambitious companies building the future.',
    cols: [
      {
        title: 'Company',
        links: [
          { label: 'About',   href: '/about' },
          { label: 'Work',    href: '/work' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Software Development', href: '#' },
          { label: 'Digital Marketing',    href: '#' },
          { label: 'Brand Strategy',       href: '#' },
        ],
      },
    ],
    allRights: 'All rights reserved.',
    allSystems: 'All systems operational',
  },

  about: {
    heroTag:   'About Forky',
    heroTitle: 'We Build <span class="hl">Compounding</span> Systems',
    heroSub:   'A team of engineers, marketers, and strategists obsessed with building systems that grow over time.',
    heroCta1:  'See Our Work',
    heroCta2:  'Get in Touch',

    visionLabel: 'Vision',
    visionTitle: 'A world where technology compounds value.',
    visionDesc:  'We believe every ambitious company deserves infrastructure that grows smarter over time — not just tools that keep the lights on.',

    missionLabel: 'Mission',
    missionTitle: 'Engineer growth, not just deliverables.',
    missionDesc:  'We build integrated systems where software, data, and marketing operate as one compounding engine — delivering measurable ROI at every layer.',

    identityTag:   'Who We Are',
    identityTitle: 'Not an agency. <span class="hl">A growth partner.</span>',
    identityBody1: 'Forky was built out of frustration with agencies that over-promise and under-deliver. We are a lean team of builders who care deeply about outcomes.',
    identityBody2: 'We embed with your team, learn your goals, and engineer systems designed to compound in value over months and years.',

    pillars: [
      { title: 'Outcome-Driven',     desc: 'Every engagement is tied to measurable business outcomes — not vanity metrics.' },
      { title: 'Integrated Systems', desc: 'Software, data, and marketing working as one compounding engine.' },
      { title: 'Long-Term Focus',    desc: 'We build for durability, not quick wins. Systems that grow smarter over time.' },
    ],

    problemTag:  'The Problem',
    problemLead: 'Most agencies are built to ship deliverables, not drive growth. The result?',
    problems: [
      'Software that lives in isolation from marketing',
      'Campaigns that don\'t leverage product data',
      'Disconnected tools with no unified strategy',
      'Teams that vanish after the project ends',
    ],

    approachTag:   'Our Approach',
    approachTitle: 'A <span class="hl">systems-first</span> methodology.',
    approach: [
      { num: '01', title: 'Diagnose',  desc: 'We map your current growth levers, identify friction points, and define what compounding success looks like for your business.' },
      { num: '02', title: 'Architect', desc: 'We design an integrated system — software, data pipelines, and marketing infrastructure — built to compound.' },
      { num: '03', title: 'Execute',   desc: 'Our team ships fast, iterates faster, and maintains relentless focus on the metrics that matter.' },
      { num: '04', title: 'Compound',  desc: 'With every cycle, the system learns, optimizes, and delivers increasing returns on your investment.' },
    ],

    servicesTag:   'What We Do',
    servicesTitle: 'Four pillars of <span class="hl">compounding growth.</span>',
    servicesSub:   'Each service is engineered to integrate with the others — creating a unified system that grows smarter over time.',
    services: [
      { title: 'Digital Marketing',    desc: 'Data-driven campaigns that attract, convert, and retain customers at scale.' },
      { title: 'Software Development', desc: 'Custom software built to integrate with your marketing and data infrastructure.' },
      { title: 'Systems Architecture', desc: 'Unified growth infrastructure where every layer compounds on the last.' },
      { title: 'Analytics & Insights', desc: 'Real-time dashboards and attribution models that turn data into decisions.' },
    ],

    whyTag:   'Why Forky',
    whyTitle: 'Built different. <span class="hl">Proven different.</span>',
    whySub:   'We measure our success by the growth we create for our clients — nothing else.',
    why: [
      { title: 'Speed Without Sacrifice', desc: 'We ship fast without compromising quality, using proven systems refined over hundreds of projects.' },
      { title: 'Radical Transparency',   desc: 'No black boxes. You see exactly what we\'re building, why, and how it\'s performing.' },
      { title: 'Secure by Design',       desc: 'Security-first engineering practices baked into every system we build.' },
      { title: 'Proven Results',         desc: '200+ projects delivered. 98% client retention. 3.8× average ROI. The numbers speak.' },
    ],

    ctaTag:   'Ready to Scale?',
    ctaTitle: 'Start building your <span class="hl">growth machine.</span>',
    ctaSub:   'Join 200+ ambitious companies that have chosen Forky to engineer their compounding growth systems.',
    ctaBtn1:  'Get Started Today',
    ctaBtn2:  'View Our Work',
  },

  contact: {
    heroTag:   'Get in Touch',
    heroTitle: 'Let\'s Build Something <span class="hl">That Compounds.</span>',
    heroSub:   'Tell us about your goals. We\'ll architect a system designed to grow your business over time.',

    trustItems: [
      { title: 'Fast Response',   desc: 'We respond to every inquiry within 24 hours.' },
      { title: 'No Commitment',   desc: 'Your first consultation is free with zero obligation.' },
      { title: 'Clear Proposals', desc: 'Plain-English proposals with transparent pricing.' },
    ],

    emailLabel:    'Email',
    whatsappLabel: 'WhatsApp',
    locationLabel: 'Location',
    locationValue: 'Remote — Worldwide',

    formPretitle: 'Send us a message',
    formTitle:    'Start the conversation',

    fullName:    'Full Name',
    emailAddr:   'Email Address',
    company:     'Company',
    optional:    'optional',
    projectType: 'Project Type',
    projectTypes: [
      'Software Development',
      'Digital Marketing',
      'Brand Strategy',
      'Systems Architecture',
      'Other',
    ],
    message: 'Tell us about your project',
    sending: 'Sending…',
    submit:  'Send Message',
    note:    'We\'ll never share your details. Expect a reply within 24 hours.',

    successTitle: 'Message Received!',
    successDesc:  'Thank you for reaching out. Our team will be in touch within 24 hours.',
    successReset: 'Send another message',

    finalLabel: 'Prefer to chat?',
    finalTitle: 'Reach us on <span class="hl">WhatsApp.</span>',
    finalSub:   'Sometimes a quick conversation is all it takes. Tap below to connect with our team directly.',
    finalBtn:   'Chat on WhatsApp',
  },

  work: {
    tag:       'Our Work',
    heroTitle: 'Systems That <span class="hl">Deliver.</span>',
    heroDesc:  'A curated look at the products, platforms, and campaigns we\'ve engineered for ambitious companies.',

    filters: [
      { id: 'software', label: 'Software' },
      { id: 'branding', label: 'Branding' },
    ],

    projects: {
      software: [
        { tag: 'E-Commerce · UX',    title: 'WSG Storefront',   desc: 'A full-stack e-commerce platform engineered for conversion — built with Next.js, real-time inventory, and a zero-friction checkout.' },
        { tag: 'SaaS · Dashboard',   title: 'Analytics Engine', desc: 'A real-time SaaS analytics dashboard processing millions of events with sub-second latency and custom attribution models.' },
        { tag: 'Web · Performance',  title: 'Marketing Hub',    desc: 'A high-conversion marketing site with integrated A/B testing, CMS, and performance scores consistently above 95.' },
        { tag: 'Mobile · App',       title: 'Growth App',       desc: 'A mobile application designed to drive daily engagement, featuring personalized content feeds and push notification funnels.' },
        { tag: 'Data · Automation',  title: 'Pipeline System',  desc: 'An end-to-end data pipeline automating lead scoring, segmentation, and multi-channel campaign triggers.' },
        { tag: 'Web · CMS',          title: 'Content Platform', desc: 'A headless CMS-powered content platform delivering personalized experiences across web, email, and social.' },
      ],
      branding: [
        { tag: 'Brand · Identity', title: 'Teal Ventures', desc: 'A full brand identity system for a tech-forward VC firm — logo, typography, motion guidelines, and investor deck templates.' },
        { tag: 'Brand · Strategy', title: 'Velour Co.',    desc: 'A luxury lifestyle brand refresh with refined visual language, packaging system, and social media kit.' },
        { tag: 'Brand · Identity', title: 'Nexus Studio',  desc: 'A bold visual identity for a creative studio — including a custom wordmark, color system, and brand book.' },
        { tag: 'Brand · Motion',   title: 'Orbit Labs',    desc: 'A kinetic brand identity with animated logo variants, motion principles, and an interactive style guide.' },
        { tag: 'Brand · System',   title: 'Greenfield',    desc: 'A sustainable brand system for a B2B SaaS company — including messaging framework, iconography, and web guidelines.' },
        { tag: 'Brand · Identity', title: 'Cipher Agency', desc: 'A dark, technical brand identity for a cybersecurity firm — balancing authority with approachability.' },
      ],
    },
  },
};

const LanguageContext = createContext({ data: en });

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ data: en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
