import { CONTACT, useLocale } from '../i18n/config';
import { WhatsAppIcon } from './icons';

export default function Pricing() {
  const { t, formatPrice } = useLocale();
  const plans = [
    {
      name: 'Sprint',
      price: formatPrice('sprint'),
      desc: 'One repetitive process, mapped, built, and running end to end.',
      per: 'fixed',
      features: [
        'Process audit & workflow map',
        'One automation, end to end',
        'Up to 3 tool integrations',
        'One AI step (extract, draft, classify)',
        'Human approval checkpoints',
        'Live in 2 working weeks',
        '30 days of fixes after launch',
      ],
      featured: false,
    },
    {
      name: 'System',
      price: formatPrice('system'),
      desc: 'A connected operating system across your team and tools.',
      per: 'fixed',
      features: [
        'Everything in Sprint',
        'Up to 5 connected workflows',
        'Custom AI agent or assistant',
        'CRM, inbox, docs & spreadsheet sync',
        'Error handling & retry logic',
        'Dashboard or daily digest',
        'Team training & written runbook',
        '90 days of support after launch',
      ],
      featured: true,
    },
  ];

  return (
    <section className="pricing" data-section="pricing" id="pricing">
      <div className="container">
        <h2 className="h2">
          Fixed scope. Fixed price. <span className="accent">No hourly meters.</span>
        </h2>
        <p className="pricing__sub">
          Priced before we build, and you pay only after the workflow runs on
          your own data. Every plan includes the process audit.
        </p>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-split${plan.featured ? ' price-split--featured' : ''}`}
            >
              <div className="price-side">
                <span className="price-side__plan">{plan.name}</span>
                <p className="price-side__desc">{plan.desc}</p>
                <div className="price-side__price">
                  <span className="price-side__amount">{plan.price}</span>
                  <span className="price-side__per">/{plan.per}</span>
                </div>
                <a
                  href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="price-side__btn"
                >
                  <span className="price-side__btn-icon">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  {t('talkWhatsappLower')}
                </a>
              </div>
              <ul className="price-list">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
