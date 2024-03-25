<script setup>
import { computed } from "vue";

import Gmap from "@/components/Map.vue";

//example components
import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

//images
import background from "@/assets/images/contact-background.jpg";
import { RouterLink } from "vue-router";


let phoneNumber = "+905555870937"
let mail = "mehmet37aksu@gmail.com"
let address = "Mehmet Akif Mahallesi Petrol Yolu Caddesi No:222 Sultanbeyli İstanbul"

let phoneNumberHtml = "0 555 587 09 37"
let phoneLink = computed(() => `tel:${phoneNumber}`) 
let mailLink = computed(() => `mailto:${mail}`) 
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky=true  />
      </div>
    </div>
  </div>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-7">
    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${background})`
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <h1 class="text-white text-center">İletişim</h1>
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h3 class="text-white">Bize aşağıdaki iletişim kanallarından ulaşabilirsiniz.</h3>
              <h4 class="mt-5"> <a :href="phoneLink" class="text-white"> <i class="fas fa-phone me-3"></i> {{ phoneNumberHtml }}</a> </h4>
              <h4 class="mt-5"> <RouterLink :to="{name:'whatsapp'}" class="text-white"> <i class="fab fa-whatsapp me-3"></i> {{ phoneNumberHtml }}</RouterLink> </h4>
              <h4 class="mt-5"> <a :href="mailLink" class="text-white"> <i class="fas fa-at me-3"></i> {{ mail }}</a> </h4>
              <h4 class="mt-5 text-white"> <i class="fas fa-map-marker-alt me-3"></i> {{ address }} </h4>
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h3 class="text-white">Aşağıdan direkt konumumuza ulaşabilirsiniz.</h3>
              <Gmap class="mt-5" height="25rem" width="50rem"></Gmap>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col col-lg-5 mx-auto text-center">
            <h4 class="mb-3">Bizleri sosyal medya kanallarımızdan takip edin!</h4>
          </div>
          <div class="w-100"></div>
          <div class="col col-lg-6 mx-auto text-center">
            <MaterialSocialButton
              route="https://youtube.com/@mehmetaksu4100?feature=shared"
              component="youtube"
              color="youtube"
              label="Youtube"
            />
            <MaterialSocialButton
              route="https://www.facebook.com/share/Gt7QZApxB9VdUrcP/?mibextid=qi2Omg"
              component="facebook-square"
              color="facebook"
              label="Facebook"
            />
            <MaterialSocialButton
              route="https://www.instagram.com/mages__cam?igsh=MWhlMjg1a3lwd2Rheg=="
              component="instagram"
              color="dribbble"
              label="Instagram"
            />
            <MaterialSocialButton
              route="https://www.tiktok.com/@vatan_doga?_t=8kx6hr4LDfi&_r=1"
              component="instagram"
              color="vimeo"
              label="TikTok"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
