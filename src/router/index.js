import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutUsView from "../views/AboutUs/AboutUsView.vue";
import Contact from "@/views/Contact/Contact.vue";
import NotFound from "@/views/errors/NotFound.vue";

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
      path: "/404",
      name: "404",
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    },
    {
      name: "address",
      path: "/adres-tarifi",
      beforeEnter: (to, from, next) => {
        window.open(
          "https://www.google.com/maps/dir//Mehmet+Akif,+Mages+Cam,+Petrol+Yolu+Cd.+No:222,+34920+Sultanbeyli%2F%C4%B0stanbul/@40.9608107,29.2676792,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cad1eb33de918d:0xc3405f9ede8e5818!2m2!1d29.2678063!2d40.9607645?entry=ttu",
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
