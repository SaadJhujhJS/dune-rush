<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div>
        <h2
          class="mb-5.5 xl:mb-12.5 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          {{ $t("dirtBikeRental.mainHeading") }}
          <i class="font-semibold text-[#CE1D1F]">
            {{ $t("dirtBikeRental.mainHeadingHighligheted") }}
          </i>
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="(bikeimages, index) in DirtBikeInfo"
          :key="index"
          :class="[
            'flex flex-col transition-all duration-500 bg-[#F0F0F0] rounded-3xl overflow-hidden',
          ]"
        >
          <img
            :src="bikeimages.url"
            :alt="bikeimages.alt"
            class="object-contain transition-all duration-300 ease-in-out hover:scale-105"
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
                    >{{ $t("dirtBikeRental.tourDuration") }} </span
                  >{{ bikeimages.time }}
                </h4>
              </div>
              <div class="flex items-center gap-[3.46px] text-[13.83px]">
                <IconUsers class="w-4.5 h-4.5" />
                <h4 class="font-normal text-[#0C0C0C]">
                  <span class="font-medium"
                    >{{ $t("dirtBikeRental.seats") }} </span
                  >{{ bikeimages.seats }}
                </h4>
              </div>
              <p class="text-sm font-normal text-[#0C0C0C]">
                {{ bikeimages.info }}
              </p>
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
                    class="w-full flex justify-center items-center gap-2.5 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-white cursor-pointer transition shine"
                  >
                    {{ $t("dirtBikeRental.bookNow") }}
                    <IconArrowRight />
                  </button>
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  aria-label="Read more about dirt bike rental"
                  title="Read more about dirt bike rental"
                  :to="`/adventures/dirtBikeRental/${bikeimages.slug}`"
                >
                  <button
                    class="w-full flex justify-center items-center gap-1 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-[#CE1D1F] cursor-pointer"
                  >
                    {{ $t("dirtBikeRental.readMore") }}
                    <span class="sr-only">{{ bikeimages.slug }}</span>
                    <IconArrowRight color="#CE1D1F" />
                  </button>
                </NuxtLinkLocale>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();

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
</script>
