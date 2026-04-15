import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional().default(''),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// Optional: local (optimized) hero image
			heroImage: z.optional(image()),
			// Optional: remote hero image (easy to use with GitHub Pages)
			heroImageUrl: z.string().url().optional(),

			// Gameplay-oriented fields
			game: z.string().optional(),
			platform: z.string().optional(),
			category: z.string().optional(),
			youtubeId: z.string().optional(),
			youtubeUrl: z.string().url().optional(),
			images: z.array(z.string().url()).optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };
