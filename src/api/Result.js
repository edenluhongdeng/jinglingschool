import Ajax from './Ajax.js'
export function resultApi(data){
    ///studentController/selectResult
    return Ajax(`/studentController/selectResult`,data,'GET')
}  