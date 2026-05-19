<template>
  <BaseContainer>
    <div class="mb-10 md:mb-16 lg:mb-22.5 mt-12 md:mt-20 lg:mt-27.5">
      <h2
        class="text-center mb-5.5 xl:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("groupsCorporate.exploreOur") }}
        <i class="font-semibold text-[#CE1D1F]">
          {{ $t("groupsCorporate.eventsMedia") }}</i
        >
      </h2>
      <div class="relative">
        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{
            580: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
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
            v-for="(image, index) in images"
            :key="index"
            class="rounded-xl overflow-hidden"
            @click="openLightbox(index)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              decoding="async"
              format="webp"
              class="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <button
        aria-label="previous-slide"
        name="previous slide"
          :class="[
            'custom-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13px] pr-[12.38px] py-3 cursor-pointer transition-opacity duration-300',
            isBeginning ? 'opacity-30 pointer-events-none' : 'opacity-100',
          ]"
        >
          <IconArrowDown color="white" class="rotate-90" />
        </button>
        <button
        aria-label="next-slide"
        name="next slide"
          :class="[
            'custom-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 border-[1.5px] rounded-full border-[#CE1D1F] bg-[#CE1D1F] pl-[13px] pr-[12.38px] py-3 cursor-pointer transition-opacity duration-300',
            isEnd ? 'opacity-30 pointer-events-none' : 'opacity-100',
          ]"
        >
          <IconArrowDown color="white" class="-rotate-90" />
        </button>
      </div>
    </div>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imagesToShow.map((i) => i.src)"
      :index="indexRef"
      @hide="closeLightbox"
    />
  </BaseContainer>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import VueEasyLightbox from "vue-easy-lightbox";
const navigationOptions = {
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
};

type EventsGallery = {
  id: number;
  src: string;
  alt: string;
};

const images: EventsGallery[] = [
  { id: 1, src: "/images/eventmedia/1.webp", alt: "Image 1" },
  { id: 2, src: "/images/eventmedia/2.webp", alt: "Image 2" },
  { id: 3, src: "/images/eventmedia/3.webp", alt: "Image 3" },
  { id: 4, src: "/images/eventmedia/4.webp", alt: "Image 4" },
  { id: 5, src: "/images/eventmedia/5.webp", alt: "Image 5" },
  { id: 6, src: "/images/eventmedia/6.webp", alt: "Image 6" },
  { id: 7, src: "/images/eventmedia/7.webp", alt: "Image 7" },
  { id: 8, src: "/images/eventmedia/8.webp", alt: "Image 8" },
  { id: 9, src: "/images/eventmedia/9.webp", alt: "Image 9" },
  { id: 10, src: "/images/eventmedia/10.webp", alt: "Image 10" },
  { id: 11, src: "/images/eventmedia/11.webp", alt: "Image 11" },
  { id: 13, src: "/images/eventmedia/13.webp", alt: "Image 13" },
];
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const onSlideChange = (swiper: any) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};

const imagesToShow = ref<EventsGallery[]>([]);
const loadCount = ref(12);
onMounted(() => {
  imagesToShow.value = images.slice(0, loadCount.value);
});

const visibleRef = ref(false);
const indexRef = ref(0);

const openLightbox = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const closeLightbox = () => {
  visibleRef.value = false;
};
</script>
