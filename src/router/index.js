import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('@/components/index.vue') },
      { path: '/Index2', component: () => import('@/components/index2.vue') },
      { path: '/Index3', component: () => import('@/components/index3.vue') }
    ]
  })
}
