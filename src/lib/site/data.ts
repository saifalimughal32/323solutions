import {
  Sparkles,
  Droplets,
  Home,
  Waves,
  Trees,
  Shovel,
  Brush,
  ShieldCheck,
  Leaf,
  Clock,
  BadgeCheck,
  Award,
  Wrench,
  Eye,
  TrendingUp,
  Users,
} from "lucide-react";

export const BRAND = {
  name: "323 Cleaning Solutions",
  phone: "(616) 223-1260",
  phoneHref: "tel:+16162231260",
  email: "hello@323cleaningsolutions.com",
  region: "West Michigan",
  address: "Jenison, MI",
};

export type NavChild = { to: string; label: string };
export type NavItem = { to: string; label: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/window-cleaning", label: "Window Cleaning" },
      { to: "/services/pressure-washing", label: "Pressure Washing" },
      { to: "/services/house-washing", label: "House Washing" },
      { to: "/services/roof-washing", label: "Roof Washing" },
      { to: "/services/gutter-cleaning", label: "Gutter Cleaning" },
      { to: "/services/deck-fence-cleaning", label: "Deck & Fence Cleaning" },
      { to: "/services/driveway-patio", label: "Driveway & Patio" },
    ],
  },
  { to: "/pricing", label: "Pricing" },
  {
    to: "/about",
    label: "About us",
    children: [
      { to: "/about", label: "Who We Are" },
      { to: "/faq", label: "FAQs" },
      { to: "/cleaning-process", label: "Cleaning Process" },
      { to: "/reviews", label: "Reviews" },
    ],
  },
  { to: "/cleaning-tips", label: "Cleaning tips" },
  { to: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    icon: Sparkles,
    short: "Streak-free interior and exterior window cleaning for crystal-clear views.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    icon: Droplets,
    short: "Heavy-duty cleaning for driveways, sidewalks, patios, and concrete surfaces.",
  },
  {
    slug: "house-washing",
    title: "House Washing",
    icon: Home,
    short: "Gentle soft-wash that lifts dirt, algae, and mildew without damaging siding.",
  },
  {
    slug: "roof-washing",
    title: "Roof Washing",
    icon: Waves,
    short: "Safe low-pressure roof treatments that remove black streaks and protect shingles.",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    icon: Shovel,
    short: "Complete gutter clear-outs plus exterior brightening for a like-new finish.",
  },
  {
    slug: "deck-fence-cleaning",
    title: "Deck & Fence Cleaning",
    icon: Trees,
    short: "Restore the natural look of wood and composite surfaces around your home.",
  },
  {
    slug: "driveway-patio",
    title: "Driveway & Patio",
    icon: Brush,
    short: "Lift years of grime, oil, and algae for a fresh, bright concrete or paver look.",
  },
] as const;

export const TRUST_STRIP = [
  { icon: BadgeCheck, title: "Licensed & Insured", text: "Fully covered for your peace of mind." },
  { icon: ShieldCheck, title: "Satisfaction Guaranteed", text: "We're not done until you're thrilled." },
  { icon: Leaf, title: "Eco-Safe Cleaning", text: "Safe for plants, pets, and people." },
  { icon: Clock, title: "Fast Response", text: "Quotes within 24 hours, always." },
];

export const WHY_CHOOSE = [
  { icon: Users, title: "Trained Professionals", text: "Background-checked, uniformed technicians who treat your home like their own." },
  { icon: Wrench, title: "Advanced Equipment", text: "Soft-wash systems, water-fed poles, and pure-water tech for safer, better results." },
  { icon: Eye, title: "Attention to Detail", text: "We sweat the small stuff — frames, tracks, edges, and the spots most miss." },
  { icon: TrendingUp, title: "Protects Property Value", text: "Routine exterior care prevents costly damage and keeps curb appeal high." },
];

export const PROCESS = [
  { step: 1, title: "Get a Free Quote", text: "Tell us about your project — we respond within 24 hours." },
  { step: 2, title: "Schedule Your Service", text: "Pick a time that fits your week. We confirm and prep." },
  { step: 3, title: "We Get to Work", text: "Uniformed pros arrive on time with the right tools." },
  { step: 4, title: "Enjoy the Results", text: "Walk-through, satisfaction check, and a sparkling home." },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Grand Rapids, MI",
    quote:
      "323 made our windows look brand new. The team was punctual, polite, and so thorough — even cleaned the tracks. Worth every penny and then some.",
    rating: 5,
    featured: true,
    source: "Google",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  },
  {
    name: "James T.",
    location: "Holland, MI",
    quote: "House and driveway look incredible. Honest pricing, easy scheduling, and zero damage to landscaping.",
    rating: 5,
    source: "Google",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  },
  {
    name: "Lisa R.",
    location: "Zeeland, MI",
    quote: "Best exterior cleaning we've hired in years. We'll be using 323 every spring.",
    rating: 5,
    source: "Facebook",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  },
  {
    name: "Mark D.",
    location: "Rockford, MI",
    quote: "Soft-washed the roof and the black streaks are gone. Pros all the way.",
    rating: 5,
    source: "Google",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  },
  {
    name: "Karen W.",
    location: "Ada, MI",
    quote: "Quick quote, fair price, and the deck looks like new. Couldn't be happier.",
    rating: 5,
    source: "Google",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
  },
];

