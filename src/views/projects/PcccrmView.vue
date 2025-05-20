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
  Gilam yuvish korxonasi uchun avtomatlashtirilgan boshqaruv tizimi
`

const description = `
  Ushbu loyiha gilam yuvish xizmatini ko‘rsatuvchi yirik korxonalar uchun ishlab chiqilgan bo‘lib, mijozdan buyurtma qabul qilishdan tortib, mahsulotni tayyor holda yetkazib berishgacha bo‘lgan butun jarayonni
  avtomatlashtirishga mo‘ljallangan.
`

const features = ref([
  'Mijozdan buyurtma qabul qilish, tizimga avtomatik ro‘yxatga olish',
  'Buyurtmani transport bo‘limiga yuborish va yetkazishni boshqarish',
  'Yuvish va qadoqlash bosqichlarini nazorat qilish',
  'Mahsulotni tayyor holatda transport orqali mijozga yetkazish',
  'Har bir bosqich statuslar orqali tizimda kuzatib boriladi',
  'CRM va ARP tizimlari birlashtirilgan',
  'REST API orqali boshqa xizmatlar bilan oson integratsiya',
  'Telegram bot — tezkor buyurtma holatini bildirish va xodimlar bilan aloqa',
  'PlayMobile — mijozlarga avtomatik SMS bildirishnomalar yuborish',
  'Kengaytirilgan foydalanuvchi roli tizimi(10 ga yaqin rol: operator, transport, yuvish, menejer, admin va boshqalar',
  'Korxona faoliyati bo‘yicha kirim - chiqim, foyda - zarar va xodim davomati kabi statistikalar yuritiladi',
  'Dashboard orqali kunlik va oylik hisobotlar ko‘rinadi',
  'Har bir bo‘limda xodim faoliyati alohida nazorat qilinadi',
])

const technologies = ref([
  { name: "Html5", icon: markRaw(Html5), url: "https://html.spec.whatwg.org" },
  { name: "Css", icon: markRaw(Css), url: "https://www.w3.org/Style/CSS" },
  { name: "Javascript", icon: markRaw(Javascript), url: "https://tc39.es/ecma262" },
  { name: "Jquery", icon: markRaw(Jquery), url: "https://jquery.com" },
  { name: "PHP", icon: markRaw(Php), url: "https://www.php.net" },
  { name: "Yii2", icon: markRaw(Yii2), url: "https://www.yiiframework.com" },
  { name: "Aiogram", url: "https://aiogram.dev" },
  { name: "Mysql", icon: markRaw(Mysql), url: "https://www.mysql.com" },
])

const roles = ref({
  'description': `Loyiha boshlanishida tizim allaqachon ishlab chiqilgan va asosiy funksiyalari mavjud edi. Men loyihaga uni yanada rivojlantirish va barqarorlashtirish maqsadida qo‘shildim. Quyidagi ishlarni amalga oshirdim:`,
  'items': [
    'Tizimdagi mavjud xatoliklar(sintaksis va mantiqiy xatolar)ni aniqlab, to‘g‘riladim.',
    'Yangi funksiyalar qo‘shdim va mavjudlarini takomillashtirdim.',
    'REST API ishlab chiqdim — bu orqali boshqa tizimlar yoki mijoz interfeyslari bilan integratsiya qilish imkoniyati yaratildi.',
    'Mijozlar uchun Telegram bot ishlab chiqdim — buyurtma holatini ko‘rish va xabarnomalarni olishni soddalashtirdi.',
    'Tizimda juda sekin ishlaydigan sahifalarni aniqlab, ularni optimallashtirdim.',
    'SQL so‘rovlarni boshidan oxirigacha tahlil qilib, ularni samaraliroq ishlaydigan shaklga keltirdim.',
    'Ma’lumotlar bazasi MySQLda juda katta hajmdagi ma’lumotlar saqlanganligi bois, bazani normalizatsiya qildim va so‘rovlarni indekslash va optimallashtirish orqali ishlash tezligini oshirdim.',
    'Kod bazasida xatolarni tuzatish, yangi imkoniyatlarni qo‘shish va tizimni barqarorlashtirish uchun ko‘plab o‘zgartirishlar kiritdim.',
  ]
})

const status = 'Tizim hozirda ishlatilmoqda.'

const images = ref([
  '/project-images/pcccrm/3.webp',
  '/project-images/pcccrm/2.webp',
  '/project-images/pcccrm/1.webp',
  '/project-images/pcccrm/4.webp',
  '/project-images/pcccrm/5.webp',
  '/project-images/pcccrm/6.webp',
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