import { getImage } from "astro:assets"
import siteIcon from "../images/site-icon.png"
import { siteMetadata } from "../site"

const iconSizes = [48, 72, 96, 144, 192, 256, 384, 512]

export async function GET() {
  const icons = await Promise.all(
    iconSizes.map(async size => {
      const icon = await getImage({
        src: siteIcon,
        width: size,
        height: size,
        format: "png",
      })
      return { src: icon.src, sizes: `${size}x${size}`, type: "image/png" }
    }),
  )

  const manifest = {
    name: siteMetadata.title,
    short_name: siteMetadata.titleShort,
    start_url: "/",
    background_color: "#663399",
    display: "minimal-ui",
    icons,
  }

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json" },
  })
}
