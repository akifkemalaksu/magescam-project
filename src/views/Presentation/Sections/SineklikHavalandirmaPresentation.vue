<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";

import havalandirma1 from "@/assets/images/carousel/dograma-menfez-1.webp";

const havalandirmaImages = [
  { src: havalandirma1, title: "Menfez", description: "Duvara monte PVC menfez, ayarlanabilir hava akışı" },
];
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Havalandırma</h2>
          <p class="text-muted">
            Menfez çözümlerimizle evinizde temiz hava sirkülasyonu.
          </p>
        </div>
      </div>

      <div class="row">
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
