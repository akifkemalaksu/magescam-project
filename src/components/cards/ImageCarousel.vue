<script setup>
import { ref } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  images: { type: Array, required: true },
  title: { type: String, default: "" },
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
</script>

<template>
  <div class="mb-4">
    <h5 v-if="title" class="text-center font-weight-bolder mb-3">{{ title }}</h5>

    <div class="mk-carousel mk-carousel-fade rounded-4 shadow" :id="id">
      <!-- Empty state -->
      <div v-if="images.length === 0" class="mk-carousel-empty">
        <div class="mk-carousel-empty-content">
          <i class="material-icons text-white" style="font-size: 3rem;">photo_camera</i>
          <p class="text-white h6 mt-3">Fotoğraflar yakında eklenecek</p>
          <p class="text-white-50 small">Bu ürün kategorisi için görseller hazırlanıyor.</p>
        </div>
      </div>

      <!-- Indicators -->
      <div v-if="images.length > 0" class="mk-carousel-indicators">
        <button
          v-for="(img, idx) in images"
          :key="'ind-' + idx"
          :class="['mk-carousel-indicator-dot', { active: idx === activeIndex }]"
          :aria-label="`Slide ${idx + 1}`"
          @click="goTo(idx)"
        ></button>
      </div>

      <!-- Slides -->
      <div v-if="images.length > 0" class="mk-carousel-inner rounded-4">
        <div
          v-for="(img, idx) in images"
          :key="'slide-' + idx"
          :class="['mk-carousel-item', { active: idx === activeIndex }]"
        >
          <div class="mk-carousel-image-wrapper">
            <img
              :src="img.src"
              :alt="img.title || title"
              class="d-block w-100 mk-carousel-img"
              loading="lazy"
            />
          </div>
          <div
            v-if="img.title || img.description"
            class="mk-carousel-caption"
          >
            <h6 v-if="img.title" class="text-white mb-1">{{ img.title }}</h6>
            <p v-if="img.description" class="text-white small mb-0">
              {{ img.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Controls (hide when empty) -->
      <button v-if="images.length > 0" class="mk-carousel-control-prev" @click="prev" type="button" aria-label="Önceki">
        <span class="mk-carousel-control-icon mk-carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button v-if="images.length > 0" class="mk-carousel-control-next" @click="next" type="button" aria-label="Sonraki">
        <span class="mk-carousel-control-icon mk-carousel-control-next-icon" aria-hidden="true"></span>
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
.mk-carousel {
  position: relative;
  overflow: hidden;
  background: #e9ecef;
  min-height: 200px;
}

.mk-carousel-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  border-radius: 0.5rem;
}
.mk-carousel-empty-content {
  text-align: center;
  padding: 2rem;
}
.mk-carousel-empty-content .text-white-50 {
  color: rgba(255, 255, 255, 0.6) !important;
}

.mk-carousel-inner {
  position: relative;
  overflow: hidden;
}

.mk-carousel-item {
  display: none;
  position: relative;
  width: 100%;
}
.mk-carousel-item.active {
  display: block;
}

/* Fade transition */
.mk-carousel-fade .mk-carousel-item {
  opacity: 0;
  transition: opacity 0.6s ease;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.mk-carousel-fade .mk-carousel-inner {
  position: relative;
}
.mk-carousel-fade .mk-carousel-item.active {
  opacity: 1;
  position: relative;
  z-index: 1;
}

.mk-carousel-image-wrapper {
  height: 400px;
  overflow: hidden;
}
.mk-carousel-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

/* Indicators */
.mk-carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 1.25rem;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.mk-carousel-indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
  padding: 0;
  box-sizing: content-box;
}
.mk-carousel-indicator-dot.active {
  background: #fff;
  border-color: #fff;
}

/* Controls */
.mk-carousel-control-prev,
.mk-carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  cursor: pointer;
}
.mk-carousel-control-prev:hover,
.mk-carousel-control-next:hover {
  opacity: 0.9;
}
.mk-carousel-control-prev {
  left: 0;
}
.mk-carousel-control-next {
  right: 0;
}
.mk-carousel-control-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
.mk-carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
.mk-carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

/* Caption */
.mk-carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 3.5rem;
  left: 15%;
  padding: 0.75rem 1rem;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .mk-carousel-image-wrapper {
    height: 260px;
  }
  .mk-carousel-caption {
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.6);
    display: block !important;
  }
  .mk-carousel-indicators {
    display: none;
  }
}
</style>
