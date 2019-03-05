import React, { Component } from "react";

//引入状态库

//引入路由模块
import { Route, withRouter, Switch } from "react-router-dom";
// import Ipad from "./Ipad";
// import Mapp from "./Mapp";

/* search 查询 */
import Search from "./component/Search/Search"
/* registration 登记 */
import Registration from "./component/Registration/Registration"
/* management 管理 */
import Management from "./component/Management/Management"
import Login from './component/Login/Login';

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <Switch>
          <Route exect path="/search" component={Search} />
          <Route path="/registration" component={Registration} />
          <Route path="/management" component={Management} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Root);
