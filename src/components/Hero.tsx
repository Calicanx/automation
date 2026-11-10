import {
  LogoMark,
  WhatsAppIcon,
  PhoneIcon,
  CursorIcon,
} from './icons';
import { BRAND, CONTACT, useLocale } from '../i18n/config';

const avatars = [
  { id: 1, initials: 'AO', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=128&q=80', bg: 'linear-gradient(135deg,#93c5fd,#1d4ed8)' },
  { id: 2, initials: 'DR', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80', bg: 'linear-gradient(135deg,#f9a8d4,#be185d)' },
  { id: 3, initials: 'PN', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&q=80', bg: 'linear-gradient(135deg,#86efac,#15803d)' },
  { id: 4, initials: 'JK', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=128&q=80', bg: 'linear-gradient(135deg,#fdba74,#c2410c)' },
];

export default function Hero() {
  const { t, formatPrice } = useLocale();
  const sprint = formatPrice('sprint');
  return (
    <section className="hero" data-section="hero">
      <div className="hero__nav">
        <nav className="hero__nav-inner" aria-label="Main">
          <a href="#" className="hero__brand" onClick={(e) => e.preventDefault()}>
            <LogoMark className="w-7 h-7" />
            {BRAND}
          </a>
          <div className="hero__links">
            <a href="#work">{t('work')}</a>
            <a href="#what-you-get">{t('services')}</a>
            <a href="#pricing">{t('pricing')}</a>
            <a href="#faq">{t('faq')}</a>
          </div>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero__nav-cta">
            <span className="btn-icon">
              <WhatsAppIcon className="w-4 h-4" />
            </span>
            {t('talkWhatsapp')}
          </a>
        </nav>
      </div>

      <div className="hero__content">
        <span className="hero__badge">{t('heroBadge')}</span>
        <h1>
          {t('heroTitleA')}
          <br />
          <span className="accent">{t('heroTitleB')}</span>
        </h1>
        <p className="hero__sub">{t('heroSub')}</p>
        <p className="hero__note">
          {sprint}, Sprint Plan, Scope Fixed. We map the process, build it on
          your tools, and test it on your own data. You pay only after you see
          it work.
        </p>
        <div className="hero__ctas">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-dark">
            <span className="btn-icon">
              <WhatsAppIcon className="w-5 h-5" />
            </span>
            {t('talkWhatsapp')}
          </a>
          <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <span className="btn-icon">
              <PhoneIcon className="w-5 h-5" />
            </span>
            {t('callTeam')}
          </a>
        </div>

        {avatars.map((a) => (
          <div key={a.id} className={`hero__avatar hero__avatar--${a.id}`}>
            <img src={a.img} alt="" loading="lazy" style={{ background: a.bg }} />
            <CursorIcon className="cursor" />
          </div>
        ))}
      </div>
    </section>
  );
}
