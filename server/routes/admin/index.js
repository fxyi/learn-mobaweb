const express = require('express')
// 子路由
const router = express.Router()

const Category = require('../../modules/Category')

module.exports = app => {
  app.use('/admin/api', router)

  // 新建分类
  router.post('/categories', async (req, res) => {
    const { name, parent } = req.body
    const data = {
      name
    }
    if (parent) {
      data.parent = parent
    }
    const model = await Category.create(data)
    res.send(model)
  })

  // 修改分类
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 获取列表
  router.get('/categories', async (req, res) => {
    const model = await Category.find().populate('parent').limit(10)
    res.send(model)
  })

  // 获取指定分类的信息
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  // 删除分类
  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

}