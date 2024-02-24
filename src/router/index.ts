import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to) => {
  console.log(to) // 임시조치: error 'to' is defined but never used
  // 조건문 안에 넣을 것
  return { name: 'loginRoute' }
})

export default router
