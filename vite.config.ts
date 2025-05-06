import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    proxy: {
      "/directus": {
        target: "https://whale-app-jcm48.ondigitalocean.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/directus/, ""),
      },
    },
  },
});
