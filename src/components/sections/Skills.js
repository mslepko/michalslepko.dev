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

export default function Skills() {
  return (
    <section className="skills section">
      <article className="inner-container">
        <article className="title">
          <SectionTitle subtitle={"What do I do?"} title={"Skills"} />
        </article>

        <article className="content">
          <div className="m-2">
            <Php />
          </div>
          <div className="m-2">
            <Perl />
          </div>
          <div className="m-2">
            <Bash />
          </div>
          <div className="m-2">
            <Apache />
          </div>
          <div className="m-2">
            <Linux />
          </div>
          <div className="m-2">
            <Laravel />
          </div>
          <div className="m-2">
            <Wordpress />
          </div>
          <div className="m-2">
            <Html />
          </div>
          <div className="m-2">
            <Css />
          </div>
          <div className="m-2">
            <Bootstrap />
          </div>
          <div className="m-2">
            <TailwindCss />
          </div>
          <div className="m-2">
            <JavaScript />
          </div>
          <div className="m-2">
            <ReactJs />
          </div>
          <div className="m-2">
            <Jquery />
          </div>
          <div className="m-2">
            <Gatsbyjs />
          </div>
          <div className="m-2">
            <Github />
          </div>
          <div className="m-2">
            <Graphql />
          </div>
        </article>
      </article>
    </section>
  )
}
