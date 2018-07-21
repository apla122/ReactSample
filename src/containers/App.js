import React, { Component } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../myThemeFile'

class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
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