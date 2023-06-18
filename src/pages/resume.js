import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Instagram, Twitter, Github, LinkedIn } from "../components/util/svgs"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <div className="flex justify-between w-full px-16 py-8">
      <div>
        <ul
          className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
          <li className="text-left">
            <a href="#experience">
              Experience
            </a>

          </li>
          <li className="text-left">
            <a href="#contact">
              Contact
            </a>

          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <li>
            <a href="https://www.instagram.com/michal.codes/" target="_blank" aria-label="Instagram"
              className="hover:text-blue-600 socials" rel="noopener noreferrer">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/michal_codes" target="_blank" aria-label="Twitter"
              className="hover:text-blue-600 socials" rel="noopener noreferrer">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/mslepko" target="_blank" aria-label="Github"
              className="hover:text-blue-600 socials" rel="noopener noreferrer">
              <Github />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com" target="_blank" aria-label="linkedin"
              className="hover:text-blue-600 socials" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
      <div className="flex flex-col items-center justify-center text-center h-screen-half">
        <StaticImage
          src="../images/michal.png"
          className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
          alt="Michal Slepko"
        />
        <h1 className="text-5xl sm:text-6xl lg:text-9xl">Michal Slepko</h1>
        <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">Senior developer</h2>
      </div>
    </section>
    <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
      <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
        <div className="flex flex-col px-10 md:px-20">
          <h3 className="text-xl font-bold">Skills</h3>
          <br />
          <span className="text-lg">PHP - WordPress, Laravel</span>
          <span className="text-lg">HTML / CSS (SASS, TailwindCSS)</span>
          <span className="text-lg">JavaScript + a bit of TypeScript</span>
          <span className="text-lg">React - NextJS, GatsbyJS</span>
          <span className="text-lg">SwiftUI - learning</span>
          <span className="text-lg">PERL, MySQL, Bash, GIT, Linux, SASS, jQuery</span>
          <span className="text-lg">Always keen to learn something new!</span>
        </div>
        <div className="px-10 md:px-20">
          <h3 className="text-xl font-bold">Summary</h3>
          <br />
          <p className="w-full md:w-2/3">I'm a full-stack web developers with many years of experience working with different teams and technologies. Through years I had to wear many different hats - from frontend developer to Linux server sysadmin.</p>
          <p className="mt-2 w-full md:w-2/3">I've been working remotely for more than 6 years and I know the power of good communication.</p>
          <p className="mt-2 w-full md:w-2/3">I'm not afraid of working on the legacy code, I still maintain an old platform written in PHP5. So if you want to free up your development team from legacy burden I'm the person you want to hire.</p>
        </div>
        <div className="px-10 md:px-20">
          <br />
          <h3 className="text-xl font-bold">Contact</h3>
          <p><a className="text-xl hover:text-blue-600" href="mailto:test@nomail.com">michal@rootscope.co.uk</a></p>
          <p><a className="text-xl hover:text-blue-600" href="https://cal.com/michalslepko/1-1-consultations" target="_blank" rel="noopener noreferrer">Book a call</a></p>
        </div>
      </div>
      <StaticImage
        src="../images/michal.png"
        className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
        alt="Michal Slepko"
      />
      <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
        <div className="px-20">
          <h4 className="text-xl font-bold">Full-stack developer (mainly PHP, JS)</h4>
          <br />
          <p className="text-6xl">10+ yrs</p>
        </div>
        <div className="px-20">
          <h4 className="text-xl font-bold">Managing Linux servers</h4>
          <br />
          <p className="text-6xl">6+ yrs</p>
        </div>
        <div className="px-20">
          <h4 className="text-xl font-bold">Technical lead, mentoring and managing remote teams</h4>
          <br />
          <p className="text-6xl">5+ yrs</p>
        </div>
        <div className="px-20">
          <h4 className="text-xl font-bold">Content creator (90k+ followers)</h4>
          <br />
          <p className="text-6xl">2+ yrs</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default ResumePage

export const Head = () => <Seo title="Michal Slepko CV" pathname="/resume/" />
