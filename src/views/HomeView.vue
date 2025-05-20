<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import FooterComponent from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';

import { useSeoMeta, useHead } from '@vueuse/head';

const pageTitle = 'Izzatbek – Full-stack Dasturchi | Portfolio';
const pageDescription = '4 yillik tajribaga ega full-stack mutaxassisi. REST API, ma’lumotlar bazasi, va Tailwind CSS yordamida ishonchli web yechimlar yarataman.';
const pageKeyword = 'Laravel dasturchi, PHP backend developer, REST API yaratish, Full-stack dasturchi, Tailwind CSS, Vue.js frontend, MySQL mutaxassisi, FastAPI Python, backend xizmatlar, web dasturchi, Telegram bot ishlab chiqish, ma’lumotlar bazasi loyihalash, dasturchi, Izzatbek';
const canonical = window.location.href;
const LogoImage = `${window.location.origin}/logo.webp`; // Tashqi URL bo'lishi kerak
const domain = window.location.origin;

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

  <!-- Banner -->
  <Banner />
  <!-- /Banner -->

  <!-- About me -->
  <AboutMe />
  <!-- /About me -->

  <!-- Skills -->
  <Skills />
  <!-- /Skills -->


  <!-- Experience -->
  <Experience />
  <!-- /Experience -->


  <!-- Projects -->
  <Projects />
  <!-- /Projects -->


  <!-- Contact -->
  <Contact />
  <!-- /Contact -->


  <!-- Footer -->
  <FooterComponent />
  <!-- /Footer -->

</template>
