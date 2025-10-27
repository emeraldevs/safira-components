import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module'
  ],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
