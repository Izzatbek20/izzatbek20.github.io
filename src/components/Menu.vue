<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MenuIcon from '@/components/icons/Menu.vue'
import CloseIcon from '@/components/icons/Close.vue'
import RightArrowIcon from '@/components/icons/RightArrow.vue'
import RightUpArrowIcon from '@/components/icons/RightUpArrow.vue'

const menu = ref(false)

function menuOpen() {
  menu.value = true
}

function menuClose() {
  menu.value = false
}

// function handleClickOutside(event: MouseEvent) {
//   const menuSection = document.querySelector('section[aria-label="menu-section"]')
//   if (menu.value && menuSection && !menuSection.contains(event.target as Node)) {
//     menuClose()
//   }
// }

// onMounted(() => {
//   document.addEventListener('click', handleClickOutside)
// })

// onBeforeUnmount(() => {
//   document.removeEventListener('click', handleClickOutside)
// })
</script>

<template>
  <!-- Toggle button -->
  <button aria-label="Menyuni ochish" @click="menuOpen"
    class="text-white border border-white rounded-full py-1 md:py-2 px-2 md:px-4 cursor-pointer">
    <MenuIcon />
  </button>

  <!-- Menu Section -->
  <transition name="slide-fade" enter-active-class="transition ease-out duration-300"
    leave-active-class="transition ease-in duration-300" enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0" leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full">
    <section v-if="menu" aria-label="menu-section"
      class="fixed top-0 left-0 right-0 lg:right-5 h-screen overflow-hidden flex justify-end z-50">
      <div
        class="w-full my-0 md:my-4 md:w-2/3 lg:-6 lg:w-1/2 xl:w-1/3 max-w-5xl lg:my-8 bg-[#0b0d13] bg-hero-patterns-menu rounded-lg shadow-lg p-10 flex flex-col relative overflow-scroll">
        <!-- Close button -->
        <button aria-label="Menyuni yopish" @click="menuClose" class="absolute top-8 right-8 menu-button">
          <CloseIcon />
        </button>

        <!-- Logo -->
        <router-link to="/" class="mb-8">
          <span class="text-2xl font-bold text-white">IMM<span class="text-gray-400">.UZ</span></span>
        </router-link>

        <hr class="border-gray-700 mb-8" />

        <!-- Menu Items -->
        <div class="flex flex-col gap-4 md:gap-6 mb-8">
          <a href="/#men-haqimda" @click="menuClose" class="flex items-center justify-between group">
            <span class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Men haqimda</span>
            <button class="menu-button" aria-label="Men haqimda">
              <RightArrowIcon />
            </button>
          </a>

          <!-- Qolgan menyu elementlari shu tarzda -->
          <a href="/#konikmalarim" @click="menuClose" class="flex items-center justify-between">
            <span class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Ko‘nikmalarim</span>
            <button class="menu-button" aria-label="Konikmalarim">
              <RightArrowIcon />
            </button>
          </a>

          <a href="/#ishtajribam" @click="menuClose" class="flex items-center justify-between">
            <span class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Ish tajribam</span>
            <button class="menu-button" aria-label="Ish tajribam">
              <RightArrowIcon />
            </button>
          </a>

          <a href="/#loyihalarim" @click="menuClose" class="flex items-center justify-between">
            <span class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Loyihalarim</span>
            <button class="menu-button" aria-label="Loyihalarim">
              <RightArrowIcon />
            </button>
          </a>

          <a href="/#aloqa-malumotlarim" @click="menuClose" class="flex items-center justify-between">
            <span class="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Aloqa ma'lumotlarim</span>
            <button class="menu-button" aria-label="Aloqa ma'lumotlarim">
              <RightArrowIcon />
            </button>
          </a>
        </div>
        <hr class="border-gray-700 mb-6" />

        <!-- Socials -->
        <div>
          <span class="text-gray-400 font-semibold">Meni kuzatib boring.</span>
          <div class="flex gap-6 mt-2 flex-wrap">
            <a href="https://github.com/Izzatbek20" target="_blank" rel="noopener noreferrer"
              class="text-white text-xs md:text-sm hover:underline flex items-center gap-1">GITHUB
              <RightUpArrowIcon />
            </a>
            <a href="https://linkedin.com/in/izzatbek20" target="_blank" rel="noopener noreferrer"
              class="text-white text-xs md:text-sm hover:underline flex items-center gap-1">LINKEDIN
              <RightUpArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>
