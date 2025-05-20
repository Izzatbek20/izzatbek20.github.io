<script setup lang="ts">
import { ref, markRaw } from 'vue'
import type { SimpleIcon } from 'simple-icons';

import FooterComponent from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectSectionTitle from '@/components/project/ProjectSectionTitle.vue'

import RightUpArrow from '@/components/icons/RightUpArrow.vue'
import Css from '@/components/icons/skills/Css.vue';
import Html5 from '@/components/icons/skills/Html5.vue';
import Javascript from '@/components/icons/skills/Javascript.vue';
import Mysql from '@/components/icons/skills/Mysql.vue';
import Php from '@/components/icons/skills/Php.vue';
import Yii2 from '@/components/icons/skills/Yii2.vue';
import Jquery from '@/components/icons/skills/Jquery.vue';

const title = `
  Kostyum-shim fabrikasi uchun buyurtma boshqaruv tizimi
`

const description = `
  Bu loyiha kostyum-shim tikuvchi korxona ish jarayonlarini avtomatlashtirish maqsadida ishlab chiqilgan. Tizim mijozdan buyurtma qabul qilishdan tortib, uni tikib tayyor holda qaytarishgacha bo‘lgan barcha bosqichlarni
  qamrab oladi. Endilikda har bir buyurtma raqamli tarzda ro‘yxatga olinadi, o‘lchovlar, fason va material tanlovi
  avtomatik tarzdatizimda saqlanadi va kuzatib boriladi.
`

const features = ref([
  'Mijozlardan buyurtma qabul qilish, fason va material tanlovlarini saqlab borish',
  'Buyurtma asosida avtomatik tikuv bo‘limiga topshiriq yuborish',
  'Tayyor mahsulotni kuryer orqali sotuv bo‘limiga qaytarish jarayonini kuzatish',
  'Materiallar hisobini yuritish, sarflangan xomashyo statistikasi',
  'Har bir buyurtmaning umumiy qiymatini hisoblab borish',
  'Statuslar orqali buyurtmaning har bir bosqichini real vaqtda nazorat qilish',
])

const technologies = ref([
  { name: "Html5", icon: markRaw(Html5), url: "https://html.spec.whatwg.org" },
  { name: "Css", icon: markRaw(Css), url: "https://www.w3.org/Style/CSS" },
  { name: "Javascript", icon: markRaw(Javascript), url: "https://tc39.es/ecma262" },
  { name: "Jquery", icon: markRaw(Jquery), url: "https://jquery.com" },
  { name: "PHP", icon: markRaw(Php), url: "https://www.php.net" },
  { name: "Yii2", icon: markRaw(Yii2), url: "https://www.yiiframework.com" },
  { name: "Mysql", icon: markRaw(Mysql), url: "https://www.mysql.com" },
])

const roles = ref({
  'description': `Men ushbu loyihani ustozim bilan birga ishlab chiqdik. Arxitekturani rejalashtirishda boshlab,
                    foydalanuvchi
                    interfeyslaridan
                    tortib barcha funksiyalarni backendda amalga oshirdik. Bundan tashqari, buyurtma holatlarini
                    kuzatish, material hisobini
                    yuritish va kuryer harakatlarini nazorat qilish bo‘limlarini hamintegratsiya qildik.`,
  'items': []
})

const status = 'Tizim hozirda ishlatilmoqda.'

const images = ref([
  '/project-images/ideal/3.webp',
  '/project-images/ideal/2.webp',
  '/project-images/ideal/1.webp',
  '/project-images/ideal/4.webp',
  '/project-images/ideal/5.webp',
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