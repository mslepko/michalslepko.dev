import React from "react";
import SectionTitle from "../layout/SectionTitle";
import Html from "../../images/tech/Html";
import Css from "../../images/tech/Css";
import Bootstrap from "../../images/tech/Bootstrap";
import TailwindCss from "../../images/tech/TailwindCss";
import JavaScript from "../../images/tech/JavaScript";
import ReactJs from "../../images/tech/ReactJs";

export default function Skills() {
  return (
    <section className="skills section">
      <article className="inner-container">
        <article className="title">
          <SectionTitle subtitle={"What do I do?"} title={"Skills"} />
        </article>

        <article className="content">
          <Html />
          <Css />
          <Bootstrap />
          <TailwindCss />
          <JavaScript />
          <ReactJs />
        </article>
      </article>
    </section>
  );
}
