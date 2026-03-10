import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/login', component: LoginView },
  {
    path: '/home',
    component: HomeView,
    beforeEnter: () => {
      const currentUser = localStorage.getItem('currentUser') ?? ''
      if (currentUser.trim().length > 0) {
        return true
      }

      return '/'
    },
  },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
