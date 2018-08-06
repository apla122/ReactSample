import React, { Component } from "react"
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { commonStyle } from '../styles/style'

import PostList from 'containers/post/PostList'
import Header from 'containers/Header'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 160,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class TimeLine extends Component {
  
  render() {
    return (
      <div>
        <Header location={this.props.location}/>
        <PostList />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    // push: ReactRouterRedux.goback,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}


// export default compose(
//   withStyles(commonStyle, { name: 'Cart' }),
//   connect(
//     mapStateToProps,
//     mapDispatchToProps)
// )(TimeLine);
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TimeLine);