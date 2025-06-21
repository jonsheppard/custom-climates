import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    hero_headline: z.string(),
    hero_subtext: z.string(),
    hero_trust_text: z.string().optional(),
    hero_secondary_cta: z.string().optional(),
  }),
});

const equipmentCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    features: z.array(z.string()),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'equipment': equipmentCollection,
}; 