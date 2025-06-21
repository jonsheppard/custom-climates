# Custom Climates - Implementation Plan

This document breaks down the website rebuild into manageable phases, based on the [Website Strategy](./website-strategy.md). We will update this plan as we complete each task.

---

### Phase 1: Foundation & Core Homepage
**Status:** Complete 🟢

This phase focuses on setting up the core infrastructure and building the essential, above-the-fold content for the homepage.

- [x] Set up a fresh Astro project with Tailwind CSS.
- [x] Implement a responsive layout shell with a site-wide header and footer.
- [x] Build the homepage hero section with a CTA button.
- [x] Create a contact page with a Netlify form for lead capture.
- [x] Configure Netlify Forms for lead capture, including honeypot spam protection.
- [x] Create the 3-card "Equipment Overview" section (static content).
- [x] Build the "How It Works" simple process section.

---

### Phase 2: Content & SEO Basics
**Status:** Complete 🟢

This phase involves building out the secondary content sections, interior pages, and fundamental SEO elements.

- [x] Implement the collapsible SEO content band for the homepage.
- [x] Create placeholder pages for all primary navigation links (Equipment, Our Process, etc.).
- [x] Implement basic SEO metadata (titles, descriptions) across all pages.
- [x] Generate an XML sitemap for search engines.

---

### Phase 3: CMS Integration
**Status:** In Progress 🟡

This phase focuses on making the site's content manageable through Decap CMS.

- [x] Configure Decap CMS with collections for `Equipment` and `Pages`.
- [x] Replace the static homepage content (hero, equipment cards) with content managed in Decap.
- [x] Build the full, dynamic "Equipment" pages that pull content from the CMS.
- [ ] Create a "Case Studies" collection and corresponding pages (optional, as per strategy).

---

### Phase 4: Optimization & Launch
**Status:** Not Started ⚪

The final phase involves testing, performance tuning, and preparing the site for launch.

- [ ] Perform end-to-end testing on the contact form.
- [ ] Conduct cross-browser and mobile-responsive testing.
- [ ] Run a Lighthouse audit and implement performance optimizations to score 95+.
- [ ] Add analytics (e.g., a privacy-friendly alternative to Google Analytics).
- [ ] Set up A/B testing for the hero video vs. static image.
- [ ] Submit the sitemap to Google Search Console.

Maybe later
- [ ] Add a static US coverage map image.
- [ ] Ensure all images are optimized for performance.