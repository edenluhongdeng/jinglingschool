import React, { Component } from 'react'
import './choose.less'
import updateImg from '../../imgs/enrollment_modify_information.png'
import downloadImg from '../../imgs/enrollment_download.png'
import searchImg from '../../imgs/enrollment_search.png'
export default class Choose extends Component {
  goGrade=()=>{
    this.props.history.push({
      pathname: '/result'
    })
  }
  goDownload=()=>{
    this.props.history.push({
      pathname: '/download'
    })
  }
  goUpdate=()=>{
    const role = 2
    this.props.history.push(`/registration/${role}`)
  }
  render() {
    return (
        <div className='detail'>
            <div className='detail_choose' onClick={this.goUpdate}>
              <img src={updateImg} ></img>
              <p className='search'>修改学生信息</p>
              <p className='english'>MODIFY STUDENT INFOR</p>
            </div>
            <div className='detail_choose' onClick={this.goDownload}>
              <img src={downloadImg} ></img>
              <p className='search'>下载准考证</p>
              <p className='english'>Download the admissi</p>
            </div>
            <div className='detail_choose' onClick={this.goGrade}>
              <img src={searchImg} ></img>
              <p className='search'>查询成绩</p>
              <p className='english'>MODIFY STUDENT INFOR</p>
            </div>
        </div>
    )
  }
}
