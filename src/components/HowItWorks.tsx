const steps = [
  { num: '01', title: 'A 45 Minute Audit', desc: 'We watch the process, count the steps, and find where the hours actually go. Nothing technical.' },
  { num: '02', title: 'Build & Connect', desc: 'We build inside your tools, with clear rules for every handoff and exception.' },
  { num: '03', title: 'Test On Real Data', desc: 'We run it against real records, edge cases, and failures before anyone relies on it.' },
  { num: '04', title: 'Go Live & Train', desc: 'Your team gets a runbook, a training session, and a direct line for 30 days.' },
];

export default function HowItWorks() {
  return (
    <section className="hows" data-section="how-it-works">
      <div className="container">
        <span className="eyebrow">How It Works</span>
        <h2 className="h2">You see it running before you pay</h2>
        <p className="hows__sub">
          We test on your real data, in your real tools. If it does not save
          the time we mapped, you do not pay.
        </p>

        <div className="hows__grid">
          {steps.map((s, i) => (
            <div key={s.num} className={`step step--${i + 1}`}>
              <span className="step__num">{s.num}</span>
              <h3>{s.title}</h3>
              {s.desc && <p>{s.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
