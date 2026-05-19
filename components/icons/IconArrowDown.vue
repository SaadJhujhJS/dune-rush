<template>
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_118_168)">
      <path
        d="M12.9541 3.63766L14.0141 4.69866L8.23707 10.4777C8.1445 10.5708 8.03442 10.6447 7.91317 10.6952C7.79192 10.7456 7.66189 10.7716 7.53057 10.7716C7.39924 10.7716 7.26921 10.7456 7.14796 10.6952C7.02671 10.6447 6.91664 10.5708 6.82407 10.4777L1.04407 4.69866L2.10407 3.63866L7.52907 9.06266L12.9541 3.63766Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_118_168">
        <rect
          width="14"
          height="14"
          fill="white"
          transform="translate(14.5291 0.20459) rotate(90)"
        />
      </clipPath>
    </defs>
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
