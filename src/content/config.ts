import { defineCollection, z } from 'astro:content';

const teamMemberSchema = z.object({
  name: z.string(),
  image: z.string(),
  bio: z.string(),
  specialties_headline: z.string().optional(),
  specialties: z.string().optional(),
  education_headline: z.string().optional(),
  education: z.string().optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    hero_headline: z.string(),
    hero_subtext: z.string(),
    hero_trust_text: z.string().optional(),
    hero_secondary_cta: z.string().optional(),
    team_intro_headline: z.string().optional(),
    team_intro_subtext: z.string().optional(),
    team_members: z.array(teamMemberSchema).optional(),
  }),
});

const equipmentCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    features: z.array(z.string()),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'equipment': equipmentCollection,
}; 