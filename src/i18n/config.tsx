import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export const BRAND = 'Advior';
export const SITE_NAME = 'Advior Automation';
export const SITE_URL = 'https://automation.advior.top';
export const SIBLING_URL = 'https://website.advior.top';

export const CONTACT = {
  phoneDisplay: '+254 796 305577',
  phoneHref: 'tel:+254796305577',
  whatsappUrl: 'https://wa.me/254796305577',
  whatsappDisplay: 'https://wa.me/254796305577',
  email: 'hello@advior.top',
  emailHref: 'mailto:hello@advior.top',
  location: 'Nairobi, Kenya',
  tagline: 'A small team in Nairobi building AI agents and workflow automation for growing companies.',
  bookingUrl: 'https://calendar.notion.com/meet/beesrani/book',
};

export type Region = {
  code: string;
  name: string;
  currency: string;
  locale: string;
};

export const REGIONS: Region[] = [
  { code: 'KE', name: 'Kenya', currency: 'KES', locale: 'en-KE' },
  { code: 'IN', name: 'India', currency: 'INR', locale: 'en-IN' },
  { code: 'US', name: 'United States', currency: 'USD', locale: 'en-US' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', locale: 'en-GB' },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', locale: 'en-NG' },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', locale: 'en-ZA' },
  { code: 'AE', name: 'UAE', currency: 'AED', locale: 'en-AE' },
  { code: 'CN', name: 'China', currency: 'CNY', locale: 'zh-CN' },
  { code: 'RU', name: 'Russia', currency: 'RUB', locale: 'ru-RU' },
  { code: 'DE', name: 'Germany (EU)', currency: 'EUR', locale: 'de-DE' },
  { code: 'JP', name: 'Japan', currency: 'JPY', locale: 'ja-JP' },
  { code: 'BR', name: 'Brazil', currency: 'BRL', locale: 'pt-BR' },
];

export type Language = { code: string; label: string; native: string };

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'sw', label: 'Kiswahili', native: 'Kiswahili' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
];

// Fixed, human-friendly prices per currency so they look native everywhere.
// Anchored at $1,500 (Sprint) and $4,500 (System) USD.
export const PRICES: Record<'sprint' | 'system', Record<string, number>> = {
  sprint: { KES: 195000, INR: 125000, USD: 1500, GBP: 1200, NGN: 2250000, ZAR: 27500, AED: 5500, CNY: 10800, RUB: 135000, EUR: 1400, JPY: 225000, BRL: 8000 },
  system: { KES: 585000, INR: 375000, USD: 4500, GBP: 3600, NGN: 6750000, ZAR: 82500, AED: 16500, CNY: 32400, RUB: 405000, EUR: 4200, JPY: 675000, BRL: 24000 },
};

const COUNTRY_REGION: Record<string, string> = {
  KE: 'KE', TZ: 'KE', UG: 'KE', RW: 'KE',
  IN: 'IN', US: 'US', CA: 'US', GB: 'GB', IE: 'GB',
  NG: 'NG', GH: 'NG',
  ZA: 'ZA', AE: 'AE', SA: 'AE', QA: 'AE',
  CN: 'CN', HK: 'CN', SG: 'CN',
  RU: 'RU', DE: 'DE', FR: 'DE', NL: 'DE', IT: 'DE', ES: 'DE',
  JP: 'JP', BR: 'BR',
};

const COUNTRY_LANGUAGE: Record<string, string> = {
  TZ: 'sw', UG: 'sw',
  IN: 'hi',
  CN: 'zh', HK: 'zh', SG: 'zh',
  RU: 'ru',
  FR: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es',
  SA: 'ar', AE: 'ar', EG: 'ar',
};

type Dict = Record<string, string>;

const en: Dict = {
  work: 'Work',
  services: 'Services',
  pricing: 'Pricing',
  faq: 'FAQ',
  talkWhatsapp: 'Talk On WhatsApp',
  talkWhatsappLower: 'Talk on WhatsApp',
  callTeam: 'Book A Process Audit',
  heroBadge: 'AI Agents & Workflow Automation',
  heroTitleA: "Your team's repetitive work,",
  heroTitleB: 'runs itself',
  heroSub: 'Custom AI agents and workflows that run inside the tools you already use.',
  learnMore: 'See What We Build',
  region: 'Region',
  language: 'Language',
  currency: 'Currency',
};

