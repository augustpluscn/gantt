import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gantt',
    name: 'Gantt',
    component: () => import('../views/Gantt.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
