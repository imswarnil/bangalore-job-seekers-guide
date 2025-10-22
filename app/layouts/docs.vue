<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

// 1) Load AdSense script once (no plugin)
useHead({
  script: [
    {
      id: 'adsbygoogle-js',
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1291242080282540',
      crossorigin: 'anonymous'
    }
  ]
})

// 2) Mount and (re)fill the ad unit directly in the layout (no component)
const adRef = ref<HTMLElement | null>(null)

function fillAd () {
  const el = adRef.value
  if (!el) return

  // Clear previous instance so Google treats it as fresh each page
  el.innerHTML = ''

  // Create the exact markup you pasted:
  const ins = document.createElement('ins')
  ins.className = 'adsbygoogle'
  ins.setAttribute('style', 'display:block')
  ins.setAttribute('data-ad-client', 'ca-pub-1291242080282540')
  ins.setAttribute('data-ad-slot', '7663977887')
  ins.setAttribute('data-ad-format', 'auto')
  ins.setAttribute('data-full-width-responsive', 'true')

  el.appendChild(ins)

  // Request fill
  // @ts-ignore
  const q = (window.adsbygoogle = window.adsbygoogle || [])
  try { q.push({}) } catch {}
}

onMounted(() => {
  fillAd()
})

// Re-fill on route change so the ad loads again for each doc page
watch(() => route.fullPath, () => {
  fillAd()
})
</script>

<template>
  <UContainer>
    <UPage>
      <!-- Left rail: docs navigation -->
      <template #left>
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="navigation"
          />
        </UPageAside>
      </template>

      <!-- Main content -->
      <slot />

      <!-- Right rail: DIRECT AdSense unit -->
      <template #right>
        <aside class="hidden lg:block">
          <div class="sticky top-(--ui-header-height)">
            <div class="mt-6 space-y-4 p-4 rounded-xl border border-default bg-default/60 backdrop-blur">
              <p class="text-xs font-semibold text-muted -mb-1">Sponsored</p>
              <ClientOnly>
                <!-- Raw ad container -->
                <div ref="adRef" aria-label="Advertisement"></div>
              </ClientOnly>
              <p class="text-[11px] text-muted">Advertisement</p>
            </div>
          </div>
        </aside>
      </template>
    </UPage>
  </UContainer>
</template>
