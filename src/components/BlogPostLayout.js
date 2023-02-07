import { Link } from "gatsby"
import React from "react"

//import Image from "./Image"

const BlogPostLayout = ({
  featuredImage,
  title,
  content,
  date,
  previous,
  next,
}) => {
  let previousLink
  let nextLink

  if (previous && previous.fields.slug) {
    previousLink = (
      <Link className="pagination-prev" to={`${previous.fields.slug}`}>
        {previous.frontmatter.title}
      </Link>
    )
  }
  if (next && next.fields.slug) {
    nextLink = (
      <Link className="pagination-next" to={`${next.fields.slug}`}>
        {next.frontmatter.title}
      </Link>
    )
  }

  return (
    <>
      <article className="text-xl container mx-auto p-8 pb-16 text-left text-mint">
        {/* <Image
          className="max-w-md rounded-lg ml-10 mb-10 float-right"
          filename={featuredImage}
          title={title}
        /> */}

        <header className="mb-5">
          <time className="block text-mint text-right mb-2" dateTime={date}>
            {date}
          </time>
          <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 text-center pb-16">
            {title}
          </h1>
        </header>
        {content}
        <hr className="my-5 border-mint" />
        <div
          className={
            previousLink
              ? "flex w-full justify-between"
              : "flex w-full justify-end"
          }
        >
          {previousLink}
          {nextLink}
        </div>
      </article>
    </>
  )
}

export default BlogPostLayout
