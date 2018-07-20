import React, { Component } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <div>
        {this.props.children}
      </div>
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
)(App)