<script setup>
import { RouterLink } from "vue-router";

import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";

// SEO — hata sayfası indekslenmemeli
import { usePageSeo } from "@/composables/useSeo";
usePageSeo({
  title: "Sayfa Bulunamadı (404) | Mages Cam",
  description: "Aradığınız sayfa bulunamadı.",
  path: "/404",
  noindex: true,
});
</script>


<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :dark="true"  />
      </div>
    </div>
  </div>
  <section class="py-6">
	<div class="container bg-light min-vh-50 py-6 d-flex justify-content-center align-items-center" style="max-width:1920px">
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="lc-block mb-4">
					<div editable="rich">
						<h1 class="fw-bold display-1">404</h1>
					</div>
				</div>
				<div class="lc-block">
					<div editable="rich">
						<p class="h2"> Üzgünüz, aradığınız sayfayı bulamıyoruz. </p>
						<p class="lead">Ana sayfaya geri dönmek için aşağıdaki butona tıklayın.</p>
					</div>
				</div>
				<div class="lc-block">
                    <RouterLink class="btn btn-info" :to="{name: 'presentation'}">Ana Sayfa</RouterLink>
				</div>
			</div>
		</div>
	</div>
</section>
<DefaultFooter />

  </template>