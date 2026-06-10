import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from '@fawmi/vue-google-maps'
import {} from 'bootstrap';
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }
})

app.mount("#app");
