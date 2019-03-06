import React, { Component } from 'react'
import './index.less'
import MyModal from '../Common/MyModal'
import { Button } from 'antd'
class InfoModal extends Component {
  state = {
  }
  render() {
    
    return (
          <MyModal onClose={this.closeOverlay} w={11}>
            <div className='infoModal-content'>
                <h2 className='infoModal-h2'>学生情况<span>/Applicant Info</span></h2>
                <div className='infoModal-content-div'>
                    <div>
                        <div className='infoModal-div-flex'>
                            <div>
                                <p className='infoModal-title'>中文姓名<span>/Chinese Name</span></p>
                                <p>李依伊</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>性别<span>/Gender</span></p>
                                <p>女</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>出生年月<span>/Date of Birth</span></p>
                                <p>2006/06/27</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>身份证号<span>/ID No.</span></p>
                                <p>1309221992020136XX</p>
                            </div>
                        </div>
                        <div className='infoModal-div-flex'>
                            <div>
                                <p className='infoModal-title'>联系电话<span>/Cellphone No.</span></p>
                                <p>1372279050X</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>是否是南京初中学籍<span>/Student i</span></p>
                                <p>是</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>初中就读学校<span>/Junior High</span></p>
                                <p>南京市鼓楼区第312实验中学</p>
                            </div>
                        </div>
                        <div className='infoModal-div-flex infoModal-div-flex-last'>
                            <div>
                                <p className='infoModal-title'>一模总分<span>/Total Score of</span></p>
                                <p>651</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>一模年级排名<span>/School Ranki</span></p>
                                <p>37</p>
                            </div>
                            <div>
                                <p className='infoModal-title'>项目意向<span>/Intended Progr</span></p>
                                <p className='flex-p'><span>中美 /American</span><span>中美 /American</span><span>中美 /American</span></p>
                            </div>
                        </div>
                    </div>
                    <img alt=''/>
                </div>
                <h2 className='infoModal-h2'>家庭情况<span>/Family Informa</span></h2>
                <div>
                    <div className='infoModal-div-flex'>
                        <div>
                            <p className='infoModal-title'>父亲姓名<span>/Father’s Name</span></p>
                            <p>王李丹妮</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>父亲工作单位<span>/Company</span></p>
                            <p>南京市政府某某某项目人力资源部</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>父亲工作职位<span>/Occupation</span></p>
                            <p>人力资源部门主任</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>父亲手机<span>/Cellphone No.</span></p>
                            <p>61254896315</p>
                        </div>
                    </div>
                    <div className='infoModal-div-flex'>
                        <div>
                            <p className='infoModal-title'>母亲姓名<span>/Mather’s Name</span></p>
                            <p>刘诗康</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>母亲工作单位<span>/Company</span></p>
                            <p>个体户</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>母亲工作职位<span>/Occupation</span></p>
                            <p>个体户</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>母亲手机<span>/Cellphone No.</span></p>
                            <p>1372279050X</p>
                        </div>
                    </div> 
                </div>
                <div className='infoModal-div-flex infoModal-div-flex-last'>
                    <div>
                        <p className='infoModal-title'>家庭住址<span>/Family Address</span></p>
                        <p>河北省石家庄市长安区谈固大街与某某路交叉</p>
                    </div>
                </div>
                <h2 className='infoModal-h2'>填表信息<span>/Registration I</span></h2>
                <div style={{width:'50%'}}>
                    <div className='infoModal-div-flex infoModal-div-flex-last'>
                        <div>
                            <p className='infoModal-title'>填表人姓名<span>/Applicant</span></p>
                            <p>李益康</p>
                        </div>
                        <div>
                            <p className='infoModal-title'>填表时间<span>/Date of Regist</span></p>
                            <p>2019年3月21日</p>
                        </div>
                    </div>
                </div>
                <div className='infoModal-footer'>
                    <Button className='infoModal-footer-btn'>返回修改</Button>
                    <Button className='infoModal-footer-btn' type='primary'>确认提交</Button>
                </div>
            </div>
          </MyModal>
    )
  }
}
export default InfoModal
