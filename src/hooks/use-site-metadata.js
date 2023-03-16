import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleShort
          description
          author
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
