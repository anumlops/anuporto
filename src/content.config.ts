import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      year: z.string(),
      github: z.string().optional(),
      demo: z.string().optional(),
      featured: z.boolean().default(false),
    }),
  }),
};
