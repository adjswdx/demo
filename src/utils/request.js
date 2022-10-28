import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import * as tools from '@/utils/tools'

const options = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}
const service = axios.create(options) // 创建一个axios的实例
service.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      if (tools.IsCheckTimeOut()) {
        tools.logOutError()
        return Promise.reject(new Error('token超时了'))
      }
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
) // 请求拦截器
service.interceptors.response.use(response => {
  const { data } = response
  if (data.success) {
    return data
  } else {
    // console.log(data)
    Message.error(data.message)
    return Promise.reject(new Error(data.message))
  }
}, error => {
  // dir把error所有信息打印出来
  // console.dir(error)
  if (error.response && error.response.data && error.response.data.code === 10002) {
    tools.logOutError()
    tools.getMessageError()
  } else {
    Message.error(error.message)
  }
  // Message.error(error.response.data.message)
  return Promise.reject(error)
}) // 响应拦截器
export default service // 导出axios实例
