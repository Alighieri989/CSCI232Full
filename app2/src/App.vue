<template>
  <div class="view">
    <Quadrant>
      <h1 class="exile-regular">{{ topText }}</h1>
    </Quadrant>

    <Quadrant customClass="top-right">
    </Quadrant>

    <Quadrant>
      <img src="/coat-of-arms.png" alt="Coat of Arms" />
    </Quadrant>

    <Quadrant />

    <DiamondButtons 
      :isWacky="isWacky" 
      @toggleText="toggleText" 
      @toggleWacky="isWacky = !isWacky" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Quadrant from './components/Quadrant.vue';
import DiamondButtons from './components/DiamondButtons.vue';

const topText = ref('Sigma');
const isWacky = ref(false);

const toggleText = () => {
  topText.value = topText.value === 'Sigma' ? 'Alpha' : 'Sigma';
};
</script>

<style>
body { margin: 0; background-color: white; }

@font-face {
  font-family: 'Exile';
  src: url('/fonts/Exile-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.exile-regular {
  font-family: 'Exile', sans-serif;
  font-weight: 400;
  font-size: 64px;
}

.view {
  margin: 10px;
  height: calc(100vh - 20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  position: relative;
}
</style>