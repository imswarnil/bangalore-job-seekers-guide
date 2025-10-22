export default defineNuxtPlugin(() => {
    // Avoid double-injecting the script on SPA navigations
    if (document.getElementById('adsbygoogle-js')) return
  
    const s = document.createElement('script')
    s.id = 'adsbygoogle-js'
    s.async = true
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1291242080282540'
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)
  
    // Ensure the global queue exists
    // @ts-ignore
    window.adsbygoogle = window.adsbygoogle || []
  })
  