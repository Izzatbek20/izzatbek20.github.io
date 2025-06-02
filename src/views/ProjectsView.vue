<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import FooterComponent from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

import { useSeoMeta, useHead } from '@vueuse/head';
import { useProjectStore } from '@/stores/projects';

const pageTitle = 'Izzatbek – Full-stack Dasturchi | Portfolio';
const pageDescription = '4 yillik tajribaga ega full-stack mutaxassisi. REST API, ma’lumotlar bazasi, va Tailwind CSS yordamida ishonchli web yechimlar yarataman.';
const pageKeyword = 'Laravel dasturchi, PHP backend developer, REST API yaratish, Full-stack dasturchi, Tailwind CSS, Vue.js frontend, MySQL mutaxassisi, FastAPI Python, backend xizmatlar, web dasturchi, Telegram bot ishlab chiqish, ma’lumotlar bazasi loyihalash, dasturchi, Izzatbek';
const canonical = window.location.href;
const LogoImage = `${window.location.origin}/logo.webp`; // Tashqi URL bo'lishi kerak
const domain = window.location.origin;

const useProjectStoreData = useProjectStore();

const tag = ref('veb-sayt'); // Default tag

const projects = computed(() => {
  return useProjectStoreData.data.filter(project => project.tag === tag.value);
});

const capitalize = computed(() => {
  return (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
});

const changeTab = (newTab: 'veb-sayt' | 'telegram-bot') => {
  activeTab.value.name = newTab;
  tag.value = newTab === 'veb-sayt' ? 'veb-sayt' : 'telegram-bot';
};

interface Tabs {
  name: 'veb-sayt' | 'telegram-bot';
}

// Tab holatini boshqarish uchun ref
const activeTab = ref<Tabs>({ name: 'veb-sayt' });

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// SEO meta teglar
useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeyword,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: LogoImage,
  ogUrl: canonical,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: LogoImage,
});

// Canonical link va structured data
useHead({
  link: [
    { rel: 'canonical', href: canonical }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": pageTitle,
        "image": [LogoImage],
        "datePublished": "2024-06-14T08:00:00+00:00",
        "dateModified": "2024-06-14T08:00:00+00:00",
        "author": {
          "@type": "Person",
          "name": domain
        },
        "publisher": {
          "@type": "Organization",
          "name": domain,
          "logo": {
            "@type": "ImageObject",
            "url": LogoImage
          }
        },
        "description": pageDescription
      })
    }
  ]
});
</script>

<template>

  <!-- Navbar -->
  <Navbar />
  <!-- /Navbar -->

  <section class="text-white container-imm py-14 md:py-20 flex flex-col justify-center gap-5">

    <div class="text-center">
      <h2 class="font-bold text-5xl">
        <span class="text-gray-500 font-light ">Loy</span>ihalarim
      </h2>
    </div>

    <Transition name="fade" mode="out-in">
      <div class="w-2/5 mx-auto mt-20">
        <div class="relative right-0">
          <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-[#0b0d13] bg-tab">
            <li class="flex-1 z-30 text-center">
              <a class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white"
                :class="{ 'bg-black': activeTab.name === 'veb-sayt', 'bg-inherit': activeTab.name !== 'veb-sayt' }"
                @click="changeTab('veb-sayt')" aria-selected="true">
                <span class="ml-1 font-bold veb-sayt-gray-300">Vebsayt</span>
              </a>
            </li>
            <li class="flex-1 z-30 text-center">
              <a class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-white"
                :class="{ 'bg-black': activeTab.name === 'telegram-bot', 'bg-inherit': activeTab.name !== 'telegram-bot' }"
                @click="changeTab('telegram-bot')" aria-selected="false">
                <span class="ml-1 font-bold text-gray-300">Telegram bot</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>

    <!-- Loyihalarim -->
    <div class="text-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">


      <div v-for="(project, i) in projects" :key="i"
        class="relative flex flex-col justify-between bg-[#0b0d13] shadow-sm border border-[#0b0d13] rounded-lg">
        <div>
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img :src="project.images[0]" :alt="project.slug" />
          </div>
          <div class="p-4">
            <h3 class="text-sm font-bold">{{ capitalize(project.slug) }}</h3>
            <h2 class="text-2xl md:text-3xl lg:text-4xl" v-html="project.titleHtml"></h2>
          </div>
        </div>
        <div class="px-4 pb-4 pt-0 mt-2">
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

  </section>


  <!-- Footer -->
  <FooterComponent />
  <!-- /Footer -->

</template>
