import Ajax from './Ajax.js'
///enroll/studentController/white/login?idCard=22&contactPhone=22222
export function downloadPhoto(data){
    return Ajax(`/studentController/getPhone`,data,'GET')
}   
export function downloadInformation(data){
    return Ajax(`/studentController/certificate/selectCertificate`,data,'GET')
}  
export function downloadFile(data){
    return Ajax(`/studentController/certificate/getCertificate`,data,'GET')
} 
