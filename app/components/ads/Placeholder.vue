<script setup lang="ts">
    const props = withDefaults(defineProps<{
      label?: string
      /** preset: square | rectangle | leaderboard | skyscraper | custom */
      variant?: 'square' | 'rectangle' | 'leaderboard' | 'skyscraper' | 'custom'
      /** only used when variant = custom */
      width?: string
      height?: string
      /** compact badge text like "Ad" / "Sponsored" */
      badge?: string
    }>(), {
      label: 'Advertisement',
      badge: 'Ad',
      variant: 'rectangle'
    })
    
    const sizeStyle = computed(() => {
      if (props.variant === 'square') return { width: '300px', height: '300px' }
      if (props.variant === 'rectangle') return { width: '300px', height: '250px' }       // 300×250
      if (props.variant === 'leaderboard') return { width: '728px', height: '90px' }
      if (props.variant === 'skyscraper') return { width: '300px', height: '600px' }
      // custom
      return { width: props.width || '320px', height: props.height || '180px' }
    })
    </script>
    
    <template>
      <aside class="adph" role="complementary" :aria-label="label">
        <span class="adph__badge">{{ badge }}</span>
        <div class="adph__frame" :style="sizeStyle">
          <div class="adph__skeleton">
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
    .adph {
      position: relative;
      display: grid;
      gap: 8px;
      justify-items: center;
      font-size: 12px;
      color: rgba(0,0,0,.6);
    }
    :where(html.dark) .adph { color: rgba(255,255,255,.6); }
    
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
      width: 100%;
      height: 100%;
      padding: 12px;
      display: grid;
      grid-template-rows: auto auto auto 1fr;
      gap: 8px;
    }
    
    .adph__row {
      height: 10px;
      border-radius: 6px;
      background: color-mix(in srgb, currentColor 16%, transparent);
    }
    .adph__row--title { height: 14px; width: 70%; }
    
    .adph__btn {
      align-self: end;
      justify-self: start;
      width: 96px;
      height: 26px;
      border-radius: 8px;
      background: color-mix(in srgb, currentColor 22%, transparent);
    }
    
    .adph__caption {
      margin: 0;
      opacity: .7;
    }
    </style>
    