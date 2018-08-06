import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Post from './Post'
import * as actions from 'actions/Post'

import { List } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

class PostList extends Component {

  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props;
    return (
      <List>
        {posts.map((post, index) =>
          <Post key={index} {...post} />
        )
        }
      </List>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

PostList.defaultProps = {
  posts: [
    {
      _id: "aaaa",
      body: "bbb",
      created_at: "ccc",
      updated_at: "ddd",
    }
  ]
}

function mapStateToProps(state) {
  const length = state.posts.length
  const currentState = state.posts[length - 1]  // 一番新しいstateを取り出す
  return { posts: currentState.items }  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}
function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(actions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)