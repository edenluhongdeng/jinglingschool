import Ajax from './Ajax.js'
///enroll/studentController/white/login?idCard=22&contactPhone=22222
export function login(data){
    return Ajax(`/studentController/white/login`,data,'GET')
}   
