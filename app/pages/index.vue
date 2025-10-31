<script setup lang="ts">
// This is the same logic you provided - it's perfect!
const { data: page } = await useAsyncData('index', ()/Users/aaronsturrock/aaronsturrock_dev/aaronsturrock/apps/web/node_modules/@nuxt/content/dist/runtime/composables/query.js => queryContent('/').findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// SEO metadata setup
const title = page.value.seo?.title || 'CRM Analytics Academy'
const description = page.value.seo?.description || 'Unlock the power of your CRM data.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://example.com/og-image.png', // Replace with your own OG image
  twitterImage: 'https://example.com/twitter-image.png' // Replace with your own Twitter image
})
</script>

<template>
  <div v-if="page">
    <!-- 1. Hero Section -->
    <UContainer v-if="page.hero" class="py-24 sm:py-32">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          {{ page.hero.title }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ page.hero.description }}
        </p>
        <div v-if="page.hero.cta" class="mt-10 flex items-center justify-center gap-x-6">
          <UButton
            v-for="button in page.hero.cta"
            :key="button.label"
            :to="button.to"
            :label="button.label"
            :variant="button.variant || 'solid'"
            size="xl"
          />
        </div>
      </div>
    </UContainer>

    <!-- 2. Features Section -->
    <UContainer v-if="page.features" class="py-24 sm:py-32">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ page.features.title }}
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {{ page.features.description }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <UCard v-for="item in page.features.items" :key="item.title">
          <template #header>
            <div class="flex items-center gap-4">
              <UIcon :name="item.icon" class="w-8 h-8 text-primary" />
              <h3 class="text-lg font-semibold">
                {{ item.title }}
              </h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            {{ item.description }}
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- 3. Featured Courses Section -->
    <div v-if="page.courses" class="bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32">
      <UContainer>
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {{ page.courses.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {{ page.courses.description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <UCard v-for="course in page.courses.items" :key="course.title" class="flex flex-col">
            <template #header>
              <UBadge :label="course.level" color="primary" variant="subtle" />
            </template>
            
            <div class="flex-grow">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ course.title }}
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ course.description }}
              </p>
            </div>
            
            <template #footer>
              <UButton :to="course.link" label="Learn More" block color="primary" variant="soft" />
            </template>
          </UCard>
        </div>
      </UContainer>
    </div>

    <!-- 4. Final Call to Action Section -->
    <UContainer v-if="page.cta" class="py-24 sm:py-32">
       <div class="bg-primary-50 dark:bg-primary-400/10 rounded-xl p-8 lg:p-12 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ page.cta.title }}
        </h2>
        <p class="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          {{ page.cta.description }}
        </p>
        <div class="mt-8">
           <UButton
            :to="page.cta.button.to"
            :label="page.cta.button.label"
            size="xl"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>