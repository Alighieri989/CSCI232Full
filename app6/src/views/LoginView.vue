<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const store = useAuthStore()
const username = ref('')
const password = ref('')
const showPassword = ref(false)

const usernameRules = computed(() => {
  const value = username.value
  const longEnough = value.length >= 5
  const startsWithLetter = /^[A-Za-z]/.test(value)
  const lettersAndNumbersOnly = value.length > 0 && /^[A-Za-z0-9]*$/.test(value)

  return [
    {
      label: 'Must have at least 5 characters',
      isValid: longEnough,
    },
    {
      label: 'Must begin with a letter',
      isValid: startsWithLetter,
    },
    {
      label: 'Can only contain letters and numbers',
      isValid: lettersAndNumbersOnly,
    },
  ]
})

const passwordRules = computed(() => {
  const value = password.value
  const longEnough = value.length >= 8
  const hasUppercase = /[A-Z]/.test(value)
  const hasLowercase = /[a-z]/.test(value)
  const hasNumber = /[0-9]/.test(value)
  const hasSpecial = /[^A-Za-z0-9]/.test(value)

  return [
    {
      label: 'Must have at least 8 characters',
      isValid: longEnough,
    },
    {
      label: 'Must have 1 uppercase character',
      isValid: hasUppercase,
    },
    {
      label: 'Must have 1 lowercase character',
      isValid: hasLowercase,
    },
    {
      label: 'Must have 1 number',
      isValid: hasNumber,
    },
    {
      label: 'Must have 1 special character',
      isValid: hasSpecial,
    },
  ]
})

const canSubmit = computed(() => {
  const allRules = [...usernameRules.value, ...passwordRules.value]

  for (const rule of allRules) {
    if (!rule.isValid) {
      return false
    }
  }

  return true
})

const showUsernameRules = computed(() => {
  for (const rule of usernameRules.value) {
    if (!rule.isValid) {
      return true
    }
  }

  return false
})

const showPasswordRules = computed(() => {
  for (const rule of passwordRules.value) {
    if (!rule.isValid) {
      return true
    }
  }

  return false
})

function submitLogin(): void {
  if (!canSubmit.value) {
    return
  }

  const cleanUsername = username.value.trim()
  store.login(cleanUsername)
  router.push('/home')
}
</script>

<template>
  <section class="login-view">
    <div class="login-content">
      <form @submit.prevent="submitLogin" class="login-form">
        <h1>Let's Go!</h1>
        <h3>Enter your credentials</h3>

        <div>
          <div class="form-item">
            <label for="usernameInput">Username</label>
            <input id="usernameInput" v-model="username" type="text" />
          </div>

          <div class="form-item">
            <label for="passwordInput">Password</label>
            <label class="switch align-right">
              <input v-model="showPassword" type="checkbox" />
              <span class="slider"></span>
            </label>
            <input
              id="passwordInput"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
            />
          </div>
        </div>

        <button type="submit" :disabled="!canSubmit">Log in</button>
      </form>

      <div class="error-messages" :class="{ 'all-satisfied': canSubmit }">
        <div v-if="showUsernameRules">
          <span>Username</span>
          <ul>
            <li v-for="rule in usernameRules" v-show="!rule.isValid" :key="rule.label">
              <span class="rule-text">{{ rule.label }}</span>
            </li>
          </ul>
        </div>

        <div v-if="showPasswordRules">
          <span>Password</span>
          <ul>
            <li v-for="rule in passwordRules" v-show="!rule.isValid" :key="rule.label">
              <span class="rule-text">{{ rule.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.login-view {
  box-sizing: border-box;
  padding: 20px;
  background-color: #efeded;
  opacity: 97%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.login-content {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.login-form {
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 20px;
  font-size: small;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
}

.login-form h1 {
  margin: 0;
}

.login-form h3 {
  text-align: center;
}

.form-item {
  box-sizing: border-box;
  width: 160px;
  margin-bottom: 5px;
}

.form-item > label {
  display: inline-block;
  margin-bottom: 5px;
}

.form-item > input {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
}

.align-right {
  float: right;
}

.error-messages {
  align-self: center;
  color: #c70d0d;
  font-size: 12px;
  width: 200px;
  transition: width 1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.error-messages.all-satisfied {
  width: 0;
  justify-content: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 17px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 13px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: #fff;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translate(13px);
}

ul {
  padding-left: 15px;
  margin: 3px 0 10px;
}

.error-messages span {
  display: inline-block;
  min-width: max-content;
  white-space: nowrap;
}

.error-messages .rule-text {
  display: inline-block;
  min-width: max-content;
  white-space: nowrap;
}

.login-form > button {
  font-size: medium;
  color: #f8f8f8;
  background-color: #000;
  border-radius: 999px;
  padding: 5px 10px;
  border: 0;
}

.login-form > button:active {
  transform: scale(97%);
}

.login-form > button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
