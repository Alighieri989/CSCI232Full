import chatMessages from '../data/chatMessages.js'
import Message from '../models/Message'
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', () => {
  const currentUser = ref(localStorage.getItem('currentUser') || '')
  const messages = reactive([...chatMessages])

  function setCurrentUser(username) {
    currentUser.value = username
    localStorage.setItem('currentUser', username)
  }

  function redactMessage(index) {
    if (currentUser.value === messages[index].userName) {
      messages[index].showMessage = !messages[index].showMessage
    }
  }

  function addMessage(message) {
    if (message instanceof Message) {
      messages.push(message)
    }
  }
  return { currentUser, messages, setCurrentUser, redactMessage, addMessage }
})
