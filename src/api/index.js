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