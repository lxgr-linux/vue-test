import { createRouter, createWebHashHistory } from 'vue-router'
import TestPage from '../views/test.vue'
import Landing from '../views/landing.vue'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth'}
    }
  },
})

export default router
