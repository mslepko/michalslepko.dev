import React from "react"

export default function About() {
  return (
    <section className="about section flex w-full py-16">
      <article className="inner-container">
        <div className="title">
          <p className="section-subtitle">About me</p>
          <h2 className="section-title">
            Full-stack developer <em>constantly</em> trying something new.
          </h2>
        </div>
        <div className="content">
          <p className="text-base md:text-xl font-bold text-darkest dark:text-lightest">
            Hi. I'm Michal and I'm a software engineer based in the UK.
          </p>
          <p className="text-base md:text-lg">
            In my spare time, which I don't have too much as I have 4 children,
            I'm creating content on{" "}
            <a
              href="https://instagram.com/michal.codes"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@michal_codes"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>{" "}
            and{" "}
            <a
              href="https://www.tiktok.com/@michal.codes"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>{" "}
            related to my day-to-day job as a developer. I post mainly about
            software development, productivity, working from home and having fun
            while doing what you love.
          </p>
          <p className="text-base md:text-lg">
            I'm also trying to build small exciting projects that allow me to
            explore new frameworks, new programming languages and new
            technologies.
          </p>
        </div>
      </article>
    </section>
  )
}
