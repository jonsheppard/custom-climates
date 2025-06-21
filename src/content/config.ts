import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    hero_headline: z.string(),
    hero_subtext: z.string(),
  }),
});

const equipmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    features: z.array(z.string()),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'equipment': equipmentCollection,
}; 