<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{
  /** Your AdSense client id: ca-pub-... (kept prop so component is reusable) */
  adClient?: string
  /** The ad-slot id from AdSense UI */
  adSlot: string
  /** 'auto' (responsive) or fixed sizes via CSS */
  adFormat?: string
  /** true for full-width responsive */
  fullWidth?: boolean
  /** Optional key input to force-refresh when content changes */
  refreshKey?: string | number
  /** Optional: style attribute for the <ins> (e.g., width/height for fixed banners) */
  insStyle?: string
  /** Optional: ad-layout / ad-layout-key for in-article/flow units */
  adLayout?: string
  adLayoutKey?: string
}>(), {
  adClient: 'ca-pub-1291242080282540',
  adFormat: 'auto',
  fullWidth: true,
  insStyle: 'display:block'
})

const route = useRoute()
const insRef = ref<HTMLElement | null>(null)

/**
 * Render/push the ad. We:
 * 1) Clear any children to ensure a clean mount on refresh
 * 2) Recreate the <ins> element with attributes
 * 3) Call (adsbygoogle = window.adsbygoogle || []).push({})
 */
async function renderAd() {
  const mountEl = insRef.value
  if (!mountEl) return

  // Clear previous ad DOM (helps remount on route/refreshKey change)
  mountEl.innerHTML = ''

  // Create <ins> dynamically so Google can fill it as a fresh instance
  const ins = document.createElement('ins')
  ins.className = 'adsbygoogle'
  ins.setAttribute('style', props.insStyle)
  ins.setAttribute('data-ad-client', props.adClient!)
  ins.setAttribute('data-ad-slot', props.adSlot)
  ins.setAttribute('data-ad-format', props.adFormat)
  if (props.fullWidth) ins.setAttribute('data-full-width-responsive', 'true')
  if (props.adLayout) ins.setAttribute('data-ad-layout', props.adLayout)
  if (props.adLayoutKey) ins.setAttribute('data-ad-layout-key', props.adLayoutKey)

  mountEl.appendChild(ins)

  // @ts-ignore
  const q = (window.adsbygoogle = window.adsbygoogle || [])
  try {
    q.push({})
  } catch (e) {
    // Silently ignore; AdSense may throw if not ready or ad blocked
    // console.warn('AdSense push error', e)
  }
}

onMounted(async () => {
  await nextTick()
  renderAd()
})

// Refresh the ad on route changes or when refreshKey changes
watch(
  () => [route.fullPath, props.refreshKey],
  async () => {
    await nextTick()
    renderAd()
  }
)
</script>

<template>
  <!-- Outer wrapper for styling (let parent control spacing) -->
  <div ref="insRef" aria-label="Advertisement" />
</template>
