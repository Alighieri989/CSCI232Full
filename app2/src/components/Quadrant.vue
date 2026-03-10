<template>
  <section :class="['quadrant', customClass]">
    <slot></slot>
  </section>
</template>

<script setup>
defineProps(['customClass']);

defineOptions({ name: 'AppQuadrant' });
</script>

<style scoped>
section {
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.top-right {
  border-top-right-radius: 100%;
}

:slotted(img) {
  width: 300px;
  height: 360px;
  animation: spinAndRest 15s infinite ease-in-out;
}

@keyframes spinAndRest {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
}
</style>