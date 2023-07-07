import React from "react"
import SectionTitle from "../layout/SectionTitle"
import Project from "../cards/Project"
import Project1Image from "../../images/projects/notitasks.png"
import Project2Image from "../../images/projects/wp_care_plans.png"
import Project3Image from "../../images/projects/notion_widgets.png"

export default function Work() {
  return (
    <section className="work section">
      <article className="inner-container">
        <article className="title">
          <SectionTitle subtitle={"What have I made?"} title={"Work"} />
        </article>

        <article className="content">
          {/* Project 1 */}

          <Project
            image={Project1Image}
            title="NotiTasks"
            description="Managing Notion Tasks Made easy. A side project to help me manage my tasks. 
            Build using NextJS, TailwindCSS, ChakraUI, Supabase."
            url="https://notitasks.com/"
          />

          {/* Project 2 */}
          <Project
            image={Project2Image}
            title="WordPress Care Plans"
            description="Landing page for WordPress Care Plans webiste. Build using HTML, jQuery, CSS."
            url="https://wordpress.rootscope.dev/"
            github="https://github.com/rootscopeltd/wp.rootscope.dev"
          />

          {/* Project 3 */}

          <Project
            image={Project3Image}
            title="Notion Widgets (WIP)"
            description="Website with a different widgets that can be embeded in Notion templates."
            url="https://notion-with-widgets.vercel.app/"
            github="https://github.com/mslepko/notion-widgets"
          />
        </article>
      </article>
    </section>
  )
}
