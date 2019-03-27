import Ajax from './Ajax.js'

// 新增    /studentController/white/addStudentInfo
export function addStudentInfo(studentInfo){
    return Ajax(`/studentController/white/addStudentInfo`,studentInfo)
} 

//查询  /studentController/selectForUpdate
export function selectForUpdate(){
    return Ajax(`/studentController/selectForUpdate`,{},'GET')
}

//修改   /studentController/updateStudentInfo
export function updateStudentInfo(studentInfo){
    return Ajax(`/studentController/updateStudentInfo`,studentInfo)
}

//老师根据学生IdCard查询 teacherController/selectStudentBaseInfoForUpdate
export function selectStudentBaseInfoForUpdate(idCard){
    return Ajax(`/teacherController/selectStudentBaseInfoForUpdate`,{idCard},'GET')
}

// 管理员修改    /studentController/white/addStudentInfo
export function addStudentInfoUpDate(studentInfo){
    return Ajax(`/teacherController/updateStudentBaseInfo`,studentInfo)
} 