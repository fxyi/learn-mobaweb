<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="_id" label="ID" width="220"></el-table-column>
    <el-table-column prop="parent.name" label="上级分类"></el-table-column>
    <el-table-column prop="name" label="分类名称"></el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button @click="goEdit(scope.row._id)" size="mini" type="text">编辑</el-button>
        <el-button @click="remove(scope.row)" size="mini" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取列表
    async getList () {
      const res = await this.$http.get('/rest/categories')
      this.tableData = res.data
    },
    // 删除分类
    async remove (item) {
      this.$confirm(`是否确定删除分类：“${item.name}”`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`/rest/categories/${item._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }).catch(err => err)
    },
    goEdit (id) {
      this.$router.push(`/category/edit/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>

</style>