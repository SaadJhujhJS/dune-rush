<template>
  <svg
    width="21"
    height="12"
    viewBox="0 0 21 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.14978 5.90796L19.6334 5.90796M19.6334 5.90796L14.5455 10.9958M19.6334 5.90796L14.5455 0.820066"
      :stroke="color"
      stroke-width="1.62812"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'white',
  },
});
</script>