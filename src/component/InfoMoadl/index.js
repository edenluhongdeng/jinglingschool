import React, { Component } from "react"
import "./index.less"
import MyModal from "../Common/MyModal"
import { Button, message } from "antd"
import { withRouter } from "react-router-dom"
import _ from "lodash"
import { addStudentInfo, updateStudentInfo } from "../../api"
import { login } from "../../api/Login"
class InfoModal extends Component {
  state = {}
  handleClick1 = () => {
    this.props.onClose()
  }
  handleClick2 = () => {
    const { studentInfo, flag } = this.props
    if (flag) {
      studentInfo.photo = this.props.upImgUrl
      updateStudentInfo(studentInfo)
        .then(res => {
          const code = _.get(res, "data.code")
          const error = _.get(res, "data.error")
          console.log(code)
          if (code == 200) {
            message.success("修改成功!", 1)
            this.props.history.push("/download")
          } else if (code == "10004") {
            message.info("身份证号已存在")
            return
          } else {
            message.error(error)
          }
        })
        .catch(err => {
          message.error(err)
        })
    } else {
      addStudentInfo(studentInfo)
        .then(res => {
          const code = _.get(res, "data.code")
          const error = _.get(res, "data.error")
          const msg = _.get(res, "data.msg")
          if (code == 200) {
            const dataLogin = {
              idCard: studentInfo.idCard,
              contactPhone: studentInfo.contactPhone
            }
            login(dataLogin).then(data => {
              const code = _.get(res, "data.code")
              const error = _.get(res, "data.error")
              if (code == 200) {
                message.success("上传成功!", 1)
                this.props.history.push("/download")
              } else if (code == "10000") {
                message.error("登陆失败，重新提交")
              } else {
                message.error(error)
              }
            })
          } else if (code == 10004) {
            alert(msg)
            return
          } else {
            message.error(error)
          }
        })
        .catch(err => {
          message.error(err)
        })
    }
  }
  render() {
    const { studentInfo, imageUrl } = this.props
    const {
      birthDateStr,
      chinaName,
      contactPhone,
      exam1Rank,
      exam1Score,
      familyAddress,
      fatherCompany,
      fatherName,
      fatherPhone,
      fatherPosition,
      gender,
      idCard,
      intendedPrograms,
      juniorSchoolName,
      matherCompany,
      matherName,
      matherPhone,
      matherPosition,
      orNkStudent,
      preparerName,
      schoolNameIndex,
      schoolSiteArea,
      schoolSiteCity,
      schoolSiteIndex,
      schoolSiteProvince
    } = studentInfo
    return (
      <MyModal onClose={this.props.onClose} w={11}>
        <div className="infoModal-content">
          <h2 className="infoModal-h2">
            学生情况<span>/Applicant Information</span>
          </h2>
          <div className="infoModal-content-div">
            <div>
              <div className="infoModal-div-flex">
                <div>
                  <p className="infoModal-title">
                    中文姓名<span>/Chinese Name</span>
                  </p>
                  <p>{chinaName}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    性别<span>/Gender</span>
                  </p>
                  <p>{gender == 0 ? "女" : "男"}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    出生年月<span>/Date of Birth</span>
                  </p>
                  <p>{birthDateStr}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    身份证号<span>/ID No.</span>
                  </p>
                  <p>{idCard}</p>
                </div>
              </div>
              <div className="infoModal-div-flex">
                <div>
                  <p className="infoModal-title">
                    联系电话<span>/Cellphone No.</span>
                  </p>
                  <p>{contactPhone}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    是否是南京初中学籍<span>/Student in Nanjing</span>
                  </p>
                  <p>{orNkStudent == 0 ? "不是" : "是"}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    初中就读学校<span>/Junior High School</span>
                  </p>
                  <p>
                    {orNkStudent == 0
                      ? `${schoolSiteProvince}-${schoolSiteCity}-${schoolSiteArea}-${juniorSchoolName}`
                      : `${schoolSiteIndex}-${schoolNameIndex}`}
                  </p>
                </div>
              </div>
              <div className="infoModal-div-flex infoModal-div-flex-last">
                <div>
                  <p className="infoModal-title">
                    一模总分<span>/Total Score of Mock Eaxm 1</span>
                  </p>
                  <p>{exam1Score}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    一模年级排名<span>/School Ranking</span>
                  </p>
                  <p>{exam1Rank}</p>
                </div>
                <div>
                  <p className="infoModal-title">
                    项目意向<span>/Intended Program</span>
                  </p>
                  <p className="flex-p">
                    {
                      intendedPrograms.map(item=>{
                        if(item == 0){
                          return (<span>中美 /American</span>)
                        }else if(item == 1){
                          return (<span>中英 /British</span>)
                        }else if(item == 2){
                          return (<span>中加 /Canadian</span>)
                        }else if(item == 3){
                          return (<span>待定 /TBA</span>)
                        }
                      })
                    }
                  </p>
                </div>
              </div>
            </div>
            <img src={imageUrl} alt="" />
          </div>
          <h2 className="infoModal-h2">
            家庭情况<span>/Family Information</span>
          </h2>
          <div>
            <div className="infoModal-div-flex">
              <div>
                <p className="infoModal-title">
                  父亲姓名<span>/Father’s Name</span>
                </p>
                <p>{fatherName}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  父亲工作单位<span>/Company</span>
                </p>
                <p>{fatherCompany}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  父亲工作职位<span>/Occupation</span>
                </p>
                <p>{fatherPosition}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  父亲手机<span>/Cellphone No.</span>
                </p>
                <p>{fatherPhone}</p>
              </div>
            </div>
            <div className="infoModal-div-flex">
              <div>
                <p className="infoModal-title">
                  母亲姓名<span>/Mather’s Name</span>
                </p>
                <p>{matherName}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  母亲工作单位<span>/Company</span>
                </p>
                <p>{matherCompany}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  母亲工作职位<span>/Occupation</span>
                </p>
                <p>{matherPosition}</p>
              </div>
              <div>
                <p className="infoModal-title">
                  母亲手机<span>/Cellphone No.</span>
                </p>
                <p>{matherPhone}</p>
              </div>
            </div>
          </div>
          <div className="infoModal-div-flex infoModal-div-flex-last">
            <div>
              <p className="infoModal-title">
                家庭住址<span>/Family Address</span>
              </p>
              <p>{familyAddress}</p>
            </div>
          </div>
          <h2 className="infoModal-h2">
            填表信息<span>/Registration Information</span>
          </h2>
          <div style={{ width: "50%" }}>
            <div className="infoModal-div-flex infoModal-div-flex-last">
              <div>
                <p className="infoModal-title">
                  填表人姓名<span>/Applicant</span>
                </p>
                <p>{preparerName}</p>
              </div>
            </div>
          </div>
          <div className="infoModal-footer">
            <Button
              className="infoModal-footer-btn"
              onClick={this.handleClick1}
            >
              返回修改
            </Button>
            <Button
              className="infoModal-footer-btn"
              type="primary"
              onClick={this.handleClick2}
            >
              确认提交
            </Button>
          </div>
        </div>
      </MyModal>
    )
  }
}
export default withRouter(InfoModal)
