import './Capabilities.css';
import { capabilities } from '../../data/index.js';

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="container">

        <div className="split-header fade-up">
          <div className="split-header-left">
            <span className="tag">Capabilities</span>
            <h2>Everything you need. <span className="hl">One team.</span></h2>
            <p>From infrastructure to growth campaigns — our specialists cover every layer of your digital operation.</p>
          </div>
          <a href="#cta" className="btn-secondary">All Capabilities →</a>
        </div>

        <div className="cap-grid">
          {capabilities.map(({ icon, title, desc }, index) => (
            <div key={title} className="cap-card fade-up">
              <div className="cap-card-top">
                <div className="cap-icon-wrap">{icon}</div>
                <span className="cap-num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4>{title}</h4>
              <p>{desc}</p>
              <div className="cap-card-line" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
