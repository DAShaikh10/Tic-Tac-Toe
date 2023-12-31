import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/Tic-Tac-Toe",
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
