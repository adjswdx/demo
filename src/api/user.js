import request from '@/utils/request'

// 登录
export const login = (data) => {
  return request({
    url: '/sys/login', // 因为所有的接口都要跨域 表示所有的接口要带 /api
    method: 'post',
    data
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}
// 获取用户头像
export const getUserDetailById = (data) => {
  return request({
    url: `/sys/user/${data}`
  })
}
// 获取组织架构数据
export const getDepartments = () => {
  return request({
    url: '/company/department'
  })
}
// 删除功能模块
export const delDepartments = (data) => {
  return request({
    url: `/company/department/${data}`,
    method: 'delete'
  })
}
export const logout = () => {
  return request({})
}
