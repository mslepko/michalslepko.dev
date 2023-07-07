import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 text-center pb-16">
        404: Not Found
      </h1>
      <StaticImage
        src="../images/404.jpg"
        alt="404"
        className="max-w-lg	block mx-auto"
      />
      <a
        className="text-mint"
        href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404&position=2&from_view=keyword"
      >
        Image by storyset on Freepik
      </a>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not found" />
