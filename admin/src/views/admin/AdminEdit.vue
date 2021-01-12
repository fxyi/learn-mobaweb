<template>
  <div>
    <h1>{{id ? '更新' : '新增'}}管理员</h1>
    <el-form class="edit" ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">
          {{id ? '更新' : '新增'}}
        </el-button>
      </el-form-item>
    </el-form>  
  </div>
  
</template>

<script>
import {
  createAdmin,
  editAdminById,
  getAdminById
} from '@/api/admin'

export default {
  name: 'AdminEdit',
  props: {
    id: String
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
    }
  },
  created () {
    this.id && this.getAdmin()
  },
  methods: {
    // 获取指定 id 的管理员信息
    async getAdmin () {
      const data = await getAdminById(this.id)
      this.form = data
    },
    async onSubmit() {
      let data
      if (this.id) {
        // 修改
        data = await editAdminById(this.id, this.form)
      } else {
        // 新增
        data = await createAdmin(this.form)
      }
      console.log(data);
      this.$message({
        type: 'success',
        message: `${this.id ? '更新' : '新增'}成功`
      })
      // setTimeout(() => {
      //   this.$router.push('/admin-list')
      // }, 1000)
    }
  },
  watch: {
    $route () {
      this.form.username = '',
      this.form.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.edit {
  width: 300px;
}
</style>