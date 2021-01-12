import fetch from './http'

// 新建管理员
export const login = (data) => fetch({
  url: '/login',
  method: 'post',
  data
})