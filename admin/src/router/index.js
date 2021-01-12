import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/workbench',
    redirect: '/workbench/index',
    name: 'workbench',
    component: Main,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'category-create',
        name: 'CategoryCreate',
        component: () => import('../views/category/Create.vue')
      },
      {
        path: 'category-list',
        name: 'CategoryList',
        component: () => import('../views/category/List.vue')
      },
      {
        path: 'category-edit/:id',
        name: 'CategoryEdit',
        props: true,
        component: () => import('../views/category/Create.vue')
      },
      {
        path: 'item-create',
        name: 'ItemCreate',
        component: () => import('../views/item/Create.vue')
      },
      {
        path: 'item-list',
        name: 'ItemList',
        component: () => import('../views/item/List.vue')
      },
      {
        path: 'item-edit/:id',
        name: 'ItemEdit',
        props: true,
        component: () => import('../views/item/Create.vue')
      },
      {
        path: 'admin-create',
        name: 'AdminEdit',
        props: true,
        component: () => import('../views/admin/AdminEdit.vue')
      },
      {
        path: 'admin-list',
        name: 'AdminList',
        component: () => import('../views/admin/AdminList.vue')
      },
      {
        path: 'admin-edit/:id',
        name: 'AdminEdit',
        props: true,
        component: () => import('../views/admin/AdminEdit.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
