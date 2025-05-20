<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
    title: string
    content?: string
    className?: string
}

defineProps<Props>()
</script>

<style scoped>
/* Qo‘shimcha styling kerak bo‘lsa shu yerga yozing */
</style>

<template>
    <div class="mb-5">
        <h2 :class="['text-3xl md:text-4xl lg:text-5xl font-bold', className]">
            {{ title }}
        </h2>

        <p v-if="content" class="max-sm:text-sm mt-2">
            {{ content }}
        </p>

        <!-- Slot ichida custom content bo'lsa -->
        <div class="mt-4">
            <slot />
        </div>
    </div>
</template>
