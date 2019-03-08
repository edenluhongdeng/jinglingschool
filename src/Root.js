import React, { Component } from "react";

//引入状态库

//引入路由模块
import { Route, withRouter, Switch } from "react-router-dom";
// import Ipad from "./Ipad";
// import Mapp from "./Mapp";

/* search 查询 */
import Search from "./component/Search/Search"
/* 准考证信息查询 */
import Admissioninfo from "./component/Search/Admissioninfo"
/* 考生成绩查询 */
import Resultsquery from "./component/Search/Resultsquery"
/* registration 登记 */
import Registration from "./component/Registration/Registration"
/* management 管理 */
import Management from "./component/Management/Management"
import UpdateMsg from "./component/Management/updateMsg/UpdateMsg"
import Login from './component/Login/Login';
/*选择 */
import Choose from './component/Choose/Choose';
/*成绩结果 */
import Result from './component/Result/Result';
/* 下载*/
import Download from './component/Download/Download';

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/admissioninfo" component={Admissioninfo} />
          <Route exact path="/resultsquery" component={Resultsquery} />
          <Route path="/registration" component={Registration} />
          <Route exact  path="/management/updatemsg" component={UpdateMsg} />
          <Route  exact path="/management" component={Management} />
          <Route path="/login" component={Login} />
          <Route path="/choose" component={Choose} />
          <Route path="/result" component={Result} />
          <Route path="/download" component={Download} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Root);
