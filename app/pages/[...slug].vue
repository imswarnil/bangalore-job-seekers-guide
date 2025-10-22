<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc } = useAppConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description']
  })
})

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path))

defineOgImageComponent('Docs', {
  headline: headline.value
})

const links = computed(() => {
  const links: any[] = []
  if (toc?.bottom?.edit) {
    links.push({
      icon: 'i-lucide-external-link',
      label: 'Edit this page',
      to: `${toc.bottom.edit}/${page?.value?.stem}.${page?.value?.extension}`,
      target: '_blank'
    })
  }
  return [...links, ...(toc?.bottom?.links || [])].filter(Boolean)
})
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="headline"
    >
      <template #links>
        <UButton
          v-for="(link, index) in page.links"
          :key="index"
          v-bind="link"
        />
        <PageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator v-if="surround?.length" />
      <UContentSurround :surround="surround" />
    </UPageBody>

    <!-- RIGHT rail: TOC (if any) + ad placeholders -->
    <template #right>
      <UPageAside class="right-rail">
        <div class="rail-sticky">
          <!-- Show TOC only when links exist -->
          <UContentToc
            v-if="page?.body?.toc?.links?.length"
            :title="toc?.title"
            :links="page.body?.toc?.links"
          >
            <template v-if="toc?.bottom" #bottom>
              <div
                class="hidden lg:block space-y-6"
                :class="{ '!mt-6': page.body?.toc?.links?.length }"
              >
                <USeparator v-if="page.body?.toc?.links?.length" type="dashed" />
                <UPageLinks :title="toc.bottom.title" :links="links" />
              </div>
            </template>
          </UContentToc>

          <!-- Ads rail (shown even if no TOC) -->
          <div class="ads-rail">
            <AdsPlaceholder variant="skyscraper" label="Sponsored" badge="Ad" />
            <div style="height:16px"></div>
            <AdsPlaceholder variant="rectangle" label="Advertisement" badge="Ad" />
          </div>
        </div>
      </UPageAside>
    </template>
  </UPage>
</template>

<style scoped>
.rail-sticky {
  position: sticky;
  /* Uses your framework header height variable for perfect alignment */
  top: var(--ui-header-height, 88px);
  display: grid;
  gap: 16px;
  justify-items: center;
}

.ads-rail {
  display: grid;
  gap: 16px;
  justify-items: center;
}

@media (max-width: 1100px) {
  .right-rail { display: none; }
}
</style>

