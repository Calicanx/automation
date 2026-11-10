import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { ArrowRightIcon } from '../components/icons';
import { MetricStats } from '../components/Work';
import { CONTACT } from '../i18n/config';
import { projects } from '../data/projects';
import usePageMeta from '../components/usePageMeta';

export default function ProjectsPage() {
  usePageMeta(
    'Selected Projects',
    'Automation case studies from Advior — lead routing, document processing, and AI support workflows, each live in weeks.',
  );
  return (
    <main>
      <div className="subnav" data-section="projects-nav">
        <SiteNav />
      </div>

      <section className="proj-page" data-section="projects">
        <div className="container">
          <div className="proj-page__head">
            <span className="eyebrow">Our Work</span>
            <h1>
              Systems that give <span className="accent">hours back.</span>
            </h1>
            <p>
              Every project below started with a process audit and went live in
              weeks, not quarters. The team paid only after the workflow ran on
              real data.
            </p>
          </div>

          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`proj-row${i % 2 === 1 ? ' proj-row--flip' : ''}`}
              data-project={project.slug}
            >
              <div className="work-feature__metrics">
                <h3>{project.name}</h3>
                <p className="work-feature__tagline">{project.description}</p>
                <MetricStats metrics={project.metrics} />
                <div className="work-feature__more">
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    Get results like this
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="proj-row__media">
                <div className="proj-row__img">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="work-feature__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/" className="link-arrow">
              Back to home
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
