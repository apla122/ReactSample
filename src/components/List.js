import React, { Component } from "react";
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux';

class List extends Component {
  render() {
    // パスに埋め込まれたパラメータは params から取得できる
    var id = this.props.params.id;
    return (
      <VisibleTodoList />
    )
  }
}

// Appコンポーネントにstateを流し込む
function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)