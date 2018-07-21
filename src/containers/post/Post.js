import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ _id, name, capital, index, created_at}) => (
  <li>
    { name } : { capital } {index} {created_at}
  </li>
)

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
}

export default Post