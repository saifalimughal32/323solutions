# Plan

## 1. Home "Contact Us Today" — join info card and map (no gap)

**File:** `src/routes/index.tsx` (function `ContactPanel`, ~line 1090)

Currently the left contact column and right Google map iframe sit inside one cream rounded container with `gap-10 lg:gap-14` between them, so there's a wide cream strip dividing the two halves.

Changes:
- Remove the inner gap so the map sits flush against the info column (`gap-0`).
- Stretch the map iframe to full height (`h-full`) and pin it to the right edge so its rounded corners hug the outer container's right side (drop `rounded-3xl` on the inner wrapper, let the parent `rounded-[2.5rem]` clip it).
- Keep `overflow-hidden` on the outer wrapper so corners stay clean.
- Increase the map's min-height a touch on desktop so it matches the info column height (`lg:min-h-full`).
- Keep the small floating "city name" badge inside the map area.

Result: the two halves read as one seamless contact + map card with no empty cream column between them.

## 2. Home "Cleaning Tips" section — redesign to match reference screenshot

**File:** `src/routes/index.tsx` (function `BlogTeaser`, ~line 1048)

Reference (user screenshot): cream/light background, small "FROM OUR BLOG" eyebrow with diagonal accent ticks, large left-aligned "Cleaning Tips From Pros" heading, **three** equal-width image cards in a row (image → green category label → dark title), centered pill "More Tips" button below with soft-green outline.

Changes:
- Drop current 2-column layout (heading left + 2 posts right). Make it a single full-width section: heading block on top, 3 cards in a row, CTA centered below.
- Background: keep page background (cream) — no inner container card.
- Eyebrow: `FROM OUR BLOG` small caps + small SVG slash accent on the right (decorative ticks like reference).
- Heading: "Cleaning Tips From Pros", left-aligned, same display font weight as other section headings.
- 3 cards (add a 3rd post; reuse an existing image — e.g., move/before/team):
  - Image: `rounded-2xl`, `aspect-[4/3]`, `object-cover`, hover scale.
  - Below image: small green uppercase tag (e.g. ORGANIZING / CLEANING / TIPS).
  - Title: dark navy, `font-display`, ~lg/xl, two-line clamp friendly.
  - Card itself is link-wrapped to `/cleaning-tips` (or `/about` for now).
- CTA: centered `More Tips` pill — white background, soft green border (`ring-1 ring-brand-green/30`), brand-green text, hover fills with `brand-green-soft`. Use `Link to="/cleaning-tips"`.
- Replace existing 2-post layout entirely.

No new image generation — pick a 3rd image from existing assets (e.g., `svcMove`, `teamImg`, or `transformImg`).

## 3. About page — IntegrityTimeline: only active step's box is blue

**File:** `src/routes/about.tsx` (function `IntegrityTimeline`, ~line 214)

Current behavior:
- Each step transforms `cardBg` from card → navy and text from navy → white, driven by a one-way `useTransform` on `scrollYProgress`.
- Once a step activates, it stays dark forever (cumulative), and during the brief crossfade the text color reads as invisible against the changing background.

Desired behavior (per user):
- Only the step currently in the viewport center gets the highlighted box.
- The box turns **brand-blue** (not navy), with white title/body text.
- When you scroll past it (next step becomes active), the previous step returns to its default light card style.
- Smooth color transition with no "text disappears" moment.

Changes:
- Replace per-step one-way `useTransform` driven by a single section-wide `scrollYProgress` with a per-step "is-active" signal that turns on when that step's card enters the viewport center band and turns off when it leaves.
- Implementation: give each step its own `ref` and use `useInView(ref, { margin: "-40% 0px -40% 0px" })` (framer-motion). This makes only one step active at a time as the user scrolls — and reversible when scrolling back up or further down.
- Drive `backgroundColor`, title color, body color, and the numbered node via `animate` props on `motion.div` (target values switch between inactive light theme and active blue theme based on `isActive`).
  - Active card bg: brand blue (use `--brand-blue` / `hsl(var(--brand-blue))`).
  - Active title: white. Active body: `rgba(255,255,255,0.85)`.
  - Active node (center dot): brand-blue filled with white number; inactive: light ring with navy number (same as today).
- Set `transition={{ duration: 0.35, ease: "easeOut" }}` so the swap is smooth (no scroll-coupled crossfade where text becomes invisible).
- Remove the now-unused `useScroll` / `useSpring` line-fill on the central vertical track? — keep the inactive track line, but tie the green progress fill to the index of the active step (fill from top down to active step's center) so it stays visually consistent. Simpler: keep current `scrollYProgress`-driven fill for the vertical line only; change only the per-card color logic.

Out of scope: no copy changes, no layout changes, no new icons.

## Technical notes

- All edits are presentation-only in three files: `src/routes/index.tsx`, `src/routes/about.tsx`.
- No new dependencies. `useInView` is already exported by framer-motion.
- No data, no backend, no token changes.
- A 3rd blog post entry reuses an existing imported asset — no new images.
