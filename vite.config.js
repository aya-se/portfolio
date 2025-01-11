// vite.config.js
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";

export default {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  server: {
    port: 8080,
  },
};
