import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import './index.less'
import { selectForUpdate } from '../../api'
import src1 from '../../imgs/enrollment_logo.jpg'
import { Form, Input, Select, Row, Col, Checkbox, Button, Radio, Upload, DatePicker, message, Icon } from 'antd'
import FailModal from '../FailModal'
import InfoModal from '../InfoMoadl'
import baseUrl from '../../utils'
const { Option } = Select
const dateFormat = 'YYYY-MM-DD'
const provinceData = ['市直属学校','玄武区','鼓楼区', '秦淮区','建邺区','雨花台区','栖霞区','江宁区','浦口区','溧水区','高淳区','六合区','江北新区']
const cityData = {
  市直属学校:[
    '南京市第一中学（初中）',
    '南京外国语学校',
    '南京中华中学',
    '南京晓庄学院附属中学',
    '南京市建宁中学',
    '南京市聋人学校',
    '南京市盲人学校',
    '南京市公园路中学',
    '其它'],
  玄武区:[
    '第九中学',
    '孝陵卫中学',
    '南京市紫东实验学校',
    '南京市第三十四中学',
    '南京玄武外国语学校',
    '南京市第五十四中学',
    '南京十三中锁金分校',
    '南京农业大学附属中学',
    '南京市第十三中学科利华分校',
    '南京外国语学校',
    '南京市科利华中学',
    '南京林业大学附属中学',
    '南京市人民中学',
    '南京铁路分局南京铁路职工子弟第二中学',
    '南京铁路分局南京铁路职工子弟中学',
    '南京市第十三中学红山校区',
    '马厂镇第二中学',
    '南京市第九中学弘光分校',
    '南京市梅园中学',
    '南京体育学院附属中学',
    '南京市玄武区特教学校',
    '其它'],
  鼓楼区: [
    '南京师范大学附中',
    '南京市金陵中学',
    '南京宁海中学',
    '南京大学附中',
    '南京市第五十中学',
    '南京市田家炳高级中学',
    '南京商业学校',
    '南京市第八中学',
    '南京市第二十九中学初中部',
    '江苏教育学院附属高级中学',
    '南京29中教育集团致远校区',
    '南京市宁海中学分校',
    '南京市金陵汇文学校（初中部）',
    '南京民办育英外国语学校',
    '南京市第十二中学',
    '南京市滨江中学',
    '南京一中（求真分校）',
    '南京晓庄学院附中（一中分校）',
    '南京市第三十九中学',
    '南京市第十二初级中学',
    '南京市第六十六中学',
    '南京市鼓楼实验中学',
    '南师附中树人学校',
    '南京市第四中学',
    '南京市第四中学分校',
    '南京市五塘中学',
    '南京市第二十九中学幕府山初级中学',
    '南京市鼓楼区特殊教育学校',
    '南京特殊教育师范学校第二附属学校',
    '其它'],
  秦淮区: [
    '南京市第五初级中学',
    '南京郑和外国语学校',
    '南京市文昌初级中学',
    '南京市文枢初级中学',
    '南京市秦淮外国语',
    '南京市第十八中学',
    '南京市第二十七初级中学',
    '南京市第一中学初中部',
    '南京市行知实验中学',
    '南京航空航天大学附属中学',
    '南京市钟英中学',
    '银龙花园学校',
    '南京市第四十三中学',
    '南京市第三高级中学文昌校区',
    '南京市秦淮特殊教育学校初中',
    '南京市育智学校',
    '其它'],
  建邺区:[
    '南京河西外国语学校',
    '金陵中学河西分校',
    '建邺初级中学',
    '南湖第二中学',
    '中华中学上新河初中',
    '南京师范大学附属中学新城初级中学',
    '南京师范大学附属中学新城初级中学黄山路分校',
    '南京师范大学附属中学新城初级中学怡康街分校',
    '莲花实验学校',
    '江心州初级中学',
    '南京外国语学校河西初级中学',
    '致远初级中学',
    '南京特殊教育师范学校附属小学（初中部）',
    '其它'],
  雨花台区:[
    '南京市雨花台中学',
    '南京市梅山高级中学',
    '南京市板桥中学',
    '南京市共青团路中学',
    '南京市金陵中学西善分校',
    '南京市孙家初级中学',
    '南京市金陵中学岱山分校',
    '南京市雨花台中学春江分校',
    '南京市梅山第一中学',
    '南京市梅山第二中学',
    '南京市民办实验学校',
    '金陵华兴实验学校',
    '其它'],
  栖霞区:[
    '南京外国语学校仙林分校燕子矶校区',
    '南京市栖霞区实验初级中学尧化校区',
    '南京新港中等专业学校',
    '南京外国语学校仙林分校',
    '南京师范大学附属实验学校',
    '南京师范大学附属中学丁家庄初级中学',
    '南京市八卦洲中桥中学',
    '南京市燕子矶初级中学',
    '南京市华电中学',
    '南京市第一中学马群分校',
    '南京师范大学附属中学仙林学校初中部',
    '南京市栖霞区实验初级中学南炼校区',
    '南京市金陵中学仙林分校中学部',
    '南京市花园中学',
    '南京市营防中学',
    '南京市栖霞中学',
    '南京市燕子矶中学',
    '南京市伯乐中学',
    '南京市摄山中学',
    '南京市伯乐中学',
    '南京南江中学',
    '南京泰晤士学校',
    '其它'],
  江宁区:[
    '南京市江宁开发区学校',
    '南京市竹山中学',
    '南京市竹山中学分校清水亭学校',
    '南京市上元中学',
    '南京市百家湖中学',
    '南京市天景山中学',
    '南京师范大学附属中学江宁分校（初中）',
    '南京市东山镇岔路初级中学',
    '南京市清水亭中学',
    '南京市江宁区上坊初级中学',
    '南京市江宁镇初级中学',
    '江宁区陆郎初级中学',
    '南京市江宁区铜井初级中学',
    '南京市江宁区谷里初级中学',
    '南京市江宁区桃红初级中学',
    '南京市江宁区东善桥初级中学',
    '江宁区横溪初级中学',
    '江宁区丹阳学校',
    '江宁区秣陵初级中学',
    '南京市江宁区禄口初级中学',
    '南京市江宁区铜山初级中学',
    '南京市湖熟镇初级中学',
    '江宁区龙都初级中学',
    '江宁区周岗初级中学',
    '南京市淳化镇初级中学',
    '南京市土桥镇初级中学',
    '江宁区汤山初级中学',
    '南京市上峰镇初级中学',
    '江宁区麒麟初级中学',
    '南京市觅秀街中学',
    '南京市将军山中学',
    '南京市江宁高新区中学',
    '南京宇通实验学校',
    '江宁麒麟科创园学校',
    '南京晓庄学院滨河实验学校',
    '南京外国语学校方山分校',
    '南京市东山外国语学校',
    '南京市江宁特殊教育学校',
    '其它'],
  浦口区:[
    '浦口开放大学',
    '南京市浦口区中等专业学校',
    '江苏省江浦高级中学',
    '江浦高级中学文昌校区',
    '南京市浦口区第二中学',
    '南京市浦口区第三中学',
    '南京市浦口区第四中学',
    '南京市浦口区乌江学校',
    '浦口区行知中学',
    '浦口区实验学校',
    '浦口区大桥中学',
    '浦口区桥林中学',
    '浦口区石桥中学',
    '浦口区汤泉中学',
    '浦口区星甸中学',
    '浦口区永宁中学',
    '龙山学校',
    '汉开书院',
    '南京市浦口区陡岗中学',
    '南京书人实验学校',
    '浦口区特殊教育学校',
    '其它'],
  溧水区:[
    '南京市溧水区云鹤初级中学',
    '南京市溧水区第一初级中学',
    '江苏省溧水高级中学附属初级中学',
    '南京市溧水区实验学校',
    '南京市溧水区东庐初级中学',
    '南京市溧水区柘塘初级中学',
    '溧水县第二初级中学',
    '溧水区东屏初级中学',
    '溧水区群力初级中学',
    '溧水区白马初级中学',
    '溧水区洪蓝初级中学',
    '溧水区晶桥初级中学',
    '溧水区和凤初级中学',
    '溧水区孔镇初级中学',
    '溧水区石湫初级中学',
    '溧水区明觉初级中学',
    '溧水县高级中学初中部',
    '金陵中学溧水分校',
    '溧水区特殊教育学校',
    '其它'],
  高淳区:[
    '江苏省高淳高级中学', 
    '湖滨高级中学',
    '淳辉高中',
    '高淳区第一中学', 
    '高淳区第二中学',
    '高淳区第三中学',
    '武家嘴实验学校', 
    '漆桥中学',
    '金陵汇淳学校',
    '永丰中学', 
    '砖墙中学',
    '桠溪中学',
    '东坝中学',
    '固城中学',
    '高淳外国语学校',
    '高淳县沧溪中学',
    '高淳县特殊教育学校',
    '其它'],
  六合区:[
    '六合高级中学附属初级中学',
    '科利华中学棠城分校',
    '金陵中学龙湖分校初中部',
    '励志学校初中部',
    '南京市六合区棠城学校',
    '南京市六合区实验初级中学',
    '南京市六合区东沟初级中学',
    '南京市仕金学校初级中学',
    '南京市六合区雄州初级中学',
    '六合区龙池初级中学',
    '南京市六合区瓜埠初级中学',
    '南京市龙袍镇初级中学',
    '南京市横梁初级中学',
    '南京市新篁初级中学',
    '南京市六合区金牛湖初级中学',
    '六合区冶山初级中学',
    '南京市六合区新集初级中学',
    '南京市程桥初级中学',
    '六合区竹镇民族中学',
    '六合区马集初级中学',
    '六合区马鞍初级中学',
    '南京市六合区竹镇镇乌石初级中学',
    '南京市六合区竹程初级中学',
    '南京市六合区城西初级中学',
    '南京市六合区特殊教育学校',
    '其它'],
  江北新区:[
    '扬子一中',
    '南化二中',
    '旭东中学',
    '九龙中学',
    '扬子一中长城分校',
    '南京市第二十九中学天润城分校（初中部）',
    '南京市第二十九中学威尼斯',
    '沿江中学',
    '浦厂中学',
    '南信大附中',
    '南京一中明发滨江分校',
    '河西中学',
    '浦口外国语学校（初中部）',
    '十七中学',
    '南京一中江北新区分校（初中部）',
    '浦口外国语学校高新分校',
    '六合玉带初中',
    '南京（大厂）民办育英第二外国语学校',
    '南京实验国际学校',
    '南京一中浦口新城分校',
    '南京市长城中学',
    '南京信息工程大学附属中学',
    '江苏教育学院附属高级中学天润城分校',
    '南京市玉带初级中学',
    '南京市浦口区外国语学校高新分校',
    '其它']
  };
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class Registration extends Component {
  state = {
    schoolNameIndex:'请选择',
    schoolSiteIndex:'请选择',
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
    isFailModalShow:false,
    isInfoModalShow:false,
    loading: false,
    studentInfo:{},
    initData:{},
  }
  componentDidMount(){
    document.title = "2019招生信息登记"
    let flag = false
    const { state } = this.props.location
    if (state && state.role) flag = true
    if(flag){
      selectForUpdate()
      .then(res => {
        const code = _.get(res,'data.code')
        const error = _.get(res,'data.error')
        const data = _.get(res,'data.data')
        if(code == 200){
          let imageUrl = ''
          const genderVal = data.gender
          const orNkStudentVal = data.orNkStudent
          console.log({orNkStudentVal})
          if(data.photo){
            imageUrl = `${baseUrl}/enroll/studentController/getPhone`
          }
          const intendedProgramVal = data.intendedPrograms
          const {schoolNameIndex,schoolSiteIndex,schoolSiteProvince,schoolSiteCity,schoolSiteArea,juniorSchoolName,intendedPrograms} = data
          let isShow
          if(orNkStudentVal === '1'){
            if(schoolNameIndex == '其它'){
              isShow = 0
            }else{
              isShow = 1
            }
          }else{
            isShow = 0
          }
          this.setState({
            initData:data,
            genderVal,
            orNkStudentVal,
            isShow,
            imageUrl,
            intendedProgramVal,
            schoolNameIndex,
            schoolSiteIndex,
            schoolSiteProvinceVal:schoolSiteProvince,
            schoolSiteCityVal:schoolSiteCity,
            schoolSiteAreaVal:schoolSiteArea,
            juniorSchoolNameVal:juniorSchoolName,
            readOnly:true,
            upImgUrl:data.photo,
            intendedPrograms
          })
        }else{
            message.error(error)
        }
      })
      .catch(err=>{
        message.error(err)
      })
    }
    this.setState({
      flag
    })
  }
  closeImg = () => {
    this.setState({
      imageUrl:''
    })
  }
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
      schoolSiteIndex:value,
    });
  }

  onSecondCityChange = (value) => {
    if(value == '其它'){
      this.setState({
        secondCity: value,
        schoolNameIndex:value,
        isShow:0
      })
    }else{
      this.setState({
        secondCity: value,
        schoolNameIndex:value,
      })
    }
  }
  onSecondCityBlur = value => {
    if(value == '其它'){
      this.setState({
        isShow:0
      })
    }
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
    const { studentInfo, imageUrl, schoolSiteIndex, schoolNameIndex,orNkStudentVal,intendedPrograms,juniorSchoolNameVal,schoolSiteAreaVal,schoolSiteCityVal,schoolSiteProvinceVal } = this.state;

    if(!imageUrl) {
      message.warning('请先上传照片!')
      return
    }
    if(orNkStudentVal == undefined){
      message.warning('请选择初中就读学校信息!')
        return
    }
    if(orNkStudentVal == 1){
      if(schoolSiteIndex === "请选择" || schoolNameIndex === "请选择"){
        message.warning('请选择初中就读学校信息!')
          return
      }
    }
    if(orNkStudentVal == 0){
      if(!(juniorSchoolNameVal&&schoolSiteAreaVal&&schoolSiteCityVal&&schoolSiteProvinceVal)){
        message.warning('请选择初中就读学校信息!')
          return
      }
    }
    this.props.form.validateFields((err, values) => {
      if(err){
        message.error('请完善信息后重新提交!')
        return
      }
      if (!err) {
        const newValue = { 
          ...values,
          birthDateStr:values['birthDateStr'].format('YYYY-MM-DD'),
          schoolSiteIndex,schoolNameIndex,intendedPrograms
         }
        const newStudentInfo = Object.assign(studentInfo,newValue)

        this.setState({studentInfo:newStudentInfo},()=>{
          const { schoolSiteCity, schoolNameIndex, schoolSiteProvince } = studentInfo
          const { orNkStudentVal } = this.state
          let _isTrue = false
          let isTrue = false
          if(schoolSiteProvince){
            _isTrue = schoolSiteProvince.includes('江苏')
          }
          if(schoolSiteCity){
            isTrue = schoolSiteCity.includes('南京')
          }
          if( orNkStudentVal == 0){
            if(isTrue){
              message.info("学籍与城市不统一")
              return
            }
          }else{
            if(schoolNameIndex == '其它'){
              if(!isTrue || !_isTrue){
                message.info("学籍与城市不统一")
                return
              }
            }
          }
          this.showInfoModal()
        })
      }
    });

  }
  radioGroupChange = e => {
    this.setState({
      isShow: e.target.value,
      orNkStudentVal:e.target.value,
      schoolSiteProvinceVal:'',
      schoolSiteCityVal:'',
      schoolSiteAreaVal:'',
      juniorSchoolNameVal:''

    })
  }
  checkboxGroupChange = value => {
    let intendedProgramVal = value
    if(value[value.length-1] && value[value.length-1] == 3){
      intendedProgramVal = ['3']
    }else if(value[value.length-1] && value[value.length-1] != 3){
      intendedProgramVal = value.filter(item=>{
        return item < 3
      })
    }
    const { studentInfo } = this.state
    const intendedPrograms = intendedProgramVal.sort()
    studentInfo.intendedPrograms = intendedPrograms
    this.setState({
      studentInfo,intendedProgramVal,intendedPrograms
    })
  }
  beforeUpload = (file) => {
    const arr = ['image/jpeg','image/jpg','image/jpg','image/png','image/bmp']
    const isJPG = arr.indexOf(file.type) > -1
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
    }else if (info.file.status === 'error') {
      message.error('照片上传失败!')
      this.setState({loading: false})
    } else{
      this.setState({loading: false})
    }
  }
  genderChange = e => {
    this.setState({
      genderVal:e.target.value
    })
  }
  inputChang1 = e => {
    this.setState({juniorSchoolNameVal:e.target.value})
  }
  inputChang2 = e => {
    this.setState({schoolSiteAreaVal:e.target.value})
  }
  inputChang3 = e => {
    this.setState({schoolSiteCityVal:e.target.value})
  }
  inputChang4 = e => {
    this.setState({schoolSiteProvinceVal:e.target.value})
  }
  render() {
    const { 
      isShow=2,
      cities,
      isFailModalShow,
      isInfoModalShow, 
      imageUrl, 
      studentInfo, 
      initData,
      genderVal,
      orNkStudentVal,
      flag,
      intendedProgramVal,
      schoolSiteProvinceVal,
      schoolSiteCityVal,
      schoolSiteAreaVal,
      juniorSchoolNameVal,
      readOnly,
      schoolNameIndex,
      schoolSiteIndex,
     } = this.state
    const { getFieldDecorator, getFieldValue } = this.props.form
    //姓名校验
    const reg = /^[\u4e00-\u9fa5]+$/
    const testName = (rule,value,callback) => {
      const nameValue = getFieldValue('chinaName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
    }
    const testFatherName = (rule,value,callback) => {
      const nameValue = getFieldValue('fatherName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
    }
    const testMatherName = (rule,value,callback) => {
      const nameValue = getFieldValue('matherName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
      console.log(123)
    }
    const testPreparerName = (rule,value,callback) => {
      const nameValue = getFieldValue('preparerName')
      if(!/^[^\s]*$/.test(nameValue)) callback('姓名不能含有空格!')
      if(!reg.test(nameValue)) callback('请输入汉字!')
      callback()
    }
    //手机号校验
    const testPhone = (rule,value,callback) => {
      const phoneValue = getFieldValue('contactPhone')
      if(!/^1[3456789]\d{9}$/.test(phoneValue)) callback('请输入正确的手机号!')
      callback()
    }
    const testFatherPhone = (rule,value,callback) => {
      const phoneValue = getFieldValue('fatherPhone')
      if(!/^1[3456789]\d{9}$/.test(phoneValue)) callback('请输入正确的手机号!')
      callback()
    }
    const testMatherPhone = (rule,value,callback) => {
      const phoneValue = getFieldValue('matherPhone')
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
    //一模总分
    const testExam1Score = (rule,value,callback) => {
      const exam1ScoreValue = getFieldValue('exam1Score')
      if(exam1ScoreValue){
        if(!/^[1-9]\d{0,2}$/.test(exam1ScoreValue)) callback('分数范围1-999!')
      }
      callback()
    }
    //一模排名 
    const testExam1Rank = (rule,value,callback) => {
      const exam1RankValue = getFieldValue('exam1Rank')
      if(exam1RankValue){
        if(!/^[1-9]\d*$/.test(exam1RankValue)) callback('排名应为正整数!')
      }
      callback()
    }
    return (
      <div className='regist'>
        <div className='regist-header'>
          <img src={src1} alt=''/>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <h2 className='regist-h2'>学生情况<span>/Applicant Information</span></h2>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>中文姓名</span>/Chinese Name</p>
              <Form.Item>
                {getFieldDecorator('chinaName', {
                  initialValue: initData.chinaName || '',
                  rules: [{validator:testName}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input' placeholder='请输入中文名...' maxLength={5} autoComplete="off" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>性别</span>/Gender</p>
                <Form.Item>
                  {getFieldDecorator('gender',{
                    initialValue: initData.gender || '',
                    rules: [{required: true, message: '请选择你的姓别!'}],
                  })(
                   <div className='regist-radioGroup'>
                    <Radio.Group value={genderVal || ''} onChange={this.genderChange}>
                      <Radio value="1">男</Radio>
                      <Radio value="0">女</Radio>
                    </Radio.Group>
                    </div>
                  )}
                </Form.Item>
              </Col>
            <Col span={8}>
                <p className='regist-title'><span>出生年月</span>/Date of Birth</p>
                {
                  initData.birthDateStr
                  ? <Form.Item>
                    {getFieldDecorator('birthDateStr', {
                      initialValue:moment(initData.birthDateStr, dateFormat),
                      rules: [{ required: true, message: '请选择你的出生日期!' }],
                    })(
                      <DatePicker className='regist-DatePicker' placeholder="请选择你的出生日期..."/>
                    )}
                  </Form.Item>
                  : <Form.Item>
                    {getFieldDecorator('birthDateStr', {
                      rules: [{ required: true, message: '请选择你的出生日期!' }],
                    })(
                      <DatePicker className='regist-DatePicker' placeholder="请选择你的出生日期..."/>
                    )}
                  </Form.Item>
                }
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p className='regist-title'><span>学生身份证号</span>/ID No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('idCard', {
                  initialValue: initData.idCard  || '',
                  rules: [{validator:testID}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input' readOnly ={readOnly} placeholder='请输入身份证号...' autoComplete="off" maxLength={18}/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>联系电话</span>/Cellphone No.<a>(*作为登录信息使用)</a></p>
              <Form.Item>
                {getFieldDecorator('contactPhone', {
                  initialValue: initData.contactPhone || '',
                  rules: [{validator:testPhone}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input' placeholder='请输入联系电话...' autoComplete="off" maxLength={11}/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>是否是南京初中学籍</span>/Student in Nanjing</p>
              <Form.Item>
                  {getFieldDecorator('orNkStudent',{
                    initialValue: initData.orNkStudent || '',
                    rules: [{required: true, message: '请选择你的学籍!'}],
                    validateTrigger: 'onBlur'
                  })(
                   <div className='regist-radioGroup'>
                    <Radio.Group onChange={this.radioGroupChange} value={orNkStudentVal || ''}>
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
              <p className='regist-title'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteIndex', {
                  initialValue: initData.schoolSiteIndex || '',
                })(
                  <div>
                    <Select
                      value={schoolSiteIndex}
                      style={{ width: '85%' }}
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
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('schoolNameIndex', {
                  initialValue: initData.schoolNameIndex || '',   
                })(
                  <div>
                    <Select
                      style={{ width: '90%' }}
                      value={schoolNameIndex}
                      onChange={this.onSecondCityChange}
                      onBlur = {this.onSecondCityBlur}
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
            <Col span={6}>
              <p className='regist-title'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteProvince', {
                  initialValue: initData.schoolSiteProvince || '',
                  rules: [{ required: true, message: '请输入你的学校信息!' },],
                  validateTrigger: 'onBlur'
                })(
                  <div>
                    <Input className='regist-input3' placeholder='请输入省份...' autoComplete="off" maxLength={10} value={schoolSiteProvinceVal || ''} onChange={this.inputChang4}/>
                    <span className='regist-span'>省</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteCity', {
                  initialValue: initData.schoolSiteCity || '',
                  rules: [{ required: true, message: '请输入你的学校信息!' },],
                  validateTrigger: 'onBlur'
                })(
                  <div>
                    <Input className='regist-input3' placeholder='请输入市...' autoComplete="off" maxLength={10} value={schoolSiteCityVal || ''} onChange={this.inputChang3}/>
                    <span className='regist-span'>市</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('schoolSiteArea', {
                  initialValue: initData.schoolSiteArea || '',
                  rules: [{ required: true, message: '请输入你的学校信息!' },],
                  validateTrigger: 'onBlur'
                })(
                  <div> 
                    <Input className='regist-input3' placeholder='请输入区...' autoComplete="off" maxLength={10} value={schoolSiteAreaVal || ''} onChange={this.inputChang2}/>
                    <span className='regist-span'>区</span>
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <p className='regist-title transparent-p'><span>初中就读学校</span>/Junior High School</p>
              <Form.Item
              >
                {getFieldDecorator('juniorSchoolName', {
                  initialValue: initData.juniorSchoolName || '',
                  rules: [{ required: true, message: '请输入你的学校信息!' },],
                  validateTrigger: 'onBlur'
                })(
                  <div>
                    <Input className='regist-input4' placeholder='请输入学校...' autoComplete="off" maxLength={30} value={juniorSchoolNameVal || ''} onChange={this.inputChang1}/>
                    <span className='regist-span'>中学</span>
                  </div>
                )}
              </Form.Item>
            </Col>
          </Row>
          }
          <Row>
            <Col span={24}>
              <p className='regist-title'><span>项目意向</span>/Intended Program</p>
              <Form.Item>
                {getFieldDecorator("intendedPrograms", {
                  initialValue: initData.intendedPrograms,
                  rules: [{required: true, message: '请选择你的项目意向!'}],
                  validateTrigger: 'onBlur'
                })(
                  <div className='regist-CheckboxGroup'>
                  <Checkbox.Group onChange={this.checkboxGroupChange} value={intendedProgramVal}>
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
              <p className='regist-title'><span>一模总分</span>/Total Score of Mock Exam 1 (选填)</p>
              <Form.Item>
                {getFieldDecorator('exam1Score', {
                  initialValue: initData.exam1Score || '',
                  rules: [{validator:testExam1Score}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input' type='number' placeholder='请输入总分...' autoComplete="off" maxLength={3}/>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className='regist-title'><span>一模年级排名</span>/School Ranking (选填)</p>
              <Form.Item>
                {getFieldDecorator('exam1Rank', {
                  initialValue: initData.exam1Rank || '',
                  rules: [{validator:testExam1Rank}],
                  validateTrigger: 'onBlur'
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
                {imageUrl && <span className='close' onClick={this.closeImg}></span> }
                {imageUrl ? <img src={imageUrl} alt="avatar" className='regist-avatar'/> : 
                  <Upload.Dragger id='upload' name="file" action="/enroll/fileController/white/uploadFile" beforeUpload={this.beforeUpload} showUploadList={false} onChange={this.handleChange}>
                    <Icon type={this.state.loading ? 'loading' : ''} />
                  </Upload.Dragger>
                  }
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
          <h2 className='regist-h2'>家庭情况<span>/Family Information</span></h2>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>父亲姓名</span>/Father’s Name</p>
              <Form.Item>
                {getFieldDecorator('fatherName', {
                  initialValue: initData.fatherName || '',
                  rules: [{validator:testFatherName}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入姓名...' maxLength={5} autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('fatherCompany', {
                  initialValue: initData.fatherCompany || '',
                  rules: [{required: true, message: '请输入工作单位!'}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…' autoComplete="off" maxLength={20}/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>父亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('fatherPosition', {
                  initialValue: initData.fatherPosition || '',
                  rules: [{required: true, message: '请输入工作职位!'}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…' autoComplete="off" maxLength={10}/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>父亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('fatherPhone', {
                  initialValue: initData.fatherPhone || '',
                  rules: [{validator:testFatherPhone}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…' autoComplete="off" maxLength={11}/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲姓名</span>/Mother’s Name</p>
              <Form.Item>
                {getFieldDecorator('matherName', {
                  initialValue: initData.matherName || '',
                  rules: [{validator:testMatherName}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入姓名...' maxLength={5} autoComplete="off"/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作单位</span>/Company</p>
              <Form.Item>
                {getFieldDecorator('matherCompany', {
                  initialValue: initData.matherCompany || '',
                  rules: [{required: true, message: '请输入工作单位!'}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入工作单位…' autoComplete="off" maxLength={20}/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>母亲工作职位</span>/Occupation</p>
              <Form.Item>
                {getFieldDecorator('matherPosition', {
                  initialValue: initData.matherPosition || '',
                  rules: [{required: true, message: '请输入工作职位!'}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入工作职位…' autoComplete="off" maxLength={10}/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <p className='regist-title'><span>母亲手机</span>/Cellphone No.</p>
              <Form.Item>
                {getFieldDecorator('matherPhone', {
                  initialValue: initData.matherPhone || '',
                  rules: [{validator:testMatherPhone}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input1' placeholder='请输入手机号码…' autoComplete="off" maxLength={11}/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className='regist-title'><span>家庭住址</span>/Family Address</p>
              <Form.Item>
                {getFieldDecorator('familyAddress', {
                  initialValue: initData.familyAddress || '',
                  rules: [{required: true, message: '请输入家庭地址!'}],
                  validateTrigger: 'onBlur'
                })(
                  <Input className='regist-input2' placeholder='请输入详细的家庭地址，以方便我们邮寄文件到您家里(最多输入50个汉字)' autoComplete="off" maxLength={50}/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <h2 className='regist-h2'>填表信息<span>/Registration Information</span></h2>
          <Row>
            <Col span={12}>
              <p className='regist-title'><span>填表人姓名</span>/Applicant</p>
              <Form.Item>
                {getFieldDecorator('preparerName', {
                  initialValue: initData.preparerName || '',
                  rules: [{validator:testPreparerName}],
                  validateTrigger: 'onBlur'
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
          <InfoModal onClose={this.closeInfoModal} studentInfo={studentInfo} imageUrl={imageUrl} upImgUrl={this.state.upImgUrl} flag={flag}></InfoModal>
        }
      </div>
    );
  }
}

const Regist = Form.create()(Registration)
export default Regist
