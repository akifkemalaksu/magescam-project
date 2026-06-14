<script setup>
import ImageCarousel from "../../../components/cards/ImageCarousel.vue";
import { getCategoryImages } from "../../../utils/imageLoader.js";

const cats = getCategoryImages("dusakabin");

const titles = {
  kose: "Köşe Duşakabin",
  "yarim-daire": "Yarım Daire Duşakabin",
  "kuvet-uzeri": "Küvet Üzeri Duşakabin",
  "walk-in": "Walk-In Duşakabin",
};

const descriptions = {
  kose: [
    "90x90 cm ölçülerinde temperli cam, krom menteşe sistemi",
    "Asimetrik köşe tasarımı, 6 mm temperli cam, paslanmaz aksesuar",
    "Döner kapılı köşe model, kiremit desenli dış cephe",
    "Sürgülü kapılı geniş köşe duşakabin, mermer görünümlü tepsi",
  ],
  "yarim-daire": [
    "100x100 cm radyüslü yarım daire model, kavisli ön yüz",
    "Döner kapılı yarım daire duşakabin, altın rengi profil",
    "Sürgülü kapılı geniş yarım daire, beyaz kompakt tepsi",
    "90x90 cm kompakt yarım daire, krom fitil ve tutamak",
  ],
  "kuvet-uzeri": [
    "Küvet başına monte sabit panel + hareketli kanat",
    "Akrilik küvet üzeri katlanır kanat sistemi",
    "Köşe küvet üzeri cam bölme, 6 mm temperli cam",
    "Düz küvet üzeri sürgülü cam panel sistemi",
  ],
  "walk-in": [
    "Kapısız walk-in tasarım, 8 mm temperli cam, L şeklinde panel",
    "Tek sabit cam panelli minimalist walk-in duş",
    "Geniş walk-in alan, ince profil, 6 mm temperli cam",
    "Modern walk-in duşakabin, krom aksesuarlı, kare tepsi",
  ],
};
</script>

<template>
  <section class="my-5 py-5" style="scroll-margin-top: 100px;">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="font-weight-bolder">Duşakabin Çeşitleri</h2>
          <p class="text-muted">
            Banyonuza uygun geniş duşakabin model yelpazemizle kaliteli ve şık çözümler sunuyoruz.
          </p>
        </div>
      </div>

      <div class="row">
        <div
          v-for="(catKey, idx) of Object.keys(cats)"
          :key="catKey"
          class="col-lg-6 mb-4"
        >
          <ImageCarousel
            :id="'dusakabin-' + catKey"
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
