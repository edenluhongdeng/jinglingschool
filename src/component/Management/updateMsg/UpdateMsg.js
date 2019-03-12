/*
 *教师修改面试信息页面
 */

import React, { Component } from "react";
import {
  Icon,
  Select,
  Input,
  Row,
  Col,
  DatePicker,
  message,
  InputNumber
} from "antd";
import { withRouter } from "react-router-dom";
import moment from "moment";
import {
  getStudyInfoTch,
  getUpdataInfo,
  getStudyPhoto
} from "./../../../api/manageMent.js";
import StudentsMsg from "./StudentsMsg";
import "./style.less";
const Option = Select.Option;
const { TextArea } = Input;
const dateFormat = "YYYY-MM-DD";

class UpdateMsg extends Component {
  state = {
    list: {},
    remark: [],
    interviewDescribe: [],
    addInfoShow: false,
    contactTime: null
  };
  componentDidMount() {
    document.title = "2019招生信息修改";
    this.getInfo();
    // getStudyPhoto().then(res => {
    //   console.log(res, "---------------------------------------------");
    // });
  }
  /* 获取信息 */
  getInfo = () => {
    if (window.location.hash.split("=") != undefined) {
      const urlId = window.location.hash.split("=")[1];
      this.setState({
        admissionTicket: urlId
      });
      getStudyInfoTch({ admissionTicket: `${urlId}` })
        .then(item => {
          if (item.data.code === "10000") {
            // message.info("请登陆");
            return;
          }
          if (item.data.code === "200") {
            this.setState({
              list: item.data.data
            });
            this.setState({
              addInfoShow: false,
              interviewResult: item.data.data.interviewResult,
              writtenResult: item.data.data.writtenResult,
              payInfo: item.data.data.payInfo,
              returnPay: item.data.data.returnPay,
              toFile: item.data.data.toFile,
              remark: item.data.data.remark,
              contactName: item.data.data.contactName,
              interviewDescribe: item.data.data.interviewDescribe,
              juniorExamScore: item.data.data.juniorExamScore,
              volunteerInfo: item.data.data.volunteerInfo,
              contactTime: item.data.data.contactTime
            });
          } else {
            message.error("接口错误");
            return;
          }
        })
        .catch(err => {
          message.error("数据错误");
          console.log(err);
        });
    }
  };
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
      writtenResult: e
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
      juniorExamScore: e
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
      admissionTicket: this.state.admissionTicket,
      contactName: this.state.contactName,
      contactTime: this.state.contactTime,
      interviewDescribe: this.state.interviewDescribe,
      interviewResult: this.state.interviewResult,
      juniorExamScore: this.state.juniorExamScore,
      payInfo: this.state.payInfo,
      remark: this.state.remark,
      returnPay: this.state.returnPay,
      toFile: this.state.toFile,
      volunteerInfo: this.state.volunteerInfo,
      writtenResult: this.state.writtenResult
    };
    getUpdataInfo(req)
      .then(item => {
        if (item.data.code == "200") {
          this.getInfo();
          // message.info(item.data.msg);
          message.error("保存成功");
          this.goBack()
        } else {
          message.error("保存失败");
        }
      })
      .catch(() => {
      });
  };

  //返回上一页
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    function renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    }
    var Time = null;
    if (this.state.contactTime == null || this.state.contactTime == undefined) {
      Time = renderTime(new Date()).split(" ")[0];
    } else {
      Time = renderTime(this.state.contactTime).split(" ")[0];
    }
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
                      <i>{`J${this.state.list.admissionTicket}`}</i>
                    </span>
                  </div>
                </Col>

                <Col span={6} order={2}>
                  <div>
                    <span>
                      <i className="hodale">考生姓名：</i>
                      <i>{this.state.list.chinaName}</i>
                    </span>
                  </div>
                </Col>
              </Row>
              {/* 填写学生信息 */}
              <div>
                <Row type="flex">
                  <Col span={6} order={1}>
                    <div>
                      <h5>面试结果：</h5>
                      <Select
                        style={{ width: 240 }}
                        onChange={this.handleChangeQuerty}
                        value={this.state.interviewResult}
                      >
                        <Option value="0">Excellent-优秀</Option>
                        <Option value="1">Pass-合格</Option>
                        <Option value="2">Fail-不合格</Option>
                      </Select>
                    </div>
                  </Col>

                  <Col span={15} order={2}>
                    <div>
                      <h5>面试描述：</h5>
                      <div className="description">
                        <Input
                        width={800}
                          onChange={this.descriptionInput}
                          value={this.state.interviewDescribe}
                          maxLength={100}
                        />
                        <span>{`${
                          this.state.interviewDescribe
                            ? ( this.state.interviewDescribe.length)
                            : 0
                        }/100`}</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row type="flex">
                  <Col span={6} order={1}>
                    <div>
                      <h5>笔试结果：</h5>
                      <InputNumber
                        value={this.state.writtenResult}
                        onChange={this.handleChangeResult}
                        style={{ width: 240 }}
                        min={0}
                        max={100}
                        precision="0"
                      />
                    </div>
                  </Col>

                  <Col span={6} order={2}>
                    <div>
                      <h5>缴费情况：</h5>
                      <Select
                        style={{ width: 240 }}
                        onChange={this.handleChangeFree}
                        value={this.state.payInfo}
                      >
                        <Option value="1">是</Option>
                        <Option value="0">否</Option>
                      </Select>
                    </div>
                  </Col>

                  <Col span={6} order={3}>
                    <div>
                      <h5>中考分数：</h5>
                      <InputNumber
                        style={{ width: 240 }}
                        onChange={this.handleChangeMinderRe}
                        value={this.state.juniorExamScore}
                        min={0}
                        max={999}
                        precision="0"
                      />
                    </div>
                  </Col>

                  <Col span={6} order={4}>
                    <div>
                      <h5>志愿填报情况：</h5>
                      <Select
                        style={{ width: 240 }}
                        onChange={this.handleChangeFurter}
                        value={this.state.volunteerInfo}
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
                        style={{ width: 240 }}
                        onChange={this.handleChangetoFile}
                        value={this.state.toFile}
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
                        style={{ width: 240 }}
                        onChange={this.handleChangeReturnPay}
                        value={this.state.returnPay}
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
                        value={moment(`${Time}`)}
                        placeholder="Select Month"
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
                        style={{ width: 240 }}
                        onChange={this.handleChangeContactName}
                        value={this.state.contactName}
                      />
                    </div>
                  </Col>
                </Row>
                <Row type="flex">
                  <Col span={24} order={1}>
                    <div>
                      <h5>备注记录：</h5>
                      <div className="description">
                        <TextArea
                          style={{ width: 1000 }}
                          onChange={this.handleChangeRemark}
                          value={this.state.remark}
                          rows={4}
                          maxLength={100}
                        />
                        <span style={{marginLeft:'15px'}}>{`${
                          this.state.remark ?  (this.state.remark.length) : 0
                        }/100`}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          {/* 学生情况 */}
          <StudentsMsg list={this.state.list} subButton={this.subButton} />
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateMsg);

