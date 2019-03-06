import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = './k12';

axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    config.headers = {
      'token':localStorage.getItem("token") || 'admin',
      // 'Content-Type':'application/json;charset=UTF-8',
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
axios.interceptors.response.use(response => {
     if (response.data.code == 200) {
        const token = _.get(response,'data.data.token')
        if (token) {
          localStorage.setItem("token", token)
        }
     }
     return response.data
})

export default function Ajax(url = '', data = {}, type = 'post') {
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      return axios.get(url)
    } else {
      return axios.post(url, data)
    }
}