//import * as React from "react"
import React from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import ContactForm from "../components/forms/ContactForm"

const LinksPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 h-screen">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 pb-16">
          Contact me
        </h1>

        <ContactForm />
      </div>
    </Layout>
  )
}

export default LinksPage

export const Head = () => <Seo title="Contact Me" pathname="/contact" />
