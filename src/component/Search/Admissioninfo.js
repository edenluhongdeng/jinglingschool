/*  */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button } from "antd-mobile";
import "./style.less";
import Leftimg from "./../../imgs/H5-nav-return.png";
import Rightimg from "./../../imgs/H5-nav-returnRight.png";
class Admissioninfo extends Component {
  componentDidMount(){
    document.title = "准考证信息查询";
  }
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    if (this.props.location.state === undefined) {
      this.goBack();
      return;
    }
    const arrList = this.props.location.state;
    /* 
    //     admissionTicket: 20192500
    //     chinaName: "李艳强"
    //     gender: "1"
    //     interviewResult: "0"
    */
    return (
      <div className="Admissioninfo">
        <div className="box">
          <div className="header">
            <span>2019年金陵中学河西分校国际部准考证</span>
          </div>

          {/* 准考证信息 */}
          <div className="info_box">
            <div className="info_box_col info_box_col_rq">
              <div>
                <span>考生姓名：</span>
                <span>{arrList.chinaName || "科比"}</span>
              </div>
              <div>
                <span>准考证号：</span>
                <span>{`J${arrList.admissionTicket}`}</span>
              </div>
            </div>
            <div className="info_box_col info_box_col_rq">
              <div>
                <span>考试日期：</span>
                <span>6月1号</span>
              </div>
              <div>
                <span>考试时间：</span>
                <span>8:30-12:30</span>
              </div>
            </div>
            <div className="info_box_col info_box_col_kd">
              <div>
                <span>科&nbsp;&nbsp;&nbsp;&nbsp;目：</span>
                <span>笔试、面试</span>
              </div>
            </div>
            <div className="info_box_col info_box_col_kd">
              <div>
                <span>地&nbsp;&nbsp;&nbsp;&nbsp;点：</span>
                <span>金陵中学河西分校行政楼</span>
              </div>
            </div>
          </div>
          {/* 备注信息 */}
          <div className="note_info">
            <div className="note_title">
              <span>备注:</span>
            </div>
            <div className="note_list">
              <span className="note_num">1、</span>
              <span className="note_text">
                考生需凭面试活动证件，身份证（户口本，市民卡或其他有效身份证件），方可参加国际部招生考试
              </span>
            </div>
            <div className="note_list">
              <span className="note_num">2、</span>
              <span className="note_text">
                请考生与5月19日9:00准时进入考场，迟到15分钟以上按缺考处理
              </span>
            </div>
            <div className="note_list">
              <span className="note_num">3、</span>
              <span className="note_text">
                请考生携带2B铅笔，黑色签字笔，直尺进入考场，请勿携带任何电子通讯设备
              </span>
            </div>
            <div className="note_list">
              <span className="note_num">4、</span>
              <span className="note_text">
                进入考试区域后，请考生保持安静，严格遵守考场纪律
              </span>
            </div>
            <div className="note_list">
              <span className="note_num">5、</span>
              <span className="note_text">
                请所有家长在前人报告厅参加家长学堂，考试期间，家长禁止进入考试区域
              </span>
            </div>
          </div>
        </div>
        <div className="nva">
          <img src={Leftimg} alt="" onClick={this.goBack} className="goback" />
          <img
            src={Rightimg}
            alt=""
            onClick={this.goBack}
            className="goback"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Admissioninfo);
