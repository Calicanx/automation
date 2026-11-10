import { useState, type FormEvent } from 'react';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from '../components/icons';
import { CONTACT, useLocale } from '../i18n/config';
import usePageMeta from '../components/usePageMeta';

function launchEstimate(from: Date = new Date()): string {
  const d = new Date(from);
  let added = 0;
  while (added < 10) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(d);
}

export default function ContactPage() {
  const { formatPrice } = useLocale();
  const sprint = formatPrice('sprint');
  const system = formatPrice('system');
  usePageMeta('Contact', 'Book a process audit with Advior Automation — WhatsApp, call, or email. Replies within the hour.');
  const launchDay = launchEstimate();
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('sprint');
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState<string | null>(null);

  const planLabel = (value: string) => {
    if (value === 'sprint') return `Sprint (${sprint})`;
    if (value === 'system') return `System (${system})`;
    return 'Not sure yet';
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ref = `AUT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    try {
      const prev = JSON.parse(localStorage.getItem('advior-automation-enquiries') ?? '[]');
      prev.push({ ref, name, business, phone, plan: planLabel(plan), message, at: new Date().toISOString() });
      localStorage.setItem('advior-automation-enquiries', JSON.stringify(prev));
    } catch {
      /* storage unavailable — still confirm */
    }
    setReference(ref);
  };

  return (
    <main>
      <div className="subnav" data-section="contact-nav">
        <SiteNav />
      </div>

      <section className="blog-page" data-section="contact">
        <div className="container">
          <div className="blog-page__head">
            <span className="eyebrow">Contact</span>
            <h1>
              Talk to a <span className="accent">human.</span>
            </h1>
            <p>
              No forms, no tickets, no waiting. Send us the process that eats
              the most time and a real person replies — usually within the hour.
            </p>
          </div>

          <div className="blog-grid">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="blog-card" data-contact="whatsapp">
              <div className="blog-card__body">
                <div className="blog-card__tags">
                  <span>Fastest</span>
                </div>
                <h3>
                  <span className="btn-icon" style={{ display: 'inline-flex', verticalAlign: '-0.4rem', marginRight: '0.6rem', background: '#2f6bff', color: '#fff' }}>
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                  WhatsApp us
                </h3>
                <p>
                  Describe the process that eats the most time. We reply with
                  what we would automate first and what it costs.
                </p>
                <div className="blog-meta">
                  <span>{CONTACT.whatsappDisplay}</span>
                </div>
              </div>
            </a>

            <a href={CONTACT.phoneHref} className="blog-card" data-contact="call">
              <div className="blog-card__body">
                <div className="blog-card__tags">
                  <span>45 minutes</span>
                </div>
                <h3>
                  <span className="btn-icon" style={{ display: 'inline-flex', verticalAlign: '-0.4rem', marginRight: '0.6rem', background: '#2f6bff', color: '#fff' }}>
                    <PhoneIcon className="w-5 h-5" />
                  </span>
                  Book a process audit
                </h3>
                <p>
                  One call is enough to map the process and decide whether it
                  is worth automating. Weekdays, 8am to 6pm EAT.
                </p>
                <div className="blog-meta">
                  <span>{CONTACT.phoneDisplay}</span>
                </div>
              </div>
            </a>

            <a href={CONTACT.emailHref} className="blog-card" data-contact="email">
              <div className="blog-card__body">
                <div className="blog-card__tags">
                  <span>Same day</span>
                </div>
                <h3>Email us</h3>
                <p>
                  For scopes, security reviews, or anything that needs a longer
                  answer. We reply the same working day.
                </p>
                <div className="blog-meta">
                  <span>{CONTACT.email}</span>
                  <span className="dot-sep">·</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPinIcon className="w-4 h-4" /> {CONTACT.location}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-form-section" data-section="contact-form">
        <div className="container">
          <span className="eyebrow">Get Started</span>
          <h2 className="h2">
            Tell us what is <span className="accent">slowing you down.</span>
          </h2>
          <p className="contact-form__sub">
            Send it right here on the website — we reply within one working day.
          </p>
          {reference ? (
            <div className="contact-form__success" data-testid="contact-success">
              <span className="eyebrow">Enquiry received</span>
              <h3>Thanks{name ? `, ${name}` : ''} — we have it.</h3>
              <p>
                Your reference is <strong>{reference}</strong>. We will reach
                out within one working day{business ? ` about ${business}` : ''}.
                Prefer chat? You can also find us instantly on WhatsApp.
              </p>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-dark">
                <span className="btn-icon">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                Talk On WhatsApp
              </a>
            </div>
          ) : (
          <form className="contact-form" data-testid="contact-form" onSubmit={onSubmit}>
            <label className="contact-form__field">
              <span>Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Wanjiru"
                required
              />
            </label>
            <label className="contact-form__field">
              <span>Company name</span>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="e.g. Northline Logistics"
                required
              />
            </label>
            <label className="contact-form__field">
              <span>Phone or WhatsApp</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +254 7XX XXX XXX"
              />
            </label>
            <label className="contact-form__field">
              <span>Plan</span>
              <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option value="sprint">Sprint ({sprint})</option>
                <option value="system">System ({system})</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </label>
            <label className="contact-form__field contact-form__field--full">
              <span>Which process eats the most time? (optional)</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Every quote request is copied from email into a spreadsheet, then chased by phone"
                rows={4}
              />
            </label>
            <button type="submit" className="btn-dark contact-form__submit">
              Send enquiry
            </button>
          </form>
          )}
        </div>
      </section>

      <section className="cta" data-section="contact-cta">
        <div className="container">
          <div className="post__cta">
            <h3>Your first workflow could be live on {launchDay}.</h3>
            <div className="hero__ctas">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-white">
                <span className="btn-icon">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                Talk On WhatsApp
              </a>
              <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-outline">
                <span className="btn-icon">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                Book A Process Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
