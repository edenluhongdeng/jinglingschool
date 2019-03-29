import React, { Component } from 'react';

import { HashRouter as Router } from 'react-router-dom'
// import { hashHistory } from 'react-router';
import Root from './Root';
// import 'antd/dist/antd.css';
import './app.less'
import { message } from 'antd'


class App extends Component {
  componentDidMount (){
    document.title = "考生信息管理"
    message.config({
      top: '50%',
      duration:1
    })
  }
  render() {
    return (
      <Router /* history={hashHistory} */>
        <div className = "app">
          <Root />
        </div>
      </Router>
    );
  }
}

export default App;
