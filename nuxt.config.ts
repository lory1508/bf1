// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/fonts", "@vueuse/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: "Bebas Neue",
        provider: "google",
        weights: [300, 400, 500, 600, 700],
        display: "swap",
      },
    ],
  },
});
