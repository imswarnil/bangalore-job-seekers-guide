<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <div class="hidden lg:block mt-8 p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
          <UContentNavigation
            highlight
            :navigation="navigation"
          />
          <div class="hidden lg:block mt-8 p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
