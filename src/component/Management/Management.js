import React, { Component } from 'react';
import { Tag , Row, Col,Input,Button } from 'antd';
import './style.less'
import InterViewData from './interViewData/InterViewData'
import {getStudyList,downloadStudentInfo} from '../../api/manageMent.js'
const CheckableTag = Tag.CheckableTag;
const Search = Input.Search
class Management extends Component {
  state = {
    selectedTags: [],
    //默认标签选中
    checkViewResult:['不限'],//面试结果
    IsArchive:['不限'], //是否提档
    IsPayment:['不限'], //缴费境况
    oneShortNum:0,//一模分数
    oneShortSert:'',//一模排名
    VoluntaryReporting:['不限'],//志愿填报
    IsNanJing:['不限'] ,//是否南京学籍
    hightSchool:0,//中考分数
    isRetreat:['不限'],//是否退档
    ProjectIntention:['待定'],//项目意向
    writeResult:0,//笔试结果
    isDown:false,//下载
    studyData:[],//学生数据
    //接口参数
    prams:{
      pageNumber:1,
      pageSize:10,
      interviewResult :null,//面试结果
      juniorExamScore :null,//中考分数
      orNkStudent :null,//是否南京学籍
      payInfo :null,//缴费情况
      returnPay :null,// 退费情况
      toFile :null,//提档情况
      volunteerInfo :null,//志愿填报
      writtenResult :null,//笔试结果
      admissionTicket :null,//准考证号
      chinaName :null,//姓名
      contactTime :null,// 联系时间 
      exam1Rank :null,//一模排名 
      exam1Score :null,//一模分数 ,
      intendedProgram :null,//项目意向
      contactName :null,//联系人姓名 ,
      inputBox:null
    }
  };
componentDidMount(){
  const {prams} = this.state
  this.getData(prams)
}
//获取数据
getData = (prams) => {
  getStudyList(prams).then(res=>{
    if(res&&res.data.code==='200'){
      console.log(res.data.data.list,'数据')
      if(res.data.data.list){
          this.setState({
            studyData:res.data.data
          })
      }
    }
  })
}

//搜索
searchData = ()=>{
 const {prams} = this.state
 this.getData(prams)
}

  //面试结果
   tagsFromServer = [
    '不限',
    '优秀',
    '合格', 
    '不合格'
    ];
  //是否提档
  IsArchive = [
    '不限',
    '是',
    '否'
  ]
  //缴费情况
  IsPayment = [
    '不限',
    '是',
    '否'
  ]
  //是否是南京学籍
  IsNanJing = [
    '不限',
    '是',
    '否'
  ]
  //填报志愿
  VoluntaryReporting = [
    '不限',
    '1A',
    '1B', 
    '1C'
  ]
  //是否退档
  isRetreat = [
    '不限',
    '是',
    '否',
    '考虑'
  ]

  //项目意向
  ProjectIntention = [
    '待定',
    '中美',
    '中英', 
    '中加'
  ]

  //获取面试结果
  checkViewResult = (tag, checked) =>{
     const { checkViewResult,prams} = this.state;
    const nextSelectedTags = checked
      ? [tag]
      : checkViewResult.filter(t => t !== tag);
        let interviewResult =''
      if(nextSelectedTags[0]==='优秀'){
        interviewResult='0'
      }
      if(nextSelectedTags[0]==='合格'){
        interviewResult='1'
      }
      if(nextSelectedTags[0]==='不合格'){
        interviewResult='2'
      }
      prams.interviewResult=interviewResult
     this.setState({ 
       checkViewResult: nextSelectedTags,
       prams
      });

  }

  //获取提档情况
  getArchive = (tag, checked) =>{
    const { IsArchive,prams} = this.state;
   const nextSelectedTags = checked
     ? [tag]
     : IsArchive.filter(t => t !== tag);
     console.log('You are interested in: ', nextSelectedTags);
     let toFile =''
     if(nextSelectedTags[0]==='否'){
      toFile='0'
    }
    if(nextSelectedTags[0]==='是'){
      toFile='1'
    }
    prams.toFile=toFile
    this.setState({ 
      IsArchive: nextSelectedTags,
      prams
     });
 }

