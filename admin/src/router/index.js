import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/category'
  },
  {
    path: '/category',
    redirect: '/category/create',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'create',
        name: 'CreateCategory',
        component: () => import('../views/category/Create.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
