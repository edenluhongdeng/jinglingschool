import React, { Component, Fragment } from 'react'
import './login.less'
import logo from '../../imgs/enrollment_login.png'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class Demo  extends Component {
  constructor(props){
    super(props)
    this.state={
      a:true,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 15 }
    }
    const inputStyle={borderRadius:'0.05rem'}
    return (
      <Fragment>
      <div className='login'>
        <div className="login_detail">
          <img src={logo} />
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem {...formItemLayout} label="准考证号">
              {getFieldDecorator('userName', {
                rules: [{
                  required: false, message: '请输入正确的准考证号!',
                }, {
                  // validator: this.checkConfirm,
                }],
              })(
                  <Input placeholder="请输入准考证号..." style={inputStyle}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="手机号码">
              {getFieldDecorator('password', {
                rules: [{
                  required: false, message: '手机号码格式不正确!',
                }, {
                  // validator: this.checkConfirm,
                }],
              })(
                <div className='phone'>
                  <Input  type="password" placeholder="请输入手机号码..." style={inputStyle}/>
                  {
                    this.state.a&&<p className='phoneNumber'>准考证号与手机号码不一致！</p>
                  }
                </div>

              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })}
              <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                style={{
                  background:'#4276D4',
                  borderRadius:'0.3rem',
                  width: '3.4rem',
                  height: '0.4rem',
                  marginLeft: '0.3rem'
                }}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <div>11111111</div>
      </Fragment>
    )
  }
}

const Login = Form.create()(Demo);
export default Login
