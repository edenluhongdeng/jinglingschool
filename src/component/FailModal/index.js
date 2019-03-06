import React, { Component } from 'react'
import './index.less'
import MyModal from '../Common/MyModal'

class FailModal extends Component {
  state = {
  }
  render() {
    
    return (
          <MyModal onClose={this.closeOverlay} w={3.5} h={1.16}>
            <p className='modal-content-p'>提交失败!</p>
            <div className='modal-footer'>
                <button className='modal-btn left'>取消</button>
                <button className='modal-btn right'>确定</button>
            </div>
          </MyModal>
    )
  }
}
export default FailModal
