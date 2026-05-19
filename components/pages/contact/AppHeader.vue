<template>
  <div>
    <section
      class="relative w-full overflow-hidden h-[450px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black/60 z-10"></div>

      <div class="relative z-20 text-white">
        <BaseContainer>
          <div class="flex flex-col items-start gap-4.5 py-30 lg:py-41">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {{ title }}
            </h1>
            <p class="sm:text-lg lg:text-[21px] font-normal leading-relaxed">
              {{ description }}
            </p>
          </div>
        </BaseContainer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backgroundImage: string;
  title: string;
  description: string;
}>();
</script>