export const TRANSFORMATIONS = [
  {
    slug: "driveway-grand-rapids",
    label: "Concrete Driveway Restoration",
    service: "Pressure Washing",
    location: "Grand Rapids, MI",
    caption: "Years of oil, algae and tire grime lifted in a single afternoon — surface-cleaner pass plus a hot-water rinse.",
    before: "ba-driveway-before",
    after: "ba-driveway-after",
    review: {
      quote: "Driveway looks like the day it was poured. Crew was on time, friendly, and left everything spotless.",
      author: "Michael R.",
      role: "Homeowner",
      initials: "MR",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
  {
    slug: "house-holland",
    label: "Vinyl Siding Soft-Wash",
    service: "House Washing",
    location: "Holland, MI",
    caption: "Mildew and pollen buildup gently removed with a low-pressure soft-wash — no damage to landscaping.",
    before: "ba-house-before",
    after: "ba-house-after",
    review: {
      quote: "Our siding hasn't looked this clean in 10 years. Honest pricing and zero damage to the garden.",
      author: "Sarah K.",
      role: "Homeowner",
      initials: "SK",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
  {
    slug: "windows-zeeland",
    label: "Interior & Exterior Windows",
    service: "Window Cleaning",
    location: "Zeeland, MI",
    caption: "Streak-free glass plus tracks and sills — a full two-story home completed in about three hours.",
    before: "ba-window-before",
    after: "ba-window-after",
    review: {
      quote: "Streak-free, even the tracks. Finally feels like the sun is fully back inside the house.",
      author: "Patricia L.",
      role: "Customer",
      initials: "PL",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
  {
    slug: "roof-rockford",
    label: "Black Streak Roof Treatment",
    service: "Roof Washing",
    location: "Rockford, MI",
    caption: "Soft-wash roof treatment killed the gloeocapsa magma streaks and restored a uniform shingle color.",
    before: "ba-house-before",
    after: "ba-house-after",
    review: {
      quote: "Those black streaks were driving me crazy for years. Gone in one visit — roof looks brand new.",
      author: "James T.",
      role: "Homeowner",
      initials: "JT",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
  {
    slug: "deck-ada",
    label: "Cedar Deck Brightening",
    service: "Deck & Fence Cleaning",
    location: "Ada, MI",
    caption: "Gray, weathered cedar deck deep-cleaned and brightened — ready for stain and sealer.",
    before: "ba-driveway-before",
    after: "ba-driveway-after",
    review: {
      quote: "Cedar deck looks five years younger. Ready to stain this weekend thanks to 323.",
      author: "Lisa R.",
      role: "Customer",
      initials: "LR",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
  {
    slug: "patio-jenison",
    label: "Paver Patio Refresh",
    service: "Driveway & Patio",
    location: "Jenison, MI",
    caption: "Moss and weeds blasted from joints, pavers brightened to like-new — sand re-application included.",
    before: "ba-window-before",
    after: "ba-window-after",
    review: {
      quote: "Pavers look brand new and the joint sand re-app made a huge difference. Worth every penny.",
      author: "David M.",
      role: "Homeowner",
      initials: "DM",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80",
    },
  },
] as const;

export const AREAS = [
  "Grand Rapids",
  "Holland",
  "Zeeland",
  "Rockford",
  "Ada",
  "Hudsonville",
  "Jenison",
  "Grandville",
  "Caledonia",
  "Byron Center",
  "Forest Hills",
  "Cascade",
];

export const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We proudly serve homeowners and businesses throughout West Michigan, including Grand Rapids, Holland, Zeeland, Rockford, Ada, Hudsonville, Jenison, and surrounding communities. Not sure if you're in our zone? Give us a call.",
  },
  {
    q: "Do you use safe cleaning solutions?",
    a: "Yes. We use biodegradable, eco-safe detergents that are tough on dirt and algae but gentle on plants, pets, and people. Our soft-wash method protects your siding, roof, and landscaping.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Nope. As long as we have access to water and the areas to be cleaned, you don't need to be present. We'll send before-and-after photos when we wrap up.",
  },
  {
    q: "How long does a service take?",
    a: "Most residential jobs take between 1 and 4 hours depending on the size of your home and the services requested. We'll give you an accurate time estimate with your quote.",
  },
  {
    q: "How often should I clean my home's exterior?",
    a: "We recommend a full exterior wash once a year, with gutters every 6–12 months. Windows are typically done twice a year (spring and fall) for the best curb appeal.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards, ACH transfer, check, and cash. Payment is due upon completion of the service unless other arrangements are made.",
  },
];

export const WHY_BADGES = { Award };
