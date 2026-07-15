<script setup>
import { ref, onMounted } from "vue";

import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";
import { usePageSeo } from "@/composables/useSeo";
import { fetchPosts } from "@/utils/blogApi";

// Build zamanı prerender için seed data
import seedPosts from "@/data/blog-posts.json";

const posts = ref(seedPosts || []);
const loading = ref(false);

usePageSeo({
  title: "Blog | Mages Cam — Cam, Duşakabin & Ayna Rehberi",
  description:
    "Sultanbeyli'de cam, duşakabin, balkon camı, sineklik ve doğrama hakkında bilgilendirici rehber yazıları. Mages Cam uzmanlığıyla hazırlanmış içerikler.",
  path: "/blog",
});

onMounted(async () => {
  try {
    loading.value = true;
    const data = await fetchPosts();
    if (data && data.length) posts.value = data;
  } catch (e) {
    // API yoksa seed data ile devam et
  } finally {
    loading.value = false;
  }
});

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function tagList(tags) {
  if (!tags) return [];
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
}
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <div class="card card-body blur shadow-blur mx-1 mx-md-4 mt-7">
    <!-- Header -->
    <section class="py-5 py-md-6">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-gradient text-info mb-0">Blog &amp; Rehberler</h1>
            <p class="lead text-muted mt-3">
              Cam, duşakabin, balkon camı ve dekorasyon hakkında bilgilendirici
              yazılar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Cards -->
    <section class="pb-5 pb-md-6">
      <div class="container">
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Yükleniyor...</span>
          </div>
        </div>

        <div v-else-if="posts.length === 0" class="text-center py-5">
          <p class="text-muted">Henüz blog yazısı bulunmuyor.</p>
        </div>

        <div v-else class="row">
          <div
            v-for="post in posts"
            :key="post.slug"
            class="col-lg-6 mb-4"
          >
            <div class="card card-plain border h-100 p-3 p-md-4">
              <!-- Tags -->
              <div class="mb-2">
                <span
                  v-for="tag in tagList(post.tags)"
                  :key="tag"
                  class="badge badge-sm bg-gradient-light text-dark me-1 mb-1"
                >
                  {{ tag }}
                </span>
              </div>
              <!-- Title -->
              <h4 class="mt-2">
                <a
                  :href="`/blog/${post.slug}`"
                  class="text-dark text-decoration-none"
                >
                  {{ post.title }}
                </a>
              </h4>
              <!-- Description -->
              <p class="text-muted flex-grow-1">
                {{ post.description }}
              </p>
              <!-- Date + CTA -->
              <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                <small class="text-muted">
                  {{ formatDate(post.published_at) }}
                </small>
                <a
                  :href="`/blog/${post.slug}`"
                  class="btn btn-link text-info icon-move-right"
                >
                  Devamını Oku
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