 //获取缴费情况
 getPayment = (tag, checked) =>{
  const { IsPayment,prams} = this.state;
 const nextSelectedTags = checked
   ? [tag]
   : IsPayment.filter(t => t !== tag);
   console.log('You are interested in: ', nextSelectedTags);
   let payInfo =''
   if(nextSelectedTags[0]==='否'){
    payInfo='0'
  }
  if(nextSelectedTags[0]==='是'){
    payInfo='1'
  }
  prams.payInfo=payInfo
  this.setState({ 
    IsPayment: nextSelectedTags,
    prams
   });
}

//获取填报志愿情况
getVoluntaryReporting = (tag, checked) =>{
  const { VoluntaryReporting,prams} = this.state;
 const nextSelectedTags = checked
   ? [tag]
   : VoluntaryReporting.filter(t => t !== tag);
   console.log('You are interested in: ', nextSelectedTags);
   let volunteerInfo = ''
   if(nextSelectedTags[0]==='1A'){
    volunteerInfo ='0'
  }
  if(nextSelectedTags[0]==='1B'){
    volunteerInfo ='1'
  }
  if(nextSelectedTags[0]==='1C'){
    volunteerInfo ='2'
  }
  prams.volunteerInfo=volunteerInfo
  this.setState({ 
    VoluntaryReporting: nextSelectedTags,
    prams 
   });
}

//获取学籍情况
getNanJing = (tag, checked) =>{
  const { IsNanJing,prams} = this.state;
 const nextSelectedTags = checked
   ? [tag]
   : IsNanJing.filter(t => t !== tag);
   console.log('You are interested in: ', nextSelectedTags);
   let orNkStudent =''
   if(nextSelectedTags[0]==='否'){
    orNkStudent='0'
  }
  if(nextSelectedTags[0]==='是'){
    orNkStudent='1'
  }
  prams.orNkStudent=orNkStudent
  this.setState({ 
    IsNanJing: nextSelectedTags,
    prams
   });
}

//是否退费
getRetreat = (tag, checked) =>{
  const { isRetreat,prams} = this.state;
 const nextSelectedTags = checked
   ? [tag]
   : isRetreat.filter(t => t !== tag);
   console.log('You are interested in: ', nextSelectedTags);
   let returnPay =''
   if(nextSelectedTags[0]==='否'){
    returnPay='0'
  }
  if(nextSelectedTags[0]==='是'){
    returnPay='1'
  }
  if(nextSelectedTags[0]==='考虑'){
    returnPay='2'
  }
  prams.returnPay=returnPay
  this.setState({ 
    isRetreat: nextSelectedTags,
    prams
  });
}
//获取一模分数
getExam1Score = (e)=>{
  const {prams} = this.state
  prams.exam1Score =e.target.value
  this.setState({
    prams
  })
}
//获取一模排名
getExam1Rank  = (e)=>{
  const {prams} = this.state
  prams.exam1Rank = e.target.value
  this.setState({
    prams
  })
}
//获取中考分数
getJuniorExamScore = (e) =>{
  const {prams} = this.state
  prams.juniorExamScore =e.target.value
  this.setState({
    prams
  })
}
//获取笔试结果
getWrittenResult  = (e) => {
  const {prams} = this.state
  prams.writtenResult  =e.target.value
  this.setState({
    prams
  })
}
 
//获取项目意向  
getProjectIntention = (tag, checked) =>{
  const { ProjectIntention,prams} = this.state;
  let nextSelectedTags = checked
   ? [...ProjectIntention,tag]
   : ProjectIntention.filter(t => t !== tag);
   console.log('You are interested in: ', nextSelectedTags);
  this.setState({ ProjectIntention: nextSelectedTags });
}

//判断下载状态
downStatus = (isDown) => {
  if(isDown==true){
    this.setState({
      isDown:true
    })
  }else{
    this.setState({
      isDown:false
    })
  }
}

//模糊搜索
inputSearch = (value) => {
    const {prams} = this.state
    prams.inputBox = value
    this.setState({
      prams
    })
    this.getData(prams)
}
//获取下载参数
getDownloadPramas = (data) => {
  this.setState({
    needTickets:data
  })
}
//下载信息
downloadStudentInfo = () => {
  const { needTickets } = this.state
  const studentExcelReq = {}
  studentExcelReq.needTickets = needTickets
  downloadStudentInfo(studentExcelReq)
    .then(res => {
      console.log({res})
    })
}
  render() {
    return (
      <div className = "interviewManage">
          <div className = "interviewManage-content">
              <div className = "content-header">
              考生面试信息管理
              </div>
              <div className = "content-search">
                <Row type="flex">
                    <Col span={6} order={1}>
                      <div className = 'tags'>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>面试结果:</h6>
                          {this.tagsFromServer.map(tag => (
                            <CheckableTag
                              key={tag+'a'}
                              checked={this.state.checkViewResult.indexOf(tag) > -1}
                              onChange={checked => this.checkViewResult(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={2}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>是否提档:</h6>
                          {this.IsArchive.map(tag => (
                            <CheckableTag
                              key={tag+'b'}
                              checked={this.state.IsArchive.indexOf(tag) > -1}
                              onChange={checked => this.getArchive(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={3}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>缴费情况:</h6>
                          {this.IsPayment.map(tag => (
                            <CheckableTag
                              key={tag+'c'}
                              checked={this.state.IsPayment.indexOf(tag) > -1}
                              onChange={checked => this.getPayment(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>一模分数:</h6>
                          <Input className = "fraction" type='number' onChange={this.getExam1Score}/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
              </Row>

              <Row type="flex">
              <Col span={6} order={1}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>填报志愿:</h6>
                          {this.VoluntaryReporting.map(tag => (
                            <CheckableTag
                              key={tag+'d'}
                              checked={this.state.VoluntaryReporting.indexOf(tag) > -1}
                              onChange={checked => this.getVoluntaryReporting(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={2}>
                      <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>是否是南京初中学籍:</h6>
                          {this.IsNanJing.map(tag => (
                            <CheckableTag
                              key={tag+'e'}
                              checked={this.state.IsNanJing.indexOf(tag) > -1}
                              onChange={checked => this.getNanJing(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={3}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>中考分数:</h6>
                          <Input className = "fraction" onBlur = {this.getJuniorExamScore}/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>一模排名:</h6>
                          <Input className = "fraction" onBlur={this.getExam1Rank}/>
                          <i>名（含）以上</i>
                      </div>
                    </Col>
              </Row>

              <Row type="flex">
                    <Col span={6} order={1}>
                      <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>是否退费:</h6>
                          {this.isRetreat.map(tag => (
                            <CheckableTag
                              key={tag+'f'}
                              checked={this.state.isRetreat.indexOf(tag) > -1}
                              onChange={checked => this.getRetreat(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={2}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>项目意向:</h6>
                          {this.ProjectIntention.map(tag => (
                            <CheckableTag
                              key={tag+'g'}
                              checked={this.state.ProjectIntention.indexOf(tag) > -1}
                              onChange={checked => this.getProjectIntention(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={3}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>笔试结果:</h6>
                          <Input className = "fraction" onChange={this.getWrittenResult}/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                      <div>
                          <Button 
                          type="primary" 
                          style={{width:240}}
                          onClick = {this.searchData}
                          >确认搜索</Button>
                      </div>
                    </Col>
              </Row>
              </div>
              <div className = "down-search">
                   {this.state.isDown==false?
                      <span className = "downLoad downLoad-false">
                          <i className = "downIcon"></i>下载
                      </span>:
                      <span className = "downLoad downLoad-true" onClick={this.downloadStudentInfo}>
                        <i className = "downIcon"></i>下载
                    </span>
                   }
                    <span>
                    <Search
                        className = "searchInput"
                        placeholder="输入要搜索的内容"
                        onSearch={value => this.inputSearch(value)}
                        style={{ width: 200 }}
                      />
                    </span>
              </div>
              <div className = "content-data">
                    <InterViewData 
                    downStatus = {this.downStatus} 
                    data={this.state.studyData}
                    getData = {this.getData}
                    prams = {this.state.prams}
                    getDownloadPramas={this.getDownloadPramas}
                    />
              </div>
          </div>
      </div>
    );
  }
}

export default Management;
