<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation highlight :navigation="navigation" />
        </UPageAside>
      </template>

      <!-- RIGHT rail: sticky placeholders -->
      <template #right>
        <UPageAside class="right-rail">
          <div class="rail-sticky">
            <!-- Tall unit -->
            <AdsPlaceholder variant="skyscraper" label="Sponsored" badge="Ad" />

            <div style="height:16px"></div>

            <!-- Smaller unit -->
            <AdsPlaceholder variant="rectangle" label="Advertisement" badge="Ad" />
          </div>
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>

<style scoped>
.rail-sticky {
  position: sticky;
  top: 88px; /* adjust to your header height */
  display: grid;
  gap: 16px;
  justify-items: center;
}
/* Hide right rail on narrow screens */
@media (max-width: 1100px) {
  .right-rail { display: none; }
}
</style>

