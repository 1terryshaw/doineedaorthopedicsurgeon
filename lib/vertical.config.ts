const verticalConfig = {
  inquiryNoEmailPolicy: "hide", // TDL #455 (empire default)
  // === BRANDING ===
  name: "DoINeedAOrthopedicSurgeon.com",
  shortName: "DoINeedAOrthopedicSurgeon",
  tagline: "Find an orthopedic surgeon near you",
  description: "A public directory of licensed orthopedic surgeons compiled from state medical board records and NPPES. Search by location. Not a medical referral service — see our disclaimer.",
  entity: "Orthopedic Surgeon",
  entityPlural: "Orthopedic Surgeons",
  slug: "doineedaorthopedicsurgeon",
  domain: "doineedaorthopedicsurgeon.com",
  displayDomain: "doineedaorthopedicsurgeon.com",
  supportEmail: "hello@doineedaorthopedicsurgeon.com",
  primaryColor: "#6B8F71",
  ctaColor: "#E17055",
  instagramHandle: "",

  // === INDEXING GATE (Phase 5.1) ===
  // true → robots.txt Disallow: / AND <meta name="robots" content="noindex,nofollow">
  // on every page. Mirrors the doineedaphysician.com Phase 2c gate. Flip to false
  // ONLY after the human disclaimer/TOS sign-off review pass (then resubmit sitemap to GSC).
  indexingGated: false,

  // === ENTITY NOUNS ===
  listingNoun: "orthopedic surgeon",
  listingNounPlural: "orthopedic surgeons",

  // === COLORS ===
  heroGradientFrom: "#6B8F71",
  heroGradientVia: "#5A7D60",
  heroGradientTo: "#4A6B50",
  creamBg: "#FFF8F0",
  defaultCountry: "US",

  // === COUNTRY SUPPORT (TDL #271) ===
  supportedCountries: ["US", "CA"] as const,

  // === DATABASE ===
  tablePrefix: "orthopedic_surgeon_",

  // === BILLING ===
  siteforgeEnabled: true,

  // === TRIAGE ===
  // Disabled for the orthopedic surgeon vertical: a symptom/diagnosis quiz would constitute
  // medical advice (see app/disclaimer/page.tsx — "Not Medical Advice"). Directory only.
  triageEnabled: false,
  triageType: "quiz",
  triageQuestions: [],
  triageResults: {
    low: { heading: "", body: "", ctaStyle: "secondary" },
    moderate: { heading: "", body: "", ctaStyle: "primary" },
    high: { heading: "", body: "", ctaStyle: "primary" },
  },
  crisisResources: {
    enabled: true,
    resources: [
      { label: "Medical emergency? Call 911 or go to your nearest ER", type: "emergency" },
      { label: "Poison Control: 1-800-222-1222", type: "crisis", url: "tel:18002221222" },
      { label: "Mental health crisis: call or text 988", type: "crisis", url: "tel:988" },
    ],
  },
  triageDisclaimer: "This directory provides listing information only and is not medical advice, diagnosis, or treatment. If you are experiencing a medical emergency, call 911.",

  // === SECTION A: SPECIALTY TILES — INTENTIONALLY EMPTY (single-specialty site) ===
  // DoINeedAOrthopedicSurgeon.com is a single-specialty directory; there is no
  // "browse by specialty" grid. Empty array also keeps /specialty out of the
  // sitemap (app/sitemap/[id]/route.ts iterates this) and the /directory
  // listing_type filter (lib/constants.ts → LISTING_TYPES). Multi-specialty
  // browsing lives on the parent hub, doineedaphysician.com.
  showSpecialtyFilter: false, // TDL #980 — listing_type data gap; dropdown hidden until enrichment
  categoryLabels: [] as { slug: string; label: string; emoji: string; description: string }[],

  // === SECTION B: RELATED SPECIALISTS (external cross-links) ===
  // Parent physician hub + musculoskeletal-adjacent empire directories. Rendered
  // as external cards (target=_blank rel=noopener) on the homepage.
  relatedSpecialists: [
    { label: "Physiotherapist", description: "Post-surgery rehab and movement recovery", url: "https://doineedaphysiotherapist.com" },
    { label: "Chiropractor", description: "Spinal alignment and musculoskeletal therapy", url: "https://doineedachiropractor.com" },
    { label: "Massage Therapist", description: "Musculoskeletal pain management and recovery", url: "https://doineedamassagetherapist.com" },
  ],

  // === NATIONAL REGIONS ===
  // REGION HUBS — empty-city-hubs-fan-v1 (F2, 2026-09-07). See K200.
  //
  // The 60 Canadian CITY hubs the donor template shipped (toronto, montreal,
  // vancouver, …) were REMOVED. orthopedic_surgeon_listings is 4,429 rows, 100% US — ZERO CA — so every one of
  // them rendered an indexable empty 200 and was advertised in the sitemap. No backfill
  // would have filled them: this is a market mismatch, not a grain one, and the fix is
  // curation.
  //
  // The 13 Canadian PROVINCE hubs (ab, bc, on, …) are DELIBERATELY KEPT. Terry's ruling
  // 2026-09-07: gate state/province hubs, never remove them — they 404 while empty and
  // self-revive the day CA rows land. Only city hubs are curated away.
  regions: [
    // Ontario
    // British Columbia
    // Alberta
    // Quebec
    // Manitoba
    // Saskatchewan
    // Nova Scotia
    // New Brunswick
    // Newfoundland
    // PEI
    { slug: "ab", label: "Alberta", province: "AB" },
    { slug: "bc", label: "British Columbia", province: "BC" },
    { slug: "mb", label: "Manitoba", province: "MB" },
    { slug: "nb", label: "New Brunswick", province: "NB" },
    { slug: "nl", label: "Newfoundland and Labrador", province: "NL" },
    { slug: "ns", label: "Nova Scotia", province: "NS" },
    { slug: "nt", label: "Northwest Territories", province: "NT" },
    { slug: "nu", label: "Nunavut", province: "NU" },
    { slug: "on", label: "Ontario", province: "ON" },
    { slug: "pe", label: "Prince Edward Island", province: "PE" },
    { slug: "qc", label: "Quebec", province: "QC" },
    { slug: "sk", label: "Saskatchewan", province: "SK" },
    { slug: "yt", label: "Yukon", province: "YT" },
    { slug: "al", label: "Alabama", province: "AL" },
    { slug: "ak", label: "Alaska", province: "AK" },
    { slug: "az", label: "Arizona", province: "AZ" },
    { slug: "ar", label: "Arkansas", province: "AR" },
    { slug: "ca", label: "California", province: "CA" },
    { slug: "co", label: "Colorado", province: "CO" },
    { slug: "ct", label: "Connecticut", province: "CT" },
    { slug: "de", label: "Delaware", province: "DE" },
    { slug: "fl", label: "Florida", province: "FL" },
    { slug: "ga", label: "Georgia", province: "GA" },
    { slug: "hi", label: "Hawaii", province: "HI" },
    { slug: "id", label: "Idaho", province: "ID" },
    { slug: "il", label: "Illinois", province: "IL" },
    { slug: "in", label: "Indiana", province: "IN" },
    { slug: "ia", label: "Iowa", province: "IA" },
    { slug: "ks", label: "Kansas", province: "KS" },
    { slug: "ky", label: "Kentucky", province: "KY" },
    { slug: "la", label: "Louisiana", province: "LA" },
    { slug: "me", label: "Maine", province: "ME" },
    { slug: "md", label: "Maryland", province: "MD" },
    { slug: "ma", label: "Massachusetts", province: "MA" },
    { slug: "mi", label: "Michigan", province: "MI" },
    { slug: "mn", label: "Minnesota", province: "MN" },
    { slug: "ms", label: "Mississippi", province: "MS" },
    { slug: "mo", label: "Missouri", province: "MO" },
    { slug: "mt", label: "Montana", province: "MT" },
    { slug: "ne", label: "Nebraska", province: "NE" },
    { slug: "nv", label: "Nevada", province: "NV" },
    { slug: "nh", label: "New Hampshire", province: "NH" },
    { slug: "nj", label: "New Jersey", province: "NJ" },
    { slug: "nm", label: "New Mexico", province: "NM" },
    { slug: "ny", label: "New York", province: "NY" },
    { slug: "nc", label: "North Carolina", province: "NC" },
    { slug: "nd", label: "North Dakota", province: "ND" },
    { slug: "oh", label: "Ohio", province: "OH" },
    { slug: "ok", label: "Oklahoma", province: "OK" },
    { slug: "or", label: "Oregon", province: "OR" },
    { slug: "pa", label: "Pennsylvania", province: "PA" },
    { slug: "ri", label: "Rhode Island", province: "RI" },
    { slug: "sc", label: "South Carolina", province: "SC" },
    { slug: "sd", label: "South Dakota", province: "SD" },
    { slug: "tn", label: "Tennessee", province: "TN" },
    { slug: "tx", label: "Texas", province: "TX" },
    { slug: "ut", label: "Utah", province: "UT" },
    { slug: "vt", label: "Vermont", province: "VT" },
    { slug: "va", label: "Virginia", province: "VA" },
    { slug: "wa", label: "Washington", province: "WA" },
    { slug: "wv", label: "West Virginia", province: "WV" },
    { slug: "wi", label: "Wisconsin", province: "WI" },
    { slug: "wy", label: "Wyoming", province: "WY" },
    { slug: "dc", label: "District of Columbia", province: "DC" },
  ],

  // === PROVINCE LABELS ===
  provinceLabels: {
    ON: "Ontario",
    BC: "British Columbia",
    AB: "Alberta",
    QC: "Quebec",
    MB: "Manitoba",
    SK: "Saskatchewan",
    NS: "Nova Scotia",
    NB: "New Brunswick",
    NL: "Newfoundland & Labrador",
    PE: "Prince Edward Island",
  } as Record<string, string>,

  // === CROSS-REFERRAL (v7) ===
  cluster: "B",
  crossReferrals: [
    { name: 'Not Sure Which Pro?', url: 'https://doineedapro.com', description: 'Free AI triage — tell us your problem, we\'ll tell you which type of pro to call' },
    { name: "Find Any Physician", url: "https://doineedaphysician.com", pathPattern: "/{city}" },
    { name: "Find a Physiotherapist", url: "https://doineedaphysiotherapist.com", pathPattern: "/{city}" },
  ],

  // === FAQs ===
  faqs: [
    {
      question: "Is this a medical referral service?",
      answer: "No. DoINeedAOrthopedicSurgeon.com is a public directory compiled from state medical board records and NPPES. Inclusion is not an endorsement or referral, and we do not vet or rank practitioners. Always verify an orthopedic surgeon's current license and credentials directly with the relevant state medical board."
    },
    {
      question: "Where does the listing information come from?",
      answer: "Listings are sourced from public, government-maintained records: the Medical Board of California / California Department of Consumer Affairs and the National Plan and Provider Enumeration System (NPPES) from the Centers for Medicare & Medicaid Services. No patient information is collected or displayed."
    },
    {
      question: "Does a listing mean an orthopedic surgeon is board certified?",
      answer: "Not necessarily. Specialty designations reflect taxonomy codes in licensee records and do not represent board certification unless explicitly stated. Verify board certification with the American Board of Orthopaedic Surgery (abos.org) or the American Board of Medical Specialties (abms.org)."
    },
    {
      question: "How current is the license and contact information?",
      answer: "Records may be incomplete or outdated. License status, location, and contact details can change after our last data refresh. Always confirm current details with the orthopedic surgeon's office and the state medical board before relying on them."
    },
    {
      question: "I'm an orthopedic surgeon — how do I claim, correct, or remove my listing?",
      answer: "Click 'Claim Your Listing' on your listing page and verify ownership with your professional email, or contact us via the contact page. Claiming and corrections are free, and we respond to verified removal requests within 7 business days."
    },
    {
      question: "What should I do in a medical emergency?",
      answer: "Do not use this directory in an emergency. If you are experiencing a medical emergency, call 911 immediately or go to your nearest emergency room."
    },
  ],

  // Design personality
  design: {
    primaryColor: '#6B8F71',
    accentColor: '#3B82F6',
    personalityWord: 'trusted',
    personalityIcon: 'Stethoscope',
    heroPattern: 'dots' as const,
    loadingMessages: [
      'Checking the directory...',
      'Looking up orthopedic surgeons...',
      'Gathering listings...',
      'Almost there...',
      'Loading results...',
    ],
    notFoundMessage: 'That page could not be found.',
  },
};

export default verticalConfig;
