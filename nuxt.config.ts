// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@vueuse/nuxt", 
    "@nuxt/fonts",
    "nuxt-icon",
    "@unocss/nuxt"
  ],
})
