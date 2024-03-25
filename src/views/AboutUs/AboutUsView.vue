<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";


//images
import background from "@/assets/images/aboutus-background.jpg";
import insideDukkan from "@/assets/images/inside-dukkan.jpg";
import outsideDukkan from "@/assets/images/outside-dukkan.jpg";

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
              <h1 class="text-white text-center">Hakkımızda</h1>
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h4 class="text-white">Mages Cam, işyeri sahibi Mehmet Aksu'nun 1986 yılından bu yana cam ve ayna sektöründe edindiği kapsamlı tecrübeler üzerine inşa edilmiştir. İstanbul Sultanbeyli'deki faaliyetlerimiz, 'Cama Dair Her Şey' felsefesiyle şekillenmekte, Mehmet Bey'in sektördeki derin bilgi birikimi ve yenilikçi yaklaşımlarıyla duşakabinlerden masa camına, vitrin camından kapı camına kadar geniş bir ürün yelpazesi sunmaktadır.</h4>
              <h4 class="text-white mt-5">Bu uzun yıllar süren tecrübe, özellikle özelleştirilmiş duşakabin çözümlerimizde kendini gösterir. Her banyo boyutu ve tarzına uygun, yenilikçi ve dayanıklı duşakabinler tasarlayarak, banyolarınıza hem estetik hem de işlevsellik katmaktayız. Su sıçramalarını önleyen ve banyonuzu daha ferah gösteren tasarımlarımız, kullanım kolaylığı sunarak, Mehmet Aksu'nun sektöre kazandırdığı kaliteyi yansıtmaktadır.</h4>
            </div>
            <div class="col-sm-12 col-md-6 mt-5 text-center">
              <img
              class="border-radius-xl"
              :src="outsideDukkan"
              :style="{height: '35rem',width:'35rem'}"
              alt="Mages cam dışarıdan görünüm"
              />
            </div>

            <div class="w-100 my-5"></div>

            <div class="col-sm-12 col-md-6 mt-5 text-center">
              <img
              class="border-radius-xl"
              :src="insideDukkan"
              :style="{height: '35rem',width:'35rem'}"
              alt="Mages cam içeriden görünüm"
              />
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h4 class="text-white">Mehmet Aksu'nun liderliğindeki yenilikçi yaklaşımımız, masa camı, vitrin camı ve kapı camı gibi diğer alanlara da sıçramış durumdadır. Sultanbeyli merkezimizden yola çıkarak, her bir proje için özel olarak tasarlanmış çözümlerle, camın estetiğini ve fonksiyonelliğini birleştiriyoruz. Bu ürünlerimizle, mekanlarınıza değer katmayı ve farklı ihtiyaçlara yanıt vermeyi amaçlıyoruz.</h4>
              <h4 class="text-white mt-5">Ayna tasarımlarımızda ise Mehmet Bey'in sektördeki tecrübesi ve estetik anlayışı, dekoratif ayna, banyo aynası ve zemin aynası gibi ürünlerimizin her birine yansımaktadır. Bu aynalarla, mekanlarınıza değer katmayı ve yaşam alanlarınızı güzelleştirmeyi hedefliyoruz. Mages Cam olarak, Mehmet Aksu'nun öncülüğünde, cam ve ayna ihtiyaçlarınız için yenilikçi ve kaliteli çözümler sunmaya devam edeceğiz.</h4>
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
