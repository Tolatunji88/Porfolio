/**
 * Canonical site URL for Open Graph, sitemap, and metadata.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.pages.dev).
 * Cloudflare Pages also provides CF_PAGES_URL at build time.
 */
export function resolvePublicBaseUrl(): string {
  const strip = (s: string) => s.replace(/\/$/, "");

  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return strip(fromEnv);

  const cf = process.env.CF_PAGES_URL?.trim();
  if (cf) return strip(cf);

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const v = vercel.replace(/^https?:\/\//, "");
    return strip(`https://${v}`);
  }

  return "http://localhost:3000";
}
