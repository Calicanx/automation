import { posts } from './data/posts';

export const SITE_URL = 'https://automation.advior.top';
export const SITE_NAME = 'Advior Automation';
export const DEFAULT_TITLE = 'Advior Automation — AI Agents & Custom Workflow Automation';
export const DEFAULT_DESCRIPTION =
  'Advior Automation builds custom AI agents, LLM integrations, and workflow automations for growing teams. Fixed scope from $1,500, live in 2 working weeks.';
export const OG_IMAGE = `${SITE_URL}/og.png`;
export const OG_IMAGE_ALT =
  'Advior Automation — custom AI agents and workflow automation for growing teams';

export type SeoEntry = {
  /** Route path, e.g. '/blog'. */
  path: string;
  /** Full document title, including the site suffix. */
  title: string;
  description: string;
  /** Last content change, YYYY-MM-DD. Used for sitemap lastmod. */
  lastmod: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
};

const STATIC_LASTMOD = '2026-11-10';

const MONTHS: Record<string, string> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
};

/** Parses post dates like '12 Feb 2026' into '2026-02-12'. */
export function isoDate(display: string): string | undefined {
  const match = display.trim().match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return undefined;
  const month = MONTHS[match[2].toLowerCase()];
  if (!month) return undefined;
  return `${match[3]}-${month}-${match[1].padStart(2, '0')}`;
}

const staticEntries: SeoEntry[] = [
  {
    path: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    lastmod: STATIC_LASTMOD,
  },
  {
    path: '/work',
    title: `Selected Projects — ${SITE_NAME}`,
    description:
      'Automation case studies from Advior — lead routing, document processing, and AI support workflows, each live in weeks.',
    lastmod: STATIC_LASTMOD,
  },
  {
    path: '/blog',
    title: `Blog — ${SITE_NAME}`,
    description:
      'Plain guides on AI agents, integrations, and the processes worth automating first.',
    lastmod: STATIC_LASTMOD,
  },
  {
    path: '/contact',
    title: `Contact — ${SITE_NAME}`,
    description:
      'Book a process audit with Advior Automation — WhatsApp, call, or email. Replies within the hour.',
    lastmod: STATIC_LASTMOD,
  },
  {
    path: '/privacy',
    title: `Privacy Policy — ${SITE_NAME}`,
    description:
      'How Advior Automation handles client data, credentials, and AI processing.',
    lastmod: STATIC_LASTMOD,
  },
  {
    path: '/terms',
    title: `Terms of Service — ${SITE_NAME}`,
    description:
      'Simple terms for Advior Automation builds: fixed scope, test before you pay, and you own the workflow.',
    lastmod: STATIC_LASTMOD,
  },
];

const postEntries: SeoEntry[] = posts.map((post) => {
  const published = isoDate(post.date);
  return {
    path: `/blog/${post.slug}`,
    title: `${post.title} — ${SITE_NAME}`,
    description: post.excerpt,
    lastmod: published ?? STATIC_LASTMOD,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      ...(published ? { datePublished: published, dateModified: published } : {}),
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    },
  };
});

export const SEO_MANIFEST: SeoEntry[] = [...staticEntries, ...postEntries];

/** Builds the sitemap XML from the manifest so all environments stay in sync. */
export function buildSitemapXml(): string {
  const urls = SEO_MANIFEST.map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const NOT_FOUND_ENTRY: SeoEntry = {
  path: '/404',
  title: `Page not found — ${SITE_NAME}`,
  description: 'That page does not exist.',
  lastmod: STATIC_LASTMOD,
  noindex: true,
};

/** Looks up a manifest entry; unknown paths fall back to a noindex 404 entry. */
export function findSeoEntry(pathname: string): SeoEntry {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return (
    SEO_MANIFEST.find((entry) => entry.path === normalized) ?? {
      ...NOT_FOUND_ENTRY,
      path: normalized,
    }
  );
}
