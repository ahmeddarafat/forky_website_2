import './Results.css';
import { caseStudies } from '../../data/index.js';

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="container">

        <div className="section-header fade-up">
          <span className="tag">Real Results</span>
          <h2>Numbers that <span className="hl">don't lie.</span></h2>
          <p>Every engagement is measured against outcomes that matter — revenue, retention, and compounding growth.</p>
        </div>

        <div className="results-grid">
          {caseStudies.map(({ featured, industry, client, challenge, metrics }) => (
            <div
              key={client}
              className={`result-card fade-up${featured ? ' featured' : ''}`}
            >
              <div className="result-industry">{industry}</div>
              <h3 className="result-client">{client}</h3>
              <p className="result-challenge">{challenge}</p>
              <div className="result-metrics">
                {metrics.map(({ value, label }) => (
                  <div key={label}>
                    <div className="metric-val">{value}</div>
                    <div className="metric-lbl">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
