<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <h2
        class="mb-8 sm:mb-10 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C] text-center"
      >
        {{ title }}
        <span class="text-[#CE1D1F]">{{ highlightedTitle }}</span>
      </h2>

      <div class="sm:flex items-center gap-2 font-semibold mb-4 sm:mb-6">
        <h3 class="text-xl">
          {{ $t("quadBiking.starting") }}
          <span class="text-[#CE1D1F]">{{ $t("quadBiking.price") }}</span>
        </h3>
        <h3 class="text-lg">{{ price }}</h3>
      </div>

      <div class="mb-4 sm:mb-6">
        <h3 class="text-xl font-semibold">
          {{ $t("quadBiking.description") }}
        </h3>
        <p>{{ description }}</p>
      </div>

      <div class="flex flex-col-reverse md:flex-row md:items-center justify-between">
        <div>
          <div class="mb-4 sm:mb-6">
            <h4 class="text-xl font-semibold">
              {{ $t("quadBiking.key") }}
              <span class="text-[#CE1D1F]">{{
                $t("quadBiking.features")
              }}</span>
            </h4>
            <ul class="list-disc list-inside mt-2">
              <li v-for="(feature, i) in features" :key="i">{{ feature }}</li>
            </ul>
          </div>
          <div class="mb-4 sm:mb-6">
            <h4 class="text-xl font-semibold">
              {{ $t("quadBiking.duration") }}
              <span class="text-[#CE1D1F]">{{ $t("quadBiking.options") }}</span>
            </h4>
            <ul class="list-disc list-inside mt-2">
              <li v-for="(duration, i) in durations" :key="i">
                {{ duration }}
              </li>
            </ul>
          </div>
          <div class="mb-4 sm:mb-6">
            <h4 class="text-xl font-semibold">
              {{ $t("quadBiking.whats") }}
              <span class="text-[#CE1D1F]">{{
                $t("quadBiking.included")
              }}</span>
            </h4>
            <ul class="list-disc list-inside mt-2">
              <li v-for="(item, i) in included" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            :src="image"
            alt="services"
            class="w-full h-auto md:w-[480px] rounded-3xl mb-4"
          />
        </div>
      </div>
      <div>
        <h4 class="text-xl font-semibold mb-2">
          {{ $t("quadBiking.callTo") }}
          <span class="text-[#CE1D1F]">{{ $t("quadBiking.action") }}</span>
        </h4>
        <p>{{ callToAction }}</p>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  highlightedTitle?: string;
  price?: string;
  description?: string;
  features?: string[];
  durations?: string[];
  image?: string;
  included?: string[];
  callToAction?: string;
}>();
</script>
