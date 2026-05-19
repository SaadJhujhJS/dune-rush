<template>
  <div>
    <Swiper
      :modules="[Autoplay, Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{
        600: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
        1536: { slidesPerView: 3 },
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
        :class="[
          'flex flex-col transition-all duration-500 bg-[#F0F0F0] rounded-3xl overflow-hidden group',
        ]"
      >
        <img
          :src="bikeimages.url"
          :alt="bikeimages.alt"
          class="w-full object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
        />

        <div
          class="flex flex-col gap-4.5 transition-opacity duration-500 ease-in-out p-4.5"
        >
          <div class="flex flex-col gap-[8.25px] text-[#0E0E0E]">
            <h3 class="text-[19.01px] font-semibold">
              {{ bikeimages.title }}
            </h3>
            <div class="flex items-center gap-[3.46px] text-[13.83px]">
              <IconTime class="w-4.5 h-4.5" />
              <h4 class="font-normal text-[#0C0C0C]">
                <span class="font-medium"
                  >{{ $t("homePage.tourDuration") }} </span
                >{{ bikeimages.time }}
              </h4>
            </div>
            <div class="flex items-center gap-[3.46px] text-[13.83px]">
              <IconUsers class="w-4.5 h-4.5" />
              <h4 class="font-normal text-[#0C0C0C]">
                <span class="font-medium">{{ $t("homePage.seats") }} </span
                >{{ bikeimages.seats }}
              </h4>
            </div>
          </div>
          <div class="flex flex-col">
            <h5 class="text-xl font-semibold text-[#CE1D1F] mb-3 md:mb-5">
              {{ bikeimages.price }}
            </h5>
            <div
              class="flex flex-col lg:flex-row gap-2 text-[13.02px] font-semibold mb-[5.76px]"
            >
              <NuxtLinkLocale to="/contact">
                <button
                  name="book now"
                  class="w-full flex justify-center items-center gap-2.5 px-8 2xl:px-11.5 py-3 border-[1.04px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-white cursor-pointer transition shine"
                >
                  {{ $t("homePage.bookNow") }}
                  <IconArrowRight />
                </button>
              </NuxtLinkLocale>
              <NuxtLinkLocale
                :to="`/adventures/quadBikingTours/${bikeimages.slug}`"
                aria-label="Read more about quad biking tours"
                title="Read more about quad biking tours"
                class="flex justify-center items-center gap-1 px-8 2xl:px-11.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-[#CE1D1F] cursor-pointer"
              >
                {{ $t("homePage.readMore") }} <span class="sr-only">{{ bikeimages.slug }}</span>
                <IconArrowRight color="#CE1D1F" />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="flex items-center justify-center my-5 lg:my-10">
      <div class="flex items-center gap-3">
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
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
const { t } = useI18n();

const navigationOptions = {
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
};

const DirtBikeInfo = [
  {
    slug: "adly-quad-bike-320cc",
    url: "/images/quad-bike-tours/1.webp",
    alt: t("quadBikingTours.product1.title"),
    title: t("quadBikingTours.product1.title"),
    time: t("quadBikingTours.product1.tourDuration"),
    seats: t("quadBikingTours.product1.seats"),
    price: t("quadBikingTours.product1.price"),
  },
  {
    slug: "kids-quad-bike-80-100cc",
    url: "/images/quad-bike-tours/2.webp",
    alt: t("quadBikingTours.product2.title"),
    title: t("quadBikingTours.product2.title"),
    time: t("quadBikingTours.product2.tourDuration"),
    seats: t("quadBikingTours.product2.seats"),
    price: t("quadBikingTours.product2.price"),
  },
  {
    slug: "kymco-quad-bike-250cc",
    url: "/images/quad-bike-tours/3.webp",
    alt: t("quadBikingTours.product3.title"),
    title: t("quadBikingTours.product3.title"),
    time: t("quadBikingTours.product3.tourDuration"),
    seats: t("quadBikingTours.product3.seats"),
    price: t("quadBikingTours.product3.price"),
  },
  {
    slug: "loncin-quad-bike-230cc",
    url: "/images/quad-bike-tours/4.webp",
    alt: t("quadBikingTours.product4.title"),
    title: t("quadBikingTours.product4.title"),
    time: t("quadBikingTours.product4.tourDuration"),
    seats: t("quadBikingTours.product4.seats"),
    price: t("quadBikingTours.product4.price"),
  },
  {
    slug: "loncin-quad-bike-300cc",
    url: "/images/quad-bike-tours/5.webp",
    alt: t("quadBikingTours.product5.title"),
    title: t("quadBikingTours.product5.title"),
    time: t("quadBikingTours.product5.tourDuration"),
    seats: t("quadBikingTours.product5.seats"),
    price: t("quadBikingTours.product5.price"),
  },
  {
    slug: "yoki-quad-bike-450cc",
    url: "/images/quad-bike-tours/6.webp",
    alt: t("quadBikingTours.product6.title"),
    title: t("quadBikingTours.product6.title"),
    time: t("quadBikingTours.product6.tourDuration"),
    seats: t("quadBikingTours.product6.seats"),
    price: t("quadBikingTours.product6.price"),
  },
  {
    slug: "yamaha-raptor-700cc",
    url: "/images/quad-bike-tours/7.webp",
    alt: t("quadBikingTours.product7.title"),
    title: t("quadBikingTours.product7.title"),
    time: t("quadBikingTours.product7.tourDuration"),
    seats: t("quadBikingTours.product7.seats"),
    price: t("quadBikingTours.product7.price"),
  },
];
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const onSlideChange = (swiper: any) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};
</script>
