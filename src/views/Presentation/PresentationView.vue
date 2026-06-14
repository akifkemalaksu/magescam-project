<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import DusakabinPresentation from "./Sections/DusakabinPresentation.vue";
import CamPresentation from "./Sections/CamPresentation.vue";
import BalkonPresentation from "./Sections/BalkonPresentation.vue";
import AynaPresentation from "./Sections/AynaPresentation.vue";
import DogramaPresentation from "./Sections/DogramaPresentation.vue";
import SineklikHavalandirmaPresentation from "./Sections/SineklikHavalandirmaPresentation.vue";

//images
import background from "@/assets/images/header-background-presentation.jpg";
import logo  from "@/assets/images/logos/just-logo-original.png"
import glassBackground from "@/assets/images/glass-background.jpg";
import { RouterLink } from "vue-router";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky=true  />
      </div>
    </div>
  </div>
  <div
    id="header"
      class="page-header min-vh-75"
      :style="`background-image: url(${background})`"
    >
      <div class="container">
        <div class="row">
          <div class="col col-lg-2 mx-auto">
            <img 
        :src="logo"
        :style="{height: '8rem',width:'12rem', display:'block'}"
        alt="Mages Cam logo"
        loading="lazy"
        class="mx-auto mt-6 mt-md-4"
         />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white">
              Mages Cam
            </h1>
            <h2 class="lead text-white" :style="{ fontWeight: '500' }">
              Cama dair her şey.
            </h2>
            <div class="mt-4">
              <a href="/whatsapp" class="btn btn-success btn-lg px-4 py-2 me-2">
                <i class="fab fa-whatsapp me-2"></i> WhatsApp
              </a>
              <RouterLink 
                class="btn btn-outline-light btn-lg px-4 py-2"
                :to="{ name: 'aboutus' }"
              >Hakkımızda</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="card card-body blur shadow-blur mx-1 mx-md-4 mt-n4 mt-md-n6">
    <PresentationCounter />
    <DusakabinPresentation id="dusakabin"/>
    <CamPresentation id="cam" />
    <BalkonPresentation id="balkon" />
    <AynaPresentation id="ayna" />
    <DogramaPresentation id="dograma-cesitleri" />
    <SineklikHavalandirmaPresentation id="sineklik-havalandirma" />


    <div
      class="page-header py-6 py-md-5 mt-sm-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundColor: '#191925',
        backgroundImage: `url(${glassBackground})`
      }"
    >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 text-center">
                <h3 class="text-white">
                  Bizi daha yakından tanımak ister misiniz?
                </h3>
                <p class="text-white text-md">
                  İstanbul Sultanbeyli'deki merkezimizden, cam işleme ve ayna tasarımı alanında yüksek kaliteli ve özelleştirilmiş çözümler sunuyoruz.
                </p>
                <p class="text-white mt-3">
                  Duşakabinlerden dekoratif aynalara, özel tasarım camlardan güvenlik ve izolasyon sağlayan ürünlere kadar geniş hizmet yelpazemizle, müşteri memnuniyetini ön planda tutuyoruz.
                </p>
                <p class="text-white mt-3">
                  Projelerinizde size nasıl yardımcı olabileceğimizi keşfetmek için bizimle iletişime geçin.
                </p>
                <RouterLink 
                class="btn btn-sm mb-0 bg-gradient-info px-5 py-3 mt-4"
                :to="{ name: 'aboutus' }"
                >Hakkımızda</RouterLink>
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
              route="https://www.instagram.com/magescam?igsh=MWhlMjg1a3lwd2Rheg=="
              component="instagram"
              color="dribbble"
              label="Instagram"
            />
            <MaterialSocialButton
              route="https://www.tiktok.com/@vatan_doga?_t=8kx6hr4LDfi&_r=1"
              component="instagram"
              color="vimeo"
              label="TikTok"
              marginEnd="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
