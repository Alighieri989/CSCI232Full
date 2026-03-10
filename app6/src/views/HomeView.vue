<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()

const displayName = computed(() => {
  const name = store.currentUser
  if (!name) {
    return ''
  }

  let formattedName = name
  const firstCharacter = name.charAt(0)

  if (!/[A-Za-z]/.test(firstCharacter)) {
    return name
  }

  formattedName = firstCharacter.toUpperCase() + name.slice(1)
  return formattedName
})
</script>

<template>
  <section class="home-view">
    <h1 v-if="store.isLoggedIn">Welcome {{ displayName }}!</h1>
    <h1 v-else>Welcome!</h1>
    <p v-if="!store.isLoggedIn">Please log in to personalize your session.</p>

    <div class="ee hidden" aria-hidden="true">
      <span class="six">6</span>
      <span class="seven">7</span>
    </div>
  </section>
</template>

<style scoped>
.home-view {
  box-sizing: border-box;
  padding: 20px;
  background-color: #efeded;
  opacity: 97%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ee {
  display: flex;
  gap: 20px;
  font-size: 10rem;
  font-weight: 700;
  font-family:
    Arial Black,
    sans-serif;
  align-self: center;
}

.six,
.seven {
  display: inline-block;
  animation: hand-pump-36ce39c4 0.4s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.seven {
  animation-delay: 0.1s;
  color: #ff4757;
}

@keyframes hand-pump-36ce39c4 {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }

  30% {
    transform: translateY(-40px) rotate(-10deg) scale(1.1);
  }

  70% {
    transform: translateY(10px) rotate(5deg) scale(0.9);
  }
}

.hidden {
  visibility: hidden;
}
</style>
