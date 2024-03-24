<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

import KoseDusakabin from "@/assets/images/kosedusakabin.jpg";
import YarimDaireDusakabin from "@/assets/images/yarimdairedusakabin.jpg";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="KoseDusakabin"
              title="Köşe Duşakabin"
              description="Küçük banyolar için ideal olan köşe duşakabinler, alanı verimli kullanmanıza olanak tanır."
            />

            <RotatingCardBack
              :image="YarimDaireDusakabin"
              title="Yarım Daire Duşakabin"
              description="Yarım daire veya kavisli ön yüze sahip olan bu modeller, modern bir görünüm sunar ve banyonuza şık bir dokunuş ekler."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Daha fazla detay için',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              title="Köşe Duşakabinler"
              description="Alan tasarrufu sağlayan köşe duşakabinleri, küçük banyolar için idealdir; akıllıca tasarımıyla hem fonksiyonel hem de estetik bir çözüm sunar."
            />
            <DefaultInfoCard
              title="Yarım Daire Duşakabinler"
              description="Yarım daire duşakabinler, kavisli tasarımı sayesinde banyoya modern bir hava katarken, geniş kullanım alanı sunar."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              title="Küvet Üzeri Duşakabinler"
              description="Küvet üzeri duşakabinler, mevcut alanı çift amaçlı kullanarak hem duşakabin hem de küvet rahatlığı sağlar; banyonuza pratik bir çekicilik katar."
            />
            <DefaultInfoCard
              class="mt-3"
              title="Yürüyüş Yolu (Walk-In) Duşakabinler"
              description="Kapısız ve engelsiz tasarımıyla yürüyüş yolu duşakabinler, kolay erişim ve modern bir görünüm sunarak banyonuzu lüks bir alana dönüştürür."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
