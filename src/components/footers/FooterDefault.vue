<script setup>
import Gmap from "@/components/Map.vue";
import { computed } from "vue";

let phoneNumber = "+905555870937"
let mail = "mehmet37aksu@gmail.com"
let address = "Mehmet Akif Mahallesi Petrol Yolu Caddesi No:222 Sultanbeyli İstanbul"

let phoneNumberHtml = "0 555 587 09 37"
let phoneLink = computed(() => `tel:${phoneNumber}`) 
let mailLink = computed(() => `mailto:${mail}`) 

</script>
<template>
  <footer class="footer pt-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6 class="fw-bold mb-4">İletişim</h6>
          <p> <a :href="phoneLink"> <i class="fas fa-phone me-3"></i> {{ phoneNumberHtml }}</a> </p>
          <p> <a :href="mailLink"> <i class="fas fa-at me-3"></i> {{ mail }}</a> </p>
          <p> <i class="fas fa-map-marker-alt me-3"></i> {{ address }} </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <h6 class="fw-bold mb-4">Konum</h6>
          <Gmap height="15rem" width="100%"></Gmap>
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Tüm hakları saklıdır. Copyright ©
              2024
              Mages Cam by
              <a href="https://akifkemalaksu.com" target="_blank"
                >akifkemalaksu.com</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
