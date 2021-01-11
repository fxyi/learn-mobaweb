<template>
  <div>
    <h1>{{id ? '更新' : '新增'}}物品</h1>
    <el-form class="create" ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="物品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.icon" :src="form.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
        icon: ''
      }
    }
  },
  created () {
  },
  methods: {
    async onSubmit() {
      console.log('submit!')
      let res
      if (this.id) {
        // 修改分类
        res = await this.$http.put(`/rest/items/${this.id}`, this.form)
      } else {
        // 新建分类
        res = await this.$http.post('/rest/items', this.form)
      }
      const data = res.data
      console.log(data);
      this.$message({
        type: 'success',
        message: `${this.id ? '更新' : '新增'}成功`
      })
      setTimeout(() => {
        this.$router.push('/item/list')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.create {
  width: 300px;
}
/deep/.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }  
}
</style>