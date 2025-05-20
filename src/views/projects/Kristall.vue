<script setup lang="ts">
import { ref, markRaw } from 'vue'
import type { SimpleIcon } from 'simple-icons';

import FooterComponent from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectSectionTitle from '@/components/project/ProjectSectionTitle.vue'
import RightUpArrow from '@/components/icons/RightUpArrow.vue'
import Css from '@/components/icons/skills/Css.vue';
import FastApi from '@/components/icons/skills/FastApi.vue';
import Html5 from '@/components/icons/skills/Html5.vue';
import Javascript from '@/components/icons/skills/Javascript.vue';
import Mysql from '@/components/icons/skills/Mysql.vue';
import Python from '@/components/icons/skills/Python.vue';
import Tailwind from '@/components/icons/skills/Tailwind.vue';
import VueJs from '@/components/icons/skills/VueJs.vue';

const title = `
  Kristall — Gilam yuvish landing sahifasi
`

const description = `
  Kristall gilam yuvish korxonasi uchun ishlab chiqilgan. Sahifa foydalanuvchilarga qulay interfeys orqali xizmatlar haqida ma'lumot olish imkoniyatini taqdim etadi.
`

const features = ref([
  'Buyurtma yuborish: foydalanuvchilar o‘z buyurtmalarini onlayn tarzda yuborishlari mumkin.',
  'Buyurtma holatini kuzatish: har bir buyurtmaning holatini real vaqtda kuzatish imkoniyati.',
  'Xizmat hududlari: xizmat ko‘rsatiladigan hududlar haqida batafsil maʼlumot.'
])

const technologies = ref([
  { name: "Python", icon: markRaw(Python), url: "https://www.python.org" },
  { name: "FastApi", icon: markRaw(FastApi), url: "https://fastapi.tiangolo.com" },
  { name: "Html5", icon: markRaw(Html5), url: "https://html.spec.whatwg.org" },
  { name: "Css", icon: markRaw(Css), url: "https://www.w3.org/Style/CSS" },
  { name: "Javascript", icon: markRaw(Javascript), url: "https://tc39.es/ecma262" },
  { name: "Tailwind", icon: markRaw(Tailwind), url: "https://tailwindcss.com" },
  { name: "VueJs", icon: markRaw(VueJs), url: "https://vuejs.org" },
])
const roles = ref({
  'description': `Landing sahifani ishlab chiqish jarayon sahifani mobil qurilmalarga moslashtirdim, shunda foydalanuvchilar har qanday qurilmadan foydalanishlari mumkin.`,
  'items': [
  ]
})

const status = 'Sayt hozirda ishlatilmoqda.'

const images = ref([
  '/project-images/kristall/1.png'
])
</script>
<template>

  <!-- Navbar -->
  <Navbar />
  <!-- /Navbar -->

  <section id="men-haqimda" class="text-white container-imm py-14 md:py-20 flex flex-col justify-center gap-5">
    <ProjectSectionTitle :title=title :content="description" />

    <ProjectSectionTitle title="Asosiy funksiyalar">
      <ul class="list-disc list-outside max-sm:text-sm ml-5">
        <li v-for="(feature, idx) in features" :key="idx">{{ feature }}</li>
      </ul>
    </ProjectSectionTitle>

    <ProjectSectionTitle title="Texnologiyalar">
      <div class="flex justify-start items-center flex-wrap gap-5">
        <a v-for="(tech, idx) in technologies" :key="idx" class="skills-button" :href="tech.url" target="_blank"
          rel="noopener noreferrer">
          <component v-if="tech.icon" :is="tech.icon" />
          {{ tech.name }}
          <RightUpArrow />
        </a>
      </div>
    </ProjectSectionTitle>

    <ProjectSectionTitle title="Mening rolim">
      <p class="max-sm:text-sm">{{ roles.description }}</p>
      <ul class="list-disc list-outside max-sm:text-sm ml-5">
        <li v-for="(role, idx) in roles.items" :key="idx">{{ role }}</li>
      </ul>
    </ProjectSectionTitle>

    <div class="max-sm:text-sm">
      <h3 class="mb-2">🌐 Holati:</h3>
      <p><strong>{{ status }}</strong></p>
    </div>

    <div class="mt-10">
      <h2 class="text-5xl font-bold mb-5">Rasimlar</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div v-for="(image, idx) in images" :key="idx">
          <a :href="image" target="_blank">
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="image" alt="Emu" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <FooterComponent />
  <!-- /Footer -->

</template>

<style scoped>
/* Optional scoped styles */
</style>