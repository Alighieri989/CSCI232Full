<script setup>
import { ref, watch } from 'vue'
import Book from './models/Book'
import Form from './components/Form.vue'
import Preview from './components/Preview.vue'

const myBook = ref(new Book())
const isValidated = ref(false)

const handleValidate = () => {
  isValidated.value = true
}

watch(myBook, () => {
  isValidated.value = false
}, { deep: true }) 
</script>

<template>
  <header>
    <h1>Library Management System</h1>
  </header>
  <main class="container">
    <Form v-model="myBook" @validate="handleValidate" />
    <Preview v-model="myBook" :show-checks="isValidated" />
  </main>
</template>

<style>
:root {
  font-family: 'Motiva Sans', Arial, Helvetica, sans-serif;
  background-color: #1b2838;
  color: #c7d5e0;
}

body {
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  font-size: 26px;
  max-width: 1000px;
  margin: 0 auto 20px auto;
}

.container {
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.box {
  flex: 1;
  background: #16202d;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h3 {
  font-weight: normal;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  margin-top: 0;
  border: none;
}
</style>
