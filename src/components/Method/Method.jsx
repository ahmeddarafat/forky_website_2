import './Method.css';
import { methodSteps } from '../../data/index.js';

export default function Method() {
  return (
    <section className="method" id="method">
      <div className="container">

        <div className="split-header fade-up">
          <div className="split-header-left">
            <span className="tag">Our Method</span>
            <h2>A system built to <span className="hl">compound.</span></h2>
            <p>Four disciplined phases that move you from scattered to scalable — without disruption.</p>
          </div>
          <a href="#results" className="btn-secondary">See Results →</a>
        </div>

        <div className="method-flow">
          {methodSteps.map(({ num, emoji, title, desc }) => (
            <div key={num} className="method-step fade-up">
              <div className="method-dot-wrap">
                <div className="method-dot">{emoji}</div>
                <div className="method-step-num">0{num}</div>
              </div>
              <h3 className="method-title">{title}</h3>
              <p className="method-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
