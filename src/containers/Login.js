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
        <Button variant="raised" color="primary" onClick={() => {this.props.routerActions.push("timeline")}}>タイムラインへ</Button>
        <Button variant="raised" color="primary" onClick={() => {this.props.routerActions.push("list/1")}}>LISTへ</Button>
        <Button variant="outlined" label="LISTへ" onClick={() => {this.props.routerActions.push("list/1")}} color="secondary">LISTへ</Button>
        <h2>↓browserHistoryを使う方法</h2>
        <Button variant="contained" label="POSTリストへ" onClick={() => {browserHistory.push("postlist")}} color="secondary">HOMEへ</Button>
        <h2>↓routerActionsを使う方法</h2>
        <Button variant="outlined" label="LISTへ" onClick={() => {this.props.routerActions.push("list/1")}} color="secondary">LISTへ</Button>
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