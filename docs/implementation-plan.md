# Custom Climates - Implementation Plan

This document breaks down the website rebuild into manageable phases, based on the [Website Strategy](./website-strategy.md). We will update this plan as we complete each task.

---

### Phase 1: Foundation & Core Homepage
**Status:** In Progress 🟡

This phase focuses on setting up the core infrastructure and building the essential, above-the-fold content for the homepage.

- [x] Set up a fresh Astro project with Tailwind CSS.
- [x] Implement a responsive layout shell with a site-wide header and footer.
- [ ] Build the homepage hero section with an inline lead form.
- [ ] Configure Netlify Forms for lead capture, including honeypot spam protection.
- [ ] Create the 3-card "Equipment Overview" section (static content).
- [ ] Build the "How It Works" simple process section.

---

### Phase 2: Content & SEO Basics
**Status:** Not Started ⚪

This phase involves building out the secondary content sections, interior pages, and fundamental SEO elements.

- [ ] Implement the collapsible SEO content band for the homepage.
- [ ] Create placeholder pages for all primary navigation links (Equipment, Our Process, etc.).
- [ ] Add a static US coverage map image.
- [ ] Implement basic SEO metadata (titles, descriptions) across all pages.
- [ ] Generate an XML sitemap for search engines.
- [ ] Ensure all images are optimized for performance.

---

### Phase 3: CMS Integration
**Status:** Not Started ⚪

This phase focuses on making the site's content manageable through Decap CMS.

- [ ] Configure Decap CMS with collections for `Equipment` and `Pages`.
- [ ] Replace the static homepage content (hero, equipment cards) with content managed in Decap.
- [ ] Build the full, dynamic "Equipment" pages that pull content from the CMS.
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