<script setup>
import RotatingCard from "../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";

import DekoratifAyna from "@/assets/images/dekoratifayna.jpg";
import ZeminAyna from "@/assets/images/zeminayna.jpg";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="DekoratifAyna"
              title="Dekoratif Ayna"
              description="Sanatsal dokunuşlarla mekanınıza estetik bir hava katın. Dekoratif aynalar, odanızın stilini yükselterek benzersiz bir atmosfer oluşturur."
            />

            <RotatingCardBack
              :image="ZeminAyna"
              size="contain"
              title="Zemin Aynası"
              description="Zemin aynaları, geniş yansıma alanı sunarak odanızı daha geniş ve davetkar hale getirir. Ayakta durabilen tasarımları ile kolay yerleştirme imkanı sunar."
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              title="Dekoratif Ayna"
              description="Sanatsal dokunuşlarla mekanınıza estetik bir hava katın. Dekoratif aynalar, odanızın stilini yükselterek benzersiz bir atmosfer oluşturur."
            />
            <DefaultInfoCard
              title="Zemin Aynası"
              description="Zemin aynaları, geniş yansıma alanı sunarak odanızı daha geniş ve davetkar hale getirir. Ayakta durabilen tasarımları ile kolay yerleştirme imkanı sunar."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              title="Banyo Aynası"
              description="Fonksiyonellik ve stilin birleşimi. Banyo aynaları, sabah rutinleriniz için idealdir ve banyonuza modern bir dokunuş katar."
            />
            <DefaultInfoCard
              class="mt-3"
              title="Masa Üstü Aynası"
              description="Kişisel bakımınız için mükemmel yardımcı. Masa üstü aynalar, detaylı makyaj ve bakım işlemleri için idealdir, her masaya şıklık katar."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
