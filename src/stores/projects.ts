import { ref, computed, markRaw } from 'vue'
import { defineStore } from 'pinia'

import Css from '@/components/icons/skills/Css.vue'
import FastApi from '@/components/icons/skills/FastApi.vue'
import Html5 from '@/components/icons/skills/Html5.vue'
import Javascript from '@/components/icons/skills/Javascript.vue'
import Mysql from '@/components/icons/skills/Mysql.vue'
import Python from '@/components/icons/skills/Python.vue'
import Tailwind from '@/components/icons/skills/Tailwind.vue'
import VueJs from '@/components/icons/skills/VueJs.vue'
import Php from '@/components/icons/skills/Php.vue'
import Yii2 from '@/components/icons/skills/Yii2.vue'
import Jquery from '@/components/icons/skills/Jquery.vue'
import Laravel from '@/components/icons/skills/Laravel.vue'
import AlpineJs from '@/components/icons/skills/AlpineJs.vue'
import Git from '@/components/icons/skills/Git.vue'
import Github from '@/components/icons/skills/Github.vue'

import RightUpArrow from '@/components/icons/RightUpArrow.vue'

export const useProjectStore = defineStore('projects', () => {
  const data = ref([
    {
      tag: 'veb-sayt',
      slug: 'ideal',
      titleHtml: `
  <span class="text-gray-500">Kostyum-shim korxonasi uchun </span> buyurtma boshqaruv tizimi!
`,
      title: `
  Kostyum-shim fabrikasi uchun buyurtma boshqaruv tizimi
`,
      description: `
  Bu loyiha kostyum-shim tikuvchi korxona ish jarayonlarini avtomatlashtirish maqsadida ishlab chiqilgan. Tizim mijozdan buyurtma qabul qilishdan tortib, uni tikib tayyor holda qaytarishgacha bo‘lgan barcha bosqichlarni
  qamrab oladi. Endilikda har bir buyurtma raqamli tarzda ro‘yxatga olinadi, o‘lchovlar, fason va material tanlovi
  avtomatik tarzdatizimda saqlanadi va kuzatib boriladi.
`,
      features: [
        'Mijozlardan buyurtma qabul qilish, fason va material tanlovlarini saqlab borish',
        'Buyurtma asosida avtomatik tikuv bo‘limiga topshiriq yuborish',
        'Tayyor mahsulotni kuryer orqali sotuv bo‘limiga qaytarish jarayonini kuzatish',
        'Materiallar hisobini yuritish, sarflangan xomashyo statistikasi',
        'Har bir buyurtmaning umumiy qiymatini hisoblab borish',
        'Statuslar orqali buyurtmaning har bir bosqichini real vaqtda nazorat qilish',
      ],
      technologies: [
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'Jquery', icon: markRaw(Jquery), url: 'https://jquery.com' },
        { name: 'PHP', icon: markRaw(Php), url: 'https://www.php.net' },
        { name: 'Yii2', icon: markRaw(Yii2), url: 'https://www.yiiframework.com' },
        { name: 'Mysql', icon: markRaw(Mysql), url: 'https://www.mysql.com' },
      ],
      roles: {
        description: `
  Men ushbu loyihani ustozim bilan birga ishlab chiqdik. Arxitekturani rejalashtirishda boshlab,
  foydalanuvchi interfeyslaridan
  tortib barcha funksiyalarni backendda amalga oshirdik. Bundan tashqari, buyurtma holatlarini
  kuzatish, material hisobini
  yuritish va kuryer harakatlarini nazorat qilish bo‘limlarini hamintegratsiya qildik.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmoqda.',
      images: [
        '/project-images/ideal/3.webp',
        '/project-images/ideal/2.webp',
        '/project-images/ideal/1.webp',
        '/project-images/ideal/4.webp',
        '/project-images/ideal/5.webp',
      ],
    },
    {
      tag: 'veb-sayt',
      slug: 'pcccrm',
      titleHtml: `
  <span class="text-gray-500">Gilam yuvish korxonasi uchun</span> avtomatlashtirilgan boshqaruv tizimi
`,
      title: `
  Gilam yuvish korxonasi uchun avtomatlashtirilgan boshqaruv tizimi
`,
      description: `
  Ushbu loyiha gilam yuvish xizmatini ko‘rsatuvchi yirik korxonalar uchun ishlab chiqilgan bo‘lib, mijozdan buyurtma qabul qilishdan tortib, mahsulotni tayyor holda yetkazib berishgacha bo‘lgan butun jarayonni
  avtomatlashtirishga mo‘ljallangan.
`,
      features: [
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
      ],
      technologies: [
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'Jquery', icon: markRaw(Jquery), url: 'https://jquery.com' },
        { name: 'PHP', icon: markRaw(Php), url: 'https://www.php.net' },
        { name: 'Yii2', icon: markRaw(Yii2), url: 'https://www.yiiframework.com' },
        { name: 'Aiogram', url: 'https://aiogram.dev' },
        { name: 'Mysql', icon: markRaw(Mysql), url: 'https://www.mysql.com' },
      ],
      roles: {
        description: `
  Loyiha boshlanishida tizim allaqachon ishlab chiqilgan va asosiy funksiyalari mavjud edi. Men loyihaga uni yanada rivojlantirish va barqarorlashtirish maqsadida qo‘shildim. Quyidagi ishlarni amalga oshirdim:
`,
        items: [
          'Tizimdagi mavjud xatoliklar(sintaksis va mantiqiy xatolar)ni aniqlab, to‘g‘riladim.',
          'Yangi funksiyalar qo‘shdim va mavjudlarini takomillashtirdim.',
          'REST API ishlab chiqdim — bu orqali boshqa tizimlar yoki mijoz interfeyslari bilan integratsiya qilish imkoniyati yaratildi.',
          'Mijozlar uchun Telegram bot ishlab chiqdim — buyurtma holatini ko‘rish va xabarnomalarni olishni soddalashtirdi.',
          'Tizimda juda sekin ishlaydigan sahifalarni aniqlab, ularni optimallashtirdim.',
          'SQL so‘rovlarni boshidan oxirigacha tahlil qilib, ularni samaraliroq ishlaydigan shaklga keltirdim.',
          'Ma’lumotlar bazasi MySQLda juda katta hajmdagi ma’lumotlar saqlanganligi bois, bazani normalizatsiya qildim va so‘rovlarni indekslash va optimallashtirish orqali ishlash tezligini oshirdim.',
          'Kod bazasida xatolarni tuzatish, yangi imkoniyatlarni qo‘shish va tizimni barqarorlashtirish uchun ko‘plab o‘zgartirishlar kiritdim.',
        ],
      },
      status: 'Tizim hozirda ishlatilmoqda.',
      images: [
        '/project-images/pcccrm/6.webp',
        '/project-images/pcccrm/3.webp',
        '/project-images/pcccrm/2.webp',
        '/project-images/pcccrm/1.webp',
        '/project-images/pcccrm/4.webp',
        '/project-images/pcccrm/5.webp',
      ],
    },
    {
      tag: 'veb-sayt',
      slug: 'emu',
      titleHtml: `
  <span class="text-gray-500">Emu.uz — Kuryerlik</span> xizmati uchun zamonaviy veb-sayt
`,
      title: `
  Emu.uz — Kuryerlik xizmati uchun zamonaviy veb-sayt
`,
      description: `
  Emu.uz — bu O‘zbekistonda faoliyat yurituvchi kuryerlik xizmati uchun ishlab chiqilgan zamonaviy
  veb-sayt bo‘lib, foydalanuvchilarga tez, ishonchli va qulay xizmat ko‘rsatishni maqsad qilgan. Sayt orqali
  mijozlar o‘z buyurtmalarini tezda yuborishlari, kuzatishlari va xizmatlar haqida batafsil ma'lumot olishlari mumkin.
`,
      features: [
        'Buyurtma yuborish: foydalanuvchilar o‘z buyurtmalarini onlayn tarzda yuborishlari mumkin.',
        'Buyurtma holatini kuzatish: har bir buyurtmaning holatini real vaqtda kuzatish imkoniyati.',
        'Xizmat hududlari: xizmat ko‘rsatiladigan hududlar haqida batafsil maʼlumot.',
      ],
      technologies: [
        { name: 'Python', icon: markRaw(Python), url: 'https://www.python.org' },
        { name: 'FastApi', icon: markRaw(FastApi), url: 'https://fastapi.tiangolo.com' },
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'Tailwind', icon: markRaw(Tailwind), url: 'https://tailwindcss.com' },
        { name: 'VueJs', icon: markRaw(VueJs), url: 'https://vuejs.org' },
        { name: 'Mysql', icon: markRaw(Mysql), url: 'https://www.mysql.com' },
      ],
      roles: {
        description: ``,
        items: [
          'Veb-saytning dizaynini foydalanuvchilarga qulay va intuitiv tarzda yaratdim.',
          'Admin panel bilan sayt maʼlumotlarini boshqarish funksiyalarini qoʻshdim.',
          'SMS OTP tekshiruvi',
          'Google reCAPTCHA integratsiyasi: foydalanuvchi xavfsizligini taʼminlashda muhim rol o‘ynaydi.',
          'Saytni mobil qurilmalarga moslashtirdim, shunda foydalanuvchilar har qanday qurilmadan foydalanishlari mumkin.',
        ],
      },
      status: 'Tizim hozirda ishlatilmoqda.',
      images: [
        '/project-images/emu/3.png',
        '/project-images/emu/1.png',
        '/project-images/emu/2.png',
        '/project-images/emu/4.png',
        '/project-images/emu/5.png',
        '/project-images/emu/6.png',
      ],
    },
    {
      tag: 'veb-sayt',
      slug: 'kapitan',
      titleHtml: `
  <span class="text-gray-500">Kapitan — Ustki kiyimlar uchun</span> onlayn savdo platformasi
`,
      title: `
  Kapitan — Ustki kiyimlar uchun onlayn savdo platformasi
`,
      description: `
  Kapitan — ustki kiyim mahsulotlarini onlayn tarzda sotish uchun ishlab chiqilgan zamonaviy
  e-commerce platforma bo‘lib,
  foydalanuvchilarga qulay, tezkor va ishonchli xarid tajribasini taqdim etadi. Loyiha klassik
  internet do‘konlarga xos
  barcha funksiyalarga ega bo‘lishi bilan birga, aksiyalar va chegirmalarni boshqarish, guruhli
  takliflar yaratish kabi
  qo‘shimcha imkoniyatlar bilan boyitilgan.
`,
      features: [
        'Mahsulotlar katalogi: foydalanuvchilar kiyimlarni toifalar, o‘lchamlar va narx bo‘yicha saralab ko‘rishlari mumkin.',
        'Qidiruv va filtrlar: mahsulotlarni tezda topish uchun qulay qidiruv tizimi.',
        'Savatcha va buyurtma berish: foydalanuvchi mahsulot tanlab, xaridni tez va oson amalga oshiradi.',
        'Buyurtma holatini kuzatish: foydalanuvchi o‘zining har bir buyurtmasining holatini real vaqtda ko‘ra oladi.',
        'Ma’lum mahsulotlarga yoki guruhlarga chegirmalar qo‘llash. “1 ta mahsulot olganda ikkinchisi sovg‘a” kabi kombinatsiyalangan aksiyalarni yaratish ',
        'Mahsulotlarni qo‘shish, o‘zgartirish, o‘chirish ',
        'Aksiya va chegirmalarni boshqarish ',
        'Foydalanuvchilar, buyurtmalar va tahlillarni kuzatish ',
        'Mobilga mos dizayn: barcha qurilmalarda to‘liq ishlaydigan moslashuvchan interfeys ',
      ],
      technologies: [
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'Tailwind', icon: markRaw(Tailwind), url: 'https://tailwindcss.com' },
        { name: 'VueJs', icon: markRaw(VueJs), url: 'https://vuejs.org' },
        { name: 'PHP', icon: Php, url: 'https://www.php.net' },
        { name: 'Laravel', icon: Laravel, url: 'https://laravel.com' },
      ],
      roles: {
        description: `
  Ushbu loyiha to‘liq men tomonimdan ishlab chiqilgan.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmayapti',
      images: [
        '/project-images/kapitan/1.png',
        '/project-images/kapitan/2.png',
        '/project-images/kapitan/3.png',
        '/project-images/kapitan/4.png',
        '/project-images/kapitan/5.png',
        '/project-images/kapitan/6.png',
        '/project-images/kapitan/7.png',
        '/project-images/kapitan/8.png',
        '/project-images/kapitan/9.png',
        '/project-images/kapitan/10.png',
      ],
    },
    {
      tag: 'veb-sayt',
      slug: 'kristall',
      titleHtml: `
  <span class="text-gray-500">Kristall — Gilam yuvish</span> landing sahifasi
`,
      title: `
  Kristall — Gilam yuvish landing sahifasi
`,
      description: `
  Kristall gilam yuvish korxonasi uchun ishlab chiqilgan. Sahifa foydalanuvchilarga qulay interfeys orqali xizmatlar haqida ma'lumot olish imkoniyatini taqdim etadi.
`,
      features: [
        'Buyurtma yuborish: foydalanuvchilar o‘z buyurtmalarini onlayn tarzda yuborishlari mumkin.',
        'Buyurtma holatini kuzatish: har bir buyurtmaning holatini real vaqtda kuzatish imkoniyati.',
        'Xizmat hududlari: xizmat ko‘rsatiladigan hududlar haqida batafsil maʼlumot.',
      ],
      technologies: [
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'Tailwind', icon: markRaw(Tailwind), url: 'https://tailwindcss.com' },
        { name: 'VueJs', icon: markRaw(VueJs), url: 'https://vuejs.org' },
      ],
      roles: {
        description: `
  Landing sahifani ishlab chiqish jarayon sahifani mobil qurilmalarga moslashtirdim, shunda foydalanuvchilar har qanday qurilmadan foydalanishlari mumkin.
`,
        items: [],
      },
      status: 'Sayt hozirda ishlatilmoqda.',
      images: ['/project-images/kristall/1.png'],
    },
    {
      tag: 'veb-sayt',
      slug: 'honey-moon',
      titleHtml: `
  <span class="text-gray-500">"Honey Moon" — Asal</span> mahsulotlari landing page
`,
      title: `
  "Honey Moon" — Asal mahsulotlari landing page
`,
      description: `
  Ushbu loyiha asal mahsulotlarini sotuvchi tashkilot uchun yaratilgan zamonaviy landing sahifa
  bo‘lib, mijozlarni jalb
  qilish, mahsulotlarni taqdim etish va buyurtmalarni yig‘ish imkonini beradi. Loyiha to‘liq o‘zim
  tomonidan ishlab
  chiqilgan: arxitektura rejalashtiruvi, frontend, backend va admin panel funksiyalari.
`,
      features: [
        'Mahsulotlar bilan ishlash — admin panel orqali asal mahsulotlarini qo‘shish, tahrirlash va o‘chirish imkoniyati ',
        'Blankalarni to‘plash — landing page orqali yuborilgan buyurtma yoki murojaat blankalari tizimga saqlanadi ',
        'Reklama uchun URL generatsiyasi — har bir reklama kampaniyasi uchun alohida kuzatish URL manzillari avtomatik yaratiladi ',
        'QR - kod generatsiyasi — har bir URL uchun maxsus QR - kod hosil qilinadi(reklama bannerlarida foydalanish uchun) ',
        'Dinamik kontent boshqaruvi — landing page’dagi baʼzi bo‘limlarni admin panel orqali o‘zgartirish imkoniyati ',
      ],
      technologies: [
        { name: 'Html5', icon: markRaw(Html5), url: 'https://html.spec.whatwg.org' },
        { name: 'Css', icon: markRaw(Css), url: 'https://www.w3.org/Style/CSS' },
        { name: 'Javascript', icon: markRaw(Javascript), url: 'https://tc39.es/ecma262' },
        { name: 'PHP', icon: Php, url: 'https://www.php.net' },
        { name: 'Laravel', icon: Laravel, url: 'https://laravel.com' },
      ],
      roles: {
        description: `
  Loyiha ustida to‘liq o‘zim ishladim. Arxitektura tuzishdan tortib, barcha frontend va backend
  qismlarini mustaqil tarzda
  ishlab chiqdim.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmayapti',
      images: [
        '/project-images/honeymoon/1.webp',
        '/project-images/honeymoon/2.webp',
        '/project-images/honeymoon/3.webp',
        '/project-images/honeymoon/4.webp',
        '/project-images/honeymoon/5.webp',
      ],
    },

    {
      tag: 'telegram-bot',
      slug: 'group-pinger',
      titleHtml: `
  Telegram guruhlarga <span class="text-gray-500">avtomatik xabar yuboruvchi bot</span>
`,
      title: `
  Telegram guruhlarga avtomatik xabar yuboruvchi bot
`,
      description: `
  Foydalanuvchi Telegram bot orqali o’zi qo’shilgan guruhlarni tanlaydi va har bir guruh uchun interval/cron asosida xabar rejalashtiradi.
`,
      features: [
        'Guruhlar ro‘yxatini Telethon orqali olish',
        'Aiogram-dialog orqali foydalanuvchi interfeysi',
        'interval va cron rejimda xabar yuborish',
        'apscheduler  orqali xabarlarni rejalashtirish',
      ],
      technologies: [
        { name: 'Python', icon: markRaw(Python), url: 'https://www.python.org' },
        { name: 'Aiogram', icon: null, url: 'https://aiogram.dev' },
        { name: 'Telethon', icon: null, url: 'https://docs.telethon.dev/en/stable' },
        { name: 'SQLite', icon: null, url: 'https://www.sqlite.org' },
        {
          name: 'Apschelduler',
          icon: null,
          url: 'https://apscheduler.readthedocs.io/en/stable',
        },
      ],
      roles: {
        description: `
  Loyiha ustida to‘liq o‘zim ishladim.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmoqda',
      images: [
        '/project-images/group-pinger/1.webp',
        '/project-images/group-pinger/2.webp',
        '/project-images/group-pinger/3.webp',
      ],
    },
    {
      tag: 'telegram-bot',
      slug: 'rustam-akfa',
      titleHtml: `
  <span class="text-gray-500">Materiali</span> hisoblash bot
`,
      title: `
  Materiali hisoblash bot
`,
      description: `
  Bu Telegram bot foydalanuvchilarga o‘lchamlari bo‘yicha kerakli materiallar miqdorini hisoblash imkonini beradi. Foydalanuvchilar o‘lchamlarni kiritish orqali eng kam material sarfi bilan qanday ishlashni hisoblab chiqishadi.
`,
      features: [
        'O‘lchamlarni kiritish: Foydalanuvchi o’lchamlarini kiritadi',
        'Hisoblash: Kiritilgan o‘lchamlarga asoslanib, kerakli materiallar soni va qay biridan qaysi o’lchamni kesish kerakligi hisoblanadi.',
        'Optimal material sarfi: Eng kam rasxod bilan materiallar sarfi hisoblanadi.',
        'WebApp: Telegram bot orqali WebAppga havola yuboriladi va foydalanuvchi WebAppda hisoblashni amalga oshiradi.',
      ],
      technologies: [
        { name: 'Python', icon: markRaw(Python), url: 'https://www.python.org' },
        { name: 'Aiogram', icon: null, url: 'https://aiogram.dev' },
        { name: 'Aiohttp', icon: null, url: 'https://docs.aiohttp.org/en/stable' },
        { name: 'Tailwind', icon: Tailwind, url: 'https://tailwindcss.com' },
        { name: 'AlpineJs', icon: AlpineJs, url: 'https://alpinejs.dev' },
      ],
      roles: {
        description: `
  Loyiha ustida to‘liq o‘zim ishladim.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmoqda',
      images: ['/project-images/rustam-akfa/1.webp', '/project-images/rustam-akfa/2.webp'],
    },
    {
      tag: 'telegram-bot',
      slug: 'crud-bot',
      titleHtml: `
  <span class="text-gray-500">Kompaniya haqida</span> ma’lumot bervuchi bot
`,
      title: `
  Kompaniya haqida ma’lumot bervuchi bot
`,
      description: `
  Bu bot kompaniya haqida ma’lumot beradi. Keyboardlar orqali statik yozib qo’yilgan ma’lumotlarni foydalanuvchiga ko’rsatadi.
`,
      features: ['Menyu orqali tanlangan bo’limga tegishli ma’lumotlari ko’rsatadi'],
      technologies: [
        { name: 'Python', icon: markRaw(Python), url: 'https://www.python.org' },
        { name: 'Aiogram', icon: null, url: 'https://aiogram.dev' },
      ],
      roles: {
        description: `
  Loyiha ustida to‘liq o‘zim ishladim.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmayapti',
      images: [
        '/project-images/crud-bot/1.webp',
        '/project-images/crud-bot/2.webp',
        '/project-images/crud-bot/3.webp',
      ],
    },
    {
      tag: 'telegram-bot',
      slug: 'hr-bot',
      titleHtml: `
  <span class="text-gray-500">Hr</span> bot
`,
      title: `
  Hr bot
`,
      description: `
  Bu bot kompaniya haqida ma’lumot beradi. Keyboardlar orqali dinamik yozib qo’yilgan ma’lumotlarni foydalanuvchiga ko’rsatadi. Admin qismida shu ma’lumotlarni kiritish, o’chirish va o’zgartirish mumkin.
`,
      features: [
        'Menyu orqali tanlangan bo’limga tegishli ma’lumotlari ko’rsatadi',
        'Admin qismida shu ma’lumotlarni kiritish, o’chirish va o’zgartirish mumkin.',
        'asyncio  orqali botga start bosgan foydalanuvchilarga reklama xabarini yuborish.',
      ],
      technologies: [
        { name: 'Python', icon: markRaw(Python), url: 'https://www.python.org' },
        { name: 'Aiogram', icon: null, url: 'https://aiogram.dev' },
      ],
      roles: {
        description: `
  Loyiha ustida to‘liq o‘zim ishladim.
`,
        items: [],
      },
      status: 'Tizim hozirda ishlatilmoqda',
      images: [
        '/project-images/hr-bot/1.webp',
        '/project-images/hr-bot/2.webp',
        '/project-images/hr-bot/3.webp',
        '/project-images/hr-bot/4.webp',
        '/project-images/hr-bot/5.webp',
      ],
    },
  ])

  // data ni to'g'ridan-to'g'ri slice qilmaslik uchun yangi massivdan nusxa olinadi
  const favoriteProjects = computed(() => {
    return [...data.value].slice(0, 3)
  })

  return { data, favoriteProjects }
})
