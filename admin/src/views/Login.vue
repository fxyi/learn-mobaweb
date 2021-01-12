<template>
  <div class="login-container">
    <el-card header="登录" class="login-card">
      <el-form class="form" :model="loginForm" label-width="4rem" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="btn-box" label-width="0">
          <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from '@/api/login'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const data = await login(this.loginForm)
      console.log(data)
      if (!data.success) return
      const { token, message } = data
      localStorage.setItem('token', token)
      this.$message({
        type: 'success',
        message
      })
      setTimeout(() => {
        this.$router.push('/workbench')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 25rem;
}
.form {
  padding-top: 20px;
}
.btn-box {
  text-align: center;
}
</style>
