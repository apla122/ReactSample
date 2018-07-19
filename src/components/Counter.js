import React, { Component } from "react"

class Counter extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <h2>count={value}</h2>
        <button onClick={actions.increment}>増加</button>
        <button onClick={actions.decrement}>減少</button>
      </div>
    )
  }
}

export default Counter