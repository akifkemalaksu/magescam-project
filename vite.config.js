import { fileURLToPath, URL } from "url";
import { existsSync, readFileSync } from "fs";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/**
 * src/data/blog-posts.json varsa slug listesini döndür.
 * CI build öncesi production API'den güncel veriyi çeker,
 * yoksa repodaki seed data kullanılır.
 */
function getBlogSlugs() {
  const dataPath = path.resolve(
    fileURLToPath(new URL(".", import.meta.url)),
    "src/data/blog-posts.json"
  );
  if (existsSync(dataPath)) {
    try {
      const posts = JSON.parse(readFileSync(dataPath, "utf-8"));
      return posts.map((p) => `/blog/${p.slug}`);
    } catch {
      return [];
    }
  }
  return [];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      "@fawmi/vue-google-maps",
      "fast-deep-equal",
    ],
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
    async includedRoutes(paths) {
      // Bileşeni olmayan (yalnızca JS yönlendirme) ve dinamik yolları hariç tut.
      const existing = paths.filter(
        (p) =>
          !["/adres-tarifi", "/whatsapp"].includes(p) &&
          !p.includes(":") &&
          !p.includes("*")
      );

      // Blog route'larını blog-posts.json'dan ekle
      const blogSlugs = getBlogSlugs();
      const blogRoutes = ["/blog", ...blogSlugs];

      return [...existing, ...blogRoutes];
    },
  },
});
