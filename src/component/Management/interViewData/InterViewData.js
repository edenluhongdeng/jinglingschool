import React, { Component } from 'react';
import { Table,Pagination } from 'antd';
import {withRouter} from 'react-router-dom'

class InterViewData extends Component {
    state={
        data:[],
        prams:{}
    }

    //获取父组件传递过来的数据
    componentWillReceiveProps(props){
        console.log(props,'-----------------')
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
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.writtenResults - b.writtenResults,
        align:'center'
    },{
        title: '笔试结果',
        dataIndex: 'writtenResults',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        align:'center'
    },{
        title: '志愿填报',
        dataIndex: 'volunteerReport',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        align:'center'
    },{
        title: '中考分数',
        dataIndex: 'highSchoolScore',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        align:'center'
    },{
        title: '一模分数',
        dataIndex: 'oneShotScore',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        align:'center'
    },{
        title: '一模排名',
        dataIndex: 'oneShotRanking',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
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
    pageChange(pageNumber){
        const {prams} = this.state
        prams.pageNumber = pageNumber
        this.setState({
            prams
        })
        this.props.getData(prams)
    }

    //tab 数据改变
    tabChange =  (pagination, filters, sorter)=> {
        console.log('params', pagination, filters, sorter);
      }
    //修改信息
    updataMsg = (text,record) => {
    this.props.history.push('/management/updatemsg')
    }
    //批量操作
    rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        if(selectedRows.length){
            this.props.downStatus(true)
        }else{
             this.props.downStatus(false)
        }
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
