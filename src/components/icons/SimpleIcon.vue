<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import * as simpleIcons from 'simple-icons'

interface Props {
    name: string
    size?: number
}

const props = defineProps<Props>()

const icon = computed(() => {
    const key = 'simpleIcons' + props.name.charAt(0).toUpperCase() + props.name.slice(1)
    return (simpleIcons as any)[key]
})
</script>

<template>
    <svg v-if="icon" :width="props.size || 24" :height="props.size || 24" viewBox="0 0 24 24" :fill="'#' + icon.hex"
        xmlns="http://www.w3.org/2000/svg" :aria-label="icon.title" v-html="icon.svg"></svg>
    <span v-else>Icon not found</span>
</template>
