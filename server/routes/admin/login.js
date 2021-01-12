const express = require('express')
const router = express.Router()
const AdminUser = require('../../modules/AdminUser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const assert = require('http-assert')

module.exports = app => {
  app.use('/admin/api', router)
  router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    // 用户不存在
    assert(user, 200, '用户不存在')
    // if (!user) {
    //   return res.send({
    //     code: 1,
    //     message: '用户不存在'
    //   })
    // }
    // 2.校验密码
    const isValid = bcrypt.compareSync(password, user.password)
    assert(isValid, 200, '用户名或密码错误')
    // if (!isValid) {
    //   return res.send({
    //     code: 2,
    //     message: '用户名或密码错误'
    //   })
    // }
    // 3.返回 token
    const token = jwt.sign({
      id: user._id,
      username: user.username
    }, app.get('secret'))

    res.send({
      code: 0,
      message: '登录成功',
      token
    })
  })

  // 错误处理
  app.use((err, req, res, next) => {
    res.send({
      code: -1,
      message: err.message
    })
  })
}