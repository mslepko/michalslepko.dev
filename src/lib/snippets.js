import { getCollection } from "astro:content"

// Newest first, matching the old `sort: { frontmatter: { published: DESC } }`
export async function getSortedSnippets() {
  const snippets = await getCollection("snippets")
  return snippets.sort((a, b) => b.data.published - a.data.published)
}

// "DD MMMM YYYY", e.g. "05 February 2017"
export function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
