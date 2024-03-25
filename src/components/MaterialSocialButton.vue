<script setup>
defineProps({
  route: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  marginEnd:{
    type: String,
    default: "2"
  }
});

</script>
<template>
  <a :href="route" class="btn" :class="`btn-${color} me-${marginEnd}`" target="_blank">
    <i
      class="fab"
      :class="`fa-${component} ${
        $attrs.class == 'btn-icon-only' ? 'me-0' : 'me-1'
      }`"
    ></i>
    {{ label }}
  </a>
</template>
