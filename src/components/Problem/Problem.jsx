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

        <div className="prob-stack">
          {problems.map(({ num, icon, title, body }, i) => (
            <div
              key={num}
              className="prob-card fade-up"
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              {/* Large ghost number — background decoration */}
              <span className="prob-ghost" aria-hidden="true">{num}</span>

              {/* Icon column with vertical connector */}
              <div className="prob-icon-col" aria-hidden="true">
                <div
                  className="prob-icon-wrap"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
                {i < problems.length - 1 && (
                  <div className="prob-vline" />
                )}
              </div>

              {/* Content */}
              <div className="prob-content">
                <span className="prob-num">{num}</span>
                <h3 className="prob-title">{title}</h3>
                <p
                  className="prob-body"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
