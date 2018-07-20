import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link, browserHistory } from 'react-router'
import { routerActions } from 'react-router-redux'

import Button from '@material-ui/core/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>ログインページです</h1>
        <h2>↓Linkを使う方法</h2>
        <Link to="home">HOMEへ</Link><br /><br />
        <Button variant="raised" className="primary" href="TimeLine">タイムラインへ</Button>
        <h2>↓browserHistoryを使う方法</h2>
        <Button variant="contained" label="POSTリストへ" onClick={() => {browserHistory.push("postlist")}} className="primary">HOMEへ</Button>
        <h2>↓routerActionsを使う方法</h2>
        <Button variant="outlined" label="LISTへ" onClick={() => {this.props.routerActions.push("list/1")}} className="secondary">LISTへ</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    routerActions: bindActionCreators( Object.assign({}, routerActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);