import React, { Component } from 'react'
import './download.less'
import {downloadPhoto, downloadInformation, downloadFile} from '../../api/GetPhoto'
import { Button } from 'antd';
// import  from '/studentController/white/getPhone'
export default class Download extends Component {
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    componentDidMount(){
        // downloadPhoto().then(res=>{
        //     console.log(res,'数据')
        
        //     // return 'data:image/png;base64,' + btoa(
        //     //     new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        //     //   );
        // })
        downloadInformation().then(res=>{
            console.log(res.data.data,'1111')
            this.setState({
                data:res.data.data
            })
        })
    }
    downloadFile=()=>{
        // downloadFile()
    }
  render() {
      const {admissionTicket, chinaName, gender} = this.state.data
    return (
      <div>
        <p className='downSchool'>2019年金陵中学河西分校国际部</p>
        <p className='downTitle'>面试准考证</p>
        <div className='downDetail'>
            <div className='detailLeft'>
                <p>准考证号:  &nbsp;&nbsp;<span>{admissionTicket}</span></p>
                <p className='leftP2'>
                    <span className='detailName'>姓名: &nbsp;&nbsp;<span >{chinaName}</span></span>
                    性别: &nbsp;&nbsp;
                    {
                        gender=='1'&&<span className='detailSex'>男</span>
                    }
                    {
                        gender=='0'&&<span className='detailSex'>女</span>
                    }
                    <span className='detailWord'>考试科目: 笔试、口试;</span>
                    <span className='detailWord'>考点:金陵中学河西分校行政楼;</span>
                </p>
                <div><span className='detailWord2'>考场号：</span><span>座位号:</span></div>
                <div className='reminder'>(*考场号和座位号考试当天到学校获取)</div>
            </div>
            <img alt=''/>
        </div>
        <table className="customers">
            <tr>
                <th>日期</th>
                <th>笔记+口试(时间)</th>
            </tr>
            <tr class="alt">
                <td>待定</td>
                <td>具体时间请等待学校通知</td>
            </tr>
        </table>
        <div className='downFooter'>
            <p>注意事项：</p>
            <p>
                1、考生须凭借准考证、身份证（户口簿、市民卡或其他有效身份证件）方可参加国际部招生考试。考场号和座位号考试当天到学校获取;<br />
                2、请考生于5月19日8:00准时进入考场，迟到15分钟以上按缺考处理 ;<br />
                3、请考生携带2B铅笔、黑色签字笔、直尺进入考场，请勿携带任何电子通讯设备;<br />
                4、进入考场区域后，请考生保持安静，严格遵守考场纪律;<br />
                5、请所有家长在千人报告厅参加家长学堂，考试期间，家长禁止进入考试区域;<br />
            </p>
        </div>
        <Button type="primary" icon="download" className='down' onClick={this.downloadFile}>下载活动证</Button>
      </div>
    )
  }
}
