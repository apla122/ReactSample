import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import s from 'styles/SampleChild';

// 子コンポーネント
class SampleChild extends React.Component {

  static propTypes = {
    func: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      str: '',
    };
  }

  // ボタンが押された時にコールバック関数を呼び出す
  onClick = () => {
    this.props.func(this.state.str)
  }

  // テキストボックスの内容が変更された時にstateを更新
  onChange = e => {
    this.setState({ str: e.target.value })
  }

  render() {
    return (
      <div className={s.root}>
        <TextField onChange={e => this.onChange(e)} /><br /><br />
        <Button onClick={() => this.onClick()} variant="outlined" color="secondary" >ok</Button>
      </div>
    )
  }
}

export default withStyles(s)(SampleChild)