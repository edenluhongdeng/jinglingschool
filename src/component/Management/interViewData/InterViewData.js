import React, { Component } from 'react';
import { Table,Pagination } from 'antd';
import {withRouter} from 'react-router-dom'

class InterViewData extends Component {
    state={
        data:[],
        prams:{},
        exam1RankDesc:false,//一模排名降序标志
        exam1ScoreDesc:false,//一模分数降序标志
        interviewResultDesc:false,//面试结果降序标志
        juniorExamScoreDesc:false,//中考分数降序标志
        volunteerInfoDesc:false,//志愿填报降序标志
        writtenResultDesc:false,//笔试结果降序标志
    }

    //获取父组件传递过来的数据
    componentWillReceiveProps(props){
        // console.log(props,'-----------------')
        this.setState({
            data:props.data,
            prams:props.prams
        })
    }

    //面试结果
    interviewResult=(result)=>{
        switch(result){
            case '0':
            return '优秀'
            break;
            case '1':
            return '合格'
            break;
            case '2':
            return '不合格'
            break;
            default:
        }
    }

    //志愿填报
    volunteerInfo = (result) =>{
        switch(result){
            case "0":
            return '1A'
            break;
            case "1":
            return '1B'
            break;
            case "2":
            return '1C'
            break;
            default:
        }
    }

    //布尔类型的判断
    isStatus = (is)=>{
        switch(is){
            case '0':
            return '否'
            break;
            case '1':
            return '是'
            break;
            case '2':
            return '考虑'
            break;
            default:
        }
    }

    //列表title
     columns = [{
        title: '准考证',
        dataIndex: 'key',
        align:'center'
      },{
        title: '姓名',
        dataIndex: 'name',
        align:'center'
    }, {
        title: '面试结果',
        dataIndex: 'interviewResult',
        sorter: true,
        align:'center'
    },{
        title: '笔试结果',
        dataIndex: 'writtenResults',
        sorter: true,
        align:'center'
    },{
        title: '志愿填报',
        dataIndex: 'volunteerReport',
        sorter: true,
        align:'center'
    },{
        title: '中考分数',
        dataIndex: 'highSchoolScore',
        sorter: true,
        align:'center'
    },{
        title: '一模分数',
        dataIndex: 'oneShotScore',
        sorter: true,
        align:'center'
    },{
        title: '一模排名',
        dataIndex: 'oneShotRanking',
        sorter: true,
        align:'center'
    }, {
        title: '项目意向',
        dataIndex: 'projectIntention',
        align:'center'
    },{
        title: '南京学籍',
        dataIndex: 'isNanjing',
        align:'center'
    },{
        title: '缴费情况',
        dataIndex: 'paymentSituation',
        align:'center'
    },{
        title: '提档',
        dataIndex: 'file',
        align:'center'
    },{
        title: '退费',
        dataIndex: 'refund',
        align:'center'
    },{
        title: '联系时间',
        dataIndex: 'contactTime',
        align:'center'
    },{
        title: '联系人',
        dataIndex: 'contactUser',
        align:'center'
    },{
        title: '操作',
        dataIndex: 'operating',
        render: (text,record) => <a href="javascript:;" className = "updateAction" onClick={this.updataMsg.bind(text,record)}>修改</a>,
        align:'center'
    },
    ];

    //列表数据
    data = ()=>{
        const {data} = this.state
        let studyList = []
        data.list&&data.list.map((item,index)=>{
            studyList.push(
                {
                    key: 'J'+item.admissionTicket,
                    name: item.chinaName,
                    interviewResult:this.interviewResult(item.interviewResult ),
                    projectIntention:item.intendedProgram,
                    writtenResults:item.writtenResult ,
                    volunteerReport:this.volunteerInfo(item.volunteerInfo) ,
                    highSchoolScore:item.juniorExamScore,
                    oneShotScore:item.exam1Score ,
                    oneShotRanking:item.exam1Rank,
                    isNanjing:this.isStatus(item.orNkStudent),
                    paymentSituation:this.isStatus(item.payInfo),
                    file:this.isStatus(item.toFile ),
                    refund:this.isStatus(item.returnPay),
                    contactTime:item.contactTime&&item.contactTime.split('T')[0] ,
                    contactUser:item.contactName 
                }
            )
        })
        return studyList
    }

  //页码改变
    pageChange = (pageNumber) => {
        const {prams} = this.state
        prams.pageNumber = pageNumber
        this.setState({
            prams
        })
        this.props.getData(prams)
    }
    // exam1RankDesc:false,//一模排名降序标志
    // exam1ScoreDesc:false,//一模分数降序标志
    // interviewResultDesc:false,//面试结果降序标志
    // juniorExamScoreDesc:false,//中考分数降序标志
    // volunteerInfoDesc:false,//志愿填报降序标志
    // writtenResultDesc:false,//笔试结果降序标志
    //tab 数据改变
    getDataList = (str) =>{
        const { prams } = this.state
        const _prams = Object.assign({},prams,{
            interviewResultDesc:null,
            writtenResultDesc:null,
            volunteerInfoDesc:null,
            juniorExamScoreDesc:null,
            exam1ScoreDesc:null,
            exam1RankDesc:null
        })
        let type = ''
        str === 'interviewResult' && (type = 'interviewResultDesc')
        str === 'writtenResults' && (type = 'writtenResultDesc')
        str === 'volunteerReport' && (type = 'volunteerInfoDesc')
        str === 'highSchoolScore' && (type = 'juniorExamScoreDesc')
        str === 'oneShotScore' && (type = 'exam1ScoreDesc')
        str === 'oneShotRanking' && (type = 'exam1RankDesc')
        const id  = this.state[type] ? 1 : 2
        _prams[type] = id
        this.props.getData(_prams)
        this.setState({[type]:!this.state[type]})
    }
    tabChange =  (pagination, filters, sorter)=> {
        console.log({pagination, filters, sorter});
        const sort = sorter.field
        this.getDataList(sort)
      }
    //修改信息
    updataMsg = (text,record) => {
    this.props.history.push('/management/updatemsg')
    }
    //批量操作
    rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        if(selectedRows.length){
            this.props.downStatus(true)
        }else{
             this.props.downStatus(false)
        }
        const needTickets = selectedRowKeys.length > 0 && selectedRowKeys.toString().replace(new RegExp("J","gm"),"").split(',')
        this.props.getDownloadPramas(needTickets)
      },
    };
      
  render() {
      const {data} = this.state
    return (
      <div className = "tab-data">
            <Table 
            rowSelection={this.rowSelection} 
            columns={this.columns} 
            dataSource={this.data()} 
            pagination={false}
            onChange = {this.tabChange}
            />
            <Pagination
            className = "pagination" 
            showQuickJumper 
            defaultCurrent={1} 
            total={data.total} 
            onChange={this.pageChange} />
      </div>
    );
  }
}

export default withRouter(InterViewData);
