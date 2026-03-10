<template>
  <div class="diamond-container">
    <button 
      class="top" 
      :class="{ wacky: isWacky }"
      @click="$emit('toggleText')"
    >A</button>
    <button 
      class="bottom" 
      :class="{ wacky: isWacky }"
      @click="$emit('toggleWacky')"
    >B</button>
  </div>
</template>

<script setup>
defineProps(['isWacky']);
</script>

<style scoped>
.diamond-container {
  width: 100px;
  height: 200px;
  position: absolute;
  top: 75%;
  left: 75%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

button {
  position: absolute;
  width: 100%;
  height: 50%;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  background: #dc143c;
  transition: box-shadow .15s ease, transform .15s ease;
}

.top { top: 0; clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }
.bottom { bottom: 0; clip-path: polygon(0% 0%, 100% 0%, 50% 100%); }

button.top:active { box-shadow: inset 0 -4px 8px #0006; transform: scale(.95); }
button.bottom:active { box-shadow: inset 0 4px 8px #0006; transform: scale(.95); }

.wacky { animation: pulse 3s ease-in-out infinite alternate; }
@keyframes pulse {
  0% { filter: hue-rotate(0deg) saturate(1.5); }
  100% { filter: hue-rotate(360deg) saturate(3); }
}
</style>