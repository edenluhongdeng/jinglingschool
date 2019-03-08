import Ajax from './Ajax.js'

//获取学生列表
export function getStudyList(data){
    return Ajax(`/teacherController/selectStudents`,data)
}

//查询单个学生信息
// /teacherController/white/selectStudent2UpdateTeacher


/* 登陆后查询学生个人信息 */
// /teacherController/selectStudent2UpdateTeacher
export function getStudyInfoTch(data){
    return Ajax(`/teacherController/selectStudent2UpdateTeacher`,data,"GET")
}
/* 修改信息提交 */
export function getUpdataInfo(data){
    return Ajax(`/teacherController/updateStudentTeacher`,data)
}
