import { useState } from 'react';
import { StarIcon, GoogleGIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

type Card = {
  name: string;
  role: string;
  date: string;
  quote?: string;
  body?: string;
  initials: string;
  avatarBg: string;
  avatarImg?: string;
  photo?: string;
};

const cards: Card[] = [
  {
    name: 'Daniel Reyes',
    role: 'Founder, ecommerce brand',
    date: '18 Sep 2026',
    quote: 'Our ops lead got her Fridays back.',
    body: 'Order exceptions are triaged automatically and only reach a human when they need a decision.',
    initials: 'DR',
    avatarBg: 'linear-gradient(135deg,#fbbf24,#b45309)',
    avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Amara Okafor',
    role: 'COO, logistics company',
    date: '11 Sep 2026',
    quote: 'The follow-up now happens before we even ask.',
    body: 'We stopped losing quote requests in the inbox. The team trusts the system because it shows its work.',
    initials: 'AO',
    avatarBg: 'linear-gradient(135deg,#93c5fd,#1d4ed8)',
    avatarImg: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=128&q=80',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Finance, services firm',
    date: '3 Sep 2026',
    quote: 'Invoice month went from four days to one afternoon.',
    body: 'The extraction is accurate, and every result has an approval step before it hits the ledger.',
    initials: 'PN',
    avatarBg: 'linear-gradient(135deg,#f9a8d4,#be185d)',
    avatarImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=128&q=80',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
];

function Stars() {
  return (
    <span className="tcard__stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}

function TestimonialCard({ card, dim }: { card: Card; dim?: boolean }) {
  const isPhoto = Boolean(card.photo);
  return (
    <article
      className={`tcard ${isPhoto ? 'tcard--photo' : 'tcard--white'} ${dim ? 'tcard--dim' : ''}`}
      style={isPhoto ? { background: card.avatarBg } : undefined}
    >
      {isPhoto && (
        <img className="tcard__photo" src={card.photo} alt="" loading="lazy" />
      )}
      <div className="tcard__top">
        <span className="tcard__avatar" style={{ background: card.avatarBg }}>
          {card.avatarImg ? (
            <img src={card.avatarImg} alt="" loading="lazy" />
          ) : (
            card.initials
          )}
        </span>
        <span className="tcard__who">
          <b>{card.name}</b>
          <small>{card.role}</small>
        </span>
        <span className="tcard__g">
          <GoogleGIcon className="w-full h-full" />
        </span>
      </div>
      <div>
        <p className="tcard__quote">“{card.quote}”</p>
        <p className="tcard__body">{card.body}</p>
      </div>
      <div className="tcard__bottom">
        <Stars />
        <span className="tcard__date">{card.date}</span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(1);
  const prev = cards[(index - 1 + cards.length) % cards.length];
  const current = cards[index];
  const next = cards[(index + 1) % cards.length];

  return (
    <section className="testimonials" data-section="testimonials">
      <div className="container">
        <span className="eyebrow eyebrow--light">Testimonials</span>
        <h2 className="h2">
          What Teams Say About Working{' '}
          <span className="accent">With Us</span>
        </h2>

        <div className="testimonials__viewport">
          <button
            className="tcard__nav tcard__nav--prev"
            aria-label="Previous testimonials"
            onClick={() => setIndex((index - 1 + cards.length) % cards.length)}
          >
            <ChevronLeftIcon />
          </button>
          <div className="testimonials__track">
            <TestimonialCard card={prev} dim />
            <TestimonialCard card={current} />
            <TestimonialCard card={next} dim />
          </div>
          <button
            className="tcard__nav tcard__nav--next"
            aria-label="Next testimonials"
            onClick={() => setIndex((index + 1) % cards.length)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
