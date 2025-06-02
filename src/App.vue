<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

window.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase()))
    ) {
      e.preventDefault();
    }
  });
</script>

<template>
  <div class="bg-black relative">
    <RouterView />
  </div>
</template>

<style scoped></style>
