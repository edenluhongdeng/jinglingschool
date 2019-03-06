import React, { Component } from 'react'
import './result.less'
import Login from './../Login/Login';

export default class Result extends Component {
    constructor(props){
        super(props)
        this.state={
          a:1,
        }
      }
  render() {
    
    return (
      <div>
        <p className='title'><span>面试结果</span> /Interview Result</p>
        <ul className='result_ditail'>
            <li>
                <span>准考证号:</span>
                <span>J20192500</span>
            </li>
            <li>
                <span>考生姓名:</span>
                <span>李孝利</span>
            </li>
            <li>
                <span>性别:</span>
                <span>男</span>
            </li>
        </ul>
        <div className='result_content'>
            <div>面试结果:</div>
            <div className='result_button'>
            {
                
                this.state.a===1&&<p>Excellent-优秀</p>
            }
            {
                this.state.a===2&&<p>Pass-合格</p>
            }
            {
                this.state.a===3&&<p>Fail-不合格</p>
            }
            </div>
        </div>
        <div className='footer_result'>感谢您对南京金陵中学国际部的支持！</div>
        
      </div>
    )
  }
}
