import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/index.vue'
const Next = () => import(/* webpackChunkName: "group-foo" */ '../pages/next.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      {
          path: '/',
          component: Index
      },
      {
          path: '/next',
          component: Next
      }
  ]
})

export default router