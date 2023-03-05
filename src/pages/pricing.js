import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import UsesLine from "../components/usesLine"

const UsesPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center max-w-screen-xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 text-center pb-16">
        Pricing
      </h1>
      <div className="pt-14">
        <p className="text-mint pb-1 text-xl">
          If you found this page it means you want to collaborate with me!
        </p>
        <p className="text-mint pb-1 text-xl">
          This page contains information about me, links to my previous
          partnerships, my stats and my pricing.
        </p>
        <p className="text-mint pb-1 text-xl">
          If you are interested or have questions please email me at{" "}
          <a href="mailto:michal@rootscope.co.uk" className="text-light-blue">
            michal@rootscope.co.uk
          </a>
        </p>
      </div>

      <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">
        About me
      </h3>
      <p className="text-mint text-left pb-1 text-xl">
        My name is Michal Slepko, I'm a software engineer based in the UK. I'm
        creating content related to my day-to-day job as a developer. <br />I
        post mainly about software development, productivity, working from home
        and having fun while doing what you love.
      </p>
      <p className="text-mint pb-1 text-xl text-left">
        I create content on Instagram and then repurpose it to TikTok and
        YouTube. I'm also streaming on Twitch where you can find me coding or
        just co-working with others.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">
            Social Media links
          </h3>
          <UsesLine type="socials" addClasses="w-full md:w-full" />
        </div>
        <div>
          <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">
            Pricing
          </h3>
          <ul className="text-dark bg-white rounded-lg shadow-md dark:text-gray-400 md:flex-row max-w-xl m-auto mt-8">
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 transition-all duration-500 hover:bg-mint">
              <p className="font-bold">Link in bio - 99 GBP/week</p>
              <p className="text-left">
                Link in my bio to your brand/product.
              </p>
            </li>
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 transition-all duration-500 hover:bg-mint">
              <p className="font-bold">1 story - 199 GBP</p>
              <p className="text-left">
                A dedicated Instagram story about you or your brand/product
                including a link and your profile mention.
              </p>
            </li>
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 transition-all duration-500 hover:bg-mint">
              <p className="font-bold">1 post (+ announcing story) - 499 GBP</p>
              <p className="text-left">
                A dedicated Instagram post about you or your brand, with a story
                that promotes it with a link and your profile mention.
              </p>
            </li>
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 transition-all duration-500 hover:bg-mint">
              <p className="font-bold">1 reel (+ announcing story) - 699 GBP</p>
              <p className="text-left">
                A dedicated Instagram reel about you or your brand, with a story
                that promotes it with a link and your profile mention.
              </p>
            </li>
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 transition-all duration-500 hover:bg-mint">
              <p className="font-bold">
                Long-term sponsorship - 4-6 weeks - 2000 GBP
              </p>
              <p className="text-left">
                {" "}
                - Includes 1 dedicated post and 2 dedicated Reels about your
                brand/product.
              </p>
              <p className="text-left">
                {" "}
                - Other posts (minimum 2) and reels
                (minimum 2) related to my normal content will have
                your product/brand mentioned in the caption.
              </p>
              <p className="text-left">
                {" "}
                - A link to a dedicated page for your brand/product in my bio for the entire duration.
              </p>
              <p className="text-left">
                {" "}
                - Stories (minimum 2/week) promoting the post/reel will include
                a brand/product shoutout.
              </p>
            </li>
          </ul>
          <p className="text-base text-mint">*All Reels are posted on TikTok and YT Shorts.</p>
        </div>
      </div>
      <h3 className="text-center text-xl sm:text-1xl font-bold text-mint tracking-tight dark:text-slate-200 pt-14">
        Social Media stats
      </h3>
      <StaticImage
        src="../images/stats/nja_overview.png"
        alt="NotJustAnalytics stats overview"
        className="block mx-auto mb-8"
      />
      <StaticImage
        src="../images/stats/ig_overview.jpg"
        alt="Instagram stats overview"
        className="block mx-auto"
      />

      <p className="text-mint pb-1 text-xl mt-8">
        If you are interested or have questions please email me at{" "}
        <a href="mailto:michal@rootscope.co.uk" className="text-light-blue">
          michal@rootscope.co.uk
        </a>
      </p>
    </div>
  </Layout>
)

export default UsesPage

export const Head = () => (
  <Seo title="Partnerships pricing" robots="nofollow, noindex" pathname="/pricing"/>
)
