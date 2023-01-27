/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"
import { TelemetryDeck } from 'JavaScriptSDK';
const td = new TelemetryDeck({ app: '85F1CA88-24D2-4798-9F55-4C1573C42928', user: 'anonymous' });

const SEO = ({ title, description, pathname, children, robots }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
  } = useSiteMetadata()

  const seo = {
    title: `${title} | ${defaultTitle}`,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    robots: robots ? robots : "follow, index",
    author: author,
  }


  td.signal({
    route: seo.url,
  });

  return (
    <>
      <title>{seo.title}</title>
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />

      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="robots" content={seo.robots} />
    </>
  )
}

export default SEO
