import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import App from './App';
import { LocaleProvider } from './i18n/config';
import posthog from 'posthog-js';

posthog.init('phc_uWogNyKz8LCmvgkMg2QSbUxFqxtGoSCiRu9XzVQaQibx', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  capture_pageview: false,
});

function PageviewTracker() {
  const location = useLocation();
  useEffect(() => {
    posthog.capture('$pageview', { $current_url: window.location.href });
  }, [location.pathname, location.search]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageviewTracker />
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </StrictMode>
);

