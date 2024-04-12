import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'form/filter',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: config.concat(routes)
})

export default router
