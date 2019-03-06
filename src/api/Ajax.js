import axios from 'axios'
import _ from 'lodash'
axios.defaults.timeout = 10000;
axios.defaults.baseURL = './enroll'
axios.defaults.withCredentials = true

let isTransformRequest = false
const instance = axios.create({
  headers:{
    'Content-Type':'application/json;chartset=UTF-8'
  },
  transformRequest:[data => (isTransformRequest ? data : JSON.stringify(data))]
})

instance.interceptors.request.use(
  config => {
    if(/^(post|put|patch)$/i.test(config.method)) {
      const contentType = String(
        config.headers['Content-Type'] || config.headers.post['Content-Type']
      ).toLowerCase()
      isTransformRequest = contentType.includes('multipart/form-data;boundary=--')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(response => {
     return response.data
})

export default function Ajax(url = '', data = {}, type = 'post', config) {
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
      return axios.post(url, data, config)
    }
}