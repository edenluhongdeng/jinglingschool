import React, { Component } from 'react';
import { Table,Pagination } from 'antd';
import {withRouter} from 'react-router-dom'

class InterViewData extends Component {

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
        sorter: (a, b) => a.age - b.age,
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
   data = [{
    key: '1',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
}, {
    key: '2',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '3',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '4',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  },{
    key: '5',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '6',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '7',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  },{
    key: '8',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '9',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }, {
    key: '10',
    name: 'John Brown',
    interviewResult:'优秀',
    projectIntention:'中美、中加、中英',
    writtenResults:'100',
    volunteerReport:'1A',
    highSchoolScore:'598',
    oneShotScore:'566',
    oneShotRanking:'900',
    isNanjing:'是',
    paymentSituation:'否',
    file:'否',
    refund:'否',
    contactTime:'2019/03/05',
    contactUser:'李立'
  }];
  
  //页码改变
    pageChange(pageNumber) {
    console.log('Page: ', pageNumber);
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
      },
    };
      
  render() {
    return (
      <div className = "tab-data">
            <Table 
            rowSelection={this.rowSelection} 
            columns={this.columns} 
            dataSource={this.data} 
            pagination={false}
            onChange = {this.tabChange}
            />
            <Pagination
            className = "pagination" 
            showQuickJumper 
            defaultCurrent={2} 
            total={500} 
            onChange={this.pageChange} />
      </div>
    );
  }
}

export default withRouter(InterViewData);
