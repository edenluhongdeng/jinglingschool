import Ajax from './Ajax.js'

///studentController/white/addStudentInfo
export function addStudentInfo(studentInfo){
    return Ajax(`/studentController/white/addStudentInfo`,studentInfo)
} 