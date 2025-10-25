<!-- components/HomeHero.vue -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  reverse?: boolean
  eyebrow?: string
  class?: string
  // Optional CTA props if you don't want to use #links slot
  primaryTo?: string
  primaryLabel?: string
  primaryIcon?: string
  secondaryTo?: string
  secondaryLabel?: string
  secondaryVariant?: 'ghost' | 'outline' | 'link' | 'solid' | 'subtle'
}>(), {
  imageAlt: 'Hero illustration',
  reverse: false,
  primaryIcon: 'i-lucide-arrow-right',
  secondaryVariant: 'subtle'
})
</script>

<template>
  <section :class="['py-12 sm:py-16 md:py-20 hero--blr', props.class]">
    <UContainer>
      <div :class="[
        'grid items-center gap-8 md:gap-12 md:grid-cols-2',
        reverse ? 'md:[&>div:first-child]:order-2' : ''
      ]">
        <!-- Copy -->
        <div class="space-y-5">
          <div v-if="eyebrow || $slots.eyebrow" class="section--eyebrow">
            <slot name="eyebrow">{{ eyebrow }}</slot>
          </div>

          <div v-if="$slots.title" class="text-3xl/tight sm:text-4xl font-semibold">
            <slot name="title" />
          </div>

          <div v-if="$slots.description" class="text-neutral-600 dark:text-neutral-300 text-lg">
            <slot name="description" />
          </div>

          <!-- Links slot or simple prop-based buttons -->
          <div class="flex flex-wrap gap-3 pt-1">
            <slot name="links">
              <UButton
                v-if="primaryTo && primaryLabel"
                :to="primaryTo"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
              >
                {{ primaryLabel }}
              </UButton>
              <UButton
                v-if="secondaryTo && secondaryLabel"
                :to="secondaryTo"
                :variant="secondaryVariant"
                color="neutral"
                size="lg"
              >
                {{ secondaryLabel }}
              </UButton>
            </slot>
          </div>
        </div>

        <!-- Media -->
        <div class="relative">
          <NuxtImg
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
