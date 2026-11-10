import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import { ArrowRightIcon } from '../components/icons';
import usePageMeta from '../components/usePageMeta';

export default function TermsPage() {
  usePageMeta('Terms of Service', 'Simple terms for Advior Automation builds: fixed scope, test before you pay, and you own the workflow.');
  return (
    <main>
      <div className="subnav" data-section="terms-nav">
        <SiteNav />
      </div>

      <section className="legal" data-section="terms">
        <div className="legal__inner">
          <Link to="/" className="legal__back">
            <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>
              <ArrowRightIcon className="w-4 h-4" />
            </span>
            Back to home
          </Link>
          <span className="eyebrow">Terms of Service</span>
          <h1>
            Simple terms, <span className="accent">on the page.</span>
          </h1>
          <p className="legal__updated">Last updated: February 2026 · Advior Automation, Nairobi, Kenya</p>

          <div className="legal__body">
            <div>
              <h2>1. What you are buying</h2>
              <p>
                Sprint (from $1,500 USD, one time; local currency is shown on
                the pricing page): a process audit and map, one workflow built
                end to end, up to three tool integrations, one AI step if it
                helps the process, human approval checkpoints, testing on your
                real data, and a written runbook. System (from $4,500 USD, one
                time): everything in Sprint plus up to five connected workflows,
                a custom AI agent or assistant, error handling and retry logic,
                a dashboard or daily digest, team training, and 90 days of
                support. The feature lists next to each price form the
                agreement — if it is not listed, it is not included.
              </p>
            </div>
            <div>
              <h2>2. Fixed scope and payment</h2>
              <p>
                We map and price the workflow before we build. You see the
                automation run on your own data in a test environment, request
                corrections, and pay only when you approve that test run. If it
                does not work as scoped, you do not pay for the build. Payment
                details are confirmed with you directly — this site takes no
                online payments.
              </p>
            </div>
            <div>
              <h2>3. Timeline</h2>
              <p>
                Sprint goes live within 2 working weeks of the audit; System
                typically runs 3 to 4 weeks. Timelines assume that access,
                sample data, and feedback arrive when agreed. If we miss a date
                for reasons on our side, you get 5% off for every extra working
                week. Delays caused by missing access or content from your side
                pause the clock until you respond.
              </p>
            </div>
            <div>
              <h2>4. Access and security</h2>
              <p>
                You provide the minimum credentials needed for the tools we
                connect. We store them in a managed secret store, use
                least-privilege access, and revoke or rotate them when the
                engagement ends. We can sign an NDA before the audit. You are
                responsible for the accuracy of the process information and
                sample data you provide, and for having the right to share it.
              </p>
            </div>
            <div>
              <h2>5. Ownership</h2>
              <p>
                On final payment you own the workflow configuration, the
                documentation, the runbook, and every login we created for you.
                We may show the finished automation in our portfolio unless you
                ask us not to. Third-party tools and model providers remain
                subject to their own terms.
              </p>
            </div>
            <div>
              <h2>6. Changes after launch</h2>
              <p>
                Sprint includes 30 days of fixes after launch; System includes
                90 days. A fix is something that should work under the agreed
                scope but does not. New steps, new tools, or changed business
                rules are quoted separately, always in writing before any work
                begins. Optional monitoring and support are available monthly
                and can be started or stopped anytime.
              </p>
            </div>
            <div>
              <h2>7. What we need from you</h2>
              <p>
                Accurate process details, timely access, sample data, and
                honest feedback during testing. You confirm that the data,
                documents, and credentials you share are yours to use. Content
                that is unlawful, deceptive, or infringes others’ rights will be
                refused, and we may decline or stop a project on those grounds
                with a refund of anything paid for work not delivered.
              </p>
            </div>
            <div>
              <h2>8. Warranties and liability</h2>
              <p>
                We build with care and fix our own mistakes within the support
                window, but we cannot promise a specific number of hours saved,
                customers, or revenue — nobody honest can. The workflow is
                provided “as is” after your approval. Our total liability for
                any project is limited to what you paid for that project.
                Nothing here limits rights you have under Kenyan consumer law.
              </p>
            </div>
            <div>
              <h2>9. Cancellations and refunds</h2>
              <p>
                Cancel before we start building and nothing is owed. Cancel
                mid-build and you owe nothing for the unfinished work, which
                stays with us. After you approve and pay, the delivered
                workflow and documentation are yours to keep; because the work
                is custom and time has been spent, refunds after approval are
                limited to fixing defects free under section 6.
              </p>
            </div>
            <div>
              <h2>10. Governing law</h2>
              <p>
                These terms are governed by the laws of Kenya. Any dispute will
                first be handled through good-faith discussion on WhatsApp,
                phone, or email — most issues are resolved within days that way.
              </p>
            </div>
            <div>
              <h2>11. Contact</h2>
              <p>
                Questions before you order? WhatsApp https://wa.me/254796305577,
                call +254 796 305577, or email hello@advior.top. We answer
                plainly — the same way everything else on this site is written.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
