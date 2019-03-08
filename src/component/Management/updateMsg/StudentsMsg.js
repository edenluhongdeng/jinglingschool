import React, { Component } from "react";
import { Col, Row, Button, Modal } from "antd";
// import { getStudyInfoTch } from "./../../../api/manageMent.js";
import {
  getStudyInfoTch,
  getUpdataInfo,
  getStudyPhoto
} from "./../../../api/manageMent.js";
import "./studentsmsg.less";
import baseUrl from "./../../../utils/index";
class StudentsMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false
    };
  }
  subFatherFun = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };
  /*  */
  handleOk = () => {
    this.setState({
      confirmLoading: true
    });
    this.setState({
      visible: false,
      confirmLoading: false
    });
    this.props.subButton();
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    const list = this.props.list;
    function renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    }
    console.log(list.intendedProgram && list.intendedProgram.split(","));
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
                  <div className="infomsgcont">
                    {list.chinaName || "阿凡达"}
                  </div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>性别</span>
                    <span> /Gender</span>
                  </div>
                  <div className="infomsgcont">{list.gender || "未知"}</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>出生年月</span>
                    <span> /Date of Birth</span>
                  </div>
                  <div className="infomsgcont">
                    {(list.birthDate && list.birthDate.split("T")[0]) ||
                      "2019.8"}
                  </div>
                </div>
                <div className="4">
                  <div className="infomsgtitle">
                    <span>身份证号</span>
                    <span>/ID No.</span>
                  </div>
                  <div className="infomsgcont">
                    {list.idCard || "2434234234"}
                  </div>
                </div>
                <div className="5">
                  <div className="infomsgtitle">
                    <span>是否是南京初中学籍</span>
                    <span>/Student i</span>
                  </div>
                  <div className="infomsgcont">
                    {(list.orNkStudent == "0" && "不是") ||
                      (list.orNkStudent == "1" && "是") ||
                      "不是"}
                  </div>
                </div>
                <div className="6">
                  <div className="infomsgtitle">
                    <span>联系电话</span>
                    <span> /Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">
                    {list.contactPhone || "1832312312"}
                  </div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1">
                  <div className="infomsgtitle">
                    <span>初中就读学校</span>
                    <span> /Junior High</span>
                  </div>
                  <div className="infomsgcont">
                    {list.juniorSchoolName || "金陵附中"}
                  </div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>一模总分 </span>
                    <span>/Total Score of</span>
                  </div>
                  <div className="infomsgcont">{list.exam1Score || "790"}</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>一模年级排名 </span>
                    <span>/School Ranki</span>
                  </div>
                  <div className="infomsgcont">{list.exam1Rank || "10"}</div>
                </div>
                <div className="4" style={{ width: "330px" }}>
                  <div className="infomsgtitle">
                    <span>项目意向 </span>
                    <span>/Intended Progr</span>
                  </div>
                  <div className="infomsgcont">
                    {list.intendedProgram &&
                      list.intendedProgram.split(",").map(itom => {
                        console.log(itom);
                        // itom == "0" && <span className="chin_contry">中美 /American</span>
                        if (itom == "0") {
                          return (
                            <span className="chin_contry">中美 /American</span>
                          );
                        }
                        if (itom == "1") {
                          return (
                            <span className="chin_contry">中英 /British</span>
                          );
                        }
                        if (itom == "2") {
                          return (
                            <span className="chin_contry">中加 /Canadian</span>
                          );
                        }
                        if (itom == "3") {
                          return <span className="chin_contry">待定</span>;
                        }
                        // {
                        //   itom == "1" && (
                        //     <span className="chin_contry">中英 /British</span>
                        //   );
                        // }
                        // {
                        //   itom == "2" && (
                        //     <span className="chin_contry">中加 /Canadian</span>
                        //   );
                        // }
                        // {
                        //   itom == "3" && (
                        //     <span className="chin_contry">待定</span>
                        //   );
                        // }
                      })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={3}>
              <div className="photo">
                <img
                  src={`${baseUrl}/enroll/studentController/getPhone`}
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
                  <div className="infomsgcont">{list.fatherName || "兔子"}</div>
                </div>
                <div className="2 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作单位</span>
                    <span> /Company</span>
                  </div>
                  <div className="infomsgcont">
                    {list.fatherCompany || "数字统计局"}
                  </div>
                </div>
                <div className="3 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作职位 </span>
                    <span> /Occupation</span>
                  </div>
                  <div className="infomsgcont">
                    {list.fatherPosition || "统计员"}{" "}
                  </div>
                </div>
                <div className="4 flag flag4">
                  <div className="infomsgtitle">
                    <span>父亲手机</span>
                    <span>/Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">
                    {renderTime(list.fatherPhone).split(" ")[0] ||
                      "2019年3月21日"}
                  </div>
                </div>
              </div>
              <div className="student_info_top">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>母亲姓名 </span>
                    <span>/Mother’s Name</span>
                  </div>
                  <div className="infomsgcont">
                    {list.matherName || "兔子2号"}
                  </div>
                </div>
                <div className="2 flag">
                  <div className="infomsgtitle">
                    <span>母亲工作单位</span>
                    <span> /Company</span>
                  </div>
                  <div className="infomsgcont">
                    {list.matherCompany || "规划局"}
                  </div>
                </div>
                <div className="3 flag">
                  <div className="infomsgtitle">
                    <span>母亲工作职位 </span>
                    <span> /Occupation</span>
                  </div>
                  <div className="infomsgcont">
                    {list.matherPosition || "统计员2"}{" "}
                  </div>
                </div>
                <div className="4 flag flag4">
                  <div className="infomsgtitle">
                    <span>母亲手机</span>
                    <span>/Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">
                    {list.matherPhone || "123435123"}
                  </div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>家庭住址 </span>
                    <span> /Family Address</span>
                  </div>
                  <div className="infomsgcont">{list.familyAddress}</div>
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
                  <div className="infomsgcont">
                    {list.preparerName || "李益康"}
                  </div>
                </div>
                <div className="2 flagTwo">
                  <div className="infomsgtitle">
                    <span>填表时间 </span>
                    <span> /Date of Regist</span>
                  </div>
                  <div className="infomsgcont">
                    {renderTime(list.preparerTime).split(" ")[0] ||
                      "2019年3月21日"}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="sub">
          <Button onClick={this.subFatherFun}>保存</Button>
        </div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.confirmLoading}
          onCancel={this.handleCancel}
          style={{ textAlign: "center" }}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              保存
            </Button>
          ]}
        >
          <p>{`是否保存修改内容`}</p>
        </Modal>
      </div>
    );
  }
}

export default StudentsMsg;
