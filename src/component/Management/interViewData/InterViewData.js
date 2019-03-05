import React, { Component } from 'react';
import { Table,Pagination  } from 'antd';
import {withRouter} from 'react-router-dom'

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

class InterViewData extends Component {

    //列表title
     columns = [{
        title: '准考证',
        dataIndex: 'key',
      },{
        title: '姓名',
        dataIndex: 'name',
    }, {
        title: '面试结果',
        dataIndex: 'interviewResult',
    }, {
        title: '项目意向',
        dataIndex: 'projectIntention',
    },{
        title: '笔试结果',
        dataIndex: 'writtenResults',
    },{
        title: '志愿填报',
        dataIndex: 'volunteerReport',
    },{
        title: '中考分数',
        dataIndex: 'highSchoolScore',
    },{
        title: '一模分数',
        dataIndex: 'oneShotScore',
    },{
        title: '一模排名',
        dataIndex: 'oneShotRanking',
    },{
        title: '南京学籍',
        dataIndex: 'isNanjing',
    },{
        title: '缴费情况',
        dataIndex: 'paymentSituation',
    },{
        title: '提档',
        dataIndex: 'file',
    },{
        title: '退费',
        dataIndex: 'refund',
    },{
        title: '联系时间',
        dataIndex: 'contactTime',
    },{
        title: '联系人',
        dataIndex: 'contactUser',
    },{
        title: '操作',
        dataIndex: 'operating',
        render: (text,record) => <a href="javascript:;" onClick={this.updataMsg.bind(text,record)}>修改</a>,
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
  }];
  //页码改变
    onChange(pageNumber) {
    console.log('Page: ', pageNumber);
    }

    //修改信息
    updataMsg = (text,record) => {
    this.props.history.push('/management/updatemsg')
    }
      
  render() {
    return (
      <div className = "tab-data">
            <Table 
            rowSelection={rowSelection} 
            columns={this.columns} 
            dataSource={this.data} 
            pagination={false}
            />
            <Pagination
            className = "pagination" 
            showQuickJumper 
            defaultCurrent={2} 
            total={500} 
            onChange={this.onChange} />
      </div>
    );
  }
}

export default withRouter(InterViewData);
