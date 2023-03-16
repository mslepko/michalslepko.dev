import React from "react";
import SectionTitle from "../layout/SectionTitle";
import Html from "../../images/tech/Html";
import Css from "../../images/tech/Css";
import Bootstrap from "../../images/tech/Bootstrap";
import TailwindCss from "../../images/tech/TailwindCss";
import JavaScript from "../../images/tech/JavaScript";
import ReactJs from "../../images/tech/ReactJs";
import Php from "../../images/tech/Php";
import Perl from "../../images/tech/Perl";
import Apache from "../../images/tech/Apache";
import Bash from "../../images/tech/Bash";
import Gatsbyjs from "../../images/tech/Gatsbyjs";
import Github from "../../images/tech/Github";
import Graphql from "../../images/tech/Graphql";
import Laravel from "../../images/tech/Laravel";
import Linux from "../../images/tech/Linux";
import Wordpress from "../../images/tech/Wordpress";
import Jquery from "../../images/tech/Jquery";

export default function Skills() {
  return (
    <section className="skills section">
      <article className="inner-container">
        <article className="title">
          <SectionTitle subtitle={"What do I do?"} title={"Skills"} />
        </article>

        <article className="content">
          <Php />
          <Perl />
          <Bash />
          <Apache />
          <Linux />
          <Laravel />
          <Wordpress />
          <Html />
          <Css />
          <Bootstrap />
          <TailwindCss />
          <JavaScript />
          <ReactJs />
          <Jquery />
          <Gatsbyjs />
          <Github />
          <Graphql />
        </article>
      </article>
    </section>
  );
}
