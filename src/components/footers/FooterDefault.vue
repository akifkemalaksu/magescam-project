<script setup>
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <RouterLink :to="{name:'contact'}" class="text-dark fw-bold">Bize Ulaşın</RouterLink>
            <span class="mx-3 text-secondary">|</span>
            <RouterLink :to="{name:'aboutus'}" class="text-dark fw-bold">Hakkımızda</RouterLink>
          </div>
          <div class="text-center mt-3">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Tüm hakları saklıdır. Copyright &copy;
              {{ currentYear }}
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
