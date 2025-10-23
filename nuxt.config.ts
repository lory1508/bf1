// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@vueuse/nuxt'],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: 'Nunito',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900], 
        display: 'swap'
      }
    ]
  },
})