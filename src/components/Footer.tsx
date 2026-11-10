import { Link } from 'react-router-dom';
import {
  LogoMark,
  FacebookIcon,
  XIcon,
  InstagramIcon,
} from './icons';
import { BRAND, CONTACT, LANGUAGES, REGIONS, SIBLING_URL, useLocale } from '../i18n/config';

export default function Footer() {
  const { region, setRegionCode, language, setLanguage, t, localeTag, formatPrice } = useLocale();

  return (
    <section className="footer" data-section="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <span className="footer__brand">
              <LogoMark className="w-7 h-7" />
              {BRAND}
            </span>
            <p className="footer__tag">{CONTACT.tagline}</p>
            <p className="footer__cross">
              Need a website instead?{' '}
              <a href={SIBLING_URL} target="_blank" rel="noopener noreferrer">
                Visit website.advior.top
              </a>
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                <FacebookIcon />
              </a>
              <a href="#" aria-label="X" onClick={(e) => e.preventDefault()}>
                <XIcon />
              </a>
              <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h5>Phone</h5>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            <h5>WhatsApp</h5>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">{CONTACT.whatsappDisplay}</a>
          </div>

          <div className="footer__col">
            <h5>Email</h5>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <h5>Location</h5>
            <a href="#" onClick={(e) => e.preventDefault()}>{CONTACT.location}</a>
          </div>
        </div>

        <div className="footer__locale" data-testid="locale-switcher">
          <label className="footer__locale-field">
            <span>{t('region')} / {t('currency')}</span>
            <select
              data-testid="region-select"
              value={region.code}
              onChange={(e) => setRegionCode(e.target.value)}
              aria-label="Region and currency"
            >
              {REGIONS.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.name} — {r.currency}
                </option>
              ))}
            </select>
          </label>
          <label className="footer__locale-field">
            <span>{t('language')}</span>
            <select
              data-testid="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Language"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native}
                </option>
              ))}
            </select>
          </label>
          <p className="footer__locale-hint" data-testid="locale-hint">
            {region.name} · {region.currency} · {localeTag} · Sprint {formatPrice('sprint')} · System {formatPrice('system')}
          </p>
        </div>

        <nav className="footer__sitemap" aria-label="Site">
          <Link to="/work">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <a href={SIBLING_URL} target="_blank" rel="noopener noreferrer">Websites</a>
        </nav>

        <p className="footer__copy">© 2026 {BRAND}. All rights reserved.</p>
        <div className="footer__giant" aria-hidden="true">
          {BRAND}
        </div>
      </div>
    </section>
  );
}
