import * as z from "zod";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from '@content-collections/markdown';

const posts = defineCollection({
	name: "posts",
	directory: "src/content/blog",
	include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    author: z.string().default("Equipo UNAD"),
    tags: z.array(z.string()).optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document, {
      rehypePlugins: [
        () => (tree) => {
          // Add target="_blank" and rel="noopener noreferrer" to external links
          const visit = (node: any) => {
            if (node.type === 'element' && node.tagName === 'a') {
              const href = node.properties?.href;
              if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                node.properties.target = '_blank';
                node.properties.rel = 'noopener noreferrer';
              }
            }
            if (node.children) {
              node.children.forEach(visit);
            }
          };
          visit(tree);
        },
      ],
    });

    return { ...document, html };
  },
});

export default defineConfig({
	collections: [posts],
});
