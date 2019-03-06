import React, { Component } from "react";
import { Col, Row, Button } from "antd";
import "./studentsmsg.less";
class StudentsMsg extends Component {
  render() {
    return (
      <div className="studentsmsg">
        <div className="ApplicantInfo">
          <div className="infomsg">
            <span>学生情况</span>
            <span>/Applicant Info</span>
          </div>
          <Row>
            <Col span={21}>
              <div className="student_info_top">
                <div className="1">
                  <div className="infomsgtitle">
                    <span>中文姓名</span>
                    <span>/Chinese Name</span>
                  </div>
                  <div className="infomsgcont">李依伊</div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>性别</span>
                    <span> /Gender</span>
                  </div>
                  <div className="infomsgcont">女</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>出生年月</span>
                    <span> /Date of Birth</span>
                  </div>
                  <div className="infomsgcont">2006/06/27</div>
                </div>
                <div className="4">
                  <div className="infomsgtitle">
                    <span>身份证号</span>
                    <span>/ID No.</span>
                  </div>
                  <div className="infomsgcont">1309221992020136XX</div>
                </div>
                <div className="5">
                  <div className="infomsgtitle">
                    <span>是否是南京初中学籍</span>
                    <span>/Student i</span>
                  </div>
                  <div className="infomsgcont">是</div>
                </div>
                <div className="6">
                  <div className="infomsgtitle">
                    <span>联系电话</span>
                    <span> /Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">1372279050X</div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1">
                  <div className="infomsgtitle">
                    <span>初中就读学校</span>
                    <span> /Junior High</span>
                  </div>
                  <div className="infomsgcont">南京市鼓楼区第312实验中学</div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>一模总分 </span>
                    <span>/Total Score of</span>
                  </div>
                  <div className="infomsgcont">651</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>一模年级排名 </span>
                    <span>/School Ranki</span>
                  </div>
                  <div className="infomsgcont">37</div>
                </div>
                <div className="4">
                  <div className="infomsgtitle">
                    <span>项目意向 </span>
                    <span>/Intended Progr</span>
                  </div>
                  <div className="infomsgcont">
                    <span className="chin_contry">中美 /American</span>
                    <span className="chin_contry">中英 /British</span>
                    <span className="chin_contry">中加 /Canadian</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={3}>
              <div className="photo">
                <img
                  src="http://img0.imgtn.bdimg.com/it/u=2001683340,2345214130&fm=26&gp=0.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* 家庭情况 */}
        <div className="ApplicantInfo">
          <div className="infomsg">
            <span>家庭情况 </span>
            <span>/Family Informa</span>
          </div>
          <Row>
            <Col span={24}>
              <div className="student_info_top">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>父亲姓名 </span>
                    <span>/Father’s Name</span>
                  </div>
                  <div className="infomsgcont">王李丹妮</div>
                </div>
                <div className="2 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作单位</span>
                    <span> /Company</span>
                  </div>
                  <div className="infomsgcont">
                    南京市政府某某某项目人力资源部
                  </div>
                </div>
                <div className="3 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作职位 </span>
                    <span> /Occupation</span>
                  </div>
                  <div className="infomsgcont">人力资源部门主任 </div>
                </div>
                <div className="4 flag flag4">
                  <div className="infomsgtitle">
                    <span>父亲手机</span>
                    <span>/Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">1309221992020136XX</div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>家庭住址 </span>
                    <span> /Family Address</span>
                  </div>
                  <div className="infomsgcont">
                    河北省石家庄市长安区谈固大街与某某路交叉
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* 填表信息 */}
        <div className="ApplicantInfo">
          <div className="infomsg">
            <span>填表信息 </span>
            <span> /Registration I</span>
          </div>
          <Row>
            <Col span={8}>
              <div className="student_info_top student_info_top_two">
                <div className="1 flagTwo">
                  <div className="infomsgtitle">
                    <span>填表人姓名</span>
                    <span> /Applicant </span>
                  </div>
                  <div className="infomsgcont">李益康</div>
                </div>
                <div className="2 flagTwo">
                  <div className="infomsgtitle">
                    <span>填表时间 </span>
                    <span> /Date of Regist</span>
                  </div>
                  <div className="infomsgcont">2019年3月21日</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="sub">
            <Button >保存</Button>
        </div>
        
      </div>
    );
  }
}

export default StudentsMsg;
