import React, { Component } from 'react';

import { HashRouter as Router } from 'react-router-dom'
import Root from './Root';
import './app.less'


class App extends Component {
  render() {
    return (
      <Router /* history={hashHistory} */>
        <div className="test">
          <Root />
        </div>
      </Router>
    );
  }
}

export default App;
