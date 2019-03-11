import React, { Component } from "react";
import { message } from "antd";
import "./choose.less";
import updateImg from "../../imgs/enrollment_modify_information.png";
import downloadImg from "../../imgs/enrollment_download.png";
import searchImg from "../../imgs/enrollment_search.png";
import { resultApi } from "../../api/Result";
import { from } from "rxjs";
import Download from './../Download/Download';
export default class Choose extends Component {
  constructor() {
    super();
    this.state = {
      interviewResult: null,
      clikeBut: false
    };
  }
  componentDidMount() {
    resultApi().then(res => {
      if (res.data.code == "200") {
        const datainter = res.data.data.interviewResult;
        this.setState({
          interviewResult: datainter
        });
        if ((datainter && datainter) == null) {
          this.setState({
            clikeBut: true
          });
        }
      }
    });
  }
  goGrade = () => {
    const typeFay = this.state.interviewResult && this.state.interviewResult;
    if (typeFay == null) {
      message.info("成绩暂未公布");
      // alert("成绩暂未公布")
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
    console.log(this.state.interviewResult);
    return (
      <div className="detail">
        <div className="detail_choose" onClick={this.goUpdate}>
          <img src={updateImg} alt="修改学生信息"/>
          <p className="search">修改学生信息</p>
          <p className="english">MODIFY STUDENT INFORMATION</p>
        </div>
        <div className="detail_choose" onClick={this.goDownload}>
          <img src={downloadImg} alt="下载准考证"/>
          <p className="search">下载准考证</p>
          <p className="english">DOWNLOAD THE ADMISSION TICKET</p>
        </div>
        <div
          className="detail_choose"
          style={{ background: this.state.clikeBut && "gainsboro" }}
          onClick={this.goGrade.bind(this)}
        >
          <img src={searchImg} alt='查询成绩'/>
          <p className="search">查询成绩</p>
          <p className="english">QUERY RESULTS</p>
        </div>
      </div>
    );
  }
}
