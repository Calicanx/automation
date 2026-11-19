import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { LocaleProvider } from './i18n/config';

export {
  SEO_MANIFEST,
  NOT_FOUND_ENTRY,
  SITE_URL,
  OG_IMAGE,
  OG_IMAGE_ALT,
  DEFAULT_TITLE,
  buildSitemapXml,
} from './seo';
export type { SeoEntry } from './seo';

/** Renders one route to static HTML for prerendering. */
export function render(url: string): string {
  return renderToString(
    <LocaleProvider>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </LocaleProvider>,
  );
}
