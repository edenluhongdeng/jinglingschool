import React, { Component } from 'react'
import './index.less'
import src1 from '../../imgs/enrollment_logo.png'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, Upload, DatePicker } from 'antd'
import FailModal from '../FailModal'
import InfoModal from '../InfoMoadl'
const { Option } = Select
const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class Registration extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
    isMyModalShow:false,
  }
  componentDidMount(){
    console.log(document.documentElement.clientHeight,document.documentElement.clientWidth,'////')
  }
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  }

  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

  }
  radioGroupChange = e => {
    this.setState({isShow: e.target.value})
  }
  render() {
    const { isShow=2,cities,isMyModalShow } = this.state
    const { getFieldDecorator, getFieldValue } = this.props.form
    //姓名校验
    const reg = /^[\u4e00-\u9fa5]+$/
    const testName = (rule,value,callback) => {
      const nameValue = getFieldValue('name') || getFieldValue('fatherName') || getFieldValue('motherName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
    }
    //手机号校验
    const testPhone = (rule,value,callback) => {
      const phoneValue = getFieldValue('phone') || getFieldValue('FPhone') || getFieldValue('MPhone')
      if(!/^1[3456789]\d{9}$/.test(phoneValue)) callback('请输入正确的手机号!')
      callback()
    }
    //身份证校验
    const IDreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    const testID = (rule,value,callback) => {
      const IDValue = getFieldValue('ID')
      if(!IDreg.test(IDValue)) callback('请输入正确身份证号码!')
      callback()
    }
    return (
      <div className='regist'>
        <div className='regist-header'>
          <img src={src1} alt=''/>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <h2 className='regist-h2'>学生情况<span>/Applicant Info</span></h2>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>中文姓名</span>/Chinese Name</p>
              <Form.Item>
                {getFieldDecorator('name', {
                  rules: [{required: true, message: '请输入你的姓名!'},{validator:testName}],
                })(
                  <Input className='regist-input' placeholder='请输入中文名...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>  
              <p className='regist-title'><span>性别</span>/Gender</p>
                <Form.Item>
                  {getFieldDecorator('gender',{
                    rules: [{required: true, message: '请选择你的姓别!'}],
                  })(
                   <div className='regist-radioGroup'>
                    <Radio.Group>
                      <Radio value="1">男</Radio>
                      <Radio value="2">女</Radio>
                    </Radio.Group>
                    </div>
                  )}
                </Form.Item>
              </Col>
            <Col span={8}>
                <p className='regist-title'><span>出生年月</span>/Date of Birth</p>
                <Form.Item>
                {getFieldDecorator('birthday', {
                  rules: [{ required: true, message: '请选择你的出生日期!' }],
                })(
                  <DatePicker className='regist-input' placeholder="请选择你的出生日期..."/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>身份证号</span>/ID No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('ID', {
                  rules: [{validator:testID}],
                })(
                  <Input className='regist-input' placeholder='请输入身份证号...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>联系电话</span>/Cellphone No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input' placeholder='请输入你的手机号...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>是否是南京初中学籍</span>/Student i</p>
              <Form.Item>
                  {getFieldDecorator('schoolRoll',{
                    rules: [{required: true, message: '请选择你的学籍!'}],
                  })(
                   <div className='regist-radioGroup'>
                    <Radio.Group onChange={this.radioGroupChange}>
                      <Radio value="1">是</Radio>
                      <Radio value="2">否</Radio>
                    </Radio.Group>
                    </div>
                  )}
                </Form.Item>
            </Col>
          </Row>
          {
            isShow == 1 && 
            <Row>
            <Col >
              <p className='regist-title'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('select', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                  <Select
                    defaultValue={provinceData[0]}
                    style={{ width: 240 }}
                    onChange={this.handleProvinceChange}
                  >
                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                  </Select>
                  <span className='regist-span'>区</span>
                  <Select
                    style={{ width: 700 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                  >
                    {cities.map(city => <Option key={city}>{city}</Option>)}
                  </Select>
                  <span className='regist-span'>中学</span>
                  </div>
                )}
              </Form.Item>
            </Col>
          </Row>
          }
          {
            isShow == 2 && 
            <Row>
            <Col>
              <p className='regist-title'><span>不是</span>/Intended Progr</p>
              <Form.Item
              >
                {getFieldDecorator('select', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                  <Select
                    defaultValue={provinceData[0]}
                    style={{ width: 180 }}
                    onChange={this.handleProvinceChange}
                  >
                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                  </Select>
                  <span className='regist-span'>省</span>
                  <Select
                    style={{ width: 180 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                  >
                    {cities.map(city => <Option key={city}>{city}</Option>)}
                  </Select>
                  <span className='regist-span'>市</span>
                  <Select
                    style={{ width: 180 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                  >
                    {cities.map(city => <Option key={city}>{city}</Option>)}
                  </Select>
                  <span className='regist-span'>区</span>
                  <Select
                    style={{ width: 330 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                  >
                    {cities.map(city => <Option key={city}>{city}</Option>)}
                  </Select>
                  <span className='regist-span'>中学</span>
                  </div>
                )}
              </Form.Item>
            </Col>
          </Row>
          }
          <Row>
            <Col span={24}>
              <p className='regist-title'><span>项目意向</span>/Intended Progr</p>
              <Form.Item>
                {getFieldDecorator("checkbox-group", {
                  rules: [{required: true, message: '请选择你的项目意向!'}],
                })(
                  <div className='regist-CheckboxGroup'>
                  <Checkbox.Group>
                      <Checkbox value="1">中美 /American</Checkbox>
                      <Checkbox value="2">中英 /British</Checkbox>
                      <Checkbox value="3">中加 /Canadian</Checkbox>
                      <Checkbox value="4">待定 /TBA</Checkbox>
                  </Checkbox.Group>
                  <span className='regist-CheckboxGroup-span'>*可进行多项选择</span>
                  </div>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>一模总分</span>/Total Score of</p>
              <Form.Item>
                {getFieldDecorator('total', {
                  rules: [{required: true, message: '请输入你的总分!'}],
                })(
                  <Input className='regist-input' type='number' placeholder='请输入总分...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>一模年级排名</span>/School Ranki</p>
              <Form.Item>
                {getFieldDecorator('rank', {
                  rules: [{required: true, message: '请输入你的年级排名!'}],
                })(
                  <Input className='regist-input' type='number' placeholder='请输入年级排名...' />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>上传照片</span>/Photo</p>
              <Form.Item>
                <div className="dropbox">
                  {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    rules: [{ required: true, message: '请上传照片!' }],
                  })(
                    <Upload.Dragger name="files" action="/upload.do"></Upload.Dragger>
                  )}
                </div>
              </Form.Item>
            </Col>
            <Col span={16}>
              <div className='regist-tip'>
                <p className='regist-title'>支持jpg、jpeg、gif、png、bmp格式的图片，大小不超过2MB；</p>
                <p className='regist-title'>图片宽高尺寸最小为135*180像素；</p>
              </div>
            </Col>
          </Row>
          <h2 className='regist-h2'>家庭情况<span>/Family Informa</span></h2>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>父亲姓名</span>/Father’s Name</p>
              <Form.Item>
                {getFieldDecorator('fatherName', {
                  rules: [{required: true, message: '请输入姓名!'},{validator:testName}],
                })(
                  <Input className='regist-input1' placeholder='请输入姓名...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('FCompany', {
                  rules: [{required: true, message: '请输入工作单位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…'/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('FOccupation', {
                  rules: [{required: true, message: '请输入工作职位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…'/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('FPhone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…'/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲姓名</span>/Mother’s Name</p>
              <Form.Item>
                {getFieldDecorator('motherName', {
                  rules: [{required: true, message: '请输入姓名!'},{validator:testName}],
                })(
                  <Input className='regist-input1' placeholder='请输入姓名...'/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('MCompany', {
                  rules: [{required: true, message: '请输入工作单位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…'/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('MOccupation', {
                  rules: [{required: true, message: '请输入工作职位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…'/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('MPone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…'/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className='regist-title'><span>家庭住址</span>/Family Address</p>
              <Form.Item>
                {getFieldDecorator('address', {
                  rules: [{required: true, message: '请输入家庭地址!'}],
                })(
                  <Input className='regist-input2' placeholder='请输入详细的家庭地址，以方便我们邮寄文件到您家里…'/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <h2 className='regist-h2'>填表信息<span>/Registration I</span></h2>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>填表人姓名</span>/Applicant</p>
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入姓名!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入姓名…'/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>填表时间</span>/Date of Regist</p>
              <Form.Item
              >
                {getFieldDecorator('date', {
                  rules: [{ required: true, message: '请选择填表日期!' }],
                })(
                  <DatePicker className='regist-input1' placeholder="请选择填表日期..."/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item style={{textAlign:'center'}}>
            <Button type="primary" htmlType="submit" style={{width:'1.4rem',height:'0.5rem'}}>提交信息</Button>
          </Form.Item>
        </Form>
        {
          false && 
          <FailModal></FailModal>
        }
        {
          false && 
          <InfoModal></InfoModal>
        }
      </div>
    );
  }
}

const Regist = Form.create()(Registration)
export default Regist
