<script setup lang="ts">
import Menu from '@/components/Menu.vue';
</script>
<template>
  <nav class="basis-1/12">
    <div class="container-imm h-16 text-white  flex items-center justify-between">
      <router-link to="/" class="text-white text-lg font-bold">
        IMM20<span class="text-gray-500">.UZ</span>
      </router-link>

      <!-- Menu -->
      <Menu />
      <!-- /Menu -->

    </div>
  </nav>
</template>
