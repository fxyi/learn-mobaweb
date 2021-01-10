const express = require('express')
// 子路由
const router = express.Router()

const Category = require('../../modules/Category')

module.exports = app => {
  router.post('/category/create', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  app.use('/admin/api', router)
}