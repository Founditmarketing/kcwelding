import { useEffect } from 'react';
import { SITE_NAME, DEFAULT_OG_IMAGE, canonicalUrl } from '@/src/lib/seo';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Set on ad-campaign / landing pages that shouldn't be indexed or crawled. */
  noIndex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setRobots(noIndex: boolean | undefined) {
  const el = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (noIndex) {
    if (el) {
      el.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      meta.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(meta);
    }
  } else if (el) {
    el.remove();
  }
}

const JSONLD_ID = 'page-jsonld';

export function PageSEO({ title, description, path, image, jsonLd, noIndex }: PageSEOProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const url = canonicalUrl(path);
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', url);
    setRobots(noIndex);

    const existing = document.getElementById(JSONLD_ID);
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSONLD_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(JSONLD_ID);
      if (s) s.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noIndex, JSON.stringify(jsonLd)]);

  return null;
}
