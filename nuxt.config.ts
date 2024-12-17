import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify']
  },

  plugins: [
    '~/plugins/vuetify.ts'
  ],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
    // ...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  compatibilityDate: '2024-12-17'
})