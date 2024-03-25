<script setup>
import { computed  } from "vue";
import DefaultCounterCard from "../../../components/cards/counterCards/DefaultCounterCard.vue";

let sinceYear = 1986;

let since = computed(() =>{
  let nowYear = new Date().getFullYear();
  return nowYear - sinceYear;
})

let messageForExperience = sinceYear + "'dan beri cam işlemesi üzerine engin tecrübelerimizle sizlere hizmet sağlayacağız."
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="Senelik Tecrübe"
                :description="messageForExperience"
                :count="since"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="Alanda Hizmet"
                description="Duşakabin, ayna, sineklik vb. her alanda kaliteli ve güvenilir hizmetler sunuyoruz."
                :count="15"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="info"
                title="Referans"
                description="Müşteri memnuniyeti ve kalite odaklı yaklaşımımız, sektördeki güçlü referanslarımızın temelini oluşturmaktadır."
                :count="10"
                suffix="+"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
