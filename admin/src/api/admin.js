import fetch from './http'

// 新建管理员
export const createAdmin = (data) => fetch({
  url: '/rest/admin_users',
  method: 'post',
  data
})

// 根据指定 id 修改管理员信息
export const editAdminById = (id, data) => fetch({
  url: `/rest/admin_users/${id}`,
  method: 'put',
  data
})

// 获取指定 id 的管理员信息
export const getAdminById = (id) => fetch({
  url: `/rest/admin_users/${id}`,
  method: 'get',
})

// 获取管理员列表
export const getAdminList = () => fetch({
  url: '/rest/admin_users',
  method: 'get',
})

// 根据指定 id 删除管理员
export const removeAdminById = (id) => fetch({
  url: `/rest/admin_users/${id}`,
  method: 'delete',
})