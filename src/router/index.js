import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config'
import layout from "@/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    redirect: 'form/filter',
    children: [
      {
        path: 'code',
        component: () => import(/* webpackChunkName: "code */  '@/views/code'),
        name: 'code',
        meta: { title: 'Code' }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: config.concat(routes)
})

export default router
