<template>
  <div class="my-20">
    <BaseContainer>
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h2
            class="text-2xl sm:text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
          >
            {{ $t("homePage.thrilling") }}
            <span class="text-[#CE1D1F] italic">
              {{ $t("homePage.dirtBikes") }}</span
            >
            {{ $t("homePage.rental") }}
          </h2>
        </div>
        <div>
          <NuxtLinkLocale to="/adventures/dirtBikeRental"
            ><button
              class="flex justify-center items-center w-fit gap-2 py-3 px-3 mt-4 sm:mt-0 text-[13px] font-semibold text-white bg-[#CE1D1F] rounded-full cursor-pointer transition shine"
            >
              {{ $t("homePage.viewDetail") }}
              <IconButtonArrow /></button
          ></NuxtLinkLocale>
        </div>
      </div>
      <div>
        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 1.1 },
            1024: { slidesPerView: 1.4 },
            1280: { slidesPerView: 1.6 },
          }"
          :loop="false"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :navigation="navigationOptions"
          @slideChange="onSlideChange"
          ref="swiperRef"
          class="w-full"
        >
          <SwiperSlide
            v-for="(bikeimages, index) in DirtBikeInfo"
            :key="index"
            class="mt-7.5 w-full"
          >
            <div
              class="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <img
                :src="bikeimages.url"
                :alt="bikeimages.alt"
                class="h-auto max-h-[340.5px] object-cover rounded-2xl"
              />
              <div class="flex flex-col gap-4.5">
                <div class="flex flex-col gap-2 text-[#0E0E0E]">
                  <h3 class="text-[19px] font-semibold">
                    {{ bikeimages.title }}
                  </h3>
                  <p class="text-sm">{{ bikeimages.info }}</p>

                  <div class="flex items-center gap-2 text-[13.5px]">
                    <IconTime class="w-4.5 h-4.5" />
                    <div class="font-normal text-[#0E0E0E]">
                      <span class="font-medium text-[#CE1D1F]">{{
                        $t("homePage.tourDuration")
                      }}</span>
                      {{ bikeimages.time }}
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-[13.5px]">
                    <IconUsers class="w-4.5 h-4.5" />
                    <div class="font-normal text-[#0E0E0E]">
                      <span class="font-medium text-[#CE1D1F]">{{
                        $t("homePage.seats")
                      }}</span>
                      {{ bikeimages.seats }}
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-8 sm:gap-12 lg:gap-23.5">
                  <div class="text-3xl font-semibold text-[#CE1D1F]">
                    {{ bikeimages.price }}
                  </div>

                  <div class="flex flex-row gap-4 text-sm font-semibold">
                    <NuxtLinkLocale aria-label="book now" to="/contact"  
                        class="flex items-center justify-center gap-2.5 px-4 py-3 border border-[#CE1D1F] bg-[#CE1D1F] text-white rounded-full cursor-pointer transition shine"
                      >
                        {{ $t("homePage.bookNow") }}
                        <IconArrowRight />

                      </NuxtLinkLocale>
                    <NuxtLinkLocale
                      :to="`/adventures/dirtBikeRental/${bikeimages.slug}`"
                      aria-label="Read more about dirt bike rental"
                      title="Read more about dirt bike rental"
                      class="flex items-center gap-2.5 px-4 py-3 border border-[#CE1D1F] rounded-full text-[#CE1D1F] cursor-pointer"
                    >
                      {{ $t("homePage.readMore") }} <span class="sr-only">{{ bikeimages.slug }}</span>
                      <IconArrowRight color="#CE1D1F" />
                    </NuxtLinkLocale>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="flex items-center justify-end gap-[15px] mt-2 md:mt-4">
          <div class="text-[15px] font-normal text-[#0E0E0E]">
            {{ activeSlide }}
            <span class="text-xs font-normal text-gray-900">
              / {{ DirtBikeInfo.length }}</span
            >
          </div>
          <div class="flex items-center gap-[10.5px]">
            <span
              :class="[
                'custom-prev border-[1.5px] rounded-full border-[#CE1D1F] pl-[12.37px] pr-[13.87px] py-3 cursor-pointer',
                isBeginning ? 'opacity-30 pointer-events-none' : 'opacity-100',
              ]"
            >
              <IconArrowDown color="#CE1D1F" class="rotate-90" />
            </span>
            <span
              :class="[
                'custom-next border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13.87px] pr-[12.38px] py-3 cursor-pointer transition shine',
                isEnd ? 'opacity-30 pointer-events-none' : 'opacity-100',
              ]"
            >
              <IconArrowDown color="white" class="-rotate-90" />
            </span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
