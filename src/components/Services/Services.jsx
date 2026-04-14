import './Services.css';
import { services } from '../../data/index.js';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">

        <div className="split-header sc-heading-reveal">
          <div className="split-header-left">
            <span className="tag">What We Do</span>
            <h2>Three pillars. <span className="hl">One partner.</span></h2>
            <p>Forky unifies software development, performance marketing, and brand strategy under a single roof — so everything compounds.</p>
          </div>
          <a href="#cta" className="btn-secondary">View All Services →</a>
        </div>

        <div className="services-cards">
          {services.map(({ title, desc, delay, iconSvg }) => (
            <div
              key={title}
              className="sc-card sc-card-reveal"
              style={{ transitionDelay: delay }}
            >
              <div className="sc-card-orb" />
              <div
                className="sc-icon"
                dangerouslySetInnerHTML={{ __html: iconSvg }}
              />
              <h3
                className="sc-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="sc-desc">{desc}</p>
              <a href="#cta" className="sc-learn">Learn more →</a>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}
