import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const currentUser = ref(localStorage.getItem('currentUser') ?? '')

  const isLoggedIn = computed(() => currentUser.value.trim().length > 0)

  function login(username: string): void {
    const cleanName = username.trim()
    currentUser.value = cleanName
    localStorage.setItem('currentUser', cleanName)
  }

  function logout(): void {
    currentUser.value = ''
    localStorage.removeItem('currentUser')
  }

  return { currentUser, isLoggedIn, login, logout }
})
