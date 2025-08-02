import React from "react"
import SectionTitle from "../layout/SectionTitle"
import Html from "../../images/tech/Html"
import Css from "../../images/tech/Css"
import Bootstrap from "../../images/tech/Bootstrap"
import TailwindCss from "../../images/tech/TailwindCss"
import JavaScript from "../../images/tech/JavaScript"
import ReactJs from "../../images/tech/ReactJs"
import Php from "../../images/tech/Php"
import Perl from "../../images/tech/Perl"
import Apache from "../../images/tech/Apache"
import Bash from "../../images/tech/Bash"
import Gatsbyjs from "../../images/tech/Gatsbyjs"
import Github from "../../images/tech/Github"
import Graphql from "../../images/tech/Graphql"
import Laravel from "../../images/tech/Laravel"
import Linux from "../../images/tech/Linux"
import Wordpress from "../../images/tech/Wordpress"
import Jquery from "../../images/tech/Jquery"
import Shopify from "../../images/tech/Shopify"
import Jenkins from "../../images/tech/Jenkins"
import Docker from "../../images/tech/Docker"
import Nginx from "../../images/tech/nginx"

export default function Skills() {
  return (
    <section className="skills section">
      <article className="inner-container">
        <article className="title">
          <SectionTitle subtitle={"What do I do?"} title={"Skills"} />
        </article>

        <article className="content">
          {/* Backend Languages */}
          <div className="skill-group mb-8">
            <h3 className="text-xl font-bold text-darkest dark:text-lightest mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 min-h-16 text-center">
              Backend
            </h3>
            <div className="flex flex-col">
              <div className="m-2 flex flex-col items-center" title="PHP">
                <Php />
                <p className="text-dark dark:text-light text-center m-0">PHP</p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Perl">
                <Perl />
                <p className="text-dark dark:text-light text-center m-0">
                  Perl
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Bash">
                <Bash />
                <p className="text-dark dark:text-light text-center m-0">
                  Bash
                </p>
              </div>
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="skill-group mb-8">
            <h3 className="text-xl font-bold text-darkest dark:text-lightest mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 min-h-16 text-center">
              Frontend
            </h3>
            <div className="flex flex-col">
              <div className="m-2 flex flex-col items-center" title="HTML">
                <Html />
                <p className="text-dark dark:text-light text-center m-0">
                  HTML
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="CSS">
                <Css />
                <p className="text-dark dark:text-light text-center m-0">CSS</p>
              </div>
              <div
                className="m-2 flex flex-col items-center"
                title="JavaScript"
              >
                <JavaScript />
                <p className="text-dark dark:text-light text-center m-0">
                  JavaScript
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Jquery">
                <Jquery />
                <p className="text-dark dark:text-light text-center m-0">
                  jQuery
                </p>
              </div>
            </div>
          </div>

          {/* Frameworks & CMS */}
          <div className="skill-group mb-8">
            <h3 className="text-xl font-bold text-darkest dark:text-lightest mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 min-h-16 text-center">
              Frameworks & CMS
            </h3>
            <div className="flex flex-col">
              <div className="m-2 flex flex-col items-center" title="Laravel">
                <Laravel />
                <p className="text-dark dark:text-light text-center m-0">
                  Laravel
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Wordpress">
                <Wordpress />
                <p className="text-dark dark:text-light text-center m-0">
                  WordPress
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="ReactJS">
                <ReactJs />
                <p className="text-dark dark:text-light text-center m-0">
                  React JS
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="GatsbyJS">
                <Gatsbyjs />
                <p className="text-dark dark:text-light text-center m-0">
                  Gatsby JS
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Shopify">
                <Shopify />
                <p className="text-dark dark:text-light text-center m-0">
                  Shopify
                </p>
              </div>
            </div>
          </div>

          {/* CSS Frameworks */}
          <div className="skill-group mb-8">
            <h3 className="text-xl font-bold text-darkest dark:text-lightest mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 min-h-16 text-center">
              CSS Frameworks
            </h3>
            <div className="flex flex-col">
              <div className="m-2 flex flex-col items-center" title="Bootstrap">
                <Bootstrap />
                <p className="text-dark dark:text-light text-center m-0">
                  Bootstrap
                </p>
              </div>
              <div
                className="m-2 flex flex-col items-center"
                title="TailwindCSS"
              >
                <TailwindCss />
                <p className="text-dark dark:text-light text-center m-0">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="skill-group mb-8">
            <h3 className="text-xl font-bold text-darkest dark:text-lightest mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 min-h-16 text-center">
              DevOps & Tools
            </h3>
            <div className="flex flex-col">
              <div className="m-2 flex flex-col items-center" title="Apache">
                <Apache />
                <p className="text-dark dark:text-light text-center m-0">
                  Apache
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="NGINX">
                <Nginx />
                <p className="text-dark dark:text-light text-center m-0">
                  NGINX
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Linux">
                <Linux />
                <p className="text-dark dark:text-light text-center m-0">
                  Linux
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Github">
                <Github />
                <p className="text-dark dark:text-light text-center m-0">
                  GitHub
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="GraphQL">
                <Graphql />
                <p className="text-dark dark:text-light text-center m-0">
                  GraphQL
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Jenkins">
                <Jenkins />
                <p className="text-dark dark:text-light text-center m-0">
                  Jenkins
                </p>
              </div>
              <div className="m-2 flex flex-col items-center" title="Docker">
                <Docker />
                <p className="text-dark dark:text-light text-center m-0">
                  Docker
                </p>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  )
}
