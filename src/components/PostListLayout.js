import { Link } from "gatsby"
import React, { useRef, useMemo } from "react"
import PropTypes from "prop-types"
import Image from "./BlogImage"
import Pagination from "./Pagination"

const chunkList = (list, size) => {
  let length = list.length
  let chunked = []
  Array.from({ length: Math.ceil(length / size) }, (val, i) => {
    return chunked.push(list.slice(i * size, i * size + size))
  })
  return chunked
}

const PostListLayout = ({ data }) => {
  const selectedDataIndex = useRef(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedData = useMemo(() => chunkList(data, 12), [])
  const chunkPostLength = memoizedData.length

  const handlePaginationPage = currentNum => {
    selectedDataIndex.current = currentNum
  }

  const postCard = memoizedData[selectedDataIndex.current].map(
    ({ id, frontmatter, slug }, index) => (
      <article
        className="relative rounded-lg shadow-sm bg-white pb-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        key={id}
      >
        <div className="mx-auto w-full">
          <Image
            className="rounded-t-lg h-56"
            filename={frontmatter?.featuredImage}
            title={frontmatter?.title}
            withFallback={!frontmatter?.featuredImage}
          />
        </div>
        <header className="mt-2 px-5">
          <time
            className="text-gray-500 font-light text-base"
            dateTime={frontmatter?.published}
          >
            {frontmatter?.date}
          </time>
          <h3 className="text-xl text-black font-semibold m-0">
            <Link className="hover:underline" to={`/${slug}`}>
              {frontmatter?.title}
            </Link>
          </h3>
        </header>
      </article>
    )
  )

  return (
    <>
      <section className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {postCard}
      </section>
      <Pagination
        length={chunkPostLength}
        callBackResult={handlePaginationPage}
      />
    </>
  )
}

PostListLayout.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PostListLayout