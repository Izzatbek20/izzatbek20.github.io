<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
<template>
  <section class="flex flex-col justify-center h-lvh line-bottom">

    <!-- Navbar -->
    <Navbar />
    <!-- /Navbar -->

    <div class="basis-10/12 container-imm flex flex-col justify-center">
      <div>
        <h4 class="text-md md:text-xl font-bold text-white">Salom! Men Izzatbekman.</h4>
        <h1
          class="text-6xl leading-12 sm:text-7xl sm:leading-16 md:text-7xl md:leading-20 lg:text-8xl lg:leading-24 2xl:text-9xl 2xl:leading-34 font-bold text-white">
          Full-stack dasturchi<template class="max-[480px]:block hidden"><br></template>man.<br>
          Maqsadim <span class="text-gray-500">soddalik va ishonch<template
              class="max-[480px]:block hidden"><br></template>lilik</span>
        </h1>
      </div>
    </div>

    <!-- Down arrow icon -->
    <div class="basis-1/12 mt-6 mx-auto animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
