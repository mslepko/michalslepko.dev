import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const snippets = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/snippets",
    // Build the id from the file path (ignoring any `slug` frontmatter) so
    // URLs stay the same as the Gatsby site: /snippets/<file-or-folder-name>/
    generateId: ({ entry }) => entry.replace(/(\/index)?\.mdx$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().nullish(),
      published: z.coerce.date(),
      categories: z.string().nullish(),
      hero_image: image().optional(),
    }),
})

export const collections = { snippets }
