import axios from "axios";
import { message } from "antd";
// import _ from "lodash";
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "./enroll";
axios.defaults.withCredentials = true;
let isTransformRequest = false;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
// // axios拦截器
axios.interceptors.request.use(
  config => {
    if (/^(post|put|patch)$/i.test(config.method)) {
      const contentType = String(
        config.headers["Content-Type"] || config.headers.post["Content-Type"]
      ).toLowerCase();
      isTransformRequest = contentType.includes(
        "multipart/form-data;boundary=--"
      );
    }
    return config;
  },
  err => {
    return Promise.reject('网络错误!');
  }
);

axios.interceptors.response.use(response => {
  if (response.data.code === 200 || response.data.code === "200") {
    return response || response;
  } else if (response.data.code == 10000) {
    message.info("请登录");
    window.location.href = "#/login";
    return response || response;
  } else if (response.data.code == 10004) {
    message.success("身份证号已经存在");
    return response || response;
  } else {
    message.info(response.data.msg);
    throw Error('网络错误!');
  }
});

export default function Ajax(url = "", data = {}, type = "post", config) {
  if (type === "GET") {
    let dataStr = "";
    Object.keys(data).forEach(key => {
      dataStr += key + "=" + data[key] + "&";
    });
    if (dataStr !== "") {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
    return axios.get(url);
  } else {
    return axios.post(url, data, config);
  }
}
