import Ajax from './Ajax.js'

//获取学生列表
export function getStudyList(data){
    return Ajax(`/teacherController/selectStudents`,data)
}

//查询单个学生信息


//下载信息 /teacherController/white/downloadStudentInfo
export function downloadStudentInfo(data){
    return Ajax(`/teacherController/downloadStudentInfo`,data)
}