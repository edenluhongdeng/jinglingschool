import React, { Component } from 'react'
import './result.less'
import Login from './../Login/Login';
import {resultApi} from '../../api/Result'
export default class Result extends Component {
  constructor(props){
      super(props)
      this.state={
        a:0,
        data:''
      }
    }
  componentDidMount(){
    resultApi().then(res=>{
      console.log(res,'数据')
      this.setState({
        data: res.data.data,
        a: res.data.data.interviewResult 
      })
    })
  }
  render() {
    const {admissionTicket, chinaName, gender} = this.state.data
    return (
      <div>
        <p className='title'><span>面试结果</span> /Interview Result</p>
        <ul className='result_ditail'>
            <li>
                <span>准考证号:</span>
                <span>{admissionTicket}</span>
            </li>
            <li>
                <span>考生姓名:</span>
                <span>{chinaName}</span>
            </li>
            <li>
                <span>性别:</span>
                {
                  gender=='0'&&<span>女</span>
                }
                {
                  gender=='1'&&<span>男</span>
                }
            </li>
        </ul>
        <div className='result_content'>
            <div className='result_title'>面试结果:</div>
            <div className='result_button'>
            {
                
                this.state.a==0&&<p style={{background:'#4276D4'}}>Excellent-优秀</p>
            }
            {
                this.state.a==1&&<p >Pass-合格</p>
            }
            {
                this.state.a==2&&<p style={{background:'#B3B3B3'}}>Fail-不合格</p>
            }
            </div>
        </div>
        <div className='footer_result'>感谢您对南京金陵中学国际部的支持！</div>
        
      </div>
    )
  }
}
