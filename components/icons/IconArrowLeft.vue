<template>
  <svg
    width="11"
    height="18"
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 1.5L2 9L9.5 16.5"
      fill="#CE1D1F"
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "black",
  },
});
</script>
