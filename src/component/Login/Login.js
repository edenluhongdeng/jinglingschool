import React, { Component, Fragment } from 'react'
import './login.less'
import logo from '../../imgs/enrollment_login.png'
import { Form, Input, Button, } from 'antd'
import {login} from '../../api/Login'
const FormItem = Form.Item;


class Demo  extends Component {
  constructor(props){
    super(props)
    this.state={
      isShow:false,
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values).then(res=>{
          if(res.data.code=='200'&& res.data.data == '0'){
            this.setState({
              isShow:true
            })
          }else if(res.data.code=='200'&&res.data.data == '1'){
            
            this.props.history.push({
              pathname: '/management',
            })
          }else if(res.data.code=='200'&&res.data.data == '2'){
            this.props.history.push({
              pathname: '/choose',
            })
          }
        })
      }
    });
  }
  changePhone=()=>{
    this.setState({
      isShow:false
    })
  }
  
  render() {
    const { getFieldDecorator, getFieldValue} = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 15 }
    }
    const inputStyle={
      borderRadius:'0.05rem',
      fontSize: '.14rem',
      fontFamily:'PingFangSC-Regular',
      fontWeight:'400',
      color:'rgba(179,179,179,1)',
      lineHeight:'14px'
    }
    const admissionID=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    const checkAdmission=(rule,value,callback)=>{
      const admissionValue=getFieldValue('idCard')
      if(!admissionID.test(admissionValue)) {
        callback('请输入正确的身份证号!')
        
      }
      callback()
      
    }
    const phoneID=/^1[3456789]\d{9}$/
    const checkFhone=(rule,value,callback)=>{
      const phoneNumber= getFieldValue('contactPhone')
      if(!phoneID.test(phoneNumber)){
        callback('手机号码格式不正确!')
        
      } 
      callback()
      
    }
    
    return (
      <Fragment>
      <div className='login'>
        <div className="login_detail">
          <img src={logo} />
          <Form onSubmit={this.handleSubmit} className="loginForm">
            <FormItem {...formItemLayout} label="身份证号">
              {getFieldDecorator('idCard', {
                rules: [{
                  required: false, message: '请输入正确的身份证号!',
                }, {
                  validator: checkAdmission,
                }],
              })(
                  <Input placeholder="请输入身份证号..."maxLength={18} style={inputStyle} autocomplete="off"/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="手机号码">
              {getFieldDecorator('contactPhone', {
                rules: [{
                  required: false, message: '手机号码格式不正确!',
                }, {
                  validator: checkFhone,
                }],
              })(
                <div className='phone'>
                  <Input  placeholder="请输入手机号码..." maxLength={11} style={inputStyle} onChange={this.changePhone} autocomplete="off"/>
                  {
                    this.state.isShow&&<p className='phoneNumber'>身份证号与手机号码不一致！</p>
                  }
                </div>

              )}
            </FormItem>
            <FormItem>
              
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
      <div className='footer'>
        <p>Copyright@2015 南京市金陵中学河西分校   &nbsp;苏ICP备05067371号-1</p>
        <p>电话(传真)  &nbsp;025-86476007</p>
        <p>地址: &nbsp;江苏省南京市建邺区梦都路60号</p>
      </div>
      </Fragment>
    )
  }
}

const Login = Form.create()(Demo);
export default Login
