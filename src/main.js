import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import App from "./App.vue";
import { routes } from "./router";

// Stiller (SSR/prerender güvenli — yalnızca CSS)
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/scss/material-kit.scss";

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  async ({ app }) => {
    app.use(createPinia());

    // Tarayıcıya (window/document) bağımlı olan her şey yalnızca client'ta yüklenir.
    // `import.meta.env.SSR` derleme zamanı sabiti olduğundan bu blok
    // sunucu (prerender) bundle'ından tamamen çıkarılır.
    if (!import.meta.env.SSR) {
      await import("bootstrap");
      await import("./assets/js/material-input.js");
      await import("./assets/js/material-kit-pro.js");
      await import("./assets/js/ripple-effect.js");

      const { default: VueGoogleMaps } = await import("@fawmi/vue-google-maps");
      app.use(VueGoogleMaps, {
        load: {
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        },
      });
    }
  }
);
