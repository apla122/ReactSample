import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import s from 'styles/SampleParent';
import SampleChild from 'components/SampleChild';

import Header from 'containers/Header'

// 親コンポーネント
class SampleParent extends React.Component {

  // コンストラクタで初期値をセット
  constructor(props) {
    super(props)

    // この例では関数内でthisを使用するため、thisをbind
    this.bindFunc = this.func.bind(this)

    // stateの初期値を設定
    this.state = {
      str: '',
      isDisabled: true,
    }

  }

  // ライフサイクル

  // // マウントが行われる直前
  // componentWillMount() {
  //   this.setState({
  //     str: 'sample message'  
  //   });
  // }

  // // マウントが行われた直後
  // componentDidMount() {
  //   if(this.props.isShow){
  //     this.show()
  //   }
  // }

  // // マウントされたコンポーネントが新しいpropsを受け取る前
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.sample !== nextProps.sample) {
  //     this.setState({ sample: nextProps.sample })
  //   }
  // }

  // // 新しいpropsやstateを受け取った時
  // shouldComponentUpdate() {
  //   if(this.state.update) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  // コールバック関数
  func(str) {

    //子コンポーネントから受け取った値を元にisDisabledを更新
    if (str.length > 10) {
      this.setState({ isDisabled: false })
    } else {
      this.setState({ isDisabled: true })
    }
  }

  // 子コンポーネントにfuncという名前でthisをbindした関数を渡す
  render() {
    return (
      <div className={s.root}>
        <Header location={this.props.location} />
        <SampleChild func={this.bindFunc} /><br />
        <Button disabled={this.state.isDisabled} variant="raised" color="primary" >submit</Button>
      </div>
    )
  }
}

export default withStyles(s)(SampleParent)