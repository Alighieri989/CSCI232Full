<script setup>
import { computed, ref } from 'vue'
import Message from '../models/Message'
import { useMessageStore } from '../stores/messageStore'

const store = useMessageStore()
const currentUser = computed(() => store.currentUser)
const messages = computed(() => store.messages)
const messageInput = ref('')
const otherUser = computed(() => {
  const oneMessage = messages.value.find((m) => m.userName !== currentUser.value)
  return oneMessage ? oneMessage.userName : 'Unknown'
})
const upperOtherUser = computed(() => {
  if (!otherUser.value) return ''
  return otherUser.value.toUpperCase()
})

const sendMessage = () => {
  const text = messageInput.value.trim()
  if (!text || !currentUser.value) {
    return
  }

  const myData = messages.value.find((m) => m.userName === currentUser.value)
  const firstName = myData?.firstName || currentUser.value
  const lastName = myData?.lastName || ''

  store.addMessage(new Message(currentUser.value, firstName, lastName, text, true))
  messageInput.value = ''
}
</script>

<template>
  <div class="messenger-page">
    <header class="header-row">
      <div>
        <p class="small-label">SECURE CHANNEL</p>
        <h1>{{ upperOtherUser }}</h1>
      </div>
      <router-link to="/" class="logout-link">Logout</router-link>
    </header>

    <div class="chat-box">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message-row', message.userName === currentUser ? 'own' : 'other']"
      >
        <div class="bubble">
          <small class="sender-name">{{ message.firstName }} {{ message.lastName }}</small>
          <p class="text" v-if="message.showMessage">{{ message.message }}</p>
          <p class="text redacted-text" v-else>[Message redacted]</p>
          <button
            v-if="message.userName === currentUser"
            @click="store.redactMessage(index)"
            class="redact-link"
          >
            {{ message.showMessage ? 'Redact' : 'Unredact' }}
          </button>
        </div>
      </div>
    </div>

    <form class="input-row" @submit.prevent="sendMessage">
      <input
        v-model="messageInput"
        type="text"
        class="message-input"
        placeholder="Type a message"
      />
      <button type="submit" class="send-button">Send</button>
    </form>
  </div>
</template>

<style scoped>
.messenger-page {
  width: 95%;
  max-width: 920px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.small-label {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.06em;
  font-size: 0.72rem;
}

h1 {
  margin: 6px 0 0;
}

.logout-link {
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.3);
}

.chat-box {
  flex-grow: 1;
  overflow-y: auto;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.message-input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.45);
  color: var(--text);
}

.send-button {
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(255, 180, 90, 0.22);
  color: var(--text);
  cursor: pointer;
}

.message-row {
  display: flex;
  width: 100%;
}

.bubble {
  max-width: 70%;
  padding: 10px 15px 26px;
  border-radius: 6px;
  border: 1px solid transparent;
  position: relative;
}

.other {
  justify-content: flex-start;
}
.other .bubble {
  background: rgba(20, 20, 20, 0.9);
  border-color: rgba(255, 159, 67, 0.28);
  color: #f6e6d2;
}

.own {
  justify-content: flex-end;
}
.own .bubble {
  background: rgba(43, 29, 19, 0.92);
  border-color: rgba(255, 159, 67, 0.44);
  color: #ffe5c8;
}

.sender-name {
  display: block;
  font-size: 0.7rem;
  margin-bottom: 4px;
  color: var(--muted);
}

.text {
  margin: 0;
}

.redacted-text {
  font-style: italic;
  opacity: 0.6;
}

.redact-link {
  padding: 0;
  font-size: 0.75rem;
  border: none;
  background: transparent;
  color: inherit;
  opacity: 0.6;
  position: absolute;
  right: 10px;
  bottom: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.redact-link:hover {
  opacity: 1;
}

.own .redact-link {
  color: #ffd9ae;
}

.other .redact-link {
  color: #e2b178;
}
</style>
