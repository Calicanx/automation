import { CheckOutlineIcon } from './icons';

const handled = [
  'Authentication and permissions',
  'Duplicate and retry handling',
  'Data mapping between tools',
  'Human approval checkpoints',
  'Error alerts to the right person',
  'Logging and an audit trail',
];

export default function GooglePart() {
  return (
    <section className="google" data-section="integration">
      <div className="container">
        <div className="google__grid">
          <div className="google__left">
            <span className="eyebrow">The Integration Part</span>
            <h2 className="h2" style={{ marginTop: '1.6rem' }}>
              Most automations fail at the handoff,{' '}
              <span className="accent">not the AI</span>
            </h2>
            <p>
              A demo can read one email. Production has to handle the messy
              one, the duplicate, and the one that arrives at 2am. That is
              where we spend the engineering time.
              <strong>So we wire the handoffs first.</strong>
            </p>
          </div>

          <div className="google__card">
            <h3>Your Stack, Connected Properly</h3>
            <p>
              We connect the tools your team already uses, with clear rules for
              what happens when something goes wrong.
            </p>
            <h4>What we handle</h4>
            <ul className="google__list">
              {handled.map((h) => (
                <li key={h}>
                  <CheckOutlineIcon className="check" />
                  {h}
                </li>
              ))}
            </ul>
            <p className="foot">Included in both plans. No extra charge.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
