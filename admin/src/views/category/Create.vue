<template>
  <div>
    <h1>{{id ? '更新' : '新增'}}分类</h1>
    <el-form class="create" ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="上级分类">
        <el-select v-model="form.parent" :clearable="true">
          <el-option
            v-for="item in parentOptions"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="form.name"></el-input>
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
export default {
  name: 'Create',
  props: {
    id: String
  },
  data() {
    return {
      form: {
        name: '',
        parent: ''
      },
      parentOptions: []
    }
  },
  created () {
    this.getParentOptions()
    this.id && this.getItem()
  },
  methods: {
    // 获取指定分类的信息
    async getItem (id) {
      const res = await this.$http.get(`/rest/categories/${this.id}`)
      this.form = res.data
    },
    // 获取列表 获取父类可选项
    async getParentOptions (id) {
      const res = await this.$http.get('/rest/categories')
      this.parentOptions = res.data
    },
    async onSubmit() {
      console.log('submit!')
      let res
      if (this.id) {
        // 修改分类
        res = await this.$http.put(`/rest/categories/${this.id}`, this.form)
      } else {
        // 新建分类
        res = await this.$http.post('/rest/categories', this.form)
      }
      const data = res.data
      console.log(data);
      this.$message({
        type: 'success',
        message: `${this.id ? '更新' : '新增'}成功`
      })
      setTimeout(() => {
        this.$router.push('/category/list')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.create{
  width: 300px;
}
</style>