const sw: Dict = {
  work: 'Kazi',
  services: 'Huduma',
  pricing: 'Bei',
  faq: 'Maswali',
  talkWhatsapp: 'Chat kwa WhatsApp',
  talkWhatsappLower: 'Chat kwa WhatsApp',
  callTeam: 'Weka Miadi ya Ukaguzi',
  heroBadge: 'Mawakala wa AI na Uendeshaji wa Kazi',
  heroTitleA: 'Kazi zinazorudiwa za timu yako,',
  heroTitleB: 'zinafanya zenyewe',
  heroSub: 'Mawakala wa AI na mitiririko maalum ya kazi, ndani ya zana mnazotumia.',
  learnMore: 'Ona Tunachojenga',
  region: 'Mkoa',
  language: 'Lugha',
  currency: 'Sarafu',
};

const hi: Dict = {
  work: 'कार्य',
  services: 'सेवाएं',
  pricing: 'मूल्य',
  faq: 'प्रश्न',
  talkWhatsapp: 'WhatsApp पर बात करें',
  talkWhatsappLower: 'WhatsApp पर बात करें',
  callTeam: 'प्रोसेस ऑडिट बुक करें',
  heroBadge: 'AI एजेंट और वर्कफ़्लो ऑटोमेशन',
  heroTitleA: 'आपकी टीम का दोहराया जाने वाला काम,',
  heroTitleB: 'खुद हो जाता है',
  heroSub: 'कस्टम AI एजेंट और वर्कफ़्लो, उन्हीं टूल्स के अंदर जो आप पहले से उपयोग करते हैं।',
  learnMore: 'देखें हम क्या बनाते हैं',
  region: 'क्षेत्र',
  language: 'भाषा',
  currency: 'मुद्रा',
};

const STRINGS: Record<string, Dict> = {
  en,
  sw,
  hi,
  zh: {
    work: '案例',
    services: '服务',
    pricing: '价格',
    faq: '问答',
    talkWhatsapp: 'WhatsApp 聊天',
    talkWhatsappLower: 'WhatsApp 聊天',
    callTeam: '预约流程诊断',
    heroBadge: 'AI 智能体与工作流自动化',
    heroTitleA: '团队重复性的工作，',
    heroTitleB: '自动完成',
    heroSub: '在您现有工具中构建定制的 AI 智能体和自动化流程。',
    learnMore: '看看我们做什么',
    region: '地区',
    language: '语言',
    currency: '货币',
  },
  ru: {
    work: 'Работы',
    services: 'Услуги',
    pricing: 'Цены',
    faq: 'Вопросы',
    talkWhatsapp: 'Написать в WhatsApp',
    talkWhatsappLower: 'Написать в WhatsApp',
    callTeam: 'Записаться на аудит',
    heroBadge: 'AI-агенты и автоматизация процессов',
    heroTitleA: 'Рутинная работа вашей команды,',
    heroTitleB: 'выполняется сама',
    heroSub: 'Индивидуальные AI-агенты и рабочие процессы внутри инструментов, которыми вы уже пользуетесь.',
    learnMore: 'Посмотреть, что мы строим',
    region: 'Регион',
    language: 'Язык',
    currency: 'Валюта',
  },
  fr: {
    work: 'Réalisations',
    services: 'Services',
    pricing: 'Tarifs',
    faq: 'FAQ',
    talkWhatsapp: 'Discuter sur WhatsApp',
    talkWhatsappLower: 'Discuter sur WhatsApp',
    callTeam: 'Réserver un audit',
    heroBadge: 'Agents IA et automatisation',
    heroTitleA: 'Le travail répétitif de votre équipe,',
    heroTitleB: 'se fait tout seul',
    heroSub: 'Des agents IA et des workflows sur mesure, dans les outils que vous utilisez déjà.',
    learnMore: 'Voir ce que nous construisons',
    region: 'Région',
    language: 'Langue',
    currency: 'Devise',
  },
  es: {
    work: 'Trabajos',
    services: 'Servicios',
    pricing: 'Precios',
    faq: 'Preguntas',
    talkWhatsapp: 'Hablar por WhatsApp',
    talkWhatsappLower: 'Hablar por WhatsApp',
    callTeam: 'Reservar una auditoría',
    heroBadge: 'Agentes de IA y automatización',
    heroTitleA: 'El trabajo repetitivo de tu equipo,',
    heroTitleB: 'se hace solo',
    heroSub: 'Agentes de IA y flujos de trabajo a medida, dentro de las herramientas que ya usas.',
    learnMore: 'Ver lo que construimos',
    region: 'Región',
    language: 'Idioma',
    currency: 'Moneda',
  },
  ar: {
    work: 'الأعمال',
    services: 'الخدمات',
    pricing: 'الأسعار',
    faq: 'الأسئلة',
    talkWhatsapp: 'تحدث عبر واتساب',
    talkWhatsappLower: 'تحدث عبر واتساب',
    callTeam: 'احجز تدقيق العمليات',
    heroBadge: 'وكلاء الذكاء الاصطناعي وأتمتة سير العمل',
    heroTitleA: 'العمل المتكرر لفريقك،',
    heroTitleB: 'ينجز تلقائيًا',
    heroSub: 'وكلاء ذكاء اصطناعي مخصصون وسير عمل آلي داخل الأدوات التي تستخدمونها بالفعل.',
    learnMore: 'شاهد ما نبنيه',
    region: 'المنطقة',
    language: 'اللغة',
    currency: 'العملة',
  },
};

