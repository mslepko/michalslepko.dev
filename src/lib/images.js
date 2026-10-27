// Map image imports by file name (e.g. "warp.png"), which is how the links
// lists refer to thumbnails
const byFileName = modules =>
  Object.fromEntries(
    Object.entries(modules).map(([path, image]) => [
      path.split("/").pop(),
      image,
    ]),
  )

export const thumbnails = byFileName(
  import.meta.glob("../images/thumbnails/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }),
)

export const featuredImages = byFileName(
  import.meta.glob("../images/featured/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }),
)
