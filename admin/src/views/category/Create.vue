<template>
  <div class="create">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="分类名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createCategory } from '@/http/api'
export default {
  name: 'CategoryCreate',
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      createCategory(this.form.name).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-form {
  width: 500px;
}
</style>