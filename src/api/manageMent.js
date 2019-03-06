import Ajax from './Ajax.js'

//获取学生列表
export function getStudyList(data){
    return Ajax(`/teacherController/white/selectStudents`,data)
}

//查询单个学生信息
