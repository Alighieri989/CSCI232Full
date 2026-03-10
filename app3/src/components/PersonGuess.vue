<template>
  <div class="grid-container">
    <div class="segment seg-1"><slot name="slot-1"></slot></div>
    <div class="segment seg-2"><slot name="slot-2"></slot></div>
    <div class="segment seg-3"><slot name="slot-3"></slot></div>
    <div class="segment seg-4"><slot name="slot-4"></slot></div>
    <div class="segment seg-5"><slot name="slot-5"></slot></div>
    <div class="segment seg-6"><slot name="slot-6"></slot></div>
    <div class="segment seg-7"><slot name="slot-7"></slot></div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 90vh;
  width: 100vw;
  gap: 2px;
  background-color: #333;
}

.segment {
  background-color: #eee;
  display: flex;
  overflow: hidden;
}

.seg-1 { grid-area: 1 / 1 / 3 / 3; }
.seg-2 { grid-area: 1 / 3 / 2 / 6; }
.seg-3 { grid-area: 1 / 6 / 4 / 8; }
.seg-4 { grid-area: 2 / 3 / 5 / 6; }
.seg-5 { grid-area: 3 / 1 / 8 / 3; }
.seg-6 { grid-area: 5 / 3 / 8 / 6; }
.seg-7 { grid-area: 4 / 6 / 8 / 8; }

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>