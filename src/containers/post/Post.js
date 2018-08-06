import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from '@material-ui/core';

const Post = ({ _id, name, company, email, created_at}) => (
  <div>
  <ListItem>
    <ListItemText primary={name} secondary={ company + " " + email + " " +　created_at} />
  </ListItem>
  </div>
)

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
}

export default Post