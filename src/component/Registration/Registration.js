import React, { Component } from 'react'
import './index.less'
import src1 from '../../imgs/enrollment_logo.png'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'

const { Option } = Select

class Registration extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='regist'>
        <div className='regist-header'>
          <img src={src1} alt=''/>
        </div>
        <Form onSubmit={this.handleSubmit}>
        <h2><span>学生情况</span> /Applicant Info</h2>
        <Row>
          <Col span={8}>
            <p className='regist-title'><span>中文姓名</span> /Chinese Name</p>
            <Form.Item
              >
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入你的姓名!'}],
                })(
                  <Input className='regist-input'/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
            <p className='regist-title'><span>性别</span> /Gender</p>
            <Form.Item
              >
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入你的姓名!'}],
                })(
                  <Input className='regist-input'/>
                )}
              </Form.Item>
            </Col><Col span={8}>
            <p className='regist-title'><span>出生年月</span> /Date of Birth</p>
            <Form.Item
              >
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入你的姓名!'}],
                })(
                  <Input className='regist-input'/>
                )}
              </Form.Item>
            </Col>
        </Row>
          {/* <p><span>学生情况</span> /Applicant Info</p>
          <Form.Item
            >
              {getFieldDecorator('userName', {
                rules: [{required: true, message: '请输入你的姓名!'}],
              })(
                <Input className='regist-input'/>
              )}
            </Form.Item>
            <p><span>学生情况</span> /Applicant Info</p>
            <Form.Item
            >
              {getFieldDecorator('userName', {
                rules: [{required: true, message: '请输入你的姓名!'}],
              })(
                <Input className='regist-input'/>
              )}
            </Form.Item>
            <Form.Item
            >
              {getFieldDecorator('userName', {
                rules: [{required: true, message: '请输入你的姓名!'}],
              })(
                <Input className='regist-input'/>
              )}
            </Form.Item> */}
        </Form>
      </div>
    );
  }
}

const Regist = Form.create()(Registration)
export default Regist
