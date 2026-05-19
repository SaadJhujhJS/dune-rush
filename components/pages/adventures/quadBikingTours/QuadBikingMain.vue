<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div>
        <h2
          class="mb-5.5 xl:mb-12.5 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          {{ $t("quadBikingTours.mainHeading") }}
          <i class="font-semibold text-[#CE1D1F]"> {{ $t("quadBikingTours.mainHeadingHighligheted") }}</i>
        </h2>
      </div>
      <div class="flex flex-col xl:flex-row gap-7.5">
        <!-- <div
          class="w-full h-auto lg:h-[500px] p-6 flex flex-col gap-7.5 bg-[#F0F0F0] rounded-[14px]"
        >
          <h6 class="text-[22px] font-bold text-[#191D23]"></h6>
          <div class="flex flex-col gap-4">
            <h6 class="text-lg font-semibold text-[#191D23]">{{ $t("quadBikingTours.filters") }}</h6>
            <div class="flex items-center gap-3 text-[#191D23]">
              <input type="checkbox" checked class="accent-red-600" />
              <label class="text-xs font-medium">{{ $t("quadBikingTours.lorem") }}</label>
            </div>
            <div class="flex items-center gap-3 text-[#191D23]">
              <input type="checkbox" class="accent-red-600" />
              <label class="text-xs font-medium">{{ $t("quadBikingTours.lorem") }}</label>
            </div>
            <div class="flex items-center gap-3 text-[#191D23]">
              <input type="checkbox" class="accent-red-600" />
              <label class="text-xs font-medium">{{ $t("quadBikingTours.lorem") }}</label>
            </div>
            <div class="flex items-center gap-3 text-[#191D23]">
              <input type="checkbox" class="accent-red-600" />
              <label class="text-xs font-medium">{{ $t("quadBikingTours.lorem") }}</label>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold text-[#191D23]">
                {{ $t("quadBikingTours.timeDuration") }}
              </h3>
              <IconArrowDown />
            </div>
            <DurationRange />
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold text-[#191D23]">{{ $t("quadBikingTours.priceRange") }}</h3>
              <IconArrowDown />
            </div>
            <PriceRange />
          </div>
        </div> -->
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
              class="object-cover transition-all duration-300 ease-in-out hover:scale-105"
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
                    <span class="font-medium">{{ $t("quadBikingTours.tourDuration") }} </span
                    >{{ bikeimages.time }}
                  </h4>
                </div>
                <div class="flex items-center gap-[3.46px] text-[13.83px]">
                  <IconUsers class="w-4.5 h-4.5" />
                  <h4 class="font-normal text-[#0C0C0C]">
                    <span class="font-medium">{{ $t("quadBikingTours.seats") }} </span
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
                    class="w-full flex justify-center items-center gap-2.5 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-white cursor-pointer transition shine"
                  >
                    {{ $t("quadBikingTours.bookNow") }}
                    <IconArrowRight />
                  </button>
                  </NuxtLinkLocale>
                  <NuxtLinkLocale
                  aria-label="Read more about quad biking tours"
                  title="Read more about quad biking tours"
                  :to="`/adventures/quadBikingTours/${bikeimages.slug}`"
                >
                  <button
                    class="w-full flex justify-center items-center gap-1 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-[#CE1D1F] cursor-pointer"
                  >
                    {{ $t("quadBikingTours.readMore") }} <span class="sr-only">{{ bikeimages.slug }}</span>
                    <IconArrowRight color="#CE1D1F" />
                  </button>
                  </NuxtLinkLocale>
                </div>
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
</script>
