<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("cam");

const titles = {
  masa: "Masa Camı",
  vitrin: "Vitrin Camı",
  kapi: "Kapı Camı",
  dekoratif: "Dekoratif Cam",
};

const descriptions = {
  masa: [
    "6 mm temperli düz masa camı, oval tasarım, zımparalanmış kenar",
    "10 mm temperli dikdörtgen masa camı, şeffaf ve dayanıklı",
    "Yuvarlak masa camı, 8 mm temperli, pürüzsüz yüzey",
    "Özel ölçülü masa camı, lamine seçenek, isteğe bağlı renk",
  ],
  vitrin: [
    "5 mm düz cam vitrin, şeffaf ve sağlam camekan",
    "Temperli vitrin camı, raf sistemli mağaza vitrini",
    "Geniş mağaza vitrin camı, çerçevesiz tasarım",
    "Camekan tipi vitrin camı, 6 mm temperli, kayıt açıklıklı",
  ],
  kapi: [
    "Ahşap kapı cam dolgu, buzlu cam, oyma desenli",
    "Çelik kapı camı, 4 mm temperli, dekoratif bantlı",
    "İç kapı camı, kumlama desenli, özel ölçü",
    "Banyo kapısı buzlu cam, mahremiyet sağlayan yüzey",
  ],
  dekoratif: [
    "Renkli dekoratif cam panel, asit boyalı yüzey",
    "Kumlama desenli dekoratif cam, özel tasarım",
    "Lazer kesim desenli dekoratif cam, modern görünüm",
    "Buzlu dekoratif cam, ışık geçirgen yüzey",
  ],
};
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Cam Çeşitleri</h2>
          <p class="text-muted">
            Masa camından dekoratif cama kadar her ihtiyaca özel cam çözümleri.
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
            :id="'cam-' + catKey"
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
