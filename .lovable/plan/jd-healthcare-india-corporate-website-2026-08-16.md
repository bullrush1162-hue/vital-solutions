# JD Healthcare India — Corporate Website

A premium medical-equipment corporate site built from the brochure content, in the navy / medical-blue visual system, with all 8 pages.

## Design system

- Tokens in `src/styles.css`: navy `#0B2F5B`, medical blue `#1479C9`, cyan `#19A9D5`, restrained red `#D53B32`, white, grey `#F5F7FA`, soft blue `#EAF5FB`, text `#172033`, muted `#667085`.
- Inter (headings + body) loaded via `<link>` in the root route.
- Radii 8/12/16/20px, 4/8/…/96px spacing scale, soft card elevation, subtle blue gradients, faint ECG-line motifs.
- Motion: 200–500ms fades, 3–5px card lift on hover, scroll reveals, all disabled under `prefers-reduced-motion`.

## Content source of truth

All product names, taglines, key features, variants and specifications come from the uploaded brochure (Mindray SV300 / SV300 Neonatal, uMEC 100-120-150, ePM series, BeneVision N-Series, BeneHeart R700 & R300, uMED 20, BeneFusion uSP/uVP, A1, A3, V60 vaporizer, HyBase V3, OT light, Phoenix NWS 101, CIC 101, Brilliance Pro / DSPT / BAS, delivery table, Shalya Easy / Sigma / Vista, L8N fetal monitor, Bubble CPAP, accessories). Nothing is invented — where the brochure is silent a product shows "Contact our team for detailed specifications."

Company details, director info (Dinesh Kumawat, since 2009; company since 2017), address and phone numbers used exactly as supplied.

## Images

Product photos extracted from the brochure PDF, uploaded as CDN assets and used on cards and detail pages. Where a brochure image is too low quality, a clean neutral branded placeholder tile is used instead, easy to swap later. Brand logos (Mindray, Phoenix, Shalya) are used as-is, undistorted. The director's supplied photo is used unaltered — if it isn't recoverable at usable quality from the PDF, that slot shows a neutral placeholder pending a fresh upload.

## Pages

1. **Home** — hero (eyebrow, "Delivering Advanced **Healthcare Solutions**", 3 CTAs, equipment composition on soft blue backdrop), trust strip, 6 product categories, featured products grid, brand strip, healthcare solutions, why choose us, about preview, director message, values, dark navy service & support, gradient final CTA.
2. **/products** — search + category filter + brand filter, responsive 4/2/1 grid.
3. **/products/{category}** — six category landing pages: hero, overview, filtered grid, applications, quote CTA.
4. **/products/{slug}** — breadcrumb, gallery, brand/category/name/tagline/overview, quote + contact + brochure CTAs, key features, spec table (desktop) / accordion (mobile), applications, brochure download, related products.
5. **/about** — story, mission, vision, values, director, why choose us.
6. **/brands** — Mindray, Phoenix, Shalya cards with categories and "View Products".
7. **/services** — nine service sections + support CTA.
8. **/contact** — contact info, enquiry form, map block, quick contact cards, tap-to-call.

Plus: Request-a-Quote modal reachable from header/hero/cards/detail/footer (pre-fills the product when opened from a product page), mobile drawer nav, Products mega menu on desktop, floating WhatsApp button (+91 9784107767 with prefilled message), sticky mobile quote CTA on product pages.

## Forms

You picked "Other" for form handling without detail, so the plan assumes: enquiries are stored in Lovable Cloud (a small `enquiries` table) so you have a record, **and** the form additionally offers WhatsApp / call / email shortcuts. Tell me if you'd rather have email-only, a specific inbox, or a CRM/webhook, and I'll adjust before building.

## Technical notes

- Stack stays TanStack Start + React + Tailwind v4 (the project's fixed stack; Next.js App Router isn't available here — routing is file-based under `src/routes/` and gives the same URLs).
- Products live in one typed data module (`src/data/products.ts`) matching the requested object model; categories and brands derive from it. No duplicated product copy in components.
- Reusable components: Header, MegaMenu, MobileMenu, Hero, SectionHeader, CTAButton, CategoryCard, ProductCard, ProductGrid, BrandLogoCard, FeatureCard, SolutionCard, DirectorSection, ServiceCard, CTASection, InquiryForm, QuoteModal, Footer, Breadcrumb, SpecsTable, BrochureDownload, RelatedProducts, WhatsAppButton.
- Per-route `head()` with unique title/description/OG/Twitter/canonical; Organization + LocalBusiness JSON-LD on the root, Product JSON-LD on detail pages.
- Accessibility: WCAG AA contrast, keyboard-navigable menus, visible focus, ARIA labels, labelled form fields, 48px touch targets, alt text on every product image.
- Performance: lazy-loaded imagery, code-split routes, no oversized hero bitmaps.

## Build order

Design system → header/footer/nav → shared components → product data module → homepage → products + filters → category pages → product detail → about/brands/services/contact → quote modal + WhatsApp → responsive, a11y and SEO pass.
