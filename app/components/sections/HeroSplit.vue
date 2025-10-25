<!-- components/sections/HeroSplit.vue -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  reverse?: boolean
  class?: string
}>(), {
  imageAlt: 'Illustration',
  reverse: false
})
</script>

<template>
  <section :class="['py-12 sm:py-16 md:py-20', props.class]">
    <UContainer>
      <div :class="[
        'grid items-center gap-8 md:gap-12 md:grid-cols-2',
        reverse ? 'md:[&>div:first-child]:order-2' : ''
      ]">
        <!-- Content -->
        <div class="space-y-4">
          <div v-if="$slots.title" class="text-3xl/tight sm:text-4xl font-semibold">
            <slot name="title" />
          </div>
          <div v-if="$slots.description" class="text-neutral-600 dark:text-neutral-300 text-lg">
            <slot name="description" />
          </div>
          <div v-if="$slots.links" class="flex flex-wrap gap-3 pt-2">
            <slot name="links" />
          </div>
        </div>

        <!-- Image (use plain <img> for zero-dep test) -->
        <div class="relative">
          <img
            v-if="image"
            :src="image"
            :alt="imageAlt"
            class="w-full rounded-xl ring-1 ring-black/5 dark:ring-white/10"
            loading="lazy"
            decoding="async"
          />
          <div v-else class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 text-neutral-500 dark:text-neutral-400 grid place-items-center">
            <UIcon name="i-lucide-image" class="h-8 w-8" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
