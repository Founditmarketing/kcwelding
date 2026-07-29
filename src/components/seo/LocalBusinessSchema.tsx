import { useEffect } from 'react';
import { COMPANY_INFO } from '@/src/lib/constants';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/src/lib/seo';

const JSONLD_ID = 'localbusiness-jsonld';

export function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      description: 'Professional mobile welding and fabrication serving Central Louisiana. Any size job — priced fairly, done right.',
      image: DEFAULT_OG_IMAGE,
      url: SITE_URL,
      telephone: `+1${COMPANY_INFO.phoneRaw}`,
      email: COMPANY_INFO.email,
      areaServed: {
        '@type': 'Place',
        name: 'Central Louisiana',
      },
      sameAs: [COMPANY_INFO.facebook],
      priceRange: '$$',
    };

    let el = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = JSONLD_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
