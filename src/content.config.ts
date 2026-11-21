import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string(),
    replaces: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(),
        }),
      )
      .min(1),
    pricing: z.string(),
    website: z.string().url(),
    github: z.string().url(),
  }),
});

export const collections = { tools };
