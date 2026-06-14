<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";

import havalandirma1 from "@/assets/images/carousel/dograma-menfez-1.webp";

const havalandirmaImages = [
  { src: havalandirma1, title: "Havalandırma Menfezi", description: "Doğalgaz tesisatı için TS EN 14800 uyumlu duvar tipi havalandırma menfezi, doğal gaz akışı ve güvenli tahliye sağlar" },
];
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Sineklik & Havalandırma Menfezleri</h2>
          <p class="text-muted">
            Evinizde güvenli doğalgaz kullanımı ve sağlıklı banyo/tuvalet havalandırması için menfez çözümleri.
          </p>
        </div>
      </div>

      <div class="row">
        <!-- Sineklik (no photos yet, shows placeholder) -->
        <div class="col-lg-6 mb-4">
          <ImageCarousel
            id="sineklik"
            title="Sineklik"
            :images="[]"
          />
        </div>

        <!-- Havalandırma Menfezleri (has 1 photo) -->
        <div class="col-lg-6 mb-4">
          <ImageCarousel
            id="havalandirma"
            title="Havalandırma Menfezleri"
            :images="havalandirmaImages"
          />
        </div>
      </div>
    </div>
  </section>
</template>
