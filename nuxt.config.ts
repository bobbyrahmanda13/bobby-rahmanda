// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
    "@unocss/nuxt"
  ],
})
