import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Challenge from '../views/Challenge.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Challenge
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
