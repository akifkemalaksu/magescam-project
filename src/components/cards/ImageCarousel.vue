<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  images: { type: Array, required: true },
  title: { type: String, default: "" },
  heightClass: { type: String, default: "h-100" },
});

const activeIndex = ref(0);

function prev() {
  activeIndex.value =
    activeIndex.value === 0
      ? props.images.length - 1
      : activeIndex.value - 1;
}

function next() {
  activeIndex.value =
    activeIndex.value === props.images.length - 1
      ? 0
      : activeIndex.value + 1;
}

function goTo(index) {
  activeIndex.value = index;
}

function imgError(e) {
  e.target.style.display = "none";
  e.target.parentElement.classList.add("carousel-placeholder");
}
</script>

<template>
  <div class="carousel-wrapper mb-4">
    <h5 v-if="title" class="text-center font-weight-bolder mb-3">{{ title }}</h5>

    <div
      class="carousel slide carousel-fade"
      :id="id"
      data-bs-ride="carousel"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(img, idx) in images"
          :key="'ind-' + idx"
          :class="['carousel-indicator-dot', { active: idx === activeIndex }]"
          :aria-label="`Slide ${idx + 1}`"
          @click="goTo(idx)"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner rounded-4 shadow">
        <div
          v-for="(img, idx) in images"
          :key="'slide-' + idx"
          :class="['carousel-item', { active: idx === activeIndex }]"
        >
          <div class="carousel-image-wrapper">
            <img
              :src="img.src"
              :alt="img.title || title"
              class="d-block w-100 carousel-img"
              loading="lazy"
              @error="imgError"
            />
          </div>
          <div
            v-if="img.title || img.description"
            class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-4 py-2"
          >
            <h6 v-if="img.title" class="text-white mb-1">{{ img.title }}</h6>
            <p v-if="img.description" class="text-white small mb-0">
              {{ img.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" @click="prev" type="button">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Önceki</span>
      </button>
      <button class="carousel-control-next" @click="next" type="button">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sonraki</span>
      </button>
    </div>

    <!-- Description below carousel -->
    <p
      v-if="images[activeIndex]?.description"
      class="text-center text-muted mt-2 mb-0 small"
    >
      {{ images[activeIndex].description }}
    </p>
  </div>
</template>

<style scoped>
.carousel-image-wrapper {
  height: 400px;
  overflow: hidden;
  background: #e9ecef;
}
.carousel-img {
  height: 100%;
  object-fit: cover;
}
.carousel-indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 4px;
  cursor: pointer;
  transition: background 0.3s;
}
.carousel-indicator-dot.active {
  background: #fff;
}
.carousel-placeholder {
  min-height: 400px;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8c8c8;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .carousel-image-wrapper {
    height: 260px;
  }
  .carousel-caption {
    display: block !important;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.6) !important;
  }
}
</style>
