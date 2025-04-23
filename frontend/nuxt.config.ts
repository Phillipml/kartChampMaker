export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/scss/main.scss"],
  components: [
    { path: "~/src/components", pathPrefix: false },
    { path: "~/src/sections", pathPrefix: false },
  ],
});
