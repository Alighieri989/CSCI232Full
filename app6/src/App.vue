<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

const isAboutPage = computed(() => route.path === '/about')
const isHomePage = computed(() => route.path === '/home')
const isLoginPage = computed(() => route.path === '/' || route.path === '/login')

const showTopLogin = computed(() => {
  return isAboutPage.value && !store.isLoggedIn
})

const showTopHome = computed(() => {
  if (!store.isLoggedIn) {
    return false
  }

  return isHomePage.value || isAboutPage.value || isLoginPage.value
})

const showTopLogout = computed(() => {
  if (!store.isLoggedIn) {
    return false
  }

  return isHomePage.value || isAboutPage.value
})

function logout(): void {
  store.logout()
  router.push('/login')
}
</script>

<template>
  <div class="app">
    <nav class="top-bar">
      <div>
        <RouterLink v-show="showTopHome" to="/home" class="link">Home</RouterLink>
        <RouterLink v-show="!showTopHome" to="/home" class="link hidden">Home</RouterLink>
      </div>

      <div>
        <RouterLink v-show="showTopLogin" to="/login" class="link">Log in</RouterLink>
        <RouterLink v-show="showTopLogout" to="/login" class="link" @click.prevent="logout"
          ><span>Log out</span></RouterLink
        >
      </div>
    </nav>

    <RouterView class="view" />

    <footer class="footer-view">
      <RouterLink
        to="/about"
        class="link"
        active-class="router-link-active"
        exact-active-class="router-link-active"
        >About</RouterLink
      >
    </footer>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.view {
  position: relative;
  flex: 1;
  display: flex;
  isolation: isolate;
}

.view:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-image: url('/starfish.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: grayscale(100%);
  opacity: 0.05;
  z-index: -1;
  pointer-events: none;
}

.view > * {
  position: relative;
  z-index: 1;
}

nav.top-bar {
  background-color: #dcdcdc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.footer-view {
  background-color: #dcdcdc;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.footer-view .link {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  color: #000;
}

.footer-view .link.router-link-active {
  color: #ffffff;
}

.link {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  color: #000;
}

.hidden {
  visibility: hidden;
}

.router-link-active {
  background-color: gray;
  color: #ffffff;
  transition:
    background-color 0.25s ease-in,
    color 0s ease-in 0.25s;
}
</style>
