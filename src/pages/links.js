import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import MyLinks from "../components/myLinks"
import FeaturedLinks from '../components/sections/FeaturedLinks'

const LinksPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center">
      <FeaturedLinks />
      <MyLinks />
    </div>
  </Layout>
)

export default LinksPage

export const Head = () => <Seo title="Links" pathname="/links"/>
