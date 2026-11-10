import { Link } from 'react-router-dom';
import { LogoMark, WhatsAppIcon } from './icons';
import { BRAND, CONTACT, useLocale } from '../i18n/config';

export default function SiteNav() {
  const { t } = useLocale();
  return (
    <div className="hero__nav">
      <nav className="hero__nav-inner" aria-label="Main">
        <Link to="/" className="hero__brand">
          <LogoMark className="w-7 h-7" />
          {BRAND}
        </Link>
        <div className="hero__links">
          <Link to="/work">{t('work')}</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/#pricing">{t('pricing')}</Link>
          <Link to="/#faq">{t('faq')}</Link>
        </div>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero__nav-cta">
          <span className="btn-icon">
            <WhatsAppIcon className="w-4 h-4" />
          </span>
          {t('talkWhatsapp')}
        </a>
      </nav>
    </div>
  );
}
