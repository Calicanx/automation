import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import { ArrowRightIcon } from '../components/icons';
import usePageMeta from '../components/usePageMeta';

export default function PrivacyPage() {
  usePageMeta('Privacy Policy', 'How Advior Automation handles client data, credentials, and AI processing.');
  return (
    <main>
      <div className="subnav" data-section="privacy-nav">
        <SiteNav />
      </div>

      <section className="legal" data-section="privacy">
        <div className="legal__inner">
          <Link to="/" className="legal__back">
            <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>
              <ArrowRightIcon className="w-4 h-4" />
            </span>
            Back to home
          </Link>
          <span className="eyebrow">Privacy Policy</span>
          <h1>
            Your data stays <span className="accent">yours.</span>
          </h1>
          <p className="legal__updated">Last updated: February 2026 · Advior Automation, Nairobi, Kenya</p>

          <div className="legal__body">
            <div>
              <h2>1. Who we are</h2>
              <p>
                Advior Automation (“we”, “us”) builds custom AI agents, LLM
                integrations, and workflow automation for growing companies.
                Contact: hello@advior.top, +254 796 305577, Nairobi, Kenya.
                This policy explains what personal and business data we handle
                when you visit automation.advior.top, book an audit, or hire us
                to build or support an automation.
              </p>
            </div>
            <div>
              <h2>2. What we collect</h2>
              <p>We collect only what the work needs:</p>
              <ul>
                <li>
                  Contact details you send us: name, company name, role, phone
                  number, and email address.
                </li>
                <li>
                  Process information: the steps, tools, owners, and volumes of
                  the workflow you want to automate.
                </li>
                <li>
                  Access credentials for the tools we connect, shared through a
                  secure channel and stored in a managed secret store — never in
                  this website or in plain email.
                </li>
                <li>
                  Test data or sample records needed to build and verify the
                  workflow. We ask for the minimum, and we prefer anonymised
                  copies where the process allows it.
                </li>
                <li>
                  Project messages on WhatsApp, phone, or email so we have a
                  record of what was agreed.
                </li>
                <li>
                  Basic, privacy-friendly visit counts for our own pages (no
                  advertising cookies, no cross-site tracking).
                </li>
              </ul>
              <p>
                This site has no accounts and takes no payment details online —
                payment arrangements are confirmed with you directly.
              </p>
            </div>
            <div>
              <h2>3. How we use it</h2>
              <p>Your details are used to:</p>
              <ul>
                <li>Reply to your enquiry and book the process audit.</li>
                <li>
                  Map, build, test, and document the workflow you asked for
                  within the agreed scope.
                </li>
                <li>
                  Train the person who will own the automation and provide the
                  support included in your plan.
                </li>
                <li>Improve our own pages based on anonymous visit counts.</li>
              </ul>
              <p>
                We never sell, rent, or share your details with advertisers.
                Your customer data is used only to build and test your
                automation — never to train a model for someone else.
              </p>
            </div>
            <div>
              <h2>4. Client data, AI providers, and models</h2>
              <p>
                Some workflows send text, documents, or messages to a model
                provider such as OpenAI or Anthropic. We use business API tiers
                where available, configure the provider not to train on your
                data where that option exists, and limit each request to the
                fields the workflow actually needs.
              </p>
              <p>
                You approve every data flow before we build it. We do not send
                sensitive categories of data to a model unless the process
                requires it and you have explicitly agreed. Test records are
                deleted within 30 days of launch unless you ask us to keep them
                for support.
              </p>
            </div>
            <div>
              <h2>5. Who else sees your data</h2>
              <p>
                Only the service providers strictly needed to deliver and run
                your project: the automation platform, the model provider, the
                hosting or infrastructure provider, and the tools you already
                use. Each receives the minimum necessary, under their own data
                processing terms. We can sign an NDA before the audit.
              </p>
            </div>
            <div>
              <h2>6. How long we keep it</h2>
              <p>
                Project messages and process documentation are kept for 12
                months after launch for support, then deleted on request at any
                time. Credentials are revoked or rotated when the engagement
                ends. Test data is deleted within 30 days of launch unless you
                ask us to retain it. Anonymous visit counts contain no personal
                data and are kept in aggregate only.
              </p>
            </div>
            <div>
              <h2>7. Your rights</h2>
              <p>
                Ask us anytime what data we hold about you and we will show
                you, correct it, or delete it — message us on WhatsApp or email
                hello@advior.top and we will sort it within 7 days. If you are
                in the EU or UK, you also have the right to object to
                processing and to lodge a complaint with your local authority.
              </p>
            </div>
            <div>
              <h2>8. Changes to this policy</h2>
              <p>
                If this policy changes, the new version is posted on this page
                with a new date. Continued use of the site after changes means
                you accept the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
