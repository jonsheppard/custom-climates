import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hero_headline: z.string().optional(),
    hero_subheadline: z.string().optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      noindex: z.boolean().optional(),
      canonical: z.string().url().optional(),
    }).optional(),
  }),
});

const services = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const case_studies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        customer: z.string(),
        summary: z.string(),
    }),
});

const settings = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        phone: z.string(),
        email: z.string().email(),
    }),
});

const business = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string().email(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        hours: z.string(),
        serviceAreas: z.array(z.string()),
    }),
});

const seo_settings = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        image: z.string().optional(),
        logo: z.string().optional(),
        favicon: z.string().optional(),
        social: z.object({
            facebook: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            twitter: z.string().optional(),
        }).optional(),
        analytics: z.object({
            googleAnalytics: z.string().optional(),
            gtm: z.string().optional(),
        }).optional(),
    }),
});

export const collections = {
  pages,
  services,
  case_studies,
  settings,
  business,
  seo_settings,
}; 