const { t } = useI18n();

const navigationOptions = {
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
};
const DirtBikeInfo = [
  {
    slug: "honda-crf-450cc-dirt-bike",
    url: "/images/bikerentalimages/2.webp",
    alt: t("dirtBikeRental.product1.title"),
    title: t("dirtBikeRental.product1.title"),
    info: t("dirtBikeRental.product1.info"),
    time: t("dirtBikeRental.product1.tourDuration"),
    seats: t("dirtBikeRental.product1.seats"),
    price: t("dirtBikeRental.product1.price"),
  },
  {
    slug: "husqvarna-450cc-dirt-bike",
    url: "/images/bikerentalimages/3.webp",
    alt: t("dirtBikeRental.product2.title"),
    title: t("dirtBikeRental.product2.title"),
    info: t("dirtBikeRental.product2.info"),
    time: t("dirtBikeRental.product2.tourDuration"),
    seats: t("dirtBikeRental.product2.seats"),
    price: t("dirtBikeRental.product2.price"),
  },
  {
    slug: "ktm-450cc-dirt-bike",
    url: "/images/bikerentalimages/4.webp",
    alt: t("dirtBikeRental.product3.title"),
    title: t("dirtBikeRental.product3.title"),
    info: t("dirtBikeRental.product3.info"),
    time: t("dirtBikeRental.product3.tourDuration"),
    seats: t("dirtBikeRental.product3.seats"),
    price: t("dirtBikeRental.product3.price"),
  },
  {
    slug: "ktm-150cc-dirt-bike",
    url: "/images/bikerentalimages/1.webp",
    alt: t("dirtBikeRental.product4.title"),
    title: t("dirtBikeRental.product4.title"),
    info: t("dirtBikeRental.product4.info"),
    time: t("dirtBikeRental.product4.tourDuration"),
    seats: t("dirtBikeRental.product4.seats"),
    price: t("dirtBikeRental.product4.price"),
  },
  {
    slug: "kids-ktm-50cc-dirt-bike",
    url: "/images/bikerentalimages/5.webp",
    alt: t("dirtBikeRental.product5.title"),
    title: t("dirtBikeRental.product5.title"),
    info: t("dirtBikeRental.product5.info"),
    time: t("dirtBikeRental.product5.tourDuration"),
    seats: t("dirtBikeRental.product5.seats"),
    price: t("dirtBikeRental.product5.price"),
  },
  {
    slug: "progasi-300-450cc-dirt-bike",
    url: "/images/bikerentalimages/6.webp",
    alt: t("dirtBikeRental.product6.title"),
    title: t("dirtBikeRental.product6.title"),
    info: t("dirtBikeRental.product6.info"),
    time: t("dirtBikeRental.product6.tourDuration"),
    seats: t("dirtBikeRental.product6.seats"),
    price: t("dirtBikeRental.product6.price"),
  },
  {
    slug: "yamaha-yz-450cc-dirt-bike",
    url: "/images/bikerentalimages/7.webp",
    alt: t("dirtBikeRental.product7.title"),
    title: t("dirtBikeRental.product7.title"),
    info: t("dirtBikeRental.product7.info"),
    time: t("dirtBikeRental.product7.tourDuration"),
    seats: t("dirtBikeRental.product7.seats"),
    price: t("dirtBikeRental.product7.price"),
  },
];
const activeSlide = ref(1);
const swiperRef = ref<SwiperClass>();
const isBeginning = ref(true);
const isEnd = ref(false);
const onSlideChange = (swiper: SwiperClass) => {
  activeSlide.value = (swiper.realIndex || 0) + 1;
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};
</script>
