export const SITE_URL = 'https://www.kc-welding.com';
export const SITE_NAME = 'KC Welding & Fabrication';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/gallery/Black-Red-Minimalist-Welding-Man-Logo-T2.png`;

export function canonicalUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
