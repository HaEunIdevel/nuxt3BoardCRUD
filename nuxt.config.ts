// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  hooks: {
    "pages:extend"(routes) {
      routes.push({
        name: "list",
        path: "/",
        file: "~/pages/list.vue",
      });
    },
  },
});
