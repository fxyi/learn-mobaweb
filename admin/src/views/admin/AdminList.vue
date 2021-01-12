<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- <el-table-column prop="_id" label="ID" width="220"></el-table-column> -->
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button @click="goEdit(scope.row._id)" size="mini" type="text">编辑</el-button>
        <el-button @click="remove(scope.row)" size="mini" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {
  getAdminList,
  removeAdminById
} from '@/api/admin'

export default {
  name: 'AdminEdit',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取管理员列表
    async getList () {
      const data = await getAdminList()
      console.log(data)
      this.tableData = data
    },
    // 删除分类
    async remove (item) {
      this.$confirm(`是否确定删除管理员：“${item.username}”`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await removeAdminById(item._id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }).catch(err => err)
    },
    goEdit (id) {
      this.$router.push(`/admin-edit/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>

</style>