<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
    <div
      v-for="(bikecard, index) in cards"
      :key="index"
      :class="[
        'flex flex-col rounded-tl-3xl rounded-tr-3xl overflow-hidden',
        withBg ? 'bg-[#F0F0F0] rounded-3xl' : '',
      ]"
    >
      <img
        :src="bikecard.url"
        :alt="bikecard.alt"
        loading="lazy"
        class="object-contain transition-all duration-300 ease-in-out hover:scale-110"
      />

      <div
        class="flex flex-col gap-4 lg:gap-7.5 text-[#0E0E0E] mt-4.5"
        :class="[padding ? 'p-4' : '']"
      >
        <div class="flex flex-col gap-1.5 lg:h-[100px] xl:h-[110px]">
          <h3 class="text-[19.01px] font-semibold">
            {{ bikecard.title }}
          </h3>
          <h4 class="font-normal text-[#0C0C0C]">
            {{ bikecard.description }}
          </h4>
        </div>
        <div
          class="flex justify-between items-center gap-[3.46px] text-[13.83px]"
        >
          <p class="font-normal text-[#0C0C0C]">
            {{ bikecard.dateTime }}
          </p>
          <NuxtLinkLocale
            :to="`/about/blog/${bikecard.slug}`"
            :aria-label="bikecard.slug"
            class="p-[11.2px] bg-[#CE1D1F] rounded-full cursor-pointer transition shine"
          >
            <IconArrowRightCorner />
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  cards: {
    slug: string;
    url: string;
    alt: string;
    title: string;
    description: string;
    dateTime: string;
  }[];
  withBg?: boolean;
  padding?: boolean;
}>();
</script>
