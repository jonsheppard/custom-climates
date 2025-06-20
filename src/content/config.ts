import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hero_headline: z.string().optional(),
    hero_subheadline: z.string().optional(),
  }),
});

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const caseStudiesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        customer: z.string(),
        summary: z.string(),
    }),
});

export const collections = {
  'pages': pagesCollection,
  'services': servicesCollection,
  'case_studies': caseStudiesCollection,
}; 