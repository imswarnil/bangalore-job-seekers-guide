<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('landing').path('/').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <UPage class="bg-white dark:bg-neutral-950">
    <!-- Hero using Nuxt UI -->
    <UPageHero
      class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"
      :ui="{ title: 'text-4xl sm:text-5xl font-bold tracking-tight', description: 'text-base sm:text-lg max-w-2xl' }"
      title="Learn Salesforce CRM Analytics like you're editing a short film."
      description="Docs + dashboards + CPQ + Bollywood-level masala. Built with Nuxt UI + Nuxt Content so you can ship fast and look dangerous."
      orientation="horizontal"
    >
      <template #links>
        <UButton
          to="/getting-started"
          size="xl"
          icon="i-lucide-arrow-right"
          trailing
        >
          Start learning
        </UButton>

        <UButton
          to="https://youtube.com/@imswarnil"
          target="_blank"
          variant="outline"
          size="xl"
          icon="i-simple-icons-youtube"
        >
          Watch channel
        </UButton>
      </template>

      <template #right>
        <UCard class="max-w-md bg-white/5 border-white/10 backdrop-blur dark:bg-neutral-900/40">
          <p class="text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Swarnil's CRM Analytics Academy
          </p>
          <p class="text-sm text-muted-foreground dark:text-neutral-300 mb-4">
            Real projects, India-first examples, Twilio-ish use cases. Not theory.
          </p>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              Dataflows, dashboards, app templates
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              CPQ / .Org style scenarios
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              Monetization-ready (Ads / CTA / Courses)
            </li>
          </ul>
        </UCard>
      </template>
    </UPageHero>

    <!-- Small ads / banner area like you had -->
    <div class="hidden lg:block mt-6 px-4">
      <ClientOnly>
        <GoogleAd
          ad-slot="7663977887"
          ad-format="auto"
          :fullWidth="true"
          ins-style="display:block"
          :refreshKey="page?.updatedAt || page?.path"
        />
      </ClientOnly>
    </div>

    <!-- Feature strip using Nuxt UI -->
    <UContainer class="py-12">
      <UPageGrid>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-presentation" class="h-6 w-6 text-primary" />
            <div>
              <h3 class="font-semibold">Project style lessons</h3>
              <p class="text-sm text-muted-foreground">
                Not “hello world”. Real Salesforce dashboards, Twilio-ish reporting.
              </p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-badge-indian-rupee" class="h-6 w-6 text-primary" />
            <div>
              <h3 class="font-semibold">India-first, global-ready</h3>
              <p class="text-sm text-muted-foreground">
                Pricing, data and naming like we actually use here.
              </p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-wand-2" class="h-6 w-6 text-primary" />
            <div>
              <h3 class="font-semibold">Copy-paste sections</h3>
              <p class="text-sm text-muted-foreground">
                MDC blocks, CTAs, ads — straight into content.
              </p>
            </div>
          </div>
        </UCard>
      </UPageGrid>
    </UContainer>

    <!-- Now render your MDC content -->
    <UContainer class="pb-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        :prose="false"
      />
    </UContainer>
  </UPage>
</template>
