import React, { Component } from 'react'
import _ from 'lodash'
import './index.less'
import src1 from '../../imgs/enrollment_logo.png'
import { Form, Input, Select, Row, Col, Checkbox, Button, Radio, Upload, DatePicker, message, Icon } from 'antd'
import FailModal from '../FailModal'
import InfoModal from '../InfoMoadl'
const { Option } = Select
const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class Registration extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
    isFailModalShow:false,
    isInfoModalShow:false,
    loading: false,
    studentInfo:{}
  }
  componentDidMount(){
    
  }
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
      schoolSiteIndex:value,
    });
  }

  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
      schoolNameIndex:value,
    });
  }
  closeInfoModal = () => {
    this.setState({isInfoModalShow:false})
  }
  closeFailModal = () => {
    this.setState({isFailModalShow:false})
  }
  showInfoModal = () => {
    this.setState({isInfoModalShow:true})
  }
  showFailModal = () => {
    this.setState({isFailModalShow:true})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { studentInfo, imageUrl, schoolSiteIndex, schoolNameIndex } = this.state
    if(!imageUrl) {
      message.warning('请先上传照片!')
      return
    }
    if(!schoolSiteIndex || !schoolNameIndex ) {
      message.warning('请选择初中就读学校信息!')
      return
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const newValue = { 
          ...values,
          birthDateStr:values['birthDateStr'].format('YYYY-MM-DD'),
          schoolSiteIndex,schoolNameIndex
         }
        const newStudentInfo = Object.assign({},newValue,studentInfo)
        console.log({newStudentInfo})
        this.setState({studentInfo:newStudentInfo},()=>{
          this.showInfoModal()
        })
      }
    });

  }
  radioGroupChange = e => {
    this.setState({isShow: e.target.value})
  }
  checkboxGroupChange = value => {
    const { studentInfo } = this.state
    studentInfo.intendedPrograms = value
    this.setState({
      studentInfo,
    })
  }
  beforeUpload = (file) => {
    console.log({file})
    const isJPG = file.type === ('image/jpeg' || 'image/jpg' || 'image/gif' || 'image/png' || 'image/bmp')
    if (!isJPG) {
      message.warning('照片格式不正确!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.warning('照片大小不超过2MB!')
    }
    return isJPG && isLt2M;
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      message.success('上传成功!')
      const { studentInfo } = this.state
      const imageUrl = _.get(info,'file.response.data')
      studentInfo.photo = imageUrl
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
        studentInfo
      }));
    }else{
      message.error('照片上传失败!')
    }
  }
  render() {
    const { isShow=2,cities,isFailModalShow,isInfoModalShow, imageUrl, studentInfo } = this.state
    const { getFieldDecorator, getFieldValue } = this.props.form
    //姓名校验
    const reg = /^[\u4e00-\u9fa5]+$/
    const testName = (rule,value,callback) => {
      const nameValue = getFieldValue('chinaName') || getFieldValue('fatherName') || getFieldValue('motherName') || getFieldValue('preparerName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
    }
    //手机号校验
    const testPhone = (rule,value,callback) => {
      const phoneValue = getFieldValue('contactPhone') || getFieldValue('fatherPhone') || getFieldValue('matherPhone')
      if(!/^1[3456789]\d{9}$/.test(phoneValue)) callback('请输入正确的手机号!')
      callback()
    }
    //身份证校验
    const IDreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    const testID = (rule,value,callback) => {
      const IDValue = getFieldValue('idCard')
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
                {getFieldDecorator('chinaName', {
                  rules: [{required: true, message: '请输入你的姓名!'},{validator:testName}],
                })(
                  <Input className='regist-input' placeholder='请输入中文名...' maxLength={5} autoComplete="off"/>
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
                      <Radio value="0">女</Radio>
                    </Radio.Group>
                    </div>
                  )}
                </Form.Item>
              </Col>
            <Col span={8}>
                <p className='regist-title'><span>出生年月</span>/Date of Birth</p>
                <Form.Item>
                {getFieldDecorator('birthDateStr', {
                  rules: [{ required: true, message: '请选择你的出生日期!' }],
                })(
                  <DatePicker className='regist-DatePicker' placeholder="请选择你的出生日期..."/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>身份证号</span>/ID No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('idCard', {
                  rules: [{validator:testID}],
                })(
                  <Input className='regist-input' placeholder='请输入身份证号...' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>联系电话</span>/Cellphone No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('contactPhone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input' placeholder='请输入你的手机号...' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>是否是南京初中学籍</span>/Student i</p>
              <Form.Item>
                  {getFieldDecorator('orNkStudent',{
                    rules: [{required: true, message: '请选择你的学籍!'}],
                  })(
                   <div className='regist-radioGroup'>
                    <Radio.Group onChange={this.radioGroupChange}>
                      <Radio value="1">是</Radio>
                      <Radio value="0">否</Radio>
                    </Radio.Group>
                    </div>
                  )}
                </Form.Item>
            </Col>
          </Row>
          {
            isShow == 1 && 
            <Row>
            <Col span={7}>
              <p className='regist-title'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteIndex', {
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
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={17}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('schoolNameIndex', {
                })(
                  <div>
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
            isShow == 0 && 
            <Row>
            <Col span={5}>
              <p className='regist-title'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteProvince', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                    <Input className='regist-input3' placeholder='请输入省份...' autoComplete="off"/>
                    <span className='regist-span'>省</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={5}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteCity', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                    <Input className='regist-input3' placeholder='请输入市...' autoComplete="off"/>
                    <span className='regist-span'>市</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={5}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteArea', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                    <Input className='regist-input3' placeholder='请输入区...' autoComplete="off"/>
                    <span className='regist-span'>区</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={9}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High</p>
              <Form.Item
              >
                {getFieldDecorator('juniorSchoolName', {
                  rules: [
                    { required: true, message: '请选择你的学校信息!' },
                  ],
                })(
                  <div>
                    <Input className='regist-input4' placeholder='请输入学校...' autoComplete="off"/>
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
                {getFieldDecorator("intendedProgram", {
                  rules: [{required: true, message: '请选择你的项目意向!'}],
                })(
                  <div className='regist-CheckboxGroup'>
                  <Checkbox.Group onChange={this.checkboxGroupChange}>
                      <Checkbox value="0">中美 /American</Checkbox>
                      <Checkbox value="1">中英 /British</Checkbox>
                      <Checkbox value="2">中加 /Canadian</Checkbox>
                      <Checkbox value="3">待定 /TBA</Checkbox>
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
                {getFieldDecorator('exam1Score', {
                  rules: [{required: true, message: '请输入你的总分!'}],
                })(
                  <Input className='regist-input' type='number' placeholder='请输入总分...' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>一模年级排名</span>/School Ranki</p>
              <Form.Item>
                {getFieldDecorator('exam1Rank', {
                  rules: [{required: true, message: '请输入你的年级排名!'}],
                })(
                  <Input className='regist-input' type='number' placeholder='请输入年级排名...' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>上传照片</span>/Photo</p>
              <Form.Item>
                <div className="dropbox">
                {imageUrl ? <img src={imageUrl} alt="avatar" className='regist-avatar'/> : 
                    <Upload.Dragger name="file" action="/enroll/fileController/white/uploadFile" beforeUpload={this.beforeUpload} showUploadList={false} onChange={this.handleChange}>
                      <Icon type={this.state.loading ? 'loading' : ''} />
                    </Upload.Dragger>}
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
                  <Input className='regist-input1' placeholder='请输入姓名...' maxLength={5} autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('fatherCompany', {
                  rules: [{required: true, message: '请输入工作单位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('fatherPosition', {
                  rules: [{required: true, message: '请输入工作职位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('fatherPhone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲姓名</span>/Mother’s Name</p>
              <Form.Item>
                {getFieldDecorator('matherName', {
                  rules: [{required: true, message: '请输入姓名!'},{validator:testName}],
                })(
                  <Input className='regist-input1' placeholder='请输入姓名...' maxLength={5} autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('matherCompany', {
                  rules: [{required: true, message: '请输入工作单位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('matherPosition', {
                  rules: [{required: true, message: '请输入工作职位!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('matherPhone', {
                  rules: [{validator:testPhone}],
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className='regist-title'><span>家庭住址</span>/Family Address</p>
              <Form.Item>
                {getFieldDecorator('familyAddress', {
                  rules: [{required: true, message: '请输入家庭地址!'}],
                })(
                  <Input className='regist-input2' placeholder='请输入详细的家庭地址，以方便我们邮寄文件到您家里…' autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <h2 className='regist-h2'>填表信息<span>/Registration I</span></h2>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>填表人姓名</span>/Applicant</p>
              <Form.Item>
                {getFieldDecorator('preparerName', {
                  rules: [{required: true, message: '请输入姓名!'}],
                })(
                  <Input className='regist-input1' placeholder='请输入姓名…' maxLength={5} autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item style={{textAlign:'center'}}>
            <Button type="primary" htmlType="submit" style={{width:'1.4rem',height:'0.5rem'}}>提交信息</Button>
          </Form.Item>
        </Form>
        {
          isFailModalShow && 
          <FailModal onClose={this.closeFailModal}></FailModal>
        }
        {
          isInfoModalShow && 
          <InfoModal onClose={this.closeInfoModal} studentInfo={studentInfo} imageUrl={imageUrl}></InfoModal>
        }
      </div>
    );
  }
}

const Regist = Form.create()(Registration)
export default Regist
