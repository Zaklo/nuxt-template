export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },

  nitro: {
    logLevel: 1,
    compressPublicAssets: { gzip: false, brotli: true },
    preset: 'node-server',
    routeRules: {
      // '/**': { swr: 10 },
      '/_nuxt/**': { headers: { 'Cache-Control': 'max-age=' + 31536000 } },
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en'
      },
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt template',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
      ],
    }
  },

  css: ['~/assets/styles/index.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/common/index.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      include: ['escape-html'],
    },
  },
})
