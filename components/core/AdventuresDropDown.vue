<template>
  <BaseContainer>
    <div
      class="flex items-center justify-between bg-white shadow-xl rounded-xl py-5 pl-10 pr-5"
    >
      <div class="w-[20%]">
        <h3 class="text-xl font-semibold mb-4">Adventures</h3>
        <div class="mb-8">
          <NuxtLinkLocale
            to="/adventures/dirtBikeRental"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-4 cursor-pointer"
          >
            {{ $t("AppNavbar.dirtBikeRental") }} <span><IconArrow /></span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/adventures/duneBuggyTours"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-4 cursor-pointer"
          >
            {{ $t("AppNavbar.duneBuggyTours") }}
            <span class="ml-8"><IconArrow /></span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/adventures/quadBikingTours"
            @click="$emit('closeDropdown')"
            class="flex items-center justify-between border-b border-[#0C0C0C]/20 py-4 cursor-pointer"
          >
            {{ $t("AppNavbar.quadBikingTours") }}
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
          class="relative flex flex-col items-center overflow-hidden rounded-2xl"
        >
          <img
            :src="buggycard.url"
            :alt="buggycard.alt"
            loading="lazy"
            class="relative w-[256px] h-[350px] rounded-2xl object-cover"
          />
          <div
            class="w-[256px] absolute bottom-0 left-0 flex flex-col gap-4.5 p-3 bg-black/30 text-white"
          >
            <h3 class="text-[16px] font-bold">{{ buggycard.title }}</h3>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-[3.46px] text-[13.83px]">
                <IconTime class="w-4.5 h-4.5" />
                <h6 class="font-normal text-xs">
                  <span class="font-medium">{{
                    $t("homePage.tourDuration")
                  }}</span>
                  {{ buggycard.time }}
                </h6>
              </div>
              <div class="flex items-center gap-[3.46px] text-[13.83px]">
                <IconUsers class="w-4.5 h-4.5" />
                <h6 class="font-normal text-xs">
                  <span class="font-medium">{{ $t("homePage.seats") }}</span>
                  {{ buggycard.seats }}
                </h6>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mb-3 md:mb-5">
              {{ buggycard.price }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();

const emit = defineEmits(['closeDropdown'])

const BuggyTourCards = [
  {
    url: "/images/bikerentalimages/4.webp",
    alt: t("dirtBikeRental.product3.title"),
    title: t("dirtBikeRental.product3.title"),
    time: t("dirtBikeRental.product3.tourDuration"),
    seats: t("dirtBikeRental.product3.seats"),
    price: t("dirtBikeRental.product3.price"),
  },
  {
    url: "/images/buggytours/7.webp",
    alt: t("duneBuggyTours.product7.title"),
    title: t("duneBuggyTours.product7.title"),
    time: t("duneBuggyTours.product7.tourDuration"),
    seats: t("duneBuggyTours.product7.seats"),
    price: t("duneBuggyTours.product7.price"),
  },
  {
    url: "/images/quad-bike-tours/3.webp",
    alt: t("quadBikingTours.product3.title"),
    title: t("quadBikingTours.product3.title"),
    time: t("quadBikingTours.product3.tourDuration"),
    seats: t("quadBikingTours.product3.seats"),
    price: t("quadBikingTours.product3.price"),
  },
];
</script>
