import React, { Component } from 'react';
import { Icon,Select ,Input  } from 'antd';
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
                        <li className = "infoList">
                            <span>
                                <i className = "hodale">准考证号：</i>
                                <i>J20192500</i>
                            </span>
                            <span className = "studyName">
                                <i className = "hodale">考生姓名：</i>
                                <i>李孝利</i>
                            </span>
                        </li>
                        <li>
                            <div>
                                <h5>面试结果：</h5>
                                <Select defaultValue="lucy" style={{ width: 240 }} onChange={this.handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div>
                                <h5>面试描述：</h5>
                                <Input placeholder="Basic usage" />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default withRouter(UpdateMsg);
