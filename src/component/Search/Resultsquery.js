/*  */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button } from "antd-mobile";
import "./style.less";
import Leftimg from "./../../imgs/H5-nav-return.png";
import banner from "./../../imgs/H5-picture.png";
class Resultsquery extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    if (this.props.location.state === undefined) {
      // this.goBack();
    }
    return (
      <div className="Resultsquery">
        {/* 导航 */}
        <div className="nva">
          <span
            onClick={() => {
              this.goBack();
            }}
            className="goback"
          >
            <img src={Leftimg} alt="" />
          </span>
          <span>准考证信息</span>
          <span />
        </div>
        <div className="header">
          <span>2019年金陵中学河西分校国际部成绩查询</span>
        </div>
        <div className="show">
          <div className="info_show">
            <div className="info_show_left">
              <span>考生姓名：</span>
              <span>霸主</span>
            </div>
            <div className="info_show_right">
              <span>准考证号：</span>
              <span>J4521281</span>
            </div>
          </div>
          <div className="info_show">
            <div className="info_show_left info_show_left_buttom">
              <span>考试成绩：</span>
              <span className="info_show_left_cj">Excellent-优秀</span>
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
      </div>
    );
  }
}

export default withRouter(Resultsquery);
