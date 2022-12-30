import * as React from "react"
import PropTypes from "prop-types"

const IndexLayout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
