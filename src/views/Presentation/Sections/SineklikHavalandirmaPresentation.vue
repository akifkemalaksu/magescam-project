<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";

import sineklik1 from "@/assets/images/carousel/sineklik-1.svg";
import sineklik2 from "@/assets/images/carousel/sineklik-2.svg";
import sineklik3 from "@/assets/images/carousel/sineklik-3.svg";
import sineklik4 from "@/assets/images/carousel/sineklik-4.svg";

import havalandirma1 from "@/assets/images/carousel/dograma-menfez-1.webp";
import havalandirma2 from "@/assets/images/carousel/dograma-menfez-2.svg";
import havalandirma3 from "@/assets/images/carousel/dograma-menfez-3.svg";
import havalandirma4 from "@/assets/images/carousel/dograma-menfez-4.svg";

const sineklikImages = [
  { src: sineklik1, title: "PVC Sineklik 1", description: "PVC sineklik, pencere tipi, beyaz profil, kolay montaj" },
  { src: sineklik2, title: "PVC Sineklik 2", description: "Alüminyum sineklik, dayanıklı çerçeve, sürgülü sistem" },
  { src: sineklik3, title: "Stor Sineklik 3", description: "Stor sineklik, toplanabilir yapı, her pencereye uyum" },
  { src: sineklik4, title: "Plise Sineklik 4", description: "Plise sineklik, katlanabilir tasarım, şık görünüm" },
];

const havalandirmaImages = [
  { src: havalandirma1, title: "Menfez 1", description: "Duvara monte PVC menfez, ayarlanabilir hava akışı" },
  { src: havalandirma2, title: "Menfez 2", description: "Izgaralı havalandırma menfezi, banyo ve mutfak için" },
  { src: havalandirma3, title: "Menfez 3", description: "Kapı altı menfez, doğal hava sirkülasyonu sağlar" },
  { src: havalandirma4, title: "Menfez 4", description: "Dekoratif duvar menfezi, iç mekan havalandırma" },
];
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Sineklik & Havalandırma</h2>
          <p class="text-muted">
            Sineklik ve menfez çözümlerimizle evinizde temiz hava ve böceksiz ortam.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <ImageCarousel
            id="sineklik"
            title="Sineklik"
            :images="sineklikImages"
          />
        </div>
        <div class="col-lg-6 mb-4">
          <ImageCarousel
            id="havalandirma"
            title="Menfez / Havalandırma"
            :images="havalandirmaImages"
          />
        </div>
      </div>
    </div>
  </section>
</template>
