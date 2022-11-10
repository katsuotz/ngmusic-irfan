import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainTemplate from "../components/layouts/MainTemplate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'blank',
      component: MainTemplate,
      children: [
        {
          path: '/search',
          name: 'Search',
          component: () => import('../views/SearchView.vue'),
        },
      ]
    },
  ]
})

export default router
