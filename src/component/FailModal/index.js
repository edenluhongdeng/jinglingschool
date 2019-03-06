import React, { Component } from 'react'
import './index.less'
import MyModal from '../Common/MyModal'

class FailModal extends Component {
  state = {
  }
  handleClick1 = () => {
    this.props.onClose()
  }
  handleClick2 = () => {
    this.props.onClose()
  }
  render() {
    return (
          <MyModal onClose={this.props.onClose} w={3.5}>
            <p className='modal-content-p'>提交失败!</p>
            <div className='modal-footer'>
                <button className='modal-btn left' onClick={this.handleClick1}>取消</button>
                <button className='modal-btn right' onClick={this.handleClick2}>确定</button>
            </div>
          </MyModal>
    )
  }
}
export default FailModal
