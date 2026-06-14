<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("balkon");

const titles = {
  katlanir: "Katlanır Balkon Camı",
  surgulu: "Sürgülü Balkon Camı",
};

const descriptions = {
  katlanir: [
    "4 kanatlı katlanır cam balkon sistemi, alüminyum profil",
    "Akordiyon tip katlanır balkon camı, polycarbon aksamlı",
    "Isıcamlı katlanır balkon sistemi, 6 mm temperli cam",
    "2 kanatlı katlanır balkon camı, kilitli kulp sistemi",
    "Geniş açıklıklı katlanır cam balkon, 6 panel",
    "Katlanır balkon camı, sessiz ray sistemi, alüminyum profil",
    "Isı yalıtımlı katlanır balkon camı, 8 mm temperli",
    "Polycarbon katlanır balkon sistemi, UV dayanımlı",
  ],
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
