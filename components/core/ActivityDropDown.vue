<template>
  <BaseContainer>
    <div
      class="flex items-center justify-between bg-white shadow-xl rounded-xl py-5 pl-10 pr-5"
    >
      <div class="w-[20%]">
        <h3 class="text-xl font-semibold mb-4">Activities</h3>
        <div class="mb-8">
          <NuxtLinkLocale
            to="/activities/paintball"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-3 cursor-pointer"
          >
            {{ $t("AppNavbar.paintball") }} <span><IconArrow /></span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/activities/karting"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-3 cursor-pointer"
          >
            {{ $t("AppNavbar.karting") }}
            <span class="ml-8"><IconArrow /></span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/activities/MotoMiniGp"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-3 cursor-pointer"
          >
            {{ $t("AppNavbar.motoMiniGp") }}
            <span class="ml-8"><IconArrow /></span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/activities/camel-ride"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-3 cursor-pointer"
          >
            {{ $t("AppNavbar.camelRide") }}
            <span class="ml-8"><IconArrow /></span>
          </NuxtLinkLocale>
        </div>
        <NuxtLinkLocale to="/contact" @click="$emit('closeDropdown')">
          <button
            class="flex items-center justify-center gap-1.5 text-[11.45px] py-[10.5px] px-[32.45px] font-semibold text-[#FFFFFF] bg-[#CE1D1F] rounded-[95.44px] cursor-pointer transition shine"
          >
            {{ $t("getInTouch.contactButton") }} <IconButtonArrow />
          </button>
        </NuxtLinkLocale>
      </div>

      <!-- Buggy Tour Cards -->
      <div class="flex flex-row gap-4">
        <div
          v-for="(buggycard, index) in BuggyTourCards"
          :key="index"
          class="flex flex-col items-center overflow-hidden rounded-2xl"
        >
          <img
            :src="buggycard.url"
            :alt="buggycard.alt"
            loading="lazy"
            class="w-[256px] h-[350px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">

const emit = defineEmits(['closeDropdown'])

const BuggyTourCards = [
  {
    url: "/images/paintball-image.webp",
    alt: "Image 1"
  },
  {
    url: "/images/go-karting-image.webp",
    alt: "Image 2"
  },
  {
    url: "/images/moto-mini-gp-image.webp",
    alt: "Image 3"
  },
];
</script>
