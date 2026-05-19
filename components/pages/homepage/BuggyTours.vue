<template>
  <div
    class="flex flex-col items-center justify-center mt-10 lg:mt-22.5 mb-16 lg:mb-27.5"
  >
    <h2 class="text-[34.32px] font-bold text-[#0C0C0C] mb-7">
      {{ $t("homePage.theBest") }}
      <i class="text-[#CE1D1F] font-semibold">{{ $t("homePage.duneBuggy") }}</i>
    </h2>

    <Swiper
      :modules="[Autoplay, Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{
        580: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1536: { slidesPerView: 5 },
      }"
      :loop="false"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :navigation="navigationOptions"
      @slideChange="onSlideChange"
      ref="swiperRef"
      class="w-full"
    >
      <SwiperSlide
        v-for="(buggycard, index) in BuggyTourCards"
        :key="index"
        class="relative flex flex-col items-center overflow-hidden rounded-2xl"
      >
        <img
          :src="buggycard.url"
          :alt="buggycard.alt"
          class="relative size-full rounded-2xl object-cover"
        />
        <div
          class="w-full absolute bottom-0 left-0 flex flex-col gap-4.5 p-3 bg-[#5753534d] text-white"
        >
          <h3 class="text-[16px] font-bold">{{ buggycard.title }}</h3>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-[3.46px] text-[13.83px]">
              <IconTime class="w-4.5 h-4.5" />
              <h4 class="font-normal">
                <span class="font-medium"
                  >{{ $t("homePage.tourDuration") }} </span
                >{{ buggycard.time }}
              </h4>
            </div>
            <div class="flex items-center gap-[3.46px] text-[13.83px]">
              <IconUsers class="w-4.5 h-4.5" />
              <h4 class="font-normal">
                <span class="font-medium">{{ $t("homePage.seats") }} </span
                >{{ buggycard.seats }}
              </h4>
            </div>
          </div>
          <h5 class="text-xl font-semibold text-white mb-3 md:mb-5">
            {{ buggycard.price }}
          </h5>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="flex items-center justify-center gap-3 my-5 lg:my-10">
      <span
        :class="[
          'custom-prev border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13px] pr-[12.38px] py-3 cursor-pointer transition-opacity duration-300',
          isBeginning ? 'opacity-30 pointer-events-none' : 'opacity-100',
        ]"
      >
        <IconArrowDown color="white" class="rotate-90" />
      </span>
      <span
        :class="[
          'custom-next border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13px] pr-[12.38px] py-3 cursor-pointer transition-opacity duration-300',
          isEnd ? 'opacity-30 pointer-events-none' : 'opacity-100',
        ]"
      >
        <IconArrowDown color="white" class="-rotate-90" />
      </span>
    </div>
    <div class="flex justify-center items-center">
      <NuxtLinkLocale
        aria-label="view all blogs"
        title="view all blogs"
        to="/adventures/duneBuggyTours"
        ><button
          name="view all"
          class="flex justify-center items-center gap-5 md:gap-10 px-4.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-sm font-semibold text-[#CE1D1F] cursor-pointer"
        >
          {{ $t("homePage.viewAll") }}
          <IconArrowRight color="#CE1D1F" /></button
      ></NuxtLinkLocale>
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
const screenWidth = ref(0);
onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

function updateScreenWidth() {
  screenWidth.value = window.innerWidth;
}

const BuggyTourCards = [
  {
    url: "/images/buggytours/1.webp",
    alt: t("duneBuggyTours.product1.title"),
    title: t("duneBuggyTours.product1.title"),
    time: t("duneBuggyTours.product1.tourDuration"),
    seats: t("duneBuggyTours.product1.seats"),
    price: t("duneBuggyTours.product1.price"),
  },
  {
    url: "/images/buggytours/2.webp",
    alt: t("duneBuggyTours.product2.title"),
    title: t("duneBuggyTours.product2.title"),
    time: t("duneBuggyTours.product2.tourDuration"),
    seats: t("duneBuggyTours.product2.seats"),
    price: t("duneBuggyTours.product2.price"),
  },
  {
    url: "/images/buggytours/3.webp",
    alt: t("duneBuggyTours.product3.title"),
    title: t("duneBuggyTours.product3.title"),
    time: t("duneBuggyTours.product3.tourDuration"),
    seats: t("duneBuggyTours.product3.seats"),
    price: t("duneBuggyTours.product3.price"),
  },
  {
    url: "/images/buggytours/4.webp",
    alt: t("duneBuggyTours.product4.title"),
    title: t("duneBuggyTours.product4.title"),
    time: t("duneBuggyTours.product4.tourDuration"),
    seats: t("duneBuggyTours.product4.seats"),
    price: t("duneBuggyTours.product4.price"),
  },
  {
    url: "/images/buggytours/5.webp",
    alt: t("duneBuggyTours.product5.title"),
    title: t("duneBuggyTours.product5.title"),
    time: t("duneBuggyTours.product5.tourDuration"),
    seats: t("duneBuggyTours.product5.seats"),
    price: t("duneBuggyTours.product5.price"),
  },
  {
    url: "/images/buggytours/6.webp",
    alt: t("duneBuggyTours.product6.title"),
    title: t("duneBuggyTours.product6.title"),
    time: t("duneBuggyTours.product6.tourDuration"),
    seats: t("duneBuggyTours.product6.seats"),
    price: t("duneBuggyTours.product6.price"),
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
    url: "/images/buggytours/8.webp",
    alt: t("duneBuggyTours.product8.title"),
    title: t("duneBuggyTours.product8.title"),
    time: t("duneBuggyTours.product8.tourDuration"),
    seats: t("duneBuggyTours.product8.seats"),
    price: t("duneBuggyTours.product8.price"),
  },
  {
    url: "/images/buggytours/9.webp",
    alt: t("duneBuggyTours.product9.title"),
    title: t("duneBuggyTours.product9.title"),
    time: t("duneBuggyTours.product9.tourDuration"),
    seats: t("duneBuggyTours.product9.seats"),
    price: t("duneBuggyTours.product9.price"),
  },
];
const navigationOptions = {
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
};
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const onSlideChange = (swiper: any) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};
</script>
