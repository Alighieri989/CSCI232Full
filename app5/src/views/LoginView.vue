<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '../stores/messageStore'

const store = useMessageStore()
const router = useRouter()
const username = ref('')

const login = () => {
  if (username.value) {
    const found = store.messages.some((m) => m.userName === username.value)
    if (found) {
      store.setCurrentUser(username.value)
      router.push(`/user/${username.value}`)
    } else {
      router.push('/user-not-found')
    }
  }
}
</script>

<template>
  <div class="login-page">
    <section class="login-card">
      <p class="small-label">N7 COMM TERMINAL</p>
      <h1>Login</h1>

      <nav class="login-form">
        <label for="userName">Username</label>
        <input id="userName" v-model="username" placeholder="Enter username" />
        <button @click="login">Connect</button>
      </nav>
    </section>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-card {
  width: 90%;
  max-width: 460px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.small-label {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

h1 {
  margin: 8px 0 16px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  color: var(--muted);
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.35);
  color: var(--text);
}

input:focus {
  outline: none;
  border-color: var(--accent);
}

button {
  margin-top: 4px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(255, 182, 111, 0.2);
  color: var(--text);
  cursor: pointer;
}

button:hover {
  border-color: var(--accent);
}
</style>
