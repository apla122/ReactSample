import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Post from './Post'
import * as actions from '../../actions/Post'

function mapStateToProps(state) {
  const length = state.posts.length
  const currentState = state.posts[length - 1]  // 一番新しいstateを取り出す
  return { posts: currentState.items }  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}
function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(actions, dispatch) }
}

class PostList extends Component {

  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, } = this.props;
    return (
      <ul>
        {posts.map((post, index) =>
          <Post key={index} {...post} />
        )
        }
      </ul>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

// const PostList = ({ posts = [] }) => (
//   <ul>
//     { posts.map((post, index) => 
//         <Post key={index} {...post}/>
//       )
//     }
//   </ul>
// )

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.object.isRequired,
//       body: PropTypes.string.isRequired,
//       created_at: PropTypes.string.isRequired,
//       updated_at: PropTypes.string.isRequired
//     })
//   )
// }

// export default PostList