import Ajax from './Ajax.js'
///enroll/studentController/white/login?idCard=22&contactPhone=22222
export function resultApi(data){
    ///studentController/selectResult
    return Ajax(`/studentController/selectResult`,data,'GET')
}  