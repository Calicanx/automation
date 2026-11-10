import { WhatsAppIcon, PhoneIcon } from './icons';
import { CONTACT, useLocale } from '../i18n/config';

export default function CTA() {
  const { t } = useLocale();
  return (
    <section className="cta" data-section="cta">
      <div className="container">
        <div className="cta__card">
          <h2 className="h2">Find the hours your team loses every week</h2>
          <p>
            Send us the process that eats the most time. We will map it, price
            it, and show you what a working automation would look like.
          </p>
          <div className="cta__ctas">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-white">
              <span className="btn-icon">
                <WhatsAppIcon className="w-5 h-5" />
              </span>
              {t('talkWhatsapp')}
            </a>
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta__btn-outline">
              <span className="btn-icon">
                <PhoneIcon className="w-5 h-5" />
              </span>
              {t('callTeam')}
            </a>
          </div>
          <p className="scarcity">
            We take on 4 new automation builds each month, so every system gets
            proper engineering time.
          </p>
        </div>
      </div>
    </section>
  );
}
