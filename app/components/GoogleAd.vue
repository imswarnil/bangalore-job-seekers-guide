<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{
  adClient?: string          // ca-pub-...
  adSlot: string             // your slot id
  adFormat?: string          // 'auto' (responsive) or fixed
  fullWidth?: boolean        // full-width responsive
  refreshKey?: string|number // change this to force a re-fill
  insStyle?: string          // style attr for <ins> (e.g. width/height)
  adLayout?: string
  adLayoutKey?: string
  adTest?: 'on' | 'off'      // dev only: 'on' to test
}>(), {
  adClient: 'ca-pub-1291242080282540',
  adFormat: 'auto',
  fullWidth: true,
  insStyle: 'display:block',
  adTest: undefined
})

const route = useRoute()
const mountRef = ref<HTMLElement | null>(null)

async function renderAd () {
  const el = mountRef.value
  if (!el) return

  // Clear previous ad instance so Google treats it as fresh
  el.innerHTML = ''

  const ins = document.createElement('ins')
  ins.className = 'adsbygoogle'
  ins.setAttribute('style', props.insStyle)
  ins.setAttribute('data-ad-client', props.adClient!)
  ins.setAttribute('data-ad-slot', props.adSlot)
  ins.setAttribute('data-ad-format', props.adFormat)
  if (props.fullWidth) ins.setAttribute('data-full-width-responsive', 'true')
  if (props.adLayout) ins.setAttribute('data-ad-layout', props.adLayout)
  if (props.adLayoutKey) ins.setAttribute('data-ad-layout-key', props.adLayoutKey)
  if (props.adTest) ins.setAttribute('data-adtest', props.adTest)

  el.appendChild(ins)

  // Push fill request (quietly ignore if blocked/not ready)
  // @ts-ignore
  const q = (window.adsbygoogle = window.adsbygoogle || [])
  try { q.push({}) } catch {}
}

onMounted(async () => {
  await nextTick()
  // Ensure global queue exists (in case script is deferred)
  // @ts-ignore
  window.adsbygoogle = window.adsbygoogle || []
  renderAd()
})

// Re-fill on route change or when you change refreshKey
watch(() => [route.fullPath, props.refreshKey], async () => {
  await nextTick()
  renderAd()
})
</script>

<template>
  <!-- parent controls spacing; keep ad DOM isolated -->
  <div ref="mountRef" aria-label="Advertisement" />
</template>
