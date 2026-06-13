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
  <div class="card card-body blur shadow-blur mx-1 mx-md-4 mt-7">
    <div
      class="page-header py-6 py-md-5 mt-sm-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundColor: '#191925',
        backgroundImage: `url(${background})`
      }"
    >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <h1 class="text-white text-center">Hakkımızda</h1>
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h4 class="text-white">Mages Cam, işyeri sahibi Mehmet Aksu'nun 1986 yılından bu yana cam ve ayna sektöründe edindiği kapsamlı tecrübeler üzerine inşa edilmiştir.</h4>
              <p class="text-white mt-4 lead">İstanbul Sultanbeyli'deki faaliyetlerimiz, 'Cama Dair Her Şey' felsefesiyle şekillenmekte, Mehmet Bey'in sektördeki derin bilgi birikimi ve yenilikçi yaklaşımlarıyla duşakabinlerden masa camına, vitrin camından kapı camına kadar geniş bir ürün yelpazesi sunmaktadır.</p>
              <hr class="my-4 text-white opacity-2">
              <p class="text-white">Bu uzun yıllar süren tecrübe, özellikle özelleştirilmiş duşakabin çözümlerimizde kendini gösterir. Her banyo boyutu ve tarzına uygun, yenilikçi ve dayanıklı duşakabinler tasarlayarak, banyolarınıza hem estetik hem de işlevsellik katmaktayız. Su sıçramalarını önleyen ve banyonuzu daha ferah gösteren tasarımlarımız, kullanım kolaylığı sunarak, Mehmet Aksu'nun sektöre kazandırdığı kaliteyi yansıtmaktadır.</p>
            </div>
            <div class="col-sm-12 col-md-6 mt-5 text-center">
              <img
              class="border-radius-xl"
              :src="outsideDukkan"
              loading="lazy"
              :style="{height: 'auto', maxHeight: '50vh', width:'100%'}"
              alt="Mages cam dışarıdan görünüm"
              />
            </div>

            <div class="w-100 my-5"></div>

            <div class="col-sm-12 col-md-6 mt-5 text-center">
              <img
              class="border-radius-xl"
              :src="insideDukkan"
              loading="lazy"
              :style="{height: 'auto', maxHeight: '50vh', width:'100%'}"
              alt="Mages cam içeriden görünüm"
              />
            </div>
            <div class="col-sm-12 col-md-6 mt-5">
              <h4 class="text-white">Yenilikçi yaklaşımımız, masa camı, vitrin camı ve kapı camı gibi diğer alanlara da sıçramış durumdadır.</h4>
              <p class="text-white mt-4 lead">Sultanbeyli merkezimizden yola çıkarak, her bir proje için özel olarak tasarlanmış çözümlerle, camın estetiğini ve fonksiyonelliğini birleştiriyoruz. Bu ürünlerimizle, mekanlarınıza değer katmayı ve farklı ihtiyaçlara yanıt vermeyi amaçlıyoruz.</p>
              <hr class="my-4 text-white opacity-2">
              <p class="text-white">Ayna tasarımlarımızda ise Mehmet Bey'in sektördeki tecrübesi ve estetik anlayışı, dekoratif ayna, banyo aynası ve zemin aynası gibi ürünlerimizin her birine yansımaktadır. Mages Cam olarak, cam ve ayna ihtiyaçlarınız için yenilikçi ve kaliteli çözümler sunmaya devam edeceğiz.</p>
            </div>
          </div>
        </div>
      </div>
    <hr class="my-5 mx-5 opacity-3">

    <!-- Contact Info Section -->
    <div class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h3 class="text-dark">Bize Ulaşın</h3>
          </div>
          <div class="col-sm-12 col-md-3 text-center mb-3 mb-md-0">
            <i class="fas fa-phone fa-2x text-info mb-3"></i>
            <h5 class="text-dark">Telefon</h5>
            <p><a href="tel:+905555870937" class="text-dark">0 555 587 09 37</a></p>
          </div>
          <div class="col-sm-12 col-md-3 text-center mb-3 mb-md-0">
            <i class="fab fa-whatsapp fa-2x text-success mb-3"></i>
            <h5 class="text-dark">WhatsApp</h5>
            <p><a href="/whatsapp" class="text-dark">0 555 587 09 37</a></p>
          </div>
          <div class="col-sm-12 col-md-3 text-center mb-3 mb-md-0">
            <i class="fas fa-envelope fa-2x text-info mb-3"></i>
            <h5 class="text-dark">E-posta</h5>
            <p><a href="mailto:mehmet37aksu@gmail.com" class="text-dark">mehmet37aksu@gmail.com</a></p>
          </div>
          <div class="col-sm-12 col-md-3 text-center">
            <i class="fas fa-map-marker-alt fa-2x text-danger mb-3"></i>
            <h5 class="text-dark">Adres</h5>
            <p class="text-dark">Sultanbeyli, İstanbul</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5 mx-5 opacity-3">

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
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
