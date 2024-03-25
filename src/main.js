import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDO7W2xsUxkVkytsXo7tNGzUzjrVfHebjc'
    }
})

app.mount("#app");
