<script setup>
import { ref } from 'vue';
import PersonGuess from './components/PersonGuess.vue';

const images = [
  'dan1.jpg',
  'dan2.jpg',
  'dan3.jpg',
  'dan4.jpg',
  'dan5.jpg',
  'dan6.jpg',
  'dan7.jpg'
];

const currentSlots = ref(['slot-1', 'slot-2', 'slot-3', 'slot-4', 'slot-5', 'slot-6', 'slot-7']);

const scramble = () => {
  const slots = ['slot-1', 'slot-2', 'slot-3', 'slot-4', 'slot-5', 'slot-6', 'slot-7'];
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }
  currentSlots.value = slots;
};

const identify = () => {
  currentSlots.value = ['slot-1', 'slot-2', 'slot-3', 'slot-4', 'slot-5', 'slot-6', 'slot-7'];
};
</script>

<template>
  <div class="controls">
    <button @click="scramble">Scramble</button>
    <button @click="identify">Identify</button>
  </div>

  <PersonGuess>
    <template v-for="(img, index) in images" :key="index" #[currentSlots[index]]>
      <img :src="img" alt="Person Segment" />
    </template>
  </PersonGuess>
</template>

<style>
body { margin: 0; overflow: hidden; }
.controls {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #222;
}
button {
  padding: 10px 20px;
  cursor: pointer;
}
img { width: 100%; height: 100%; object-fit: cover; }
</style>