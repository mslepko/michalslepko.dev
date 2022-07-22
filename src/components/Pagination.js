import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Pagination = ({ length, callBackResult }) => {
  const [page, setPage] = useState(0)

  const handleClick = index => {
    if (callBackResult) {
      callBackResult(index)
    }
    setPage(index)
  }

  const paginationContent = Array.from({ length }).map((_, index) => {
    const firstPage = index === 0
    const pageNum = index + 1
    const url = firstPage ? "/snippets" : `/snippets?page=${pageNum}`
    const isSelected = page === index
    const disableClass = isSelected ? " pointer-events-none" : ""

    return (
      <Link
        to={url}
        onClick={() => handleClick(index)}
        className={`relative rounded-md border border-blue shadow-sm px-4 py-2 text-sm ${
          isSelected ? "bg-blue-500 text-white" : "bg-white text-blue-500"
        }${disableClass}`}
        disabled={isSelected}
        key={`page-${pageNum}`}
      >
        {pageNum}
      </Link>
    )
  })

  return (
    <nav
      className="flex justify-end space-x-2 rounded-md mt-10"
      aria-label="Page navigation"
    >
      {paginationContent}
    </nav>
  )
}

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  callBackResult: PropTypes.func.isRequired,
}

export default Pagination
