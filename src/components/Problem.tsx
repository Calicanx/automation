import { SearchIcon, CursorIcon, InboxIcon, FileIcon, DatabaseIcon } from './icons';

function FlowArt() {
  return (
    <svg viewBox="0 0 120 140" aria-hidden="true">
      <rect x="0" y="0" width="120" height="140" fill="#eef4ff" />
      <g stroke="#dbe6ff" strokeWidth="1">
        <path d="M0 20 H120 M0 50 H120 M0 80 H120 M0 110 H120" />
        <path d="M20 0 V140 M50 0 V140 M80 0 V140 M110 0 V140" />
      </g>

      <g fill="#ffffff" stroke="#c7d7ff" strokeWidth="1.2">
        <rect x="10" y="12" width="38" height="24" rx="6" />
        <rect x="72" y="12" width="38" height="24" rx="6" />
        <rect x="10" y="76" width="38" height="24" rx="6" />
        <rect x="72" y="76" width="38" height="24" rx="6" />
      </g>

      <g fontFamily="Inter, sans-serif" fontSize="5.6" fontWeight="600" fill="#1e3a8a" textAnchor="middle">
        <text x="29" y="27">Form</text>
        <text x="91" y="27">CRM</text>
        <text x="29" y="91">PDF</text>
        <text x="91" y="91">Ledger</text>
      </g>

      <g stroke="#2f6bff" strokeWidth="1.6" strokeDasharray="3 3" fill="none" strokeLinecap="round">
        <path d="M48 24 H72" />
        <path d="M91 36 V76" />
        <path d="M48 88 H72" />
        <path d="M29 36 V76" />
      </g>

      <g>
        <circle cx="60" cy="24" r="9" fill="#2f6bff" />
        <text x="60" y="27" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#fff">AI</text>
        <circle cx="60" cy="88" r="9" fill="#7c3aed" />
        <text x="60" y="91" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#fff">AI</text>
      </g>

      <g fill="#22c55e">
        <circle cx="100" cy="56" r="5" />
        <circle cx="20" cy="56" r="5" />
        <path d="M97.5 56.2 l1.7 1.7 3-3.2" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M17.5 56.2 l1.7 1.7 3-3.2" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>

      <g fill="#93c5fd">
        <circle cx="60" cy="24" r="13" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="60" cy="88" r="13" fill="none" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}

const steps = [
  {
    rank: '01',
    icon: <InboxIcon className="w-4 h-4" />,
    name: 'New lead from the website',
    detail: 'Web form → shared inbox',
    time: '4 min by hand',
    leak: true,
  },
  {
    rank: '02',
    icon: <FileIcon className="w-4 h-4" />,
    name: 'Quote request in email',
    detail: 'Inbox → spreadsheet → CRM',
    time: '11 min by hand',
    leak: false,
  },
  {
    rank: '03',
    icon: <DatabaseIcon className="w-4 h-4" />,
    name: 'Supplier invoice PDF',
    detail: 'Downloads → accounting',
    time: '7 min by hand',
    leak: false,
  },
];

export default function Problem() {
  return (
    <section className="problem" data-section="problem">
      <div className="container">
        <span className="eyebrow">The Problem</span>
        <h2 className="h2">
          <span className="line">Your team is already doing the work twice.</span>
          <span className="line">
            The manual part is <span className="accent">the tax.</span>
          </span>
        </h2>

        <div className="problem__card">
          <h3>The Handoff Tax</h3>
          <div className="problem__shot">
            <div className="problem__browser">
              <span className="dot" style={{ background: '#f87171' }} />
              <span className="dot" style={{ background: '#fbbf24' }} />
              <span className="dot" style={{ background: '#34d399' }} />
              <span className="url">your-ops-stack / manual</span>
            </div>
            <div className="problem__search">
              <SearchIcon className="w-3.5 h-3.5" />
              <span className="txt">where did this lead go?</span>
              <span className="btn-icon">
                <SearchIcon className="w-3.5 h-3.5" />
              </span>
            </div>
            {steps.map((s) => (
              <div
                key={s.name}
                className={`problem__result${s.leak ? ' problem__result--top' : ' problem__result--muted'}`}
              >
                <span className="problem__rank">{s.rank}</span>
                <span className="problem__thumb">{s.icon}</span>
                <div className="problem__biz">
                  <b>{s.name}</b>
                  <small>{s.detail}</small>
                  <span className="problem__rating">
                    <em>{s.time}</em>
                  </span>
                </div>
              </div>
            ))}
            <div className="problem__map" style={{ background: '#eef4ff' }}>
              <FlowArt />
              <span className="problem__chip problem__chip--a">+18 hrs</span>
              <span className="problem__chip problem__chip--b">0 re-keys</span>
              <span className="problem__zoom" aria-hidden="true">
                <i>▶</i>
                <i>✓</i>
              </span>
            </div>
          </div>
          <p>
            A lead arrives. Someone copies it. Someone else retypes it. The
            customer waits. That is the work your team was not hired to do.
          </p>
          <div className="problem__note">
            <CursorIcon className="problem__note-icon" />
            Every handoff is a place where a customer waits.
          </div>
        </div>
      </div>
    </section>
  );
}
