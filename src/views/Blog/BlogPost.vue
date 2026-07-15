<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import NavbarDefault from "../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../components/footers/FooterDefault.vue";
import { usePageSeo } from "@/composables/useSeo";
import { fetchPost } from "@/utils/blogApi";

// Build zamanı prerender için seed data
import seedPosts from "@/data/blog-posts.json";

const route = useRoute();
const slug = computed(() => route.params.slug);

const seedPost = seedPosts
  ? seedPosts.find((p) => p.slug === slug.value)
  : null;

const post = ref(seedPost || null);
const loading = ref(false);
const error = ref(false);

// Asenkron SEO: post yüklendikten sonra güncellenir
const seoTitle = computed(() =>
  post.value
    ? `${post.value.title} | Mages Cam`
    : "Blog | Mages Cam"
);
const seoDescription = computed(() =>
  post.value
    ? post.value.description
    : "Mages Cam blog yazısı."
);

usePageSeo({
  title: seoTitle.value,
  description: seoDescription.value,
  path: `/blog/${slug.value}`,
});

onMounted(async () => {
  // Zaten seed data'dan gelen post varsa ve content doluysa
  // yine de API'den taze veri çekmeye çalış
  try {
    loading.value = true;
    const data = await fetchPost(slug.value);
    if (data) {
      post.value = data;
      // SEO'yu güncelle
      usePageSeo({
        title: `${data.title} | Mages Cam`,
        description: data.description,
        path: `/blog/${slug.value}`,
      });
    }
  } catch (e) {
    if (!post.value) error.value = true;
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
    <!-- Loading -->
    <div v-if="loading && !post" class="text-center py-6">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Yükleniyor...</span>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error && !post" class="text-center py-6">
      <h2 class="text-muted">Yazı bulunamadı</h2>
      <p class="text-muted">Aradığınız blog yazısı mevcut değil veya yayından kaldırılmış olabilir.</p>
      <a href="/blog" class="btn btn-outline-primary mt-2">Tüm Yazılara Dön</a>
    </div>

    <!-- Post Content -->
    <section v-else-if="post" class="py-5 py-md-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-3">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Ana Sayfa</a></li>
                <li class="breadcrumb-item"><a href="/blog">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ post.title }}
                </li>
              </ol>
            </nav>

            <!-- Title -->
            <h1 class="text-gradient text-info mb-2">{{ post.title }}</h1>
            <p class="text-muted mb-4">{{ formatDate(post.published_at) }}</p>

            <!-- Blog Content -->
            <div class="blog-content" v-html="post.content"></div>

            <!-- CTA -->
            <div class="text-center mt-5">
              <a
                href="/iletisim"
                class="btn btn-info btn-lg"
              >
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>

<style scoped>
.blog-content :deep(h2) {
  margin-top: 2rem;
  font-weight: 700;
}
.blog-content :deep(h3) {
  margin-top: 1.5rem;
  font-weight: 600;
}
.blog-content :deep(ul) {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.blog-content :deep(li) {
  margin-bottom: 0.25rem;
}
.blog-content :deep(a) {
  color: #1a73e8;
}
.blog-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.8;
}
.blog-content :deep(blockquote) {
  border-left: 4px solid #e0e0e0;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #666;
}
.blog-content :deep(table) {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
}
.blog-content :deep(th),
.blog-content :deep(td) {
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  text-align: left;
}
.blog-content :deep(th) {
  background-color: #f8f9fa;
  font-weight: 600;
}
</style>
