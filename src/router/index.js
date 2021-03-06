import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/calculator.vue')
  },

  {
    path: '/agent',
    name: 'agent',
    component: () => import('@/views/agent.vue')
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
