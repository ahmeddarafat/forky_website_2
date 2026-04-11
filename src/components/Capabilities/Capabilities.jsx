import './Capabilities.css';
import { capabilities } from '../../data/index.js';

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="container">

        <div className="section-header fade-up">
          <span className="tag">Capabilities</span>
          <h2>Everything you need. <span className="hl">One team.</span></h2>
          <p>From infrastructure to growth campaigns — our specialists cover every layer of your digital operation.</p>
        </div>

        <div className="cap-grid">
          {capabilities.map(({ icon, title, desc }) => (
            <div key={title} className="cap-item fade-up">
              <div className="cap-icon">{icon}</div>
              <div className="cap-text">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
