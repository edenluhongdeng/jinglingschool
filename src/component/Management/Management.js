import React, { Component } from 'react';
import { Tag , Row, Col,Input,Button } from 'antd';
import './style.less'
import InterViewData from './interViewData/InterViewData'
const CheckableTag = Tag.CheckableTag;
const Search = Input.Search
class Management extends Component {
  state = {
    selectedTags: [],
  };

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

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
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
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={2}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>是否建档:</h6>
                          {this.IsArchive.map(tag => (
                            <CheckableTag
                              key={tag+'b'}
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
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
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>一模分数:</h6>
                          <Input className = "fraction"/>
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
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
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
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={3}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>中考分数:</h6>
                          <Input className = "fraction"/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>一模排名:</h6>
                          <Input className = "fraction"/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
              </Row>

              <Row type="flex">
                    <Col span={6} order={1}>
                      <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>是否退档:</h6>
                          {this.isRetreat.map(tag => (
                            <CheckableTag
                              key={tag+'f'}
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
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
                              checked={this.state.selectedTags.indexOf(tag) > -1}
                              onChange={checked => this.handleChange(tag, checked)}
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                      </div>
                    </Col>
                    <Col span={6} order={3}>
                    <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }}>笔试结果:</h6>
                          <Input className = "fraction"/>
                          <i>分（含）以上</i>
                      </div>
                    </Col>
                    <Col span={6} order={4}>
                    <div>
                          <Button type="primary">确认搜索</Button>
                      </div>
                    </Col>
              </Row>
              </div>
              <div className = "down-search">
                    <span className = "downLoad">下载</span>
                    <span>
                    <Search
                        className = "searchInput"
                        placeholder="输入要搜索的内容"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                      />
                    </span>
              </div>
              <div className = "content-data">
                    <InterViewData/>
              </div>
          </div>
      </div>
    );
  }
}

export default Management;
