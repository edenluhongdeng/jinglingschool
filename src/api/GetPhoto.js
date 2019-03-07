import Ajax from './Ajax.js'
///enroll/studentController/white/login?idCard=22&contactPhone=22222
export function downloadPhoto(data){
    return Ajax(`/studentController/white/getPhone`,data,'GET')
}   
export function downloadInformation(data){
    return Ajax(`/certificate/selectCertificate`,data,'GET')
}  
export function downloadFile(data){
    return Ajax(`/certificate/getCertificate`,data,'GET')
} 
