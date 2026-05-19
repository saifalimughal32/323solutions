export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  image: string; // import key resolved in route
  includes: string[];
  process: { step: number; title: string; text: string }[];
  pricing: {
    startingAt: string;
    typicalRange: string;
    notes: string;
  };
  faqs: { q: string; a: string }[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "window-cleaning": {
    slug: "window-cleaning",
    title: "Window Cleaning",
    tagline: "Streak-free glass, inside and out.",
    overview:
      "Crystal-clear windows make every room feel brighter. We clean glass, frames, tracks, and sills using pure-water tech and water-fed poles for a spotless, streak-free finish — every time.",
    image: "service-window",
    includes: [
      "Interior & exterior glass",
      "Window tracks & sills wiped",
      "Screens cleaned",
      "Hard-water spot treatment available",
      "Streak-free guarantee",
      "Up to 3-story access included",
    ],
    process: [
      { step: 1, title: "Walk-through", text: "We confirm window count and any hard-water or paint spots." },
      { step: 2, title: "Exterior wash", text: "Pure-water poles or traditional squeegee depending on the glass." },
      { step: 3, title: "Interior detail", text: "Drop cloths down, frames and sills wiped, tracks vacuumed." },
      { step: 4, title: "Final inspection", text: "We walk every window with you before we leave." },
    ],
    pricing: {
      startingAt: "$189",
      typicalRange: "$189 – $450",
      notes: "Most West Michigan homes fall in this range. Larger homes or hard-water restoration quoted separately.",
    },
    faqs: [
      { q: "Do you clean screens too?", a: "Yes — screens are removed, rinsed, and reinstalled at no extra charge." },
      { q: "How often should windows be cleaned?", a: "Twice a year for most homes — once in spring and once in fall." },
      { q: "What about hard-water stains?", a: "We offer a hard-water restoration add-on for stubborn mineral buildup." },
    ],
  },
  "pressure-washing": {
    slug: "pressure-washing",
    title: "Pressure Washing",
    tagline: "Heavy-duty cleaning for concrete and hard surfaces.",
    overview:
      "Professional surface-cleaner equipment and hot-water rinses lift years of dirt, oil, algae, and tire marks from driveways, sidewalks, patios, and garage floors.",
    image: "service-pressure",
    includes: [
      "Driveways, sidewalks, patios",
      "Pool decks & garage floors",
      "Commercial parking lots",
      "Oil & rust spot treatment",
      "Surface-cleaner finish (no zebra stripes)",
      "Eco-safe degreaser",
    ],
    process: [
      { step: 1, title: "Inspect surface", text: "We identify staining, cracks, and any sensitive landscaping." },
      { step: 2, title: "Pre-treat", text: "Algae killer and degreaser applied where needed." },
      { step: 3, title: "Surface clean", text: "Commercial surface-cleaner removes grime evenly — no streaks." },
      { step: 4, title: "Rinse & finish", text: "Hot-water rinse and edge detail with a wand." },
    ],
    pricing: {
      startingAt: "$249",
      typicalRange: "$249 – $650",
      notes: "Driveway-only jobs start at $249. Full driveway + walkways + patio bundles save 15%.",
    },
    faqs: [
      { q: "Will pressure washing damage my concrete?", a: "No — our surface cleaners use controlled pressure that lifts grime without etching." },
      { q: "Can you remove oil stains?", a: "Most fresh oil stains lift fully. Old, set-in stains lighten significantly but may not fully disappear." },
      { q: "Do you bring your own water?", a: "We use your outdoor spigot. If water isn't available, we can bring a tank — just let us know." },
    ],
  },
  "house-washing": {
    slug: "house-washing",
    title: "House Washing",
    tagline: "Gentle soft-wash that protects your siding.",
    overview:
      "Our low-pressure soft-wash system lifts dirt, pollen, algae, and mildew from vinyl, aluminum, brick, and stucco — without forcing water behind the siding.",
    image: "service-house",
    includes: [
      "Soft-wash siding (vinyl, aluminum, brick, stucco)",
      "Algae, mildew & spider web removal",
      "Trim, shutters & soffits",
      "Front door & light fixtures",
      "Eco-safe biodegradable detergents",
      "Plant & landscape protection",
    ],
    process: [
      { step: 1, title: "Protect", text: "Plants and landscaping rinsed and covered as needed." },
      { step: 2, title: "Apply cleanser", text: "Biodegradable surfactant suspends dirt and kills algae." },
      { step: 3, title: "Soft rinse", text: "Low-pressure rinse from top to bottom — never high pressure on siding." },
      { step: 4, title: "Detail check", text: "Trim, fixtures, and any missed spots hit by hand." },
    ],
    pricing: {
      startingAt: "$329",
      typicalRange: "$329 – $750",
      notes: "Single-story ranches start around $329; two-story homes typically $499 – $750.",
    },
    faqs: [
      { q: "Is soft washing safe for my plants?", a: "Yes — we rinse landscaping before and after, and use plant-safe detergents." },
      { q: "How long do results last?", a: "Most homes stay clean 12–18 months. Annual washes are the sweet spot." },
      { q: "Do you wash brick?", a: "Yes. Brick gets a slightly different mix to avoid efflorescence." },
    ],
  },
  "roof-washing": {
    slug: "roof-washing",
    title: "Roof Washing",
    tagline: "Safe, low-pressure roof cleaning that removes black streaks.",
    overview:
      "Those dark streaks on your roof are gloeocapsa magma — a roof-eating bacteria. We apply an asphalt-safe soft-wash treatment that kills it on contact and restores a uniform color, with zero high-pressure damage to shingles.",
    image: "service-house",
    includes: [
      "Asphalt & shingle-safe soft wash",
      "Black streak (algae) removal",
      "Moss & lichen treatment",
      "Gutter & downspout rinse",
      "No high-pressure on shingles",
      "Manufacturer-approved chemistry",
    ],
    process: [
      { step: 1, title: "Roof assessment", text: "Inspect pitch, shingle condition, and identify problem areas." },
      { step: 2, title: "Apply treatment", text: "ARMA-approved soft-wash mix applied evenly across the roof." },
      { step: 3, title: "Dwell", text: "Solution sits and kills algae at the root — no scrubbing needed." },
      { step: 4, title: "Rinse & protect", text: "Gentle rinse, gutters flushed, landscape rinsed clean." },
    ],
    pricing: {
      startingAt: "$449",
      typicalRange: "$449 – $950",
      notes: "Pricing depends on roof square footage, pitch, and accessibility. Free on-site estimate available.",
    },
    faqs: [
      { q: "Will this void my shingle warranty?", a: "No — soft washing is the only method approved by ARMA (Asphalt Roofing Manufacturers Association)." },
      { q: "How long until streaks come back?", a: "Typically 4–6 years before another treatment is needed." },
      { q: "Can you do moss removal too?", a: "Yes — moss requires a slightly stronger application and a longer dwell time." },
    ],
  },
  "gutter-cleaning": {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    tagline: "Full clear-out plus exterior brightening.",
    overview:
      "Clogged gutters cause roof leaks, foundation damage, and ice dams. We remove every leaf and shingle granule, flush every downspout, and brighten the exterior so they look like new.",
    image: "service-house",
    includes: [
      "Full hand removal of debris",
      "Downspout flush & test",
      "Exterior gutter brightening (add-on)",
      "Photo documentation of clogs",
      "Debris hauled away",
      "Up to 3-story access",
    ],
    process: [
      { step: 1, title: "Inspect", text: "Walk the property and note any sagging or damaged sections." },
      { step: 2, title: "Hand clean", text: "All debris removed by hand into buckets — no blowing into your yard." },
      { step: 3, title: "Flush", text: "Every downspout flushed and tested for proper drainage." },
      { step: 4, title: "Cleanup", text: "Debris hauled away, photos sent showing before and after." },
    ],
    pricing: {
      startingAt: "$169",
      typicalRange: "$169 – $395",
      notes: "Most single-story homes $169 – $229; two-story homes $249 – $395. Brightening add-on $1.50/linear foot.",
    },
    faqs: [
      { q: "How often should gutters be cleaned?", a: "Twice a year minimum — late spring after maple seeds, and late fall after leaves." },
      { q: "Do you repair gutters too?", a: "We re-seat loose hangers and reseal minor leaks. Major repairs are referred to a partner." },
      { q: "What about gutter guards?", a: "We can clean above and below most guards. Some types need to be removed first." },
    ],
  },
  "deck-fence-cleaning": {
    slug: "deck-fence-cleaning",
    title: "Deck & Fence Cleaning",
    tagline: "Restore the natural look of wood and composite.",
    overview:
      "Wood and composite surfaces need gentle care. We use the right pressure and the right detergent to lift gray, mildew, and grime without fuzzing the wood — leaving it ready for stain or sealer.",
    image: "service-deck",
    includes: [
      "Wood, composite & vinyl decking",
      "Wood & vinyl fencing",
      "Pergolas & gazebos",
      "Wood brightener finish",
      "Optional staining-prep wash",
      "Plant protection",
    ],
    process: [
      { step: 1, title: "Test spot", text: "Pressure tested in a small area to confirm safe settings." },
      { step: 2, title: "Apply cleaner", text: "Wood-safe cleaner suspends gray and dirt." },
      { step: 3, title: "Gentle rinse", text: "Controlled pressure rinse with the grain — no swirl marks." },
      { step: 4, title: "Brighten", text: "Optional brightener restores the natural wood tone." },
    ],
    pricing: {
      startingAt: "$229",
      typicalRange: "$229 – $595",
      notes: "Pricing per square foot for decks; per linear foot for fencing. Brightener included on deck packages over $349.",
    },
    faqs: [
      { q: "Can you stain the deck after cleaning?", a: "We don't stain ourselves, but we leave the wood properly prepped and dry for any stain applicator." },
      { q: "Will pressure washing damage my deck?", a: "Not when done correctly — we use 500-1200 PSI on wood, far below what damages." },
      { q: "How long before I can walk on it?", a: "About 4 hours to surface-dry; 24 hours before staining." },
    ],
  },
  "driveway-patio": {
    slug: "driveway-patio",
    title: "Driveway & Patio",
    tagline: "Bright concrete and pavers, every season.",
    overview:
      "From grimy garage aprons to weed-filled paver patios, we have the right surface cleaner, degreaser, and finishing rinse for every concrete and paver surface around your home.",
    image: "service-pressure",
    includes: [
      "Hot-water surface clean",
      "Oil & rust stain treatment",
      "Paver weed & moss removal",
      "Polymeric sand re-application (add-on)",
      "Sealer-ready finish",
      "Eco-safe degreaser",
    ],
    process: [
      { step: 1, title: "Pre-treat", text: "Apply degreaser and algaecide to problem areas." },
      { step: 2, title: "Surface clean", text: "Commercial surface cleaner removes grime in even passes." },
      { step: 3, title: "Edge & detail", text: "Wand work along edges, expansion joints, and paver borders." },
      { step: 4, title: "Optional sand", text: "Pavers re-sanded with polymeric sand if requested." },
    ],
    pricing: {
      startingAt: "$249",
      typicalRange: "$249 – $695",
      notes: "Driveway + sidewalks bundle saves 15%. Paver re-sanding add-on $0.75/sq ft.",
    },
    faqs: [
      { q: "Do you reseal driveways?", a: "We don't apply sealers directly, but our finish is sealer-ready and dry within 24 hours." },
      { q: "Will the weeds come back fast?", a: "Polymeric sand re-application keeps them out for 2-3 years. Without it, expect 6-12 months." },
      { q: "What about my stamped concrete?", a: "We adjust pressure and use color-safe cleaners — stamped concrete is no problem." },
    ],
  },
};