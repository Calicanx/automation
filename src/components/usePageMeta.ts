import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findSeoEntry, OG_IMAGE, OG_IMAGE_ALT, SITE_URL } from '../seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Applies the manifest entry for the current route to <head>:
 * title, description, robots, canonical, and Open Graph / Twitter tags.
 */
export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = findSeoEntry(pathname);
    const url = `${SITE_URL}${entry.path}`;

    document.title = entry.title;
    upsertMeta('name', 'description', entry.description);
    upsertMeta('name', 'robots', entry.noindex ? 'noindex, follow' : 'index, follow');

    if (!entry.noindex) {
      upsertCanonical(url);
    }

    upsertMeta('property', 'og:type', entry.ogType ?? 'website');
    upsertMeta('property', 'og:site_name', 'Advior Automation');
    upsertMeta('property', 'og:title', entry.title);
    upsertMeta('property', 'og:description', entry.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:image:alt', OG_IMAGE_ALT);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', entry.title);
    upsertMeta('name', 'twitter:description', entry.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);
  }, [pathname]);
}
