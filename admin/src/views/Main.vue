<template>
  <el-container class="main">
    <el-header>MOBA后台管理</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">内容管理</template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/category/create">新建分类</el-menu-item>
              <el-menu-item index="/category/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">物品</template>
              <el-menu-item index="/item/create">新建物品</el-menu-item>
              <el-menu-item index="/item/list">物品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Main',
}
</script>

<style>
.el-header {
  background-color: #ddd;
  display: flex;
  align-items: center;
}
.el-main {
  padding: 50px !important;
}
</style>

<style lang="less" scoped>
.main {
  min-height: 100vh;
}
</style>


