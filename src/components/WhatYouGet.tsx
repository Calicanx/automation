import { ArrowUpRightIcon } from './icons';

const items = [
  'A process map that shows every step, owner, and handoff',
  'One working automation, not a slide deck',
  'Your existing tools connected — CRM, inbox, sheets, docs',
  'AI where it earns its place: reading, drafting, classifying',
  'Human approval checks before anything irreversible',
  'A written runbook your team can actually follow',
];

export default function WhatYouGet() {
  return (
    <section className="wyg" data-section="what-you-get" id="what-you-get">
      <div className="container">
        <div className="wyg__head">
          <span className="eyebrow">What You Get</span>
          <h2 className="h2">
            A working system, <span className="accent">not a demo</span>
          </h2>
        </div>

        <div className="wyg__grid">
          <ul className="wyg__list">
            {items.map((item, i) => (
              <li key={item}>
                <span className="wyg__num">{i + 1}.</span>
                <span className="txt">{item}</span>
                <ArrowUpRightIcon className="arrow" />
              </li>
            ))}
          </ul>

          <div className="wyg__card">
            <img
              className="card-bg"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt=""
              loading="lazy"
            />
            <span className="card-shade" aria-hidden="true" />
            <p>
              No new platform to learn. We build inside the apps your team
              already opens every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
