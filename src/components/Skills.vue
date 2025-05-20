<script setup lang="ts">
import AlpineJs from '@/components/icons/skills/AlpineJs.vue';
import Css from '@/components/icons/skills/Css.vue';
import FastApi from '@/components/icons/skills/FastApi.vue';
import Git from '@/components/icons/skills/Git.vue';
import Github from '@/components/icons/skills/Github.vue';
import Html5 from '@/components/icons/skills/Html5.vue';
import Javascript from '@/components/icons/skills/Javascript.vue';
import Laravel from '@/components/icons/skills/Laravel.vue';
import Mysql from '@/components/icons/skills/Mysql.vue';
import Php from '@/components/icons/skills/Php.vue';
import Python from '@/components/icons/skills/Python.vue';
import Tailwind from '@/components/icons/skills/Tailwind.vue';
import VueJs from '@/components/icons/skills/VueJs.vue';
import Jquery from '@/components/icons/skills/Jquery.vue';
import Yii2 from '@/components/icons/skills/Yii2.vue';
import RightUpArrow from '@/components/icons/RightUpArrow.vue';

const skills = [
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: Php, url: "https://www.php.net" },
      { name: "Laravel", icon: Laravel, url: "https://laravel.com" },
      { name: "Yii2", icon: Yii2, url: "https://www.yiiframework.com" },
      { name: "Python", icon: Python, url: "https://www.python.org" },
      { name: "FastApi", icon: FastApi, url: "https://fastapi.tiangolo.com" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Html5", icon: Html5, url: "https://html.spec.whatwg.org" },
      { name: "Css", icon: Css, url: "https://www.w3.org/Style/CSS" },
      { name: "Javascript", icon: Javascript, url: "https://tc39.es/ecma262" },
      { name: "Tailwind", icon: Tailwind, url: "https://tailwindcss.com" },
      { name: "VueJs", icon: VueJs, url: "https://vuejs.org" },
      { name: "AlpineJs", icon: AlpineJs, url: "https://alpinejs.dev" },
      { name: "Jquery", icon: Jquery, url: "https://jquery.com" },
    ],
  },
  {
    category: "Ma'lumotlar bazasi",
    items: [
      { name: "Mysql", icon: Mysql, url: "https://www.mysql.com" },
    ],
  },
  {
    category: "Versiya boshqaruvi",
    items: [
      { name: "Git", icon: Git, url: "https://git-scm.com" },
      { name: "Github", icon: Github, url: "https://github.com" },
    ],
  },
  {
    category: "Telegram bot",
    items: [
      { name: "Aiogram", icon: null, url: "https://aiogram.dev" },
      { name: "Telethon", icon: null, url: "https://docs.telethon.dev" },
    ],
  },
];
</script>

<template>
  <section id="konikmalarim"
    class="text-white container-imm py-14 md:py-20 flex flex-col justify-center gap-5 line-bottom bg-hero-patterns">
    <div>
      <h2 class="font-bold text-xl">
        <span class="text-gray-500 font-light ">Ko‘n</span>ikmalarim
      </h2>
    </div>
    <div class="text-2xl flex flex-col justify-start gap-8 mt-10 max-sm:text-sm">
      <div v-for="(group, idx) in skills" :key="group.category">
        <h3 class="mb-2 text-gray-600 text-[14px] md:text-[20px]">{{ group.category }}</h3>
        <div class="flex justify-start items-center flex-wrap gap-5">
          <a v-for="item in group.items" :key="item.name" class="skills-button" :aria-label="item.name" :href="item.url"
            target="_blank" rel="noopener noreferrer">
            <component v-if="item.icon" :is="item.icon" />
            {{ item.name }}
            <RightUpArrow />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
