/*  */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button } from "antd-mobile";

import "./style.less";
import Leftimg from "./../../imgs/H5-nav-return.png";
import banner from "./../../imgs/H5-picture.png";
import Rightimg from "./../../imgs/H5-nav-returnRight.png";
class Resultsquery extends Component {
  componentDidMount(){
    document.title = "成绩查询";
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
      <div className="Resultsquery">
      {/* 导航 */}
      <div className="nva">
          <img src={Leftimg} alt="" onClick={this.goBack} className="goback" />
          <span>成绩查询</span>
          <span></span>
          {/* <img src={Rightimg} alt="" onClick = {this.goBack} className="goback" /> */}
        </div>
        <div className="header">
          <span>2019年金陵中学河西分校国际部成绩查询</span>
        </div>
        <div className="show">
          <div className="info_show">
            <div className="info_show_left">
              <span>考生姓名：</span>
              <span>{arrList.chinaName}</span>
            </div>
            <div className="info_show_right">
              <span>准考证号：</span>
              <span>{`J${arrList.admissionTicket}`}</span>
            </div>
          </div>
          <div className="info_show">
            <div className="info_show_left info_show_left_buttom">
              <span>考试成绩：</span>
              {arrList.interviewResult == "0" && (
                <span className="info_show_left_cj">Excellent-优秀</span>
              )}
              {arrList.interviewResult == "1" && (
                <span className="info_show_left_cj">Pass-合格</span>
              )}
              {arrList.interviewResult == "2" && (
                <span className="info_show_left_cj">Fail-不合格</span>
              )}
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer_bottom">
          <div className="thunk_info">
            感谢您对金陵中学河西分校国际部的支持！
          </div>
          <div className="class_logo">
            <img src={banner} alt="" />
          </div>
        </div>
        {/* 导航 */}
        {/* <div className="nva">
          <img src={Leftimg} alt="" onClick={this.goBack} className="goback" />
          <img
            src={Rightimg}
            alt=""
            onClick={this.goBack}
            className="goback"
          />
        </div> */}
      </div>
    );
  }
}

export default withRouter(Resultsquery);
