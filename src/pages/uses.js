import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import UsesLine from "../components/usesLine"

const UsesPage = () => (
  <Layout>
    <Seo title="Uses" />
    <div className="container mx-auto p-8 pb-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 text-center pb-16">Uses</h1>
      <StaticImage
        src="../images/mynewdesk.jpeg"
        alt="Michal.codes's setup"
        className="max-w-lg	block mx-auto"
      />

      <div className="pt-14">
      <p className="text-mint pb-1 text-xl">
        The list of hardware and software I use almost everyday.
      </p>
      <p className="text-mint pb-1 text-xl">
        I get a lot of questions about my setup and what I use.
      </p>
      <p className="text-mint pb-1 text-xl">
        I hope this page will be useful for you.
      </p>
      </div>
      <a href="#my_work_setup" className="text-center block text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10">My work setup</a>
      <p className="text-sm text-slate-500 text-center">* affiliated links</p>
      <UsesLine type="my_work_setup" />

      <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">My streaming setup</h3>
      <UsesLine type="streamingSetup" />

      <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">Coding Apps</h3>
      <UsesLine type="codingApps" />

      <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">Productivity Apps</h3>
      <UsesLine type="productivityApps" />
    </div>
  </Layout>
)

export default UsesPage
