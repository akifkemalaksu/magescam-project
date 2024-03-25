import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutUsView from "../views/AboutUs/AboutUsView.vue";
import Contact from "@/views/Contact/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/#header",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/hakkimizda",
      name: "aboutus",
      component: AboutUsView,
    },
    {
      path: "/iletisim",
      name: "contact",
      component: Contact,
    },
    {
      name: "address",
      path: "/adres-tarifi",
      beforeEnter: (to, from, next) => {
        window.open(
          "https://www.google.com/maps/place/40%C2%B057'39.0%22N+29%C2%B016'04.0%22E/@40.960827,29.2652011,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.960823!4d29.267776?entry=ttu",
          "_blank"
        );
      }
    },
    {
      name: "whatsapp",
      path: "/whatsapp",
      beforeEnter: (to, from, next) => {
        window.open(
          "https://wa.me/+905555870937",
          "_blank"
        );
      }
    },
  ],
});

export default router;
