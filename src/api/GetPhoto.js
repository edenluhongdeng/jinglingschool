import Ajax from './Ajax.js'
///enroll/studentController/white/login?idCard=22&contactPhone=22222
export function downloadPhoto(data){
    return Ajax(`/studentController/white/getPhone`,data,'GET')
}   
