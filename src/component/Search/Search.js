/*  */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Toast } from "antd-mobile";
import Ajax from "./../../api/Ajax";
import "./style.less";
import Leftimg from "./../../imgs/H5-nav-return.png";
import errimg from "./../../imgs/H5-icon-error.png";
import banner from "./../../imgs/H5-picture.png";
class Search extends Component {
  constructor() {
    super();
    // var encrypt = new JSEncrypt();
    this.state = {
      onchagebuttonAdZKZ: false,
      onchagebuttonReCj: false,
      sfzshow: false,
      shjhshow: false,
      reNumber: "0",
      shjNum: "",
      sfzNum: ""
    };
  }

  componentDidMount() {
    document.title = "2019招生信息查询";
    // this.getLoginInfo("130126199110143918", "18210609262");
    this.getPublickKey();
    this.getStudentSquery();
  }
  /* 登陆前获取共匙  */

  getPublickKey = () => {
    Ajax(`/studentController/white/getPublicKey`, {}, "GET").then(item => {
      if (item.data.code === "200") {
        this.setState({
          publicKey: item.data.data
        });
      }
      // jsencrypt.setPublicKey(item.data.data);
      // let str = jsencrypt.encrypt("123123123");
      // console.log(str)
    });
  };
  /* 选择准考证 */
  onChangeAdmission = () => {
    this.props.history.push({
      pathname: "./admissioninfo",
      state: this.state.pacNumber
    });
  };
  /* 查看成绩 */
  onChangeResults = () => {
    this.props.history.push({
      pathname: "./resultsquery",
      state: this.state.pacNumber
    });
  };
  /* 登陆验证 */
  getLoginInfo = (sfzNum, shjNum) => {
    if (sfzNum !== "" && shjNum !== "") {
      Ajax(
        `/studentController/white/login?idCard=${sfzNum}&contactPhone=${shjNum}`,
        {},
        "GET"
      )
        .then(item => {
          if (item.data.code === "200") {
            if (item.data.data == 2) {
              this.setState({
                reNumber: item.data.data
              });
              this.getStudentSquery();
            } else {
              this.offline();
            }
          } else {
            this.offlineErr();
          }
        })
        .catch(() => {
          this.offlineErr();
        });
    }
  };
  /* input 身份证信息 */
  shenFengZheng = e => {
    this.setState({
      sfzNum: e.target.value
    });
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    var cardNo = e.target.value;
    if (idcardReg.test(cardNo)) {
      this.setState({
        sfzshow: false,
        sfzNum: e.target.value
      });
      this.getLoginInfo(cardNo, this.state.shjNum);
    } else {
      this.setState({
        sfzshow: true
      });
    }
  };
  /* input 手机号验证 */
  shouJiHao = e => {
    this.setState({
      shjNum: e.target.value
    });
    var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
    // if (e.target.value.length > 10) {
    if (regex.test(e.target.value)) {
      this.setState({
        shjhshow: false,
        shjNum: e.target.value
      });
      this.getLoginInfo(this.state.sfzNum, e.target.value);
    } else {
      this.setState({
        shjhshow: true
      });
    }
    // }
  };
  /* 清空 手机号 */
  cleraInputShJ = () => {
    this.setState({
      shjNum: "",
      reNumber: "0"
    });
  };
  /* 清空 身份证 */
  cleraInputSFZ = () => {
    this.setState({
      sfzNum: "",
      reNumber: "0"
    });
  };
  /* 获取成绩信息 /studentController/white/selectResult*/
  getStudentSquery = () => {
    Ajax(`/studentController/selectResult`, {}, "GET").then(item => {
      if (item.data.code === "200") {
        this.setState({
          pacNumber: item.data.data
        });
      }
    });
  };
  /* 轻提示 */
  offline = () => {
    Toast.offline("身份证或手机号错误!!!", 1);
  };
  offlineErr = () => {
    Toast.offline("查询信息失败!!!", 1);
  };

  render() {
    const { reNumber, pacNumber } = this.state;
    let reNumberonChange = reNumber;
    if (pacNumber) {
      reNumberonChange = "2";
    }
    return (
      <div className="search">
        {/* 导航 */}
        <div className="nva">
          <img src={Leftimg} alt="" className="goback" />
          <span>成绩查询</span>
          <span />
        </div>
        {/* 头部展示 */}
        <div className="header">
          <img src={banner} alt="logo" />
        </div>
        {/* 信息查询 */}
        <div className="info_serch">
          <div className="info_serch_xhengkaozhen inputmsg">
            <div>请输入身份证号：</div>
            <div className="input_msg">
              <input
                onChange={this.shenFengZheng}
                placeholder="23540720190307XXXX"
                maxLength={"18"}
                value={this.state.sfzNum}
              />
              <span className="but_err">
                {this.state.sfzshow && (
                  <img onClick={this.cleraInputSFZ} src={errimg} alt="" />
                )}
              </span>
              {this.state.sfzshow && (
                <div className="but_info">请输入正确的身份证号！</div>
              )}
            </div>
          </div>

          <div className="info_serch_name inputmsg">
            <div>请输入联系电话：</div>
            <div className="input_msg">
              <input
                onChange={this.shouJiHao}
                placeholder="183XXXX8888"
                maxLength={"11"}
                value={this.state.shjNum}
              />
              <span className="but_err">
                {this.state.shjhshow && (
                  <img onClick={this.cleraInputShJ} src={errimg} alt="" />
                )}
              </span>
              {this.state.shjhshow && (
                <div className="but_info">请输入正确的联系电话！</div>
              )}
            </div>
          </div>
        </div>
        {/* 获取准考证信息 */}
        <Button
          className={
            reNumberonChange === "2"
              ? "getinfo_box info_change"
              : "getinfo_box info_notfind"
          }
          onClick={this.onChangeAdmission}
          disabled={!(reNumberonChange === "2" ? true : false)}
        >
          <span className="info_text">
            准考证&nbsp;【获取2019年考试准考证信息】
          </span>
        </Button>

        <Button
          className={
            reNumberonChange === "2"
              ? "getinfo_box info_change"
              : "getinfo_box info_notfind"
          }
          onClick={this.onChangeResults}
          disabled={!(reNumberonChange === "2" ? true : false)}
        >
          <span className="info_text info_notfind">
            查询成绩&nbsp;【查询2019年国际部招生结果】
          </span>
        </Button>
      </div>
    );
  }
}

export default withRouter(Search);
