'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const selector = '.fade-up, .fade-left, .fade-right, .stagger, .sc-heading-reveal, .sc-card-reveal';
    document.querySelectorAll(selector).forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth anchor scroll
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
