# DoINeedAOrthopedicSurgeon.com — Orthopedic Surgeon Directory (Phase 5.1 spin-up)

Public directory of licensed orthopedic surgeons. Spun up by cloning **doineedaphysician.com**
(Directory Stamper V14 manual playbook) for empire Phase 5.1 Wave 1. Seeded one-shot from
`physician_listings` filtered to the orthopedic-surgery taxonomy.

**Single-specialty site.** There is NO `/specialty/*` browse layer and NO "Browse by Specialty"
homepage grid — that is the parent hub's job. Multi-specialty browsing lives on the parent,
**doineedaphysician.com**, which is cross-linked from the homepage (Section B) and footer.

## Tech Stack
- Next.js 14.2.35, TypeScript, Tailwind CSS
- Supabase (single empire project `msqiynbhoeruqctaesqk`)
- Stripe + empire-billing handshake (HS256 BILLING_HMAC_SECRET)
- Resend + Gmail SMTP (claim / lead email)

## Data
- Vertical slug: `orthopedic-surgeon` (row in `empire_verticals`, name_col=`business_name`)
- Table prefix: `orthopedic_surgeon_` → `orthopedic_surgeon_listings`, `orthopedic_surgeon_inquiries`
- **Seed source:** `physician_listings WHERE derived_taxonomy ~ '^207X' AND is_published = true`
  (37,635 rows). One-shot INSERT-SELECT of the **non-generated columns** (diff-sync deferred
  to Phase 5.2).
- `orthopedic_surgeon_listings` = `CREATE TABLE LIKE physician_listings INCLUDING ALL`. Generated
  columns (**NEVER INSERT** — copied verbatim from physician_listings):
  `business_name` (=name), `province` (=province_state), `tier_priority`, `name_sortkey`.
- Materialized views the app reads (derived from table name in `lib/supabase.ts`):
  `mv_orthopedic_surgeon_listings_regions`, `mv_orthopedic_surgeon_listings_cities`. REFRESH after
  any re-seed.
- RLS: public SELECT, service_role full access (listings); public INSERT + service_role full
  (inquiries) — mirrors physician_listings / physician_inquiries.

## Data Sources (cite publicly — see /disclaimer)
- California Department of Consumer Affairs / Medical Board of California public licensee records
- National Plan and Provider Enumeration System (NPPES), CMS
- Additional state medical board public records
- Contains NO patient information / NO PHI.

## NON-NEGOTIABLES (medical vertical)
1. **Disclaimer page** — `app/disclaimer/page.tsx`. **DO NOT modify the legal substance without
   legal sign-off.** (The orthopedic surgeon spin-up only rebranded the entity noun + brand name;
   the not-a-referral / not-medical-advice / 911 / accuracy / data-sources / limitation-of-liability
   structure is unchanged.)
2. **Emergency banner** — `components/EmergencyBanner.tsx`, rendered in `app/layout.tsx` ABOVE the
   header on EVERY page ("Medical emergency? Call 911"). Do not remove/weaken.
3. **Listing-detail license notice** — `app/directory/[slug]/page.tsx` ("Verify this orthopedic
   surgeon's current license directly with the relevant state medical board").
4. **Footer disclaimer link** on every page (`components/Footer.tsx`).
5. **No symptom/diagnosis triage.** `triageEnabled: false` in `lib/vertical.config.ts`.
6. Standard build standards: favicon in `public/favicon.svg`, 'Other' last in dropdowns,
   JSON-LD (`["Physician","MedicalBusiness"]` — schema.org has no orthopedic-surgery subtype; keep
   `Physician`) on listing pages, OG/Twitter meta, real meta description, email unsubscribe +
   List-Unsubscribe headers, `/api/health` 200 + count, mobile+desktop clean, Tailwind globs
   cover all TSX.

## Single-Specialty Differences from the Physician Parent
- `lib/vertical.config.ts`: `categoryLabels: []` (empties Section A, the `/directory` listing_type
  filter, and `/specialty` sitemap entries); `relatedSpecialists` + `crossReferrals` point at the
  parent hub doineedaphysician.com.
- `app/specialty/` and `app/learn/` routes **deleted** (the multi-specialty guide doesn't fit).
- `lib/supabase.ts`: `getSpecialtyCounts` / `getSpecialtyListings` (which called the
  `physician_specialty_*` RPCs) **removed** — those RPCs are not cloned for this vertical.
- `app/sitemap/[id]/route.ts`: queries `LISTINGS_TABLE` (not a hardcoded table); `/learn` removed
  from STATIC_ENTRIES.

## Billing handshake
- `BILLING_VERTICAL_SLUG=orthopedic-surgeon`, `BILLING_HMAC_SECRET` = `empire_verticals.hmac_secret`
  for the `orthopedic-surgeon` row (empire-billing verifies the HS256 handoff against that DB value).

## Domain Rules
- NEXT_PUBLIC_BASE_URL = `https://doineedaorthopedicsurgeon.com` (apex, NEVER www)
- NEVER set Domain attribute on cookies; NO middleware.js/ts
- Cookie name derives from table prefix: `orthopedic_surgeon_owner_token`
- Vercel domain attach: apex canonical + www alias, **status code 308**

## All Data-Fetching Pages MUST Have
```typescript
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
```

## /costs Cost Estimator
Deferred (not seeded). `/api/health` reports `cost_models: EMPTY` (status "degraded" expected pre-seed).

## Empire Pricing
Claimed (free) → Reviews Plus ($9/mo) → Website ($49/mo) → Growth ($97/mo)

## Indexing gate (Phase 5.1)
`indexingGated: true` in `lib/vertical.config.ts` → `robots.txt` returns `Disallow: /` and every
page emits `<meta name="robots" content="noindex,nofollow">` (via `app/layout.tsx`). Flip to
`false` ONLY after the human disclaimer/TOS sign-off, then resubmit the sitemap to GSC.

## Development
```bash
npm install && npm run dev   # PORT=3103 if 3000 taken
npm run build
```
