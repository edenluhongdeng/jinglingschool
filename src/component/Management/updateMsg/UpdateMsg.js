/*
 *教师填写面试信息页面
 */

import React, { Component } from "react";
import { Icon, Select, Input, Row, Col, DatePicker, message } from "antd";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { getStudyInfoTch, getUpdataInfo } from "./../../../api/manageMent.js";
import StudentsMsg from "./StudentsMsg";
import "./style.less";
import { Button } from "antd-mobile";
const Option = Select.Option;
const dateFormat = "YYYY-MM-DD";

class UpdateMsg extends Component {
  state = {
    // handleChangeRemark: [],
    // interviewDescribe: []
  };
  componentDidMount() {
    getStudyInfoTch({ admissionTicket: "20192500" })
      .then(item => {
        if (item.data.code === "10000") {
          message.info("请登陆");
        }
        if (item.data.code === "200") {
          this.setState({
            list: item.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  /* 面试结果 */
  handleChangeQuerty = e => {
    this.setState({
      interviewResult: e
    });
  };
  /* 面试描述 */
  descriptionInput = e => {
    this.setState({
      interviewDescribe: e.target.value
    });
  };
  /* 笔试结果 */
  handleChangeResult = e => {
    this.setState({
      writtenResult: e.target.value
    });
  };
  /* 缴费情况 */
  handleChangeFree = e => {
    this.setState({
      payInfo: e
    });
  };
  /* 中考分数 */
  handleChangeMinderRe = e => {
    this.setState({
      juniorExamScore: e.target.value
    });
  };
  /* 志愿签报情况 */
  handleChangeFurter = e => {
    this.setState({
      volunteerInfo: e
    });
  };
  /* 提档情况 */
  handleChangetoFile = e => {
    this.setState({
      toFile: e
    });
  };
  /* 退费 */
  handleChangeReturnPay = e => {
    this.setState({
      returnPay: e
    });
  };
  /* 联系人 */
  handleChangeContactName = e => {
    this.setState({
      contactName: e.target.value
    });
  };
  /* 备注记录 */
  handleChangeRemark = e => {
    this.setState({
      remark: e.target.value
    });
  };
  /* time onchange */
  onChangeTime = (date, dateString) => {
    this.setState({
      contactTime: dateString
    });
  };
  /* 提交总按钮 */
  subButton = () => {
    const req = {
      admissionTicket: this.state.list.admissionTicket,
      contactName:
        this.state.contactName !== undefined
          ? this.state.contactName
          : this.state.list.contactName,
      contactTime:
        this.state.contactTime !== undefined
          ? this.state.contactTime
          : this.state.list.contactTime,
      interviewDescribe:
        this.state.interviewDescribe !== undefined
          ? this.state.interviewDescribe
          : this.state.list.interviewDescribe,
      interviewResult:
        this.state.interviewResult !== undefined
          ? this.state.interviewResult
          : this.state.list.interviewResult,
      juniorExamScore:
        this.state.juniorExamScore !== undefined
          ? this.state.juniorExamScore
          : this.state.list.juniorExamScore,
      payInfo:
        this.state.payInfo !== undefined
          ? this.state.payInfo
          : this.state.list.payInfo,
      remark:
        this.state.remark !== undefined
          ? this.state.remark
          : this.state.list.remark,
      returnPay:
        this.state.returnPay !== undefined
          ? this.state.returnPay
          : this.state.list.returnPay,
      toFile:
        this.state.toFile !== undefined
          ? this.state.toFile
          : this.state.list.toFile,
      volunteerInfo:
        this.state.volunteerInfo !== undefined
          ? this.state.volunteerInfo
          : this.state.list.volunteerInfo,
      writtenResult:
        this.state.writtenResult !== undefined
          ? this.state.writtenResult
          : this.state.list.writtenResult
    };
    getUpdataInfo(req).then(item => {
      console.log(item);
      message.info()
    });
  };

  //返回上一页
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    if (this.state.list === undefined) {
      var list = {
        admissionTicket: 20192500,
        chinaName: "李艳强",
        contactName: "李teacher",
        contactPhone: "18210609262",
        contactTime: "2019-03-06T19:26:36.000+0000",
        exam1Rank: 1,
        exam1Score: 80,
        familyAddress: "北京还定",
        fatherCompany: "平安",
        fatherName: "李李",
        fatherPhone: 11111111111,
        fatherPosition: "两路",
        gender: "1",
        idCard: "130126199110143918",
        intendedProgram: "1",
        interviewDescribe: "秀儿超级优秀",
        interviewResult: "0",
        juniorExamScore: 500,
        juniorSchoolName: "寨头中学",
        matherCompany: "平安",
        matherName: "王王",
        matherPhone: 13012661991,
        matherPosition: "八成",
        orNkStudent: "1",
        payInfo: "0",
        photo: "C:MyProject\nkschool_parent1/student/1551870187726timg.jpeg",
        preparerName: "李丽",
        preparerTime: "2019-03-06T19:19:12.000+0000",
        remark: "哈哈",
        returnPay: "0",
        schoolNameIndex: "13",
        schoolSiteArea: "灵寿",
        schoolSiteCity: "石家庄",
        schoolSiteIndex: "12",
        schoolSiteProvince: "河北",
        toFile: "1",
        volunteerInfo: "0",
        writtenResult: 100
      };
    } else {
      var list = this.state.list;
    }
    function renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    }
    console.log(renderTime("2019-03-06T19:19:12.000+0000").split(" ")[0]);
    return (
      <div className="updateMsg">
        <div className="updateMsg-content">
          <div className="back" onClick={this.goBack}>
            <Icon type="left" className="leftIcon" />
            &nbsp;&nbsp;返回
          </div>
          <div className="info">
            <h3>
              面试信息 <span>/Interview Information</span>
            </h3>
            <div className="infoData">
              <Row type="flex">
                <Col span={6} order={1}>
                  <div>
                    <span>
                      <i className="hodale">准考证号：</i>
                      <i>{`J${list.admissionTicket}`}</i>
                    </span>
                  </div>
                </Col>

                <Col span={6} order={2}>
                  <div>
                    <span>
                      <i className="hodale">考生姓名：</i>
                      <i>{list.chinaName || "王千岁"}</i>
                    </span>
                  </div>
                </Col>
              </Row>

              <Row type="flex">
                <Col span={6} order={1}>
                  <div>
                    <h5>面试结果：</h5>
                    <Select
                      defaultValue={
                        this.state.interviewResult ||
                        list.interviewResult ||
                        "1"
                      }
                      style={{ width: 240 }}
                      onChange={this.handleChangeQuerty}
                    >
                      <Option value="0">Excellent-优秀</Option>
                      <Option value="1">合格</Option>
                      <Option value="2">不合格</Option>
                    </Select>
                  </div>
                </Col>

                <Col span={6} order={2}>
                  <div>
                    <h5>面试描述：</h5>
                    <div className="description">
                      <Input
                        placeholder={list.interviewDescribe}
                        style={{ width: 800 }}
                        onChange={this.descriptionInput}
                        value={this.state.interviewDescribe}
                      />
                      <span>{`100/${100 - list.interviewDescribe.length ||
                        this.state.interviewDescribe.length}`}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row type="flex">
                <Col span={6} order={1}>
                  <div>
                    <h5>笔试结果：</h5>
                    <Input
                      placeholder={list.writtenResult}
                      value={this.state.writtenResult}
                      onChange={this.handleChangeResult}
                      style={{ width: 240 }}
                    />
                  </div>
                </Col>

                <Col span={6} order={2}>
                  <div>
                    <h5>缴费情况：</h5>
                    <Select
                      defaultValue={list.payInfo}
                      style={{ width: 240 }}
                      onChange={this.handleChangeFree}
                    >
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                    </Select>
                  </div>
                </Col>

                <Col span={6} order={3}>
                  <div>
                    <h5>中考分数：</h5>
                    <Input
                      placeholder={list.juniorExamScore}
                      style={{ width: 240 }}
                      onChange={this.handleChangeMinderRe}
                      value={this.state.juniorExamScore}
                    />
                  </div>
                </Col>

                <Col span={6} order={4}>
                  <div>
                    <h5>志愿填报情况：</h5>
                    <Select
                      defaultValue={list.volunteerInfo}
                      style={{ width: 240 }}
                      onChange={this.handleChangeFurter}
                    >
                      <Option value="0">1A</Option>
                      <Option value="1">1B</Option>
                      <Option value="2">1C</Option>
                    </Select>
                  </div>
                </Col>
              </Row>

              <Row type="flex">
                <Col span={6} order={1}>
                  <div>
                    <h5>提档：</h5>
                    <Select
                      defaultValue={list.toFile}
                      style={{ width: 240 }}
                      onChange={this.handleChangetoFile}
                    >
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                    </Select>
                  </div>
                </Col>

                <Col span={6} order={2}>
                  <div>
                    <h5>退费：</h5>
                    <Select
                      defaultValue={list.returnPay}
                      style={{ width: 240 }}
                      onChange={this.handleChangeReturnPay}
                    >
                      <Option value="1">是</Option>
                      <Option value="0">否</Option>
                      <Option value="2">考虑</Option>
                    </Select>
                  </div>
                </Col>

                <Col span={6} order={3}>
                  <div>
                    <h5>联系时间：</h5>
                    <DatePicker
                      defaultValue={moment(
                        `${renderTime(list.contactTime).split(" ")[0]}`,
                        dateFormat
                      )}
                      format={dateFormat}
                      style={{ width: 240 }}
                      onChange={this.onChangeTime}
                    />
                  </div>
                </Col>
                <Col span={6} order={4}>
                  <div>
                    <h5>联系人：</h5>
                    <Input
                      placeholder={list.contactName}
                      style={{ width: 240 }}
                      onChange={this.handleChangeContactName}
                      value={this.state.contactName}
                    />
                  </div>
                </Col>
              </Row>

              <Row type="flex">
                <Col span={6} order={1}>
                  <div>
                    <h5>备注记录：</h5>
                    <div className="description">
                      <Input
                        placeholder={list.remark}
                        style={{ width: 1000 }}
                        onChange={this.handleChangeRemark}
                        value={this.state.remark}
                      />
                      <span>{`100/${100 - list.remark.length ||
                        this.state.remark.length}`}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* 学生情况 */}
          <StudentsMsg list={list} subButton = {this.subButton} />
        </div>
        
      </div>
    );
  }
}

export default withRouter(UpdateMsg);
/* add 添加 */
// {
//     "admissionTicket": "准考证号",
//     "contactName": "联系人姓名",
//     "contactTime": "联系时间",
//     "interviewDescribe": "面试描述",
//     "interviewResult": "面试结果(0：Excellent-优秀，1：Pass-合格，2：Fail-不合格)",
//     "juniorExamScore": "中考分数",
//     "payInfo": "缴费情况(0：否，1：是)",
//     "remark": "备注",
//     "returnPay": "退费情况(0：否，1：是 2:考虑)",
//     "toFile": "提档情况(0：否，1：是)",
//     "volunteerInfo": "志愿填报(0：1A，1：1B，2：1C)",
//     "writtenResult": "笔试结果"
//   }
