<script setup lang="ts">
import { useProjectStore } from '@/stores/projects';
import RightUpArrow from './icons/RightUpArrow.vue';
import { computed, ref } from 'vue';

const projectStore = useProjectStore();

const capitalize = computed(() => {
  return (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
});

</script>

<template>
  <section id="loyihalarim"
    class="text-white container-imm py-14 md:py-20 flex flex-col justify-center gap-5 line-bottom">
    <div>
      <h2 class="font-bold text-xl">
        <span class="text-gray-500 font-light ">Loy</span>ihalarim
      </h2>
    </div>
    <div class="text-2xl flex flex-col justify-center gap-10 py-10">

      <div v-for="(project, i) in projectStore.favoriteProjects" :key="i" class="flex flex-col lg:flex-row gap-8"
        :class="i % 2 === 0 ? '' : 'lg:flex-row-reverse'">
        <div class="flex-1/2 flex justify-center items-center">
          <img class="size-[20rem] md:size-[33rem] rounded-2xl object-cover" :src="project.images[0]"
            :alt="project.slug" loading="lazy">
        </div>
        <div class="flex-1/2 flex flex-col justify-center gap-6">
          <h3 class="text-sm font-bold">{{ capitalize(project.slug) }}</h3>
          <p class="text-3xl leading-11 md:text-5xl md:leading-16" v-html="project.titleHtml"></p>
          <span class="text-sm font-thin">{{ capitalize(project.tag) }}</span>
          <div>
            <router-link :aria-label="project.slug" :to="`/loyiha/${project.slug}`"
              class="w-28 md:w-36 flex justify-center items-center text-sm md:text-md gap-2 mt-5 text-white py-2 md:py-2 px-3 md:px-4 border border-white rounded-full cursor-pointer">
              Batafsil

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 md:size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

    </div>

    <router-link aria-label="Ko'proq" to="loyihalar"
      class="w-28 md:w-36 mx-auto flex justify-center items-center text-sm md:text-md gap-2 mt-16 text-white py-2 md:py-2 px-3 md:px-4 border border-white rounded-full cursor-pointer">
      Ko'proq
      <RightUpArrow />
    </router-link>
  </section>
</template>
