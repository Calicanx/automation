import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import { ArrowRightIcon } from '../components/icons';
import usePageMeta from '../components/usePageMeta';

export default function NotFoundPage() {
  usePageMeta();
  return (
    <main>
      <div className="subnav" data-section="not-found-nav">
        <SiteNav />
      </div>

      <section className="legal" data-section="not-found">
        <div className="legal__inner">
          <Link to="/" className="legal__back">
            <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>
              <ArrowRightIcon className="w-4 h-4" />
            </span>
            Back to home
          </Link>
          <span className="eyebrow">404</span>
          <h1>
            That page <span className="accent">does not exist.</span>
          </h1>
          <p className="legal__updated">The link may be old or mistyped.</p>
          <div className="legal__body">
            <div>
              <h2>Where to go instead</h2>
              <p>
                <Link to="/">Home</Link> — what we build and how we work.
              </p>
              <p>
                <Link to="/work">Selected projects</Link> — automation case studies.
              </p>
              <p>
                <Link to="/blog">Blog</Link> — plain guides on AI agents and workflow automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
