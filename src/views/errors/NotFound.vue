<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
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


  </template>