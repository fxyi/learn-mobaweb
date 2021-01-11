const express = require('express')
const inflection = require('inflection')

// 子路由
const router = express.Router({
  mergeParams: true
})

// const Category = require('../../modules/Category')

module.exports = app => {
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    // categories => Category
    const modelName = inflection.classify(req.params.resource)
    req.Model = require(`../../modules/${modelName}`)
    next()
  }, router)

  // 新建分类
  router.post('/', async (req, res) => {
    const { name, parent } = req.body
    const data = {
      name
    }
    if (parent) {
      data.parent = parent
    }
    const model = await req.Model.create(data)
    res.send(model)
  })

  // 修改分类
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 获取列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const model = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(model)
  })

  // 获取指定分类的信息
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 删除分类
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

}