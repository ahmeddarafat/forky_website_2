import { useEffect } from 'react';
import Nav          from './components/Nav/Nav.jsx';
import Hero         from './components/Hero/Hero.jsx';
import Services     from './components/Services/Services.jsx';
import Trust        from './components/Trust/Trust.jsx';
import Problem      from './components/Problem/Problem.jsx';
import Method       from './components/Method/Method.jsx';
import Results      from './components/Results/Results.jsx';
import Capabilities from './components/Capabilities/Capabilities.jsx';
import CTA          from './components/CTA/CTA.jsx';
import Footer       from './components/Footer/Footer.jsx';

export default function App() {
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

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Trust />
      <Problem />
      <Method />
      <Results />
      <Capabilities />
      <CTA />
      <Footer />
    </>
  );
}
