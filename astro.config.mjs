// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import { satteri } from "@astrojs/markdown-satteri"

export default defineConfig({
  site: "https://michalslepko.dev",
  trailingSlash: "always",
  integrations: [
    mdx(),
    react(),
    sitemap({
      // The pricing page is noindex, so keep it out of the sitemap
      filter: page => !page.endsWith("/pricing/"),
    }),
  ],
  markdown: {
    // Keep straight quotes in snippets so copied commands still work
    processor: satteri({ features: { smartPunctuation: false } }),
    // Snippets are styled as plain code blocks (see global.css)
    syntaxHighlight: false,
  },
})
