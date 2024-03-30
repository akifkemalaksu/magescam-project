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
import AynaPresentation from "./Sections/AynaPresentation.vue";
import DogramaPresentation from "./Sections/DogramaPresentation.vue";

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
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col col-lg-2 mx-auto">
            <img 
        :src="logo"
        :style="{height: '8rem',width:'12rem', display:'block'}"
        alt="Mages Cam logo"
        loading="lazy"
        class="mx-auto"
         />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white ms-2"
              :style="{ display: 'inline-block ' }"
            >
              Mages Cam
            </h1>
            <p class="lead text-white ms-2" :style="{ fontWeight: '500' }">
              Cama dair herşey.
            </p>
          </div>
        </div>
      </div>
    </div>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <DusakabinPresentation id="dusakabin"/>
    <CamPresentation id="cam" />
    <AynaPresentation id="ayna" />
    <DogramaPresentation id="dograma-cesitleri" />


    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${glassBackground})`
        }"
        loading="lazy"
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
                  İstanbul Sultanbeyli'deki merkezimizden, cam işleme ve ayna tasarımı alanında yüksek kaliteli ve özelleştirilmiş çözümler sunuyoruz. Sultanbeyli ve çevresindeki müşterilerimize yönelik geniş hizmet yelpazemiz, duşakabinlerden dekoratif aynalara, özel tasarım camlardan güvenlik ve izolasyon sağlayan ürünlere kadar uzanmaktadır. İstanbul’un bu canlı semtinde, müşteri memnuniyetini ön planda tutarak, projelerinize değer katmayı ve beklentilerinizi aşmayı hedefliyoruz. Sultanbeyli merkezli olarak, bölgesel ihtiyaçlarınıza en uygun çözümleri sunmak için yerel pazarın dinamiklerine hakim bir yaklaşım sergiliyoruz. Projelerinizde size nasıl yardımcı olabileceğimizi keşfetmek ve Sultanbeyli'de cam ve ayna çözümleri konusunda lider seçeneğiniz olmak için bizimle iletişime geçin.
                </p>
                <RouterLink 
                class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                :to="{ name: 'aboutus' }"
                >Hakkımızda</RouterLink>
              </div>
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
              marginEnd="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
