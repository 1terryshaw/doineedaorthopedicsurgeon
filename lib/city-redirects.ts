// lib/city-redirects.ts — 301/308 map for city slugs retired by the 2026-07-11
// empire city-string sweep (stripAdminPrefix + Census-arbitrated abbrev merge).
// Keyed "region/old-slug" -> "region/canonical-slug" (lowercase, no leading slash;
// region = province_state lowercased). 39 entries. MACHINE-GENERATED.
//
// Resolved in app/[region]/[city]/page.tsx via permanentRedirect (308, SEO-equivalent
// to 301) — gated on the page having ZERO listings, so it is INERT until the Phase-2
// DB write empties the old slug, then activates automatically. Stamper-v3 repos ban
// middleware.ts (owner-auth cookie handling), so this is page-level by design.

export const CITY_REDIRECTS: Readonly<Record<string, string>> = {
  "ca/mt-shasta": "ca/mount-shasta",
  "ca/saint-helena": "ca/st-helena",
  "co/ft-carson": "co/fort-carson",
  "fl/ft-lauderdale": "fl/fort-lauderdale",
  "fl/ft-myers": "fl/fort-myers",
  "fl/port-saint-lucie": "fl/port-st-lucie",
  "fl/saint-augustine": "fl/st-augustine",
  "fl/saint-petersburg": "fl/st-petersburg",
  "fl/village-of-palmetto-bay": "fl/palmetto-bay",
  "ga/ft-gordon": "ga/fort-gordon",
  "ga/saint-marys": "ga/st-marys",
  "il/mt-zion": "il/mount-zion",
  "il/saint-charles": "il/st-charles",
  "in/saint-john": "in/st-john",
  "ky/mt-sterling": "ky/mount-sterling",
  "mi/mt-clemens": "mi/mount-clemens",
  "mi/mt-pleasant": "mi/mount-pleasant",
  "mi/saint-clair-shores": "mi/st-clair-shores",
  "mi/saint-ignace": "mi/st-ignace",
  "mi/saint-joseph": "mi/st-joseph",
  "mi/sault-sainte-marie": "mi/sault-ste-marie",
  "mn/saint-cloud": "mn/st-cloud",
  "mn/saint-louis-park": "mn/st-louis-park",
  "mn/saint-paul": "mn/st-paul",
  "mo/saint-charles": "mo/st-charles",
  "mo/saint-joseph": "mo/st-joseph",
  "mo/saint-louis": "mo/st-louis",
  "mo/saint-peters": "mo/st-peters",
  "nj/mt-laurel": "nj/mount-laurel",
  "oh/saint-clairsville": "oh/st-clairsville",
  "or/saint-helens": "or/st-helens",
  "pa/saint-marys": "pa/st-marys",
  "sc/mt-pleasant": "sc/mount-pleasant",
  "tx/ft-worth": "tx/fort-worth",
  "ut/saint-george": "ut/st-george",
  "vt/saint-albans": "vt/st-albans",
  "vt/saint-johnsbury": "vt/st-johnsbury",
  "wi/mt-pleasant": "wi/mount-pleasant",
  "wi/saint-croix-falls": "wi/st-croix-falls",
};

/** Retired /{region}/{city} -> canonical pathname, or null. Bare 2-segment only. */
export function resolveCityRedirect(pathname: string): string | null {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/");
  if (parts.length !== 2) return null;
  const key = `${parts[0].toLowerCase()}/${parts[1].toLowerCase()}`;
  const to = CITY_REDIRECTS[key];
  return to ? `/${to}` : null;
}
