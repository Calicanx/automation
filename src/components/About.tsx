import { ArrowRightIcon } from './icons';
import { SITE_NAME, useLocale } from '../i18n/config';

export default function About() {
  const { t } = useLocale();
  return (
    <section className="about" data-section="about">
      <div className="container">
        <div className="about__head">
          <span className="eyebrow">About Our Company</span>
          <div className="about__head-right">
            <h2 className="h2">
              We build the systems that do the work,{' '}
              <span className="accent">not just track it</span>
            </h2>
            <p>
              {SITE_NAME} designs custom AI agents and workflow automations
              for growing teams. We connect the tools you already pay for,
              remove the manual handoffs, and leave your team with a system
              they can actually run.
            </p>
            <a href="#what-you-get" className="btn-learn">
              <span className="btn-icon">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
              {t('learnMore')}
            </a>
          </div>
        </div>

        <div className="about__cards">
          <div className="about-card about-card--dark about-card--photo">
            <img
              className="card-bg"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt=""
              loading="lazy"
            />
            <span className="card-shade" aria-hidden="true" />
            <h3>Fixed Scope</h3>
            <p>
              Your workflow is mapped and priced before we build. No hourly
              meters, no open-ended discovery, no invoice you did not agree to.
            </p>
          </div>
          <div className="about-card about-card--art about-card--photo">
            <img
              className="card-bg"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt=""
              loading="lazy"
            />
            <span className="card-shade" aria-hidden="true" />
            <h3>Built On Your Stack</h3>
            <p>
              We work inside your CRM, inbox, sheets, and documents. No new
              platform for your team to learn.
            </p>
          </div>
          <div className="about-card about-card--light">
            <h3>
              2-Week
              <br />
              Automation Sprint
            </h3>
            <p className="tagline">Audit. Build. Test. Live.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
