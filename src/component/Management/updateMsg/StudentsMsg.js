import React, { Component } from "react";
import { Col, Row, Button, Modal } from "antd";
import "./studentsmsg.less";
import baseUrl from "./../../../utils/index";
import { withRouter } from "react-router-dom";
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
  // 修改学生信息
  subButtonChange = (a, b) => {
    const data = {
      role: a,
      admissionTicket: this.props.list.admissionTicket,
      imgUrlAbc: `${baseUrl}/enroll/teacherController/teacherGetStudentPhoto?filePath=${
        this.props.list.photo
      }`
    };
    window.localStorage.setItem("data",JSON.stringify(data))
    this.props.history.push({
      pathname: `/registration`,
      // state: {
      //   role: a,
      //   admissionTicket: this.props.list.admissionTicket,
      //   imgUrlAbc: `${baseUrl}/enroll/teacherController/teacherGetStudentPhoto?filePath=${
      //     this.props.list.photo
      //   }`
      // }
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
    return (
      <div className="studentsmsg">
        <Button
          className="button_change"
          onClick={this.subButtonChange.bind(this, list.idCard)}
        >
          修改
        </Button>
        <div className="ApplicantInfo">
          <div className="infomsg">
            <span>学生情况</span>
            <span>/Applicant Information</span>
          </div>
          <Row>
            <Col span={21}>
              <div className="student_info_top">
                <div className="1">
                  <div className="infomsgtitle">
                    <span>中文姓名</span>
                    <span>/Chinese Name</span>
                  </div>
                  <div className="infomsgcont">{list.chinaName}</div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>性别</span>
                    <span> /Gender</span>
                  </div>
                  <div className="infomsgcont">{list.gender == 1 && "男"}</div>
                  <div className="infomsgcont">{list.gender == 0 && "女"}</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>出生年月</span>
                    <span> /Date of Birth</span>
                  </div>
                  <div className="infomsgcont">
                    {(list.birthDate && list.birthDate.split("T")[0]) || ""}
                  </div>
                </div>
                <div className="4">
                  <div className="infomsgtitle">
                    <span>身份证号</span>
                    <span>/ID No.</span>
                  </div>
                  <div className="infomsgcont">{list.idCard || ""}</div>
                </div>
                <div className="5">
                  <div className="infomsgtitle">
                    <span>是否是南京初中学籍</span>
                    <span>/Student in Nanjing</span>
                  </div>
                  <div className="infomsgcont">
                    {(list.orNkStudent == "0" && "不是") ||
                      (list.orNkStudent == "1" && "是") ||
                      ""}
                  </div>
                </div>
                <div className="6">
                  <div className="infomsgtitle">
                    <span>联系电话</span>
                    <span> /Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">{list.contactPhone || ""}</div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1">
                  <div className="infomsgtitle">
                    <span>初中就读学校</span>
                    <span>/Junior High School</span>
                  </div>
                  <div className="infomsgcont">
                    {list.juniorSchoolName || list.schoolNameIndex || ""}
                  </div>
                </div>
                <div className="2">
                  <div className="infomsgtitle">
                    <span>一模总分 </span>
                    <span>/Total Score of Mock Exam 1</span>
                  </div>
                  <div className="infomsgcont">{list.exam1Score || ""}</div>
                </div>
                <div className="3">
                  <div className="infomsgtitle">
                    <span>一模年级排名 </span>
                    <span>/School Ranking</span>
                  </div>
                  <div className="infomsgcont">{list.exam1Rank || ""}</div>
                </div>
                <div className="4" style={{ width: "330px" }}>
                  <div className="infomsgtitle">
                    <span>项目意向 </span>
                    <span>/Intended Program</span>
                  </div>
                  <div className="infomsgcont">
                    {list.intendedProgram &&
                      list.intendedProgram.split(",").map((itom, index) => {
                        if (itom == "0") {
                          return (
                            <span key={index + 1} className="chin_contry">
                              中美 /American
                            </span>
                          );
                        }
                        if (itom == "1") {
                          return (
                            <span key={index + 33} className="chin_contry">
                              中英 /British
                            </span>
                          );
                        }
                        if (itom == "2") {
                          return (
                            <span key={index + 44} className="chin_contry">
                              中加 /Canadian
                            </span>
                          );
                        }
                        if (itom == "3") {
                          return (
                            <span key={index + 66} className="chin_contry">
                              待定
                            </span>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={3}>
              <div className="photo">
                {list.photo && (
                  <img
                    src={`${baseUrl}/enroll/teacherController/teacherGetStudentPhoto?filePath=${
                      list.photo
                    }`}
                    alt=""
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
        {/* 家庭情况 */}
        <div className="ApplicantInfo">
          <div className="infomsg">
            <span>家庭情况 </span>
            <span>/Family Information</span>
          </div>
          <Row>
            <Col span={24}>
              <div className="student_info_top">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>父亲姓名 </span>
                    <span>/Father’s Name</span>
                  </div>
                  <div className="infomsgcont">{list.fatherName || ""}</div>
                </div>
                <div className="2 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作单位</span>
                    <span> /Company</span>
                  </div>
                  <div className="infomsgcont">{list.fatherCompany || ""}</div>
                </div>
                <div className="3 flag">
                  <div className="infomsgtitle">
                    <span>父亲工作职位 </span>
                    <span> /Occupation</span>
                  </div>
                  <div className="infomsgcont">{list.fatherPosition || ""}</div>
                </div>
                <div className="4 flag flag4">
                  <div className="infomsgtitle">
                    <span>父亲手机</span>
                    <span>/Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">{list.fatherPhone || ""}</div>
                </div>
              </div>
              <div className="student_info_top">
                <div className="1 flag">
                  <div className="infomsgtitle">
                    <span>母亲姓名 </span>
                    <span>/Mother’s Name</span>
                  </div>
                  <div className="infomsgcont">{list.matherName || ""}</div>
                </div>
                <div className="2 flag">
                  <div className="infomsgtitle">
                    <span>母亲工作单位</span>
                    <span> /Company</span>
                  </div>
                  <div className="infomsgcont">{list.matherCompany || ""}</div>
                </div>
                <div className="3 flag">
                  <div className="infomsgtitle">
                    <span>母亲工作职位 </span>
                    <span> /Occupation</span>
                  </div>
                  <div className="infomsgcont">
                    {list.matherPosition || ""}{" "}
                  </div>
                </div>
                <div className="4 flag flag4">
                  <div className="infomsgtitle">
                    <span>母亲手机</span>
                    <span>/Cellphone No.</span>
                  </div>
                  <div className="infomsgcont">{list.matherPhone || ""}</div>
                </div>
              </div>
              <div className="student_info_top student_info_bottom">
                <div className="1 flag flagflame">
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
            <span>/Registration Information</span>
          </div>
          <Row>
            <Col span={10}>
              <div className="student_info_top student_info_top_two">
                <div className="1 flagTwo">
                  <div className="infomsgtitle">
                    <span>填表人姓名</span>
                    <span> /Applicant </span>
                  </div>
                  <div className="infomsgcont">{list.preparerName || ""}</div>
                </div>
                <div className="2 flagTwo">
                  <div className="infomsgtitle">
                    <span>填表时间 </span>
                    <span>/Date of Registration</span>
                  </div>
                  <div className="infomsgcont">
                    {renderTime(list.preparerTime).split(" ")[0] || ""}
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
          style={{ textAlign: "center"}}
          width = {"30%"}
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

export default withRouter(StudentsMsg);
