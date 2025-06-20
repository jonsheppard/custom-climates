# Custom Climates Website Strategy

## Overview
This strategy outlines the next-generation website for Custom Climates. It balances a clean, modern visual experience with performance, SEO, and maintainability. The site will be built with Astro, styled using Tailwind CSS, deployed on Netlify, and managed optionally via Decap CMS.

---

## Goals
- Present a high-impact, visual-first homepage
- Communicate Custom Climates' offering clearly and quickly
- Guide users to equipment details or quote requests
- Maintain strong SEO for search visibility
- Enable easy updates via a headless CMS
- Capture inbound leads with a clean, accessible contact form

---

## Tech Stack

| Component     | Technology       | Purpose                            |
|---------------|------------------|-------------------------------------|
| Static Site    | Astro             | Fast, modern static site generator  |
| Styling        | Tailwind CSS      | Utility-first responsive design     |
| Hosting        | Netlify           | Deploy, form handling, CDN          |
| CMS (optional) | Decap CMS         | Git-based content editing           |
| Forms          | Netlify Forms     | Serverless lead capture             |

---

## Visual & Brand Direction

- **Logo**: Shield-shaped badge with blue/white branding
- **Colors**:
  - `#0A3F91` (Primary Blue)
  - `#1E1E1E` (Dark Gray)
  - `#FFFFFF` (White)
  - Optional red/gradient from footer for highlights
- **Typography**: Bold, italicized industrial style
- **Imagery**: Real-world deployments of climate-controlled trailers, shot in daylight and golden hour conditions

---

## UX & Content Layout

### 1. Hero Section
- **Headline**: "Onsite Climate Controlled Solutions"
- **Subtext**: "24/7 Emergency Deployment • Serving All 50 States"
- **Inline Lead Form**: 
  - Name
  - Phone
  - Email
  - "Get Quote Now" button
- **Secondary CTA**: "View Equipment" (scroll anchor)
- **Visual**: High-quality static background image (test video loop later via A/B testing)
- **Trust Indicator**: "500+ Projects Completed"

### 2. Equipment Overview (3 cards)
- Display 3 core offerings only:
  - Climate Controlled Trailers
  - Power Generation Units
  - Office/Storage Combos
- Each card:
  - Title
  - Photo
  - One-line description
  - "Learn More" link
- **CTA below cards**: "View All Equipment →"

### 3. Simple Process Section
- **Headline**: "How It Works"
- 3-step visual process:
  1. Call Us - We assess your needs
  2. Deploy - Equipment delivered within 24 hours
  3. Support - 24/7 monitoring and maintenance
- Clean icons with minimal text

### 4. Coverage Map
- Interactive or static US map showing service coverage
- Highlight: "Nationwide deployment from strategic locations"
- Optional: Major deployment hubs marked

### 5. SEO Content Band
- **Subtle gray background** to separate from main content
- Collapsible section with "Learn More About Our Services ↓"
- Contains keyword-rich content when expanded
- Stays collapsed by default to maintain clean design

### 6. Navigation Structure
Primary navigation:
- Equipment
- Our Process
- Industries
- About
- Contact

### 7. Footer
- **Emergency banner**: "24/7 Emergency: 1-800-XXX-XXXX"
- Company info and service hours
- Quick links to key pages
- SEO text block with service keywords
- Social media links (if applicable)

---

## CMS Structure (Decap)

### Collections

#### Equipment
- Title (string)
- Description (text)
- Image (file upload)
- Features (list of strings)
- Specifications (optional table data)
- Gallery (multiple images)
- Slug (auto-generated or manual)

#### Projects/Case Studies (optional)
- Client name
- Industry
- Challenge
- Solution
- Results
- Images

#### Pages
- Homepage hero content
- SEO metadata per page
- Process steps content

---

## SEO Plan

- Astro for performance (fast load, server-rendered content)
- Semantic HTML (headings, landmarks, alt tags)
- Metadata per page (title, description, Open Graph)
- Image optimization + alt text with keyword focus
- Internal linking from homepage to subpages
- Schema markup for local business
- XML sitemap generation
- Optional blog for longtail keywords and project updates

---

## Performance Optimizations

- Start with static hero image, lazy-load video if A/B testing shows improvement
- Optimize all images with Astro's image component
- Inline critical CSS
- Preload key fonts
- Keep JavaScript minimal (form validation, mobile menu, optional map)

---

## Implementation Checklist

- [ ] Set up Astro project with Tailwind + Netlify
- [ ] Design mobile-first responsive layout
- [ ] Implement hero with inline form
- [ ] Create 3-card equipment section
- [ ] Build simple 3-step process visual
- [ ] Add coverage map (static first, interactive later)
- [ ] Configure Netlify Forms with honeypot spam protection
- [ ] Set up collapsible SEO content section
- [ ] Add CMS config for Decap (phase 2)
- [ ] Optimize images and test Core Web Vitals
- [ ] Set up A/B testing for hero video vs image
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics or privacy-friendly alternative

---

## Success Metrics

- **Performance**: Lighthouse score 95+
- **Conversion**: Form submission rate > 3%
- **Engagement**: Average time on site > 90 seconds
- **SEO**: First page rankings for "climate controlled trailer rental [city]"

---

## Summary

This updated site for Custom Climates delivers on Anthony's vision of a clean, simple homepage while incorporating social proof, urgency, and clear process communication. The inline form reduces friction, the 3-card limit keeps focus, and the coverage map visually reinforces nationwide capabilities. The modular approach allows for easy testing and iteration based on real user data.
