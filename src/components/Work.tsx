import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';
import { featuredProject } from '../data/projects';

export function MetricStats({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="work-feature__stats">
      {metrics.map((m) => (
        <div key={m.label} className="work-feature__stat">
          <b>{m.value}</b>
          <span className="work-feature__rule" aria-hidden="true" />
          <small>{m.label}</small>
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  const project = featuredProject;
  return (
    <section className="work" data-section="work" id="work">
      <div className="container">
        <div className="work__head">
          <div>
            <span className="eyebrow">Our Work</span>
          </div>
          <div className="work__head-right">
            <h2 className="h2">
              Selected <span className="accent">Builds</span>
            </h2>
            <p>Automations built to give teams their hours back.</p>
          </div>
        </div>

        <div className="work-feature">
          <div className="work-feature__metrics">
            <h3>{project.name}</h3>
            <p className="work-feature__tagline">{project.tagline}</p>
            <MetricStats metrics={project.metrics} />
            <div className="work-feature__more">
              <Link to="/work" className="link-arrow">
                See how we did it
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <div className="work-feature__img">
              <img
                className="work-photo"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
            <span className="work-feature__tag">
              {project.name}
            </span>
            </div>
            <div className="work-feature__tags">
              {project.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
