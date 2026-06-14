<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("ayna");

const titles = {
  dekoratif: "Dekoratif Ayna",
  zemin: "Zemin Aynası",
  banyo: "Banyo Aynası",
  masaustu: "Masa Üstü Aynası",
};

const descriptions = {
  dekoratif: [
    "Altın varak çerçeveli dekoratif duvar aynası, vintage tasarım",
    "Led aydınlatmalı dekoratif ayna, modern banyolar için",
    "Oval çerçeveli dekoratif ayna, klasik ve zarif görünüm",
    "Büyük boy duvar aynası, ince metal çerçeveli",
  ],
  zemin: [
    "Ayaklı boy aynası, oval tasarım, metal ayaklı",
    "Devasa zemin aynası, ahşap çerçeveli, şık duruş",
    "Metal çerçeveli zemin aynası, modern iç mekanlar için",
    "Oval zemin aynası, ince profil, hafif ve taşınabilir",
  ],
  banyo: [
    "Led aydınlatmalı banyo aynası, buğu önleyici yüzey",
    "Krom çerçeveli banyo aynası, fonksiyonel ve şık",
    "Dolaplı banyo aynası, gizli depolama alanlı",
    "Geniş banyo aynası, armatürsüz sade tasarım",
  ],
  masaustu: [
    "Işıklı makyaj aynası, ayarlanabilir açı, büyüteçli",
    "Çift taraflı masa üstü aynası, normal ve büyütmeli",
  ],
};
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Ayna Çeşitleri</h2>
          <p class="text-muted">
            Dekoratif aynalardan banyo aynalarına, her stile uygun geniş ayna koleksiyonu.
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
            :id="'ayna-' + catKey"
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
