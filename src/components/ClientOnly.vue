<script setup>
// SSR/prerender sırasında slot'u atlar, yalnızca tarayıcıda (mount sonrası)
// içeriği render eder. Google Maps / vue-count-to gibi window'a bağımlı bileşenler için.
import { ref, onMounted } from "vue";

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <slot v-if="mounted" />
  <slot v-else name="placeholder" />
</template>
