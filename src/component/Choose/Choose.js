import React, { Component } from "react";
import { message } from "antd";
import "./choose.less";
import updateImg from "../../imgs/enrollment_modify_information.png";
import downloadImg from "../../imgs/enrollment_download.png";
import searchImg from "../../imgs/enrollment_search.png";
import searchImg2 from "../../imgs/enrollment_search_not_editable.png";
import { resultApi } from "../../api/Result";
import moment from 'moment'
export default class Choose extends Component {
  constructor() {
    super();
    this.state = {
      interviewResult: null,
      clikeBut: 1
    };
  }
  
  componentDidMount() {
    let nowDate = moment().valueOf()
    let startDate = moment('2019-08-1').valueOf()
    let date = nowDate-startDate
    if(date< 0){
      this.setState({
        clikeBut: 0
      });
    }
    // resultApi().then(res => {
    //   if (res.data.code == "200") {
    //     console.log(res.data,'shuju')
    //     const datainter = res.data.data.interviewResult;
    //     this.setState({
    //       interviewResult: datainter
    //     });
    //     if ((datainter && datainter) == null) {
    //       this.setState({
    //         clikeBut: 0
    //       });
    //     }
    //   }
    // });
    
  }
  goGrade = () => {
    const typeFay = this.state.interviewResult && this.state.interviewResult;
    if (this.state.clikeBut == 0) {
      // if (typeFay == null) {
      message.info("未到查询时间，不能查询");
    } else {
      this.props.history.push({
        pathname: "/result"
      });
    }
  };
  goDownload = () => {
    this.props.history.push({
      pathname: "/download"
    });
  };
  goUpdate = () => {
    const role = 2;
    this.props.history.push({
      pathname: `/registration`,
      state: {
        role
      }
    });
  };
  render() {
    const  {clikeBut} =this.state
    return (
      <div className="detail">
        <div className="detail_choose" onClick={this.goUpdate}>
          <img src={updateImg} alt="修改学生信息"/>
          <p className="search">修改学生信息</p>
          <p className="english_1">MODIFY STUDENT INFORMATION</p>
        </div>
        <div className="detail_choose" onClick={this.goDownload}>
          <img src={downloadImg} alt="下载准考证"/>
          <p className="search">下载准考证</p>
          <p className="english_1">DOWNLOAD THE ADMISSION TICKET</p>
        </div>
        {clikeBut == 1&&<div
          className="detail_choose"
          // style={{ background: this.state.clikeBut && "gainsboro" }}
          onClick={this.goGrade.bind(this)}
        >
          <img src={searchImg} alt='查询成绩'/>
          <p className="search">查询成绩</p>
          <p className="english_1">QUERY RESULTS</p>
        </div>
        }
        {clikeBut == 0&&<div
          className="detail_choose"
          // style={{ background: this.state.clikeBut && "gainsboro" }}
          onClick={this.goGrade.bind(this)}
        >
          <img src={searchImg2} alt='查询成绩'/>
          <p className="search2">查询成绩</p>
          <p className="english2">QUERY RESULTS</p>
        </div>

        }
      </div>
    );
  }
}
