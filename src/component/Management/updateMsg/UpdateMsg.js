/*
*教师填写面试信息页面
*/

import React, { Component } from 'react';
import { Icon,Select ,Input,Row, Col,DatePicker   } from 'antd';
import {withRouter} from 'react-router-dom'
import moment from 'moment';
import StudentsMsg from "./StudentsMsg"
import './style.less'
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';
class UpdateMsg extends Component {

handleChange = (value) => {
  console.log(`selected ${value}`);
}

//返回上一页
goBack = () => {
    this.props.history.goBack()
}

  render() {
    return (
      <div className = "updateMsg">
            <div className = "updateMsg-content">
                <div className = "back" onClick = {this.goBack}>
                <Icon type="left" className = "leftIcon" />
                &nbsp;&nbsp;返回
                </div>
                <div className = "info">
                    <h3>面试信息 <span>/Interview Information</span></h3>
                    <div className = "infoData">
                        <Row type="flex">
                            <Col span={6} order={1}>
                                <div >
                                    <span>
                                        <i className = "hodale">准考证号：</i>
                                        <i>J20192500</i>
                                    </span>
                                </div>
                            </Col>

                            <Col span={6} order={2}>
                                <div >
                                    <span>
                                        <i className = "hodale">考生姓名：</i>
                                        <i>李3呃呃呃</i>
                                    </span>
                                </div>
                            </Col>
                        </Row>

                        <Row type="flex">
                            <Col span={6} order={1}>
                                <div >
                                <h5>面试结果：</h5>
                                <Select defaultValue="0" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="0">Excellent-优秀</Option>
                                    <Option value="1">合格</Option>
                                    <Option value="2">不合格</Option>
                                </Select>
                                </div>
                            </Col>

                            <Col span={6} order={2}>
                                <div >
                                <h5>面试描述：</h5>
                                   <div className = "description"> 
                                       <Input placeholder="请输入面试描述" style={{width:800}}/>
                                       <span>100/0</span>
                                    </div>
                                 </div>
                            </Col>
                        </Row>

                        <Row type="flex">
                                <Col span={6} order={1}>
                                    <div >
                                        <h5>笔试结果：</h5>
                                        <Input placeholder=" " style={{width:240}}/>
                                    </div>
                                </Col>

                                <Col span={6} order={2}>
                                    <div >
                                        <h5>缴费情况：</h5>
                                        <Select defaultValue="1" style={{ width: 240 }} onChange={this.handleChange}>
                                            <Option value="1">是</Option>
                                            <Option value="0">否</Option>
                                        </Select>
                                    </div>
                                </Col>

                                <Col span={6} order={3}>
                                    <div >
                                        <h5>中考分数：</h5>
                                        <Input placeholder=" " style={{width:240}}/>
                                    </div>
                                </Col>

                                <Col span={6} order={4}>
                                    <div >
                                        <h5>志愿填报情况：</h5>
                                        <Select defaultValue="0" style={{ width: 240 }} onChange={this.handleChange}>
                                            <Option value="0">1A</Option>
                                            <Option value="1">1B</Option>
                                            <Option value="2">1C</Option>
                                        </Select>
                                    </div>
                                </Col>
                        </Row>

                        <Row type="flex">
                                <Col span={6} order={1}>
                                    <div >
                                        <h5>提档：</h5>
                                        <Select defaultValue="1" style={{ width: 240 }} onChange={this.handleChange}>
                                            <Option value="1">是</Option>
                                            <Option value="0">否</Option>
                                        </Select>
                                    </div>
                                </Col>

                                <Col span={6} order={2}>
                                    <div >
                                        <h5>退费：</h5>
                                        <Select defaultValue="2" style={{ width: 240 }} onChange={this.handleChange}>
                                            <Option value="1">是</Option>
                                            <Option value="0">否</Option>
                                            <Option value="2">考虑</Option>
                                        </Select>
                                    </div>
                                </Col>

                                <Col span={6} order={3}>
                                    <div >
                                        <h5>联系时间：</h5>
                                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} style={{ width: 240 }} />
                                    </div>
                                </Col>

                                <Col span={6} order={4}>
                                    <div >
                                        <h5>联系人：</h5>
                                        <Input placeholder=" " style={{width:240}}/>
                                    </div>
                                </Col>
                        </Row>

                        <Row type="flex">
                            <Col span={6} order={1}>
                                <div >
                                    <h5>备注记录：</h5>
                                    <div className = "description"> 
                                        <Input placeholder="请输入备注记录" style={{width:1000}}/>
                                        <span>100/0</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* 学生情况 */}
                <StudentsMsg />
            </div>
      </div>
    );
  }
}

export default withRouter(UpdateMsg);
