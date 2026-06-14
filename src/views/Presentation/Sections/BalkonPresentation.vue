<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("balkon");

const titles = {
  surgulu: "Sürgülü Balkon Camı",
};

const descriptions = {
  surgulu: [
    "2 kanat sürme cam balkon, alüminyum raylı sistem",
    "3 kanat sürgülü balkon camı, sessiz ray mekanizması",
    "Geniş açıklıklı sürme cam balkon, ısıcam yalıtımlı",
    "Raylı sürgülü cam balkon sistemi, kilitlenebilir panel",
    "Ekstra geniş sürme cam balkon, 5 kanatlı sistem",
  ],
};
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Balkon Camı Sistemleri</h2>
          <p class="text-muted">
            Balkonunuzu cam sistemlerimizle 4 mevsim kullanıma açın.
          </p>
        </div>
      </div>

      <div class="row">
        <!-- Katlanır Balkon (no photos yet, shows placeholder) -->
        <div class="col-lg-6 mb-4">
          <ImageCarousel
            id="balkon-katlanir"
            title="Katlanır Balkon Camı"
            :images="[]"
          />
        </div>

        <!-- Sürgülü Balkon (has photos) -->
        <div
          v-for="catKey of Object.keys(cats)"
          :key="catKey"
          class="col-lg-6 mb-4"
        >
          <ImageCarousel
            :id="'balkon-' + catKey"
            :title="titles[catKey] || catKey"
            :images="cats[catKey].map((img, i) => ({
              src: img.src,
              title: titles[catKey] || catKey,
              description: (descriptions[catKey] || [])[i] || ''
            }))"
          />
        </div>
      </div>
    </div>
  </section>
</template>
