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
    <article className="flex-1 text-xl container mx-auto p-8 pb-16 text-left text-darkest dark:text-lightest my-snippets">
      {/* <Image
          className="max-w-md rounded-lg ml-10 mb-10 float-right"
          filename={featuredImage}
          title={title}
        /> */}

      <header className="mb-5 bg-transparent block h-auto">
        <time
          className="block text-darkest dark:text-lightest text-right mb-2"
          dateTime={date}
        >
          {date}
        </time>
        <h1 className="block text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10 text-center pb-16">
          {title}
        </h1>
      </header>
      {content}
      <hr className="my-5 border-darkest dark:border-lightest" />
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
  )
}

export default BlogPostLayout