export function formatMoney(plan: 'sprint' | 'system', region: Region, lang: string): string {
  const amount = PRICES[plan][region.currency] ?? PRICES[plan].KES;
  const tag = `${lang}-${region.code}`;
  const opts = {
    style: 'currency' as const,
    currency: region.currency,
    maximumFractionDigits: 0,
  };
  try {
    return new Intl.NumberFormat(tag, opts).format(amount).replace(/[ \u202f\u00a0]/g, ' ');
  } catch {
    return new Intl.NumberFormat(region.locale, opts).format(amount).replace(/[ \u202f\u00a0]/g, ' ');
  }
}

type LocaleCtx = {
  region: Region;
  setRegionCode: (code: string) => void;
  language: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
  localeTag: string;
  formatPrice: (plan: 'sprint' | 'system') => string;
};

const Ctx = createContext<LocaleCtx | null>(null);

function initialFromStorage(key: string, fallback: string, valid: string[]): string {
  try {
    const v = localStorage.getItem(key);
    if (v && valid.includes(v)) return v;
  } catch {
    /* ignore */
  }
  return fallback;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [regionCode, setRegionCode] = useState(() =>
    typeof window === 'undefined' ? 'KE' : initialFromStorage('advior-automation-region', 'KE', REGIONS.map((r) => r.code)),
  );
  const [language, setLanguage] = useState(() =>
    typeof window === 'undefined' ? 'en' : initialFromStorage('advior-automation-lang', 'en', LANGUAGES.map((l) => l.code)),
  );

  const region = useMemo(() => REGIONS.find((r) => r.code === regionCode) ?? REGIONS[0], [regionCode]);

  useEffect(() => {
    let cancelled = false;
    let storedRegion = '';
    let storedLang = '';
    try {
      storedRegion = localStorage.getItem('advior-automation-region') ?? '';
      storedLang = localStorage.getItem('advior-automation-lang') ?? '';
    } catch {
      return;
    }
    if (storedRegion || storedLang) return;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    fetch('https://ipapi.co/country/', { signal: ctrl.signal })
      .then((res) => (res.ok ? res.text() : ''))
      .then((country) => {
        if (cancelled) return;
        const cc = country.trim().toUpperCase();
        if (!cc) return;
        const mappedRegion = COUNTRY_REGION[cc];
        if (mappedRegion && REGIONS.some((r) => r.code === mappedRegion)) {
          setRegionCode(mappedRegion);
        }
        const mappedLang = COUNTRY_LANGUAGE[cc];
        if (mappedLang && LANGUAGES.some((l) => l.code === mappedLang)) {
          setLanguage(mappedLang);
        }
      })
      .catch(() => {
        /* keep defaults */
      })
      .finally(() => clearTimeout(timer));
    return () => {
      cancelled = true;
      clearTimeout(timer);
      ctrl.abort();
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('advior-automation-region', regionCode);
    } catch {
      /* ignore */
    }
  }, [regionCode]);

  useEffect(() => {
    try {
      localStorage.setItem('advior-automation-lang', language);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => STRINGS[language]?.[key] ?? en[key] ?? key, [language]);

  const value = useMemo<LocaleCtx>(
    () => ({
      region,
      setRegionCode,
      setLanguage,
      t,
      localeTag: `${language}-${region.code}`,
      formatPrice: (plan) => formatMoney(plan, region, language),
    }),
    [region, language, t],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale(): LocaleCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    const region = REGIONS[0];
    return {
      region,
      setRegionCode: () => {},
      language: 'en',
      setLanguage: () => {},
      t: (k: string) => en[k] ?? k,
      localeTag: 'en-KE',
      formatPrice: (plan) => formatMoney(plan, region, 'en'),
    };
  }
  return ctx;
}
