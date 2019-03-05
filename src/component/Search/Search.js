/*  */
import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./style.less";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      onchagebutton: false
    };
  }

  componentDidMount() {
    document.title = "成绩查询";
  }
  /* 选择准考证 */
  onChangeAdmission = () => {
    this.setState({
      onchagebutton: !this.state.onchagebutton
    })
  };
  /* 查看成绩 */
  onChangeResults = () => {
    this.setState({
      onchagebutton: !this.state.onchagebutton
    })
  };
  render() {
    return (
      <div className="search">
        {/* 头部展示 */}
        <div className="header">
          <img
            src="http://img0.imgtn.bdimg.com/it/u=2755031477,1314329551&fm=26&gp=0.jpg"
            alt="logo"
          />
        </div>
        {/* 信息查询 */}
        <div className="info_serch">
          <div className="info_serch_xhengkaozhen inputmsg">
            <div>请输入准考证号：</div>
            <div className="input_msg">
              <input placeholder="12345678" maxlength={"11"} />
              <span className="but_err">1</span>
              <div className="but_info">请输入正确的准考证号！</div>
            </div>
          </div>

          <div className="info_serch_name inputmsg">
            <div>请输入学生姓名：</div>
            <div className="input_msg">
              <input placeholder="张小龙" maxlength={"4"} />
              <span className="but_err">2</span>
              <div className="but_info">请输入正确的学生信息！</div>
            </div>
          </div>
        </div>
        {/* 获取准考证信息 */}
        <div
          className={
            this.state.onchagebutton
              ? "getinfo_box info_change"
              : "getinfo_box info_notfind"
          }
          onClick={this.onChangeAdmission}
        >
          <span className="info_text">
            准考证&nbsp;【获取2019年考试准考证信息】
          </span>
        </div>

        <div
          className={
            this.state.onchagebutton
              ? "getinfo_box info_change"
              : "getinfo_box info_notfind"
          }
          onClick={this.onChangeResults}
        >
          <span className="info_text info_notfind">
            查询成绩&nbsp;【查询2019年国际部招生结果】
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
