import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Instagram, Twitter, Github, LinkedIn } from "../components/util/svgs"
import { Nav, SocialLinks } from "../components/sections/CV"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <div className="flex justify-between w-full px-16 py-8">
      <Nav />
      <SocialLinks />
    </div>
    <section className="flex flex-col items-center justify-center h-screen px-8">
      <div className="flex flex-col items-center justify-center text-center h-screen-half">
        <StaticImage
          src="../images/michal.png"
          className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
          alt="Michal Slepko"
        />
        <h1 className="text-5xl sm:text-6xl lg:text-9xl">Michal Slepko</h1>
        <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">Senior web developer</h2>
      </div>
    </section>
    <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
      <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
        <div className="flex flex-col px-10 md:px-20">
          <h3 className="text-xl font-bold" id="skills">Skills</h3>
          <br />
          <span className="text-lg text-darkest dark:text-lightest">PHP - WordPress, Laravel</span>
          <span className="text-lg text-darkest dark:text-lightest">HTML / CSS (SASS, TailwindCSS)</span>
          <span className="text-lg text-darkest dark:text-lightest">JavaScript + a bit of TypeScript</span>
          <span className="text-lg text-darkest dark:text-lightest">React - NextJS, GatsbyJS</span>
          <span className="text-lg text-darkest dark:text-lightest">SwiftUI - learning</span>
          <span className="text-lg text-darkest dark:text-lightest">PERL, MySQL, Bash, GIT, Linux, SASS, jQuery</span>
          <span className="text-lg text-darkest dark:text-lightest">Always keen to learn something new!</span>
        </div>
        <div className="px-10 md:px-20">
          <h3 className="text-xl font-bold" id="contact">Summary</h3>
          <br />
          <p className="w-full md:w-2/3">I'm a full-stack web developers with many years of experience working with different teams and technologies. Through years I had to wear many different hats - from frontend developer to Linux server sysadmin.</p>
          <p className="mt-2 w-full md:w-2/3">I've been working remotely for more than 6 years and I know the power of good communication.</p>
          <p className="mt-2 w-full md:w-2/3">I'm not afraid of working on the legacy code, I still maintain an old platform written in PHP5. So if you want to free up your development team from legacy burden I'm the person you want to hire.</p>
        </div>
        <div className="px-10 md:px-20">
          <br />
          <h3 className="text-xl font-bold">Contact</h3>
          <p><a className="text-xl hover:text-blue-600" href="mailto:test@nomail.com">michal@rootscope.co.uk</a></p>
          <p><a className="text-xl hover:text-blue-600" href="https://cal.com/michalslepko/coffee-chat-with-michal" target="_blank" rel="noopener noreferrer">Let's have a chat</a></p>
        </div>
        <div className="px-10 md:px-20">
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
      <StaticImage
        src="../images/michalsitting.jpeg"
        className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
        alt="Michal Slepko"
        quality={100}
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
    <hr className="border-darkest mx-44 dark:border-lightest" />
    <section className="px-20 mt-10">
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Experience</h4>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl font-bold">Technical Lead (Contract)</h5>
          <h6 className="text-lg font-bold">The Estée Lauder Companies Inc.</h6>
          <p>Dec 2018 - present</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Working with a bespoke e-commerce platform (React, Perl, PHP and more)</p>
          <p>Managing diverse technical projects through process change, improvements and roll-outs.</p>
          <p>Integrating with third-party software applications.</p>
          <p>Collaborating with stakeholders, partners and project teams to meet project deadlines.</p>
          <p>Managing a small team of remoter engineers, coaching and mentoring, improving capabilities and competencies of technical teams.</p>
          <p>Integrating with 3rd party APIs</p>
          <p>Stack: PERL, PHP, Linux, JavaScript, SASS, React, GIT, Jira</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Technical Lead (Contract, Part Time)</h5>
          <h6 className="text-lg font-bold">Chaptr</h6>
          <p>Dec 2015 - Present</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Managing multiple WordPress sites - maintenance, updates</p>
          <p>Custom WordPress themes and plugins development.</p>
          <p>BAU tasks.</p>
          <p>Linux servers management.</p>
          <p>Stack: PHP, WordPress, MySQL, GIT, jQuery, Figma.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Senior Web Developer</h5>
          <h6 className="text-lg font-bold">Rootscope Limited</h6>
          <p>Dec 2015 - Present</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>This is my limited company used for contracting work as well as other activities. </p>
          <p>Supporting small agencies with web development and server administration tasks.</p>
          <p>I've worked with Laravel and React frameworks such as GatsbyJS and NextJS. </p>
          <p>Tasks included developing new features, bug fixing and maintaining existing code. </p>
          <p>Prepared range of written communications, documents and reports.</p>
          <p>Engaged with customers to better understand needs and deliver excellent service. </p>
          <p>Supervised work of contracted employees to deliver work on schedule.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Regional Technical Lead EMEA (Contract)</h5>
          <h6 className="text-lg font-bold">The Estée Lauder Companies Inc.</h6>
          <p>Mar 2017 - Dec 2018</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Working with bespoke e-commerce platform.</p>
          <p>Coaching and mentoring, improving capabilities and competencies of technical teams.</p>
          <p>Managed diverse technical projects through process change, improvements and roll-outs.</p>
          <p>Delivered clear, thorough IT services support to technical and non-technical staff for smooth company operations.</p>
          <p>Managing multiple engineering teams.</p>
          <p>Stack: PERL, PHP, Linux, JavaScript, SASS, React, GIT, Jira</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Lead Online Engineer (Contract)</h5>
          <h6 className="text-lg font-bold">The Estée Lauder Companies Inc.</h6>
          <p>Sep 2016 - Mar 2017</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Working with bespoke e-commerce platform.</p>
          <p>Scoping features from the development point-of-view.</p>
          <p>Integrating with 3rd party APIs.</p>
          <p>Implementing new features BAU tasks.</p>
          <p>Stack: PERL, PHP, Linux, JavaScript, SASS, Drupal, GIT, Jira.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">PHP Web Developer (Contract)</h5>
          <h6 className="text-lg font-bold">The Car Finance Company (2007) Limited</h6>
          <p>Jan 2016 - Sep 2017</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Building and managing internal web applications used for managing various aspects of car finance business.</p>
          <p>Contributed to back-end experience and collaborated on APIs.</p>
          <p>Stack: PHP, JS, HTML, CSS, Linux, MySQL</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Developer</h5>
          <h6 className="text-lg font-bold">Gallagher Communication</h6>
          <p>Mar 2015 - Jan 2016</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Building backend (PHP) and frontend (Angular) web application used by many companies as intranet portal.</p>
          <p>Developed new, efficient and well-tested code for variety of different software projects.</p>
          <p>Worked closely with other team members to identify and remove software bugs.</p>
          <p>Implemented Google Cloud Platform scalable environment to met company and clients needs</p>
          <p>Stack: PHP, AngularJS, Grunt, Gulp, Vagrant, LAMP (Ubuntu, Centos), Google Cloud Platform, GIT, Jira</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Online Engineer</h5>
          <h6 className="text-lg font-bold">The Estée Lauder Companies Inc.</h6>
          <p>Sep 2013 - Mar 2015</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Working with bespoke e-commerce platform Implementing new features</p>
          <p>Fixing bugs</p>
          <p>Stack: PERL, PHP, Drupal, GIT, HTML, CSS, JS</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Lead Developer (Contract)</h5>
          <h6 className="text-lg font-bold">Tions Technology</h6>
          <p>Dec 2011 - Feb 2014</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Tions Technology is the eCommerce Company.</p>
          <p>Responsible for all aspects of developing and implementing Information Technology initiatives within the organization.</p>
          <p>Fixing security bugs, developing new functionalities, database designs, sys admin, frontend development.</p>
          <p>Stack: PHP, JavaScript, jQuery, Bash, MySQL, Linux</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">PHP Web Developer</h5>
          <h6 className="text-lg font-bold">JDI Dating Ltd</h6>
          <p>Dec 2012 - Sep 2013</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Contributed to back-end experience and collaborated on APIs.</p>
          <p>Working with backend system used by millions of users.</p>
          <p>Stack: PHP, MySQL, JavaScript, Linux, Bash, jQUery</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Lead PHP Developer</h5>
          <h6 className="text-lg font-bold">Modernity</h6>
          <p>Aug 2010 - Aug 2011</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>Creating bespoke web applications, maintaining existing websites, root servers administration, database management.</p>
          <p>Main project: kapiak.com (betting portal)- maintenance, creating new features, sys admin. Dealing with high traffic during highest popularity of the site.</p>
        </div>
      </div>
    </section>
    <hr className="border-darkest mx-44 dark:border-lightest" />
    <section className="px-20 mt-10">
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">MSc, Management and Marketing</h5>
          <h6 className="text-lg font-bold">Wroclaw University of Science and Technology</h6>
          <p>2004-2009</p>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Information Technology in Management</p>
          <p>Thesis: SEO and SEM</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">BA, Land Management</h5>
          <h6 className="text-lg font-bold">Wroclaw University of Environmental and Life Sciences</h6>
          <p>2006 - 2010</p>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Sustainable development conceptualisation and planning.</p>
        </div>
      </div>
    </section>
    <hr className="border-gray-400 mx-44" />
  </Layout>
)

export default ResumePage

export const Head = () => <Seo title="Michal Slepko CV" pathname="/resume/" />
