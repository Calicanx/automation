import { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';
import { useLocale } from '../i18n/config';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { formatPrice } = useLocale();
  const sprint = formatPrice('sprint');
  const system = formatPrice('system');

  const faqs = [
    {
      q: 'Will this replace my team?',
      a: 'No. It removes the copy-paste, the re-typing, and the status chasing. Your team keeps the judgement calls and the customer relationship; the automation handles the steps nobody enjoys.',
    },
    {
      q: 'What does the Sprint include?',
      a: `A process audit, one workflow built end to end, up to three tool connections, one AI step if it helps, human approval checks, testing on your real data, and a written runbook. ${sprint}, fixed, with no hourly billing.`,
    },
    {
      q: 'Which tools do you work with?',
      a: 'n8n, Make, Zapier, OpenAI, Anthropic, Google Workspace, Microsoft 365, HubSpot, Salesforce, Airtable, Notion, Slack, WhatsApp, Xero, QuickBooks, and most tools with an API. If it has an API, we can usually connect it.',
    },
    {
      q: 'Do I need a technical team to run it?',
      a: 'No. We build the workflow, document it in plain English, and train the person who owns it. The runbook covers what to do when something needs changing, and the first 30 days of fixes are included.',
    },
    {
      q: 'How do you keep our data safe?',
      a: 'We use least-privilege access, keep credentials in a managed secret store, and avoid sending sensitive data to models unless the workflow requires it. You approve every data flow before we build, and we can sign an NDA before the audit.',
    },
    {
      q: 'What happens if a workflow breaks?',
      a: 'Every build includes error handling, retries, and an alert to a human. Sprint includes 30 days of fixes; System includes 90 days. After that, monitoring and support are available monthly.',
    },
    {
      q: 'How fast will we see results?',
      a: `The Sprint goes live in 2 working weeks from the audit, provided access is ready. Most teams see the time saving in the first week because the work is measurable: hours per task, before and after. The System plan is ${system} and typically runs 3 to 4 weeks.`,
    },
  ];

  return (
    <section className="faq" data-section="faq" id="faq">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">
          Straight Answers to Common <span className="accent">Questions</span>
        </h2>
        <p className="faq__sub">Everything you need to know before we audit a process.</p>

        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
              >
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  {isOpen ? (
                    <MinusIcon className="icon" />
                  ) : (
                    <PlusIcon className="icon" />
                  )}
                </button>
                {isOpen && <p className="faq__a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
