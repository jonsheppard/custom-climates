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

const benefitSchema = z.object({
  image: z.string(),
  alt: z.string(),
  headline: z.string(),
  text: z.string(),
});

const stepSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    hero_headline: z.string(),
    hero_subtext: z.string(),
    hero_trust_text: z.string().optional(),
    hero_secondary_cta: z.string().optional(),
    headline: z.string().optional(),
    subtext: z.string().optional(),
    team_intro_headline: z.string().optional(),
    team_intro_subtext: z.string().optional(),
    team_members: z.array(teamMemberSchema).optional(),
    features_headline: z.string().optional(),
    features_subtext: z.string().optional(),
    benefits: z.array(benefitSchema).optional(),
    cta_headline: z.string().optional(),
    cta_subtext: z.string().optional(),
    steps: z.array(stepSchema).optional(),
  }),
});

const specificationSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const equipmentCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    features: z.array(z.string()),
    specifications: z.array(specificationSchema).optional(),
    order_button_text: z.string().optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'equipment': equipmentCollection,
}; 