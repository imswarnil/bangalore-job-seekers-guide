<script setup lang="ts">
    const props = withDefaults(defineProps<{
      label?: string
      /** preset: square | rectangle | leaderboard | skyscraper | custom */
      variant?: 'square' | 'rectangle' | 'leaderboard' | 'skyscraper' | 'custom'
      /** only used when variant = custom (px values, e.g. "320px") */
      width?: string
      height?: string
      /** compact badge text like "Ad" / "Sponsored" */
      badge?: string
      /** visually hidden heading for a11y landmarks */
      heading?: string
      /** override the max width (px) when responsive, e.g. "336px" */
      maxWidth?: string
    }>(), {
      label: 'Advertisement',
      badge: 'Ad',
      variant: 'rectangle',
      heading: 'Sponsored content'
    })
    
    function pxNum(v?: string) {
      if (!v) return undefined
      const n = Number(String(v).replace('px','').trim())
      return Number.isFinite(n) ? n : undefined
    }
    
    const styleResponsive = computed(() => {
      // Defaults per IAB-ish sizes
      let maxW = 320, ratio = 6/5 // rectangle (300x250 ≈ 1.2 => 5:6 height:width -> width/height 300/250 = 1.2 => aspect-ratio: 300/250 = 6/5)
    
      if (props.variant === 'square')       { maxW = 300; ratio = 1 / 1 }
      if (props.variant === 'rectangle')    { maxW = 300; ratio = 300 / 250 }        // 1.2
      if (props.variant === 'leaderboard')  { maxW = 728; ratio = 728 / 90 }         // ~8.09
      if (props.variant === 'skyscraper')   { maxW = 300; ratio = 300 / 600 }        // 0.5
    
      // Custom variant: compute from provided width/height if possible
      if (props.variant === 'custom') {
        const w = pxNum(props.width)  ?? 320
        const h = pxNum(props.height) ?? 180
        maxW = w
        ratio = w / h
      }
    
      // Allow user override of max width (e.g., 336px large rectangle)
      const overrideMax = pxNum(props.maxWidth)
      if (overrideMax) maxW = overrideMax
    
      // Responsive: width 100% of its parent, capped at maxW, height via aspect-ratio
      return {
        width: '100%',
        maxWidth: `${maxW}px`,
        aspectRatio: `${ratio}`,
      } as Record<string, string>
    })
    </script>
    
    <template>
      <aside class="adph" role="complementary" :aria-label="label">
        <h2 class="sr-only">{{ heading }}</h2>
    
        <span class="adph__badge">{{ badge }}</span>
    
        <!-- Responsive frame: stretches to container width, keeps shape via aspect-ratio -->
        <div class="adph__frame" :style="styleResponsive">
          <div class="adph__skeleton" aria-hidden="true">
            <div class="adph__rows">
              <div class="adph__row adph__row--title" />
              <div class="adph__row" />
              <div class="adph__row" />
              <div class="adph__btn" />
            </div>
          </div>
        </div>
    
        <p class="adph__caption">{{ label }}</p>
      </aside>
    </template>
    
    <style scoped>
    /* Visually hidden utility */
    .sr-only {
      position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
    }
    
    .adph {
      position: relative;
      display: grid;
      gap: 8px;
      justify-items: center;
      font-size: 12px;
      color: rgba(0,0,0,.6);
    }
    :where(html.dark) .adph { color: rgba(255,255,255,.7); }
    
    .adph__badge {
      position: absolute;
      top: -8px;
      left: 8px;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--ui-border, #e5e7eb) 60%, transparent);
      backdrop-filter: blur(2px);
    }
    
    /* Responsive frame:
       - width: 100% of its parent (right rail column)
       - max-width: cap to classic ad width
       - height: auto via aspect-ratio (set inline)
    */
    .adph__frame {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed var(--ui-border, #e5e7eb);
      border-radius: 12px;
      background:
        radial-gradient(ellipse at top left, color-mix(in srgb, var(--ui-bg, #fff) 70%, transparent), transparent 60%),
        radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--ui-bg, #fff) 70%, transparent), transparent 60%);
      overflow: hidden;
      /* Avoid repaint jank when sticky */
      contain: paint;
    }
    
    .adph__skeleton {
      width: 92%;
      height: 86%;
      border-radius: 10px;
      background:
        linear-gradient(100deg,
          rgba(0,0,0,0.06) 20%,
          rgba(0,0,0,0.10) 40%,
          rgba(0,0,0,0.06) 60%);
      background-size: 200% 100%;
      animation: adph-shimmer 1.6s infinite linear;
    }
    
    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .adph__skeleton { animation: none; }
    }
    
    :where(html.dark) .adph__skeleton {
      background:
        linear-gradient(100deg,
          rgba(255,255,255,0.08) 20%,
          rgba(255,255,255,0.14) 40%,
          rgba(255,255,255,0.08) 60%);
    }
    
    @keyframes adph-shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: 0 0; }
    }
    
    .adph__rows {
      width: 100%; height: 100%; padding: 12px;
      display: grid; grid-template-rows: auto auto auto 1fr; gap: 8px;
    }
    
    .adph__row {
      height: 10px; border-radius: 6px;
      background: color-mix(in srgb, currentColor 16%, transparent);
    }
    .adph__row--title { height: 14px; width: 70%; }
    
    .adph__btn {
      align-self: end; justify-self: start;
      width: 96px; height: 26px; border-radius: 8px;
      background: color-mix(in srgb, currentColor 22%, transparent);
    }
    
    .adph__caption { margin: 0; opacity: .7; }
    
    /* Optional: when the right rail gets very narrow (e.g. stacked on mobile),
       let the frame stretch to container width (already 100%)—this just softens the cap */
    @container (max-width: 320px) {
      .adph__frame { max-width: 100% !important; }
    }
    </style>
    