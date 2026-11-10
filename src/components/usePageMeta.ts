import { useEffect } from 'react';

const SITE = 'Advior Automation';

export default function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — ${SITE}`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
