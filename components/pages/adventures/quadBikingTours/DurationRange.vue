<template>
  <div>
    <div class="flex justify-between text-sm font-medium text-[#CE1D1F] mb-1">
      <span>{{ minValue }} {{ $t("quadBikingTours.min") }}</span>
      <span>{{ maxValue }} {{ $t("quadBikingTours.min") }}</span>
    </div>

    <div class="relative h-3">
      <div
        class="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D9D9D9] transform -translate-y-1/2 z-0"
      ></div>
      <div
        class="absolute top-1/2 h-[2px] bg-[#CE1D1F] z-10 transform -translate-y-1/2"
        :style="{
          left: ((minValue - min) / (max - min)) * 100 + '%',
          width: ((maxValue - minValue) / (max - min)) * 100 + '%',
        }"
      ></div>

      <input
        type="range"
        :min="min"
        :max="max"
        v-model="minValue"
        class="absolute w-full h-3 bg-transparent appearance-none pointer-events-none z-20"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        v-model="maxValue"
        class="absolute w-full h-3 bg-transparent appearance-none pointer-events-none z-20"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const min = 0;
const max = 100;

const minValue = ref(5);
const maxValue = ref(75);
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  pointer-events: all;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  border: 2px solid #ce1d1f;
  cursor: pointer;
  z-index: 30;
}

input[type="range"]::-moz-range-thumb {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #ce1d1f;
  border: 2px solid white;
  cursor: pointer;
}
</style>
