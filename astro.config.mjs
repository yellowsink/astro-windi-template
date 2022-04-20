import { defineConfig } from "astro/config";
import WindiCss from "vite-plugin-windicss";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCss()],
  },
});
