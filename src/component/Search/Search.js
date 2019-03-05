import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Button as Buttonb } from 'antd';

class Search extends Component {
  render() {
    return (
      <div>
        查询页面
        <Button>antd-mobile</Button>
        <Buttonb>antd</Buttonb>
      </div>
    );
  }
}

export default Search;
