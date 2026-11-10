import { ArrowUpRightIcon } from './icons';

const types = [
  'Sales & Lead Generation',
  'Ecommerce Operations',
  'Customer Support',
  'Finance & Accounting',
  'Recruiting Agencies',
  'Logistics & Dispatch',
  'Professional Services',
  'Healthcare Clinics',
  'Real Estate Teams',
  'SaaS Startups',
  'Manufacturing Ops',
  'Education & Training',
];

export default function WhoFor() {
  return (
    <section className="who" data-section="who-for">
      <div className="container">
        <span className="eyebrow">Who This Is For</span>
        <h2 className="h2">
          Built for teams <span className="accent">like yours</span>
        </h2>
        <p className="who__sub">Built for teams that have outgrown manual work.</p>

        <div className="who__grid">
          {types.map((t, i) => (
            <div className="who__item" key={t}>
              <span className="who__num">{String(i + 1).padStart(2, '0')}.</span>
              <span className="txt">{t}</span>
              <ArrowUpRightIcon className="arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
