import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps:{
    include: [
      "@fawmi/vue-google-maps",
      "fast-deep-equal",
    ]
  },
  // SSR/prerender sırasında Node'un çözemediği paketleri Vite bundle etsin.
  ssr: {
    noExternal: ["vue-count-to"],
  },
  // vite-ssg (statik prerender) ayarları
  ssgOptions: {
    script: "async",
    dirStyle: "flat", // /hakkimizda.html -> nginx "try_files ... $uri.html" ile redirect'siz
    formatting: "minify",
    includedRoutes(paths) {
      // Bileşeni olmayan (yalnızca JS yönlendirme) ve dinamik yolları hariç tut.
      return paths.filter(
        (path) =>
          !["/adres-tarifi", "/whatsapp"].includes(path) &&
          !path.includes(":") &&
          !path.includes("*")
      );
    },
  },
});
