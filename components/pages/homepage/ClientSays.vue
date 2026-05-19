<template>
  <div
    class="relative w-full overflow-hidden px-4 lg:px-0 mt-10 lg:mt-20 mb-16 lg:mb-27.5"
  >
    <h2
      class="text-center mb-6 lg:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
    >
      {{ $t("clientSays.what") }}
      <i class="font-semibold text-[#CE1D1F]">
        {{ $t("clientSays.client") }}
      </i>
      {{ $t("clientSays.says") }}
    </h2>

    <Swiper
      ref="swiperRef"
      :slides-per-view="1.4"
      :centeredSlides="true"
      :space-between="30"
      :loop="false"
      :breakpoints="{
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1.4 },
        1440: { slidesPerView: 1.6 },
      }"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="!overflow-visible group"
    >
      <SwiperSlide
        v-for="(clientinfo, index) in ClientsInfo"
        :key="index"
        :class="{ 'swiper-slide-active': isActive(index) }"
      >
        <div
          class="testimonial-slide relative transition-all duration-500 ease-in-out bg-[#F0F0F0] rounded-[29px] w-full flex flex-col lg:flex-row items-stretch"
        >
          <div class="lg:relative lg:w-1/2">
            <img
              :src="clientinfo.url"
              :alt="clientinfo.alt"
              class="h-full w-full object-cover lg:rounded-tl-[29px] lg:rounded-bl-[29px] max-[1024px]:rounded-[29px]"
            />
            <span
              v-if="isActive(index)"
              @click="slidePrev"
              aria-label="previous slide"
              :class="[
                'hidden lg:block absolute top-1/2 -translate-y-1/2 -left-5 z-30 border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13.87px] pr-[12.38px] py-3 cursor-pointer transition-opacity',
                activeIndex === 0
                  ? 'opacity-30 pointer-events-none'
                  : 'opacity-100 pointer-events-auto',
              ]"
            >
              <IconArrowDown color="white" class="rotate-90" />
            </span>
          </div>

          <div
            class="lg:relative flex flex-col justify-center lg:w-1/2 px-5 lg:px-9.5 pt-7 lg:pt-14.5 pb-8 lg:pb-17.5"
          >
            <p class="text-sm text-[#0C0C0C] font-normal mb-9.5">
              {{ clientinfo.description }}
            </p>
            <div class="flex items-center gap-3 lg:gap-5">
              <div>
                <h3 class="text-lg font-semibold text-[#CE1D1F]">
                  {{ clientinfo.name }}
                </h3>
              </div>
            </div>
            <span
              v-if="isActive(index)"
              @click="slideNext"
              aria-label="next slide"
              :class="[
                'hidden lg:block absolute top-1/2 -translate-y-1/2 -right-5 z-30 border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13.87px] pr-[12.38px] py-3 cursor-pointer transition-opacity',
                activeIndex === ClientsInfo.length - 1
                  ? 'opacity-30 pointer-events-none'
                  : 'opacity-100 pointer-events-auto',
              ]"
            >
              <IconArrowDown color="white" class="-rotate-90" />
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="lg:hidden flex justify-center items-center gap-[10.5px] mt-8">
      <span
        @click="slidePrev"
        :class="[
          'border-[1.5px] rounded-full border-[#CE1D1F] pl-[12.37px] pr-[13.87px] py-3 cursor-pointer',
          activeIndex === 0
            ? 'opacity-30 pointer-events-none'
            : 'opacity-100 pointer-events-auto',
        ]"
      >
        <IconArrowDown color="#CE1D1F" class="rotate-90" />
      </span>
      <span
        @click="slideNext"
        :class="[
          'border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13.87px] pr-[12.38px] py-3 cursor-pointer',
          activeIndex === ClientsInfo.length - 1
            ? 'opacity-30 pointer-events-none'
            : 'opacity-100 pointer-events-auto',
        ]"
      >
        <IconArrowDown color="white" class="-rotate-90" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IconArrowDown from "~/components/icons/IconArrowDown.vue";

const { t } = useI18n();
const swiperInstance = ref<any>(null);
const activeIndex = ref(0);

const direction = ref<"forward" | "backward">("forward");
const autoplayTimer = ref<any>(null);

const ClientsInfo = [
  {
    url: "/images/clientsays/Review 1.webp",
    alt: t("reviews.review1"),
    title: "2-Hour Single Rider Can-Am X3",
    description: t("reviewDescriptions.description1"),
    name: t("names.name1"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 2.webp",
    alt: t("reviews.review2"),
    title: "4-Hour Buggy Adventure",
    description: t("reviewDescriptions.description2"),
    name: t("names.name2"),
    gender: "female",
  },
  {
    url: "/images/clientsays/Review 3.webp",
    alt: t("reviews.review3"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description3"),
    name: t("names.name3"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 4.webp",
    alt: t("reviews.review4"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description4"),
    name: t("names.name4"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 5.webp",
    alt: t("reviews.review5"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description5"),
    name: t("names.name5"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 6.webp",
    alt: t("reviews.review6"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description6"),
    name: t("names.name6"),
    gender: "female",
  },
  {
    url: "/images/clientsays/Review 7.webp",
    alt: t("reviews.review7"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description7"),
    name: t("names.name7"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 8.webp",
    alt: t("reviews.review8"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description8"),
    name: t("names.name8"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 9.webp",
    alt: t("reviews.review9"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description9"),
    name: t("names.name9"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 10.webp",
    alt: t("reviews.review10"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description10"),
    name: t("names.name10"),
    gender: "female",
  },
  {
    url: "/images/clientsays/Review 11.webp",
    alt: t("reviews.review11"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description11"),
    name: t("names.name11"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 12.webp",
    alt: t("reviews.review12"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description12"),
    name: t("names.name12"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 13.webp",
    alt: t("reviews.review13"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description13"),
    name: t("names.name13"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 14.webp",
    alt: t("reviews.review14"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description14"),
    name: t("names.name14"),
    gender: "male",
  },
  {
    url: "/images/clientsays/Review 15.webp",
    alt: t("reviews.review15"),
    title: "Desert Safari Ride",
    description: t("reviewDescriptions.description15"),
    name: t("names.name15"),
    gender: "male",
  },
];

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
  if (
    direction.value === "forward" &&
    activeIndex.value === ClientsInfo.length - 1
  ) {
    direction.value = "backward";
  } else if (direction.value === "backward" && activeIndex.value === 0) {
    direction.value = "forward";
  }
};

const isActive = (index: number) => {
  return index === activeIndex.value;
};

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value?.slideNext();
};

const slidePrev = () => {
  swiperInstance.value?.slidePrev();
};

const startAutoplay = () => {
  autoplayTimer.value = setInterval(() => {
    if (!swiperInstance.value) return;

    if (direction.value === "forward") {
      if (activeIndex.value < ClientsInfo.length - 1) {
        swiperInstance.value.slideNext();
      }
    } else {
      if (activeIndex.value > 0) {
        swiperInstance.value.slidePrev();
      }
    }
  }, 5000);
};

onMounted(() => {
  // startAutoplay();
});

onBeforeUnmount(() => {
  // clearInterval(autoplayTimer.value);
});
</script>

<style scoped>
.swiper-slide {
  transform: scale(0.94);
  transition: transform 0.5s ease;
  opacity: 0.6;
}
.swiper-slide-active {
  transform: scale(1.03);
  opacity: 1;
  z-index: 10;
}
</style>
