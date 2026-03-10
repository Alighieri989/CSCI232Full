import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MessengerView from '../views/MessengerView.vue'
import UserNotFoundView from '../views/UserNotFoundView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/user/:uid', component: MessengerView },
  { path: '/user-not-found', component: UserNotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router