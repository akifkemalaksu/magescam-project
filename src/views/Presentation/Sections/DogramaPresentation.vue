<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("dograma");

const titles = {
  pvc: "PVC Doğrama",
  aluminum: "Alüminyum Doğrama",
};

const descriptions = {
  pvc: [
    "Beyaz PVC pencere doğrama, ısı yalıtımlı çift cam",
    "Ahşap desenli PVC pencere, enerji verimli profil",
    "PVC sürme kapı sistemi, geniş açıklık, dayanıklı malzeme",
    "Isıcamlı PVC doğrama, ses yalıtımlı, çok odacıklı profil",
  ],
  aluminum: [
    "Sürme alüminyum kapı, termal kırıntılı profil, ısı yalıtımlı",
    "Katlanır alüminyum kapı sistemi, geniş açılım, modern tasarım",
    "Alüminyum pencere doğrama, dayanıklı ve hafif profil",
    "",
  ],
};
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Doğrama Çeşitleri</h2>
          <p class="text-muted">
            PVC ve alüminyum doğrama çözümlerimizle evinize konfor ve güvenlik katın.
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
            :id="'dograma-' + catKey"
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
