<script setup>
import RotatingCard from "../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";

import Pvc from "@/assets/images/pvc.jpg";
import Sineklik from "@/assets/images/sineklik.jpg";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="Pvc"
              title="Pvc Doğrama"
              description="Isı ve ses yalıtımında üstün performans sunan PVC doğrama, enerji verimliliği yüksek ve bakımı kolay bir seçenektir. Çeşitli renk ve tasarımlarıyla her türlü bina estetiğine uyum sağlar."
            />

            <RotatingCardBack
              :image="Sineklik"
              title="Sineklik"
              description="Sineklikler, havalandırma ihtiyacını zararlı böceklerden korunarak sağlayan pratik bir çözümdür. Farklı montaj seçenekleriyle pencereler ve kapılar için uygundur, temiz hava alımını kolaylaştırırken evinizi korur."
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              title="PVC Doğrama"
              description="Isı ve ses yalıtımında üstün performans sunan PVC doğrama, enerji verimliliği yüksek ve bakımı kolay bir seçenektir. Çeşitli renk ve tasarımlarıyla her türlü bina estetiğine uyum sağlar."
            />
            <DefaultInfoCard
              class="mt-3"
              title="Alüminyum Doğrama"
              description="Dayanıklılık ve modern estetiği bir arada sunan alüminyum doğrama, mimari projelerde tercih edilen bir çözümdür. Hafifliği ve yüksek koruma özellikleriyle dış mekanlarda uzun süreli kullanım için idealdir."
            />
            
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              title="Sineklik"
              description="Sineklikler, havalandırma ihtiyacını zararlı böceklerden korunarak sağlayan pratik bir çözümdür. Farklı montaj seçenekleriyle pencereler ve kapılar için uygundur, temiz hava alımını kolaylaştırırken evinizi korur."
            />
            <DefaultInfoCard
              class="mt-3"
              title="Menfez Açma"
              description="İç mekanların hava kalitesini artıran menfez açma işlemleri, mekanların doğal havalandırmasını sağlayarak sağlıklı yaşam alanları oluşturur. Özellikle banyo ve mutfaklarda nem kontrolü için önemlidir."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
