import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

http.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  const { code, message } = res.data
  if (code && code !== 0) {
    Message.error({
      message,
      duration: 1000
    })
  }
  return res.data
}, err => {
  // 状态码非 200
  return Promise.reject(err)  
})

export default http