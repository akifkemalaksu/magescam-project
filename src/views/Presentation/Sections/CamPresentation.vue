<script setup>
import RotatingCard from "../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";

import MasaCam from "@/assets/images/masacam.jpg";
import VitrinCam from "@/assets/images/vitrincam.jpg";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="MasaCam"
              size="cover"
              title="Masa Camı"
              description="Dayanıklılığı ve şıklığı bir arada sunan masa camları, her türlü mekâna modern bir dokunuş ekler ve kullanım alanınızı aydınlatır."
            />

            <RotatingCardBack
              :image="VitrinCam"
              size="contain"
              title="Vitrin Camı"
              description="Ürünlerinizi sergilemek için ideal olan vitrin camları, maksimum görünürlük sağlar ve mekânınıza estetik bir hava katar."
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              title="Masa Camı"
              description="Dayanıklılığı ve şıklığı bir arada sunan masa camları, her türlü mekâna modern bir dokunuş ekler ve kullanım alanınızı aydınlatır."
            />
            <DefaultInfoCard
              title="Vitrin Camı"
              description="Ürünlerinizi sergilemek için ideal olan vitrin camları, maksimum görünürlük sağlar ve mekânınıza estetik bir hava katar."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              title="Kapı Camı"
              description="Hem iç hem de dış mekân kapılarında kullanılan kapı camları, doğal ışığı içeri alırken, mekânınıza şeffaflık ve ferahlık katıyor."
            />
            <DefaultInfoCard
              class="mt-3"
              title="Dekoratif Cam"
              description="Sanatsal desenler ve renklerle zenginleştirilmiş dekoratif camlar, mekânlarınıza kişisellik ve benzersiz bir atmosfer sağlar."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
