import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CounterActions from '../actions/counter';

class App extends Component {

  static propTypes = {
    counter: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { counter, actions } = this.props;
    return (
      <div>
        <Header />
        <h2>count={counter.value}</h2>
        <button onClick={actions.increment}>増加</button>
        <button onClick={actions.decrement}>減少</button>
      </div>
    );
  }
}

// Appコンポーネントにstateを流し込む
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, CounterActions), dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);