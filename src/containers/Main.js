import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link, browserHistory } from 'react-router'
import { routerActions } from 'react-router-redux'

import Button from '@material-ui/core/Button';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>ログインページです</h1>
        <h2>↓Linkを使う方法</h2>
        <Link to="Main">Mainへ</Link><br /><br />
        <Button variant="raised" color="primary" onClick={() => {this.props.routerActions.push("timeline")}}>タイムラインへ</Button>
        <Button variant="raised" color="primary" onClick={() => {this.props.routerActions.push("list/1")}}>LISTへ</Button>
        <Button variant="outlined" label="LISTへ" onClick={() => {this.props.routerActions.push("list/1")}} color="secondary">LISTへ</Button>
        <Button variant="outlined" label="LISTへ" onClick={() => {this.props.routerActions.push("countries")}} color="secondary">国リスト</Button>
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
)(Main);