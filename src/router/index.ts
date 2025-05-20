import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EmuView from '@/views/projects/EmuView.vue'
import IdealView from '@/views/projects/IdealView.vue'
import PcccrmView from '@/views/projects/PcccrmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/emu',
      name: 'emu',
      component: EmuView,
    },
    {
      path: '/ideal',
      name: 'ideal',
      component: IdealView,
    },
    {
      path: '/pcccrm',
      name: 'pcccrm',
      component: PcccrmView,
    },
  ],
})

export default router
