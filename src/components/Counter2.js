import React, { Component, PropTypes } from "react"
import IconButton from '@material-ui/core/IconButton';
import AddIconButton from '@material-ui/icons/AddCircle';
import RemoveIconButton from '@material-ui/icons/RemoveCircle';
import {blue, red} from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const styles = {
  icon: {
    width: 48,
    height: 48
  },
  buttonSize: {
    width: 86,
    height: 86,
    padding: 24
  },
  countSize: {
    paddingLeft: 18
  }

};
class Counter extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <h2 style={styles.countSize}>count={value}</h2>
        <IconButton tooltip="増加"
          iconStyle={styles.icon}
          style={styles.blockSize}
          onClick={actions.increment}>
          <AddIconButton color={red}/>
        </IconButton>
        <IconButton tooltip="減少"
          iconStyle={styles.icon}
          style={styles.blockSize}
          onClick={actions.decrement}>
          <RemoveIconButton color={blue} />
        </IconButton>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default Counter