import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/sections/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
