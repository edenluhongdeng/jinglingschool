import React, { Component } from 'react'
import './index.less'
import MyModal from '../Common/MyModal'
import { hashHistory } from 'react-router';

class InfoModal extends Component {
  state = {
  }
  render() {
    
    return (
          <MyModal onClose={this.closeOverlay} w={11}>
            <div className='infoModal-content'>
                <h2 className='infoModal-h2'>学生情况<span>/Applicant Info</span></h2>
            </div>
          </MyModal>
    )
  }
}
export default InfoModal
