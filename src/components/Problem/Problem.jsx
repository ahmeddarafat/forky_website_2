import './Problem.css';
import { problems } from '../../data/index.js';

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">

        <div className="split-header fade-up">
          <div className="split-header-left">
            <span className="tag">The Problem</span>
            <h2>Why most companies <span className="hl">plateau.</span></h2>
            <p>Growth stalls — not from lack of effort, but from systems that were never built to scale together.</p>
          </div>
          <a href="#method" className="btn-secondary">See Our Method →</a>
        </div>

        <ul className="problem-list">
          {problems.map(({ num, title, body }) => (
            <li key={num} className="problem-item fade-up">
              <span className="problem-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p
                  className="problem-body"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
