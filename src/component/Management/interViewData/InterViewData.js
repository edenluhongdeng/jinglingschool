import React, { Component } from 'react';
import { Table,Pagination,Tag,Popconfirm, message } from 'antd';
import {withRouter} from 'react-router-dom'
import {deleteMsg} from '../../../api/manageMent'
const _obj = {
    '0':'中美',
    '1':'中英',
    '2':'中加',
    '3':'待定'
}
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
        intendedProgramDesc:false,//项目意向的降序标志
        tabSelected:false,
        arr:[],
        delete:false,//是否有删除权限
    }

    componentDidMount(){
        if(this.props.history.location.search){
            const url = this.props.history.location.search
            let params = url.substr(1)
            const type = params.split('=')[1]
            if(type==3){
                this.setState({
                    delete:true
                })
            }else{
                this.setState({
                    delete:false
                })
            }
        }
    }

    //获取父组件传递过来的数据
    componentWillReceiveProps(props){
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

    //项目意向数据处理
    intendedProgram = (Program) => {
        let str = ''
        let project = []
        if(Program){
            Program=Program.split(',')
            Program&&Program.map((item,index)=>{
                str += _obj[item]+"、"
            }
            )
        }
        return str.substr(0,str.length-1)
    }

    //列表title
     columns = [{
        title: '准考证',
        dataIndex: 'key',
        align:'center'
      },{
        title: '姓名',
        dataIndex: 'name',
        align:'center',
        width:'110px'
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
        dataIndex:'projectIntention',
        align:'center',
        sorter: true,
        render:(text,record) =>{
            const str = this.intendedProgram(record.projectIntention)
            return (
                <span>{str}</span>
            )
        }
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
        render: (text,record) => 
        <span>
           <Tag><a href="javascript:;" className = "updateAction" onClick={this.updataMsg.bind(text,record)}>修改</a></Tag> 
            { this.state.delete &&<Popconfirm 
            title="你确定要删除此信息吗?" 
            onConfirm={this.confirm} onCancel={this.cancel} 
            okText="Yes" 
            cancelText="No">
            <Tag>
            <a href="javascript:;" 
            className = "updateAction" 
            onClick={this.deleteMsg.bind(text,record)}
            >
            删除</a>
            </Tag>
            </Popconfirm>}
        </span>,
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

     onShowSizeChange = (current, pageSize) => {
        const {prams} = this.state
        prams.pageNumber = current
        prams.pageSize = pageSize
        this.setState({
            prams
        })
        this.props.getData(prams)
      }
    //tab 数据改变
    getDataList = (str) =>{
        const { prams } = this.state
        const _prams = Object.assign({},prams,{
            interviewResultDesc:null,
            writtenResultDesc:null,
            volunteerInfoDesc:null,
            juniorExamScoreDesc:null,
            exam1ScoreDesc:null,
            exam1RankDesc:null,
            intendedProgramDesc:null
        })
        if(str){
            let type = ''
            str === 'interviewResult' && (type = 'interviewResultDesc')
            str === 'writtenResults' && (type = 'writtenResultDesc')
            str === 'volunteerReport' && (type = 'volunteerInfoDesc')
            str === 'highSchoolScore' && (type = 'juniorExamScoreDesc')
            str === 'oneShotScore' && (type = 'exam1ScoreDesc')
            str === 'oneShotRanking' && (type = 'exam1RankDesc')
            str ==='projectIntention'&&(type='intendedProgramDesc')
            const id  = this.state[type] ? 1 : 2
            _prams[type] = id
            this.setState({[type]:!this.state[type]})
        }
        this.props.getData(_prams)
    }

    tabChange =  (pagination, filters, sorter,extra)=> {
        console.log({pagination,filters,sorter,extra})
        const sort = sorter.field
        this.getDataList(sort)
      }
    //修改信息
    updataMsg = (text,tt) => {
       const key = text.key.substr(1,text.key.length)
        this.props.history.push(`/management/updatemsg?id=${key }`)
     }

    //超级管理员删除信息
    deleteMsg = (text,record) =>{
        let id = text.key
        const newId = id.substr(1)
        this.setState({
            id:newId
        })

    }

     confirm = (e)=> {
        const {id,prams} = this.state
        deleteMsg(id).then(res=>{
            if(res&&res.data.code==='200'){
                message.info(res.data.msg)
                this.props.getData(prams)
            }else{
                message.info(res.data.msg)
            }
        })
      }
      
       cancel = (e) => {
        // console.log(e);
        // message.error('Click on No');
      }
    
      
  render() {
      //批量操作
    let rowSelection = {
        selectedRowKeys: this.props.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            if(selectedRows.length){
                this.props.downStatus(true)
            }else{
                this.props.downStatus(false)
            }
            let newArr = []
            selectedRows.map((item,index) => {
              newArr.push(item.key)
            })
            const needTickets =  newArr.length > 0 ? newArr.toString().replace(new RegExp("J","gm"),"").split(','):[]
            this.props.getDownloadPramas(needTickets)
            this.props.selectedRowKeysChange(selectedRowKeys);
          }
        };
      const {data} = this.state
    return (
      <div className = "tab-data">
            <Table 
            rowSelection={rowSelection} 
            columns={this.columns} 
            dataSource={this.data()} 
            pagination={false}
            onChange = {this.tabChange}
            />
            <Pagination
            className = "pagination" 
            pageSizeOptions={['10','20','30','40','50']}
            showSizeChanger 
            defaultCurrent={1} 
            total={data.total} 
            onShowSizeChange={this.onShowSizeChange}
            onChange = {this.pageChange}
            />
      </div>
    );
  }
}

export default withRouter(InterViewData);
