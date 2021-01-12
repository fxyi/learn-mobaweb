<template>
  <el-container class="main">
    <el-header>MOBA后台管理</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="openIndex" unique-opened :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>内容管理</template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="category-create">新建分类</el-menu-item>
              <el-menu-item index="category-list">分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">物品</template>
              <el-menu-item index="item-create">新建物品</el-menu-item>
              <el-menu-item index="item-list">物品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="admin-create">新建管理员</el-menu-item>
              <el-menu-item index="admin-list">管理员列表</el-menu-item>
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
  data () {
    return {
      openIndex: ['2']
    }
  }
}
</script>

<style>
.el-header {
  background-color: rgb(238, 241, 246);
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


