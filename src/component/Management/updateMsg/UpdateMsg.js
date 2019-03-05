import React, { Component } from 'react';
import { Icon,Select ,Input,Row, Col  } from 'antd';
import {withRouter} from 'react-router-dom'
import './style.less'
const Option = Select.Option;
class UpdateMsg extends Component {

handleChange = (value) => {
  console.log(`selected ${value}`);
}
  render() {
    return (
      <div className = "updateMsg">
            <div className = "updateMsg-content">
                <div className = "back">
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
                                        <i>J20192500</i>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row type="flex">
                            <Col span={6} order={1}>
                                <div >
                                <h5>面试结果：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                            </Col>
                            <Col span={6} order={2}>
                                <div >
                                <h5>面试描述：</h5>
                                <Input placeholder="Basic usage" style={{width:900}}/>
                                </div>
                            </Col>
                        </Row>
                        <Row type="flex">
                                <Col span={6} order={1}>
                                <div >
                                <h5>笔试结果：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={2}>
                                <div >
                                <h5>缴费情况</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={3}>
                                <div >
                                <h5>中考分数</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={4}>
                                <div >
                                <h5>志愿填报情况</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                        </Row>
                        <Row type="flex">
                                <Col span={6} order={1}>
                                <div >
                                <h5>提档：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={2}>
                                <div >
                                <h5>退费：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={3}>
                                <div >
                                <h5>联系时间：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                                <Col span={6} order={4}>
                                <div >
                                <h5>联系人：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </div>
                                </Col>
                        </Row>
                        <Row type="flex">
                        <Col span={6} order={1}>
                                <div >
                                <h5>备注记录：</h5>
                                <Input placeholder="Basic usage" style={{width:1200}}/>
                                </div>
                                </Col>
                        </Row>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default withRouter(UpdateMsg);
