import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/loyihalar',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/loyiha/:slug',
      name: 'project',
      component: ProjectView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Agar saqlangan pozitsiya mavjud bo'lsa, uni qaytaradi.
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
      }
    }
  },
})

export default router
