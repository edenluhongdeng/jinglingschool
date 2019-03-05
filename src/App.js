import React, { Component } from 'react';

import { HashRouter as Router } from 'react-router-dom'
// import { hashHistory } from 'react-router';
import Root from './Root';
// import 'antd/dist/antd.css';
import './app.less'


class App extends Component {
  render() {
    return (
      <Router /* history={hashHistory} */>
        <div>
          <Root />
        </div>
      </Router>
    );
  }
}

export default App;
