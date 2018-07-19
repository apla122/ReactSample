import React, { Component } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import getMuiTheme from '@material-ui/core/styles/MuiThemeProvider';
// import MyRawTheme from '../myThemeFile';

class App extends Component {
  // static get childContextTypes() {
  //   return { muiTheme: PropTypes.object.isRequired };
  // }

  // getChildContext(){
  //   return {  muiTheme: getMuiTheme(MyRawTheme)};
  // }

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