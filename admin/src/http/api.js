import http from './http'

export const createCategory = (name) => http({
  url: '/category/create',
  method: 'post',
  data: {
    name
  }
})